[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AttachToBoxBehavior

# Class: AttachToBoxBehavior

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/attachToBoxBehavior.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/attachToBoxBehavior.ts#L24)

A behavior that when attached to a mesh will will place a specified node on the meshes face pointing towards the camera

## Implements

- [`Behavior`](../interfaces/Behavior.md)\<[`Mesh`](Mesh.md)\>

## Constructors

### Constructor

> **new AttachToBoxBehavior**(`_ui`): `AttachToBoxBehavior`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/attachToBoxBehavior.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/attachToBoxBehavior.ts#L62)

Creates the AttachToBoxBehavior, used to attach UI to the closest face of the box to a camera

#### Parameters

##### \_ui

[`TransformNode`](TransformNode.md)

The transform node that should be attached to the mesh

#### Returns

`AttachToBoxBehavior`

## Properties

### distanceAwayFromBottomOfFace

> **distanceAwayFromBottomOfFace**: `number` = `0.15`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/attachToBoxBehavior.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/attachToBoxBehavior.ts#L36)

[0.15] The distance from the bottom of the face that the UI should be attached to (default: 0.15)

***

### distanceAwayFromFace

> **distanceAwayFromFace**: `number` = `0.15`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/attachToBoxBehavior.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/attachToBoxBehavior.ts#L32)

[0.15] The distance away from the face of the mesh that the UI should be attached to (default: 0.15)

***

### name

> **name**: `string` = `"AttachToBoxBehavior"`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/attachToBoxBehavior.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/attachToBoxBehavior.ts#L28)

["AttachToBoxBehavior"] The name of the behavior

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`name`](../interfaces/Behavior.md#name)

## Accessors

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/attachToBoxBehavior.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/attachToBoxBehavior.ts#L54)

Attached node of this behavior

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

Gets the current attached target

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attachedNode`](../interfaces/Behavior.md#attachednode)

## Methods

### attach()

> **attach**(`target`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/attachToBoxBehavior.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/attachToBoxBehavior.ts#L107)

Attaches the AttachToBoxBehavior to the passed in mesh

#### Parameters

##### target

[`Mesh`](Mesh.md)

The mesh that the specified node will be attached to

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attach`](../interfaces/Behavior.md#attach)

***

### detach()

> **detach**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/attachToBoxBehavior.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/attachToBoxBehavior.ts#L188)

Detaches the behavior from the mesh

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`detach`](../interfaces/Behavior.md#detach)

***

### init()

> **init**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/attachToBoxBehavior.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/attachToBoxBehavior.ts#L69)

Initializes the behavior

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`init`](../interfaces/Behavior.md#init)
