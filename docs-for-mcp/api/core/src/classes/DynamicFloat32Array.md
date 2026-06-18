[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DynamicFloat32Array

# Class: DynamicFloat32Array

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/dynamicFloat32Array.ts:6](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/dynamicFloat32Array.ts#L6)

A class acting as a dynamic float32array used in the performance viewer

## Constructors

### Constructor

> **new DynamicFloat32Array**(`itemCapacity`): `DynamicFloat32Array`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/dynamicFloat32Array.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/dynamicFloat32Array.ts#L14)

Creates a new DynamicFloat32Array with the desired item capacity.

#### Parameters

##### itemCapacity

`number`

The initial item capacity you would like to set for the array.

#### Returns

`DynamicFloat32Array`

## Accessors

### itemLength

#### Get Signature

> **get** **itemLength**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/dynamicFloat32Array.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/dynamicFloat32Array.ts#L22)

The number of items currently in the array.

##### Returns

`number`

## Methods

### at()

> **at**(`index`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/dynamicFloat32Array.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/dynamicFloat32Array.ts#L31)

Gets value at index, NaN if no such index exists.

#### Parameters

##### index

`number`

the index to get the value at.

#### Returns

`number`

the value at the index provided.

***

### push()

> **push**(`item`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/dynamicFloat32Array.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/dynamicFloat32Array.ts#L61)

Pushes items to the end of the array.

#### Parameters

##### item

`number`

The item to push into the array.

#### Returns

`void`

***

### subarray()

> **subarray**(`start`, `end`): `Float32Array`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/dynamicFloat32Array.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/dynamicFloat32Array.ts#L45)

Gets a view of the original array from start to end (exclusive of end).

#### Parameters

##### start

`number`

starting index.

##### end

`number`

ending index.

#### Returns

`Float32Array`

a subarray of the original array.
