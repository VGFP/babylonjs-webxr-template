[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BoundingBoxGizmo

# Class: BoundingBoxGizmo

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L124)

Bounding box gizmo

## Extends

- [`Gizmo`](Gizmo.md)

## Implements

- [`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md)

## Constructors

### Constructor

> **new BoundingBoxGizmo**(`color?`, `gizmoLayer?`): `BoundingBoxGizmo`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L336)

Creates an BoundingBoxGizmo

#### Parameters

##### color?

[`Color3`](Color3.md) = `...`

The color of the gizmo

##### gizmoLayer?

[`UtilityLayerRenderer`](UtilityLayerRenderer.md) = `UtilityLayerRenderer.DefaultKeepDepthUtilityLayer`

The utility layer the gizmo will be added to

#### Returns

`BoundingBoxGizmo`

#### Overrides

[`Gizmo`](Gizmo.md).[`constructor`](Gizmo.md#constructor)

## Properties

### \_rootMesh

> **\_rootMesh**: [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L129)

The root mesh of the gizmo

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`_rootMesh`](../interfaces/IBoundingBoxGizmo.md#_rootmesh)

#### Inherited from

[`Gizmo`](Gizmo.md).[`_rootMesh`](Gizmo.md#_rootmesh)

***

### fixedDragMeshBoundsSize

> **fixedDragMeshBoundsSize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L173)

If set, the rotation anchors and scale boxes will increase in size based on the size of the bounding box
Note : fixedDragMeshScreenSize takes precedence over fixedDragMeshBoundsSize if both are true

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`fixedDragMeshBoundsSize`](../interfaces/IBoundingBoxGizmo.md#fixeddragmeshboundssize)

***

### fixedDragMeshScreenSize

> **fixedDragMeshScreenSize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L168)

If set, the rotation anchors and scale boxes will increase in size based on the distance away from the camera to have a consistent screen size (Default: false)
Note : fixedDragMeshScreenSize takes precedence over fixedDragMeshBoundsSize if both are true

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`fixedDragMeshScreenSize`](../interfaces/IBoundingBoxGizmo.md#fixeddragmeshscreensize)

***

### fixedDragMeshScreenSizeDistanceFactor

> **fixedDragMeshScreenSizeDistanceFactor**: `number` = `10`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L177)

The distance away from the object which the draggable meshes should appear world sized when fixedDragMeshScreenSize is set to true (default: 10)

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`fixedDragMeshScreenSizeDistanceFactor`](../interfaces/IBoundingBoxGizmo.md#fixeddragmeshscreensizedistancefactor)

***

### gizmoLayer

> **gizmoLayer**: [`UtilityLayerRenderer`](UtilityLayerRenderer.md) = `UtilityLayerRenderer.DefaultUtilityLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:314](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L314)

[Object] The utility layer the gizmo will be added to

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`gizmoLayer`](../interfaces/IBoundingBoxGizmo.md#gizmolayer)

#### Inherited from

[`Gizmo`](Gizmo.md).[`gizmoLayer`](Gizmo.md#gizmolayer)

***

### ignoreChildren

> **ignoreChildren**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L150)

If child meshes should be ignored when calculating the bounding box. This should be set to true to avoid perf hits with heavily nested meshes (Default: false)

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`ignoreChildren`](../interfaces/IBoundingBoxGizmo.md#ignorechildren)

***

### includeChildPredicate

> **includeChildPredicate**: [`Nullable`](../type-aliases/Nullable.md)\<(`abstractMesh`) => `boolean`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L154)

Returns true if a descendant should be included when computing the bounding box. When null, all descendants are included. If ignoreChildren is set this will be ignored. (Default: null)

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`includeChildPredicate`](../interfaces/IBoundingBoxGizmo.md#includechildpredicate)

***

### incrementalSnap

> **incrementalSnap**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L226)

Incremental snap scaling (default is false). When true, with a snapDistance of 0.1, scaling will be 1.1,1.2,1.3 instead of, when false: 1.1,1.21,1.33,...

***

### onDragStartObservable

> **onDragStartObservable**: [`Observable`](Observable.md)\<\{ `dragAxis`: [`Vector3`](Vector3.md); `dragOperation`: [`DragOperation`](../enumerations/DragOperation.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L189)

Fired when a rotation anchor or scale box is dragged

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`onDragStartObservable`](../interfaces/IBoundingBoxGizmo.md#ondragstartobservable)

***

### onHoverEndObservable

> **onHoverEndObservable**: [`Observable`](Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:197](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L197)

Fired when the gizmo mesh hovering ends

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`onHoverEndObservable`](../interfaces/IBoundingBoxGizmo.md#onhoverendobservable)

***

### onHoverStartObservable

> **onHoverStartObservable**: [`Observable`](Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L193)

Fired when the gizmo mesh hovering starts

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`onHoverStartObservable`](../interfaces/IBoundingBoxGizmo.md#onhoverstartobservable)

***

### onRotationSphereDragEndObservable

> **onRotationSphereDragEndObservable**: [`Observable`](Observable.md)\<\{ `dragAxis`: [`Vector3`](Vector3.md); `dragOperation`: [`DragOperation`](../enumerations/DragOperation.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:213](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L213)

Fired when a rotation anchor drag is ended

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`onRotationSphereDragEndObservable`](../interfaces/IBoundingBoxGizmo.md#onrotationspheredragendobservable)

***

### onRotationSphereDragObservable

> **onRotationSphereDragObservable**: [`Observable`](Observable.md)\<\{ `dragAxis`: [`Vector3`](Vector3.md); `dragOperation`: [`DragOperation`](../enumerations/DragOperation.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L209)

Fired when a rotation anchor is dragged

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`onRotationSphereDragObservable`](../interfaces/IBoundingBoxGizmo.md#onrotationspheredragobservable)

***

### onScaleBoxDragEndObservable

> **onScaleBoxDragEndObservable**: [`Observable`](Observable.md)\<\{ `dragAxis`: [`Vector3`](Vector3.md); `dragOperation`: [`DragOperation`](../enumerations/DragOperation.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:205](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L205)

Fired when a scale box drag is ended

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`onScaleBoxDragEndObservable`](../interfaces/IBoundingBoxGizmo.md#onscaleboxdragendobservable)

***

### onScaleBoxDragObservable

> **onScaleBoxDragObservable**: [`Observable`](Observable.md)\<\{ `dragAxis`: [`Vector3`](Vector3.md); `dragOperation`: [`DragOperation`](../enumerations/DragOperation.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L201)

Fired when a scale box is dragged

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`onScaleBoxDragObservable`](../interfaces/IBoundingBoxGizmo.md#onscaleboxdragobservable)

***

### rotationSnapDistance

> **rotationSnapDistance**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L185)

Drag distance in babylon units that the gizmo will snap rotation to when dragged

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`rotationSnapDistance`](../interfaces/IBoundingBoxGizmo.md#rotationsnapdistance)

***

### rotationSphereSize

> **rotationSphereSize**: `number` = `0.1`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L159)

The size of the rotation anchors attached to the bounding box (Default: 0.1)

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`rotationSphereSize`](../interfaces/IBoundingBoxGizmo.md#rotationspheresize)

***

### scaleBoxSize

> **scaleBoxSize**: `number` = `0.1`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L163)

The size of the scale boxes attached to the bounding box (Default: 0.1)

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`scaleBoxSize`](../interfaces/IBoundingBoxGizmo.md#scaleboxsize)

***

### scalePivot

> **scalePivot**: [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L217)

Relative bounding box pivot used when scaling the attached node. When null object with scale from the opposite corner. 0.5,0.5,0.5 for center and 0.5,0,0.5 for bottom (Default: null)

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`scalePivot`](../interfaces/IBoundingBoxGizmo.md#scalepivot)

***

### scalingSnapDistance

> **scalingSnapDistance**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L181)

Drag distance in babylon units that the gizmo will snap scaling to when dragged

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`scalingSnapDistance`](../interfaces/IBoundingBoxGizmo.md#scalingsnapdistance)

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

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L230)

Additional transform applied to the gizmo.
It's useful when the gizmo is attached to a bone: if the bone is part of a skeleton attached to a mesh, you should define the mesh as additionalTransformNode if you want the gizmo to be displayed at the bone's correct location.
Otherwise, as the gizmo is relative to the skeleton root, the mesh transformation will not be taken into account.

##### Returns

[`TransformNode`](TransformNode.md) \| `undefined`

#### Set Signature

> **set** **additionalTransformNode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:234](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L234)

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

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`additionalTransformNode`](../interfaces/IBoundingBoxGizmo.md#additionaltransformnode)

#### Inherited from

[`Gizmo`](Gizmo.md).[`additionalTransformNode`](Gizmo.md#additionaltransformnode)

***

### anchorPoint

#### Get Signature

> **get** **anchorPoint**(): [`GizmoAnchorPoint`](../enumerations/GizmoAnchorPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L271)

Defines where the gizmo will be positioned if `updateGizmoPositionToMatchAttachedMesh` is enabled.
(Default: GizmoAnchorPoint.Origin)

##### Returns

[`GizmoAnchorPoint`](../enumerations/GizmoAnchorPoint.md)

#### Set Signature

> **set** **anchorPoint**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:268](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L268)

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

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`anchorPoint`](../interfaces/IBoundingBoxGizmo.md#anchorpoint)

#### Inherited from

[`Gizmo`](Gizmo.md).[`anchorPoint`](Gizmo.md#anchorpoint)

***

### attachedMesh

#### Get Signature

> **get** **attachedMesh**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L183)

Mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)
* When set, interactions will be enabled

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

#### Set Signature

> **set** **attachedMesh**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L186)

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

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`attachedMesh`](../interfaces/IBoundingBoxGizmo.md#attachedmesh)

#### Inherited from

[`Gizmo`](Gizmo.md).[`attachedMesh`](Gizmo.md#attachedmesh)

***

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L198)

Node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or NodeTransform that will be dragged)
* When set, interactions will be enabled

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

#### Set Signature

> **set** **attachedNode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L201)

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

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`attachedNode`](../interfaces/IBoundingBoxGizmo.md#attachednode)

#### Inherited from

[`Gizmo`](Gizmo.md).[`attachedNode`](Gizmo.md#attachednode)

***

### axisFactor

#### Get Signature

> **get** **axisFactor**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L259)

Gets the axis factor

##### Returns

[`Vector3`](Vector3.md)

the Vector3 factor value

#### Set Signature

> **set** **axisFactor**(`factor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L232)

Sets the axis factor

##### Parameters

###### factor

[`Vector3`](Vector3.md)

the Vector3 value

##### Returns

`void`

Scale factor vector used for masking some axis

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`axisFactor`](../interfaces/IBoundingBoxGizmo.md#axisfactor)

***

### coloredMaterial

#### Get Signature

> **get** **coloredMaterial**(): [`StandardMaterial`](StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:297](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L297)

Default material used to render when gizmo is not disabled or hovered

##### Returns

[`StandardMaterial`](StandardMaterial.md)

Default material used to render when gizmo is not disabled or hovered

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`coloredMaterial`](../interfaces/IBoundingBoxGizmo.md#coloredmaterial)

***

### coordinatesMode

#### Get Signature

> **get** **coordinatesMode**(): [`GizmoCoordinatesMode`](../enumerations/GizmoCoordinatesMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L287)

Set the coordinate mode to use. By default it's local.

##### Returns

[`GizmoCoordinatesMode`](../enumerations/GizmoCoordinatesMode.md)

#### Set Signature

> **set** **coordinatesMode**(`coordinatesMode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:280](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L280)

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

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`coordinatesMode`](../interfaces/IBoundingBoxGizmo.md#coordinatesmode)

#### Inherited from

[`Gizmo`](Gizmo.md).[`coordinatesMode`](Gizmo.md#coordinatesmode)

***

### customRotationQuaternion

#### Get Signature

> **get** **customRotationQuaternion**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:328](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L328)

Orientation that the gizmo will be displayed with.
When set null, default value will be used (Quaternion(0, 0, 0, 1))

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

#### Set Signature

> **set** **customRotationQuaternion**(`customRotationQuaternion`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:332](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L332)

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

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`customRotationQuaternion`](../interfaces/IBoundingBoxGizmo.md#customrotationquaternion)

#### Inherited from

[`Gizmo`](Gizmo.md).[`customRotationQuaternion`](Gizmo.md#customrotationquaternion)

***

### hoverMaterial

#### Get Signature

> **get** **hoverMaterial**(): [`StandardMaterial`](StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L302)

Material used to render when gizmo is hovered with mouse

##### Returns

[`StandardMaterial`](StandardMaterial.md)

Material used to render when gizmo is hovered with mouse

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`hoverMaterial`](../interfaces/IBoundingBoxGizmo.md#hovermaterial)

***

### isDragging

#### Get Signature

> **get** **isDragging**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:313](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L313)

True when a rotation anchor or scale box or a attached mesh is dragged

##### Returns

`boolean`

True when a rotation anchor or scale box or a attached mesh is dragged

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`isDragging`](../interfaces/IBoundingBoxGizmo.md#isdragging)

***

### isHovered

#### Get Signature

> **get** **isHovered**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L171)

True when the mouse pointer is hovered a gizmo mesh

##### Returns

`boolean`

True when the mouse pointer is hovered a gizmo mesh

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`isHovered`](../interfaces/IBoundingBoxGizmo.md#ishovered)

#### Inherited from

[`Gizmo`](Gizmo.md).[`isHovered`](Gizmo.md#ishovered)

***

### pointerDragBehavior

#### Get Signature

> **get** **pointerDragBehavior**(): [`PointerDragBehavior`](PointerDragBehavior.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:308](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L308)

Get the pointerDragBehavior

##### Returns

[`PointerDragBehavior`](PointerDragBehavior.md)

***

### scaleDragSpeed

#### Get Signature

> **get** **scaleDragSpeed**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:275](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L275)

Gets scale drag speed

##### Returns

`number`

the scale speed number

#### Set Signature

> **set** **scaleDragSpeed**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:267](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L267)

Sets scale drag speed value

##### Parameters

###### value

`number`

the new speed value

##### Returns

`void`

Scale factor scalar affecting all axes' drag speed

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`scaleDragSpeed`](../interfaces/IBoundingBoxGizmo.md#scaledragspeed)

***

### scaleRatio

#### Get Signature

> **get** **scaleRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:164](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L164)

Ratio for the scale of the gizmo

##### Returns

`number`

#### Set Signature

> **set** **scaleRatio**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L160)

Ratio for the scale of the gizmo (Default: 1)

##### Parameters

###### value

`number`

##### Returns

`void`

Ratio for the scale of the gizmo

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`scaleRatio`](../interfaces/IBoundingBoxGizmo.md#scaleratio)

#### Inherited from

[`Gizmo`](Gizmo.md).[`scaleRatio`](Gizmo.md#scaleratio)

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

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`updateGizmoPositionToMatchAttachedMesh`](../interfaces/IBoundingBoxGizmo.md#updategizmopositiontomatchattachedmesh)

#### Inherited from

[`Gizmo`](Gizmo.md).[`updateGizmoPositionToMatchAttachedMesh`](Gizmo.md#updategizmopositiontomatchattachedmesh)

***

### updateGizmoRotationToMatchAttachedMesh

#### Get Signature

> **get** **updateGizmoRotationToMatchAttachedMesh**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:251](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L251)

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)

##### Returns

`boolean`

#### Set Signature

> **set** **updateGizmoRotationToMatchAttachedMesh**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:248](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L248)

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)
NOTE: This is only possible for meshes with uniform scaling, as otherwise it's not possible to decompose the rotation

##### Parameters

###### value

`boolean`

##### Returns

`void`

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`updateGizmoRotationToMatchAttachedMesh`](../interfaces/IBoundingBoxGizmo.md#updategizmorotationtomatchattachedmesh)

#### Inherited from

[`Gizmo`](Gizmo.md).[`updateGizmoRotationToMatchAttachedMesh`](Gizmo.md#updategizmorotationtomatchattachedmesh)

***

### updateScale

#### Get Signature

> **get** **updateScale**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:298](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L298)

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

##### Returns

`boolean`

#### Set Signature

> **set** **updateScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:295](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L295)

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

##### Parameters

###### value

`boolean`

##### Returns

`void`

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`updateScale`](../interfaces/IBoundingBoxGizmo.md#updatescale)

#### Inherited from

[`Gizmo`](Gizmo.md).[`updateScale`](Gizmo.md#updatescale)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:1029](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L1029)

Disposes of the gizmo

#### Returns

`void`

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`dispose`](../interfaces/IBoundingBoxGizmo.md#dispose)

#### Overrides

[`Gizmo`](Gizmo.md).[`dispose`](Gizmo.md#dispose)

***

### enableDragBehavior()

> **enableDragBehavior**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:1005](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L1005)

Enables a pointer drag behavior on the bounding box of the gizmo

#### Returns

`void`

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`enableDragBehavior`](../interfaces/IBoundingBoxGizmo.md#enabledragbehavior)

***

### getScaleBoxes()

> **getScaleBoxes**(): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:816](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L816)

returns an array containing all boxes used for scaling (in increasing x, y and z orders)

#### Returns

[`AbstractMesh`](AbstractMesh.md)[]

array of scaling boxes

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`getScaleBoxes`](../interfaces/IBoundingBoxGizmo.md#getscaleboxes)

***

### releaseDrag()

> **releaseDrag**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:1016](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L1016)

Force release the drag action by code

#### Returns

`void`

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`releaseDrag`](../interfaces/IBoundingBoxGizmo.md#releasedrag)

***

### setColor()

> **setColor**(`color`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:321](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L321)

Sets the color of the bounding box gizmo

#### Parameters

##### color

[`Color3`](Color3.md)

the color to set

#### Returns

`void`

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`setColor`](../interfaces/IBoundingBoxGizmo.md#setcolor)

***

### setCustomMesh()

> **setCustomMesh**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:1111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L1111)

CustomMeshes are not supported by this gizmo

#### Returns

`void`

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`setCustomMesh`](../interfaces/IBoundingBoxGizmo.md#setcustommesh)

#### Overrides

[`Gizmo`](Gizmo.md).[`setCustomMesh`](Gizmo.md#setcustommesh)

***

### setEnabledRotationAxis()

> **setEnabledRotationAxis**(`axis`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:963](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L963)

Enables rotation on the specified axis and disables rotation on the others

#### Parameters

##### axis

`string`

The list of axis that should be enabled (eg. "xy" or "xyz")

#### Returns

`void`

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`setEnabledRotationAxis`](../interfaces/IBoundingBoxGizmo.md#setenabledrotationaxis)

***

### setEnabledScaling()

> **setEnabledScaling**(`enable`, `homogeneousScaling?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:982](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L982)

Enables/disables scaling

#### Parameters

##### enable

`boolean`

if scaling should be enabled

##### homogeneousScaling?

`boolean` = `false`

defines if scaling should only be homogeneous

#### Returns

`void`

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`setEnabledScaling`](../interfaces/IBoundingBoxGizmo.md#setenabledscaling)

***

### updateBoundingBox()

> **updateBoundingBox**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:823](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L823)

Updates the bounding box information for the Gizmo

#### Returns

`void`

#### Implementation of

[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md).[`updateBoundingBox`](../interfaces/IBoundingBoxGizmo.md#updateboundingbox)

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

***

### MakeNotPickableAndWrapInBoundingBox()

> `static` **MakeNotPickableAndWrapInBoundingBox**(`mesh`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:1059](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L1059)

Makes a mesh not pickable and wraps the mesh inside of a bounding box mesh that is pickable. (This is useful to avoid picking within complex geometry)

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

the mesh to wrap in the bounding box mesh and make not pickable

#### Returns

[`Mesh`](Mesh.md)

the bounding box mesh with the passed in mesh as a child
