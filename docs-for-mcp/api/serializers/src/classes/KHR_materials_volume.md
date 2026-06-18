[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / KHR\_materials\_volume

# Class: KHR\_materials\_volume

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_volume.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume.ts#L17)

[Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md)

## Implements

- `IGLTFExporterExtensionV2`

## Constructors

### Constructor

> **new KHR\_materials\_volume**(`exporter`): `KHR_materials_volume`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_volume.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume.ts#L31)

#### Parameters

##### exporter

`GLTFExporter`

#### Returns

`KHR_materials_volume`

## Properties

### enabled

> **enabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_volume.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume.ts#L22)

Defines whether this extension is enabled

#### Implementation of

`IGLTFExporterExtensionV2.enabled`

***

### name

> `readonly` **name**: `"KHR_materials_volume"` = `NAME`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_volume.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume.ts#L19)

Name of this extension

#### Implementation of

`IGLTFExporterExtensionV2.name`

***

### required

> **required**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_volume.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume.ts#L25)

Defines whether this extension is required

#### Implementation of

`IGLTFExporterExtensionV2.required`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_volume.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume.ts#L35)

Releases all held resources

#### Returns

`void`

#### Implementation of

`IGLTFExporterExtensionV2.dispose`

***

### postExportMaterialAdditionalTexturesAsync()?

> `optional` **postExportMaterialAdditionalTexturesAsync**(`context`, `node`, `babylonMaterial`): `Promise`\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]\>

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_volume.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume.ts#L49)

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

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_volume.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume.ts#L100)

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
