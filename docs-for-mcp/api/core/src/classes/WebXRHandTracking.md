[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRHandTracking

# Class: WebXRHandTracking

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:557](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L557)

WebXR Hand Joint tracking feature, available for selected browsers and devices

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Constructors

### Constructor

> **new WebXRHandTracking**(`_xrSessionManager`, `options`): `WebXRHandTracking`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:855](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L855)

Creates a new instance of the XR hand tracking feature.

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

An instance of WebXRSessionManager.

##### options

[`IWebXRHandTrackingOptions`](../interfaces/IWebXRHandTrackingOptions.md)

Options to use when constructing this feature.

#### Returns

`WebXRHandTracking`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`constructor`](WebXRAbstractFeature.md#constructor)

## Properties

### dependsOn?

> `optional` **dependsOn?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L58)

The dependencies of this feature, if any

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dependsOn`](WebXRAbstractFeature.md#dependson)

***

### disableAutoAttach

> **disableAutoAttach**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L27)

Should auto-attach be disabled?

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`disableAutoAttach`](WebXRAbstractFeature.md#disableautoattach)

***

### isDisposed

> **isDisposed**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L22)

Is this feature disposed?

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isDisposed`](WebXRAbstractFeature.md#isdisposed)

***

### onFeatureAttachObservable

> **onFeatureAttachObservable**: [`Observable`](Observable.md)\<[`IWebXRFeature`](../interfaces/IWebXRFeature.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L49)

Observers registered here will be executed when the feature is attached

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`onFeatureAttachObservable`](WebXRAbstractFeature.md#onfeatureattachobservable)

***

### onFeatureDetachObservable

> **onFeatureDetachObservable**: [`Observable`](Observable.md)\<[`IWebXRFeature`](../interfaces/IWebXRFeature.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L53)

Observers registered here will be executed when the feature is detached

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`onFeatureDetachObservable`](WebXRAbstractFeature.md#onfeaturedetachobservable)

***

### onHandAddedObservable

> **onHandAddedObservable**: [`Observable`](Observable.md)\<[`WebXRHand`](WebXRHand.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:812](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L812)

This observable will notify registered observers when a new hand object was added and initialized

***

### onHandRemovedObservable

> **onHandRemovedObservable**: [`Observable`](Observable.md)\<[`WebXRHand`](WebXRHand.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:816](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L816)

This observable will notify its observers right before the hand object is disposed

***

### options

> `readonly` **options**: [`IWebXRHandTrackingOptions`](../interfaces/IWebXRHandTrackingOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:858](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L858)

Options to use when constructing this feature.

***

### DEFAULT\_HAND\_MODEL\_BASE\_URL

> `static` **DEFAULT\_HAND\_MODEL\_BASE\_URL**: `string` = `"https://assets.babylonjs.com/core/HandMeshes/"`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:570](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L570)

The base URL for the default hand model.

***

### DEFAULT\_HAND\_MODEL\_LEFT\_FILENAME

> `static` **DEFAULT\_HAND\_MODEL\_LEFT\_FILENAME**: `string` = `"l_hand_rhs.glb"`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:574](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L574)

The filename to use for the default left hand model.

***

### DEFAULT\_HAND\_MODEL\_RIGHT\_FILENAME

> `static` **DEFAULT\_HAND\_MODEL\_RIGHT\_FILENAME**: `string` = `"r_hand_rhs.glb"`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:572](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L572)

The filename to use for the default right hand model.

***

### DEFAULT\_HAND\_MODEL\_SHADER\_URL

> `static` **DEFAULT\_HAND\_MODEL\_SHADER\_URL**: `string` = `"https://assets.babylonjs.com/core/HandMeshes/handsShader.json"`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:576](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L576)

The URL pointing to the default hand model NodeMaterial shader.

***

### Name

> `readonly` `static` **Name**: `"xr-hand-tracking"` = `WebXRFeatureName.HAND_TRACKING`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:561](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L561)

The module's name

***

### Version

> `readonly` `static` **Version**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:567](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L567)

The (Babylon) version of this module.
This is an integer representing the implementation version.
This number does not correspond to the WebXR specs version

## Accessors

### attached

#### Get Signature

> **get** **attached**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L69)

Is this feature attached

##### Returns

`boolean`

Is this feature attached

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attached`](WebXRAbstractFeature.md#attached)

***

### xrNativeFeatureName

#### Get Signature

> **get** **xrNativeFeatureName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L34)

The name of the native xr feature name (like anchor, hit-test, or hand-tracking)

##### Returns

`string`

#### Set Signature

> **set** **xrNativeFeatureName**(`name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L38)

The name of the native xr feature name, if applicable (like anchor, hit-test, or hand-tracking)

##### Parameters

###### name

`string`

##### Returns

`void`

The name of the native xr feature name, if applicable (like anchor, hit-test, or hand-tracking)

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`xrNativeFeatureName`](WebXRAbstractFeature.md#xrnativefeaturename)

## Methods

### attach()

> **attach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:910](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L910)

Attach this feature.
Will usually be called by the features manager.

#### Returns

`boolean`

true if successful.

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attach`](WebXRAbstractFeature.md#attach)

***

### detach()

> **detach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:1008](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L1008)

Detach this feature.
Will usually be called by the features manager.

#### Returns

`boolean`

true if successful.

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`detach`](WebXRAbstractFeature.md#detach)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:1062](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L1062)

Dispose this feature and all of the resources attached.

#### Returns

`void`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dispose`](WebXRAbstractFeature.md#dispose)

***

### getHandByControllerId()

> **getHandByControllerId**(`controllerId`): [`Nullable`](../type-aliases/Nullable.md)\<[`WebXRHand`](WebXRHand.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:834](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L834)

Get the hand object according to the controller id

#### Parameters

##### controllerId

`string`

the controller id to which we want to get the hand

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`WebXRHand`](WebXRHand.md)\>

null if not found or the WebXRHand object if found

***

### getHandByHandedness()

> **getHandByHandedness**(`handedness`): [`Nullable`](../type-aliases/Nullable.md)\<[`WebXRHand`](WebXRHand.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:843](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L843)

Get a hand object according to the requested handedness

#### Parameters

##### handedness

`XRHandedness`

the handedness to request

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`WebXRHand`](WebXRHand.md)\>

null if not found or the WebXRHand object if found

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:825](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L825)

Check if the needed objects are defined.
This does not mean that the feature is enabled, but that the objects needed are well defined.

#### Returns

`boolean`

true if the needed objects for this feature are defined

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isCompatible`](WebXRAbstractFeature.md#iscompatible)
