[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphContextParseOptions

# Interface: IFlowGraphContextParseOptions

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L62)

Options for parsing a context.

## Properties

### graph

> `readonly` **graph**: [`FlowGraph`](../classes/FlowGraph.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L75)

The graph that the context is being parsed in.

***

### valueParseFunction?

> `readonly` `optional` **valueParseFunction?**: (`key`, `serializationObject`, `assetsContainer`, `scene`) => `any`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphContext.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphContext.ts#L71)

A function that parses a value from a serialization object.

#### Parameters

##### key

`string`

the key of the value

##### serializationObject

`any`

the object containing the value

##### assetsContainer

`IAssetContainer`

the assets container

##### scene

[`Scene`](../classes/Scene.md)

the current scene

#### Returns

`any`
