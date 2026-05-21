[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FactorGradient

# Class: FactorGradient

Defined in: [babylonjs-source/packages/dev/core/src/Misc/gradients.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/gradients.ts#L69)

Class used to store factor gradient

## Implements

- [`IValueGradient`](../interfaces/IValueGradient.md)

## Constructors

### Constructor

> **new FactorGradient**(`gradient`, `factor1`, `factor2?`): `FactorGradient`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/gradients.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/gradients.ts#L76)

Creates a new factor gradient

#### Parameters

##### gradient

`number`

gets or sets the gradient value (between 0 and 1)

##### factor1

`number`

gets or sets first associated factor

##### factor2?

`number`

gets or sets second associated factor

#### Returns

`FactorGradient`

## Properties

### factor1

> **factor1**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/gradients.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/gradients.ts#L84)

Gets or sets first associated factor

***

### factor2?

> `optional` **factor2?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/gradients.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/gradients.ts#L88)

Gets or sets second associated factor

***

### gradient

> **gradient**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/gradients.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/gradients.ts#L80)

Gets or sets the gradient value (between 0 and 1)

#### Implementation of

[`IValueGradient`](../interfaces/IValueGradient.md).[`gradient`](../interfaces/IValueGradient.md#gradient)

## Methods

### getFactor()

> **getFactor**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/gradients.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/gradients.ts#L96)

Will get a number picked randomly between factor1 and factor2.
If factor2 is undefined then factor1 will be used

#### Returns

`number`

the picked number
