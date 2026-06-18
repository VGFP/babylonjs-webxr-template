[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IParticleEmitterType

# Interface: IParticleEmitterType

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts#L13)

Particle emitter represents a volume emitting particles.
This is the responsibility of the implementation to define the volume shape like cone/sphere/box.

## Methods

### applyToShader()

> **applyToShader**(`uboOrEffect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts#L43)

Called by the GPUParticleSystem to setup the update shader

#### Parameters

##### uboOrEffect

`UniformBufferEffectCommonAccessor`

defines the update shader

#### Returns

`void`

***

### buildUniformLayout()

> **buildUniformLayout**(`ubo`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts#L49)

Creates the structure of the ubo for this particle emitter

#### Parameters

##### ubo

[`UniformBuffer`](../classes/UniformBuffer.md)

ubo to create the structure for

#### Returns

`void`

***

### clone()

> **clone**(): `IParticleEmitterType`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts#L37)

Clones the current emitter and returns a copy of it

#### Returns

`IParticleEmitterType`

the new emitter

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts#L61)

Returns a string representing the class name

#### Returns

`string`

a string containing the class name

***

### getEffectDefines()

> **getEffectDefines**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts#L55)

Returns a string to use to update the GPU particles update shader

#### Returns

`string`

the effect defines string

***

### parse()

> **parse**(`serializationObject`, `scene`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts#L74)

Parse properties from a JSON object

#### Parameters

##### serializationObject

`any`

defines the JSON object

##### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\>

defines the hosting scene

#### Returns

`void`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts#L67)

Serializes the particle system to a JSON object.

#### Returns

`any`

the JSON object

***

### startDirectionFunction()

> **startDirectionFunction**(`worldMatrix`, `directionToUpdate`, `particle`, `isLocal`, `inverseWorldMatrix`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts#L22)

Called by the particle System when the direction is computed for the created particle.

#### Parameters

##### worldMatrix

[`Matrix`](../classes/Matrix.md)

is the world matrix of the particle system

##### directionToUpdate

[`Vector3`](../classes/Vector3.md)

is the direction vector to update with the result

##### particle

[`Particle`](../classes/Particle.md)

is the particle we are computed the direction for

##### isLocal

`boolean`

defines if the direction should be set in local space

##### inverseWorldMatrix

[`Matrix`](../classes/Matrix.md)

defines the inverted world matrix to use if isLocal is false

#### Returns

`void`

***

### startPositionFunction()

> **startPositionFunction**(`worldMatrix`, `positionToUpdate`, `particle`, `isLocal`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/IParticleEmitterType.ts#L31)

Called by the particle System when the position is computed for the created particle.

#### Parameters

##### worldMatrix

[`Matrix`](../classes/Matrix.md)

is the world matrix of the particle system

##### positionToUpdate

[`Vector3`](../classes/Vector3.md)

is the position vector to update with the result

##### particle

[`Particle`](../classes/Particle.md)

is the particle we are computed the position for

##### isLocal

`boolean`

defines if the position should be set in local space

#### Returns

`void`
