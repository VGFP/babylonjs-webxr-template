[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GizmoAxisCache

# Interface: GizmoAxisCache

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L24)

Cache built by each axis. Used for managing state between all elements of gizmo for enhanced UI

## Properties

### active

> **active**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L36)

Used to indicate Active state of the Gizmo

***

### colliderMeshes

> **colliderMeshes**: [`Mesh`](../classes/Mesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L28)

Mesh used to detect user interaction with Gizmo

***

### disableMaterial

> **disableMaterial**: [`StandardMaterial`](../classes/StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L34)

Material used to indicate disabled state of the Gizmo

***

### dragBehavior

> **dragBehavior**: [`PointerDragBehavior`](../classes/PointerDragBehavior.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L38)

DragBehavior

***

### gizmoMeshes

> **gizmoMeshes**: [`Mesh`](../classes/Mesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L26)

Mesh used to render the Gizmo

***

### hoverMaterial

> **hoverMaterial**: [`StandardMaterial`](../classes/StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L32)

Material used to indicate hover state of the Gizmo

***

### material

> **material**: [`StandardMaterial`](../classes/StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L30)

Material used to indicate color of gizmo mesh
