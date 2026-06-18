[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / ISOGLODMetadata

# Interface: ISOGLODMetadata

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L62)

Parsed contents of a PlayCanvas-style `lod-meta.json` file.

## Properties

### environment?

> `optional` **environment?**: `string`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L68)

Optional always-on environment `.sog` bundle, relative to the metadata file.

***

### filenames

> **filenames**: `string`[]

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L66)

SOG `meta.json` paths, relative to the metadata file, indexed by `ISOGLODEntry.file`.

***

### lodLevels

> **lodLevels**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L64)

Number of LOD levels (0 = highest detail).

***

### tree

> **tree**: `ISOGLODNode`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L70)

Root of the LOD octree.
