[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Condition

# Class: Condition

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L9)

A Condition applied to an Action

## Extended by

- [`ValueCondition`](ValueCondition.md)
- [`PredicateCondition`](PredicateCondition.md)
- [`StateCondition`](StateCondition.md)

## Constructors

### Constructor

> **new Condition**(`actionManager`): `Condition`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L30)

Creates a new Condition

#### Parameters

##### actionManager

[`ActionManager`](ActionManager.md)

the manager of the action the condition is applied to

#### Returns

`Condition`

## Methods

### isValid()

> **isValid**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L38)

Check if the current condition is valid

#### Returns

`boolean`

a boolean

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L61)

Serialize placeholder for child classes

#### Returns

`any`

the serialized object
