[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / IGLTFObjectModelTreeMaterialsObject

# Interface: IGLTFObjectModelTreeMaterialsObject

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L87)

## Properties

### \_\_array\_\_

> **\_\_array\_\_**: `object`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L88)

#### \_\_target\_\_

> **\_\_target\_\_**: `boolean`

#### emissiveFactor

> **emissiveFactor**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), [`Color3`](../../../../../core/src/classes/Color3.md)\>

#### emissiveTexture

> **emissiveTexture**: `object`

##### emissiveTexture.extensions

> **extensions**: `object`

##### emissiveTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

#### extensions

> **extensions**: `object`

##### extensions.KHR\_materials\_anisotropy

> **KHR\_materials\_anisotropy**: `object`

##### extensions.KHR\_materials\_anisotropy.anisotropyRotation

> **anisotropyRotation**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

##### extensions.KHR\_materials\_anisotropy.anisotropyStrength

> **anisotropyStrength**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

##### extensions.KHR\_materials\_anisotropy.anisotropyTexture

> **anisotropyTexture**: `object`

##### extensions.KHR\_materials\_anisotropy.anisotropyTexture.extensions

> **extensions**: `object`

##### extensions.KHR\_materials\_anisotropy.anisotropyTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

##### extensions.KHR\_materials\_clearcoat

> **KHR\_materials\_clearcoat**: `object`

##### extensions.KHR\_materials\_clearcoat.clearcoatFactor

> **clearcoatFactor**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

##### extensions.KHR\_materials\_clearcoat.clearcoatNormalTexture

> **clearcoatNormalTexture**: `object`

##### extensions.KHR\_materials\_clearcoat.clearcoatNormalTexture.extensions

> **extensions**: `object`

##### extensions.KHR\_materials\_clearcoat.clearcoatNormalTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

##### extensions.KHR\_materials\_clearcoat.clearcoatNormalTexture.scale

> **scale**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

##### extensions.KHR\_materials\_clearcoat.clearcoatRoughnessFactor

> **clearcoatRoughnessFactor**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

##### extensions.KHR\_materials\_clearcoat.clearcoatRoughnessTexture

> **clearcoatRoughnessTexture**: `object`

##### extensions.KHR\_materials\_clearcoat.clearcoatRoughnessTexture.extensions

> **extensions**: `object`

##### extensions.KHR\_materials\_clearcoat.clearcoatRoughnessTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

##### extensions.KHR\_materials\_clearcoat.clearcoatTexture

> **clearcoatTexture**: `object`

##### extensions.KHR\_materials\_clearcoat.clearcoatTexture.extensions

> **extensions**: `object`

##### extensions.KHR\_materials\_clearcoat.clearcoatTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

##### extensions.KHR\_materials\_diffuse\_transmission

> **KHR\_materials\_diffuse\_transmission**: `object`

##### extensions.KHR\_materials\_diffuse\_transmission.diffuseTransmissionColorFactor

> **diffuseTransmissionColorFactor**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`Color3`](../../../../../core/src/classes/Color3.md)\>\>

##### extensions.KHR\_materials\_diffuse\_transmission.diffuseTransmissionColorTexture

> **diffuseTransmissionColorTexture**: `object`

##### extensions.KHR\_materials\_diffuse\_transmission.diffuseTransmissionColorTexture.extensions

> **extensions**: `object`

##### extensions.KHR\_materials\_diffuse\_transmission.diffuseTransmissionColorTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

##### extensions.KHR\_materials\_diffuse\_transmission.diffuseTransmissionFactor

> **diffuseTransmissionFactor**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

##### extensions.KHR\_materials\_diffuse\_transmission.diffuseTransmissionTexture

> **diffuseTransmissionTexture**: `object`

##### extensions.KHR\_materials\_diffuse\_transmission.diffuseTransmissionTexture.extensions

> **extensions**: `object`

##### extensions.KHR\_materials\_diffuse\_transmission.diffuseTransmissionTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

##### extensions.KHR\_materials\_dispersion

> **KHR\_materials\_dispersion**: `object`

##### extensions.KHR\_materials\_dispersion.dispersion

> **dispersion**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

##### extensions.KHR\_materials\_emissive\_strength

> **KHR\_materials\_emissive\_strength**: `object`

##### extensions.KHR\_materials\_emissive\_strength.emissiveStrength

> **emissiveStrength**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

##### extensions.KHR\_materials\_ior

> **KHR\_materials\_ior**: `object`

##### extensions.KHR\_materials\_ior.ior

> **ior**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

##### extensions.KHR\_materials\_iridescence

> **KHR\_materials\_iridescence**: `object`

##### extensions.KHR\_materials\_iridescence.iridescenceFactor

> **iridescenceFactor**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

##### extensions.KHR\_materials\_iridescence.iridescenceIor

> **iridescenceIor**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

##### extensions.KHR\_materials\_iridescence.iridescenceTexture

> **iridescenceTexture**: `object`

##### extensions.KHR\_materials\_iridescence.iridescenceTexture.extensions

> **extensions**: `object`

##### extensions.KHR\_materials\_iridescence.iridescenceTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

##### extensions.KHR\_materials\_iridescence.iridescenceThicknessMaximum

> **iridescenceThicknessMaximum**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

##### extensions.KHR\_materials\_iridescence.iridescenceThicknessMinimum

> **iridescenceThicknessMinimum**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

##### extensions.KHR\_materials\_iridescence.iridescenceThicknessTexture

> **iridescenceThicknessTexture**: `object`

##### extensions.KHR\_materials\_iridescence.iridescenceThicknessTexture.extensions

> **extensions**: `object`

##### extensions.KHR\_materials\_iridescence.iridescenceThicknessTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

##### extensions.KHR\_materials\_sheen

> **KHR\_materials\_sheen**: `object`

##### extensions.KHR\_materials\_sheen.sheenColorFactor

> **sheenColorFactor**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), [`Color3`](../../../../../core/src/classes/Color3.md)\>

##### extensions.KHR\_materials\_sheen.sheenColorTexture

> **sheenColorTexture**: `object`

##### extensions.KHR\_materials\_sheen.sheenColorTexture.extensions

> **extensions**: `object`

##### extensions.KHR\_materials\_sheen.sheenColorTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

##### extensions.KHR\_materials\_sheen.sheenRoughnessFactor

> **sheenRoughnessFactor**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

##### extensions.KHR\_materials\_sheen.sheenRoughnessTexture

> **sheenRoughnessTexture**: `object`

##### extensions.KHR\_materials\_sheen.sheenRoughnessTexture.extensions

> **extensions**: `object`

##### extensions.KHR\_materials\_sheen.sheenRoughnessTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

##### extensions.KHR\_materials\_specular

> **KHR\_materials\_specular**: `object`

##### extensions.KHR\_materials\_specular.specularColorFactor

> **specularColorFactor**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), [`Color3`](../../../../../core/src/classes/Color3.md)\>

##### extensions.KHR\_materials\_specular.specularColorTexture

> **specularColorTexture**: `object`

##### extensions.KHR\_materials\_specular.specularColorTexture.extensions

> **extensions**: `object`

##### extensions.KHR\_materials\_specular.specularColorTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

##### extensions.KHR\_materials\_specular.specularFactor

> **specularFactor**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

##### extensions.KHR\_materials\_specular.specularTexture

> **specularTexture**: `object`

##### extensions.KHR\_materials\_specular.specularTexture.extensions

> **extensions**: `object`

##### extensions.KHR\_materials\_specular.specularTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

##### extensions.KHR\_materials\_transmission

> **KHR\_materials\_transmission**: `object`

##### extensions.KHR\_materials\_transmission.transmissionFactor

> **transmissionFactor**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

##### extensions.KHR\_materials\_transmission.transmissionTexture

> **transmissionTexture**: `object`

##### extensions.KHR\_materials\_transmission.transmissionTexture.extensions

> **extensions**: `object`

##### extensions.KHR\_materials\_transmission.transmissionTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

##### extensions.KHR\_materials\_volume

> **KHR\_materials\_volume**: `object`

##### extensions.KHR\_materials\_volume.attenuationColor

> **attenuationColor**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), [`Color3`](../../../../../core/src/classes/Color3.md)\>

##### extensions.KHR\_materials\_volume.attenuationDistance

> **attenuationDistance**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

##### extensions.KHR\_materials\_volume.thicknessFactor

> **thicknessFactor**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

##### extensions.KHR\_materials\_volume.thicknessTexture

> **thicknessTexture**: `object`

##### extensions.KHR\_materials\_volume.thicknessTexture.extensions

> **extensions**: `object`

##### extensions.KHR\_materials\_volume.thicknessTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

#### normalTexture

> **normalTexture**: `object`

##### normalTexture.extensions

> **extensions**: `object`

##### normalTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

##### normalTexture.scale

> **scale**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

#### occlusionTexture

> **occlusionTexture**: `object`

##### occlusionTexture.extensions

> **extensions**: `object`

##### occlusionTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

##### occlusionTexture.strength

> **strength**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), `number`\>

#### pbrMetallicRoughness

> **pbrMetallicRoughness**: `object`

##### pbrMetallicRoughness.baseColorFactor

> **baseColorFactor**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), [`Color4`](../../../../../core/src/classes/Color4.md)\>

##### pbrMetallicRoughness.baseColorTexture

> **baseColorTexture**: `object`

##### pbrMetallicRoughness.baseColorTexture.extensions

> **extensions**: `object`

##### pbrMetallicRoughness.baseColorTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

##### pbrMetallicRoughness.metallicFactor

> **metallicFactor**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`number`\>\>

##### pbrMetallicRoughness.metallicRoughnessTexture

> **metallicRoughnessTexture**: `object`

##### pbrMetallicRoughness.metallicRoughnessTexture.extensions

> **extensions**: `object`

##### pbrMetallicRoughness.metallicRoughnessTexture.extensions.KHR\_texture\_transform

> **KHR\_texture\_transform**: `ITextureDefinition`

##### pbrMetallicRoughness.roughnessFactor

> **roughnessFactor**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMaterial`](IMaterial.md), [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md), [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`number`\>\>
