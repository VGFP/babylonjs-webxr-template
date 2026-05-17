#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

MCP_URL="https://mcp.docfork.com/mcp"
MCP_NAME="docfork"

BOLD='\033[1m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
NC='\033[0m'

info()  { echo -e "${CYAN}>>> $*${NC}"; }
ok()    { echo -e "${GREEN}✔ $*${NC}"; }

usage() {
  cat <<EOF
Usage: $(basename "$0") [tool ...]

Install CLI AI coding tools and configure the DocFork MCP server.

Available tools:
  claude     Install Claude Code (@anthropic-ai/claude-code)
  opencode   Install OpenCode (opencode)
  kilo       Install Kilo Code (kilocode)
  all        Install all three (default)

Examples:
  $(basename "$0")              # install everything
  $(basename "$0") claude       # install only Claude Code
  $(basename "$0") claude kilo  # install Claude Code + Kilo Code
EOF
}

# ── Tool installers ──────────────────────────────────────────────────────────

install_claude() {
  info "Installing Claude Code..."
  npm install -g @anthropic-ai/claude-code
  ok "Claude Code installed ($(claude --version 2>/dev/null || echo 'ok'))"

  local mcp_file="$PROJECT_DIR/.mcp.json"
  if [ ! -f "$mcp_file" ]; then
    echo '{"mcpServers":{"'"$MCP_NAME"'":{"url":"'"$MCP_URL"'"}}}' > "$mcp_file"
    ok "Created .mcp.json with DocFork MCP server"
  else
    ok ".mcp.json already exists – skipped (add MCP server manually if needed)"
  fi
}

install_opencode() {
  info "Installing OpenCode..."
  npm install -g opencode-ai
  ok "OpenCode installed"

  local cfg="$PROJECT_DIR/opencode.json"
  if [ ! -f "$cfg" ]; then
    cat > "$cfg" <<EOF
{
  "mcp": {
    "$MCP_NAME": {
      "type": "url",
      "url": "$MCP_URL"
    }
  }
}
EOF
    ok "Created opencode.json with DocFork MCP server"
  else
    ok "opencode.json already exists – skipped"
  fi
}

install_kilo() {
  info "Installing Kilo Code..."
  npm add -g @kilocode/cli
  ok "Kilo Code installed"

  info "Installing TypeScript language server..."
  npm install -g typescript-language-server typescript
  ok "TypeScript language server installed"

  local mcp_entry='"'"$MCP_NAME"'":{"type":"remote","url":"'"$MCP_URL"'"}'
  local lsp_entry='"typescript":{"command":["typescript-language-server","--stdio"],"extensions":[".ts",".tsx",".js",".jsx",".mts",".cts",".mjs",".cjs"]}'
  local cfg

  for cfg in "$PROJECT_DIR/.kilo/kilo.json" "$PROJECT_DIR/kilo.json"; do
    if [ ! -f "$cfg" ]; then
      local cfg_dir
      cfg_dir="$(dirname "$cfg")"
      mkdir -p "$cfg_dir"
      cat > "$cfg" <<EOF
{
  "mcp": {
    $mcp_entry
  },
  "lsp": {
    $lsp_entry
  }
}
EOF
      ok "Created ${cfg#"$PROJECT_DIR/"} with DocFork MCP server and TypeScript LSP"
      return
    fi
  done

  ok "kilo.json and .kilo/kilo.json already exist – skipped (add MCP/LSP config manually if needed)"
}

# ── Main ─────────────────────────────────────────────────────────────────────

TOOLS=()
if [ $# -eq 0 ]; then
  TOOLS=(claude opencode kilo)
else
  for arg in "$@"; do
    case "$arg" in
      all)    TOOLS=(claude opencode kilo) ;;
      claude|opencode|kilo) TOOLS+=("$arg") ;;
      -h|--help|help) usage; exit 0 ;;
      *) echo "Unknown tool: $arg"; usage; exit 1 ;;
    esac
  done
fi

echo -e "${BOLD}Setting up AI coding tools in devcontainer${NC}"
echo ""

for tool in "${TOOLS[@]}"; do
  case "$tool" in
    claude)   install_claude   ;;
    opencode) install_opencode ;;
    kilo)     install_kilo     ;;
  esac
  echo ""
done

echo -e "${BOLD}Done! MCP server '$MCP_NAME' → $MCP_URL${NC}"
