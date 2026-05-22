#!/usr/bin/env bash
set -euo pipefail

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log()  { echo -e "${GREEN}[setup]${NC} $*"; }
warn() { echo -e "${YELLOW}[setup]${NC} WARNING: $*" >&2; }

log "Installing @bubblewrap/cli ..."
npm install -g @bubblewrap/cli

log "Running bubblewrap init (downloads Android SDK) ..."
bubblewrap init \
  --manifest="https://example.com/manifest.webmanifest" \
  --directory=/tmp/bubblewrap-setup \
  --metaquest \
  --skipPwaValidation || true
rm -rf /tmp/bubblewrap-setup

log "Installing Temurin JDK 17 ..."
sudo apt-get update -qq
sudo apt-get install -y -qq wget apt-transport-https gpg
wget -qO - https://packages.adoptium.net/artifactory/api/gpg/key/public \
  | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/adoptium.gpg
echo "deb https://packages.adoptium.net/artifactory/deb $(lsb_release -cs) main" \
  | sudo tee /etc/apt/sources.list.d/adoptium.list >/dev/null
sudo apt-get update -qq
sudo apt-get install -y -qq temurin-17-jdk

log "All prerequisites installed."
