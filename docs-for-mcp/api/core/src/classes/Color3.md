[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Color3

# Class: Color3

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L36)

Class used to hold a RGB color

## Implements

- `Tensor`\<[`Tuple`](../type-aliases/Tuple.md)\<`number`, `3`\>, `IColor3Like`\>

## Constructors

### Constructor

> **new Color3**(`r?`, `g?`, `b?`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L61)

Creates a new Color3 object from red, green, blue values, all between 0 and 1

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

#### Returns

`Color3`

## Properties

### b

> **b**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L73)

[0] Defines the blue component (between 0 and 1, default is 0)

#### Implementation of

`IColor3Like.b`

***

### dimension

> `readonly` **dimension**: \[`3`\]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L48)

#### See

Tensor.dimension

#### Implementation of

`Tensor.dimension`

***

### g

> **g**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L69)

[0] Defines the green component (between 0 and 1, default is 0)

#### Implementation of

`IColor3Like.g`

***

### r

> **r**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L65)

[0] Defines the red component (between 0 and 1, default is 0)

#### Implementation of

`IColor3Like.r`

***

### rank

> `readonly` **rank**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L53)

#### See

Tensor.rank

#### Implementation of

`Tensor.rank`

***

### \_V8PerformanceHack

> `static` **\_V8PerformanceHack**: [`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<`Color3`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L44)

If the first color is flagged with integers (as everything is 0,0,0), V8 stores all of the properties as integers internally because it doesn't know any better yet.
If subsequent colors are created with non-integer values, V8 determines that it would be best to represent these properties as doubles instead of integers,
and henceforth it will use floating-point representation for all color instances that it creates.
But the original color instances are unchanged and has a "deprecated map".
If we keep using the color instances from step 1, it will now be a poison pill which will mess up optimizations in any code it touches.

## Accessors

### BlackReadOnly

#### Get Signature

> **get** `static` **BlackReadOnly**(): [`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:959](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L959)

Gets a Color3 value containing a black color that must not be updated

##### Returns

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

## Methods

### add()

> **add**(`otherColor`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:433](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L433)

Creates a new Color3 set with the added values of the current Color3 and of the given one

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor3Like`\>

defines the second operand

#### Returns

`Color3`

the new Color3

#### Implementation of

`Tensor.add`

***

### addInPlace()

> **addInPlace**(`otherColor`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:442](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L442)

Adds the given color to the current Color3

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor3Like`\>

defines the second operand

#### Returns

`this`

the current updated Color3

#### Implementation of

`Tensor.addInPlace`

***

### addInPlaceFromFloats()

> **addInPlaceFromFloats**(`r`, `g`, `b`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:456](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L456)

Adds the given coordinates to the current Color3

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

#### Returns

`this`

the current updated Color3

#### Implementation of

`Tensor.addInPlaceFromFloats`

***

### addToRef()

> **addToRef**\<`T`\>(`otherColor`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:469](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L469)

Stores the result of the addition of the current Color3 and given one rgb values into "result"

#### Type Parameters

##### T

`T` *extends* `IColor3Like`

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor3Like`\>

defines the second operand

##### result

`T`

defines Color3 object to store the result into

#### Returns

`T`

the unmodified current Color3

#### Implementation of

`Tensor.addToRef`

***

### asArray()

> **asArray**(): \[`number`, `number`, `number`\]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L143)

Returns a new array populated with 3 numeric elements : red, green and blue values

#### Returns

\[`number`, `number`, `number`\]

the new array

#### Implementation of

`Tensor.asArray`

***

### clampToRef()

> **clampToRef**\<`T`\>(`min?`, `max?`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:421](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L421)

Clamps the rgb values by the min and max values and stores the result into "result"

#### Type Parameters

##### T

`T` *extends* `IColor3Like`

#### Parameters

##### min?

`number` = `0`

defines minimum clamping value (default is 0)

##### max?

`number` = `1`

defines maximum clamping value (default is 1)

##### result

`T`

defines color to store the result into

#### Returns

`T`

the result Color3

***

### clone()

> **clone**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:540](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L540)

Copy the current object

#### Returns

`Color3`

a new Color3 copied the current one

#### Implementation of

`Tensor.clone`

***

### copyFrom()

> **copyFrom**(`source`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:549](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L549)

Copies the rgb values from the source in the current Color3

#### Parameters

##### source

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor3Like`\>

defines the source Color3 object

#### Returns

`this`

the updated Color3 object

#### Implementation of

`Tensor.copyFrom`

***

### copyFromFloats()

> **copyFromFloats**(`r`, `g`, `b`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:563](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L563)

Updates the Color3 rgb values from the given floats

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

#### Returns

`this`

the current Color3 object

#### Implementation of

`Tensor.copyFromFloats`

***

### equals()

> **equals**(`otherColor`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:307](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L307)

Determines equality between Color3 objects

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor3Like`\>

defines the second operand

#### Returns

`boolean`

true if the rgb values are equal to the given ones

#### Implementation of

`Tensor.equals`

***

### equalsFloats()

> **equalsFloats**(`r`, `g`, `b`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:318](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L318)

Alias for equalsToFloats

#### Parameters

##### r

`number`

red color component

##### g

`number`

green color component

##### b

`number`

blue color component

#### Returns

`boolean`

boolean

***

### equalsToFloats()

> **equalsToFloats**(`r`, `g`, `b`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:329](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L329)

Determines equality between the current Color3 object and a set of r,b,g values

#### Parameters

##### r

`number`

defines the red component to check

##### g

`number`

defines the green component to check

##### b

`number`

defines the blue component to check

#### Returns

`boolean`

true if the rgb values are equal to the given ones

#### Implementation of

`Tensor.equalsToFloats`

***

### equalsWithEpsilon()

> **equalsWithEpsilon**(`otherColor`, `epsilon?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:339](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L339)

Returns true if the current Color3 and the given color coordinates are distant less than epsilon

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor3Like`\>

defines the second operand

##### epsilon?

`number` = `Epsilon`

defines the minimal distance to define values as equals

#### Returns

`boolean`

true if both colors are distant less than epsilon

#### Implementation of

`Tensor.equalsWithEpsilon`

***

### fromArray()

> **fromArray**(`array`, `offset?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L125)

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

the current Color3 object

#### Implementation of

`Tensor.fromArray`

***

### fromHexString()

> **fromHexString**(`hex`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:607](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L607)

Updates the Color3 rgb values from the string containing valid hexadecimal values

#### Parameters

##### hex

`string`

defines a string containing valid hexadecimal values

#### Returns

`this`

the current Color3 object

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L88)

Returns the string "Color3"

#### Returns

`string`

"Color3"

#### Implementation of

`Tensor.getClassName`

***

### getHashCode()

> **getHashCode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L96)

Compute the Color3 hash code

#### Returns

`number`

an unique number that can be used to hash Color3 objects

#### Implementation of

`Tensor.getHashCode`

***

### maximizeInPlace()

> **maximizeInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L238)

Updates the current Color3 with the maximal coordinate values between its and the given color ones.

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor3Like`\>

defines the second operand

#### Returns

`this`

the current updated Color3

#### Implementation of

`Tensor.maximizeInPlace`

***

### maximizeInPlaceFromFloats()

> **maximizeInPlaceFromFloats**(`r`, `g`, `b`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:263](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L263)

Updates the current Color3 with the maximal coordinate values between its and the given coordinates.

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

#### Returns

`this`

the current updated Color3

#### Implementation of

`Tensor.maximizeInPlaceFromFloats`

***

### minimizeInPlace()

> **minimizeInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L229)

Updates the current Color3 with the minimal coordinate values between its and the given color ones

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor3Like`\>

defines the second operand

#### Returns

`this`

the current updated Color3

#### Implementation of

`Tensor.minimizeInPlace`

***

### minimizeInPlaceFromFloats()

> **minimizeInPlaceFromFloats**(`r`, `g`, `b`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:249](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L249)

Updates the current Color3 with the minimal coordinate values between its and the given coordinates

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

#### Returns

`this`

the current updated Color3

#### Implementation of

`Tensor.minimizeInPlaceFromFloats`

***

### multiply()

> **multiply**(`otherColor`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L160)

Multiply each Color3 rgb values by the given Color3 rgb values in a new Color3 object

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor3Like`\>

defines the second operand

#### Returns

`Color3`

the new Color3 object

#### Implementation of

`Tensor.multiply`

***

### multiplyByFloats()

> **multiplyByFloats**(`r`, `g`, `b`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L196)

Returns a new Color3 set with the result of the multiplication of the current Color3 coordinates by the given floats

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

#### Returns

`Color3`

the new Color3

#### Implementation of

`Tensor.multiplyByFloats`

***

### multiplyInPlace()

> **multiplyInPlace**(`otherColor`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L182)

Multiplies the current Color3 coordinates by the given ones

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor3Like`\>

defines the second operand

#### Returns

`this`

the current updated Color3

#### Implementation of

`Tensor.multiplyInPlace`

***

### multiplyToRef()

> **multiplyToRef**\<`T`\>(`otherColor`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L170)

Multiply the rgb values of the Color3 and the given Color3 and stores the result in the object "result"

#### Type Parameters

##### T

`T` *extends* `IColor3Like`

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor3Like`\>

defines the second operand

##### result

`T`

defines the Color3 object where to store the result

#### Returns

`T`

the result Color3

#### Implementation of

`Tensor.multiplyToRef`

***

### scale()

> **scale**(`scale`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:372](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L372)

Creates a new Color3 with the current Color3 values multiplied by scale

#### Parameters

##### scale

`number`

defines the scaling factor to apply

#### Returns

`Color3`

a new Color3 object

#### Implementation of

`Tensor.scale`

***

### scaleAndAddToRef()

> **scaleAndAddToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L407)

Scale the current Color3 values by a factor and add the result to a given Color3

#### Type Parameters

##### T

`T` *extends* `IColor3Like`

#### Parameters

##### scale

`number`

defines the scale factor

##### result

`T`

defines color to store the result into

#### Returns

`T`

the result Color3

#### Implementation of

`Tensor.scaleAndAddToRef`

***

### scaleInPlace()

> **scaleInPlace**(`scale`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:381](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L381)

Multiplies the Color3 values by the float "scale"

#### Parameters

##### scale

`number`

defines the scaling factor to apply

#### Returns

`this`

the current updated Color3

#### Implementation of

`Tensor.scaleInPlace`

***

### scaleToRef()

> **scaleToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:394](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L394)

Multiplies the rgb values by scale and stores the result into "result"

#### Type Parameters

##### T

`T` *extends* `IColor3Like`

#### Parameters

##### scale

`number`

defines the scaling factor

##### result

`T`

defines the Color3 object where to store the result

#### Returns

`T`

the result Color3

#### Implementation of

`Tensor.scaleToRef`

***

### set()

> **set**(`r`, `g`, `b`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:577](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L577)

Updates the Color3 rgb values from the given floats

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

#### Returns

`this`

the current Color3 object

#### Implementation of

`Tensor.set`

***

### setAll()

> **setAll**(`v`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:586](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L586)

Copies the given float to the current Color3 coordinates

#### Parameters

##### v

`number`

defines the r, g and b coordinates of the operand

#### Returns

`this`

the current updated Color3

#### Implementation of

`Tensor.setAll`

***

### subtract()

> **subtract**(`otherColor`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:481](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L481)

Returns a new Color3 set with the subtracted values of the given one from the current Color3

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor3Like`\>

defines the second operand

#### Returns

`Color3`

the new Color3

#### Implementation of

`Tensor.subtract`

***

### subtractFromFloats()

> **subtractFromFloats**(`r`, `g`, `b`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:517](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L517)

Returns a new Color3 set with the subtraction of the given floats from the current Color3 coordinates

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

#### Returns

`Color3`

the resulting Color3

#### Implementation of

`Tensor.subtractFromFloats`

***

### subtractFromFloatsToRef()

> **subtractFromFloatsToRef**\<`T`\>(`r`, `g`, `b`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:529](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L529)

Subtracts the given floats from the current Color3 coordinates and set the given color "result" with this result

#### Type Parameters

##### T

`T` *extends* `IColor3Like`

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

##### result

`T`

defines the Color3 object where to store the result

#### Returns

`T`

the result

#### Implementation of

`Tensor.subtractFromFloatsToRef`

***

### subtractInPlace()

> **subtractInPlace**(`otherColor`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:503](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L503)

Subtract the given color from the current Color3

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor3Like`\>

defines the second operand

#### Returns

`this`

the current updated Color3

#### Implementation of

`Tensor.subtractInPlace`

***

### subtractToRef()

> **subtractToRef**\<`T`\>(`otherColor`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:491](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L491)

Stores the result of the subtraction of given one from the current Color3 rgb values into "result"

#### Type Parameters

##### T

`T` *extends* `IColor3Like`

#### Parameters

##### otherColor

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IColor3Like`\>

defines the second operand

##### result

`T`

defines Color3 object to store the result into

#### Returns

`T`

the unmodified current Color3

#### Implementation of

`Tensor.subtractToRef`

***

### toArray()

> **toArray**(`array`, `index?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L111)

Stores in the given array from the given starting index the red, green, blue values as successive elements

#### Parameters

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

defines the array where to store the r,g,b components

##### index?

`number` = `0`

defines an optional index in the target array to define where to start storing values

#### Returns

`this`

the current Color3 object

#### Implementation of

`Tensor.toArray`

***

### toColor4()

> **toColor4**(`alpha?`): [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L135)

Returns a new Color4 object from the current Color3 and the given alpha

#### Parameters

##### alpha?

`number` = `1`

defines the alpha component on the new Color4 object (default is 1)

#### Returns

[`Color4`](Color4.md)

a new Color4 object

***

### toGammaSpace()

> **toGammaSpace**(`exact?`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:704](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L704)

Computes a new Color3 converted from the current one to gamma space

#### Parameters

##### exact?

`boolean` = `false`

defines if the conversion will be done in an exact way which is slower but more accurate (default is false)

#### Returns

`Color3`

a new Color3 object

***

### toGammaSpaceToRef()

> **toGammaSpaceToRef**(`convertedColor`, `exact?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:716](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L716)

Converts the Color3 values to gamma space and stores the result in "convertedColor"

#### Parameters

##### convertedColor

`IColor3Like`

defines the Color3 object where to store the gamma space version

##### exact?

`boolean` = `false`

defines if the conversion will be done in an exact way which is slower but more accurate (default is false)

#### Returns

`this`

the unmodified Color3

***

### toHexString()

> **toHexString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:595](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L595)

Compute the Color3 hexadecimal code as a string

#### Returns

`string`

a string containing the hexadecimal representation of the Color3 object

***

### toHSV()

> **toHSV**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:623](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L623)

Converts current color in rgb space to HSV values

#### Returns

`Color3`

a new color3 representing the HSV values

***

### toHSVToRef()

> **toHSVToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:632](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L632)

Converts current color in rgb space to HSV values

#### Type Parameters

##### T

`T` *extends* `IColor3Like`

#### Parameters

##### result

`T`

defines the Color3 where to store the HSV values

#### Returns

`T`

the updated result

***

### toLinearSpace()

> **toLinearSpace**(`exact?`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:674](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L674)

Computes a new Color3 converted from the current one to linear space

#### Parameters

##### exact?

`boolean` = `false`

defines if the conversion will be done in an exact way which is slower but more accurate (default is false)

#### Returns

`Color3`

a new Color3 object

***

### toLinearSpaceToRef()

> **toLinearSpaceToRef**(`convertedColor`, `exact?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:686](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L686)

Converts the Color3 values to linear space and stores the result in "convertedColor"

#### Parameters

##### convertedColor

`IColor3Like`

defines the Color3 object where to store the linear space version

##### exact?

`boolean` = `false`

defines if the conversion will be done in an exact way which is slower but more accurate (default is false)

#### Returns

`this`

the unmodified Color3

***

### toLuminance()

> **toLuminance**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L151)

Returns the luminance value

#### Returns

`number`

a float value

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L80)

Creates a string with the Color3 current values

#### Returns

`string`

the string representation of the Color3 object

***

### Black()

> `static` **Black**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:952](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L952)

Returns a Color3 value containing a black color

#### Returns

`Color3`

a new Color3 object

***

### Blue()

> `static` **Blue**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:945](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L945)

Returns a Color3 value containing a blue color

#### Returns

`Color3`

a new Color3 object

***

### FromArray()

> `static` **FromArray**(`array`, `offset?`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:804](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L804)

Creates a new Color3 from the starting index of the given array

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

defines the source array

##### offset?

`number` = `0`

defines an offset in the source array

#### Returns

`Color3`

a new Color3 object

***

### FromArrayToRef()

> `static` **FromArrayToRef**(`array`, `offset?`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:814](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L814)

Creates a new Color3 from the starting index element of the given array

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

defines the source array to read from

##### offset?

`number` = `0`

defines the offset in the source array

##### result

`Color3`

defines the target Color3 object

#### Returns

`void`

***

### FromHexString()

> `static` **FromHexString**(`hex`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:794](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L794)

Creates a new Color3 from the string containing valid hexadecimal values

#### Parameters

##### hex

`string`

defines a string containing valid hexadecimal values

#### Returns

`Color3`

a new Color3 object

***

### FromHSV()

> `static` **FromHSV**(`hue`, `saturation`, `value`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:783](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L783)

Converts Hue, saturation and value to a new Color3 (RGB)

#### Parameters

##### hue

`number`

defines the hue (value between 0 and 360)

##### saturation

`number`

defines the saturation (value between 0 and 1)

##### value

`number`

defines the value (value between 0 and 1)

#### Returns

`Color3`

a new Color3 object

***

### FromInts()

> `static` **FromInts**(`r`, `g`, `b`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:827](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L827)

Creates a new Color3 from integer values (\< 256)

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

#### Returns

`Color3`

a new Color3 object

***

### Gray()

> `static` **Gray**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:995](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L995)

Returns a Color3 value containing a gray color

#### Returns

`Color3`

a new Color3 object

***

### Green()

> `static` **Green**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:938](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L938)

Returns a Color3 value containing a green color

#### Returns

`Color3`

a new Color3 object

***

### Hermite()

> `static` **Hermite**(`value1`, `tangent1`, `value2`, `tangent2`, `amount`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:866](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L866)

Returns a new Color3 located for "amount" (float) on the Hermite interpolation spline defined by the vectors "value1", "tangent1", "value2", "tangent2"

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

defines the first control point

##### tangent1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

defines the first tangent Color3

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

defines the second control point

##### tangent2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

defines the second tangent Color3

##### amount

`number`

defines the amount on the interpolation spline (between 0 and 1)

#### Returns

`Color3`

the new Color3

***

### Hermite1stDerivative()

> `static` **Hermite1stDerivative**(`value1`, `tangent1`, `value2`, `tangent2`, `time`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:889](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L889)

Returns a new Color3 which is the 1st derivative of the Hermite spline defined by the colors "value1", "value2", "tangent1", "tangent2".

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

defines the first control point

##### tangent1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

defines the first tangent

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

defines the second control point

##### tangent2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

defines the second tangent

##### time

`number`

define where the derivative must be done

#### Returns

`Color3`

1st derivative

***

### Hermite1stDerivativeToRef()

> `static` **Hermite1stDerivativeToRef**(`value1`, `tangent1`, `value2`, `tangent2`, `time`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:912](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L912)

Returns a new Color3 which is the 1st derivative of the Hermite spline defined by the colors "value1", "value2", "tangent1", "tangent2".

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

defines the first control point

##### tangent1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

defines the first tangent

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

defines the second control point

##### tangent2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

defines the second tangent

##### time

`number`

define where the derivative must be done

##### result

`Color3`

define where to store the derivative

#### Returns

`void`

***

### HSVtoRGBToRef()

> `static` **HSVtoRGBToRef**\<`T`\>(`hue`, `saturation`, `value`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:741](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L741)

Converts Hue, saturation and value to a Color3 (RGB)

#### Type Parameters

##### T

`T` *extends* `IColor3Like`

#### Parameters

##### hue

`number`

defines the hue (value between 0 and 360)

##### saturation

`number`

defines the saturation (value between 0 and 1)

##### value

`number`

defines the value (value between 0 and 1)

##### result

`T`

defines the Color3 where to store the RGB values

#### Returns

`T`

the updated result

***

### Lerp()

> `static` **Lerp**(`start`, `end`, `amount`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:838](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L838)

Creates a new Color3 with values linearly interpolated of "amount" between the start Color3 and the end Color3

#### Parameters

##### start

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

defines the start Color3 value

##### end

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

defines the end Color3 value

##### amount

`number`

defines the gradient value between start and end

#### Returns

`Color3`

a new Color3 object

***

### LerpToRef()

> `static` **LerpToRef**(`left`, `right`, `amount`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:851](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L851)

Creates a new Color3 with values linearly interpolated of "amount" between the start Color3 and the end Color3

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

defines the start value

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

defines the end value

##### amount

`number`

defines the gradient factor

##### result

`Color3`

defines the Color3 object where to store the result

#### Returns

`void`

***

### Magenta()

> `static` **Magenta**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:981](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L981)

Returns a Color3 value containing a magenta color

#### Returns

`Color3`

a new Color3 object

***

### Purple()

> `static` **Purple**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:974](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L974)

Returns a Color3 value containing a purple color

#### Returns

`Color3`

a new Color3 object

***

### Random()

> `static` **Random**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1009](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1009)

Returns a Color3 value containing a random color

#### Returns

`Color3`

a new Color3 object

***

### Red()

> `static` **Red**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:931](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L931)

Returns a Color3 value containing a red color

#### Returns

`Color3`

a new Color3 object

***

### Teal()

> `static` **Teal**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:1002](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L1002)

Returns a Color3 value containing a teal color

#### Returns

`Color3`

a new Color3 object

***

### White()

> `static` **White**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:967](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L967)

Returns a Color3 value containing a white color

#### Returns

`Color3`

a new Color3 object

***

### Yellow()

> `static` **Yellow**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.pure.ts:988](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.color.pure.ts#L988)

Returns a Color3 value containing a yellow color

#### Returns

`Color3`

a new Color3 object
