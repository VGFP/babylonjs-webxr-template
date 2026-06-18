[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PositionGizmo

# Class: PositionGizmo

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L76)

Gizmo that enables dragging a mesh along 3 axis

## Extends

- [`Gizmo`](Gizmo.md)

## Implements

- [`IPositionGizmo`](../interfaces/IPositionGizmo.md)

## Constructors

### Constructor

> **new PositionGizmo**(`gizmoLayer?`, `thickness?`, `gizmoManager?`, `options?`): `PositionGizmo`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:193](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L193)

Creates a PositionGizmo

#### Parameters

##### gizmoLayer?

[`UtilityLayerRenderer`](UtilityLayerRenderer.md) = `UtilityLayerRenderer.DefaultUtilityLayer`

The utility layer the gizmo will be added to

##### thickness?

`number` = `1`

display gizmo axis thickness

##### gizmoManager?

[`GizmoManager`](GizmoManager.md)

##### options?

[`PositionGizmoOptions`](../interfaces/PositionGizmoOptions.md)

More options

#### Returns

`PositionGizmo`

#### Overrides

[`Gizmo`](Gizmo.md).[`constructor`](Gizmo.md#constructor)

## Properties

### \_rootMesh

> **\_rootMesh**: [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L129)

The root mesh of the gizmo

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`_rootMesh`](../interfaces/IPositionGizmo.md#_rootmesh)

#### Inherited from

[`Gizmo`](Gizmo.md).[`_rootMesh`](Gizmo.md#_rootmesh)

***

### gizmoLayer

> **gizmoLayer**: [`UtilityLayerRenderer`](UtilityLayerRenderer.md) = `UtilityLayerRenderer.DefaultUtilityLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:314](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L314)

[Object] The utility layer the gizmo will be added to

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`gizmoLayer`](../interfaces/IPositionGizmo.md#gizmolayer)

#### Inherited from

[`Gizmo`](Gizmo.md).[`gizmoLayer`](Gizmo.md#gizmolayer)

***

### onDragEndObservable

> **onDragEndObservable**: [`Observable`](Observable.md)\<[`DragStartEndEvent`](../type-aliases/DragStartEndEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L118)

Fires an event when any of it's sub gizmos are released from dragging

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`onDragEndObservable`](../interfaces/IPositionGizmo.md#ondragendobservable)

***

### onDragObservable

> **onDragObservable**: [`Observable`](Observable.md)\<[`DragEvent`](../type-aliases/DragEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L116)

Fires an event when any of it's sub gizmos are being dragged

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`onDragObservable`](../interfaces/IPositionGizmo.md#ondragobservable)

***

### onDragStartObservable

> **onDragStartObservable**: [`Observable`](Observable.md)\<[`DragStartEndEvent`](../type-aliases/DragStartEndEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L114)

Fires an event when any of it's sub gizmos are dragged

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`onDragStartObservable`](../interfaces/IPositionGizmo.md#ondragstartobservable)

***

### xGizmo

> **xGizmo**: [`IAxisDragGizmo`](../interfaces/IAxisDragGizmo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L80)

Internal gizmo used for interactions on the x axis

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`xGizmo`](../interfaces/IPositionGizmo.md#xgizmo)

***

### xPlaneGizmo

> **xPlaneGizmo**: [`IPlaneDragGizmo`](../interfaces/IPlaneDragGizmo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L92)

Internal gizmo used for interactions on the yz plane

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`xPlaneGizmo`](../interfaces/IPositionGizmo.md#xplanegizmo)

***

### yGizmo

> **yGizmo**: [`IAxisDragGizmo`](../interfaces/IAxisDragGizmo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L84)

Internal gizmo used for interactions on the y axis

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`yGizmo`](../interfaces/IPositionGizmo.md#ygizmo)

***

### yPlaneGizmo

> **yPlaneGizmo**: [`IPlaneDragGizmo`](../interfaces/IPlaneDragGizmo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L96)

Internal gizmo used for interactions on the xz plane

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`yPlaneGizmo`](../interfaces/IPositionGizmo.md#yplanegizmo)

***

### zGizmo

> **zGizmo**: [`IAxisDragGizmo`](../interfaces/IAxisDragGizmo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L88)

Internal gizmo used for interactions on the z axis

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`zGizmo`](../interfaces/IPositionGizmo.md#zgizmo)

***

### zPlaneGizmo

> **zPlaneGizmo**: [`IPlaneDragGizmo`](../interfaces/IPlaneDragGizmo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L100)

Internal gizmo used for interactions on the xy plane

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`zPlaneGizmo`](../interfaces/IPositionGizmo.md#zplanegizmo)

***

### PreserveScaling

> `static` **PreserveScaling**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L148)

When enabled, any gizmo operation will preserve scaling sign. Default is off.
Only valid for TransformNode derived classes (Mesh, AbstractMesh, ...)

#### Inherited from

[`Gizmo`](Gizmo.md).[`PreserveScaling`](Gizmo.md#preservescaling)

***

### UseAbsoluteScaling

> `static` **UseAbsoluteScaling**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L155)

There are 2 ways to preserve scaling: using mesh scaling or absolute scaling. Depending of hierarchy, non uniform scaling and LH or RH coordinates. One is preferable than the other.
If the scaling to be preserved is the local scaling, then set this value to false.
Default is true which means scaling to be preserved is absolute one (with hierarchy applied)

#### Inherited from

[`Gizmo`](Gizmo.md).[`UseAbsoluteScaling`](Gizmo.md#useabsolutescaling)

## Accessors

### additionalTransformNode

#### Get Signature

> **get** **additionalTransformNode**(): [`TransformNode`](TransformNode.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:175](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L175)

Additional transform applied to the gizmo.
It's useful when the gizmo is attached to a bone: if the bone is part of a skeleton attached to a mesh, you should define the mesh as additionalTransformNode if you want the gizmo to be displayed at the bone's correct location.
Otherwise, as the gizmo is relative to the skeleton root, the mesh transformation will not be taken into account.

##### Returns

[`TransformNode`](TransformNode.md) \| `undefined`

#### Set Signature

> **set** **additionalTransformNode**(`transformNode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L179)

Additional transform applied to the gizmo.
It's useful when the gizmo is attached to a bone: if the bone is part of a skeleton attached to a mesh, you should define the mesh as additionalTransformNode if you want the gizmo to be displayed at the bone's correct location.
Otherwise, as the gizmo is relative to the skeleton root, the mesh transformation will not be taken into account.

##### Parameters

###### transformNode

[`TransformNode`](TransformNode.md) \| `undefined`

##### Returns

`void`

Additional transform applied to the gizmo.
It's useful when the gizmo is attached to a bone: if the bone is part of a skeleton attached to a mesh, you should define the mesh as additionalTransformNode if you want the gizmo to be displayed at the bone's correct location.
Otherwise, as the gizmo is relative to the skeleton root, the mesh transformation will not be taken into account.

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`additionalTransformNode`](../interfaces/IPositionGizmo.md#additionaltransformnode)

#### Overrides

[`Gizmo`](Gizmo.md).[`additionalTransformNode`](Gizmo.md#additionaltransformnode)

***

### anchorPoint

#### Get Signature

> **get** **anchorPoint**(): [`GizmoAnchorPoint`](../enumerations/GizmoAnchorPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:308](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L308)

Defines where the gizmo will be positioned if `updateGizmoPositionToMatchAttachedMesh` is enabled.
(Default: GizmoAnchorPoint.Origin)

##### Returns

[`GizmoAnchorPoint`](../enumerations/GizmoAnchorPoint.md)

#### Set Signature

> **set** **anchorPoint**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:301](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L301)

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

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`anchorPoint`](../interfaces/IPositionGizmo.md#anchorpoint)

#### Overrides

[`Gizmo`](Gizmo.md).[`anchorPoint`](Gizmo.md#anchorpoint)

***

### attachedMesh

#### Get Signature

> **get** **attachedMesh**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L125)

Mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)
* When set, interactions will be enabled

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

#### Set Signature

> **set** **attachedMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L128)

Mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)
* When set, interactions will be enabled

##### Parameters

###### mesh

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

##### Returns

`void`

Mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)
* When set, interactions will be enabled

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`attachedMesh`](../interfaces/IPositionGizmo.md#attachedmesh)

#### Overrides

[`Gizmo`](Gizmo.md).[`attachedMesh`](Gizmo.md#attachedmesh)

***

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L141)

Node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or NodeTransform that will be dragged)
* When set, interactions will be enabled

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

#### Set Signature

> **set** **attachedNode**(`node`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L144)

Node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or NodeTransform that will be dragged)
* When set, interactions will be enabled

##### Parameters

###### node

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

##### Returns

`void`

Node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or NodeTransform that will be dragged)
* When set, interactions will be enabled

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`attachedNode`](../interfaces/IPositionGizmo.md#attachednode)

#### Overrides

[`Gizmo`](Gizmo.md).[`attachedNode`](Gizmo.md#attachednode)

***

### coordinatesMode

#### Set Signature

> **set** **coordinatesMode**(`coordinatesMode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:317](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L317)

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

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`coordinatesMode`](../interfaces/IPositionGizmo.md#coordinatesmode)

#### Overrides

[`Gizmo`](Gizmo.md).[`coordinatesMode`](Gizmo.md#coordinatesmode)

***

### customRotationQuaternion

#### Get Signature

> **get** **customRotationQuaternion**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:257](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L257)

Orientation that the gizmo will be displayed with.
When set null, default value will be used (Quaternion(0, 0, 0, 1))

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

#### Set Signature

> **set** **customRotationQuaternion**(`customRotationQuaternion`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L261)

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

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`customRotationQuaternion`](../interfaces/IPositionGizmo.md#customrotationquaternion)

#### Overrides

[`Gizmo`](Gizmo.md).[`customRotationQuaternion`](Gizmo.md#customrotationquaternion)

***

### isDragging

#### Get Signature

> **get** **isDragging**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L164)

True when the mouse pointer is dragging a gizmo mesh

##### Returns

`boolean`

True when the mouse pointer is dragging a gizmo mesh

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`isDragging`](../interfaces/IPositionGizmo.md#isdragging)

***

### isHovered

#### Get Signature

> **get** **isHovered**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L160)

True when the mouse pointer is hovering a gizmo mesh

##### Returns

`boolean`

True when the mouse pointer is hovered a gizmo mesh

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`isHovered`](../interfaces/IPositionGizmo.md#ishovered)

#### Overrides

[`Gizmo`](Gizmo.md).[`isHovered`](Gizmo.md#ishovered)

***

### planarGizmoEnabled

#### Get Signature

> **get** **planarGizmoEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:249](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L249)

If the planar drag gizmo is enabled
setting this will enable/disable XY, XZ and YZ planes regardless of individual gizmo settings.

##### Returns

`boolean`

#### Set Signature

> **set** **planarGizmoEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L233)

If the planar drag gizmo is enabled
setting this will enable/disable XY, XZ and YZ planes regardless of individual gizmo settings.

##### Parameters

###### value

`boolean`

##### Returns

`void`

If the planar drag gizmo is enabled
setting this will enable/disable XY, XZ and YZ planes regardless of individual gizmo settings.

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`planarGizmoEnabled`](../interfaces/IPositionGizmo.md#planargizmoenabled)

***

### scaleRatio

#### Get Signature

> **get** **scaleRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:362](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L362)

Ratio for the scale of the gizmo (Default: 1)

##### Returns

`number`

#### Set Signature

> **set** **scaleRatio**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L353)

Ratio for the scale of the gizmo (Default: 1)

##### Parameters

###### value

`number`

##### Returns

`void`

Ratio for the scale of the gizmo

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`scaleRatio`](../interfaces/IPositionGizmo.md#scaleratio)

#### Overrides

[`Gizmo`](Gizmo.md).[`scaleRatio`](Gizmo.md#scaleratio)

***

### snapDistance

#### Get Signature

> **get** **snapDistance**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:346](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L346)

Drag distance in babylon units that the gizmo will snap to when dragged

##### Returns

`number`

#### Set Signature

> **set** **snapDistance**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L337)

Drag distance in babylon units that the gizmo will snap to when dragged (Default: 0)

##### Parameters

###### value

`number`

##### Returns

`void`

Drag distance in babylon units that the gizmo will snap to when dragged

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`snapDistance`](../interfaces/IPositionGizmo.md#snapdistance)

***

### updateGizmoPositionToMatchAttachedMesh

#### Get Signature

> **get** **updateGizmoPositionToMatchAttachedMesh**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:297](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L297)

If set the gizmo's position will be updated to match the attached mesh each frame (Default: true)

##### Returns

`boolean`

#### Set Signature

> **set** **updateGizmoPositionToMatchAttachedMesh**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L288)

If set the gizmo's position will be updated to match the attached mesh each frame (Default: true)

##### Parameters

###### value

`boolean`

##### Returns

`void`

If set the gizmo's position will be updated to match the attached mesh each frame (Default: true)

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`updateGizmoPositionToMatchAttachedMesh`](../interfaces/IPositionGizmo.md#updategizmopositiontomatchattachedmesh)

#### Overrides

[`Gizmo`](Gizmo.md).[`updateGizmoPositionToMatchAttachedMesh`](Gizmo.md#updategizmopositiontomatchattachedmesh)

***

### updateGizmoRotationToMatchAttachedMesh

#### Get Signature

> **get** **updateGizmoRotationToMatchAttachedMesh**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:284](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L284)

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)
NOTE: This is only possible for meshes with uniform scaling, as otherwise it's not possible to decompose the rotation

##### Returns

`boolean`

#### Set Signature

> **set** **updateGizmoRotationToMatchAttachedMesh**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:275](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L275)

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)
NOTE: This is only possible for meshes with uniform scaling, as otherwise it's not possible to decompose the rotation

##### Parameters

###### value

`boolean`

##### Returns

`void`

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`updateGizmoRotationToMatchAttachedMesh`](../interfaces/IPositionGizmo.md#updategizmorotationtomatchattachedmesh)

#### Overrides

[`Gizmo`](Gizmo.md).[`updateGizmoRotationToMatchAttachedMesh`](Gizmo.md#updategizmorotationtomatchattachedmesh)

***

### updateScale

#### Get Signature

> **get** **updateScale**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:331](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L331)

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

##### Returns

`boolean`

#### Set Signature

> **set** **updateScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:324](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L324)

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

##### Parameters

###### value

`boolean`

##### Returns

`void`

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`updateScale`](../interfaces/IPositionGizmo.md#updatescale)

#### Overrides

[`Gizmo`](Gizmo.md).[`updateScale`](Gizmo.md#updatescale)

## Methods

### addToAxisCache()

> **addToAxisCache**(`mesh`, `cache`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:371](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L371)

Builds Gizmo Axis Cache to enable features such as hover state preservation and graying out other axis during manipulation

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

Axis gizmo mesh

##### cache

[`GizmoAxisCache`](../interfaces/GizmoAxisCache.md)

Gizmo axis definition used for reactive gizmo UI

#### Returns

`void`

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`addToAxisCache`](../interfaces/IPositionGizmo.md#addtoaxiscache)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:389](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L389)

Disposes of the gizmo

#### Returns

`void`

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`dispose`](../interfaces/IPositionGizmo.md#dispose)

#### Overrides

[`Gizmo`](Gizmo.md).[`dispose`](Gizmo.md#dispose)

***

### releaseDrag()

> **releaseDrag**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:377](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L377)

Force release the drag action by code

#### Returns

`void`

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`releaseDrag`](../interfaces/IPositionGizmo.md#releasedrag)

***

### setCustomMesh()

> **setCustomMesh**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/positionGizmo.ts:408](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/positionGizmo.ts#L408)

CustomMeshes are not supported by this gizmo

#### Returns

`void`

#### Implementation of

[`IPositionGizmo`](../interfaces/IPositionGizmo.md).[`setCustomMesh`](../interfaces/IPositionGizmo.md#setcustommesh)

#### Overrides

[`Gizmo`](Gizmo.md).[`setCustomMesh`](Gizmo.md#setcustommesh)

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

#### Inherited from

[`Gizmo`](Gizmo.md).[`GizmoAxisPointerObserver`](Gizmo.md#gizmoaxispointerobserver)
