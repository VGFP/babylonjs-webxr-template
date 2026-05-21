[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IPhysicsShapeProximityCastQuery

# Interface: IPhysicsShapeProximityCastQuery

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsShapeProximityCastQuery.ts:8](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsShapeProximityCastQuery.ts#L8)

Query for shape proximity.

## Properties

### ignoreBody?

> `optional` **ignoreBody?**: [`PhysicsBody`](../classes/PhysicsBody.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsShapeProximityCastQuery.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsShapeProximityCastQuery.ts#L32)

Ignores the body passed if it is in the query

***

### maxDistance

> **maxDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsShapeProximityCastQuery.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsShapeProximityCastQuery.ts#L24)

Maximum distance to check for collisions. Can be set to 0 to check for overlaps.

***

### position

> **position**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsShapeProximityCastQuery.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsShapeProximityCastQuery.ts#L16)

The position of shape

***

### rotation

> **rotation**: [`Quaternion`](../classes/Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsShapeProximityCastQuery.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsShapeProximityCastQuery.ts#L20)

The rotation of shape

***

### shape

> **shape**: [`PhysicsShape`](../classes/PhysicsShape.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsShapeProximityCastQuery.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsShapeProximityCastQuery.ts#L12)

The shape to test proximity against

***

### shouldHitTriggers

> **shouldHitTriggers**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsShapeProximityCastQuery.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsShapeProximityCastQuery.ts#L28)

Should trigger collisions be considered in the query?
