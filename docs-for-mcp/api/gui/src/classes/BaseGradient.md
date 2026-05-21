[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / BaseGradient

# Abstract Class: BaseGradient

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts#L24)

Class that serves as a base for all the gradients created from context.

## Extended by

- [`LinearGradient`](LinearGradient.md)
- [`RadialGradient`](RadialGradient.md)

## Constructors

### Constructor

> **new BaseGradient**(): `BaseGradient`

#### Returns

`BaseGradient`

## Accessors

### colorStops

#### Get Signature

> **get** **colorStops**(): [`GradientColorStop`](../type-aliases/GradientColorStop.md)[]

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts#L89)

Color stops of the gradient

##### Returns

[`GradientColorStop`](../type-aliases/GradientColorStop.md)[]

## Methods

### addColorStop()

> **addColorStop**(`offset`, `color`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts#L64)

Adds a new color stop to the gradient.

#### Parameters

##### offset

`number`

the offset of the stop on the gradient. Should be between 0 and 1

##### color

`string`

the color of the stop

#### Returns

`void`

***

### clearColorStops()

> **clearColorStops**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts#L81)

Removes all color stops from the gradient

#### Returns

`void`

***

### getCanvasGradient()

> **getCanvasGradient**(`context`): `CanvasGradient`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts#L49)

If there are any changes or the context changed, regenerate the canvas gradient object. Else,
reuse the existing gradient.

#### Parameters

##### context

[`ICanvasRenderingContext`](../../../core/src/interfaces/ICanvasRenderingContext.md)

the context to create the gradient from

#### Returns

`CanvasGradient`

the canvas gradient

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts#L96)

#### Returns

`string`

Type of the gradient

***

### parse()

> **parse**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts#L113)

Parse from json object

#### Parameters

##### serializationObject

`any`

object to parse from

#### Returns

`void`

***

### removeColorStop()

> **removeColorStop**(`offset`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts#L73)

Removes an existing color stop with the specified offset from the gradient

#### Parameters

##### offset

`number`

the offset of the stop to be removed

#### Returns

`void`

***

### serialize()

> **serialize**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts#L104)

Serialize into a json object

#### Parameters

##### serializationObject

`any`

object to serialize into

#### Returns

`void`
