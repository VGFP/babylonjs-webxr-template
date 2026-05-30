import { Engine, Scene } from '@babylonjs/core';

export class EngineFactory {
    private _canvas: HTMLCanvasElement;
    private _engine: Engine;
    private _scene: Scene;

    constructor() {
        this._canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
        this._engine = new Engine(this._canvas, true);
        this._scene = new Scene(this._engine);
        this._scene.useRightHandedSystem = true;
    }

    get canvas(): HTMLCanvasElement { return this._canvas; }
    get engine(): Engine { return this._engine; }
    get scene(): Scene { return this._scene; }
}
