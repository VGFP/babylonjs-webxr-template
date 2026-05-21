[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SceneOptions

# Interface: SceneOptions

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L129)

Interface defining initialization parameters for Scene class

## Properties

### defaultCameraLayerMask?

> `optional` **defaultCameraLayerMask?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L163)

Defines the default layerMask used when creating cameras in the scene (default: 0x0fffffff)

***

### defaultRenderableLayerMask?

> `optional` **defaultRenderableLayerMask?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L168)

Defines the default layerMask used when creating renderable objects in the scene (default: 0x0fffffff)

***

### useClonedMeshMap?

> `optional` **useClonedMeshMap?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L146)

Defines that each mesh of the scene should keep up-to-date a map of referencing cloned meshes for fast disposing
It will improve performance when the number of mesh becomes important, but might consume a bit more memory

***

### useFloatingOrigin?

> `optional` **useFloatingOrigin?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L155)

When enabled, the scene can handle large world coordinate rendering without jittering caused by floating point imprecision on the GPU.
This mode offsets matrices and position-related attribute values before passing to shaders, centering camera at origin and offsetting other scene objects by camera active position.

IMPORTANT: Only use this scene-level option if you intend to enable floating origin on a per-scene basis. Must use in conjunction with engine creation option 'useHighPrecisionMatrix' to fix CPU-side floating point imprecision.
HOWEVER if you want largeWorldRendering on ALL scenes, set the useLargeWorldRendering flag on the engine instead of this scene-level flag. Doing so will automatically set useHighPrecisionMatrix on the engine as well.

***

### useGeometryUniqueIdsMap?

> `optional` **useGeometryUniqueIdsMap?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L134)

Defines that scene should keep up-to-date a map of geometry to enable fast look-up by uniqueId
It will improve performance when the number of geometries becomes important.

***

### useMaterialMeshMap?

> `optional` **useMaterialMeshMap?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L140)

Defines that each material of the scene should keep up-to-date a map of referencing meshes for fast disposing
It will improve performance when the number of mesh becomes important, but might consume a bit more memory

***

### virtual?

> `optional` **virtual?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L158)

Defines if the creation of the scene should impact the engine (Eg. UtilityLayer's scene)
