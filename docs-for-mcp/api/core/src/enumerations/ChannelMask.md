[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ChannelMask

# Enumeration: ChannelMask

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L40)

Bitmask controlling which channels are written to the output texture by a processing operation.
Channels excluded from the mask receive a sensible default: `0.0` for RGB channels, `1.0` for alpha.
Use `ChannelMask.RGBA` (or omit the parameter) to pass all channels through unchanged.

| Flag | Channels written | Excluded channels |
|------|-----------------|-------------------|
| R    | red             | G=0, B=0, A=1     |
| G    | green           | R=0, B=0, A=1     |
| B    | blue            | R=0, G=0, A=1     |
| A    | alpha           | R=0, G=0, B=0     |
| RGB  | red, green, blue | A=1              |
| RGBA | all four        | (none)            |

## Enumeration Members

### A

> **A**: `8`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L48)

Pass only the alpha channel; R=0, G=0, B=0.

***

### B

> **B**: `4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L46)

Pass only the blue channel; R=0, G=0, A=1.

***

### G

> **G**: `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L44)

Pass only the green channel; R=0, B=0, A=1.

***

### R

> **R**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L42)

Pass only the red channel; G=0, B=0, A=1.

***

### RGB

> **RGB**: `7`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L50)

Pass red, green, and blue; alpha is forced to 1.0.

***

### RGBA

> **RGBA**: `15`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureProcessor.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L52)

Pass all four channels unchanged (default — no masking).
