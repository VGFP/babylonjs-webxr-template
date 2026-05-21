[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ValueCondition

# Class: ValueCondition

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L79)

Defines specific conditional operators as extensions of Condition

## Extends

- [`Condition`](Condition.md)

## Constructors

### Constructor

> **new ValueCondition**(`actionManager`, `target`, `propertyPath`, `value`, `operator?`): `ValueCondition`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L131)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L139)

[number] the conditional operator, default ValueCondition.IsEqual

***

### propertyPath

> **propertyPath**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L135)

path to specify the property of the target the conditional operator uses

***

### value

> **value**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L137)

the value compared by the conditional operator against the current value of the property

## Accessors

### IsDifferent

#### Get Signature

> **get** `static` **IsDifferent**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L95)

Returns the number for IsDifferent

##### Returns

`number`

***

### IsEqual

#### Get Signature

> **get** `static` **IsEqual**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L88)

returns the number for IsEqual

##### Returns

`number`

***

### IsGreater

#### Get Signature

> **get** `static` **IsGreater**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L102)

Returns the number for IsGreater

##### Returns

`number`

***

### IsLesser

#### Get Signature

> **get** `static` **IsLesser**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L109)

Returns the number for IsLesser

##### Returns

`number`

## Methods

### isValid()

> **isValid**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L152)

Compares the given value with the property value for the specified conditional operator

#### Returns

`boolean`

the result of the comparison

#### Overrides

[`Condition`](Condition.md).[`isValid`](Condition.md#isvalid)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:178](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L178)

Serialize the ValueCondition into a JSON compatible object

#### Returns

`any`

serialization object

#### Overrides

[`Condition`](Condition.md).[`serialize`](Condition.md#serialize)

***

### GetOperatorName()

> `static` **GetOperatorName**(`operator`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L195)

Gets the name of the conditional operator for the ValueCondition

#### Parameters

##### operator

`number`

the conditional operator

#### Returns

`string`

the name
