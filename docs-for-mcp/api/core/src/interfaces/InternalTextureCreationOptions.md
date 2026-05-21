[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InternalTextureCreationOptions

# Interface: InternalTextureCreationOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:7](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L7)

Define options used to create an internal texture

## Extended by

- [`RenderTargetCreationOptions`](RenderTargetCreationOptions.md)

## Properties

### comparisonFunction?

> `optional` **comparisonFunction?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L29)

Comparison function. Used only for depth textures (default: 0)

***

### createMipMaps?

> `optional` **createMipMaps?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L9)

Specifies if mipmaps must be created. If undefined, the value from generateMipMaps is taken instead

***

### createMSAATexture?

> `optional` **createMSAATexture?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L27)

If the MSAA texture must be created right away (default: false)

***

### creationFlags?

> `optional` **creationFlags?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L21)

Texture creation flags

***

### format?

> `optional` **format?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L17)

Defines format (RGBA by default)

***

### generateMipMaps?

> `optional` **generateMipMaps?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L11)

Specifies if mipmaps must be generated

***

### isCube?

> `optional` **isCube?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L31)

If the created texture is a cube texture

***

### label?

> `optional` **label?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L25)

Label of the texture (used for debugging only)

***

### samples?

> `optional` **samples?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L19)

Defines sample count (1 by default)

***

### samplingMode?

> `optional` **samplingMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L15)

Defines sampling mode (trilinear by default)

***

### type?

> `optional` **type?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L13)

Defines texture type (unsigned byte by default)

***

### useSRGBBuffer?

> `optional` **useSRGBBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L23)

Creates the RTT in sRGB space
