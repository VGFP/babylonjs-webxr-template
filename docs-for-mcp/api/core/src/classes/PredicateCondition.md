[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PredicateCondition

# Class: PredicateCondition

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L216)

Defines a predicate condition as an extension of Condition

## Extends

- [`Condition`](Condition.md)

## Constructors

### Constructor

> **new PredicateCondition**(`actionManager`, `predicate`): `PredicateCondition`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L228)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L231)

defines the predicate function used to validate the condition

#### Returns

`boolean`

## Methods

### isValid()

> **isValid**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L239)

#### Returns

`boolean`

the validity of the predicate condition

#### Overrides

[`Condition`](Condition.md).[`isValid`](Condition.md#isvalid)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/condition.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/condition.pure.ts#L63)

Serialize placeholder for child classes

#### Returns

`any`

the serialized object

#### Inherited from

[`Condition`](Condition.md).[`serialize`](Condition.md#serialize)
