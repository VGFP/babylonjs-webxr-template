[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IExplorerExtensibilityGroup

# Interface: IExplorerExtensibilityGroup

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/debugLayer.pure.ts#L39)

Defines a group of actions associated with a predicate to use when extending the Inspector scene explorer

## Properties

### entries

> **entries**: [`IExplorerExtensibilityOption`](IExplorerExtensibilityOption.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/debugLayer.pure.ts#L47)

Gets the list of options added to a type

***

### predicate

> **predicate**: (`entity`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/debugLayer.pure.ts#L43)

Defines a predicate to test if a given type mut be extended

#### Parameters

##### entity

`any`

#### Returns

`boolean`
