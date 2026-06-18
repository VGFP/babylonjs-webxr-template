[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsHitData

# Interface: PhysicsHitData

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L1173)

Interface for a physics hit data

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine#further-functionality-of-the-impostor-class

## Properties

### contactPoint

> **contactPoint**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L1181)

The contact point

***

### distanceFromOrigin

> **distanceFromOrigin**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L1185)

The distance from the origin to the contact point

***

### force

> **force**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L1177)

The force applied at the contact point

***

### instanceIndex?

> `optional` **instanceIndex?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L1189)

For an instanced physics body (mesh with thin instances), the index of the thin instance the hit applies to
