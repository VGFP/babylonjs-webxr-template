# babylonjs-webxr-template

Template for creating WebXR apps on Meta Quest 3 with BabylonJS.

## Prerequisites

- [Docker](https://www.docker.com/) + [VS Code Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## Quick Start

1. Open this repo in VS Code and select **Reopen in Container** when prompted
2. The container builds automatically — pnpm and dependencies are installed
3. Run the dev server:

```bash
pnpm dev
```

4. Open `https://localhost:5173` in a browser (or Quest browser for XR)

### Debug / Inspector

To open the [BabylonJS Inspector](https://doc.babylonjs.com/toolsAndResources/inspector) panel, set the `VITE_DEBUG` env var:

```bash
VITE_DEBUG=true pnpm dev
```

This adds a collapsible overlay on the right side of the page for inspecting scene nodes, materials, textures, and performance. The inspector is dynamically imported — it adds zero overhead when `VITE_DEBUG` is not set.

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start Vite dev server on port 5173 (HTTPS) |
| `pnpm build` | Production build to `dist/` |
| `pnpm preview` | Preview the production build locally |

## HTTPS / Local Certificates

WebXR requires HTTPS. The devcontainer auto-generates a self-signed certificate during setup:

```
.certs/
├── localhost.key
└── localhost.pem
```

Vite automatically uses these when present (`vite.config.ts` detects `.certs/` and enables HTTPS). To regenerate:

```bash
bash scripts/generate-cert.sh
```

On first visit, browsers will show a certificate warning — accept it to proceed. On Meta Quest, you may need to accept the warning in the browser before entering VR.

## Makefile Targets

| Command | Description |
|---|---|
| `make setup-ai` | Install AI coding tools + generate docs + configure MCP |
| `make generate-docs` | Generate BabylonJS docs for MCP (offline) |
| `make help` | List all available Makefile targets |

## AI Coding Tools

The `make setup-ai` command installs CLI AI coding assistants and configures a local BabylonJS documentation MCP server for offline API reference and guides.

Supported tools:
- **Claude Code** — `@anthropic-ai/claude-code` (creates `.mcp.json`)
- **OpenCode** — `opencode` (creates `opencode.json`)
- **Kilo Code** — `kilocode` (creates `kilo.json`)

Each tool gets a project-level config file with the local BabylonJS Docs MCP server:

```json
{
  "mcpServers": {
    "babylonjs-docs": {
      "command": "node",
      "args": ["mcp/server.mjs"]
    }
  }
}
```

The local MCP server (`mcp/server.mjs`) exposes three tools for searching and reading BabylonJS documentation offline:

| Tool | Description |
|---|---|
| `search_docs` | Search API docs and guides by keyword (e.g. "Scene", "WebXR", "shadow") |
| `read_doc` | Read a specific documentation file by path |
| `list_docs` | Browse the documentation directory structure |

The docs are generated from two sources:
- **API reference** — TypeDoc output from the BabylonJS TypeScript source (`babylonjs-source/`)
- **Guides & examples** — Markdown content from the BabylonJS Documentation repo (`babylonjs-docs/`)

Both repos are cloned and processed by the generation script.

### Generating / Updating Docs

```bash
# Full pipeline: clone repos + generate docs
bash scripts/clone-babylonjs-source.sh
bash scripts/clone-babylonjs-docs.sh
bash scripts/generate-docs-for-mcp.sh

# Or via Makefile
make generate-docs
```

This creates `docs-for-mcp/` with ~3,400 markdown files (~2,700 API + ~650 guides).

### How It Works

1. `scripts/clone-babylonjs-source.sh` — Clones `BabylonJS/Babylon.js` at the version in `package.json`
2. `scripts/clone-babylonjs-docs.sh` — Clones the BabylonJS Documentation repo to `babylonjs-docs/`
3. `scripts/generate-docs-for-mcp.sh` — Runs TypeDoc with `typedoc-plugin-markdown`, copies guides from `babylonjs-docs/`, outputs to `docs-for-mcp/`
3. `mcp/server.mjs` — Stdio MCP server that indexes all markdown on startup and serves search/read/list tools

### Configuring for Other AI Tools

The MCP server is a standard stdio server. To add it to any MCP-compatible tool:

```json
{
  "mcpServers": {
    "babylonjs-docs": {
      "command": "node",
      "args": ["mcp/server.mjs"]
    }
  }
}
```

For tools that use a different config format, the server command is:

```
node mcp/server.mjs
```

Set `BABYLONJS_DOCS_ROOT` env var if the docs directory is not at `./docs-for-mcp` relative to the project root.

## Project Structure

```
├── .certs/               # Local HTTPS certs (gitignored, auto-generated)
├── .devcontainer/        # Devcontainer config (Dockerfile + features)
├── babylonjs-source/     # BabylonJS monorepo clone (gitignored)
├── babylonjs-docs/       # BabylonJS Documentation repo clone (gitignored)
├── docs-for-mcp/         # Generated markdown docs (gitignored)
│   ├── api/              # TypeDoc-generated API reference
│   └── examples/         # Guides and tutorials
├── mcp/
│   └── server.mjs        # Local MCP server for AI tools
├── public/
│   ├── icons/            # PWA icons (replace with your own)
│   ├── manifest.webmanifest
│   └── sw.js             # Service worker
├── scripts/
│   ├── generate-cert.sh  # Self-signed cert generator
│   ├── generate-icons.cjs
│   ├── clone-babylonjs-source.sh  # Clone BabylonJS source repo
│   ├── generate-docs-for-mcp.sh   # Generate markdown docs
│   └── setup-ai-tools.sh          # AI tools installer + MCP config
├── src/
│   ├── core/             # Engine/scene setup, shared types
│   ├── lighting/         # Lights and shadow generator
│   ├── xr/               # WebXR experience helper
│   ├── text/             # MSDF text renderer
│   ├── main.ts           # App entry point
│   └── style.css
├── index.html
├── Makefile              # AI tools + docs generation targets
├── package.json
├── tsconfig.json
└── vite.config.ts
```
