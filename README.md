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
| `make setup-ai` | Install AI coding tools + configure MCP |
| `make generate-docs` | Regenerate BabylonJS docs from source (for updates) |
| `make help` | List all available Makefile targets |

## AI Coding Tools

The `make setup-ai` command installs CLI AI coding assistants and configures the BabylonJS Docs MCP server. The docs are included in the repo in `docs-for-mcp/` — no generation step needed.

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

### Regenerating / Updating Docs

The docs in `docs-for-mcp/` were generated from two sources:
- **API reference** — TypeDoc output from the BabylonJS TypeScript source (`babylonjs-source/`)
- **Guides & examples** — Markdown content from the BabylonJS Documentation repo (`babylonjs-docs/`)

To regenerate (e.g. after a BabylonJS version bump):

```bash
# Full pipeline: clone repos + generate docs
bash scripts/clone-babylonjs-source.sh
bash scripts/clone-babylonjs-docs.sh
bash scripts/generate-docs-for-mcp.sh

# Or via Makefile
make generate-docs
```

This regenerates `docs-for-mcp/` with ~3,400 markdown files (~2,700 API + ~650 guides). Commit the updated docs after regeneration.

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

## Building the Meta Quest APK

The project includes scripts to build a Meta Quest APK from the PWA using [Bubblewrap](https://github.com/nicolo-nicoli/nicolo-nicoli).

### Setup (first time)

```bash
bash scripts/setup-android-tools.sh
```

This installs `@bubblewrap/cli`, downloads the Android SDK via `bubblewrap init`, and installs Temurin JDK 17.

### Build

```bash
# Debug-signed APK (default)
bash scripts/build-apk.sh

# Production-signed APK
bash scripts/build-apk.sh \
  --manifest https://your-pwa-domain.example.com \
  --keystore /path/to/release.keystore \
  --key-alias my-key \
  --store-pass SECRET \
  --key-pass SECRET
```

The APK is output to `dist-apk/`. A `twa-manifest.json` is saved to the project root on first build and reused on subsequent runs.

### Options

| Flag | Description | Default |
|---|---|---|
| `--manifest URL` | Deployed PWA URL (host for twa-manifest.json) | Placeholder from `manifest.webmanifest` |
| `--keystore PATH` | Path to `.keystore` file | Auto-generates debug keystore |
| `--key-alias ALIAS` | Keystore key alias | `androiddebugkey` |
| `--store-pass PASS` | Keystore store password | `android` |
| `--key-pass PASS` | Key password | `android` |
| `--output DIR` | Output directory for APK | `./dist-apk` |
| `--app-version NAME` | Version name (e.g. `1.0.0`) | `1.0.0` |
| `--app-version-code N` | Version code | `1` |
| `--setup` | Run prerequisites setup before building | off |

### CI

The `.github/workflows/build-apk.yml` workflow calls `bash scripts/build-apk.sh` on every push to `main`. Signing keys are read from GitHub Secrets (`KEYSTORE_BASE64`, `KEY_ALIAS`, `KEY_STORE_PASSWORD`, `KEY_PASSWORD`).

## Scenes & Demos

The app uses a `SceneManager` to switch between a home scene and demo scenes. The home scene shows a Hello World text anchor. Each demo is a self-contained class that sets up its own lights, meshes, and UI, and can be entered/exited via in-world buttons.

**Lights & Shadows Demo** — places a shadow-casting cube in the room and renders dynamic shadows on detected planes. Users can add/remove point lights, toggle default lighting, and persist light positions via localStorage. Requires WebXR with plane detection support.

## Project Structure

```
├── .certs/               # Local HTTPS certs (gitignored, auto-generated)
├── .devcontainer/        # Devcontainer config (Dockerfile + features)
├── docs-for-mcp/         # BabylonJS docs for MCP server
│   ├── api/              # TypeDoc-generated API reference
│   └── examples/         # Guides and tutorials
├── mcp/
│   └── server.mjs        # Local MCP server for AI tools
├── public/
│   ├── icons/            # PWA icons (replace with your own)
│   ├── manifest.webmanifest
│   └── sw.js             # Service worker
├── scripts/
│   ├── build-apk.sh                # Build Meta Quest APK
│   ├── setup-android-tools.sh      # Install JDK, Android SDK, Bubblewrap
│   ├── generate-cert.sh            # Self-signed cert generator
│   ├── generate-icons.cjs
│   ├── clone-babylonjs-source.sh   # Clone BabylonJS source repo
│   ├── clone-babylonjs-docs.sh     # Clone BabylonJS docs repo
│   ├── generate-docs-for-mcp.sh    # Generate markdown docs
│   └── setup-ai-tools.sh           # AI tools installer + MCP config
├── src/
│   ├── core/             # Engine/scene setup, SceneManager, shared types, UI utilities
│   ├── demos/            # Demo scenes (lights/shadows) and registry
│   ├── lighting/         # ShadowManager, WindowLight
│   ├── materials/        # Shadow-only material helpers
│   ├── meshes/           # Polygon mesh builder for detected planes
│   ├── xr/               # WebXR experience, plane detection, anchors
│   ├── text/             # MSDF text renderer (TextManager)
│   ├── main.ts           # App entry point
│   └── style.css
├── index.html
├── Makefile              # AI tools + docs generation targets
├── package.json
├── tsconfig.json
└── vite.config.ts
```
