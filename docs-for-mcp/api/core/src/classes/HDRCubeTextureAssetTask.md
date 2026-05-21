[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / HDRCubeTextureAssetTask

# Class: HDRCubeTextureAssetTask

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:864](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L864)

Define a task used by AssetsManager to load HDR cube textures

## Extends

- [`AbstractAssetTask`](AbstractAssetTask.md)

## Implements

- [`ITextureAssetTask`](../interfaces/ITextureAssetTask.md)\<[`HDRCubeTexture`](HDRCubeTexture.md)\>

## Constructors

### Constructor

> **new HDRCubeTextureAssetTask**(`name`, `url`, `size`, `noMipmap?`, `generateHarmonics?`, `gammaSpace?`, `prefilterOnLoad?`, `supersample?`, `prefilterIrradianceOnLoad?`, `prefilterUsingCdf?`): `HDRCubeTextureAssetTask`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:892](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L892)

Creates a new HDRCubeTextureAssetTask object

#### Parameters

##### name

`string`

defines the name of the task

##### url

`string`

defines the location of the file to load

##### size

`number`

defines the desired size (the more it increases the longer the generation will be) If the size is omitted this implies you are using a preprocessed cubemap.

##### noMipmap?

`boolean` = `false`

defines if mipmaps should not be generated (default is false)

##### generateHarmonics?

`boolean` = `true`

specifies whether you want to extract the polynomial harmonics during the generation process (default is true)

##### gammaSpace?

`boolean` = `false`

specifies if the texture will be use in gamma or linear space (the PBR material requires those texture in linear space, but the standard material would require them in Gamma space) (default is false)

##### prefilterOnLoad?

`boolean` = `false`

specifies if the texture should be prefiltered on load (default is false)

##### supersample?

`boolean` = `false`

specifies if the texture will be generated with super sampling (default is false)

##### prefilterIrradianceOnLoad?

`boolean` = `false`

specifies if the irradiance should be prefiltered on load (default is false)

##### prefilterUsingCdf?

`boolean` = `false`

specifies if the texture should be prefiltered using CDF (default is false)

#### Returns

`HDRCubeTextureAssetTask`

#### Overrides

[`AbstractAssetTask`](AbstractAssetTask.md).[`constructor`](AbstractAssetTask.md#constructor)

## Properties

### gammaSpace

> **gammaSpace**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:916](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L916)

[false] Specifies if the texture will be use in gamma or linear space (the PBR material requires those texture in linear space, but the standard material would require them in Gamma space) (default is false)

***

### generateHarmonics

> **generateHarmonics**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:912](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L912)

[true] Specifies whether you want to extract the polynomial harmonics during the generation process (default is true)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:896](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L896)

Defines the name of the task

#### Inherited from

[`AbstractAssetTask`](AbstractAssetTask.md).[`name`](AbstractAssetTask.md#name)

***

### noMipmap

> **noMipmap**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:908](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L908)

[false] Defines if mipmaps should not be generated (default is false)

***

### onError

> **onError**: (`task`, `message?`, `exception?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:877](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L877)

Callback called when the task is successful

#### Parameters

##### task

`HDRCubeTextureAssetTask`

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:873](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L873)

Callback called when the task is successful

#### Parameters

##### task

`HDRCubeTextureAssetTask`

#### Returns

`void`

#### Overrides

[`AbstractAssetTask`](AbstractAssetTask.md).[`onSuccess`](AbstractAssetTask.md#onsuccess)

***

### prefilterIrradianceOnLoad

> **prefilterIrradianceOnLoad**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:928](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L928)

[false] Specifies if the irradiance should be prefiltered on load (default is false)

***

### prefilterOnLoad

> **prefilterOnLoad**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:920](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L920)

[false] Specifies if the texture should be prefiltered on load (default is false)

***

### prefilterUsingCdf

> **prefilterUsingCdf**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:932](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L932)

[false] Specifies if the texture should be prefiltered using CDF (default is false)

***

### size

> **size**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:904](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L904)

Defines the desired size (the more it increases the longer the generation will be)

***

### supersample

> **supersample**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:924](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L924)

[false] Specifies if the texture will be generated with super sampling (default is false)

***

### texture

> **texture**: [`HDRCubeTexture`](HDRCubeTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:868](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L868)

Gets the loaded texture

#### Implementation of

[`ITextureAssetTask`](../interfaces/ITextureAssetTask.md).[`texture`](../interfaces/ITextureAssetTask.md#texture)

***

### url

> **url**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:900](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L900)

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:943](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L943)

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
