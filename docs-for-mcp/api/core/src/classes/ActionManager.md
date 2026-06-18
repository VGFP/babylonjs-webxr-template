[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ActionManager

# Class: ActionManager

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L24)

Action Manager manages all events to be triggered on a given mesh or the global scene.
A single scene can have many Action Managers to handle predefined actions on specific meshes.

## See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions

## Extends

- [`AbstractActionManager`](AbstractActionManager.md)

## Constructors

### Constructor

> **new ActionManager**(`scene?`): `ActionManager`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L133)

Creates a new action manager

#### Parameters

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the hosting scene

#### Returns

`ActionManager`

#### Overrides

[`AbstractActionManager`](AbstractActionManager.md).[`constructor`](AbstractActionManager.md#constructor)

## Properties

### actions

> **actions**: [`IAction`](../interfaces/IAction.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L20)

Gets the list of actions

#### Inherited from

[`AbstractActionManager`](AbstractActionManager.md).[`actions`](AbstractActionManager.md#actions)

***

### disposeWhenUnowned

> **disposeWhenUnowned**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L30)

Gets or sets a boolean indicating if this ActionManager should be disposed once the last Mesh using it is disposed

#### Inherited from

[`AbstractActionManager`](AbstractActionManager.md).[`disposeWhenUnowned`](AbstractActionManager.md#disposewhenunowned)

***

### hoverCursor

> **hoverCursor**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L17)

Gets the cursor to use when hovering items

#### Inherited from

[`AbstractActionManager`](AbstractActionManager.md).[`hoverCursor`](AbstractActionManager.md#hovercursor)

***

### isRecursive

> **isRecursive**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L25)

Gets or sets a boolean indicating that the manager is recursive meaning that it can trigger action from children

#### Inherited from

[`AbstractActionManager`](AbstractActionManager.md).[`isRecursive`](AbstractActionManager.md#isrecursive)

***

### NothingTrigger

> `readonly` `static` **NothingTrigger**: `0` = `Constants.ACTION_NothingTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L29)

Nothing

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnCenterPickTrigger

> `readonly` `static` **OnCenterPickTrigger**: `4` = `Constants.ACTION_OnCenterPickTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L53)

On center pick

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnDoublePickTrigger

> `readonly` `static` **OnDoublePickTrigger**: `6` = `Constants.ACTION_OnDoublePickTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L65)

On double pick

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnEveryFrameTrigger

> `readonly` `static` **OnEveryFrameTrigger**: `11` = `Constants.ACTION_OnEveryFrameTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L101)

On every frame

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnIntersectionEnterTrigger

> `readonly` `static` **OnIntersectionEnterTrigger**: `12` = `Constants.ACTION_OnIntersectionEnterTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L106)

On intersection enter

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnIntersectionExitTrigger

> `readonly` `static` **OnIntersectionExitTrigger**: `13` = `Constants.ACTION_OnIntersectionExitTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L112)

On intersection exit

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnKeyDownTrigger

> `readonly` `static` **OnKeyDownTrigger**: `14` = `Constants.ACTION_OnKeyDownTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L118)

On key down

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnKeyUpTrigger

> `readonly` `static` **OnKeyUpTrigger**: `15` = `Constants.ACTION_OnKeyUpTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L124)

On key up

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnLeftPickTrigger

> `readonly` `static` **OnLeftPickTrigger**: `2` = `Constants.ACTION_OnLeftPickTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L41)

On left pick

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnLongPressTrigger

> `readonly` `static` **OnLongPressTrigger**: `8` = `Constants.ACTION_OnLongPressTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L83)

On long press

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnPickDownTrigger

> `readonly` `static` **OnPickDownTrigger**: `5` = `Constants.ACTION_OnPickDownTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L59)

On pick down

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnPickOutTrigger

> `readonly` `static` **OnPickOutTrigger**: `16` = `Constants.ACTION_OnPickOutTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L77)

On pick out.
This trigger will only be raised if you also declared a OnPickDown

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnPickTrigger

> `readonly` `static` **OnPickTrigger**: `1` = `Constants.ACTION_OnPickTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L35)

On pick

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnPickUpTrigger

> `readonly` `static` **OnPickUpTrigger**: `7` = `Constants.ACTION_OnPickUpTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L71)

On pick up

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnPointerOutTrigger

> `readonly` `static` **OnPointerOutTrigger**: `10` = `Constants.ACTION_OnPointerOutTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L95)

On pointer out

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnPointerOverTrigger

> `readonly` `static` **OnPointerOverTrigger**: `9` = `Constants.ACTION_OnPointerOverTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L89)

On pointer over

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnRightPickTrigger

> `readonly` `static` **OnRightPickTrigger**: `3` = `Constants.ACTION_OnRightPickTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L47)

On right pick

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### Triggers

> `static` **Triggers**: `object` = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L14)

Gets the list of active triggers

#### Index Signature

\[`key`: `string`\]: `number`

#### Inherited from

[`AbstractActionManager`](AbstractActionManager.md).[`Triggers`](AbstractActionManager.md#triggers)

## Accessors

### hasPickTriggers

#### Get Signature

> **get** **hasPickTriggers**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L260)

Does this action manager has pick triggers

##### Returns

`boolean`

#### Overrides

[`AbstractActionManager`](AbstractActionManager.md).[`hasPickTriggers`](AbstractActionManager.md#haspicktriggers)

***

### hasPointerTriggers

#### Get Signature

> **get** **hasPointerTriggers**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:243](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L243)

Does this action manager has pointer triggers

##### Returns

`boolean`

#### Overrides

[`AbstractActionManager`](AbstractActionManager.md).[`hasPointerTriggers`](AbstractActionManager.md#haspointertriggers)

***

### HasPickTriggers

#### Get Signature

> **get** `static` **HasPickTriggers**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L114)

Does exist one action manager with at least one pick trigger

##### Returns

`boolean`

#### Inherited from

[`AbstractActionManager`](AbstractActionManager.md).[`HasPickTriggers`](AbstractActionManager.md#haspicktriggers-1)

***

### HasTriggers

#### Get Signature

> **get** `static` **HasTriggers**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/abstractActionManager.ts#L102)

Does exist one action manager with at least one trigger

##### Returns

`boolean`

#### Inherited from

[`AbstractActionManager`](AbstractActionManager.md).[`HasTriggers`](AbstractActionManager.md#hastriggers)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:149](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L149)

Releases all associated resources

#### Returns

`void`

#### Overrides

[`AbstractActionManager`](AbstractActionManager.md).[`dispose`](AbstractActionManager.md#dispose)

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L176)

Gets hosting scene

#### Returns

[`Scene`](Scene.md)

the hosting scene

***

### hasSpecificTrigger()

> **hasSpecificTrigger**(`trigger`, `parameterPredicate?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L222)

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

#### Overrides

[`AbstractActionManager`](AbstractActionManager.md).[`hasSpecificTrigger`](AbstractActionManager.md#hasspecifictrigger)

***

### hasSpecificTriggers()

> **hasSpecificTriggers**(`triggers`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L185)

Does this action manager handles actions of any of the given triggers

#### Parameters

##### triggers

`number`[]

defines the triggers to be tested

#### Returns

`boolean`

a boolean indicating whether one (or more) of the triggers is handled

#### Overrides

[`AbstractActionManager`](AbstractActionManager.md).[`hasSpecificTriggers`](AbstractActionManager.md#hasspecifictriggers)

***

### hasSpecificTriggers2()

> **hasSpecificTriggers2**(`triggerA`, `triggerB`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L204)

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

#### Overrides

[`AbstractActionManager`](AbstractActionManager.md).[`hasSpecificTriggers2`](AbstractActionManager.md#hasspecifictriggers2)

***

### processTrigger()

> **processTrigger**(`trigger`, `evt?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:327](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L327)

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

#### Overrides

[`AbstractActionManager`](AbstractActionManager.md).[`processTrigger`](AbstractActionManager.md#processtrigger)

***

### registerAction()

> **registerAction**(`action`): [`Nullable`](../type-aliases/Nullable.md)\<[`IAction`](../interfaces/IAction.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:279](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L279)

Registers an action to this action manager

#### Parameters

##### action

[`IAction`](../interfaces/IAction.md)

defines the action to be registered

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IAction`](../interfaces/IAction.md)\>

the action amended (prepared) after registration

#### Overrides

[`AbstractActionManager`](AbstractActionManager.md).[`registerAction`](AbstractActionManager.md#registeraction)

***

### serialize()

> **serialize**(`name`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:389](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L389)

Serialize this manager to a JSON object

#### Parameters

##### name

`string`

defines the property name to store this manager

#### Returns

`any`

a JSON representation of this manager

#### Overrides

[`AbstractActionManager`](AbstractActionManager.md).[`serialize`](AbstractActionManager.md#serialize)

***

### unregisterAction()

> **unregisterAction**(`action`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:307](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L307)

Unregisters an action to this action manager

#### Parameters

##### action

[`IAction`](../interfaces/IAction.md)

defines the action to be unregistered

#### Returns

`boolean`

a boolean indicating whether the action has been unregistered

#### Overrides

[`AbstractActionManager`](AbstractActionManager.md).[`unregisterAction`](AbstractActionManager.md#unregisteraction)

***

### GetTriggerName()

> `static` **GetTriggerName**(`trigger`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:661](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L661)

Get a trigger name by index

#### Parameters

##### trigger

`number`

defines the trigger index

#### Returns

`string`

a trigger name

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

#### Inherited from

[`AbstractActionManager`](AbstractActionManager.md).[`HasSpecificTrigger`](AbstractActionManager.md#hasspecifictrigger-1)

***

### Parse()

> `static` **Parse**(`parsedActions`, `object`, `scene`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:448](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Actions/actionManager.ts#L448)

Creates a new ActionManager from a JSON data

#### Parameters

##### parsedActions

`any`

defines the JSON data to read from

##### object

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

defines the hosting mesh

##### scene

[`Scene`](Scene.md)

defines the hosting scene

#### Returns

`void`
