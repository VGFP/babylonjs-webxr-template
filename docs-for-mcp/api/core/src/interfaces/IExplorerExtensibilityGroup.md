[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IExplorerExtensibilityGroup

# Interface: IExplorerExtensibilityGroup

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L37)

Defines a group of actions associated with a predicate to use when extending the Inspector scene explorer

## Properties

### entries

> **entries**: [`IExplorerExtensibilityOption`](IExplorerExtensibilityOption.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L45)

Gets the list of options added to a type

***

### predicate

> **predicate**: (`entity`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L41)

Defines a predicate to test if a given type mut be extended

#### Parameters

##### entity

`any`

#### Returns

`boolean`
