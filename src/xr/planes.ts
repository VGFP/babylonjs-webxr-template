import {
    Color3,
    IShadowLight,
    Material,
    Mesh,
    PolygonMeshBuilder,
    Quaternion,
    Scene,
    Vector2,
    Vector3,
    WebXRDefaultExperience,
} from '@babylonjs/core';
import { ShadowOnlyMaterial } from '@babylonjs/materials';

export interface XrPlaneData {
    id: number;
    polygonDefinition: Vector3[];
    transformationMatrix: import('@babylonjs/core').Matrix;
    xrPlane: { orientation: string };
    mesh?: Mesh;
}

export class PlaneManager {
    private _scene: Scene;
    private _xr: WebXRDefaultExperience;
    private _xrPlanes: any;
    private _cleanup: { dispose(): void }[] = [];
    private _planes: Mesh[] = [];

    constructor(scene: Scene, xr: WebXRDefaultExperience, xrPlanes: any) {
        this._scene = scene;
        this._xr = xr;
        this._xrPlanes = xrPlanes;
    }

    initPolygon(plane: XrPlaneData, mat?: Material): Mesh {
        plane.polygonDefinition.push(plane.polygonDefinition[0]);
        const builder = new PolygonMeshBuilder(
            plane.xrPlane.orientation,
            plane.polygonDefinition.map((p) => new Vector2(p.x, p.z)),
            this._scene,
        );
        const polygon = builder.build(false, 0.01);
        polygon.createNormals(false);
        if (mat) {
            polygon.material = mat;
        }
        polygon.rotationQuaternion = new Quaternion();
        polygon.checkCollisions = true;
        polygon.receiveShadows = true;
        plane.transformationMatrix.decompose(polygon.scaling, polygon.rotationQuaternion, polygon.position);
        this._planes.push(polygon);
        return polygon;
    }

    applyShadowMaterialFacing(
        mesh: Mesh,
        shadowMat: ShadowOnlyMaterial,
        light: IShadowLight,
    ): void {
        let lightDirection: Vector3 | null = null;
        if ((light as any).direction) {
            lightDirection = ((light as any).direction as Vector3).clone().normalize();
        } else if ((light as any).getAbsolutePosition) {
            const lightPosition = (light as any).getAbsolutePosition() as Vector3;
            const meshCenter = mesh.getBoundingInfo().boundingBox.centerWorld;
            lightDirection = meshCenter.subtract(lightPosition).normalize();
        }
        if (lightDirection) {
            const normal = Vector3.TransformNormal(Vector3.Up(), mesh.getWorldMatrix()).normalize();
            const facing = Vector3.Dot(normal, lightDirection) < 0;
            shadowMat.activeLight = light;
            shadowMat.alpha = facing ? 0.4 : 0;
        }
    }

    wireObservables(): void {
        if (!this._xrPlanes) return;

        const addedObs = this._xrPlanes.onPlaneAddedObservable.add((plane: XrPlaneData) => {
            console.log(`found wall`, plane);
        });

        const updatedObs = this._xrPlanes.onPlaneUpdatedObservable.add(() => {});
        const removedObs = this._xrPlanes.onPlaneRemovedObservable.add(() => {});

        this._cleanup.push({
            dispose: () => {
                this._xrPlanes.onPlaneAddedObservable.remove(addedObs);
                this._xrPlanes.onPlaneUpdatedObservable.remove(updatedObs);
                this._xrPlanes.onPlaneRemovedObservable.remove(removedObs);
            },
        });
    }

    get planes(): Mesh[] { return this._planes; }

    dispose(): void {
        for (const item of this._cleanup) item.dispose();
        this._cleanup = [];
        for (const mesh of this._planes) mesh.dispose();
        this._planes = [];
    }
}
