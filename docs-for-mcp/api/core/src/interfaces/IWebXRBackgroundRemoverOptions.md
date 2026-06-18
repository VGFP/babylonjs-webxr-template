[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRBackgroundRemoverOptions

# Interface: IWebXRBackgroundRemoverOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBackgroundRemover.pure.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBackgroundRemover.pure.ts#L12)

Options interface for the background remover plugin

## Properties

### backgroundMeshes?

> `optional` **backgroundMeshes?**: [`AbstractMesh`](../classes/AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBackgroundRemover.pure.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBackgroundRemover.pure.ts#L16)

Further background meshes to disable when entering AR

***

### environmentHelperRemovalFlags?

> `optional` **environmentHelperRemovalFlags?**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBackgroundRemover.pure.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBackgroundRemover.pure.ts#L21)

flags to configure the removal of the environment helper.
If not set, the entire background will be removed. If set, flags should be set as well.

#### ground?

> `optional` **ground?**: `boolean`

Should the ground be removed (default false)

#### skyBox?

> `optional` **skyBox?**: `boolean`

Should the skybox be removed (default false)

***

### ignoreEnvironmentHelper?

> `optional` **ignoreEnvironmentHelper?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBackgroundRemover.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBackgroundRemover.pure.ts#L34)

don't disable the environment helper
