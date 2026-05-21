[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IBoneWeightShaderOptions

# Interface: IBoneWeightShaderOptions

Defined in: [babylonjs-source/packages/dev/core/src/Debug/ISkeletonViewer.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/ISkeletonViewer.ts#L59)

Defines the constructor options for the BoneWeight Shader.

## Properties

### colorBase?

> `optional` **colorBase?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/ISkeletonViewer.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/ISkeletonViewer.ts#L64)

Colors for Uninfluenced bones

***

### colorFull?

> `optional` **colorFull?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/ISkeletonViewer.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/ISkeletonViewer.ts#L76)

Color for 0.75-1 Weight Influence

***

### colorHalf?

> `optional` **colorHalf?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/ISkeletonViewer.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/ISkeletonViewer.ts#L73)

Color for 0.5-0.75 Weight Influence

***

### colorQuarter?

> `optional` **colorQuarter?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/ISkeletonViewer.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/ISkeletonViewer.ts#L70)

Color for 0.25-0.5 Weight Influence

***

### colorZero?

> `optional` **colorZero?**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/ISkeletonViewer.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/ISkeletonViewer.ts#L67)

Colors for 0.0-0.25 Weight bones

***

### skeleton

> **skeleton**: [`Skeleton`](../classes/Skeleton.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/ISkeletonViewer.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/ISkeletonViewer.ts#L61)

Skeleton to Map

***

### targetBoneIndex?

> `optional` **targetBoneIndex?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/ISkeletonViewer.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/ISkeletonViewer.ts#L79)

Color for Zero Weight Influence
