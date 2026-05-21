#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

MCP_NAME="babylonjs-docs"

BOLD='\033[1m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
NC='\033[0m'

info()  { echo -e "${CYAN}>>> $*${NC}"; }
ok()    { echo -e "${GREEN}✔ $*${NC}"; }

usage() {
  cat <<EOF
Usage: $(basename "$0") [tool ...]

Install CLI AI coding tools and configure the BabylonJS Docs MCP server.

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

add_mcp_claude() {
  local mcp_file="$PROJECT_DIR/.mcp.json"
  if [ ! -f "$mcp_file" ]; then
    cat > "$mcp_file" <<EOF
{
  "mcpServers": {
    "$MCP_NAME": {
      "command": "node",
      "args": ["mcp/server.mjs"]
    }
  }
}
EOF
    ok "Created .mcp.json with BabylonJS Docs MCP server"
  else
    if grep -q "$MCP_NAME" "$mcp_file" 2>/dev/null; then
      ok ".mcp.json already has $MCP_NAME – skipped"
    else
      info "Adding $MCP_NAME to existing .mcp.json"
      node -e "
        const fs = require('fs');
        const f = '$mcp_file';
        const cfg = JSON.parse(fs.readFileSync(f, 'utf8'));
        cfg.mcpServers = cfg.mcpServers || {};
        cfg.mcpServers['$MCP_NAME'] = { command: 'node', args: ['mcp/server.mjs'] };
        fs.writeFileSync(f, JSON.stringify(cfg, null, 2) + '\n');
      "
      ok "Added $MCP_NAME to .mcp.json"
    fi
  fi
}

add_mcp_opencode() {
  local cfg="$PROJECT_DIR/opencode.json"
  if [ ! -f "$cfg" ]; then
    cat > "$cfg" <<EOF
{
  "mcp": {
    "$MCP_NAME": {
      "type": "local",
      "command": ["node", "mcp/server.mjs"]
    }
  }
}
EOF
    ok "Created opencode.json with BabylonJS Docs MCP server"
  else
    if grep -q "$MCP_NAME" "$cfg" 2>/dev/null; then
      ok "opencode.json already has $MCP_NAME – skipped"
    else
      info "Adding $MCP_NAME to existing opencode.json"
      node -e "
        const fs = require('fs');
        const f = '$cfg';
        const cfg = JSON.parse(fs.readFileSync(f, 'utf8'));
        cfg.mcp = cfg.mcp || {};
        cfg.mcp['$MCP_NAME'] = { type: 'local', command: ['node', 'mcp/server.mjs'] };
        fs.writeFileSync(f, JSON.stringify(cfg, null, 2) + '\n');
      "
      ok "Added $MCP_NAME to opencode.json"
    fi
  fi
}

add_mcp_kilo() {
  local cfg
  for cfg in "$PROJECT_DIR/kilo.json" "$PROJECT_DIR/.kilo/kilo.json"; do
    if [ -f "$cfg" ]; then
      if grep -q "$MCP_NAME" "$cfg" 2>/dev/null; then
        ok "${cfg#"$PROJECT_DIR/"} already has $MCP_NAME – skipped"
        return
      fi
      info "Adding $MCP_NAME to ${cfg#"$PROJECT_DIR/"}"
      node -e "
        const fs = require('fs');
        const f = '$cfg';
        const cfg = JSON.parse(fs.readFileSync(f, 'utf8'));
        cfg.mcp = cfg.mcp || {};
        cfg.mcp['$MCP_NAME'] = { type: 'local', command: ['node', 'mcp/server.mjs'], enabled: true };
        cfg.permission = cfg.permission || {};
        cfg.permission['${MCP_NAME}_search_docs'] = 'allow';
        cfg.permission['${MCP_NAME}_read_doc'] = 'allow';
        cfg.permission['${MCP_NAME}_list_docs'] = 'allow';
        fs.writeFileSync(f, JSON.stringify(cfg, null, 2) + '\n');
      "
      ok "Added $MCP_NAME to ${cfg#"$PROJECT_DIR/"}"
      return
    fi
  done

  local cfg_dir="$PROJECT_DIR/.kilo"
  mkdir -p "$cfg_dir"
  cat > "$cfg_dir/kilo.json" <<EOF
{
  "mcp": {
    "$MCP_NAME": {
      "type": "local",
      "command": ["node", "mcp/server.mjs"],
      "enabled": true
    }
  },
  "permission": {
    "${MCP_NAME}_search_docs": "allow",
    "${MCP_NAME}_read_doc": "allow",
    "${MCP_NAME}_list_docs": "allow"
  }
}
EOF
  ok "Created .kilo/kilo.json with BabylonJS Docs MCP server"
}

# ── Tool installers ──────────────────────────────────────────────────────────

install_claude() {
  info "Installing Claude Code..."
  npm install -g @anthropic-ai/claude-code
  ok "Claude Code installed ($(claude --version 2>/dev/null || echo 'ok'))"

  add_mcp_claude
}

install_opencode() {
  info "Installing OpenCode..."
  npm install -g opencode-ai
  ok "OpenCode installed"

  add_mcp_opencode
}

install_kilo() {
  info "Installing Kilo Code..."
  npm add -g @kilocode/cli
  ok "Kilo Code installed"

  info "Installing TypeScript language server..."
  npm install -g typescript-language-server typescript
  ok "TypeScript language server installed"

  add_mcp_kilo
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

echo -e "${BOLD}Done! MCP server configured:${NC}"
echo -e "  ${CYAN}$MCP_NAME${NC} → local (mcp/server.mjs)"
