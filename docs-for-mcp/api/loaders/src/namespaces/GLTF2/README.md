[**@babylonjs/root v1.0.0**](../../../../README.md)

***

[@babylonjs/root](../../../../README.md) / [loaders/src](../../README.md) / GLTF2

# GLTF2

## Classes

- [ArrayItem](classes/ArrayItem.md)
- [EXT\_lights\_area](classes/EXT_lights_area.md)
- [EXT\_lights\_ies](classes/EXT_lights_ies.md)
- [EXT\_lights\_image\_based](classes/EXT_lights_image_based.md)
- [EXT\_mesh\_gpu\_instancing](classes/EXT_mesh_gpu_instancing.md)
- [EXT\_meshopt\_compression](classes/EXT_meshopt_compression.md)
- [EXT\_texture\_avif](classes/EXT_texture_avif.md)
- [EXT\_texture\_webp](classes/EXT_texture_webp.md)
- [ExtrasAsMetadata](classes/ExtrasAsMetadata.md)
- [FlowGraphGLTFDataProvider](classes/FlowGraphGLTFDataProvider.md)
- [GLTFLoader](classes/GLTFLoader.md)
- [InteractivityGraphToFlowGraphParser](classes/InteractivityGraphToFlowGraphParser.md)
- [KHR\_animation\_pointer](classes/KHR_animation_pointer.md)
- [KHR\_draco\_mesh\_compression](classes/KHR_draco_mesh_compression.md)
- [KHR\_interactivity](classes/KHR_interactivity.md)
- [KHR\_lights](classes/KHR_lights.md)
- [KHR\_materials\_anisotropy](classes/KHR_materials_anisotropy.md)
- [KHR\_materials\_clearcoat](classes/KHR_materials_clearcoat.md)
- [KHR\_materials\_coat](classes/KHR_materials_coat.md)
- [KHR\_materials\_diffuse\_roughness](classes/KHR_materials_diffuse_roughness.md)
- [KHR\_materials\_diffuse\_transmission](classes/KHR_materials_diffuse_transmission.md)
- [KHR\_materials\_dispersion](classes/KHR_materials_dispersion.md)
- [KHR\_materials\_emissive\_strength](classes/KHR_materials_emissive_strength.md)
- [KHR\_materials\_fuzz](classes/KHR_materials_fuzz.md)
- [KHR\_materials\_ior](classes/KHR_materials_ior.md)
- [KHR\_materials\_iridescence](classes/KHR_materials_iridescence.md)
- [KHR\_materials\_pbrSpecularGlossiness](classes/KHR_materials_pbrSpecularGlossiness.md)
- [KHR\_materials\_sheen](classes/KHR_materials_sheen.md)
- [KHR\_materials\_specular](classes/KHR_materials_specular.md)
- [KHR\_materials\_transmission](classes/KHR_materials_transmission.md)
- [KHR\_materials\_unlit](classes/KHR_materials_unlit.md)
- [KHR\_materials\_variants](classes/KHR_materials_variants.md)
- [KHR\_materials\_volume](classes/KHR_materials_volume.md)
- [KHR\_materials\_volume\_scatter](classes/KHR_materials_volume_scatter.md)
- [KHR\_mesh\_quantization](classes/KHR_mesh_quantization.md)
- [KHR\_node\_hoverability](classes/KHR_node_hoverability.md)
- [KHR\_node\_selectability](classes/KHR_node_selectability.md)
- [KHR\_node\_visibility](classes/KHR_node_visibility.md)
- [KHR\_texture\_basisu](classes/KHR_texture_basisu.md)
- [KHR\_texture\_transform](classes/KHR_texture_transform.md)
- [KHR\_xmp\_json\_ld](classes/KHR_xmp_json_ld.md)
- [MSFT\_audio\_emitter](classes/MSFT_audio_emitter.md)
- [MSFT\_lod](classes/MSFT_lod.md)
- [OpenPBRMaterialLoadingAdapter](classes/OpenPBRMaterialLoadingAdapter.md)
- [PBRMaterialLoadingAdapter](classes/PBRMaterialLoadingAdapter.md)

## Interfaces

- [IAccessor](interfaces/IAccessor.md)
- [IAnimation](interfaces/IAnimation.md)
- [IAnimationChannel](interfaces/IAnimationChannel.md)
- [IAnimationSampler](interfaces/IAnimationSampler.md)
- [IArrayItem](interfaces/IArrayItem.md)
- [IBuffer](interfaces/IBuffer.md)
- [IBufferView](interfaces/IBufferView.md)
- [ICamera](interfaces/ICamera.md)
- [IFlowGraphGLTFDataProviderBlockConfiguration](interfaces/IFlowGraphGLTFDataProviderBlockConfiguration.md)
- [IGLTF](interfaces/IGLTF.md)
- [IGLTFLoaderExtension](interfaces/IGLTFLoaderExtension.md)
- [IGLTFObjectModelTree](interfaces/IGLTFObjectModelTree.md)
- [IGLTFObjectModelTreeCamerasObject](interfaces/IGLTFObjectModelTreeCamerasObject.md)
- [IGLTFObjectModelTreeExtensionsObject](interfaces/IGLTFObjectModelTreeExtensionsObject.md)
- [IGLTFObjectModelTreeMaterialsObject](interfaces/IGLTFObjectModelTreeMaterialsObject.md)
- [IGLTFObjectModelTreeMeshesObject](interfaces/IGLTFObjectModelTreeMeshesObject.md)
- [IGLTFObjectModelTreeNodesObject](interfaces/IGLTFObjectModelTreeNodesObject.md)
- [IGLTFToFlowGraphMapping](interfaces/IGLTFToFlowGraphMapping.md)
- [IImage](interfaces/IImage.md)
- [IMaterial](interfaces/IMaterial.md)
- [IMaterialNormalTextureInfo](interfaces/IMaterialNormalTextureInfo.md)
- [IMaterialOcclusionTextureInfo](interfaces/IMaterialOcclusionTextureInfo.md)
- [IMaterialPbrMetallicRoughness](interfaces/IMaterialPbrMetallicRoughness.md)
- [IMesh](interfaces/IMesh.md)
- [IMeshPrimitive](interfaces/IMeshPrimitive.md)
- [INode](interfaces/INode.md)
- [InteractivityEvent](interfaces/InteractivityEvent.md)
- [ISampler](interfaces/ISampler.md)
- [IScene](interfaces/IScene.md)
- [ISkin](interfaces/ISkin.md)
- [ITexture](interfaces/ITexture.md)
- [ITextureInfo](interfaces/ITextureInfo.md)
- [ITransmissionHelperMaterialImpl](interfaces/ITransmissionHelperMaterialImpl.md)
- [ITransmissionHelperOptions](interfaces/ITransmissionHelperOptions.md)

## Type Aliases

- [GLTFExtensionFactory](type-aliases/GLTFExtensionFactory.md)

## Variables

- [gltfTypeToBabylonType](variables/gltfTypeToBabylonType.md)
- [registeredGLTFExtensions](variables/registeredGLTFExtensions.md)

## Functions

- [addNewInteractivityFlowGraphMapping](functions/addNewInteractivityFlowGraphMapping.md)
- [AddObjectAccessorToKey](functions/AddObjectAccessorToKey.md)
- [ensureTransmissionHelper](functions/ensureTransmissionHelper.md)
- [getAllSupportedNativeNodeTypes](functions/getAllSupportedNativeNodeTypes.md)
- [getMappingForDeclaration](functions/getMappingForDeclaration.md)
- [getMappingForFullOperationName](functions/getMappingForFullOperationName.md)
- [GetMappingForKey](functions/GetMappingForKey.md)
- [GetPathToObjectConverter](functions/GetPathToObjectConverter.md)
- [registerGLTFExtension](functions/registerGLTFExtension.md)
- [SetInterpolationForKey](functions/SetInterpolationForKey.md)
- [unregisterGLTFExtension](functions/unregisterGLTFExtension.md)

## References

### GLTFFileLoader

Re-exports [GLTFFileLoader](../../classes/GLTFFileLoader.md)

***

### MaterialVariantsController

Re-exports [MaterialVariantsController](../../type-aliases/MaterialVariantsController.md)
