import {
    Material,
    Mesh,
    PolygonMeshBuilder,
    Quaternion,
    Scene,
    Vector2,
} from '@babylonjs/core';
import earcut from 'earcut';

export interface PolygonPlaneData {
    polygonDefinition: { x: number; z: number }[];
    transformationMatrix: import('@babylonjs/core').Matrix;
    orientation: string;
}

export function buildPolygonMesh(
    plane: PolygonPlaneData,
    scene: Scene,
    mat?: Material,
): Mesh {
    const closedPoints = [...plane.polygonDefinition, plane.polygonDefinition[0]];
    const builder = new PolygonMeshBuilder(
        plane.orientation,
        closedPoints.map((p) => new Vector2(p.x, p.z)),
        scene,
        earcut,
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
