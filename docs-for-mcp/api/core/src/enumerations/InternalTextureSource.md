[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InternalTextureSource

# Enumeration: InternalTextureSource

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/internalTexture.ts#L14)

Defines the source of the internal texture

## Enumeration Members

### Cube

> **Cube**: `7`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/internalTexture.ts#L46)

Texture data comes from a cube data file

***

### CubePrefiltered

> **CubePrefiltered**: `9`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/internalTexture.ts#L54)

Texture data come from a prefiltered cube data file

***

### CubeRaw

> **CubeRaw**: `8`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/internalTexture.ts#L50)

Texture data comes from a raw cube data

***

### CubeRawRGBD

> **CubeRawRGBD**: `13`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/internalTexture.ts#L70)

Texture data comes from a raw cube data encoded with RGBD

***

### Depth

> **Depth**: `14`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/internalTexture.ts#L74)

Texture content is a depth texture

***

### DepthStencil

> **DepthStencil**: `12`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/internalTexture.ts#L66)

Texture content is a depth/stencil texture

***

### Dynamic

> **Dynamic**: `4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/internalTexture.ts#L34)

Texture content is dynamic (video or dynamic texture)

***

### External

> **External**: `15`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/internalTexture.ts#L84)

Texture wraps an externally created graphics resource (WebGL handle, GPUTexture,
native handle, etc.) supplied via wrap{WebGL,Native,WebGPU}Texture. On dispose,
the wrapped resource is released along with the InternalTexture just like any
other source. Consumers can repoint the wrapper at a fresh external handle
(e.g., after context-loss / device-loss restore) via
updateWrapped{WebGL,Native,WebGPU}Texture without losing references held by
materials, render-target wrappers, particle systems, etc.

***

### MultiRenderTarget

> **MultiRenderTarget**: `6`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/internalTexture.ts#L42)

Texture content is part of a multi render target process

***

### Raw

> **Raw**: `3`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/internalTexture.ts#L30)

Texture data comes from raw data (ArrayBuffer)

***

### Raw2DArray

> **Raw2DArray**: `11`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/internalTexture.ts#L62)

Texture content is raw 2D array data

***

### Raw3D

> **Raw3D**: `10`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/internalTexture.ts#L58)

Texture content is raw 3D data

***

### RenderTarget

> **RenderTarget**: `5`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/internalTexture.ts#L38)

Texture content is generated by rendering to it

***

### Temp

> **Temp**: `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/internalTexture.ts#L26)

Texture data is only used for temporary storage

***

### Unknown

> **Unknown**: `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/internalTexture.ts#L18)

The source of the texture data is unknown

***

### Url

> **Url**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/internalTexture.ts#L22)

Texture data comes from an URL
