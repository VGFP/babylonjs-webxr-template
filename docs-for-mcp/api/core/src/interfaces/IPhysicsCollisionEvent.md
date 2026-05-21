[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IPhysicsCollisionEvent

# Interface: IPhysicsCollisionEvent

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L167)

Collision object that is the parameter when notification for collision fires.

## Extends

- [`IBasePhysicsCollisionEvent`](IBasePhysicsCollisionEvent.md)

## Properties

### collidedAgainst

> **collidedAgainst**: [`PhysicsBody`](../classes/PhysicsBody.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L149)

2nd physics body that collided

#### Inherited from

[`IBasePhysicsCollisionEvent`](IBasePhysicsCollisionEvent.md).[`collidedAgainst`](IBasePhysicsCollisionEvent.md#collidedagainst)

***

### collidedAgainstIndex

> **collidedAgainstIndex**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L157)

index in instances array for the collidedAgainst

#### Inherited from

[`IBasePhysicsCollisionEvent`](IBasePhysicsCollisionEvent.md).[`collidedAgainstIndex`](IBasePhysicsCollisionEvent.md#collidedagainstindex)

***

### collider

> **collider**: [`PhysicsBody`](../classes/PhysicsBody.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L145)

1st physics body that collided

#### Inherited from

[`IBasePhysicsCollisionEvent`](IBasePhysicsCollisionEvent.md).[`collider`](IBasePhysicsCollisionEvent.md#collider)

***

### colliderIndex

> **colliderIndex**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L153)

index in instances array for the collider

#### Inherited from

[`IBasePhysicsCollisionEvent`](IBasePhysicsCollisionEvent.md).[`colliderIndex`](IBasePhysicsCollisionEvent.md#colliderindex)

***

### distance

> **distance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L175)

Penetration distance

***

### impulse

> **impulse**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L179)

Impulse value computed by the solver response

***

### normal

> **normal**: [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](../classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L183)

Collision world normal direction

***

### point

> **point**: [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](../classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L171)

World position where the collision occurred

***

### type

> **type**: [`PhysicsEventType`](../enumerations/PhysicsEventType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L161)

Event type

#### Inherited from

[`IBasePhysicsCollisionEvent`](IBasePhysicsCollisionEvent.md).[`type`](IBasePhysicsCollisionEvent.md#type)
