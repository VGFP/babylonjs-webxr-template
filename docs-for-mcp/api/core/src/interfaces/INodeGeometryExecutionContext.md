[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / INodeGeometryExecutionContext

# Interface: INodeGeometryExecutionContext

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts:4](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts#L4)

Interface used to convey context through execution nodes

## Methods

### getExecutionFaceIndex()

> **getExecutionFaceIndex**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts#L14)

Gets the current face index in the current flow

#### Returns

`number`

the current face index

***

### getExecutionIndex()

> **getExecutionIndex**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts#L9)

Gets the current vertex index in the current flow

#### Returns

`number`

the current index

***

### getExecutionLoopIndex()

> **getExecutionLoopIndex**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts#L19)

Gets the current loop index in the current flow

#### Returns

`number`

the current loop index

***

### getOverrideNormalsContextualValue()?

> `optional` **getOverrideNormalsContextualValue**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts#L31)

Gets the value associated with a contextual normals

#### Returns

`any`

the value associated with the source

***

### getOverridePositionsContextualValue()?

> `optional` **getOverridePositionsContextualValue**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts#L25)

Gets the value associated with a contextual positions

#### Returns

`any`

the value associated with the source

***

### getOverrideUVs1ContextualValue()?

> `optional` **getOverrideUVs1ContextualValue**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts#L37)

Gets the value associated with a contextual UV1 set

#### Returns

`any`

the value associated with the source
