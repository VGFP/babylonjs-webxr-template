[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SceneInstrumentation

# Class: SceneInstrumentation

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L12)

This class can be used to get instrumentation data from a Babylon engine

## See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#sceneinstrumentation

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new SceneInstrumentation**(`scene`): `SceneInstrumentation`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:490](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L490)

Instantiates a new scene instrumentation.
This class can be used to get instrumentation data from a Babylon engine

#### Parameters

##### scene

[`Scene`](Scene.md)

Defines the scene to instrument

#### Returns

`SceneInstrumentation`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#sceneinstrumentation

## Properties

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:494](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L494)

Defines the scene to instrument

## Accessors

### activeMeshesEvaluationTimeCounter

#### Get Signature

> **get** **activeMeshesEvaluationTimeCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L76)

Gets the perf counter used for active meshes evaluation time

##### Returns

[`PerfCounter`](PerfCounter.md)

***

### animationsTimeCounter

#### Get Signature

> **get** **animationsTimeCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:306](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L306)

Gets the perf counter used for animations time

##### Returns

[`PerfCounter`](PerfCounter.md)

***

### cameraRenderTimeCounter

#### Get Signature

> **get** **cameraRenderTimeCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:438](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L438)

Gets the perf counter used for camera render time capture

##### Returns

[`PerfCounter`](PerfCounter.md)

***

### captureActiveMeshesEvaluationTime

#### Get Signature

> **get** **captureActiveMeshesEvaluationTime**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L83)

Gets the active meshes evaluation time capture status

##### Returns

`boolean`

#### Set Signature

> **set** **captureActiveMeshesEvaluationTime**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L90)

Enable or disable the active meshes evaluation time capture

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### captureAnimationsTime

#### Get Signature

> **get** **captureAnimationsTime**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:313](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L313)

Gets the animations time capture status

##### Returns

`boolean`

#### Set Signature

> **set** **captureAnimationsTime**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:320](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L320)

Enable or disable the animations time capture

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### captureCameraRenderTime

#### Get Signature

> **get** **captureCameraRenderTime**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:445](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L445)

Gets the camera render time capture status

##### Returns

`boolean`

#### Set Signature

> **set** **captureCameraRenderTime**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:452](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L452)

Enable or disable the camera render time capture

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### captureFrameTime

#### Get Signature

> **get** **captureFrameTime**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:347](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L347)

Gets the frame time capture status

##### Returns

`boolean`

#### Set Signature

> **set** **captureFrameTime**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:354](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L354)

Enable or disable the frame time capture

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### captureInterFrameTime

#### Get Signature

> **get** **captureInterFrameTime**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:368](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L368)

Gets the inter-frames time capture status

##### Returns

`boolean`

#### Set Signature

> **set** **captureInterFrameTime**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L375)

Enable or disable the inter-frames time capture

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### captureParticlesRenderTime

#### Get Signature

> **get** **captureParticlesRenderTime**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L176)

Gets the particles render time capture status

##### Returns

`boolean`

#### Set Signature

> **set** **captureParticlesRenderTime**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L183)

Enable or disable the particles render time capture

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### capturePhysicsTime

#### Get Signature

> **get** **capturePhysicsTime**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:266](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L266)

Gets the physics time capture status

##### Returns

`boolean`

#### Set Signature

> **set** **capturePhysicsTime**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:273](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L273)

Enable or disable the physics time capture

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### captureRenderTargetsRenderTime

#### Get Signature

> **get** **captureRenderTargetsRenderTime**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L126)

Gets the render targets render time capture status

##### Returns

`boolean`

#### Set Signature

> **set** **captureRenderTargetsRenderTime**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L133)

Enable or disable the render targets render time capture

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### captureRenderTime

#### Get Signature

> **get** **captureRenderTime**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:389](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L389)

Gets the render time capture status

##### Returns

`boolean`

#### Set Signature

> **set** **captureRenderTime**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:396](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L396)

Enable or disable the render time capture

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### captureSpritesRenderTime

#### Get Signature

> **get** **captureSpritesRenderTime**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L219)

Gets the sprites render time capture status

##### Returns

`boolean`

#### Set Signature

> **set** **captureSpritesRenderTime**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L226)

Enable or disable the sprites render time capture

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### drawCallsCounter

#### Get Signature

> **get** **drawCallsCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:480](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L480)

Gets the perf counter used for draw calls

##### Returns

[`PerfCounter`](PerfCounter.md)

***

### frameTimeCounter

#### Get Signature

> **get** **frameTimeCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:340](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L340)

Gets the perf counter used for frame time capture

##### Returns

[`PerfCounter`](PerfCounter.md)

***

### interFrameTimeCounter

#### Get Signature

> **get** **interFrameTimeCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:361](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L361)

Gets the perf counter used for inter-frames time capture

##### Returns

[`PerfCounter`](PerfCounter.md)

***

### particlesRenderTimeCounter

#### Get Signature

> **get** **particlesRenderTimeCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L169)

Gets the perf counter used for particles render time

##### Returns

[`PerfCounter`](PerfCounter.md)

***

### physicsTimeCounter

#### Get Signature

> **get** **physicsTimeCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L259)

Gets the perf counter used for physics time

##### Returns

[`PerfCounter`](PerfCounter.md)

***

### renderTargetsRenderTimeCounter

#### Get Signature

> **get** **renderTargetsRenderTimeCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L119)

Gets the perf counter used for render targets render time

##### Returns

[`PerfCounter`](PerfCounter.md)

***

### renderTimeCounter

#### Get Signature

> **get** **renderTimeCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:382](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L382)

Gets the perf counter used for render time capture

##### Returns

[`PerfCounter`](PerfCounter.md)

***

### spritesRenderTimeCounter

#### Get Signature

> **get** **spritesRenderTimeCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:212](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L212)

Gets the perf counter used for sprites render time

##### Returns

[`PerfCounter`](PerfCounter.md)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts:599](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/sceneInstrumentation.ts#L599)

Dispose and release associated resources.

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)
