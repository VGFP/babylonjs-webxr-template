import { Vector3 } from '@babylonjs/core';

export function polygonArea(points: Vector3[]): number {
    let area = 0;
    for (let i = 0; i < points.length; i++) {
        const j = (i + 1) % points.length;
        area += points[i].x * points[j].z;
        area -= points[j].x * points[i].z;
    }
    return Math.abs(area / 2);
}
