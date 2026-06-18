[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SetValueAction

# Class: SetValueAction

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/directActions.pure.ts#L122)

This defines an action responsible to set a property of the target
 to a desired value once triggered.

## See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions

## Extends

- [`Action`](Action.md)

## Constructors

### Constructor

> **new SetValueAction**(`triggerOptions`, `target`, `propertyPath`, `value`, `condition?`): `SetValueAction`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.pure.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/directActions.pure.ts#L145)

Instantiate the action

#### Parameters

##### triggerOptions

`any`

defines the trigger options

##### target

`any`

defines the object containing the property

##### propertyPath

`string`

defines the path of the property to set in the target

##### value

`any`

defines the value to set in the property

##### condition?

[`Condition`](Condition.md)

defines the trigger related conditions

#### Returns

`SetValueAction`

#### Overrides

[`Action`](Action.md).[`constructor`](Action.md#constructor)

## Properties

### onBeforeExecuteObservable

> **onBeforeExecuteObservable**: [`Observable`](Observable.md)\<[`Action`](Action.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L102)

An event triggered prior to action being executed.

#### Inherited from

[`Action`](Action.md).[`onBeforeExecuteObservable`](Action.md#onbeforeexecuteobservable)

***

### propertyPath

> **propertyPath**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.pure.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/directActions.pure.ts#L126)

The path of the property to set in the target.

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

***

### value

> **value**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.pure.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/directActions.pure.ts#L131)

The value to set in the property

## Methods

### execute()

> **execute**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.pure.ts:161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/directActions.pure.ts#L161)

Execute the action and set the targeted property to the desired value.

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.pure.ts:174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/directActions.pure.ts#L174)

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
