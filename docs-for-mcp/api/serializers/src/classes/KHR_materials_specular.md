[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / KHR\_materials\_specular

# Class: KHR\_materials\_specular

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_specular.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_specular.ts#L15)

[Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_specular/README.md)

## Implements

- `IGLTFExporterExtensionV2`

## Constructors

### Constructor

> **new KHR\_materials\_specular**(`exporter`): `KHR_materials_specular`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_specular.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_specular.ts#L29)

#### Parameters

##### exporter

`GLTFExporter`

#### Returns

`KHR_materials_specular`

## Properties

### enabled

> **enabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_specular.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_specular.ts#L20)

Defines whether this extension is enabled

#### Implementation of

`IGLTFExporterExtensionV2.enabled`

***

### name

> `readonly` **name**: `"KHR_materials_specular"` = `NAME`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_specular.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_specular.ts#L17)

Name of this extension

#### Implementation of

`IGLTFExporterExtensionV2.name`

***

### required

> **required**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_specular.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_specular.ts#L23)

Defines whether this extension is required

#### Implementation of

`IGLTFExporterExtensionV2.required`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_specular.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_specular.ts#L34)

Dispose

#### Returns

`void`

#### Implementation of

`IGLTFExporterExtensionV2.dispose`

***

### postExportMaterialAdditionalTexturesAsync()?

> `optional` **postExportMaterialAdditionalTexturesAsync**(`context`, `node`, `babylonMaterial`): `Promise`\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]\>

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_specular.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_specular.ts#L48)

After exporting a material, deal with the additional textures

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

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_specular.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_specular.ts#L90)

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

promise, resolves with the material

#### Implementation of

`IGLTFExporterExtensionV2.postExportMaterialAsync`
