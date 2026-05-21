[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EngineInstrumentation

# Class: EngineInstrumentation

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/engineInstrumentation.ts:10](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/engineInstrumentation.ts#L10)

This class can be used to get instrumentation data from a Babylon engine

## See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#engineinstrumentation

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new EngineInstrumentation**(`engine`): `EngineInstrumentation`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/engineInstrumentation.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/engineInstrumentation.ts#L99)

Instantiates a new engine instrumentation.
This class can be used to get instrumentation data from a Babylon engine

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

Defines the engine to instrument

#### Returns

`EngineInstrumentation`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#engineinstrumentation

## Properties

### engine

> **engine**: [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/engineInstrumentation.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/engineInstrumentation.ts#L103)

Define the instrumented engine.

## Accessors

### captureGPUFrameTime

#### Get Signature

> **get** **captureGPUFrameTime**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/engineInstrumentation.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/engineInstrumentation.ts#L35)

Gets the GPU frame time capture status

##### Returns

`boolean`

#### Set Signature

> **set** **captureGPUFrameTime**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/engineInstrumentation.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/engineInstrumentation.ts#L42)

Enable or disable the GPU frame time capture

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### captureShaderCompilationTime

#### Get Signature

> **get** **captureShaderCompilationTime**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/engineInstrumentation.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/engineInstrumentation.ts#L61)

Gets the shader compilation time capture status

##### Returns

`boolean`

#### Set Signature

> **set** **captureShaderCompilationTime**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/engineInstrumentation.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/engineInstrumentation.ts#L68)

Enable or disable the shader compilation time capture

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### gpuFrameTimeCounter

#### Get Signature

> **get** **gpuFrameTimeCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/engineInstrumentation.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/engineInstrumentation.ts#L28)

Gets the perf counter used for GPU frame time

##### Returns

[`PerfCounter`](PerfCounter.md)

***

### shaderCompilationTimeCounter

#### Get Signature

> **get** **shaderCompilationTimeCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/engineInstrumentation.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/engineInstrumentation.ts#L54)

Gets the perf counter used for shader compilation time

##### Returns

[`PerfCounter`](PerfCounter.md)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Instrumentation/engineInstrumentation.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Instrumentation/engineInstrumentation.ts#L109)

Dispose and release associated resources.

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)
