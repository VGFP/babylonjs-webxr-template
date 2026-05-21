[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Behavior

# Interface: Behavior\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/behavior.ts:7](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/behavior.ts#L7)

Interface used to define a behavior

## Type Parameters

### T

`T`

## Properties

### attachedNode

> **attachedNode**: [`Nullable`](../type-aliases/Nullable.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/behavior.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/behavior.ts#L27)

Gets the current attached target

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/behavior.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/behavior.ts#L9)

gets or sets behavior's name

## Methods

### attach()

> **attach**(`target`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/behavior.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/behavior.ts#L19)

Called when the behavior is attached to a target

#### Parameters

##### target

`T`

defines the target where the behavior is attached to

#### Returns

`void`

***

### detach()

> **detach**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/behavior.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/behavior.ts#L23)

Called when the behavior is detached from its target

#### Returns

`void`

***

### init()

> **init**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/behavior.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/behavior.ts#L14)

Function called when the behavior needs to be initialized (before attaching it to a target)

#### Returns

`void`
