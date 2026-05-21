[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ITextureCreationOptions

# Interface: ITextureCreationOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L30)

Defines the available options when creating a texture

## Extended by

- [`IDynamicTextureOptions`](IDynamicTextureOptions.md)

## Properties

### buffer?

> `optional` **buffer?**: [`Nullable`](../type-aliases/Nullable.md)\<`string` \| `ArrayBuffer` \| `ArrayBufferView`\<`ArrayBufferLike`\> \| `HTMLImageElement` \| `ImageBitmap` \| `Blob`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L47)

Defines the buffer to load the texture from in case the texture is loaded from a buffer representation (default: null)

***

### creationFlags?

> `optional` **creationFlags?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L62)

Specific flags to use when creating the texture (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg) (default: undefined)

***

### deleteBuffer?

> `optional` **deleteBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L50)

Defines if the buffer we are loading the texture from should be deleted after load (default: false)

***

### forcedExtension?

> `optional` **forcedExtension?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L74)

Defines the extension to use to pick the right loader

***

### format?

> `optional` **format?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L53)

Defines the format of the texture we are trying to load (Engine.TEXTUREFORMAT_RGBA...) (default: )

***

### gammaSpace?

> `optional` **gammaSpace?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L71)

Defines the underlying texture texture space

***

### internalTexture?

> `optional` **internalTexture?**: [`InternalTexture`](../classes/InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L68)

Defines the underlying texture from an already existing one

***

### invertY?

> `optional` **invertY?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L35)

Defines if the texture needs to be inverted on the y axis during loading (default: true)

***

### loaderOptions?

> `optional` **loaderOptions?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L59)

Options to be passed to the loader (default: undefined)

***

### mimeType?

> `optional` **mimeType?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L56)

Defines an optional mime type information (default: undefined)

***

### noMipmap?

> `optional` **noMipmap?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L32)

Defines if the texture will require mip maps or not (default: false)

***

### onError?

> `optional` **onError?**: [`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L44)

Defines a callback triggered when an error occurred during the loading session (default: null)

***

### onLoad?

> `optional` **onLoad?**: [`Nullable`](../type-aliases/Nullable.md)\<() => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L41)

Defines a callback triggered when the texture has been loaded (default: null)

***

### samplingMode?

> `optional` **samplingMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L38)

Defines the sampling mode we want for the texture while fetching from it (Texture.NEAREST_SAMPLINGMODE...) (default: Texture.TRILINEAR_SAMPLINGMODE)

***

### useSRGBBuffer?

> `optional` **useSRGBBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L65)

Defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU) (default: false)
