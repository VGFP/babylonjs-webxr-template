[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRHitTestFeature

# Interface: IWebXRHitTestFeature\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L14)

An interface for all Hit test features

## Extends

- [`IWebXRFeature`](IWebXRFeature.md)

## Type Parameters

### T

`T` *extends* [`IWebXRLegacyHitResult`](IWebXRLegacyHitResult.md)

## Properties

### attached

> **attached**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRFeaturesManager.ts#L35)

Is this feature attached

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`attached`](IWebXRFeature.md#attached)

***

### dependsOn?

> `optional` **dependsOn?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRFeaturesManager.ts#L78)

A list of (Babylon WebXR) features this feature depends on

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`dependsOn`](IWebXRFeature.md#dependson)

***

### disableAutoAttach

> **disableAutoAttach**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRFeaturesManager.ts#L39)

Should auto-attach be disabled?

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`disableAutoAttach`](IWebXRFeature.md#disableautoattach)

***

### getXRSessionInitExtension?

> `optional` **getXRSessionInitExtension?**: () => `Promise`\<`Partial`\<`XRSessionInit`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRFeaturesManager.ts#L83)

If this feature requires to extend the XRSessionInit object, this function will return the partial XR session init object

#### Returns

`Promise`\<`Partial`\<`XRSessionInit`\>\>

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`getXRSessionInitExtension`](IWebXRFeature.md#getxrsessioninitextension)

***

### isDisposed

> **isDisposed**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRFeaturesManager.ts#L68)

Was this feature disposed;

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`isDisposed`](IWebXRFeature.md#isdisposed)

***

### onFeatureAttachObservable

> **onFeatureAttachObservable**: [`Observable`](../classes/Observable.md)\<[`IWebXRFeature`](IWebXRFeature.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRFeaturesManager.ts#L88)

Triggered when the feature is attached

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`onFeatureAttachObservable`](IWebXRFeature.md#onfeatureattachobservable)

***

### onFeatureDetachObservable

> **onFeatureDetachObservable**: [`Observable`](../classes/Observable.md)\<[`IWebXRFeature`](IWebXRFeature.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRFeaturesManager.ts#L92)

Triggered when the feature is detached

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`onFeatureDetachObservable`](IWebXRFeature.md#onfeaturedetachobservable)

***

### onHitTestResultObservable

> **onHitTestResultObservable**: [`Observable`](../classes/Observable.md)\<`T`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L18)

Triggered when new babylon (transformed) hit test results are available

***

### xrNativeFeatureName?

> `optional` **xrNativeFeatureName?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRFeaturesManager.ts#L73)

The name of the native xr feature name, if applicable (like anchor, hit-test, or hand-tracking)

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`xrNativeFeatureName`](IWebXRFeature.md#xrnativefeaturename)

## Methods

### attach()

> **attach**(`force?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRFeaturesManager.ts#L48)

Attach the feature to the session
Will usually be called by the features manager

#### Parameters

##### force?

`boolean`

should attachment be forced (even when already attached)

#### Returns

`boolean`

true if successful.

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`attach`](IWebXRFeature.md#attach)

***

### detach()

> **detach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRFeaturesManager.ts#L55)

Detach the feature from the session
Will usually be called by the features manager

#### Returns

`boolean`

true if successful.

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`detach`](IWebXRFeature.md#detach)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L120)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`dispose`](IWebXRFeature.md#dispose)

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRFeaturesManager.ts#L63)

This function will be executed during before enabling the feature and can be used to not-allow enabling it.
Note that at this point the session has NOT started, so this is purely checking if the browser supports it

#### Returns

`boolean`

whether or not the feature is compatible in this environment

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`isCompatible`](IWebXRFeature.md#iscompatible)
