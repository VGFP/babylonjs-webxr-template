[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRFeature

# Interface: IWebXRFeature

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRFeaturesManager.ts#L31)

Defining the interface required for a (webxr) feature

## Extends

- [`IDisposable`](IDisposable.md)

## Extended by

- [`IWebXRHitTestFeature`](IWebXRHitTestFeature.md)

## Properties

### attached

> **attached**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRFeaturesManager.ts#L35)

Is this feature attached

***

### dependsOn?

> `optional` **dependsOn?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRFeaturesManager.ts#L78)

A list of (Babylon WebXR) features this feature depends on

***

### disableAutoAttach

> **disableAutoAttach**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRFeaturesManager.ts#L39)

Should auto-attach be disabled?

***

### getXRSessionInitExtension?

> `optional` **getXRSessionInitExtension?**: () => `Promise`\<`Partial`\<`XRSessionInit`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRFeaturesManager.ts#L83)

If this feature requires to extend the XRSessionInit object, this function will return the partial XR session init object

#### Returns

`Promise`\<`Partial`\<`XRSessionInit`\>\>

***

### isDisposed

> **isDisposed**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRFeaturesManager.ts#L68)

Was this feature disposed;

***

### onFeatureAttachObservable

> **onFeatureAttachObservable**: [`Observable`](../classes/Observable.md)\<`IWebXRFeature`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRFeaturesManager.ts#L88)

Triggered when the feature is attached

***

### onFeatureDetachObservable

> **onFeatureDetachObservable**: [`Observable`](../classes/Observable.md)\<`IWebXRFeature`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRFeaturesManager.ts#L92)

Triggered when the feature is detached

***

### xrNativeFeatureName?

> `optional` **xrNativeFeatureName?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRFeaturesManager.ts#L73)

The name of the native xr feature name, if applicable (like anchor, hit-test, or hand-tracking)

## Methods

### attach()

> **attach**(`force?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRFeaturesManager.ts#L48)

Attach the feature to the session
Will usually be called by the features manager

#### Parameters

##### force?

`boolean`

should attachment be forced (even when already attached)

#### Returns

`boolean`

true if successful.

***

### detach()

> **detach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRFeaturesManager.ts#L55)

Detach the feature from the session
Will usually be called by the features manager

#### Returns

`boolean`

true if successful.

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/scene.pure.ts#L122)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IDisposable`](IDisposable.md).[`dispose`](IDisposable.md#dispose)

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRFeaturesManager.ts#L63)

This function will be executed during before enabling the feature and can be used to not-allow enabling it.
Note that at this point the session has NOT started, so this is purely checking if the browser supports it

#### Returns

`boolean`

whether or not the feature is compatible in this environment
