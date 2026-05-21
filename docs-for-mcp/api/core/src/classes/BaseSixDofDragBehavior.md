[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BaseSixDofDragBehavior

# Class: BaseSixDofDragBehavior

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L37)

Base behavior for six degrees of freedom interactions in XR experiences.
Creates virtual meshes that are dragged around
And observables for position/rotation changes

## Extended by

- [`SixDofDragBehavior`](SixDofDragBehavior.md)

## Implements

- [`Behavior`](../interfaces/Behavior.md)\<[`TransformNode`](TransformNode.md)\>

## Constructors

### Constructor

> **new BaseSixDofDragBehavior**(): `BaseSixDofDragBehavior`

#### Returns

`BaseSixDofDragBehavior`

## Properties

### allowMultiPointer

> **allowMultiPointer**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L123)

Should the behavior allow simultaneous pointers to interact with the owner node.

***

### currentDraggingPointerIds

> **currentDraggingPointerIds**: `number`[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L87)

In case of multipointer interaction, all pointer ids currently active are stored here

***

### detachCameraControls

> **detachCameraControls**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L105)

/**
 * If camera controls should be detached during the drag

***

### draggableMeshes

> **draggableMeshes**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L64)

The list of child meshes that can receive drag events
If `null`, all child meshes will receive drag event

***

### onDragEndObservable

> **onDragEndObservable**: [`Observable`](Observable.md)\<`unknown`\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L118)

Fires each time a drag ends (eg. mouse release after drag)

***

### onDragObservable

> **onDragObservable**: [`Observable`](Observable.md)\<\{ `delta`: [`Vector3`](Vector3.md); `pickInfo`: [`PickingInfo`](PickingInfo.md); `position`: [`Vector3`](Vector3.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L114)

Fires each time a drag happens

***

### onDragStartObservable

> **onDragStartObservable**: [`Observable`](Observable.md)\<\{ `position`: [`Vector3`](Vector3.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L110)

Fires each time a drag starts

***

### zDragFactor

> **zDragFactor**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L69)

How much faster the object should move when the controller is moving towards it. This is useful to bring objects that are far away from the user to them faster. Set this to 0 to avoid any speed increase. (Default: 3)

## Accessors

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L142)

Attached node of this behavior

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Gets the current attached target

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attachedNode`](../interfaces/Behavior.md#attachednode)

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

***

### isMoving

#### Get Signature

> **get** **isMoving**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L135)

Returns true if the attached mesh is currently moving with this behavior

##### Returns

`boolean`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L128)

The name of the behavior

##### Returns

`string`

gets or sets behavior's name

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`name`](../interfaces/Behavior.md#name)

## Methods

### attach()

> **attach**(`ownerNode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:286](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L286)

Attaches the scale behavior the passed in mesh

#### Parameters

##### ownerNode

[`TransformNode`](TransformNode.md)

The mesh that will be scaled around once attached

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attach`](../interfaces/Behavior.md#attach)

***

### detach()

> **detach**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:491](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L491)

Detaches the behavior from the mesh

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`detach`](../interfaces/Behavior.md#detach)

***

### init()

> **init**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/baseSixDofDragBehavior.ts#L149)

Initializes the behavior

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`init`](../interfaces/Behavior.md#init)
