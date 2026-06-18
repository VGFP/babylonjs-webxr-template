[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISimplifier

# Interface: ISimplifier

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.ts#L18)

A simplifier interface for future simplification implementations

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/simplifyingMeshes

## Methods

### simplify()

> **simplify**(`settings`, `successCallback`, `errorCallback?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.ts#L26)

Simplification of a given mesh according to the given settings.
Since this requires computation, it is assumed that the function runs async.

#### Parameters

##### settings

[`ISimplificationSettings`](ISimplificationSettings.md)

The settings of the simplification, including quality and distance

##### successCallback

(`simplifiedMeshes`) => `void`

A callback that will be called after the mesh was simplified.

##### errorCallback?

() => `void`

in case of an error, this callback will be called. optional.

#### Returns

`void`
