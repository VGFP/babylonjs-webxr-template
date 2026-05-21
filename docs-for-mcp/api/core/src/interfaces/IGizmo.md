[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IGizmo

# Interface: IGizmo

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L62)

Interface for basic gizmo

## Extends

- [`IDisposable`](IDisposable.md)

## Extended by

- [`IAxisDragGizmo`](IAxisDragGizmo.md)
- [`IAxisScaleGizmo`](IAxisScaleGizmo.md)
- [`IBoundingBoxGizmo`](IBoundingBoxGizmo.md)
- [`IPlaneRotationGizmo`](IPlaneRotationGizmo.md)
- [`IPositionGizmo`](IPositionGizmo.md)
- [`IRotationGizmo`](IRotationGizmo.md)
- [`IScaleGizmo`](IScaleGizmo.md)
- [`ILightGizmo`](ILightGizmo.md)
- [`ICameraGizmo`](ICameraGizmo.md)
- [`IPlaneDragGizmo`](IPlaneDragGizmo.md)

## Properties

### \_rootMesh

> **\_rootMesh**: [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L66)

The root mesh of the gizmo

***

### additionalTransformNode?

> `optional` **additionalTransformNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L120)

Additional transform applied to the gizmo.
It's useful when the gizmo is attached to a bone: if the bone is part of a skeleton attached to a mesh, you should define the mesh as additionalTransformNode if you want the gizmo to be displayed at the bone's correct location.
Otherwise, as the gizmo is relative to the skeleton root, the mesh transformation will not be taken into account.

***

### anchorPoint

> **anchorPoint**: [`GizmoAnchorPoint`](../enumerations/GizmoAnchorPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L93)

Defines where the gizmo will be positioned if `updateGizmoPositionToMatchAttachedMesh` is enabled.
(Default: GizmoAnchorPoint.Origin)

***

### attachedMesh

> **attachedMesh**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](../classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L73)

Mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)
* When set, interactions will be enabled

***

### attachedNode

> **attachedNode**: [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](../classes/Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L78)

Node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or NodeTransform that will be dragged)
* When set, interactions will be enabled

***

### coordinatesMode

> **coordinatesMode**: [`GizmoCoordinatesMode`](../enumerations/GizmoCoordinatesMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L98)

Set the coordinate mode to use. By default it's local.

***

### customRotationQuaternion

> **customRotationQuaternion**: [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](../classes/Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L108)

Orientation that the gizmo will be displayed with.
When set null, default value will be used (Quaternion(0, 0, 0, 1))

***

### gizmoLayer

> **gizmoLayer**: [`UtilityLayerRenderer`](../classes/UtilityLayerRenderer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L84)

The utility layer the gizmo will be added to

***

### isHovered

> `readonly` **isHovered**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L64)

True when the mouse pointer is hovered a gizmo mesh

***

### scaleRatio

> **scaleRatio**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L68)

Ratio for the scale of the gizmo

***

### updateGizmoPositionToMatchAttachedMesh

> **updateGizmoPositionToMatchAttachedMesh**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L88)

If set the gizmo's position will be updated to match the attached mesh each frame (Default: true)

***

### updateGizmoRotationToMatchAttachedMesh

> **updateGizmoRotationToMatchAttachedMesh**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L82)

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)

***

### updateScale

> **updateScale**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L103)

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L120)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IDisposable`](IDisposable.md).[`dispose`](IDisposable.md#dispose)

***

### setCustomMesh()

> **setCustomMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L113)

Disposes and replaces the current meshes in the gizmo with the specified mesh

#### Parameters

##### mesh

[`Mesh`](../classes/Mesh.md)

The mesh to replace the default mesh of the gizmo

#### Returns

`void`
