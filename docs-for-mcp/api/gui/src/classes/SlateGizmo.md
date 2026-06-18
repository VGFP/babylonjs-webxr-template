[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / SlateGizmo

# Class: SlateGizmo

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/slateGizmo.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gizmos/slateGizmo.ts#L25)

Gizmo to resize 2D slates

## Extends

- [`Gizmo`](../../../core/src/classes/Gizmo.md)

## Constructors

### Constructor

> **new SlateGizmo**(`utilityLayer?`): `SlateGizmo`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/slateGizmo.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gizmos/slateGizmo.ts#L94)

#### Parameters

##### utilityLayer?

[`UtilityLayerRenderer`](../../../core/src/classes/UtilityLayerRenderer.md)

#### Returns

`SlateGizmo`

#### Overrides

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`constructor`](../../../core/src/classes/Gizmo.md#constructor)

## Properties

### \_rootMesh

> **\_rootMesh**: [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L129)

The root mesh of the gizmo

#### Inherited from

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`_rootMesh`](../../../core/src/classes/Gizmo.md#_rootmesh)

***

### fixedScreenSize

> **fixedScreenSize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/slateGizmo.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gizmos/slateGizmo.ts#L56)

If set, the handles will increase in size based on the distance away from the camera to have a consistent screen size (Default: true)

***

### fixedScreenSizeDistanceFactor

> **fixedScreenSizeDistanceFactor**: `number` = `10`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/slateGizmo.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gizmos/slateGizmo.ts#L60)

The distance away from the object which the draggable meshes should appear world sized when fixedScreenSize is set to true (default: 10)

***

### gizmoLayer

> **gizmoLayer**: [`UtilityLayerRenderer`](../../../core/src/classes/UtilityLayerRenderer.md) = `UtilityLayerRenderer.DefaultUtilityLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:314](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L314)

[Object] The utility layer the gizmo will be added to

#### Inherited from

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`gizmoLayer`](../../../core/src/classes/Gizmo.md#gizmolayer)

***

### PreserveScaling

> `static` **PreserveScaling**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L148)

When enabled, any gizmo operation will preserve scaling sign. Default is off.
Only valid for TransformNode derived classes (Mesh, AbstractMesh, ...)

#### Inherited from

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`PreserveScaling`](../../../core/src/classes/Gizmo.md#preservescaling)

***

### UseAbsoluteScaling

> `static` **UseAbsoluteScaling**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L155)

There are 2 ways to preserve scaling: using mesh scaling or absolute scaling. Depending of hierarchy, non uniform scaling and LH or RH coordinates. One is preferable than the other.
If the scaling to be preserved is the local scaling, then set this value to false.
Default is true which means scaling to be preserved is absolute one (with hierarchy applied)

#### Inherited from

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`UseAbsoluteScaling`](../../../core/src/classes/Gizmo.md#useabsolutescaling)

## Accessors

### additionalTransformNode

#### Get Signature

> **get** **additionalTransformNode**(): [`TransformNode`](../../../core/src/classes/TransformNode.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:230](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L230)

Additional transform applied to the gizmo.
It's useful when the gizmo is attached to a bone: if the bone is part of a skeleton attached to a mesh, you should define the mesh as additionalTransformNode if you want the gizmo to be displayed at the bone's correct location.
Otherwise, as the gizmo is relative to the skeleton root, the mesh transformation will not be taken into account.

##### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md) \| `undefined`

#### Set Signature

> **set** **additionalTransformNode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:234](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L234)

Additional transform applied to the gizmo.
It's useful when the gizmo is attached to a bone: if the bone is part of a skeleton attached to a mesh, you should define the mesh as additionalTransformNode if you want the gizmo to be displayed at the bone's correct location.
Otherwise, as the gizmo is relative to the skeleton root, the mesh transformation will not be taken into account.

##### Parameters

###### value

[`TransformNode`](../../../core/src/classes/TransformNode.md) \| `undefined`

##### Returns

`void`

Additional transform applied to the gizmo.
It's useful when the gizmo is attached to a bone: if the bone is part of a skeleton attached to a mesh, you should define the mesh as additionalTransformNode if you want the gizmo to be displayed at the bone's correct location.
Otherwise, as the gizmo is relative to the skeleton root, the mesh transformation will not be taken into account.

#### Inherited from

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`additionalTransformNode`](../../../core/src/classes/Gizmo.md#additionaltransformnode)

***

### anchorPoint

#### Get Signature

> **get** **anchorPoint**(): [`GizmoAnchorPoint`](../../../core/src/enumerations/GizmoAnchorPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L271)

Defines where the gizmo will be positioned if `updateGizmoPositionToMatchAttachedMesh` is enabled.
(Default: GizmoAnchorPoint.Origin)

##### Returns

[`GizmoAnchorPoint`](../../../core/src/enumerations/GizmoAnchorPoint.md)

#### Set Signature

> **set** **anchorPoint**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:268](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L268)

Defines where the gizmo will be positioned if `updateGizmoPositionToMatchAttachedMesh` is enabled.
(Default: GizmoAnchorPoint.Origin)

##### Parameters

###### value

[`GizmoAnchorPoint`](../../../core/src/enumerations/GizmoAnchorPoint.md)

##### Returns

`void`

Defines where the gizmo will be positioned if `updateGizmoPositionToMatchAttachedMesh` is enabled.
(Default: GizmoAnchorPoint.Origin)

#### Inherited from

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`anchorPoint`](../../../core/src/classes/Gizmo.md#anchorpoint)

***

### attachedMesh

#### Get Signature

> **get** **attachedMesh**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L183)

Mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)
* When set, interactions will be enabled

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

#### Set Signature

> **set** **attachedMesh**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:186](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L186)

Mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)
* When set, interactions will be enabled

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

##### Returns

`void`

Mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)
* When set, interactions will be enabled

#### Inherited from

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`attachedMesh`](../../../core/src/classes/Gizmo.md#attachedmesh)

***

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Node`](../../../core/src/classes/Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:198](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L198)

Node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or NodeTransform that will be dragged)
* When set, interactions will be enabled

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Node`](../../../core/src/classes/Node.md)\>

#### Set Signature

> **set** **attachedNode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L201)

Node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or NodeTransform that will be dragged)
* When set, interactions will be enabled

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Node`](../../../core/src/classes/Node.md)\>

##### Returns

`void`

Node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or NodeTransform that will be dragged)
* When set, interactions will be enabled

#### Inherited from

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`attachedNode`](../../../core/src/classes/Gizmo.md#attachednode)

***

### attachedSlate

#### Get Signature

> **get** **attachedSlate**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`HolographicSlate`](HolographicSlate.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/slateGizmo.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gizmos/slateGizmo.ts#L90)

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`HolographicSlate`](HolographicSlate.md)\>

#### Set Signature

> **set** **attachedSlate**(`control`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/slateGizmo.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gizmos/slateGizmo.ts#L65)

The slate attached to this gizmo

##### Parameters

###### control

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`HolographicSlate`](HolographicSlate.md)\>

##### Returns

`void`

***

### coordinatesMode

#### Get Signature

> **get** **coordinatesMode**(): [`GizmoCoordinatesMode`](../../../core/src/enumerations/GizmoCoordinatesMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:287](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L287)

Set the coordinate mode to use. By default it's local.

##### Returns

[`GizmoCoordinatesMode`](../../../core/src/enumerations/GizmoCoordinatesMode.md)

#### Set Signature

> **set** **coordinatesMode**(`coordinatesMode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L280)

Set the coordinate system to use. By default it's local.
But it's possible for a user to tweak so its local for translation and world for rotation.
In that case, setting the coordinate system will change `updateGizmoRotationToMatchAttachedMesh` and `updateGizmoPositionToMatchAttachedMesh`

##### Parameters

###### coordinatesMode

[`GizmoCoordinatesMode`](../../../core/src/enumerations/GizmoCoordinatesMode.md)

##### Returns

`void`

Set the coordinate mode to use. By default it's local.

#### Inherited from

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`coordinatesMode`](../../../core/src/classes/Gizmo.md#coordinatesmode)

***

### customRotationQuaternion

#### Get Signature

> **get** **customRotationQuaternion**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Quaternion`](../../../core/src/classes/Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:328](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L328)

Orientation that the gizmo will be displayed with.
When set null, default value will be used (Quaternion(0, 0, 0, 1))

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Quaternion`](../../../core/src/classes/Quaternion.md)\>

#### Set Signature

> **set** **customRotationQuaternion**(`customRotationQuaternion`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L332)

Orientation that the gizmo will be displayed with.
When set null, default value will be used (Quaternion(0, 0, 0, 1))

##### Parameters

###### customRotationQuaternion

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Quaternion`](../../../core/src/classes/Quaternion.md)\>

##### Returns

`void`

Orientation that the gizmo will be displayed with.
When set null, default value will be used (Quaternion(0, 0, 0, 1))

#### Inherited from

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`customRotationQuaternion`](../../../core/src/classes/Gizmo.md#customrotationquaternion)

***

### isHovered

#### Get Signature

> **get** **isHovered**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:171](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L171)

True when the mouse pointer is hovered a gizmo mesh

##### Returns

`boolean`

True when the mouse pointer is hovered a gizmo mesh

#### Inherited from

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`isHovered`](../../../core/src/classes/Gizmo.md#ishovered)

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

#### Inherited from

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`scaleRatio`](../../../core/src/classes/Gizmo.md#scaleratio)

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

#### Inherited from

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`updateGizmoPositionToMatchAttachedMesh`](../../../core/src/classes/Gizmo.md#updategizmopositiontomatchattachedmesh)

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

#### Inherited from

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`updateGizmoRotationToMatchAttachedMesh`](../../../core/src/classes/Gizmo.md#updategizmorotationtomatchattachedmesh)

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

#### Inherited from

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`updateScale`](../../../core/src/classes/Gizmo.md#updatescale)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/slateGizmo.ts:437](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gizmos/slateGizmo.ts#L437)

Disposes of the gizmo

#### Returns

`void`

#### Overrides

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`dispose`](../../../core/src/classes/Gizmo.md#dispose)

***

### setCustomMesh()

> **setCustomMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:212](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L212)

Disposes and replaces the current meshes in the gizmo with the specified mesh

#### Parameters

##### mesh

[`Mesh`](../../../core/src/classes/Mesh.md)

The mesh to replace the default mesh of the gizmo

#### Returns

`void`

#### Inherited from

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`setCustomMesh`](../../../core/src/classes/Gizmo.md#setcustommesh)

***

### updateBoundingBox()

> **updateBoundingBox**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/slateGizmo.ts:333](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gizmos/slateGizmo.ts#L333)

Updates the bounding box information for the gizmo

#### Returns

`void`

***

### GizmoAxisPointerObserver()

> `static` **GizmoAxisPointerObserver**(`gizmoLayer`, `gizmoAxisCache`): [`Observer`](../../../core/src/classes/Observer.md)\<[`PointerInfo`](../../../core/src/classes/PointerInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:613](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L613)

Subscribes to pointer up, down, and hover events. Used for responsive gizmos.

#### Parameters

##### gizmoLayer

[`UtilityLayerRenderer`](../../../core/src/classes/UtilityLayerRenderer.md)

The utility layer the gizmo will be added to

##### gizmoAxisCache

`Map`\<[`Mesh`](../../../core/src/classes/Mesh.md), [`GizmoAxisCache`](../../../core/src/interfaces/GizmoAxisCache.md)\>

Gizmo axis definition used for reactive gizmo UI

#### Returns

[`Observer`](../../../core/src/classes/Observer.md)\<[`PointerInfo`](../../../core/src/classes/PointerInfo.md)\>

pointerObserver

#### Inherited from

[`Gizmo`](../../../core/src/classes/Gizmo.md).[`GizmoAxisPointerObserver`](../../../core/src/classes/Gizmo.md#gizmoaxispointerobserver)
