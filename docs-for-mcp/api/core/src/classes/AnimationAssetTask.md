[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationAssetTask

# Class: AnimationAssetTask

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:437](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L437)

Define a task used by AssetsManager to load animations

## Extends

- [`AbstractAssetTask`](AbstractAssetTask.md)

## Constructors

### Constructor

> **new AnimationAssetTask**(`name`, `rootUrl`, `filename`, `targetConverter?`, `extension?`): `AnimationAssetTask`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:465](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L465)

Creates a new AnimationAssetTask

#### Parameters

##### name

`string`

defines the name of the task

##### rootUrl

`string`

defines the root url to use as a base to load your meshes and associated resources

##### filename

`string` \| `File`

defines the filename or File of the scene to load from

##### targetConverter?

[`Nullable`](../type-aliases/Nullable.md)\<(`target`) => `any`\>

defines a function used to convert animation targets from loaded scene to current scene (default: search node by name)

##### extension?

`string`

defines the extension to use to load the scene (if not defined, ".babylon" will be used)

#### Returns

`AnimationAssetTask`

#### Overrides

[`AbstractAssetTask`](AbstractAssetTask.md).[`constructor`](AbstractAssetTask.md#constructor)

## Properties

### extension?

> `optional` **extension?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:485](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L485)

Defines the extension to use to load the scene (if not defined, ".babylon" will be used)

***

### filename

> **filename**: `string` \| `File`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:477](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L477)

Defines the filename to load from

***

### loadedAnimatables

> **loadedAnimatables**: [`Animatable`](Animatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:445](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L445)

Gets the list of loaded animatables

***

### loadedAnimationGroups

> **loadedAnimationGroups**: [`AnimationGroup`](AnimationGroup.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:441](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L441)

Gets the list of loaded animation groups

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:469](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L469)

Defines the name of the task

#### Inherited from

[`AbstractAssetTask`](AbstractAssetTask.md).[`name`](AbstractAssetTask.md#name)

***

### onError

> **onError**: (`task`, `message?`, `exception?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:455](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L455)

Callback called when the task is successful

#### Parameters

##### task

`AnimationAssetTask`

##### message?

`string`

##### exception?

`any`

#### Returns

`void`

#### Overrides

[`AbstractAssetTask`](AbstractAssetTask.md).[`onError`](AbstractAssetTask.md#onerror)

***

### onSuccess

> **onSuccess**: (`task`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:450](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L450)

Callback called when the task is successful

#### Parameters

##### task

`AnimationAssetTask`

#### Returns

`void`

#### Overrides

[`AbstractAssetTask`](AbstractAssetTask.md).[`onSuccess`](AbstractAssetTask.md#onsuccess)

***

### rootUrl

> **rootUrl**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:473](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L473)

Defines the root url to use as a base to load your meshes and associated resources

***

### targetConverter?

> `optional` **targetConverter?**: [`Nullable`](../type-aliases/Nullable.md)\<(`target`) => `any`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:481](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L481)

Defines a function used to convert animation targets from loaded scene to current scene (default: search node by name)

## Accessors

### errorObject

#### Get Signature

> **get** **errorObject**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L88)

Gets the current error object (if task is in error)

##### Returns

`object`

###### exception?

> `optional` **exception?**: `any`

###### message?

> `optional` **message?**: `string`

#### Inherited from

[`AbstractAssetTask`](AbstractAssetTask.md).[`errorObject`](AbstractAssetTask.md#errorobject)

***

### isCompleted

#### Get Signature

> **get** **isCompleted**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L74)

Get if the task is completed

##### Returns

`boolean`

#### Inherited from

[`AbstractAssetTask`](AbstractAssetTask.md).[`isCompleted`](AbstractAssetTask.md#iscompleted)

***

### taskState

#### Get Signature

> **get** **taskState**(): [`AssetTaskState`](../enumerations/AssetTaskState.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L81)

Gets the current state of the task

##### Returns

[`AssetTaskState`](../enumerations/AssetTaskState.md)

#### Inherited from

[`AbstractAssetTask`](AbstractAssetTask.md).[`taskState`](AbstractAssetTask.md#taskstate)

## Methods

### reset()

> **reset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L141)

Reset will set the task state back to INIT, so the next load call of the assets manager will execute this task again.
This can be used with failed tasks that have the reason for failure fixed.

#### Returns

`void`

#### Inherited from

[`AbstractAssetTask`](AbstractAssetTask.md).[`reset`](AbstractAssetTask.md#reset)

***

### run()

> **run**(`scene`, `onSuccess`, `onError`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L113)

Execute the current task

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the scene where you want your assets to be loaded

##### onSuccess

() => `void`

is a callback called when the task is successfully executed

##### onError

(`message?`, `exception?`) => `void`

is a callback called if an error occurs

#### Returns

`void`

#### Inherited from

[`AbstractAssetTask`](AbstractAssetTask.md).[`run`](AbstractAssetTask.md#run)

***

### runTask()

> **runTask**(`scene`, `onSuccess`, `onError`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:496](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L496)

Execute the current task

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the scene where you want your assets to be loaded

##### onSuccess

() => `void`

is a callback called when the task is successfully executed

##### onError

(`message?`, `exception?`) => `void`

is a callback called if an error occurs

#### Returns

`void`

#### Overrides

[`AbstractAssetTask`](AbstractAssetTask.md).[`runTask`](AbstractAssetTask.md#runtask)
