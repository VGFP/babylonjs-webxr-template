[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SceneLoaderPluginOptions

# Interface: SceneLoaderPluginOptions

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:382](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/sceneLoader.ts#L382)

Defines options for SceneLoader plugins. This interface is extended by specific plugins.

## Extends

- `Record`\<`string`, `Record`\<`string`, `unknown`\> \| `undefined`\>

## Indexable

> \[`key`: `string`\]: `Record`\<`string`, `unknown`\> \| `undefined`

## Properties

### bvh

> **bvh**: `Partial`\<`BVHLoadingOptions`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/BVH/bvhFileLoader.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/BVH/bvhFileLoader.ts#L21)

Defines options for the bvh loader.

***

### fbx

> **fbx**: [`FBXFileLoaderOptions`](../../../loaders/src/interfaces/FBXFileLoaderOptions.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/FBX/fbxFileLoader.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/FBX/fbxFileLoader.ts#L78)

Defines options for the FBX loader.

***

### gltf

> **gltf**: `Partial`\<`GLTFLoaderOptions`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L48)

Defines options for the glTF loader.

***

### obj

> **obj**: `Partial`\<[`OBJLoadingOptions`](../../../loaders/src/type-aliases/OBJLoadingOptions.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/OBJ/objFileLoader.ts#L30)

Defines options for the obj loader.

***

### splat

> **splat**: `Partial`\<[`SPLATLoadingOptions`](../../../loaders/src/type-aliases/SPLATLoadingOptions.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/splatFileLoader.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/splatFileLoader.ts#L38)

Defines options for the splat loader.

***

### stl

> **stl**: `object`

Defined in: [babylonjs-source/packages/dev/loaders/src/STL/stlFileLoader.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/STL/stlFileLoader.ts#L19)

Defines options for the stl loader.
