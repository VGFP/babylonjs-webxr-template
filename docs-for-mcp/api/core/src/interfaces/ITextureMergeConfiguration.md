[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ITextureMergeConfiguration

# Interface: ITextureMergeConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureMerger.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureMerger.ts#L36)

Configuration for texture merging operation

## Properties

### alpha?

> `optional` **alpha?**: [`ChannelInput`](../type-aliases/ChannelInput.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureMerger.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureMerger.ts#L44)

Configuration for alpha output channel (optional, defaults to 1)

***

### blue?

> `optional` **blue?**: [`ChannelInput`](../type-aliases/ChannelInput.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureMerger.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureMerger.ts#L42)

Configuration for blue output channel (optional, defaults to 0)

***

### generateMipMaps?

> `optional` **generateMipMaps?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureMerger.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureMerger.ts#L48)

Whether to generate mipmaps for the output texture

***

### green?

> `optional` **green?**: [`ChannelInput`](../type-aliases/ChannelInput.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureMerger.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureMerger.ts#L40)

Configuration for green output channel (optional, defaults to 0)

***

### outputSize?

> `optional` **outputSize?**: [`TextureSize`](../type-aliases/TextureSize.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureMerger.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureMerger.ts#L46)

Output texture size. If not specified, uses the largest input texture size

***

### red

> **red**: [`ChannelInput`](../type-aliases/ChannelInput.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureMerger.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureMerger.ts#L38)

Configuration for red output channel
