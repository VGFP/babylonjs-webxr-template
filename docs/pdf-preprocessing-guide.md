# PDF Pre-processing for WebXR

A guide to the `.pre` file format and the two-stage PDF pipeline used by the PDF Reader demo.

## Table of Contents

- [Why Pre-processing Is Necessary](#why-pre-processing-is-necessary)
- [Architecture Overview](#architecture-overview)
- [The `.pre` File Format](#the-pre-file-format)
- [Key Files](#key-files)
- [User Workflow](#user-workflow)
- [How It Works](#how-it-works)
- [Troubleshooting](#troubleshooting)

---

## Why Pre-processing Is Necessary

PDF.js is a JavaScript-based PDF renderer that parses PDF structures, loads fonts, and rasterizes vector content to HTML canvas — all on the CPU. This is computationally expensive, especially on standalone XR headsets like the Meta Quest 3:

- **Slow page rendering.** A single A4 page at 1000px width can take several seconds to render on the Quest's mobile processor.
- **Blocking the XR render loop.** PDF.js runs on the main thread. Heavy rendering during an active XR session causes dropped frames and jitter.
- **Large canvas-to-texture pipeline.** After rendering, the canvas must be encoded to an image (via `canvas.toBlob`), loaded as a GPU texture, and uploaded — each step adds latency.
- **Repeated cost.** Every page navigation re-runs the full pipeline.

**The solution:** render every page to a JPEG image *before* entering XR. In XR, page navigation becomes a simple texture swap — nearly instant.

## Architecture Overview

```
  ┌──────────────┐     ┌─────────────────────┐     ┌──────────────┐
  │  Upload PDF  │────▶│  Convert (pre-XR)   │────▶│  Enter XR    │
  │  or .pre     │     │  PDF.js renders all │     │  Blob URLs   │
  └──────────────┘     │  pages → JPEG blob  │     │  loaded as   │
                       │  URLs with progress │     │  textures    │
                       └────────┬────────────┘     └──────────────┘
                                │
                       ┌────────▼────────────┐
                       │  Download .pre      │
                       │  (optional)         │
                       └─────────────────────┘
```

**Two upload paths:**

| Input | Flow | Time to ready |
|---|---|---|
| `.pdf` | Upload → click Convert → wait for all pages → ready | Seconds (depends on page count) |
| `.pre` | Upload → instantly ready | Near-zero |

**What lives where:**

- **`pdfPreprocessor.ts`** — PDF.js, canvas rendering, JPEG encoding. Only loaded before XR. Imports `pdfjs-dist`.
- **`pdfReader.ts`** — XR scene. Zero PDF.js dependency. Creates BabylonJS `Texture` from blob URLs.

This separation means the XR bundle does not include the PDF.js worker or rendering engine.

## The `.pre` File Format

A `.pre` file is a JSON document containing all pages as base64-encoded JPEG images alongside their pixel dimensions:

```json
{
  "version": 1,
  "pages": [
    { "data": "<base64-jpeg>", "width": 1000, "height": 1414 },
    { "data": "<base64-jpeg>", "width": 1000, "height": 1414 }
  ]
}
```

| Field | Type | Description |
|---|---|---|
| `version` | `number` | Format version (currently `1`) |
| `pages[].data` | `string` | Base64-encoded JPEG image data (no `data:` prefix) |
| `pages[].width` | `number` | Pixel width of the rendered page |
| `pages[].height` | `number` | Pixel height of the rendered page |

### Why not ZIP or a binary format?

- **JSON is debuggable** — you can open a `.pre` file in any text editor to inspect its structure.
- **Base64 overhead is ~33%** — acceptable for typical PDFs (10 pages ≈ 2–3 MB).
- **No extra dependencies** — no ZIP library needed; standard `JSON.parse` / `FileReader` APIs suffice.

### Why JPEG instead of PNG?

JPEG encoding is significantly faster than PNG for photographic/complex content, and the file sizes are much smaller. PDF pages are typically rendered with white backgrounds and text/graphics, which compress well as JPEG. The quality difference at default encoding is negligible for screen viewing.

## Key Files

| File | Role |
|---|---|
| `src/demos/pdfPreprocessor.ts` | `preprocessPdf()` — PDF.js rendering + JPEG blob URLs; `serializePages()` / `deserializePages()` — `.pre` format I/O |
| `src/demos/pdfReader.ts` | `PdfReaderDemo` — XR scene with texture-based page display, navigation, gizmos |
| `src/main.ts` | HTML overlay wiring — upload detection, Convert/Download buttons, progress display |
| `index.html` | `#pdf-input` (accepts `.pdf` and `.pre`), `#pdf-convert`, `#pdf-download`, `#pdf-progress` |
| `src/style.css` | Styles for the overlay buttons |
| `vite.config.ts` | `pdfjsAssetsPlugin()` — serves PDF.js WASM, fonts, cmaps from node_modules |

## User Workflow

### First time (converting a PDF)

1. **Upload** — Click "Upload PDF / .pre", select a `.pdf` file
2. **Convert** — Click "Convert PDF" — progress shows per-page ("Converting page 3 of 10...")
3. **Download** *(optional)* — Click "Download .pre" to save the pre-rendered file
4. **Enter XR** — Open the PDF Reader demo, pages load instantly

### Returning (with a `.pre` file)

1. **Upload** — Select the `.pre` file — pages load immediately, no conversion
2. **Enter XR** — Same instant experience

### What happens inside XR

The `PdfReaderDemo` class reads `scene.metadata.pdfPages` (set by `main.ts` before XR entry). Page navigation calls `_renderPage(n)`, which:
1. Reads the blob URL from the pre-processed pages array
2. Creates a `new Texture(url, scene, ...)` — BabylonJS loads the JPEG from the blob
3. Swaps it onto the display material
4. Adjusts the plane aspect ratio

No canvas, no PDF.js, no encoding. Texture swaps are near-instant.

## How It Works

### Pre-processing (`pdfPreprocessor.ts`)

```ts
// PDF → blob URLs (before XR)
const pages = await preprocessPdf(file, (current, total) => {
    updateProgress(`Converting page ${current} of ${total}...`);
});
// pages = [{ url: 'blob:...', width: 1000, height: 1414 }, ...]
```

Internally:
1. `pdfjsLib.getDocument()` parses the PDF
2. For each page: render to an off-screen `<canvas>` at max 1000px
3. `canvas.toBlob('image/jpeg')` encodes to JPEG
4. `URL.createObjectURL(blob)` creates a persistent blob URL

### Serialization (`serializePages` / `deserializePages`)

```ts
// blob URLs → .pre file
const json = await serializePages(pages);

// .pre file → blob URLs
const pages = deserializePages(jsonString);
```

`serializePages` fetches each blob URL, reads it as a data URL, strips the prefix, and stores the base64 in JSON. `deserializePages` reverses this: base64 → `Uint8Array` → `Blob` → blob URL.

### XR scene (`pdfReader.ts`)

The demo reads `scene.metadata.pdfPages` on construction. If present, `_loadPages()` calls `_renderPage(1)` synchronously. The placeholder ("No PDF loaded") is only drawn when no pages are available — this prevents a race condition where the placeholder's async `toBlob` would overwrite the first page's texture.

## Troubleshooting

**First page is blank, other pages work**
This was a race condition fixed by conditionally skipping the placeholder draw when pre-processed pages are available. If it recurs, check that `_drawPlaceholder()` is not called before `_loadPages()`.

**`.pre` file is very large**
The file contains base64 JPEGs (33% overhead over raw JPEG). Reduce the canvas dimension in `pdfPreprocessor.ts` (`MAX_CANVAS_DIM`, default 1000) or compress more aggressively by switching to a lower JPEG quality.

**Conversion is slow on Quest**
The Quest's mobile processor is slower than a desktop. The conversion still works — it just takes longer. The progress display shows per-page status. Once converted, download the `.pre` file and use it next time to skip conversion entirely.

**Texture appears white or blank in XR**
Check that the blob URL is valid (open it in a new tab). Ensure `Texture` is created with `invertY = true` (4th constructor param). The dedicated `HemisphericLight` with `includedOnlyMeshes` must include the display plane.
