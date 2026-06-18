[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CharacterSurfaceInfo

# Interface: CharacterSurfaceInfo

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L66)

Surface information computed by checkSupport method

## Properties

### averageAngularSurfaceVelocity

> **averageAngularSurfaceVelocity**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L91)

The average angular velocity of the surface.

***

### averageSurfaceNormal

> **averageSurfaceNormal**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L82)

The average normal vector of the surface.
This vector is perpendicular to the surface and points outwards.

***

### averageSurfaceVelocity

> **averageSurfaceVelocity**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L87)

The average velocity of the surface.
This vector represents the speed and direction in which the surface is moving.

***

### isSurfaceDynamic

> **isSurfaceDynamic**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L73)

Indicates whether the surface is dynamic.
A dynamic surface is one that can change its properties over time,
such as moving platforms or surfaces that can be affected by external forces.
surfaceInfo.supportedState is always CharacterSupportedState.SUPPORTED when isSurfaceDynamic is true.

***

### supportedState

> **supportedState**: [`CharacterSupportedState`](../enumerations/CharacterSupportedState.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L77)

The supported state of the character on the surface.
