[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IRotationGizmo

# Interface: IRotationGizmo

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L20)

Interface for rotation gizmo

## Extends

- [`IGizmo`](IGizmo.md)

## Properties

### \_rootMesh

> **\_rootMesh**: [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L66)

The root mesh of the gizmo

#### Inherited from

[`IGizmo`](IGizmo.md).[`_rootMesh`](IGizmo.md#_rootmesh)

***

### additionalTransformNode?

> `optional` **additionalTransformNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L120)

Additional transform applied to the gizmo.
It's useful when the gizmo is attached to a bone: if the bone is part of a skeleton attached to a mesh, you should define the mesh as additionalTransformNode if you want the gizmo to be displayed at the bone's correct location.
Otherwise, as the gizmo is relative to the skeleton root, the mesh transformation will not be taken into account.

#### Inherited from

[`IGizmo`](IGizmo.md).[`additionalTransformNode`](IGizmo.md#additionaltransformnode)

***

### anchorPoint

> **anchorPoint**: [`GizmoAnchorPoint`](../enumerations/GizmoAnchorPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L93)

Defines where the gizmo will be positioned if `updateGizmoPositionToMatchAttachedMesh` is enabled.
(Default: GizmoAnchorPoint.Origin)

#### Inherited from

[`IGizmo`](IGizmo.md).[`anchorPoint`](IGizmo.md#anchorpoint)

***

### attachedMesh

> **attachedMesh**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](../classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L73)

Mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)
* When set, interactions will be enabled

#### Inherited from

[`IGizmo`](IGizmo.md).[`attachedMesh`](IGizmo.md#attachedmesh)

***

### attachedNode

> **attachedNode**: [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](../classes/Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L78)

Node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or NodeTransform that will be dragged)
* When set, interactions will be enabled

#### Inherited from

[`IGizmo`](IGizmo.md).[`attachedNode`](IGizmo.md#attachednode)

***

### coordinatesMode

> **coordinatesMode**: [`GizmoCoordinatesMode`](../enumerations/GizmoCoordinatesMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L98)

Set the coordinate mode to use. By default it's local.

#### Inherited from

[`IGizmo`](IGizmo.md).[`coordinatesMode`](IGizmo.md#coordinatesmode)

***

### customRotationQuaternion

> **customRotationQuaternion**: [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](../classes/Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L108)

Orientation that the gizmo will be displayed with.
When set null, default value will be used (Quaternion(0, 0, 0, 1))

#### Inherited from

[`IGizmo`](IGizmo.md).[`customRotationQuaternion`](IGizmo.md#customrotationquaternion)

***

### gizmoLayer

> **gizmoLayer**: [`UtilityLayerRenderer`](../classes/UtilityLayerRenderer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L84)

The utility layer the gizmo will be added to

#### Inherited from

[`IGizmo`](IGizmo.md).[`gizmoLayer`](IGizmo.md#gizmolayer)

***

### isDragging

> `readonly` **isDragging**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L22)

True when the mouse pointer is dragging a gizmo mesh

***

### isHovered

> `readonly` **isHovered**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L64)

True when the mouse pointer is hovered a gizmo mesh

#### Inherited from

[`IGizmo`](IGizmo.md).[`isHovered`](IGizmo.md#ishovered)

***

### onDragEndObservable

> **onDragEndObservable**: [`Observable`](../classes/Observable.md)\<[`DragStartEndEvent`](../type-aliases/DragStartEndEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L34)

Fires an event when any of it's sub gizmos are released from dragging

***

### onDragObservable

> **onDragObservable**: [`Observable`](../classes/Observable.md)\<[`DragEvent`](../type-aliases/DragEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L32)

Fires an event when any of it's sub gizmos are being dragged

***

### onDragStartObservable

> **onDragStartObservable**: [`Observable`](../classes/Observable.md)\<[`DragStartEndEvent`](../type-aliases/DragStartEndEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L30)

Fires an event when any of it's sub gizmos are dragged

***

### scaleRatio

> **scaleRatio**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L68)

Ratio for the scale of the gizmo

#### Inherited from

[`IGizmo`](IGizmo.md).[`scaleRatio`](IGizmo.md#scaleratio)

***

### sensitivity

> **sensitivity**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L38)

Custom sensitivity value for the drag strength

***

### snapDistance

> **snapDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L36)

Drag distance in babylon units that the gizmo will snap to when dragged

***

### updateGizmoPositionToMatchAttachedMesh

> **updateGizmoPositionToMatchAttachedMesh**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L88)

If set the gizmo's position will be updated to match the attached mesh each frame (Default: true)

#### Inherited from

[`IGizmo`](IGizmo.md).[`updateGizmoPositionToMatchAttachedMesh`](IGizmo.md#updategizmopositiontomatchattachedmesh)

***

### updateGizmoRotationToMatchAttachedMesh

> **updateGizmoRotationToMatchAttachedMesh**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L82)

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)

#### Inherited from

[`IGizmo`](IGizmo.md).[`updateGizmoRotationToMatchAttachedMesh`](IGizmo.md#updategizmorotationtomatchattachedmesh)

***

### updateScale

> **updateScale**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L103)

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

#### Inherited from

[`IGizmo`](IGizmo.md).[`updateScale`](IGizmo.md#updatescale)

***

### xGizmo

> **xGizmo**: [`IPlaneRotationGizmo`](IPlaneRotationGizmo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L24)

Internal gizmo used for interactions on the x axis

***

### yGizmo

> **yGizmo**: [`IPlaneRotationGizmo`](IPlaneRotationGizmo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L26)

Internal gizmo used for interactions on the y axis

***

### zGizmo

> **zGizmo**: [`IPlaneRotationGizmo`](IPlaneRotationGizmo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L28)

Internal gizmo used for interactions on the z axis

## Methods

### addToAxisCache()

> **addToAxisCache**(`mesh`, `cache`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L44)

Builds Gizmo Axis Cache to enable features such as hover state preservation and graying out other axis during manipulation

#### Parameters

##### mesh

[`Mesh`](../classes/Mesh.md)

Axis gizmo mesh

##### cache

[`GizmoAxisCache`](GizmoAxisCache.md)

Gizmo axis definition used for reactive gizmo UI

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L120)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IGizmo`](IGizmo.md).[`dispose`](IGizmo.md#dispose)

***

### releaseDrag()

> **releaseDrag**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L48)

Force release the drag action by code

#### Returns

`void`

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

#### Inherited from

[`IGizmo`](IGizmo.md).[`setCustomMesh`](IGizmo.md#setcustommesh)
