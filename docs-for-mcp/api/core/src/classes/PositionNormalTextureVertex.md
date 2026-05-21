[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PositionNormalTextureVertex

# Class: PositionNormalTextureVertex

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vertexFormat.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vertexFormat.ts#L31)

Contains position, normal and uv vectors for a vertex

## Constructors

### Constructor

> **new PositionNormalTextureVertex**(`position?`, `normal?`, `uv?`): `PositionNormalTextureVertex`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vertexFormat.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vertexFormat.ts#L38)

Creates a PositionNormalTextureVertex

#### Parameters

##### position?

[`Vector3`](Vector3.md) = `...`

the position of the vertex (defaut: 0,0,0)

##### normal?

[`Vector3`](Vector3.md) = `...`

the normal of the vertex (defaut: 0,1,0)

##### uv?

[`Vector2`](Vector2.md) = `...`

the uv of the vertex (default: 0,0)

#### Returns

`PositionNormalTextureVertex`

## Properties

### normal

> **normal**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vertexFormat.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vertexFormat.ts#L42)

[Vector3.Up()] the normal of the vertex (defaut: 0,1,0)

***

### position

> **position**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vertexFormat.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vertexFormat.ts#L40)

[Vector3.Zero()] the position of the vertex (defaut: 0,0,0)

***

### uv

> **uv**: [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vertexFormat.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vertexFormat.ts#L44)

[Vector3.Zero()] the uv of the vertex (default: 0,0)

## Methods

### clone()

> **clone**(): `PositionNormalTextureVertex`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.vertexFormat.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Maths/math.vertexFormat.ts#L50)

Clones the PositionNormalTextureVertex

#### Returns

`PositionNormalTextureVertex`

the cloned PositionNormalTextureVertex
