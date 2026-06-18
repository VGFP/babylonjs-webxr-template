[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Immutable

# Type Alias: Immutable\<T\>

> **Immutable**\<`T`\> = `T` *extends* `Primitive` ? `T` : `T` *extends* infer U[] ? `ReadonlyArray`\<`U`\> : [`DeepImmutable`](DeepImmutable.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/types.ts:167](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/types.ts#L167)

Type modifier to make all the properties of an object Readonly

## Type Parameters

### T

`T`
