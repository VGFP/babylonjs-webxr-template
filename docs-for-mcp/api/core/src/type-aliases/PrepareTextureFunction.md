[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareTextureFunction

# Type Alias: PrepareTextureFunction

> **PrepareTextureFunction** = (`texture`, `extension`, `scene`, `img`, `invertY`, `noMipmap`, `isCompressed`, `processFunction`, `samplingMode`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.pure.ts:204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/abstractEngine.pure.ts#L204)

## Parameters

### texture

[`InternalTexture`](../classes/InternalTexture.md)

### extension

`string`

### scene

[`Nullable`](Nullable.md)\<`ISceneLike`\>

### img

`HTMLImageElement` \| `ImageBitmap` \| \{ `height`: `number`; `width`: `number`; \}

### invertY

`boolean`

### noMipmap

`boolean`

### isCompressed

`boolean`

### processFunction

[`PrepareTextureProcessFunction`](PrepareTextureProcessFunction.md)

### samplingMode

`number`

## Returns

`void`
