[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PositionNormalVertex

# Class: PositionNormalVertex

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vertexFormat.ts:6](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vertexFormat.ts#L6)

Contains position and normal vectors for a vertex

## Constructors

### Constructor

> **new PositionNormalVertex**(`position?`, `normal?`): `PositionNormalVertex`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vertexFormat.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vertexFormat.ts#L12)

Creates a PositionNormalVertex

#### Parameters

##### position?

[`Vector3`](Vector3.md) = `...`

the position of the vertex (defaut: 0,0,0)

##### normal?

[`Vector3`](Vector3.md) = `...`

the normal of the vertex (defaut: 0,1,0)

#### Returns

`PositionNormalVertex`

## Properties

### normal

> **normal**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vertexFormat.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vertexFormat.ts#L16)

[Vector3.Up()] the normal of the vertex (defaut: 0,1,0)

***

### position

> **position**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vertexFormat.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vertexFormat.ts#L14)

[Vector3.Zero()] the position of the vertex (defaut: 0,0,0)

## Methods

### clone()

> **clone**(): `PositionNormalVertex`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vertexFormat.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.vertexFormat.ts#L23)

Clones the PositionNormalVertex

#### Returns

`PositionNormalVertex`

the cloned PositionNormalVertex
