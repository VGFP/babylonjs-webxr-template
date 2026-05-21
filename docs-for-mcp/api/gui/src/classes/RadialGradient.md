[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / RadialGradient

# Class: RadialGradient

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts:10](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts#L10)

Gradient formed from two circles with their own centers and radius.
The coordinates of the circles centers are relative to the canvas' space, not to any control's space.

## See

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient

## Extends

- [`BaseGradient`](BaseGradient.md)

## Constructors

### Constructor

> **new RadialGradient**(`x0?`, `y0?`, `r0?`, `x1?`, `y1?`, `r1?`): `RadialGradient`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts#L27)

Creates a new radial gradient

#### Parameters

##### x0?

`number`

x coordinate of the first circle's center

##### y0?

`number`

y coordinate of the first circle's center

##### r0?

`number`

radius of the first circle

##### x1?

`number`

x coordinate of the second circle's center

##### y1?

`number`

y coordinate of the second circle's center

##### r1?

`number`

radius of the second circle

#### Returns

`RadialGradient`

#### Overrides

[`BaseGradient`](BaseGradient.md).[`constructor`](BaseGradient.md#constructor)

## Accessors

### colorStops

#### Get Signature

> **get** **colorStops**(): [`GradientColorStop`](../type-aliases/GradientColorStop.md)[]

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts#L89)

Color stops of the gradient

##### Returns

[`GradientColorStop`](../type-aliases/GradientColorStop.md)[]

#### Inherited from

[`BaseGradient`](BaseGradient.md).[`colorStops`](BaseGradient.md#colorstops)

***

### r0

#### Get Signature

> **get** **r0**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts#L62)

radius of the first circle

##### Returns

`number`

***

### r1

#### Get Signature

> **get** **r1**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts#L67)

radius of the second circle

##### Returns

`number`

***

### x0

#### Get Signature

> **get** **x0**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts#L42)

x coordinate of the first circle's center

##### Returns

`number`

***

### x1

#### Get Signature

> **get** **x1**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts#L47)

x coordinate of the second circle's center

##### Returns

`number`

***

### y0

#### Get Signature

> **get** **y0**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts#L52)

y coordinate of the first circle's center

##### Returns

`number`

***

### y1

#### Get Signature

> **get** **y1**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts#L57)

y coordinate of the second circle's center

##### Returns

`number`

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

#### Inherited from

[`BaseGradient`](BaseGradient.md).[`addColorStop`](BaseGradient.md#addcolorstop)

***

### clearColorStops()

> **clearColorStops**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/BaseGradient.ts#L81)

Removes all color stops from the gradient

#### Returns

`void`

#### Inherited from

[`BaseGradient`](BaseGradient.md).[`clearColorStops`](BaseGradient.md#clearcolorstops)

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

#### Inherited from

[`BaseGradient`](BaseGradient.md).[`getCanvasGradient`](BaseGradient.md#getcanvasgradient)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts#L75)

Class name of the gradient

#### Returns

`string`

the class name of the gradient

#### Overrides

[`BaseGradient`](BaseGradient.md).[`getClassName`](BaseGradient.md#getclassname)

***

### parse()

> **parse**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts#L97)

Parses a gradient from a serialization object

#### Parameters

##### serializationObject

`any`

the object to parse from

#### Returns

`void`

#### Overrides

[`BaseGradient`](BaseGradient.md).[`parse`](BaseGradient.md#parse)

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

#### Inherited from

[`BaseGradient`](BaseGradient.md).[`removeColorStop`](BaseGradient.md#removecolorstop)

***

### serialize()

> **serialize**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/RadialGradient.ts#L83)

Serializes this gradient

#### Parameters

##### serializationObject

`any`

the object to serialize to

#### Returns

`void`

#### Overrides

[`BaseGradient`](BaseGradient.md).[`serialize`](BaseGradient.md#serialize)
