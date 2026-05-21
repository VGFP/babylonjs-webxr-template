[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareTextureFunction

# Type Alias: PrepareTextureFunction

> **PrepareTextureFunction** = (`texture`, `extension`, `scene`, `img`, `invertY`, `noMipmap`, `isCompressed`, `processFunction`, `samplingMode`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/abstractEngine.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/abstractEngine.ts#L194)

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
