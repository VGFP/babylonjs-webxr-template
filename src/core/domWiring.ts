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

/**
 * Wires the AI Agent API key input.
 *
 * Unlike the multiplayer URL, the key is **never persisted** to localStorage.
 * It lives only in the input field until `consumeAgentApiKey()` moves it
 * into scene metadata (in-memory) and clears the field. This keeps the
 * secret out of any storage that survives a page reload.
 *
 * Microphone access is requested eagerly - on input focus and on paste
 * button click. Both are user gestures, which `getUserMedia` requires,
 * and requesting early means permission is already in place by the time
 * the user enters XR (where the prompt may not surface on standalone
 * headsets). Subsequent calls after a grant are silent and cheap.
 */
export function wireAgentKeyInput(
    input: HTMLInputElement,
    pasteBtn: HTMLButtonElement | null,
    note: HTMLSpanElement | null,
): void {
    input.addEventListener('focus', () => {
        void requestMicrophoneAccess();
    });

    if (pasteBtn) {
        pasteBtn.addEventListener('click', async () => {
            void requestMicrophoneAccess();
            const text = await readClipboardText();
            if (text !== null) {
                input.value = text.trim();
                if (note) note.textContent = 'Pasted from clipboard. Key is held only in memory.';
            } else if (note) {
                note.textContent = 'Clipboard not available.';
            }
        });
    }
}

/**
 * Moves the API key from the DOM input into scene metadata, then blanks
 * the input field. Returns true if a key (newly consumed or previously
 * stored) is now available in metadata. Safe to call multiple times -
 * if metadata already holds a key, that key is preserved unless the input
 * has a new value.
 */
export function consumeAgentApiKey(input: HTMLInputElement, scene: Scene): boolean {
    const typed = input.value.trim();
    if (typed) {
        setMetadata(scene, 'agentApiKey', typed);
        input.value = '';
    }
    return !!getMetadata(scene).agentApiKey;
}

/**
 * Requests microphone permission via `getUserMedia`. The resulting stream
 * is released immediately - the call exists only to surface the browser
 * permission prompt while we still have a clean user gesture. Inside an
 * XR session `getUserMedia` may not prompt correctly on standalone
 * headsets.
 *
 * Triggered by `wireAgentKeyInput` on input focus and paste-button click.
 *
 * Returns true if access was granted, false otherwise. Errors are logged
 * but never thrown - the caller should continue into XR either way and
 * let the demo report mic unavailability through its own UI.
 */
export async function requestMicrophoneAccess(): Promise<boolean> {
    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
        return false;
    }
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        for (const track of stream.getTracks()) track.stop();
        return true;
    } catch (err) {
        console.warn('Microphone access denied or unavailable:', err);
        return false;
    }
}
