[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CSG2

# Class: CSG2

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg2.ts#L106)

Wrapper around the Manifold library
https://manifoldcad.org/
Use this class to perform fast boolean operations on meshes

## See

 - [basic operations](https://playground.babylonjs.com/#IW43EB#15)
 - [skull vs box](https://playground.babylonjs.com/#JUKXQD#6218)
 - [skull vs vertex data](https://playground.babylonjs.com/#JUKXQD#6219)

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Accessors

### numProp

#### Get Signature

> **get** **numProp**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg2.ts#L114)

Return the size of a vertex (at least 3 for the position)

##### Returns

`number`

## Methods

### add()

> **add**(`csg`): `CSG2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:154](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg2.ts#L154)

Run an union operation between two CSG

#### Parameters

##### csg

`CSG2`

defines the CSG to use to create the union

#### Returns

`CSG2`

a new csg

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg2.ts#L283)

Dispose the CSG resources

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### intersect()

> **intersect**(`csg`): `CSG2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg2.ts#L145)

Run an intersection operation between two CSG

#### Parameters

##### csg

`CSG2`

defines the CSG to use to create the intersection

#### Returns

`CSG2`

a new csg

***

### printDebug()

> **printDebug**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg2.ts#L161)

Print debug information about the CSG

#### Returns

`void`

***

### subtract()

> **subtract**(`csg`): `CSG2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg2.ts#L136)

Run a difference operation between two CSG

#### Parameters

##### csg

`CSG2`

defines the CSG to use to create the difference

#### Returns

`CSG2`

a new csg

***

### toMesh()

> **toMesh**(`name`, `scene?`, `options?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg2.ts#L217)

Generate a mesh from the CSG

#### Parameters

##### name

`string`

defines the name of the mesh

##### scene?

[`Scene`](Scene.md)

defines the scene to use to create the mesh

##### options?

`Partial`\<[`IMeshRebuildOptions`](../interfaces/IMeshRebuildOptions.md)\>

defines the options to use to rebuild the mesh

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

***

### toVertexData()

> **toVertexData**(`options?`): [`VertexData`](VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg2.ts#L172)

Generate a vertex data from the CSG

#### Parameters

##### options?

`Partial`\<[`IVertexDataRebuildOptions`](../interfaces/IVertexDataRebuildOptions.md)\>

defines the options to use to rebuild the vertex data

#### Returns

[`VertexData`](VertexData.md)

a new vertex data

***

### FromMesh()

> `static` **FromMesh**(`mesh`, `ignoreWorldMatrix?`): `CSG2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:425](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg2.ts#L425)

Create a new Constructive Solid Geometry from a mesh

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

defines the mesh to use to create the CSG

##### ignoreWorldMatrix?

`boolean` = `false`

defines if the world matrix should be ignored

#### Returns

`CSG2`

a new CSG2 class

***

### FromVertexData()

> `static` **FromVertexData**(`vertexData`): `CSG2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:408](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg2.ts#L408)

Create a new Constructive Solid Geometry from a vertexData

#### Parameters

##### vertexData

[`VertexData`](VertexData.md)

defines the vertexData to use to create the CSG

#### Returns

`CSG2`

a new CSG2 class
