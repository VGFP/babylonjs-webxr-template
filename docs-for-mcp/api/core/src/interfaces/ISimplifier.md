[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISimplifier

# Interface: ISimplifier

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L12)

A simplifier interface for future simplification implementations

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/simplifyingMeshes

## Methods

### simplify()

> **simplify**(`settings`, `successCallback`, `errorCallback?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L20)

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
