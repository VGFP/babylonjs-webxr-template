[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISubdivideOptions

# Interface: ISubdivideOptions

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.subdivide.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/mesh.vertexData.subdivide.ts#L14)

Interface used to configure the subdivision process

## Properties

### flatOnly?

> `optional` **flatOnly?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.subdivide.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/mesh.vertexData.subdivide.ts#L16)

Apply only flat subdivision - false by default

***

### preserveEdges?

> `optional` **preserveEdges?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.subdivide.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/mesh.vertexData.subdivide.ts#L22)

Should edges / breaks in geometry be ignored during subdivision? - false by default

***

### split?

> `optional` **split?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.subdivide.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/mesh.vertexData.subdivide.ts#L18)

Split all triangles at edges shared by coplanar triangles - true by default

***

### uvSmooth?

> `optional` **uvSmooth?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.subdivide.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/mesh.vertexData.subdivide.ts#L20)

Should UV values be averaged during subdivision - false by default

***

### weight?

> `optional` **weight?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.vertexData.subdivide.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/mesh.vertexData.subdivide.ts#L24)

How much to weigh favoring heavy corners vs favoring Loop's formula - 1 by default
