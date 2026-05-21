[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphPathConverterComponent

# Class: FlowGraphPathConverterComponent

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts#L15)

**`Experimental`**

A component that converts a path to an object accessor.

## Constructors

### Constructor

> **new FlowGraphPathConverterComponent**(`path`, `ownerBlock`): `FlowGraphPathConverterComponent`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts#L20)

**`Experimental`**

#### Parameters

##### path

`string`

##### ownerBlock

[`FlowGraphBlock`](FlowGraphBlock.md)

#### Returns

`FlowGraphPathConverterComponent`

## Properties

### ownerBlock

> **ownerBlock**: [`FlowGraphBlock`](FlowGraphBlock.md)

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts#L22)

**`Experimental`**

***

### path

> **path**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts#L21)

**`Experimental`**

***

### templatedInputs

> `readonly` **templatedInputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`FlowGraphInteger`](FlowGraphInteger.md)\>[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts#L19)

**`Experimental`**

The templated inputs for the provided path.

## Methods

### getAccessor()

> **getAccessor**(`pathConverter`, `context`): [`IObjectInfo`](../interfaces/IObjectInfo.md)\<[`IObjectAccessor`](../interfaces/IObjectAccessor.md)\<`any`, `any`, `any`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts#L44)

**`Experimental`**

Get the accessor for the path.

#### Parameters

##### pathConverter

[`IPathToObjectConverter`](../interfaces/IPathToObjectConverter.md)\<[`IObjectAccessor`](../interfaces/IObjectAccessor.md)\<`any`, `any`, `any`\>\>

the path converter to use to convert the path to an object accessor.

##### context

[`FlowGraphContext`](FlowGraphContext.md)

the context to use.

#### Returns

[`IObjectInfo`](../interfaces/IObjectInfo.md)\<[`IObjectAccessor`](../interfaces/IObjectAccessor.md)\<`any`, `any`, `any`\>\>

the accessor for the path.

#### Throws

if the value for a templated input is invalid.
