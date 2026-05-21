[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsConstraintParameters

# Interface: PhysicsConstraintParameters

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:253](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L253)

Parameters used to describe a Constraint

## Properties

### axisA?

> `optional` **axisA?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:266](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L266)

An axis in the space of the first body which determines how
distances/angles are measured for LINEAR_X/ANGULAR_X limits.

***

### axisB?

> `optional` **axisB?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L271)

An axis in the space of the second body which determines how
distances/angles are measured for LINEAR_X/ANGULAR_X limits.

***

### collision?

> `optional` **collision?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:297](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L297)

Determines if the connected bodies should collide. Generally,
it is preferable to set this to false, especially if the constraint
positions the bodies so that they overlap. Otherwise, the constraint
will "fight" the collision detection and may cause jitter.

***

### maxDistance?

> `optional` **maxDistance?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L289)

The maximum distance that can separate the two pivots.
Only used for DISTANCE constraints

***

### perpAxisA?

> `optional` **perpAxisA?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:277](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L277)

An axis in the space of the first body which determines how
distances/angles are measured for LINEAR_Y/ANGULAR_Y limits.

***

### perpAxisB?

> `optional` **perpAxisB?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:283](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L283)

An axis in the space of the second body which determines how
distances/angles are measured for LINEAR_Y/ANGULAR_Y limits.

***

### pivotA?

> `optional` **pivotA?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:257](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L257)

Location of the constraint pivot in the space of first body

***

### pivotB?

> `optional` **pivotB?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L261)

Location of the constraint pivot in the space of the second body
