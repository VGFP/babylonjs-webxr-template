[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlattenTuple

# Type Alias: FlattenTuple\<A\>

> **FlattenTuple**\<`A`\> = `A` *extends* \[infer U, `...(infer Rest)`\] ? `U` *extends* `unknown`[] ? \[`...U`, `...FlattenTuple<Rest>`\] : \[`U`, `...FlattenTuple<Rest>`\] : \[\]

Defined in: [babylonjs-source/packages/dev/core/src/types.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/types.ts#L118)

Flattens a tuple

## Type Parameters

### A

`A` *extends* `unknown`[]
