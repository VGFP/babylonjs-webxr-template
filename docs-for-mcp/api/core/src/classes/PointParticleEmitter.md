[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PointParticleEmitter

# Class: PointParticleEmitter

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts#L12)

Particle emitter emitting particles from a point.
It emits the particles randomly between 2 given directions.

## Implements

- [`IParticleEmitterType`](../interfaces/IParticleEmitterType.md)

## Constructors

### Constructor

> **new PointParticleEmitter**(): `PointParticleEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts#L25)

Creates a new instance PointParticleEmitter

#### Returns

`PointParticleEmitter`

## Properties

### direction1

> **direction1**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts#L16)

Random direction of each particle after it has been emitted, between direction1 and direction2 vectors.

***

### direction2

> **direction2**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts#L20)

Random direction of each particle after it has been emitted, between direction1 and direction2 vectors.

## Methods

### applyToShader()

> **applyToShader**(`uboOrEffect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts#L78)

Called by the GPUParticleSystem to setup the update shader

#### Parameters

##### uboOrEffect

`UniformBufferEffectCommonAccessor`

defines the update shader

#### Returns

`void`

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`applyToShader`](../interfaces/IParticleEmitterType.md#applytoshader)

***

### buildUniformLayout()

> **buildUniformLayout**(`ubo`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts#L87)

Creates the structure of the ubo for this particle emitter

#### Parameters

##### ubo

[`UniformBuffer`](UniformBuffer.md)

ubo to create the structure for

#### Returns

`void`

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`buildUniformLayout`](../interfaces/IParticleEmitterType.md#builduniformlayout)

***

### clone()

> **clone**(): `PointParticleEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts#L66)

Clones the current emitter and returns a copy of it

#### Returns

`PointParticleEmitter`

the new emitter

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`clone`](../interfaces/IParticleEmitterType.md#clone)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts#L104)

Returns the string "PointParticleEmitter"

#### Returns

`string`

a string containing the class name

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`getClassName`](../interfaces/IParticleEmitterType.md#getclassname)

***

### getEffectDefines()

> **getEffectDefines**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts#L96)

Returns a string to use to update the GPU particles update shader

#### Returns

`string`

a string containing the defines string

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`getEffectDefines`](../interfaces/IParticleEmitterType.md#geteffectdefines)

***

### parse()

> **parse**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts#L126)

Parse properties from a JSON object

#### Parameters

##### serializationObject

`any`

defines the JSON object

#### Returns

`void`

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`parse`](../interfaces/IParticleEmitterType.md#parse)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts#L112)

Serializes the particle system to a JSON object.

#### Returns

`any`

the JSON object

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`serialize`](../interfaces/IParticleEmitterType.md#serialize)

***

### startDirectionFunction()

> **startDirectionFunction**(`worldMatrix`, `directionToUpdate`, `particle`, `isLocal`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts#L34)

Called by the particle System when the direction is computed for the created particle.

#### Parameters

##### worldMatrix

[`Matrix`](Matrix.md)

is the world matrix of the particle system

##### directionToUpdate

[`Vector3`](Vector3.md)

is the direction vector to update with the result

##### particle

[`Particle`](Particle.md)

is the particle we are computed the direction for

##### isLocal

`boolean`

defines if the direction should be set in local space

#### Returns

`void`

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`startDirectionFunction`](../interfaces/IParticleEmitterType.md#startdirectionfunction)

***

### startPositionFunction()

> **startPositionFunction**(`worldMatrix`, `positionToUpdate`, `particle`, `isLocal`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/pointParticleEmitter.ts#L54)

Called by the particle System when the position is computed for the created particle.

#### Parameters

##### worldMatrix

[`Matrix`](Matrix.md)

is the world matrix of the particle system

##### positionToUpdate

[`Vector3`](Vector3.md)

is the position vector to update with the result

##### particle

[`Particle`](Particle.md)

is the particle we are computed the position for

##### isLocal

`boolean`

defines if the position should be set in local space

#### Returns

`void`

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`startPositionFunction`](../interfaces/IParticleEmitterType.md#startpositionfunction)
