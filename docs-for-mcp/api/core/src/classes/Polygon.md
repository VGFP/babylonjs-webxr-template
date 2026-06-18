[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Polygon

# Class: Polygon

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/polygonMesh.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/polygonMesh.ts#L81)

Polygon

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#non-regular-polygon

## Constructors

### Constructor

> **new Polygon**(): `Polygon`

#### Returns

`Polygon`

## Methods

### Circle()

> `static` **Circle**(`radius`, `cx?`, `cy?`, `numberOfSides?`): [`Vector2`](Vector2.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/polygonMesh.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/polygonMesh.ts#L102)

Creates a circle

#### Parameters

##### radius

`number`

radius of circle

##### cx?

`number` = `0`

scale in x

##### cy?

`number` = `0`

scale in y

##### numberOfSides?

`number` = `32`

number of sides that make up the circle

#### Returns

[`Vector2`](Vector2.md)[]

points that make the resulting circle

***

### Parse()

> `static` **Parse**(`input`): [`Vector2`](Vector2.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/polygonMesh.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/polygonMesh.ts#L121)

Creates a polygon from input string

#### Parameters

##### input

`string`

Input polygon data

#### Returns

[`Vector2`](Vector2.md)[]

the parsed points

***

### Rectangle()

> `static` **Rectangle**(`xmin`, `ymin`, `xmax`, `ymax`): [`Vector2`](Vector2.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/polygonMesh.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/polygonMesh.ts#L90)

Creates a rectangle

#### Parameters

##### xmin

`number`

bottom X coord

##### ymin

`number`

bottom Y coord

##### xmax

`number`

top X coord

##### ymax

`number`

top Y coord

#### Returns

[`Vector2`](Vector2.md)[]

points that make the resulting rectangle

***

### StartingAt()

> `static` **StartingAt**(`x`, `y`): [`Path2`](Path2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/polygonMesh.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/polygonMesh.ts#L140)

Starts building a polygon from x and y coordinates

#### Parameters

##### x

`number`

x coordinate

##### y

`number`

y coordinate

#### Returns

[`Path2`](Path2.md)

the started path2
