[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRDepthSensing

# Class: WebXRDepthSensing

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:297](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L297)

**`Since`**

WebXR Feature for WebXR Depth Sensing Module
 5.49.1

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Constructors

### Constructor

> **new WebXRDepthSensing**(`_xrSessionManager`, `options`): `WebXRDepthSensing`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:421](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L421)

Creates a new instance of the depth sensing feature

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

the WebXRSessionManager

##### options

[`IWebXRDepthSensingOptions`](../interfaces/IWebXRDepthSensingOptions.md)

options for WebXR Depth Sensing Feature

#### Returns

`WebXRDepthSensing`

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

### onGetDepthInMetersAvailable

> **onGetDepthInMetersAvailable**: [`Observable`](Observable.md)\<`GetDepthInMetersType`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:390](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L390)

Event that notify when `DepthInformation.getDepthInMeters` is available.
`getDepthInMeters` method needs active XRFrame (not available for cached XRFrame)

***

### options

> `readonly` **options**: [`IWebXRDepthSensingOptions`](../interfaces/IWebXRDepthSensingOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:423](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L423)

options for WebXR Depth Sensing Feature

***

### Name

> `readonly` `static` **Name**: `"xr-depth-sensing"` = `WebXRFeatureName.DEPTH_SENSING`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L407)

The module's name

***

### Version

> `readonly` `static` **Version**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:414](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L414)

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

### depthDataFormat

#### Get Signature

> **get** **depthDataFormat**(): [`WebXRDepthDataFormat`](../type-aliases/WebXRDepthDataFormat.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:351](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L351)

Describes which depth sensing data format ("ushort" or "float") is used.

##### Returns

[`WebXRDepthDataFormat`](../type-aliases/WebXRDepthDataFormat.md)

***

### depthUsage

#### Get Signature

> **get** **depthUsage**(): [`WebXRDepthUsage`](../type-aliases/WebXRDepthUsage.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:339](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L339)

Describes which depth-sensing usage ("cpu" or "gpu") is used.

##### Returns

[`WebXRDepthUsage`](../type-aliases/WebXRDepthUsage.md)

***

### height

#### Get Signature

> **get** **height**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L318)

Height of depth data. If depth data is not exist, returns null.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

***

### latestDepthBuffer

#### Get Signature

> **get** **latestDepthBuffer**(): [`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:378](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L378)

cached depth buffer

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

***

### latestDepthImageTexture

#### Get Signature

> **get** **latestDepthImageTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`RawTexture`](RawTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:395](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L395)

Latest cached Texture of depth image which is made from the depth buffer data.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RawTexture`](RawTexture.md)\>

***

### latestInternalTexture

#### Get Signature

> **get** **latestInternalTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:367](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L367)

Latest cached InternalTexture which containing depth buffer information.
This can be used when the depth usage is "gpu".

##### Deprecated

This will be removed in the future. Use latestDepthImageTexture

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

***

### normDepthBufferFromNormView

#### Get Signature

> **get** **normDepthBufferFromNormView**(): [`Nullable`](../type-aliases/Nullable.md)\<`XRRigidTransform`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:332](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L332)

An XRRigidTransform that needs to be applied when indexing into the depth buffer.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`XRRigidTransform`\>

***

### rawValueToMeters

#### Get Signature

> **get** **rawValueToMeters**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:325](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L325)

Scale factor by which the raw depth values must be multiplied in order to get the depths in meters.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

***

### width

#### Get Signature

> **get** **width**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:311](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L311)

Width of depth data. If depth data is not exist, returns null.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

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

> **attach**(`force?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:441](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L441)

attach this feature
Will usually be called by the features manager

#### Parameters

##### force?

`boolean`

should attachment be forced (even when already attached)

#### Returns

`boolean`

true if successful.

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attach`](WebXRAbstractFeature.md#attach)

***

### detach()

> **detach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:484](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L484)

detach this feature.

#### Returns

`boolean`

true if successful, false if failed or already detached

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`detach`](WebXRAbstractFeature.md#detach)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:501](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L501)

Dispose this feature and all of the resources attached

#### Returns

`void`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dispose`](WebXRAbstractFeature.md#dispose)

***

### getXRSessionInitExtension()

> **getXRSessionInitExtension**(): `Promise`\<`Partial`\<`XRSessionInit`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDepthSensing.ts:641](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDepthSensing.ts#L641)

Extends the session init object if needed

#### Returns

`Promise`\<`Partial`\<`XRSessionInit`\>\>

augmentation object for the xr session init object.

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L144)

This function will be executed during before enabling the feature and can be used to not-allow enabling it.
Note that at this point the session has NOT started, so this is purely checking if the browser supports it

#### Returns

`boolean`

whether or not the feature is compatible in this environment

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isCompatible`](WebXRAbstractFeature.md#iscompatible)
