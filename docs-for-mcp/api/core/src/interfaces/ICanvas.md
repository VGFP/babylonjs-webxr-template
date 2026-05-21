[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICanvas

# Interface: ICanvas

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:4](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L4)

Class used to abstract a canvas

## Properties

### height

> **height**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L13)

Canvas height.

***

### width

> **width**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:8](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L8)

Canvas width.

## Methods

### getContext()

> **getContext**(`contextType`, `contextAttributes?`): [`ICanvasRenderingContext`](ICanvasRenderingContext.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L21)

returns a drawing context on the canvas.

#### Parameters

##### contextType

`string`

context identifier.

##### contextAttributes?

`any`

context attributes.

#### Returns

[`ICanvasRenderingContext`](ICanvasRenderingContext.md)

ICanvasRenderingContext object.

***

### remove()?

> `optional` **remove**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L34)

Removes the canvas from the document.
Offscreen canvases don't have the remove function, so we need to make it optional.

#### Returns

`void`

***

### toDataURL()

> **toDataURL**(`mime`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L28)

returns a data URI containing a representation of the image in the format specified by the type parameter.

#### Parameters

##### mime

`string`

the image format.

#### Returns

`string`

string containing the requested data URI.
