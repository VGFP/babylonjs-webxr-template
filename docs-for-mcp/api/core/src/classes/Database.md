[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Database

# Class: Database

Defined in: [babylonjs-source/packages/dev/core/src/Offline/database.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Offline/database.pure.ts#L15)

Class used to enable access to IndexedDB

## See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimizeCached

## Implements

- [`IOfflineProvider`](../interfaces/IOfflineProvider.md)

## Constructors

### Constructor

> **new Database**(`urlToScene`, `callbackManifestChecked`, `disableManifestCheck?`): `Database`

Defined in: [babylonjs-source/packages/dev/core/src/Offline/database.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Offline/database.pure.ts#L56)

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

Defined in: [babylonjs-source/packages/dev/core/src/Offline/database.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Offline/database.pure.ts#L34)

Gets a boolean indicating if Database storage is enabled (off by default)

## Accessors

### enableSceneOffline

#### Get Signature

> **get** **enableSceneOffline**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Offline/database.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Offline/database.pure.ts#L39)

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

Defined in: [babylonjs-source/packages/dev/core/src/Offline/database.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Offline/database.pure.ts#L46)

Gets a boolean indicating if textures must be saved in the database

##### Returns

`boolean`

Gets a boolean indicating if textures must be saved in the database

#### Implementation of

[`IOfflineProvider`](../interfaces/IOfflineProvider.md).[`enableTexturesOffline`](../interfaces/IOfflineProvider.md#enabletexturesoffline)

## Methods

### loadFile()

> **loadFile**(`url`, `sceneLoaded`, `progressCallBack?`, `errorCallback?`, `useArrayBuffer?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Offline/database.pure.ts:520](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Offline/database.pure.ts#L520)

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

Defined in: [babylonjs-source/packages/dev/core/src/Offline/database.pure.ts:253](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Offline/database.pure.ts#L253)

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

Defined in: [babylonjs-source/packages/dev/core/src/Offline/database.pure.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Offline/database.pure.ts#L185)

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
