[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GreasedLineRibbonAutoDirectionMode

# Enumeration: GreasedLineRibbonAutoDirectionMode

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L42)

Only with POINTS_MODE_PATHS.
AUTO_DIRECTIONS_FROM_FIRST_SEGMENT sets the direction (slope) of the ribbon from the direction of the first line segment. Recommended.
AUTO_DIRECTIONS_FROM_ALL_SEGMENTS in this mode the direction (slope) will be calculated for each line segment according to the direction vector between each point of the line segments. Slow method.
AUTO_DIRECTIONS_ENHANCED in this mode the direction (slope) will be calculated for each line segment according to the direction vector between each point of the line segments using a more sophisitcaed algorithm. Slowest method.
AUTO_DIRECTIONS_FACE_TO in this mode the direction (slope) will be calculated for each line segment according to the direction vector between each point of the line segments and a direction (face-to) vector specified in direction. The resulting line will face to the direction of this face-to vector.
AUTO_DIRECTIONS_NONE you have to set the direction (slope) manually. Recommended.

## Enumeration Members

### AUTO\_DIRECTIONS\_ENHANCED

> **AUTO\_DIRECTIONS\_ENHANCED**: `2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L45)

***

### AUTO\_DIRECTIONS\_FACE\_TO

> **AUTO\_DIRECTIONS\_FACE\_TO**: `3`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L46)

***

### AUTO\_DIRECTIONS\_FROM\_ALL\_SEGMENTS

> **AUTO\_DIRECTIONS\_FROM\_ALL\_SEGMENTS**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L44)

***

### AUTO\_DIRECTIONS\_FROM\_FIRST\_SEGMENT

> **AUTO\_DIRECTIONS\_FROM\_FIRST\_SEGMENT**: `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L43)

***

### AUTO\_DIRECTIONS\_NONE

> **AUTO\_DIRECTIONS\_NONE**: `99`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L47)
