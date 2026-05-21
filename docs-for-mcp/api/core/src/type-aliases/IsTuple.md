[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IsTuple

# Type Alias: IsTuple\<T\>

> **IsTuple**\<`T`\> = `T` *extends* \[\] ? `false` : `T` *extends* \[infer Head, `...(infer Rest)`\] ? `true` : `false`

Defined in: [babylonjs-source/packages/dev/core/src/types.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/types.ts#L113)

Whether T is a tuple

## Type Parameters

### T

`T`
