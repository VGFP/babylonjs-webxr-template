[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Scalar

# Variable: Scalar

> `const` **Scalar**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.scalar.ts:9](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.scalar.ts#L9)

Scalar computation library

## Type Declaration

### HCF

> **HCF**: (`a`, `b`) => `number`

Returns the highest common factor of two integers.

#### Parameters

##### a

`number`

first parameter

##### b

`number`

second parameter

#### Returns

`number`

HCF of a and b

### Log2

> **Log2**: (`x`) => `number` = `Math.log2`

the log2 of value.

Returns the base 2 logarithm of a number.

#### Parameters

##### x

`number`

A numeric expression.

#### Returns

`number`

#### Param

**value**

the value to compute log2 of

#### Returns

the log2 of value.

### Sign

> **Sign**: (`x`) => `number` = `Math.sign`

Returns -1 if value is negative and +1 is value is positive.

Returns the sign of the x, indicating whether x is positive, negative or zero.

#### Parameters

##### x

`number`

The numeric expression to test

#### Returns

`number`

#### Param

**value**

the value

#### Returns

the value itself if it's equal to zero.

### TwoPi

> **TwoPi**: `number`

Two pi constants convenient for computation.

### Clamp()

> **Clamp**(`value`, `min?`, `max?`): `number`

Returns the value itself if it's between min and max.
Returns min if the value is lower than min.
Returns max if the value is greater than max.

#### Parameters

##### value

`number`

the value to clmap

##### min?

`number` = `0`

the min value to clamp to (default: 0)

##### max?

`number` = `1`

the max value to clamp to (default: 1)

#### Returns

`number`

the clamped value

### DeltaAngle()

> **DeltaAngle**(`current`, `target`): `number`

Calculates the shortest difference between two given angles given in degrees.

#### Parameters

##### current

`number`

current angle in degrees

##### target

`number`

target angle in degrees

#### Returns

`number`

the delta

### Denormalize()

> **Denormalize**(`normalized`, `min`, `max`): `number`

Denormalize the value from 0.0 and 1.0 using min and max values

#### Parameters

##### normalized

`number`

value to denormalize

##### min

`number`

max to denormalize between

##### max

`number`

min to denormalize between

#### Returns

`number`

the denormalized value

### ExtractAsInt()

> **ExtractAsInt**(`value`): `number`

Extract int value

#### Parameters

##### value

`number`

number value

#### Returns

`number`

int value

### Hermite()

> **Hermite**(`value1`, `tangent1`, `value2`, `tangent2`, `amount`): `number`

Returns a new scalar located for "amount" (float) on the Hermite spline defined by the scalars "value1", "value3", "tangent1", "tangent2".

#### Parameters

##### value1

`number`

defines the first control point

##### tangent1

`number`

defines the first tangent

##### value2

`number`

defines the second control point

##### tangent2

`number`

defines the second tangent

##### amount

`number`

defines the amount on the interpolation spline (between 0 and 1)

#### Returns

`number`

hermite result

#### See

http://mathworld.wolfram.com/HermitePolynomial.html

### Hermite1stDerivative()

> **Hermite1stDerivative**(`value1`, `tangent1`, `value2`, `tangent2`, `time`): `number`

Returns a new scalar which is the 1st derivative of the Hermite spline defined by the scalars "value1", "value2", "tangent1", "tangent2".

#### Parameters

##### value1

`number`

defines the first control point

##### tangent1

`number`

defines the first tangent

##### value2

`number`

defines the second control point

##### tangent2

`number`

defines the second tangent

##### time

`number`

define where the derivative must be done

#### Returns

`number`

1st derivative

### HighestCommonFactor()

> **HighestCommonFactor**(`a`, `b`): `number`

Returns the highest common factor of two integers.

#### Parameters

##### a

`number`

first parameter

##### b

`number`

second parameter

#### Returns

`number`

HCF of a and b

### ILog2()

> **ILog2**(`value`): `number`

the floor part of a log2 value.

#### Parameters

##### value

`number`

the value to compute log2 of

#### Returns

`number`

the log2 of value.

### InverseLerp()

> **InverseLerp**(`a`, `b`, `value`): `number`

Calculates the linear parameter t that produces the interpolant value within the range [a, b].

#### Parameters

##### a

`number`

start value

##### b

`number`

target value

##### value

`number`

value between a and b

#### Returns

`number`

the inverseLerp value

### Lerp()

> **Lerp**(`start`, `end`, `amount`): `number`

Creates a new scalar with values linearly interpolated of "amount" between the start scalar and the end scalar.

#### Parameters

##### start

`number`

start value

##### end

`number`

target value

##### amount

`number`

amount to lerp between

#### Returns

`number`

the lerped value

### LerpAngle()

> **LerpAngle**(`start`, `end`, `amount`): `number`

Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees.
The parameter t is clamped to the range [0, 1]. Variables a and b are assumed to be in degrees.

#### Parameters

##### start

`number`

start value

##### end

`number`

target value

##### amount

`number`

amount to lerp between

#### Returns

`number`

the lerped value

### MoveTowards()

> **MoveTowards**(`current`, `target`, `maxDelta`): `number`

Moves a value current towards target.

This is essentially the same as Mathf.Lerp but instead the function will ensure that the speed never exceeds maxDelta.
Negative values of maxDelta pushes the value away from target.

#### Parameters

##### current

`number`

current value

##### target

`number`

target value

##### maxDelta

`number`

max distance to move

#### Returns

`number`

resulting value

### MoveTowardsAngle()

> **MoveTowardsAngle**(`current`, `target`, `maxDelta`): `number`

Same as MoveTowards but makes sure the values interpolate correctly when they wrap around 360 degrees.

Variables current and target are assumed to be in degrees. For optimization reasons, negative values of maxDelta
 are not supported and may cause oscillation. To push current away from a target angle, add 180 to that angle instead.

#### Parameters

##### current

`number`

current value

##### target

`number`

target value

##### maxDelta

`number`

max distance to move

#### Returns

`number`

resulting angle

### Normalize()

> **Normalize**(`value`, `min`, `max`): `number`

Normalize the value between 0.0 and 1.0 using min and max values

#### Parameters

##### value

`number`

value to normalize

##### min

`number`

max to normalize between

##### max

`number`

min to normalize between

#### Returns

`number`

the normalized value

### NormalizeRadians()

> **NormalizeRadians**(`angle`): `number`

Returns the angle converted to equivalent value between -Math.PI and Math.PI radians.

#### Parameters

##### angle

`number`

The angle to normalize in radian.

#### Returns

`number`

The converted angle.

### OutsideRange()

> **OutsideRange**(`num`, `min`, `max`, `epsilon?`): `boolean`

Boolean : true if the number is outside a range

#### Parameters

##### num

`number`

number

##### min

`number`

min value

##### max

`number`

max value

##### epsilon?

`number` = `1.401298e-45`

(default = Number.EPSILON)

#### Returns

`boolean`

true if the number is between min and max values

### PercentToRange()

> **PercentToRange**(`percent`, `min`, `max`): `number`

This function returns number that corresponds to the percentage in a given range.

PercentToRange(0.34,0,100) will return 34.

#### Parameters

##### percent

`number`

to convert to number

##### min

`number`

min range

##### max

`number`

max range

#### Returns

`number`

the number

### PingPong()

> **PingPong**(`tx`, `length`): `number`

PingPongs the value t, so that it is never larger than length and never smaller than 0.

#### Parameters

##### tx

`number`

value

##### length

`number`

length

#### Returns

`number`

The returned value will move back and forth between 0 and length

### RandomRange()

> **RandomRange**(`min`, `max`): `number`

Returns a random float number between and min and max values

#### Parameters

##### min

`number`

min value of random

##### max

`number`

max value of random

#### Returns

`number`

random value

### RangeToPercent()

> **RangeToPercent**(`number`, `min`, `max`): `number`

This function returns percentage of a number in a given range.

RangeToPercent(40,20,60) will return 0.5 (50%)
RangeToPercent(34,0,100) will return 0.34 (34%)

#### Parameters

##### number

`number`

to convert to percentage

##### min

`number`

min range

##### max

`number`

max range

#### Returns

`number`

the percentage

### Repeat()

> **Repeat**(`value`, `length`): `number`

Loops the value, so that it is never larger than length and never smaller than 0.

This is similar to the modulo operator but it works with floating point numbers.
For example, using 3.0 for t and 2.5 for length, the result would be 0.5.
With t = 5 and length = 2.5, the result would be 0.0.
Note, however, that the behaviour is not defined for negative numbers as it is for the modulo operator

#### Parameters

##### value

`number`

the value

##### length

`number`

the length

#### Returns

`number`

the looped value

### SmoothStep()

> **SmoothStep**(`from`, `to`, `tx`): `number`

Interpolates between min and max with smoothing at the limits.

This function interpolates between min and max in a similar way to Lerp. However, the interpolation will gradually speed up
from the start and slow down toward the end. This is useful for creating natural-looking animation, fading and other transitions.

#### Parameters

##### from

`number`

from

##### to

`number`

to

##### tx

`number`

value

#### Returns

`number`

the smooth stepped value

### ToHex()

> **ToHex**(`i`): `string`

Returns a string : the upper case translation of the number i to hexadecimal.

#### Parameters

##### i

`number`

number

#### Returns

`string`

the upper case translation of the number i to hexadecimal.

### WithinEpsilon()

> **WithinEpsilon**(`a`, `b`, `epsilon?`): `boolean`

Boolean : true if the absolute difference between a and b is lower than epsilon (default = 1.401298E-45)

#### Parameters

##### a

`number`

number

##### b

`number`

number

##### epsilon?

`number` = `1.401298e-45`

(default = 1.401298E-45)

#### Returns

`boolean`

true if the absolute difference between a and b is lower than epsilon (default = 1.401298E-45)
