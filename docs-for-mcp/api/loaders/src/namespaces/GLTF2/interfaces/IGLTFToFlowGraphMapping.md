[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / IGLTFToFlowGraphMapping

# Interface: IGLTFToFlowGraphMapping

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/declarationMapper.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/declarationMapper.ts#L62)

## Properties

### blocks

> **blocks**: `string`[]

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/declarationMapper.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/declarationMapper.ts#L68)

The type of the FlowGraph block(s).
Typically will be a single element in an array.
When adding blocks defined in this module use the KHR_interactivity prefix.

***

### configuration?

> `optional` **configuration?**: `object`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/declarationMapper.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/declarationMapper.ts#L99)

The configuration of the glTF node mapped to the FlowGraph block.
This information is usually passed to the constructor of the block.

#### Index Signature

\[`originName`: `string`\]: `IGLTFToFlowGraphMappingObject`

***

### extraProcessor?

> `optional` **extraProcessor?**: (`gltfBlock`, `declaration`, `mapping`, `parser`, `serializedObjects`, `context`, `globalGLTF?`) => [`ISerializedFlowGraphBlock`](../../../../../core/src/interfaces/ISerializedFlowGraphBlock.md)[]

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/declarationMapper.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/declarationMapper.ts#L163)

This is used if we need extra information for the constructor/options that is not provided directly by the glTF node.
This function can return more than one node, if extra nodes are needed for this block to function correctly.
Returning more than one block will usually happen when a json pointer was provided.

#### Parameters

##### gltfBlock

`IKHRInteractivity_Node`

the glTF node

##### declaration

`IKHRInteractivity_Declaration`

the declaration object

##### mapping

`IGLTFToFlowGraphMapping`

the mapping object

##### parser

[`InteractivityGraphToFlowGraphParser`](../classes/InteractivityGraphToFlowGraphParser.md)

the interactivity graph parser

##### serializedObjects

[`ISerializedFlowGraphBlock`](../../../../../core/src/interfaces/ISerializedFlowGraphBlock.md)[]

the serialized objects

##### context

[`ISerializedFlowGraphContext`](../../../../../core/src/interfaces/ISerializedFlowGraphContext.md)

the serialized flow graph context

##### globalGLTF?

[`IGLTF`](IGLTF.md)

the global gltf object

#### Returns

[`ISerializedFlowGraphBlock`](../../../../../core/src/interfaces/ISerializedFlowGraphBlock.md)[]

an array of serialized nodes that will be added to the graph.

***

### inputs?

> `optional` **inputs?**: `object`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/declarationMapper.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/declarationMapper.ts#L72)

The inputs of the glTF node mapped to the FlowGraph block.

#### flows?

> `optional` **flows?**: `object`

The flow inputs of the glTF node mapped to the FlowGraph block.

##### Index Signature

\[`originName`: `string`\]: `IGLTFToFlowGraphMappingObject`

#### values?

> `optional` **values?**: `object`

The value inputs of the glTF node mapped to the FlowGraph block.

##### Index Signature

\[`originName`: `string`\]: `IGLTFToFlowGraphMappingObject`

***

### interBlockConnectors?

> `optional` **interBlockConnectors?**: `object`[]

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/declarationMapper.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/declarationMapper.ts#L111)

The connections between two or more blocks.
This is used to connect the blocks in the graph

#### input

> **input**: `string`

The name of the input connection in the first block.

#### inputBlockIndex

> **inputBlockIndex**: `number`

The index of the block in the array of blocks that corresponds to the input.

#### isVariable?

> `optional` **isVariable?**: `boolean`

If the connection is a variable connection or a flow connection.

#### output

> **output**: `string`

The name of the output connection in the second block.

#### outputBlockIndex

> **outputBlockIndex**: `number`

The index of the block in the array of blocks that corresponds to the output.

***

### outputs?

> `optional` **outputs?**: `object`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/declarationMapper.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/declarationMapper.ts#L85)

The outputs of the glTF node mapped to the FlowGraph block.

#### flows?

> `optional` **flows?**: `object`

The flow outputs of the glTF node mapped to the FlowGraph block.

##### Index Signature

\[`originName`: `string`\]: `IGLTFToFlowGraphMappingObject`

#### values?

> `optional` **values?**: `object`

The value outputs of the glTF node mapped to the FlowGraph block.

##### Index Signature

\[`originName`: `string`\]: `IGLTFToFlowGraphMappingObject`

***

### typeToTypeMapping?

> `optional` **typeToTypeMapping?**: `object`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/declarationMapper.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/declarationMapper.ts#L105)

If we generate more than one block for a single glTF node, this mapping will be used to map
between the flowGraph classes.

#### Index Signature

\[`originName`: `string`\]: `IGLTFToFlowGraphMappingObject`

***

### validation?

> `optional` **validation?**: (`gltfBlock`, `interactivityGraph`, `glTFObject?`) => `object`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/declarationMapper.ts:147](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/declarationMapper.ts#L147)

This optional function will allow to validate the node, according to the glTF specs.
For example, if a node has a configuration object, it must be present and correct.
This is a basic node-based validation.
This function is expected to return false and log the error if the node is not valid.
Note that this function can also modify the node, if needed.

#### Parameters

##### gltfBlock

`IKHRInteractivity_Node`

the glTF node to validate

##### interactivityGraph

`IKHRInteractivity_Graph`

the interactivity graph

##### glTFObject?

[`IGLTF`](IGLTF.md)

the glTF object

#### Returns

`object`

true if validated, false if not.

##### error?

> `optional` **error?**: `string`

##### valid

> **valid**: `boolean`
