[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DragEvent

# Type Alias: DragEvent

> **DragEvent** = `object`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragEvents.ts:8](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/pointerDragEvents.ts#L8)

Event type for drag move events

## Properties

### delta

> **delta**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragEvents.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/pointerDragEvents.ts#L12)

Delta between last drag position and current drag position in world space

***

### dragDistance

> **dragDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragEvents.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/pointerDragEvents.ts#L26)

Distance along the drag axis

***

### dragPlaneNormal

> **dragPlaneNormal**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragEvents.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/pointerDragEvents.ts#L22)

Normal of the current drag plane used during the drag

***

### dragPlanePoint

> **dragPlanePoint**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragEvents.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/pointerDragEvents.ts#L18)

Point in world space where the drag intersects the drag plane

(if validatedDrag is used, the position of the attached mesh might not equal dragPlanePoint)

***

### pointerId

> **pointerId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragEvents.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/pointerDragEvents.ts#L30)

Pointer id to use

***

### pointerInfo

> **pointerInfo**: [`Nullable`](Nullable.md)\<[`PointerInfo`](../classes/PointerInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragEvents.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/pointerDragEvents.ts#L34)

Pointer info for the event (if any)
