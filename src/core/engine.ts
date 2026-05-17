import { Engine, Scene } from '@babylonjs/core';

export function createEngineAndScene(): { engine: Engine; scene: Scene } {
    const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);
    scene.useRightHandedSystem = true;

    return { engine, scene };
}
