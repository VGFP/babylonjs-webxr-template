[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateTextureOperand

# Function: CreateTextureOperand()

> **CreateTextureOperand**(`texture`, `channel?`, `colorSpace?`): [`ITextureProcessOperand`](../interfaces/ITextureProcessOperand.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L146)

Create an operand from a texture alone (no constant factor scaling).

## Parameters

### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](../classes/BaseTexture.md)\>

The texture to sample, or null to produce an identity (1,1,1,1) constant operand

### channel?

[`TextureChannel`](../enumerations/TextureChannel.md)

Optional channel selection. When set, the sampled value is swizzled before use
  (e.g. `TextureChannel.R` → RRRA). Defaults to `TextureChannel.RGBA` (no swizzle).

### colorSpace?

[`TextureColorSpace`](../enumerations/TextureColorSpace.md)

Optional color space. When `TextureColorSpace.SRGB`, the sampled RGB channels
  are linearized before use. Defaults to `TextureColorSpace.Linear`.

## Returns

[`ITextureProcessOperand`](../interfaces/ITextureProcessOperand.md)

An operand that evaluates to the sampled texture value
