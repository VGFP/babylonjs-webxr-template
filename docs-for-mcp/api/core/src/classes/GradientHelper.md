[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GradientHelper

# Class: GradientHelper

Defined in: [babylonjs-source/packages/dev/core/src/Misc/gradients.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/gradients.ts#L108)

Helper used to simplify some generic gradient tasks

## Constructors

### Constructor

> **new GradientHelper**(): `GradientHelper`

#### Returns

`GradientHelper`

## Methods

### GetCurrentGradient()

> `static` **GetCurrentGradient**(`ratio`, `gradients`, `updateFunc`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/gradients.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/gradients.ts#L115)

Gets the current gradient from an array of IValueGradient

#### Parameters

##### ratio

`number`

defines the current ratio to get

##### gradients

[`IValueGradient`](../interfaces/IValueGradient.md)[]

defines the array of IValueGradient

##### updateFunc

(`current`, `next`, `scale`) => `void`

defines the callback function used to get the final value from the selected gradients

#### Returns

`void`
