[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRLayersOptions

# Interface: IWebXRLayersOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.pure.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L21)

Configuration options of the layers feature

## Properties

### preferMultiviewOnInit?

> `optional` **preferMultiviewOnInit?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L26)

Whether to try initializing the base projection layer as a multiview render target, if multiview is supported.
Defaults to false.

***

### projectionLayerInit?

> `optional` **projectionLayerInit?**: `Partial`\<`XRProjectionLayerInit`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L31)

Optional configuration for the base projection layer.
