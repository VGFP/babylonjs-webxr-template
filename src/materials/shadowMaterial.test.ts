import { Vector3, MeshBuilder, DirectionalLight } from '@babylonjs/core';
import { ShadowOnlyMaterial } from '@babylonjs/materials';
import { applyShadowMaterialFacing } from './shadowMaterial';
import { createTestScene, disposeTestScene } from '../__tests__/helpers/nullEngine';

describe('applyShadowMaterialFacing', () => {
    let engine: ReturnType<typeof createTestScene>['engine'];
    let scene: ReturnType<typeof createTestScene>['scene'];

    beforeEach(() => {
        ({ engine, scene } = createTestScene());
    });

    afterEach(() => {
        disposeTestScene(scene, engine);
    });

    it('sets activeLight on the shadow material', () => {
        const mesh = MeshBuilder.CreateGround('ground', { width: 4, height: 4 }, scene);
        const mat = new ShadowOnlyMaterial('shadowMat', scene);
        mesh.material = mat;

        const light = new DirectionalLight('dir', new Vector3(0, -1, 0), scene);
        light.position = new Vector3(0, 5, 0);

        applyShadowMaterialFacing(mesh, mat, light as any);

        expect(mat.activeLight).toBe(light);
    });

    it('sets alpha to 0.4 when mesh faces the light', () => {
        const mesh = MeshBuilder.CreateGround('ground', { width: 4, height: 4 }, scene);
        const mat = new ShadowOnlyMaterial('shadowMat', scene);
        mesh.material = mat;

        const light = new DirectionalLight('dir', new Vector3(0, -1, 0), scene);
        applyShadowMaterialFacing(mesh, mat, light as any);

        expect(mat.alpha).toBe(0.4);
    });

    it('sets alpha to 0 when mesh normal points away from the light direction', () => {
        const mesh = MeshBuilder.CreateGround('ground', { width: 4, height: 4 }, scene);
        mesh.rotation.x = Math.PI;
        mesh.computeWorldMatrix(true);
        const mat = new ShadowOnlyMaterial('shadowMat', scene);
        mesh.material = mat;

        const light = new DirectionalLight('dir', new Vector3(0, -1, 0), scene);
        applyShadowMaterialFacing(mesh, mat, light as any);

        expect(mat.alpha).toBe(0);
    });
});
