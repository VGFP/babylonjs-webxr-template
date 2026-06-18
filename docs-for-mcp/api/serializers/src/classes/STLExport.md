[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / STLExport

# Class: STLExport

Defined in: [babylonjs-source/packages/dev/serializers/src/stl/stlSerializer.ts:9](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/stl/stlSerializer.ts#L9)

Class for generating STL data from a Babylon scene.

## Constructors

### Constructor

> **new STLExport**(): `STLExport`

#### Returns

`STLExport`

## Methods

### CreateSTL()

> `static` **CreateSTL**(`meshes`, `download?`, `fileName?`, `binary?`, `isLittleEndian?`, `doNotBakeTransform?`, `supportInstancedMeshes?`, `exportIndividualMeshes?`): `any`

Defined in: [babylonjs-source/packages/dev/serializers/src/stl/stlSerializer.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/stl/stlSerializer.ts#L22)

Exports the geometry of a Mesh array in .STL file format (ASCII)

#### Parameters

##### meshes

([`Mesh`](../../../core/src/classes/Mesh.md) \| [`InstancedMesh`](../../../core/src/classes/InstancedMesh.md))[]

list defines the mesh to serialize

##### download?

`boolean` = `true`

triggers the automatic download of the file.

##### fileName?

`string` = `"stlmesh"`

changes the downloads fileName.

##### binary?

`boolean` = `false`

changes the STL to a binary type.

##### isLittleEndian?

`boolean` = `true`

toggle for binary type exporter.

##### doNotBakeTransform?

`boolean` = `false`

toggle if meshes transforms should be baked or not.

##### supportInstancedMeshes?

`boolean` = `false`

toggle to export instanced Meshes. Enabling support for instanced meshes will override doNoBakeTransform as true

##### exportIndividualMeshes?

`boolean` = `false`

toggle to export each mesh as an independent mesh. By default, all the meshes are combined into one mesh. This property has no effect when exporting in binary format

#### Returns

`any`

the STL as UTF8 string
