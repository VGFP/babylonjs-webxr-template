[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeMaterialOptimizer

# Class: NodeMaterialOptimizer

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Optimizers/nodeMaterialOptimizer.ts:6](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Optimizers/nodeMaterialOptimizer.ts#L6)

Root class for all node material optimizers

## Constructors

### Constructor

> **new NodeMaterialOptimizer**(): `NodeMaterialOptimizer`

#### Returns

`NodeMaterialOptimizer`

## Methods

### optimize()

> **optimize**(`_vertexOutputNodes`, `_fragmentOutputNodes`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Optimizers/nodeMaterialOptimizer.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Optimizers/nodeMaterialOptimizer.ts#L12)

Function used to optimize a NodeMaterial graph

#### Parameters

##### \_vertexOutputNodes

[`NodeMaterialBlock`](NodeMaterialBlock.md)[]

defines the list of output nodes for the vertex shader

##### \_fragmentOutputNodes

[`NodeMaterialBlock`](NodeMaterialBlock.md)[]

defines the list of output nodes for the fragment shader

#### Returns

`void`
