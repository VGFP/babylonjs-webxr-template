[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MeshDebugMode

# Enumeration: MeshDebugMode

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:299](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L299)

Supported visualizations of MeshDebugPluginMaterial

## Enumeration Members

### MATERIALIDS

> **MATERIALIDS**: `7`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:334](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L334)

An arbitrary, distinguishable color to identify the material

***

### NONE

> **NONE**: `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:303](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L303)

Material without any mesh debug visualization

***

### TRIANGLES

> **TRIANGLES**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:308](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L308)

A wireframe of the mesh
NOTE: For this mode to work correctly, convertToUnIndexedMesh() or MeshDebugPluginMaterial.PrepareMeshForTrianglesAndVerticesMode() must first be called on mesh.

***

### TRIANGLES\_VERTICES

> **TRIANGLES\_VERTICES**: `3`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L318)

A wireframe of the mesh, with points drawn over vertices
NOTE: For this mode to work correctly, MeshDebugPluginMaterial.PrepareMeshForTrianglesAndVerticesMode() must first be called on mesh.

***

### UV0

> **UV0**: `4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:322](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L322)

A checkerboard grid of the mesh's UV set 0

***

### UV1

> **UV1**: `5`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:326](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L326)

A checkerboard grid of the mesh's UV set 1

***

### VERTEXCOLORS

> **VERTEXCOLORS**: `6`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:330](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L330)

The mesh's vertex colors displayed as the primary texture

***

### VERTICES

> **VERTICES**: `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts:313](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/meshDebugPluginMaterial.ts#L313)

Points drawn over vertices of mesh
NOTE: For this mode to work correctly, MeshDebugPluginMaterial.PrepareMeshForTrianglesAndVerticesMode() must first be called on mesh.
