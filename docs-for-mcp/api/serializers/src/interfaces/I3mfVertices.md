[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / I3mfVertices

# Interface: I3mfVertices

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L169)

Container for vertices.
Matches the XML structure <vertices>\<vertex .../\>...</vertices>.

## Properties

### vertex

> **vertex**: [`I3mfVertex`](I3mfVertex.md)[]

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L171)

Array of vertices. Order matters because triangles reference indices.
