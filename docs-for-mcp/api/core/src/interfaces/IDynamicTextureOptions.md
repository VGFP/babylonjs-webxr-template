[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IDynamicTextureOptions

# Interface: IDynamicTextureOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L14)

Interface defining options used to create a dynamic texture

## Extends

- [`ITextureCreationOptions`](ITextureCreationOptions.md)

## Extended by

- [`IAdvancedDynamicTextureOptions`](../../../gui/src/interfaces/IAdvancedDynamicTextureOptions.md)

## Properties

### buffer?

> `optional` **buffer?**: [`Nullable`](../type-aliases/Nullable.md)\<`string` \| `ArrayBuffer` \| `ArrayBufferView`\<`ArrayBufferLike`\> \| `HTMLImageElement` \| `ImageBitmap` \| `Blob`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L47)

Defines the buffer to load the texture from in case the texture is loaded from a buffer representation (default: null)

#### Inherited from

[`ITextureCreationOptions`](ITextureCreationOptions.md).[`buffer`](ITextureCreationOptions.md#buffer)

***

### creationFlags?

> `optional` **creationFlags?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L62)

Specific flags to use when creating the texture (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg) (default: undefined)

#### Inherited from

[`ITextureCreationOptions`](ITextureCreationOptions.md).[`creationFlags`](ITextureCreationOptions.md#creationflags)

***

### deleteBuffer?

> `optional` **deleteBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L50)

Defines if the buffer we are loading the texture from should be deleted after load (default: false)

#### Inherited from

[`ITextureCreationOptions`](ITextureCreationOptions.md).[`deleteBuffer`](ITextureCreationOptions.md#deletebuffer)

***

### forcedExtension?

> `optional` **forcedExtension?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L74)

Defines the extension to use to pick the right loader

#### Inherited from

[`ITextureCreationOptions`](ITextureCreationOptions.md).[`forcedExtension`](ITextureCreationOptions.md#forcedextension)

***

### format?

> `optional` **format?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L53)

Defines the format of the texture we are trying to load (Engine.TEXTUREFORMAT_RGBA...) (default: )

#### Inherited from

[`ITextureCreationOptions`](ITextureCreationOptions.md).[`format`](ITextureCreationOptions.md#format)

***

### gammaSpace?

> `optional` **gammaSpace?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L71)

Defines the underlying texture texture space

#### Inherited from

[`ITextureCreationOptions`](ITextureCreationOptions.md).[`gammaSpace`](ITextureCreationOptions.md#gammaspace)

***

### height?

> `optional` **height?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L18)

defines the height of the texture (default: 0)

***

### internalTexture?

> `optional` **internalTexture?**: [`InternalTexture`](../classes/InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L68)

Defines the underlying texture from an already existing one

#### Inherited from

[`ITextureCreationOptions`](ITextureCreationOptions.md).[`internalTexture`](ITextureCreationOptions.md#internaltexture)

***

### invertY?

> `optional` **invertY?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L35)

Defines if the texture needs to be inverted on the y axis during loading (default: true)

#### Inherited from

[`ITextureCreationOptions`](ITextureCreationOptions.md).[`invertY`](ITextureCreationOptions.md#inverty)

***

### loaderOptions?

> `optional` **loaderOptions?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L59)

Options to be passed to the loader (default: undefined)

#### Inherited from

[`ITextureCreationOptions`](ITextureCreationOptions.md).[`loaderOptions`](ITextureCreationOptions.md#loaderoptions)

***

### mimeType?

> `optional` **mimeType?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L56)

Defines an optional mime type information (default: undefined)

#### Inherited from

[`ITextureCreationOptions`](ITextureCreationOptions.md).[`mimeType`](ITextureCreationOptions.md#mimetype)

***

### noMipmap?

> `optional` **noMipmap?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L32)

Defines if the texture will require mip maps or not (default: false)

#### Inherited from

[`ITextureCreationOptions`](ITextureCreationOptions.md).[`noMipmap`](ITextureCreationOptions.md#nomipmap)

***

### onError?

> `optional` **onError?**: [`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L44)

Defines a callback triggered when an error occurred during the loading session (default: null)

#### Inherited from

[`ITextureCreationOptions`](ITextureCreationOptions.md).[`onError`](ITextureCreationOptions.md#onerror)

***

### onLoad?

> `optional` **onLoad?**: [`Nullable`](../type-aliases/Nullable.md)\<() => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L41)

Defines a callback triggered when the texture has been loaded (default: null)

#### Inherited from

[`ITextureCreationOptions`](ITextureCreationOptions.md).[`onLoad`](ITextureCreationOptions.md#onload)

***

### samplingMode?

> `optional` **samplingMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L38)

Defines the sampling mode we want for the texture while fetching from it (Texture.NEAREST_SAMPLINGMODE...) (default: Texture.TRILINEAR_SAMPLINGMODE)

#### Inherited from

[`ITextureCreationOptions`](ITextureCreationOptions.md).[`samplingMode`](ITextureCreationOptions.md#samplingmode)

***

### scene?

> `optional` **scene?**: [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L20)

defines the hosting scene (default: null)

***

### useSRGBBuffer?

> `optional` **useSRGBBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L65)

Defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU) (default: false)

#### Inherited from

[`ITextureCreationOptions`](ITextureCreationOptions.md).[`useSRGBBuffer`](ITextureCreationOptions.md#usesrgbbuffer)

***

### width?

> `optional` **width?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L16)

defines the width of the texture (default: 0)
