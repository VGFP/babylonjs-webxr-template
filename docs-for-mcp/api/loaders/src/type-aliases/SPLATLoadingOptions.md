[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / SPLATLoadingOptions

# Type Alias: SPLATLoadingOptions

> **SPLATLoadingOptions** = `object`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/splatLoadingOptions.ts:6](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/SPLAT/splatLoadingOptions.ts#L6)

Options for loading Gaussian Splatting and PLY files

## Properties

### deflateURL?

> `optional` **deflateURL?**: `string`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/splatLoadingOptions.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/SPLAT/splatLoadingOptions.ts#L19)

URL to load fflate from. If null or undefined, will load from unpkg.com
(https://unpkg.com/fflate/umd/index.js)

***

### disableAutoCameraLimits?

> `optional` **disableAutoCameraLimits?**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/splatLoadingOptions.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/SPLAT/splatLoadingOptions.ts#L30)

Disable automatic camera limits from being applied if they exist in the splat file

***

### fflate?

> `optional` **fflate?**: `unknown`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/splatLoadingOptions.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/SPLAT/splatLoadingOptions.ts#L25)

Instance of [fflate](https://github.com/101arrowz/fflate) to avoid
dynamically loading of the lib to global if needed, useful for bundler users.

#### Example

```ts
import * as fflate from 'fflate';
```

***

### flipY?

> `optional` **flipY?**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/splatLoadingOptions.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/SPLAT/splatLoadingOptions.ts#L14)

Spatial Y Flip for splat position and orientation

***

### gaussianSplattingMesh?

> `optional` **gaussianSplattingMesh?**: [`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/splatLoadingOptions.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/SPLAT/splatLoadingOptions.ts#L35)

Mesh that will be used to load data instead of creating a new one

***

### keepInRam?

> `optional` **keepInRam?**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/splatLoadingOptions.ts:10](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/SPLAT/splatLoadingOptions.ts#L10)

Defines if buffers should be kept in memory for editing purposes

***

### needsRotationScaleTextures?

> `optional` **needsRotationScaleTextures?**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/splatLoadingOptions.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/SPLAT/splatLoadingOptions.ts#L41)

Generate rotation and scale matrix textures required for voxel-based IBL shadows.
Required for IBL shadows to work if keepInRam is false.

***

### spzLibraryUrl?

> `optional` **spzLibraryUrl?**: `string`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/splatLoadingOptions.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/SPLAT/splatLoadingOptions.ts#L53)

URL to load the spz WASM ES module from (e.g. the @adobe/spz package).
When provided, the WASM-based SPZ loader is used, which supports extra features
such as antialiasing metadata, and vendor-specific extensions such as safe-orbit
camera limits.
Defaults to the @adobe/spz unpkg URL when WebAssembly is supported, and undefined otherwise.
Set to undefined to force the built-in manual SPZ parser regardless of WebAssembly support.

#### Example

```ts
Setting the URL directly on the loader options
spzLibraryUrl: "https://unpkg.com/@adobe/spz@0.2.0/dist/spz.js"
```
