# AGENTS.md

## Commands

- `pnpm dev` — Vite dev server on port 5173 (HTTPS auto-enabled if `.certs/` exists)
- `pnpm build` — production build to `dist/`
- No test, lint, format, or typecheck commands are configured.

## Architecture

Single-page app: `index.html` loads `src/main.ts` (top-level await). BabylonJS scene with WebXR immersive-AR passthrough, plus a fullscreen GUI overlay. No router, no state management, no framework.

## BabylonJS Import Convention

Deep imports are required for tree-shaking — do not import everything from `@babylonjs/core`:

```ts
import { Engine } from '@babylonjs/core';
import '@babylonjs/core/XR/features/webXRPassthrough'; // side-effect imports for registration
import '@babylonjs/core/XR/webXRDefaultExperience';
```

Missing a side-effect import causes silent runtime failures (WebXR features won't register).

## HTTPS Certificates

WebXR requires HTTPS. `vite.config.ts` auto-detects `.certs/localhost.key` + `.certs/localhost.pem`. Regenerate with `bash scripts/generate-cert.sh`.


