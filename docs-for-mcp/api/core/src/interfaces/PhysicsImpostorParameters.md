[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsImpostorParameters

# Interface: PhysicsImpostorParameters

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L26)

The interface for the physics imposter parameters

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine

## Properties

### damping?

> `optional` **damping?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L80)

The collision margin around a soft object

***

### disableBidirectionalTransformation?

> `optional` **disableBidirectionalTransformation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L50)

Specifies if bi-directional transformations should be disabled

***

### fixedPoints?

> `optional` **fixedPoints?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L72)

The number used to fix points on a cloth (0, 1, 2, 4, 8) or rope (0, 1, 2) only
0 None, 1, back left or top, 2, back right or bottom, 4, front left, 8, front right
Add to fix multiple points

***

### friction?

> `optional` **friction?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L34)

The friction of the physics imposter

***

### ignoreParent?

> `optional` **ignoreParent?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L46)

Specifies if the parent should be ignored

***

### margin?

> `optional` **margin?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L76)

The collision margin around a soft object

***

### mass

> **mass**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L30)

The mass of the physics imposter

***

### nativeOptions?

> `optional` **nativeOptions?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L42)

The native options of the physics imposter

***

### path?

> `optional` **path?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L84)

The path for a rope based on an extrusion

***

### positionIterations?

> `optional` **positionIterations?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L66)

The number of iterations used in maintaining consistent vertex positions, soft object only

***

### pressure?

> `optional` **pressure?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L54)

The pressure inside the physics imposter, soft object only

***

### restitution?

> `optional` **restitution?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L38)

The coefficient of restitution of the physics imposter

***

### shape?

> `optional` **shape?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L88)

The shape of an extrusion used for a rope based on an extrusion

***

### stiffness?

> `optional` **stiffness?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L58)

The stiffness the physics imposter, soft object only

***

### velocityIterations?

> `optional` **velocityIterations?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L62)

The number of iterations used in maintaining consistent vertex velocities, soft object only
