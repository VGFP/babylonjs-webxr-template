[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IblShadowsRenderPipeline

# Class: IblShadowsRenderPipeline

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L118)

Voxel-based shadow rendering for IBL's.
This should not be instanciated directly, as it is part of a scene component

## Extends

- [`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)

## Constructors

### Constructor

> **new IblShadowsRenderPipeline**(`name`, `scene`, `options?`, `cameras?`): `IblShadowsRenderPipeline`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:753](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L753)

#### Parameters

##### name

`string`

The rendering pipeline name

##### scene

[`Scene`](Scene.md)

The scene linked to this pipeline

##### options?

`Partial`\<`IIblShadowsSettings`\> = `{}`

Options to configure the pipeline

##### cameras?

[`Camera`](Camera.md)[]

Cameras to apply the pipeline to.

#### Returns

`IblShadowsRenderPipeline`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`constructor`](PostProcessRenderPipeline.md#constructor)

## Properties

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L24)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`inspectableCustomProperties`](PostProcessRenderPipeline.md#inspectablecustomproperties)

***

### onNewIblReadyObservable

> **onNewIblReadyObservable**: [`Observable`](Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L155)

Observable that triggers when a new IBL is set and the importance sampling is ready

***

### onShadowTextureReadyObservable

> **onShadowTextureReadyObservable**: [`Observable`](Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L150)

Observable that triggers when the shadow renderer is ready

***

### onVoxelizationCompleteObservable

> **onVoxelizationCompleteObservable**: [`Observable`](Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L160)

Observable that triggers when the voxelization is complete

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L122)

The scene that this pipeline is attached to

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L45)

Gets the unique id of the post process rendering pipeline

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`uniqueId`](PostProcessRenderPipeline.md#uniqueid)

***

### voxelGridSize

> **voxelGridSize**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L165)

The current world-space size of that the voxel grid covers in the scene.

## Accessors

### accumulationPassDebugEnabled

#### Get Signature

> **get** **accumulationPassDebugEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:482](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L482)

Display the debug view for the shadows accumulated over time.

##### Returns

`boolean`

#### Set Signature

> **set** **accumulationPassDebugEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:486](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L486)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### allowDebugPasses

#### Get Signature

> **get** **allowDebugPasses**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:645](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L645)

Allow debug passes to be enabled. Default is false.

##### Returns

`boolean`

#### Set Signature

> **set** **allowDebugPasses**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:652](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L652)

Allow debug passes to be enabled. Default is false.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### cameras

#### Get Signature

> **get** **cameras**(): [`Camera`](Camera.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L48)

Gets the list of attached cameras

##### Returns

[`Camera`](Camera.md)[]

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`cameras`](PostProcessRenderPipeline.md#cameras)

***

### cdfDebugEnabled

#### Get Signature

> **get** **cdfDebugEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:401](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L401)

Turn on or off the debug view of the CDF importance sampling data

##### Returns

`boolean`

#### Set Signature

> **set** **cdfDebugEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:408](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L408)

Turn on or off the debug view of the CDF importance sampling data

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### coloredShadows

#### Get Signature

> **get** **coloredShadows**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:192](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L192)

Render the shadows in color rather than black and white.
This is slightly more expensive than black and white shadows but can be much
more accurate when the strongest lights in the IBL are non-white.

##### Returns

`boolean`

#### Set Signature

> **set** **coloredShadows**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:196](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L196)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### engine

#### Get Signature

> **get** **engine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L55)

Gets the active engine

##### Returns

[`AbstractEngine`](AbstractEngine.md)

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`engine`](PostProcessRenderPipeline.md#engine)

***

### envRotation

#### Get Signature

> **get** **envRotation**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:627](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L627)

The global Y-axis rotation of the IBL for shadows. This should match the Y-rotation of the environment map applied to materials, skybox, etc.

##### Returns

`number`

#### Set Signature

> **set** **envRotation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:634](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L634)

The global Y-axis rotation of the IBL for shadows. This should match the Y-rotation of the environment map applied to materials, skybox, etc.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### gbufferDebugEnabled

#### Get Signature

> **get** **gbufferDebugEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:381](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L381)

Turn on or off the debug view of the G-Buffer. This will display only the targets
of the g-buffer that are used by the shadow pipeline.

##### Returns

`boolean`

#### Set Signature

> **set** **gbufferDebugEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:385](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L385)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L87)

If all the render effects in the pipeline are supported

##### Returns

`boolean`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`isSupported`](PostProcessRenderPipeline.md#issupported)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L38)

Gets pipeline name

##### Returns

`string`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`name`](PostProcessRenderPipeline.md#name)

***

### resolutionExp

#### Get Signature

> **get** **resolutionExp**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:574](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L574)

The exponent of the resolution of the voxel shadow grid. Higher resolutions will result in sharper
shadows but are more expensive to compute and require more memory.
The resolution is calculated as 2 to the power of this number.

##### Returns

`number`

#### Set Signature

> **set** **resolutionExp**(`newResolution`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:578](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L578)

##### Parameters

###### newResolution

`number`

##### Returns

`void`

***

### sampleDirections

#### Get Signature

> **get** **sampleDirections**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:593](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L593)

The number of different directions to sample during the voxel tracing pass

##### Returns

`number`

#### Set Signature

> **set** **sampleDirections**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:600](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L600)

The number of different directions to sample during the voxel tracing pass

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowOpacity

#### Get Signature

> **get** **shadowOpacity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:178](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L178)

How dark the shadows appear. 1.0 is full opacity, 0.0 is no shadows.

##### Returns

`number`

#### Set Signature

> **set** **shadowOpacity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:182](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L182)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowRemanence

#### Get Signature

> **get** **shadowRemanence**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:610](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L610)

The decree to which the shadows persist between frames. 0.0 is no persistence, 1.0 is full persistence.

##### Returns

`number`

#### Set Signature

> **set** **shadowRemanence**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:617](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L617)

The decree to which the shadows persist between frames. 0.0 is no persistence, 1.0 is full persistence.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowRenderSizeFactor

#### Get Signature

> **get** **shadowRenderSizeFactor**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L207)

A multiplier for the render size of the shadows. Used for rendering lower-resolution shadows.

##### Returns

`number`

#### Set Signature

> **set** **shadowRenderSizeFactor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L211)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### spatialBlurPassDebugEnabled

#### Get Signature

> **get** **spatialBlurPassDebugEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:456](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L456)

Display the debug view for the spatial blur pass

##### Returns

`boolean`

#### Set Signature

> **set** **spatialBlurPassDebugEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:460](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L460)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### ssShadowDistanceScale

#### Get Signature

> **get** **ssShadowDistanceScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:283](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L283)

A scale for the maximum distance a screen-space shadow can be cast in world-space.
The maximum distance that screen-space shadows cast is derived from the voxel size
and this value so shouldn't need to change if you scale your scene

##### Returns

`number`

#### Set Signature

> **set** **ssShadowDistanceScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L287)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowOpacity

#### Get Signature

> **get** **ssShadowOpacity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:236](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L236)

How dark the screen-space shadows appear. 1.0 is full opacity, 0.0 is no shadows.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowOpacity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L240)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowSampleCount

#### Get Signature

> **get** **ssShadowSampleCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:250](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L250)

The number of samples used in the screen space shadow pass.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowSampleCount**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:254](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L254)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowStride

#### Get Signature

> **get** **ssShadowStride**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:265](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L265)

The stride of the screen-space shadow pass. This controls the distance between samples
in pixels.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowStride**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L269)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowThicknessScale

#### Get Signature

> **get** **ssShadowThicknessScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:299](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L299)

Screen-space shadow thickness scale. This value controls the assumed thickness of
on-screen surfaces in world-space. It scales with the size of the shadow-casting
region so shouldn't need to change if you scale your scene.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowThicknessScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:303](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L303)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### voxelShadowOpacity

#### Get Signature

> **get** **voxelShadowOpacity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:222](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L222)

How dark the voxel shadows appear. 1.0 is full opacity, 0.0 is no shadows.

##### Returns

`number`

#### Set Signature

> **set** **voxelShadowOpacity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L226)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### voxelTracingDebugEnabled

#### Get Signature

> **get** **voxelTracingDebugEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:430](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L430)

Display the debug view for just the shadow samples taken this frame.

##### Returns

`boolean`

#### Set Signature

> **set** **voxelTracingDebugEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:434](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L434)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### IsSupported

#### Get Signature

> **get** `static` **IsSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:673](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L673)

Support test.

##### Returns

`boolean`

## Methods

### addEffect()

> **addEffect**(`renderEffect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L103)

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

### addShadowCastingMesh()

> **addShadowCastingMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:510](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L510)

Add a mesh to be used for shadow-casting in the IBL shadow pipeline.
These meshes will be written to the voxel grid.

#### Parameters

##### mesh

[`Mesh`](Mesh.md) \| [`Mesh`](Mesh.md)[]

A mesh or list of meshes that you want to cast shadows

#### Returns

`void`

***

### addShadowReceivingMaterial()

> **addShadowReceivingMaterial**(`material?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:1033](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L1033)

Apply the shadows to a material or array of materials. If no material is provided, all
materials in the scene will be added.

#### Parameters

##### material?

[`Material`](Material.md) \| [`Material`](Material.md)[]

Material that will be affected by the shadows. If not provided, all materials of the scene will be affected.

#### Returns

`void`

***

### clearShadowCastingMeshes()

> **clearShadowCastingMeshes**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:560](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L560)

Clear the list of shadow-casting meshes. This will remove all meshes from the list

#### Returns

`void`

***

### clearShadowReceivingMaterials()

> **clearShadowReceivingMaterials**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:1077](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L1077)

Clear the list of materials that receive shadows. This will remove all materials from the list

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:1163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L1163)

Disposes the IBL shadow pipeline and associated resources

#### Returns

`void`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`dispose`](PostProcessRenderPipeline.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:1156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L1156)

Get the class name

#### Returns

`string`

"IBLShadowsRenderPipeline"

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`getClassName`](PostProcessRenderPipeline.md#getclassname)

***

### isReady()

> **isReady**(): `boolean` \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:1140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L1140)

Checks if the IBL shadow pipeline is ready to render shadows

#### Returns

`boolean` \| `null`

true if the IBL shadow pipeline is ready to render the shadows

***

### removeShadowCastingMesh()

> **removeShadowCastingMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:535](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L535)

Remove a mesh from the shadow-casting list. The mesh will no longer be written
to the voxel grid and will not cast shadows.

#### Parameters

##### mesh

[`Mesh`](Mesh.md) \| [`Mesh`](Mesh.md)[]

The mesh or list of meshes that you don't want to cast shadows.

#### Returns

`void`

***

### removeShadowReceivingMaterial()

> **removeShadowReceivingMaterial**(`material`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:1054](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L1054)

Remove a material from the list of materials that receive shadows. If no material
is provided, all materials in the scene will be removed.

#### Parameters

##### material

[`Material`](Material.md) \| [`Material`](Material.md)[]

The material or array of materials that will no longer receive shadows

#### Returns

`void`

***

### resetAccumulation()

> **resetAccumulation**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L171)

Reset the shadow accumulation. This has a similar affect to lowering the remanence for a single frame.
This is useful when making a sudden change to the IBL.

#### Returns

`void`

***

### setPrePassRenderer()

> **setPrePassRenderer**(`prePassRenderer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:274](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L274)

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

***

### toggleShadow()

> **toggleShadow**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:685](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L685)

Toggle the shadow tracing on or off

#### Parameters

##### enabled

`boolean`

Toggle the shadow tracing on or off

#### Returns

`void`

***

### updateSceneBounds()

> **updateSceneBounds**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:717](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L717)

Trigger the scene bounds of shadow-casters to be calculated. This is the world size that the voxel grid will cover and will always be a cube.

#### Returns

`void`

***

### updateVoxelization()

> **updateVoxelization**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts:702](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.ts#L702)

Trigger the scene to be re-voxelized. This should be run when any shadow-casters have been added, removed or moved.

#### Returns

`void`
