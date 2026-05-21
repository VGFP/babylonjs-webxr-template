[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MeshDebugOptions

# Interface: MeshDebugOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:340](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L340)

Options for MeshDebugPluginMaterial visualizations

## Properties

### mode?

> `optional` **mode?**: [`MeshDebugMode`](../enumerations/MeshDebugMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L345)

The mesh debug visualization.
Defaults to NONE.

***

### multiply?

> `optional` **multiply?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:350](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L350)

Whether the mesh debug visualization should multiply with color underneath.
Defaults to true.

***

### shadedDiffuseColor?

> `optional` **shadedDiffuseColor?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:355](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L355)

Diffuse color used to shade the mesh.
Defaults to (1.0, 1.0, 1.0).

***

### shadedSpecularColor?

> `optional` **shadedSpecularColor?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:360](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L360)

Specular color used to shade the mesh.
Defaults to (0.8, 0.8, 0.8).

***

### shadedSpecularPower?

> `optional` **shadedSpecularPower?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:365](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L365)

Specular power used to shade the mesh.
Defaults to 10.

***

### uvPrimaryColor?

> `optional` **uvPrimaryColor?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:400](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L400)

1st color of checkerboard grid in UV1 or UV2 modes.
Defaults to (1.0, 1.0, 1.0).

***

### uvScale?

> `optional` **uvScale?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:395](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L395)

Size of tiles in UV1 or UV2 modes.
Defaults to 20.

***

### uvSecondaryColor?

> `optional` **uvSecondaryColor?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:405](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L405)

2nd color of checkerboard grid in UV1 or UV2 modes.
Defaults to (0.5, 0.5, 0.5).

***

### vertexColor?

> `optional` **vertexColor?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:385](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L385)

Color of vertices in TRIANGLES_VERTICES and VERTICES mode.
Defaults to (0.0, 0.0, 0.0).

***

### vertexRadius?

> `optional` **vertexRadius?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:390](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L390)

Radius of dots drawn over vertices in TRIANGLE_VERTICES and VERTICES mode.
Defaults to 1.2.

***

### wireframeThickness?

> `optional` **wireframeThickness?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:370](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L370)

Width of edge lines in TRIANGLES and TRIANGLE_VERTICES modes.
Defaults to 0.7.

***

### wireframeTrianglesColor?

> `optional` **wireframeTrianglesColor?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L375)

Color of edge lines in TRIANGLES mode.
Defaults to (0.0, 0.0, 0.0).

***

### wireframeVerticesColor?

> `optional` **wireframeVerticesColor?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:380](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L380)

Color of edge lines in TRIANGLES_VERTICES modes.
Defaults to (0.8, 0.8, 0.8).
