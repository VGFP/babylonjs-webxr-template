import * as pdfjsLib from 'pdfjs-dist';
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;

const MAX_CANVAS_DIM = 1000;

export interface PreProcessedPage {
    url: string;
    width: number;
    height: number;
}

export async function preprocessPdf(
    file: File,
    onProgress?: (current: number, total: number) => void,
): Promise<PreProcessedPage[]> {
    const arrayBuffer = await file.arrayBuffer();
    const base = new URL(import.meta.env.BASE_URL, window.location.origin).href;
    const loadingTask = pdfjsLib.getDocument({
        data: new Uint8Array(arrayBuffer),
        wasmUrl: `${base}pdfjs-assets/wasm/`,
        standardFontDataUrl: `${base}pdfjs-assets/standard_fonts/`,
        cMapUrl: `${base}pdfjs-assets/cmaps/`,
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
        const ctx = canvas.getContext('2d')!;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        await page.render({ canvas: null, canvasContext: ctx, viewport }).promise;

        const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg'));
        if (!blob) throw new Error(`Failed to convert page ${i} to image`);

        pages.push({
            url: URL.createObjectURL(blob),
            width: canvas.width,
            height: canvas.height,
        });

        onProgress?.(i, pdf.numPages);
    }

    await pdf.cleanup();
    return pages;
}

export async function serializePages(pages: PreProcessedPage[]): Promise<string> {
    const entries = await Promise.all(
        pages.map(async (page) => {
            const response = await fetch(page.url);
            const blob = await response.blob();
            const base64 = await new Promise<string>((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
            return { data: base64, width: page.width, height: page.height };
        }),
    );
    return JSON.stringify({ version: 1, pages: entries });
}

export function deserializePages(json: string): PreProcessedPage[] {
    const parsed = JSON.parse(json) as {
        version: number;
        pages: Array<{ data: string; width: number; height: number }>;
    };
    if (parsed.version !== 1) throw new Error(`Unsupported .pre version: ${parsed.version}`);
    return parsed.pages.map((p) => {
        const binary = atob(p.data);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        const blob = new Blob([bytes], { type: 'image/jpeg' });
        return { url: URL.createObjectURL(blob), width: p.width, height: p.height };
    });
}
