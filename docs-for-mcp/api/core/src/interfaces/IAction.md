[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IAction

# Interface: IAction

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L23)

Interface used to define Action

## Properties

### trigger

> **trigger**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L27)

Trigger for the action

***

### triggerOptions

> **triggerOptions**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L30)

Options of the trigger

## Methods

### getTriggerParameter()

> **getTriggerParameter**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L36)

Gets the trigger parameters

#### Returns

`any`

the trigger parameters

***

### serialize()

> **serialize**(`parent`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L49)

Serialize placeholder for child classes

#### Parameters

##### parent

`any`

of child

#### Returns

`any`

the serialized object

***

### then()

> **then**(`action`): `IAction`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L69)

Adds action to chain of actions, may be a DoNothingAction

#### Parameters

##### action

`IAction`

defines the next action to execute

#### Returns

`IAction`

The action passed in

#### See

https://www.babylonjs-playground.com/#1T30HR#0
