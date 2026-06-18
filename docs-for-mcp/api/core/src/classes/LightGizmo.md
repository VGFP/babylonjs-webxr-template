[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LightGizmo

# Class: LightGizmo

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/lightGizmo.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/lightGizmo.ts#L37)

Gizmo that enables viewing a light

## Extends

- [`Gizmo`](Gizmo.md)

## Implements

- [`ILightGizmo`](../interfaces/ILightGizmo.md)

## Constructors

### Constructor

> **new LightGizmo**(`gizmoLayer?`): `LightGizmo`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/lightGizmo.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/lightGizmo.ts#L54)

Creates a LightGizmo

#### Parameters

##### gizmoLayer?

[`UtilityLayerRenderer`](UtilityLayerRenderer.md) = `UtilityLayerRenderer.DefaultUtilityLayer`

The utility layer the gizmo will be added to

#### Returns

`LightGizmo`

#### Overrides

[`Gizmo`](Gizmo.md).[`constructor`](Gizmo.md#constructor)

## Properties

### \_rootMesh

> **\_rootMesh**: [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L129)

The root mesh of the gizmo

#### Implementation of

[`ILightGizmo`](../interfaces/ILightGizmo.md).[`_rootMesh`](../interfaces/ILightGizmo.md#_rootmesh)

#### Inherited from

[`Gizmo`](Gizmo.md).[`_rootMesh`](Gizmo.md#_rootmesh)

***

### gizmoLayer

> **gizmoLayer**: [`UtilityLayerRenderer`](UtilityLayerRenderer.md) = `UtilityLayerRenderer.DefaultUtilityLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:314](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L314)

[Object] The utility layer the gizmo will be added to

#### Implementation of

[`ILightGizmo`](../interfaces/ILightGizmo.md).[`gizmoLayer`](../interfaces/ILightGizmo.md#gizmolayer)

#### Inherited from

[`Gizmo`](Gizmo.md).[`gizmoLayer`](Gizmo.md#gizmolayer)

***

### onClickedObservable

> **onClickedObservable**: [`Observable`](Observable.md)\<[`Light`](Light.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/lightGizmo.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/lightGizmo.ts#L48)

Event that fires each time the gizmo is clicked

#### Implementation of

[`ILightGizmo`](../interfaces/ILightGizmo.md).[`onClickedObservable`](../interfaces/ILightGizmo.md#onclickedobservable)

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

[`ILightGizmo`](../interfaces/ILightGizmo.md).[`additionalTransformNode`](../interfaces/ILightGizmo.md#additionaltransformnode)

#### Inherited from

[`Gizmo`](Gizmo.md).[`additionalTransformNode`](Gizmo.md#additionaltransformnode)

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

[`ILightGizmo`](../interfaces/ILightGizmo.md).[`anchorPoint`](../interfaces/ILightGizmo.md#anchorpoint)

#### Inherited from

[`Gizmo`](Gizmo.md).[`anchorPoint`](Gizmo.md#anchorpoint)

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

[`ILightGizmo`](../interfaces/ILightGizmo.md).[`attachedMesh`](../interfaces/ILightGizmo.md#attachedmesh)

#### Inherited from

[`Gizmo`](Gizmo.md).[`attachedMesh`](Gizmo.md#attachedmesh)

***

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/lightGizmo.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/lightGizmo.ts#L82)

Override attachedNode because lightgizmo only support attached mesh
It will return the attached mesh (if any) and setting an attached node will log
a warning

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

#### Set Signature

> **set** **attachedNode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/lightGizmo.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/lightGizmo.ts#L85)

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

[`ILightGizmo`](../interfaces/ILightGizmo.md).[`attachedNode`](../interfaces/ILightGizmo.md#attachednode)

#### Overrides

[`Gizmo`](Gizmo.md).[`attachedNode`](Gizmo.md#attachednode)

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

[`ILightGizmo`](../interfaces/ILightGizmo.md).[`coordinatesMode`](../interfaces/ILightGizmo.md#coordinatesmode)

#### Inherited from

[`Gizmo`](Gizmo.md).[`coordinatesMode`](Gizmo.md#coordinatesmode)

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

[`ILightGizmo`](../interfaces/ILightGizmo.md).[`customRotationQuaternion`](../interfaces/ILightGizmo.md#customrotationquaternion)

#### Inherited from

[`Gizmo`](Gizmo.md).[`customRotationQuaternion`](Gizmo.md#customrotationquaternion)

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

[`ILightGizmo`](../interfaces/ILightGizmo.md).[`isHovered`](../interfaces/ILightGizmo.md#ishovered)

#### Inherited from

[`Gizmo`](Gizmo.md).[`isHovered`](Gizmo.md#ishovered)

***

### light

#### Get Signature

> **get** **light**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Light`](Light.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/lightGizmo.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/lightGizmo.ts#L146)

The light that the gizmo is attached to

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Light`](Light.md)\>

#### Set Signature

> **set** **light**(`light`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/lightGizmo.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/lightGizmo.ts#L92)

The light that the gizmo is attached to

##### Parameters

###### light

[`Nullable`](../type-aliases/Nullable.md)\<[`Light`](Light.md)\>

##### Returns

`void`

The light that the gizmo is attached to

#### Implementation of

[`ILightGizmo`](../interfaces/ILightGizmo.md).[`light`](../interfaces/ILightGizmo.md#light)

***

### material

#### Get Signature

> **get** **material**(): [`StandardMaterial`](StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/lightGizmo.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/lightGizmo.ts#L153)

Gets the material used to render the light gizmo

##### Returns

[`StandardMaterial`](StandardMaterial.md)

The material used to render the light gizmo

#### Implementation of

[`ILightGizmo`](../interfaces/ILightGizmo.md).[`material`](../interfaces/ILightGizmo.md#material)

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

[`ILightGizmo`](../interfaces/ILightGizmo.md).[`scaleRatio`](../interfaces/ILightGizmo.md#scaleratio)

#### Inherited from

[`Gizmo`](Gizmo.md).[`scaleRatio`](Gizmo.md#scaleratio)

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

[`ILightGizmo`](../interfaces/ILightGizmo.md).[`updateGizmoPositionToMatchAttachedMesh`](../interfaces/ILightGizmo.md#updategizmopositiontomatchattachedmesh)

#### Inherited from

[`Gizmo`](Gizmo.md).[`updateGizmoPositionToMatchAttachedMesh`](Gizmo.md#updategizmopositiontomatchattachedmesh)

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

[`ILightGizmo`](../interfaces/ILightGizmo.md).[`updateGizmoRotationToMatchAttachedMesh`](../interfaces/ILightGizmo.md#updategizmorotationtomatchattachedmesh)

#### Inherited from

[`Gizmo`](Gizmo.md).[`updateGizmoRotationToMatchAttachedMesh`](Gizmo.md#updategizmorotationtomatchattachedmesh)

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

[`ILightGizmo`](../interfaces/ILightGizmo.md).[`updateScale`](../interfaces/ILightGizmo.md#updatescale)

#### Inherited from

[`Gizmo`](Gizmo.md).[`updateScale`](Gizmo.md#updatescale)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/lightGizmo.ts:298](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/lightGizmo.ts#L298)

Disposes of the light gizmo

#### Returns

`void`

#### Implementation of

[`ILightGizmo`](../interfaces/ILightGizmo.md).[`dispose`](../interfaces/ILightGizmo.md#dispose)

#### Overrides

[`Gizmo`](Gizmo.md).[`dispose`](Gizmo.md#dispose)

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

[`ILightGizmo`](../interfaces/ILightGizmo.md).[`setCustomMesh`](../interfaces/ILightGizmo.md#setcustommesh)

#### Inherited from

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
