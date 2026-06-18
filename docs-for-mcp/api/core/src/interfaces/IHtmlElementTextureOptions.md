[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IHtmlElementTextureOptions

# Interface: IHtmlElementTextureOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts#L17)

Defines the options related to the creation of an HtmlElementTexture

## Properties

### engine

> **engine**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractEngine`](../classes/AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts#L33)

Defines the engine instance to use the texture with. It is not mandatory if you define a scene.

***

### format?

> `optional` **format?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts#L29)

Defines the associated texture format.

***

### generateMipMaps?

> `optional` **generateMipMaps?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts#L21)

Defines whether mip maps should be created or not.

***

### samplingMode?

> `optional` **samplingMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts#L25)

Defines the sampling mode of the texture.

***

### scene

> **scene**: [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts#L37)

Defines the scene the texture belongs to. It is not mandatory if you define an engine.
