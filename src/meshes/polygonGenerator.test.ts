import { Matrix, Vector3, Quaternion, StandardMaterial } from '@babylonjs/core';
import { buildPolygonMesh } from './polygonGenerator';
import type { PolygonPlaneData } from './polygonGenerator';
import { createTestScene, disposeTestScene } from '../__tests__/helpers/nullEngine';

describe('buildPolygonMesh', () => {
    let engine: ReturnType<typeof createTestScene>['engine'];
    let scene: ReturnType<typeof createTestScene>['scene'];

    beforeEach(() => {
        ({ engine, scene } = createTestScene());
    });

    afterEach(() => {
        disposeTestScene(scene, engine);
    });

    function makePlaneData(overrides?: Partial<PolygonPlaneData>): PolygonPlaneData {
        return {
            polygonDefinition: [
                { x: 0, z: 0 },
                { x: 1, z: 0 },
                { x: 1, z: 1 },
                { x: 0, z: 1 },
            ],
            transformationMatrix: Matrix.Compose(new Vector3(1, 1, 1), Quaternion.Identity(), new Vector3(0, 0, 0)),
            orientation: 'horizontal',
            ...overrides,
        };
    }

    it('creates a mesh added to the scene', () => {
        const mesh = buildPolygonMesh(makePlaneData(), scene);
        expect(mesh).toBeDefined();
        expect(scene.meshes).toContain(mesh);
    });

    it('assigns material when provided', () => {
        const mat = new StandardMaterial('testMat', scene);
        const mesh = buildPolygonMesh(makePlaneData(), scene, mat);
        expect(mesh.material).toBe(mat);
    });

    it('has receiveShadows enabled', () => {
        const mesh = buildPolygonMesh(makePlaneData(), scene);
        expect(mesh.receiveShadows).toBe(true);
    });

    it('has collision checking enabled', () => {
        const mesh = buildPolygonMesh(makePlaneData(), scene);
        expect(mesh.checkCollisions).toBe(true);
    });

    it('has a rotationQuaternion', () => {
        const mesh = buildPolygonMesh(makePlaneData(), scene);
        expect(mesh.rotationQuaternion).toBeDefined();
        expect(mesh.rotationQuaternion).not.toBeNull();
    });

    it('decomposes transformation matrix into position/rotation/scale', () => {
        const position = new Vector3(5, 2, -3);
        const scale = new Vector3(2, 2, 2);
        const matrix = Matrix.Compose(scale, Quaternion.Identity(), position);

        const mesh = buildPolygonMesh(makePlaneData({ transformationMatrix: matrix }), scene);

        expect(mesh.position.x).toBeCloseTo(5, 4);
        expect(mesh.position.y).toBeCloseTo(2, 4);
        expect(mesh.position.z).toBeCloseTo(-3, 4);
        expect(mesh.scaling.x).toBeCloseTo(2, 4);
    });

    it('mesh is disposable', () => {
        const mesh = buildPolygonMesh(makePlaneData(), scene);
        expect(() => mesh.dispose()).not.toThrow();
    });
});
