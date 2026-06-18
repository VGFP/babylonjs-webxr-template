[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Condition

# Class: Condition

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L11)

A Condition applied to an Action

## Extended by

- [`ValueCondition`](ValueCondition.md)
- [`PredicateCondition`](PredicateCondition.md)
- [`StateCondition`](StateCondition.md)

## Constructors

### Constructor

> **new Condition**(`actionManager`): `Condition`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L32)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L40)

Check if the current condition is valid

#### Returns

`boolean`

a boolean

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L63)

Serialize placeholder for child classes

#### Returns

`any`

the serialized object
