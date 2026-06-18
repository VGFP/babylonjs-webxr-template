[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PLYHeader

# Interface: PLYHeader

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:354](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L354)

meta info on Splat file

## Properties

### buffer

> **buffer**: `ArrayBuffer`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:386](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L386)

buffer for the data view

***

### chunkCount

> **chunkCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:362](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L362)

number of spatial chunks for compressed ply

***

### chunkProperties

> **chunkProperties**: [`PlyProperty`](../type-aliases/PlyProperty.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:378](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L378)

array listing properties per chunk

***

### dataView

> **dataView**: `DataView`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:382](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L382)

data view for parsing chunks and vertices

***

### rowChunkLength

> **rowChunkLength**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:370](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L370)

length in bytes of the chunk

***

### rowVertexLength

> **rowVertexLength**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:366](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L366)

length in bytes of the vertex info

***

### shBuffer

> **shBuffer**: `ArrayBuffer` \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:398](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L398)

buffer for SH coefficients

***

### shCoefficientCount

> **shCoefficientCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:394](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L394)

number of coefficient per splat

***

### shDegree

> **shDegree**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:390](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L390)

degree of SH coefficients

***

### vertexCount

> **vertexCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:358](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L358)

number of splats

***

### vertexProperties

> **vertexProperties**: [`PlyProperty`](../type-aliases/PlyProperty.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:374](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L374)

array listing properties per vertex
