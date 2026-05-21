[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICanvasGradient

# Interface: ICanvasGradient

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:197](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L197)

Class used to abstract a canvas gradient

## Methods

### addColorStop()

> **addColorStop**(`offset`, `color`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:203](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/ICanvas.ts#L203)

adds a new color stop, defined by an offset and a color, to a given canvas gradient.

#### Parameters

##### offset

`number`

A number between 0 and 1, inclusive, representing the position of the color stop. 0 represents the start of the gradient and 1 represents the end.

##### color

`string`

value representing the color of the stop.

#### Returns

`void`
