[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AssetsManager

# Class: AssetsManager

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1050](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1050)

This class can be used to easily import assets into a scene

## See

https://doc.babylonjs.com/features/featuresDeepDive/importers/assetManager

## Constructors

### Constructor

> **new AssetsManager**(`scene?`): `AssetsManager`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1115)

Creates a new AssetsManager

#### Parameters

##### scene?

[`Scene`](Scene.md)

defines the scene to work on

#### Returns

`AssetsManager`

## Properties

### autoHideLoadingUI

> **autoHideLoadingUI**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1109)

Gets or sets a boolean defining if the AssetsManager should automatically hide the loading screen
when all assets have been downloaded.
If set to false, you need to manually call in hideLoadingUI() once your scene is ready.

***

### onFinish

> **onFinish**: (`tasks`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1061](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1061)

Callback called when all tasks are processed

#### Parameters

##### tasks

[`AbstractAssetTask`](AbstractAssetTask.md)[]

#### Returns

`void`

***

### onProgress

> **onProgress**: (`remainingCount`, `totalCount`, `task`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1076](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1076)

Callback called when a task is done (whatever the result is)

#### Parameters

##### remainingCount

`number`

##### totalCount

`number`

##### task

[`AbstractAssetTask`](AbstractAssetTask.md)

#### Returns

`void`

***

### onProgressObservable

> **onProgressObservable**: [`Observable`](Observable.md)\<[`IAssetsProgressEvent`](../interfaces/IAssetsProgressEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1096](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1096)

Observable called when a task is done (whatever the result is)

***

### onTaskError

> **onTaskError**: (`task`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1071](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1071)

Callback called when a task had an error

#### Parameters

##### task

[`AbstractAssetTask`](AbstractAssetTask.md)

#### Returns

`void`

***

### onTaskErrorObservable

> **onTaskErrorObservable**: [`Observable`](Observable.md)\<[`AbstractAssetTask`](AbstractAssetTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1086](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1086)

Observable called when a task had an error

***

### onTasksDoneObservable

> **onTasksDoneObservable**: [`Observable`](Observable.md)\<[`AbstractAssetTask`](AbstractAssetTask.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1091](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1091)

Observable called when all tasks were executed

***

### onTaskSuccess

> **onTaskSuccess**: (`task`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1066](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1066)

Callback called when a task is successful

#### Parameters

##### task

[`AbstractAssetTask`](AbstractAssetTask.md)

#### Returns

`void`

***

### onTaskSuccessObservable

> **onTaskSuccessObservable**: [`Observable`](Observable.md)\<[`AbstractAssetTask`](AbstractAssetTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1081](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1081)

Observable called when all tasks are processed

***

### useDefaultLoadingScreen

> **useDefaultLoadingScreen**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1102)

Gets or sets a boolean defining if the AssetsManager should use the default loading screen

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/customLoadingScreen

## Methods

### addBinaryFileTask()

> **addBinaryFileTask**(`taskName`, `url`): [`BinaryFileAssetTask`](BinaryFileAssetTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1180)

Add a BinaryFileAssetTask to the list of active tasks

#### Parameters

##### taskName

`string`

defines the name of the new task

##### url

`string`

defines the url of the file to load

#### Returns

[`BinaryFileAssetTask`](BinaryFileAssetTask.md)

a new BinaryFileAssetTask object

***

### addContainerTask()

> **addContainerTask**(`taskName`, `meshesNames`, `rootUrl`, `sceneFilename`, `extension?`): [`ContainerAssetTask`](ContainerAssetTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1128)

Add a ContainerAssetTask to the list of active tasks

#### Parameters

##### taskName

`string`

defines the name of the new task

##### meshesNames

`any`

defines the name of meshes to load

##### rootUrl

`string`

defines the root url to use to locate files

##### sceneFilename

`string` \| `File`

defines the filename of the scene file or the File itself

##### extension?

`string`

defines the extension to use to load the file

#### Returns

[`ContainerAssetTask`](ContainerAssetTask.md)

a new ContainerAssetTask object

***

### addCubeTextureTask()

> **addCubeTextureTask**(`taskName`, `url`, `extensionsOrOptions?`, `noMipmap?`, `files?`, `prefiltered?`): [`CubeTextureAssetTask`](CubeTextureAssetTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1232)

Add a CubeTextureAssetTask to the list of active tasks

#### Parameters

##### taskName

`string`

defines the name of the new task

##### url

`string`

defines the url of the file to load

##### extensionsOrOptions?

`string`[] \| [`ICubeTextureCreationOptions`](../interfaces/ICubeTextureCreationOptions.md)

defines the extension to use to load the cube map (can be null) or the options to use for the cube texture

##### noMipmap?

`boolean`

defines if the texture must not receive mipmaps (false by default)

##### files?

`string`[]

defines the list of files to load (can be null)

##### prefiltered?

`boolean`

defines the prefiltered texture option (default is false)

#### Returns

[`CubeTextureAssetTask`](CubeTextureAssetTask.md)

a new CubeTextureAssetTask object

***

### addEquiRectangularCubeTextureAssetTask()

> **addEquiRectangularCubeTextureAssetTask**(`taskName`, `url`, `size`, `noMipmap?`, `gammaSpace?`, `superSample?`): [`EquiRectangularCubeTextureAssetTask`](EquiRectangularCubeTextureAssetTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1302)

Add a EquiRectangularCubeTextureAssetTask to the list of active tasks

#### Parameters

##### taskName

`string`

defines the name of the new task

##### url

`string`

defines the url of the file to load

##### size

`number`

defines the size you want for the cubemap (can be null)

##### noMipmap?

`boolean` = `false`

defines if the texture must not receive mipmaps (false by default)

##### gammaSpace?

`boolean` = `true`

Specifies if the texture will be used in gamma or linear space

##### superSample?

`boolean` = `false`

specifies if the texture will be generated with super sampling (default is false)
(the PBR material requires those textures in linear space, but the standard material would require them in Gamma space)

#### Returns

[`EquiRectangularCubeTextureAssetTask`](EquiRectangularCubeTextureAssetTask.md)

a new EquiRectangularCubeTextureAssetTask object

***

### addHDRCubeTextureTask()

> **addHDRCubeTextureTask**(`taskName`, `url`, `size`, `noMipmap?`, `generateHarmonics?`, `gammaSpace?`, `prefilterOnLoad?`, `supersample?`, `prefilterIrradianceOnLoad?`, `prefilterUsingCdf?`): [`HDRCubeTextureAssetTask`](HDRCubeTextureAssetTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1261)

Add a HDRCubeTextureAssetTask to the list of active tasks

#### Parameters

##### taskName

`string`

defines the name of the new task

##### url

`string`

defines the url of the file to load

##### size

`number`

defines the size you want for the cubemap (can be null)

##### noMipmap?

`boolean` = `false`

defines if the texture must not receive mipmaps (false by default)

##### generateHarmonics?

`boolean` = `true`

defines if you want to automatically generate (true by default)

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

[`HDRCubeTextureAssetTask`](HDRCubeTextureAssetTask.md)

a new HDRCubeTextureAssetTask object

***

### addImageTask()

> **addImageTask**(`taskName`, `url`): [`ImageAssetTask`](ImageAssetTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1193)

Add a ImageAssetTask to the list of active tasks

#### Parameters

##### taskName

`string`

defines the name of the new task

##### url

`string`

defines the url of the file to load

#### Returns

[`ImageAssetTask`](ImageAssetTask.md)

a new ImageAssetTask object

***

### addMeshTask()

> **addMeshTask**(`taskName`, `meshesNames`, `rootUrl`, `sceneFilename`, `extension?`, `filename?`, `pluginOptions?`): [`MeshAssetTask`](MeshAssetTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1146)

Add a MeshAssetTask to the list of active tasks

#### Parameters

##### taskName

`string`

defines the name of the new task

##### meshesNames

`any`

defines the name of meshes to load

##### rootUrl

`string`

defines the root url to use to locate files

##### sceneFilename

`string` \| `File`

defines the filename of the scene file or the File itself

##### extension?

`string`

defines the extension to use to load the file

##### filename?

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

[`MeshAssetTask`](MeshAssetTask.md)

a new MeshAssetTask object

***

### addTextFileTask()

> **addTextFileTask**(`taskName`, `url`): [`TextFileAssetTask`](TextFileAssetTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1167)

Add a TextFileAssetTask to the list of active tasks

#### Parameters

##### taskName

`string`

defines the name of the new task

##### url

`string`

defines the url of the file to load

#### Returns

[`TextFileAssetTask`](TextFileAssetTask.md)

a new TextFileAssetTask object

***

### addTextureTask()

> **addTextureTask**(`taskName`, `url`, `noMipmapOrOptions?`, `invertY?`, `samplingMode?`): [`TextureAssetTask`](TextureAssetTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1209)

Add a TextureAssetTask to the list of active tasks

#### Parameters

##### taskName

`string`

defines the name of the new task

##### url

`string`

defines the url of the file to load

##### noMipmapOrOptions?

`boolean` \| [`ITextureCreationOptions`](../interfaces/ITextureCreationOptions.md)

defines if mipmap should not be generated (default is false) or the creation options to use

##### invertY?

`boolean`

defines if you want to invert Y axis of the loaded texture (true by default)

##### samplingMode?

`number` = `Texture.TRILINEAR_SAMPLINGMODE`

defines the sampling mode to use (Texture.TRILINEAR_SAMPLINGMODE by default)

#### Returns

[`TextureAssetTask`](TextureAssetTask.md)

a new TextureAssetTask object

***

### load()

> **load**(): `AssetsManager`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1429](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1429)

Start the loading process

#### Returns

`AssetsManager`

the current instance of the AssetsManager

***

### loadAsync()

> **loadAsync**(): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1464](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1464)

Start the loading process as an async operation

#### Returns

`Promise`\<`void`\>

a promise returning the list of failed tasks

***

### removeTask()

> **removeTask**(`task`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1320](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1320)

Remove a task from the assets manager.

#### Parameters

##### task

[`AbstractAssetTask`](AbstractAssetTask.md)

the task to remove

#### Returns

`void`

***

### reset()

> **reset**(): `AssetsManager`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:1419](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/assetsManager.ts#L1419)

Reset the AssetsManager and remove all tasks

#### Returns

`AssetsManager`

the current instance of the AssetsManager
