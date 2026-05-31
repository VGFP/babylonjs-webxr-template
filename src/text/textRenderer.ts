import { AbstractEngine, Camera, Matrix, Quaternion, Vector3 } from '@babylonjs/core';
import { FontAsset, TextRenderer } from '@babylonjs/addons/msdfText';

export class TextManager {
    private static readonly _fontDefinitionUrl = 'https://assets.babylonjs.com/fonts/roboto-regular.json';
    private static readonly _fontTextureUrl = 'https://assets.babylonjs.com/fonts/roboto-regular.png';
    private static _cachedFontAsset: FontAsset | null = null;

    private _engine: AbstractEngine;
    private _renderer: TextRenderer | null = null;

    constructor(engine: AbstractEngine) {
        this._engine = engine;
    }

    async init(): Promise<void> {
        const fontAsset = await TextManager._loadFontAsset();
        this._renderer = await TextRenderer.CreateTextRendererAsync(fontAsset, this._engine);
    }

    private static async _loadFontAsset(): Promise<FontAsset> {
        if (TextManager._cachedFontAsset && !TextManager._cachedFontAsset.textures[0]?.isReady()) {
            TextManager._cachedFontAsset.dispose();
            TextManager._cachedFontAsset = null;
        }
        if (!TextManager._cachedFontAsset) {
            const sdfFontDefinition = await (await fetch(TextManager._fontDefinitionUrl)).text();
            TextManager._cachedFontAsset = new FontAsset(sdfFontDefinition, TextManager._fontTextureUrl);
        }
        return TextManager._cachedFontAsset;
    }

    addParagraph(text: string, position: Vector3, scale: number = 0.04): void {
        const matrix = Matrix.Compose(new Vector3(scale, scale, scale), Quaternion.Identity(), position);
        this._renderer!.addParagraph(text, { textAlign: 'center' }, matrix);
    }

    attachToScene(scene: import('@babylonjs/core').Scene): () => void {
        const renderer = this._renderer!;

        const o1 = scene.onAfterCameraRenderObservable.add(() => {
            const camera = scene.activeCamera as Camera;
            if (!camera) return;
            renderer.render(camera.getViewMatrix(), camera.getProjectionMatrix());
        });

        return () => {
            if (o1) scene.onAfterCameraRenderObservable.remove(o1);
        };
    }

    get renderer(): TextRenderer {
        return this._renderer!;
    }

    dispose(): void {
        if (this._renderer) {
            this._renderer.dispose();
            this._renderer = null;
        }
    }
}
