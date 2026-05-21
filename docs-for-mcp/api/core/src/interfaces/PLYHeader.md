[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PLYHeader

# Interface: PLYHeader

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts:310](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts#L310)

meta info on Splat file

## Properties

### buffer

> **buffer**: `ArrayBuffer`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts:342](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts#L342)

buffer for the data view

***

### chunkCount

> **chunkCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts:318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts#L318)

number of spatial chunks for compressed ply

***

### chunkProperties

> **chunkProperties**: [`PlyProperty`](../type-aliases/PlyProperty.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts:334](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts#L334)

array listing properties per chunk

***

### dataView

> **dataView**: `DataView`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts:338](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts#L338)

data view for parsing chunks and vertices

***

### rowChunkLength

> **rowChunkLength**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts:326](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts#L326)

length in bytes of the chunk

***

### rowVertexLength

> **rowVertexLength**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts:322](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts#L322)

length in bytes of the vertex info

***

### shBuffer

> **shBuffer**: `ArrayBuffer` \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts:354](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts#L354)

buffer for SH coefficients

***

### shCoefficientCount

> **shCoefficientCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts:350](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts#L350)

number of coefficient per splat

***

### shDegree

> **shDegree**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts:346](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts#L346)

degree of SH coefficients

***

### vertexCount

> **vertexCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts:314](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts#L314)

number of splats

***

### vertexProperties

> **vertexProperties**: [`PlyProperty`](../type-aliases/PlyProperty.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts:330](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.ts#L330)

array listing properties per vertex
