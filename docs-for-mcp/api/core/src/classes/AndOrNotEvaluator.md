[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AndOrNotEvaluator

# Class: AndOrNotEvaluator

Defined in: [babylonjs-source/packages/dev/core/src/Misc/andOrNotEvaluator.ts:4](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/andOrNotEvaluator.ts#L4)

Class used to evaluate queries containing `and` and `or` operators

## Constructors

### Constructor

> **new AndOrNotEvaluator**(): `AndOrNotEvaluator`

#### Returns

`AndOrNotEvaluator`

## Methods

### Eval()

> `static` **Eval**(`query`, `evaluateCallback`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/andOrNotEvaluator.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/andOrNotEvaluator.ts#L11)

Evaluate a query

#### Parameters

##### query

`string`

defines the query to evaluate

##### evaluateCallback

(`val`) => `boolean`

defines the callback used to filter result

#### Returns

`boolean`

true if the query matches
