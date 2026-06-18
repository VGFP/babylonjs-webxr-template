[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Size

# Class: Size

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L18)

Size containing width and height

## Implements

- [`ISize`](../interfaces/ISize.md)

## Constructors

### Constructor

> **new Size**(`width`, `height`): `Size`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L33)

Creates a Size object from the given width and height (floats).

#### Parameters

##### width

`number`

width of the new size

##### height

`number`

height of the new size

#### Returns

`Size`

## Properties

### height

> **height**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L26)

Height

#### Implementation of

[`ISize`](../interfaces/ISize.md).[`height`](../interfaces/ISize.md#height)

***

### width

> **width**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L22)

Width

#### Implementation of

[`ISize`](../interfaces/ISize.md).[`width`](../interfaces/ISize.md#width)

## Accessors

### surface

#### Get Signature

> **get** **surface**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L119)

The surface of the Size : width * height (float).

##### Returns

`number`

## Methods

### add()

> **add**(`otherSize`): `Size`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L134)

Sums the width and height of two sizes

#### Parameters

##### otherSize

`Size`

size to add to this size

#### Returns

`Size`

a new Size set as the addition result of the current Size and the given one.

***

### clone()

> **clone**(): `Size`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L102)

Clones the size

#### Returns

`Size`

a new Size copied from the given one.

***

### copyFrom()

> **copyFrom**(`src`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L65)

Updates the current size from the given one.

#### Parameters

##### src

`Size`

the given size

#### Returns

`void`

***

### copyFromFloats()

> **copyFromFloats**(`width`, `height`): `Size`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L75)

Updates in place the current Size from the given floats.

#### Parameters

##### width

`number`

width of the new size

##### height

`number`

height of the new size

#### Returns

`Size`

the updated Size.

***

### equals()

> **equals**(`other`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L110)

True if the current Size and the given one width and height are strictly equal.

#### Parameters

##### other

`Size`

the other size to compare against

#### Returns

`boolean`

True if the current Size and the given one width and height are strictly equal.

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L49)

"Size"

#### Returns

`string`

the string "Size"

***

### getHashCode()

> **getHashCode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L56)

Returns the Size hash code.

#### Returns

`number`

a hash code for a unique width and height

***

### multiplyByFloats()

> **multiplyByFloats**(`w`, `h`): `Size`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L95)

Multiplies the width and height by numbers

#### Parameters

##### w

`number`

factor to multiple the width by

##### h

`number`

factor to multiple the height by

#### Returns

`Size`

a new Size set with the multiplication result of the current Size and the given floats.

***

### scale()

> **scale**(`scale`): `Size`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L152)

Scales the width and height

#### Parameters

##### scale

`number`

the scale to multiply the width and height by

#### Returns

`Size`

a new Size set with the multiplication result of the current Size and the given floats.

***

### set()

> **set**(`width`, `height`): `Size`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L86)

Updates in place the current Size from the given floats.

#### Parameters

##### width

`number`

width to set

##### height

`number`

height to set

#### Returns

`Size`

the updated Size.

***

### subtract()

> **subtract**(`otherSize`): `Size`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L143)

Subtracts the width and height of two

#### Parameters

##### otherSize

`Size`

size to subtract to this size

#### Returns

`Size`

a new Size set as the subtraction result of  the given one from the current Size.

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L42)

Returns a string with the Size width and height

#### Returns

`string`

a string with the Size width and height

***

### Lerp()

> `static` **Lerp**(`start`, `end`, `amount`): `Size`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L162)

Creates a new Size set at the linear interpolation "amount" between "start" and "end"

#### Parameters

##### start

`Size`

starting size to lerp between

##### end

`Size`

end size to lerp between

##### amount

`number`

amount to lerp between the start and end values

#### Returns

`Size`

a new Size set at the linear interpolation "amount" between "start" and "end"

***

### Zero()

> `static` **Zero**(): `Size`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.size.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.size.ts#L126)

Create a new size of zero

#### Returns

`Size`

a new Size set to (0.0, 0.0)
