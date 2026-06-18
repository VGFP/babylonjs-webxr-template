[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ExtractChannelAsync

# Function: ExtractChannelAsync()

> **ExtractChannelAsync**(`name`, `input`, `channel`, `scene`, `outputColorSpace?`, `outputChannelMask?`): `Promise`\<[`ITextureProcessOperand`](../interfaces/ITextureProcessOperand.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:935](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L935)

Extract a single channel from a texture and broadcast it to RGB (or all four components for
`TextureChannel.A`), producing a new texture. This is a convenience wrapper over
`MultiplyTexturesAsync` with a `(1,1,1,1)` factor and the requested channel swizzle applied
to the input.

Swizzle results per channel:
- `TextureChannel.R` → (r, r, r, a)
- `TextureChannel.G` → (g, g, g, a)
- `TextureChannel.B` → (b, b, b, a)
- `TextureChannel.A` → (a, a, a, a)

If the input is constant (no texture), the swizzle is applied on the CPU.

Any `colorSpace` property on the input operand is honoured (sRGB linearization applied before
the swizzle). Any existing `channel` on the input is replaced by the `channel` argument.

When the input is the result of a previous operation (i.e. it carries a `dispose` function),
its intermediate texture is automatically released after the GPU pass completes.

## Parameters

### name

`string`

Name for the resulting procedural texture (used only when a GPU pass is needed)

### input

[`ITextureProcessOperand`](../interfaces/ITextureProcessOperand.md)

Operand to extract the channel from

### channel

[`TextureChannel`](../enumerations/TextureChannel.md)

The channel to extract and broadcast

### scene

[`Scene`](../classes/Scene.md)

Scene to create the texture in (used only when a GPU pass is needed)

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
