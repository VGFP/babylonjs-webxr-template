[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PlayAnimationAction

# Class: PlayAnimationAction

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.pure.ts:269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/directActions.pure.ts#L269)

This defines an action responsible to start an animation once triggered.

## See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions

## Extends

- [`Action`](Action.md)

## Constructors

### Constructor

> **new PlayAnimationAction**(`triggerOptions`, `target`, `from`, `to`, `loop?`, `condition?`): `PlayAnimationAction`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/directActions.pure.ts#L296)

Instantiate the action

#### Parameters

##### triggerOptions

`any`

defines the trigger options

##### target

`any`

defines the target animation or animation name

##### from

`number`

defines from where the animation should start (animation frame)

##### to

`number`

defines where the animation should stop (animation frame)

##### loop?

`boolean`

defines if the animation should loop or stop after the first play

##### condition?

[`Condition`](Condition.md)

defines the trigger related conditions

#### Returns

`PlayAnimationAction`

#### Overrides

[`Action`](Action.md).[`constructor`](Action.md#constructor)

## Properties

### from

> **from**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.pure.ts:273](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/directActions.pure.ts#L273)

Where the animation should start (animation frame)

***

### loop?

> `optional` **loop?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.pure.ts:283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/directActions.pure.ts#L283)

Define if the animation should loop or stop after the first play.

***

### onBeforeExecuteObservable

> **onBeforeExecuteObservable**: [`Observable`](Observable.md)\<[`Action`](Action.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L102)

An event triggered prior to action being executed.

#### Inherited from

[`Action`](Action.md).[`onBeforeExecuteObservable`](Action.md#onbeforeexecuteobservable)

***

### to

> **to**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.pure.ts:278](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/directActions.pure.ts#L278)

Where the animation should stop (animation frame)

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

> **execute**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/directActions.pure.ts#L310)

Execute the action and play the animation.

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.pure.ts:320](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/directActions.pure.ts#L320)

Serializes the actions and its related information.

#### Parameters

##### parent

`any`

defines the object to serialize in

#### Returns

`any`

the serialized object

#### Overrides

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
