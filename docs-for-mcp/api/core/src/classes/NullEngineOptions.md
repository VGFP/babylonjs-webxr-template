[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NullEngineOptions

# Class: NullEngineOptions

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/nullEngine.pure.ts#L28)

Options to create the null engine

## Constructors

### Constructor

> **new NullEngineOptions**(): `NullEngineOptions`

#### Returns

`NullEngineOptions`

## Properties

### deterministicLockstep

> **deterministicLockstep**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/nullEngine.pure.ts#L47)

If delta time between frames should be constant

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep

***

### enableMultiview?

> `optional` **enableMultiview?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/nullEngine.pure.ts#L79)

Enables headless multiview render-target support for CPU-side render-state tests. Does NOT
emulate GPU multiview rendering.

Enabling this also makes [NullEngine.supportsUniformBuffers](NullEngine.md#supportsuniformbuffers) report true. The coupling is
intentional and intrinsic, not an incidental side effect: the per-eye `viewProjectionR` matrix
is carried ONLY by the multiview scene UBO, and `Scene` writes it only while that UBO is active
(`useUbo`, which requires uniform-buffer support). It also mirrors real engines — multiview is
an OVR_multiview2 / WebGL2 feature and WebGL2 always provides uniform buffers — so
`enableMultiview` without uniform-buffer support is not a coherent state.

***

### lockstepMaxSteps

> **lockstepMaxSteps**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/nullEngine.pure.ts#L56)

Maximum about of steps between frames (Default: 4)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep

***

### renderHeight

> **renderHeight**: `number` = `256`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/nullEngine.pure.ts#L36)

Render height (Default: 256)

***

### renderingCanvas?

> `optional` **renderingCanvas?**: `HTMLCanvasElement`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.pure.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/nullEngine.pure.ts#L66)

If supplied, the HTMLCanvasElement to use (e.g. as the inputElement)

***

### renderWidth

> **renderWidth**: `number` = `512`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/nullEngine.pure.ts#L32)

Render width (Default: 512)

***

### textureSize

> **textureSize**: `number` = `512`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/nullEngine.pure.ts#L41)

Texture size (Default: 512)

***

### timeStep?

> `optional` **timeStep?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/nullEngine.pure.ts#L50)

Defines the seconds between each deterministic lock step

***

### useHighPrecisionMatrix?

> `optional` **useHighPrecisionMatrix?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/nullEngine.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/nullEngine.pure.ts#L61)

Make the matrix computations to be performed in 64 bits instead of 32 bits. False by default
