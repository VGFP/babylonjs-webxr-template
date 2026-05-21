[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / StateCondition

# Class: StateCondition

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:245](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L245)

Defines a state condition as an extension of Condition

## Extends

- [`Condition`](Condition.md)

## Constructors

### Constructor

> **new StateCondition**(`actionManager`, `target`, `value`): `StateCondition`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:260](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L260)

Creates a new StateCondition

#### Parameters

##### actionManager

[`ActionManager`](ActionManager.md)

manager for the action the condition applies to

##### target

`any`

of the condition

##### value

`string`

to compare with target state

#### Returns

`StateCondition`

#### Overrides

[`Condition`](Condition.md).[`constructor`](Condition.md#constructor)

## Properties

### value

> **value**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:264](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L264)

Value to compare with target state

## Methods

### isValid()

> **isValid**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:275](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L275)

Gets a boolean indicating if the current condition is met

#### Returns

`boolean`

the validity of the state

#### Overrides

[`Condition`](Condition.md).[`isValid`](Condition.md#isvalid)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.ts:283](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/condition.ts#L283)

Serialize the StateCondition into a JSON compatible object

#### Returns

`any`

serialization object

#### Overrides

[`Condition`](Condition.md).[`serialize`](Condition.md#serialize)
