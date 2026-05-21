[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PostProcessManager

# Class: PostProcessManager

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcessManager.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcessManager.ts#L15)

PostProcessManager is used to manage one or more post processes or post process pipelines
See https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/usePostProcesses

## Constructors

### Constructor

> **new PostProcessManager**(`scene`): `PostProcessManager`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcessManager.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcessManager.ts#L25)

Creates a new instance PostProcess

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene that the post process is associated with.

#### Returns

`PostProcessManager`

## Properties

### onBeforeRenderObservable

> **onBeforeRenderObservable**: [`Observable`](Observable.md)\<`PostProcessManager`\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcessManager.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcessManager.ts#L74)

## Methods

### directRender()

> **directRender**(`postProcesses`, `targetTexture?`, `forceFullscreenViewport?`, `faceIndex?`, `lodLevel?`, `doNotBindFrambuffer?`, `numPostsProcesses?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcessManager.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcessManager.ts#L125)

Manually render a set of post processes to a texture.
Please note, the frame buffer won't be unbound after the call in case you have more render to do.

#### Parameters

##### postProcesses

[`PostProcess`](PostProcess.md)[]

An array of post processes to be run.

##### targetTexture?

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetWrapper`](RenderTargetWrapper.md)\> = `null`

The render target wrapper to render to.

##### forceFullscreenViewport?

`boolean` = `false`

force gl.viewport to be full screen eg. 0,0,textureWidth,textureHeight

##### faceIndex?

`number` = `0`

defines the face to render to if a cubemap is defined as the target

##### lodLevel?

`number` = `0`

defines which lod of the texture to render to

##### doNotBindFrambuffer?

`boolean` = `false`

If set to true, assumes that the framebuffer has been bound previously

##### numPostsProcesses?

`number` = `postProcesses.length`

The number of post processes to render. Defaults to the length of the postProcesses array.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/postProcessManager.ts:245](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/postProcessManager.ts#L245)

Disposes of the post process manager.

#### Returns

`void`
