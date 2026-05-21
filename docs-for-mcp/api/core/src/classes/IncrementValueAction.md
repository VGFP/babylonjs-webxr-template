[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IncrementValueAction

# Class: IncrementValueAction

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.ts:192](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/directActions.ts#L192)

This defines an action responsible to increment the target value
 to a desired value once triggered.

## See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions

## Extends

- [`Action`](Action.md)

## Constructors

### Constructor

> **new IncrementValueAction**(`triggerOptions`, `target`, `propertyPath`, `value`, `condition?`): `IncrementValueAction`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/directActions.ts#L215)

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

defines the path of the property to increment in the target

##### value

`any`

defines the value value we should increment the property by

##### condition?

[`Condition`](Condition.md)

defines the trigger related conditions

#### Returns

`IncrementValueAction`

#### Overrides

[`Action`](Action.md).[`constructor`](Action.md#constructor)

## Properties

### onBeforeExecuteObservable

> **onBeforeExecuteObservable**: [`Observable`](Observable.md)\<[`Action`](Action.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/action.ts#L100)

An event triggered prior to action being executed.

#### Inherited from

[`Action`](Action.md).[`onBeforeExecuteObservable`](Action.md#onbeforeexecuteobservable)

***

### propertyPath

> **propertyPath**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.ts:196](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/directActions.ts#L196)

The path of the property to increment in the target.

***

### trigger

> **trigger**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/action.ts#L84)

Trigger for the action

#### Inherited from

[`Action`](Action.md).[`trigger`](Action.md#trigger)

***

### triggerOptions

> **triggerOptions**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/action.ts#L109)

the trigger, with or without parameters, for the action

#### Inherited from

[`Action`](Action.md).[`triggerOptions`](Action.md#triggeroptions)

***

### value

> **value**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.ts:201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/directActions.ts#L201)

The value we should increment the property by.

## Methods

### execute()

> **execute**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.ts:235](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/directActions.ts#L235)

Execute the action and increment the target of the value amount.

#### Returns

`void`

#### Overrides

[`Action`](Action.md).[`execute`](Action.md#execute)

***

### getTriggerParameter()

> **getTriggerParameter**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/action.ts#L135)

Gets the trigger parameter

#### Returns

`any`

the trigger parameter

#### Inherited from

[`Action`](Action.md).[`getTriggerParameter`](Action.md#gettriggerparameter)

***

### serialize()

> **serialize**(`parent`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/directActions.ts:248](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/directActions.ts#L248)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.ts:143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/action.ts#L143)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/action.ts#L194)

Skips to next active action

#### Returns

`void`

#### Inherited from

[`Action`](Action.md).[`skipToNextActiveAction`](Action.md#skiptonextactiveaction)

***

### then()

> **then**(`action`): [`Action`](Action.md)

Defined in: [babylonjs-source/packages/dev/core/src/Actions/action.ts:212](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/action.ts#L212)

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
