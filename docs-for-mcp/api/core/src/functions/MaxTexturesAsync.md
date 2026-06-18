[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MaxTexturesAsync

# Function: MaxTexturesAsync()

> **MaxTexturesAsync**(`name`, `a`, `b`, `scene`, `outputColorSpace?`, `outputChannelMask?`): `Promise`\<[`ITextureProcessOperand`](../interfaces/ITextureProcessOperand.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:622](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L622)

Take the component-wise maximum of two texture operands: `result = max(a, b)`.

Each operand can be a texture, a constant factor, or a texture scaled by a factor.
Useful for operations such as combining ambient occlusion maps or taking the
brightest contribution from two sources.

If both operands are constant (no textures), the operation is performed on the CPU and
the result is returned as a factor-only operand with no texture allocated.

When operands are results of previous operations (i.e. they carry a `dispose` function),
their intermediate textures are automatically released after the GPU pass completes.

## Parameters

### name

`string`

Name for the resulting procedural texture (used only when a GPU pass is needed)

### a

[`ITextureProcessOperand`](../interfaces/ITextureProcessOperand.md)

First operand

### b

[`ITextureProcessOperand`](../interfaces/ITextureProcessOperand.md)

Second operand

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
