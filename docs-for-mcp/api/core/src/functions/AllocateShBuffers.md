[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AllocateShBuffers

# Function: AllocateShBuffers()

> **AllocateShBuffers**(`textureCount`, `bytesEach`): `Uint8Array`\<`ArrayBufferLike`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:3339](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L3339)

Allocates SH texture buffers pre-filled with 128 (the neutral encoding of ~0.0 in the
shader's decompose() function). Padding bytes beyond the actual coefficients in the last
texture are read as higher-order SH bands when the mesh is added to a compound with a
higher degree; zero would decode to -1.0 instead, producing wrong colors.

## Parameters

### textureCount

`number`

number of SH textures to allocate

### bytesEach

`number`

byte size of each texture buffer

## Returns

`Uint8Array`\<`ArrayBufferLike`\>[]

array of initialized Uint8Array buffers
