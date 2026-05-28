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

export function initPolygon(
    scene: Scene,
    plane: XrPlaneData,
    mat?: Material,
): Mesh {
    plane.polygonDefinition.push(plane.polygonDefinition[0]);
    const builder = new PolygonMeshBuilder(
        plane.xrPlane.orientation,
        plane.polygonDefinition.map((p) => new Vector2(p.x, p.z)),
        scene,
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
    return polygon;
}

export function applyShadowMaterialFacing(
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

export function wirePlaneObservables(
    xr: WebXRDefaultExperience,
    xrPlanes: any,
    cleanup: { dispose(): void }[],
): void {
    if (!xrPlanes) return;

    const addedObs = xrPlanes.onPlaneAddedObservable.add((plane: XrPlaneData) => {
        console.log(`found wall`, plane);
    });

    const updatedObs = xrPlanes.onPlaneUpdatedObservable.add(() => {});
    const removedObs = xrPlanes.onPlaneRemovedObservable.add(() => {});

    cleanup.push({
        dispose: () => {
            xrPlanes.onPlaneAddedObservable.remove(addedObs);
            xrPlanes.onPlaneUpdatedObservable.remove(updatedObs);
            xrPlanes.onPlaneRemovedObservable.remove(removedObs);
        },
    });
}
