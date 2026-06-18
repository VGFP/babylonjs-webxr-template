[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / KHR\_materials\_diffuse\_transmission

# Class: KHR\_materials\_diffuse\_transmission

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_diffuse\_transmission.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_diffuse_transmission.ts#L40)

[Proposed Specification](https://github.com/KhronosGroup/glTF/pull/1825)
!!! Experimental Extension Subject to Changes !!!

## Implements

- `IGLTFExporterExtensionV2`

## Constructors

### Constructor

> **new KHR\_materials\_diffuse\_transmission**(`exporter`): `KHR_materials_diffuse_transmission`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_diffuse\_transmission.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_diffuse_transmission.ts#L54)

#### Parameters

##### exporter

`GLTFExporter`

#### Returns

`KHR_materials_diffuse_transmission`

## Properties

### enabled

> **enabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_diffuse\_transmission.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_diffuse_transmission.ts#L45)

Defines whether this extension is enabled

#### Implementation of

`IGLTFExporterExtensionV2.enabled`

***

### name

> `readonly` **name**: `"KHR_materials_diffuse_transmission"` = `NAME`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_diffuse\_transmission.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_diffuse_transmission.ts#L42)

Name of this extension

#### Implementation of

`IGLTFExporterExtensionV2.name`

***

### required

> **required**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_diffuse\_transmission.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_diffuse_transmission.ts#L48)

Defines whether this extension is required

#### Implementation of

`IGLTFExporterExtensionV2.required`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_diffuse\_transmission.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_diffuse_transmission.ts#L58)

Releases all held resources

#### Returns

`void`

#### Implementation of

`IGLTFExporterExtensionV2.dispose`

***

### postExportMaterialAdditionalTexturesAsync()?

> `optional` **postExportMaterialAdditionalTexturesAsync**(`context`, `node`, `babylonMaterial`): `Promise`\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]\>

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_diffuse\_transmission.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_diffuse_transmission.ts#L72)

After exporting a material, deal with additional textures

#### Parameters

##### context

`string`

GLTF context of the material

##### node

`IMaterial`

exported GLTF node

##### babylonMaterial

[`Material`](../../../core/src/classes/Material.md)

corresponding babylon material

#### Returns

`Promise`\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]\>

array of additional textures to export

#### Implementation of

`IGLTFExporterExtensionV2.postExportMaterialAdditionalTexturesAsync`

***

### postExportMaterialAsync()?

> `optional` **postExportMaterialAsync**(`context`, `node`, `babylonMaterial`): `Promise`\<`IMaterial`\>

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_diffuse\_transmission.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_diffuse_transmission.ts#L117)

After exporting a material

#### Parameters

##### context

`string`

GLTF context of the material

##### node

`IMaterial`

exported GLTF node

##### babylonMaterial

[`Material`](../../../core/src/classes/Material.md)

corresponding babylon material

#### Returns

`Promise`\<`IMaterial`\>

promise that resolves with the updated node

#### Implementation of

`IGLTFExporterExtensionV2.postExportMaterialAsync`
