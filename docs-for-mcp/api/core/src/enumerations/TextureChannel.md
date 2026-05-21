[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TextureChannel

# Enumeration: TextureChannel

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L68)

Specifies which channel of a texture to read for an operation.
When a single channel is selected its scalar value is broadcast to RGB; alpha
is either preserved from the original sample or replicated when `A` is chosen.

| Value | Swizzle |
|-------|---------|
| RGBA  | (r, g, b, a) — no swizzle (default) |
| R     | (r, r, r, a) |
| G     | (g, g, g, a) |
| B     | (b, b, b, a) |
| A     | (a, a, a, a) |

## Enumeration Members

### A

> **A**: `4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L78)

Broadcast the alpha channel to all four components: AAAA.

***

### B

> **B**: `3`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L76)

Broadcast the blue channel to RGB; preserve alpha: BBBA.

***

### G

> **G**: `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L74)

Broadcast the green channel to RGB; preserve alpha: GGGA.

***

### R

> **R**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L72)

Broadcast the red channel to RGB; preserve alpha: RRRA.

***

### RGBA

> **RGBA**: `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L70)

Use all four channels as sampled (default).
