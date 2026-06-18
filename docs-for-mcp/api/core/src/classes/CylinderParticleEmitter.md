[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CylinderParticleEmitter

# Class: CylinderParticleEmitter

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L12)

Particle emitter emitting particles from the inside of a cylinder.
It emits the particles alongside the cylinder radius. The emission direction might be randomized.

## Extended by

- [`CylinderDirectedParticleEmitter`](CylinderDirectedParticleEmitter.md)

## Implements

- [`IParticleEmitterType`](../interfaces/IParticleEmitterType.md)

## Constructors

### Constructor

> **new CylinderParticleEmitter**(`radius?`, `height?`, `radiusRange?`, `directionRandomizer?`): `CylinderParticleEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L22)

Creates a new instance CylinderParticleEmitter

#### Parameters

##### radius?

`number` = `1`

the radius of the emission cylinder (1 by default)

##### height?

`number` = `1`

the height of the emission cylinder (1 by default)

##### radiusRange?

`number` = `1`

the range of the emission cylinder [0-1] 0 Surface only, 1 Entire Radius (1 by default)

##### directionRandomizer?

`number` = `0`

defines how much to randomize the particle direction [0-1]

#### Returns

`CylinderParticleEmitter`

## Properties

### directionRandomizer

> **directionRandomizer**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L38)

[0] How much to randomize the particle direction [0-1].

***

### height

> **height**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L30)

[1] The height of the emission cylinder.

***

### radius

> **radius**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L26)

[1] The radius of the emission cylinder.

***

### radiusRange

> **radiusRange**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L34)

[1] The range of emission [0-1] 0 Surface only, 1 Entire Radius.

## Methods

### applyToShader()

> **applyToShader**(`uboOrEffect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L115)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L126)

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

> **clone**(): `CylinderParticleEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L103)

Clones the current emitter and returns a copy of it

#### Returns

`CylinderParticleEmitter`

the new emitter

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`clone`](../interfaces/IParticleEmitterType.md#clone)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L145)

Returns the string "CylinderParticleEmitter"

#### Returns

`string`

a string containing the class name

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`getClassName`](../interfaces/IParticleEmitterType.md#getclassname)

***

### getEffectDefines()

> **getEffectDefines**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L137)

Returns a string to use to update the GPU particles update shader

#### Returns

`string`

a string containing the defines string

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`getEffectDefines`](../interfaces/IParticleEmitterType.md#geteffectdefines)

***

### parse()

> **parse**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L168)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L153)

Serializes the particle system to a JSON object.

#### Returns

`any`

the JSON object

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`serialize`](../interfaces/IParticleEmitterType.md#serialize)

***

### startDirectionFunction()

> **startDirectionFunction**(`worldMatrix`, `directionToUpdate`, `particle`, `isLocal`, `inverseWorldMatrix`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L49)

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

##### inverseWorldMatrix

[`Matrix`](Matrix.md)

defines the inverted world matrix to use if isLocal is false

#### Returns

`void`

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`startDirectionFunction`](../interfaces/IParticleEmitterType.md#startdirectionfunction)

***

### startPositionFunction()

> **startPositionFunction**(`worldMatrix`, `positionToUpdate`, `particle`, `isLocal`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L81)

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
