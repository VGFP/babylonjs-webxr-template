[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / IAdvancedDynamicTextureOptions

# Interface: IAdvancedDynamicTextureOptions

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L34)

Interface used to define options to create an AdvancedDynamicTexture

## Extends

- [`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md)

## Properties

### buffer?

> `optional` **buffer?**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`string` \| `ArrayBuffer` \| `ArrayBufferView`\<`ArrayBufferLike`\> \| `HTMLImageElement` \| `ImageBitmap` \| `Blob`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L47)

Defines the buffer to load the texture from in case the texture is loaded from a buffer representation (default: null)

#### Inherited from

[`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md).[`buffer`](../../../core/src/interfaces/IDynamicTextureOptions.md#buffer)

***

### creationFlags?

> `optional` **creationFlags?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L62)

Specific flags to use when creating the texture (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg) (default: undefined)

#### Inherited from

[`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md).[`creationFlags`](../../../core/src/interfaces/IDynamicTextureOptions.md#creationflags)

***

### deleteBuffer?

> `optional` **deleteBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L50)

Defines if the buffer we are loading the texture from should be deleted after load (default: false)

#### Inherited from

[`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md).[`deleteBuffer`](../../../core/src/interfaces/IDynamicTextureOptions.md#deletebuffer)

***

### forcedExtension?

> `optional` **forcedExtension?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L74)

Defines the extension to use to pick the right loader

#### Inherited from

[`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md).[`forcedExtension`](../../../core/src/interfaces/IDynamicTextureOptions.md#forcedextension)

***

### format?

> `optional` **format?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L53)

Defines the format of the texture we are trying to load (Engine.TEXTUREFORMAT_RGBA...) (default: )

#### Inherited from

[`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md).[`format`](../../../core/src/interfaces/IDynamicTextureOptions.md#format)

***

### gammaSpace?

> `optional` **gammaSpace?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L71)

Defines the underlying texture texture space

#### Inherited from

[`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md).[`gammaSpace`](../../../core/src/interfaces/IDynamicTextureOptions.md#gammaspace)

***

### height?

> `optional` **height?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.pure.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/dynamicTexture.pure.ts#L18)

defines the height of the texture (default: 0)

#### Inherited from

[`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md).[`height`](../../../core/src/interfaces/IDynamicTextureOptions.md#height)

***

### internalTexture?

> `optional` **internalTexture?**: [`InternalTexture`](../../../core/src/classes/InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L68)

Defines the underlying texture from an already existing one

#### Inherited from

[`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md).[`internalTexture`](../../../core/src/interfaces/IDynamicTextureOptions.md#internaltexture)

***

### invertY?

> `optional` **invertY?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L35)

Defines if the texture needs to be inverted on the y axis during loading (default: true)

#### Inherited from

[`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md).[`invertY`](../../../core/src/interfaces/IDynamicTextureOptions.md#inverty)

***

### loaderOptions?

> `optional` **loaderOptions?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L59)

Options to be passed to the loader (default: undefined)

#### Inherited from

[`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md).[`loaderOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md#loaderoptions)

***

### mimeType?

> `optional` **mimeType?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L56)

Defines an optional mime type information (default: undefined)

#### Inherited from

[`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md).[`mimeType`](../../../core/src/interfaces/IDynamicTextureOptions.md#mimetype)

***

### noMipmap?

> `optional` **noMipmap?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L32)

Defines if the texture will require mip maps or not (default: false)

#### Inherited from

[`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md).[`noMipmap`](../../../core/src/interfaces/IDynamicTextureOptions.md#nomipmap)

***

### onError?

> `optional` **onError?**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L44)

Defines a callback triggered when an error occurred during the loading session (default: null)

#### Inherited from

[`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md).[`onError`](../../../core/src/interfaces/IDynamicTextureOptions.md#onerror)

***

### onLoad?

> `optional` **onLoad?**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<() => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L41)

Defines a callback triggered when the texture has been loaded (default: null)

#### Inherited from

[`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md).[`onLoad`](../../../core/src/interfaces/IDynamicTextureOptions.md#onload)

***

### samplingMode?

> `optional` **samplingMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L38)

Defines the sampling mode we want for the texture while fetching from it (Texture.NEAREST_SAMPLINGMODE...) (default: Texture.TRILINEAR_SAMPLINGMODE)

#### Inherited from

[`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md).[`samplingMode`](../../../core/src/interfaces/IDynamicTextureOptions.md#samplingmode)

***

### scene?

> `optional` **scene?**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Scene`](../../../core/src/classes/Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.pure.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/dynamicTexture.pure.ts#L20)

defines the hosting scene (default: null)

#### Inherited from

[`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md).[`scene`](../../../core/src/interfaces/IDynamicTextureOptions.md#scene)

***

### useSRGBBuffer?

> `optional` **useSRGBBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L65)

Defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU) (default: false)

#### Inherited from

[`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md).[`useSRGBBuffer`](../../../core/src/interfaces/IDynamicTextureOptions.md#usesrgbbuffer)

***

### useStandalone?

> `optional` **useStandalone?**: `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L41)

Indicates whether the ADT will be used autonomously. In this mode:
- _checkUpdate() is not called
- the layer is not rendered (so, the ADT is not visible)
It's up to the user to perform the required calls manually to update the ADT.

***

### width?

> `optional` **width?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.pure.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/dynamicTexture.pure.ts#L16)

defines the width of the texture (default: 0)

#### Inherited from

[`IDynamicTextureOptions`](../../../core/src/interfaces/IDynamicTextureOptions.md).[`width`](../../../core/src/interfaces/IDynamicTextureOptions.md#width)
