[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebGPURenderTargetWrapper

# Class: WebGPURenderTargetWrapper

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuRenderTargetWrapper.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuRenderTargetWrapper.ts#L9)

Specialized class used to store a render target of a WebGPU engine

## Extends

- [`RenderTargetWrapper`](RenderTargetWrapper.md)

## Constructors

### Constructor

> **new WebGPURenderTargetWrapper**(`isMulti`, `isCube`, `size`, `engine`, `label?`): `WebGPURenderTargetWrapper`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuRenderTargetWrapper.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuRenderTargetWrapper.ts#L27)

Initializes the render target wrapper

#### Parameters

##### isMulti

`boolean`

true if the wrapper is a multi render target

##### isCube

`boolean`

true if the wrapper should render to a cube texture

##### size

[`TextureSize`](../type-aliases/TextureSize.md)

size of the render target (width/height/layers)

##### engine

`ThinWebGPUEngine`

engine used to create the render target

##### label?

`string`

defines the label to use for the wrapper (for debugging purpose only)

#### Returns

`WebGPURenderTargetWrapper`

#### Overrides

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`constructor`](RenderTargetWrapper.md#constructor)

## Properties

### depthReadOnly

> **depthReadOnly**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L200)

Indicates if the depth texture is in read-only mode (may allow some optimizations in WebGPU)

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`depthReadOnly`](RenderTargetWrapper.md#depthreadonly)

***

### disableAutomaticMSAAResolve

> **disableAutomaticMSAAResolve**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L179)

Sets this property to true to disable the automatic MSAA resolve that happens when the render target wrapper is unbound (default is false)

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`disableAutomaticMSAAResolve`](RenderTargetWrapper.md#disableautomaticmsaaresolve)

***

### gpuTimeInFrame?

> `readonly` `optional` **gpuTimeInFrame?**: `WebGPUPerfCounter`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/WebGPU/webgpuRenderTargetWrapper.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/WebGPU/webgpuRenderTargetWrapper.ts#L17)

Gets the GPU time spent rendering this render target in the last frame (in nanoseconds).
You have to enable the "timestamp-query" extension in the engine constructor options and set engine.enableGPUTimingMeasurements = true.

***

### label?

> `optional` **label?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L49)

Gets or sets the label of the render target wrapper (optional, for debugging purpose)

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`label`](RenderTargetWrapper.md#label)

***

### resolveMSAAColors

> **resolveMSAAColors**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L185)

Indicates if MSAA color texture(s) should be resolved when a resolve occur (either automatically by the engine or manually by the user) (default is true)
Note that you can trigger a MSAA resolve at any time by calling resolveMSAATextures()

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`resolveMSAAColors`](RenderTargetWrapper.md#resolvemsaacolors)

***

### resolveMSAADepth

> **resolveMSAADepth**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L190)

Indicates if MSAA depth texture should be resolved when a resolve occur (either automatically by the engine or manually by the user) (default is false)

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`resolveMSAADepth`](RenderTargetWrapper.md#resolvemsaadepth)

***

### resolveMSAAStencil

> **resolveMSAAStencil**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L195)

Indicates if MSAA stencil texture should be resolved when a resolve occur (either automatically by the engine or manually by the user) (default is false)

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`resolveMSAAStencil`](RenderTargetWrapper.md#resolvemsaastencil)

***

### stencilReadOnly

> **stencilReadOnly**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:205](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L205)

Indicates if the stencil texture is in read-only mode (may allow some optimizations in WebGPU)

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`stencilReadOnly`](RenderTargetWrapper.md#stencilreadonly)

## Accessors

### depth

#### Get Signature

> **get** **depth**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L144)

Gets the depth of the render target wrapper (only used if is3D is true and wrapper is not a multi render target)

##### Returns

`number`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`depth`](RenderTargetWrapper.md#depth)

***

### depthStencilTexture

#### Get Signature

> **get** **depthStencilTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L54)

Gets the depth/stencil texture

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`depthStencilTexture`](RenderTargetWrapper.md#depthstenciltexture)

***

### depthStencilTextureWithStencil

#### Get Signature

> **get** **depthStencilTextureWithStencil**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L81)

Indicates if the depth/stencil texture has a stencil aspect

##### Returns

`boolean`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`depthStencilTextureWithStencil`](RenderTargetWrapper.md#depthstenciltexturewithstencil)

***

### faceIndices

#### Get Signature

> **get** **faceIndices**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L165)

Gets the face indices that correspond to the list of render textures. If we are not in a multi render target, the list will be null

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`[]\>

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`faceIndices`](RenderTargetWrapper.md#faceindices)

***

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L130)

Gets the height of the render target wrapper

##### Returns

`number`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`height`](RenderTargetWrapper.md#height)

***

### is2DArray

#### Get Signature

> **get** **is2DArray**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L102)

Defines if the render target wrapper is for a single or an array of textures

##### Returns

`boolean`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`is2DArray`](RenderTargetWrapper.md#is2darray)

***

### is3D

#### Get Signature

> **get** **is3D**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L109)

Defines if the render target wrapper is for a 3D texture

##### Returns

`boolean`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`is3D`](RenderTargetWrapper.md#is3d)

***

### isCube

#### Get Signature

> **get** **isCube**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L88)

Defines if the render target wrapper is for a cube texture or if false a 2d texture

##### Returns

`boolean`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`isCube`](RenderTargetWrapper.md#iscube)

***

### isMulti

#### Get Signature

> **get** **isMulti**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L95)

Defines if the render target wrapper is for a single or multi target render wrapper

##### Returns

`boolean`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`isMulti`](RenderTargetWrapper.md#ismulti)

***

### layerIndices

#### Get Signature

> **get** **layerIndices**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L172)

Gets the layer indices that correspond to the list of render textures. If we are not in a multi render target, the list will be null

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`[]\>

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`layerIndices`](RenderTargetWrapper.md#layerindices)

***

### layers

#### Get Signature

> **get** **layers**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L137)

Gets the number of layers of the render target wrapper (only used if is2DArray is true and wrapper is not a multi render target)

##### Returns

`number`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`layers`](RenderTargetWrapper.md#layers)

***

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:228](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L228)

Gets the sample count of the render target

##### Returns

`number`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`samples`](RenderTargetWrapper.md#samples)

***

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L116)

Gets the size of the render target wrapper (used for cubes, as width=height in this case)

##### Returns

`number`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`size`](RenderTargetWrapper.md#size)

***

### texture

#### Get Signature

> **get** **texture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L151)

Gets the render texture. If this is a multi render target, gets the first texture

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`texture`](RenderTargetWrapper.md#texture)

***

### textures

#### Get Signature

> **get** **textures**(): [`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L158)

Gets the list of render textures. If we are not in a multi render target, the list will be null (use the texture getter instead)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)[]\>

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`textures`](RenderTargetWrapper.md#textures)

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L123)

Gets the width of the render target wrapper

##### Returns

`number`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`width`](RenderTargetWrapper.md#width)

## Methods

### ~~\_shareDepth()~~

> **\_shareDepth**(`renderTarget`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:408](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L408)

#### Parameters

##### renderTarget

[`RenderTargetWrapper`](RenderTargetWrapper.md)

Destination renderTarget

#### Returns

`void`

#### Deprecated

Use shareDepth instead

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`_shareDepth`](RenderTargetWrapper.md#_sharedepth)

***

### createDepthStencilTexture()

> **createDepthStencilTexture**(`comparisonFunction?`, `bilinearFiltering?`, `generateStencil?`, `samples?`, `format?`, `label?`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L375)

Creates the depth/stencil texture

#### Parameters

##### comparisonFunction?

`number` = `0`

Comparison function to use for the texture

##### bilinearFiltering?

`boolean` = `true`

true if bilinear filtering should be used when sampling the texture

##### generateStencil?

`boolean` = `false`

Not used anymore. "format" will be used to determine if stencil should be created

##### samples?

`number` = `1`

sample count to use when creating the texture (default: 1)

##### format?

`number` = `Constants.TEXTUREFORMAT_DEPTH32_FLOAT`

format of the depth texture (default: Constants.TEXTUREFORMAT_DEPTH32_FLOAT)

##### label?

`string`

defines the label to use for the texture (for debugging purpose only)

#### Returns

[`InternalTexture`](InternalTexture.md)

the depth/stencil created texture

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`createDepthStencilTexture`](RenderTargetWrapper.md#createdepthstenciltexture)

***

### dispose()

> **dispose**(`disposeOnlyFramebuffers?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:632](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L632)

Disposes the whole render target wrapper

#### Parameters

##### disposeOnlyFramebuffers?

`boolean` = `false`

true if only the frame buffers should be released (used for the WebGL engine). If false, all the textures will also be released

#### Returns

`void`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`dispose`](RenderTargetWrapper.md#dispose)

***

### generateMipMaps()

> **generateMipMaps**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:266](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L266)

Generates mipmaps for each texture of the render target

#### Returns

`void`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`generateMipMaps`](RenderTargetWrapper.md#generatemipmaps)

***

### getBaseArrayLayer()

> **getBaseArrayLayer**(`index`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:213](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L213)

Gets the base array layer of a texture in the textures array
This is an number that is calculated based on the layer and face indices set for this texture at that index

#### Parameters

##### index

`number`

The index of the texture in the textures array to get the base array layer for

#### Returns

`number`

the base array layer of the texture at the given index

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`getBaseArrayLayer`](RenderTargetWrapper.md#getbasearraylayer)

***

### releaseTextures()

> **releaseTextures**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:619](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L619)

Releases the internal render textures

#### Returns

`void`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`releaseTextures`](RenderTargetWrapper.md#releasetextures)

***

### resolveMSAATextures()

> **resolveMSAATextures**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L255)

Resolves the MSAA textures into their non-MSAA version.
Note that if samples equals 1 (no MSAA), no resolve is performed.

#### Returns

`void`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`resolveMSAATextures`](RenderTargetWrapper.md#resolvemsaatextures)

***

### setDepthStencilTexture()

> **setDepthStencilTexture**(`texture`, `disposeExisting?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L63)

Sets the depth/stencil texture

#### Parameters

##### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

The depth/stencil texture to set

##### disposeExisting?

`boolean` = `true`

True to dispose the existing depth/stencil texture (if any) before replacing it (default: true)

#### Returns

`void`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`setDepthStencilTexture`](RenderTargetWrapper.md#setdepthstenciltexture)

***

### setLayerAndFaceIndex()

> **setLayerAndFaceIndex**(`index?`, `layer?`, `face?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:349](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L349)

Sets the layer and face indices of a texture in the textures array that should be bound to each color attachment

#### Parameters

##### index?

`number` = `0`

The index of the texture in the textures array to modify

##### layer?

`number`

The layer of the texture to be set

##### face?

`number`

The face of the texture to be set

#### Returns

`void`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`setLayerAndFaceIndex`](RenderTargetWrapper.md#setlayerandfaceindex)

***

### setLayerAndFaceIndices()

> **setLayerAndFaceIndices**(`layers`, `faces`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:338](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L338)

Sets the layer and face indices of every render target texture bound to each color attachment

#### Parameters

##### layers

`number`[]

The layers of each texture to be set

##### faces

`number`[]

The faces of each texture to be set

#### Returns

`void`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`setLayerAndFaceIndices`](RenderTargetWrapper.md#setlayerandfaceindices)

***

### setSamples()

> **setSamples**(`value`, `initializeBuffers?`, `force?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:239](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L239)

Sets the sample count of the render target

#### Parameters

##### value

`number`

sample count

##### initializeBuffers?

`boolean` = `true`

If set to true, the engine will make an initializing call to drawBuffers (only used when isMulti=true).

##### force?

`boolean` = `false`

true to force calling the update sample count engine function even if the current sample count is equal to value

#### Returns

`number`

the sample count that has been set

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`setSamples`](RenderTargetWrapper.md#setsamples)

***

### setTexture()

> **setTexture**(`texture`, `index?`, `disposePrevious?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L318)

Set a texture in the textures array

#### Parameters

##### texture

[`InternalTexture`](InternalTexture.md)

The texture to set

##### index?

`number` = `0`

The index in the textures array to set

##### disposePrevious?

`boolean` = `true`

If this function should dispose the previous texture

#### Returns

`void`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`setTexture`](RenderTargetWrapper.md#settexture)

***

### setTextures()

> **setTextures**(`textures`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L302)

Sets the render target texture(s)

#### Parameters

##### textures

[`InternalTexture`](InternalTexture.md) \| [`InternalTexture`](InternalTexture.md)[] \| `null`

texture(s) to set

#### Returns

`void`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`setTextures`](RenderTargetWrapper.md#settextures)

***

### shareDepth()

> **shareDepth**(`renderTarget`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:416](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/renderTargetWrapper.ts#L416)

Shares the depth buffer of this render target with another render target.

#### Parameters

##### renderTarget

[`RenderTargetWrapper`](RenderTargetWrapper.md)

Destination renderTarget

#### Returns

`void`

#### Inherited from

[`RenderTargetWrapper`](RenderTargetWrapper.md).[`shareDepth`](RenderTargetWrapper.md#sharedepth)
