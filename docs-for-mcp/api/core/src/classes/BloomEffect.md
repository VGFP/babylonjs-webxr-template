[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BloomEffect

# Class: BloomEffect

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/bloomEffect.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/bloomEffect.ts#L15)

The bloom effect spreads bright areas of an image to simulate artifacts seen in cameras

## Extends

- [`PostProcessRenderEffect`](PostProcessRenderEffect.md)

## Constructors

### Constructor

> **new BloomEffect**(`sceneOrEngine`, `bloomScale`, `bloomWeight`, `bloomKernel`, `pipelineTextureType?`, `blockCompilation?`): `BloomEffect`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/bloomEffect.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/bloomEffect.ts#L74)

Creates a new instance of

#### Parameters

##### sceneOrEngine

[`Scene`](Scene.md) \| [`AbstractEngine`](AbstractEngine.md)

The scene or engine the effect belongs to.

##### bloomScale

`number`

The ratio of the blur texture to the input texture that should be used to compute the bloom.

##### bloomWeight

`number`

The strength of bloom.

##### bloomKernel

`number`

The size of the kernel to be used when applying the blur.

##### pipelineTextureType?

`number` = `0`

The type of texture to be used when performing the post processing.

##### blockCompilation?

`boolean` = `false`

If compilation of the shader should not be done in the constructor. The updateEffect method can be used to compile the shader at a later time. (default: false)

#### Returns

`BloomEffect`

#### See

BloomEffect

#### Overrides

[`PostProcessRenderEffect`](PostProcessRenderEffect.md).[`constructor`](PostProcessRenderEffect.md#constructor)

## Accessors

### bloomScale

#### Get Signature

> **get** **bloomScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/bloomEffect.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/bloomEffect.ts#L59)

##### Returns

`number`

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderEffect.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderEffect.ts#L49)

Checks if all the post processes in the effect are supported.

##### Returns

`boolean`

#### Inherited from

[`PostProcessRenderEffect`](PostProcessRenderEffect.md).[`isSupported`](PostProcessRenderEffect.md#issupported)

***

### kernel

#### Get Signature

> **get** **kernel**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/bloomEffect.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/bloomEffect.ts#L52)

Specifies the size of the bloom blur kernel, relative to the final output size

##### Returns

`number`

#### Set Signature

> **set** **kernel**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/bloomEffect.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/bloomEffect.ts#L55)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### threshold

#### Get Signature

> **get** **threshold**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/bloomEffect.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/bloomEffect.ts#L32)

The luminance threshold to find bright areas of the image to bloom.

##### Returns

`number`

#### Set Signature

> **set** **threshold**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/bloomEffect.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/bloomEffect.ts#L35)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### weight

#### Get Signature

> **get** **weight**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/bloomEffect.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/bloomEffect.ts#L42)

The strength of the bloom.

##### Returns

`number`

#### Set Signature

> **set** **weight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/bloomEffect.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/bloomEffect.ts#L45)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### disposeEffects()

> **disposeEffects**(`camera?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/bloomEffect.ts:138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/bloomEffect.ts#L138)

Disposes each of the internal effects for a given camera.

#### Parameters

##### camera?

[`Camera`](Camera.md)

The camera to dispose the effect on.

#### Returns

`void`

***

### getPostProcesses()

> **getPostProcesses**(`camera?`): [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderEffect.ts:254](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderEffect.ts#L254)

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
