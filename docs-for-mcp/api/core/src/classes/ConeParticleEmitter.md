[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ConeParticleEmitter

# Class: ConeParticleEmitter

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L15)

Particle emitter emitting particles from the inside of a cone.
It emits the particles alongside the cone volume from the base to the particle.
The emission direction might be randomized.

## Extended by

- [`ConeDirectedParticleEmitter`](ConeDirectedParticleEmitter.md)

## Implements

- [`IParticleEmitterType`](../interfaces/IParticleEmitterType.md)

## Constructors

### Constructor

> **new ConeParticleEmitter**(`radius?`, `angle?`, `directionRandomizer?`): `ConeParticleEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L73)

Creates a new instance ConeParticleEmitter

#### Parameters

##### radius?

`number` = `1`

the radius of the emission cone (1 by default)

##### angle?

`number` = `Math.PI`

the cone base angle (PI by default)

##### directionRandomizer?

`number` = `0`

defines how much to randomize the particle direction [0-1] (default is 0)

#### Returns

`ConeParticleEmitter`

## Properties

### directionRandomizer

> **directionRandomizer**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L77)

[0] defines how much to randomize the particle direction [0-1] (default is 0)

***

### emitFromSpawnPointOnly

> **emitFromSpawnPointOnly**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L33)

Gets or sets a value indicating if all the particles should be emitted from the spawn point only (the base of the cone)

***

### heightRange

> **heightRange**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L28)

Gets or sets a value indicating where on the height the start position should be picked (1 = everywhere, 0 = only surface)

***

### radiusRange

> **radiusRange**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L23)

Gets or sets a value indicating where on the radius the start position should be picked (1 = everywhere, 0 = only surface)

## Accessors

### angle

#### Get Signature

> **get** **angle**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L50)

Gets or sets the angle of the emission cone

##### Returns

`number`

#### Set Signature

> **set** **angle**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L54)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### radius

#### Get Signature

> **get** **radius**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L38)

Gets or sets the radius of the emission cone

##### Returns

`number`

#### Set Signature

> **set** **radius**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L42)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### applyToShader()

> **applyToShader**(`uboOrEffect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L159)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L170)

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

> **clone**(): `ConeParticleEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:147](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L147)

Clones the current emitter and returns a copy of it

#### Returns

`ConeParticleEmitter`

the new emitter

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`clone`](../interfaces/IParticleEmitterType.md#clone)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L195)

Returns the string "ConeParticleEmitter"

#### Returns

`string`

a string containing the class name

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`getClassName`](../interfaces/IParticleEmitterType.md#getclassname)

***

### getEffectDefines()

> **getEffectDefines**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L181)

Returns a string to use to update the GPU particles update shader

#### Returns

`string`

a string containing the defines string

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`getEffectDefines`](../interfaces/IParticleEmitterType.md#geteffectdefines)

***

### parse()

> **parse**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:221](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L221)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:203](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L203)

Serializes the particle system to a JSON object.

#### Returns

`any`

the JSON object

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`serialize`](../interfaces/IParticleEmitterType.md#serialize)

***

### startDirectionFunction()

> **startDirectionFunction**(`worldMatrix`, `directionToUpdate`, `particle`, `isLocal`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L90)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L115)

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
