[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Remove

# Type Alias: Remove\<A, B\>

> **Remove**\<`A`, `B`\> = `object`\[[`Empty`](Empty.md) *extends* `B` ? `0` : `1`\]

Defined in: [babylonjs-source/packages/dev/core/src/types.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/types.ts#L64)

Extracts from A what is not B

## Type Parameters

### A

`A`

### B

`B`

## Remarks

It does not remove duplicates (so Remove\<[0, 0, 0], [0, 0]\> yields [0]). This is intended and necessary behavior.
