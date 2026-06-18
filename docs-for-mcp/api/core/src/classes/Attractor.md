[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Attractor

# Class: Attractor

Defined in: [babylonjs-source/packages/dev/core/src/Particles/attractor.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/attractor.ts#L13)

Class representing an attractor in a particle system.
#DEZ79M#40

## Constructors

### Constructor

> **new Attractor**(): `Attractor`

#### Returns

`Attractor`

## Properties

### position

> **position**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/attractor.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/attractor.ts#L23)

Gets or sets the position of the attractor in 3D space.

***

### strength

> **strength**: `number` = `0.0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/attractor.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/attractor.ts#L18)

Gets or sets the strength of the attractor.
A positive value attracts particles, while a negative value repels them.

## Methods

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/attractor.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/attractor.ts#L40)

Serializes the attractor to a JSON object.

#### Returns

`any`

The serialized JSON object.
