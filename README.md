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
| `make setup-ai` | Install AI coding tools (Claude Code, OpenCode, Kilo Code) with BabylonJS MCP |
| `make setup-ai claude` | Install only Claude Code |
| `make setup-ai opencode` | Install only OpenCode |
| `make setup-ai kilo` | Install only Kilo Code |
| `make help` | List all available Makefile targets |

## AI Coding Tools

The `make setup-ai` command installs CLI AI coding assistants inside the devcontainer and configures the [DocFork MCP server](https://mcp.docfork.com/mcp) for BabylonJS documentation and assistance.

Supported tools:
- **Claude Code** — `@anthropic-ai/claude-code` (creates `.mcp.json`)
- **OpenCode** — `opencode` (creates `opencode.json`)
- **Kilo Code** — `kilocode` (creates `kilo.json`)

Each tool gets a project-level config file with the DocFork MCP server:

```json
{
  "mcpServers": {
    "docfork": {
      "url": "https://mcp.docfork.com/mcp"
    }
  }
}
```

## Project Structure

```
├── .certs/               # Local HTTPS certs (gitignored, auto-generated)
├── .devcontainer/       # Devcontainer config (Dockerfile + features)
├── public/
│   ├── icons/           # PWA icons (replace with your own)
│   ├── manifest.webmanifest
│   └── sw.js            # Service worker
├── scripts/
│   ├── generate-cert.sh # Self-signed cert generator
│   ├── generate-icons.cjs
│   └── setup-ai-tools.sh # AI tools installer + MCP config
├── src/
│   ├── core/             # Engine/scene setup, shared types
│   ├── lighting/         # Lights and shadow generator
│   ├── xr/               # WebXR experience helper
│   ├── text/             # MSDF text renderer
│   ├── main.ts           # App entry point
│   └── style.css
├── index.html
├── Makefile             # AI tools setup targets
├── package.json
├── tsconfig.json
└── vite.config.ts
```
