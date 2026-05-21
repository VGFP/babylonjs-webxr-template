[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphCullObjectsTask

# Class: FrameGraphCullObjectsTask

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/cullObjectsTask.ts:7](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/cullObjectsTask.ts#L7)

Task used to cull objects that are not visible.

## Extends

- [`FrameGraphTask`](FrameGraphTask.md)

## Constructors

### Constructor

> **new FrameGraphCullObjectsTask**(`name`, `frameGraph`, `scene`): `FrameGraphCullObjectsTask`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/cullObjectsTask.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/cullObjectsTask.ts#L31)

Creates a new cull objects task.

#### Parameters

##### name

`string`

The name of the task.

##### frameGraph

[`FrameGraph`](FrameGraph.md)

The frame graph the task belongs to.

##### scene

[`Scene`](Scene.md)

The scene to cull objects from.

#### Returns

`FrameGraphCullObjectsTask`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`constructor`](FrameGraphTask.md#constructor)

## Properties

### camera

> **camera**: [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/cullObjectsTask.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/cullObjectsTask.ts#L16)

The camera to use for culling.

***

### dependencies?

> `optional` **dependencies?**: `Set`\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L68)

The (texture) dependencies of the task (optional).

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`dependencies`](FrameGraphTask.md#dependencies)

***

### objectList

> **objectList**: [`FrameGraphObjectList`](FrameGraphObjectList.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/cullObjectsTask.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/cullObjectsTask.ts#L11)

The object list to cull.

***

### onAfterTaskExecute

> **onAfterTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L107)

An observable that is triggered after the task is executed.

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`onAfterTaskExecute`](FrameGraphTask.md#onaftertaskexecute)

***

### onBeforeTaskExecute

> **onBeforeTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L102)

An observable that is triggered before the task is executed.

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`onBeforeTaskExecute`](FrameGraphTask.md#onbeforetaskexecute)

***

### onTexturesAllocatedObservable

> **onTexturesAllocatedObservable**: [`Observable`](Observable.md)\<[`FrameGraphRenderContext`](FrameGraphRenderContext.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L97)

An observable that is triggered after the textures have been allocated.

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`onTexturesAllocatedObservable`](FrameGraphTask.md#ontexturesallocatedobservable)

***

### outputObjectList

> `readonly` **outputObjectList**: [`FrameGraphObjectList`](FrameGraphObjectList.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/cullObjectsTask.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/cullObjectsTask.ts#L21)

The output object list containing the culled objects.

## Accessors

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L43)

Whether the task is disabled.

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L47)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`disabled`](FrameGraphTask.md#disabled)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L30)

The name of the task.

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L34)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`name`](FrameGraphTask.md#name)

***

### passes

#### Get Signature

> **get** **passes**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L54)

Gets the passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`passes`](FrameGraphTask.md#passes)

***

### passesDisabled

#### Get Signature

> **get** **passesDisabled**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L61)

Gets the disabled passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`passesDisabled`](FrameGraphTask.md#passesdisabled)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L120)

Disposes of the task.

#### Returns

`void`

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`dispose`](FrameGraphTask.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/cullObjectsTask.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/cullObjectsTask.ts#L40)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`getClassName`](FrameGraphTask.md#getclassname)

***

### initAsync()

> **initAsync**(): `Promise`\<`unknown`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L90)

This function is called once after the task has been added to the frame graph and before the frame graph is built for the first time.
This allows you to initialize asynchronous resources, which is not possible in the constructor.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the initialization is complete.

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`initAsync`](FrameGraphTask.md#initasync)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L113)

Checks if the task is ready to be executed.

#### Returns

`boolean`

True if the task is ready to be executed, else false.

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`isReady`](FrameGraphTask.md#isready)

***

### record()

> **record**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Misc/cullObjectsTask.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Misc/cullObjectsTask.ts#L44)

Records the task in the frame graph. Use this function to add content (render passes, ...) to the task.

#### Returns

`void`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`record`](FrameGraphTask.md#record)
