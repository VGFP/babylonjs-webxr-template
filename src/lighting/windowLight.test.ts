import { Vector3, Color3 } from '@babylonjs/core';
import { WindowLight } from './windowLight';
import type { WindowLightConfig } from './windowLight';
import { createTestScene, disposeTestScene } from '../__tests__/helpers/nullEngine';

describe('WindowLight', () => {
    let engine: ReturnType<typeof createTestScene>['engine'];
    let scene: ReturnType<typeof createTestScene>['scene'];

    beforeEach(() => {
        ({ engine, scene } = createTestScene());
    });

    afterEach(() => {
        disposeTestScene(scene, engine);
    });

    function defaultConfig(overrides?: Partial<WindowLightConfig>): WindowLightConfig {
        return {
            position: new Vector3(0, 3, 0),
            width: 2,
            height: 1.5,
            ...overrides,
        };
    }

    it('creates a rect area light with default intensity', () => {
        const wl = new WindowLight(scene, defaultConfig());
        expect(wl.light.intensity).toBe(2.0);
    });

    it('creates a rect area light with default range', () => {
        const wl = new WindowLight(scene, defaultConfig());
        expect(wl.light.range).toBe(50);
    });

    it('positions the root node', () => {
        const pos = new Vector3(1, 2, 3);
        const wl = new WindowLight(scene, defaultConfig({ position: pos }));
        expect(wl.rootNode.position.x).toBe(1);
        expect(wl.rootNode.position.y).toBe(2);
        expect(wl.rootNode.position.z).toBe(3);
    });

    it('light is parented to root node', () => {
        const wl = new WindowLight(scene, defaultConfig());
        expect(wl.light.parent).toBe(wl.rootNode);
    });

    it('creates debug mesh by default', () => {
        const wl = new WindowLight(scene, defaultConfig());
        expect(wl.debugMesh).not.toBeNull();
        expect(wl.debugMesh!.parent).toBe(wl.rootNode);
    });

    it('skips debug mesh when showDebugMesh is false', () => {
        const wl = new WindowLight(scene, defaultConfig({ showDebugMesh: false }));
        expect(wl.debugMesh).toBeNull();
    });

    it('applies custom color to light diffuse', () => {
        const color = new Color3(1, 0, 0);
        const wl = new WindowLight(scene, defaultConfig({ color }));
        expect(wl.light.diffuse.r).toBeCloseTo(1, 4);
        expect(wl.light.diffuse.g).toBeCloseTo(0, 4);
    });

    it('applies custom intensity', () => {
        const wl = new WindowLight(scene, defaultConfig({ intensity: 5 }));
        expect(wl.light.intensity).toBe(5);
    });

    it('dispose() removes light from scene', () => {
        const wl = new WindowLight(scene, defaultConfig());
        const light = wl.light;
        wl.dispose();
        expect(scene.lights).not.toContain(light);
    });
});
