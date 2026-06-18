[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / KHR\_materials\_transmission

# Class: KHR\_materials\_transmission

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_transmission.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.ts#L17)

[Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_transmission/README.md)

## Implements

- `IGLTFExporterExtensionV2`

## Constructors

### Constructor

> **new KHR\_materials\_transmission**(`exporter`): `KHR_materials_transmission`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_transmission.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.ts#L31)

#### Parameters

##### exporter

`GLTFExporter`

#### Returns

`KHR_materials_transmission`

## Properties

### enabled

> **enabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_transmission.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.ts#L22)

Defines whether this extension is enabled

#### Implementation of

`IGLTFExporterExtensionV2.enabled`

***

### name

> `readonly` **name**: `"KHR_materials_transmission"` = `NAME`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_transmission.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.ts#L19)

Name of this extension

#### Implementation of

`IGLTFExporterExtensionV2.name`

***

### required

> **required**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_transmission.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.ts#L25)

Defines whether this extension is required

#### Implementation of

`IGLTFExporterExtensionV2.required`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_transmission.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.ts#L36)

Dispose

#### Returns

`void`

#### Implementation of

`IGLTFExporterExtensionV2.dispose`

***

### postExportMaterialAdditionalTexturesAsync()?

> `optional` **postExportMaterialAdditionalTexturesAsync**(`context`, `node`, `babylonMaterial`): `Promise`\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]\>

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_transmission.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.ts#L50)

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

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_transmission.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.ts#L96)

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

true if successful

#### Implementation of

`IGLTFExporterExtensionV2.postExportMaterialAsync`
