[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GreasedLineRibbonOptions

# Type Alias: GreasedLineRibbonOptions

> **GreasedLineRibbonOptions** = `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L50)

## Properties

### closePath?

> `optional` **closePath?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L79)

If true, the path will be closed.

***

### directions?

> `optional` **directions?**: [`Vector3`](../classes/Vector3.md)[] \| [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L60)

Normalized directions of the slopes of the non camera facing lines.

***

### directionsAutoMode?

> `optional` **directionsAutoMode?**: [`GreasedLineRibbonAutoDirectionMode`](../enumerations/GreasedLineRibbonAutoDirectionMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L64)

Defines the calculation mode of the directions which the line will be thickened to.

***

### facesMode?

> `optional` **facesMode?**: [`GreasedLineRibbonFacesMode`](../enumerations/GreasedLineRibbonFacesMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L75)

Controls how the faces are created.
GreasedLineRibbonFacesMode.FACES_MODE_SINGLE_SIDED = single sided with back face culling. Default value.
GreasedLineRibbonFacesMode.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = single sided without back face culling
GreasedLineRibbonFacesMode.FACES_MODE_DOUBLE_SIDED = extra back faces are created. This doubles the amount of faces of the mesh.

***

### pointsMode?

> `optional` **pointsMode?**: [`GreasedLineRibbonPointsMode`](../enumerations/GreasedLineRibbonPointsMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L56)

Defines how the points are processed.
In GreasedLineRibbonPointsMode.POINTS_MODE_POINTS every array of points will become the center of the ribbon. The ribbon will be expanded by width/2 to +direction and -direction as well.
In GreasedLineRibbonPointsMode.POINTS_MODE_PATHS every array of points is one path. These will be used to buuid one ribbon.

***

### smoothShading?

> `optional` **smoothShading?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L84)

If true, normals will be computed when creating the vertex buffers.
This results to smooth shading of the mesh.

***

### width?

> `optional` **width?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L68)

Width of the ribbon.
