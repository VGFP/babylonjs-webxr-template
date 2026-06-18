[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CSG

# ~~Class: CSG~~

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:433](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L433)

Class for building Constructive Solid Geometry

## Deprecated

Please use CSG2 instead

## Constructors

### Constructor

> **new CSG**(): `CSG`

#### Returns

`CSG`

## Properties

### ~~matrix~~

> **matrix**: [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:438](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L438)

The world matrix

***

### ~~position~~

> **position**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:442](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L442)

Stores the position

***

### ~~rotation~~

> **rotation**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:446](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L446)

Stores the rotation

***

### ~~rotationQuaternion~~

> **rotationQuaternion**: [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:450](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L450)

Stores the rotation quaternion

***

### ~~scaling~~

> **scaling**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:454](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L454)

Stores the scaling vector

## Methods

### ~~buildMeshGeometry()~~

> **buildMeshGeometry**(`name`, `scene?`, `keepSubMeshes?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:917](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L917)

Build Raw mesh from CSG
Coordinates here are in world space

#### Parameters

##### name

`string`

The name of the mesh geometry

##### scene?

[`Scene`](Scene.md)

The Scene

##### keepSubMeshes?

`boolean`

Specifies if the submeshes should be kept

#### Returns

[`Mesh`](Mesh.md)

A new Mesh

***

### ~~clone()~~

> **clone**(): `CSG`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:631](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L631)

Clones, or makes a deep copy, of the CSG

#### Returns

`CSG`

A new CSG

***

### ~~copyTransformAttributes()~~

> **copyTransformAttributes**(`csg`): `CSG`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:776](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L776)

This is used to keep meshes transformations so they can be restored
when we build back a Babylon Mesh
NB : All CSG operations are performed in world coordinates

#### Parameters

##### csg

`CSG`

The CSG to copy the transform attributes from

#### Returns

`CSG`

This CSG

***

### ~~intersect()~~

> **intersect**(`csg`): `CSG`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:717](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L717)

Intersect this CSG with another CSG

#### Parameters

##### csg

`CSG`

The CSG to intersect against this CSG

#### Returns

`CSG`

A new CSG

***

### ~~intersectInPlace()~~

> **intersectInPlace**(`csg`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:734](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L734)

Intersects this CSG with another CSG in place

#### Parameters

##### csg

`CSG`

The CSG to intersect against this CSG

#### Returns

`void`

***

### ~~inverse()~~

> **inverse**(): `CSG`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:754](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L754)

Return a new CSG solid with solid and empty space switched. This solid is
not modified.

#### Returns

`CSG`

A new CSG solid with solid and empty space switched

***

### ~~inverseInPlace()~~

> **inverseInPlace**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:763](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L763)

Inverses the CSG in place

#### Returns

`void`

***

### ~~subtract()~~

> **subtract**(`csg`): `CSG`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:678](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L678)

Subtracts this CSG with another CSG

#### Parameters

##### csg

`CSG`

The CSG to subtract against this CSG

#### Returns

`CSG`

A new CSG

***

### ~~subtractInPlace()~~

> **subtractInPlace**(`csg`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:696](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L696)

Subtracts this CSG with another CSG in place

#### Parameters

##### csg

`CSG`

The CSG to subtract against this CSG

#### Returns

`void`

***

### ~~toMesh()~~

> **toMesh**(`name`, `material?`, `scene?`, `keepSubMeshes?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:997](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L997)

Build Mesh from CSG taking material and transforms into account

#### Parameters

##### name

`string`

The name of the Mesh

##### material?

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\> = `null`

The material of the Mesh

##### scene?

[`Scene`](Scene.md)

The Scene

##### keepSubMeshes?

`boolean`

Specifies if submeshes should be kept

#### Returns

[`Mesh`](Mesh.md)

The new Mesh

***

### ~~toVertexData()~~

> **toVertexData**(`onBeforePolygonProcessing?`, `onAfterPolygonProcessing?`): [`VertexData`](VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:793](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L793)

Build vertex data from CSG
Coordinates here are in world space

#### Parameters

##### onBeforePolygonProcessing?

[`Nullable`](../type-aliases/Nullable.md)\<(`polygon`) => `void`\> = `null`

called before each polygon is being processed

##### onAfterPolygonProcessing?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

called after each polygon has been processed

#### Returns

[`VertexData`](VertexData.md)

the final vertex data

***

### ~~union()~~

> **union**(`csg`): `CSG`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:643](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L643)

Unions this CSG with another CSG

#### Parameters

##### csg

`CSG`

The CSG to union against this CSG

#### Returns

`CSG`

The unioned CSG

***

### ~~unionInPlace()~~

> **unionInPlace**(`csg`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:659](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L659)

Unions this CSG with another CSG in place

#### Parameters

##### csg

`CSG`

The CSG to union against this CSG

#### Returns

`void`

***

### ~~FromMesh()~~

> `static` **FromMesh**(`mesh`, `absolute?`): `CSG`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:517](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L517)

Convert the Mesh to CSG

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

The Mesh to convert to CSG

##### absolute?

`boolean` = `false`

If true, the final (local) matrix transformation is set to the identity and not to that of `mesh`. It can help when dealing with right-handed meshes (default: false)

#### Returns

`CSG`

A new CSG from the Mesh

***

### ~~FromVertexData()~~

> `static` **FromVertexData**(`data`): `CSG`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/csg.ts:461](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/csg.ts#L461)

Convert a VertexData to CSG

#### Parameters

##### data

[`VertexData`](VertexData.md)

defines the VertexData to convert to CSG

#### Returns

`CSG`

the new CSG
