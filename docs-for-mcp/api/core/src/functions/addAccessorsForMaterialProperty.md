[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / addAccessorsForMaterialProperty

# Function: addAccessorsForMaterialProperty()

> **addAccessorsForMaterialProperty**(`setCallback`, `targetKey?`): (`target`, `propertyKey`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/decorators.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/decorators.ts#L168)

Adds accessors for a material property.

## Parameters

### setCallback

`string`

The name of the callback function to call when the property is set.

### targetKey?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\> = `null`

The key to use for the target property (defaults to the original property key).

## Returns

A property decorator.

(`target`, `propertyKey`) => `void`
