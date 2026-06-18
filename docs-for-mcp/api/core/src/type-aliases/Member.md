[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Member

# Type Alias: Member\<T, D\>

> **Member**\<`T`, `D`\> = `D` *extends* `0` ? `T` : `T` *extends* infer U[] ? `Member`\<`U`, `D` *extends* `number` ? [`Decrement`](Decrement.md)\<`D`\> : `null`\> : `T`

Defined in: [babylonjs-source/packages/dev/core/src/types.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/types.ts#L103)

Gets the type of an array's members

## Type Parameters

### T

`T`

### D

`D` = `null`
