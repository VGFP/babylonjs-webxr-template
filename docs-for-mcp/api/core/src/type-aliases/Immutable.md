[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Immutable

# Type Alias: Immutable\<T\>

> **Immutable**\<`T`\> = `T` *extends* `Primitive` ? `T` : `T` *extends* infer U[] ? `ReadonlyArray`\<`U`\> : [`DeepImmutable`](DeepImmutable.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/types.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/types.ts#L167)

Type modifier to make all the properties of an object Readonly

## Type Parameters

### T

`T`
