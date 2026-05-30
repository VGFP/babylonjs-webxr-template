import {
    Color3,
    Color4,
    DirectionalLight,
    HemisphericLight,
    IShadowLight,
    MeshBuilder,
    Scene,
    ShadowGenerator,
    StandardMaterial,
    TransformNode,
    Vector3,
} from '@babylonjs/core';
import '@babylonjs/core/Collisions';
import '@babylonjs/core/Materials/standardMaterial';

import { TextManager } from '../text/textRenderer';
import { createUiButton } from '../core/uiButton';

export class XrLightShadowsDemo {
    private static readonly _btnWidth = 0.44;
    private static readonly _btnHeight = 0.07;
    private static readonly _panelPosition = new Vector3(0, 1.35, -0.55);
    private static readonly _cornerRadius = 25;
    private static readonly _borderThickness = 8;
    private static readonly _textScale = 0.028;
    private static readonly _textYOffset = -0.005;
    private static readonly _textZOffset = -0.005;
    private static readonly _backWidthRatio = 0.8;
    private static readonly _backHeightRatio = 0.85;

    private _scene: Scene;
    private _cleanup: { dispose(): void }[] = [];
    private _detachText: (() => void) | null = null;
    private _disposed = false;
    private _prevClearColor: Color4;
    private _homeDirectional: any;
    private _homeHemispheric: any;
    private _shadowGen: ShadowGenerator;

    constructor(scene: Scene) {
        this._scene = scene;
        this._prevClearColor = scene.clearColor.clone();
        scene.clearColor = new Color4(0, 0, 0, 0);

        this._homeDirectional = scene.getLightByName('directionalLight');
        this._homeHemispheric = scene.getLightByName('hemisphericLight');
        if (this._homeDirectional) this._homeDirectional.setEnabled(false);
        if (this._homeHemispheric) this._homeHemispheric.setEnabled(false);

        const directional = new DirectionalLight('ls_directional', new Vector3(0, -1, 1), scene);
        directional.intensity = 0.7;
        directional.position = new Vector3(0, 2, 0);
        this._cleanup.push(directional);

        const hemispheric = new HemisphericLight('ls_hemispheric', new Vector3(0, 1, 0), scene);
        hemispheric.intensity = 0.7;
        this._cleanup.push(hemispheric);

        this._shadowGen = new ShadowGenerator(1024, directional as IShadowLight);
        this._shadowGen.useBlurExponentialShadowMap = true;
        this._shadowGen.blurKernel = 32;

        const cube = MeshBuilder.CreateBox('ls_cube', { size: 0.5 }, scene);
        cube.position = new Vector3(0, 0.3, 2);
        const cubeMat = new StandardMaterial('ls_cubeMat', scene);
        cubeMat.diffuseColor = new Color3(0.2, 0.6, 1);
        cube.material = cubeMat;
        this._shadowGen.addShadowCaster(cube);
        this._cleanup.push(cube);
        this._cleanup.push(cubeMat);

        const panelRoot = new TransformNode('ls_panel_root', scene);
        panelRoot.position = XrLightShadowsDemo._panelPosition.clone();
        this._cleanup.push(panelRoot);

        const goBack = (scene.metadata as Record<string, unknown> | undefined)?.goBack as (() => void) | undefined;
        if (goBack) {
            const btnResult = createUiButton(scene, {
                name: 'ls_back',
                width: XrLightShadowsDemo._btnWidth * XrLightShadowsDemo._backWidthRatio,
                height: XrLightShadowsDemo._btnHeight * XrLightShadowsDemo._backHeightRatio,
                position: new Vector3(0, 0, 0),
                parent: panelRoot,
                bgColor: '#2a1a0aee',
                borderColor: '#ffb45044',
                cornerRadius: XrLightShadowsDemo._cornerRadius,
                borderThickness: XrLightShadowsDemo._borderThickness,
                onClick: () => goBack(),
            });
            this._cleanup.push(btnResult.texture);
            this._cleanup.push(btnResult.plane);

            const textManager = new TextManager(scene.getEngine());
            textManager.init().then(() => {
                if (this._disposed) {
                    textManager.dispose();
                    return;
                }
                textManager.addParagraph(
                    'Return to Main Scene',
                    new Vector3(
                        XrLightShadowsDemo._panelPosition.x,
                        XrLightShadowsDemo._panelPosition.y + XrLightShadowsDemo._textYOffset,
                        XrLightShadowsDemo._panelPosition.z + XrLightShadowsDemo._textZOffset,
                    ),
                    XrLightShadowsDemo._textScale,
                );
                this._detachText = textManager.attachToScene(scene);
                this._cleanup.push(textManager);
            });
        }
    }

    teardown(): void {
        this._disposed = true;
        if (this._detachText) {
            this._detachText();
            this._detachText = null;
        }
        this._shadowGen.dispose();
        for (const item of this._cleanup) item.dispose();
        if (this._homeDirectional) this._homeDirectional.setEnabled(true);
        if (this._homeHemispheric) this._homeHemispheric.setEnabled(true);
        this._scene.clearColor = this._prevClearColor;
    }
}
