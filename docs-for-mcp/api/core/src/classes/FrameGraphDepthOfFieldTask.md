[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphDepthOfFieldTask

# Class: FrameGraphDepthOfFieldTask

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L12)

Task which applies a depth of field effect.

## Extends

- [`FrameGraphTask`](FrameGraphTask.md)

## Constructors

### Constructor

> **new FrameGraphDepthOfFieldTask**(`name`, `frameGraph`, `blurLevel?`, `hdr?`): `FrameGraphDepthOfFieldTask`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L110)

Constructs a depth of field task.

#### Parameters

##### name

`string`

The name of the task.

##### frameGraph

[`FrameGraph`](FrameGraph.md)

The frame graph this task belongs to.

##### blurLevel?

[`ThinDepthOfFieldEffectBlurLevel`](../enumerations/ThinDepthOfFieldEffectBlurLevel.md) = `ThinDepthOfFieldEffectBlurLevel.Low`

The blur level of the depth of field effect (default: ThinDepthOfFieldEffectBlurLevel.Low).

##### hdr?

`boolean` = `false`

Whether the depth of field effect is HDR.

#### Returns

`FrameGraphDepthOfFieldTask`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`constructor`](FrameGraphTask.md#constructor)

## Properties

### camera

> **camera**: [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L48)

The camera used to render the scene.

***

### dependencies?

> `optional` **dependencies?**: `Set`\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L68)

The (texture) dependencies of the task (optional).

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`dependencies`](FrameGraphTask.md#dependencies)

***

### depthOfField

> `readonly` **depthOfField**: [`ThinDepthOfFieldEffect`](ThinDepthOfFieldEffect.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L63)

The depth of field effect.

***

### depthSamplingMode

> **depthSamplingMode**: `number` = `Constants.TEXTURE_BILINEAR_SAMPLINGMODE`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L43)

The sampling mode to use for the depth texture.

***

### depthTexture

> **depthTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L38)

The depth texture to use for the depth of field effect.
Should store camera space depth (Z coordinate).

***

### hdr

> `readonly` **hdr**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L69)

Whether the depth of field effect is applied on HDR textures.
When true, the depth of field effect will use a higher precision texture format (half float or float). Else, it will use unsigned byte.

***

### onAfterTaskExecute

> **onAfterTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L107)

An observable that is triggered after the task is executed.

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`onAfterTaskExecute`](FrameGraphTask.md#onaftertaskexecute)

***

### onBeforeTaskExecute

> **onBeforeTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L102)

An observable that is triggered before the task is executed.

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`onBeforeTaskExecute`](FrameGraphTask.md#onbeforetaskexecute)

***

### onTexturesAllocatedObservable

> **onTexturesAllocatedObservable**: [`Observable`](Observable.md)\<[`FrameGraphRenderContext`](FrameGraphRenderContext.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L97)

An observable that is triggered after the textures have been allocated.

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`onTexturesAllocatedObservable`](FrameGraphTask.md#ontexturesallocatedobservable)

***

### outputTexture

> `readonly` **outputTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L58)

The output texture of the depth of field effect.

***

### sourceSamplingMode

> **sourceSamplingMode**: `number` = `Constants.TEXTURE_BILINEAR_SAMPLINGMODE`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L21)

The sampling mode to use for the source texture.

***

### sourceTexture

> **sourceTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L16)

The source texture to apply the depth of field effect on.

***

### targetTexture?

> `optional` **targetTexture?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L53)

The target texture to render the depth of field effect to.

## Accessors

### alphaMode

#### Get Signature

> **get** **alphaMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L26)

The alpha mode to use when applying the depth of field effect.

##### Returns

`number`

#### Set Signature

> **set** **alphaMode**(`mode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L30)

##### Parameters

###### mode

`number`

##### Returns

`void`

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L43)

Whether the task is disabled.

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L47)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L74)

The name of the task.

##### Returns

`string`

#### Set Signature

> **set** **name**(`name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L78)

The name of the task.

##### Parameters

###### name

`string`

##### Returns

`void`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`name`](FrameGraphTask.md#name)

***

### passes

#### Get Signature

> **get** **passes**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L54)

Gets the passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`passes`](FrameGraphTask.md#passes)

***

### passesDisabled

#### Get Signature

> **get** **passesDisabled**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L61)

Gets the disabled passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`passesDisabled`](FrameGraphTask.md#passesdisabled)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L238)

Disposes of the task.

#### Returns

`void`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`dispose`](FrameGraphTask.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L146)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`getClassName`](FrameGraphTask.md#getclassname)

***

### initAsync()

> **initAsync**(): `Promise`\<`unknown`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L90)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L142)

Checks if the task is ready to be executed.

#### Returns

`boolean`

True if the task is ready to be executed, else false.

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`isReady`](FrameGraphTask.md#isready)

***

### record()

> **record**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts:150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/depthOfFieldTask.ts#L150)

Records the task in the frame graph. Use this function to add content (render passes, ...) to the task.

#### Returns

`void`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`record`](FrameGraphTask.md#record)
