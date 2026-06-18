[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISkeletonMapShaderOptions

# Interface: ISkeletonMapShaderOptions

Defined in: [babylonjs-source/packages/dev/core/src/Debug/ISkeletonViewer.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/ISkeletonViewer.ts#L95)

Defines the constructor options for the SkeletonMap Shader.

## Properties

### colorMap?

> `optional` **colorMap?**: [`ISkeletonMapShaderColorMapKnot`](ISkeletonMapShaderColorMapKnot.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Debug/ISkeletonViewer.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/ISkeletonViewer.ts#L99)

Array of ColorMapKnots that make the gradient must be ordered with knot[i].location < knot[i+1].location

***

### skeleton

> **skeleton**: [`Skeleton`](../classes/Skeleton.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/ISkeletonViewer.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/ISkeletonViewer.ts#L97)

Skeleton to Map
