[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlattenArray

# Type Alias: FlattenArray\<A, D\>

> **FlattenArray**\<`A`, `D`\> = `A` *extends* infer U[] ? [`Member`](Member.md)\<`Exclude`\<`U`, `A`\>, `D`\>[] : `A` *extends* `unknown`[] ? `{ [K in keyof A]: Member<A[K], D> }` : `A`

Defined in: [babylonjs-source/packages/dev/core/src/types.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/types.ts#L108)

Flattens an array

## Type Parameters

### A

`A` *extends* `unknown`[]

### D

`D` = `null`
