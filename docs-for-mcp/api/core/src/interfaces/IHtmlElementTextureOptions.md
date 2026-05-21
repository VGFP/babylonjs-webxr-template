[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IHtmlElementTextureOptions

# Interface: IHtmlElementTextureOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/htmlElementTexture.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/htmlElementTexture.ts#L18)

Defines the options related to the creation of an HtmlElementTexture

## Properties

### engine

> **engine**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractEngine`](../classes/AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/htmlElementTexture.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/htmlElementTexture.ts#L34)

Defines the engine instance to use the texture with. It is not mandatory if you define a scene.

***

### format?

> `optional` **format?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/htmlElementTexture.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/htmlElementTexture.ts#L30)

Defines the associated texture format.

***

### generateMipMaps?

> `optional` **generateMipMaps?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/htmlElementTexture.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/htmlElementTexture.ts#L22)

Defines whether mip maps should be created or not.

***

### samplingMode?

> `optional` **samplingMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/htmlElementTexture.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/htmlElementTexture.ts#L26)

Defines the sampling mode of the texture.

***

### scene

> **scene**: [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/htmlElementTexture.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/htmlElementTexture.ts#L38)

Defines the scene the texture belongs to. It is not mandatory if you define an engine.
