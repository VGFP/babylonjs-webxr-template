[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / StateCondition

# Class: StateCondition

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:247](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L247)

Defines a state condition as an extension of Condition

## Extends

- [`Condition`](Condition.md)

## Constructors

### Constructor

> **new StateCondition**(`actionManager`, `target`, `value`): `StateCondition`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:262](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L262)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:266](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L266)

Value to compare with target state

## Methods

### isValid()

> **isValid**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:277](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L277)

Gets a boolean indicating if the current condition is met

#### Returns

`boolean`

the validity of the state

#### Overrides

[`Condition`](Condition.md).[`isValid`](Condition.md#isvalid)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:285](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L285)

Serialize the StateCondition into a JSON compatible object

#### Returns

`any`

serialization object

#### Overrides

[`Condition`](Condition.md).[`serialize`](Condition.md#serialize)
