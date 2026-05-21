[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GenerateBase64StringFromPixelData

# Function: GenerateBase64StringFromPixelData()

> **GenerateBase64StringFromPixelData**(`pixels`, `size`, `invertY?`): [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/copyTools.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/copyTools.ts#L14)

Transform some pixel data to a base64 string

## Parameters

### pixels

`ArrayBufferView`

defines the pixel data to transform to base64

### size

[`ISize`](../interfaces/ISize.md)

defines the width and height of the (texture) data

### invertY?

`boolean` = `false`

true if the data must be inverted for the Y coordinate during the conversion

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

The base64 encoded string or null
