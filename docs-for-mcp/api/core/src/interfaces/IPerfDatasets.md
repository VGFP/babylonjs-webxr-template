[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IPerfDatasets

# Interface: IPerfDatasets

Defined in: [babylonjs-source/packages/dev/core/src/Misc/interfaces/iPerfViewer.ts:6](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/interfaces/iPerfViewer.ts#L6)

Defines the shape of a collection of datasets that our graphing service uses for drawing purposes.

## Properties

### data

> **data**: [`DynamicFloat32Array`](../classes/DynamicFloat32Array.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/interfaces/iPerfViewer.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/interfaces/iPerfViewer.ts#L15)

The data to be processed by the performance graph. Each slice will be of the form of [timestamp, numberOfPoints, value1, value2...]

***

### ids

> **ids**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/interfaces/iPerfViewer.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/interfaces/iPerfViewer.ts#L10)

The ids of our dataset.

***

### startingIndices

> **startingIndices**: [`DynamicFloat32Array`](../classes/DynamicFloat32Array.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/interfaces/iPerfViewer.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/interfaces/iPerfViewer.ts#L20)

A list of starting indices for each slice of data collected. Used for fast access of an arbitrary slice inside the data array.
