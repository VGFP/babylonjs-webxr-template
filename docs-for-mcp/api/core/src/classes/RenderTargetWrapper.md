[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RenderTargetWrapper

# Class: RenderTargetWrapper

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L22)

Wrapper around a render target (either single or multi textures)

## Extended by

- [`WebGPURenderTargetWrapper`](WebGPURenderTargetWrapper.md)

## Constructors

### Constructor

> **new RenderTargetWrapper**(`isMulti`, `isCube`, `size`, `engine`, `label?`): `RenderTargetWrapper`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:289](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L289)

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

[`AbstractEngine`](AbstractEngine.md)

engine used to create the render target

##### label?

`string`

defines the label to use for the wrapper (for debugging purpose only)

#### Returns

`RenderTargetWrapper`

## Properties

### depthReadOnly

> **depthReadOnly**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L200)

Indicates if the depth texture is in read-only mode (may allow some optimizations in WebGPU)

***

### disableAutomaticMSAAResolve

> **disableAutomaticMSAAResolve**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L179)

Sets this property to true to disable the automatic MSAA resolve that happens when the render target wrapper is unbound (default is false)

***

### label?

> `optional` **label?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L49)

Gets or sets the label of the render target wrapper (optional, for debugging purpose)

***

### resolveMSAAColors

> **resolveMSAAColors**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L185)

Indicates if MSAA color texture(s) should be resolved when a resolve occur (either automatically by the engine or manually by the user) (default is true)
Note that you can trigger a MSAA resolve at any time by calling resolveMSAATextures()

***

### resolveMSAADepth

> **resolveMSAADepth**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L190)

Indicates if MSAA depth texture should be resolved when a resolve occur (either automatically by the engine or manually by the user) (default is false)

***

### resolveMSAAStencil

> **resolveMSAAStencil**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L195)

Indicates if MSAA stencil texture should be resolved when a resolve occur (either automatically by the engine or manually by the user) (default is false)

***

### stencilReadOnly

> **stencilReadOnly**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L205)

Indicates if the stencil texture is in read-only mode (may allow some optimizations in WebGPU)

## Accessors

### depth

#### Get Signature

> **get** **depth**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L144)

Gets the depth of the render target wrapper (only used if is3D is true and wrapper is not a multi render target)

##### Returns

`number`

***

### depthStencilTexture

#### Get Signature

> **get** **depthStencilTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L54)

Gets the depth/stencil texture

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

***

### depthStencilTextureWithStencil

#### Get Signature

> **get** **depthStencilTextureWithStencil**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L81)

Indicates if the depth/stencil texture has a stencil aspect

##### Returns

`boolean`

***

### faceIndices

#### Get Signature

> **get** **faceIndices**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L165)

Gets the face indices that correspond to the list of render textures. If we are not in a multi render target, the list will be null

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`[]\>

***

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L130)

Gets the height of the render target wrapper

##### Returns

`number`

***

### is2DArray

#### Get Signature

> **get** **is2DArray**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L102)

Defines if the render target wrapper is for a single or an array of textures

##### Returns

`boolean`

***

### is3D

#### Get Signature

> **get** **is3D**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L109)

Defines if the render target wrapper is for a 3D texture

##### Returns

`boolean`

***

### isCube

#### Get Signature

> **get** **isCube**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L88)

Defines if the render target wrapper is for a cube texture or if false a 2d texture

##### Returns

`boolean`

***

### isMulti

#### Get Signature

> **get** **isMulti**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L95)

Defines if the render target wrapper is for a single or multi target render wrapper

##### Returns

`boolean`

***

### layerIndices

#### Get Signature

> **get** **layerIndices**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L172)

Gets the layer indices that correspond to the list of render textures. If we are not in a multi render target, the list will be null

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`[]\>

***

### layers

#### Get Signature

> **get** **layers**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L137)

Gets the number of layers of the render target wrapper (only used if is2DArray is true and wrapper is not a multi render target)

##### Returns

`number`

***

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L228)

Gets the sample count of the render target

##### Returns

`number`

***

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L116)

Gets the size of the render target wrapper (used for cubes, as width=height in this case)

##### Returns

`number`

***

### texture

#### Get Signature

> **get** **texture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L151)

Gets the render texture. If this is a multi render target, gets the first texture

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

***

### textures

#### Get Signature

> **get** **textures**(): [`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L158)

Gets the list of render textures. If we are not in a multi render target, the list will be null (use the texture getter instead)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)[]\>

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L123)

Gets the width of the render target wrapper

##### Returns

`number`

## Methods

### ~~\_shareDepth()~~

> **\_shareDepth**(`renderTarget`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:408](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L408)

#### Parameters

##### renderTarget

`RenderTargetWrapper`

Destination renderTarget

#### Returns

`void`

#### Deprecated

Use shareDepth instead

***

### createDepthStencilTexture()

> **createDepthStencilTexture**(`comparisonFunction?`, `bilinearFiltering?`, `generateStencil?`, `samples?`, `format?`, `label?`): [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L375)

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

***

### dispose()

> **dispose**(`disposeOnlyFramebuffers?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:632](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L632)

Disposes the whole render target wrapper

#### Parameters

##### disposeOnlyFramebuffers?

`boolean` = `false`

true if only the frame buffers should be released (used for the WebGL engine). If false, all the textures will also be released

#### Returns

`void`

***

### generateMipMaps()

> **generateMipMaps**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:266](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L266)

Generates mipmaps for each texture of the render target

#### Returns

`void`

***

### getBaseArrayLayer()

> **getBaseArrayLayer**(`index`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:213](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L213)

Gets the base array layer of a texture in the textures array
This is an number that is calculated based on the layer and face indices set for this texture at that index

#### Parameters

##### index

`number`

The index of the texture in the textures array to get the base array layer for

#### Returns

`number`

the base array layer of the texture at the given index

***

### releaseTextures()

> **releaseTextures**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:619](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L619)

Releases the internal render textures

#### Returns

`void`

***

### resolveMSAATextures()

> **resolveMSAATextures**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:255](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L255)

Resolves the MSAA textures into their non-MSAA version.
Note that if samples equals 1 (no MSAA), no resolve is performed.

#### Returns

`void`

***

### setDepthStencilTexture()

> **setDepthStencilTexture**(`texture`, `disposeExisting?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L63)

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

***

### setLayerAndFaceIndex()

> **setLayerAndFaceIndex**(`index?`, `layer?`, `face?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:349](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L349)

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

***

### setLayerAndFaceIndices()

> **setLayerAndFaceIndices**(`layers`, `faces`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:338](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L338)

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

***

### setSamples()

> **setSamples**(`value`, `initializeBuffers?`, `force?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L239)

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

***

### setTexture()

> **setTexture**(`texture`, `index?`, `disposePrevious?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:318](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L318)

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

***

### setTextures()

> **setTextures**(`textures`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:302](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L302)

Sets the render target texture(s)

#### Parameters

##### textures

[`InternalTexture`](InternalTexture.md) \| [`InternalTexture`](InternalTexture.md)[] \| `null`

texture(s) to set

#### Returns

`void`

***

### shareDepth()

> **shareDepth**(`renderTarget`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/renderTargetWrapper.ts:416](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/renderTargetWrapper.ts#L416)

Shares the depth buffer of this render target with another render target.

#### Parameters

##### renderTarget

`RenderTargetWrapper`

Destination renderTarget

#### Returns

`void`
