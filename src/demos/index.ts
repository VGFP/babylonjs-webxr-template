import { Engine, Scene } from '@babylonjs/core';

export interface DemoDescriptor {
    id: string;
    label: string;
    build: (scene: Scene) => (() => void) | void;
    ownUi?: boolean;
    reuseScene?: boolean;
}

const demos: DemoDescriptor[] = [];

export function registerDemo(demo: DemoDescriptor): void {
    demos.push(demo);
}

export function getDemos(): readonly DemoDescriptor[] {
    return demos;
}

export function createDemoScene(engine: Engine, demo: DemoDescriptor, meta?: Record<string, unknown>): Scene {
    const scene = new Scene(engine);
    scene.useRightHandedSystem = true;
    if (meta) scene.metadata = meta;
    demo.build(scene);
    return scene;
}

import './xrLightShadows';
import { buildXrLightShadowsDemo } from './xrLightShadows';

registerDemo({
    id: 'xr-light-shadows',
    label: 'XR Light & Shadows',
    build: buildXrLightShadowsDemo,
    ownUi: true,
    reuseScene: true,
});
