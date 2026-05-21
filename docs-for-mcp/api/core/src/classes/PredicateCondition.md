[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PredicateCondition

# Class: PredicateCondition

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L214)

Defines a predicate condition as an extension of Condition

## Extends

- [`Condition`](Condition.md)

## Constructors

### Constructor

> **new PredicateCondition**(`actionManager`, `predicate`): `PredicateCondition`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L226)

Creates a new PredicateCondition

#### Parameters

##### actionManager

[`ActionManager`](ActionManager.md)

manager for the action the condition applies to

##### predicate

() => `boolean`

defines the predicate function used to validate the condition

#### Returns

`PredicateCondition`

#### Overrides

[`Condition`](Condition.md).[`constructor`](Condition.md#constructor)

## Properties

### predicate

> **predicate**: () => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:229](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L229)

defines the predicate function used to validate the condition

#### Returns

`boolean`

## Methods

### isValid()

> **isValid**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L237)

#### Returns

`boolean`

the validity of the predicate condition

#### Overrides

[`Condition`](Condition.md).[`isValid`](Condition.md#isvalid)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L61)

Serialize placeholder for child classes

#### Returns

`any`

the serialized object

#### Inherited from

[`Condition`](Condition.md).[`serialize`](Condition.md#serialize)
