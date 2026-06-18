[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRDepthSensingOptions

# Interface: IWebXRDepthSensingOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L34)

Options for Depth Sensing feature

## Properties

### dataFormatPreference

> **dataFormatPreference**: [`WebXRDepthDataFormat`](../type-aliases/WebXRDepthDataFormat.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L42)

The desired depth sensing data format for the session

***

### disableDepthSensingOnMaterials?

> `optional` **disableDepthSensingOnMaterials?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L48)

Depth sensing will be enabled on all materials per default, if the GPU variant is enabled.
If you just want to use the texture or the CPU variant instead set this to true.

***

### prepareTextureForVisualization?

> `optional` **prepareTextureForVisualization?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L62)

If set to true the texture will be set to be used for visualization.
In this case it will probably NOT work correctly on the materials.
So be aware that, for the time being, you can only use one or the other.

***

### usagePreference

> **usagePreference**: [`WebXRDepthUsage`](../type-aliases/WebXRDepthUsage.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L38)

The desired depth sensing usage for the session

***

### useToleranceFactorForDepthSensing?

> `optional` **useToleranceFactorForDepthSensing?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L55)

If set to true the occluded pixels will not be discarded but the pixel color will be changed based on the occlusion factor
Enabling this will lead to worse performance but slightly better outcome.
It is possible we will change this in the future to look even better.
