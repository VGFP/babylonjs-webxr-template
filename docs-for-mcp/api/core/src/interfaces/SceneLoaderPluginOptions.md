[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SceneLoaderPluginOptions

# Interface: SceneLoaderPluginOptions

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:377](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L377)

Defines options for SceneLoader plugins. This interface is extended by specific plugins.

## Extends

- `Record`\<`string`, `Record`\<`string`, `unknown`\> \| `undefined`\>

## Indexable

> \[`key`: `string`\]: `Record`\<`string`, `unknown`\> \| `undefined`

## Properties

### bvh

> **bvh**: `Partial`\<`BVHLoadingOptions`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/BVH/bvhFileLoader.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/BVH/bvhFileLoader.ts#L21)

Defines options for the bvh loader.

***

### gltf

> **gltf**: `Partial`\<`GLTFLoaderOptions`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L48)

Defines options for the glTF loader.

***

### obj

> **obj**: `Partial`\<[`OBJLoadingOptions`](../../../loaders/src/type-aliases/OBJLoadingOptions.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objFileLoader.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objFileLoader.ts#L30)

Defines options for the obj loader.

***

### splat

> **splat**: `Partial`\<[`SPLATLoadingOptions`](../../../loaders/src/type-aliases/SPLATLoadingOptions.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/splatFileLoader.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/SPLAT/splatFileLoader.ts#L37)

Defines options for the splat loader.

***

### stl

> **stl**: `object`

Defined in: [babylonjs-source/packages/dev/loaders/src/STL/stlFileLoader.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/STL/stlFileLoader.ts#L19)

Defines options for the stl loader.
