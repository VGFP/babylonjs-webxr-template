[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ITextureCreationOptions

# Interface: ITextureCreationOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L30)

Defines the available options when creating a texture

## Extended by

- [`IDynamicTextureOptions`](IDynamicTextureOptions.md)

## Properties

### buffer?

> `optional` **buffer?**: [`Nullable`](../type-aliases/Nullable.md)\<`string` \| `ArrayBuffer` \| `ArrayBufferView`\<`ArrayBufferLike`\> \| `HTMLImageElement` \| `ImageBitmap` \| `Blob`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L47)

Defines the buffer to load the texture from in case the texture is loaded from a buffer representation (default: null)

***

### creationFlags?

> `optional` **creationFlags?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L62)

Specific flags to use when creating the texture (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg) (default: undefined)

***

### deleteBuffer?

> `optional` **deleteBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L50)

Defines if the buffer we are loading the texture from should be deleted after load (default: false)

***

### forcedExtension?

> `optional` **forcedExtension?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L74)

Defines the extension to use to pick the right loader

***

### format?

> `optional` **format?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L53)

Defines the format of the texture we are trying to load (Engine.TEXTUREFORMAT_RGBA...) (default: )

***

### gammaSpace?

> `optional` **gammaSpace?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L71)

Defines the underlying texture texture space

***

### internalTexture?

> `optional` **internalTexture?**: [`InternalTexture`](../classes/InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L68)

Defines the underlying texture from an already existing one

***

### invertY?

> `optional` **invertY?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L35)

Defines if the texture needs to be inverted on the y axis during loading (default: true)

***

### loaderOptions?

> `optional` **loaderOptions?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L59)

Options to be passed to the loader (default: undefined)

***

### mimeType?

> `optional` **mimeType?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L56)

Defines an optional mime type information (default: undefined)

***

### noMipmap?

> `optional` **noMipmap?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L32)

Defines if the texture will require mip maps or not (default: false)

***

### onError?

> `optional` **onError?**: [`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L44)

Defines a callback triggered when an error occurred during the loading session (default: null)

***

### onLoad?

> `optional` **onLoad?**: [`Nullable`](../type-aliases/Nullable.md)\<() => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L41)

Defines a callback triggered when the texture has been loaded (default: null)

***

### samplingMode?

> `optional` **samplingMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L38)

Defines the sampling mode we want for the texture while fetching from it (Texture.NEAREST_SAMPLINGMODE...) (default: Texture.TRILINEAR_SAMPLINGMODE)

***

### useSRGBBuffer?

> `optional` **useSRGBBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L65)

Defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU) (default: false)
