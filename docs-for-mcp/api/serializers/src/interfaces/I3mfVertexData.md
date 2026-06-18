[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / I3mfVertexData

# Interface: I3mfVertexData

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.types.ts:9](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.types.ts#L9)

Interface used to define object data independaly of framework

## Properties

### colors?

> `optional` **colors?**: [`ThreeMfFloatArray`](../type-aliases/ThreeMfFloatArray.md) \| `null`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.types.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.types.ts#L25)

An array of the r, g, b, a, color of each vertex  [...., r, g, b, a, .....]

***

### indices

> **indices**: [`ThreeMfIndicesArray`](../type-aliases/ThreeMfIndicesArray.md) \| `null`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.types.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.types.ts#L17)

An array of i, j, k the three vertex indices required for each triangular facet  [...., i, j, k .....]

***

### normals?

> `optional` **normals?**: [`ThreeMfFloatArray`](../type-aliases/ThreeMfFloatArray.md) \| `null`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.types.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.types.ts#L21)

An array of the x, y, z normal vector of each vertex  [...., x, y, z, .....]

***

### positions

> **positions**: [`ThreeMfFloatArray`](../type-aliases/ThreeMfFloatArray.md) \| `null`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.types.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.types.ts#L13)

An array of the x, y, z position of each vertex  [...., x, y, z, .....]
