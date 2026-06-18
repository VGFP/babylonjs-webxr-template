[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SceneLoaderFlags

# Class: SceneLoaderFlags

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoaderFlags.ts:6](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoaderFlags.ts#L6)

Class used to represent data loading progression

## Constructors

### Constructor

> **new SceneLoaderFlags**(): `SceneLoaderFlags`

#### Returns

`SceneLoaderFlags`

## Accessors

### CleanBoneMatrixWeights

#### Get Signature

> **get** `static` **CleanBoneMatrixWeights**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoaderFlags.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoaderFlags.ts#L52)

Gets or set a boolean indicating if matrix weights must be cleaned upon loading

##### Returns

`boolean`

#### Set Signature

> **set** `static` **CleanBoneMatrixWeights**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoaderFlags.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoaderFlags.ts#L56)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### ForceFullSceneLoadingForIncremental

#### Get Signature

> **get** `static` **ForceFullSceneLoadingForIncremental**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoaderFlags.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoaderFlags.ts#L16)

Gets or sets a boolean indicating if entire scene must be loaded even if scene contains incremental data

##### Returns

`boolean`

#### Set Signature

> **set** `static` **ForceFullSceneLoadingForIncremental**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoaderFlags.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoaderFlags.ts#L20)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### loggingLevel

#### Get Signature

> **get** `static` **loggingLevel**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoaderFlags.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoaderFlags.ts#L40)

**`Ignorenaming`**

Defines the current logging level (while loading the scene)

##### Returns

`number`

#### Set Signature

> **set** `static` **loggingLevel**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoaderFlags.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoaderFlags.ts#L45)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ShowLoadingScreen

#### Get Signature

> **get** `static` **ShowLoadingScreen**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoaderFlags.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoaderFlags.ts#L27)

Gets or sets a boolean indicating if loading screen must be displayed while loading a scene

##### Returns

`boolean`

#### Set Signature

> **set** `static` **ShowLoadingScreen**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoaderFlags.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoaderFlags.ts#L31)

##### Parameters

###### value

`boolean`

##### Returns

`void`
