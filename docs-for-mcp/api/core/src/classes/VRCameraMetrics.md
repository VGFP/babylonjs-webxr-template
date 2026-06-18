[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / VRCameraMetrics

# Class: VRCameraMetrics

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts:6](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts#L6)

This represents all the required metrics to create a VR camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_introduction#device-orientation-camera

## Constructors

### Constructor

> **new VRCameraMetrics**(): `VRCameraMetrics`

#### Returns

`VRCameraMetrics`

## Properties

### chromaAbCorrection

> **chromaAbCorrection**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts#L47)

Define the chromatic aberration correction factors for the VR post process.

***

### compensateDistortion

> **compensateDistortion**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts#L60)

Define if the current vr camera should compensate the distortion of the lens or not.

***

### distortionK

> **distortionK**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts#L43)

Define the distortion factor of the VR postprocess.
Please, touch with care.

***

### eyeToScreenDistance

> **eyeToScreenDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts#L30)

Define the distance of the eyes to the screen.

***

### hResolution

> **hResolution**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts#L10)

Define the horizontal resolution off the screen.

***

### hScreenSize

> **hScreenSize**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts#L18)

Define the horizontal screen size.

***

### interpupillaryDistance

> **interpupillaryDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts#L38)

Define the distance between both viewer's eyes.

***

### lensCenterOffset

> **lensCenterOffset**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts#L56)

Define an offset for the lens center.

***

### lensSeparationDistance

> **lensSeparationDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts#L34)

Define the distance between both lenses

***

### multiviewEnabled

> **multiviewEnabled**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts#L65)

Defines if multiview should be enabled when rendering (Default: false)

***

### postProcessScaleFactor

> **postProcessScaleFactor**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts#L52)

Define the scale factor of the post process.
The smaller the better but the slower.

***

### vResolution

> **vResolution**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts#L14)

Define the vertical resolution off the screen.

***

### vScreenCenter

> **vScreenCenter**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts#L26)

Define the vertical screen center position.

***

### vScreenSize

> **vScreenSize**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts#L22)

Define the vertical screen size.

## Accessors

### aspectRatio

#### Get Signature

> **get** **aspectRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts#L70)

Gets the rendering aspect ratio based on the provided resolutions.

##### Returns

`number`

***

### aspectRatioFov

#### Get Signature

> **get** **aspectRatioFov**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts#L77)

Gets the aspect ratio based on the FOV, scale factors, and real screen sizes.

##### Returns

`number`

## Methods

### GetDefault()

> `static` **GetDefault**(): `VRCameraMetrics`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrCameraMetrics.ts#L121)

Get the default VRMetrics based on the most generic setup.

#### Returns

`VRCameraMetrics`

the default vr metrics
