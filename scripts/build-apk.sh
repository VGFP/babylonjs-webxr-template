#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

log()  { echo -e "${GREEN}[build-apk]${NC} $*"; }
warn() { echo -e "${YELLOW}[build-apk]${NC} WARNING: $*" >&2; }
err()  { echo -e "${RED}[build-apk]${NC} ERROR: $*" >&2; }
info() { echo -e "${CYAN}[build-apk]${NC} $*"; }

usage() {
  cat <<EOF
Usage: $(basename "$0") [OPTIONS]

Build a Meta Quest APK from the PWA using Bubblewrap.

Options:
  --manifest URL        Manifest URL (default: auto-detected or local file served)
  --keystore PATH       Path to existing .keystore file
  --key-alias ALIAS     Keystore alias (default: androiddebugkey)
  --store-pass PASS     Keystore store password (default: android)
  --key-pass PASS       Key password (default: android)
  --output DIR          Output directory for APK (default: ./dist-apk)
  --app-version NAME    App version name, e.g. "1.0.0" (default: 1.0.0)
  --app-version-code N  App version code (default: 1)
  --setup               Run setup/prerequisites check before building
  --skip-pwa-validation Skip PWA validation checks
  -h, --help            Show this help

Environment variables (override flags):
  KEYSTORE_PATH         Path to keystore
  KEY_ALIAS             Keystore alias
  STORE_PASSWORD        Store password
  KEY_PASSWORD          Key password
  MANIFEST_URL          Manifest URL
EOF
  exit 0
}

MANIFEST_URL=""
KEYSTORE_PATH=""
KEY_ALIAS=""
STORE_PASSWORD=""
KEY_PASSWORD=""
OUTPUT_DIR=""
APP_VERSION="1.0.0"
APP_VERSION_CODE="1"
DO_SETUP=false
SKIP_PWA_VALIDATION=true

while [[ $# -gt 0 ]]; do
  case "$1" in
    --manifest)        MANIFEST_URL="$2"; shift 2 ;;
    --keystore)        KEYSTORE_PATH="$2"; shift 2 ;;
    --key-alias)       KEY_ALIAS="$2"; shift 2 ;;
    --store-pass)      STORE_PASSWORD="$2"; shift 2 ;;
    --key-pass)        KEY_PASSWORD="$2"; shift 2 ;;
    --output)          OUTPUT_DIR="$2"; shift 2 ;;
    --app-version)     APP_VERSION="$2"; shift 2 ;;
    --app-version-code) APP_VERSION_CODE="$2"; shift 2 ;;
    --setup)           DO_SETUP=true; shift ;;
    --skip-pwa-validation) SKIP_PWA_VALIDATION=true; shift ;;
    -h|--help)         usage ;;
    *) err "Unknown option: $1"; usage ;;
  esac
done

KEYSTORE_PATH="${KEYSTORE_PATH:-${KEYSTORE_PATH_ENV:-}}"
KEY_ALIAS="${KEY_ALIAS:-${KEY_ALIAS:-androiddebugkey}}"
STORE_PASSWORD="${STORE_PASSWORD:-${STORE_PASSWORD:-android}}"
KEY_PASSWORD="${KEY_PASSWORD:-${KEY_PASSWORD:-android}}"
OUTPUT_DIR="${OUTPUT_DIR:-${PROJECT_ROOT}/dist-apk}"

if [ "$DO_SETUP" = true ]; then
  log "Running prerequisites setup ..."
  bash "$SCRIPT_DIR/setup-android-tools.sh"
fi

BUILD_DIR=$(mktemp -d "${TMPDIR:-/tmp}/pwa-build.XXXXXX")
trap 'rm -rf "$BUILD_DIR"' EXIT

if [ -z "$KEYSTORE_PATH" ]; then
  warn "No keystore provided — generating a debug keystore."
  KEYSTORE_PATH="${HOME}/.local/share/babylonxr/debug.keystore"
  mkdir -p "$(dirname "$KEYSTORE_PATH")"
  keytool -genkeypair \
    -keystore  "$KEYSTORE_PATH" \
    -alias     "$KEY_ALIAS" \
    -keyalg    RSA \
    -keysize   2048 \
    -validity  10000 \
    -storepass "$STORE_PASSWORD" \
    -keypass   "$KEY_PASSWORD" \
    -dname     "CN=Debug, OU=Debug, O=Debug, L=Debug, ST=Debug, C=US" \
    -noprompt
  log "Debug keystore created at $KEYSTORE_PATH"
fi

MANIFEST_SRC="${MANIFEST_URL:-}"
if [ -z "$MANIFEST_SRC" ]; then
  MANIFEST_SRC="https://raw.githubusercontent.com/VGFP/babylonjs-webxr-template/refs/heads/feat/generate-apk-ci/public/manifest.webmanifest"
  log "Using default manifest URL"
fi

info "Manifest:  $MANIFEST_SRC"
info "Keystore:  $KEYSTORE_PATH"
info "Key alias: $KEY_ALIAS"
info "Output:    $OUTPUT_DIR"
echo ""

if [ -f "${PROJECT_ROOT}/twa-manifest.json" ]; then
  log "Found twa-manifest.json — running bubblewrap update"
  cp "${PROJECT_ROOT}/twa-manifest.json" "$BUILD_DIR/"
  cd "$BUILD_DIR"
  bubblewrap update --skipPwaValidation
else
  log "Running bubblewrap init ..."
  cd "$BUILD_DIR"

  PWA_FLAG=""
  if [ "$SKIP_PWA_VALIDATION" = true ]; then
    PWA_FLAG="--skipPwaValidation"
  fi

  bubblewrap init \
    --manifest="$MANIFEST_SRC" \
    --directory=. \
    --metaquest \
    --signingKeyPath="$KEYSTORE_PATH" \
    --signingKeyAlias="$KEY_ALIAS" \
    $PWA_FLAG \
    --appName="BabylonJS WebXR" \
    --appVersionName="$APP_VERSION" \
    --appVersionCode="$APP_VERSION_CODE" \
    --backgroundColor="#000000" \
    --themeColor="#4B0082" \
    --navigationColor="#000000" \
    --navigationColorDark="#000000" \
    --navigationDividerColor="#000000" \
    --navigationDividerColorDark="#000000" \
    --enableNotifications=false \
    --startUrl="/" \
    --splashScreenFadeOutDuration=0

  cp twa-manifest.json "${PROJECT_ROOT}/twa-manifest.json"
  log "Saved twa-manifest.json to project root"
fi

log "Building APK ..."
bubblewrap build \
  --skipPwaValidation \
  --signingKeyPath="$KEYSTORE_PATH" \
  --signingKeyAlias="$KEY_ALIAS" \
  --signingKeyPassword="$KEY_PASSWORD" \
  --signingStorePassword="$STORE_PASSWORD"

APK_FILE="$BUILD_DIR/app-release-signed.apk"
if [ ! -f "$APK_FILE" ]; then
  err "APK not found at expected path: $APK_FILE"
  err "Check build output above for errors."
  exit 1
fi

mkdir -p "$OUTPUT_DIR"
cp "$APK_FILE" "$OUTPUT_DIR/"
APK_NAME="app-release-signed.apk"
if [ "$KEY_ALIAS" = "androiddebugkey" ]; then
  APK_NAME="app-debug-signed.apk"
  warn "APK is DEBUG-SIGNED. Do not submit to the Meta Horizon Store."
else
  log "APK is PRODUCTION-SIGNED."
fi
mv "$OUTPUT_DIR/app-release-signed.apk" "$OUTPUT_DIR/$APK_NAME"

APK_SIZE=$(du -h "$OUTPUT_DIR/$APK_NAME" | cut -f1)
echo ""
log "Build complete!"
info "APK: $OUTPUT_DIR/$APK_NAME ($APK_SIZE)"
