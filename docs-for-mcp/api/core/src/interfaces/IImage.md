[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IImage

# Interface: IImage

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L40)

Class used to abstract am image to use with the canvas and its context

## Properties

### crossOrigin

> **crossOrigin**: `string` \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L80)

provides support for CORS, defining how the element handles crossorigin requests,
thereby enabling the configuration of the CORS requests for the element's fetched data.

***

### height

> `readonly` **height**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L64)

Image height.

***

### naturalHeight

> `readonly` **naturalHeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L69)

The original height of the image resource before sizing.

***

### naturalWidth

> `readonly` **naturalWidth**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L74)

The original width of the image resource before sizing.

***

### onerror

> **onerror**: ((`this`, `ev`) => `any`) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L49)

Error callback.

***

### onload

> **onload**: ((`this`, `ev`) => `any`) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L44)

onload callback.

***

### referrerPolicy

> **referrerPolicy**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L86)

provides support for referrer policy on xhr load request,
it is used to control the request header.

***

### src

> **src**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L54)

Image source.

***

### width

> `readonly` **width**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L59)

Image width.
