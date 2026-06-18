[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ExecuteCodeAction

# Class: ExecuteCodeAction

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.pure.ts:491](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/directActions.pure.ts#L491)

This defines an action responsible to run code (external event) once triggered.

## See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions

## Extends

- [`Action`](Action.md)

## Constructors

### Constructor

> **new ExecuteCodeAction**(`triggerOptions`, `func`, `condition?`): `ExecuteCodeAction`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.pure.ts:503](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/directActions.pure.ts#L503)

Instantiate the action

#### Parameters

##### triggerOptions

`any`

defines the trigger options

##### func

(`evt`) => `void`

defines the callback function to run

##### condition?

[`Condition`](Condition.md)

defines the trigger related conditions

#### Returns

`ExecuteCodeAction`

#### Overrides

[`Action`](Action.md).[`constructor`](Action.md#constructor)

## Properties

### func

> **func**: (`evt`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.pure.ts:495](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/directActions.pure.ts#L495)

The callback function to run.

#### Parameters

##### evt

[`ActionEvent`](ActionEvent.md)

#### Returns

`void`

***

### onBeforeExecuteObservable

> **onBeforeExecuteObservable**: [`Observable`](Observable.md)\<[`Action`](Action.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L102)

An event triggered prior to action being executed.

#### Inherited from

[`Action`](Action.md).[`onBeforeExecuteObservable`](Action.md#onbeforeexecuteobservable)

***

### trigger

> **trigger**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L86)

Trigger for the action

#### Inherited from

[`Action`](Action.md).[`trigger`](Action.md#trigger)

***

### triggerOptions

> **triggerOptions**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L111)

the trigger, with or without parameters, for the action

#### Inherited from

[`Action`](Action.md).[`triggerOptions`](Action.md#triggeroptions)

## Methods

### execute()

> **execute**(`evt`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.pure.ts:512](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/directActions.pure.ts#L512)

Execute the action and run the attached code.

#### Parameters

##### evt

[`ActionEvent`](ActionEvent.md)

event to execute

#### Returns

`void`

#### Overrides

[`Action`](Action.md).[`execute`](Action.md#execute)

***

### getTriggerParameter()

> **getTriggerParameter**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L137)

Gets the trigger parameter

#### Returns

`any`

the trigger parameter

#### Inherited from

[`Action`](Action.md).[`getTriggerParameter`](Action.md#gettriggerparameter)

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

#### Inherited from

[`Action`](Action.md).[`serialize`](Action.md#serialize)

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

#### Inherited from

[`Action`](Action.md).[`setTriggerParameter`](Action.md#settriggerparameter)

***

### skipToNextActiveAction()

> **skipToNextActiveAction**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L196)

Skips to next active action

#### Returns

`void`

#### Inherited from

[`Action`](Action.md).[`skipToNextActiveAction`](Action.md#skiptonextactiveaction)

***

### then()

> **then**(`action`): [`Action`](Action.md)

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L214)

Adds action to chain of actions, may be a DoNothingAction

#### Parameters

##### action

[`Action`](Action.md)

defines the next action to execute

#### Returns

[`Action`](Action.md)

The action passed in

#### See

https://www.babylonjs-playground.com/#1T30HR#0

#### Inherited from

[`Action`](Action.md).[`then`](Action.md#then)
