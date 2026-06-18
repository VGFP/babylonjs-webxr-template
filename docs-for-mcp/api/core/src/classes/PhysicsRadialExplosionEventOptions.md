[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsRadialExplosionEventOptions

# Class: PhysicsRadialExplosionEventOptions

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1047](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L1047)

Options for the radial explosion event

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine#further-functionality-of-the-impostor-class

## Constructors

### Constructor

> **new PhysicsRadialExplosionEventOptions**(): `PhysicsRadialExplosionEventOptions`

#### Returns

`PhysicsRadialExplosionEventOptions`

## Properties

### affectedBodiesCallback

> **affectedBodiesCallback**: (`affectedBodiesWithData`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1076](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L1076)

Callback that is triggered when the radial explosion affects bodies.

#### Parameters

##### affectedBodiesWithData

[`PhysicsAffectedBodyWithData`](../interfaces/PhysicsAffectedBodyWithData.md)[]

#### Returns

`void`

***

### affectedImpostorsCallback

> **affectedImpostorsCallback**: (`affectedImpostorsWithData`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1071](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L1071)

Callback that is triggered when the radial explosion affects impostors.

#### Parameters

##### affectedImpostorsWithData

[`PhysicsAffectedImpostorWithData`](../interfaces/PhysicsAffectedImpostorWithData.md)[]

#### Returns

`void`

***

### falloff

> **falloff**: [`PhysicsRadialImpulseFalloff`](../enumerations/PhysicsRadialImpulseFalloff.md) = `PhysicsRadialImpulseFalloff.Constant`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1061](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L1061)

The strength of the force in correspondence to the distance of the affected object

***

### radius

> **radius**: `number` = `5`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1051](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L1051)

The radius of the sphere for the radial explosion.

***

### sphere

> **sphere**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1066](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L1066)

Sphere options for the radial explosion.

#### diameter

> **diameter**: `number`

#### segments

> **segments**: `number`

***

### strength

> **strength**: `number` = `10`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1056](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L1056)

The strength of the explosion.
