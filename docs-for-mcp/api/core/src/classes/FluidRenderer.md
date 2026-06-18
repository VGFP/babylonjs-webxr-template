[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FluidRenderer

# Class: FluidRenderer

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L123)

Class responsible for fluid rendering.
It is implementing the method described in https://developer.download.nvidia.com/presentations/2010/gdc/Direct3D_Effects.pdf

## Constructors

### Constructor

> **new FluidRenderer**(`scene`): `FluidRenderer`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L158)

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

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L139)

Retrieves all the render objects managed by the class

***

### targetRenderers

> `readonly` **targetRenderers**: [`FluidRenderingTargetRenderer`](FluidRenderingTargetRenderer.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L142)

Retrieves all the render target renderers managed by the class

## Accessors

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L150)

Gets the shader language used in this renderer

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

## Methods

### addCustomParticles()

> **addCustomParticles**(`buffers`, `numParticles`, `generateDiffuseTexture?`, `targetRenderer?`, `camera?`): [`IFluidRenderingRenderObject`](../interfaces/IFluidRenderingRenderObject.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:243](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L243)

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

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L205)

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

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:515](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L515)

Disposes of all the resources used by the class

#### Returns

`void`

***

### getRenderObjectFromParticleSystem()

> **getRenderObjectFromParticleSystem**(`ps`): [`Nullable`](../type-aliases/Nullable.md)\<[`IFluidRenderingRenderObject`](../interfaces/IFluidRenderingRenderObject.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:192](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L192)

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

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L182)

Reinitializes the class
Can be used if you change the object priority (FluidRenderingObject.priority), to make sure the objects are rendered in the right order

#### Returns

`void`

***

### removeRenderObject()

> **removeRenderObject**(`renderObject`, `removeUnusedTargetRenderer?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:284](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L284)

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
