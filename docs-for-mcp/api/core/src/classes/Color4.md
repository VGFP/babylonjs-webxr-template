[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Color4

# Class: Color4

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1017](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1017)

Class used to hold a RBGA color

## Implements

- `Tensor`\<[`Tuple`](../type-aliases/Tuple.md)\<`number`, `4`\>, `IColor4Like`\>

## Constructors

### Constructor

> **new Color4**(`r?`, `g?`, `b?`, `a?`): `Color4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1043](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1043)

Creates a new Color4 object from red, green, blue values, all between 0 and 1

#### Parameters

##### r?

`number` = `0`

defines the red component (between 0 and 1, default is 0)

##### g?

`number` = `0`

defines the green component (between 0 and 1, default is 0)

##### b?

`number` = `0`

defines the blue component (between 0 and 1, default is 0)

##### a?

`number` = `1`

defines the alpha component (between 0 and 1, default is 1)

#### Returns

`Color4`

## Properties

### a

> **a**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1059](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1059)

[1] Defines the alpha component (between 0 and 1, default is 1)

#### Implementation of

`IColor4Like.a`

***

### b

> **b**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1055](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1055)

[0] Defines the blue component (between 0 and 1, default is 0)

#### Implementation of

`IColor4Like.b`

***

### dimension

> `readonly` **dimension**: \[`4`\]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1029](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1029)

#### See

Tensor.dimension

#### Implementation of

`Tensor.dimension`

***

### g

> **g**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1051](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1051)

[0] Defines the green component (between 0 and 1, default is 0)

#### Implementation of

`IColor4Like.g`

***

### r

> **r**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1047](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1047)

[0] Defines the red component (between 0 and 1, default is 0)

#### Implementation of

`IColor4Like.r`

***

### rank

> `readonly` **rank**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1034](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1034)

#### See

Tensor.rank

#### Implementation of

`Tensor.rank`

***

### \_V8PerformanceHack

> `static` **\_V8PerformanceHack**: [`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<`Color4`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1025](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1025)

If the first color is flagged with integers (as everything is 0,0,0,0), V8 stores all of the properties as integers internally because it doesn't know any better yet.
If subsequent colors are created with non-integer values, V8 determines that it would be best to represent these properties as doubles instead of integers,
and henceforth it will use floating-point representation for all color instances that it creates.
But the original color instances are unchanged and has a "deprecated map".
If we keep using the color instances from step 1, it will now be a poison pill which will mess up optimizations in any code it touches.

## Methods

### add()

> **add**(`otherColor`): `Color4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1114)

Creates a new Color4 set with the added values of the current Color4 and of the given one

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the second operand

#### Returns

`Color4`

a new Color4 object

#### Implementation of

`Tensor.add`

***

### addInPlace()

> **addInPlace**(`otherColor`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1137)

Adds in place the given Color4 values to the current Color4 object

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the second operand

#### Returns

`this`

the current updated Color4 object

#### Implementation of

`Tensor.addInPlace`

***

### addInPlaceFromFloats()

> **addInPlaceFromFloats**(`r`, `g`, `b`, `a`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1153)

Adds the given coordinates to the current Color4

#### Parameters

##### r

`number`

defines the r coordinate of the operand

##### g

`number`

defines the g coordinate of the operand

##### b

`number`

defines the b coordinate of the operand

##### a

`number`

defines the a coordinate of the operand

#### Returns

`this`

the current updated Color4

#### Implementation of

`Tensor.addInPlaceFromFloats`

***

### addToRef()

> **addToRef**\<`T`\>(`otherColor`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1124)

Updates the given color "result" with the result of the addition of the current Color4 and the given one.

#### Type Parameters

##### T

`T` *extends* `IColor4Like`

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

the color to add

##### result

`T`

the color to store the result

#### Returns

`T`

result input

#### Implementation of

`Tensor.addToRef`

***

### asArray()

> **asArray**(): \[`number`, `number`, `number`, `number`\]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1068](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1068)

Creates a new array populated with 4 numeric elements : red, green, blue, alpha values

#### Returns

\[`number`, `number`, `number`, `number`\]

the new array

#### Implementation of

`Tensor.asArray`

***

### clampToRef()

> **clampToRef**\<`T`\>(`min?`, `max?`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1283)

Clamps the rgb values by the min and max values and stores the result into "result"

#### Type Parameters

##### T

`T` *extends* `IColor4Like`

#### Parameters

##### min?

`number` = `0`

defines minimum clamping value (default is 0)

##### max?

`number` = `1`

defines maximum clamping value (default is 1)

##### result

`T`

defines color to store the result into.

#### Returns

`T`

the result Color4

***

### clone()

> **clone**(): `Color4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1535](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1535)

Creates a new Color4 copied from the current one

#### Returns

`Color4`

a new Color4 object

#### Implementation of

`Tensor.clone`

***

### copyFrom()

> **copyFrom**(`source`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1545](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1545)

Copies the given Color4 values into the current one

#### Parameters

##### source

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the source Color4 object

#### Returns

`this`

the current updated Color4 object

#### Implementation of

`Tensor.copyFrom`

***

### copyFromFloats()

> **copyFromFloats**(`r`, `g`, `b`, `a`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1561](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1561)

Copies the given float values into the current one

#### Parameters

##### r

`number`

defines the red component to read from

##### g

`number`

defines the green component to read from

##### b

`number`

defines the blue component to read from

##### a

`number`

defines the alpha component to read from

#### Returns

`this`

the current updated Color4 object

#### Implementation of

`Tensor.copyFromFloats`

***

### equals()

> **equals**(`otherColor`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1105)

Determines equality between Color4 objects

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the second operand

#### Returns

`boolean`

true if the rgba values are equal to the given ones

#### Implementation of

`Tensor.equals`

***

### equalsToFloats()

> **equalsToFloats**(`x`, `y`, `z`, `w`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1499](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1499)

Boolean : True if the given floats are strictly equal to the current Color4 coordinates.

#### Parameters

##### x

`number`

x value to compare against

##### y

`number`

y value to compare against

##### z

`number`

z value to compare against

##### w

`number`

w value to compare against

#### Returns

`boolean`

true if equal

#### Implementation of

`Tensor.equalsToFloats`

***

### equalsWithEpsilon()

> **equalsWithEpsilon**(`otherColor`, `epsilon?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1482](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1482)

Boolean : True if the current Color4 coordinates are each beneath the distance "epsilon" from the given color ones.

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

color to compare against

##### epsilon?

`number` = `Epsilon`

(Default: very small number)

#### Returns

`boolean`

true if they are equal

#### Implementation of

`Tensor.equalsWithEpsilon`

***

### fromArray()

> **fromArray**(`array`, `offset?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1092](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1092)

Update the current color with values stored in an array from the starting index of the given array

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

defines the source array

##### offset?

`number` = `0`

defines an offset in the source array

#### Returns

`this`

the current Color4 object

#### Implementation of

`Tensor.fromArray`

***

### fromHexString()

> **fromHexString**(`hex`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1622](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1622)

Updates the Color4 rgba values from the string containing valid hexadecimal values.

A valid hex string is either in the format #RRGGBB or #RRGGBBAA.

When a hex string without alpha is passed, the resulting Color4 keeps
its previous alpha value.

An invalid string does not modify this object

#### Parameters

##### hex

`string`

defines a string containing valid hexadecimal values

#### Returns

`this`

the current updated Color4 object

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1515](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1515)

Returns the string "Color4"

#### Returns

`string`

"Color4"

#### Implementation of

`Tensor.getClassName`

***

### getHashCode()

> **getHashCode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1523](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1523)

Compute the Color4 hash code

#### Returns

`number`

an unique number that can be used to hash Color4 objects

#### Implementation of

`Tensor.getHashCode`

***

### maximizeInPlace()

> **maximizeInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1380)

Updates the Color4 coordinates with the maximum values between its own and the given color ones

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the second operand

#### Returns

`this`

the current updated Color4

#### Implementation of

`Tensor.maximizeInPlace`

***

### maximizeInPlaceFromFloats()

> **maximizeInPlaceFromFloats**(`r`, `g`, `b`, `a`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1412](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1412)

Updates the current Color4 with the maximal coordinate values between its and the given coordinates.

#### Parameters

##### r

`number`

defines the r coordinate of the operand

##### g

`number`

defines the g coordinate of the operand

##### b

`number`

defines the b coordinate of the operand

##### a

`number`

defines the a coordinate of the operand

#### Returns

`this`

the current updated Color4

#### Implementation of

`Tensor.maximizeInPlaceFromFloats`

***

### minimizeInPlace()

> **minimizeInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1368](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1368)

Updates the Color4 coordinates with the minimum values between its own and the given color ones

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the second operand

#### Returns

`this`

the current updated Color4

#### Implementation of

`Tensor.minimizeInPlace`

***

### minimizeInPlaceFromFloats()

> **minimizeInPlaceFromFloats**(`r`, `g`, `b`, `a`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1396](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1396)

Updates the current Color4 with the minimal coordinate values between its and the given coordinates

#### Parameters

##### r

`number`

defines the r coordinate of the operand

##### g

`number`

defines the g coordinate of the operand

##### b

`number`

defines the b coordinate of the operand

##### a

`number`

defines the a coordinate of the operand

#### Returns

`this`

the current updated Color4

#### Implementation of

`Tensor.minimizeInPlaceFromFloats`

***

### multiply()

> **multiply**(`color`): `Color4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1296)

Multiply an Color4 value by another and return a new Color4 object

#### Parameters

##### color

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the Color4 value to multiply by

#### Returns

`Color4`

a new Color4 object

#### Implementation of

`Tensor.multiply`

***

### multiplyByFloats()

> **multiplyByFloats**(`r`, `g`, `b`, `a`): `Color4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1335](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1335)

Returns a new Color4 set with the multiplication result of the given floats and the current Color4 coordinates.

#### Parameters

##### r

`number`

value multiply with

##### g

`number`

value multiply with

##### b

`number`

value multiply with

##### a

`number`

value multiply with

#### Returns

`Color4`

resulting new color

#### Implementation of

`Tensor.multiplyByFloats`

***

### multiplyInPlace()

> **multiplyInPlace**(`otherColor`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1319)

Multiplies in place the current Color4 by the given one.

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

color to multiple with

#### Returns

`this`

the updated Color4.

#### Implementation of

`Tensor.multiplyInPlace`

***

### multiplyToRef()

> **multiplyToRef**\<`T`\>(`color`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1306](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1306)

Multiply a Color4 value by another and push the result in a reference value

#### Type Parameters

##### T

`T` *extends* `IColor4Like`

#### Parameters

##### color

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the Color4 value to multiply by

##### result

`T`

defines the Color4 to fill the result in

#### Returns

`T`

the result Color4

#### Implementation of

`Tensor.multiplyToRef`

***

### scale()

> **scale**(`scale`): `Color4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1231)

Creates a new Color4 with the current Color4 values multiplied by scale

#### Parameters

##### scale

`number`

defines the scaling factor to apply

#### Returns

`Color4`

a new Color4 object

#### Implementation of

`Tensor.scale`

***

### scaleAndAddToRef()

> **scaleAndAddToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1268](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1268)

Scale the current Color4 values by a factor and add the result to a given Color4

#### Type Parameters

##### T

`T` *extends* `IColor4Like`

#### Parameters

##### scale

`number`

defines the scale factor

##### result

`T`

defines the Color4 object where to store the result

#### Returns

`T`

the result Color4

#### Implementation of

`Tensor.scaleAndAddToRef`

***

### scaleInPlace()

> **scaleInPlace**(`scale`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1240](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1240)

Multiplies the Color4 values by the float "scale"

#### Parameters

##### scale

`number`

defines the scaling factor to apply

#### Returns

`this`

the current updated Color4

#### Implementation of

`Tensor.scaleInPlace`

***

### scaleToRef()

> **scaleToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1254)

Multiplies the current Color4 values by scale and stores the result in "result"

#### Type Parameters

##### T

`T` *extends* `IColor4Like`

#### Parameters

##### scale

`number`

defines the scaling factor to apply

##### result

`T`

defines the Color4 object where to store the result

#### Returns

`T`

the result Color4

#### Implementation of

`Tensor.scaleToRef`

***

### set()

> **set**(`r`, `g`, `b`, `a`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1577](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1577)

Copies the given float values into the current one

#### Parameters

##### r

`number`

defines the red component to read from

##### g

`number`

defines the green component to read from

##### b

`number`

defines the blue component to read from

##### a

`number`

defines the alpha component to read from

#### Returns

`this`

the current updated Color4 object

#### Implementation of

`Tensor.set`

***

### setAll()

> **setAll**(`v`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1586](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1586)

Copies the given float to the current Vector4 coordinates

#### Parameters

##### v

`number`

defines the r, g, b, and a coordinates of the operand

#### Returns

`this`

the current updated Vector4

#### Implementation of

`Tensor.setAll`

***

### subtract()

> **subtract**(`otherColor`): `Color4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1166)

Creates a new Color4 set with the subtracted values of the given one from the current Color4

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the second operand

#### Returns

`Color4`

a new Color4 object

#### Implementation of

`Tensor.subtract`

***

### subtractFromFloats()

> **subtractFromFloats**(`r`, `g`, `b`, `a`): `Color4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1205)

Returns a new Color4 set with the result of the subtraction of the given floats from the current Color4 coordinates.

#### Parameters

##### r

`number`

value to subtract

##### g

`number`

value to subtract

##### b

`number`

value to subtract

##### a

`number`

value to subtract

#### Returns

`Color4`

new color containing the result

#### Implementation of

`Tensor.subtractFromFloats`

***

### subtractFromFloatsToRef()

> **subtractFromFloatsToRef**\<`T`\>(`r`, `g`, `b`, `a`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1218](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1218)

Sets the given color "result" set with the result of the subtraction of the given floats from the current Color4 coordinates.

#### Type Parameters

##### T

`T` *extends* `IColor4Like`

#### Parameters

##### r

`number`

value to subtract

##### g

`number`

value to subtract

##### b

`number`

value to subtract

##### a

`number`

value to subtract

##### result

`T`

the color to store the result in

#### Returns

`T`

result input

#### Implementation of

`Tensor.subtractFromFloatsToRef`

***

### subtractInPlace()

> **subtractInPlace**(`otherColor`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1189)

Subtract in place the given color from the current Color4.

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

the color to subtract

#### Returns

`this`

the updated Color4.

#### Implementation of

`Tensor.subtractInPlace`

***

### subtractToRef()

> **subtractToRef**\<`T`\>(`otherColor`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1176)

Subtracts the given ones from the current Color4 values and stores the results in "result"

#### Type Parameters

##### T

`T` *extends* `IColor4Like`

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the second operand

##### result

`T`

defines the Color4 object where to store the result

#### Returns

`T`

the result Color4 object

#### Implementation of

`Tensor.subtractToRef`

***

### toArray()

> **toArray**(`array`, `index?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1078](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1078)

Stores from the starting index in the given array the Color4 successive values

#### Parameters

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

defines the array where to store the r,g,b components

##### index?

`number` = `0`

defines an optional index in the target array to define where to start storing values

#### Returns

`this`

the current Color4 object

#### Implementation of

`Tensor.toArray`

***

### toGammaSpace()

> **toGammaSpace**(`exact?`): `Color4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1673](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1673)

Computes a new Color4 converted from the current one to gamma space

#### Parameters

##### exact?

`boolean` = `false`

defines if the conversion will be done in an exact way which is slower but more accurate (default is false)

#### Returns

`Color4`

a new Color4 object

***

### toGammaSpaceToRef()

> **toGammaSpaceToRef**(`convertedColor`, `exact?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1685](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1685)

Converts the Color4 values to gamma space and stores the result in "convertedColor"

#### Parameters

##### convertedColor

`IColor4Like`

defines the Color4 object where to store the gamma space version

##### exact?

`boolean` = `false`

defines if the conversion will be done in an exact way which is slower but more accurate (default is false)

#### Returns

`this`

the unmodified Color4

***

### toHexString()

> **toHexString**(`returnAsColor3?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1596](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1596)

Compute the Color4 hexadecimal code as a string

#### Parameters

##### returnAsColor3?

`boolean` = `false`

defines if the string should only contains RGB values (off by default)

#### Returns

`string`

a string containing the hexadecimal representation of the Color4 object

***

### toLinearSpace()

> **toLinearSpace**(`exact?`): `Color4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1642](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1642)

Computes a new Color4 converted from the current one to linear space

#### Parameters

##### exact?

`boolean` = `false`

defines if the conversion will be done in an exact way which is slower but more accurate (default is false)

#### Returns

`Color4`

a new Color4 object

***

### toLinearSpaceToRef()

> **toLinearSpaceToRef**(`convertedColor`, `exact?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1654](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1654)

Converts the Color4 values to linear space and stores the result in "convertedColor"

#### Parameters

##### convertedColor

`IColor4Like`

defines the Color4 object where to store the linear space version

##### exact?

`boolean` = `false`

defines if the conversion will be done in an exact way which is slower but more accurate (default is false)

#### Returns

`this`

the unmodified Color4

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1507](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1507)

Creates a string with the Color4 current values

#### Returns

`string`

the string representation of the Color4 object

***

### CheckColors4()

> `static` **CheckColors4**(`colors`, `count`): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1880](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1880)

Check the content of a given array and convert it to an array containing RGBA data
If the original array was already containing count * 4 values then it is returned directly

#### Parameters

##### colors

`number`[]

defines the array to check

##### count

`number`

defines the number of RGBA data to expect

#### Returns

`number`[]

an array containing count * 4 values (RGBA)

***

### FromArray()

> `static` **FromArray**(`array`, `offset?`): `Color4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1844](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1844)

Creates a new Color4 from the starting index element of the given array

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

defines the source array to read from

##### offset?

`number` = `0`

defines the offset in the source array

#### Returns

`Color4`

a new Color4 object

***

### FromArrayToRef()

> `static` **FromArrayToRef**(`array`, `offset?`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1854](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1854)

Creates a new Color4 from the starting index element of the given array

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

defines the source array to read from

##### offset?

`number` = `0`

defines the offset in the source array

##### result

`Color4`

defines the target Color4 object

#### Returns

`void`

***

### FromColor3()

> `static` **FromColor3**(`color3`, `alpha?`): `Color4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1834](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1834)

Creates a new Color4 from a Color3 and an alpha value

#### Parameters

##### color3

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor3Like`\>

defines the source Color3 to read from

##### alpha?

`number` = `1.0`

defines the alpha component (1.0 by default)

#### Returns

`Color4`

a new Color4 object

***

### FromHexString()

> `static` **FromHexString**(`hex`): `Color4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1715](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1715)

Creates a new Color4 from the string containing valid hexadecimal values.

A valid hex string is either in the format #RRGGBB or #RRGGBBAA.

When a hex string without alpha is passed, the resulting Color4 has
its alpha value set to 1.0.

An invalid string results in a Color with all its channels set to 0.0,
i.e. "transparent black".

#### Parameters

##### hex

`string`

defines a string containing valid hexadecimal values

#### Returns

`Color4`

a new Color4 object

***

### FromInts()

> `static` **FromInts**(`r`, `g`, `b`, `a`): `Color4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1869](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1869)

Creates a new Color3 from integer values (less than 256)

#### Parameters

##### r

`number`

defines the red component to read from (value between 0 and 255)

##### g

`number`

defines the green component to read from (value between 0 and 255)

##### b

`number`

defines the blue component to read from (value between 0 and 255)

##### a

`number`

defines the alpha component to read from (value between 0 and 255)

#### Returns

`Color4`

a new Color3 object

***

### Hermite()

> `static` **Hermite**(`value1`, `tangent1`, `value2`, `tangent2`, `amount`): `Color4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1759](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1759)

Interpolate between two Color4 using Hermite interpolation

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines first Color4

##### tangent1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the incoming tangent

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines second Color4

##### tangent2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the outgoing tangent

##### amount

`number`

defines the target Color4

#### Returns

`Color4`

the new interpolated Color4

***

### Hermite1stDerivative()

> `static` **Hermite1stDerivative**(`value1`, `tangent1`, `value2`, `tangent2`, `time`): `Color4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1789](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1789)

Returns a new Color4 which is the 1st derivative of the Hermite spline defined by the colors "value1", "value2", "tangent1", "tangent2".

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the first control point

##### tangent1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the first tangent

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the second control point

##### tangent2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the second tangent

##### time

`number`

define where the derivative must be done

#### Returns

`Color4`

1st derivative

***

### Hermite1stDerivativeToRef()

> `static` **Hermite1stDerivativeToRef**(`value1`, `tangent1`, `value2`, `tangent2`, `time`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1812](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1812)

Update a Color4 with the 1st derivative of the Hermite spline defined by the colors "value1", "value2", "tangent1", "tangent2".

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the first control point

##### tangent1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the first tangent

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the second control point

##### tangent2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the second tangent

##### time

`number`

define where the derivative must be done

##### result

`IColor4Like`

define where to store the derivative

#### Returns

`void`

***

### Lerp()

> `static` **Lerp**(`left`, `right`, `amount`): `Color4`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1730](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1730)

Creates a new Color4 object set with the linearly interpolated values of "amount" between the left Color4 object and the right Color4 object

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the start value

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the end value

##### amount

`number`

defines the gradient factor

#### Returns

`Color4`

a new Color4 object

***

### LerpToRef()

> `static` **LerpToRef**\<`T`\>(`left`, `right`, `amount`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1742](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1742)

Set the given "result" with the linearly interpolated values of "amount" between the left Color4 object and the right Color4 object

#### Type Parameters

##### T

`T` *extends* `IColor4Like`

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the start value

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor4Like`\>

defines the end value

##### amount

`number`

defines the gradient factor

##### result

`T`

defines the Color4 object where to store data

#### Returns

`T`

the updated result
