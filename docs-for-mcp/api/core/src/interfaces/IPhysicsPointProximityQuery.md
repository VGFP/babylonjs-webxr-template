[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IPhysicsPointProximityQuery

# Interface: IPhysicsPointProximityQuery

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsPointProximityQuery.ts:8](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsPointProximityQuery.ts#L8)

Interface for point proximity query.

## Properties

### collisionFilter

> **collisionFilter**: [`IRaycastQuery`](IRaycastQuery.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsPointProximityQuery.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsPointProximityQuery.ts#L20)

Collision filter for the query.

***

### ignoreBody?

> `optional` **ignoreBody?**: [`PhysicsBody`](../classes/PhysicsBody.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsPointProximityQuery.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsPointProximityQuery.ts#L28)

Should the query ignore the body that is passed in?

***

### maxDistance

> **maxDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsPointProximityQuery.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsPointProximityQuery.ts#L16)

Maximum distance to check for collisions. Can be set to 0 to check for overlaps.

***

### position

> **position**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsPointProximityQuery.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsPointProximityQuery.ts#L12)

The position of the query

***

### shouldHitTriggers

> **shouldHitTriggers**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsPointProximityQuery.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsPointProximityQuery.ts#L24)

Should trigger collisions be considered in the query?
