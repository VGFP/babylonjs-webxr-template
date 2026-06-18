[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeRenderGraph

# Class: NodeRenderGraph

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L42)

Defines a node render graph

## Constructors

### Constructor

> **new NodeRenderGraph**(`name`, `scene`, `options?`): `NodeRenderGraph`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L164)

Creates a new node render graph

#### Parameters

##### name

`string`

defines the name of the node render graph

##### scene

[`Scene`](Scene.md)

defines the scene to use to execute the graph

##### options?

[`INodeRenderGraphCreateOptions`](../interfaces/INodeRenderGraphCreateOptions.md)

defines the options to use when creating the graph

#### Returns

`NodeRenderGraph`

## Properties

### attachedBlocks

> **attachedBlocks**: [`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L90)

Gets an array of blocks that needs to be serialized even if they are not yet connected

***

### comment

> **comment**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L128)

A free comment about the graph

***

### editorData

> **editorData**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L85)

Gets or sets data used by visual editor

#### See

https://nrge.babylonjs.com

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L122)

The name of the node render graph

***

### onBeforeBuildObservable

> **onBeforeBuildObservable**: [`Observable`](Observable.md)\<[`FrameGraph`](FrameGraph.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L95)

Observable raised before the node render graph is built

***

### onBuildErrorObservable

> **onBuildErrorObservable**: [`Observable`](Observable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L108)

Observable raised when an error is detected

***

### outputBlock

> **outputBlock**: [`Nullable`](../type-aliases/Nullable.md)\<[`NodeRenderGraphOutputBlock`](NodeRenderGraphOutputBlock.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L111)

Gets or sets the RenderGraphOutputBlock used to gather the final node render graph data

***

### snippetId

> **snippetId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L116)

Snippet ID if the graph was created from the snippet server

***

### CustomBlockDescriptions

> `static` **CustomBlockDescriptions**: [`INodeRenderGraphCustomBlockDescription`](../interfaces/INodeRenderGraphCustomBlockDescription.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L54)

Description of custom blocks to use in the node render graph editor

***

### EditorURL

> `static` **EditorURL**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L48)

Define the Url to load node editor script

***

### SnippetUrl

> `static` **SnippetUrl**: `string` = `Constants.SnippetUrl`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L51)

Define the Url to load snippets

## Accessors

### frameGraph

#### Get Signature

> **get** **frameGraph**(): [`FrameGraph`](FrameGraph.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L139)

Gets the frame graph used by this node render graph

##### Returns

[`FrameGraph`](FrameGraph.md)

***

### onBuildObservable

#### Get Signature

> **get** **onBuildObservable**(): [`Observable`](Observable.md)\<[`FrameGraph`](FrameGraph.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L101)

Observable raised after the node render graph is built
Note that this is the same observable as the one in the underlying FrameGraph!

##### Returns

[`Observable`](Observable.md)\<[`FrameGraph`](FrameGraph.md)\>

***

### options

#### Get Signature

> **get** **options**(): [`Immutable`](../type-aliases/Immutable.md)\<[`INodeRenderGraphCreateOptions`](../interfaces/INodeRenderGraphCreateOptions.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:154](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L154)

Gets the options used to create this node render graph

##### Returns

[`Immutable`](../type-aliases/Immutable.md)\<[`INodeRenderGraphCreateOptions`](../interfaces/INodeRenderGraphCreateOptions.md)\>

## Methods

### buildAsync()

> **buildAsync**(`dontBuildFrameGraph?`, `waitForReadiness?`, `setAsSceneFrameGraph?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:352](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L352)

Build the final list of blocks that will be executed by the "execute" method.
It also builds the underlying frame graph unless specified otherwise.

#### Parameters

##### dontBuildFrameGraph?

`boolean` = `false`

If the underlying frame graph should not be built (default: false)

##### waitForReadiness?

`boolean` = `true`

If the method should wait for the frame graph to be ready before resolving (default: true). Note that this parameter has no effect if "dontBuildFrameGraph" is true.

##### setAsSceneFrameGraph?

`boolean` = `true`

If the built frame graph must be set as the scene's frame graph (default: true)

#### Returns

`Promise`\<`void`\>

***

### clear()

> **clear**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:478](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L478)

Clear the current graph

#### Returns

`void`

***

### clone()

> **clone**(`name`): `NodeRenderGraph`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:738](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L738)

Makes a duplicate of the current node render graph.
Note that you should call buildAsync() on the returned graph to make it usable.

#### Parameters

##### name

`string`

defines the name to use for the new node render graph

#### Returns

`NodeRenderGraph`

the new node render graph

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:792](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L792)

Disposes the resources

#### Returns

`void`

***

### edit()

> **edit**(`config?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:312](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L312)

Launch the node render graph editor

#### Parameters

##### config?

[`INodeRenderGraphEditorOptions`](../interfaces/INodeRenderGraphEditorOptions.md)

Define the configuration of the editor

#### Returns

`Promise`\<`void`\>

a promise fulfilled when the node editor is visible

***

### execute()

> **execute**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:450](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L450)

Execute the graph (the graph must have been built before!)

#### Returns

`void`

***

### generateCode()

> **generateCode**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:628](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L628)

Generate a string containing the code declaration required to create an equivalent of this node render graph

#### Returns

`string`

a string

***

### getBlockByName()

> **getBlockByName**\<`T`\>(`name`): [`Nullable`](../type-aliases/Nullable.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:203](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L203)

Gets a block by its name

#### Type Parameters

##### T

`T` *extends* [`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)

#### Parameters

##### name

`string`

defines the name of the block to retrieve

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`T`\>

the required block or null if not found

***

### getBlockByPredicate()

> **getBlockByPredicate**\<`T`\>(`predicate`): [`Nullable`](../type-aliases/Nullable.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:224](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L224)

Get a block using a predicate

#### Type Parameters

##### T

`T` *extends* [`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)

#### Parameters

##### predicate

(`block`) => `boolean`

defines the predicate used to find the good candidate

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`T`\>

the required block or null if not found

***

### getBlocksByPredicate()

> **getBlocksByPredicate**\<`T`\>(`predicate`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L239)

Get all blocks that match a predicate

#### Type Parameters

##### T

`T` *extends* [`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)

#### Parameters

##### predicate

(`block`) => `boolean`

defines the predicate used to find the good candidate(s)

#### Returns

`T`[]

the list of blocks found

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L194)

Gets the current class name ("NodeRenderGraph")

#### Returns

`string`

the class name

***

### getInputBlocks()

> **getInputBlocks**(): [`NodeRenderGraphInputBlock`](NodeRenderGraphInputBlock.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L254)

Gets the list of input blocks attached to this material

#### Returns

[`NodeRenderGraphInputBlock`](NodeRenderGraphInputBlock.md)[]

an array of InputBlocks

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L147)

Gets the scene used by this node render graph

#### Returns

[`Scene`](Scene.md)

the scene used by this node render graph

***

### parseSerializedObject()

> **parseSerializedObject**(`source`, `merge?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:503](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L503)

Clear the current graph and load a new one from a serialization object

#### Parameters

##### source

`any`

defines the JSON representation of the graph

##### merge?

`boolean` = `false`

defines whether or not the source must be merged or replace the current content

#### Returns

`void`

***

### removeBlock()

> **removeBlock**(`block`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:487](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L487)

Remove a block from the current graph

#### Parameters

##### block

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)

defines the block to remove

#### Returns

`void`

***

### replaceCameraAsync()

> **replaceCameraAsync**(`currentCamera`, `newCamera`, `updateCameraToUseForPointers?`, `rebuildGraph?`): `Promise`\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:275](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L275)

Replaces a camera in all camera input blocks of this node render graph.
If the current camera is found in any input block, it is replaced by the new camera,
optionally updating the scene's pointer camera and rebuilding the graph.

#### Parameters

##### currentCamera

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

The camera to replace.

##### newCamera

[`Camera`](Camera.md)

The new camera to assign to the matching input blocks.

##### updateCameraToUseForPointers?

`boolean` = `true`

If true (default), updates `scene.cameraToUseForPointers` to the new camera when a replacement occurs.

##### rebuildGraph?

`boolean` = `true`

If true (default), rebuilds the graph asynchronously after the replacement.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to true if at least one input block was updated, false otherwise.

***

### serialize()

> **serialize**(`selectedBlocks?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:755](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L755)

Serializes this node render graph in a JSON representation

#### Parameters

##### selectedBlocks?

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)[]

defines the list of blocks to save (if null the whole node render graph will be saved)

#### Returns

`any`

the serialized node render graph object

***

### setToDefault()

> **setToDefault**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:689](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L689)

Clear the current graph and set it to a default state

#### Returns

`void`

***

### whenReadyAsync()

> **whenReadyAsync**(`timeStep?`, `maxTimeout?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:441](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L441)

Returns a promise that resolves when the node render graph is ready to be executed
This method must be called after the graph has been built (NodeRenderGraph.build called)!

#### Parameters

##### timeStep?

`number` = `16`

Time step in ms between retries (default is 16)

##### maxTimeout?

`number` = `10000`

Maximum time in ms to wait for the graph to be ready (default is 10000)

#### Returns

`Promise`\<`void`\>

The promise that resolves when the graph is ready

***

### CreateDefaultAsync()

> `static` **CreateDefaultAsync**(`name`, `scene`, `nodeRenderGraphOptions?`): `Promise`\<`NodeRenderGraph`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:814](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L814)

Creates a new node render graph set to default basic configuration

#### Parameters

##### name

`string`

defines the name of the node render graph

##### scene

[`Scene`](Scene.md)

defines the scene to use

##### nodeRenderGraphOptions?

[`INodeRenderGraphCreateOptions`](../interfaces/INodeRenderGraphCreateOptions.md)

defines options to use when creating the node render graph

#### Returns

`Promise`\<`NodeRenderGraph`\>

a new NodeRenderGraph

***

### Parse()

> `static` **Parse**(`source`, `scene`, `nodeRenderGraphOptions?`, `skipBuild?`): `NodeRenderGraph`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:831](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L831)

Creates a node render graph from parsed graph data

#### Parameters

##### source

`any`

defines the JSON representation of the node render graph

##### scene

[`Scene`](Scene.md)

defines the scene to use

##### nodeRenderGraphOptions?

[`INodeRenderGraphCreateOptions`](../interfaces/INodeRenderGraphCreateOptions.md)

defines options to use when creating the node render

##### skipBuild?

`boolean` = `true`

defines whether to skip building the node render graph (default is true)

#### Returns

`NodeRenderGraph`

a new node render graph

***

### ParseFromSnippetAsync()

> `static` **ParseFromSnippetAsync**(`snippetId`, `scene`, `nodeRenderGraphOptions?`, `nodeRenderGraph?`, `skipBuild?`): `Promise`\<`NodeRenderGraph`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts:852](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraph.ts#L852)

Creates a node render graph from a snippet saved by the node render graph editor

#### Parameters

##### snippetId

`string`

defines the snippet to load

##### scene

[`Scene`](Scene.md)

defines the scene to use

##### nodeRenderGraphOptions?

[`INodeRenderGraphCreateOptions`](../interfaces/INodeRenderGraphCreateOptions.md)

defines options to use when creating the node render graph

##### nodeRenderGraph?

`NodeRenderGraph`

defines a node render graph to update (instead of creating a new one)

##### skipBuild?

`boolean` = `true`

defines whether to skip building the node render graph (default is true)

#### Returns

`Promise`\<`NodeRenderGraph`\>

a promise that will resolve to the new node render graph
