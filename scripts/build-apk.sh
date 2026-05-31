#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

if [ -f "${PROJECT_ROOT}/.env" ]; then
  set -a
  source "${PROJECT_ROOT}/.env"
  set +a
fi

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

Environment variables (loaded from .env if present):
  HOST                  Deployment domain (e.g. example.com)
  START_URL             Path prefix (default: /)
  APP_NAME              Full app name
  SHORT_NAME            Launcher name
  PKG_NAME              Android package ID
  APP_VERSION           Version name (default: 1.0.0)
  APP_VERSION_CODE      Version code (default: 1)
  KEYSTORE_PATH         Path to keystore
  KEY_ALIAS             Keystore alias (default: androiddebugkey)
  STORE_PASSWORD        Store password (default: android)
  KEY_PASSWORD          Key password (default: android)
  MANIFEST_URL          Manifest URL (overrides HOST)
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

KEYSTORE_PATH="${KEYSTORE_PATH:-}"
KEY_ALIAS="${KEY_ALIAS:-androiddebugkey}"
STORE_PASSWORD="${STORE_PASSWORD:-android}"
KEY_PASSWORD="${KEY_PASSWORD:-android}"
OUTPUT_DIR="${OUTPUT_DIR:-${PROJECT_ROOT}/dist-apk}"

if [ "$DO_SETUP" = true ]; then
  log "Running prerequisites setup ..."
  bash "$SCRIPT_DIR/setup-android-tools.sh"
fi

for cmd in java keytool bubblewrap; do
  if ! command -v "$cmd" &>/dev/null; then
    err "'$cmd' not found. Run:  bash scripts/setup-android-tools.sh"
    exit 1
  fi
done

if [ -z "${JAVA_HOME:-}" ]; then
  export JAVA_HOME
  JAVA_HOME="$(dirname "$(dirname "$(readlink -f "$(which java)")")")"
fi

if [ -z "${ANDROID_SDK_ROOT:-}" ]; then
  BW_CONFIG="${HOME}/.bubblewrap/config.json"
  if [ -f "$BW_CONFIG" ]; then
    ANDROID_SDK_ROOT=$(node -e "console.log(JSON.parse(require('fs').readFileSync('$BW_CONFIG','utf8')).androidSdkPath)")
    export ANDROID_SDK_ROOT
  elif [ -d "${HOME}/Android/Sdk" ]; then
    export ANDROID_SDK_ROOT="${HOME}/Android/Sdk"
  else
    err "ANDROID_SDK_ROOT not set and no Android SDK found. Run: bash scripts/setup-android-tools.sh"
    exit 1
  fi
fi

BUILD_DIR=$(mktemp -d "${TMPDIR:-/tmp}/pwa-build.XXXXXX")
trap 'rm -rf "$BUILD_DIR"' EXIT

if [ -z "$KEYSTORE_PATH" ]; then
  warn "No keystore provided - generating a debug keystore."
  KEYSTORE_PATH="${HOME}/.local/share/babylonxr/debug.keystore"
  if [ ! -f "$KEYSTORE_PATH" ]; then
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
  else
    log "Reusing existing debug keystore at $KEYSTORE_PATH"
  fi
fi

MANIFEST_SRC="${MANIFEST_URL:-}"
HOST="${HOST:-}"
START_URL="${START_URL:-/}"

if [ -n "$MANIFEST_SRC" ]; then
  HOST=$(echo "$MANIFEST_SRC" | sed -E 's|https?://([^/]+).*|\1|')
fi

MANIFEST_FILE="${PROJECT_ROOT}/public/manifest.webmanifest"
if [ ! -f "$MANIFEST_FILE" ]; then
  err "No manifest found at $MANIFEST_FILE. Create one or pass --manifest URL."
  exit 1
fi

APP_NAME="${APP_NAME:-$(node -e "const m=JSON.parse(require('fs').readFileSync('$MANIFEST_FILE','utf8')); process.stdout.write(m.name || 'BabylonJS WebXR')")}"
SHORT_NAME="${SHORT_NAME:-$(node -e "const m=JSON.parse(require('fs').readFileSync('$MANIFEST_FILE','utf8')); process.stdout.write(m.short_name || 'BabylonXR')")}"
PKG_NAME="${PKG_NAME:-$(node -e "const m=JSON.parse(require('fs').readFileSync('$MANIFEST_FILE','utf8')); process.stdout.write(m.ovr_package_name || 'com.devlocal.babylonxr')")}"

if [ -z "$HOST" ]; then
  warn "No HOST set. Using placeholder host example.com"
  warn "Set HOST in .env or pass --manifest to your deployed PWA URL."
  HOST="example.com"
fi

info "Host:      $HOST"
info "App:       $APP_NAME"
info "Package:   $PKG_NAME"
info "Keystore:  $KEYSTORE_PATH"
info "Key alias: $KEY_ALIAS"
info "Output:    $OUTPUT_DIR"
echo ""

if [ -f "${PROJECT_ROOT}/twa-manifest.json" ]; then
  log "Found twa-manifest.json - running bubblewrap update"
  cp "${PROJECT_ROOT}/twa-manifest.json" "$BUILD_DIR/"
  cd "$BUILD_DIR"
  bubblewrap update --skipPwaValidation
else
  log "Generating twa-manifest.json ..."
  cd "$BUILD_DIR"

  KEYSTORE_SHA256=$(keytool -exportcert -keystore "$KEYSTORE_PATH" -alias "$KEY_ALIAS" -storepass "$STORE_PASSWORD" 2>/dev/null | openssl x509 -inform der -outform der 2>/dev/null | openssl dgst -sha256 -binary | openssl base64 | tr -d '\n' || echo "")

  cat > twa-manifest.json <<TWAEOF
{
  "packageId": "$PKG_NAME",
  "host": "$HOST",
  "name": "$APP_NAME",
  "launcherName": "$SHORT_NAME",
  "display": "fullscreen",
  "themeColor": "#4B0082",
  "navigationColor": "#000000",
  "navigationColorDark": "#000000",
  "navigationDividerColor": "#000000",
  "navigationDividerColorDark": "#000000",
  "backgroundColor": "#000000",
  "enableNotifications": false,
  "startUrl": "$START_URL",
  "iconUrl": "https://$HOST${START_URL%/}icons/icon-512.png",
  "splashScreenFadeOutDuration": 0,
  "signingKey": {
    "path": "$KEYSTORE_PATH",
    "alias": "$KEY_ALIAS"
  },
  "appVersionName": "$APP_VERSION",
  "appVersionCode": $APP_VERSION_CODE,
  "shortcuts": [],
  "generatorApp": "bubblewrap-cli",
  "webManifestUrl": "https://$HOST${START_URL%/}/manifest.webmanifest",
  "fallbackType": "customtabs",
  "features": {},
  "alphaDependencies": {
    "enabled": false
  },
  "shareTarget": {},
  "orientation": "landscape",
  "fingerprints": [],
  "additionalTrustedOrigins": [],
  "retainedBubbles": [],
  "metaquest": true
}
TWAEOF

  if [ -n "$KEYSTORE_SHA256" ]; then
    log "Signing key SHA256: $KEYSTORE_SHA256"
  fi

  cp twa-manifest.json "${PROJECT_ROOT}/twa-manifest.json"
  log "Saved twa-manifest.json to project root"
fi

log "Building APK ..."
log "Updating bubblewrap config (jdkPath=$JAVA_HOME, androidSdkPath=$ANDROID_SDK_ROOT) ..."
mkdir -p "${HOME}/.bubblewrap"
printf '{"jdkPath":"%s","androidSdkPath":"%s"}\n' "$JAVA_HOME" "$ANDROID_SDK_ROOT" \
  > "${HOME}/.bubblewrap/config.json"

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
