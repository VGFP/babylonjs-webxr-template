[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Ragdoll

# Class: Ragdoll

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/ragdoll.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/ragdoll.ts#L66)

**`Experimental`**

Ragdoll for Physics V2

## Constructors

### Constructor

> **new Ragdoll**(`skeleton`, `rootTransformNode`, `config`): `Ragdoll`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/ragdoll.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/ragdoll.ts#L103)

**`Experimental`**

Construct a new Ragdoll object. Once ready, it can be made dynamic by calling `Ragdoll` method

#### Parameters

##### skeleton

[`Skeleton`](Skeleton.md)

The skeleton containing bones to be physicalized

##### rootTransformNode

[`Mesh`](Mesh.md) \| [`TransformNode`](TransformNode.md)

The mesh or its transform used by the skeleton

##### config

[`RagdollBoneProperties`](RagdollBoneProperties.md)[]

an array of `RagdollBoneProperties` corresponding to bones and their properties used to instanciate physics bodies

#### Returns

`Ragdoll`

## Properties

### pauseSync

> **pauseSync**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/ragdoll.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/ragdoll.ts#L90)

**`Experimental`**

Pause synchronization between physics and bone position/orientation

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/ragdoll.ts:390](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/ragdoll.ts#L390)

**`Experimental`**

Dispose resources and remove physics objects

#### Returns

`void`

***

### getAggregate()

> **getAggregate**(`index`): [`PhysicsAggregate`](PhysicsAggregate.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/ragdoll.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/ragdoll.ts#L128)

**`Experimental`**

Returns the aggregate corresponding to the ragdoll bone index

#### Parameters

##### index

`number`

ragdoll bone aggregate index

#### Returns

[`PhysicsAggregate`](PhysicsAggregate.md)

the aggregate for the bone index for the root aggregate if index is invalid

***

### getConstraints()

> **getConstraints**(): [`PhysicsConstraint`](PhysicsConstraint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/ragdoll.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/ragdoll.ts#L119)

**`Experimental`**

returns an array of created constraints

#### Returns

[`PhysicsConstraint`](PhysicsConstraint.md)[]

array of created constraints

***

### ragdoll()

> **ragdoll**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/ragdoll.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/ragdoll.ts#L373)

**`Experimental`**

Enable ragdoll mode. Create physics objects and make them dynamic.

#### Returns

`void`
