[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ConeDirectedParticleEmitter

# Class: ConeDirectedParticleEmitter

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:231](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L231)

Particle emitter emitting particles from the inside of a cone.
It emits the particles alongside the cone volume from the base to the particle.
The emission direction might be randomized.

## Extends

- [`ConeParticleEmitter`](ConeParticleEmitter.md)

## Constructors

### Constructor

> **new ConeDirectedParticleEmitter**(`radius?`, `angle?`, `direction1?`, `direction2?`): `ConeDirectedParticleEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L232)

#### Parameters

##### radius?

`number` = `1`

##### angle?

`number` = `Math.PI`

##### direction1?

[`Vector3`](Vector3.md) = `...`

[Up vector] The min limit of the emission direction.

##### direction2?

[`Vector3`](Vector3.md) = `...`

[Up vector] The max limit of the emission direction.

#### Returns

`ConeDirectedParticleEmitter`

#### Overrides

[`ConeParticleEmitter`](ConeParticleEmitter.md).[`constructor`](ConeParticleEmitter.md#constructor)

## Properties

### direction1

> **direction1**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:238](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L238)

[Up vector] The min limit of the emission direction.

***

### direction2

> **direction2**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:242](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L242)

[Up vector] The max limit of the emission direction.

***

### directionRandomizer

> **directionRandomizer**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L77)

[0] defines how much to randomize the particle direction [0-1] (default is 0)

#### Inherited from

[`ConeParticleEmitter`](ConeParticleEmitter.md).[`directionRandomizer`](ConeParticleEmitter.md#directionrandomizer)

***

### emitFromSpawnPointOnly

> **emitFromSpawnPointOnly**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L33)

Gets or sets a value indicating if all the particles should be emitted from the spawn point only (the base of the cone)

#### Inherited from

[`ConeParticleEmitter`](ConeParticleEmitter.md).[`emitFromSpawnPointOnly`](ConeParticleEmitter.md#emitfromspawnpointonly)

***

### heightRange

> **heightRange**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L28)

Gets or sets a value indicating where on the height the start position should be picked (1 = everywhere, 0 = only surface)

#### Inherited from

[`ConeParticleEmitter`](ConeParticleEmitter.md).[`heightRange`](ConeParticleEmitter.md#heightrange)

***

### radiusRange

> **radiusRange**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L23)

Gets or sets a value indicating where on the radius the start position should be picked (1 = everywhere, 0 = only surface)

#### Inherited from

[`ConeParticleEmitter`](ConeParticleEmitter.md).[`radiusRange`](ConeParticleEmitter.md#radiusrange)

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

#### Inherited from

[`ConeParticleEmitter`](ConeParticleEmitter.md).[`angle`](ConeParticleEmitter.md#angle)

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

#### Inherited from

[`ConeParticleEmitter`](ConeParticleEmitter.md).[`radius`](ConeParticleEmitter.md#radius)

## Methods

### applyToShader()

> **applyToShader**(`uboOrEffect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:283](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L283)

Called by the GPUParticleSystem to setup the update shader

#### Parameters

##### uboOrEffect

`UniformBufferEffectCommonAccessor`

defines the update shader

#### Returns

`void`

#### Overrides

[`ConeParticleEmitter`](ConeParticleEmitter.md).[`applyToShader`](ConeParticleEmitter.md#applytoshader)

***

### buildUniformLayout()

> **buildUniformLayout**(`ubo`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:293](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L293)

Creates the structure of the ubo for this particle emitter

#### Parameters

##### ubo

[`UniformBuffer`](UniformBuffer.md)

ubo to create the structure for

#### Returns

`void`

#### Overrides

[`ConeParticleEmitter`](ConeParticleEmitter.md).[`buildUniformLayout`](ConeParticleEmitter.md#builduniformlayout)

***

### clone()

> **clone**(): `ConeDirectedParticleEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L271)

Clones the current emitter and returns a copy of it

#### Returns

`ConeDirectedParticleEmitter`

the new emitter

#### Overrides

[`ConeParticleEmitter`](ConeParticleEmitter.md).[`clone`](ConeParticleEmitter.md#clone)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:311](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L311)

Returns the string "ConeDirectedParticleEmitter"

#### Returns

`string`

a string containing the class name

#### Overrides

[`ConeParticleEmitter`](ConeParticleEmitter.md).[`getClassName`](ConeParticleEmitter.md#getclassname)

***

### getEffectDefines()

> **getEffectDefines**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:303](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L303)

Returns a string to use to update the GPU particles update shader

#### Returns

`string`

a string containing the defines string

#### Overrides

[`ConeParticleEmitter`](ConeParticleEmitter.md).[`getEffectDefines`](ConeParticleEmitter.md#geteffectdefines)

***

### parse()

> **parse**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:332](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L332)

Parse properties from a JSON object

#### Parameters

##### serializationObject

`any`

defines the JSON object

#### Returns

`void`

#### Overrides

[`ConeParticleEmitter`](ConeParticleEmitter.md).[`parse`](ConeParticleEmitter.md#parse)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:319](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L319)

Serializes the particle system to a JSON object.

#### Returns

`any`

the JSON object

#### Overrides

[`ConeParticleEmitter`](ConeParticleEmitter.md).[`serialize`](ConeParticleEmitter.md#serialize)

***

### startDirectionFunction()

> **startDirectionFunction**(`worldMatrix`, `directionToUpdate`, `particle`, `isLocal`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts:254](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/EmitterTypes/coneParticleEmitter.ts#L254)

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

[`ConeParticleEmitter`](ConeParticleEmitter.md).[`startDirectionFunction`](ConeParticleEmitter.md#startdirectionfunction)

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

#### Inherited from

[`ConeParticleEmitter`](ConeParticleEmitter.md).[`startPositionFunction`](ConeParticleEmitter.md#startpositionfunction)
