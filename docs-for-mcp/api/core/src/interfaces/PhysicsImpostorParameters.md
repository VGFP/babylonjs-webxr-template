[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsImpostorParameters

# Interface: PhysicsImpostorParameters

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L22)

The interface for the physics imposter parameters

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine

## Properties

### damping?

> `optional` **damping?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L76)

The collision margin around a soft object

***

### disableBidirectionalTransformation?

> `optional` **disableBidirectionalTransformation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L46)

Specifies if bi-directional transformations should be disabled

***

### fixedPoints?

> `optional` **fixedPoints?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L68)

The number used to fix points on a cloth (0, 1, 2, 4, 8) or rope (0, 1, 2) only
0 None, 1, back left or top, 2, back right or bottom, 4, front left, 8, front right
Add to fix multiple points

***

### friction?

> `optional` **friction?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L30)

The friction of the physics imposter

***

### ignoreParent?

> `optional` **ignoreParent?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L42)

Specifies if the parent should be ignored

***

### margin?

> `optional` **margin?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L72)

The collision margin around a soft object

***

### mass

> **mass**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L26)

The mass of the physics imposter

***

### nativeOptions?

> `optional` **nativeOptions?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L38)

The native options of the physics imposter

***

### path?

> `optional` **path?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L80)

The path for a rope based on an extrusion

***

### positionIterations?

> `optional` **positionIterations?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L62)

The number of iterations used in maintaining consistent vertex positions, soft object only

***

### pressure?

> `optional` **pressure?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L50)

The pressure inside the physics imposter, soft object only

***

### restitution?

> `optional` **restitution?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L34)

The coefficient of restitution of the physics imposter

***

### shape?

> `optional` **shape?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L84)

The shape of an extrusion used for a rope based on an extrusion

***

### stiffness?

> `optional` **stiffness?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L54)

The stiffness the physics imposter, soft object only

***

### velocityIterations?

> `optional` **velocityIterations?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L58)

The number of iterations used in maintaining consistent vertex velocities, soft object only
