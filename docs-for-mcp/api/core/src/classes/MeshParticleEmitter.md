[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MeshParticleEmitter

# Class: MeshParticleEmitter

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts#L16)

Particle emitter emitting particles from the inside of a box.
It emits the particles randomly between 2 given directions.

## Implements

- [`IParticleEmitterType`](../interfaces/IParticleEmitterType.md)

## Constructors

### Constructor

> **new MeshParticleEmitter**(`mesh?`): `MeshParticleEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts#L64)

Creates a new instance MeshParticleEmitter

#### Parameters

##### mesh?

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\> = `null`

defines the mesh to use as source

#### Returns

`MeshParticleEmitter`

## Properties

### direction1

> **direction1**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts#L26)

Random direction of each particle after it has been emitted, between direction1 and direction2 vectors.

***

### direction2

> **direction2**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts#L30)

Random direction of each particle after it has been emitted, between direction1 and direction2 vectors.

***

### useMeshNormalsForDirection

> **useMeshNormalsForDirection**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts#L35)

Gets or sets a boolean indicating that particle directions must be built from mesh face normals

## Accessors

### mesh

#### Get Signature

> **get** **mesh**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts#L38)

Defines the mesh to use as source

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

#### Set Signature

> **set** **mesh**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts#L42)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

##### Returns

`void`

## Methods

### applyToShader()

> **applyToShader**(`uboOrEffect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts:159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts#L159)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts#L168)

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

> **clone**(): `MeshParticleEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts:147](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts#L147)

Clones the current emitter and returns a copy of it

#### Returns

`MeshParticleEmitter`

the new emitter

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`clone`](../interfaces/IParticleEmitterType.md#clone)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts:185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts#L185)

Returns the string "BoxParticleEmitter"

#### Returns

`string`

a string containing the class name

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`getClassName`](../interfaces/IParticleEmitterType.md#getclassname)

***

### getEffectDefines()

> **getEffectDefines**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts#L177)

Returns a string to use to update the GPU particles update shader

#### Returns

`string`

a string containing the defines string

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`getEffectDefines`](../interfaces/IParticleEmitterType.md#geteffectdefines)

***

### parse()

> **parse**(`serializationObject`, `scene`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts:210](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts#L210)

Parse properties from a JSON object

#### Parameters

##### serializationObject

`any`

defines the JSON object

##### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the hosting scene

#### Returns

`void`

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`parse`](../interfaces/IParticleEmitterType.md#parse)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts:193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts#L193)

Serializes the particle system to a JSON object.

#### Returns

`any`

the JSON object

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`serialize`](../interfaces/IParticleEmitterType.md#serialize)

***

### startDirectionFunction()

> **startDirectionFunction**(`worldMatrix`, `directionToUpdate`, `particle`, `isLocal`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts#L75)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/meshParticleEmitter.ts#L100)

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
