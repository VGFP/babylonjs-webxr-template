[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / HemisphericParticleEmitter

# Class: HemisphericParticleEmitter

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts#L12)

Particle emitter emitting particles from the inside of a hemisphere.
It emits the particles alongside the hemisphere radius. The emission direction might be randomized.

## Implements

- [`IParticleEmitterType`](../interfaces/IParticleEmitterType.md)

## Constructors

### Constructor

> **new HemisphericParticleEmitter**(`radius?`, `radiusRange?`, `directionRandomizer?`): `HemisphericParticleEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts#L19)

Creates a new instance HemisphericParticleEmitter

#### Parameters

##### radius?

`number` = `1`

the radius of the emission hemisphere (1 by default)

##### radiusRange?

`number` = `1`

the range of the emission hemisphere [0-1] 0 Surface only, 1 Entire Radius (1 by default)

##### directionRandomizer?

`number` = `0`

defines how much to randomize the particle direction [0-1]

#### Returns

`HemisphericParticleEmitter`

## Properties

### directionRandomizer

> **directionRandomizer**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts#L31)

[0] How much to randomize the particle direction [0-1].

***

### radius

> **radius**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts#L23)

[1] The radius of the emission hemisphere.

***

### radiusRange

> **radiusRange**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts#L27)

[1] The range of emission [0-1] 0 Surface only, 1 Entire Radius.

## Methods

### applyToShader()

> **applyToShader**(`uboOrEffect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts#L99)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts#L109)

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

> **clone**(): `HemisphericParticleEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts#L87)

Clones the current emitter and returns a copy of it

#### Returns

`HemisphericParticleEmitter`

the new emitter

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`clone`](../interfaces/IParticleEmitterType.md#clone)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts#L127)

Returns the string "HemisphericParticleEmitter"

#### Returns

`string`

a string containing the class name

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`getClassName`](../interfaces/IParticleEmitterType.md#getclassname)

***

### getEffectDefines()

> **getEffectDefines**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts#L119)

Returns a string to use to update the GPU particles update shader

#### Returns

`string`

a string containing the defines string

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`getEffectDefines`](../interfaces/IParticleEmitterType.md#geteffectdefines)

***

### parse()

> **parse**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts#L149)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts#L135)

Serializes the particle system to a JSON object.

#### Returns

`any`

the JSON object

#### Implementation of

[`IParticleEmitterType`](../interfaces/IParticleEmitterType.md).[`serialize`](../interfaces/IParticleEmitterType.md#serialize)

***

### startDirectionFunction()

> **startDirectionFunction**(`worldMatrix`, `directionToUpdate`, `particle`, `isLocal`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts#L41)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/hemisphericParticleEmitter.ts#L66)

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
