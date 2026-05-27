import { AbstractEngine, Camera, Matrix, Quaternion, Vector3 } from '@babylonjs/core';
import { FontAsset, TextRenderer } from '@babylonjs/addons/msdfText';

const FONT_DEFINITION_URL = 'https://assets.babylonjs.com/fonts/roboto-regular.json';
const FONT_TEXTURE_URL = 'https://assets.babylonjs.com/fonts/roboto-regular.png';

let cachedFontAsset: FontAsset | null = null;

export async function loadFontAsset(): Promise<FontAsset> {
    if (cachedFontAsset && !cachedFontAsset.textures[0]?.isReady()) {
        cachedFontAsset.dispose();
        cachedFontAsset = null;
    }
    if (!cachedFontAsset) {
        const sdfFontDefinition = await (await fetch(FONT_DEFINITION_URL)).text();
        cachedFontAsset = new FontAsset(sdfFontDefinition, FONT_TEXTURE_URL);
    }
    return cachedFontAsset;
}

export async function createTextRenderer(engine: AbstractEngine): Promise<TextRenderer> {
    const fontAsset = await loadFontAsset();
    return TextRenderer.CreateTextRendererAsync(fontAsset, engine);
}

export function addTextParagraph(
    renderer: TextRenderer,
    text: string,
    position: Vector3,
    scale: number = 0.04,
): void {
    const matrix = Matrix.Compose(
        new Vector3(scale, scale, scale),
        Quaternion.Identity(),
        position,
    );
    renderer.addParagraph(text, { textAlign: 'center' }, matrix);
}

export function attachTextRenderer(scene: import('@babylonjs/core').Scene, textRenderer: TextRenderer): () => void {
    const o1 = scene.onAfterCameraRenderObservable.add(() => {
        const camera = scene.activeCamera as Camera;
        if (!camera) return;
        textRenderer.render(camera.getViewMatrix(), camera.getProjectionMatrix());
    });

    const o2 = scene.onAfterRenderingGroupObservable.add((info) => {
        if (info.renderingGroupId === 0) {
            const camera = scene.activeCamera as Camera;
            if (camera) {
                textRenderer.render(camera.getViewMatrix(), camera.getProjectionMatrix());
            }
        }
    });

    return () => {
        if (o1) scene.onAfterCameraRenderObservable.remove(o1);
        if (o2) scene.onAfterRenderingGroupObservable.remove(o2);
    };
}
