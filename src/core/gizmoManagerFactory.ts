import { AbstractMesh, GizmoManager, Scene } from '@babylonjs/core';

export interface CreateGizmoManagerOptions {
    position?: boolean;
    rotation?: boolean;
    scale?: boolean;
    boundingBox?: boolean;
    usePointerToAttachGizmos?: boolean;
    scaleRatio?: number;
    attachTo?: AbstractMesh;
    attachableMeshes?: AbstractMesh[];
}

export function createGizmoManager(scene: Scene, options: CreateGizmoManagerOptions): GizmoManager {
    const {
        position = false,
        rotation = false,
        scale = false,
        boundingBox = false,
        usePointerToAttachGizmos = false,
        scaleRatio,
        attachTo,
        attachableMeshes,
    } = options;

    const gizmo = new GizmoManager(scene);
    gizmo.positionGizmoEnabled = position;
    gizmo.rotationGizmoEnabled = rotation;
    gizmo.scaleGizmoEnabled = scale;
    gizmo.boundingBoxGizmoEnabled = boundingBox;
    gizmo.usePointerToAttachGizmos = usePointerToAttachGizmos;

    if (scaleRatio !== undefined && position && gizmo.gizmos.positionGizmo) {
        gizmo.gizmos.positionGizmo.scaleRatio = scaleRatio;
    }

    if (attachableMeshes) {
        gizmo.attachableMeshes = attachableMeshes;
    }

    if (attachTo) {
        gizmo.attachToMesh(attachTo);
    }

    return gizmo;
}
