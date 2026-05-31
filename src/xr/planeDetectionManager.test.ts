import { Matrix, Vector3, Quaternion, StandardMaterial } from '@babylonjs/core';
import { PlaneDetectionManager } from './planeDetectionManager';
import type { XrPlaneData } from './planeDetectionManager';
import { createTestScene, disposeTestScene } from '../__tests__/helpers/nullEngine';
import { createMockWebXRDefaultExperience, createMockXrPlanes } from '../__tests__/helpers/mocks';

describe('PlaneDetectionManager', () => {
    let engine: ReturnType<typeof createTestScene>['engine'];
    let scene: ReturnType<typeof createTestScene>['scene'];
    let pdm: PlaneDetectionManager;
    let mockXrPlanes: ReturnType<typeof createMockXrPlanes>;

    beforeEach(() => {
        ({ engine, scene } = createTestScene());
        const mockXr = createMockWebXRDefaultExperience();
        mockXrPlanes = createMockXrPlanes();
        pdm = new PlaneDetectionManager(scene, mockXr as any, mockXrPlanes);
    });

    afterEach(() => {
        pdm.dispose();
        disposeTestScene(scene, engine);
    });

    function makePlaneData(overrides?: Partial<XrPlaneData>): XrPlaneData {
        return {
            id: 1,
            polygonDefinition: [new Vector3(0, 0, 0), new Vector3(1, 0, 0), new Vector3(1, 0, 1), new Vector3(0, 0, 1)],
            transformationMatrix: Matrix.Compose(new Vector3(1, 1, 1), Quaternion.Identity(), new Vector3(0, 0, 0)),
            xrPlane: { orientation: 'horizontal' },
            ...overrides,
        };
    }

    describe('initPolygon()', () => {
        it('creates a mesh added to the scene', () => {
            const mesh = pdm.initPolygon(makePlaneData());
            expect(scene.meshes).toContain(mesh);
        });

        it('tracks the mesh internally', () => {
            const mesh = pdm.initPolygon(makePlaneData());
            expect(pdm.planes).toContain(mesh);
        });

        it('applies optional material', () => {
            const mat = new StandardMaterial('testMat', scene);
            const mesh = pdm.initPolygon(makePlaneData(), mat);
            expect(mesh.material).toBe(mat);
        });

        it('creates multiple independent meshes', () => {
            const m1 = pdm.initPolygon(makePlaneData({ id: 1 }));
            const m2 = pdm.initPolygon(makePlaneData({ id: 2 }));
            expect(m1).not.toBe(m2);
            expect(pdm.planes.length).toBe(2);
        });
    });

    describe('wireObservables()', () => {
        it('subscribes to onPlaneAddedObservable', () => {
            pdm.wireObservables();
            expect(mockXrPlanes.onPlaneAddedObservable.add).toHaveBeenCalled();
        });

        it('subscribes to onPlaneUpdatedObservable', () => {
            pdm.wireObservables();
            expect(mockXrPlanes.onPlaneUpdatedObservable.add).toHaveBeenCalled();
        });

        it('subscribes to onPlaneRemovedObservable', () => {
            pdm.wireObservables();
            expect(mockXrPlanes.onPlaneRemovedObservable.add).toHaveBeenCalled();
        });

        it('fires onPlaneAdded when XR detects a new plane', () => {
            pdm.wireObservables();
            const listener = vi.fn();
            pdm.onPlaneAdded.add(listener);

            const planeData = makePlaneData({ id: 42 });
            mockXrPlanes._fire('added', planeData);

            expect(listener).toHaveBeenCalledWith(planeData, expect.anything());
            expect(pdm.detectedPlanes.length).toBe(1);
        });

        it('tracks detected planes by id', () => {
            pdm.wireObservables();

            mockXrPlanes._fire('added', makePlaneData({ id: 1 }));
            mockXrPlanes._fire('added', makePlaneData({ id: 2 }));

            expect(pdm.detectedPlanes.length).toBe(2);
            expect(pdm.detectedPlanes.map((p) => p.id)).toContain(1);
            expect(pdm.detectedPlanes.map((p) => p.id)).toContain(2);
        });

        it('updates existing plane data on update event', () => {
            pdm.wireObservables();

            mockXrPlanes._fire('added', makePlaneData({ id: 1 }));
            const newPoly = [new Vector3(0, 0, 0), new Vector3(2, 0, 0), new Vector3(2, 0, 2)];
            mockXrPlanes._fire('updated', makePlaneData({ id: 1, polygonDefinition: newPoly }));

            const plane = pdm.detectedPlanes.find((p) => p.id === 1);
            expect(plane).toBeDefined();
            expect(plane!.polygonDefinition.length).toBe(3);
        });

        it('removes plane from detectedPlanes on remove event', () => {
            pdm.wireObservables();

            mockXrPlanes._fire('added', makePlaneData({ id: 1 }));
            expect(pdm.detectedPlanes.length).toBe(1);

            mockXrPlanes._fire('removed', makePlaneData({ id: 1 }));
            expect(pdm.detectedPlanes.length).toBe(0);
        });

        it('does nothing if xrPlanes is null', () => {
            const nullPdm = new PlaneDetectionManager(scene, createMockWebXRDefaultExperience() as any, null);
            expect(() => nullPdm.wireObservables()).not.toThrow();
            nullPdm.dispose();
        });
    });

    describe('dispose()', () => {
        it('clears all tracked plane meshes', () => {
            pdm.initPolygon(makePlaneData());
            pdm.initPolygon(makePlaneData({ id: 2 }));
            expect(pdm.planes.length).toBe(2);

            pdm.dispose();
            expect(pdm.planes.length).toBe(0);
        });
    });
});
