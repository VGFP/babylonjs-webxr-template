[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / GLTFFileLoader

# Class: GLTFFileLoader

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:457](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L457)

File loader for loading glTF files into a scene.

## Extends

- `GLTFLoaderOptions`

## Implements

- [`IDisposable`](../../../core/src/interfaces/IDisposable.md)
- [`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md)
- [`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md)

## Constructors

### Constructor

> **new GLTFFileLoader**(`options?`): `GLTFFileLoader`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:468](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L468)

Creates a new glTF file loader.

#### Parameters

##### options?

`Partial`\<`Readonly`\<`GLTFLoaderOptions`\>\>

The options for the loader

#### Returns

`GLTFFileLoader`

#### Overrides

`GLTFLoaderOptions.constructor`

## Properties

### alwaysComputeBoundingBox

> **alwaysComputeBoundingBox**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L209)

Defines if the loader should always compute the bounding boxes of meshes and not use the min/max values from the position accessor. Defaults to false.

#### Inherited from

`GLTFLoaderOptions.alwaysComputeBoundingBox`

***

### alwaysComputeSkeletonRootNode

> **alwaysComputeSkeletonRootNode**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:215](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L215)

Defines if the loader should always compute the nearest common ancestor of the skeleton joints instead of using `skin.skeleton`. Defaults to false.
Set this to true if loading assets with invalid `skin.skeleton` values.

#### Inherited from

`GLTFLoaderOptions.alwaysComputeSkeletonRootNode`

***

### animationStartMode

> **animationStartMode**: [`GLTFLoaderAnimationStartMode`](../enumerations/GLTFLoaderAnimationStartMode.md) = `GLTFLoaderAnimationStartMode.FIRST`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:220](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L220)

The animation start mode. Defaults to FIRST.

#### Inherited from

`GLTFLoaderOptions.animationStartMode`

***

### compileMaterials

> **compileMaterials**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L225)

Defines if the loader should compile materials before raising the success callback. Defaults to false.

#### Inherited from

`GLTFLoaderOptions.compileMaterials`

***

### compileShadowGenerators

> **compileShadowGenerators**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:230](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L230)

Defines if the loader should compile shadow generators before raising the success callback. Defaults to false.

#### Inherited from

`GLTFLoaderOptions.compileShadowGenerators`

***

### coordinateSystemMode

> **coordinateSystemMode**: [`GLTFLoaderCoordinateSystemMode`](../enumerations/GLTFLoaderCoordinateSystemMode.md) = `GLTFLoaderCoordinateSystemMode.AUTO`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:235](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L235)

The coordinate system mode. Defaults to AUTO.

#### Inherited from

`GLTFLoaderOptions.coordinateSystemMode`

***

### createInstances

> **createInstances**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:240](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L240)

Defines if the loader should create instances when multiple glTF nodes point to the same glTF mesh. Defaults to true.

#### Inherited from

`GLTFLoaderOptions.createInstances`

***

### customRootNode?

> `optional` **customRootNode?**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:395](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L395)

Defines the node to use as the root of the hierarchy when loading the scene (default: undefined). If not defined, a root node will be automatically created.
You can also pass null if you don't want a root node to be created.

#### Inherited from

`GLTFLoaderOptions.customRootNode`

***

### dontUseTransmissionHelper

> **dontUseTransmissionHelper**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L322)

If true, the loader will not use the transmission helper when loading materials with transmission.

#### Inherited from

`GLTFLoaderOptions.dontUseTransmissionHelper`

***

### extensionOptions

> **extensionOptions**: `object` = `{}`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:400](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L400)

Defines options for glTF extensions.

#### Index Signature

\[`key`: `string`\]: \{\[`key`: `string`\]: `unknown`; `enabled?`: `boolean`; \} \| `undefined`

#### EXT\_lights\_area?

> `optional` **EXT\_lights\_area?**: `object`

Defines options for the EXT_lights_area extension.

##### EXT\_lights\_area.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### EXT\_lights\_ies?

> `optional` **EXT\_lights\_ies?**: `object`

Defines options for the EXT_lights_ies extension.

##### EXT\_lights\_ies.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### EXT\_lights\_image\_based?

> `optional` **EXT\_lights\_image\_based?**: `object`

Defines options for the EXT_lights_image_based extension.

##### EXT\_lights\_image\_based.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### EXT\_mesh\_gpu\_instancing?

> `optional` **EXT\_mesh\_gpu\_instancing?**: `object`

Defines options for the EXT_mesh_gpu_instancing extension.

##### EXT\_mesh\_gpu\_instancing.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### EXT\_meshopt\_compression?

> `optional` **EXT\_meshopt\_compression?**: `object`

Defines options for the EXT_meshopt_compression extension.

##### EXT\_meshopt\_compression.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### EXT\_texture\_avif?

> `optional` **EXT\_texture\_avif?**: `object`

Defines options for the EXT_texture_avif extension.

##### EXT\_texture\_avif.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### EXT\_texture\_webp?

> `optional` **EXT\_texture\_webp?**: `object`

Defines options for the EXT_texture_webp extension.

##### EXT\_texture\_webp.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### ExtrasAsMetadata?

> `optional` **ExtrasAsMetadata?**: `object`

Defines options for the ExtrasAsMetadata extension.

##### ExtrasAsMetadata.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_animation\_pointer?

> `optional` **KHR\_animation\_pointer?**: `object`

Defines options for the KHR_animation_pointer extension.

##### KHR\_animation\_pointer.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_draco\_mesh\_compression?

> `optional` **KHR\_draco\_mesh\_compression?**: `object`

Defines options for the KHR_draco_mesh_compression extension.

##### KHR\_draco\_mesh\_compression.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_interactivity?

> `optional` **KHR\_interactivity?**: `object`

Defines options for the KHR_interactivity extension.

##### KHR\_interactivity.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_lights\_punctual?

> `optional` **KHR\_lights\_punctual?**: `object`

Defines options for the KHR_lights_punctual extension.

##### KHR\_lights\_punctual.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_anisotropy?

> `optional` **KHR\_materials\_anisotropy?**: `object`

Defines options for the KHR_materials_anisotropy extension.

##### KHR\_materials\_anisotropy.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_clearcoat?

> `optional` **KHR\_materials\_clearcoat?**: `object`

Defines options for the KHR_materials_clearcoat extension.

##### KHR\_materials\_clearcoat.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_coat?

> `optional` **KHR\_materials\_coat?**: `object`

Defines options for the KHR_materials_coat extension.

##### KHR\_materials\_coat.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_diffuse\_roughness?

> `optional` **KHR\_materials\_diffuse\_roughness?**: `object`

Defines options for the KHR_materials_diffuse_roughness extension.

##### KHR\_materials\_diffuse\_roughness.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_diffuse\_transmission?

> `optional` **KHR\_materials\_diffuse\_transmission?**: `object`

Defines options for the KHR_materials_diffuse_transmission extension.

##### KHR\_materials\_diffuse\_transmission.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_dispersion?

> `optional` **KHR\_materials\_dispersion?**: `object`

Defines options for the KHR_materials_dispersion extension.

##### KHR\_materials\_dispersion.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_emissive\_strength?

> `optional` **KHR\_materials\_emissive\_strength?**: `object`

Defines options for the KHR_materials_emissive_strength extension.

##### KHR\_materials\_emissive\_strength.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_fuzz?

> `optional` **KHR\_materials\_fuzz?**: `object`

Defines options for the KHR_materials_fuzz extension.

##### KHR\_materials\_fuzz.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_ior?

> `optional` **KHR\_materials\_ior?**: `object`

Defines options for the KHR_materials_ior extension.

##### KHR\_materials\_ior.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_iridescence?

> `optional` **KHR\_materials\_iridescence?**: `object`

Defines options for the KHR_materials_iridescence extension.

##### KHR\_materials\_iridescence.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_pbrSpecularGlossiness?

> `optional` **KHR\_materials\_pbrSpecularGlossiness?**: `object`

Defines options for the KHR_materials_pbrSpecularGlossiness extension.

##### KHR\_materials\_pbrSpecularGlossiness.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_sheen?

> `optional` **KHR\_materials\_sheen?**: `object`

Defines options for the KHR_materials_sheen extension.

##### KHR\_materials\_sheen.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_specular?

> `optional` **KHR\_materials\_specular?**: `object`

Defines options for the KHR_materials_specular extension.

##### KHR\_materials\_specular.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_transmission?

> `optional` **KHR\_materials\_transmission?**: `object`

Defines options for the KHR_materials_transmission extension.

##### KHR\_materials\_transmission.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_unlit?

> `optional` **KHR\_materials\_unlit?**: `object`

Defines options for the KHR_materials_unlit extension.

##### KHR\_materials\_unlit.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_variants?

> `optional` **KHR\_materials\_variants?**: `object`

Defines options for the KHR_materials_variants extension.

##### KHR\_materials\_variants.defaultVariant?

> `optional` **defaultVariant?**: `string`

Specifies the name of the variant that should be selected by default.

##### KHR\_materials\_variants.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### KHR\_materials\_variants.onLoaded?

> `optional` **onLoaded?**: (`controller`) => `void`

**`Experimental`**

Defines a callback that will be called if material variants are loaded.

###### Parameters

###### controller

[`MaterialVariantsController`](../type-aliases/MaterialVariantsController.md)

###### Returns

`void`

#### KHR\_materials\_volume?

> `optional` **KHR\_materials\_volume?**: `object`

Defines options for the KHR_materials_volume extension.

##### KHR\_materials\_volume.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_volume\_scatter?

> `optional` **KHR\_materials\_volume\_scatter?**: `object`

Defines options for the KHR_materials_volume_scatter extension.

##### KHR\_materials\_volume\_scatter.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_mesh\_quantization?

> `optional` **KHR\_mesh\_quantization?**: `object`

Defines options for the KHR_mesh_quantization extension.

##### KHR\_mesh\_quantization.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_node\_hoverability?

> `optional` **KHR\_node\_hoverability?**: `object`

Defines options for the KHR_node_hoverability extension.

##### KHR\_node\_hoverability.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_node\_selectability?

> `optional` **KHR\_node\_selectability?**: `object`

Defines options for the KHR_selectability extension.

##### KHR\_node\_selectability.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_node\_visibility?

> `optional` **KHR\_node\_visibility?**: `object`

Defines options for the KHR_node_visibility extension.

##### KHR\_node\_visibility.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_texture\_basisu?

> `optional` **KHR\_texture\_basisu?**: `object`

Defines options for the KHR_texture_basisu extension.

##### KHR\_texture\_basisu.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_texture\_transform?

> `optional` **KHR\_texture\_transform?**: `object`

Defines options for the KHR_texture_transform extension.

##### KHR\_texture\_transform.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_xmp\_json\_ld?

> `optional` **KHR\_xmp\_json\_ld?**: `object`

Defines options for the KHR_xmp_json_ld extension.

##### KHR\_xmp\_json\_ld.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### MSFT\_audio\_emitter?

> `optional` **MSFT\_audio\_emitter?**: `object`

Defines options for the MSFT_audio_emitter extension.

##### MSFT\_audio\_emitter.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### MSFT\_lod?

> `optional` **MSFT\_lod?**: `object`

Defines options for the MSFT_lod extension.

##### MSFT\_lod.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### MSFT\_lod.maxLODsToLoad?

> `optional` **maxLODsToLoad?**: `number`

Maximum number of LODs to load, starting from the lowest LOD.

#### MSFT\_minecraftMesh?

> `optional` **MSFT\_minecraftMesh?**: `object`

Defines options for the MSFT_minecraftMesh extension.

##### MSFT\_minecraftMesh.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### MSFT\_sRGBFactors?

> `optional` **MSFT\_sRGBFactors?**: `object`

Defines options for the MSFT_sRGBFactors extension.

##### MSFT\_sRGBFactors.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### Inherited from

`GLTFLoaderOptions.extensionOptions`

***

### loadAllMaterials

> **loadAllMaterials**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L245)

If true, load all materials defined in the file, even if not used by any mesh. Defaults to false.

#### Inherited from

`GLTFLoaderOptions.loadAllMaterials`

***

### loadMorphTargets

> **loadMorphTargets**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:250](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L250)

Defines if the loader should load morph targets. Defaults to true.

#### Inherited from

`GLTFLoaderOptions.loadMorphTargets`

***

### loadNodeAnimations

> **loadNodeAnimations**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:256](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L256)

Defines if the loader should load node animations. Defaults to true.
NOTE: The animation of this node will still load if the node is also a joint of a skin and `loadSkins` is true.

#### Inherited from

`GLTFLoaderOptions.loadNodeAnimations`

***

### loadOnlyMaterials

> **loadOnlyMaterials**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L261)

If true, load only the materials defined in the file. Defaults to false.

#### Inherited from

`GLTFLoaderOptions.loadOnlyMaterials`

***

### loadSkins

> **loadSkins**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:266](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L266)

Defines if the loader should load skins. Defaults to true.

#### Inherited from

`GLTFLoaderOptions.loadSkins`

***

### name

> `readonly` **name**: `"gltf"` = `GLTFFileLoaderMetadata.name`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:766](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L766)

Name of the loader ("gltf")

#### Implementation of

[`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md).[`name`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md#name)

***

### onCameraLoadedObservable

> `readonly` **onCameraLoadedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Camera`](../../../core/src/classes/Camera.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:608](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L608)

Observable raised when the loader creates a camera after parsing the glTF properties of the camera.

***

### onCompleteObservable

> `readonly` **onCompleteObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:629](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L629)

Observable raised when the asset is completely loaded, immediately before the loader is disposed.
For assets with LODs, raised when all of the LODs are complete.
For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.

***

### onDisposeObservable

> `readonly` **onDisposeObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:665](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L665)

Observable raised after the loader is disposed.

***

### onErrorObservable

> `readonly` **onErrorObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`any`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:648](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L648)

Observable raised when an error occurs.

***

### onExtensionLoadedObservable

> `readonly` **onExtensionLoadedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:683](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L683)

Observable raised after a loader extension is created.
Set additional options for a loader extension in this event.

***

### onLoaderStateChangedObservable

> **onLoaderStateChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`GLTFLoaderState`](../enumerations/GLTFLoaderState.md)\>\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:1078](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L1078)

Observable raised when the loader state changes.

***

### onMaterialLoadedObservable

> `readonly` **onMaterialLoadedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:589](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L589)

Observable raised when the loader creates a material after parsing the glTF properties of the material.

***

### onMeshLoadedObservable

> `readonly` **onMeshLoadedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:527](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L527)

Observable raised when the loader creates a mesh after parsing the glTF properties of the mesh.
Note that the observable is raised as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)

***

### onParsedObservable

> **onParsedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`IGLTFLoaderData`](../interfaces/IGLTFLoaderData.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:480](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L480)

Raised when the asset has been parsed

***

### onSkinLoadedObservable

> `readonly` **onSkinLoadedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<\{ `node`: [`TransformNode`](../../../core/src/classes/TransformNode.md); `skinnedNode`: [`TransformNode`](../../../core/src/classes/TransformNode.md); \}\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:550](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L550)

Observable raised when the loader creates a skin after parsing the glTF properties of the skin node.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/importers/glTF/glTFSkinning#ignoring-the-transform-of-the-skinned-mesh

#### Param

**node**

the transform node that corresponds to the original glTF skin node used for animations

#### Param

**skinnedNode**

the transform node that is the skinned mesh itself or the parent of the skinned meshes

***

### onTextureLoadedObservable

> `readonly` **onTextureLoadedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:570](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L570)

Observable raised when the loader creates a texture after parsing the glTF properties of the texture.

***

### onValidatedObservable

> `readonly` **onValidatedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`IGLTFValidationResults`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:744](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L744)

Observable raised after validation when validate is set to true. The event data is the result of the validation.

***

### skipMaterials

> **skipMaterials**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L271)

If true, do not load any materials defined in the file. Defaults to false.

#### Inherited from

`GLTFLoaderOptions.skipMaterials`

***

### targetFps

> **targetFps**: `number` = `60`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:276](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L276)

When loading glTF animations, which are defined in seconds, target them to this FPS. Defaults to 60.

#### Inherited from

`GLTFLoaderOptions.targetFps`

***

### transparencyAsCoverage

> **transparencyAsCoverage**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L283)

Defines if the Alpha blended materials are only applied as coverage.
If false, (default) The luminance of each pixel will reduce its opacity to simulate the behaviour of most physical materials.
If true, no extra effects are applied to transparent pixels.

#### Inherited from

`GLTFLoaderOptions.transparencyAsCoverage`

***

### useClipPlane

> **useClipPlane**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L288)

Defines if the loader should also compile materials with clip planes. Defaults to false.

#### Inherited from

`GLTFLoaderOptions.useClipPlane`

***

### useGltfTextureNames

> **useGltfTextureNames**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:294](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L294)

If true, the loader will derive the name for Babylon textures from the glTF texture name, image name, or image url. Defaults to false.
Note that it is possible for multiple Babylon textures to share the same name when the Babylon textures load from the same glTF texture or image.

#### Inherited from

`GLTFLoaderOptions.useGltfTextureNames`

***

### useOpenPBR

> **useOpenPBR**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:317](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L317)

**`Experimental`**

Load the glTF files using the OpenPBR material.

#### Inherited from

`GLTFLoaderOptions.useOpenPBR`

***

### useRangeRequests

> **useRangeRequests**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:301](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L301)

Defines if the loader should use range requests when load binary glTF files from HTTP.
Enabling will disable offline support and glTF validator.
Defaults to false.

#### Inherited from

`GLTFLoaderOptions.useRangeRequests`

***

### useSRGBBuffers

> **useSRGBBuffers**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:306](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L306)

If true, load the color (gamma encoded) textures into sRGB buffers (if supported by the GPU), which will yield more accurate results when sampling the texture. Defaults to true.

#### Inherited from

`GLTFLoaderOptions.useSRGBBuffers`

***

### validate

> **validate**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:311](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L311)

Defines if the loader should validate the asset.

#### Inherited from

`GLTFLoaderOptions.validate`

## Accessors

### capturePerformanceCounters

#### Get Signature

> **get** **capturePerformanceCounters**(): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:721](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L721)

Defines if the loader should capture performance counters.

##### Returns

`boolean`

#### Set Signature

> **set** **capturePerformanceCounters**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:725](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L725)

Defines if the loader should capture performance counters.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Overrides

`GLTFLoaderOptions.capturePerformanceCounters`

***

### loaderState

#### Get Signature

> **get** **loaderState**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`GLTFLoaderState`](../enumerations/GLTFLoaderState.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:1071](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L1071)

The loader state or null if the loader is not active.

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`GLTFLoaderState`](../enumerations/GLTFLoaderState.md)\>

***

### loggingEnabled

#### Get Signature

> **get** **loggingEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:700](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L700)

Defines if the loader logging is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **loggingEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:704](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L704)

If true, enable logging for the loader. Defaults to false.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Overrides

`GLTFLoaderOptions.loggingEnabled`

***

### onCameraLoaded

#### Set Signature

> **set** **onCameraLoaded**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:615](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L615)

Callback raised when the loader creates a camera after parsing the glTF properties of the camera.

##### Parameters

###### callback

((`camera`) => `void`) \| `undefined`

##### Returns

`void`

#### Overrides

`GLTFLoaderOptions.onCameraLoaded`

***

### onComplete

#### Set Signature

> **set** **onComplete**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:638](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L638)

Callback raised when the asset is completely loaded, immediately before the loader is disposed.
For assets with LODs, raised when all of the LODs are complete.
For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.

##### Parameters

###### callback

() => `void`

##### Returns

`void`

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:672](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L672)

Callback raised after the loader is disposed.

##### Parameters

###### callback

() => `void`

##### Returns

`void`

***

### onError

#### Set Signature

> **set** **onError**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:655](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L655)

Callback raised when an error occurs.

##### Parameters

###### callback

(`reason`) => `void`

##### Returns

`void`

***

### onExtensionLoaded

#### Set Signature

> **set** **onExtensionLoaded**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:690](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L690)

Callback raised after a loader extension is created.

##### Parameters

###### callback

(`extension`) => `void`

##### Returns

`void`

***

### onMaterialLoaded

#### Set Signature

> **set** **onMaterialLoaded**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:596](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L596)

Callback raised when the loader creates a material after parsing the glTF properties of the material.

##### Parameters

###### callback

((`material`) => `void`) \| `undefined`

##### Returns

`void`

#### Overrides

`GLTFLoaderOptions.onMaterialLoaded`

***

### onMeshLoaded

#### Set Signature

> **set** **onMeshLoaded**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:535](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L535)

Callback raised when the loader creates a mesh after parsing the glTF properties of the mesh.
Note that the callback is called as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)

##### Parameters

###### callback

((`mesh`) => `void`) \| `undefined`

##### Returns

`void`

#### Overrides

`GLTFLoaderOptions.onMeshLoaded`

***

### onParsed

#### Set Signature

> **set** **onParsed**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:487](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L487)

Raised when the asset has been parsed

##### Parameters

###### callback

((`loaderData`) => `void`) \| `undefined`

##### Returns

`void`

#### Overrides

`GLTFLoaderOptions.onParsed`

***

### onSkinLoaded

#### Set Signature

> **set** **onSkinLoaded**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:558](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L558)

Callback raised when the loader creates a skin after parsing the glTF properties of the skin node.

##### See

https://doc.babylonjs.com/features/featuresDeepDive/importers/glTF/glTFSkinning#ignoring-the-transform-of-the-skinned-mesh

##### Parameters

###### callback

((`node`, `skinnedNode`) => `void`) \| `undefined`

##### Returns

`void`

#### Overrides

`GLTFLoaderOptions.onSkinLoaded`

***

### onTextureLoaded

#### Set Signature

> **set** **onTextureLoaded**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:577](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L577)

Callback raised when the loader creates a texture after parsing the glTF properties of the texture.

##### Parameters

###### callback

((`texture`) => `void`) \| `undefined`

##### Returns

`void`

#### Overrides

`GLTFLoaderOptions.onTextureLoaded`

***

### onValidated

#### Set Signature

> **set** **onValidated**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:751](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L751)

Callback raised after the asset is validated.

##### Parameters

###### callback

(`results`) => `void`

##### Returns

`void`

#### Overrides

`GLTFLoaderOptions.onValidated`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:774](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L774)

Disposes the loader, releases resources during load, and cancels any outstanding requests.

#### Returns

`void`

#### Implementation of

[`IDisposable`](../../../core/src/interfaces/IDisposable.md).[`dispose`](../../../core/src/interfaces/IDisposable.md#dispose)

***

### preprocessUrlAsync()

> **preprocessUrlAsync**(`url`): `Promise`\<`string`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:451](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L451)

Function called before loading a url referenced by the asset.

#### Parameters

##### url

`string`

url referenced by the asset

#### Returns

`Promise`\<`string`\>

Async url to load

#### Inherited from

`GLTFLoaderOptions.preprocessUrlAsync`

***

### rewriteRootURL()?

> `optional` **rewriteRootURL**(`rootUrl`, `responseURL?`): `string`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:1061](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L1061)

The callback that allows custom handling of the root url based on the response url.

#### Parameters

##### rootUrl

`string`

the original root url

##### responseURL?

`string`

the response url if available

#### Returns

`string`

the new root url

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`rewriteRootURL`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#rewriterooturl)

***

### whenCompleteAsync()

> **whenCompleteAsync**(): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:1084](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L1084)

Returns a promise that resolves when the asset is completely loaded.

#### Returns

`Promise`\<`void`\>

a promise that resolves when the asset is completely loaded.
