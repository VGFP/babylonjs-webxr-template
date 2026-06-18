[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / EXT\_lights\_area

# Class: EXT\_lights\_area

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_lights\_area.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_lights_area.ts#L28)

[Specification](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/EXT_lights_area/README.md)

## Implements

- `IGLTFExporterExtensionV2`

## Properties

### enabled

> **enabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_lights\_area.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_lights_area.ts#L33)

Defines whether this extension is enabled.

#### Implementation of

`IGLTFExporterExtensionV2.enabled`

***

### name

> `readonly` **name**: `"EXT_lights_area"` = `NAME`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_lights\_area.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_lights_area.ts#L30)

The name of this extension.

#### Implementation of

`IGLTFExporterExtensionV2.name`

***

### required

> **required**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_lights\_area.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_lights_area.ts#L36)

Defines whether this extension is required

#### Implementation of

`IGLTFExporterExtensionV2.required`

## Methods

### postExportNodeAsync()

> **postExportNodeAsync**(`context`, `node`, `babylonNode`, `nodeMap`, `convertToRightHanded`): `Promise`\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`INode`\>\>

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_lights\_area.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_lights_area.ts#L73)

Define this method to modify the default behavior when exporting a node

#### Parameters

##### context

`string`

The context when exporting the node

##### node

`INode`

glTF node

##### babylonNode

[`Node`](../../../core/src/classes/Node.md)

BabylonJS node

##### nodeMap

`Map`\<[`Node`](../../../core/src/classes/Node.md), `number`\>

Node mapping of babylon node to glTF node index

##### convertToRightHanded

`boolean`

Flag to convert the values to right-handed

#### Returns

`Promise`\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`INode`\>\>

nullable INode promise

#### Implementation of

`IGLTFExporterExtensionV2.postExportNodeAsync`
