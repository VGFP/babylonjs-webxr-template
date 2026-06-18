[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SSAORenderingPipeline

# Class: SSAORenderingPipeline

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts#L24)

Render pipeline to produce ssao effect

## Extends

- [`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)

## Constructors

### Constructor

> **new SSAORenderingPipeline**(`name`, `scene`, `ratio`, `cameras?`): `SSAORenderingPipeline`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts#L113)

#### Parameters

##### name

`string`

The rendering pipeline name

##### scene

[`Scene`](Scene.md)

The scene linked to this pipeline

##### ratio

`any`

The size of the postprocesses. Can be a number shared between passes or an object for more precision: { ssaoRatio: 0.5, combineRatio: 1.0 }

##### cameras?

[`Camera`](Camera.md)[]

The array of cameras that the rendering pipeline will be attached to

#### Returns

`SSAORenderingPipeline`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`constructor`](PostProcessRenderPipeline.md#constructor)

## Properties

### area

> **area**: `number` = `0.0075`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts#L71)

Related to fallOff, used to interpolate SSAO samples (first interpolate function input) based on the occlusion difference of each pixel
Must not be equal to fallOff and superior to fallOff.
Default value is 0.0075

***

### base

> **base**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts#L86)

The base color of the SSAO post-process
The final result is "base + ssao" between [0, 1]

***

### fallOff

> **fallOff**: `number` = `0.000001`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts#L79)

Related to area, used to interpolate SSAO samples (second interpolate function input) based on the occlusion difference of each pixel
Must not be equal to area and inferior to area.
Default value is 0.000001

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L26)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`inspectableCustomProperties`](PostProcessRenderPipeline.md#inspectablecustomproperties)

***

### radius

> **radius**: `number` = `0.0001`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts#L63)

The radius around the analyzed pixel used by the SSAO post-process. Default value is 0.0006

***

### SSAOBlurHRenderEffect

> **SSAOBlurHRenderEffect**: `string` = `"SSAOBlurHRenderEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts#L41)

#### Ignore

The horizontal blur PostProcess id in the pipeline

***

### SSAOBlurVRenderEffect

> **SSAOBlurVRenderEffect**: `string` = `"SSAOBlurVRenderEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts#L46)

#### Ignore

The vertical blur PostProcess id in the pipeline

***

### SSAOCombineRenderEffect

> **SSAOCombineRenderEffect**: `string` = `"SSAOCombineRenderEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts#L51)

#### Ignore

The PostProcess id in the pipeline that combines the SSAO-Blur output with the original scene color (SSAOOriginalSceneColorEffect)

***

### SSAOOriginalSceneColorEffect

> **SSAOOriginalSceneColorEffect**: `string` = `"SSAOOriginalSceneColorEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts#L31)

#### Ignore

The PassPostProcess id in the pipeline that contains the original scene color

***

### SSAORenderEffect

> **SSAORenderEffect**: `string` = `"SSAORenderEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts#L36)

#### Ignore

The SSAO PostProcess id in the pipeline

***

### totalStrength

> **totalStrength**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts#L57)

The output strength of the SSAO post-process. Default value is 1.0.

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L47)

Gets the unique id of the post process rendering pipeline

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`uniqueId`](PostProcessRenderPipeline.md#uniqueid)

## Accessors

### cameras

#### Get Signature

> **get** **cameras**(): [`Camera`](Camera.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L50)

Gets the list of attached cameras

##### Returns

[`Camera`](Camera.md)[]

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`cameras`](PostProcessRenderPipeline.md#cameras)

***

### engine

#### Get Signature

> **get** **engine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L57)

Gets the active engine

##### Returns

[`AbstractEngine`](AbstractEngine.md)

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`engine`](PostProcessRenderPipeline.md#engine)

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L90)

If all the render effects in the pipeline are supported

##### Returns

`boolean`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`isSupported`](PostProcessRenderPipeline.md#issupported)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L40)

Gets pipeline name

##### Returns

`string`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`name`](PostProcessRenderPipeline.md#name)

***

### scene

#### Get Signature

> **get** **scene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts#L102)

Gets active scene

##### Returns

[`Scene`](Scene.md)

## Methods

### addEffect()

> **addEffect**(`renderEffect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L106)

Adds an effect to the pipeline

#### Parameters

##### renderEffect

[`PostProcessRenderEffect`](PostProcessRenderEffect.md)

the effect to add

#### Returns

`void`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`addEffect`](PostProcessRenderPipeline.md#addeffect)

***

### dispose()

> **dispose**(`disableDepthRender?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts:215](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts#L215)

Removes the internal pipeline assets and detaches the pipeline from the scene cameras

#### Parameters

##### disableDepthRender?

`boolean` = `false`

If the depth renderer should be disabled on the scene

#### Returns

`void`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`dispose`](PostProcessRenderPipeline.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssaoRenderingPipeline.pure.ts#L207)

Get the class name

#### Returns

`string`

"SSAORenderingPipeline"

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`getClassName`](PostProcessRenderPipeline.md#getclassname)

***

### setPrePassRenderer()

> **setPrePassRenderer**(`prePassRenderer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:277](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L277)

Sets the required values to the prepass renderer.

#### Parameters

##### prePassRenderer

[`PrePassRenderer`](PrePassRenderer.md)

defines the prepass renderer to setup.

#### Returns

`boolean`

true if the pre pass is needed.

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`setPrePassRenderer`](PostProcessRenderPipeline.md#setprepassrenderer)
