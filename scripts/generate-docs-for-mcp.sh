#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
BABYLON_SOURCE="$PROJECT_ROOT/babylonjs-source"
BABYLON_DOCS="$PROJECT_ROOT/babylonjs-docs"
OUTPUT_DIR="$PROJECT_ROOT/docs-for-mcp"

VERSION=$(node -e "
  const pkg = require('$PROJECT_ROOT/package.json');
  const v = (pkg.dependencies?.['@babylonjs/core'] || '').replace(/^[\^~]/, '');
  if (!v) { console.error('No @babylonjs/core found'); process.exit(1); }
  console.log(v);
")

echo "=== Generating docs-for-mcp for BabylonJS $VERSION ==="

rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR/api" "$OUTPUT_DIR/examples"

# ─── Part 0: Ensure Documentation repo exists ───
if [ ! -d "$BABYLON_DOCS" ]; then
    echo ">>> Documentation repo not found. Run scripts/clone-babylonjs-docs.sh first."
    exit 1
fi

# ─── Part 1: Copy examples/guides from Documentation repo ───
echo ""
echo ">>> Copying guides and examples from Documentation repo..."

copy_md_files() {
    local src_dir="$1"
    local dest_dir="$2"
    find "$src_dir" -name "*.md" | while read -r file; do
        local rel="${file#$src_dir/}"
        local target="$dest_dir/$rel"
        mkdir -p "$(dirname "$target")"
        cp "$file" "$target"
    done
}

copy_md_files "$BABYLON_DOCS/content/features" "$OUTPUT_DIR/examples/features"
copy_md_files "$BABYLON_DOCS/content/setup" "$OUTPUT_DIR/examples/setup"
copy_md_files "$BABYLON_DOCS/content/guidedLearning" "$OUTPUT_DIR/examples/guidedLearning"
copy_md_files "$BABYLON_DOCS/content/journey" "$OUTPUT_DIR/examples/journey"
copy_md_files "$BABYLON_DOCS/content/addons" "$OUTPUT_DIR/examples/addons"
copy_md_files "$BABYLON_DOCS/content/toolsAndResources" "$OUTPUT_DIR/examples/toolsAndResources"

EXAMPLE_COUNT=$(find "$OUTPUT_DIR/examples" -name "*.md" | wc -l)
echo "    Copied $EXAMPLE_COUNT example/guide files."

# ─── Part 2: Generate API docs via TypeDoc ───
echo ""
echo ">>> Generating API docs via TypeDoc..."

if [ ! -d "$BABYLON_SOURCE" ]; then
    echo "ERROR: $BABYLON_SOURCE not found. Run clone-babylonjs-source.sh first."
    exit 1
fi

cd "$BABYLON_SOURCE"

if [ ! -d "node_modules" ]; then
    echo "    Installing BabylonJS dependencies..."
    npm install --ignore-scripts 2>&1 | tail -3
fi

if ! npx typedoc --version &>/dev/null || [ ! -d "node_modules/typedoc-plugin-markdown" ]; then
    echo "    Installing typedoc-plugin-markdown..."
    npm install --no-save typedoc-plugin-markdown 2>&1 | tail -3
fi

ENTRY_POINTS=(
    packages/dev/core/src/index.ts
    packages/dev/gui/src/index.ts
    packages/dev/loaders/src/index.ts
    packages/dev/materials/src/index.ts
    packages/dev/serializers/src/index.ts
)

ENTRY_ARGS=()
for ep in "${ENTRY_POINTS[@]}"; do
    if [ -f "$ep" ]; then
        ENTRY_ARGS+=(--entryPoints "$ep")
    else
        echo "    WARNING: $ep not found, skipping."
    fi
done

echo "    Running TypeDoc (this will take several minutes)..."
npx typedoc \
    "${ENTRY_ARGS[@]}" \
    --plugin typedoc-plugin-markdown \
    --out "$OUTPUT_DIR/api" \
    --readme none \
    --includeVersion \
    --skipErrorChecking \
    --excludePrivate \
    --excludeProtected \
    --excludeInternal \
    --excludeExternals \
    --tsconfig "$BABYLON_SOURCE/tsconfig.json" \
    2>&1 | tail -5

API_COUNT=$(find "$OUTPUT_DIR/api" -name "*.md" | wc -l)
echo "    Generated $API_COUNT API markdown files."

# ─── Part 3: Create index ───
echo ""
echo ">>> Creating index..."

cat > "$OUTPUT_DIR/README.md" << EOF
# BabylonJS Documentation (v${VERSION})

Generated on $(date -u +"%Y-%m-%d").

## Structure

- **api/** - Auto-generated API reference from TypeScript source via TypeDoc.
- **examples/** - Guides, tutorials, and examples from the BabylonJS Documentation repo.
  - **examples/features/** - Feature guides and deep dives (cameras, lights, materials, meshes, etc.)
  - **examples/setup/** - Setup guides (HTML starter, framework packages, templates)
  - **examples/journey/** - Getting started journey (first scene, learning the docs)
  - **examples/guidedLearning/** - Guided learning paths
  - **examples/addons/** - Addon documentation
  - **examples/toolsAndResources/** - Tools and resources

## Stats

- API docs: ${API_COUNT} files
- Examples/guides: ${EXAMPLE_COUNT} files
EOF

echo ""
echo "=== Done! Output in $OUTPUT_DIR/ ==="
echo "    API:       $API_COUNT markdown files"
echo "    Examples:  $EXAMPLE_COUNT markdown files"
echo "    Total:     $((API_COUNT + EXAMPLE_COUNT)) files"

# ─── Part 4: Clean up intermediate repos ───
echo ""
echo ">>> Cleaning up intermediate repos..."
rm -rf "$BABYLON_SOURCE" "$BABYLON_DOCS"
echo "    Removed babylonjs-source/ and babylonjs-docs/"
