[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Action

# Class: Action

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L82)

The action to be carried out following a trigger

## See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#available-actions

## Extended by

- [`SwitchBooleanAction`](SwitchBooleanAction.md)
- [`SetStateAction`](SetStateAction.md)
- [`SetValueAction`](SetValueAction.md)
- [`IncrementValueAction`](IncrementValueAction.md)
- [`PlayAnimationAction`](PlayAnimationAction.md)
- [`StopAnimationAction`](StopAnimationAction.md)
- [`DoNothingAction`](DoNothingAction.md)
- [`CombineAction`](CombineAction.md)
- [`ExecuteCodeAction`](ExecuteCodeAction.md)
- [`SetParentAction`](SetParentAction.md)
- [`PlaySoundAction`](PlaySoundAction.md)
- [`StopSoundAction`](StopSoundAction.md)
- [`InterpolateValueAction`](InterpolateValueAction.md)

## Implements

- [`IAction`](../interfaces/IAction.md)

## Constructors

### Constructor

> **new Action**(`triggerOptions`, `condition?`): `Action`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L109)

Creates a new Action

#### Parameters

##### triggerOptions

`any`

the trigger, with or without parameters, for the action

##### condition?

[`Condition`](Condition.md)

an optional determinant of action

#### Returns

`Action`

## Properties

### onBeforeExecuteObservable

> **onBeforeExecuteObservable**: [`Observable`](Observable.md)\<`Action`\>

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L102)

An event triggered prior to action being executed.

***

### trigger

> **trigger**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L86)

Trigger for the action

#### Implementation of

[`IAction`](../interfaces/IAction.md).[`trigger`](../interfaces/IAction.md#trigger)

***

### triggerOptions

> **triggerOptions**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L111)

the trigger, with or without parameters, for the action

#### Implementation of

[`IAction`](../interfaces/IAction.md).[`triggerOptions`](../interfaces/IAction.md#triggeroptions)

## Methods

### execute()

> **execute**(`evt?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L191)

Execute placeholder for child classes

#### Parameters

##### evt?

[`ActionEvent`](ActionEvent.md)

optional action event

#### Returns

`void`

***

### getTriggerParameter()

> **getTriggerParameter**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L137)

Gets the trigger parameter

#### Returns

`any`

the trigger parameter

#### Implementation of

[`IAction`](../interfaces/IAction.md).[`getTriggerParameter`](../interfaces/IAction.md#gettriggerparameter)

***

### serialize()

> **serialize**(`parent`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:244](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L244)

Serialize placeholder for child classes

#### Parameters

##### parent

`any`

of child

#### Returns

`any`

the serialized object

#### Implementation of

[`IAction`](../interfaces/IAction.md).[`serialize`](../interfaces/IAction.md#serialize)

***

### setTriggerParameter()

> **setTriggerParameter**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L145)

Sets the trigger parameter

#### Parameters

##### value

`any`

defines the new trigger parameter

#### Returns

`void`

***

### skipToNextActiveAction()

> **skipToNextActiveAction**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L196)

Skips to next active action

#### Returns

`void`

***

### then()

> **then**(`action`): `Action`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L214)

Adds action to chain of actions, may be a DoNothingAction

#### Parameters

##### action

`Action`

defines the next action to execute

#### Returns

`Action`

The action passed in

#### See

https://www.babylonjs-playground.com/#1T30HR#0

#### Implementation of

[`IAction`](../interfaces/IAction.md).[`then`](../interfaces/IAction.md#then)
