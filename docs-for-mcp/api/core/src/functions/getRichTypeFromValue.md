[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / getRichTypeFromValue

# Function: getRichTypeFromValue()

> **getRichTypeFromValue**\<`T`\>(`value`): [`RichType`](../classes/RichType.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphRichTypes.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphRichTypes.ts#L110)

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
