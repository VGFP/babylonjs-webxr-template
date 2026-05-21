[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DepthOfFieldBlurPostProcess

# Class: DepthOfFieldBlurPostProcess

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldBlurPostProcess.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/depthOfFieldBlurPostProcess.ts#L20)

The DepthOfFieldBlurPostProcess applied a blur in a give direction.
This blur differs from the standard BlurPostProcess as it attempts to avoid blurring pixels
based on samples that have a large difference in distance than the center pixel.
See section 2.6.2 http://fileadmin.cs.lth.se/cs/education/edan35/lectures/12dof.pdf

## Extends

- [`BlurPostProcess`](BlurPostProcess.md)

## Constructors

### Constructor

> **new DepthOfFieldBlurPostProcess**(`name`, `_scene`, `direction`, `kernel`, `options`, `camera`, `circleOfConfusion`, `imageToBlur?`, `samplingMode?`, `engine?`, `reusable?`, `textureType?`, `blockCompilation?`, `textureFormat?`): `DepthOfFieldBlurPostProcess`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldBlurPostProcess.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/depthOfFieldBlurPostProcess.ts#L46)

Creates a new instance DepthOfFieldBlurPostProcess

#### Parameters

##### name

`string`

The name of the effect.

##### \_scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

The scene the effect belongs to (not used, you can pass null)

##### direction

[`Vector2`](Vector2.md)

The direction the blur should be applied.

##### kernel

`number`

The size of the kernel used to blur.

##### options

`number` \| [`PostProcessOptions`](../type-aliases/PostProcessOptions.md)

The required width/height ratio to downsize to before computing the render pass.

##### camera

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

The camera to apply the render pass to.

##### circleOfConfusion

[`PostProcess`](PostProcess.md)

The circle of confusion + depth map to be used to avoid blurring across edges

##### imageToBlur?

[`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\> = `null`

The image to apply the blur to (default: Current rendered frame)

##### samplingMode?

`number` = `Texture.BILINEAR_SAMPLINGMODE`

The sampling mode to be used when computing the pass. (default: 0)

##### engine?

[`AbstractEngine`](AbstractEngine.md)

The engine which the post process will be applied. (default: current engine)

##### reusable?

`boolean`

If the post process can be reused on the same frame. (default: false)

##### textureType?

`number` = `Constants.TEXTURETYPE_UNSIGNED_BYTE`

Type of textures used when performing the post process. (default: 0)

##### blockCompilation?

`boolean` = `false`

If compilation of the shader should not be done in the constructor. The updateEffect method can be used to compile the shader at a later time. (default: false)

##### textureFormat?

`number` = `Constants.TEXTUREFORMAT_RGBA`

Format of textures used when performing the post process. (default: TEXTUREFORMAT_RGBA)

#### Returns

`DepthOfFieldBlurPostProcess`

#### Overrides

[`BlurPostProcess`](BlurPostProcess.md).[`constructor`](BlurPostProcess.md#constructor)

## Properties

### adaptScaleToCurrentViewport

> **adaptScaleToCurrentViewport**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:333](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L333)

Modify the scale of the post process to be the same as the viewport (default: false)

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`adaptScaleToCurrentViewport`](BlurPostProcess.md#adaptscaletocurrentviewport)

***

### alphaConstants

> **alphaConstants**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:267](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L267)

Sets the setAlphaBlendConstants of the babylon engine

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`alphaConstants`](BlurPostProcess.md#alphaconstants)

***

### alwaysForcePOT

> **alwaysForcePOT**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:309](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L309)

Force textures to be a power of two (default: false)

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`alwaysForcePOT`](BlurPostProcess.md#alwaysforcepot)

***

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:272](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L272)

Animations to be used for the post processing

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`animations`](BlurPostProcess.md#animations)

***

### autoClear

> **autoClear**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:243](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L243)

If the buffer needs to be cleared before applying the post process. (default: true)
Should be set to false if shader will overwrite all previous pixels.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`autoClear`](BlurPostProcess.md#autoclear)

***

### clearColor

> **clearColor**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L237)

Clear color to use when screen clearing

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`clearColor`](BlurPostProcess.md#clearcolor)

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:338](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L338)

Specifies if the post process should be serialized

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`doNotSerialize`](BlurPostProcess.md#donotserialize)

***

### enablePixelPerfectMode

> **enablePixelPerfectMode**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:279](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L279)

Enable Pixel Perfect mode where texture is not scaled to be power of 2.
Can only be used on a single postprocess or on the last one of a chain. (default: false)

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`enablePixelPerfectMode`](BlurPostProcess.md#enablepixelperfectmode)

***

### externalTextureSamplerBinding

> **externalTextureSamplerBinding**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:366](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L366)

if externalTextureSamplerBinding is true, the "apply" method won't bind the textureSampler texture, it is expected to be done by the "outside" (by the onApplyObservable observer most probably).
counter-productive in some cases because if the texture bound by "apply" is different from the currently texture bound, (the one set by the onApplyObservable observer, for eg) some
internal structures (materialContext) will be dirtified, which may impact performances

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`externalTextureSamplerBinding`](BlurPostProcess.md#externaltexturesamplerbinding)

***

### forceAutoClearInAlphaMode

> **forceAutoClearInAlphaMode**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L249)

If clearing the buffer should be forced in autoClear mode, even when alpha mode is enabled (default: false).
By default, the buffer will only be cleared if alpha mode is disabled (and autoClear is true).

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`forceAutoClearInAlphaMode`](BlurPostProcess.md#forceautoclearinalphamode)

***

### forceFullscreenViewport

> **forceFullscreenViewport**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L285)

Force the postprocess to be applied without taking in account viewport

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`forceFullscreenViewport`](BlurPostProcess.md#forcefullscreenviewport)

***

### height

> **height**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L216)

Height of the texture to apply the post process on

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`height`](BlurPostProcess.md#height)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:291](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L291)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`inspectableCustomProperties`](BlurPostProcess.md#inspectablecustomproperties)

***

### nodeMaterialSource

> **nodeMaterialSource**: [`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterial`](NodeMaterial.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:221](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L221)

Gets the node material used to create this postprocess (null if the postprocess was manually created)

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`nodeMaterialSource`](BlurPostProcess.md#nodematerialsource)

***

### onActivateObservable

> **onActivateObservable**: [`Observable`](Observable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:422](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L422)

An event triggered when the postprocess is activated.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onActivateObservable`](BlurPostProcess.md#onactivateobservable)

***

### onAfterRenderObservable

> **onAfterRenderObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:488](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L488)

An event triggered after rendering the postprocess

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onAfterRenderObservable`](BlurPostProcess.md#onafterrenderobservable)

***

### onApplyObservable

> **onApplyObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:456](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L456)

An event triggered when the postprocess applies its effect.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onApplyObservable`](BlurPostProcess.md#onapplyobservable)

***

### onBeforeRenderObservable

> **onBeforeRenderObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:472](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L472)

An event triggered before rendering the postprocess

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onBeforeRenderObservable`](BlurPostProcess.md#onbeforerenderobservable)

***

### onDisposeObservable

> `readonly` **onDisposeObservable**: [`Observable`](Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:504](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L504)

An event triggered when the post-process is disposed

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onDisposeObservable`](BlurPostProcess.md#ondisposeobservable)

***

### onEffectCreatedObservable

> **onEffectCreatedObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:415](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L415)

Executed when the effect was created

#### Returns

effect that was created for this post process

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onEffectCreatedObservable`](BlurPostProcess.md#oneffectcreatedobservable)

***

### onSizeChangedObservable

> **onSizeChangedObservable**: [`Observable`](Observable.md)\<[`PostProcess`](PostProcess.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:440](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L440)

An event triggered when the postprocess changes its size.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onSizeChangedObservable`](BlurPostProcess.md#onsizechangedobservable)

***

### renderTargetSamplingMode

> **renderTargetSamplingMode**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L232)

Sampling mode used by the shader

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`renderTargetSamplingMode`](BlurPostProcess.md#rendertargetsamplingmode)

***

### scaleMode

> **scaleMode**: `number` = `Constants.SCALEMODE_FLOOR`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:304](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L304)

Scale mode for the post process (default: Engine.SCALEMODE_FLOOR)

| Value | Type                                | Description |
| ----- | ----------------------------------- | ----------- |
| 1     | SCALEMODE_FLOOR                     | [engine.scalemode_floor](https://doc.babylonjs.com/api/classes/babylon.engine#scalemode_floor) |
| 2     | SCALEMODE_NEAREST                   | [engine.scalemode_nearest](https://doc.babylonjs.com/api/classes/babylon.engine#scalemode_nearest) |
| 3     | SCALEMODE_CEILING                   | [engine.scalemode_ceiling](https://doc.babylonjs.com/api/classes/babylon.engine#scalemode_ceiling) |

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`scaleMode`](BlurPostProcess.md#scalemode)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L194)

Gets or sets the unique id of the post process

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`uniqueId`](BlurPostProcess.md#uniqueid)

***

### width

> **width**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:210](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L210)

Width of the texture to apply the post process on

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`width`](BlurPostProcess.md#width)

## Accessors

### alphaMode

#### Get Signature

> **get** **alphaMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L255)

Type of alpha mode to use when performing the post process (default: Engine.ALPHA_DISABLE)

##### Returns

`number`

#### Set Signature

> **set** **alphaMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L259)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`alphaMode`](BlurPostProcess.md#alphamode)

***

### aspectRatio

#### Get Signature

> **get** **aspectRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:1040](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L1040)

The aspect ratio of the output texture.

##### Returns

`number`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`aspectRatio`](BlurPostProcess.md#aspectratio)

***

### direction

#### Get Signature

> **get** **direction**(): [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/blurPostProcess.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/blurPostProcess.ts#L23)

The direction in which to blur the image.

##### Returns

[`Vector2`](Vector2.md)

#### Set Signature

> **set** **direction**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/blurPostProcess.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/blurPostProcess.ts#L27)

##### Parameters

###### value

[`Vector2`](Vector2.md)

##### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`direction`](BlurPostProcess.md#direction)

***

### inputTexture

#### Get Signature

> **get** **inputTexture**(): [`RenderTargetWrapper`](RenderTargetWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:510](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L510)

The input texture for this post process and the output texture of the previous post process. When added to a pipeline the previous post process will
render it's output into this texture and this texture will be used as textureSampler in the fragment shader of this post process.

##### Returns

[`RenderTargetWrapper`](RenderTargetWrapper.md)

#### Set Signature

> **set** **inputTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:514](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L514)

##### Parameters

###### value

[`RenderTargetWrapper`](RenderTargetWrapper.md)

##### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`inputTexture`](BlurPostProcess.md#inputtexture)

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:1033](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L1033)

If the post process is supported.

##### Returns

`boolean`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`isSupported`](BlurPostProcess.md#issupported)

***

### kernel

#### Get Signature

> **get** **kernel**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/blurPostProcess.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/blurPostProcess.ts#L42)

Gets the length in pixels of the blur sample region

##### Returns

`number`

#### Set Signature

> **set** **kernel**(`v`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/blurPostProcess.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/blurPostProcess.ts#L35)

Sets the length in pixels of the blur sample region

##### Parameters

###### v

`number`

##### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`kernel`](BlurPostProcess.md#kernel)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L198)

Name of the PostProcess.

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:202](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L202)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`name`](BlurPostProcess.md#name)

***

### onActivate

#### Set Signature

> **set** **onActivate**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:428](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L428)

A function that is added to the onActivateObservable

##### Parameters

###### callback

[`Nullable`](../type-aliases/Nullable.md)\<(`camera`) => `void`\>

##### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onActivate`](BlurPostProcess.md#onactivate)

***

### onAfterRender

#### Set Signature

> **set** **onAfterRender**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:494](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L494)

A function that is added to the onAfterRenderObservable

##### Parameters

###### callback

(`efect`) => `void`

##### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onAfterRender`](BlurPostProcess.md#onafterrender)

***

### onApply

#### Set Signature

> **set** **onApply**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:462](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L462)

A function that is added to the onApplyObservable

##### Parameters

###### callback

(`effect`) => `void`

##### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onApply`](BlurPostProcess.md#onapply)

***

### onBeforeRender

#### Set Signature

> **set** **onBeforeRender**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:478](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L478)

A function that is added to the onBeforeRenderObservable

##### Parameters

###### callback

(`effect`) => `void`

##### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onBeforeRender`](BlurPostProcess.md#onbeforerender)

***

### onSizeChanged

#### Set Signature

> **set** **onSizeChanged**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:446](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L446)

A function that is added to the onSizeChangedObservable

##### Parameters

###### callback

(`postProcess`) => `void`

##### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onSizeChanged`](BlurPostProcess.md#onsizechanged)

***

### packedFloat

#### Get Signature

> **get** **packedFloat**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/blurPostProcess.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/blurPostProcess.ts#L57)

Gets whether or not the blur is unpacking/repacking floats

##### Returns

`boolean`

#### Set Signature

> **set** **packedFloat**(`v`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/blurPostProcess.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/blurPostProcess.ts#L50)

Sets whether or not the blur needs to unpack/repack floats

##### Parameters

###### v

`boolean`

##### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`packedFloat`](BlurPostProcess.md#packedfloat)

***

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:317](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L317)

Number of sample textures (default: 1)

##### Returns

`number`

#### Set Signature

> **set** **samples**(`n`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:321](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L321)

##### Parameters

###### n

`number`

##### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`samples`](BlurPostProcess.md#samples)

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:357](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L357)

Gets the shader language type used to generate vertex and fragment source code.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`shaderLanguage`](BlurPostProcess.md#shaderlanguage)

***

### texelSize

#### Get Signature

> **get** **texelSize**(): [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:541](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L541)

Gets the texel size of the postprocess.
See https://en.wikipedia.org/wiki/Texel_(graphics)

##### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`texelSize`](BlurPostProcess.md#texelsize)

***

### ForceGLSL

#### Get Signature

> **get** `static` **ForceGLSL**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L170)

Force all the postprocesses to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **ForceGLSL**(`force`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:174](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L174)

##### Parameters

###### force

`boolean`

##### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`ForceGLSL`](BlurPostProcess.md#forceglsl)

## Methods

### activate()

> **activate**(`cameraOrScene`, `sourceTexture?`, `forceDepthStencil?`): [`RenderTargetWrapper`](RenderTargetWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:948](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L948)

Activates the post process by intializing the textures to be used when executed. Notifies onActivateObservable.
When this post process is used in a pipeline, this is call will bind the input texture of this post process to the output of the previous.

#### Parameters

##### cameraOrScene

[`Scene`](Scene.md) \| [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

The camera that will be used in the post process. This camera will be used when calling onActivateObservable. You can also pass the scene if no camera is available.

##### sourceTexture?

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\> = `null`

The source texture to be inspected to get the width and height if not specified in the post process constructor. (default: null)

##### forceDepthStencil?

`boolean`

If true, a depth and stencil buffer will be generated. (default: false)

#### Returns

[`RenderTargetWrapper`](RenderTargetWrapper.md)

The render target wrapper that was bound to be written to.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`activate`](BlurPostProcess.md#activate)

***

### apply()

> **apply**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:1063](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L1063)

Binds all textures and uniforms to the shader, this will be run on every pass.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

the effect corresponding to this post process. Null if not compiled or not ready.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`apply`](BlurPostProcess.md#apply)

***

### clone()

> **clone**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:1220](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L1220)

Clones this post process

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

a new post process similar to this one

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`clone`](BlurPostProcess.md#clone)

***

### dispose()

> **dispose**(`camera?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:1142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L1142)

Disposes the post process.

#### Parameters

##### camera?

[`Camera`](Camera.md)

The camera to dispose the post process on.

#### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`dispose`](BlurPostProcess.md#dispose)

***

### getCamera()

> **getCamera**(): [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:533](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L533)

Gets the camera which post process is applied to.

#### Returns

[`Camera`](Camera.md)

The camera the post process is applied to.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`getCamera`](BlurPostProcess.md#getcamera)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldBlurPostProcess.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/depthOfFieldBlurPostProcess.ts#L25)

Gets a string identifying the name of the class

#### Returns

`string`

"DepthOfFieldBlurPostProcess" string

#### Overrides

[`BlurPostProcess`](BlurPostProcess.md).[`getClassName`](BlurPostProcess.md#getclassname)

***

### getEffect()

> **getEffect**(): [`Effect`](Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:755](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L755)

The effect that is created when initializing the post process.

#### Returns

[`Effect`](Effect.md)

The created effect corresponding to the postprocess.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`getEffect`](BlurPostProcess.md#geteffect)

***

### getEffectName()

> **getEffectName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L407)

Returns the fragment url or shader name used in the post process.

#### Returns

`string`

the fragment url or name in the shader store.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`getEffectName`](BlurPostProcess.md#geteffectname)

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:747](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L747)

Gets the engine which this post process belongs to.

#### Returns

[`AbstractEngine`](AbstractEngine.md)

The engine the post process was enabled with.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`getEngine`](BlurPostProcess.md#getengine)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:1055](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L1055)

Get a value indicating if the post-process is ready to be used

#### Returns

`boolean`

true if the post-process is ready (shader is compiled)

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`isReady`](BlurPostProcess.md#isready)

***

### isReusable()

> **isReusable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:813](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L813)

The post process is reusable if it can be used multiple times within one frame.

#### Returns

`boolean`

If the post process is reusable

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`isReusable`](BlurPostProcess.md#isreusable)

***

### markTextureDirty()

> **markTextureDirty**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:818](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L818)

invalidate frameBuffer to hint the postprocess to create a depth buffer

#### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`markTextureDirty`](BlurPostProcess.md#marktexturedirty)

***

### resize()

> **resize**(`width`, `height`, `camera?`, `needMipMaps?`, `forceDepthStencil?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:870](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L870)

Resizes the post-process texture

#### Parameters

##### width

`number`

Width of the texture

##### height

`number`

Height of the texture

##### camera?

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\> = `null`

The camera this post-process is applied to. Pass null if the post-process is used outside the context of a camera post-process chain (default: null)

##### needMipMaps?

`boolean` = `false`

True if mip maps need to be generated after render (default: false)

##### forceDepthStencil?

`boolean` = `false`

True to force post-process texture creation with stencil depth and buffer (default: false)

#### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`resize`](BlurPostProcess.md#resize)

***

### restoreDefaultInputTexture()

> **restoreDefaultInputTexture**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:522](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L522)

Since inputTexture should always be defined, if we previously manually set `inputTexture`,
the only way to unset it is to use this function to restore its internal state

#### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`restoreDefaultInputTexture`](BlurPostProcess.md#restoredefaultinputtexture)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:1196](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L1196)

Serializes the post process to a JSON object

#### Returns

`any`

the JSON object

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`serialize`](BlurPostProcess.md#serialize)

***

### setPrePassRenderer()

> **setPrePassRenderer**(`prePassRenderer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:1128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L1128)

Sets the required values to the prepass renderer.

#### Parameters

##### prePassRenderer

[`PrePassRenderer`](PrePassRenderer.md)

defines the prepass renderer to setup.

#### Returns

`boolean`

true if the pre pass is needed.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`setPrePassRenderer`](BlurPostProcess.md#setprepassrenderer)

***

### shareOutputWith()

> **shareOutputWith**(`postProcess`): [`PostProcess`](PostProcess.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:764](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L764)

To avoid multiple redundant textures for multiple post process, the output the output texture for this post process can be shared with another.

#### Parameters

##### postProcess

[`PostProcess`](PostProcess.md)

The post process to share the output with.

#### Returns

[`PostProcess`](PostProcess.md)

This post process.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`shareOutputWith`](BlurPostProcess.md#shareoutputwith)

***

### updateEffect()

> **updateEffect**(`_defines?`, `_uniforms?`, `_samplers?`, `_indexParameters?`, `onCompiled?`, `onError?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/blurPostProcess.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/blurPostProcess.ts#L134)

Updates the effect with the current post process compile time values and recompiles the shader.

#### Parameters

##### \_defines?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\> = `null`

##### \_uniforms?

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\> = `null`

##### \_samplers?

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\> = `null`

##### \_indexParameters?

`any`

##### onCompiled?

(`effect`) => `void`

Called when the shader has been compiled.

##### onError?

(`effect`, `errors`) => `void`

Called if there is an error when compiling a shader.

#### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`updateEffect`](BlurPostProcess.md#updateeffect)

***

### useOwnOutput()

> **useOwnOutput**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:776](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L776)

Reverses the effect of calling shareOutputWith and returns the post process back to its original state.
This should be called if the post process that shares output with this post process is disabled/disposed.

#### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`useOwnOutput`](BlurPostProcess.md#useownoutput)

***

### Parse()

> `static` **Parse**(`parsedPostProcess`, `scene`, `rootUrl`): [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:1249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L1249)

Creates a material from parsed material data

#### Parameters

##### parsedPostProcess

`any`

defines parsed post process data

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### rootUrl

`string`

defines the root URL to use to load textures

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

a new post process

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`Parse`](BlurPostProcess.md#parse)

***

### RegisterShaderCodeProcessing()

> `static` **RegisterShaderCodeProcessing**(`postProcessName`, `customShaderCodeProcessing?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L186)

Registers a shader code processing with a post process name.

#### Parameters

##### postProcessName

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

name of the post process. Use null for the fallback shader code processing. This is the shader code processing that will be used in case no specific shader code processing has been associated to a post process name

##### customShaderCodeProcessing?

[`EffectWrapperCustomShaderCodeProcessing`](../type-aliases/EffectWrapperCustomShaderCodeProcessing.md)

shader code processing to associate to the post process name

#### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`RegisterShaderCodeProcessing`](BlurPostProcess.md#registershadercodeprocessing)
