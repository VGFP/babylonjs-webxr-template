#!/usr/bin/env bash
set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log()  { echo -e "${GREEN}[setup]${NC} $*"; }
warn() { echo -e "${YELLOW}[setup]${NC} WARNING: $*" >&2; }
err()  { echo -e "${RED}[setup]${NC} ERROR: $*" >&2; }

require_cmd() {
  if ! command -v "$1" &>/dev/null; then
    err "$1 is not installed. Please install it first."
    exit 1
  fi
}

check_java() {
  if command -v java &>/dev/null; then
    local ver
    ver=$(java -version 2>&1 | head -1 | grep -oP '\d+' | head -1)
    if [ "$ver" -ge 17 ]; then
      log "Java $(java -version 2>&1 | head -1) — OK"
      return 0
    fi
    warn "Java $ver found, but version 17+ is required."
  fi

  log "Installing Temurin JDK 17 ..."
  if command -v apt-get &>/dev/null; then
    sudo apt-get update -qq
    sudo apt-get install -y -qq wget apt-transport-https gpg
    wget -qO - https://packages.adoptium.net/artifactory/api/gpg/key/public \
      | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/adoptium.gpg
    echo "deb https://packages.adoptium.net/artifactory/deb $(lsb_release -cs) main" \
      | sudo tee /etc/apt/sources.list.d/adoptium.list >/dev/null
    sudo apt-get update -qq
    sudo apt-get install -y -qq temurin-17-jdk
  elif command -v brew &>/dev/null; then
    brew install --cask temurin
  else
    err "Cannot auto-install Java. Install Temurin JDK 17 manually: https://adoptium.net/"
    exit 1
  fi

  export JAVA_HOME="${JAVA_HOME:-$(dirname "$(dirname "$(readlink -f "$(which java)")")")"}"
  log "Java $(java -version 2>&1 | head -1) — installed"
}

check_android_sdk() {
  if [ -n "${ANDROID_SDK_ROOT:-}" ] && [ -d "$ANDROID_SDK_ROOT" ]; then
    log "Android SDK at $ANDROID_SDK_ROOT — OK"
    return 0
  fi

  if [ -d "${HOME}/Android/Sdk" ]; then
    export ANDROID_SDK_ROOT="${HOME}/Android/Sdk"
    log "Android SDK at $ANDROID_SDK_ROOT — OK"
    return 0
  fi

  log "Installing Android SDK command-line tools ..."
  local cmdtools_url="https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip"
  local sdk_dir="${HOME}/Android/Sdk"
  local tmpdir
  tmpdir=$(mktemp -d)

  mkdir -p "$sdk_dir"
  wget -qO "$tmpdir/cmdtools.zip" "$cmdtools_url"
  unzip -q -d "$tmpdir/cmdline-tools" "$tmpdir/cmdtools.zip"
  mkdir -p "$sdk_dir/cmdline-tools"
  mv "$tmpdir/cmdline-tools/cmdline-tools" "$sdk_dir/cmdline-tools/latest"
  rm -rf "$tmpdir"

  export ANDROID_SDK_ROOT="$sdk_dir"
  log "Android SDK installed to $ANDROID_SDK_ROOT"

  log "Accepting licenses and installing build-tools, platforms ..."
  yes | "$ANDROID_SDK_ROOT/cmdline-tools/latest/bin/sdkmanager" --licenses >/dev/null 2>&1 || true
  "$ANDROID_SDK_ROOT/cmdline-tools/latest/bin/sdkmanager" "build-tools;34.0.0" "platforms;android-34" >/dev/null 2>&1
}

check_node() {
  if command -v node &>/dev/null; then
    local ver
    ver=$(node -v | grep -oP '\d+' | head -1)
    if [ "$ver" -ge 18 ]; then
      log "Node $(node -v) — OK"
      return 0
    fi
  fi
  err "Node.js 18+ is required. Install via https://nodejs.org/ or nvm."
  exit 1
}

check_bubblewrap() {
  if command -v bubblewrap &>/dev/null; then
    log "bubblewrap $(bubblewrap --version 2>/dev/null || echo 'installed') — OK"
    return 0
  fi

  log "Installing @bubblewrap/cli globally ..."
  npm install -g @bubblewrap/cli
  log "bubblewrap installed"
}

seed_bubblewrap_config() {
  mkdir -p "${HOME}/.bubblewrap"
  local jdk_path="${JAVA_HOME:-$(dirname "$(dirname "$(readlink -f "$(which java)")")")"}"
  local sdk_path="${ANDROID_SDK_ROOT:-${HOME}/Android/Sdk}"
  printf '{"jdkPath":"%s","androidSdkPath":"%s"}\n' "$jdk_path" "$sdk_path" \
    > "${HOME}/.bubblewrap/config.json"
  log "Bubblewrap config seeded at ~/.bubblewrap/config.json"
}

main() {
  log "Checking prerequisites for Meta Quest APK build ..."
  check_java
  check_android_sdk
  check_node
  check_bubblewrap
  seed_bubblewrap_config
  log "All prerequisites satisfied."
  echo ""
  echo "  JAVA_HOME=$JAVA_HOME"
  echo "  ANDROID_SDK_ROOT=$ANDROID_SDK_ROOT"
}

main "$@"
