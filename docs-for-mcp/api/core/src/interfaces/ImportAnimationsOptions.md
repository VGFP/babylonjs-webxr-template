[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ImportAnimationsOptions

# Interface: ImportAnimationsOptions

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:461](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L461)

Defines options for ImportAnimationsAsync.

## Extends

- `ISceneLoaderOptions`

## Properties

### animationGroupLoadingMode?

> `optional` **animationGroupLoadingMode?**: [`SceneLoaderAnimationGroupLoadingMode`](../enumerations/SceneLoaderAnimationGroupLoadingMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:470](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L470)

Defines how to handle old animations groups before importing new ones

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:418](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L418)

Defines the filename, if the data is binary

#### Inherited from

`ISceneLoaderOptions.name`

***

### onProgress?

> `optional` **onProgress?**: (`event`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:408](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L408)

A callback with a progress event for each file being loaded

#### Parameters

##### event

[`ISceneLoaderProgressEvent`](ISceneLoaderProgressEvent.md)

#### Returns

`void`

#### Inherited from

`ISceneLoaderOptions.onProgress`

***

### overwriteAnimations?

> `optional` **overwriteAnimations?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:465](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L465)

When true, animations are cleaned before importing new ones. Animations are appended otherwise

***

### pluginExtension?

> `optional` **pluginExtension?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:413](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L413)

The extension used to determine the plugin

#### Inherited from

`ISceneLoaderOptions.pluginExtension`

***

### pluginOptions?

> `optional` **pluginOptions?**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:423](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L423)

Defines options for the registered plugins

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

> `optional` **customRootNode?**: [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](../classes/TransformNode.md)\>

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

[`Camera`](../classes/Camera.md)

###### Returns

`void`

##### gltf.onMaterialLoaded?

> `abstract` `optional` **onMaterialLoaded?**: (`material`) => `void`

Callback raised when the loader creates a material after parsing the glTF properties of the material.

###### Parameters

###### material

[`Material`](../classes/Material.md)

###### Returns

`void`

##### gltf.onMeshLoaded?

> `abstract` `optional` **onMeshLoaded?**: (`mesh`) => `void`

Callback raised when the loader creates a mesh after parsing the glTF properties of the mesh.
Note that the callback is called as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)

###### Parameters

###### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

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

[`TransformNode`](../classes/TransformNode.md)

###### skinnedNode

[`TransformNode`](../classes/TransformNode.md)

###### Returns

`void`

###### See

https://doc.babylonjs.com/features/featuresDeepDive/importers/glTF/glTFSkinning#ignoring-the-transform-of-the-skinned-mesh

##### gltf.onTextureLoaded?

> `abstract` `optional` **onTextureLoaded?**: (`texture`) => `void`

Callback raised when the loader creates a texture after parsing the glTF properties of the texture.

###### Parameters

###### texture

[`BaseTexture`](../classes/BaseTexture.md)

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

> `optional` **UVScaling?**: [`Vector2`](../classes/Vector2.md)

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

> `optional` **gaussianSplattingMesh?**: [`GaussianSplattingMesh`](../classes/GaussianSplattingMesh.md)

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

#### stl?

> `optional` **stl?**: `object`

Defines options for the stl loader.

##### stl.enabled?

> `optional` **enabled?**: `boolean`

Defines if the plugin is enabled

#### Inherited from

`ISceneLoaderOptions.pluginOptions`

***

### rootUrl?

> `optional` **rootUrl?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:403](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L403)

A string that defines the root url for the scene and resources or the concatenation of rootURL and filename (e.g. http://example.com/test.glb)

#### Inherited from

`ISceneLoaderOptions.rootUrl`

***

### targetConverter?

> `optional` **targetConverter?**: [`Nullable`](../type-aliases/Nullable.md)\<(`target`) => `unknown`\>

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:475](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L475)

defines a function used to convert animation targets from loaded scene to current scene (default: search node by name)
