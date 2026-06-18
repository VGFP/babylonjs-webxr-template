[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Lattice

# Class: Lattice

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/lattice.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/lattice.ts#L30)

Class used to represent a lattice

## See

 - [Moving lattice bounds](https://playground.babylonjs.com/#MDVD75#18)
 - [Twist](https://playground.babylonjs.com/#MDVD75#23)

## Constructors

### Constructor

> **new Lattice**(`options?`): `Lattice`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/lattice.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/lattice.ts#L127)

Creates a new Lattice

#### Parameters

##### options?

`Partial`\<[`ILatticeOptions`](../interfaces/ILatticeOptions.md)\>

options for creating

#### Returns

`Lattice`

## Accessors

### cellSize

#### Get Signature

> **get** **cellSize**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/lattice.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/lattice.ts#L105)

Gets the size of each cell in the lattice

##### Returns

[`Vector3`](Vector3.md)

***

### data

#### Get Signature

> **get** **data**(): [`Vector3`](Vector3.md)[][][]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/lattice.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/lattice.ts#L98)

Gets the data of the lattice

##### Returns

[`Vector3`](Vector3.md)[][][]

***

### max

#### Get Signature

> **get** **max**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/lattice.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/lattice.ts#L119)

Gets the max bounds of the lattice

##### Returns

[`Vector3`](Vector3.md)

***

### min

#### Get Signature

> **get** **min**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/lattice.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/lattice.ts#L112)

Gets the min bounds of the lattice

##### Returns

[`Vector3`](Vector3.md)

***

### position

#### Get Signature

> **get** **position**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/lattice.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/lattice.ts#L91)

Gets the lattice position in object space

##### Returns

[`Vector3`](Vector3.md)

***

### resolutionX

#### Get Signature

> **get** **resolutionX**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/lattice.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/lattice.ts#L62)

Gets the resolution on x axis

##### Returns

`number`

***

### resolutionY

#### Get Signature

> **get** **resolutionY**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/lattice.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/lattice.ts#L69)

Gets the resolution on y axis

##### Returns

`number`

***

### resolutionZ

#### Get Signature

> **get** **resolutionZ**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/lattice.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/lattice.ts#L76)

Gets the resolution on z axis

##### Returns

`number`

***

### size

#### Get Signature

> **get** **size**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/lattice.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/lattice.ts#L84)

Gets the size of the lattice along each axis in object space
Updating the size requires you to call update afterwards

##### Returns

[`Vector3`](Vector3.md)

## Methods

### deform()

> **deform**(`positions`, `target?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/lattice.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/lattice.ts#L217)

Apply the lattice to a set of points

#### Parameters

##### positions

[`FloatArray`](../type-aliases/FloatArray.md)

vertex data to deform

##### target?

[`FloatArray`](../type-aliases/FloatArray.md)

optional target array to store the result (operation will be done in place in not defined)

#### Returns

`void`

***

### deformMesh()

> **deformMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/lattice.ts:182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/lattice.ts#L182)

Apply the lattice to a mesh

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

mesh to deform

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/lattice.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/lattice.ts#L55)

#### Returns

`string`

the string "Lattice"

***

### update()

> **update**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/lattice.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/lattice.ts#L164)

Update of the lattice data

#### Returns

`void`

***

### updateInternals()

> **updateInternals**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/lattice.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/lattice.ts#L199)

Update the lattice internals (like min, max and cell size)

#### Returns

`void`
