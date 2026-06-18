[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IGPUMultiPickOptions

# Interface: IGPUMultiPickOptions

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L102)

Options used to tune multi GPU picking.

## Properties

### individualReadbackAreaRatio?

> `optional` **individualReadbackAreaRatio?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L122)

Minimum rectangle-area / individual-area ratio required before the automatic path uses individual readbacks.
This value is ignored when readbackStrategy is set to GPUMultiPickReadbackStrategy.Rectangle or GPUMultiPickReadbackStrategy.Individual.

Defaults to 16.

***

### maxIndividualReadbackCount?

> `optional` **maxIndividualReadbackCount?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L115)

Maximum number of in-bounds points allowed for the automatic individual readback path.
This value is ignored when readbackStrategy is set to GPUMultiPickReadbackStrategy.Rectangle or GPUMultiPickReadbackStrategy.Individual.

Defaults to 32.

***

### readbackStrategy?

> `optional` **readbackStrategy?**: [`GPUMultiPickReadbackStrategy`](../enumerations/GPUMultiPickReadbackStrategy.md)

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L108)

Defines how multi pick texture readbacks should be performed.

Defaults to GPUMultiPickReadbackStrategy.Auto.
