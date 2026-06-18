[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Gizmo

# Class: Gizmo

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L125)

Renders gizmos on top of an existing scene which provide controls for position, rotation, etc.

## Extended by

- [`AxisDragGizmo`](AxisDragGizmo.md)
- [`AxisScaleGizmo`](AxisScaleGizmo.md)
- [`BoundingBoxGizmo`](BoundingBoxGizmo.md)
- [`PlaneRotationGizmo`](PlaneRotationGizmo.md)
- [`PositionGizmo`](PositionGizmo.md)
- [`RotationGizmo`](RotationGizmo.md)
- [`ScaleGizmo`](ScaleGizmo.md)
- [`LightGizmo`](LightGizmo.md)
- [`CameraGizmo`](CameraGizmo.md)
- [`PlaneDragGizmo`](PlaneDragGizmo.md)
- [`SpatialAudioGizmo`](SpatialAudioGizmo.md)
- [`SlateGizmo`](../../../gui/src/classes/SlateGizmo.md)

## Implements

- [`IGizmo`](../interfaces/IGizmo.md)

## Constructors

### Constructor

> **new Gizmo**(`gizmoLayer?`): `Gizmo`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:312](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L312)

Creates a gizmo

#### Parameters

##### gizmoLayer?

[`UtilityLayerRenderer`](UtilityLayerRenderer.md) = `UtilityLayerRenderer.DefaultUtilityLayer`

The utility layer the gizmo will be added to

#### Returns

`Gizmo`

## Properties

### \_rootMesh

> **\_rootMesh**: [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L129)

The root mesh of the gizmo

#### Implementation of

[`IGizmo`](../interfaces/IGizmo.md).[`_rootMesh`](../interfaces/IGizmo.md#_rootmesh)

***

### gizmoLayer

> **gizmoLayer**: [`UtilityLayerRenderer`](UtilityLayerRenderer.md) = `UtilityLayerRenderer.DefaultUtilityLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:314](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L314)

[Object] The utility layer the gizmo will be added to

#### Implementation of

[`IGizmo`](../interfaces/IGizmo.md).[`gizmoLayer`](../interfaces/IGizmo.md#gizmolayer)

***

### PreserveScaling

> `static` **PreserveScaling**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L148)

When enabled, any gizmo operation will preserve scaling sign. Default is off.
Only valid for TransformNode derived classes (Mesh, AbstractMesh, ...)

***

### UseAbsoluteScaling

> `static` **UseAbsoluteScaling**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L155)

There are 2 ways to preserve scaling: using mesh scaling or absolute scaling. Depending of hierarchy, non uniform scaling and LH or RH coordinates. One is preferable than the other.
If the scaling to be preserved is the local scaling, then set this value to false.
Default is true which means scaling to be preserved is absolute one (with hierarchy applied)

## Accessors

### additionalTransformNode

#### Get Signature

> **get** **additionalTransformNode**(): [`TransformNode`](TransformNode.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:230](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L230)

Additional transform applied to the gizmo.
It's useful when the gizmo is attached to a bone: if the bone is part of a skeleton attached to a mesh, you should define the mesh as additionalTransformNode if you want the gizmo to be displayed at the bone's correct location.
Otherwise, as the gizmo is relative to the skeleton root, the mesh transformation will not be taken into account.

##### Returns

[`TransformNode`](TransformNode.md) \| `undefined`

#### Set Signature

> **set** **additionalTransformNode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:234](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L234)

Additional transform applied to the gizmo.
It's useful when the gizmo is attached to a bone: if the bone is part of a skeleton attached to a mesh, you should define the mesh as additionalTransformNode if you want the gizmo to be displayed at the bone's correct location.
Otherwise, as the gizmo is relative to the skeleton root, the mesh transformation will not be taken into account.

##### Parameters

###### value

[`TransformNode`](TransformNode.md) \| `undefined`

##### Returns

`void`

Additional transform applied to the gizmo.
It's useful when the gizmo is attached to a bone: if the bone is part of a skeleton attached to a mesh, you should define the mesh as additionalTransformNode if you want the gizmo to be displayed at the bone's correct location.
Otherwise, as the gizmo is relative to the skeleton root, the mesh transformation will not be taken into account.

#### Implementation of

[`IGizmo`](../interfaces/IGizmo.md).[`additionalTransformNode`](../interfaces/IGizmo.md#additionaltransformnode)

***

### anchorPoint

#### Get Signature

> **get** **anchorPoint**(): [`GizmoAnchorPoint`](../enumerations/GizmoAnchorPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L271)

Defines where the gizmo will be positioned if `updateGizmoPositionToMatchAttachedMesh` is enabled.
(Default: GizmoAnchorPoint.Origin)

##### Returns

[`GizmoAnchorPoint`](../enumerations/GizmoAnchorPoint.md)

#### Set Signature

> **set** **anchorPoint**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:268](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L268)

Defines where the gizmo will be positioned if `updateGizmoPositionToMatchAttachedMesh` is enabled.
(Default: GizmoAnchorPoint.Origin)

##### Parameters

###### value

[`GizmoAnchorPoint`](../enumerations/GizmoAnchorPoint.md)

##### Returns

`void`

Defines where the gizmo will be positioned if `updateGizmoPositionToMatchAttachedMesh` is enabled.
(Default: GizmoAnchorPoint.Origin)

#### Implementation of

[`IGizmo`](../interfaces/IGizmo.md).[`anchorPoint`](../interfaces/IGizmo.md#anchorpoint)

***

### attachedMesh

#### Get Signature

> **get** **attachedMesh**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L183)

Mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)
* When set, interactions will be enabled

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

#### Set Signature

> **set** **attachedMesh**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:186](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L186)

Mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)
* When set, interactions will be enabled

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

##### Returns

`void`

Mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)
* When set, interactions will be enabled

#### Implementation of

[`IGizmo`](../interfaces/IGizmo.md).[`attachedMesh`](../interfaces/IGizmo.md#attachedmesh)

***

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:198](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L198)

Node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or NodeTransform that will be dragged)
* When set, interactions will be enabled

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

#### Set Signature

> **set** **attachedNode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L201)

Node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or NodeTransform that will be dragged)
* When set, interactions will be enabled

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

##### Returns

`void`

Node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or NodeTransform that will be dragged)
* When set, interactions will be enabled

#### Implementation of

[`IGizmo`](../interfaces/IGizmo.md).[`attachedNode`](../interfaces/IGizmo.md#attachednode)

***

### coordinatesMode

#### Get Signature

> **get** **coordinatesMode**(): [`GizmoCoordinatesMode`](../enumerations/GizmoCoordinatesMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:287](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L287)

Set the coordinate mode to use. By default it's local.

##### Returns

[`GizmoCoordinatesMode`](../enumerations/GizmoCoordinatesMode.md)

#### Set Signature

> **set** **coordinatesMode**(`coordinatesMode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L280)

Set the coordinate system to use. By default it's local.
But it's possible for a user to tweak so its local for translation and world for rotation.
In that case, setting the coordinate system will change `updateGizmoRotationToMatchAttachedMesh` and `updateGizmoPositionToMatchAttachedMesh`

##### Parameters

###### coordinatesMode

[`GizmoCoordinatesMode`](../enumerations/GizmoCoordinatesMode.md)

##### Returns

`void`

Set the coordinate mode to use. By default it's local.

#### Implementation of

[`IGizmo`](../interfaces/IGizmo.md).[`coordinatesMode`](../interfaces/IGizmo.md#coordinatesmode)

***

### customRotationQuaternion

#### Get Signature

> **get** **customRotationQuaternion**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:328](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L328)

Orientation that the gizmo will be displayed with.
When set null, default value will be used (Quaternion(0, 0, 0, 1))

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

#### Set Signature

> **set** **customRotationQuaternion**(`customRotationQuaternion`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L332)

Orientation that the gizmo will be displayed with.
When set null, default value will be used (Quaternion(0, 0, 0, 1))

##### Parameters

###### customRotationQuaternion

[`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

##### Returns

`void`

Orientation that the gizmo will be displayed with.
When set null, default value will be used (Quaternion(0, 0, 0, 1))

#### Implementation of

[`IGizmo`](../interfaces/IGizmo.md).[`customRotationQuaternion`](../interfaces/IGizmo.md#customrotationquaternion)

***

### isHovered

#### Get Signature

> **get** **isHovered**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:171](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L171)

True when the mouse pointer is hovered a gizmo mesh

##### Returns

`boolean`

True when the mouse pointer is hovered a gizmo mesh

#### Implementation of

[`IGizmo`](../interfaces/IGizmo.md).[`isHovered`](../interfaces/IGizmo.md#ishovered)

***

### scaleRatio

#### Get Signature

> **get** **scaleRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L164)

Ratio for the scale of the gizmo

##### Returns

`number`

#### Set Signature

> **set** **scaleRatio**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L160)

Ratio for the scale of the gizmo (Default: 1)

##### Parameters

###### value

`number`

##### Returns

`void`

Ratio for the scale of the gizmo

#### Implementation of

[`IGizmo`](../interfaces/IGizmo.md).[`scaleRatio`](../interfaces/IGizmo.md#scaleratio)

***

### updateGizmoPositionToMatchAttachedMesh

#### Get Signature

> **get** **updateGizmoPositionToMatchAttachedMesh**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L260)

If set the gizmo's position will be updated to match the attached mesh each frame (Default: true)

##### Returns

`boolean`

#### Set Signature

> **set** **updateGizmoPositionToMatchAttachedMesh**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:257](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L257)

If set the gizmo's position will be updated to match the attached mesh each frame (Default: true)

##### Parameters

###### value

`boolean`

##### Returns

`void`

If set the gizmo's position will be updated to match the attached mesh each frame (Default: true)

#### Implementation of

[`IGizmo`](../interfaces/IGizmo.md).[`updateGizmoPositionToMatchAttachedMesh`](../interfaces/IGizmo.md#updategizmopositiontomatchattachedmesh)

***

### updateGizmoRotationToMatchAttachedMesh

#### Get Signature

> **get** **updateGizmoRotationToMatchAttachedMesh**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L251)

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)

##### Returns

`boolean`

#### Set Signature

> **set** **updateGizmoRotationToMatchAttachedMesh**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L248)

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)
NOTE: This is only possible for meshes with uniform scaling, as otherwise it's not possible to decompose the rotation

##### Parameters

###### value

`boolean`

##### Returns

`void`

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)

#### Implementation of

[`IGizmo`](../interfaces/IGizmo.md).[`updateGizmoRotationToMatchAttachedMesh`](../interfaces/IGizmo.md#updategizmorotationtomatchattachedmesh)

***

### updateScale

#### Get Signature

> **get** **updateScale**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:298](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L298)

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

##### Returns

`boolean`

#### Set Signature

> **set** **updateScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:295](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L295)

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

##### Parameters

###### value

`boolean`

##### Returns

`void`

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

#### Implementation of

[`IGizmo`](../interfaces/IGizmo.md).[`updateScale`](../interfaces/IGizmo.md#updatescale)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:685](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L685)

Disposes of the gizmo

#### Returns

`void`

#### Implementation of

[`IGizmo`](../interfaces/IGizmo.md).[`dispose`](../interfaces/IGizmo.md#dispose)

***

### setCustomMesh()

> **setCustomMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:212](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L212)

Disposes and replaces the current meshes in the gizmo with the specified mesh

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

The mesh to replace the default mesh of the gizmo

#### Returns

`void`

#### Implementation of

[`IGizmo`](../interfaces/IGizmo.md).[`setCustomMesh`](../interfaces/IGizmo.md#setcustommesh)

***

### GizmoAxisPointerObserver()

> `static` **GizmoAxisPointerObserver**(`gizmoLayer`, `gizmoAxisCache`): [`Observer`](Observer.md)\<[`PointerInfo`](PointerInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:613](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L613)

Subscribes to pointer up, down, and hover events. Used for responsive gizmos.

#### Parameters

##### gizmoLayer

[`UtilityLayerRenderer`](UtilityLayerRenderer.md)

The utility layer the gizmo will be added to

##### gizmoAxisCache

`Map`\<[`Mesh`](Mesh.md), [`GizmoAxisCache`](../interfaces/GizmoAxisCache.md)\>

Gizmo axis definition used for reactive gizmo UI

#### Returns

[`Observer`](Observer.md)\<[`PointerInfo`](PointerInfo.md)\>

pointerObserver
