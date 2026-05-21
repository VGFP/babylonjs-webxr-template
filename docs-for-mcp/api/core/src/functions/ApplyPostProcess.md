[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ApplyPostProcess

# Function: ApplyPostProcess()

> **ApplyPostProcess**(`postProcessName`, `internalTexture`, `scene`, `type?`, `samplingMode?`, `format?`, `width?`, `height?`): `Promise`\<[`InternalTexture`](../classes/InternalTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/textureTools.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/textureTools.ts#L102)

Apply a post process to a texture

## Parameters

### postProcessName

`string`

name of the fragment post process

### internalTexture

[`InternalTexture`](../classes/InternalTexture.md)

the texture to encode

### scene

[`Scene`](../classes/Scene.md)

the scene hosting the texture

### type?

`number`

type of the output texture. If not provided, use the one from internalTexture

### samplingMode?

`number`

sampling mode to use to sample the source texture. If not provided, use the one from internalTexture

### format?

`number`

format of the output texture. If not provided, use the one from internalTexture

### width?

`number`

width of the output texture. If not provided, use the one from internalTexture

### height?

`number`

height of the output texture. If not provided, use the one from internalTexture

## Returns

`Promise`\<[`InternalTexture`](../classes/InternalTexture.md)\>

a promise with the internalTexture having its texture replaced by the result of the processing
