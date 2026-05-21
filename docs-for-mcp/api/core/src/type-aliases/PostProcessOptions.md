[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PostProcessOptions

# Type Alias: PostProcessOptions

> **PostProcessOptions** = [`EffectWrapperCreationOptions`](../interfaces/EffectWrapperCreationOptions.md) & `object`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcess.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcess.ts#L109)

Options for the PostProcess constructor

## Type Declaration

### camera?

> `optional` **camera?**: [`Nullable`](Nullable.md)\<[`Camera`](../classes/Camera.md)\>

The camera that the post process will be attached to (default: null)

### effectWrapper?

> `optional` **effectWrapper?**: [`EffectWrapper`](../classes/EffectWrapper.md)

The effect wrapper instance used by the post process. If not provided, a new one will be created.

### engine?

> `optional` **engine?**: [`AbstractEngine`](../classes/AbstractEngine.md)

The engine to be used to render the post process (default: engine from scene)

### height?

> `optional` **height?**: `number`

The height of the texture created for this post process.
This parameter (and width) is only used when passing a value for the 5th parameter (options) to the PostProcess constructor function.
If you use a PostProcessOptions for the 3rd parameter of the constructor, size is used instead of width and height.

### reusable?

> `optional` **reusable?**: `boolean`

If the post process can be reused on the same frame. (default: false)

### samplingMode?

> `optional` **samplingMode?**: `number`

The sampling mode to be used by the shader (default: Constants.TEXTURE_NEAREST_SAMPLINGMODE)

### size?

> `optional` **size?**: `number` \| \{ `height`: `number`; `width`: `number`; \}

The size of the post process texture.
It is either a ratio to downscale or upscale the texture create for this post process, or an object containing width and height values.
Default: 1

### textureFormat?

> `optional` **textureFormat?**: `number`

Format of the texture created for this post process (default: TEXTUREFORMAT_RGBA)

### textureType?

> `optional` **textureType?**: `number`

Type of the texture created for this post process (default: Constants.TEXTURETYPE_UNSIGNED_BYTE)

### width?

> `optional` **width?**: `number`

The width of the texture created for this post process.
This parameter (and height) is only used when passing a value for the 5th parameter (options) to the PostProcess constructor function.
If you use a PostProcessOptions for the 3rd parameter of the constructor, size is used instead of width and height.
