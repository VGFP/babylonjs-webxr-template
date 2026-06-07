export type { XrConfig, SessionMode, ReferenceSpaceType } from './types';
export { createUiButton } from './uiButton';
export type { CreateUiButtonOptions, CreateUiButtonResult } from './uiButton';
export { SceneManager } from './sceneManager';
export type { SceneManagerConfig } from './sceneManager';
export { createGizmoManager } from './gizmoManagerFactory';
export type { CreateGizmoManagerOptions } from './gizmoManagerFactory';
export { DisposableStack } from './disposableStack';
export type { Disposable } from './disposableStack';
export { UI_LAYOUT, BACK_BUTTON_COLORS } from './uiLayout';
export {
    createPanelButton,
    createBackButton,
    createPanelRoot,
    saveAndTransparentClearColor,
    getGoBackCallback,
    initPanelText,
} from './demoPanel';
export type { CreatePanelButtonOptions, CreateBackButtonOptions, InitPanelTextOptions } from './demoPanel';
export { getMetadata, setMetadata } from './sceneMetadata';
export type { SceneMetadata } from './sceneMetadata';
export { STORAGE_KEYS, readStorage, writeStorage } from './storage';
export { formatError } from './errors';
export { downloadBlob, downloadJson, pickFile } from './fileDownload';
export { readClipboardText } from './clipboard';
// Note: domWiring is intentionally NOT re-exported here because it pulls in
// pdfjs-dist (heavy, Node-incompatible). Consumers (main.ts) import it directly.
