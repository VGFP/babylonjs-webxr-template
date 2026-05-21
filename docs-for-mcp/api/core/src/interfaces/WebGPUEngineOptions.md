[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebGPUEngineOptions

# Interface: WebGPUEngineOptions

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L151)

Options to create the WebGPU engine

## Extends

- [`AbstractEngineOptions`](AbstractEngineOptions.md).`GPURequestAdapterOptions`

## Properties

### adaptToDeviceRatio?

> `optional` **adaptToDeviceRatio?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L151)

Defines whether to adapt to the device's viewport characteristics (default: false)

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`adaptToDeviceRatio`](AbstractEngineOptions.md#adapttodeviceratio)

***

### antialias?

> `optional` **antialias?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L156)

Defines whether MSAA is enabled on the canvas.

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`antialias`](AbstractEngineOptions.md#antialias)

***

### audioEngine?

> `optional` **audioEngine?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L106)

Defines if webaudio should be initialized as well

#### See

https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`audioEngine`](AbstractEngineOptions.md#audioengine)

***

### audioEngineOptions?

> `optional` **audioEngineOptions?**: `IAudioEngineOptions`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L110)

Specifies options for the audio engine

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`audioEngineOptions`](AbstractEngineOptions.md#audioengineoptions)

***

### deterministicLockstep?

> `optional` **deterministicLockstep?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L116)

Defines if animations should run using a deterministic lock step

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`deterministicLockstep`](AbstractEngineOptions.md#deterministiclockstep)

***

### deviceDescriptor?

> `optional` **deviceDescriptor?**: `GPUDeviceDescriptor`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L173)

Defines the device descriptor used to create a device once we have retrieved an appropriate adapter

***

### doNotHandleContextLost?

> `optional` **doNotHandleContextLost?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L125)

Defines that engine should ignore context lost events
If this event happens when this parameter is true, you will have to reload the page to restore rendering

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`doNotHandleContextLost`](AbstractEngineOptions.md#donothandlecontextlost)

***

### doNotHandleTouchAction?

> `optional` **doNotHandleTouchAction?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L130)

Defines that engine should ignore modifying touch action attribute and style
If not handle, you might need to set it up on your side for expected touch devices behavior.

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`doNotHandleTouchAction`](AbstractEngineOptions.md#donothandletouchaction)

***

### enableAllFeatures?

> `optional` **enableAllFeatures?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L179)

When requesting the device, enable all the features supported by the adapter. Default: false
Note that this setting is ignored if you explicitely set deviceDescriptor.requiredFeatures

***

### enableGPUDebugMarkers?

> `optional` **enableGPUDebugMarkers?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L195)

Defines whether we should generate debug markers in the gpu command lists (can be seen with PIX for eg). Default: false

***

### featureLevel?

> `optional` **featureLevel?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L155)

The featureLevel property of the GPURequestAdapterOptions interface

#### Overrides

`GPURequestAdapterOptions.featureLevel`

***

### forceFallbackAdapter?

> `optional` **forceFallbackAdapter?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L168)

When set to true, indicates that only a fallback adapter may be returned when requesting an adapter.
If the user agent does not support a fallback adapter, will cause requestAdapter() to resolve to null.
Default: false

#### Overrides

`GPURequestAdapterOptions.forceFallbackAdapter`

***

### glslangOptions?

> `optional` **glslangOptions?**: [`GlslangOptions`](GlslangOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L200)

Options to load the associated Glslang library

***

### limitDeviceRatio?

> `optional` **limitDeviceRatio?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L101)

Defines if the engine should no exceed a specified device ratio

#### See

https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`limitDeviceRatio`](AbstractEngineOptions.md#limitdeviceratio)

***

### lockstepMaxSteps?

> `optional` **lockstepMaxSteps?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L118)

Defines the maximum steps to use with deterministic lock step mode

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`lockstepMaxSteps`](AbstractEngineOptions.md#lockstepmaxsteps)

***

### powerPreference?

> `optional` **powerPreference?**: `GPUPowerPreference`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L161)

Defines the category of adapter to use.
Is it the discrete or integrated device.

#### Overrides

`GPURequestAdapterOptions.powerPreference`

***

### premultipliedAlpha?

> `optional` **premultipliedAlpha?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L166)

Defines whether the canvas should be created in "premultiplied" mode (if false, the canvas is created in the "opaque" mode) (true by default)

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`premultipliedAlpha`](AbstractEngineOptions.md#premultipliedalpha)

***

### setMaximumLimits?

> `optional` **setMaximumLimits?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L185)

When requesting the device, set the required limits to the maximum possible values (the ones from adapter.limits). Default: false
Note that this setting is ignored if you explicitely set deviceDescriptor.requiredLimits

***

### stencil?

> `optional` **stencil?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L161)

Defines whether the stencil buffer should be enabled.

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`stencil`](AbstractEngineOptions.md#stencil)

***

### swapChainFormat?

> `optional` **swapChainFormat?**: `GPUTextureFormat`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L190)

Defines the requested Swap Chain Format.

***

### timeStep?

> `optional` **timeStep?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L120)

Defines the seconds between each deterministic lock step

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`timeStep`](AbstractEngineOptions.md#timestep)

***

### twgslOptions?

> `optional` **twgslOptions?**: [`TwgslOptions`](TwgslOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:205](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L205)

Options to load the associated Twgsl library

***

### useExactSrgbConversions?

> `optional` **useExactSrgbConversions?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L171)

True if the more expensive but exact conversions should be used for transforming colors to and from linear space within shaders.
Otherwise, the default is to use a cheaper approximation.

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`useExactSrgbConversions`](AbstractEngineOptions.md#useexactsrgbconversions)

***

### useHighPrecisionMatrix?

> `optional` **useHighPrecisionMatrix?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L136)

Make the matrix computations to be performed in 64 bits instead of 32 bits. False by default.
Note that setting useLargeWorldRendering will also set high precision matrices

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`useHighPrecisionMatrix`](AbstractEngineOptions.md#usehighprecisionmatrix)

***

### useLargeWorldRendering?

> `readonly` `optional` **useLargeWorldRendering?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L146)

LargeWorldRendering helps avoid floating point imprecision of rendering large worlds by
1. Forcing highPrecisionMatrices (matrix computations in 64 bits instead of 32)
2. Enabling floatingOriginMode in all scenes -- offsetting position-related uniform and attribute values before passing to shader so that active camera is centered at origin and world is offset by active camera position

NOTE that if this mode is set during engineCreation, all scenes will have floatingOrigin offset and you do not need to send floatingOriginMode option to each scene creation.
If you'd like to have only specific scenes using the offset logic, you can set the flag on those scenes directly -- however, to achieve proper large world rendering, you must also set the useHighPrecisionMatrix option on engine.

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`useLargeWorldRendering`](AbstractEngineOptions.md#uselargeworldrendering)

***

### xrCompatible?

> `optional` **xrCompatible?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/LibDeclarations/webgpu.d.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LibDeclarations/webgpu.d.ts#L21)

#### Inherited from

`GPURequestAdapterOptions.xrCompatible`
