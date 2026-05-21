[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IEdgesRendererOptions

# Interface: IEdgesRendererOptions

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/edgesRenderer.ts#L140)

Defines the additional options of the edges renderer

## Properties

### applyTessellation?

> `optional` **applyTessellation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/edgesRenderer.ts#L167)

Gets or sets a boolean indicating that tessellation should be applied before finding the edges. You may need to activate this option if your geometry is a bit
unusual, like having a vertex of a triangle in-between two vertices of an edge of another triangle. It happens often when using CSG to construct meshes.
This option is used only if useAlternateEdgeFinder = true

***

### epsilonVertexAligned?

> `optional` **epsilonVertexAligned?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.ts:174](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/edgesRenderer.ts#L174)

The limit under which 3 vertices are considered to be aligned. 3 vertices PQR are considered aligned if distance(PQ) + distance(QR) - distance(PR) < epsilonVertexAligned
The default value is 1e-6
This option is used only if useAlternateEdgeFinder = true

***

### epsilonVertexMerge?

> `optional` **epsilonVertexMerge?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/edgesRenderer.ts#L160)

During edges processing, the vertices are merged if they are close enough: epsilonVertexMerge is the limit within which vertices are considered to be equal.
The default value is 1e-6
This option is used only if useAlternateEdgeFinder = true

***

### removeDegeneratedTriangles?

> `optional` **removeDegeneratedTriangles?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.ts:180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/edgesRenderer.ts#L180)

Gets or sets a boolean indicating that degenerated triangles should not be processed.
Degenerated triangles are triangles that have 2 or 3 vertices with the same coordinates

***

### useAlternateEdgeFinder?

> `optional` **useAlternateEdgeFinder?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/edgesRenderer.ts#L145)

Gets or sets a boolean indicating that the alternate edge finder algorithm must be used
If not defined, the default value is true

***

### useFastVertexMerger?

> `optional` **useFastVertexMerger?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/edgesRenderer.ts#L153)

Gets or sets a boolean indicating that the vertex merger fast processing must be used.
If not defined, the default value is true.
You should normally leave it undefined (or set it to true), except if you see some artifacts in the edges rendering (can happen with complex geometries)
This option is used only if useAlternateEdgeFinder = true
