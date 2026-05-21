[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsVortexEventOptions

# Class: PhysicsVortexEventOptions

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsHelper.ts#L1109)

Options for the vortex event

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine#further-functionality-of-the-impostor-class

## Constructors

### Constructor

> **new PhysicsVortexEventOptions**(): `PhysicsVortexEventOptions`

#### Returns

`PhysicsVortexEventOptions`

## Properties

### centrifugalForceMultiplier

> **centrifugalForceMultiplier**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsHelper.ts#L1138)

This multiplier determines with how much force the objects will be pushed sideways/around the vortex, when above the threshold.

***

### centripetalForceMultiplier

> **centripetalForceMultiplier**: `number` = `5`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsHelper.ts#L1133)

This multiplier determines with how much force the objects will be pushed sideways/around the vortex, when below the threshold.

***

### centripetalForceThreshold

> **centripetalForceThreshold**: `number` = `0.7`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsHelper.ts#L1128)

At which distance, relative to the radius the centripetal forces should kick in? Range: 0-1

***

### height

> **height**: `number` = `10`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsHelper.ts#L1123)

The height of the cylinder for the vortex.

***

### radius

> **radius**: `number` = `5`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsHelper.ts#L1113)

The radius of the cylinder for the vortex

***

### strength

> **strength**: `number` = `10`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsHelper.ts#L1118)

The strength of the vortex.

***

### updraftForceMultiplier

> **updraftForceMultiplier**: `number` = `0.02`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:1143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/physicsHelper.ts#L1143)

This multiplier determines with how much force the objects will be pushed upwards, when in the vortex.
