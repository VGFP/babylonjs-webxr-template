[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MeshDebugMode

# Enumeration: MeshDebugMode

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:303](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L303)

Supported visualizations of MeshDebugPluginMaterial

## Enumeration Members

### MATERIALIDS

> **MATERIALIDS**: `7`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:338](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L338)

An arbitrary, distinguishable color to identify the material

***

### NONE

> **NONE**: `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:307](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L307)

Material without any mesh debug visualization

***

### TRIANGLES

> **TRIANGLES**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:312](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L312)

A wireframe of the mesh
NOTE: For this mode to work correctly, convertToUnIndexedMesh() or MeshDebugPluginMaterial.PrepareMeshForTrianglesAndVerticesMode() must first be called on mesh.

***

### TRIANGLES\_VERTICES

> **TRIANGLES\_VERTICES**: `3`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L322)

A wireframe of the mesh, with points drawn over vertices
NOTE: For this mode to work correctly, MeshDebugPluginMaterial.PrepareMeshForTrianglesAndVerticesMode() must first be called on mesh.

***

### UV0

> **UV0**: `4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:326](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L326)

A checkerboard grid of the mesh's UV set 0

***

### UV1

> **UV1**: `5`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:330](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L330)

A checkerboard grid of the mesh's UV set 1

***

### VERTEXCOLORS

> **VERTEXCOLORS**: `6`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:334](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L334)

The mesh's vertex colors displayed as the primary texture

***

### VERTICES

> **VERTICES**: `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:317](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L317)

Points drawn over vertices of mesh
NOTE: For this mode to work correctly, MeshDebugPluginMaterial.PrepareMeshForTrianglesAndVerticesMode() must first be called on mesh.
