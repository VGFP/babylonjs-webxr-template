[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ValueCondition

# Class: ValueCondition

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L81)

Defines specific conditional operators as extensions of Condition

## Extends

- [`Condition`](Condition.md)

## Constructors

### Constructor

> **new ValueCondition**(`actionManager`, `target`, `propertyPath`, `value`, `operator?`): `ValueCondition`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L133)

Creates a new ValueCondition

#### Parameters

##### actionManager

[`ActionManager`](ActionManager.md)

manager for the action the condition applies to

##### target

`any`

for the action

##### propertyPath

`string`

path to specify the property of the target the conditional operator uses

##### value

`any`

the value compared by the conditional operator against the current value of the property

##### operator?

`number` = `ValueCondition.IsEqual`

the conditional operator, default ValueCondition.IsEqual

#### Returns

`ValueCondition`

#### Overrides

[`Condition`](Condition.md).[`constructor`](Condition.md#constructor)

## Properties

### operator

> **operator**: `number` = `ValueCondition.IsEqual`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L141)

[number] the conditional operator, default ValueCondition.IsEqual

***

### propertyPath

> **propertyPath**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L137)

path to specify the property of the target the conditional operator uses

***

### value

> **value**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L139)

the value compared by the conditional operator against the current value of the property

## Accessors

### IsDifferent

#### Get Signature

> **get** `static` **IsDifferent**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L97)

Returns the number for IsDifferent

##### Returns

`number`

***

### IsEqual

#### Get Signature

> **get** `static` **IsEqual**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L90)

returns the number for IsEqual

##### Returns

`number`

***

### IsGreater

#### Get Signature

> **get** `static` **IsGreater**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L104)

Returns the number for IsGreater

##### Returns

`number`

***

### IsLesser

#### Get Signature

> **get** `static` **IsLesser**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L111)

Returns the number for IsLesser

##### Returns

`number`

## Methods

### isValid()

> **isValid**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:154](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L154)

Compares the given value with the property value for the specified conditional operator

#### Returns

`boolean`

the result of the comparison

#### Overrides

[`Condition`](Condition.md).[`isValid`](Condition.md#isvalid)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L180)

Serialize the ValueCondition into a JSON compatible object

#### Returns

`any`

serialization object

#### Overrides

[`Condition`](Condition.md).[`serialize`](Condition.md#serialize)

***

### GetOperatorName()

> `static` **GetOperatorName**(`operator`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:197](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L197)

Gets the name of the conditional operator for the ValueCondition

#### Parameters

##### operator

`number`

the conditional operator

#### Returns

`string`

the name
