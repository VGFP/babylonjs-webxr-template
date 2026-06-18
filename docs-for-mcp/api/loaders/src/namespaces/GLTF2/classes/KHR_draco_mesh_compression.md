[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / KHR\_draco\_mesh\_compression

# Class: KHR\_draco\_mesh\_compression

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_draco\_mesh\_compression.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_draco_mesh_compression.ts#L35)

[Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_draco_mesh_compression/README.md)

## Implements

- [`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md)

## Properties

### dracoDecoder?

> `optional` **dracoDecoder?**: [`DracoDecoder`](../../../../../core/src/classes/DracoDecoder.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_draco\_mesh\_compression.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_draco_mesh_compression.ts#L44)

The draco decoder used to decode vertex data or DracoDecoder.Default if not defined

***

### enabled

> **enabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_draco\_mesh\_compression.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_draco_mesh_compression.ts#L49)

Defines whether this extension is enabled.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`enabled`](../interfaces/IGLTFLoaderExtension.md#enabled)

***

### name

> `readonly` **name**: `"KHR_draco_mesh_compression"` = `NAME`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_draco\_mesh\_compression.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_draco_mesh_compression.ts#L39)

The name of this extension.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`name`](../interfaces/IGLTFLoaderExtension.md#name)

***

### useNormalizedFlagFromAccessor

> **useNormalizedFlagFromAccessor**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_draco\_mesh\_compression.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_draco_mesh_compression.ts#L54)

Defines whether to use the normalized flag from the glTF accessor instead of the Draco data. Defaults to true.
