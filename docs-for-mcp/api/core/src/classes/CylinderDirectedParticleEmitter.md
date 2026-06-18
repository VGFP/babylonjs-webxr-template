[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CylinderDirectedParticleEmitter

# Class: CylinderDirectedParticleEmitter

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L180)

Particle emitter emitting particles from the inside of a cylinder.
It emits the particles randomly between two vectors.

## Extends

- [`CylinderParticleEmitter`](CylinderParticleEmitter.md)

## Constructors

### Constructor

> **new CylinderDirectedParticleEmitter**(`radius?`, `height?`, `radiusRange?`, `direction1?`, `direction2?`): `CylinderDirectedParticleEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L189)

Creates a new instance CylinderDirectedParticleEmitter

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

##### direction1?

[`Vector3`](Vector3.md) = `...`

the min limit of the emission direction (up vector by default)

##### direction2?

[`Vector3`](Vector3.md) = `...`

the max limit of the emission direction (up vector by default)

#### Returns

`CylinderDirectedParticleEmitter`

#### Overrides

[`CylinderParticleEmitter`](CylinderParticleEmitter.md).[`constructor`](CylinderParticleEmitter.md#constructor)

## Properties

### direction1

> **direction1**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L196)

[Up vector] The min limit of the emission direction.

***

### direction2

> **direction2**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L200)

[Up vector] The max limit of the emission direction.

***

### directionRandomizer

> **directionRandomizer**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L38)

[0] How much to randomize the particle direction [0-1].

#### Inherited from

[`CylinderParticleEmitter`](CylinderParticleEmitter.md).[`directionRandomizer`](CylinderParticleEmitter.md#directionrandomizer)

***

### height

> **height**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L30)

[1] The height of the emission cylinder.

#### Inherited from

[`CylinderParticleEmitter`](CylinderParticleEmitter.md).[`height`](CylinderParticleEmitter.md#height)

***

### radius

> **radius**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L26)

[1] The radius of the emission cylinder.

#### Inherited from

[`CylinderParticleEmitter`](CylinderParticleEmitter.md).[`radius`](CylinderParticleEmitter.md#radius)

***

### radiusRange

> **radiusRange**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L34)

[1] The range of emission [0-1] 0 Surface only, 1 Entire Radius.

#### Inherited from

[`CylinderParticleEmitter`](CylinderParticleEmitter.md).[`radiusRange`](CylinderParticleEmitter.md#radiusrange)

## Methods

### applyToShader()

> **applyToShader**(`uboOrEffect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L239)

Called by the GPUParticleSystem to setup the update shader

#### Parameters

##### uboOrEffect

`UniformBufferEffectCommonAccessor`

defines the update shader

#### Returns

`void`

#### Overrides

[`CylinderParticleEmitter`](CylinderParticleEmitter.md).[`applyToShader`](CylinderParticleEmitter.md#applytoshader)

***

### buildUniformLayout()

> **buildUniformLayout**(`ubo`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L251)

Creates the structure of the ubo for this particle emitter

#### Parameters

##### ubo

[`UniformBuffer`](UniformBuffer.md)

ubo to create the structure for

#### Returns

`void`

#### Overrides

[`CylinderParticleEmitter`](CylinderParticleEmitter.md).[`buildUniformLayout`](CylinderParticleEmitter.md#builduniformlayout)

***

### clone()

> **clone**(): `CylinderDirectedParticleEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:227](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L227)

Clones the current emitter and returns a copy of it

#### Returns

`CylinderDirectedParticleEmitter`

the new emitter

#### Overrides

[`CylinderParticleEmitter`](CylinderParticleEmitter.md).[`clone`](CylinderParticleEmitter.md#clone)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L271)

Returns the string "CylinderDirectedParticleEmitter"

#### Returns

`string`

a string containing the class name

#### Overrides

[`CylinderParticleEmitter`](CylinderParticleEmitter.md).[`getClassName`](CylinderParticleEmitter.md#getclassname)

***

### getEffectDefines()

> **getEffectDefines**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:263](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L263)

Returns a string to use to update the GPU particles update shader

#### Returns

`string`

a string containing the defines string

#### Overrides

[`CylinderParticleEmitter`](CylinderParticleEmitter.md).[`getEffectDefines`](CylinderParticleEmitter.md#geteffectdefines)

***

### parse()

> **parse**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:292](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L292)

Parse properties from a JSON object

#### Parameters

##### serializationObject

`any`

defines the JSON object

#### Returns

`void`

#### Overrides

[`CylinderParticleEmitter`](CylinderParticleEmitter.md).[`parse`](CylinderParticleEmitter.md#parse)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:279](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L279)

Serializes the particle system to a JSON object.

#### Returns

`any`

the JSON object

#### Overrides

[`CylinderParticleEmitter`](CylinderParticleEmitter.md).[`serialize`](CylinderParticleEmitter.md#serialize)

***

### startDirectionFunction()

> **startDirectionFunction**(`worldMatrix`, `directionToUpdate`, `_particle`, `isLocal`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts:212](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/EmitterTypes/cylinderParticleEmitter.ts#L212)

Called by the particle System when the direction is computed for the created particle.

#### Parameters

##### worldMatrix

[`Matrix`](Matrix.md)

is the world matrix of the particle system

##### directionToUpdate

[`Vector3`](Vector3.md)

is the direction vector to update with the result

##### \_particle

[`Particle`](Particle.md)

is the particle we are computed the direction for

##### isLocal

`boolean`

defines if the direction should be set in local space

#### Returns

`void`

#### Overrides

[`CylinderParticleEmitter`](CylinderParticleEmitter.md).[`startDirectionFunction`](CylinderParticleEmitter.md#startdirectionfunction)

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

#### Inherited from

[`CylinderParticleEmitter`](CylinderParticleEmitter.md).[`startPositionFunction`](CylinderParticleEmitter.md#startpositionfunction)
