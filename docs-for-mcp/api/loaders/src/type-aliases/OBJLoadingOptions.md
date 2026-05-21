[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / OBJLoadingOptions

# Type Alias: OBJLoadingOptions

> **OBJLoadingOptions** = `object`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objLoadingOptions.ts:6](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L6)

Options for loading OBJ/MTL files

## Properties

### computeNormals

> **computeNormals**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objLoadingOptions.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L31)

Compute the normals for the model, even if normals are present in the file.

***

### importVertexColors

> **importVertexColors**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objLoadingOptions.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L27)

Include in meshes the vertex colors available in some OBJ files.  This is not part of OBJ standard.

***

### invertTextureY

> **invertTextureY**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objLoadingOptions.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L23)

Invert Y-Axis of referenced textures on load

***

### invertY

> **invertY**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objLoadingOptions.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L19)

Invert model on y-axis (does a model scaling inversion)

***

### materialLoadingFailsSilently

> **materialLoadingFailsSilently**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objLoadingOptions.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L44)

When a material fails to load OBJ loader will silently fail and onSuccess() callback will be triggered.

***

### optimizeNormals

> **optimizeNormals**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objLoadingOptions.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L36)

Optimize the normals for the model. Lighting can be uneven if you use OptimizeWithUV = true because new vertices can be created for the same location if they pertain to different faces.
Using OptimizehNormals = true will help smoothing the lighting by averaging the normals of those vertices.

***

### optimizeWithUV

> **optimizeWithUV**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objLoadingOptions.ts:10](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L10)

Defines if UVs are optimized by default during load.

***

### skipMaterials

> **skipMaterials**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objLoadingOptions.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L40)

Skip loading the materials even if defined in the OBJ file (materials are ignored).

***

### useLegacyBehavior

> **useLegacyBehavior**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objLoadingOptions.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L48)

Loads assets without handedness conversions. This flag is for compatibility. Use it only if absolutely required. Defaults to false.

***

### UVScaling

> **UVScaling**: [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/objLoadingOptions.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L15)

Defines custom scaling of UV coordinates of loaded meshes.
