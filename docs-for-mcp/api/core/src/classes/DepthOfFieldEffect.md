[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DepthOfFieldEffect

# Class: DepthOfFieldEffect

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts#L36)

The depth of field effect applies a blur to objects that are closer or further from where the camera is focusing.

## Extends

- [`PostProcessRenderEffect`](PostProcessRenderEffect.md)

## Constructors

### Constructor

> **new DepthOfFieldEffect**(`sceneOrEngine`, `depthTexture`, `blurLevel?`, `pipelineTextureType?`, `blockCompilation?`, `depthNotNormalized?`): `DepthOfFieldEffect`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts#L98)

Creates a new instance DepthOfFieldEffect

#### Parameters

##### sceneOrEngine

[`Scene`](Scene.md) \| [`AbstractEngine`](AbstractEngine.md)

The scene or engine the effect belongs to.

##### depthTexture

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

The depth texture of the scene to compute the circle of confusion.This must be set in order for this to function but may be set after initialization if needed.

##### blurLevel?

[`DepthOfFieldEffectBlurLevel`](../enumerations/DepthOfFieldEffectBlurLevel.md) = `DepthOfFieldEffectBlurLevel.Low`

##### pipelineTextureType?

`number` = `0`

The type of texture to be used when performing the post processing.

##### blockCompilation?

`boolean` = `false`

If compilation of the shader should not be done in the constructor. The updateEffect method can be used to compile the shader at a later time. (default: false)

##### depthNotNormalized?

`boolean` = `false`

If the depth from the depth texture is already normalized or if the normalization should be done at runtime in the shader (default: false)

#### Returns

`DepthOfFieldEffect`

#### Overrides

[`PostProcessRenderEffect`](PostProcessRenderEffect.md).[`constructor`](PostProcessRenderEffect.md#constructor)

## Accessors

### depthTexture

#### Set Signature

> **set** **depthTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts#L229)

Depth texture to be used to compute the circle of confusion. This must be set here or in the constructor in order for the post process to function.

##### Parameters

###### value

[`RenderTargetTexture`](RenderTargetTexture.md)

##### Returns

`void`

***

### focalLength

#### Get Signature

> **get** **focalLength**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts#L56)

##### Returns

`number`

#### Set Signature

> **set** **focalLength**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts#L53)

The focal the length of the camera used in the effect in scene units/1000 (eg. millimeter)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### focusDistance

#### Get Signature

> **get** **focusDistance**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts#L74)

##### Returns

`number`

#### Set Signature

> **set** **focusDistance**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts#L71)

Distance away from the camera to focus on in scene units/1000 (eg. millimeter). (default: 2000)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### fStop

#### Get Signature

> **get** **fStop**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts#L65)

##### Returns

`number`

#### Set Signature

> **set** **fStop**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts#L62)

F-Stop of the effect's camera. The diameter of the resulting aperture can be computed by lensSize/fStop. (default: 1.4)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderEffect.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderEffect.ts#L49)

Checks if all the post processes in the effect are supported.

##### Returns

`boolean`

#### Inherited from

[`PostProcessRenderEffect`](PostProcessRenderEffect.md).[`isSupported`](PostProcessRenderEffect.md#issupported)

***

### lensSize

#### Get Signature

> **get** **lensSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts#L83)

##### Returns

`number`

#### Set Signature

> **set** **lensSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts#L80)

Max lens size in scene units/1000 (eg. millimeter). Standard cameras are 50mm. (default: 50) The diameter of the resulting aperture can be computed by lensSize/fStop.

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### disposeEffects()

> **disposeEffects**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts:237](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts#L237)

Disposes each of the internal effects for a given camera.

#### Parameters

##### camera

[`Camera`](Camera.md)

The camera to dispose the effect on.

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/depthOfFieldEffect.ts#L222)

Get the current class name of the current effect

#### Returns

`string`

"DepthOfFieldEffect"

***

### getPostProcesses()

> **getPostProcesses**(`camera?`): [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderEffect.ts:254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderEffect.ts#L254)

Gets a list of the post processes contained in the effect.

#### Parameters

##### camera?

[`Camera`](Camera.md)

The camera to get the post processes on.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)[]\>

The list of the post processes in the effect.

#### Inherited from

[`PostProcessRenderEffect`](PostProcessRenderEffect.md).[`getPostProcesses`](PostProcessRenderEffect.md#getpostprocesses)
