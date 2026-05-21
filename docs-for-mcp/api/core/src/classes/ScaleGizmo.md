[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ScaleGizmo

# Class: ScaleGizmo

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L79)

Gizmo that enables scaling a mesh along 3 axis

## Extends

- [`Gizmo`](Gizmo.md)

## Implements

- [`IScaleGizmo`](../interfaces/IScaleGizmo.md)

## Constructors

### Constructor

> **new ScaleGizmo**(`gizmoLayer?`, `thickness?`, `gizmoManager?`, `options?`): `ScaleGizmo`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L208)

Creates a ScaleGizmo

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

[`ScaleGizmoOptions`](../interfaces/ScaleGizmoOptions.md)

More options

#### Returns

`ScaleGizmo`

#### Overrides

[`Gizmo`](Gizmo.md).[`constructor`](Gizmo.md#constructor)

## Properties

### \_rootMesh

> **\_rootMesh**: [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L129)

The root mesh of the gizmo

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`_rootMesh`](../interfaces/IScaleGizmo.md#_rootmesh)

#### Inherited from

[`Gizmo`](Gizmo.md).[`_rootMesh`](Gizmo.md#_rootmesh)

***

### gizmoLayer

> **gizmoLayer**: [`UtilityLayerRenderer`](UtilityLayerRenderer.md) = `UtilityLayerRenderer.DefaultUtilityLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:314](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L314)

[Object] The utility layer the gizmo will be added to

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`gizmoLayer`](../interfaces/IScaleGizmo.md#gizmolayer)

#### Inherited from

[`Gizmo`](Gizmo.md).[`gizmoLayer`](Gizmo.md#gizmolayer)

***

### onDragEndObservable

> **onDragEndObservable**: [`Observable`](Observable.md)\<[`DragStartEndEvent`](../type-aliases/DragStartEndEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L132)

Fires an event when any of it's sub gizmos are released from dragging

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`onDragEndObservable`](../interfaces/IScaleGizmo.md#ondragendobservable)

***

### onDragObservable

> **onDragObservable**: [`Observable`](Observable.md)\<[`DragEvent`](../type-aliases/DragEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L130)

Fires an event when any of it's sub gizmos are being dragged

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`onDragObservable`](../interfaces/IScaleGizmo.md#ondragobservable)

***

### onDragStartObservable

> **onDragStartObservable**: [`Observable`](Observable.md)\<[`DragStartEndEvent`](../type-aliases/DragStartEndEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L128)

Fires an event when any of it's sub gizmos are dragged

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`onDragStartObservable`](../interfaces/IScaleGizmo.md#ondragstartobservable)

***

### uniformScaleGizmo

> **uniformScaleGizmo**: [`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L96)

Internal gizmo used to scale all axis equally

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`uniformScaleGizmo`](../interfaces/IScaleGizmo.md#uniformscalegizmo)

***

### xGizmo

> **xGizmo**: [`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L83)

Internal gizmo used for interactions on the x axis

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`xGizmo`](../interfaces/IScaleGizmo.md#xgizmo)

***

### yGizmo

> **yGizmo**: [`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L87)

Internal gizmo used for interactions on the y axis

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`yGizmo`](../interfaces/IScaleGizmo.md#ygizmo)

***

### zGizmo

> **zGizmo**: [`IAxisScaleGizmo`](../interfaces/IAxisScaleGizmo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L91)

Internal gizmo used for interactions on the z axis

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`zGizmo`](../interfaces/IScaleGizmo.md#zgizmo)

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

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L190)

Additional transform applied to the gizmo.
It's useful when the gizmo is attached to a bone: if the bone is part of a skeleton attached to a mesh, you should define the mesh as additionalTransformNode if you want the gizmo to be displayed at the bone's correct location.
Otherwise, as the gizmo is relative to the skeleton root, the mesh transformation will not be taken into account.

##### Returns

[`TransformNode`](TransformNode.md) \| `undefined`

#### Set Signature

> **set** **additionalTransformNode**(`transformNode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L194)

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

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`additionalTransformNode`](../interfaces/IScaleGizmo.md#additionaltransformnode)

#### Overrides

[`Gizmo`](Gizmo.md).[`additionalTransformNode`](Gizmo.md#additionaltransformnode)

***

### anchorPoint

#### Get Signature

> **get** **anchorPoint**(): [`GizmoAnchorPoint`](../enumerations/GizmoAnchorPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:311](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L311)

Defines where the gizmo will be positioned if `updateGizmoPositionToMatchAttachedMesh` is enabled.
(Default: GizmoAnchorPoint.Origin)

##### Returns

[`GizmoAnchorPoint`](../enumerations/GizmoAnchorPoint.md)

#### Set Signature

> **set** **anchorPoint**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L302)

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

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`anchorPoint`](../interfaces/IScaleGizmo.md#anchorpoint)

#### Overrides

[`Gizmo`](Gizmo.md).[`anchorPoint`](Gizmo.md#anchorpoint)

***

### attachedMesh

#### Get Signature

> **get** **attachedMesh**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L134)

Mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)
* When set, interactions will be enabled

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

#### Set Signature

> **set** **attachedMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L137)

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

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`attachedMesh`](../interfaces/IScaleGizmo.md#attachedmesh)

#### Overrides

[`Gizmo`](Gizmo.md).[`attachedMesh`](Gizmo.md#attachedmesh)

***

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L150)

Node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or NodeTransform that will be dragged)
* When set, interactions will be enabled

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

#### Set Signature

> **set** **attachedNode**(`node`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L153)

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

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`attachedNode`](../interfaces/IScaleGizmo.md#attachednode)

#### Overrides

[`Gizmo`](Gizmo.md).[`attachedNode`](Gizmo.md#attachednode)

***

### coloredMaterial

#### Get Signature

> **get** **coloredMaterial**(): [`StandardMaterial`](StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L114)

Default material used to render when gizmo is not disabled or hovered

##### Returns

[`StandardMaterial`](StandardMaterial.md)

Default material used to render when gizmo is not disabled or hovered

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`coloredMaterial`](../interfaces/IScaleGizmo.md#coloredmaterial)

***

### coordinatesMode

#### Set Signature

> **set** **coordinatesMode**(`coordinatesMode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:338](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L338)

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

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`coordinatesMode`](../interfaces/IScaleGizmo.md#coordinatesmode)

#### Overrides

[`Gizmo`](Gizmo.md).[`coordinatesMode`](Gizmo.md#coordinatesmode)

***

### customRotationQuaternion

#### Get Signature

> **get** **customRotationQuaternion**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:319](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L319)

Orientation that the gizmo will be displayed with.
When set null, default value will be used (Quaternion(0, 0, 0, 1))

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

#### Set Signature

> **set** **customRotationQuaternion**(`customRotationQuaternion`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:323](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L323)

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

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`customRotationQuaternion`](../interfaces/IScaleGizmo.md#customrotationquaternion)

#### Overrides

[`Gizmo`](Gizmo.md).[`customRotationQuaternion`](Gizmo.md#customrotationquaternion)

***

### disableMaterial

#### Get Signature

> **get** **disableMaterial**(): [`StandardMaterial`](StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L124)

Material used to render when gizmo is disabled. typically grey.

##### Returns

[`StandardMaterial`](StandardMaterial.md)

Material used to render when gizmo is disabled. typically grey.

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`disableMaterial`](../interfaces/IScaleGizmo.md#disablematerial)

***

### hoverMaterial

#### Get Signature

> **get** **hoverMaterial**(): [`StandardMaterial`](StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L119)

Material used to render when gizmo is hovered with mouse

##### Returns

[`StandardMaterial`](StandardMaterial.md)

Material used to render when gizmo is hovered with mouse

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`hoverMaterial`](../interfaces/IScaleGizmo.md#hovermaterial)

***

### incrementalSnap

#### Get Signature

> **get** **incrementalSnap**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:376](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L376)

Incremental snap scaling. When true, with a snapDistance of 0.1, scaling will be 1.1,1.2,1.3 instead of, when false: 1.1,1.21,1.33,...

##### Returns

`boolean`

#### Set Signature

> **set** **incrementalSnap**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:367](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L367)

Incremental snap scaling (default is false). When true, with a snapDistance of 0.1, scaling will be 1.1,1.2,1.3 instead of, when false: 1.1,1.21,1.33,...

##### Parameters

###### value

`boolean`

##### Returns

`void`

Incremental snap scaling. When true, with a snapDistance of 0.1, scaling will be 1.1,1.2,1.3 instead of, when false: 1.1,1.21,1.33,...

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`incrementalSnap`](../interfaces/IScaleGizmo.md#incrementalsnap)

***

### isDragging

#### Get Signature

> **get** **isDragging**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L186)

True when the mouse pointer is dragging a gizmo mesh

##### Returns

`boolean`

True when the mouse pointer is dragging a gizmo mesh

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`isDragging`](../interfaces/IScaleGizmo.md#isdragging)

***

### isHovered

#### Get Signature

> **get** **isHovered**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L179)

True when the mouse pointer is hovering a gizmo mesh

##### Returns

`boolean`

True when the mouse pointer is hovered a gizmo mesh

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`isHovered`](../interfaces/IScaleGizmo.md#ishovered)

#### Overrides

[`Gizmo`](Gizmo.md).[`isHovered`](Gizmo.md#ishovered)

***

### scaleRatio

#### Get Signature

> **get** **scaleRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:391](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L391)

Ratio for the scale of the gizmo (Default: 1)

##### Returns

`number`

#### Set Signature

> **set** **scaleRatio**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:382](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L382)

Ratio for the scale of the gizmo (Default: 1)

##### Parameters

###### value

`number`

##### Returns

`void`

Ratio for the scale of the gizmo

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`scaleRatio`](../interfaces/IScaleGizmo.md#scaleratio)

#### Overrides

[`Gizmo`](Gizmo.md).[`scaleRatio`](Gizmo.md#scaleratio)

***

### sensitivity

#### Get Signature

> **get** **sensitivity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L407)

Sensitivity factor for dragging

##### Returns

`number`

#### Set Signature

> **set** **sensitivity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:398](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L398)

Sensitivity factor for dragging (Default: 1)

##### Parameters

###### value

`number`

##### Returns

`void`

Sensitivity factor for dragging

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`sensitivity`](../interfaces/IScaleGizmo.md#sensitivity)

***

### snapDistance

#### Get Signature

> **get** **snapDistance**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:360](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L360)

Drag distance in babylon units that the gizmo will snap to when dragged

##### Returns

`number`

#### Set Signature

> **set** **snapDistance**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:351](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L351)

Drag distance in babylon units that the gizmo will snap to when dragged (Default: 0)

##### Parameters

###### value

`number`

##### Returns

`void`

Drag distance in babylon units that the gizmo will snap to when dragged

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`snapDistance`](../interfaces/IScaleGizmo.md#snapdistance)

***

### updateGizmoPositionToMatchAttachedMesh

#### Get Signature

> **get** **updateGizmoPositionToMatchAttachedMesh**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:260](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L260)

If set the gizmo's position will be updated to match the attached mesh each frame (Default: true)

##### Returns

`boolean`

#### Set Signature

> **set** **updateGizmoPositionToMatchAttachedMesh**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:257](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L257)

If set the gizmo's position will be updated to match the attached mesh each frame (Default: true)

##### Parameters

###### value

`boolean`

##### Returns

`void`

If set the gizmo's position will be updated to match the attached mesh each frame (Default: true)

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`updateGizmoPositionToMatchAttachedMesh`](../interfaces/IScaleGizmo.md#updategizmopositiontomatchattachedmesh)

#### Inherited from

[`Gizmo`](Gizmo.md).[`updateGizmoPositionToMatchAttachedMesh`](Gizmo.md#updategizmopositiontomatchattachedmesh)

***

### updateGizmoRotationToMatchAttachedMesh

#### Get Signature

> **get** **updateGizmoRotationToMatchAttachedMesh**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:298](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L298)

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)
NOTE: This is only possible for meshes with uniform scaling, as otherwise it's not possible to decompose the rotation

##### Returns

`boolean`

#### Set Signature

> **set** **updateGizmoRotationToMatchAttachedMesh**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L285)

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)
NOTE: This is only possible for meshes with uniform scaling, as otherwise it's not possible to decompose the rotation

##### Parameters

###### value

`boolean`

##### Returns

`void`

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`updateGizmoRotationToMatchAttachedMesh`](../interfaces/IScaleGizmo.md#updategizmorotationtomatchattachedmesh)

#### Overrides

[`Gizmo`](Gizmo.md).[`updateGizmoRotationToMatchAttachedMesh`](Gizmo.md#updategizmorotationtomatchattachedmesh)

***

### updateScale

#### Get Signature

> **get** **updateScale**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L173)

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

##### Returns

`boolean`

#### Set Signature

> **set** **updateScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L166)

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

##### Parameters

###### value

`boolean`

##### Returns

`void`

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`updateScale`](../interfaces/IScaleGizmo.md#updatescale)

#### Overrides

[`Gizmo`](Gizmo.md).[`updateScale`](Gizmo.md#updatescale)

## Methods

### addToAxisCache()

> **addToAxisCache**(`mesh`, `cache`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:416](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L416)

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

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`addToAxisCache`](../interfaces/IScaleGizmo.md#addtoaxiscache)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:442](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L442)

Disposes of the gizmo

#### Returns

`void`

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`dispose`](../interfaces/IScaleGizmo.md#dispose)

#### Overrides

[`Gizmo`](Gizmo.md).[`dispose`](Gizmo.md#dispose)

***

### getAxisCache()

> **getAxisCache**(`mesh`): [`GizmoAxisCache`](../interfaces/GizmoAxisCache.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:425](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L425)

Get the cache set with addToAxisCache for a specific mesh

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

Axis gizmo mesh

#### Returns

[`GizmoAxisCache`](../interfaces/GizmoAxisCache.md) \| `undefined`

Gizmo axis definition used for reactive gizmo UI

***

### releaseDrag()

> **releaseDrag**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/scaleGizmo.ts:432](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/scaleGizmo.ts#L432)

Force release the drag action by code

#### Returns

`void`

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`releaseDrag`](../interfaces/IScaleGizmo.md#releasedrag)

***

### setCustomMesh()

> **setCustomMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:212](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L212)

Disposes and replaces the current meshes in the gizmo with the specified mesh

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

The mesh to replace the default mesh of the gizmo

#### Returns

`void`

#### Implementation of

[`IScaleGizmo`](../interfaces/IScaleGizmo.md).[`setCustomMesh`](../interfaces/IScaleGizmo.md#setcustommesh)

#### Inherited from

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
