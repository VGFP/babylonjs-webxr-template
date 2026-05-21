[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRBackgroundRemoverOptions

# Interface: IWebXRBackgroundRemoverOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBackgroundRemover.ts:10](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBackgroundRemover.ts#L10)

Options interface for the background remover plugin

## Properties

### backgroundMeshes?

> `optional` **backgroundMeshes?**: [`AbstractMesh`](../classes/AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBackgroundRemover.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBackgroundRemover.ts#L14)

Further background meshes to disable when entering AR

***

### environmentHelperRemovalFlags?

> `optional` **environmentHelperRemovalFlags?**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBackgroundRemover.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBackgroundRemover.ts#L19)

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

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBackgroundRemover.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRBackgroundRemover.ts#L32)

don't disable the environment helper
