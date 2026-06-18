[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRTrackedImage

# Interface: IWebXRTrackedImage

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L34)

An object representing an image tracked by the system

## Properties

### emulated?

> `optional` **emulated?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L42)

Is the transformation provided emulated. If it is, the system "guesses" its real position. Otherwise it can be considered as exact position.

***

### id

> **id**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L38)

The ID of this image (which is the same as the position in the array that was used to initialize the feature)

***

### originalBitmap

> **originalBitmap**: `ImageBitmap`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L46)

Just in case it is needed - the image bitmap that is being tracked

***

### ratio?

> `optional` **ratio?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L62)

The width/height ratio of this image. can be used to calculate the size of the detected object/image

***

### realWorldWidth?

> `optional` **realWorldWidth?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L54)

Width in real world (meters)

***

### transformationMatrix

> **transformationMatrix**: [`Matrix`](../classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L58)

A transformation matrix of this current image in the current reference space.

***

### xrTrackingResult?

> `optional` **xrTrackingResult?**: `XRImageTrackingResult`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L50)

The native XR result image tracking result, untouched
