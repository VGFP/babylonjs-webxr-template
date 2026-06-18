[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphIblShadowsRendererTask

# Class: FrameGraphIblShadowsRendererTask

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L26)

Composite task that owns the individual IBL shadows frame graph tasks.
The frame graph remains flat internally, but this task groups the pipeline
and owns the child task implementation details.

## Extends

- [`FrameGraphTask`](FrameGraphTask.md)

## Constructors

### Constructor

> **new FrameGraphIblShadowsRendererTask**(`name`, `frameGraph`): `FrameGraphIblShadowsRendererTask`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:548](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L548)

Creates a new IBL shadows composite task.

#### Parameters

##### name

`string`

The task name.

##### frameGraph

[`FrameGraph`](FrameGraph.md)

The owning frame graph.

#### Returns

`FrameGraphIblShadowsRendererTask`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`constructor`](FrameGraphTask.md#constructor)

## Properties

### dependencies?

> `optional` **dependencies?**: `Set`\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L68)

The (texture) dependencies of the task (optional).

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`dependencies`](FrameGraphTask.md#dependencies)

***

### depthTexture

> **depthTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L134)

Depth texture handle used by tracing and blur.
This should be the screen-space depth of all objects in the scene
that will receive shadows.
It is important that this texture stores 32-bit depth values to avoid artifacts.

***

### normalTexture

> **normalTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L143)

World-space normal texture handle used by tracing and blur.
This should store the world-space normals of all objects in the scene
that will receive shadows. Each component should be normalized to [0, 1] rather than [-1, 1].
Recommended to be 16-bit floating point though 8-bit unsigned byte can be used with minimal
loss in quality.

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L28)

Final frame-graph texture handle produced by the task.

***

### positionTexture

> **positionTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L151)

Position texture handle used by accumulation.
This should store the world-space position of all objects in the scene
that will receive shadows.
Should be stored as 16-bit floating point.

***

### velocityTexture

> **velocityTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L159)

Velocity texture handle used by accumulation.
This should store the linear velocity per pixel of all objects in the scene
that will receive shadows.
Should be stored as 16-bit floating point.

## Accessors

### camera

#### Get Signature

> **get** **camera**(): [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L102)

Camera used by the tracing stage.

##### Returns

[`Camera`](Camera.md)

#### Set Signature

> **set** **camera**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L107)

Camera used by the tracing stage.

##### Parameters

###### value

[`Camera`](Camera.md)

##### Returns

`void`

***

### coloredShadows

#### Get Signature

> **get** **coloredShadows**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:175](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L175)

Whether traced shadows preserve environment color.

##### Returns

`boolean`

#### Set Signature

> **set** **coloredShadows**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L180)

Whether traced shadows preserve environment color.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L87)

Whether the task is disabled.

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L91)

Whether the task is disabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`disabled`](FrameGraphTask.md#disabled)

***

### envRotation

#### Get Signature

> **get** **envRotation**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:278](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L278)

Environment rotation in radians.

##### Returns

`number`

#### Set Signature

> **set** **envRotation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L283)

Environment rotation in radians.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L63)

The name of the task.

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L67)

The name of the task.

##### Parameters

###### value

`string`

##### Returns

`void`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`name`](FrameGraphTask.md#name)

***

### objectList

#### Get Signature

> **get** **objectList**(): [`FrameGraphObjectList`](FrameGraphObjectList.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L112)

Object list used by voxelization.

##### Returns

[`FrameGraphObjectList`](FrameGraphObjectList.md)

#### Set Signature

> **set** **objectList**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L117)

Object list used by voxelization.

##### Parameters

###### value

[`FrameGraphObjectList`](FrameGraphObjectList.md)

##### Returns

`void`

***

### onOutputTextureReadyObservable

#### Get Signature

> **get** **onOutputTextureReadyObservable**(): [`Observable`](Observable.md)\<[`InternalTexture`](InternalTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:355](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L355)

Notifies when the accumulated output texture becomes ready.

##### Returns

[`Observable`](Observable.md)\<[`InternalTexture`](InternalTexture.md)\>

***

### outputTextureReady

#### Get Signature

> **get** **outputTextureReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L350)

True when the accumulated output texture is ready.

##### Returns

`boolean`

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

***

### refreshRate

#### Get Signature

> **get** **refreshRate**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:325](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L325)

Voxelization refresh rate.

##### Returns

`number`

#### Set Signature

> **set** **refreshRate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:330](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L330)

Voxelization refresh rate.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### resolutionExp

#### Get Signature

> **get** **resolutionExp**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:314](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L314)

Voxelization resolution exponent.

##### Returns

`number`

#### Set Signature

> **set** **resolutionExp**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L319)

Voxelization resolution exponent.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### sampleDirections

#### Get Signature

> **get** **sampleDirections**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L164)

Number of tracing sample directions.

##### Returns

`number`

#### Set Signature

> **set** **sampleDirections**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L169)

Number of tracing sample directions.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowOpacity

#### Get Signature

> **get** **shadowOpacity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:301](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L301)

Final material shadow opacity.

##### Returns

`number`

#### Set Signature

> **set** **shadowOpacity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:306](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L306)

Final material shadow opacity.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowRemanence

#### Get Signature

> **get** **shadowRemanence**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:291](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L291)

Temporal shadow remanence while moving.

##### Returns

`number`

#### Set Signature

> **set** **shadowRemanence**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L296)

Temporal shadow remanence while moving.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowDistanceScale

#### Get Signature

> **get** **ssShadowDistanceScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:234](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L234)

Distance scale used by screen-space shadow tracing.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowDistanceScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L239)

Distance scale used by screen-space shadow tracing.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowOpacity

#### Get Signature

> **get** **ssShadowOpacity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L201)

Opacity of screen-space shadows.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowOpacity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:206](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L206)

Opacity of screen-space shadows.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowSampleCount

#### Get Signature

> **get** **ssShadowSampleCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:212](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L212)

Number of screen-space shadow samples.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowSampleCount**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L217)

Number of screen-space shadow samples.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowStride

#### Get Signature

> **get** **ssShadowStride**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L223)

Stride used by screen-space shadow sampling.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowStride**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L228)

Stride used by screen-space shadow sampling.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowThicknessScale

#### Get Signature

> **get** **ssShadowThicknessScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L245)

Thickness scale used by screen-space shadow tracing.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowThicknessScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:250](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L250)

Thickness scale used by screen-space shadow tracing.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### triPlanarVoxelization

#### Get Signature

> **get** **triPlanarVoxelization**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:335](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L335)

Whether tri-planar voxelization is used.

##### Returns

`boolean`

#### Set Signature

> **set** **triPlanarVoxelization**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L340)

Whether tri-planar voxelization is used.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### voxelDirectionBias

#### Get Signature

> **get** **voxelDirectionBias**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:267](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L267)

Voxel tracing direction bias.

##### Returns

`number`

#### Set Signature

> **set** **voxelDirectionBias**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:272](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L272)

Voxel tracing direction bias.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### voxelGridSize

#### Get Signature

> **get** **voxelGridSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L345)

Current world-space voxel grid size.

##### Returns

`number`

***

### voxelNormalBias

#### Get Signature

> **get** **voxelNormalBias**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:256](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L256)

Voxel tracing normal bias.

##### Returns

`number`

#### Set Signature

> **set** **voxelNormalBias**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L261)

Voxel tracing normal bias.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### voxelShadowOpacity

#### Get Signature

> **get** **voxelShadowOpacity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L190)

Opacity of voxel-traced shadows.

##### Returns

`number`

#### Set Signature

> **set** **voxelShadowOpacity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L195)

Opacity of voxel-traced shadows.

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### addShadowCastingMesh()

> **addShadowCastingMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:431](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L431)

Adds one or more meshes to the voxelization object list.

#### Parameters

##### mesh

[`Mesh`](Mesh.md) \| [`Mesh`](Mesh.md)[]

The mesh or meshes to add.

#### Returns

`void`

***

### addShadowReceivingMaterial()

> **addShadowReceivingMaterial**(`material?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L380)

Adds one or more materials that should receive IBL shadows.

#### Parameters

##### material?

[`Material`](Material.md) \| [`Material`](Material.md)[]

The material or materials to register. If omitted, all scene materials are added.

#### Returns

`void`

***

### clearShadowCastingMeshes()

> **clearShadowCastingMeshes**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:457](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L457)

Clears all shadow-casting meshes from the voxelization object list.

#### Returns

`void`

***

### clearShadowReceivingMaterials()

> **clearShadowReceivingMaterials**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:416](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L416)

Clears all registered shadow-receiving materials.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:531](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L531)

Disposes the task and owned resources.

#### Returns

`void`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`dispose`](FrameGraphTask.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L59)

Gets the class name.

#### Returns

`string`

The class name.

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`getClassName`](FrameGraphTask.md#getclassname)

***

### initAsync()

> **initAsync**(): `Promise`\<`unknown`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:467](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L467)

This function is called once after the task has been added to the frame graph and before the frame graph is built for the first time.
This allows you to initialize asynchronous resources, which is not possible in the constructor.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the initialization is complete.

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`initAsync`](FrameGraphTask.md#initasync)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:491](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L491)

Checks if the task is ready to be executed.

#### Returns

`boolean`

True if the task is ready to be executed, else false.

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`isReady`](FrameGraphTask.md#isready)

***

### record()

> **record**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:499](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L499)

Records the parent task.
Child tasks record the actual passes.

#### Returns

`void`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`record`](FrameGraphTask.md#record)

***

### removeShadowCastingMesh()

> **removeShadowCastingMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:445](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L445)

Removes one or more meshes from the voxelization object list.

#### Parameters

##### mesh

[`Mesh`](Mesh.md) \| [`Mesh`](Mesh.md)[]

The mesh or meshes to remove.

#### Returns

`void`

***

### removeShadowReceivingMaterial()

> **removeShadowReceivingMaterial**(`material`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:400](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L400)

Removes one or more materials from IBL shadow reception.

#### Parameters

##### material

[`Material`](Material.md) \| [`Material`](Material.md)[]

The material or materials to unregister.

#### Returns

`void`

***

### resetAccumulation()

> **resetAccumulation**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:372](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L372)

Resets temporal accumulation.

#### Returns

`void`

***

### updateSceneBounds()

> **updateSceneBounds**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:367](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L367)

Recomputes the voxelization scene bounds from the current object list.

#### Returns

`void`

***

### updateVoxelization()

> **updateVoxelization**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:362](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L362)

Triggers a voxelization refresh on the next eligible frame.

#### Returns

`void`
