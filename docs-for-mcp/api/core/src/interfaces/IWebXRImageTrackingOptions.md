[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRImageTrackingOptions

# Interface: IWebXRImageTrackingOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRImageTracking.ts#L13)

Options interface for the background remover plugin

## Properties

### images

> **images**: `object`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRImageTracking.ts#L17)

A required array with images to track

#### estimatedRealWorldWidth

> **estimatedRealWorldWidth**: `number`

The estimated width in the real world (in meters)

#### src

> **src**: `string` \| `ImageBitmap`

The source of the image. can be a URL or an image bitmap
