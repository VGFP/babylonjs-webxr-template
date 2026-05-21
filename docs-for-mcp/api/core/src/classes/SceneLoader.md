[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SceneLoader

# ~~Class: SceneLoader~~

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1588](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1588)

Class used to load scene from various file formats using registered plugins

## See

 - https://doc.babylonjs.com/features/featuresDeepDive/importers/loadingFileTypes
 - [ImportMeshAsync](../functions/ImportMeshAsync.md), [LoadSceneAsync](../functions/LoadSceneAsync-1.md), [AppendSceneAsync](../functions/AppendSceneAsync-1.md), [ImportAnimationsAsync](../functions/ImportAnimationsAsync-1.md), [LoadAssetContainerAsync](../functions/LoadAssetContainerAsync-1.md)

## Deprecated

The module level functions are more efficient for bundler tree shaking and allow plugin options to be passed through. Future improvements to scene loading will primarily be in the module level functions. The SceneLoader class will remain available, but it will be beneficial to prefer the module level functions.

## Constructors

### Constructor

> **new SceneLoader**(): `SceneLoader`

#### Returns

`SceneLoader`

## Properties

### ~~DETAILED\_LOGGING~~

> `readonly` `static` **DETAILED\_LOGGING**: `3` = `Constants.SCENELOADER_DETAILED_LOGGING`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1607](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1607)

Detailed logging while loading

***

### ~~MINIMAL\_LOGGING~~

> `readonly` `static` **MINIMAL\_LOGGING**: `1` = `Constants.SCENELOADER_MINIMAL_LOGGING`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1597](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1597)

Minimal logging while loading

***

### ~~NO\_LOGGING~~

> `readonly` `static` **NO\_LOGGING**: `0` = `Constants.SCENELOADER_NO_LOGGING`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1592](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1592)

No logging while loading

***

### ~~OnPluginActivatedObservable~~

> `readonly` `static` **OnPluginActivatedObservable**: [`Observable`](Observable.md)\<[`ISceneLoaderPlugin`](../interfaces/ISceneLoaderPlugin.md) \| [`ISceneLoaderPluginAsync`](../interfaces/ISceneLoaderPluginAsync.md)\> = `onPluginActivatedObservable`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1661](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1661)

Event raised when a plugin is used to load a scene

***

### ~~SUMMARY\_LOGGING~~

> `readonly` `static` **SUMMARY\_LOGGING**: `2` = `Constants.SCENELOADER_SUMMARY_LOGGING`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1602](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1602)

Summary logging while loading

## Accessors

### ~~CleanBoneMatrixWeights~~

#### Get Signature

> **get** `static` **CleanBoneMatrixWeights**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1648](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1648)

Gets or set a boolean indicating if matrix weights must be cleaned upon loading

##### Returns

`boolean`

#### Set Signature

> **set** `static` **CleanBoneMatrixWeights**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1652](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1652)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### ~~ForceFullSceneLoadingForIncremental~~

#### Get Signature

> **get** `static` **ForceFullSceneLoadingForIncremental**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1612](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1612)

Gets or sets a boolean indicating if entire scene must be loaded even if scene contains incremental data

##### Returns

`boolean`

#### Set Signature

> **set** `static` **ForceFullSceneLoadingForIncremental**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1616](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1616)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### ~~loggingLevel~~

#### Get Signature

> **get** `static` **loggingLevel**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1636](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1636)

**`Ignorenaming`**

Defines the current logging level (while loading the scene)

##### Returns

`number`

#### Set Signature

> **set** `static` **loggingLevel**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1641](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1641)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ~~ShowLoadingScreen~~

#### Get Signature

> **get** `static` **ShowLoadingScreen**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1623](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1623)

Gets or sets a boolean indicating if loading screen must be displayed while loading a scene

##### Returns

`boolean`

#### Set Signature

> **set** `static` **ShowLoadingScreen**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1627](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1627)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### ~~Append()~~

> `static` **Append**(`rootUrl`, `sceneFilename?`, `scene?`, `onSuccess?`, `onProgress?`, `onError?`, `pluginExtension?`, `name?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1817](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1817)

Append a scene

#### Parameters

##### rootUrl

`string`

a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)

##### sceneFilename?

`SceneSource`

a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene or a File object (default: empty string)

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

is the instance of BABYLON.Scene to append to

##### onSuccess?

[`Nullable`](../type-aliases/Nullable.md)\<(`scene`) => `void`\>

a callback with the scene when import succeeds

##### onProgress?

[`Nullable`](../type-aliases/Nullable.md)\<(`event`) => `void`\>

a callback with a progress event for each file being loaded

##### onError?

[`Nullable`](../type-aliases/Nullable.md)\<(`scene`, `message`, `exception?`) => `void`\>

a callback with the scene, a message, and possibly an exception when import fails

##### pluginExtension?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

the extension used to determine the plugin

##### name?

`string`

defines the name of the file, if the data is binary

#### Returns

`void`

#### Deprecated

Please use the module level [AppendSceneAsync](../functions/AppendSceneAsync-1.md) instead

***

### ~~AppendAsync()~~

> `static` **AppendAsync**(`rootUrl`, `sceneFilename?`, `scene?`, `onProgress?`, `pluginExtension?`, `name?`): `Promise`\<[`Scene`](Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1844](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1844)

Append a scene

#### Parameters

##### rootUrl

`string`

a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)

##### sceneFilename?

`SceneSource`

a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene or a File object (default: empty string)

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

is the instance of BABYLON.Scene to append to

##### onProgress?

[`Nullable`](../type-aliases/Nullable.md)\<(`event`) => `void`\>

a callback with a progress event for each file being loaded

##### pluginExtension?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

the extension used to determine the plugin

##### name?

`string`

defines the name of the file, if the data is binary

#### Returns

`Promise`\<[`Scene`](Scene.md)\>

The given scene

#### Deprecated

Please use the module level [AppendSceneAsync](../functions/AppendSceneAsync-1.md) instead

***

### ~~GetDefaultPlugin()~~

> `static` **GetDefaultPlugin**(): `IRegisteredPlugin` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1667](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1667)

Gets the default plugin (used to load Babylon files)

#### Returns

`IRegisteredPlugin` \| `undefined`

the .babylon plugin

***

### ~~GetPluginForExtension()~~

> `static` **GetPluginForExtension**(`extension`): [`ISceneLoaderPlugin`](../interfaces/ISceneLoaderPlugin.md) \| [`ISceneLoaderPluginAsync`](../interfaces/ISceneLoaderPluginAsync.md) \| [`ISceneLoaderPluginFactory`](../interfaces/ISceneLoaderPluginFactory.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1678](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1678)

Gets a plugin that can load the given extension

#### Parameters

##### extension

`string`

defines the extension to load

#### Returns

[`ISceneLoaderPlugin`](../interfaces/ISceneLoaderPlugin.md) \| [`ISceneLoaderPluginAsync`](../interfaces/ISceneLoaderPluginAsync.md) \| [`ISceneLoaderPluginFactory`](../interfaces/ISceneLoaderPluginFactory.md) \| `undefined`

a plugin or null if none works

***

### ~~ImportAnimations()~~

> `static` **ImportAnimations**(`rootUrl`, `sceneFilename?`, `scene?`, `overwriteAnimations?`, `animationGroupLoadingMode?`, `targetConverter?`, `onSuccess?`, `onProgress?`, `onError?`, `pluginExtension?`, `name?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1920](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1920)

Import animations from a file into a scene

#### Parameters

##### rootUrl

`string`

a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)

##### sceneFilename?

`SceneSource`

a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene or a File object (default: empty string)

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

is the instance of BABYLON.Scene to append to (default: last created scene)

##### overwriteAnimations?

`boolean`

when true, animations are cleaned before importing new ones. Animations are appended otherwise

##### animationGroupLoadingMode?

[`SceneLoaderAnimationGroupLoadingMode`](../enumerations/SceneLoaderAnimationGroupLoadingMode.md)

defines how to handle old animations groups before importing new ones

##### targetConverter?

[`Nullable`](../type-aliases/Nullable.md)\<(`target`) => `any`\>

defines a function used to convert animation targets from loaded scene to current scene (default: search node by name)

##### onSuccess?

[`Nullable`](../type-aliases/Nullable.md)\<(`scene`) => `void`\>

a callback with the scene when import succeeds

##### onProgress?

[`Nullable`](../type-aliases/Nullable.md)\<(`event`) => `void`\>

a callback with a progress event for each file being loaded

##### onError?

[`Nullable`](../type-aliases/Nullable.md)\<(`scene`, `message`, `exception?`) => `void`\>

a callback with the scene, a message, and possibly an exception when import fails

##### pluginExtension?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

the extension used to determine the plugin

##### name?

`string`

defines the filename, if the data is binary

#### Returns

`void`

#### Deprecated

Please use the module level [ImportAnimationsAsync](../functions/ImportAnimationsAsync-1.md) instead

***

### ~~ImportAnimationsAsync()~~

> `static` **ImportAnimationsAsync**(`rootUrl`, `sceneFilename?`, `scene?`, `overwriteAnimations?`, `animationGroupLoadingMode?`, `targetConverter?`, `onSuccess?`, `onProgress?`, `onError?`, `pluginExtension?`, `name?`): `Promise`\<[`Scene`](Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1965](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1965)

Import animations from a file into a scene

#### Parameters

##### rootUrl

`string`

a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)

##### sceneFilename?

`SceneSource`

a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene or a File object (default: empty string)

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

is the instance of BABYLON.Scene to append to (default: last created scene)

##### overwriteAnimations?

`boolean`

when true, animations are cleaned before importing new ones. Animations are appended otherwise

##### animationGroupLoadingMode?

[`SceneLoaderAnimationGroupLoadingMode`](../enumerations/SceneLoaderAnimationGroupLoadingMode.md)

defines how to handle old animations groups before importing new ones

##### targetConverter?

[`Nullable`](../type-aliases/Nullable.md)\<(`target`) => `any`\>

defines a function used to convert animation targets from loaded scene to current scene (default: search node by name)

##### onSuccess?

[`Nullable`](../type-aliases/Nullable.md)\<(`scene`) => `void`\>

a callback with the scene when import succeeds

##### onProgress?

[`Nullable`](../type-aliases/Nullable.md)\<(`event`) => `void`\>

a callback with a progress event for each file being loaded

##### onError?

[`Nullable`](../type-aliases/Nullable.md)\<(`scene`, `message`, `exception?`) => `void`\>

a callback with the scene, a message, and possibly an exception when import fails

##### pluginExtension?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

the extension used to determine the plugin

##### name?

`string`

defines the filename, if the data is binary

#### Returns

`Promise`\<[`Scene`](Scene.md)\>

the updated scene with imported animations

#### Deprecated

Please use the module level [ImportAnimationsAsync](../functions/ImportAnimationsAsync-1.md) instead

***

### ~~ImportMesh()~~

> `static` **ImportMesh**(`meshNames`, `rootUrl`, `sceneFilename?`, `scene?`, `onSuccess?`, `onProgress?`, `onError?`, `pluginExtension?`, `name?`, `pluginOptions?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1713](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1713)

Import meshes into a scene

#### Parameters

##### meshNames

`string` \| readonly `string`[] \| `null` \| `undefined`

an array of mesh names, a single mesh name, or empty string for all meshes that filter what meshes are imported

##### rootUrl

`string`

a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)

##### sceneFilename?

`SceneSource`

a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene or a File object (default: empty string)

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

the instance of BABYLON.Scene to append to

##### onSuccess?

[`Nullable`](../type-aliases/Nullable.md)\<[`SceneLoaderSuccessCallback`](../type-aliases/SceneLoaderSuccessCallback.md)\>

a callback with a list of imported meshes, particleSystems, skeletons, and animationGroups when import succeeds

##### onProgress?

[`Nullable`](../type-aliases/Nullable.md)\<(`event`) => `void`\>

a callback with a progress event for each file being loaded

##### onError?

[`Nullable`](../type-aliases/Nullable.md)\<(`scene`, `message`, `exception?`) => `void`\>

a callback with the scene, a message, and possibly an exception when import fails

##### pluginExtension?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

the extension used to determine the plugin

##### name?

`string`

defines the name of the file, if the data is binary

##### pluginOptions?

defines the options to use with the plugin

###### bvh?

\{ `enabled?`: `boolean`; `loopMode?`: `number`; \}

Defines options for the bvh loader.

###### bvh.enabled?

`boolean`

Defines if the plugin is enabled

###### bvh.loopMode?

`number`

Defines the loop mode of the animation to load.

###### gltf?

\{ `alwaysComputeBoundingBox?`: `boolean`; `alwaysComputeSkeletonRootNode?`: `boolean`; `animationStartMode?`: [`GLTFLoaderAnimationStartMode`](../../../loaders/src/enumerations/GLTFLoaderAnimationStartMode.md); `capturePerformanceCounters?`: `boolean`; `compileMaterials?`: `boolean`; `compileShadowGenerators?`: `boolean`; `coordinateSystemMode?`: [`GLTFLoaderCoordinateSystemMode`](../../../loaders/src/enumerations/GLTFLoaderCoordinateSystemMode.md); `createInstances?`: `boolean`; `customRootNode?`: [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>; `dontUseTransmissionHelper?`: `boolean`; `enabled?`: `boolean`; `extensionOptions?`: \{\[`key`: `string`\]: \{\[`key`: `string`\]: `unknown`; `enabled?`: `boolean`; \} \| `undefined`; `EXT_lights_area?`: \{ `enabled?`: `boolean`; \}; `EXT_lights_ies?`: \{ `enabled?`: `boolean`; \}; `EXT_lights_image_based?`: \{ `enabled?`: `boolean`; \}; `EXT_mesh_gpu_instancing?`: \{ `enabled?`: `boolean`; \}; `EXT_meshopt_compression?`: \{ `enabled?`: `boolean`; \}; `EXT_texture_avif?`: \{ `enabled?`: `boolean`; \}; `EXT_texture_webp?`: \{ `enabled?`: `boolean`; \}; `ExtrasAsMetadata?`: \{ `enabled?`: `boolean`; \}; `KHR_animation_pointer?`: \{ `enabled?`: `boolean`; \}; `KHR_draco_mesh_compression?`: \{ `enabled?`: `boolean`; \}; `KHR_interactivity?`: \{ `enabled?`: `boolean`; \}; `KHR_lights_punctual?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_anisotropy?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_clearcoat?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_coat?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_diffuse_roughness?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_diffuse_transmission?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_dispersion?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_emissive_strength?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_fuzz?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_ior?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_iridescence?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_pbrSpecularGlossiness?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_sheen?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_specular?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_transmission?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_unlit?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_variants?`: \{ `defaultVariant?`: `string`; `enabled?`: `boolean`; `onLoaded?`: (`controller`) => `void`; \}; `KHR_materials_volume?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_volume_scatter?`: \{ `enabled?`: `boolean`; \}; `KHR_mesh_quantization?`: \{ `enabled?`: `boolean`; \}; `KHR_node_hoverability?`: \{ `enabled?`: `boolean`; \}; `KHR_node_selectability?`: \{ `enabled?`: `boolean`; \}; `KHR_node_visibility?`: \{ `enabled?`: `boolean`; \}; `KHR_texture_basisu?`: \{ `enabled?`: `boolean`; \}; `KHR_texture_transform?`: \{ `enabled?`: `boolean`; \}; `KHR_xmp_json_ld?`: \{ `enabled?`: `boolean`; \}; `MSFT_audio_emitter?`: \{ `enabled?`: `boolean`; \}; `MSFT_lod?`: \{ `enabled?`: `boolean`; `maxLODsToLoad?`: `number`; \}; `MSFT_minecraftMesh?`: \{ `enabled?`: `boolean`; \}; `MSFT_sRGBFactors?`: \{ `enabled?`: `boolean`; \}; \}; `loadAllMaterials?`: `boolean`; `loadMorphTargets?`: `boolean`; `loadNodeAnimations?`: `boolean`; `loadOnlyMaterials?`: `boolean`; `loadSkins?`: `boolean`; `loggingEnabled?`: `boolean`; `onCameraLoaded?`: (`camera`) => `void`; `onMaterialLoaded?`: (`material`) => `void`; `onMeshLoaded?`: (`mesh`) => `void`; `onParsed?`: (`loaderData`) => `void`; `onSkinLoaded?`: (`node`, `skinnedNode`) => `void`; `onTextureLoaded?`: (`texture`) => `void`; `onValidated?`: (`results`) => `void`; `skipMaterials?`: `boolean`; `targetFps?`: `number`; `transparencyAsCoverage?`: `boolean`; `useClipPlane?`: `boolean`; `useGltfTextureNames?`: `boolean`; `useOpenPBR?`: `boolean`; `useRangeRequests?`: `boolean`; `useSRGBBuffers?`: `boolean`; `validate?`: `boolean`; `preprocessUrlAsync?`: `Promise`\<`string`\>; \}

Defines options for the glTF loader.

###### gltf.alwaysComputeBoundingBox?

`boolean` = `false`

Defines if the loader should always compute the bounding boxes of meshes and not use the min/max values from the position accessor. Defaults to false.

###### gltf.alwaysComputeSkeletonRootNode?

`boolean` = `false`

Defines if the loader should always compute the nearest common ancestor of the skeleton joints instead of using `skin.skeleton`. Defaults to false.
Set this to true if loading assets with invalid `skin.skeleton` values.

###### gltf.animationStartMode?

[`GLTFLoaderAnimationStartMode`](../../../loaders/src/enumerations/GLTFLoaderAnimationStartMode.md) = `GLTFLoaderAnimationStartMode.FIRST`

The animation start mode. Defaults to FIRST.

###### gltf.capturePerformanceCounters?

`boolean`

Defines if the loader should capture performance counters.

###### gltf.compileMaterials?

`boolean` = `false`

Defines if the loader should compile materials before raising the success callback. Defaults to false.

###### gltf.compileShadowGenerators?

`boolean` = `false`

Defines if the loader should compile shadow generators before raising the success callback. Defaults to false.

###### gltf.coordinateSystemMode?

[`GLTFLoaderCoordinateSystemMode`](../../../loaders/src/enumerations/GLTFLoaderCoordinateSystemMode.md) = `GLTFLoaderCoordinateSystemMode.AUTO`

The coordinate system mode. Defaults to AUTO.

###### gltf.createInstances?

`boolean` = `true`

Defines if the loader should create instances when multiple glTF nodes point to the same glTF mesh. Defaults to true.

###### gltf.customRootNode?

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Defines the node to use as the root of the hierarchy when loading the scene (default: undefined). If not defined, a root node will be automatically created.
You can also pass null if you don't want a root node to be created.

###### gltf.dontUseTransmissionHelper?

`boolean` = `false`

If true, the loader will not use the transmission helper when loading materials with transmission.

###### gltf.enabled?

`boolean`

Defines if the plugin is enabled

###### gltf.extensionOptions?

\{\[`key`: `string`\]: \{\[`key`: `string`\]: `unknown`; `enabled?`: `boolean`; \} \| `undefined`; `EXT_lights_area?`: \{ `enabled?`: `boolean`; \}; `EXT_lights_ies?`: \{ `enabled?`: `boolean`; \}; `EXT_lights_image_based?`: \{ `enabled?`: `boolean`; \}; `EXT_mesh_gpu_instancing?`: \{ `enabled?`: `boolean`; \}; `EXT_meshopt_compression?`: \{ `enabled?`: `boolean`; \}; `EXT_texture_avif?`: \{ `enabled?`: `boolean`; \}; `EXT_texture_webp?`: \{ `enabled?`: `boolean`; \}; `ExtrasAsMetadata?`: \{ `enabled?`: `boolean`; \}; `KHR_animation_pointer?`: \{ `enabled?`: `boolean`; \}; `KHR_draco_mesh_compression?`: \{ `enabled?`: `boolean`; \}; `KHR_interactivity?`: \{ `enabled?`: `boolean`; \}; `KHR_lights_punctual?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_anisotropy?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_clearcoat?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_coat?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_diffuse_roughness?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_diffuse_transmission?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_dispersion?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_emissive_strength?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_fuzz?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_ior?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_iridescence?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_pbrSpecularGlossiness?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_sheen?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_specular?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_transmission?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_unlit?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_variants?`: \{ `defaultVariant?`: `string`; `enabled?`: `boolean`; `onLoaded?`: (`controller`) => `void`; \}; `KHR_materials_volume?`: \{ `enabled?`: `boolean`; \}; `KHR_materials_volume_scatter?`: \{ `enabled?`: `boolean`; \}; `KHR_mesh_quantization?`: \{ `enabled?`: `boolean`; \}; `KHR_node_hoverability?`: \{ `enabled?`: `boolean`; \}; `KHR_node_selectability?`: \{ `enabled?`: `boolean`; \}; `KHR_node_visibility?`: \{ `enabled?`: `boolean`; \}; `KHR_texture_basisu?`: \{ `enabled?`: `boolean`; \}; `KHR_texture_transform?`: \{ `enabled?`: `boolean`; \}; `KHR_xmp_json_ld?`: \{ `enabled?`: `boolean`; \}; `MSFT_audio_emitter?`: \{ `enabled?`: `boolean`; \}; `MSFT_lod?`: \{ `enabled?`: `boolean`; `maxLODsToLoad?`: `number`; \}; `MSFT_minecraftMesh?`: \{ `enabled?`: `boolean`; \}; `MSFT_sRGBFactors?`: \{ `enabled?`: `boolean`; \}; \} = `{}`

Defines options for glTF extensions.

###### gltf.extensionOptions.EXT_lights_area?

\{ `enabled?`: `boolean`; \}

Defines options for the EXT_lights_area extension.

###### gltf.extensionOptions.EXT_lights_area.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.EXT_lights_ies?

\{ `enabled?`: `boolean`; \}

Defines options for the EXT_lights_ies extension.

###### gltf.extensionOptions.EXT_lights_ies.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.EXT_lights_image_based?

\{ `enabled?`: `boolean`; \}

Defines options for the EXT_lights_image_based extension.

###### gltf.extensionOptions.EXT_lights_image_based.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.EXT_mesh_gpu_instancing?

\{ `enabled?`: `boolean`; \}

Defines options for the EXT_mesh_gpu_instancing extension.

###### gltf.extensionOptions.EXT_mesh_gpu_instancing.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.EXT_meshopt_compression?

\{ `enabled?`: `boolean`; \}

Defines options for the EXT_meshopt_compression extension.

###### gltf.extensionOptions.EXT_meshopt_compression.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.EXT_texture_avif?

\{ `enabled?`: `boolean`; \}

Defines options for the EXT_texture_avif extension.

###### gltf.extensionOptions.EXT_texture_avif.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.EXT_texture_webp?

\{ `enabled?`: `boolean`; \}

Defines options for the EXT_texture_webp extension.

###### gltf.extensionOptions.EXT_texture_webp.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.ExtrasAsMetadata?

\{ `enabled?`: `boolean`; \}

Defines options for the ExtrasAsMetadata extension.

###### gltf.extensionOptions.ExtrasAsMetadata.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_animation_pointer?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_animation_pointer extension.

###### gltf.extensionOptions.KHR_animation_pointer.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_draco_mesh_compression?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_draco_mesh_compression extension.

###### gltf.extensionOptions.KHR_draco_mesh_compression.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_interactivity?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_interactivity extension.

###### gltf.extensionOptions.KHR_interactivity.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_lights_punctual?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_lights_punctual extension.

###### gltf.extensionOptions.KHR_lights_punctual.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_materials_anisotropy?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_materials_anisotropy extension.

###### gltf.extensionOptions.KHR_materials_anisotropy.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_materials_clearcoat?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_materials_clearcoat extension.

###### gltf.extensionOptions.KHR_materials_clearcoat.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_materials_coat?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_materials_coat extension.

###### gltf.extensionOptions.KHR_materials_coat.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_materials_diffuse_roughness?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_materials_diffuse_roughness extension.

###### gltf.extensionOptions.KHR_materials_diffuse_roughness.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_materials_diffuse_transmission?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_materials_diffuse_transmission extension.

###### gltf.extensionOptions.KHR_materials_diffuse_transmission.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_materials_dispersion?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_materials_dispersion extension.

###### gltf.extensionOptions.KHR_materials_dispersion.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_materials_emissive_strength?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_materials_emissive_strength extension.

###### gltf.extensionOptions.KHR_materials_emissive_strength.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_materials_fuzz?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_materials_fuzz extension.

###### gltf.extensionOptions.KHR_materials_fuzz.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_materials_ior?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_materials_ior extension.

###### gltf.extensionOptions.KHR_materials_ior.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_materials_iridescence?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_materials_iridescence extension.

###### gltf.extensionOptions.KHR_materials_iridescence.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_materials_pbrSpecularGlossiness?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_materials_pbrSpecularGlossiness extension.

###### gltf.extensionOptions.KHR_materials_pbrSpecularGlossiness.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_materials_sheen?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_materials_sheen extension.

###### gltf.extensionOptions.KHR_materials_sheen.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_materials_specular?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_materials_specular extension.

###### gltf.extensionOptions.KHR_materials_specular.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_materials_transmission?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_materials_transmission extension.

###### gltf.extensionOptions.KHR_materials_transmission.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_materials_unlit?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_materials_unlit extension.

###### gltf.extensionOptions.KHR_materials_unlit.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_materials_variants?

\{ `defaultVariant?`: `string`; `enabled?`: `boolean`; `onLoaded?`: (`controller`) => `void`; \}

Defines options for the KHR_materials_variants extension.

###### gltf.extensionOptions.KHR_materials_variants.defaultVariant?

`string`

Specifies the name of the variant that should be selected by default.

###### gltf.extensionOptions.KHR_materials_variants.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_materials_variants.onLoaded?

(`controller`) => `void`

**`Experimental`**

Defines a callback that will be called if material variants are loaded.

###### gltf.extensionOptions.KHR_materials_volume?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_materials_volume extension.

###### gltf.extensionOptions.KHR_materials_volume.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_materials_volume_scatter?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_materials_volume_scatter extension.

###### gltf.extensionOptions.KHR_materials_volume_scatter.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_mesh_quantization?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_mesh_quantization extension.

###### gltf.extensionOptions.KHR_mesh_quantization.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_node_hoverability?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_node_hoverability extension.

###### gltf.extensionOptions.KHR_node_hoverability.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_node_selectability?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_selectability extension.

###### gltf.extensionOptions.KHR_node_selectability.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_node_visibility?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_node_visibility extension.

###### gltf.extensionOptions.KHR_node_visibility.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_texture_basisu?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_texture_basisu extension.

###### gltf.extensionOptions.KHR_texture_basisu.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_texture_transform?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_texture_transform extension.

###### gltf.extensionOptions.KHR_texture_transform.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.KHR_xmp_json_ld?

\{ `enabled?`: `boolean`; \}

Defines options for the KHR_xmp_json_ld extension.

###### gltf.extensionOptions.KHR_xmp_json_ld.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.MSFT_audio_emitter?

\{ `enabled?`: `boolean`; \}

Defines options for the MSFT_audio_emitter extension.

###### gltf.extensionOptions.MSFT_audio_emitter.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.MSFT_lod?

\{ `enabled?`: `boolean`; `maxLODsToLoad?`: `number`; \}

Defines options for the MSFT_lod extension.

###### gltf.extensionOptions.MSFT_lod.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.MSFT_lod.maxLODsToLoad?

`number`

Maximum number of LODs to load, starting from the lowest LOD.

###### gltf.extensionOptions.MSFT_minecraftMesh?

\{ `enabled?`: `boolean`; \}

Defines options for the MSFT_minecraftMesh extension.

###### gltf.extensionOptions.MSFT_minecraftMesh.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.extensionOptions.MSFT_sRGBFactors?

\{ `enabled?`: `boolean`; \}

Defines options for the MSFT_sRGBFactors extension.

###### gltf.extensionOptions.MSFT_sRGBFactors.enabled?

`boolean`

Defines if the extension is enabled

###### gltf.loadAllMaterials?

`boolean` = `false`

If true, load all materials defined in the file, even if not used by any mesh. Defaults to false.

###### gltf.loadMorphTargets?

`boolean` = `true`

Defines if the loader should load morph targets. Defaults to true.

###### gltf.loadNodeAnimations?

`boolean` = `true`

Defines if the loader should load node animations. Defaults to true.
NOTE: The animation of this node will still load if the node is also a joint of a skin and `loadSkins` is true.

###### gltf.loadOnlyMaterials?

`boolean` = `false`

If true, load only the materials defined in the file. Defaults to false.

###### gltf.loadSkins?

`boolean` = `true`

Defines if the loader should load skins. Defaults to true.

###### gltf.loggingEnabled?

`boolean`

If true, enable logging for the loader. Defaults to false.

###### gltf.onCameraLoaded?

(`camera`) => `void`

Callback raised when the loader creates a camera after parsing the glTF properties of the camera.

###### gltf.onMaterialLoaded?

(`material`) => `void`

Callback raised when the loader creates a material after parsing the glTF properties of the material.

###### gltf.onMeshLoaded?

(`mesh`) => `void`

Callback raised when the loader creates a mesh after parsing the glTF properties of the mesh.
Note that the callback is called as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)

###### gltf.onParsed?

(`loaderData`) => `void`

Raised when the asset has been parsed

###### gltf.onSkinLoaded?

(`node`, `skinnedNode`) => `void`

Callback raised when the loader creates a skin after parsing the glTF properties of the skin node.

**See**

https://doc.babylonjs.com/features/featuresDeepDive/importers/glTF/glTFSkinning#ignoring-the-transform-of-the-skinned-mesh

###### gltf.onTextureLoaded?

(`texture`) => `void`

Callback raised when the loader creates a texture after parsing the glTF properties of the texture.

###### gltf.onValidated?

(`results`) => `void`

Callback raised after the asset is validated.

###### gltf.skipMaterials?

`boolean` = `false`

If true, do not load any materials defined in the file. Defaults to false.

###### gltf.targetFps?

`number` = `60`

When loading glTF animations, which are defined in seconds, target them to this FPS. Defaults to 60.

###### gltf.transparencyAsCoverage?

`boolean` = `false`

Defines if the Alpha blended materials are only applied as coverage.
If false, (default) The luminance of each pixel will reduce its opacity to simulate the behaviour of most physical materials.
If true, no extra effects are applied to transparent pixels.

###### gltf.useClipPlane?

`boolean` = `false`

Defines if the loader should also compile materials with clip planes. Defaults to false.

###### gltf.useGltfTextureNames?

`boolean` = `false`

If true, the loader will derive the name for Babylon textures from the glTF texture name, image name, or image url. Defaults to false.
Note that it is possible for multiple Babylon textures to share the same name when the Babylon textures load from the same glTF texture or image.

###### gltf.useOpenPBR?

`boolean` = `false`

**`Experimental`**

Load the glTF files using the OpenPBR material.

###### gltf.useRangeRequests?

`boolean` = `false`

Defines if the loader should use range requests when load binary glTF files from HTTP.
Enabling will disable offline support and glTF validator.
Defaults to false.

###### gltf.useSRGBBuffers?

`boolean` = `true`

If true, load the color (gamma encoded) textures into sRGB buffers (if supported by the GPU), which will yield more accurate results when sampling the texture. Defaults to true.

###### gltf.validate?

`boolean` = `false`

Defines if the loader should validate the asset.

###### gltf.preprocessUrlAsync?

###### obj?

\{ `computeNormals?`: `boolean`; `enabled?`: `boolean`; `importVertexColors?`: `boolean`; `invertTextureY?`: `boolean`; `invertY?`: `boolean`; `materialLoadingFailsSilently?`: `boolean`; `optimizeNormals?`: `boolean`; `optimizeWithUV?`: `boolean`; `skipMaterials?`: `boolean`; `useLegacyBehavior?`: `boolean`; `UVScaling?`: [`Vector2`](Vector2.md); \}

Defines options for the obj loader.

###### obj.computeNormals?

`boolean`

Compute the normals for the model, even if normals are present in the file.

###### obj.enabled?

`boolean`

Defines if the plugin is enabled

###### obj.importVertexColors?

`boolean`

Include in meshes the vertex colors available in some OBJ files.  This is not part of OBJ standard.

###### obj.invertTextureY?

`boolean`

Invert Y-Axis of referenced textures on load

###### obj.invertY?

`boolean`

Invert model on y-axis (does a model scaling inversion)

###### obj.materialLoadingFailsSilently?

`boolean`

When a material fails to load OBJ loader will silently fail and onSuccess() callback will be triggered.

###### obj.optimizeNormals?

`boolean`

Optimize the normals for the model. Lighting can be uneven if you use OptimizeWithUV = true because new vertices can be created for the same location if they pertain to different faces.
Using OptimizehNormals = true will help smoothing the lighting by averaging the normals of those vertices.

###### obj.optimizeWithUV?

`boolean`

Defines if UVs are optimized by default during load.

###### obj.skipMaterials?

`boolean`

Skip loading the materials even if defined in the OBJ file (materials are ignored).

###### obj.useLegacyBehavior?

`boolean`

Loads assets without handedness conversions. This flag is for compatibility. Use it only if absolutely required. Defaults to false.

###### obj.UVScaling?

[`Vector2`](Vector2.md)

Defines custom scaling of UV coordinates of loaded meshes.

###### splat?

\{ `deflateURL?`: `string`; `disableAutoCameraLimits?`: `boolean`; `enabled?`: `boolean`; `fflate?`: `unknown`; `flipY?`: `boolean`; `gaussianSplattingMesh?`: [`GaussianSplattingMesh`](GaussianSplattingMesh.md); `keepInRam?`: `boolean`; `needsRotationScaleTextures?`: `boolean`; `spzLibraryUrl?`: `string`; \}

Defines options for the splat loader.

###### splat.deflateURL?

`string`

URL to load fflate from. If null or undefined, will load from unpkg.com
(https://unpkg.com/fflate/umd/index.js)

###### splat.disableAutoCameraLimits?

`boolean`

Disable automatic camera limits from being applied if they exist in the splat file

###### splat.enabled?

`boolean`

Defines if the plugin is enabled

###### splat.fflate?

`unknown`

Instance of [fflate](https://github.com/101arrowz/fflate) to avoid
dynamically loading of the lib to global if needed, useful for bundler users.

**Example**

```ts
import * as fflate from 'fflate';
```

###### splat.flipY?

`boolean`

Spatial Y Flip for splat position and orientation

###### splat.gaussianSplattingMesh?

[`GaussianSplattingMesh`](GaussianSplattingMesh.md)

Mesh that will be used to load data instead of creating a new one

###### splat.keepInRam?

`boolean`

Defines if buffers should be kept in memory for editing purposes

###### splat.needsRotationScaleTextures?

`boolean`

Generate rotation and scale matrix textures required for voxel-based IBL shadows.
Required for IBL shadows to work if keepInRam is false.

###### splat.spzLibraryUrl?

`string`

URL to load the spz WASM ES module from (e.g. the @adobe/spz package).
When provided, the WASM-based SPZ loader is used, which supports extra features
such as antialiasing metadata, and vendor-specific extensions such as safe-orbit
camera limits.
Defaults to the @adobe/spz unpkg URL when WebAssembly is supported, and undefined otherwise.
Set to undefined to force the built-in manual SPZ parser regardless of WebAssembly support.

**Example**

```ts
Setting the URL directly on the loader options
spzLibraryUrl: "https://unpkg.com/@adobe/spz@0.2.0/dist/spz.js"
```

###### stl?

\{ `enabled?`: `boolean`; \}

Defines options for the stl loader.

###### stl.enabled?

`boolean`

Defines if the plugin is enabled

#### Returns

`void`

#### Deprecated

Please use the module level [ImportMeshAsync](../functions/ImportMeshAsync.md) instead

***

### ~~ImportMeshAsync()~~

> `static` **ImportMeshAsync**(`meshNames`, `rootUrl`, `sceneFilename?`, `scene?`, `onProgress?`, `pluginExtension?`, `name?`): `Promise`\<[`ISceneLoaderAsyncResult`](../interfaces/ISceneLoaderAsyncResult.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1743](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1743)

Import meshes into a scene

#### Parameters

##### meshNames

`string` \| readonly `string`[] \| `null` \| `undefined`

an array of mesh names, a single mesh name, or empty string for all meshes that filter what meshes are imported

##### rootUrl

`string`

a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)

##### sceneFilename?

`SceneSource`

a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene or a File object (default: empty string)

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

the instance of BABYLON.Scene to append to

##### onProgress?

[`Nullable`](../type-aliases/Nullable.md)\<(`event`) => `void`\>

a callback with a progress event for each file being loaded

##### pluginExtension?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

the extension used to determine the plugin

##### name?

`string`

defines the name of the file

#### Returns

`Promise`\<[`ISceneLoaderAsyncResult`](../interfaces/ISceneLoaderAsyncResult.md)\>

The loaded list of imported meshes, particle systems, skeletons, and animation groups

#### Deprecated

Please use the module level [ImportMeshAsync](../functions/ImportMeshAsync.md) instead

***

### ~~IsPluginForExtensionAvailable()~~

> `static` **IsPluginForExtensionAvailable**(`extension`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1687](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1687)

Gets a boolean indicating that the given extension can be loaded

#### Parameters

##### extension

`string`

defines the extension to load

#### Returns

`boolean`

true if the extension is supported

***

### ~~Load()~~

> `static` **Load**(`rootUrl`, `sceneFilename?`, `engine?`, `onSuccess?`, `onProgress?`, `onError?`, `pluginExtension?`, `name?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1767](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1767)

Load a scene

#### Parameters

##### rootUrl

`string`

a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)

##### sceneFilename?

`SceneSource`

a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene or a File object (default: empty string)

##### engine?

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

is the instance of BABYLON.Engine to use to create the scene

##### onSuccess?

[`Nullable`](../type-aliases/Nullable.md)\<(`scene`) => `void`\>

a callback with the scene when import succeeds

##### onProgress?

[`Nullable`](../type-aliases/Nullable.md)\<(`event`) => `void`\>

a callback with a progress event for each file being loaded

##### onError?

[`Nullable`](../type-aliases/Nullable.md)\<(`scene`, `message`, `exception?`) => `void`\>

a callback with the scene, a message, and possibly an exception when import fails

##### pluginExtension?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

the extension used to determine the plugin

##### name?

`string`

defines the filename, if the data is binary

#### Returns

`void`

#### Deprecated

Please use the module level [LoadSceneAsync](../functions/LoadSceneAsync-1.md) instead

***

### ~~LoadAssetContainer()~~

> `static` **LoadAssetContainer**(`rootUrl`, `sceneFilename?`, `scene?`, `onSuccess?`, `onProgress?`, `onError?`, `pluginExtension?`, `name?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1867](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1867)

Load a scene into an asset container

#### Parameters

##### rootUrl

`string`

a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)

##### sceneFilename?

`SceneSource`

a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene or a File object (default: empty string)

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

is the instance of BABYLON.Scene to append to (default: last created scene)

##### onSuccess?

[`Nullable`](../type-aliases/Nullable.md)\<(`assets`) => `void`\>

a callback with the scene when import succeeds

##### onProgress?

[`Nullable`](../type-aliases/Nullable.md)\<(`event`) => `void`\>

a callback with a progress event for each file being loaded

##### onError?

[`Nullable`](../type-aliases/Nullable.md)\<(`scene`, `message`, `exception?`) => `void`\>

a callback with the scene, a message, and possibly an exception when import fails

##### pluginExtension?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

the extension used to determine the plugin

##### name?

`string`

defines the filename, if the data is binary

#### Returns

`void`

#### Deprecated

Please use the module level [LoadAssetContainerAsync](../functions/LoadAssetContainerAsync-1.md) instead

***

### ~~LoadAssetContainerAsync()~~

> `static` **LoadAssetContainerAsync**(`rootUrl`, `sceneFilename?`, `scene?`, `onProgress?`, `pluginExtension?`, `name?`): `Promise`\<[`AssetContainer`](AssetContainer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1894](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1894)

Load a scene into an asset container

#### Parameters

##### rootUrl

`string`

a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)

##### sceneFilename?

`SceneSource`

a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene (default: empty string)

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

is the instance of Scene to append to

##### onProgress?

[`Nullable`](../type-aliases/Nullable.md)\<(`event`) => `void`\>

a callback with a progress event for each file being loaded

##### pluginExtension?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

the extension used to determine the plugin

##### name?

`string`

defines the filename, if the data is binary

#### Returns

`Promise`\<[`AssetContainer`](AssetContainer.md)\>

The loaded asset container

#### Deprecated

Please use the module level [LoadAssetContainerAsync](../functions/LoadAssetContainerAsync-1.md) instead

***

### ~~LoadAsync()~~

> `static` **LoadAsync**(`rootUrl`, `sceneFilename?`, `engine?`, `onProgress?`, `pluginExtension?`, `name?`): `Promise`\<[`Scene`](Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1794](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1794)

Load a scene

#### Parameters

##### rootUrl

`string`

a string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)

##### sceneFilename?

`SceneSource`

a string that defines the name of the scene file or starts with "data:" following by the stringified version of the scene or a File object (default: empty string)

##### engine?

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

is the instance of BABYLON.Engine to use to create the scene

##### onProgress?

[`Nullable`](../type-aliases/Nullable.md)\<(`event`) => `void`\>

a callback with a progress event for each file being loaded

##### pluginExtension?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

the extension used to determine the plugin

##### name?

`string`

defines the filename, if the data is binary

#### Returns

`Promise`\<[`Scene`](Scene.md)\>

The loaded scene

#### Deprecated

Please use the module level [LoadSceneAsync](../functions/LoadSceneAsync-1.md) instead

***

### ~~RegisterPlugin()~~

> `static` **RegisterPlugin**(`plugin`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:1695](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L1695)

Adds a new plugin to the list of registered plugins

#### Parameters

##### plugin

[`ISceneLoaderPlugin`](../interfaces/ISceneLoaderPlugin.md) \| [`ISceneLoaderPluginAsync`](../interfaces/ISceneLoaderPluginAsync.md) \| [`ISceneLoaderPluginFactory`](../interfaces/ISceneLoaderPluginFactory.md)

defines the plugin to add

#### Returns

`void`
