#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
BABYLON_DIR="$PROJECT_ROOT/babylonjs-source"
OUTPUT_DIR="$PROJECT_ROOT/babylonjs-docs"

if [ ! -d "$BABYLON_DIR" ]; then
  echo "Error: $BABYLON_DIR not found. Run clone-babylonjs-source.sh first."
  exit 1
fi

cd "$BABYLON_DIR"

if [ ! -d "node_modules" ]; then
  echo "Installing BabylonJS dependencies (this may take a while)..."
  npm install --ignore-scripts
fi

if ! npx typedoc --version &>/dev/null; then
  echo "Installing typedoc and typedoc-plugin-markdown..."
  npm install --no-save typedoc-plugin-markdown
fi

VERSION=$(node -e "
  const pkg = require('$PROJECT_ROOT/package.json');
  const v = (pkg.dependencies?.['@babylonjs/core'] || '').replace(/^[\^~]/, '');
  console.log(v);
")

mkdir -p "$OUTPUT_DIR"

echo "Generating markdown documentation for BabylonJS $VERSION..."
echo "Output: $OUTPUT_DIR"

npx typedoc \
  --entryPoints packages/dev/core/src/index.ts \
  --entryPoints packages/dev/gui/src/index.ts \
  --entryPoints packages/dev/loaders/src/index.ts \
  --entryPoints packages/dev/materials/src/index.ts \
  --entryPoints packages/dev/serializers/src/index.ts \
  --plugin typedoc-plugin-markdown \
  --out "$OUTPUT_DIR" \
  --readme none \
  --includeVersion \
  --skipErrorChecking \
  --compilerOptions.skipLibCheck \
  --excludePrivate \
  --excludeProtected \
  --excludeInternal

echo "Done. Markdown docs generated in $OUTPUT_DIR/"
