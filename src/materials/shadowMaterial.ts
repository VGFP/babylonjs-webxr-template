import { IShadowLight, Mesh, Vector3 } from '@babylonjs/core';
import { ShadowOnlyMaterial } from '@babylonjs/materials';

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
