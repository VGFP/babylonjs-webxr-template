[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NullEngineOptions

# Class: NullEngineOptions

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/nullEngine.ts#L29)

Options to create the null engine

## Constructors

### Constructor

> **new NullEngineOptions**(): `NullEngineOptions`

#### Returns

`NullEngineOptions`

## Properties

### deterministicLockstep

> **deterministicLockstep**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/nullEngine.ts#L48)

If delta time between frames should be constant

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep

***

### lockstepMaxSteps

> **lockstepMaxSteps**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/nullEngine.ts#L57)

Maximum about of steps between frames (Default: 4)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep

***

### renderHeight

> **renderHeight**: `number` = `256`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/nullEngine.ts#L37)

Render height (Default: 256)

***

### renderingCanvas?

> `optional` **renderingCanvas?**: `HTMLCanvasElement`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/nullEngine.ts#L67)

If supplied, the HTMLCanvasElement to use (e.g. as the inputElement)

***

### renderWidth

> **renderWidth**: `number` = `512`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/nullEngine.ts#L33)

Render width (Default: 512)

***

### textureSize

> **textureSize**: `number` = `512`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/nullEngine.ts#L42)

Texture size (Default: 512)

***

### timeStep?

> `optional` **timeStep?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/nullEngine.ts#L51)

Defines the seconds between each deterministic lock step

***

### useHighPrecisionMatrix?

> `optional` **useHighPrecisionMatrix?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/nullEngine.ts#L62)

Make the matrix computations to be performed in 64 bits instead of 32 bits. False by default
