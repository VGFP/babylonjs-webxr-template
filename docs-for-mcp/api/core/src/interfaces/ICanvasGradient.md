[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICanvasGradient

# Interface: ICanvasGradient

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:197](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/ICanvas.ts#L197)

Class used to abstract a canvas gradient

## Methods

### addColorStop()

> **addColorStop**(`offset`, `color`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/ICanvas.ts:203](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/ICanvas.ts#L203)

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
