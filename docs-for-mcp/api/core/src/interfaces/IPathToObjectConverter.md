[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IPathToObjectConverter

# Interface: IPathToObjectConverter\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/ObjectModel/objectModelInterfaces.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/ObjectModel/objectModelInterfaces.ts#L20)

Interface for a converter that takes a string path and transforms
it into an ObjectAccessorContainer.

## Type Parameters

### T

`T`

## Methods

### convert()

> **convert**(`path`): [`IObjectInfo`](IObjectInfo.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/ObjectModel/objectModelInterfaces.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/ObjectModel/objectModelInterfaces.ts#L26)

Convert a path to an object that can be used to access properties of a base object

#### Parameters

##### path

`string`

the path to convert

#### Returns

[`IObjectInfo`](IObjectInfo.md)\<`T`\>

an object that can be used to access properties of a base object
