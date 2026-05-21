[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ActionManager

# Class: ActionManager

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L23)

Action Manager manages all events to be triggered on a given mesh or the global scene.
A single scene can have many Action Managers to handle predefined actions on specific meshes.

## See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions

## Extends

- [`AbstractActionManager`](AbstractActionManager.md)

## Constructors

### Constructor

> **new ActionManager**(`scene?`): `ActionManager`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L132)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/abstractActionManager.ts#L20)

Gets the list of actions

#### Inherited from

[`AbstractActionManager`](AbstractActionManager.md).[`actions`](AbstractActionManager.md#actions)

***

### disposeWhenUnowned

> **disposeWhenUnowned**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/abstractActionManager.ts#L30)

Gets or sets a boolean indicating if this ActionManager should be disposed once the last Mesh using it is disposed

#### Inherited from

[`AbstractActionManager`](AbstractActionManager.md).[`disposeWhenUnowned`](AbstractActionManager.md#disposewhenunowned)

***

### hoverCursor

> **hoverCursor**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/abstractActionManager.ts#L17)

Gets the cursor to use when hovering items

#### Inherited from

[`AbstractActionManager`](AbstractActionManager.md).[`hoverCursor`](AbstractActionManager.md#hovercursor)

***

### isRecursive

> **isRecursive**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/abstractActionManager.ts#L25)

Gets or sets a boolean indicating that the manager is recursive meaning that it can trigger action from children

#### Inherited from

[`AbstractActionManager`](AbstractActionManager.md).[`isRecursive`](AbstractActionManager.md#isrecursive)

***

### NothingTrigger

> `readonly` `static` **NothingTrigger**: `0` = `Constants.ACTION_NothingTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L28)

Nothing

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnCenterPickTrigger

> `readonly` `static` **OnCenterPickTrigger**: `4` = `Constants.ACTION_OnCenterPickTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L52)

On center pick

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnDoublePickTrigger

> `readonly` `static` **OnDoublePickTrigger**: `6` = `Constants.ACTION_OnDoublePickTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L64)

On double pick

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnEveryFrameTrigger

> `readonly` `static` **OnEveryFrameTrigger**: `11` = `Constants.ACTION_OnEveryFrameTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L100)

On every frame

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnIntersectionEnterTrigger

> `readonly` `static` **OnIntersectionEnterTrigger**: `12` = `Constants.ACTION_OnIntersectionEnterTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L105)

On intersection enter

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnIntersectionExitTrigger

> `readonly` `static` **OnIntersectionExitTrigger**: `13` = `Constants.ACTION_OnIntersectionExitTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L111)

On intersection exit

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnKeyDownTrigger

> `readonly` `static` **OnKeyDownTrigger**: `14` = `Constants.ACTION_OnKeyDownTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L117)

On key down

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnKeyUpTrigger

> `readonly` `static` **OnKeyUpTrigger**: `15` = `Constants.ACTION_OnKeyUpTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L123)

On key up

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnLeftPickTrigger

> `readonly` `static` **OnLeftPickTrigger**: `2` = `Constants.ACTION_OnLeftPickTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L40)

On left pick

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnLongPressTrigger

> `readonly` `static` **OnLongPressTrigger**: `8` = `Constants.ACTION_OnLongPressTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L82)

On long press

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnPickDownTrigger

> `readonly` `static` **OnPickDownTrigger**: `5` = `Constants.ACTION_OnPickDownTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L58)

On pick down

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnPickOutTrigger

> `readonly` `static` **OnPickOutTrigger**: `16` = `Constants.ACTION_OnPickOutTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L76)

On pick out.
This trigger will only be raised if you also declared a OnPickDown

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnPickTrigger

> `readonly` `static` **OnPickTrigger**: `1` = `Constants.ACTION_OnPickTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L34)

On pick

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnPickUpTrigger

> `readonly` `static` **OnPickUpTrigger**: `7` = `Constants.ACTION_OnPickUpTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L70)

On pick up

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnPointerOutTrigger

> `readonly` `static` **OnPointerOutTrigger**: `10` = `Constants.ACTION_OnPointerOutTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L94)

On pointer out

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnPointerOverTrigger

> `readonly` `static` **OnPointerOverTrigger**: `9` = `Constants.ACTION_OnPointerOverTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L88)

On pointer over

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### OnRightPickTrigger

> `readonly` `static` **OnRightPickTrigger**: `3` = `Constants.ACTION_OnRightPickTrigger`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L46)

On right pick

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers

***

### Triggers

> `static` **Triggers**: `object` = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/abstractActionManager.ts#L14)

Gets the list of active triggers

#### Index Signature

\[`key`: `string`\]: `number`

#### Inherited from

[`AbstractActionManager`](AbstractActionManager.md).[`Triggers`](AbstractActionManager.md#triggers)

## Accessors

### hasPickTriggers

#### Get Signature

> **get** **hasPickTriggers**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L259)

Does this action manager has pick triggers

##### Returns

`boolean`

#### Overrides

[`AbstractActionManager`](AbstractActionManager.md).[`hasPickTriggers`](AbstractActionManager.md#haspicktriggers)

***

### hasPointerTriggers

#### Get Signature

> **get** **hasPointerTriggers**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:242](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L242)

Does this action manager has pointer triggers

##### Returns

`boolean`

#### Overrides

[`AbstractActionManager`](AbstractActionManager.md).[`hasPointerTriggers`](AbstractActionManager.md#haspointertriggers)

***

### HasPickTriggers

#### Get Signature

> **get** `static` **HasPickTriggers**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/abstractActionManager.ts#L114)

Does exist one action manager with at least one pick trigger

##### Returns

`boolean`

#### Inherited from

[`AbstractActionManager`](AbstractActionManager.md).[`HasPickTriggers`](AbstractActionManager.md#haspicktriggers-1)

***

### HasTriggers

#### Get Signature

> **get** `static` **HasTriggers**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/abstractActionManager.ts#L102)

Does exist one action manager with at least one trigger

##### Returns

`boolean`

#### Inherited from

[`AbstractActionManager`](AbstractActionManager.md).[`HasTriggers`](AbstractActionManager.md#hastriggers)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L148)

Releases all associated resources

#### Returns

`void`

#### Overrides

[`AbstractActionManager`](AbstractActionManager.md).[`dispose`](AbstractActionManager.md#dispose)

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L175)

Gets hosting scene

#### Returns

[`Scene`](Scene.md)

the hosting scene

***

### hasSpecificTrigger()

> **hasSpecificTrigger**(`trigger`, `parameterPredicate?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:221](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L221)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:184](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L184)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:203](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L203)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:326](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L326)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:278](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L278)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:388](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L388)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:306](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L306)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:656](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L656)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/abstractActionManager.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/abstractActionManager.ts#L131)

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

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionManager.ts:447](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionManager.ts#L447)

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
