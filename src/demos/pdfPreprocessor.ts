import * as pdfjsLib from 'pdfjs-dist';
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;

const MAX_CANVAS_DIM = 2000;

export interface PreProcessedPage {
    url: string;
    blob: Blob;
    width: number;
    height: number;
}

export type PdfImageFormat = 'jpeg' | 'png';

export async function preprocessPdf(
    file: File,
    onProgress?: (current: number, total: number) => void,
    format: PdfImageFormat = 'jpeg',
): Promise<PreProcessedPage[]> {
    const arrayBuffer = await file.arrayBuffer();
    const base = new URL(import.meta.env.BASE_URL, window.location.origin).href;
    const loadingTask = pdfjsLib.getDocument({
        data: new Uint8Array(arrayBuffer),
        wasmUrl: `${base}pdfjs-assets/wasm/`,
        standardFontDataUrl: `${base}pdfjs-assets/standard_fonts/`,
        cMapUrl: `${base}pdfjs-assets/cmaps/`,
        cMapPacked: true,
        disableFontFace: true,
        useSystemFonts: true,
    });
    const pdf = await loadingTask.promise;

    const pages: PreProcessedPage[] = [];
    const canvas = document.createElement('canvas');

    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const baseViewport = page.getViewport({ scale: 1 });
        const aspectRatio = baseViewport.width / baseViewport.height;
        const scale = aspectRatio >= 1 ? MAX_CANVAS_DIM / baseViewport.width : MAX_CANVAS_DIM / baseViewport.height;
        const viewport = page.getViewport({ scale });

        canvas.width = Math.round(viewport.width);
        canvas.height = Math.round(viewport.height);
        const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        await page.render({ canvas: null, canvasContext: ctx, viewport }).promise;

        const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
        const quality = format === 'png' ? undefined : 0.8;
        const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, mimeType, quality));
        if (!blob) throw new Error(`Failed to convert page ${i} to image`);

        pages.push({
            url: URL.createObjectURL(blob),
            blob,
            width: canvas.width,
            height: canvas.height,
        });

        onProgress?.(i, pdf.numPages);
    }

    await pdf.cleanup();
    return pages;
}

export async function serializePages(pages: PreProcessedPage[]): Promise<Blob> {
    const parts: BlobPart[] = [];

    const header = new ArrayBuffer(8);
    const headerView = new DataView(header);
    headerView.setUint32(0, 3, true);
    headerView.setUint32(4, pages.length, true);
    parts.push(new Uint8Array(header));

    for (const page of pages) {
        const mimeBytes = new TextEncoder().encode(page.blob.type);

        const pageHeader = new ArrayBuffer(12);
        const phView = new DataView(pageHeader);
        phView.setUint32(0, page.width, true);
        phView.setUint32(4, page.height, true);
        phView.setUint32(8, mimeBytes.length, true);
        parts.push(new Uint8Array(pageHeader));

        parts.push(mimeBytes);

        const dataLen = new ArrayBuffer(4);
        new DataView(dataLen).setUint32(0, page.blob.size, true);
        parts.push(new Uint8Array(dataLen));

        parts.push(page.blob);
    }

    return new Blob(parts, { type: 'application/octet-stream' });
}

export function deserializePages(buffer: ArrayBuffer): PreProcessedPage[] {
    const firstByte = new Uint8Array(buffer)[0];
    if (firstByte === 0x7b) {
        return deserializePagesJson(new TextDecoder().decode(buffer));
    }

    const view = new DataView(buffer);
    let offset = 0;

    const version = view.getUint32(offset, true);
    offset += 4;
    if (version !== 3) throw new Error(`Unsupported .pre version: ${version}`);

    const pageCount = view.getUint32(offset, true);
    offset += 4;

    const pages: PreProcessedPage[] = [];
    for (let i = 0; i < pageCount; i++) {
        const width = view.getUint32(offset, true);
        offset += 4;
        const height = view.getUint32(offset, true);
        offset += 4;
        const mimeLength = view.getUint32(offset, true);
        offset += 4;

        const mime = new TextDecoder().decode(new Uint8Array(buffer, offset, mimeLength));
        offset += mimeLength;

        const dataLength = view.getUint32(offset, true);
        offset += 4;
        const data = new Uint8Array(buffer, offset, dataLength);
        offset += dataLength;

        const blob = new Blob([data], { type: mime });
        pages.push({ url: URL.createObjectURL(blob), blob, width, height });
    }

    return pages;
}

function deserializePagesJson(json: string): PreProcessedPage[] {
    const parsed = JSON.parse(json) as {
        version: number;
        pages: Array<{ data: string; width: number; height: number; mime?: string }>;
    };
    if (parsed.version < 1 || parsed.version > 2) throw new Error(`Unsupported .pre version: ${parsed.version}`);
    return parsed.pages.map((p) => {
        const binary = atob(p.data);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        const mime = p.mime ?? 'image/jpeg';
        const blob = new Blob([bytes], { type: mime });
        return { url: URL.createObjectURL(blob), blob, width: p.width, height: p.height };
    });
}
