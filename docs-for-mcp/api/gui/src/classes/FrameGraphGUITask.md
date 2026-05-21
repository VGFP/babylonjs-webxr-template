[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / FrameGraphGUITask

# Class: FrameGraphGUITask

Defined in: [babylonjs-source/packages/dev/gui/src/2D/FrameGraph/guiTask.ts:8](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/FrameGraph/guiTask.ts#L8)

Task that renders a GUI texture.

## Extends

- [`FrameGraphTask`](../../../core/src/classes/FrameGraphTask.md)

## Constructors

### Constructor

> **new FrameGraphGUITask**(`name`, `frameGraph`, `adt?`): `FrameGraphGUITask`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/FrameGraph/guiTask.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/FrameGraph/guiTask.ts#L44)

Constructs a new GUI task.

#### Parameters

##### name

`string`

Name of the task

##### frameGraph

[`FrameGraph`](../../../core/src/classes/FrameGraph.md)

Frame graph the task belongs to

##### adt?

[`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

The GUI texture. If not provided, a new fullscreen GUI will be created.

#### Returns

`FrameGraphGUITask`

#### Overrides

[`FrameGraphTask`](../../../core/src/classes/FrameGraphTask.md).[`constructor`](../../../core/src/classes/FrameGraphTask.md#constructor)

## Properties

### dependencies?

> `optional` **dependencies?**: `Set`\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L68)

The (texture) dependencies of the task (optional).

#### Inherited from

[`FrameGraphTask`](../../../core/src/classes/FrameGraphTask.md).[`dependencies`](../../../core/src/classes/FrameGraphTask.md#dependencies)

***

### onAfterTaskExecute

> **onAfterTaskExecute**: [`Observable`](../../../core/src/classes/Observable.md)\<[`FrameGraphTask`](../../../core/src/classes/FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L107)

An observable that is triggered after the task is executed.

#### Inherited from

[`FrameGraphTask`](../../../core/src/classes/FrameGraphTask.md).[`onAfterTaskExecute`](../../../core/src/classes/FrameGraphTask.md#onaftertaskexecute)

***

### onBeforeTaskExecute

> **onBeforeTaskExecute**: [`Observable`](../../../core/src/classes/Observable.md)\<[`FrameGraphTask`](../../../core/src/classes/FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L102)

An observable that is triggered before the task is executed.

#### Inherited from

[`FrameGraphTask`](../../../core/src/classes/FrameGraphTask.md).[`onBeforeTaskExecute`](../../../core/src/classes/FrameGraphTask.md#onbeforetaskexecute)

***

### onTexturesAllocatedObservable

> **onTexturesAllocatedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`FrameGraphRenderContext`](../../../core/src/classes/FrameGraphRenderContext.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L97)

An observable that is triggered after the textures have been allocated.

#### Inherited from

[`FrameGraphTask`](../../../core/src/classes/FrameGraphTask.md).[`onTexturesAllocatedObservable`](../../../core/src/classes/FrameGraphTask.md#ontexturesallocatedobservable)

***

### outputTexture

> `readonly` **outputTexture**: `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/FrameGraph/guiTask.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/FrameGraph/guiTask.ts#L18)

The output texture of the task.
This is the same texture as the target texture, but the handles are different!

***

### targetTexture

> **targetTexture**: `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/FrameGraph/guiTask.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/FrameGraph/guiTask.ts#L12)

The target texture to render the GUI to.

## Accessors

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/FrameGraph/guiTask.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/FrameGraph/guiTask.ts#L20)

Whether the task is disabled.

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/FrameGraph/guiTask.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/FrameGraph/guiTask.ts#L24)

Whether the task is disabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Overrides

[`FrameGraphTask`](../../../core/src/classes/FrameGraphTask.md).[`disabled`](../../../core/src/classes/FrameGraphTask.md#disabled)

***

### gui

#### Get Signature

> **get** **gui**(): [`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/FrameGraph/guiTask.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/FrameGraph/guiTask.ts#L32)

Gets the underlying advanced dynamic texture.

##### Returns

[`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

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

[`FrameGraphTask`](../../../core/src/classes/FrameGraphTask.md).[`name`](../../../core/src/classes/FrameGraphTask.md#name)

***

### passes

#### Get Signature

> **get** **passes**(): [`IFrameGraphPass`](../../../core/src/interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L54)

Gets the passes of the task.

##### Returns

[`IFrameGraphPass`](../../../core/src/interfaces/IFrameGraphPass.md)[]

#### Inherited from

[`FrameGraphTask`](../../../core/src/classes/FrameGraphTask.md).[`passes`](../../../core/src/classes/FrameGraphTask.md#passes)

***

### passesDisabled

#### Get Signature

> **get** **passesDisabled**(): [`IFrameGraphPass`](../../../core/src/interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L61)

Gets the disabled passes of the task.

##### Returns

[`IFrameGraphPass`](../../../core/src/interfaces/IFrameGraphPass.md)[]

#### Inherited from

[`FrameGraphTask`](../../../core/src/classes/FrameGraphTask.md).[`passesDisabled`](../../../core/src/classes/FrameGraphTask.md#passesdisabled)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/FrameGraph/guiTask.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/FrameGraph/guiTask.ts#L88)

Disposes of the task.

#### Returns

`void`

#### Overrides

[`FrameGraphTask`](../../../core/src/classes/FrameGraphTask.md).[`dispose`](../../../core/src/classes/FrameGraphTask.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/FrameGraph/guiTask.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/FrameGraph/guiTask.ts#L63)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`FrameGraphTask`](../../../core/src/classes/FrameGraphTask.md).[`getClassName`](../../../core/src/classes/FrameGraphTask.md#getclassname)

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

[`FrameGraphTask`](../../../core/src/classes/FrameGraphTask.md).[`initAsync`](../../../core/src/classes/FrameGraphTask.md#initasync)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/FrameGraph/guiTask.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/FrameGraph/guiTask.ts#L59)

Checks if the task is ready to be executed.

#### Returns

`boolean`

True if the task is ready to be executed, else false.

#### Overrides

[`FrameGraphTask`](../../../core/src/classes/FrameGraphTask.md).[`isReady`](../../../core/src/classes/FrameGraphTask.md#isready)

***

### record()

> **record**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/FrameGraph/guiTask.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/FrameGraph/guiTask.ts#L67)

Records the task in the frame graph. Use this function to add content (render passes, ...) to the task.

#### Returns

`void`

#### Overrides

[`FrameGraphTask`](../../../core/src/classes/FrameGraphTask.md).[`record`](../../../core/src/classes/FrameGraphTask.md#record)
