import { NullEngine } from '@babylonjs/core/Engines/nullEngine';
import { Scene } from '@babylonjs/core/scene';

export function createTestScene() {
    const engine = new NullEngine();
    const scene = new Scene(engine);
    scene.useRightHandedSystem = true;
    return { engine, scene };
}

export function disposeTestScene(scene: Scene, engine: NullEngine) {
    scene.dispose();
    engine.dispose();
}
