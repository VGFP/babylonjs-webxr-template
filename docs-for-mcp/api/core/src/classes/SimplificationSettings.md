[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SimplificationSettings

# Class: SimplificationSettings

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.common.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.common.ts#L25)

Class used to specify simplification options

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/simplifyingMeshes

## Implements

- [`ISimplificationSettings`](../interfaces/ISimplificationSettings.md)

## Constructors

### Constructor

> **new SimplificationSettings**(`quality`, `distance`, `optimizeMesh?`): `SimplificationSettings`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.common.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.common.ts#L32)

Creates a SimplificationSettings

#### Parameters

##### quality

`number`

expected quality

##### distance

`number`

distance when this optimized version should be used

##### optimizeMesh?

`boolean`

already optimized mesh

#### Returns

`SimplificationSettings`

## Properties

### distance

> **distance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.common.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.common.ts#L36)

distance when this optimized version should be used

#### Implementation of

[`ISimplificationSettings`](../interfaces/ISimplificationSettings.md).[`distance`](../interfaces/ISimplificationSettings.md#distance)

***

### optimizeMesh?

> `optional` **optimizeMesh?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.common.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.common.ts#L38)

already optimized mesh

#### Implementation of

[`ISimplificationSettings`](../interfaces/ISimplificationSettings.md).[`optimizeMesh`](../interfaces/ISimplificationSettings.md#optimizemesh)

***

### quality

> **quality**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.common.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplification.common.ts#L34)

expected quality

#### Implementation of

[`ISimplificationSettings`](../interfaces/ISimplificationSettings.md).[`quality`](../interfaces/ISimplificationSettings.md#quality)
