[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AxisScaleGizmo

# Class: AxisScaleGizmo

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisScaleGizmo.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisScaleGizmo.ts#L55)

Single axis scale gizmo

## Extends

- [`Gizmo`](Gizmo.md)

## Implements

- [`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md)

## Constructors

### Constructor

> **new AxisScaleGizmo**(`dragAxis`, `color?`, `gizmoLayer?`, `parent?`, `thickness?`, `hoverColor?`, `disableColor?`): `AxisScaleGizmo`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisScaleGizmo.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisScaleGizmo.ts#L129)

Creates an AxisScaleGizmo

#### Parameters

##### dragAxis

[`Vector3`](Vector3.md)

The axis which the gizmo will be able to scale on

##### color?

[`Color3`](Color3.md) = `...`

The color of the gizmo

##### gizmoLayer?

[`UtilityLayerRenderer`](UtilityLayerRenderer.md) = `UtilityLayerRenderer.DefaultUtilityLayer`

The utility layer the gizmo will be added to

##### parent?

[`Nullable`](../type-aliases/Nullable.md)\<[`ScaleGizmo`](ScaleGizmo.md)\> = `null`

##### thickness?

`number` = `1`

display gizmo axis thickness

##### hoverColor?

[`Color3`](Color3.md) = `...`

The color of the gizmo when hovering over and dragging

##### disableColor?

[`Color3`](Color3.md) = `...`

The Color of the gizmo when its disabled

#### Returns

`AxisScaleGizmo`

#### Overrides

[`Gizmo`](Gizmo.md).[`constructor`](Gizmo.md#constructor)

## Properties

### \_rootMesh

> **\_rootMesh**: [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L129)

The root mesh of the gizmo

#### Implementation of

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`_rootMesh`](../interfaces/IAxisScaleGizmo.md#_rootmesh)

#### Inherited from

[`Gizmo`](Gizmo.md).[`_rootMesh`](Gizmo.md#_rootmesh)

***

### dragBehavior

> **dragBehavior**: [`PointerDragBehavior`](PointerDragBehavior.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisScaleGizmo.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisScaleGizmo.ts#L59)

Drag behavior responsible for the gizmos dragging interactions

#### Implementation of

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`dragBehavior`](../interfaces/IAxisScaleGizmo.md#dragbehavior)

***

### dragScale

> **dragScale**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisScaleGizmo.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisScaleGizmo.ts#L81)

The magnitude of the drag strength (scaling factor)

#### Implementation of

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`dragScale`](../interfaces/IAxisScaleGizmo.md#dragscale)

***

### gizmoLayer

> **gizmoLayer**: [`UtilityLayerRenderer`](UtilityLayerRenderer.md) = `UtilityLayerRenderer.DefaultUtilityLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:314](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L314)

[Object] The utility layer the gizmo will be added to

#### Implementation of

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`gizmoLayer`](../interfaces/IAxisScaleGizmo.md#gizmolayer)

#### Inherited from

[`Gizmo`](Gizmo.md).[`gizmoLayer`](Gizmo.md#gizmolayer)

***

### incrementalSnap

> **incrementalSnap**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisScaleGizmo.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisScaleGizmo.ts#L91)

Incremental snap scaling (default is false). When true, with a snapDistance of 0.1, scaling will be 1.1,1.2,1.3 instead of, when false: 1.1,1.21,1.33,...

#### Implementation of

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`incrementalSnap`](../interfaces/IAxisScaleGizmo.md#incrementalsnap)

***

### onSnapObservable

> **onSnapObservable**: [`Observable`](Observable.md)\<\{ `snapDistance`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisScaleGizmo.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisScaleGizmo.ts#L69)

Event that fires each time the gizmo snaps to a new location.
* snapDistance is the change in distance

#### Implementation of

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`onSnapObservable`](../interfaces/IAxisScaleGizmo.md#onsnapobservable)

***

### sensitivity

> **sensitivity**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisScaleGizmo.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisScaleGizmo.ts#L77)

Custom sensitivity value for the drag strength

#### Implementation of

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`sensitivity`](../interfaces/IAxisScaleGizmo.md#sensitivity)

***

### snapDistance

> **snapDistance**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisScaleGizmo.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisScaleGizmo.ts#L64)

Scale distance in babylon units that the gizmo will snap to when dragged (Default: 0)

#### Implementation of

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`snapDistance`](../interfaces/IAxisScaleGizmo.md#snapdistance)

***

### uniformScaling

> **uniformScaling**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisScaleGizmo.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisScaleGizmo.ts#L73)

If the scaling operation should be done on all axis (default: false)

#### Implementation of

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`uniformScaling`](../interfaces/IAxisScaleGizmo.md#uniformscaling)

***

### MinimumAbsoluteScale

> `static` **MinimumAbsoluteScale**: `number` = `Epsilon`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisScaleGizmo.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisScaleGizmo.ts#L86)

The minimal absolute scale per component. can be positive or negative but never smaller.

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

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`additionalTransformNode`](../interfaces/IAxisScaleGizmo.md#additionaltransformnode)

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

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`anchorPoint`](../interfaces/IAxisScaleGizmo.md#anchorpoint)

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

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`attachedMesh`](../interfaces/IAxisScaleGizmo.md#attachedmesh)

#### Inherited from

[`Gizmo`](Gizmo.md).[`attachedMesh`](Gizmo.md#attachedmesh)

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

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`attachedNode`](../interfaces/IAxisScaleGizmo.md#attachednode)

#### Inherited from

[`Gizmo`](Gizmo.md).[`attachedNode`](Gizmo.md#attachednode)

***

### coloredMaterial

#### Get Signature

> **get** **coloredMaterial**(): [`StandardMaterial`](StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisScaleGizmo.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisScaleGizmo.ts#L105)

Default material used to render when gizmo is not disabled or hovered

##### Returns

[`StandardMaterial`](StandardMaterial.md)

Default material used to render when gizmo is not disabled or hovered

#### Implementation of

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`coloredMaterial`](../interfaces/IAxisScaleGizmo.md#coloredmaterial)

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

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`coordinatesMode`](../interfaces/IAxisScaleGizmo.md#coordinatesmode)

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

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`customRotationQuaternion`](../interfaces/IAxisScaleGizmo.md#customrotationquaternion)

#### Inherited from

[`Gizmo`](Gizmo.md).[`customRotationQuaternion`](Gizmo.md#customrotationquaternion)

***

### disableMaterial

#### Get Signature

> **get** **disableMaterial**(): [`StandardMaterial`](StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisScaleGizmo.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisScaleGizmo.ts#L115)

Material used to render when gizmo is disabled. typically grey.

##### Returns

[`StandardMaterial`](StandardMaterial.md)

Material used to render when gizmo is disabled. typically grey.

#### Implementation of

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`disableMaterial`](../interfaces/IAxisScaleGizmo.md#disablematerial)

***

### hoverMaterial

#### Get Signature

> **get** **hoverMaterial**(): [`StandardMaterial`](StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisScaleGizmo.ts:110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisScaleGizmo.ts#L110)

Material used to render when gizmo is hovered with mouse

##### Returns

[`StandardMaterial`](StandardMaterial.md)

Material used to render when gizmo is hovered with mouse

#### Implementation of

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`hoverMaterial`](../interfaces/IAxisScaleGizmo.md#hovermaterial)

***

### isEnabled

#### Get Signature

> **get** **isEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisScaleGizmo.ts:374](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisScaleGizmo.ts#L374)

If the gizmo is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **isEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisScaleGizmo.ts:361](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisScaleGizmo.ts#L361)

If the gizmo is enabled

##### Parameters

###### value

`boolean`

##### Returns

`void`

If the gizmo is enabled

#### Implementation of

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`isEnabled`](../interfaces/IAxisScaleGizmo.md#isenabled)

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

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`isHovered`](../interfaces/IAxisScaleGizmo.md#ishovered)

#### Inherited from

[`Gizmo`](Gizmo.md).[`isHovered`](Gizmo.md#ishovered)

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

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`scaleRatio`](../interfaces/IAxisScaleGizmo.md#scaleratio)

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

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`updateGizmoPositionToMatchAttachedMesh`](../interfaces/IAxisScaleGizmo.md#updategizmopositiontomatchattachedmesh)

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

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`updateGizmoRotationToMatchAttachedMesh`](../interfaces/IAxisScaleGizmo.md#updategizmorotationtomatchattachedmesh)

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

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`updateScale`](../interfaces/IAxisScaleGizmo.md#updatescale)

#### Inherited from

[`Gizmo`](Gizmo.md).[`updateScale`](Gizmo.md#updatescale)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisScaleGizmo.ts:381](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisScaleGizmo.ts#L381)

Disposes of the gizmo

#### Returns

`void`

#### Implementation of

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`dispose`](../interfaces/IAxisScaleGizmo.md#dispose)

#### Overrides

[`Gizmo`](Gizmo.md).[`dispose`](Gizmo.md#dispose)

***

### setCustomMesh()

> **setCustomMesh**(`mesh`, `useGizmoMaterial?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisScaleGizmo.ts:402](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisScaleGizmo.ts#L402)

Disposes and replaces the current meshes in the gizmo with the specified mesh

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

The mesh to replace the default mesh of the gizmo

##### useGizmoMaterial?

`boolean` = `false`

If the gizmo's default material should be used (default: false)

#### Returns

`void`

#### Implementation of

[`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md).[`setCustomMesh`](../interfaces/IAxisScaleGizmo.md#setcustommesh)

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
