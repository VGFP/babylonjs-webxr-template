[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CSG2

# Class: CSG2

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/csg2.ts#L105)

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

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/csg2.ts#L113)

Return the size of a vertex (at least 3 for the position)

##### Returns

`number`

## Methods

### add()

> **add**(`csg`): `CSG2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/csg2.ts#L153)

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

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:282](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/csg2.ts#L282)

Dispose the CSG resources

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### intersect()

> **intersect**(`csg`): `CSG2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/csg2.ts#L144)

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

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/csg2.ts#L160)

Print debug information about the CSG

#### Returns

`void`

***

### subtract()

> **subtract**(`csg`): `CSG2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/csg2.ts#L135)

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

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/csg2.ts#L216)

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

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/csg2.ts#L171)

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

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:417](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/csg2.ts#L417)

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

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg2.ts:400](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/csg2.ts#L400)

Create a new Constructive Solid Geometry from a vertexData

#### Parameters

##### vertexData

[`VertexData`](VertexData.md)

defines the vertexData to use to create the CSG

#### Returns

`CSG2`

a new CSG2 class
