[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRHandTracking

# Class: WebXRHandTracking

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:556](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L556)

WebXR Hand Joint tracking feature, available for selected browsers and devices

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Constructors

### Constructor

> **new WebXRHandTracking**(`_xrSessionManager`, `options`): `WebXRHandTracking`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:854](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L854)

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

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L58)

The dependencies of this feature, if any

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dependsOn`](WebXRAbstractFeature.md#dependson)

***

### disableAutoAttach

> **disableAutoAttach**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L27)

Should auto-attach be disabled?

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`disableAutoAttach`](WebXRAbstractFeature.md#disableautoattach)

***

### isDisposed

> **isDisposed**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L22)

Is this feature disposed?

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isDisposed`](WebXRAbstractFeature.md#isdisposed)

***

### onFeatureAttachObservable

> **onFeatureAttachObservable**: [`Observable`](Observable.md)\<[`IWebXRFeature`](../interfaces/IWebXRFeature.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L49)

Observers registered here will be executed when the feature is attached

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`onFeatureAttachObservable`](WebXRAbstractFeature.md#onfeatureattachobservable)

***

### onFeatureDetachObservable

> **onFeatureDetachObservable**: [`Observable`](Observable.md)\<[`IWebXRFeature`](../interfaces/IWebXRFeature.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L53)

Observers registered here will be executed when the feature is detached

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`onFeatureDetachObservable`](WebXRAbstractFeature.md#onfeaturedetachobservable)

***

### onHandAddedObservable

> **onHandAddedObservable**: [`Observable`](Observable.md)\<[`WebXRHand`](WebXRHand.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:811](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L811)

This observable will notify registered observers when a new hand object was added and initialized

***

### onHandRemovedObservable

> **onHandRemovedObservable**: [`Observable`](Observable.md)\<[`WebXRHand`](WebXRHand.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:815](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L815)

This observable will notify its observers right before the hand object is disposed

***

### options

> `readonly` **options**: [`IWebXRHandTrackingOptions`](../interfaces/IWebXRHandTrackingOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:857](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L857)

Options to use when constructing this feature.

***

### DEFAULT\_HAND\_MODEL\_BASE\_URL

> `static` **DEFAULT\_HAND\_MODEL\_BASE\_URL**: `string` = `"https://assets.babylonjs.com/core/HandMeshes/"`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:569](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L569)

The base URL for the default hand model.

***

### DEFAULT\_HAND\_MODEL\_LEFT\_FILENAME

> `static` **DEFAULT\_HAND\_MODEL\_LEFT\_FILENAME**: `string` = `"l_hand_rhs.glb"`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:573](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L573)

The filename to use for the default left hand model.

***

### DEFAULT\_HAND\_MODEL\_RIGHT\_FILENAME

> `static` **DEFAULT\_HAND\_MODEL\_RIGHT\_FILENAME**: `string` = `"r_hand_rhs.glb"`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:571](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L571)

The filename to use for the default right hand model.

***

### DEFAULT\_HAND\_MODEL\_SHADER\_URL

> `static` **DEFAULT\_HAND\_MODEL\_SHADER\_URL**: `string` = `"https://assets.babylonjs.com/core/HandMeshes/handsShader.json"`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:575](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L575)

The URL pointing to the default hand model NodeMaterial shader.

***

### Name

> `readonly` `static` **Name**: `"xr-hand-tracking"` = `WebXRFeatureName.HAND_TRACKING`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:560](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L560)

The module's name

***

### Version

> `readonly` `static` **Version**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:566](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L566)

The (Babylon) version of this module.
This is an integer representing the implementation version.
This number does not correspond to the WebXR specs version

## Accessors

### attached

#### Get Signature

> **get** **attached**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L69)

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

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`xrNativeFeatureName`](WebXRAbstractFeature.md#xrnativefeaturename)

## Methods

### attach()

> **attach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:909](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L909)

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

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:1007](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L1007)

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

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:1061](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L1061)

Dispose this feature and all of the resources attached.

#### Returns

`void`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dispose`](WebXRAbstractFeature.md#dispose)

***

### getHandByControllerId()

> **getHandByControllerId**(`controllerId`): [`Nullable`](../type-aliases/Nullable.md)\<[`WebXRHand`](WebXRHand.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:833](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L833)

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

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:842](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L842)

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

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:824](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L824)

Check if the needed objects are defined.
This does not mean that the feature is enabled, but that the objects needed are well defined.

#### Returns

`boolean`

true if the needed objects for this feature are defined

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isCompatible`](WebXRAbstractFeature.md#iscompatible)
