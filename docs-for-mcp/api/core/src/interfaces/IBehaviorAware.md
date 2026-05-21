[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IBehaviorAware

# Interface: IBehaviorAware\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/behavior.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/behavior.ts#L33)

Interface implemented by classes supporting behaviors

## Type Parameters

### T

`T`

## Methods

### addBehavior()

> **addBehavior**(`behavior`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/behavior.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/behavior.ts#L39)

Attach a behavior

#### Parameters

##### behavior

[`Behavior`](Behavior.md)\<`T`\>

defines the behavior to attach

#### Returns

`T`

the current host

***

### getBehaviorByName()

> **getBehaviorByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Behavior`](Behavior.md)\<`T`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/behavior.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/behavior.ts#L51)

Gets a behavior using its name to search

#### Parameters

##### name

`string`

defines the name to search

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Behavior`](Behavior.md)\<`T`\>\>

the behavior or null if not found

***

### removeBehavior()

> **removeBehavior**(`behavior`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/behavior.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/behavior.ts#L45)

Remove a behavior from the current object

#### Parameters

##### behavior

[`Behavior`](Behavior.md)\<`T`\>

defines the behavior to detach

#### Returns

`T`

the current host
