[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AbstractActionManager

# Abstract Class: AbstractActionManager

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L12)

Abstract class used to decouple action Manager from scene and meshes.
Do not instantiate.

## See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions

## Extended by

- [`ActionManager`](ActionManager.md)

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new AbstractActionManager**(): `AbstractActionManager`

#### Returns

`AbstractActionManager`

## Properties

### actions

> **actions**: [`IAction`](../interfaces/IAction.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L20)

Gets the list of actions

***

### disposeWhenUnowned

> **disposeWhenUnowned**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L30)

Gets or sets a boolean indicating if this ActionManager should be disposed once the last Mesh using it is disposed

***

### hoverCursor

> **hoverCursor**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L17)

Gets the cursor to use when hovering items

***

### isRecursive

> **isRecursive**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L25)

Gets or sets a boolean indicating that the manager is recursive meaning that it can trigger action from children

***

### Triggers

> `static` **Triggers**: `object` = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L14)

Gets the list of active triggers

#### Index Signature

\[`key`: `string`\]: `number`

## Accessors

### hasPickTriggers

#### Get Signature

> **get** `abstract` **hasPickTriggers**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L45)

Does this action manager has pick triggers

##### Returns

`boolean`

***

### hasPointerTriggers

#### Get Signature

> **get** `abstract` **hasPointerTriggers**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L40)

Does this action manager has pointer triggers

##### Returns

`boolean`

***

### HasPickTriggers

#### Get Signature

> **get** `static` **HasPickTriggers**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L114)

Does exist one action manager with at least one pick trigger

##### Returns

`boolean`

***

### HasTriggers

#### Get Signature

> **get** `static` **HasTriggers**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L102)

Does exist one action manager with at least one trigger

##### Returns

`boolean`

## Methods

### dispose()

> `abstract` **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L35)

Releases all associated resources

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### hasSpecificTrigger()

> `abstract` **hasSpecificTrigger**(`trigger`, `parameterPredicate?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L76)

Does this action manager handles actions of a given trigger

#### Parameters

##### trigger

`number`

defines the trigger to be tested

##### parameterPredicate?

(`parameter`) => `boolean`

defines an optional predicate to filter triggers by parameter

#### Returns

`boolean`

whether the trigger is handled

***

### hasSpecificTriggers()

> `abstract` **hasSpecificTriggers**(`triggers`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L59)

Does this action manager handles actions of any of the given triggers

#### Parameters

##### triggers

`number`[]

defines the triggers to be tested

#### Returns

`boolean`

a boolean indicating whether one (or more) of the triggers is handled

***

### hasSpecificTriggers2()

> `abstract` **hasSpecificTriggers2**(`triggerA`, `triggerB`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L68)

Does this action manager handles actions of any of the given triggers. This function takes two arguments for
speed.

#### Parameters

##### triggerA

`number`

defines the trigger to be tested

##### triggerB

`number`

defines the trigger to be tested

#### Returns

`boolean`

a boolean indicating whether one (or more) of the triggers is handled

***

### processTrigger()

> `abstract` **processTrigger**(`trigger`, `evt?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L52)

Process a specific trigger

#### Parameters

##### trigger

`number`

defines the trigger to process

##### evt?

[`IActionEvent`](../interfaces/IActionEvent.md)

defines the event details to be processed

#### Returns

`void`

***

### registerAction()

> `abstract` **registerAction**(`action`): [`Nullable`](../type-aliases/Nullable.md)\<[`IAction`](../interfaces/IAction.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L90)

Registers an action to this action manager

#### Parameters

##### action

[`IAction`](../interfaces/IAction.md)

defines the action to be registered

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IAction`](../interfaces/IAction.md)\>

the action amended (prepared) after registration

***

### serialize()

> `abstract` **serialize**(`name`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L83)

Serialize this manager to a JSON object

#### Parameters

##### name

`string`

defines the property name to store this manager

#### Returns

`any`

a JSON representation of this manager

***

### unregisterAction()

> `abstract` **unregisterAction**(`action`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L97)

Unregisters an action to this action manager

#### Parameters

##### action

[`IAction`](../interfaces/IAction.md)

defines the action to be unregistered

#### Returns

`boolean`

a boolean indicating whether the action has been unregistered

***

### HasSpecificTrigger()

> `static` **HasSpecificTrigger**(`trigger`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L131)

Does exist one action manager that handles actions of a given trigger

#### Parameters

##### trigger

`number`

defines the trigger to be tested

#### Returns

`boolean`

a boolean indicating whether the trigger is handled by at least one action manager
