export const STORAGE_KEYS = {
    mpServerUrl: 'mp_server_url',
    xrLightShadowsState: 'xr_lightShadows_state',
} as const;

export function readStorage(key: string): string | null {
    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
}

export function writeStorage(key: string, value: string): void {
    try {
        localStorage.setItem(key, value);
    } catch {
        // ignore storage errors (quota, privacy mode, etc.)
    }
}
