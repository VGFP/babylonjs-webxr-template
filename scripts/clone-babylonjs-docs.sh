#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/BabylonJS/Documentation.git"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
TARGET_DIR="babylonjs-docs"
CLONE_PATH="$PROJECT_ROOT/$TARGET_DIR"

if [ -d "$CLONE_PATH" ]; then
  echo "Directory $TARGET_DIR already exists. Pulling latest..."
  git -C "$CLONE_PATH" pull --ff-only
else
  echo "Cloning BabylonJS Documentation repository..."
  git clone --depth 1 "$REPO_URL" "$CLONE_PATH"
fi

echo "Done. BabylonJS Documentation in $TARGET_DIR/"
