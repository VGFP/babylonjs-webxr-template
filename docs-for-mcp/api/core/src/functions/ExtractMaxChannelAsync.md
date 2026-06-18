[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ExtractMaxChannelAsync

# Function: ExtractMaxChannelAsync()

> **ExtractMaxChannelAsync**(`name`, `input`, `scene`, `includeAlpha?`, `outputColorSpace?`, `outputChannelMask?`): `Promise`\<[`ITextureProcessOperand`](../interfaces/ITextureProcessOperand.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:863](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L863)

Extract the per-texel maximum channel value from a texture and broadcast it to all output
channels, producing a single-value (greyscale) texture in a single GPU pass.

For each texel, computes `max(r, g, b)` — or `max(r, g, b, a)` when `includeAlpha` is true —
and writes that scalar to the output:
- `includeAlpha = false` (default): output is `(m, m, m, a)` where `m = max(r, g, b)`
- `includeAlpha = true`:            output is `(m, m, m, m)` where `m = max(r, g, b, a)`

This is more efficient than chaining `ExtractChannelAsync` calls through `MaxTexturesAsync`,
which would require multiple intermediate textures and GPU passes.

Any `colorSpace` or `channel` properties on the input operand are honoured (sRGB linearization
and channel swizzle applied before the max reduction).

If the input is constant (no texture), the reduction is performed on the CPU.

When the input is the result of a previous operation (i.e. it carries a `dispose` function),
its intermediate texture is automatically released after the GPU pass completes.

## Parameters

### name

`string`

Name for the resulting procedural texture (used only when a GPU pass is needed)

### input

[`ITextureProcessOperand`](../interfaces/ITextureProcessOperand.md)

Operand to reduce

### scene

[`Scene`](../classes/Scene.md)

Scene to create the texture in (used only when a GPU pass is needed)

### includeAlpha?

`boolean` = `false`

When true, alpha participates in the max and is also set to the result.
  Defaults to false (alpha is preserved from the input).

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
