[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AbstractEngineOptions

# Interface: AbstractEngineOptions

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L106)

Interface defining initialization parameters for AbstractEngine class

## Extended by

- [`EngineOptions`](EngineOptions.md)
- [`WebGPUEngineOptions`](WebGPUEngineOptions.md)

## Properties

### adaptToDeviceRatio?

> `optional` **adaptToDeviceRatio?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L161)

Defines whether to adapt to the device's viewport characteristics (default: false)

***

### antialias?

> `optional` **antialias?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L166)

Defines whether MSAA is enabled on the canvas.

***

### audioEngine?

> `optional` **audioEngine?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L116)

Defines if webaudio should be initialized as well

#### See

https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic

***

### audioEngineOptions?

> `optional` **audioEngineOptions?**: `IAudioEngineOptions`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L120)

Specifies options for the audio engine

***

### deterministicLockstep?

> `optional` **deterministicLockstep?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L126)

Defines if animations should run using a deterministic lock step

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep

***

### doNotHandleContextLost?

> `optional` **doNotHandleContextLost?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L135)

Defines that engine should ignore context lost events
If this event happens when this parameter is true, you will have to reload the page to restore rendering

***

### doNotHandleTouchAction?

> `optional` **doNotHandleTouchAction?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L140)

Defines that engine should ignore modifying touch action attribute and style
If not handle, you might need to set it up on your side for expected touch devices behavior.

***

### limitDeviceRatio?

> `optional` **limitDeviceRatio?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L111)

Defines if the engine should no exceed a specified device ratio

#### See

https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio

***

### lockstepMaxSteps?

> `optional` **lockstepMaxSteps?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L128)

Defines the maximum steps to use with deterministic lock step mode

***

### premultipliedAlpha?

> `optional` **premultipliedAlpha?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L176)

Defines whether the canvas should be created in "premultiplied" mode (if false, the canvas is created in the "opaque" mode) (true by default)

***

### stencil?

> `optional` **stencil?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:171](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L171)

Defines whether the stencil buffer should be enabled.

***

### timeStep?

> `optional` **timeStep?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L130)

Defines the seconds between each deterministic lock step

***

### useExactSrgbConversions?

> `optional` **useExactSrgbConversions?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L181)

True if the more expensive but exact conversions should be used for transforming colors to and from linear space within shaders.
Otherwise, the default is to use a cheaper approximation.

***

### useHighPrecisionMatrix?

> `optional` **useHighPrecisionMatrix?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L146)

Make the matrix computations to be performed in 64 bits instead of 32 bits. False by default.
Note that setting useLargeWorldRendering will also set high precision matrices

***

### useLargeWorldRendering?

> `readonly` `optional` **useLargeWorldRendering?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L156)

LargeWorldRendering helps avoid floating point imprecision of rendering large worlds by
1. Forcing highPrecisionMatrices (matrix computations in 64 bits instead of 32)
2. Enabling floatingOriginMode in all scenes -- offsetting position-related uniform and attribute values before passing to shader so that active camera is centered at origin and world is offset by active camera position

NOTE that if this mode is set during engineCreation, all scenes will have floatingOrigin offset and you do not need to send floatingOriginMode option to each scene creation.
If you'd like to have only specific scenes using the offset logic, you can set the flag on those scenes directly -- however, to achieve proper large world rendering, you must also set the useHighPrecisionMatrix option on engine.
