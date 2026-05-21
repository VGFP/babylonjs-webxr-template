[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SphereDirectedParticleEmitter

# Class: SphereDirectedParticleEmitter

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts#L160)

Particle emitter emitting particles from the inside of a sphere.
It emits the particles randomly between two vectors.

## Extends

- [`SphereParticleEmitter`](SphereParticleEmitter.md)

## Constructors

### Constructor

> **new SphereDirectedParticleEmitter**(`radius?`, `direction1?`, `direction2?`): `SphereDirectedParticleEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts#L167)

Creates a new instance SphereDirectedParticleEmitter

#### Parameters

##### radius?

`number` = `1`

the radius of the emission sphere (1 by default)

##### direction1?

[`Vector3`](Vector3.md) = `...`

the min limit of the emission direction (up vector by default)

##### direction2?

[`Vector3`](Vector3.md) = `...`

the max limit of the emission direction (up vector by default)

#### Returns

`SphereDirectedParticleEmitter`

#### Overrides

[`SphereParticleEmitter`](SphereParticleEmitter.md).[`constructor`](SphereParticleEmitter.md#constructor)

## Properties

### direction1

> **direction1**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts#L172)

[Up vector] The min limit of the emission direction.

***

### direction2

> **direction2**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts#L176)

[Up vector] The max limit of the emission direction.

***

### directionRandomizer

> **directionRandomizer**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts#L31)

[0] How much to randomize the particle direction [0-1].

#### Inherited from

[`SphereParticleEmitter`](SphereParticleEmitter.md).[`directionRandomizer`](SphereParticleEmitter.md#directionrandomizer)

***

### radius

> **radius**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts#L23)

[1] The radius of the emission sphere.

#### Inherited from

[`SphereParticleEmitter`](SphereParticleEmitter.md).[`radius`](SphereParticleEmitter.md#radius)

***

### radiusRange

> **radiusRange**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts#L27)

[1] The range of emission [0-1] 0 Surface only, 1 Entire Radius.

#### Inherited from

[`SphereParticleEmitter`](SphereParticleEmitter.md).[`radiusRange`](SphereParticleEmitter.md#radiusrange)

## Methods

### applyToShader()

> **applyToShader**(`uboOrEffect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts:217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts#L217)

Called by the GPUParticleSystem to setup the update shader

#### Parameters

##### uboOrEffect

`UniformBufferEffectCommonAccessor`

defines the update shader

#### Returns

`void`

#### Overrides

[`SphereParticleEmitter`](SphereParticleEmitter.md).[`applyToShader`](SphereParticleEmitter.md#applytoshader)

***

### buildUniformLayout()

> **buildUniformLayout**(`ubo`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts:228](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts#L228)

Creates the structure of the ubo for this particle emitter

#### Parameters

##### ubo

[`UniformBuffer`](UniformBuffer.md)

ubo to create the structure for

#### Returns

`void`

#### Overrides

[`SphereParticleEmitter`](SphereParticleEmitter.md).[`buildUniformLayout`](SphereParticleEmitter.md#builduniformlayout)

***

### clone()

> **clone**(): `SphereDirectedParticleEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts:205](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts#L205)

Clones the current emitter and returns a copy of it

#### Returns

`SphereDirectedParticleEmitter`

the new emitter

#### Overrides

[`SphereParticleEmitter`](SphereParticleEmitter.md).[`clone`](SphereParticleEmitter.md#clone)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts:247](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts#L247)

Returns the string "SphereDirectedParticleEmitter"

#### Returns

`string`

a string containing the class name

#### Overrides

[`SphereParticleEmitter`](SphereParticleEmitter.md).[`getClassName`](SphereParticleEmitter.md#getclassname)

***

### getEffectDefines()

> **getEffectDefines**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts:239](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts#L239)

Returns a string to use to update the GPU particles update shader

#### Returns

`string`

a string containing the defines string

#### Overrides

[`SphereParticleEmitter`](SphereParticleEmitter.md).[`getEffectDefines`](SphereParticleEmitter.md#geteffectdefines)

***

### parse()

> **parse**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts:268](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts#L268)

Parse properties from a JSON object

#### Parameters

##### serializationObject

`any`

defines the JSON object

#### Returns

`void`

#### Overrides

[`SphereParticleEmitter`](SphereParticleEmitter.md).[`parse`](SphereParticleEmitter.md#parse)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts#L255)

Serializes the particle system to a JSON object.

#### Returns

`any`

the JSON object

#### Overrides

[`SphereParticleEmitter`](SphereParticleEmitter.md).[`serialize`](SphereParticleEmitter.md#serialize)

***

### startDirectionFunction()

> **startDirectionFunction**(`worldMatrix`, `directionToUpdate`, `particle`, `isLocal`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts:188](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts#L188)

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

is the particle we are computed the position for

##### isLocal

`boolean`

defines if the direction should be set in local space

#### Returns

`void`

#### Overrides

[`SphereParticleEmitter`](SphereParticleEmitter.md).[`startDirectionFunction`](SphereParticleEmitter.md#startdirectionfunction)

***

### startPositionFunction()

> **startPositionFunction**(`worldMatrix`, `positionToUpdate`, `particle`, `isLocal`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/sphereParticleEmitter.ts#L66)

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

[`SphereParticleEmitter`](SphereParticleEmitter.md).[`startPositionFunction`](SphereParticleEmitter.md#startpositionfunction)
