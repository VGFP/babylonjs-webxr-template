[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRImageTrackingOptions

# Interface: IWebXRImageTrackingOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L15)

Options interface for the background remover plugin

## Properties

### images

> **images**: `object`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L19)

A required array with images to track

#### estimatedRealWorldWidth

> **estimatedRealWorldWidth**: `number`

The estimated width in the real world (in meters)

#### src

> **src**: `string` \| `ImageBitmap`

The source of the image. can be a URL or an image bitmap
