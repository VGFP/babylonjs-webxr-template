[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PostProcessRenderPipelineManager

# Class: PostProcessRenderPipelineManager

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L9)

PostProcessRenderPipelineManager class

## See

https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/postProcessRenderPipeline

## Constructors

### Constructor

> **new PostProcessRenderPipelineManager**(): `PostProcessRenderPipelineManager`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L18)

Initializes a PostProcessRenderPipelineManager

#### Returns

`PostProcessRenderPipelineManager`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/postProcessRenderPipeline

## Accessors

### onNewPipelineAddedObservable

#### Get Signature

> **get** **onNewPipelineAddedObservable**(): [`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L23)

An event triggered when a pipeline is added to the manager

##### Returns

[`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)\>

***

### onPipelineRemovedObservable

#### Get Signature

> **get** **onPipelineRemovedObservable**(): [`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L30)

An event triggered when a pipeline is removed from the manager

##### Returns

[`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)\>

***

### supportedPipelines

#### Get Signature

> **get** **supportedPipelines**(): [`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L37)

Gets the list of supported render pipelines

##### Returns

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)[]

## Methods

### addPipeline()

> **addPipeline**(`renderPipeline`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L56)

Adds a pipeline to the manager

#### Parameters

##### renderPipeline

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)

The pipeline to add

#### Returns

`void`

***

### attachCamerasToRenderPipeline()

> **attachCamerasToRenderPipeline**(`renderPipelineName`, `cameras`, `unique?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L80)

Attaches a camera to the pipeline

#### Parameters

##### renderPipelineName

`string`

The name of the pipeline to attach to

##### cameras

[`Camera`](Camera.md) \| [`Camera`](Camera.md)[]

the camera to attach

##### unique?

`boolean` = `false`

if the camera can be attached multiple times to the pipeline

#### Returns

`void`

***

### detachCamerasFromRenderPipeline()

> **detachCamerasFromRenderPipeline**(`renderPipelineName`, `cameras`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L95)

Detaches a camera from the pipeline

#### Parameters

##### renderPipelineName

`string`

The name of the pipeline to detach from

##### cameras

[`Camera`](Camera.md) \| [`Camera`](Camera.md)[]

the camera to detach

#### Returns

`void`

***

### disableEffectInPipeline()

> **disableEffectInPipeline**(`renderPipelineName`, `renderEffectName`, `cameras`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L127)

Disables an effect by name on a pipeline

#### Parameters

##### renderPipelineName

`string`

the name of the pipeline to disable the effect in

##### renderEffectName

`string`

the name of the effect to disable

##### cameras

[`Camera`](Camera.md) \| [`Camera`](Camera.md)[]

the cameras that the effect should be disabled on

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L167)

Disposes of the manager and pipelines

#### Returns

`void`

***

### enableEffectInPipeline()

> **enableEffectInPipeline**(`renderPipelineName`, `renderEffectName`, `cameras`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L111)

Enables an effect by name on a pipeline

#### Parameters

##### renderPipelineName

`string`

the name of the pipeline to enable the effect in

##### renderEffectName

`string`

the name of the effect to enable

##### cameras

[`Camera`](Camera.md) \| [`Camera`](Camera.md)[]

the cameras that the effect should be enabled on

#### Returns

`void`

***

### removePipeline()

> **removePipeline**(`renderPipelineName`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L66)

Remove the pipeline from the manager

#### Parameters

##### renderPipelineName

`string`

the name of the pipeline to remove

#### Returns

`void`

***

### update()

> **update**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L140)

Updates the state of all contained render pipelines and disposes of any non supported pipelines

#### Returns

`void`
