[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRHitTestLegacy

# Class: WebXRHitTestLegacy

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L54)

The currently-working hit-test module.
Hit test (or Ray-casting) is used to interact with the real world.
For further information read here - https://github.com/immersive-web/hit-test

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Implements

- [`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md)\<[`IWebXRLegacyHitResult`](../interfaces/IWebXRLegacyHitResult.md)\>

## Constructors

### Constructor

> **new WebXRHitTestLegacy**(`_xrSessionManager`, `options?`): `WebXRHitTestLegacy`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L86)

Creates a new instance of the (legacy version) hit test feature

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

an instance of WebXRSessionManager

##### options?

[`IWebXRLegacyHitTestOptions`](../interfaces/IWebXRLegacyHitTestOptions.md) = `{}`

options to use when constructing this feature

#### Returns

`WebXRHitTestLegacy`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`constructor`](WebXRAbstractFeature.md#constructor)

## Properties

### dependsOn?

> `optional` **dependsOn?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L58)

The dependencies of this feature, if any

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`dependsOn`](../interfaces/IWebXRHitTestFeature.md#dependson)

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dependsOn`](WebXRAbstractFeature.md#dependson)

***

### disableAutoAttach

> **disableAutoAttach**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L27)

Should auto-attach be disabled?

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`disableAutoAttach`](../interfaces/IWebXRHitTestFeature.md#disableautoattach)

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`disableAutoAttach`](WebXRAbstractFeature.md#disableautoattach)

***

### isDisposed

> **isDisposed**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L22)

Is this feature disposed?

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`isDisposed`](../interfaces/IWebXRHitTestFeature.md#isdisposed)

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isDisposed`](WebXRAbstractFeature.md#isdisposed)

***

### lastNativeXRHitResults

> **lastNativeXRHitResults**: `XRHitResult`[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L75)

Populated with the last native XR Hit Results

***

### onFeatureAttachObservable

> **onFeatureAttachObservable**: [`Observable`](Observable.md)\<[`IWebXRFeature`](../interfaces/IWebXRFeature.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L49)

Observers registered here will be executed when the feature is attached

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`onFeatureAttachObservable`](../interfaces/IWebXRHitTestFeature.md#onfeatureattachobservable)

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`onFeatureAttachObservable`](WebXRAbstractFeature.md#onfeatureattachobservable)

***

### onFeatureDetachObservable

> **onFeatureDetachObservable**: [`Observable`](Observable.md)\<[`IWebXRFeature`](../interfaces/IWebXRFeature.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L53)

Observers registered here will be executed when the feature is detached

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`onFeatureDetachObservable`](../interfaces/IWebXRHitTestFeature.md#onfeaturedetachobservable)

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`onFeatureDetachObservable`](WebXRAbstractFeature.md#onfeaturedetachobservable)

***

### onHitTestResultObservable

> **onHitTestResultObservable**: [`Observable`](Observable.md)\<[`IWebXRLegacyHitResult`](../interfaces/IWebXRLegacyHitResult.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L79)

Triggered when new babylon (transformed) hit test results are available

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`onHitTestResultObservable`](../interfaces/IWebXRHitTestFeature.md#onhittestresultobservable)

***

### options

> `readonly` **options**: [`IWebXRLegacyHitTestOptions`](../interfaces/IWebXRLegacyHitTestOptions.md) = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L91)

[Empty Object] options to use when constructing this feature

***

### Name

> `readonly` `static` **Name**: `"xr-hit-test"` = `WebXRFeatureName.HIT_TEST`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L64)

The module's name

***

### Version

> `readonly` `static` **Version**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L70)

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

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`attached`](../interfaces/IWebXRHitTestFeature.md#attached)

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

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`xrNativeFeatureName`](../interfaces/IWebXRHitTestFeature.md#xrnativefeaturename)

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`xrNativeFeatureName`](WebXRAbstractFeature.md#xrnativefeaturename)

## Methods

### attach()

> **attach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L135)

attach this feature
Will usually be called by the features manager

#### Returns

`boolean`

true if successful.

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`attach`](../interfaces/IWebXRHitTestFeature.md#attach)

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attach`](WebXRAbstractFeature.md#attach)

***

### detach()

> **detach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L152)

detach this feature.
Will usually be called by the features manager

#### Returns

`boolean`

true if successful.

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`detach`](../interfaces/IWebXRHitTestFeature.md#detach)

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`detach`](WebXRAbstractFeature.md#detach)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L165)

Dispose this feature and all of the resources attached

#### Returns

`void`

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`dispose`](../interfaces/IWebXRHitTestFeature.md#dispose)

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dispose`](WebXRAbstractFeature.md#dispose)

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

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`isCompatible`](../interfaces/IWebXRHitTestFeature.md#iscompatible)

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isCompatible`](WebXRAbstractFeature.md#iscompatible)

***

### XRHitTestWithRay()

> `static` **XRHitTestWithRay**(`xrSession`, `xrRay`, `referenceSpace`, `filter?`): `Promise`\<`XRHitResult`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L107)

execute a hit test with an XR Ray

#### Parameters

##### xrSession

`XRSession`

a native xrSession that will execute this hit test

##### xrRay

`XRRay`

the ray (position and direction) to use for ray-casting

##### referenceSpace

`XRReferenceSpace`

native XR reference space to use for the hit-test

##### filter?

(`result`) => `boolean`

filter function that will filter the results

#### Returns

`Promise`\<`XRHitResult`[]\>

a promise that resolves with an array of native XR hit result in xr coordinates system

***

### XRHitTestWithSelectEvent()

> `static` **XRHitTestWithSelectEvent**(`event`, `referenceSpace`): `Promise`\<`XRHitResult`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L119)

Execute a hit test on the current running session using a select event returned from a transient input (such as touch)

#### Parameters

##### event

`XRInputSourceEvent`

the (select) event to use to select with

##### referenceSpace

`XRReferenceSpace`

the reference space to use for this hit test

#### Returns

`Promise`\<`XRHitResult`[]\>

a promise that resolves with an array of native XR hit result in xr coordinates system
