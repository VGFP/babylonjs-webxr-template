[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MultiPointerScaleBehavior

# Class: MultiPointerScaleBehavior

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/multiPointerScaleBehavior.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/multiPointerScaleBehavior.ts#L12)

A behavior that when attached to a mesh will allow the mesh to be scaled

## Implements

- [`Behavior`](../interfaces/Behavior.md)\<[`Mesh`](Mesh.md)\>

## Constructors

### Constructor

> **new MultiPointerScaleBehavior**(): `MultiPointerScaleBehavior`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/multiPointerScaleBehavior.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/multiPointerScaleBehavior.ts#L31)

Instantiate a new behavior that when attached to a mesh will allow the mesh to be scaled

#### Returns

`MultiPointerScaleBehavior`

## Accessors

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/multiPointerScaleBehavior.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/multiPointerScaleBehavior.ts#L24)

Attached node of this behavior

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

Gets the current attached target

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attachedNode`](../interfaces/Behavior.md#attachednode)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/multiPointerScaleBehavior.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/multiPointerScaleBehavior.ts#L42)

The name of the behavior

##### Returns

`string`

gets or sets behavior's name

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`name`](../interfaces/Behavior.md#name)

## Methods

### attach()

> **attach**(`ownerNode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/multiPointerScaleBehavior.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/multiPointerScaleBehavior.ts#L59)

Attaches the scale behavior the passed in mesh

#### Parameters

##### ownerNode

[`Mesh`](Mesh.md)

The mesh that will be scaled around once attached

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attach`](../interfaces/Behavior.md#attach)

***

### detach()

> **detach**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/multiPointerScaleBehavior.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/multiPointerScaleBehavior.ts#L111)

Detaches the behavior from the mesh

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`detach`](../interfaces/Behavior.md#detach)

***

### init()

> **init**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/multiPointerScaleBehavior.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/multiPointerScaleBehavior.ts#L49)

Initializes the behavior

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`init`](../interfaces/Behavior.md#init)
