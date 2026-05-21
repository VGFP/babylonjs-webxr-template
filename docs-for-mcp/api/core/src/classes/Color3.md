[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Color3

# Class: Color3

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L34)

Class used to hold a RGB color

## Implements

- `Tensor`\<[`Tuple`](../type-aliases/Tuple.md)\<`number`, `3`\>, `IColor3Like`\>

## Constructors

### Constructor

> **new Color3**(`r?`, `g?`, `b?`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L59)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L71)

[0] Defines the blue component (between 0 and 1, default is 0)

#### Implementation of

`IColor3Like.b`

***

### dimension

> `readonly` **dimension**: \[`3`\]

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L46)

#### See

Tensor.dimension

#### Implementation of

`Tensor.dimension`

***

### g

> **g**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L67)

[0] Defines the green component (between 0 and 1, default is 0)

#### Implementation of

`IColor3Like.g`

***

### r

> **r**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L63)

[0] Defines the red component (between 0 and 1, default is 0)

#### Implementation of

`IColor3Like.r`

***

### rank

> `readonly` **rank**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L51)

#### See

Tensor.rank

#### Implementation of

`Tensor.rank`

***

### \_V8PerformanceHack

> `static` **\_V8PerformanceHack**: [`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<`Color3`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L42)

If the first color is flagged with integers (as everything is 0,0,0), V8 stores all of the properties as integers internally because it doesn't know any better yet.
If subsequent colors are created with non-integer values, V8 determines that it would be best to represent these properties as doubles instead of integers,
and henceforth it will use floating-point representation for all color instances that it creates.
But the original color instances are unchanged and has a "deprecated map".
If we keep using the color instances from step 1, it will now be a poison pill which will mess up optimizations in any code it touches.

## Accessors

### BlackReadOnly

#### Get Signature

> **get** `static` **BlackReadOnly**(): [`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:957](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L957)

Gets a Color3 value containing a black color that must not be updated

##### Returns

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Color3`\>

## Methods

### add()

> **add**(`otherColor`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:431](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L431)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:440](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L440)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:454](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L454)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:467](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L467)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L141)

Returns a new array populated with 3 numeric elements : red, green and blue values

#### Returns

\[`number`, `number`, `number`\]

the new array

#### Implementation of

`Tensor.asArray`

***

### clampToRef()

> **clampToRef**\<`T`\>(`min?`, `max?`, `result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:419](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L419)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:538](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L538)

Copy the current object

#### Returns

`Color3`

a new Color3 copied the current one

#### Implementation of

`Tensor.clone`

***

### copyFrom()

> **copyFrom**(`source`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:547](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L547)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:561](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L561)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:305](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L305)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:316](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L316)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:327](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L327)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:337](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L337)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L123)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:605](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L605)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L86)

Returns the string "Color3"

#### Returns

`string`

"Color3"

#### Implementation of

`Tensor.getClassName`

***

### getHashCode()

> **getHashCode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L94)

Compute the Color3 hash code

#### Returns

`number`

an unique number that can be used to hash Color3 objects

#### Implementation of

`Tensor.getHashCode`

***

### maximizeInPlace()

> **maximizeInPlace**(`other`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:236](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L236)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L261)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L227)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:247](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L247)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L158)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L194)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L180)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L168)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:370](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L370)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:405](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L405)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:379](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L379)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:392](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L392)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:575](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L575)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:584](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L584)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:479](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L479)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:515](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L515)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:527](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L527)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:501](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L501)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:489](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L489)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L109)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L133)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:702](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L702)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:714](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L714)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:593](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L593)

Compute the Color3 hexadecimal code as a string

#### Returns

`string`

a string containing the hexadecimal representation of the Color3 object

***

### toHSV()

> **toHSV**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:621](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L621)

Converts current color in rgb space to HSV values

#### Returns

`Color3`

a new color3 representing the HSV values

***

### toHSVToRef()

> **toHSVToRef**\<`T`\>(`result`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:630](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L630)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:672](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L672)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:684](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L684)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L149)

Returns the luminance value

#### Returns

`number`

a float value

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L78)

Creates a string with the Color3 current values

#### Returns

`string`

the string representation of the Color3 object

***

### Black()

> `static` **Black**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:950](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L950)

Returns a Color3 value containing a black color

#### Returns

`Color3`

a new Color3 object

***

### Blue()

> `static` **Blue**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:943](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L943)

Returns a Color3 value containing a blue color

#### Returns

`Color3`

a new Color3 object

***

### FromArray()

> `static` **FromArray**(`array`, `offset?`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:802](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L802)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:812](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L812)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:792](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L792)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:781](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L781)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:825](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L825)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:993](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L993)

Returns a Color3 value containing a gray color

#### Returns

`Color3`

a new Color3 object

***

### Green()

> `static` **Green**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:936](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L936)

Returns a Color3 value containing a green color

#### Returns

`Color3`

a new Color3 object

***

### Hermite()

> `static` **Hermite**(`value1`, `tangent1`, `value2`, `tangent2`, `amount`): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:864](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L864)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:887](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L887)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:910](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L910)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:739](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L739)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:836](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L836)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:849](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L849)

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

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:979](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L979)

Returns a Color3 value containing a magenta color

#### Returns

`Color3`

a new Color3 object

***

### Purple()

> `static` **Purple**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:972](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L972)

Returns a Color3 value containing a purple color

#### Returns

`Color3`

a new Color3 object

***

### Random()

> `static` **Random**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:1007](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L1007)

Returns a Color3 value containing a random color

#### Returns

`Color3`

a new Color3 object

***

### Red()

> `static` **Red**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:929](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L929)

Returns a Color3 value containing a red color

#### Returns

`Color3`

a new Color3 object

***

### Teal()

> `static` **Teal**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:1000](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L1000)

Returns a Color3 value containing a teal color

#### Returns

`Color3`

a new Color3 object

***

### White()

> `static` **White**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:965](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L965)

Returns a Color3 value containing a white color

#### Returns

`Color3`

a new Color3 object

***

### Yellow()

> `static` **Yellow**(): `Color3`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.color.ts:986](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.color.ts#L986)

Returns a Color3 value containing a yellow color

#### Returns

`Color3`

a new Color3 object
