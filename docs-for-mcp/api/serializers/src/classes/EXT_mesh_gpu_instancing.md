[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / EXT\_mesh\_gpu\_instancing

# Class: EXT\_mesh\_gpu\_instancing

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_mesh\_gpu\_instancing.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.ts#L31)

[Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_mesh_gpu_instancing/README.md)

## Implements

- `IGLTFExporterExtensionV2`

## Constructors

### Constructor

> **new EXT\_mesh\_gpu\_instancing**(`exporter`): `EXT_mesh_gpu_instancing`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_mesh\_gpu\_instancing.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.ts#L50)

#### Parameters

##### exporter

`GLTFExporter`

#### Returns

`EXT_mesh_gpu_instancing`

## Properties

### enabled

> **enabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_mesh\_gpu\_instancing.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.ts#L36)

Defines whether this extension is enabled

#### Implementation of

`IGLTFExporterExtensionV2.enabled`

***

### name

> `readonly` **name**: `"EXT_mesh_gpu_instancing"` = `NAME`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_mesh\_gpu\_instancing.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.ts#L33)

Name of this extension

#### Implementation of

`IGLTFExporterExtensionV2.name`

***

### required

> **required**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_mesh\_gpu\_instancing.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.ts#L39)

Defines whether this extension is required

#### Implementation of

`IGLTFExporterExtensionV2.required`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_mesh\_gpu\_instancing.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.ts#L54)

Releases all held resources

#### Returns

`void`

#### Implementation of

`IGLTFExporterExtensionV2.dispose`

***

### postExportNodeAsync()

> **postExportNodeAsync**(`context`, `node`, `babylonNode`, `nodeMap`, `convertToRightHanded`, `bufferManager`): `Promise`\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`INode`\>\>

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_mesh\_gpu\_instancing.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.ts#L71)

After node is exported

#### Parameters

##### context

`string`

the GLTF context when loading the asset

##### node

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`INode`\>

the node exported

##### babylonNode

[`Node`](../../../core/src/classes/Node.md)

the corresponding babylon node

##### nodeMap

`Map`\<[`Node`](../../../core/src/classes/Node.md), `number`\>

map from babylon node id to node index

##### convertToRightHanded

`boolean`

true if we need to convert data from left hand to right hand system.

##### bufferManager

`BufferManager`

buffer manager

#### Returns

`Promise`\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`INode`\>\>

nullable promise, resolves with the node

#### Implementation of

`IGLTFExporterExtensionV2.postExportNodeAsync`
