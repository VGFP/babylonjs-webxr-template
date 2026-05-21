[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphVolumetricLightingTask

# Class: FrameGraphVolumetricLightingTask

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L17)

A frame graph task that performs volumetric lighting.

## Extends

- [`FrameGraphTask`](FrameGraphTask.md)

## Constructors

### Constructor

> **new FrameGraphVolumetricLightingTask**(`name`, `frameGraph`, `enableExtinction?`): `FrameGraphVolumetricLightingTask`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L169)

Creates a new FrameGraphVolumetricLightingTask.

#### Parameters

##### name

`string`

The name of the task.

##### frameGraph

[`FrameGraph`](FrameGraph.md)

The frame graph to which the task belongs.

##### enableExtinction?

`boolean` = `false`

Whether to enable extinction in the volumetric lighting effect (default: false). If you don't plan to set extinction to something different than (0, 0, 0), you can disable this to save some performance.

#### Returns

`FrameGraphVolumetricLightingTask`

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L42)

The depth texture used for volumetric lighting calculations.
It must be the depth texture used to generate targetTexture.

***

### enableExtinction

> `readonly` **enableExtinction**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L99)

Whether to enable extinction in the volumetric lighting effect (default: false).
Read-only property set in the constructor.

***

### light

> **light**: [`DirectionalLight`](DirectionalLight.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L70)

The directional light used for volumetric lighting.

***

### lightingVolumeMesh

> **lightingVolumeMesh**: [`FrameGraphObjectList`](FrameGraphObjectList.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L65)

The mesh representing the lighting volume.
This is the mesh that will be rendered to create the volumetric lighting effect.

***

### lightingVolumeTexture?

> `optional` **lightingVolumeTexture?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L77)

The lighting volume texture (optional).
If not provided, a new texture will be created, with the same size, format and type as targetTexture.
This is the texture that will store the volumetric lighting information, before being blended to targetTexture.

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L156)

The output texture of the task. It will be the same as targetTexture.

***

### sourceSamplingMode

> **sourceSamplingMode**: `number` = `Constants.TEXTURE_BILINEAR_SAMPLINGMODE`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L36)

The sampling mode to use when blending the volumetric lighting texture with targetTexture.

***

### targetTexture

> **targetTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L31)

The target texture to which the volumetric lighting will be applied.

## Accessors

### camera

#### Get Signature

> **get** **camera**(): [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L48)

The camera used for volumetric lighting calculations.

##### Returns

[`Camera`](Camera.md)

#### Set Signature

> **set** **camera**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L52)

##### Parameters

###### value

[`Camera`](Camera.md)

##### Returns

`void`

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L43)

Whether the task is disabled.

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L47)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`disabled`](FrameGraphTask.md#disabled)

***

### extinction

#### Get Signature

> **get** **extinction**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L106)

The extinction coefficient for the volumetric lighting effect (default: (0, 0, 0) - no extinction).
This parameter controls how much light is absorbed and scattered as it travels through the medium.
Will only have an effect if enableExtinction is set to true in the constructor!

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **extinction**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L110)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### lightPower

#### Get Signature

> **get** **lightPower**(): [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L124)

The light power/color for the volumetric lighting effect (default: (1, 1, 1)).
This parameter controls the intensity and color of the light used for volumetric lighting.

##### Returns

[`Color3`](Color3.md)

#### Set Signature

> **set** **lightPower**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L128)

##### Parameters

###### value

[`Color3`](Color3.md)

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L133)

The name of the task.

##### Returns

`string`

#### Set Signature

> **set** **name**(`name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L137)

The name of the task.

##### Parameters

###### name

`string`

##### Returns

`void`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`name`](FrameGraphTask.md#name)

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

### phaseG

#### Get Signature

> **get** **phaseG**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L86)

The phase G parameter for the volumetric lighting effect (default: 0).
This parameter controls the anisotropy of the scattering.
A value of 0 means isotropic scattering, while a value of 1 means forward scattering and -1 means backward scattering.

##### Returns

`number`

#### Set Signature

> **set** **phaseG**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L90)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:305](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L305)

Disposes of the task.

#### Returns

`void`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`dispose`](FrameGraphTask.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:231](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L231)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`getClassName`](FrameGraphTask.md#getclassname)

***

### initAsync()

> **initAsync**(): `Promise`\<`unknown`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L214)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:222](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L222)

Checks if the task is ready to be executed.

#### Returns

`boolean`

True if the task is ready to be executed, else false.

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`isReady`](FrameGraphTask.md#isready)

***

### record()

> **record**(`skipCreationOfDisabledPasses?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:235](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L235)

Records the task in the frame graph. Use this function to add content (render passes, ...) to the task.

#### Parameters

##### skipCreationOfDisabledPasses?

`boolean` = `false`

If true, the disabled passe(s) won't be created.

#### Returns

`void`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`record`](FrameGraphTask.md#record)

***

### IsSupported()

> `static` **IsSupported**(`engine`, `enableExtinction?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/PostProcesses/volumetricLightingTask.ts#L24)

Returns whether volumetric lighting is supported by the engine.

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

The engine to check for volumetric lighting support.

##### enableExtinction?

`boolean` = `false`

Whether the extinction/dual-source blending path will be used.

#### Returns

`boolean`

True if volumetric lighting is supported, false otherwise.
