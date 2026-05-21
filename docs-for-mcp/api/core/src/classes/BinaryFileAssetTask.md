[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BinaryFileAssetTask

# Class: BinaryFileAssetTask

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:588](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L588)

Define a task used by AssetsManager to load binary data

## Extends

- [`AbstractAssetTask`](AbstractAssetTask.md)

## Constructors

### Constructor

> **new BinaryFileAssetTask**(`name`, `url`): `BinaryFileAssetTask`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:608](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L608)

Creates a new BinaryFileAssetTask object

#### Parameters

##### name

`string`

defines the name of the new task

##### url

`string`

defines the location of the file to load

#### Returns

`BinaryFileAssetTask`

#### Overrides

[`AbstractAssetTask`](AbstractAssetTask.md).[`constructor`](AbstractAssetTask.md#constructor)

## Properties

### data

> **data**: `ArrayBuffer`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:592](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L592)

Gets the loaded data (as an array buffer)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:612](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L612)

Defines the name of the task

#### Inherited from

[`AbstractAssetTask`](AbstractAssetTask.md).[`name`](AbstractAssetTask.md#name)

***

### onError

> **onError**: (`task`, `message?`, `exception?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:601](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L601)

Callback called when the task is successful

#### Parameters

##### task

`BinaryFileAssetTask`

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:597](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L597)

Callback called when the task is successful

#### Parameters

##### task

`BinaryFileAssetTask`

#### Returns

`void`

#### Overrides

[`AbstractAssetTask`](AbstractAssetTask.md).[`onSuccess`](AbstractAssetTask.md#onsuccess)

***

### url

> **url**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:616](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L616)

Defines the location of the file to load

## Accessors

### errorObject

#### Get Signature

> **get** **errorObject**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L88)

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L74)

Get if the task is completed

##### Returns

`boolean`

#### Inherited from

[`AbstractAssetTask`](AbstractAssetTask.md).[`isCompleted`](AbstractAssetTask.md#iscompleted)

***

### taskState

#### Get Signature

> **get** **taskState**(): [`AssetTaskState`](../enumerations/AssetTaskState.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L81)

Gets the current state of the task

##### Returns

[`AssetTaskState`](../enumerations/AssetTaskState.md)

#### Inherited from

[`AbstractAssetTask`](AbstractAssetTask.md).[`taskState`](AbstractAssetTask.md#taskstate)

## Methods

### reset()

> **reset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L141)

Reset will set the task state back to INIT, so the next load call of the assets manager will execute this task again.
This can be used with failed tasks that have the reason for failure fixed.

#### Returns

`void`

#### Inherited from

[`AbstractAssetTask`](AbstractAssetTask.md).[`reset`](AbstractAssetTask.md#reset)

***

### run()

> **run**(`scene`, `onSuccess`, `onError`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L113)

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:627](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L627)

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
