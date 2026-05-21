[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / KHR\_lights\_punctual

# Class: KHR\_lights\_punctual

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_lights\_punctual.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_lights_punctual.ts#L30)

[Specification](https://github.com/KhronosGroup/glTF/blob/master/extensions/2.0/Khronos/KHR_lights_punctual/README.md)

## Implements

- `IGLTFExporterExtensionV2`

## Properties

### enabled

> **enabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_lights\_punctual.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_lights_punctual.ts#L35)

Defines whether this extension is enabled.

#### Implementation of

`IGLTFExporterExtensionV2.enabled`

***

### name

> `readonly` **name**: `"KHR_lights_punctual"` = `NAME`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_lights\_punctual.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_lights_punctual.ts#L32)

The name of this extension.

#### Implementation of

`IGLTFExporterExtensionV2.name`

***

### required

> **required**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_lights\_punctual.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_lights_punctual.ts#L38)

Defines whether this extension is required

#### Implementation of

`IGLTFExporterExtensionV2.required`

## Methods

### postExportNodeAsync()

> **postExportNodeAsync**(`context`, `node`, `babylonNode`, `nodeMap`, `convertToRightHanded`): `Promise`\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`INode`\>\>

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_lights\_punctual.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_lights_punctual.ts#L75)

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
