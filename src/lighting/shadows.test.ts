import { ShadowManager } from './shadows';
import { createTestScene, disposeTestScene } from '../__tests__/helpers/nullEngine';

describe('ShadowManager', () => {
    let engine: ReturnType<typeof createTestScene>['engine'];
    let scene: ReturnType<typeof createTestScene>['scene'];
    let shadowManager: ShadowManager;

    beforeEach(() => {
        ({ engine, scene } = createTestScene());
        shadowManager = new ShadowManager(scene);
    });

    afterEach(() => {
        disposeTestScene(scene, engine);
    });

    it('creates a directional light in the scene', () => {
        const light = scene.getLightByName('directionalLight');
        expect(light).toBeDefined();
        expect(shadowManager.directionalLight).toBe(light);
    });

    it('creates a hemispheric light in the scene', () => {
        const light = scene.getLightByName('hemisphericLight');
        expect(light).toBeDefined();
        expect(shadowManager.hemisphericLight).toBe(light);
    });

    it('directional light has intensity 0.3', () => {
        expect(shadowManager.directionalLight.intensity).toBe(0.3);
    });

    it('hemispheric light has intensity 0.7', () => {
        expect(shadowManager.hemisphericLight.intensity).toBe(0.7);
    });

    it('creates a shadow generator with blur exponential shadow map', () => {
        expect(shadowManager.shadowGenerator).toBeDefined();
        expect(shadowManager.shadowGenerator.useBlurExponentialShadowMap).toBe(true);
    });

    it('shadow generator uses blur kernel 32', () => {
        expect(shadowManager.shadowGenerator.blurKernel).toBe(32);
    });

    it('references the correct scene', () => {
        expect(shadowManager.scene).toBe(scene);
    });
});
