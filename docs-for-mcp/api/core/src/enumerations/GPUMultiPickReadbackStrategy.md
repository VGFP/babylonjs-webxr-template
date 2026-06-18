[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GPUMultiPickReadbackStrategy

# Enumeration: GPUMultiPickReadbackStrategy

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L84)

Defines how multi pick texture readbacks should be performed.

## Enumeration Members

### Auto

> **Auto**: `0`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L88)

Chooses between a single rectangle readback and small per-point readbacks using the thresholds in IGPUMultiPickOptions.

***

### Individual

> **Individual**: `2`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L96)

Always reads each picked point independently. This minimizes transferred pixels for sparse point sets but can be slower when many points are picked.

***

### Rectangle

> **Rectangle**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L92)

Always reads the full bounding rectangle of the picked points. This minimizes readback calls and is best for dense point sets.
