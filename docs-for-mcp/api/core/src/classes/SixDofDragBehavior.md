[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SixDofDragBehavior

# Class: SixDofDragBehavior

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts#L13)

A behavior that when attached to a mesh will allow the mesh to be dragged around based on directions and origin of the pointer's ray

## Extends

- [`BaseSixDofDragBehavior`](BaseSixDofDragBehavior.md)

## Constructors

### Constructor

> **new SixDofDragBehavior**(): `SixDofDragBehavior`

#### Returns

`SixDofDragBehavior`

#### Inherited from

[`BaseSixDofDragBehavior`](BaseSixDofDragBehavior.md).[`constructor`](BaseSixDofDragBehavior.md#constructor)

## Properties

### allowMultiPointer

> **allowMultiPointer**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L123)

Should the behavior allow simultaneous pointers to interact with the owner node.

#### Inherited from

[`BaseSixDofDragBehavior`](BaseSixDofDragBehavior.md).[`allowMultiPointer`](BaseSixDofDragBehavior.md#allowmultipointer)

***

### currentDraggingPointerIds

> **currentDraggingPointerIds**: `number`[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L87)

In case of multipointer interaction, all pointer ids currently active are stored here

#### Inherited from

[`BaseSixDofDragBehavior`](BaseSixDofDragBehavior.md).[`currentDraggingPointerIds`](BaseSixDofDragBehavior.md#currentdraggingpointerids)

***

### detachCameraControls

> **detachCameraControls**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L105)

/**
 * If camera controls should be detached during the drag

#### Inherited from

[`BaseSixDofDragBehavior`](BaseSixDofDragBehavior.md).[`detachCameraControls`](BaseSixDofDragBehavior.md#detachcameracontrols)

***

### disableMovement

> **disableMovement**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts#L60)

Use this flag to update the target but not move the owner node towards the target

***

### dragDeltaRatio

> **dragDeltaRatio**: `number` = `0.2`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts#L32)

The distance towards the target drag position to move each frame. This can be useful to avoid jitter. Set this to 1 for no delay. (Default: 0.2)

***

### draggableMeshes

> **draggableMeshes**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L64)

The list of child meshes that can receive drag events
If `null`, all child meshes will receive drag event

#### Inherited from

[`BaseSixDofDragBehavior`](BaseSixDofDragBehavior.md).[`draggableMeshes`](BaseSixDofDragBehavior.md#draggablemeshes)

***

### faceCameraOnDragStart

> **faceCameraOnDragStart**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts#L65)

Should the object rotate towards the camera when we start dragging it

***

### onDragEndObservable

> **onDragEndObservable**: [`Observable`](Observable.md)\<`unknown`\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L118)

Fires each time a drag ends (eg. mouse release after drag)

#### Inherited from

[`BaseSixDofDragBehavior`](BaseSixDofDragBehavior.md).[`onDragEndObservable`](BaseSixDofDragBehavior.md#ondragendobservable)

***

### onDragObservable

> **onDragObservable**: [`Observable`](Observable.md)\<\{ `delta`: [`Vector3`](Vector3.md); `pickInfo`: [`PickingInfo`](PickingInfo.md); `position`: [`Vector3`](Vector3.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L114)

Fires each time a drag happens

#### Inherited from

[`BaseSixDofDragBehavior`](BaseSixDofDragBehavior.md).[`onDragObservable`](BaseSixDofDragBehavior.md#ondragobservable)

***

### onDragStartObservable

> **onDragStartObservable**: [`Observable`](Observable.md)\<\{ `position`: [`Vector3`](Vector3.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L110)

Fires each time a drag starts

#### Inherited from

[`BaseSixDofDragBehavior`](BaseSixDofDragBehavior.md).[`onDragStartObservable`](BaseSixDofDragBehavior.md#ondragstartobservable)

***

### onPositionChangedObservable

> **onPositionChangedObservable**: [`Observable`](Observable.md)\<\{ `position`: [`Vector3`](Vector3.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts#L27)

Fires when position is updated

***

### rotateAroundYOnly

> **rotateAroundYOnly**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts#L43)

If `rotateDraggedObject` is set to `true`, this parameter determines if we are only rotating around the y axis (yaw)

***

### rotateDraggedObject

> **rotateDraggedObject**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts#L37)

If the object should rotate to face the drag origin

***

### rotateWithMotionController

> **rotateWithMotionController**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts#L48)

Should the behavior rotate 1:1 with the motion controller, when one is used.

***

### zDragFactor

> **zDragFactor**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L69)

How much faster the object should move when the controller is moving towards it. This is useful to bring objects that are far away from the user to them faster. Set this to 0 to avoid any speed increase. (Default: 3)

#### Inherited from

[`BaseSixDofDragBehavior`](BaseSixDofDragBehavior.md).[`zDragFactor`](BaseSixDofDragBehavior.md#zdragfactor)

## Accessors

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L142)

Attached node of this behavior

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Gets the current attached target

#### Inherited from

[`BaseSixDofDragBehavior`](BaseSixDofDragBehavior.md).[`attachedNode`](BaseSixDofDragBehavior.md#attachednode)

***

### currentDraggingPointerId

#### Get Signature

> **get** **currentDraggingPointerId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L73)

The id of the pointer that is currently interacting with the behavior (-1 when no pointer is active)

##### Returns

`number`

#### Set Signature

> **set** **currentDraggingPointerId**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L80)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`BaseSixDofDragBehavior`](BaseSixDofDragBehavior.md).[`currentDraggingPointerId`](BaseSixDofDragBehavior.md#currentdraggingpointerid)

***

### currentDraggingPointerID

#### Get Signature

> **get** **currentDraggingPointerID**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L94)

Get or set the currentDraggingPointerId

##### Deprecated

Please use currentDraggingPointerId instead

##### Returns

`number`

#### Set Signature

> **set** **currentDraggingPointerID**(`currentDraggingPointerID`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L98)

##### Parameters

###### currentDraggingPointerID

`number`

##### Returns

`void`

#### Inherited from

[`BaseSixDofDragBehavior`](BaseSixDofDragBehavior.md).[`currentDraggingPointerID`](BaseSixDofDragBehavior.md#currentdraggingpointerid-1)

***

### isMoving

#### Get Signature

> **get** **isMoving**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L135)

Returns true if the attached mesh is currently moving with this behavior

##### Returns

`boolean`

#### Inherited from

[`BaseSixDofDragBehavior`](BaseSixDofDragBehavior.md).[`isMoving`](BaseSixDofDragBehavior.md#ismoving)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts#L53)

The name of the behavior

##### Returns

`string`

gets or sets behavior's name

#### Overrides

[`BaseSixDofDragBehavior`](BaseSixDofDragBehavior.md).[`name`](BaseSixDofDragBehavior.md#name)

## Methods

### attach()

> **attach**(`ownerNode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts#L72)

Attaches the six DoF drag behavior
In XR mode the mesh and its children will have their isNearGrabbable property set to true

#### Parameters

##### ownerNode

[`Mesh`](Mesh.md)

The mesh that will be dragged around once attached

#### Returns

`void`

#### Overrides

[`BaseSixDofDragBehavior`](BaseSixDofDragBehavior.md).[`attach`](BaseSixDofDragBehavior.md#attach)

***

### detach()

> **detach**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts:260](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/sixDofDragBehavior.ts#L260)

Detaches the behavior from the mesh

#### Returns

`void`

#### Overrides

[`BaseSixDofDragBehavior`](BaseSixDofDragBehavior.md).[`detach`](BaseSixDofDragBehavior.md#detach)

***

### init()

> **init**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L149)

Initializes the behavior

#### Returns

`void`

#### Inherited from

[`BaseSixDofDragBehavior`](BaseSixDofDragBehavior.md).[`init`](BaseSixDofDragBehavior.md#init)
