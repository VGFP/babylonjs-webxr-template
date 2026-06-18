[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DepthOfFieldBlurPostProcess

# Class: DepthOfFieldBlurPostProcess

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldBlurPostProcess.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/depthOfFieldBlurPostProcess.pure.ts#L22)

The DepthOfFieldBlurPostProcess applied a blur in a give direction.
This blur differs from the standard BlurPostProcess as it attempts to avoid blurring pixels
based on samples that have a large difference in distance than the center pixel.
See section 2.6.2 http://fileadmin.cs.lth.se/cs/education/edan35/lectures/12dof.pdf

## Extends

- [`BlurPostProcess`](BlurPostProcess.md)

## Constructors

### Constructor

> **new DepthOfFieldBlurPostProcess**(`name`, `_scene`, `direction`, `kernel`, `options`, `camera`, `circleOfConfusion`, `imageToBlur?`, `samplingMode?`, `engine?`, `reusable?`, `textureType?`, `blockCompilation?`, `textureFormat?`): `DepthOfFieldBlurPostProcess`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldBlurPostProcess.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/depthOfFieldBlurPostProcess.pure.ts#L48)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:258](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L258)

Modify the scale of the post process to be the same as the viewport (default: false)

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`adaptScaleToCurrentViewport`](BlurPostProcess.md#adaptscaletocurrentviewport)

***

### alphaConstants

> **alphaConstants**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:192](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L192)

Sets the setAlphaBlendConstants of the babylon engine

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`alphaConstants`](BlurPostProcess.md#alphaconstants)

***

### alwaysForcePOT

> **alwaysForcePOT**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:234](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L234)

Force textures to be a power of two (default: false)

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`alwaysForcePOT`](BlurPostProcess.md#alwaysforcepot)

***

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:197](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L197)

Animations to be used for the post processing

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`animations`](BlurPostProcess.md#animations)

***

### autoClear

> **autoClear**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L168)

If the buffer needs to be cleared before applying the post process. (default: true)
Should be set to false if shader will overwrite all previous pixels.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`autoClear`](BlurPostProcess.md#autoclear)

***

### clearColor

> **clearColor**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L162)

Clear color to use when screen clearing

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`clearColor`](BlurPostProcess.md#clearcolor)

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:263](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L263)

Specifies if the post process should be serialized

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`doNotSerialize`](BlurPostProcess.md#donotserialize)

***

### enablePixelPerfectMode

> **enablePixelPerfectMode**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L204)

Enable Pixel Perfect mode where texture is not scaled to be power of 2.
Can only be used on a single postprocess or on the last one of a chain. (default: false)

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`enablePixelPerfectMode`](BlurPostProcess.md#enablepixelperfectmode)

***

### externalTextureSamplerBinding

> **externalTextureSamplerBinding**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:291](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L291)

if externalTextureSamplerBinding is true, the "apply" method won't bind the textureSampler texture, it is expected to be done by the "outside" (by the onApplyObservable observer most probably).
counter-productive in some cases because if the texture bound by "apply" is different from the currently texture bound, (the one set by the onApplyObservable observer, for eg) some
internal structures (materialContext) will be dirtified, which may impact performances

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`externalTextureSamplerBinding`](BlurPostProcess.md#externaltexturesamplerbinding)

***

### forceAutoClearInAlphaMode

> **forceAutoClearInAlphaMode**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L174)

If clearing the buffer should be forced in autoClear mode, even when alpha mode is enabled (default: false).
By default, the buffer will only be cleared if alpha mode is disabled (and autoClear is true).

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`forceAutoClearInAlphaMode`](BlurPostProcess.md#forceautoclearinalphamode)

***

### forceFullscreenViewport

> **forceFullscreenViewport**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:210](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L210)

Force the postprocess to be applied without taking in account viewport

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`forceFullscreenViewport`](BlurPostProcess.md#forcefullscreenviewport)

***

### height

> **height**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L141)

Height of the texture to apply the post process on

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`height`](BlurPostProcess.md#height)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L216)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`inspectableCustomProperties`](BlurPostProcess.md#inspectablecustomproperties)

***

### nodeMaterialSource

> **nodeMaterialSource**: [`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterial`](NodeMaterial.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L146)

Gets the node material used to create this postprocess (null if the postprocess was manually created)

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`nodeMaterialSource`](BlurPostProcess.md#nodematerialsource)

***

### onActivateObservable

> **onActivateObservable**: [`Observable`](Observable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:347](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L347)

An event triggered when the postprocess is activated.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onActivateObservable`](BlurPostProcess.md#onactivateobservable)

***

### onAfterRenderObservable

> **onAfterRenderObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:413](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L413)

An event triggered after rendering the postprocess

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onAfterRenderObservable`](BlurPostProcess.md#onafterrenderobservable)

***

### onApplyObservable

> **onApplyObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:381](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L381)

An event triggered when the postprocess applies its effect.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onApplyObservable`](BlurPostProcess.md#onapplyobservable)

***

### onBeforeRenderObservable

> **onBeforeRenderObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:397](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L397)

An event triggered before rendering the postprocess

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onBeforeRenderObservable`](BlurPostProcess.md#onbeforerenderobservable)

***

### onDisposeObservable

> `readonly` **onDisposeObservable**: [`Observable`](Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:429](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L429)

An event triggered when the post-process is disposed

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onDisposeObservable`](BlurPostProcess.md#ondisposeobservable)

***

### onEffectCreatedObservable

> **onEffectCreatedObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L340)

Executed when the effect was created

#### Returns

effect that was created for this post process

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onEffectCreatedObservable`](BlurPostProcess.md#oneffectcreatedobservable)

***

### onSizeChangedObservable

> **onSizeChangedObservable**: [`Observable`](Observable.md)\<[`PostProcess`](PostProcess.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:365](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L365)

An event triggered when the postprocess changes its size.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`onSizeChangedObservable`](BlurPostProcess.md#onsizechangedobservable)

***

### renderTargetSamplingMode

> **renderTargetSamplingMode**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L157)

Sampling mode used by the shader

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`renderTargetSamplingMode`](BlurPostProcess.md#rendertargetsamplingmode)

***

### scaleMode

> **scaleMode**: `number` = `Constants.SCALEMODE_FLOOR`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L229)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L119)

Gets or sets the unique id of the post process

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`uniqueId`](BlurPostProcess.md#uniqueid)

***

### width

> **width**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L135)

Width of the texture to apply the post process on

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`width`](BlurPostProcess.md#width)

## Accessors

### alphaMode

#### Get Signature

> **get** **alphaMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L180)

Type of alpha mode to use when performing the post process (default: Engine.ALPHA_DISABLE)

##### Returns

`number`

#### Set Signature

> **set** **alphaMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:184](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L184)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:965](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L965)

The aspect ratio of the output texture.

##### Returns

`number`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`aspectRatio`](BlurPostProcess.md#aspectratio)

***

### direction

#### Get Signature

> **get** **direction**(): [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/blurPostProcess.pure.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/blurPostProcess.pure.ts#L25)

The direction in which to blur the image.

##### Returns

[`Vector2`](Vector2.md)

#### Set Signature

> **set** **direction**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/blurPostProcess.pure.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/blurPostProcess.pure.ts#L29)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:435](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L435)

The input texture for this post process and the output texture of the previous post process. When added to a pipeline the previous post process will
render it's output into this texture and this texture will be used as textureSampler in the fragment shader of this post process.

##### Returns

[`RenderTargetWrapper`](RenderTargetWrapper.md)

#### Set Signature

> **set** **inputTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:439](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L439)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:958](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L958)

If the post process is supported.

##### Returns

`boolean`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`isSupported`](BlurPostProcess.md#issupported)

***

### kernel

#### Get Signature

> **get** **kernel**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/blurPostProcess.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/blurPostProcess.pure.ts#L44)

Gets the length in pixels of the blur sample region

##### Returns

`number`

#### Set Signature

> **set** **kernel**(`v`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/blurPostProcess.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/blurPostProcess.pure.ts#L37)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L123)

Name of the PostProcess.

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L127)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L353)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:419](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L419)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:387](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L387)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:403](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L403)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:371](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L371)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/blurPostProcess.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/blurPostProcess.pure.ts#L59)

Gets whether or not the blur is unpacking/repacking floats

##### Returns

`boolean`

#### Set Signature

> **set** **packedFloat**(`v`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/blurPostProcess.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/blurPostProcess.pure.ts#L52)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L242)

Number of sample textures (default: 1)

##### Returns

`number`

#### Set Signature

> **set** **samples**(`n`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:246](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L246)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:282](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L282)

Gets the shader language type used to generate vertex and fragment source code.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`shaderLanguage`](BlurPostProcess.md#shaderlanguage)

***

### texelSize

#### Get Signature

> **get** **texelSize**(): [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:466](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L466)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L95)

Force all the postprocesses to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **ForceGLSL**(`force`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L99)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:873](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L873)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:988](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L988)

Binds all textures and uniforms to the shader, this will be run on every pass.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

the effect corresponding to this post process. Null if not compiled or not ready.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`apply`](BlurPostProcess.md#apply)

***

### clone()

> **clone**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:1145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L1145)

Clones this post process

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

a new post process similar to this one

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`clone`](BlurPostProcess.md#clone)

***

### dispose()

> **dispose**(`camera?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:1067](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L1067)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:458](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L458)

Gets the camera which post process is applied to.

#### Returns

[`Camera`](Camera.md)

The camera the post process is applied to.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`getCamera`](BlurPostProcess.md#getcamera)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldBlurPostProcess.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/depthOfFieldBlurPostProcess.pure.ts#L27)

Gets a string identifying the name of the class

#### Returns

`string`

"DepthOfFieldBlurPostProcess" string

#### Overrides

[`BlurPostProcess`](BlurPostProcess.md).[`getClassName`](BlurPostProcess.md#getclassname)

***

### getEffect()

> **getEffect**(): [`Effect`](Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:680](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L680)

The effect that is created when initializing the post process.

#### Returns

[`Effect`](Effect.md)

The created effect corresponding to the postprocess.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`getEffect`](BlurPostProcess.md#geteffect)

***

### getEffectName()

> **getEffectName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L332)

Returns the fragment url or shader name used in the post process.

#### Returns

`string`

the fragment url or name in the shader store.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`getEffectName`](BlurPostProcess.md#geteffectname)

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:672](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L672)

Gets the engine which this post process belongs to.

#### Returns

[`AbstractEngine`](AbstractEngine.md)

The engine the post process was enabled with.

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`getEngine`](BlurPostProcess.md#getengine)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:980](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L980)

Get a value indicating if the post-process is ready to be used

#### Returns

`boolean`

true if the post-process is ready (shader is compiled)

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`isReady`](BlurPostProcess.md#isready)

***

### isReusable()

> **isReusable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:738](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L738)

The post process is reusable if it can be used multiple times within one frame.

#### Returns

`boolean`

If the post process is reusable

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`isReusable`](BlurPostProcess.md#isreusable)

***

### markTextureDirty()

> **markTextureDirty**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:743](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L743)

invalidate frameBuffer to hint the postprocess to create a depth buffer

#### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`markTextureDirty`](BlurPostProcess.md#marktexturedirty)

***

### resize()

> **resize**(`width`, `height`, `camera?`, `needMipMaps?`, `forceDepthStencil?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:795](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L795)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:447](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L447)

Since inputTexture should always be defined, if we previously manually set `inputTexture`,
the only way to unset it is to use this function to restore its internal state

#### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`restoreDefaultInputTexture`](BlurPostProcess.md#restoredefaultinputtexture)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:1121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L1121)

Serializes the post process to a JSON object

#### Returns

`any`

the JSON object

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`serialize`](BlurPostProcess.md#serialize)

***

### setPrePassRenderer()

> **setPrePassRenderer**(`prePassRenderer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:1053](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L1053)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:689](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L689)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/blurPostProcess.pure.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/blurPostProcess.pure.ts#L145)

Updates the effect with the current post process compile time values and recompiles the shader

#### Parameters

##### \_defines?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\> = `null`

the post process defines

##### \_uniforms?

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\> = `null`

the post process uniforms

##### \_samplers?

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\> = `null`

the post process samplers

##### \_indexParameters?

`any`

the index parameters

##### onCompiled?

(`effect`) => `void`

callback called when the shader is compiled

##### onError?

(`effect`, `errors`) => `void`

callback called if there is an error

#### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`updateEffect`](BlurPostProcess.md#updateeffect)

***

### useOwnOutput()

> **useOwnOutput**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:701](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L701)

Reverses the effect of calling shareOutputWith and returns the post process back to its original state.
This should be called if the post process that shares output with this post process is disabled/disposed.

#### Returns

`void`

#### Inherited from

[`BlurPostProcess`](BlurPostProcess.md).[`useOwnOutput`](BlurPostProcess.md#useownoutput)

***

### Parse()

> `static` **Parse**(`parsedPostProcess`, `scene`, `rootUrl`): [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:1174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L1174)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/postProcess.pure.ts#L111)

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
