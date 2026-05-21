[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RotationGizmo

# Class: RotationGizmo

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L98)

Gizmo that enables rotating a mesh along 3 axis

## Extends

- [`Gizmo`](Gizmo.md)

## Implements

- [`IRotationGizmo`](../interfaces/IRotationGizmo.md)

## Constructors

### Constructor

> **new RotationGizmo**(`gizmoLayer?`, `tessellation?`, `useEulerRotation?`, `thickness?`, `gizmoManager?`, `options?`): `RotationGizmo`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L217)

Creates a RotationGizmo

#### Parameters

##### gizmoLayer?

[`UtilityLayerRenderer`](UtilityLayerRenderer.md) = `UtilityLayerRenderer.DefaultUtilityLayer`

The utility layer the gizmo will be added to

##### tessellation?

`number` = `32`

Amount of tessellation to be used when creating rotation circles

##### useEulerRotation?

`boolean` = `false`

Use and update Euler angle instead of quaternion

##### thickness?

`number` = `1`

display gizmo axis thickness

##### gizmoManager?

[`GizmoManager`](GizmoManager.md)

Gizmo manager

##### options?

[`RotationGizmoOptions`](../interfaces/RotationGizmoOptions.md)

More options

#### Returns

`RotationGizmo`

#### Overrides

[`Gizmo`](Gizmo.md).[`constructor`](Gizmo.md#constructor)

## Properties

### \_rootMesh

> **\_rootMesh**: [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L129)

The root mesh of the gizmo

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`_rootMesh`](../interfaces/IRotationGizmo.md#_rootmesh)

#### Inherited from

[`Gizmo`](Gizmo.md).[`_rootMesh`](Gizmo.md#_rootmesh)

***

### gizmoLayer

> **gizmoLayer**: [`UtilityLayerRenderer`](UtilityLayerRenderer.md) = `UtilityLayerRenderer.DefaultUtilityLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:314](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L314)

[Object] The utility layer the gizmo will be added to

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`gizmoLayer`](../interfaces/IRotationGizmo.md#gizmolayer)

#### Inherited from

[`Gizmo`](Gizmo.md).[`gizmoLayer`](Gizmo.md#gizmolayer)

***

### onDragEndObservable

> **onDragEndObservable**: [`Observable`](Observable.md)\<[`DragStartEndEvent`](../type-aliases/DragStartEndEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L117)

Fires an event when any of it's sub gizmos are released from dragging

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`onDragEndObservable`](../interfaces/IRotationGizmo.md#ondragendobservable)

***

### onDragObservable

> **onDragObservable**: [`Observable`](Observable.md)\<[`DragEvent`](../type-aliases/DragEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L115)

Fires an event when any of it's sub gizmos are being dragged

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`onDragObservable`](../interfaces/IRotationGizmo.md#ondragobservable)

***

### onDragStartObservable

> **onDragStartObservable**: [`Observable`](Observable.md)\<[`DragStartEndEvent`](../type-aliases/DragStartEndEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L113)

Fires an event when any of it's sub gizmos are dragged

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`onDragStartObservable`](../interfaces/IRotationGizmo.md#ondragstartobservable)

***

### xGizmo

> **xGizmo**: [`IPlaneRotationGizmo`](../interfaces/IPlaneRotationGizmo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L102)

Internal gizmo used for interactions on the x axis

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`xGizmo`](../interfaces/IRotationGizmo.md#xgizmo)

***

### yGizmo

> **yGizmo**: [`IPlaneRotationGizmo`](../interfaces/IPlaneRotationGizmo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L106)

Internal gizmo used for interactions on the y axis

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`yGizmo`](../interfaces/IRotationGizmo.md#ygizmo)

***

### zGizmo

> **zGizmo**: [`IPlaneRotationGizmo`](../interfaces/IPlaneRotationGizmo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L110)

Internal gizmo used for interactions on the z axis

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`zGizmo`](../interfaces/IRotationGizmo.md#zgizmo)

***

### PreserveScaling

> `static` **PreserveScaling**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L148)

When enabled, any gizmo operation will preserve scaling sign. Default is off.
Only valid for TransformNode derived classes (Mesh, AbstractMesh, ...)

#### Inherited from

[`Gizmo`](Gizmo.md).[`PreserveScaling`](Gizmo.md#preservescaling)

***

### UseAbsoluteScaling

> `static` **UseAbsoluteScaling**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L155)

There are 2 ways to preserve scaling: using mesh scaling or absolute scaling. Depending of hierarchy, non uniform scaling and LH or RH coordinates. One is preferable than the other.
If the scaling to be preserved is the local scaling, then set this value to false.
Default is true which means scaling to be preserved is absolute one (with hierarchy applied)

#### Inherited from

[`Gizmo`](Gizmo.md).[`UseAbsoluteScaling`](Gizmo.md#useabsolutescaling)

## Accessors

### additionalTransformNode

#### Get Signature

> **get** **additionalTransformNode**(): [`TransformNode`](TransformNode.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:197](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L197)

Additional transform applied to the gizmo.
It's useful when the gizmo is attached to a bone: if the bone is part of a skeleton attached to a mesh, you should define the mesh as additionalTransformNode if you want the gizmo to be displayed at the bone's correct location.
Otherwise, as the gizmo is relative to the skeleton root, the mesh transformation will not be taken into account.

##### Returns

[`TransformNode`](TransformNode.md) \| `undefined`

#### Set Signature

> **set** **additionalTransformNode**(`transformNode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L201)

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

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`additionalTransformNode`](../interfaces/IRotationGizmo.md#additionaltransformnode)

#### Overrides

[`Gizmo`](Gizmo.md).[`additionalTransformNode`](Gizmo.md#additionaltransformnode)

***

### anchorPoint

#### Get Signature

> **get** **anchorPoint**(): [`GizmoAnchorPoint`](../enumerations/GizmoAnchorPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:298](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L298)

Defines where the gizmo will be positioned if `updateGizmoPositionToMatchAttachedMesh` is enabled.
(Default: GizmoAnchorPoint.Origin)

##### Returns

[`GizmoAnchorPoint`](../enumerations/GizmoAnchorPoint.md)

#### Set Signature

> **set** **anchorPoint**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:291](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L291)

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

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`anchorPoint`](../interfaces/IRotationGizmo.md#anchorpoint)

#### Overrides

[`Gizmo`](Gizmo.md).[`anchorPoint`](Gizmo.md#anchorpoint)

***

### attachedMesh

#### Get Signature

> **get** **attachedMesh**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L127)

Mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)
* When set, interactions will be enabled

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

#### Set Signature

> **set** **attachedMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L130)

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

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`attachedMesh`](../interfaces/IRotationGizmo.md#attachedmesh)

#### Overrides

[`Gizmo`](Gizmo.md).[`attachedMesh`](Gizmo.md#attachedmesh)

***

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L144)

Node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or NodeTransform that will be dragged)
* When set, interactions will be enabled

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

#### Set Signature

> **set** **attachedNode**(`node`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:147](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L147)

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

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`attachedNode`](../interfaces/IRotationGizmo.md#attachednode)

#### Overrides

[`Gizmo`](Gizmo.md).[`attachedNode`](Gizmo.md#attachednode)

***

### coordinatesMode

#### Set Signature

> **set** **coordinatesMode**(`coordinatesMode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:307](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L307)

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

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`coordinatesMode`](../interfaces/IRotationGizmo.md#coordinatesmode)

#### Overrides

[`Gizmo`](Gizmo.md).[`coordinatesMode`](Gizmo.md#coordinatesmode)

***

### customRotationQuaternion

#### Get Signature

> **get** **customRotationQuaternion**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:356](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L356)

Orientation that the gizmo will be displayed with.
When set null, default value will be used (Quaternion(0, 0, 0, 1))

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

#### Set Signature

> **set** **customRotationQuaternion**(`customRotationQuaternion`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:360](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L360)

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

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`customRotationQuaternion`](../interfaces/IRotationGizmo.md#customrotationquaternion)

#### Overrides

[`Gizmo`](Gizmo.md).[`customRotationQuaternion`](Gizmo.md#customrotationquaternion)

***

### isDragging

#### Get Signature

> **get** **isDragging**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L193)

True when the mouse pointer is dragging a gizmo mesh

##### Returns

`boolean`

True when the mouse pointer is dragging a gizmo mesh

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`isDragging`](../interfaces/IRotationGizmo.md#isdragging)

***

### isHovered

#### Get Signature

> **get** **isHovered**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L186)

True when the mouse pointer is hovering a gizmo mesh

##### Returns

`boolean`

True when the mouse pointer is hovered a gizmo mesh

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`isHovered`](../interfaces/IRotationGizmo.md#ishovered)

#### Overrides

[`Gizmo`](Gizmo.md).[`isHovered`](Gizmo.md#ishovered)

***

### scaleRatio

#### Get Signature

> **get** **scaleRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:348](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L348)

Ratio for the scale of the gizmo (Default: 1)

##### Returns

`number`

#### Set Signature

> **set** **scaleRatio**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:341](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L341)

Ratio for the scale of the gizmo (Default: 1)

##### Parameters

###### value

`number`

##### Returns

`void`

Ratio for the scale of the gizmo

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`scaleRatio`](../interfaces/IRotationGizmo.md#scaleratio)

#### Overrides

[`Gizmo`](Gizmo.md).[`scaleRatio`](Gizmo.md#scaleratio)

***

### sensitivity

#### Get Signature

> **get** **sensitivity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L179)

Custom sensitivity value for the drag strength

##### Returns

`number`

#### Set Signature

> **set** **sensitivity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L170)

Sensitivity factor for dragging (Default: 1)

##### Parameters

###### value

`number`

##### Returns

`void`

Custom sensitivity value for the drag strength

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`sensitivity`](../interfaces/IRotationGizmo.md#sensitivity)

***

### snapDistance

#### Get Signature

> **get** **snapDistance**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:334](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L334)

Drag distance in babylon units that the gizmo will snap to when dragged

##### Returns

`number`

#### Set Signature

> **set** **snapDistance**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:327](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L327)

Drag distance in babylon units that the gizmo will snap to when dragged (Default: 0)

##### Parameters

###### value

`number`

##### Returns

`void`

Drag distance in babylon units that the gizmo will snap to when dragged

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`snapDistance`](../interfaces/IRotationGizmo.md#snapdistance)

***

### updateGizmoPositionToMatchAttachedMesh

#### Get Signature

> **get** **updateGizmoPositionToMatchAttachedMesh**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L287)

If set the gizmo's position will be updated to match the attached mesh each frame (Default: true)

##### Returns

`boolean`

#### Set Signature

> **set** **updateGizmoPositionToMatchAttachedMesh**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:280](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L280)

If set the gizmo's position will be updated to match the attached mesh each frame (Default: true)

##### Parameters

###### value

`boolean`

##### Returns

`void`

If set the gizmo's position will be updated to match the attached mesh each frame (Default: true)

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`updateGizmoPositionToMatchAttachedMesh`](../interfaces/IRotationGizmo.md#updategizmopositiontomatchattachedmesh)

#### Overrides

[`Gizmo`](Gizmo.md).[`updateGizmoPositionToMatchAttachedMesh`](Gizmo.md#updategizmopositiontomatchattachedmesh)

***

### updateGizmoRotationToMatchAttachedMesh

#### Get Signature

> **get** **updateGizmoRotationToMatchAttachedMesh**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:276](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L276)

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)
NOTE: This is only possible for meshes with uniform scaling, as otherwise it's not possible to decompose the rotation

##### Returns

`boolean`

#### Set Signature

> **set** **updateGizmoRotationToMatchAttachedMesh**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L269)

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)
NOTE: This is only possible for meshes with uniform scaling, as otherwise it's not possible to decompose the rotation

##### Parameters

###### value

`boolean`

##### Returns

`void`

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`updateGizmoRotationToMatchAttachedMesh`](../interfaces/IRotationGizmo.md#updategizmorotationtomatchattachedmesh)

#### Overrides

[`Gizmo`](Gizmo.md).[`updateGizmoRotationToMatchAttachedMesh`](Gizmo.md#updategizmorotationtomatchattachedmesh)

***

### updateScale

#### Get Signature

> **get** **updateScale**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:321](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L321)

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

##### Returns

`boolean`

#### Set Signature

> **set** **updateScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:314](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L314)

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

##### Parameters

###### value

`boolean`

##### Returns

`void`

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`updateScale`](../interfaces/IRotationGizmo.md#updatescale)

#### Overrides

[`Gizmo`](Gizmo.md).[`updateScale`](Gizmo.md#updatescale)

## Methods

### addToAxisCache()

> **addToAxisCache**(`mesh`, `cache`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L375)

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

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`addToAxisCache`](../interfaces/IRotationGizmo.md#addtoaxiscache)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:391](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L391)

Disposes of the gizmo

#### Returns

`void`

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`dispose`](../interfaces/IRotationGizmo.md#dispose)

#### Overrides

[`Gizmo`](Gizmo.md).[`dispose`](Gizmo.md#dispose)

***

### releaseDrag()

> **releaseDrag**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:382](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L382)

Force release the drag action by code

#### Returns

`void`

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`releaseDrag`](../interfaces/IRotationGizmo.md#releasedrag)

***

### setCustomMesh()

> **setCustomMesh**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/rotationGizmo.ts:407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/rotationGizmo.ts#L407)

CustomMeshes are not supported by this gizmo

#### Returns

`void`

#### Implementation of

[`IRotationGizmo`](../interfaces/IRotationGizmo.md).[`setCustomMesh`](../interfaces/IRotationGizmo.md#setcustommesh)

#### Overrides

[`Gizmo`](Gizmo.md).[`setCustomMesh`](Gizmo.md#setcustommesh)

***

### GizmoAxisPointerObserver()

> `static` **GizmoAxisPointerObserver**(`gizmoLayer`, `gizmoAxisCache`): [`Observer`](Observer.md)\<[`PointerInfo`](PointerInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:613](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L613)

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
