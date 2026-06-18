[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ColorGradient

# Class: ColorGradient

Defined in: [babylonjs-source/packages/dev/core/src/Misc/gradients.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/gradients.ts#L12)

Class used to store color4 gradient

## Implements

- [`IValueGradient`](../interfaces/IValueGradient.md)

## Constructors

### Constructor

> **new ColorGradient**(`gradient`, `color1`, `color2?`): `ColorGradient`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/gradients.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/gradients.ts#L19)

Creates a new color4 gradient

#### Parameters

##### gradient

`number`

gets or sets the gradient value (between 0 and 1)

##### color1

[`Color4`](Color4.md)

gets or sets first associated color

##### color2?

[`Color4`](Color4.md)

gets or sets first second color

#### Returns

`ColorGradient`

## Properties

### color1

> **color1**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/gradients.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/gradients.ts#L27)

Gets or sets first associated color

***

### color2?

> `optional` **color2?**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/gradients.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/gradients.ts#L31)

Gets or sets second associated color

***

### gradient

> **gradient**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/gradients.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/gradients.ts#L23)

Gets or sets the gradient value (between 0 and 1)

#### Implementation of

[`IValueGradient`](../interfaces/IValueGradient.md).[`gradient`](../interfaces/IValueGradient.md#gradient)

## Methods

### getColorToRef()

> **getColorToRef**(`result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/gradients.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/gradients.ts#L39)

Will get a color picked randomly between color1 and color2.
If color2 is undefined then color1 will be used

#### Parameters

##### result

[`Color4`](Color4.md)

defines the target Color4 to store the result in

#### Returns

`void`
