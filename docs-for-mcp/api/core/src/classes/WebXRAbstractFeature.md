[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRAbstractFeature

# Abstract Class: WebXRAbstractFeature

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L12)

This is the base class for all WebXR features.
Since most features require almost the same resources and callbacks, this class can be used to simplify the development
Note that since the features manager is using the `IWebXRFeature` you are in no way obligated to use this class

## Extended by

- [`WebXRHitTestLegacy`](WebXRHitTestLegacy.md)
- [`WebXRAnchorSystem`](WebXRAnchorSystem.md)
- [`WebXRPlaneDetector`](WebXRPlaneDetector.md)
- [`WebXRBackgroundRemover`](WebXRBackgroundRemover.md)
- [`WebXRMotionControllerTeleportation`](WebXRMotionControllerTeleportation.md)
- [`WebXRControllerPointerSelection`](WebXRControllerPointerSelection.md)
- [`WebXRControllerPhysics`](WebXRControllerPhysics.md)
- [`WebXRHitTest`](WebXRHitTest.md)
- [`WebXRFeaturePointSystem`](WebXRFeaturePointSystem.md)
- [`WebXRHandTracking`](WebXRHandTracking.md)
- [`WebXRMeshDetector`](WebXRMeshDetector.md)
- [`WebXRImageTracking`](WebXRImageTracking.md)
- [`WebXRNearInteraction`](WebXRNearInteraction.md)
- [`WebXRDomOverlay`](WebXRDomOverlay.md)
- [`WebXRControllerMovement`](WebXRControllerMovement.md)
- [`WebXRLightEstimation`](WebXRLightEstimation.md)
- [`WebXREyeTracking`](WebXREyeTracking.md)
- [`WebXRWalkingLocomotion`](WebXRWalkingLocomotion.md)
- [`WebXRLayers`](WebXRLayers.md)
- [`WebXRDepthSensing`](WebXRDepthSensing.md)
- [`WebXRSpaceWarp`](WebXRSpaceWarp.md)
- [`WebXRRawCameraAccess`](WebXRRawCameraAccess.md)
- [`WebXRBodyTracking`](WebXRBodyTracking.md)

## Implements

- [`IWebXRFeature`](../interfaces/IWebXRFeature.md)

## Constructors

### Constructor

> **new WebXRAbstractFeature**(`_xrSessionManager`): `WebXRAbstractFeature`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L64)

Construct a new (abstract) WebXR feature

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

the xr session manager for this feature

#### Returns

`WebXRAbstractFeature`

## Properties

### dependsOn?

> `optional` **dependsOn?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L58)

The dependencies of this feature, if any

#### Implementation of

[`IWebXRFeature`](../interfaces/IWebXRFeature.md).[`dependsOn`](../interfaces/IWebXRFeature.md#dependson)

***

### disableAutoAttach

> **disableAutoAttach**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L27)

Should auto-attach be disabled?

#### Implementation of

[`IWebXRFeature`](../interfaces/IWebXRFeature.md).[`disableAutoAttach`](../interfaces/IWebXRFeature.md#disableautoattach)

***

### isDisposed

> **isDisposed**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L22)

Is this feature disposed?

#### Implementation of

[`IWebXRFeature`](../interfaces/IWebXRFeature.md).[`isDisposed`](../interfaces/IWebXRFeature.md#isdisposed)

***

### onFeatureAttachObservable

> **onFeatureAttachObservable**: [`Observable`](Observable.md)\<[`IWebXRFeature`](../interfaces/IWebXRFeature.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L49)

Observers registered here will be executed when the feature is attached

#### Implementation of

[`IWebXRFeature`](../interfaces/IWebXRFeature.md).[`onFeatureAttachObservable`](../interfaces/IWebXRFeature.md#onfeatureattachobservable)

***

### onFeatureDetachObservable

> **onFeatureDetachObservable**: [`Observable`](Observable.md)\<[`IWebXRFeature`](../interfaces/IWebXRFeature.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L53)

Observers registered here will be executed when the feature is detached

#### Implementation of

[`IWebXRFeature`](../interfaces/IWebXRFeature.md).[`onFeatureDetachObservable`](../interfaces/IWebXRFeature.md#onfeaturedetachobservable)

## Accessors

### attached

#### Get Signature

> **get** **attached**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L69)

Is this feature attached

##### Returns

`boolean`

Is this feature attached

#### Implementation of

[`IWebXRFeature`](../interfaces/IWebXRFeature.md).[`attached`](../interfaces/IWebXRFeature.md#attached)

***

### xrNativeFeatureName

#### Get Signature

> **get** **xrNativeFeatureName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L34)

The name of the native xr feature name (like anchor, hit-test, or hand-tracking)

##### Returns

`string`

#### Set Signature

> **set** **xrNativeFeatureName**(`name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L38)

The name of the native xr feature name, if applicable (like anchor, hit-test, or hand-tracking)

##### Parameters

###### name

`string`

##### Returns

`void`

The name of the native xr feature name, if applicable (like anchor, hit-test, or hand-tracking)

#### Implementation of

[`IWebXRFeature`](../interfaces/IWebXRFeature.md).[`xrNativeFeatureName`](../interfaces/IWebXRFeature.md#xrnativefeaturename)

## Methods

### attach()

> **attach**(`force?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L79)

attach this feature

#### Parameters

##### force?

`boolean`

should attachment be forced (even when already attached)

#### Returns

`boolean`

true if successful, false is failed or already attached

#### Implementation of

[`IWebXRFeature`](../interfaces/IWebXRFeature.md).[`attach`](../interfaces/IWebXRFeature.md#attach)

***

### detach()

> **detach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L115)

detach this feature.

#### Returns

`boolean`

true if successful, false if failed or already detached

#### Implementation of

[`IWebXRFeature`](../interfaces/IWebXRFeature.md).[`detach`](../interfaces/IWebXRFeature.md#detach)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L131)

Dispose this feature and all of the resources attached

#### Returns

`void`

#### Implementation of

[`IWebXRFeature`](../interfaces/IWebXRFeature.md).[`dispose`](../interfaces/IWebXRFeature.md#dispose)

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L144)

This function will be executed during before enabling the feature and can be used to not-allow enabling it.
Note that at this point the session has NOT started, so this is purely checking if the browser supports it

#### Returns

`boolean`

whether or not the feature is compatible in this environment

#### Implementation of

[`IWebXRFeature`](../interfaces/IWebXRFeature.md).[`isCompatible`](../interfaces/IWebXRFeature.md#iscompatible)
