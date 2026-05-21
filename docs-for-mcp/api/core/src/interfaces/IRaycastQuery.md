[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IRaycastQuery

# Interface: IRaycastQuery

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsRaycastResult.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsRaycastResult.ts#L9)

Interface for query parameters in the raycast function.

## See

the "Collision Filtering" section in https://github.com/eoineoineoin/glTF/tree/MSFT_RigidBodies/extensions/2.0/Vendor/MSFT_collision_primitives

## Properties

### collideWith?

> `optional` **collideWith?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsRaycastResult.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsRaycastResult.ts#L13)

CollideWith mask

***

### ignoreBody?

> `optional` **ignoreBody?**: [`PhysicsBody`](../classes/PhysicsBody.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsRaycastResult.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsRaycastResult.ts#L17)

Ignores the body passed if it is in the query

***

### membership?

> `optional` **membership?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsRaycastResult.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsRaycastResult.ts#L11)

Membership mask

***

### shouldHitTriggers?

> `optional` **shouldHitTriggers?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsRaycastResult.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsRaycastResult.ts#L15)

Should trigger collisions be considered in the query?
