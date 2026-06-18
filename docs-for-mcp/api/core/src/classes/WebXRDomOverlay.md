[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRDomOverlay

# Class: WebXRDomOverlay

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts#L47)

**`Since`**

DOM Overlay Feature

 5.0.0

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Constructors

### Constructor

> **new WebXRDomOverlay**(`_xrSessionManager`, `options`): `WebXRDomOverlay`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts#L79)

Creates a new instance of the dom-overlay feature

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

an instance of WebXRSessionManager

##### options

[`IWebXRDomOverlayOptions`](../interfaces/IWebXRDomOverlayOptions.md)

options to use when constructing this feature

#### Returns

`WebXRDomOverlay`

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

### options

> `readonly` **options**: [`IWebXRDomOverlayOptions`](../interfaces/IWebXRDomOverlayOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts#L84)

options to use when constructing this feature

***

### Name

> `readonly` `static` **Name**: `"xr-dom-overlay"` = `WebXRFeatureName.DOM_OVERLAY`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts#L66)

The module's name

***

### Version

> `readonly` `static` **Version**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts#L72)

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

### domOverlayType

#### Get Signature

> **get** **domOverlayType**(): [`Nullable`](../type-aliases/Nullable.md)\<`WebXRDomOverlayType`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts:124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts#L124)

The type of DOM overlay (null when not supported).  Provided by UA and remains unchanged for duration of session.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`WebXRDomOverlayType`\>

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

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts#L99)

attach this feature
Will usually be called by the features manager

#### Returns

`boolean`

true if successful.

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attach`](WebXRAbstractFeature.md#attach)

***

### detach()

> **detach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L115)

detach this feature.

#### Returns

`boolean`

true if successful, false if failed or already detached

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`detach`](WebXRAbstractFeature.md#detach)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts#L131)

Dispose this feature and all of the resources attached

#### Returns

`void`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dispose`](WebXRAbstractFeature.md#dispose)

***

### getXRSessionInitExtension()

> **getXRSessionInitExtension**(): `Promise`\<`Partial`\<`XRSessionInit`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts#L146)

Extends the session init object if needed

#### Returns

`Promise`\<`Partial`\<`XRSessionInit`\>\>

augmentation object for the xr session init object.

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L144)

This function will be executed during before enabling the feature and can be used to not-allow enabling it.
Note that at this point the session has NOT started, so this is purely checking if the browser supports it

#### Returns

`boolean`

whether or not the feature is compatible in this environment

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isCompatible`](WebXRAbstractFeature.md#iscompatible)
