[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EngineOptions

# Interface: EngineOptions

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L72)

Interface defining initialization parameters for Engine class

## Extends

- [`AbstractEngineOptions`](AbstractEngineOptions.md).`WebGLContextAttributes`

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

### disableWebGL2Support?

> `optional` **disableWebGL2Support?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L77)

Defines if webgl2 should be turned off even if supported

#### See

https://doc.babylonjs.com/setup/support/webGL2

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

### failIfMajorPerformanceCaveat?

> `optional` **failIfMajorPerformanceCaveat?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L91)

Will prevent the system from falling back to software implementation if a hardware device cannot be created

#### Overrides

`WebGLContextAttributes.failIfMajorPerformanceCaveat`

***

### forceSRGBBufferSupportState?

> `optional` **forceSRGBBufferSupportState?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L99)

If sRGB buffer support is not set during construction, use this value to force a specific state
This was originally added to mitigate an issue when processing textures in chrome/edge/firefox.
The browser issue has since been fixed. This option remains for backward compatibility.
This will not influence NativeEngine and WebGPUEngine which set the behavior to true during construction.

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

### loseContextOnDispose?

> `optional` **loseContextOnDispose?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L105)

Defines if the gl context should be released.
It's false by default for backward compatibility, but you should probably pass true (see https://registry.khronos.org/webgl/extensions/WEBGL_lose_context/)

***

### premultipliedAlpha?

> `optional` **premultipliedAlpha?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L166)

Defines whether the canvas should be created in "premultiplied" mode (if false, the canvas is created in the "opaque" mode) (true by default)

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`premultipliedAlpha`](AbstractEngineOptions.md#premultipliedalpha)

***

### stencil?

> `optional` **stencil?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L161)

Defines whether the stencil buffer should be enabled.

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`stencil`](AbstractEngineOptions.md#stencil)

***

### timeStep?

> `optional` **timeStep?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L120)

Defines the seconds between each deterministic lock step

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`timeStep`](AbstractEngineOptions.md#timestep)

***

### useExactSrgbConversions?

> `optional` **useExactSrgbConversions?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L171)

True if the more expensive but exact conversions should be used for transforming colors to and from linear space within shaders.
Otherwise, the default is to use a cheaper approximation.

#### Inherited from

[`AbstractEngineOptions`](AbstractEngineOptions.md).[`useExactSrgbConversions`](AbstractEngineOptions.md#useexactsrgbconversions)

***

### useHighPrecisionFloats?

> `optional` **useHighPrecisionFloats?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L82)

Defines that engine should compile shaders with high precision floats (if supported). True by default

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

Defined in: [babylonjs-source/packages/dev/core/src/Engines/thinEngine.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/thinEngine.ts#L86)

Make the canvas XR Compatible for XR sessions

#### Overrides

`WebGLContextAttributes.xrCompatible`
