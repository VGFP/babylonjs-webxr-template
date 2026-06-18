[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DeepImmutable

# Type Alias: DeepImmutable\<T\>

> **DeepImmutable**\<`T`\> = `T` *extends* `Primitive` ? `T` : `T` *extends* infer U[] ? `DeepImmutableArray`\<`U`\> : [`DeepImmutableObject`](DeepImmutableObject.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/types.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/types.ts#L177)

Type modifier to make all the properties of an object Readonly recursively

## Type Parameters

### T

`T`
