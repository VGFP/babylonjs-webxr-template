[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRLayersOptions

# Interface: IWebXRLayersOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRLayers.ts#L19)

Configuration options of the layers feature

## Properties

### preferMultiviewOnInit?

> `optional` **preferMultiviewOnInit?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRLayers.ts#L24)

Whether to try initializing the base projection layer as a multiview render target, if multiview is supported.
Defaults to false.

***

### projectionLayerInit?

> `optional` **projectionLayerInit?**: `Partial`\<`XRProjectionLayerInit`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRLayers.ts#L29)

Optional configuration for the base projection layer.
