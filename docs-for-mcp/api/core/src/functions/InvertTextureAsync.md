[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InvertTextureAsync

# Function: InvertTextureAsync()

> **InvertTextureAsync**(`name`, `input`, `scene`, `channels?`, `outputColorSpace?`, `outputChannelMask?`): `Promise`\<[`ITextureProcessOperand`](../interfaces/ITextureProcessOperand.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:789](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L789)

Invert selected channels of a texture operand: `result[ch] = 1 - input[ch]`.

The `channels` bitmask selects which channels are inverted; unselected channels pass through
unchanged. Use `ChannelMask.RGB` for the common roughness↔smoothness conversion, or
`ChannelMask.RGBA` (the default) to invert the entire texture.

This is a unary operation — only operand A is used. Any `colorSpace` or `channel` properties
on the input operand are honoured (sRGB linearization and channel swizzle applied before
the invert).

If the input is constant (no texture), the invert is performed on the CPU.

When the input is the result of a previous operation (i.e. it carries a `dispose` function),
its intermediate texture is automatically released after the GPU pass completes.

## Parameters

### name

`string`

Name for the resulting procedural texture (used only when a GPU pass is needed)

### input

[`ITextureProcessOperand`](../interfaces/ITextureProcessOperand.md)

Operand to invert

### scene

[`Scene`](../classes/Scene.md)

Scene to create the texture in (used only when a GPU pass is needed)

### channels?

[`ChannelMask`](../enumerations/ChannelMask.md) = `ChannelMask.RGBA`

Bitmask of channels to invert. Defaults to `ChannelMask.RGBA`.

### outputColorSpace?

[`TextureColorSpace`](../enumerations/TextureColorSpace.md)

Optional output color space. When `TextureColorSpace.SRGB`, the linear
  result is converted to sRGB (IEC 61966-2-1) before being written. Defaults to `TextureColorSpace.Linear`.

### outputChannelMask?

[`ChannelMask`](../enumerations/ChannelMask.md)

Optional bitmask of channels to write. Excluded color channels are set to
  `0.0`; excluded alpha is set to `1.0`. Defaults to `ChannelMask.RGBA` (all channels written).

## Returns

`Promise`\<[`ITextureProcessOperand`](../interfaces/ITextureProcessOperand.md)\>

An operand whose `texture` holds the GPU result, or whose `factor` holds the CPU-folded constant
