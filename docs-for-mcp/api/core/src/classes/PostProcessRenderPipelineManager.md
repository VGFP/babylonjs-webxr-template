[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PostProcessRenderPipelineManager

# Class: PostProcessRenderPipelineManager

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L10)

PostProcessRenderPipelineManager class

## See

https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/postProcessRenderPipeline

## Constructors

### Constructor

> **new PostProcessRenderPipelineManager**(): `PostProcessRenderPipelineManager`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L19)

Initializes a PostProcessRenderPipelineManager

#### Returns

`PostProcessRenderPipelineManager`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/postProcessRenderPipeline

## Accessors

### onNewPipelineAddedObservable

#### Get Signature

> **get** **onNewPipelineAddedObservable**(): [`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L26)

An event triggered when a pipeline is added to the manager

##### Returns

[`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)\>

***

### onPipelineRemovedObservable

#### Get Signature

> **get** **onPipelineRemovedObservable**(): [`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L33)

An event triggered when a pipeline is removed from the manager

##### Returns

[`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)\>

***

### supportedPipelines

#### Get Signature

> **get** **supportedPipelines**(): [`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L40)

Gets the list of supported render pipelines

##### Returns

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)[]

## Methods

### addPipeline()

> **addPipeline**(`renderPipeline`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L59)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L83)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L98)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L130)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L170)

Disposes of the manager and pipelines

#### Returns

`void`

***

### enableEffectInPipeline()

> **enableEffectInPipeline**(`renderPipelineName`, `renderEffectName`, `cameras`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L114)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L69)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManager.ts#L143)

Updates the state of all contained render pipelines and disposes of any non supported pipelines

#### Returns

`void`
