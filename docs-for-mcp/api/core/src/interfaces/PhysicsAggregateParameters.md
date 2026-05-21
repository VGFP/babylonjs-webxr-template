[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsAggregateParameters

# Interface: PhysicsAggregateParameters

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L21)

The interface for the physics aggregate parameters

## Properties

### center?

> `optional` **center?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L65)

mesh local center

***

### extents?

> `optional` **extents?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L55)

Extents for box

***

### friction?

> `optional` **friction?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L30)

The friction of the physics aggregate

***

### isTriggerShape?

> `optional` **isTriggerShape?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L80)

If true, mark the created shape as a trigger shape

***

### mass

> **mass**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L25)

The mass of the physics aggregate

***

### mesh?

> `optional` **mesh?**: [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L70)

mesh object. Used for mesh and convex hull aggregates.

***

### pointA?

> `optional` **pointA?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L45)

Starting point for cylinder/capsule

***

### pointB?

> `optional` **pointB?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L50)

Ending point for cylinder/capsule

***

### radius?

> `optional` **radius?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L40)

Radius for sphere, cylinder and capsule

***

### restitution?

> `optional` **restitution?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L35)

The coefficient of restitution of the physics aggregate

***

### rotation?

> `optional` **rotation?**: [`Quaternion`](../classes/Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L60)

Orientation for box

***

### startAsleep?

> `optional` **startAsleep?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsAggregate.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsAggregate.ts#L75)

Physics engine will try to make this body sleeping and not active
