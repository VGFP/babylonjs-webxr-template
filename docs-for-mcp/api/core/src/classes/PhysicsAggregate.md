[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsAggregate

# Class: PhysicsAggregate

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L89)

Helper class to create and interact with a PhysicsAggregate.
This is a transition object that works like Physics Plugin V1 Impostors.
This helper instantiates all mandatory physics objects to get a body/shape and material.
It's less efficient than handling body and shapes independently but for prototyping or
a small numbers of physics objects, it's good enough.

## Constructors

### Constructor

> **new PhysicsAggregate**(`transformNode`, `type`, `options?`, `_scene?`): `PhysicsAggregate`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L111)

#### Parameters

##### transformNode

[`TransformNode`](TransformNode.md)

The physics-enabled object used as the physics aggregate

##### type

[`PhysicsShape`](PhysicsShape.md) \| [`PhysicsShapeType`](../enumerations/PhysicsShapeType.md)

The type of the physics aggregate

##### options?

[`PhysicsAggregateParameters`](../interfaces/PhysicsAggregateParameters.md) = `...`

##### \_scene?

[`Scene`](Scene.md)

#### Returns

`PhysicsAggregate`

## Properties

### body

> **body**: [`PhysicsBody`](PhysicsBody.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L93)

The body that is associated with this aggregate

***

### material

> **material**: [`PhysicsMaterial`](../interfaces/PhysicsMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L103)

The material that is associated with this aggregate

***

### shape

> **shape**: [`PhysicsShape`](PhysicsShape.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L98)

The shape that is associated with this aggregate

***

### transformNode

> **transformNode**: [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L115)

The physics-enabled object used as the physics aggregate

***

### type

> **type**: [`PhysicsShape`](PhysicsShape.md) \| [`PhysicsShapeType`](../enumerations/PhysicsShapeType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L119)

The type of the physics aggregate

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:262](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L262)

Releases the body, shape and material

#### Returns

`void`
