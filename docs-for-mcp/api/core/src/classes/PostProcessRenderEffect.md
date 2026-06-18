[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PostProcessRenderEffect

# Class: PostProcessRenderEffect

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderEffect.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderEffect.ts#L11)

This represents a set of one or more post processes in Babylon.
A post process can be used to apply a shader to a texture after it is rendered.

## Example

```ts
https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/postProcessRenderPipeline
```

## Extended by

- [`BloomEffect`](BloomEffect.md)
- [`DepthOfFieldEffect`](DepthOfFieldEffect.md)

## Constructors

### Constructor

> **new PostProcessRenderEffect**(`engine`, `name`, `getPostProcesses`, `singleInstance?`): `PostProcessRenderEffect`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderEffect.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderEffect.ts#L34)

Instantiates a post process render effect.
A post process can be used to apply a shader to a texture after it is rendered.

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

The engine the effect is tied to

##### name

`string`

The name of the effect

##### getPostProcesses

() => [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md) \| [`PostProcess`](PostProcess.md)[]\>

A function that returns a set of post processes which the effect will run in order to be run.

##### singleInstance?

`boolean` = `true`

False if this post process can be run on multiple cameras. (default: true)

#### Returns

`PostProcessRenderEffect`

## Accessors

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderEffect.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderEffect.ts#L49)

Checks if all the post processes in the effect are supported.

##### Returns

`boolean`

## Methods

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
