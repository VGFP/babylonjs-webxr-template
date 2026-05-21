[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / LinearGradient

# Class: LinearGradient

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/LinearGradient.ts:10](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/LinearGradient.ts#L10)

Gradient along a line that connects two coordinates.
These coordinates are relative to the canvas' space, not to any control's space.

## See

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient

## Extends

- [`BaseGradient`](BaseGradient.md)

## Constructors

### Constructor

> **new LinearGradient**(`x0?`, `y0?`, `x1?`, `y1?`): `LinearGradient`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/LinearGradient.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/LinearGradient.ts#L23)

Creates a new linear gradient

#### Parameters

##### x0?

`number`

##### y0?

`number`

##### x1?

`number`

##### y1?

`number`

#### Returns

`LinearGradient`

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

### x0

#### Get Signature

> **get** **x0**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/LinearGradient.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/LinearGradient.ts#L36)

X axis coordinate of the starting point in the line

##### Returns

`number`

***

### x1

#### Get Signature

> **get** **x1**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/LinearGradient.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/LinearGradient.ts#L41)

X axis coordinate of the ending point in the line

##### Returns

`number`

***

### y0

#### Get Signature

> **get** **y0**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/LinearGradient.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/LinearGradient.ts#L46)

Y axis coordinate of the starting point in the line

##### Returns

`number`

***

### y1

#### Get Signature

> **get** **y1**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/LinearGradient.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/LinearGradient.ts#L51)

Y axis coordinate of the ending point in the line

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

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/LinearGradient.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/LinearGradient.ts#L59)

Class name of the gradient

#### Returns

`string`

the class name of the gradient

#### Overrides

[`BaseGradient`](BaseGradient.md).[`getClassName`](BaseGradient.md#getclassname)

***

### parse()

> **parse**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/LinearGradient.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/LinearGradient.ts#L79)

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

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/gradient/LinearGradient.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/gradient/LinearGradient.ts#L67)

Serializes this gradient

#### Parameters

##### serializationObject

`any`

the object to serialize to

#### Returns

`void`

#### Overrides

[`BaseGradient`](BaseGradient.md).[`serialize`](BaseGradient.md#serialize)
