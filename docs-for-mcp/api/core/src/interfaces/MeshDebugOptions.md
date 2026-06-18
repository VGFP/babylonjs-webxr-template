[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MeshDebugOptions

# Interface: MeshDebugOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:344](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L344)

Options for MeshDebugPluginMaterial visualizations

## Properties

### mode?

> `optional` **mode?**: [`MeshDebugMode`](../enumerations/MeshDebugMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:349](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L349)

The mesh debug visualization.
Defaults to NONE.

***

### multiply?

> `optional` **multiply?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:354](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L354)

Whether the mesh debug visualization should multiply with color underneath.
Defaults to true.

***

### shadedDiffuseColor?

> `optional` **shadedDiffuseColor?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:359](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L359)

Diffuse color used to shade the mesh.
Defaults to (1.0, 1.0, 1.0).

***

### shadedSpecularColor?

> `optional` **shadedSpecularColor?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:364](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L364)

Specular color used to shade the mesh.
Defaults to (0.8, 0.8, 0.8).

***

### shadedSpecularPower?

> `optional` **shadedSpecularPower?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:369](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L369)

Specular power used to shade the mesh.
Defaults to 10.

***

### uvPrimaryColor?

> `optional` **uvPrimaryColor?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:404](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L404)

1st color of checkerboard grid in UV1 or UV2 modes.
Defaults to (1.0, 1.0, 1.0).

***

### uvScale?

> `optional` **uvScale?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:399](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L399)

Size of tiles in UV1 or UV2 modes.
Defaults to 20.

***

### uvSecondaryColor?

> `optional` **uvSecondaryColor?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:409](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L409)

2nd color of checkerboard grid in UV1 or UV2 modes.
Defaults to (0.5, 0.5, 0.5).

***

### vertexColor?

> `optional` **vertexColor?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:389](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L389)

Color of vertices in TRIANGLES_VERTICES and VERTICES mode.
Defaults to (0.0, 0.0, 0.0).

***

### vertexRadius?

> `optional` **vertexRadius?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:394](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L394)

Radius of dots drawn over vertices in TRIANGLE_VERTICES and VERTICES mode.
Defaults to 1.2.

***

### wireframeThickness?

> `optional` **wireframeThickness?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:374](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L374)

Width of edge lines in TRIANGLES and TRIANGLE_VERTICES modes.
Defaults to 0.7.

***

### wireframeTrianglesColor?

> `optional` **wireframeTrianglesColor?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:379](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L379)

Color of edge lines in TRIANGLES mode.
Defaults to (0.0, 0.0, 0.0).

***

### wireframeVerticesColor?

> `optional` **wireframeVerticesColor?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:384](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L384)

Color of edge lines in TRIANGLES_VERTICES modes.
Defaults to (0.8, 0.8, 0.8).
