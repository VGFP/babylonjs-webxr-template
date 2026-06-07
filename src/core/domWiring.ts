import { Scene, WebXRDefaultExperience } from '@babylonjs/core';
import { WebXRState } from '@babylonjs/core/XR/webXRTypes';
import { preprocessPdf, serializePages, deserializePages, type PreProcessedPage } from '../demos/pdfPreprocessor';
import { getMetadata, setMetadata } from './sceneMetadata';
import { formatError } from './errors';
import { downloadBlob } from './fileDownload';
import { readClipboardText } from './clipboard';
import { STORAGE_KEYS, readStorage, writeStorage } from './storage';

/**
 * Toggles the overlay + frost visibility based on XR session state.
 * Use for any XR experience (home or per-demo) - call once per XR instance.
 */
export function wireXrOverlay(xr: WebXRDefaultExperience, xrOverlay: HTMLDivElement, xrFrost: HTMLDivElement): void {
    xr.baseExperience.onStateChangedObservable.add((state) => {
        const inXR = state === WebXRState.IN_XR;
        xrOverlay.classList.toggle('hidden', inXR);
        xrFrost.classList.toggle('hidden', inXR);
    });
}

/**
 * Sets up the XR "Enter" button: wires the click handler that calls
 * `enterXRAsync`. Optionally wires the overlay state observation if
 * overlay/frost elements are provided.
 */
export function wireXrToggle(
    xrButton: HTMLButtonElement,
    xrOverlay: HTMLDivElement,
    xrFrost: HTMLDivElement,
    xr: WebXRDefaultExperience,
    onEnterXr: () => Promise<void>,
): void {
    wireXrOverlay(xr, xrOverlay, xrFrost);

    xrButton.addEventListener('click', async () => {
        try {
            await onEnterXr();
        } catch (err) {
            console.error('Failed to enter XR:', err);
        }
    });
}

/**
 * Wires the PDF upload, convert, and download controls.
 *
 * On `.pre` files: deserializes immediately and stores pages in `scene.metadata.pdfPages`.
 * On `.pdf` files: enables the Convert button which runs `preprocessPdf`.
 * The Download button serializes the current pages to a `.pre` file.
 */
export function wirePdfInput(
    scene: Scene,
    input: HTMLInputElement,
    filenameLabel: HTMLSpanElement,
    convertBtn: HTMLButtonElement,
    downloadBtn: HTMLButtonElement,
    progress: HTMLSpanElement,
): void {
    let selectedPdfFile: File | null = null;

    input.addEventListener('change', () => {
        const file = input.files?.[0];
        if (!file) return;
        filenameLabel.textContent = file.name;
        downloadBtn.hidden = true;

        if (file.name.endsWith('.pre')) {
            selectedPdfFile = null;
            convertBtn.hidden = true;
            progress.textContent = 'Loading...';
            const reader = new FileReader();
            reader.onload = () => {
                try {
                    const pages = deserializePages(reader.result as string);
                    setPdfPages(scene, pages);
                    progress.textContent = `Loaded: ${pages.length} pages`;
                } catch (err) {
                    progress.textContent = `Error: ${formatError(err, 'invalid .pre file')}`;
                }
            };
            reader.onerror = () => {
                progress.textContent = 'Error: failed to read file';
            };
            reader.readAsText(file);
        } else {
            selectedPdfFile = file;
            convertBtn.hidden = false;
            progress.textContent = '';
        }
    });

    convertBtn.addEventListener('click', async () => {
        if (!selectedPdfFile) return;
        convertBtn.disabled = true;
        progress.textContent = 'Converting...';
        try {
            const pages = await preprocessPdf(selectedPdfFile, (current, total) => {
                progress.textContent = `Converting page ${current} of ${total}...`;
            });
            setPdfPages(scene, pages);
            progress.textContent = `Ready: ${pages.length} pages`;
            downloadBtn.hidden = false;
            convertBtn.hidden = true;
        } catch (err) {
            progress.textContent = `Error: ${formatError(err, 'unknown')}`;
            convertBtn.disabled = false;
        }
    });

    downloadBtn.addEventListener('click', async () => {
        const pages = getPdfPages(scene);
        if (!pages) return;
        downloadBtn.disabled = true;
        try {
            const json = await serializePages(pages);
            const blob = new Blob([json], { type: 'application/json' });
            downloadBlob(blob, (selectedPdfFile?.name ?? 'document').replace(/\.pdf$/i, '') + '.pre');
        } catch (err) {
            console.error('Failed to download:', err);
        }
        downloadBtn.disabled = false;
    });
}

function setPdfPages(scene: Scene, pages: PreProcessedPage[]): void {
    setMetadata(scene, 'pdfPages', pages);
}

function getPdfPages(scene: Scene): PreProcessedPage[] | null {
    return getMetadata(scene).pdfPages ?? null;
}

const MP_URL_STORAGE_KEY = STORAGE_KEYS.mpServerUrl;

/**
 * Wires the multiplayer server URL input: restores the last value from
 * localStorage, persists changes, and provides a Paste button that reads
 * from the clipboard.
 */
export function wireMpServerInput(input: HTMLInputElement, pasteBtn: HTMLButtonElement | null): void {
    const saved = readStorage(MP_URL_STORAGE_KEY);
    if (saved) input.value = saved;

    input.addEventListener('input', () => {
        writeStorage(MP_URL_STORAGE_KEY, input.value);
    });

    if (pasteBtn) {
        pasteBtn.addEventListener('click', async () => {
            const text = await readClipboardText();
            if (text !== null) {
                input.value = text;
                writeStorage(MP_URL_STORAGE_KEY, input.value);
            }
        });
    }
}
