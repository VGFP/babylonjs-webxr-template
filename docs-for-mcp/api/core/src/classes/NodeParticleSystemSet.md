[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeParticleSystemSet

# Class: NodeParticleSystemSet

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L49)

Defines a set of particle systems defined as a node graph.
NPE: #K6F1ZB#1
PG: #ZT509U#1

## Constructors

### Constructor

> **new NodeParticleSystemSet**(`name`): `NodeParticleSystemSet`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L168)

Creates a new set

#### Parameters

##### name

`string`

defines the name of the set

#### Returns

`NodeParticleSystemSet`

## Properties

### attachedBlocks

> **attachedBlocks**: [`NodeParticleBlock`](NodeParticleBlock.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L67)

Gets an array of blocks that needs to be serialized even if they are not yet connected

***

### comment

> **comment**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L90)

A free comment about the set

***

### editorData

> **editorData**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L73)

Gets or sets data used by visual editor

#### See

https://npe.babylonjs.com

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L84)

The name of the set

***

### onBuildObservable

> **onBuildObservable**: [`Observable`](Observable.md)\<`NodeParticleSystemSet`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L78)

Observable raised when the particle set is built

***

### snippetId

> **snippetId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L62)

Snippet ID if the material was created from the snippet server

***

### EditorURL

> `static` **EditorURL**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L54)

Define the Url to load node editor script

***

### SnippetUrl

> `static` **SnippetUrl**: `string` = `Constants.SnippetUrl`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L57)

Define the Url to load snippets

## Accessors

### inputBlocks

#### Get Signature

> **get** **inputBlocks**(): [`ParticleInputBlock`](ParticleInputBlock.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L103)

Gets the list of input blocks attached to this material

##### Returns

[`ParticleInputBlock`](ParticleInputBlock.md)[]

an array of InputBlocks

***

### systemBlocks

#### Get Signature

> **get** **systemBlocks**(): [`SystemBlock`](SystemBlock.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L95)

Gets the system blocks

##### Returns

[`SystemBlock`](SystemBlock.md)[]

## Methods

### buildAsync()

> **buildAsync**(`scene`, `verbose?`): `Promise`\<[`ParticleSystemSet`](ParticleSystemSet.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:265](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L265)

Builds the particle system set from the defined blocks.

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### verbose?

`boolean` = `false`

defines whether to log detailed information during the build process (false by default)

#### Returns

`Promise`\<[`ParticleSystemSet`](ParticleSystemSet.md)\>

a promise that resolves to the built particle system set

***

### clear()

> **clear**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:303](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L303)

Clear the current node particle set

#### Returns

`void`

***

### clone()

> **clone**(`name`): `NodeParticleSystemSet`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:533](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L533)

Makes a duplicate of the current particle system set.

#### Parameters

##### name

`string`

defines the name to use for the new particle system set

#### Returns

`NodeParticleSystemSet`

the cloned particle system set

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:549](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L549)

Disposes the resources

#### Returns

`void`

***

### editAsync()

> **editAsync**(`config?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:239](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L239)

Launch the node particle editor

#### Parameters

##### config?

[`INodeParticleEditorOptions`](../interfaces/INodeParticleEditorOptions.md)

Define the configuration of the editor

#### Returns

`Promise`\<`void`\>

a promise fulfilled when the node editor is visible

***

### getBlockByName()

> **getBlockByName**(`name`): [`NodeParticleBlock`](NodeParticleBlock.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L119)

Get a block by its name

#### Parameters

##### name

`string`

defines the name of the block to retrieve

#### Returns

[`NodeParticleBlock`](NodeParticleBlock.md) \| `null`

the required block or null if not found

***

### getBlockByPredicate()

> **getBlockByPredicate**(`predicate`): [`NodeParticleBlock`](NodeParticleBlock.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L140)

Get a block using a predicate

#### Parameters

##### predicate

(`block`) => `boolean`

defines the predicate used to find the good candidate

#### Returns

[`NodeParticleBlock`](NodeParticleBlock.md) \| `null`

the required block or null if not found

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L176)

Gets the current class name of the node particle set e.g. "NodeParticleSystemSet"

#### Returns

`string`

the class name

***

### getInputBlockByPredicate()

> **getInputBlockByPredicate**(`predicate`): [`Nullable`](../type-aliases/Nullable.md)\<[`ParticleInputBlock`](ParticleInputBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L155)

Get an input block using a predicate

#### Parameters

##### predicate

(`block`) => `boolean`

defines the predicate used to find the good candidate

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ParticleInputBlock`](ParticleInputBlock.md)\>

the required input block or null if not found

***

### parseSerializedObject()

> **parseSerializedObject**(`source`, `merge?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L375)

Clear the current graph and load a new one from a serialization object

#### Parameters

##### source

`any`

defines the JSON representation of the particle set

##### merge?

`boolean` = `false`

defines whether or not the source must be merged or replace the current content

#### Returns

`void`

***

### removeBlock()

> **removeBlock**(`block`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:356](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L356)

Remove a block from the current system set

#### Parameters

##### block

[`NodeParticleBlock`](NodeParticleBlock.md)

defines the block to remove

#### Returns

`void`

***

### serialize()

> **serialize**(`selectedBlocks?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:497](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L497)

Serializes this node particle set in a JSON representation

#### Parameters

##### selectedBlocks?

[`NodeParticleBlock`](NodeParticleBlock.md)[]

defines the list of blocks to save (if null the whole node particle set will be saved)

#### Returns

`any`

the serialized particle system set object

***

### setToDefault()

> **setToDefault**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:311](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L311)

Clear the current set and restore it to a default state

#### Returns

`void`

***

### CreateDefault()

> `static` **CreateDefault**(`name`): `NodeParticleSystemSet`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:563](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L563)

Creates a new node particle set set to default basic configuration

#### Parameters

##### name

`string`

defines the name of the particle set

#### Returns

`NodeParticleSystemSet`

a new NodeParticleSystemSet

***

### Parse()

> `static` **Parse**(`source`): `NodeParticleSystemSet`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:576](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L576)

Creates a node particle set from parsed data

#### Parameters

##### source

`any`

defines the JSON representation of the particle set

#### Returns

`NodeParticleSystemSet`

a new node particle set

***

### ParseFromFileAsync()

> `static` **ParseFromFileAsync**(`name`, `url`, `nodeParticleSet?`): `Promise`\<`NodeParticleSystemSet`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:592](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L592)

Creates a node particle set from a snippet saved in a remote file

#### Parameters

##### name

`string`

defines the name of the node particle set to create

##### url

`string`

defines the url to load from

##### nodeParticleSet?

`NodeParticleSystemSet`

defines a node particle set to update (instead of creating a new one)

#### Returns

`Promise`\<`NodeParticleSystemSet`\>

a promise that will resolve to the new node particle set

***

### ParseFromSnippetAsync()

> `static` **ParseFromSnippetAsync**(`snippetId`, `nodeParticleSet?`): `Promise`\<`NodeParticleSystemSet`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:625](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L625)

Creates a node particle set from a snippet saved by the node particle editor

#### Parameters

##### snippetId

`string`

defines the snippet to load

##### nodeParticleSet?

`NodeParticleSystemSet`

defines a node particle set to update (instead of creating a new one)

#### Returns

`Promise`\<`NodeParticleSystemSet`\>

a promise that will resolve to the new node particle set
