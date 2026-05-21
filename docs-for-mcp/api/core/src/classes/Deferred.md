[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Deferred

# Class: Deferred\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/deferred.ts:4](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/deferred.ts#L4)

Wrapper class for promise with external resolve and reject.

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new Deferred**\<`T`\>(): `Deferred`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/deferred.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/deferred.ts#L30)

Constructor for this deferred object.

#### Returns

`Deferred`\<`T`\>

## Properties

### promise

> `readonly` **promise**: `Promise`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/deferred.ts:8](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/deferred.ts#L8)

The promise associated with this deferred object.

## Accessors

### reject

#### Get Signature

> **get** **reject**(): (`reason?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/deferred.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/deferred.ts#L23)

The reject method of the promise associated with this deferred object.

##### Returns

(`reason?`) => `void`

***

### resolve

#### Get Signature

> **get** **resolve**(): (`value`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/deferred.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/deferred.ts#L16)

The resolve method of the promise associated with this deferred object.

##### Returns

(`value`) => `void`
