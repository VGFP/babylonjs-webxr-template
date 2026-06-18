[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphTextureCreationOptions

# Type Alias: FrameGraphTextureCreationOptions

> **FrameGraphTextureCreationOptions** = `object`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L59)

Options used to create a texture / list of textures in the frame graph.

## Properties

### isHistoryTexture?

> `optional` **isHistoryTexture?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L70)

Indicates that the texture is a history texture (default: false)

***

### options

> **options**: [`FrameGraphTextureOptions`](FrameGraphTextureOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L64)

Options used to create the textures

***

### size

> **size**: [`TextureSize`](TextureSize.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L61)

Size of the textures. If sizeIsPercentage is true, these are percentages relative to the screen size (100 = 100%)

***

### sizeIsPercentage

> **sizeIsPercentage**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L67)

If true, indicates that "size" is percentages relative to the screen size
