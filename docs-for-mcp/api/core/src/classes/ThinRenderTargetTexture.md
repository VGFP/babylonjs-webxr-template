[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ThinRenderTargetTexture

# Class: ThinRenderTargetTexture

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinRenderTargetTexture.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinRenderTargetTexture.ts#L13)

This is a tiny helper class to wrap a RenderTargetWrapper in a texture
usable as the input of an effect.

## Extends

- [`ThinTexture`](ThinTexture.md)

## Implements

- [`IRenderTargetTexture`](../interfaces/IRenderTargetTexture.md)

## Constructors

### Constructor

> **new ThinRenderTargetTexture**(`engine`, `size`, `options`): `ThinRenderTargetTexture`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinRenderTargetTexture.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinRenderTargetTexture.ts#L34)

Instantiates a new ThinRenderTargetTexture.
Tiny helper class to wrap a RenderTargetWrapper in a texture.
This can be used as an internal texture wrapper to benefit from the cache and to hold on the associated RTT

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

Define the engine used to create and host the render target

##### size

[`TextureSize`](../type-aliases/TextureSize.md)

Define the size of the RTT to create

##### options

[`RenderTargetCreationOptions`](../interfaces/RenderTargetCreationOptions.md)

Define rendertarget options

#### Returns

`ThinRenderTargetTexture`

#### Overrides

[`ThinTexture`](ThinTexture.md).[`constructor`](ThinTexture.md#constructor)

## Properties

### anisotropicFilteringLevel

> **anisotropicFilteringLevel**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L61)

With compliant hardware and browser (supporting anisotropic filtering)
this defines the level of anisotropic filtering in the texture.
The higher the better but the slower. This defaults to 4 as it seems to be the best tradeoff.

#### Inherited from

[`ThinTexture`](ThinTexture.md).[`anisotropicFilteringLevel`](ThinTexture.md#anisotropicfilteringlevel)

***

### delayLoadState

> **delayLoadState**: `number` = `Constants.DELAYLOADSTATE_NONE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L66)

Define the current state of the loading sequence when in delayed load mode.

#### Inherited from

[`ThinTexture`](ThinTexture.md).[`delayLoadState`](ThinTexture.md#delayloadstate)

***

### wrapR

> **wrapR**: `number` = `Constants.TEXTURE_WRAP_ADDRESSMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L54)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

#### Inherited from

[`ThinTexture`](ThinTexture.md).[`wrapR`](ThinTexture.md#wrapr)

## Accessors

### coordinatesMode

#### Get Signature

> **get** **coordinatesMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L72)

How a texture is mapped.
Unused in thin texture mode.

##### Returns

`number`

#### Inherited from

[`ThinTexture`](ThinTexture.md).[`coordinatesMode`](ThinTexture.md#coordinatesmode)

***

### is2DArray

#### Get Signature

> **get** **is2DArray**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L119)

Define if the texture is a 2d array texture (webgl 2) or if false a 2d texture.

##### Returns

`boolean`

#### Set Signature

> **set** **is2DArray**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L128)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ThinTexture`](ThinTexture.md).[`is2DArray`](ThinTexture.md#is2darray)

***

### is3D

#### Get Signature

> **get** **is3D**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L99)

Define if the texture is a 3d texture (webgl 2) or if false a 2d texture.

##### Returns

`boolean`

#### Set Signature

> **set** **is3D**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L108)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ThinTexture`](ThinTexture.md).[`is3D`](ThinTexture.md#is3d)

***

### isCube

#### Get Signature

> **get** **isCube**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L79)

Define if the texture is a cube texture or if false a 2d texture.

##### Returns

`boolean`

#### Set Signature

> **set** **isCube**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L88)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ThinTexture`](ThinTexture.md).[`isCube`](ThinTexture.md#iscube)

***

### renderTarget

#### Get Signature

> **get** **renderTarget**(): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetWrapper`](RenderTargetWrapper.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinRenderTargetTexture.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinRenderTargetTexture.ts#L22)

Gets the render target wrapper associated with this render target

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetWrapper`](RenderTargetWrapper.md)\>

Entry point to access the wrapper on a texture.

#### Implementation of

[`IRenderTargetTexture`](../interfaces/IRenderTargetTexture.md).[`renderTarget`](../interfaces/IRenderTargetTexture.md#rendertarget)

***

### samplingMode

#### Get Signature

> **get** **samplingMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L254)

Get the current sampling mode associated with the texture.

##### Returns

`number`

#### Inherited from

[`ThinTexture`](ThinTexture.md).[`samplingMode`](ThinTexture.md#samplingmode)

***

### wrapU

#### Get Signature

> **get** **wrapU**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L23)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Returns

`number`

#### Set Signature

> **set** **wrapU**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L27)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ThinTexture`](ThinTexture.md).[`wrapU`](ThinTexture.md#wrapu)

***

### wrapV

#### Get Signature

> **get** **wrapV**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L39)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Returns

`number`

#### Set Signature

> **set** **wrapV**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L43)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ThinTexture`](ThinTexture.md).[`wrapV`](ThinTexture.md#wrapv)

## Methods

### delayLoad()

> **delayLoad**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:193](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L193)

Triggers the load sequence in delayed load mode.

#### Returns

`void`

#### Inherited from

[`ThinTexture`](ThinTexture.md).[`delayLoad`](ThinTexture.md#delayload)

***

### dispose()

> **dispose**(`disposeOnlyFramebuffers?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinRenderTargetTexture.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinRenderTargetTexture.ts#L80)

Dispose the texture and release its associated resources.

#### Parameters

##### disposeOnlyFramebuffers?

`boolean` = `false`

if set to true it will dispose only the frame buffers (default: false)

#### Returns

`void`

#### Overrides

[`ThinTexture`](ThinTexture.md).[`dispose`](ThinTexture.md#dispose)

***

### getBaseSize()

> **getBaseSize**(): [`ISize`](../interfaces/ISize.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:230](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L230)

Get the base size of the texture.
It can be different from the size if the texture has been resized for POT for instance

#### Returns

[`ISize`](../interfaces/ISize.md)

the base size

#### Inherited from

[`ThinTexture`](ThinTexture.md).[`getBaseSize`](ThinTexture.md#getbasesize)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinRenderTargetTexture.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinRenderTargetTexture.ts#L72)

Get the class name of the texture.

#### Returns

`string`

"ThinRenderTargetTexture"

#### Overrides

[`ThinTexture`](ThinTexture.md).[`getClassName`](ThinTexture.md#getclassname)

***

### getInternalTexture()

> **getInternalTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinRenderTargetTexture.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinRenderTargetTexture.ts#L64)

Get the underlying lower level texture from Babylon.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

the internal texture

#### Overrides

[`ThinTexture`](ThinTexture.md).[`getInternalTexture`](ThinTexture.md#getinternaltexture)

***

### getSize()

> **getSize**(): [`ISize`](../interfaces/ISize.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L207)

Get the size of the texture.

#### Returns

[`ISize`](../interfaces/ISize.md)

the texture size.

#### Inherited from

[`ThinTexture`](ThinTexture.md).[`getSize`](ThinTexture.md#getsize)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L177)

Get if the texture is ready to be used (downloaded, converted, mip mapped...).

#### Returns

`boolean`

true if fully ready

#### Inherited from

[`ThinTexture`](ThinTexture.md).[`isReady`](ThinTexture.md#isready)

***

### releaseInternalTexture()

> **releaseInternalTexture**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L296)

Release and destroy the underlying lower level texture aka internalTexture.

#### Returns

`void`

#### Inherited from

[`ThinTexture`](ThinTexture.md).[`releaseInternalTexture`](ThinTexture.md#releaseinternaltexture)

***

### resize()

> **resize**(`size`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinRenderTargetTexture.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinRenderTargetTexture.ts#L48)

Resize the texture to a new desired size.
Be careful as it will recreate all the data in the new texture.

#### Parameters

##### size

[`TextureSize`](../type-aliases/TextureSize.md)

Define the new size. It can be:
  - a number for squared texture,
  - an object containing { width: number, height: number }

#### Returns

`void`

***

### updateSamplingMode()

> **updateSamplingMode**(`samplingMode`, `generateMipMaps?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:287](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L287)

Update the sampling mode of the texture.
Default is Trilinear mode.

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 1     | NEAREST_SAMPLINGMODE or NEAREST_NEAREST_MIPLINEAR  | Nearest is: mag = nearest, min = nearest, mip = linear |
| 2     | BILINEAR_SAMPLINGMODE or LINEAR_LINEAR_MIPNEAREST | Bilinear is: mag = linear, min = linear, mip = nearest |
| 3     | TRILINEAR_SAMPLINGMODE or LINEAR_LINEAR_MIPLINEAR | Trilinear is: mag = linear, min = linear, mip = linear |
| 4     | NEAREST_NEAREST_MIPNEAREST |             |
| 5    | NEAREST_LINEAR_MIPNEAREST |             |
| 6    | NEAREST_LINEAR_MIPLINEAR |             |
| 7    | NEAREST_LINEAR |             |
| 8    | NEAREST_NEAREST |             |
| 9   | LINEAR_NEAREST_MIPNEAREST |             |
| 10   | LINEAR_NEAREST_MIPLINEAR |             |
| 11   | LINEAR_LINEAR |             |
| 12   | LINEAR_NEAREST |             |

   > _mag_: magnification filter (close to the viewer)
   > _min_: minification filter (far from the viewer)
   > _mip_: filter used between mip map levels

#### Parameters

##### samplingMode

`number`

Define the new sampling mode of the texture

##### generateMipMaps?

`boolean` = `false`

Define if the texture should generate mip maps or not. Default is false.

#### Returns

`void`

#### Inherited from

[`ThinTexture`](ThinTexture.md).[`updateSamplingMode`](ThinTexture.md#updatesamplingmode)
