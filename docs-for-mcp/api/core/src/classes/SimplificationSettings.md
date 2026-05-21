[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SimplificationSettings

# Class: SimplificationSettings

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L47)

Class used to specify simplification options

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/simplifyingMeshes

## Implements

- [`ISimplificationSettings`](../interfaces/ISimplificationSettings.md)

## Constructors

### Constructor

> **new SimplificationSettings**(`quality`, `distance`, `optimizeMesh?`): `SimplificationSettings`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L54)

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

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L58)

distance when this optimized version should be used

#### Implementation of

[`ISimplificationSettings`](../interfaces/ISimplificationSettings.md).[`distance`](../interfaces/ISimplificationSettings.md#distance)

***

### optimizeMesh?

> `optional` **optimizeMesh?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L60)

already optimized mesh

#### Implementation of

[`ISimplificationSettings`](../interfaces/ISimplificationSettings.md).[`optimizeMesh`](../interfaces/ISimplificationSettings.md#optimizemesh)

***

### quality

> **quality**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplification.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplification.ts#L56)

expected quality

#### Implementation of

[`ISimplificationSettings`](../interfaces/ISimplificationSettings.md).[`quality`](../interfaces/ISimplificationSettings.md#quality)
