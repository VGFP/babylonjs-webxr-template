# PDF Reader Demo

Part of the BabylonJS WebXR template. See [AGENTS.md](../../AGENTS.md) for universal project knowledge (scene management, MSDF text, imports, commands). Also see [pdf-preprocessing-guide.md](../pdf-preprocessing-guide.md) for the full `.pre` binary format spec.

PDF.js is too slow to run inside an XR session on standalone headsets (Meta Quest). The PDF Reader demo uses a **two-stage pipeline**: all pages are rendered to image blob URLs *before* entering XR, then loaded as textures in XR (near-instant page navigation). Pages are JPEG by default; PNG (lossless) is available via a toggle in the pre-XR overlay.

## Key files

| File | Role |
|---|---|
| `src/demos/pdfPreprocessor.ts` | `preprocessPdf()` (PDF.js → image blob URLs, JPEG or PNG), `serializePages()` / `deserializePages()` (`.pre` binary format I/O). Only this file imports `pdfjs-dist`. |
| `src/demos/pdfReader.ts` | `PdfReaderDemo` - XR scene. **No PDF.js dependency.** Loads from `getMetadata(scene).pdfPages` (blob URLs). `_renderPage()` creates `Texture` from blob URL - synchronous, no canvas. |
| `src/core/domWiring.ts` | `wirePdfInput()` - HTML overlay wiring: detects `.pdf` vs `.pre` uploads, runs Convert, stores pages in scene metadata via `setMetadata()`. |

## `.pre` file format

**Binary format (version 3)** - raw image blobs with dimensions and MIME type, no base64 overhead. The deserializer auto-detects legacy JSON files (v1–v2) by checking the first byte for `{`. See `docs/pdf-preprocessing-guide.md` for full spec.

## Race condition note

`_drawPlaceholder()` in `PdfReaderDemo` uses async `canvas.toBlob`. If pre-processed pages are available, the placeholder must be **skipped** - otherwise its async `toBlob` callback overwrites the first page texture after it loads.
