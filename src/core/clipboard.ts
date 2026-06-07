export async function readClipboardText(): Promise<string | null> {
    try {
        return (await navigator.clipboard.readText()).trim();
    } catch {
        return null;
    }
}
