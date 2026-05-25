import { Camera, Engine, Scene, TransformNode, Vector3 } from '@babylonjs/core';
import { FontAsset, TextRenderer } from '@babylonjs/addons/msdfText';

const FONT_DEFINITION_URL = 'https://assets.babylonjs.com/fonts/roboto-regular.json';
const FONT_TEXTURE_URL = 'https://assets.babylonjs.com/fonts/roboto-regular.png';

let _fontAsset: FontAsset | null = null;

export async function loadFontAsset(): Promise<FontAsset> {
    if (_fontAsset && !_fontAsset.textures[0]?.isReady()) {
        _fontAsset.dispose();
        _fontAsset = null;
    }
    if (!_fontAsset) {
        const sdfFontDefinition = await (await fetch(FONT_DEFINITION_URL)).text();
        _fontAsset = new FontAsset(sdfFontDefinition, FONT_TEXTURE_URL);
    }
    return _fontAsset;
}

export async function createTextRenderer(engine: Engine, scene: Scene): Promise<TextRenderer> {
    const fontAsset = await loadFontAsset();
    const textRenderer = await TextRenderer.CreateTextRendererAsync(fontAsset, engine);

    textRenderer.addParagraph('Hello World', {
        textAlign: 'center',
    });

    const anchor = new TransformNode('textAnchor', scene);
    anchor.position = new Vector3(0, 1.5, -0.55);
    anchor.scaling = new Vector3(0.2, 0.2, 0.2);
    textRenderer.parent = anchor;

    return textRenderer;
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
