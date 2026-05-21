[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Database

# Class: Database

Defined in: [babylonjs-source/packages/dev/core/src/Offline/database.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Offline/database.ts#L18)

Class used to enable access to IndexedDB

## See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimizeCached

## Implements

- [`IOfflineProvider`](../interfaces/IOfflineProvider.md)

## Constructors

### Constructor

> **new Database**(`urlToScene`, `callbackManifestChecked`, `disableManifestCheck?`): `Database`

Defined in: [babylonjs-source/packages/dev/core/src/Offline/database.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Offline/database.ts#L59)

Creates a new Database

#### Parameters

##### urlToScene

`string`

defines the url to load the scene

##### callbackManifestChecked

(`checked`) => `any`

defines the callback to use when manifest is checked

##### disableManifestCheck?

`boolean` = `false`

defines a boolean indicating that we want to skip the manifest validation (it will be considered validated and up to date)

#### Returns

`Database`

## Properties

### IDBStorageEnabled

> `static` **IDBStorageEnabled**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Offline/database.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Offline/database.ts#L37)

Gets a boolean indicating if Database storage is enabled (off by default)

## Accessors

### enableSceneOffline

#### Get Signature

> **get** **enableSceneOffline**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Offline/database.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Offline/database.ts#L42)

Gets a boolean indicating if scene must be saved in the database

##### Returns

`boolean`

Gets a boolean indicating if scene must be saved in the database

#### Implementation of

[`IOfflineProvider`](../interfaces/IOfflineProvider.md).[`enableSceneOffline`](../interfaces/IOfflineProvider.md#enablesceneoffline)

***

### enableTexturesOffline

#### Get Signature

> **get** **enableTexturesOffline**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Offline/database.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Offline/database.ts#L49)

Gets a boolean indicating if textures must be saved in the database

##### Returns

`boolean`

Gets a boolean indicating if textures must be saved in the database

#### Implementation of

[`IOfflineProvider`](../interfaces/IOfflineProvider.md).[`enableTexturesOffline`](../interfaces/IOfflineProvider.md#enabletexturesoffline)

## Methods

### loadFile()

> **loadFile**(`url`, `sceneLoaded`, `progressCallBack?`, `errorCallback?`, `useArrayBuffer?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Offline/database.ts:523](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Offline/database.ts#L523)

Loads a file from database

#### Parameters

##### url

`string`

defines the URL to load from

##### sceneLoaded

(`data`) => `void`

defines a callback to call on success

##### progressCallBack?

(`data`) => `void`

defines a callback to call when progress changed

##### errorCallback?

() => `void`

defines a callback to call on error

##### useArrayBuffer?

`boolean`

defines a boolean to use array buffer instead of text string

#### Returns

`void`

#### Implementation of

[`IOfflineProvider`](../interfaces/IOfflineProvider.md).[`loadFile`](../interfaces/IOfflineProvider.md#loadfile)

***

### loadImage()

> **loadImage**(`url`, `image`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Offline/database.ts:256](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Offline/database.ts#L256)

Loads an image from the database

#### Parameters

##### url

`string`

defines the url to load from

##### image

`HTMLImageElement`

defines the target DOM image

#### Returns

`void`

#### Implementation of

[`IOfflineProvider`](../interfaces/IOfflineProvider.md).[`loadImage`](../interfaces/IOfflineProvider.md#loadimage)

***

### open()

> **open**(`successCallback`, `errorCallback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Offline/database.ts:188](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Offline/database.ts#L188)

Open the database and make it available

#### Parameters

##### successCallback

() => `void`

defines the callback to call on success

##### errorCallback

() => `void`

defines the callback to call on error

#### Returns

`void`

#### Implementation of

[`IOfflineProvider`](../interfaces/IOfflineProvider.md).[`open`](../interfaces/IOfflineProvider.md#open)
