[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphIblShadowsRendererTask

# Class: FrameGraphIblShadowsRendererTask

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L25)

Composite task that owns the individual IBL shadows frame graph tasks.
The frame graph remains flat internally, but this task groups the pipeline
and owns the child task implementation details.

## Extends

- [`FrameGraphTask`](FrameGraphTask.md)

## Constructors

### Constructor

> **new FrameGraphIblShadowsRendererTask**(`name`, `frameGraph`): `FrameGraphIblShadowsRendererTask`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:547](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L547)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L68)

The (texture) dependencies of the task (optional).

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`dependencies`](FrameGraphTask.md#dependencies)

***

### depthTexture

> **depthTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L133)

Depth texture handle used by tracing and blur.
This should be the screen-space depth of all objects in the scene
that will receive shadows.
It is important that this texture stores 32-bit depth values to avoid artifacts.

***

### normalTexture

> **normalTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L142)

World-space normal texture handle used by tracing and blur.
This should store the world-space normals of all objects in the scene
that will receive shadows. Each component should be normalized to [0, 1] rather than [-1, 1].
Recommended to be 16-bit floating point though 8-bit unsigned byte can be used with minimal
loss in quality.

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

### outputTexture

> `readonly` **outputTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L27)

Final frame-graph texture handle produced by the task.

***

### positionTexture

> **positionTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L150)

Position texture handle used by accumulation.
This should store the world-space position of all objects in the scene
that will receive shadows.
Should be stored as 16-bit floating point.

***

### velocityTexture

> **velocityTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L158)

Velocity texture handle used by accumulation.
This should store the linear velocity per pixel of all objects in the scene
that will receive shadows.
Should be stored as 16-bit floating point.

## Accessors

### camera

#### Get Signature

> **get** **camera**(): [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L101)

Camera used by the tracing stage.

##### Returns

[`Camera`](Camera.md)

#### Set Signature

> **set** **camera**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L106)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:174](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L174)

Whether traced shadows preserve environment color.

##### Returns

`boolean`

#### Set Signature

> **set** **coloredShadows**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L179)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L86)

Whether the task is disabled.

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L90)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:277](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L277)

Environment rotation in radians.

##### Returns

`number`

#### Set Signature

> **set** **envRotation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:282](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L282)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L62)

The name of the task.

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L66)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L111)

Object list used by voxelization.

##### Returns

[`FrameGraphObjectList`](FrameGraphObjectList.md)

#### Set Signature

> **set** **objectList**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L116)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:354](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L354)

Notifies when the accumulated output texture becomes ready.

##### Returns

[`Observable`](Observable.md)\<[`InternalTexture`](InternalTexture.md)\>

***

### outputTextureReady

#### Get Signature

> **get** **outputTextureReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:349](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L349)

True when the accumulated output texture is ready.

##### Returns

`boolean`

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

***

### refreshRate

#### Get Signature

> **get** **refreshRate**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:324](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L324)

Voxelization refresh rate.

##### Returns

`number`

#### Set Signature

> **set** **refreshRate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:329](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L329)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:313](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L313)

Voxelization resolution exponent.

##### Returns

`number`

#### Set Signature

> **set** **resolutionExp**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L318)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L163)

Number of tracing sample directions.

##### Returns

`number`

#### Set Signature

> **set** **sampleDirections**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L168)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:300](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L300)

Final material shadow opacity.

##### Returns

`number`

#### Set Signature

> **set** **shadowOpacity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:305](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L305)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:290](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L290)

Temporal shadow remanence while moving.

##### Returns

`number`

#### Set Signature

> **set** **shadowRemanence**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:295](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L295)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:233](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L233)

Distance scale used by screen-space shadow tracing.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowDistanceScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:238](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L238)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L200)

Opacity of screen-space shadows.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowOpacity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:205](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L205)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L211)

Number of screen-space shadow samples.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowSampleCount**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L216)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:222](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L222)

Stride used by screen-space shadow sampling.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowStride**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L227)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:244](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L244)

Thickness scale used by screen-space shadow tracing.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowThicknessScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L249)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:334](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L334)

Whether tri-planar voxelization is used.

##### Returns

`boolean`

#### Set Signature

> **set** **triPlanarVoxelization**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:339](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L339)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:266](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L266)

Voxel tracing direction bias.

##### Returns

`number`

#### Set Signature

> **set** **voxelDirectionBias**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L271)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:344](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L344)

Current world-space voxel grid size.

##### Returns

`number`

***

### voxelNormalBias

#### Get Signature

> **get** **voxelNormalBias**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L255)

Voxel tracing normal bias.

##### Returns

`number`

#### Set Signature

> **set** **voxelNormalBias**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:260](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L260)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L189)

Opacity of voxel-traced shadows.

##### Returns

`number`

#### Set Signature

> **set** **voxelShadowOpacity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L194)

Opacity of voxel-traced shadows.

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### addShadowCastingMesh()

> **addShadowCastingMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:430](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L430)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:379](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L379)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:456](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L456)

Clears all shadow-casting meshes from the voxelization object list.

#### Returns

`void`

***

### clearShadowReceivingMaterials()

> **clearShadowReceivingMaterials**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:415](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L415)

Clears all registered shadow-receiving materials.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:530](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L530)

Disposes the task and owned resources.

#### Returns

`void`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`dispose`](FrameGraphTask.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L58)

Gets the class name.

#### Returns

`string`

The class name.

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`getClassName`](FrameGraphTask.md#getclassname)

***

### initAsync()

> **initAsync**(): `Promise`\<`unknown`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:466](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L466)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:490](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L490)

Checks if the task is ready to be executed.

#### Returns

`boolean`

True if the task is ready to be executed, else false.

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`isReady`](FrameGraphTask.md#isready)

***

### record()

> **record**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:498](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L498)

Records the parent task.
Child tasks record the actual passes.

#### Returns

`void`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`record`](FrameGraphTask.md#record)

***

### removeShadowCastingMesh()

> **removeShadowCastingMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:444](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L444)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:399](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L399)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:371](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L371)

Resets temporal accumulation.

#### Returns

`void`

***

### updateSceneBounds()

> **updateSceneBounds**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:366](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L366)

Recomputes the voxelization scene bounds from the current object list.

#### Returns

`void`

***

### updateVoxelization()

> **updateVoxelization**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts:361](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.ts#L361)

Triggers a voxelization refresh on the next eligible frame.

#### Returns

`void`
