[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MeshAssetTask

# Class: MeshAssetTask

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:328](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L328)

Define a task used by AssetsManager to load meshes

## Extends

- [`AbstractAssetTask`](AbstractAssetTask.md)

## Constructors

### Constructor

> **new MeshAssetTask**(`name`, `meshesNames`, `rootUrl`, `sceneFilename`, `extension?`, `fileName?`, `pluginOptions?`): `MeshAssetTask`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:370](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L370)

Creates a new MeshAssetTask

#### Parameters

##### name

`string`

defines the name of the task

##### meshesNames

`any`

defines the list of mesh's names you want to load

##### rootUrl

`string`

defines the root url to use as a base to load your meshes and associated resources

##### sceneFilename

`string` \| `File`

defines the filename or File of the scene to load from

##### extension?

`string`

defines the extension to use to load the scene (if not defined, ".babylon" will be used)

##### fileName?

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

###### fbx?

\{ `enabled?`: `boolean`; `normalMapCoordinateSystem?`: [`FBXNormalMapCoordinateSystem`](../../../loaders/src/type-aliases/FBXNormalMapCoordinateSystem.md); \}

Defines options for the FBX loader.

###### fbx.enabled?

`boolean`

Defines if the plugin is enabled

###### fbx.normalMapCoordinateSystem?

[`FBXNormalMapCoordinateSystem`](../../../loaders/src/type-aliases/FBXNormalMapCoordinateSystem.md)

Source convention for tangent-space normal maps connected through FBX normal-map slots.
FBX does not standardize this convention, so the loader defaults to the glTF/USD-style Y-up convention.
Set to "y-down" for assets authored with inverted green/Y normal maps.

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

\{ `deflateURL?`: `string`; `disableAutoCameraLimits?`: `boolean`; `enabled?`: `boolean`; `fflate?`: `unknown`; `flipY?`: `boolean`; `gaussianSplattingMesh?`: [`GaussianSplattingMesh`](GaussianSplattingMesh.md); `keepInRam?`: `boolean`; `needsRotationScaleTextures?`: `boolean`; `spzLibraryUrl?`: `string`; `useSogTextures?`: `boolean`; \}

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

###### splat.useSogTextures?

`boolean`

Load SOG files as raw GPU textures and dequantize in the shader.
Skips the CPU decode pass and yields much faster load times.
Requires WebGL2 / WebGPU. Defaults to false (CPU decode).

###### stl?

\{ `enabled?`: `boolean`; \}

Defines options for the stl loader.

###### stl.enabled?

`boolean`

Defines if the plugin is enabled

#### Returns

`MeshAssetTask`

#### Overrides

[`AbstractAssetTask`](AbstractAssetTask.md).[`constructor`](AbstractAssetTask.md#constructor)

## Properties

### extension?

> `optional` **extension?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:390](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L390)

Defines the extension to use to load the scene (if not defined, ".babylon" will be used)

***

### fileName?

> `optional` **fileName?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:394](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L394)

defines the name of the file, if the data is binary

***

### loadedAnimationGroups

> **loadedAnimationGroups**: [`AnimationGroup`](AnimationGroup.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:348](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L348)

Gets the list of loaded animation groups

***

### loadedMeshes

> **loadedMeshes**: [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:336](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L336)

Gets the list of loaded meshes

***

### loadedParticleSystems

> **loadedParticleSystems**: [`IParticleSystem`](../interfaces/IParticleSystem.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L340)

Gets the list of loaded particle systems

***

### loadedSkeletons

> **loadedSkeletons**: [`Skeleton`](Skeleton.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:344](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L344)

Gets the list of loaded skeletons

***

### loadedTransformNodes

> **loadedTransformNodes**: [`TransformNode`](TransformNode.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L332)

Gets the list of loaded transforms

***

### meshesNames

> **meshesNames**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:378](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L378)

Defines the list of mesh's names you want to load

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:374](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L374)

Defines the name of the task

#### Inherited from

[`AbstractAssetTask`](AbstractAssetTask.md).[`name`](AbstractAssetTask.md#name)

***

### onError

> **onError**: (`task`, `message?`, `exception?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:358](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L358)

Callback called when the task is successful

#### Parameters

##### task

`MeshAssetTask`

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L353)

Callback called when the task is successful

#### Parameters

##### task

`MeshAssetTask`

#### Returns

`void`

#### Overrides

[`AbstractAssetTask`](AbstractAssetTask.md).[`onSuccess`](AbstractAssetTask.md#onsuccess)

***

### pluginOptions?

> `optional` **pluginOptions?**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:398](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L398)

defines the options to use with the plugin

#### Index Signature

\[`key`: `string`\]: \{\[`key`: `string`\]: `unknown`; `enabled?`: `boolean`; \} \| `undefined`

#### bvh?

> `optional` **bvh?**: `object`

Defines options for the bvh loader.

##### bvh.enabled?

> `optional` **enabled?**: `boolean`

Defines if the plugin is enabled

##### bvh.loopMode?

> `optional` **loopMode?**: `number`

Defines the loop mode of the animation to load.

#### fbx?

> `optional` **fbx?**: `object`

Defines options for the FBX loader.

##### fbx.enabled?

> `optional` **enabled?**: `boolean`

Defines if the plugin is enabled

##### fbx.normalMapCoordinateSystem?

> `optional` **normalMapCoordinateSystem?**: [`FBXNormalMapCoordinateSystem`](../../../loaders/src/type-aliases/FBXNormalMapCoordinateSystem.md)

Source convention for tangent-space normal maps connected through FBX normal-map slots.
FBX does not standardize this convention, so the loader defaults to the glTF/USD-style Y-up convention.
Set to "y-down" for assets authored with inverted green/Y normal maps.

#### gltf?

> `optional` **gltf?**: `object`

Defines options for the glTF loader.

##### gltf.alwaysComputeBoundingBox?

> `optional` **alwaysComputeBoundingBox?**: `boolean` = `false`

Defines if the loader should always compute the bounding boxes of meshes and not use the min/max values from the position accessor. Defaults to false.

##### gltf.alwaysComputeSkeletonRootNode?

> `optional` **alwaysComputeSkeletonRootNode?**: `boolean` = `false`

Defines if the loader should always compute the nearest common ancestor of the skeleton joints instead of using `skin.skeleton`. Defaults to false.
Set this to true if loading assets with invalid `skin.skeleton` values.

##### gltf.animationStartMode?

> `optional` **animationStartMode?**: [`GLTFLoaderAnimationStartMode`](../../../loaders/src/enumerations/GLTFLoaderAnimationStartMode.md) = `GLTFLoaderAnimationStartMode.FIRST`

The animation start mode. Defaults to FIRST.

##### gltf.capturePerformanceCounters?

> `abstract` `optional` **capturePerformanceCounters?**: `boolean`

Defines if the loader should capture performance counters.

##### gltf.compileMaterials?

> `optional` **compileMaterials?**: `boolean` = `false`

Defines if the loader should compile materials before raising the success callback. Defaults to false.

##### gltf.compileShadowGenerators?

> `optional` **compileShadowGenerators?**: `boolean` = `false`

Defines if the loader should compile shadow generators before raising the success callback. Defaults to false.

##### gltf.coordinateSystemMode?

> `optional` **coordinateSystemMode?**: [`GLTFLoaderCoordinateSystemMode`](../../../loaders/src/enumerations/GLTFLoaderCoordinateSystemMode.md) = `GLTFLoaderCoordinateSystemMode.AUTO`

The coordinate system mode. Defaults to AUTO.

##### gltf.createInstances?

> `optional` **createInstances?**: `boolean` = `true`

Defines if the loader should create instances when multiple glTF nodes point to the same glTF mesh. Defaults to true.

##### gltf.customRootNode?

> `optional` **customRootNode?**: [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Defines the node to use as the root of the hierarchy when loading the scene (default: undefined). If not defined, a root node will be automatically created.
You can also pass null if you don't want a root node to be created.

##### gltf.dontUseTransmissionHelper?

> `optional` **dontUseTransmissionHelper?**: `boolean` = `false`

If true, the loader will not use the transmission helper when loading materials with transmission.

##### gltf.enabled?

> `optional` **enabled?**: `boolean`

Defines if the plugin is enabled

##### gltf.extensionOptions?

> `optional` **extensionOptions?**: `object` = `{}`

Defines options for glTF extensions.

###### Index Signature

\[`key`: `string`\]: \{\[`key`: `string`\]: `unknown`; `enabled?`: `boolean`; \} \| `undefined`

##### gltf.extensionOptions.EXT\_lights\_area?

> `optional` **EXT\_lights\_area?**: `object`

Defines options for the EXT_lights_area extension.

##### gltf.extensionOptions.EXT\_lights\_area.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.EXT\_lights\_ies?

> `optional` **EXT\_lights\_ies?**: `object`

Defines options for the EXT_lights_ies extension.

##### gltf.extensionOptions.EXT\_lights\_ies.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.EXT\_lights\_image\_based?

> `optional` **EXT\_lights\_image\_based?**: `object`

Defines options for the EXT_lights_image_based extension.

##### gltf.extensionOptions.EXT\_lights\_image\_based.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.EXT\_mesh\_gpu\_instancing?

> `optional` **EXT\_mesh\_gpu\_instancing?**: `object`

Defines options for the EXT_mesh_gpu_instancing extension.

##### gltf.extensionOptions.EXT\_mesh\_gpu\_instancing.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.EXT\_meshopt\_compression?

> `optional` **EXT\_meshopt\_compression?**: `object`

Defines options for the EXT_meshopt_compression extension.

##### gltf.extensionOptions.EXT\_meshopt\_compression.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.EXT\_texture\_avif?

> `optional` **EXT\_texture\_avif?**: `object`

Defines options for the EXT_texture_avif extension.

##### gltf.extensionOptions.EXT\_texture\_avif.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.EXT\_texture\_webp?

> `optional` **EXT\_texture\_webp?**: `object`

Defines options for the EXT_texture_webp extension.

##### gltf.extensionOptions.EXT\_texture\_webp.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.ExtrasAsMetadata?

> `optional` **ExtrasAsMetadata?**: `object`

Defines options for the ExtrasAsMetadata extension.

##### gltf.extensionOptions.ExtrasAsMetadata.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_animation\_pointer?

> `optional` **KHR\_animation\_pointer?**: `object`

Defines options for the KHR_animation_pointer extension.

##### gltf.extensionOptions.KHR\_animation\_pointer.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_draco\_mesh\_compression?

> `optional` **KHR\_draco\_mesh\_compression?**: `object`

Defines options for the KHR_draco_mesh_compression extension.

##### gltf.extensionOptions.KHR\_draco\_mesh\_compression.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_interactivity?

> `optional` **KHR\_interactivity?**: `object`

Defines options for the KHR_interactivity extension.

##### gltf.extensionOptions.KHR\_interactivity.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_lights\_punctual?

> `optional` **KHR\_lights\_punctual?**: `object`

Defines options for the KHR_lights_punctual extension.

##### gltf.extensionOptions.KHR\_lights\_punctual.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_materials\_anisotropy?

> `optional` **KHR\_materials\_anisotropy?**: `object`

Defines options for the KHR_materials_anisotropy extension.

##### gltf.extensionOptions.KHR\_materials\_anisotropy.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_materials\_clearcoat?

> `optional` **KHR\_materials\_clearcoat?**: `object`

Defines options for the KHR_materials_clearcoat extension.

##### gltf.extensionOptions.KHR\_materials\_clearcoat.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_materials\_coat?

> `optional` **KHR\_materials\_coat?**: `object`

Defines options for the KHR_materials_coat extension.

##### gltf.extensionOptions.KHR\_materials\_coat.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_materials\_diffuse\_roughness?

> `optional` **KHR\_materials\_diffuse\_roughness?**: `object`

Defines options for the KHR_materials_diffuse_roughness extension.

##### gltf.extensionOptions.KHR\_materials\_diffuse\_roughness.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_materials\_diffuse\_transmission?

> `optional` **KHR\_materials\_diffuse\_transmission?**: `object`

Defines options for the KHR_materials_diffuse_transmission extension.

##### gltf.extensionOptions.KHR\_materials\_diffuse\_transmission.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_materials\_dispersion?

> `optional` **KHR\_materials\_dispersion?**: `object`

Defines options for the KHR_materials_dispersion extension.

##### gltf.extensionOptions.KHR\_materials\_dispersion.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_materials\_emissive\_strength?

> `optional` **KHR\_materials\_emissive\_strength?**: `object`

Defines options for the KHR_materials_emissive_strength extension.

##### gltf.extensionOptions.KHR\_materials\_emissive\_strength.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_materials\_fuzz?

> `optional` **KHR\_materials\_fuzz?**: `object`

Defines options for the KHR_materials_fuzz extension.

##### gltf.extensionOptions.KHR\_materials\_fuzz.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_materials\_ior?

> `optional` **KHR\_materials\_ior?**: `object`

Defines options for the KHR_materials_ior extension.

##### gltf.extensionOptions.KHR\_materials\_ior.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_materials\_iridescence?

> `optional` **KHR\_materials\_iridescence?**: `object`

Defines options for the KHR_materials_iridescence extension.

##### gltf.extensionOptions.KHR\_materials\_iridescence.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_materials\_pbrSpecularGlossiness?

> `optional` **KHR\_materials\_pbrSpecularGlossiness?**: `object`

Defines options for the KHR_materials_pbrSpecularGlossiness extension.

##### gltf.extensionOptions.KHR\_materials\_pbrSpecularGlossiness.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_materials\_sheen?

> `optional` **KHR\_materials\_sheen?**: `object`

Defines options for the KHR_materials_sheen extension.

##### gltf.extensionOptions.KHR\_materials\_sheen.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_materials\_specular?

> `optional` **KHR\_materials\_specular?**: `object`

Defines options for the KHR_materials_specular extension.

##### gltf.extensionOptions.KHR\_materials\_specular.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_materials\_transmission?

> `optional` **KHR\_materials\_transmission?**: `object`

Defines options for the KHR_materials_transmission extension.

##### gltf.extensionOptions.KHR\_materials\_transmission.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_materials\_unlit?

> `optional` **KHR\_materials\_unlit?**: `object`

Defines options for the KHR_materials_unlit extension.

##### gltf.extensionOptions.KHR\_materials\_unlit.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_materials\_variants?

> `optional` **KHR\_materials\_variants?**: `object`

Defines options for the KHR_materials_variants extension.

##### gltf.extensionOptions.KHR\_materials\_variants.defaultVariant?

> `optional` **defaultVariant?**: `string`

Specifies the name of the variant that should be selected by default.

##### gltf.extensionOptions.KHR\_materials\_variants.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_materials\_variants.onLoaded?

> `optional` **onLoaded?**: (`controller`) => `void`

**`Experimental`**

Defines a callback that will be called if material variants are loaded.

###### Parameters

###### controller

[`MaterialVariantsController`](../../../loaders/src/type-aliases/MaterialVariantsController.md)

###### Returns

`void`

##### gltf.extensionOptions.KHR\_materials\_volume?

> `optional` **KHR\_materials\_volume?**: `object`

Defines options for the KHR_materials_volume extension.

##### gltf.extensionOptions.KHR\_materials\_volume.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_materials\_volume\_scatter?

> `optional` **KHR\_materials\_volume\_scatter?**: `object`

Defines options for the KHR_materials_volume_scatter extension.

##### gltf.extensionOptions.KHR\_materials\_volume\_scatter.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_mesh\_quantization?

> `optional` **KHR\_mesh\_quantization?**: `object`

Defines options for the KHR_mesh_quantization extension.

##### gltf.extensionOptions.KHR\_mesh\_quantization.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_node\_hoverability?

> `optional` **KHR\_node\_hoverability?**: `object`

Defines options for the KHR_node_hoverability extension.

##### gltf.extensionOptions.KHR\_node\_hoverability.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_node\_selectability?

> `optional` **KHR\_node\_selectability?**: `object`

Defines options for the KHR_selectability extension.

##### gltf.extensionOptions.KHR\_node\_selectability.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_node\_visibility?

> `optional` **KHR\_node\_visibility?**: `object`

Defines options for the KHR_node_visibility extension.

##### gltf.extensionOptions.KHR\_node\_visibility.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_texture\_basisu?

> `optional` **KHR\_texture\_basisu?**: `object`

Defines options for the KHR_texture_basisu extension.

##### gltf.extensionOptions.KHR\_texture\_basisu.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_texture\_transform?

> `optional` **KHR\_texture\_transform?**: `object`

Defines options for the KHR_texture_transform extension.

##### gltf.extensionOptions.KHR\_texture\_transform.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.KHR\_xmp\_json\_ld?

> `optional` **KHR\_xmp\_json\_ld?**: `object`

Defines options for the KHR_xmp_json_ld extension.

##### gltf.extensionOptions.KHR\_xmp\_json\_ld.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.MSFT\_audio\_emitter?

> `optional` **MSFT\_audio\_emitter?**: `object`

Defines options for the MSFT_audio_emitter extension.

##### gltf.extensionOptions.MSFT\_audio\_emitter.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.MSFT\_lod?

> `optional` **MSFT\_lod?**: `object`

Defines options for the MSFT_lod extension.

##### gltf.extensionOptions.MSFT\_lod.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.MSFT\_lod.maxLODsToLoad?

> `optional` **maxLODsToLoad?**: `number`

Maximum number of LODs to load, starting from the lowest LOD.

##### gltf.extensionOptions.MSFT\_minecraftMesh?

> `optional` **MSFT\_minecraftMesh?**: `object`

Defines options for the MSFT_minecraftMesh extension.

##### gltf.extensionOptions.MSFT\_minecraftMesh.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.extensionOptions.MSFT\_sRGBFactors?

> `optional` **MSFT\_sRGBFactors?**: `object`

Defines options for the MSFT_sRGBFactors extension.

##### gltf.extensionOptions.MSFT\_sRGBFactors.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### gltf.loadAllMaterials?

> `optional` **loadAllMaterials?**: `boolean` = `false`

If true, load all materials defined in the file, even if not used by any mesh. Defaults to false.

##### gltf.loadMorphTargets?

> `optional` **loadMorphTargets?**: `boolean` = `true`

Defines if the loader should load morph targets. Defaults to true.

##### gltf.loadNodeAnimations?

> `optional` **loadNodeAnimations?**: `boolean` = `true`

Defines if the loader should load node animations. Defaults to true.
NOTE: The animation of this node will still load if the node is also a joint of a skin and `loadSkins` is true.

##### gltf.loadOnlyMaterials?

> `optional` **loadOnlyMaterials?**: `boolean` = `false`

If true, load only the materials defined in the file. Defaults to false.

##### gltf.loadSkins?

> `optional` **loadSkins?**: `boolean` = `true`

Defines if the loader should load skins. Defaults to true.

##### gltf.loggingEnabled?

> `abstract` `optional` **loggingEnabled?**: `boolean`

If true, enable logging for the loader. Defaults to false.

##### gltf.onCameraLoaded?

> `abstract` `optional` **onCameraLoaded?**: (`camera`) => `void`

Callback raised when the loader creates a camera after parsing the glTF properties of the camera.

###### Parameters

###### camera

[`Camera`](Camera.md)

###### Returns

`void`

##### gltf.onMaterialLoaded?

> `abstract` `optional` **onMaterialLoaded?**: (`material`) => `void`

Callback raised when the loader creates a material after parsing the glTF properties of the material.

###### Parameters

###### material

[`Material`](Material.md)

###### Returns

`void`

##### gltf.onMeshLoaded?

> `abstract` `optional` **onMeshLoaded?**: (`mesh`) => `void`

Callback raised when the loader creates a mesh after parsing the glTF properties of the mesh.
Note that the callback is called as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)

###### Parameters

###### mesh

[`AbstractMesh`](AbstractMesh.md)

###### Returns

`void`

##### gltf.onParsed?

> `abstract` `optional` **onParsed?**: (`loaderData`) => `void`

Raised when the asset has been parsed

###### Parameters

###### loaderData

[`IGLTFLoaderData`](../../../loaders/src/interfaces/IGLTFLoaderData.md)

###### Returns

`void`

##### gltf.onSkinLoaded?

> `abstract` `optional` **onSkinLoaded?**: (`node`, `skinnedNode`) => `void`

Callback raised when the loader creates a skin after parsing the glTF properties of the skin node.

###### Parameters

###### node

[`TransformNode`](TransformNode.md)

###### skinnedNode

[`TransformNode`](TransformNode.md)

###### Returns

`void`

###### See

https://doc.babylonjs.com/features/featuresDeepDive/importers/glTF/glTFSkinning#ignoring-the-transform-of-the-skinned-mesh

##### gltf.onTextureLoaded?

> `abstract` `optional` **onTextureLoaded?**: (`texture`) => `void`

Callback raised when the loader creates a texture after parsing the glTF properties of the texture.

###### Parameters

###### texture

[`BaseTexture`](BaseTexture.md)

###### Returns

`void`

##### gltf.onValidated?

> `abstract` `optional` **onValidated?**: (`results`) => `void`

Callback raised after the asset is validated.

###### Parameters

###### results

`IGLTFValidationResults`

###### Returns

`void`

##### gltf.skipMaterials?

> `optional` **skipMaterials?**: `boolean` = `false`

If true, do not load any materials defined in the file. Defaults to false.

##### gltf.targetFps?

> `optional` **targetFps?**: `number` = `60`

When loading glTF animations, which are defined in seconds, target them to this FPS. Defaults to 60.

##### gltf.transparencyAsCoverage?

> `optional` **transparencyAsCoverage?**: `boolean` = `false`

Defines if the Alpha blended materials are only applied as coverage.
If false, (default) The luminance of each pixel will reduce its opacity to simulate the behaviour of most physical materials.
If true, no extra effects are applied to transparent pixels.

##### gltf.useClipPlane?

> `optional` **useClipPlane?**: `boolean` = `false`

Defines if the loader should also compile materials with clip planes. Defaults to false.

##### gltf.useGltfTextureNames?

> `optional` **useGltfTextureNames?**: `boolean` = `false`

If true, the loader will derive the name for Babylon textures from the glTF texture name, image name, or image url. Defaults to false.
Note that it is possible for multiple Babylon textures to share the same name when the Babylon textures load from the same glTF texture or image.

##### gltf.useOpenPBR?

> `optional` **useOpenPBR?**: `boolean` = `false`

**`Experimental`**

Load the glTF files using the OpenPBR material.

##### gltf.useRangeRequests?

> `optional` **useRangeRequests?**: `boolean` = `false`

Defines if the loader should use range requests when load binary glTF files from HTTP.
Enabling will disable offline support and glTF validator.
Defaults to false.

##### gltf.useSRGBBuffers?

> `optional` **useSRGBBuffers?**: `boolean` = `true`

If true, load the color (gamma encoded) textures into sRGB buffers (if supported by the GPU), which will yield more accurate results when sampling the texture. Defaults to true.

##### gltf.validate?

> `optional` **validate?**: `boolean` = `false`

Defines if the loader should validate the asset.

##### gltf.preprocessUrlAsync()?

> `optional` **preprocessUrlAsync**(`url`): `Promise`\<`string`\>

Function called before loading a url referenced by the asset.

###### Parameters

###### url

`string`

url referenced by the asset

###### Returns

`Promise`\<`string`\>

Async url to load

#### obj?

> `optional` **obj?**: `object`

Defines options for the obj loader.

##### obj.computeNormals?

> `optional` **computeNormals?**: `boolean`

Compute the normals for the model, even if normals are present in the file.

##### obj.enabled?

> `optional` **enabled?**: `boolean`

Defines if the plugin is enabled

##### obj.importVertexColors?

> `optional` **importVertexColors?**: `boolean`

Include in meshes the vertex colors available in some OBJ files.  This is not part of OBJ standard.

##### obj.invertTextureY?

> `optional` **invertTextureY?**: `boolean`

Invert Y-Axis of referenced textures on load

##### obj.invertY?

> `optional` **invertY?**: `boolean`

Invert model on y-axis (does a model scaling inversion)

##### obj.materialLoadingFailsSilently?

> `optional` **materialLoadingFailsSilently?**: `boolean`

When a material fails to load OBJ loader will silently fail and onSuccess() callback will be triggered.

##### obj.optimizeNormals?

> `optional` **optimizeNormals?**: `boolean`

Optimize the normals for the model. Lighting can be uneven if you use OptimizeWithUV = true because new vertices can be created for the same location if they pertain to different faces.
Using OptimizehNormals = true will help smoothing the lighting by averaging the normals of those vertices.

##### obj.optimizeWithUV?

> `optional` **optimizeWithUV?**: `boolean`

Defines if UVs are optimized by default during load.

##### obj.skipMaterials?

> `optional` **skipMaterials?**: `boolean`

Skip loading the materials even if defined in the OBJ file (materials are ignored).

##### obj.useLegacyBehavior?

> `optional` **useLegacyBehavior?**: `boolean`

Loads assets without handedness conversions. This flag is for compatibility. Use it only if absolutely required. Defaults to false.

##### obj.UVScaling?

> `optional` **UVScaling?**: [`Vector2`](Vector2.md)

Defines custom scaling of UV coordinates of loaded meshes.

#### splat?

> `optional` **splat?**: `object`

Defines options for the splat loader.

##### splat.deflateURL?

> `optional` **deflateURL?**: `string`

URL to load fflate from. If null or undefined, will load from unpkg.com
(https://unpkg.com/fflate/umd/index.js)

##### splat.disableAutoCameraLimits?

> `optional` **disableAutoCameraLimits?**: `boolean`

Disable automatic camera limits from being applied if they exist in the splat file

##### splat.enabled?

> `optional` **enabled?**: `boolean`

Defines if the plugin is enabled

##### splat.fflate?

> `optional` **fflate?**: `unknown`

Instance of [fflate](https://github.com/101arrowz/fflate) to avoid
dynamically loading of the lib to global if needed, useful for bundler users.

###### Example

```ts
import * as fflate from 'fflate';
```

##### splat.flipY?

> `optional` **flipY?**: `boolean`

Spatial Y Flip for splat position and orientation

##### splat.gaussianSplattingMesh?

> `optional` **gaussianSplattingMesh?**: [`GaussianSplattingMesh`](GaussianSplattingMesh.md)

Mesh that will be used to load data instead of creating a new one

##### splat.keepInRam?

> `optional` **keepInRam?**: `boolean`

Defines if buffers should be kept in memory for editing purposes

##### splat.needsRotationScaleTextures?

> `optional` **needsRotationScaleTextures?**: `boolean`

Generate rotation and scale matrix textures required for voxel-based IBL shadows.
Required for IBL shadows to work if keepInRam is false.

##### splat.spzLibraryUrl?

> `optional` **spzLibraryUrl?**: `string`

URL to load the spz WASM ES module from (e.g. the @adobe/spz package).
When provided, the WASM-based SPZ loader is used, which supports extra features
such as antialiasing metadata, and vendor-specific extensions such as safe-orbit
camera limits.
Defaults to the @adobe/spz unpkg URL when WebAssembly is supported, and undefined otherwise.
Set to undefined to force the built-in manual SPZ parser regardless of WebAssembly support.

###### Example

```ts
Setting the URL directly on the loader options
spzLibraryUrl: "https://unpkg.com/@adobe/spz@0.2.0/dist/spz.js"
```

##### splat.useSogTextures?

> `optional` **useSogTextures?**: `boolean`

Load SOG files as raw GPU textures and dequantize in the shader.
Skips the CPU decode pass and yields much faster load times.
Requires WebGL2 / WebGPU. Defaults to false (CPU decode).

#### stl?

> `optional` **stl?**: `object`

Defines options for the stl loader.

##### stl.enabled?

> `optional` **enabled?**: `boolean`

Defines if the plugin is enabled

***

### rootUrl

> **rootUrl**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:382](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L382)

Defines the root url to use as a base to load your meshes and associated resources

***

### sceneFilename

> **sceneFilename**: `string` \| `File`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:386](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L386)

Defines the filename or File of the scene to load from

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/assetsManager.ts:409](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/assetsManager.ts#L409)

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
