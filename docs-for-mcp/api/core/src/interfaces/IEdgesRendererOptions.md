[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IEdgesRendererOptions

# Interface: IEdgesRendererOptions

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/edgesRenderer.pure.ts#L63)

Defines the additional options of the edges renderer

## Properties

### applyTessellation?

> `optional` **applyTessellation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.pure.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/edgesRenderer.pure.ts#L90)

Gets or sets a boolean indicating that tessellation should be applied before finding the edges. You may need to activate this option if your geometry is a bit
unusual, like having a vertex of a triangle in-between two vertices of an edge of another triangle. It happens often when using CSG to construct meshes.
This option is used only if useAlternateEdgeFinder = true

***

### epsilonVertexAligned?

> `optional` **epsilonVertexAligned?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.pure.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/edgesRenderer.pure.ts#L97)

The limit under which 3 vertices are considered to be aligned. 3 vertices PQR are considered aligned if distance(PQ) + distance(QR) - distance(PR) < epsilonVertexAligned
The default value is 1e-6
This option is used only if useAlternateEdgeFinder = true

***

### epsilonVertexMerge?

> `optional` **epsilonVertexMerge?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.pure.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/edgesRenderer.pure.ts#L83)

During edges processing, the vertices are merged if they are close enough: epsilonVertexMerge is the limit within which vertices are considered to be equal.
The default value is 1e-6
This option is used only if useAlternateEdgeFinder = true

***

### removeDegeneratedTriangles?

> `optional` **removeDegeneratedTriangles?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/edgesRenderer.pure.ts#L103)

Gets or sets a boolean indicating that degenerated triangles should not be processed.
Degenerated triangles are triangles that have 2 or 3 vertices with the same coordinates

***

### useAlternateEdgeFinder?

> `optional` **useAlternateEdgeFinder?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/edgesRenderer.pure.ts#L68)

Gets or sets a boolean indicating that the alternate edge finder algorithm must be used
If not defined, the default value is true

***

### useFastVertexMerger?

> `optional` **useFastVertexMerger?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/edgesRenderer.pure.ts#L76)

Gets or sets a boolean indicating that the vertex merger fast processing must be used.
If not defined, the default value is true.
You should normally leave it undefined (or set it to true), except if you see some artifacts in the edges rendering (can happen with complex geometries)
This option is used only if useAlternateEdgeFinder = true
