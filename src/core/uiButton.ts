import { ActionManager, ExecuteCodeAction, Mesh, MeshBuilder, Scene, TransformNode, Vector3 } from '@babylonjs/core';
import '@babylonjs/core/Collisions';
import { AdvancedDynamicTexture } from '@babylonjs/gui/2D/advancedDynamicTexture';
import { Rectangle } from '@babylonjs/gui/2D/controls/rectangle';

export interface CreateUiButtonOptions {
    name: string;
    width: number;
    height: number;
    position: Vector3;
    parent?: TransformNode;
    rotation?: Vector3;
    bgColor: string;
    borderColor: string;
    cornerRadius?: number;
    borderThickness?: number;
    textureWidth?: number;
    textureHeight?: number;
    onClick?: () => void;
}

export interface CreateUiButtonResult {
    plane: Mesh;
    texture: AdvancedDynamicTexture;
    rect: Rectangle;
}

export function createUiButton(scene: Scene, options: CreateUiButtonOptions): CreateUiButtonResult {
    const {
        name,
        width,
        height,
        position,
        parent,
        rotation,
        bgColor,
        borderColor,
        cornerRadius = 25,
        borderThickness = 8,
        textureWidth = 512,
        textureHeight,
        onClick,
    } = options;

    const plane = MeshBuilder.CreatePlane(name, { width, height }, scene);
    if (parent) {
        plane.parent = parent;
    }
    plane.position = position;
    if (rotation) {
        plane.rotation = rotation;
    }

    const computedTextureHeight = textureHeight ?? Math.round(textureWidth * (height / width));
    const texture = AdvancedDynamicTexture.CreateForMesh(plane, textureWidth, computedTextureHeight);
    texture.background = 'transparent';

    const rect = new Rectangle(`${name}_rect`);
    rect.width = 1;
    rect.height = 1;
    rect.cornerRadius = cornerRadius;
    rect.thickness = borderThickness;
    rect.color = borderColor;
    rect.background = bgColor;
    rect.isPointerBlocker = true;
    texture.addControl(rect);

    if (onClick) {
        plane.actionManager = new ActionManager(scene);
        plane.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnPickTrigger, onClick));
    }

    return { plane, texture, rect };
}
