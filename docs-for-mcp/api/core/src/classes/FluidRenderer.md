[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FluidRenderer

# Class: FluidRenderer

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts#L171)

Class responsible for fluid rendering.
It is implementing the method described in https://developer.download.nvidia.com/presentations/2010/gdc/Direct3D_Effects.pdf

## Constructors

### Constructor

> **new FluidRenderer**(`scene`): `FluidRenderer`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts:206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts#L206)

Initializes the class

#### Parameters

##### scene

[`Scene`](Scene.md)

Scene in which the objects are part of

#### Returns

`FluidRenderer`

## Properties

### renderObjects

> `readonly` **renderObjects**: [`IFluidRenderingRenderObject`](../interfaces/IFluidRenderingRenderObject.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts#L187)

Retrieves all the render objects managed by the class

***

### targetRenderers

> `readonly` **targetRenderers**: [`FluidRenderingTargetRenderer`](FluidRenderingTargetRenderer.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts#L190)

Retrieves all the render target renderers managed by the class

## Accessors

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts#L198)

Gets the shader language used in this renderer

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

## Methods

### addCustomParticles()

> **addCustomParticles**(`buffers`, `numParticles`, `generateDiffuseTexture?`, `targetRenderer?`, `camera?`): [`IFluidRenderingRenderObject`](../interfaces/IFluidRenderingRenderObject.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts:291](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts#L291)

Adds a custom particle set to the fluid renderer.

#### Parameters

##### buffers

The list of buffers (should contain at least a "position" buffer!)

##### numParticles

`number`

Number of particles in each buffer

##### generateDiffuseTexture?

`boolean`

True if you want to generate a diffuse texture from buffers and use it as part of the fluid rendering (default: false). For the texture to be generated correctly, you need a "color" buffer in the set!

##### targetRenderer?

[`FluidRenderingTargetRenderer`](FluidRenderingTargetRenderer.md)

The target renderer used to display the particle system as a fluid. If not provided, the method will create a new one

##### camera?

[`Camera`](Camera.md)

The camera used by the target renderer (if the target renderer is created by the method)

#### Returns

[`IFluidRenderingRenderObject`](../interfaces/IFluidRenderingRenderObject.md)

the render object corresponding to the custom particle set

***

### addParticleSystem()

> **addParticleSystem**(`ps`, `generateDiffuseTexture?`, `targetRenderer?`, `camera?`): [`IFluidRenderingRenderObject`](../interfaces/IFluidRenderingRenderObject.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts:253](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts#L253)

Adds a particle system to the fluid renderer.

#### Parameters

##### ps

[`IParticleSystem`](../interfaces/IParticleSystem.md)

particle system

##### generateDiffuseTexture?

`boolean`

True if you want to generate a diffuse texture from the particle system and use it as part of the fluid rendering (default: false)

##### targetRenderer?

[`FluidRenderingTargetRenderer`](FluidRenderingTargetRenderer.md)

The target renderer used to display the particle system as a fluid. If not provided, the method will create a new one

##### camera?

[`Camera`](Camera.md)

The camera used by the target renderer (if the target renderer is created by the method)

#### Returns

[`IFluidRenderingRenderObject`](../interfaces/IFluidRenderingRenderObject.md)

the render object corresponding to the particle system

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts:563](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts#L563)

Disposes of all the resources used by the class

#### Returns

`void`

***

### getRenderObjectFromParticleSystem()

> **getRenderObjectFromParticleSystem**(`ps`): [`Nullable`](../type-aliases/Nullable.md)\<[`IFluidRenderingRenderObject`](../interfaces/IFluidRenderingRenderObject.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts:240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts#L240)

Gets the render object corresponding to a particle system (null if the particle system is not rendered as a fluid)

#### Parameters

##### ps

[`IParticleSystem`](../interfaces/IParticleSystem.md)

The particle system

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IFluidRenderingRenderObject`](../interfaces/IFluidRenderingRenderObject.md)\>

the render object corresponding to this particle system if any, otherwise null

***

### recreate()

> **recreate**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts#L230)

Reinitializes the class
Can be used if you change the object priority (FluidRenderingObject.priority), to make sure the objects are rendered in the right order

#### Returns

`void`

***

### removeRenderObject()

> **removeRenderObject**(`renderObject`, `removeUnusedTargetRenderer?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts:332](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts#L332)

Removes a render object from the fluid renderer

#### Parameters

##### renderObject

[`IFluidRenderingRenderObject`](../interfaces/IFluidRenderingRenderObject.md)

the render object to remove

##### removeUnusedTargetRenderer?

`boolean` = `true`

True to remove/dispose of the target renderer if it's not used anymore (default: true)

#### Returns

`boolean`

True if the render object has been found and released, else false
