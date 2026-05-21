[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RenderTargetCreationOptions

# Interface: RenderTargetCreationOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L37)

Define options used to create a render target texture

## Extends

- [`InternalTextureCreationOptions`](InternalTextureCreationOptions.md)

## Properties

### colorAttachment?

> `optional` **colorAttachment?**: [`InternalTexture`](../classes/InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L45)

Specifies the internal texture to use directly instead of creating one (ignores `noColorAttachment` flag when set) *

***

### comparisonFunction?

> `optional` **comparisonFunction?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L29)

Comparison function. Used only for depth textures (default: 0)

#### Inherited from

[`InternalTextureCreationOptions`](InternalTextureCreationOptions.md).[`comparisonFunction`](InternalTextureCreationOptions.md#comparisonfunction)

***

### createMipMaps?

> `optional` **createMipMaps?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L9)

Specifies if mipmaps must be created. If undefined, the value from generateMipMaps is taken instead

#### Inherited from

[`InternalTextureCreationOptions`](InternalTextureCreationOptions.md).[`createMipMaps`](InternalTextureCreationOptions.md#createmipmaps)

***

### createMSAATexture?

> `optional` **createMSAATexture?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L27)

If the MSAA texture must be created right away (default: false)

#### Inherited from

[`InternalTextureCreationOptions`](InternalTextureCreationOptions.md).[`createMSAATexture`](InternalTextureCreationOptions.md#createmsaatexture)

***

### creationFlags?

> `optional` **creationFlags?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L21)

Texture creation flags

#### Inherited from

[`InternalTextureCreationOptions`](InternalTextureCreationOptions.md).[`creationFlags`](InternalTextureCreationOptions.md#creationflags)

***

### format?

> `optional` **format?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L17)

Defines format (RGBA by default)

#### Inherited from

[`InternalTextureCreationOptions`](InternalTextureCreationOptions.md).[`format`](InternalTextureCreationOptions.md#format)

***

### generateDepthBuffer?

> `optional` **generateDepthBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L39)

Specifies whether or not a depth should be allocated in the texture (true by default)

***

### generateMipMaps?

> `optional` **generateMipMaps?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L11)

Specifies if mipmaps must be generated

#### Inherited from

[`InternalTextureCreationOptions`](InternalTextureCreationOptions.md).[`generateMipMaps`](InternalTextureCreationOptions.md#generatemipmaps)

***

### generateStencilBuffer?

> `optional` **generateStencilBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L41)

Specifies whether or not a stencil should be allocated in the texture (false by default)

***

### isCube?

> `optional` **isCube?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L31)

If the created texture is a cube texture

#### Inherited from

[`InternalTextureCreationOptions`](InternalTextureCreationOptions.md).[`isCube`](InternalTextureCreationOptions.md#iscube)

***

### label?

> `optional` **label?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L25)

Label of the texture (used for debugging only)

#### Inherited from

[`InternalTextureCreationOptions`](InternalTextureCreationOptions.md).[`label`](InternalTextureCreationOptions.md#label)

***

### noColorAttachment?

> `optional` **noColorAttachment?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L43)

Specifies that no color target should be bound to the render target (useful if you only want to write to the depth buffer, for eg)

***

### samples?

> `optional` **samples?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L19)

Defines sample count (1 by default)

#### Inherited from

[`InternalTextureCreationOptions`](InternalTextureCreationOptions.md).[`samples`](InternalTextureCreationOptions.md#samples)

***

### samplingMode?

> `optional` **samplingMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L15)

Defines sampling mode (trilinear by default)

#### Inherited from

[`InternalTextureCreationOptions`](InternalTextureCreationOptions.md).[`samplingMode`](InternalTextureCreationOptions.md#samplingmode)

***

### type?

> `optional` **type?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L13)

Defines texture type (unsigned byte by default)

#### Inherited from

[`InternalTextureCreationOptions`](InternalTextureCreationOptions.md).[`type`](InternalTextureCreationOptions.md#type)

***

### useSRGBBuffer?

> `optional` **useSRGBBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L23)

Creates the RTT in sRGB space

#### Inherited from

[`InternalTextureCreationOptions`](InternalTextureCreationOptions.md).[`useSRGBBuffer`](InternalTextureCreationOptions.md#usesrgbbuffer)
