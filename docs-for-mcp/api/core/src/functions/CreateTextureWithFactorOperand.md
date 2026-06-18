[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateTextureWithFactorOperand

# Function: CreateTextureWithFactorOperand()

> **CreateTextureWithFactorOperand**(`texture`, `factor`, `channel?`, `colorSpace?`): [`ITextureProcessOperand`](../interfaces/ITextureProcessOperand.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L179)

Create an operand from a texture multiplied by a constant RGBA factor.
This is the standard glTF pattern (e.g. baseColorTexture * baseColorFactor).
If `texture` is null, returns a factor-only operand.

## Parameters

### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](../classes/BaseTexture.md)\>

The texture to sample, or null to use the factor alone

### factor

[`Color4`](../classes/Color4.md)

The constant factor to multiply by

### channel?

[`TextureChannel`](../enumerations/TextureChannel.md)

Optional channel selection. When set, the sampled value is swizzled before
  factor multiplication (e.g. `TextureChannel.G` → GGGA, then multiplied by factor).
  Defaults to `TextureChannel.RGBA` (no swizzle).

### colorSpace?

[`TextureColorSpace`](../enumerations/TextureColorSpace.md)

Optional color space. When `TextureColorSpace.SRGB`, the sampled RGB channels
  are linearized before factor multiplication. Defaults to `TextureColorSpace.Linear`.

## Returns

[`ITextureProcessOperand`](../interfaces/ITextureProcessOperand.md)

An operand that evaluates to `sample(texture) * factor`, or `factor` if texture is null
