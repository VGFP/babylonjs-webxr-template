[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Action

# Class: Action

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/action.ts#L80)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/action.ts#L107)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/action.ts#L100)

An event triggered prior to action being executed.

***

### trigger

> **trigger**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/action.ts#L84)

Trigger for the action

#### Implementation of

[`IAction`](../interfaces/IAction.md).[`trigger`](../interfaces/IAction.md#trigger)

***

### triggerOptions

> **triggerOptions**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/action.ts#L109)

the trigger, with or without parameters, for the action

#### Implementation of

[`IAction`](../interfaces/IAction.md).[`triggerOptions`](../interfaces/IAction.md#triggeroptions)

## Methods

### execute()

> **execute**(`evt?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/action.ts#L189)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/action.ts#L135)

Gets the trigger parameter

#### Returns

`any`

the trigger parameter

#### Implementation of

[`IAction`](../interfaces/IAction.md).[`getTriggerParameter`](../interfaces/IAction.md#gettriggerparameter)

***

### serialize()

> **serialize**(`parent`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.ts:242](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/action.ts#L242)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.ts:143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/action.ts#L143)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/action.ts#L194)

Skips to next active action

#### Returns

`void`

***

### then()

> **then**(`action`): `Action`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.ts:212](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/action.ts#L212)

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
