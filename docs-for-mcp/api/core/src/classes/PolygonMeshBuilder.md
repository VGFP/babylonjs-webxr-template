[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PolygonMeshBuilder

# Class: PolygonMeshBuilder

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/polygonMesh.ts:149](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/polygonMesh.ts#L149)

Builds a polygon

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param/polyMeshBuilder

## Constructors

### Constructor

> **new PolygonMeshBuilder**(`name`, `contours`, `scene?`, `earcutInjection?`): `PolygonMeshBuilder`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/polygonMesh.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/polygonMesh.ts#L178)

Creates a PolygonMeshBuilder

#### Parameters

##### name

`string`

name of the builder

##### contours

`any`

Path of the polygon

##### scene?

[`Scene`](Scene.md)

scene to add to when creating the mesh

##### earcutInjection?

`any` = `earcut`

can be used to inject your own earcut reference

#### Returns

`PolygonMeshBuilder`

## Properties

### bjsEarcut

> **bjsEarcut**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/polygonMesh.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/polygonMesh.ts#L169)

Babylon reference to the earcut plugin.

## Methods

### addHole()

> **addHole**(`hole`): `PolygonMeshBuilder`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/polygonMesh.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/polygonMesh.ts#L205)

Adds a hole within the polygon

#### Parameters

##### hole

[`Vector2`](Vector2.md)[]

Array of points defining the hole

#### Returns

`PolygonMeshBuilder`

this

***

### build()

> **build**(`updatable?`, `depth?`, `smoothingThreshold?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/polygonMesh.ts:224](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/polygonMesh.ts#L224)

Creates the polygon

#### Parameters

##### updatable?

`boolean` = `false`

If the mesh should be updatable

##### depth?

`number` = `0`

The depth of the mesh created

##### smoothingThreshold?

`number` = `2`

Dot product threshold for smoothed normals

#### Returns

[`Mesh`](Mesh.md)

the created mesh

***

### buildVertexData()

> **buildVertexData**(`depth?`, `smoothingThreshold?`): [`VertexData`](VertexData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/polygonMesh.ts:243](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/polygonMesh.ts#L243)

Creates the polygon

#### Parameters

##### depth?

`number` = `0`

The depth of the mesh created

##### smoothingThreshold?

`number` = `2`

Dot product threshold for smoothed normals

#### Returns

[`VertexData`](VertexData.md)

the created VertexData
