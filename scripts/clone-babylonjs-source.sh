#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/BabylonJS/Babylon.js.git"
TARGET_DIR="babylonjs-source"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
CLONE_PATH="$PROJECT_ROOT/$TARGET_DIR"

VERSION=$(node -e "
  const pkg = require('$PROJECT_ROOT/package.json');
  const deps = ['@babylonjs/core', '@babylonjs/gui', '@babylonjs/loaders', '@babylonjs/inspector', '@babylonjs/addons'];
  const version = deps.map(d => pkg.dependencies?.[d]).find(v => v)?.replace(/^[\^~]/, '');
  if (!version) { console.error('No BabylonJS dependency found'); process.exit(1); }
  console.log(version);
")

echo "BabylonJS version: $VERSION"

if [ -d "$CLONE_PATH" ]; then
  echo "Directory $TARGET_DIR already exists. Fetching and checking out tag $VERSION..."
  git -C "$CLONE_PATH" fetch --tags
else
  echo "Cloning BabylonJS repository..."
  git clone --no-tags "$REPO_URL" "$CLONE_PATH"
  git -C "$CLONE_PATH" fetch --tags
fi

TAG="refs/tags/$VERSION"
if ! git -C "$CLONE_PATH" tag -l "$VERSION" | grep -q "$VERSION"; then
  echo "Tag $VERSION not found. Available tags:"
  git -C "$CLONE_PATH" tag -l | tail -20
  exit 1
fi

git -C "$CLONE_PATH" checkout "$VERSION"
echo "Checked out BabylonJS source at tag $VERSION in $TARGET_DIR/"
