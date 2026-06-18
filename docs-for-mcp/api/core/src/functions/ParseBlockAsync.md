[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ParseBlockAsync

# Function: ParseBlockAsync()

> **ParseBlockAsync**(`serializationObject`, `parseOptions`): `Promise`\<[`FlowGraphBlock`](../classes/FlowGraphBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphParser.ts:352](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphParser.ts#L352)

Parses a block from a serialization object
This function is async due to the factory method that is used to create the block's class. If you load the class externally use ParseBlockWithClassType

## Parameters

### serializationObject

[`ISerializedFlowGraphBlock`](../interfaces/ISerializedFlowGraphBlock.md)

the object to parse from

### parseOptions

[`IFlowGraphBlockParseOptions`](../interfaces/IFlowGraphBlockParseOptions.md)

options for parsing the block

## Returns

`Promise`\<[`FlowGraphBlock`](../classes/FlowGraphBlock.md)\>

the parsed block
