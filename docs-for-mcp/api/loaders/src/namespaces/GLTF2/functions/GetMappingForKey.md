[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / GetMappingForKey

# Function: GetMappingForKey()

> **GetMappingForKey**(`key`): [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`any`, `any`, `any`\> \| `undefined`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:1119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L1119)

This function will return the object accessor for the given key in the object model
If the key is not found, it will return undefined

## Parameters

### key

`string`

the key to get the mapping for, for example /materials/{}/emissiveFactor

## Returns

[`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`any`, `any`, `any`\> \| `undefined`

an object accessor for the given key, or undefined if the key is not found
