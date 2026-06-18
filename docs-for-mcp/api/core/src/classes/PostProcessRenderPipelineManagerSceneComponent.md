[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PostProcessRenderPipelineManagerSceneComponent

# Class: PostProcessRenderPipelineManagerSceneComponent

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent.pure.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent.pure.ts#L13)

Defines the Render Pipeline scene component responsible to rendering pipelines

## Implements

- [`ISceneComponent`](../interfaces/ISceneComponent.md)

## Constructors

### Constructor

> **new PostProcessRenderPipelineManagerSceneComponent**(`scene`): `PostProcessRenderPipelineManagerSceneComponent`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent.pure.ts#L28)

Creates a new instance of the component for the given scene

#### Parameters

##### scene

[`Scene`](Scene.md)

Defines the scene to register the component in

#### Returns

`PostProcessRenderPipelineManagerSceneComponent`

## Properties

### name

> `readonly` **name**: `"PostProcessRenderPipelineManager"` = `SceneComponentConstants.NAME_POSTPROCESSRENDERPIPELINEMANAGER`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent.pure.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent.pure.ts#L17)

The component name helpful to identify the component in the list of scene components.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`name`](../interfaces/ISceneComponent.md#name)

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent.pure.ts#L22)

The scene the component belongs to.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`scene`](../interfaces/ISceneComponent.md#scene)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent.pure.ts#L52)

Disposes the component and the associated resources

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`dispose`](../interfaces/ISceneComponent.md#dispose)

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent.pure.ts#L43)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`rebuild`](../interfaces/ISceneComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent.pure.ts#L35)

Registers the component in a given scene

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`register`](../interfaces/ISceneComponent.md#register)
