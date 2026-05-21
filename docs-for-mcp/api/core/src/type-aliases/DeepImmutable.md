[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DeepImmutable

# Type Alias: DeepImmutable\<T\>

> **DeepImmutable**\<`T`\> = `T` *extends* `Primitive` ? `T` : `T` *extends* infer U[] ? `DeepImmutableArray`\<`U`\> : [`DeepImmutableObject`](DeepImmutableObject.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/types.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/types.ts#L177)

Type modifier to make all the properties of an object Readonly recursively

## Type Parameters

### T

`T`
