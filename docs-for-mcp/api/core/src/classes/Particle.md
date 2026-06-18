[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Particle

# Class: Particle

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L111)

A particle represents one of the element emitted by a particle system.
This is mainly define by its coordinates, direction, velocity and age.

## Constructors

### Constructor

> **new Particle**(`particleSystem`): `Particle`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L199)

Creates a new instance Particle

#### Parameters

##### particleSystem

`ThinParticleSystem`

the particle system the particle belongs to

#### Returns

`Particle`

## Properties

### age

> **age**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L155)

The current age of the particle.

***

### angle

> **angle**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L170)

The current angle of the particle.

***

### angularSpeed

> **angularSpeed**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:175](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L175)

Defines how fast is the angle changing.

***

### cellIndex

> **cellIndex**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L180)

Defines the cell index used by the particle to be rendered from a sprite.

***

### color

> **color**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L130)

The color of the particle.

***

### colorDead

> **colorDead**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L145)

The color used when the end of life of the particle.

***

### colorStep

> **colorStep**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L135)

The color change of the particle per step.

***

### direction

> **direction**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L125)

The world direction of the particle in the scene.

***

### id

> **id**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L116)

Unique ID of the particle

***

### initialColor

> **initialColor**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L140)

The creation color of the particle.

***

### lifeTime

> **lifeTime**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L150)

Defines how long will the life of the particle be.

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L190)

Gets or sets an object used to store user defined information for the particle

***

### particleSystem

> **particleSystem**: `ThinParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:203](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L203)

The particle system the particle belongs to.

***

### position

> **position**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L120)

The world position of the particle in the scene.

***

### remapData

> **remapData**: [`Vector4`](Vector4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L185)

The information required to support color remapping

***

### scale

> **scale**: [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L165)

The current scale of the particle.

***

### size

> **size**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L160)

The current size of the particle.

## Methods

### copyTo()

> **copyTo**(`other`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:294](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L294)

Copy the properties of particle to another one.

#### Parameters

##### other

`Particle`

the particle to copy the information to.

#### Returns

`void`

***

### updateCellIndex()

> **updateCellIndex**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particle.ts:220](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particle.ts#L220)

Defines how the sprite cell index is updated for the particle

#### Returns

`void`
