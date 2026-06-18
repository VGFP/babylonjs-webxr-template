[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EquiRectangularCubeTextureAssetTask

# Class: EquiRectangularCubeTextureAssetTask

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:972](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L972)

Define a task used by AssetsManager to load Equirectangular cube textures

## Extends

- [`AbstractAssetTask`](AbstractAssetTask.md)

## Implements

- [`ITextureAssetTask`](../interfaces/ITextureAssetTask.md)\<[`EquiRectangularCubeTexture`](EquiRectangularCubeTexture.md)\>

## Constructors

### Constructor

> **new EquiRectangularCubeTextureAssetTask**(`name`, `url`, `size`, `noMipmap?`, `gammaSpace?`, `superSample?`): `EquiRectangularCubeTextureAssetTask`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:999](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L999)

Creates a new EquiRectangularCubeTextureAssetTask object

#### Parameters

##### name

`string`

defines the name of the task

##### url

`string`

defines the location of the file to load

##### size

`number`

defines the desired size (the more it increases the longer the generation will be)
If the size is omitted this implies you are using a preprocessed cubemap.

##### noMipmap?

`boolean` = `false`

defines if mipmaps should not be generated (default is false)

##### gammaSpace?

`boolean` = `true`

specifies if the texture will be used in gamma or linear space

##### superSample?

`boolean` = `false`

specifies if the texture will be generated with super sampling (default is false)
(the PBR material requires those texture in linear space, but the standard material would require them in Gamma space)
(default is true)

#### Returns

`EquiRectangularCubeTextureAssetTask`

#### Overrides

[`AbstractAssetTask`](AbstractAssetTask.md).[`constructor`](AbstractAssetTask.md#constructor)

## Properties

### gammaSpace

> **gammaSpace**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1020](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L1020)

[true] Specifies if the texture will be use in gamma or linear space (the PBR material requires those texture in linear space,
but the standard material would require them in Gamma space) (default is true)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1003](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L1003)

Defines the name of the task

#### Inherited from

[`AbstractAssetTask`](AbstractAssetTask.md).[`name`](AbstractAssetTask.md#name)

***

### noMipmap

> **noMipmap**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1015](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L1015)

[false] Defines if mipmaps should not be generated (default is false)

***

### onError

> **onError**: (`task`, `message?`, `exception?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:985](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L985)

Callback called when the task is successful

#### Parameters

##### task

`EquiRectangularCubeTextureAssetTask`

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:981](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L981)

Callback called when the task is successful

#### Parameters

##### task

`EquiRectangularCubeTextureAssetTask`

#### Returns

`void`

#### Overrides

[`AbstractAssetTask`](AbstractAssetTask.md).[`onSuccess`](AbstractAssetTask.md#onsuccess)

***

### size

> **size**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1011](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L1011)

Defines the desired size (the more it increases the longer the generation will be)

***

### superSample

> **superSample**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1022](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L1022)

specifies if the texture will be generated with super sampling (default is false)
(the PBR material requires those texture in linear space, but the standard material would require them in Gamma space)
(default is true)

***

### texture

> **texture**: [`EquiRectangularCubeTexture`](EquiRectangularCubeTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:976](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L976)

Gets the loaded texture

#### Implementation of

[`ITextureAssetTask`](../interfaces/ITextureAssetTask.md).[`texture`](../interfaces/ITextureAssetTask.md#texture)

***

### url

> **url**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1007](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L1007)

Defines the location of the file to load

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1033](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L1033)

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
