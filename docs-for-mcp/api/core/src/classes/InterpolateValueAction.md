[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InterpolateValueAction

# Class: InterpolateValueAction

Defined in: [babylonjs-source/packages/dev/core/src/Actions/interpolateValueAction.pure.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/interpolateValueAction.pure.ts#L18)

This defines an action responsible to change the value of a property
by interpolating between its current value and the newly set one once triggered.

## See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions

## Extends

- [`Action`](Action.md)

## Constructors

### Constructor

> **new InterpolateValueAction**(`triggerOptions`, `target`, `propertyPath`, `value`, `duration?`, `condition?`, `stopOtherAnimations?`, `onInterpolationDone?`): `InterpolateValueAction`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/interpolateValueAction.pure.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/interpolateValueAction.pure.ts#L64)

Instantiate the action

#### Parameters

##### triggerOptions

`any`

defines the trigger options

##### target

`any`

defines the object containing the value to interpolate

##### propertyPath

`string`

defines the path to the property in the target object

##### value

`any`

defines the target value at the end of the interpolation

##### duration?

`number` = `1000`

defines the time it will take for the property to interpolate to the value.

##### condition?

[`Condition`](Condition.md)

defines the trigger related conditions

##### stopOtherAnimations?

`boolean`

defines if the other scene animations should be stopped when the action has been triggered

##### onInterpolationDone?

() => `void`

defines a callback raised once the interpolation animation has been done

#### Returns

`InterpolateValueAction`

#### Overrides

[`Action`](Action.md).[`constructor`](Action.md#constructor)

## Properties

### duration

> **duration**: `number` = `1000`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/interpolateValueAction.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/interpolateValueAction.pure.ts#L32)

Defines the time it will take for the property to interpolate to the value.

***

### onBeforeExecuteObservable

> **onBeforeExecuteObservable**: [`Observable`](Observable.md)\<[`Action`](Action.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.pure.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/action.pure.ts#L102)

An event triggered prior to action being executed.

#### Inherited from

[`Action`](Action.md).[`onBeforeExecuteObservable`](Action.md#onbeforeexecuteobservable)

***

### onInterpolationDone?

> `optional` **onInterpolationDone?**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/interpolateValueAction.pure.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/interpolateValueAction.pure.ts#L42)

Defines a callback raised once the interpolation animation has been done.

#### Returns

`void`

***

### onInterpolationDoneObservable

> **onInterpolationDoneObservable**: [`Observable`](Observable.md)\<`InterpolateValueAction`\>

Defined in: [babylonjs-source/packages/dev/core/src/Actions/interpolateValueAction.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/interpolateValueAction.pure.ts#L47)

Observable triggered once the interpolation animation has been done.

***

### propertyPath

> **propertyPath**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/interpolateValueAction.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/interpolateValueAction.pure.ts#L22)

Defines the path of the property where the value should be interpolated

***

### stopOtherAnimations?

> `optional` **stopOtherAnimations?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/interpolateValueAction.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/interpolateValueAction.pure.ts#L37)

Defines if the other scene animations should be stopped when the action has been triggered

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/interpolateValueAction.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/interpolateValueAction.pure.ts#L27)

Defines the target value at the end of the interpolation.

## Methods

### execute()

> **execute**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/interpolateValueAction.pure.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/interpolateValueAction.pure.ts#L93)

Execute the action starts the value interpolation.

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/interpolateValueAction.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/interpolateValueAction.pure.ts#L146)

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
