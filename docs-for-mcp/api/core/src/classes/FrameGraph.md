[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraph

# Class: FrameGraph

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L31)

Class used to implement a frame graph

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new FrameGraph**(`scene`, `debugTextures?`, `_linkedNodeRenderGraph?`): `FrameGraph`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L107)

Constructs the frame graph

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the scene the frame graph is associated with

##### debugTextures?

`boolean` = `false`

defines a boolean indicating that textures created by the frame graph should be visible in the inspector (default is false)

##### \_linkedNodeRenderGraph?

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeRenderGraph`](NodeRenderGraph.md)\> = `null`

defines the linked node render graph (if any)

#### Returns

`FrameGraph`

## Properties

### name

> **name**: `string` = `"Frame Graph"`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L50)

Name of the frame graph

***

### onBuildObservable

> **onBuildObservable**: [`Observable`](Observable.md)\<`FrameGraph`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L65)

Observable raised when the node render graph is built

***

### optimizeTextureAllocation

> **optimizeTextureAllocation**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L60)

Gets or sets a boolean indicating that texture allocation should be optimized (that is, reuse existing textures when possible to limit GPU memory usage) (default: true)

***

### pausedExecution

> **pausedExecution**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L91)

Indicates whether the execution of the frame graph is paused (default is false)

***

### textureManager

> `readonly` **textureManager**: [`FrameGraphTextureManager`](FrameGraphTextureManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L35)

Gets the texture manager used by the frame graph

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L55)

Gets the unique id of the frame graph

## Accessors

### engine

#### Get Signature

> **get** **engine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L70)

Gets the engine used by the frame graph

##### Returns

[`AbstractEngine`](AbstractEngine.md)

***

### scene

#### Get Signature

> **get** **scene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L77)

Gets the scene used by the frame graph

##### Returns

[`Scene`](Scene.md)

***

### tasks

#### Get Signature

> **get** **tasks**(): [`FrameGraphTask`](FrameGraphTask.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L84)

Gets the list of tasks in the frame graph

##### Returns

[`FrameGraphTask`](FrameGraphTask.md)[]

## Methods

### addObjectListPass()

> **addObjectListPass**(`name`, `whenTaskDisabled?`): [`FrameGraphObjectListPass`](FrameGraphObjectListPass.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L211)

Adds an object list pass to a task. This method can only be called during a Task.record execution.

#### Parameters

##### name

`string`

The name of the pass

##### whenTaskDisabled?

`boolean` = `false`

If true, the pass will be added to the list of passes to execute when the task is disabled (default is false)

#### Returns

[`FrameGraphObjectListPass`](FrameGraphObjectListPass.md)

The object list pass created

***

### addPass()

> **addPass**(`name`, `whenTaskDisabled?`): [`FrameGraphPass`](FrameGraphPass.md)\<[`FrameGraphContext`](FrameGraphContext.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L191)

Adds a pass to a task. This method can only be called during a Task.record execution.

#### Parameters

##### name

`string`

The name of the pass

##### whenTaskDisabled?

`boolean` = `false`

If true, the pass will be added to the list of passes to execute when the task is disabled (default is false)

#### Returns

[`FrameGraphPass`](FrameGraphPass.md)\<[`FrameGraphContext`](FrameGraphContext.md)\>

The render pass created

***

### addRenderPass()

> **addRenderPass**(`name`, `whenTaskDisabled?`): [`FrameGraphRenderPass`](FrameGraphRenderPass.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L201)

Adds a render pass to a task. This method can only be called during a Task.record execution.

#### Parameters

##### name

`string`

The name of the pass

##### whenTaskDisabled?

`boolean` = `false`

If true, the pass will be added to the list of passes to execute when the task is disabled (default is false)

#### Returns

[`FrameGraphRenderPass`](FrameGraphRenderPass.md)

The render pass created

***

### addTask()

> **addTask**(`task`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L172)

Adds a task to the frame graph

#### Parameters

##### task

[`FrameGraphTask`](FrameGraphTask.md)

Task to add

#### Returns

`void`

***

### buildAsync()

> **buildAsync**(`waitForReadiness?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:252](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L252)

Builds the frame graph.
This method should be called after all tasks have been added to the frame graph (FrameGraph.addTask) and before the graph is executed (FrameGraph.execute).

#### Parameters

##### waitForReadiness?

`boolean` = `true`

If true, the method will wait for the frame graph to be ready before returning (default is true)

#### Returns

`Promise`\<`void`\>

***

### clear()

> **clear**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:393](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L393)

Clears the frame graph (remove the tasks and release the textures).
The frame graph can be built again after this method is called.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:456](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L456)

Disposes the frame graph

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### execute()

> **execute**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L373)

Executes the frame graph.

#### Returns

`void`

***

### findMainCamera()

> **findMainCamera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:412](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L412)

Looks for the main camera used by the frame graph.
By default, this is the camera used by the main object renderer task.
If no such task, we try to find a camera in a utility layer renderer tasks.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

The main camera used by the frame graph, or null if not found

***

### findMainObjectRenderer()

> **findMainObjectRenderer**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:437](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L437)

Looks for the main object renderer task in the frame graph.
By default, this is the object/geometry renderer task with isMainObjectRenderer set to true.
If no such task, we return the last object/geometry renderer task that has an object list with meshes (or null if none found).

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md)\>

The main object renderer of the frame graph, or null if not found

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L126)

Gets the class name of the frame graph

#### Returns

`string`

the class name

***

### getLinkedNodeRenderGraph()

> **getLinkedNodeRenderGraph**(): [`Nullable`](../type-aliases/Nullable.md)\<[`NodeRenderGraph`](NodeRenderGraph.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L97)

Gets the node render graph linked to the frame graph (if any)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeRenderGraph`](NodeRenderGraph.md)\>

the linked node render graph or null if none

***

### getTaskByName()

> **getTaskByName**\<`T`\>(`name`): `T` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L135)

Gets a task by name

#### Type Parameters

##### T

`T` *extends* [`FrameGraphTask`](FrameGraphTask.md)

#### Parameters

##### name

`string`

Name of the task to get

#### Returns

`T` \| `undefined`

The task or undefined if not found

***

### getTasksByClassName()

> **getTasksByClassName**\<`T`\>(`taskClassName`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L162)

Gets all tasks of a specific type, based on their class name

#### Type Parameters

##### T

`T` *extends* [`FrameGraphTask`](FrameGraphTask.md)

#### Parameters

##### taskClassName

`string` \| `string`[]

Class name(s) of the task(s) to get

#### Returns

`T`[]

The list of tasks of the specified type

***

### getTasksByClassNames()

> **getTasksByClassNames**\<`T`\>(`name`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L144)

Gets all tasks of a specific class name(s)

#### Type Parameters

##### T

`T` *extends* [`FrameGraphTask`](FrameGraphTask.md)

#### Parameters

##### name

`string` \| `string`[]

Class name(s) of the task to get

#### Returns

`T`[]

The list of tasks or an empty array if none found

***

### getTasksByType()

> **getTasksByType**\<`T`\>(`taskType`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L153)

Gets all tasks of a specific type

#### Type Parameters

##### T

`T` *extends* [`FrameGraphTask`](FrameGraphTask.md)

#### Parameters

##### taskType

(...`args`) => `T`

Type of the task(s) to get

#### Returns

`T`[]

The list of tasks of the specified type

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:308](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L308)

Checks if the frame graph is ready to be executed.
Note that you can use the whenReadyAsync method to wait for the frame graph to be ready.

#### Returns

`boolean`

True if the frame graph is ready to be executed, else false

***

### whenReadyAsync()

> **whenReadyAsync**(`timeStep?`, `maxTimeout?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraph.ts:323](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraph.ts#L323)

Returns a promise that resolves when the frame graph is ready to be executed.
In general, calling “await buildAsync()” should suffice, as this function also waits for readiness by default.

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
