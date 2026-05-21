[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRTrackedImage

# Interface: IWebXRTrackedImage

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRImageTracking.ts#L32)

An object representing an image tracked by the system

## Properties

### emulated?

> `optional` **emulated?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRImageTracking.ts#L40)

Is the transformation provided emulated. If it is, the system "guesses" its real position. Otherwise it can be considered as exact position.

***

### id

> **id**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRImageTracking.ts#L36)

The ID of this image (which is the same as the position in the array that was used to initialize the feature)

***

### originalBitmap

> **originalBitmap**: `ImageBitmap`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRImageTracking.ts#L44)

Just in case it is needed - the image bitmap that is being tracked

***

### ratio?

> `optional` **ratio?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRImageTracking.ts#L60)

The width/height ratio of this image. can be used to calculate the size of the detected object/image

***

### realWorldWidth?

> `optional` **realWorldWidth?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRImageTracking.ts#L52)

Width in real world (meters)

***

### transformationMatrix

> **transformationMatrix**: [`Matrix`](../classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRImageTracking.ts#L56)

A transformation matrix of this current image in the current reference space.

***

### xrTrackingResult?

> `optional` **xrTrackingResult?**: `XRImageTrackingResult`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRImageTracking.ts#L48)

The native XR result image tracking result, untouched
