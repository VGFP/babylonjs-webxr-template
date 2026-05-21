[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / OBJFileLoader

# Class: OBJFileLoader

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L38)

OBJ file type loader.
This is a babylon scene loader plugin.

## Implements

- [`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md)
- [`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md)

## Constructors

### Constructor

> **new OBJFileLoader**(`loadingOptions?`): `OBJFileLoader`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L110)

Creates loader for .OBJ files

#### Parameters

##### loadingOptions?

`Partial`\<`Readonly`\<[`OBJLoadingOptions`](../type-aliases/OBJLoadingOptions.md)\>\>

options for loading and parsing OBJ/MTL files.

#### Returns

`OBJFileLoader`

## Properties

### extensions

> `readonly` **extensions**: `".obj"` = `OBJFileLoaderMetadata.extensions`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L99)

Defines the extension the plugin is able to load.

#### Implementation of

[`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md).[`extensions`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md#extensions)

***

### name

> `readonly` **name**: `"obj"` = `OBJFileLoaderMetadata.name`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L95)

Defines the name of the plugin.

#### Implementation of

[`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md).[`name`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md#name)

***

### COMPUTE\_NORMALS

> `static` **COMPUTE\_NORMALS**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L65)

Compute the normals for the model, even if normals are present in the file.

***

### IMPORT\_VERTEX\_COLORS

> `static` **IMPORT\_VERTEX\_COLORS**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L61)

Include in meshes the vertex colors available in some OBJ files.  This is not part of OBJ standard.

***

### INVERT\_Y

> `static` **INVERT\_Y**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L46)

Invert model on y-axis (does a model scaling inversion)

***

### MATERIAL\_LOADING\_FAILS\_SILENTLY

> `static` **MATERIAL\_LOADING\_FAILS\_SILENTLY**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L85)

When a material fails to load OBJ loader will silently fail and onSuccess() callback will be triggered.

Defaults to true for backwards compatibility.

***

### OPTIMIZE\_NORMALS

> `static` **OPTIMIZE\_NORMALS**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L70)

Optimize the normals for the model. Lighting can be uneven if you use OptimizeWithUV = true because new vertices can be created for the same location if they pertain to different faces.
Using OptimizehNormals = true will help smoothing the lighting by averaging the normals of those vertices.

***

### OPTIMIZE\_WITH\_UV

> `static` **OPTIMIZE\_WITH\_UV**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L42)

Defines if UVs are optimized by default during load.

***

### SKIP\_MATERIALS

> `static` **SKIP\_MATERIALS**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L78)

Skip loading the materials even if defined in the OBJ file (materials are ignored).

***

### USE\_LEGACY\_BEHAVIOR

> `static` **USE\_LEGACY\_BEHAVIOR**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L90)

Loads assets without handedness conversions. This flag is for compatibility. Use it only if absolutely required. Defaults to false.

***

### UV\_SCALING

> `static` **UV\_SCALING**: [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L74)

Defines custom scaling of UV coordinates of loaded meshes.

## Accessors

### INVERT\_TEXTURE\_Y

#### Get Signature

> **get** `static` **INVERT\_TEXTURE\_Y**(): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L50)

Invert Y-Axis of referenced textures on load

##### Returns

`boolean`

#### Set Signature

> **set** `static` **INVERT\_TEXTURE\_Y**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L54)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### canDirectLoad()

> **canDirectLoad**(): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L165)

If the data string can be loaded directly.

#### Returns

`boolean`

if the data can be loaded directly

#### Implementation of

[`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md).[`canDirectLoad`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md#candirectload)

***

### importMeshAsync()

> **importMeshAsync**(`meshesNames`, `scene`, `data`, `rootUrl`): `Promise`\<[`ISceneLoaderAsyncResult`](../../../core/src/interfaces/ISceneLoaderAsyncResult.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:178](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L178)

Imports one or more meshes from the loaded OBJ data and adds them to the scene

#### Parameters

##### meshesNames

`any`

a string or array of strings of the mesh names that should be loaded from the file

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

the scene the meshes should be added to

##### data

`any`

the OBJ data to load

##### rootUrl

`string`

root url to load from

#### Returns

`Promise`\<[`ISceneLoaderAsyncResult`](../../../core/src/interfaces/ISceneLoaderAsyncResult.md)\>

a promise containing the loaded meshes, particles, skeletons and animations

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`importMeshAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#importmeshasync)

***

### loadAssetContainerAsync()

> **loadAssetContainerAsync**(`scene`, `data`, `rootUrl`): `Promise`\<[`AssetContainer`](../../../core/src/classes/AssetContainer.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L219)

Load into an asset container.

#### Parameters

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

The scene to load into

##### data

`string`

The data to import

##### rootUrl

`string`

The root url for scene and resources

#### Returns

`Promise`\<[`AssetContainer`](../../../core/src/classes/AssetContainer.md)\>

The loaded asset container

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`loadAssetContainerAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#loadassetcontainerasync)

***

### loadAsync()

> **loadAsync**(`scene`, `data`, `rootUrl`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:203](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L203)

Imports all objects from the loaded OBJ data and adds them to the scene

#### Parameters

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

the scene the objects should be added to

##### data

`string`

the OBJ data to load

##### rootUrl

`string`

root url to load from

#### Returns

`Promise`\<`void`\>

a promise which completes when objects have been loaded to the scene

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`loadAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#loadasync)
