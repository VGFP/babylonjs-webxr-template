[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ITextureProcessOperand

# Interface: ITextureProcessOperand

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L99)

Represents an operand for a texture processing operation, or the result of one.

As an operand, the value evaluates to a vec4 per texel:
- `texture` only → `sample(texture)`
- `factor` only → `factor` (constant)
- both → `sample(texture) * factor`

As a result returned by a processing function:
- `texture` holds the GPU-processed output; `dispose()` releases it when no longer needed.
- `factor` holds a CPU-folded constant when all inputs were texture-free; no `dispose` is set.

Results are directly usable as operands to subsequent operations. When a result with a
`dispose` function is passed as an operand, the next operation automatically calls `dispose`
after consuming it, so intermediate textures are cleaned up without manual tracking.

At least one of `texture` or `factor` must be provided when used as an operand.

## Properties

### channel?

> `optional` **channel?**: [`TextureChannel`](../enumerations/TextureChannel.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L117)

Optional channel selection applied to the sampled texture value before any factor
multiplication. When omitted or set to `TextureChannel.RGBA`, the sample is used
as-is. When set to a single channel, that channel's scalar is broadcast to RGB
(or all four components for `TextureChannel.A`). Only meaningful when `texture` is set.

***

### colorSpace?

> `optional` **colorSpace?**: [`TextureColorSpace`](../enumerations/TextureColorSpace.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L125)

Color space of the texture data. When set to `TextureColorSpace.SRGB`, the sampled
RGB channels are converted from sRGB to linear space (IEC 61966-2-1) before the channel
swizzle, factor multiplication, and any arithmetic operation. Alpha is always linear.
Defaults to `TextureColorSpace.Linear` (no conversion). Only meaningful when `texture` is set.

***

### dispose?

> `optional` **dispose?**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L134)

Disposes the texture produced by a processing operation. Only present on results
returned by the texture processing functions. When a result is passed as an operand
to the next operation in a chain, its `dispose` is called automatically after the
GPU pass completes. Call `dispose` explicitly on the final result when the texture
is no longer needed (or skip it if transferring ownership to a material).

#### Returns

`void`

***

### factor?

> `optional` **factor?**: [`Color4`](../classes/Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L110)

Optional constant RGBA factor. If `texture` is also set, the sampled value is
multiplied by this factor. If `texture` is not set, this becomes the constant output.
When omitted and `texture` is set, defaults to (1, 1, 1, 1) — no scaling.

***

### texture

> **texture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](../classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L104)

Texture to sample. When combined with `factor`, the sampled value is multiplied
component-wise by the factor. Null when the operand or result is a constant.
