import {
    Mesh,
    Observable,
    Scene,
    Vector3,
    WebXRDefaultExperience,
} from '@babylonjs/core';

import { applyShadowMaterialFacing } from '../materials';
import { buildPolygonMesh } from '../meshes';

export interface XrPlaneData {
    id: number;
    polygonDefinition: Vector3[];
    transformationMatrix: import('@babylonjs/core').Matrix;
    xrPlane: { orientation: string };
    mesh?: Mesh;
}

export class PlaneDetectionManager {
    private _scene: Scene;
    private _xr: WebXRDefaultExperience;
    private _xrPlanes: any;
    private _cleanup: { dispose(): void }[] = [];
    private _planes: Mesh[] = [];
    private _detectedPlanes: Map<number, XrPlaneData> = new Map();
    public onPlaneAdded: Observable<XrPlaneData> = new Observable();

    constructor(scene: Scene, xr: WebXRDefaultExperience, xrPlanes: any) {
        this._scene = scene;
        this._xr = xr;
        this._xrPlanes = xrPlanes;
    }

    initPolygon(plane: XrPlaneData, mat?: import('@babylonjs/core').Material): Mesh {
        const polygon = buildPolygonMesh(
            {
                polygonDefinition: plane.polygonDefinition,
                transformationMatrix: plane.transformationMatrix,
                orientation: plane.xrPlane.orientation,
            },
            this._scene,
            mat,
        );
        this._planes.push(polygon);
        return polygon;
    }

    wireObservables(): void {
        if (!this._xrPlanes) return;

        const addedObs = this._xrPlanes.onPlaneAddedObservable.add((plane: XrPlaneData) => {
            this._detectedPlanes.set(plane.id, plane);
            this.onPlaneAdded.notifyObservers(plane);
        });

        const updatedObs = this._xrPlanes.onPlaneUpdatedObservable.add((plane: XrPlaneData) => {
            this._detectedPlanes.set(plane.id, plane);
        });

        const removedObs = this._xrPlanes.onPlaneRemovedObservable.add((plane: XrPlaneData) => {
            this._detectedPlanes.delete(plane.id);
        });

        this._cleanup.push({
            dispose: () => {
                this._xrPlanes.onPlaneAddedObservable.remove(addedObs);
                this._xrPlanes.onPlaneUpdatedObservable.remove(updatedObs);
                this._xrPlanes.onPlaneRemovedObservable.remove(removedObs);
            },
        });
    }

    get planes(): Mesh[] { return this._planes; }

    get detectedPlanes(): XrPlaneData[] {
        return Array.from(this._detectedPlanes.values());
    }

    dispose(): void {
        for (const item of this._cleanup) item.dispose();
        this._cleanup = [];
        for (const mesh of this._planes) mesh.dispose();
        this._planes = [];
    }
}
