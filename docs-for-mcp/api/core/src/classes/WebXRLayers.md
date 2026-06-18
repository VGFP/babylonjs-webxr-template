[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRLayers

# Class: WebXRLayers

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L37)

Exposes the WebXR Layers API.

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Constructors

### Constructor

> **new WebXRLayers**(`_xrSessionManager`, `_options?`): `WebXRLayers`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L61)

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

##### \_options?

[`IWebXRLayersOptions`](../interfaces/IWebXRLayersOptions.md) = `{}`

#### Returns

`WebXRLayers`

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

### Name

> `readonly` `static` **Name**: `"xr-layers"` = `WebXRFeatureName.LAYERS`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L41)

The module's name

***

### Version

> `readonly` `static` **Version**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L47)

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

### addFullscreenAdvancedDynamicTexture()

> **addFullscreenAdvancedDynamicTexture**(`texture`, `options?`): `WebXRCompositionLayerWrapper`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.pure.ts:202](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L202)

**`Experimental`**

This will support full screen ADT when used with WebXR Layers. This API might change in the future.
Note that no interaction will be available with the ADT when using this method

#### Parameters

##### texture

[`DynamicTexture`](DynamicTexture.md)

the texture to display in the layer

##### options?

optional parameters for the layer

###### distanceFromHeadset

`number`

#### Returns

`WebXRCompositionLayerWrapper`

a composition layer containing the texture

***

### addXRSessionLayer()

> **addXRSessionLayer**(`wrappedLayer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L310)

Add a new layer to the already-existing list of layers

#### Parameters

##### wrappedLayer

`WebXRLayerWrapper`

the new layer to add to the existing ones

#### Returns

`void`

***

### attach()

> **attach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L75)

Attach this feature.
Will usually be called by the features manager.

#### Returns

`boolean`

true if successful.

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attach`](WebXRAbstractFeature.md#attach)

***

### createProjectionLayer()

> **createProjectionLayer**(`params?`, `multiview?`): `WebXRProjectionLayerWrapper`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L143)

Creates a new XRProjectionLayer.

#### Parameters

##### params?

`XRProjectionLayerInit` = `DefaultXRProjectionLayerInit`

an object providing configuration options for the new XRProjectionLayer.

##### multiview?

`boolean` = `...`

whether the projection layer should render with multiview. Will be tru automatically if the extension initialized with multiview.

#### Returns

`WebXRProjectionLayerWrapper`

the projection layer

***

### createXRWebGLLayer()

> **createXRWebGLLayer**(`params?`): `WebXRWebGLLayerWrapper`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.pure.ts:110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L110)

Creates a new XRWebGLLayer.

#### Parameters

##### params?

`XRWebGLLayerInit` = `DefaultXRWebGLLayerInit`

an object providing configuration options for the new XRWebGLLayer

#### Returns

`WebXRWebGLLayerWrapper`

the XRWebGLLayer

***

### detach()

> **detach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.pure.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L93)

detach this feature.

#### Returns

`boolean`

true if successful, false if failed or already detached

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`detach`](WebXRAbstractFeature.md#detach)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.pure.ts:344](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L344)

Dispose this feature and all of the resources attached.

#### Returns

`void`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dispose`](WebXRAbstractFeature.md#dispose)

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.pure.ts:336](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L336)

This function will be executed during before enabling the feature and can be used to not-allow enabling it.
Note that at this point the session has NOT started, so this is purely checking if the browser supports it

#### Returns

`boolean`

whether or not the feature is compatible in this environment

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isCompatible`](WebXRAbstractFeature.md#iscompatible)

***

### setXRSessionLayers()

> **setXRSessionLayers**(`wrappedLayers?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLayers.pure.ts:324](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L324)

Sets the layers to be used by the XR session.
Note that you must call this function with any layers you wish to render to
since it adds them to the XR session's render state
(replacing any layers that were added in a previous call to setXRSessionLayers or updateRenderState).
This method also sets up the session manager's render target texture provider
as the first layer in the array, which feeds the WebXR camera(s) attached to the session.

#### Parameters

##### wrappedLayers?

`WebXRLayerWrapper`[] = `...`

An array of WebXRLayerWrapper, usually returned from the WebXRLayers createLayer functions.

#### Returns

`void`
