[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphPathConverter

# ~~Class: FlowGraphPathConverter~~

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphPathConverter.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphPathConverter.ts#L9)

## Deprecated

Avoid using this on the flow-graph (glTF only)
A path converter that converts a path on the flow graph context variables to an object accessor.

## Implements

- [`IPathToObjectConverter`](../interfaces/IPathToObjectConverter.md)\<[`IObjectAccessor`](../interfaces/IObjectAccessor.md)\>

## Constructors

### Constructor

> **new FlowGraphPathConverter**(`_context`, `_separator?`): `FlowGraphPathConverter`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphPathConverter.ts:10](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphPathConverter.ts#L10)

#### Parameters

##### \_context

[`FlowGraphContext`](FlowGraphContext.md)

##### \_separator?

`string` = `"/"`

#### Returns

`FlowGraphPathConverter`

## Methods

### ~~convert()~~

> **convert**(`path`): [`IObjectInfo`](../interfaces/IObjectInfo.md)\<[`IObjectAccessor`](../interfaces/IObjectAccessor.md)\<`any`, `any`, `any`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphPathConverter.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/flowGraphPathConverter.ts#L15)

Convert a path to an object that can be used to access properties of a base object

#### Parameters

##### path

`string`

the path to convert

#### Returns

[`IObjectInfo`](../interfaces/IObjectInfo.md)\<[`IObjectAccessor`](../interfaces/IObjectAccessor.md)\<`any`, `any`, `any`\>\>

an object that can be used to access properties of a base object

#### Implementation of

[`IPathToObjectConverter`](../interfaces/IPathToObjectConverter.md).[`convert`](../interfaces/IPathToObjectConverter.md#convert)
