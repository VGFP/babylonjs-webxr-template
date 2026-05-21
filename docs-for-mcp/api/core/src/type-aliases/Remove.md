[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Remove

# Type Alias: Remove\<A, B\>

> **Remove**\<`A`, `B`\> = `object`\[[`Empty`](Empty.md) *extends* `B` ? `0` : `1`\]

Defined in: [babylonjs-source/packages/dev/core/src/types.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/types.ts#L64)

Extracts from A what is not B

## Type Parameters

### A

`A`

### B

`B`

## Remarks

It does not remove duplicates (so Remove\<[0, 0, 0], [0, 0]\> yields [0]). This is intended and necessary behavior.
