[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / getRichTypeFromValue

# Function: getRichTypeFromValue()

> **getRichTypeFromValue**\<`T`\>(`value`): [`RichType`](../classes/RichType.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphRichTypes.pure.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphRichTypes.pure.ts#L100)

Given a value, try to deduce its rich type.

## Type Parameters

### T

`T`

## Parameters

### value

`T`

the value to deduce the rich type from

## Returns

[`RichType`](../classes/RichType.md)\<`T`\>

the value's rich type, or RichTypeAny if the type could not be deduced.
