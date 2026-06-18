[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeGeometry

# Class: NodeGeometry

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L45)

Defines a node based geometry

## See

demo at https://playground.babylonjs.com#PYY6XE#69

## Constructors

### Constructor

> **new NodeGeometry**(`name`): `NodeGeometry`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L130)

Creates a new geometry

#### Parameters

##### name

`string`

defines the name of the geometry

#### Returns

`NodeGeometry`

## Properties

### attachedBlocks

> **attachedBlocks**: [`NodeGeometryBlock`](NodeGeometryBlock.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L99)

Gets an array of blocks that needs to be serialized even if they are not yet connected

***

### comment

> **comment**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L124)

A free comment about the geometry

***

### editorData

> **editorData**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L94)

Gets or sets data used by visual editor

#### See

https://nge.babylonjs.com

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L118)

The name of the geometry

***

### onBuildObservable

> **onBuildObservable**: [`Observable`](Observable.md)\<`NodeGeometry`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L104)

Observable raised when the geometry is built

***

### outputBlock

> **outputBlock**: [`Nullable`](../type-aliases/Nullable.md)\<[`GeometryOutputBlock`](GeometryOutputBlock.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L107)

Gets or sets the GeometryOutputBlock used to gather the final geometry data

***

### snippetId

> **snippetId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L112)

Snippet ID if the material was created from the snippet server

***

### EditorURL

> `static` **EditorURL**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L53)

Define the Url to load node editor script

***

### SnippetUrl

> `static` **SnippetUrl**: `string` = `Constants.SnippetUrl`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L56)

Define the Url to load snippets

## Accessors

### buildExecutionTime

#### Get Signature

> **get** **buildExecutionTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L86)

Gets the time spent to build this block (in ms)

##### Returns

`number`

***

### vertexData

#### Get Signature

> **get** **vertexData**(): [`Nullable`](../type-aliases/Nullable.md)\<[`VertexData`](VertexData.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L146)

Gets the vertex data. This needs to be done after build() was called.
This is used to access vertexData when creating a mesh is not required.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`VertexData`](VertexData.md)\>

## Methods

### build()

> **build**(`verbose?`, `updateBuildId?`, `autoConfigure?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L245)

Build the final geometry. Please note that the geometry MAY not be ready until the onBuildObservable is raised.

#### Parameters

##### verbose?

`boolean` = `false`

defines if the build should log activity

##### updateBuildId?

`boolean` = `true`

defines if the internal build Id should be updated (default is true)

##### autoConfigure?

`boolean` = `false`

defines if the autoConfigure method should be called when initializing blocks (default is false)

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:366](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L366)

Clear the current geometry

#### Returns

`void`

***

### clone()

> **clone**(`name`): `NodeGeometry`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:594](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L594)

Makes a duplicate of the current geometry.

#### Parameters

##### name

`string`

defines the name to use for the new geometry

#### Returns

`NodeGeometry`

the new geometry

***

### createMesh()

> **createMesh**(`name`, `scene?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:301](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L301)

Creates a mesh from the geometry blocks

#### Parameters

##### name

`string`

defines the name of the mesh

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\> = `null`

The scene the mesh is scoped to

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

The new mesh

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:649](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L649)

Disposes the resources

#### Returns

`void`

***

### edit()

> **edit**(`config?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L207)

Launch the node geometry editor

#### Parameters

##### config?

[`INodeGeometryEditorOptions`](../interfaces/INodeGeometryEditorOptions.md)

Define the configuration of the editor

#### Returns

`Promise`\<`void`\>

a promise fulfilled when the node editor is visible

***

### generateCode()

> **generateCode**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:513](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L513)

Generate a string containing the code declaration required to create an equivalent of this geometry

#### Returns

`string`

a string

***

### getBlockByName()

> **getBlockByName**(`name`): [`NodeGeometryBlock`](NodeGeometryBlock.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L155)

Get a block by its name

#### Parameters

##### name

`string`

defines the name of the block to retrieve

#### Returns

[`NodeGeometryBlock`](NodeGeometryBlock.md) \| `null`

the required block or null if not found

***

### getBlockByPredicate()

> **getBlockByPredicate**(`predicate`): [`NodeGeometryBlock`](NodeGeometryBlock.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L176)

Get a block using a predicate

#### Parameters

##### predicate

(`block`) => `boolean`

defines the predicate used to find the good candidate

#### Returns

[`NodeGeometryBlock`](NodeGeometryBlock.md) \| `null`

the required block or null if not found

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L138)

Gets the current class name of the geometry e.g. "NodeGeometry"

#### Returns

`string`

the class name

***

### getInputBlocks()

> **getInputBlocks**(): [`GeometryInputBlock`](GeometryInputBlock.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L190)

Gets the list of input blocks attached to this material

#### Returns

[`GeometryInputBlock`](GeometryInputBlock.md)[]

an array of InputBlocks

***

### parseSerializedObject()

> **parseSerializedObject**(`source`, `merge?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:391](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L391)

Clear the current graph and load a new one from a serialization object

#### Parameters

##### source

`any`

defines the JSON representation of the geometry

##### merge?

`boolean` = `false`

defines whether or not the source must be merged or replace the current content

#### Returns

`void`

***

### removeBlock()

> **removeBlock**(`block`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L375)

Remove a block from the current geometry

#### Parameters

##### block

[`NodeGeometryBlock`](NodeGeometryBlock.md)

defines the block to remove

#### Returns

`void`

***

### serialize()

> **serialize**(`selectedBlocks?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:612](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L612)

Serializes this geometry in a JSON representation

#### Parameters

##### selectedBlocks?

[`NodeGeometryBlock`](NodeGeometryBlock.md)[]

defines the list of blocks to save (if null the whole geometry will be saved)

#### Returns

`any`

the serialized geometry object

***

### setToDefault()

> **setToDefault**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:573](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L573)

Clear the current geometry and set it to a default state

#### Returns

`void`

***

### updateMesh()

> **updateMesh**(`mesh`): `false` \| [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:324](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L324)

Creates a mesh from the geometry blocks

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

the mesh to update

#### Returns

`false` \| [`Mesh`](Mesh.md)

True if successfully updated

***

### CreateDefault()

> `static` **CreateDefault**(`name`): `NodeGeometry`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:663](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L663)

Creates a new node geometry set to default basic configuration

#### Parameters

##### name

`string`

defines the name of the geometry

#### Returns

`NodeGeometry`

a new NodeGeometry

***

### Parse()

> `static` **Parse**(`source`): `NodeGeometry`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:677](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L677)

Creates a node geometry from parsed geometry data

#### Parameters

##### source

`any`

defines the JSON representation of the geometry

#### Returns

`NodeGeometry`

a new node geometry

***

### ParseFromSnippetAsync()

> `static` **ParseFromSnippetAsync**(`snippetId`, `nodeGeometry?`, `skipBuild?`): `Promise`\<`NodeGeometry`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometry.ts:694](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometry.ts#L694)

Creates a node geometry from a snippet saved by the node geometry editor

#### Parameters

##### snippetId

`string`

defines the snippet to load

##### nodeGeometry?

`NodeGeometry`

defines a node geometry to update (instead of creating a new one)

##### skipBuild?

`boolean` = `false`

defines whether to build the node geometry

#### Returns

`Promise`\<`NodeGeometry`\>

a promise that will resolve to the new node geometry
