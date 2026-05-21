[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRControllerMovement

# Class: WebXRControllerMovement

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L150)

This is a movement feature to be used with WebXR-enabled motion controllers.
When enabled and attached, the feature will allow a user to move around and rotate in the scene using
the input of the attached controllers.

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Constructors

### Constructor

> **new WebXRControllerMovement**(`_xrSessionManager`, `options`): `WebXRControllerMovement`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:324](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L324)

constructs a new movement controller system

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

an instance of WebXRSessionManager

##### options

[`IWebXRControllerMovementOptions`](../interfaces/IWebXRControllerMovementOptions.md)

configuration object for this feature

#### Returns

`WebXRControllerMovement`

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

### Name

> `readonly` `static` **Name**: `"xr-controller-movement"` = `WebXRFeatureName.MOVEMENT`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L175)

The module's name

***

### REGISTRATIONS

> `readonly` `static` **REGISTRATIONS**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L180)

Standard controller configurations.

#### Index Signature

\[`key`: `string`\]: [`WebXRControllerMovementRegistrationConfiguration`](../type-aliases/WebXRControllerMovementRegistrationConfiguration.md)[]

***

### Version

> `readonly` `static` **Version**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L206)

The (Babylon) version of this module.
This is an integer representing the implementation version.
This number does not correspond to the webxr specs version

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

### movementDirection

#### Get Signature

> **get** **movementDirection**(): [`Quaternion`](Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L211)

Current movement direction.  Will be null before XR Frames have been processed.

##### Returns

[`Quaternion`](Quaternion.md)

***

### movementEnabled

#### Get Signature

> **get** **movementEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:218](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L218)

Is movement enabled

##### Returns

`boolean`

#### Set Signature

> **set** **movementEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L226)

Sets whether movement is enabled or not

##### Parameters

###### enabled

`boolean`

is movement enabled

##### Returns

`void`

***

### movementOrientationFollowsViewerPose

#### Get Signature

> **get** **movementOrientationFollowsViewerPose**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:233](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L233)

If movement follows viewer pose

##### Returns

`boolean`

#### Set Signature

> **set** **movementOrientationFollowsViewerPose**(`followsPose`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:241](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L241)

Sets whether movement follows viewer pose

##### Parameters

###### followsPose

`boolean`

is movement should follow viewer pose

##### Returns

`void`

***

### movementSpeed

#### Get Signature

> **get** **movementSpeed**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:248](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L248)

Gets movement speed

##### Returns

`number`

#### Set Signature

> **set** **movementSpeed**(`movementSpeed`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:256](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L256)

Sets movement speed

##### Parameters

###### movementSpeed

`number`

movement speed

##### Returns

`void`

***

### movementThreshold

#### Get Signature

> **get** **movementThreshold**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:263](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L263)

Gets minimum threshold the controller's thumbstick/touchpad must pass before being recognized for movement (avoids jitter/unintentional movement)

##### Returns

`number`

#### Set Signature

> **set** **movementThreshold**(`movementThreshold`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L271)

Sets minimum threshold the controller's thumbstick/touchpad must pass before being recognized for movement (avoids jitter/unintentional movement)

##### Parameters

###### movementThreshold

`number`

new threshold

##### Returns

`void`

***

### rotationEnabled

#### Get Signature

> **get** **rotationEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:278](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L278)

Is rotation enabled

##### Returns

`boolean`

#### Set Signature

> **set** **rotationEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:286](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L286)

Sets whether rotation is enabled or not

##### Parameters

###### enabled

`boolean`

is rotation enabled

##### Returns

`void`

***

### rotationSpeed

#### Get Signature

> **get** **rotationSpeed**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:293](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L293)

Gets rotation speed factor

##### Returns

`number`

#### Set Signature

> **set** **rotationSpeed**(`rotationSpeed`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:301](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L301)

Sets rotation speed factor (1.0 is default)

##### Parameters

###### rotationSpeed

`number`

new rotation speed factor

##### Returns

`void`

***

### rotationThreshold

#### Get Signature

> **get** **rotationThreshold**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:308](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L308)

Gets minimum threshold the controller's thumbstick/touchpad must pass before being recognized for rotation (avoids jitter/unintentional rotation)

##### Returns

`number`

#### Set Signature

> **set** **rotationThreshold**(`threshold`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:316](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L316)

Sets minimum threshold the controller's thumbstick/touchpad must pass before being recognized for rotation (avoids jitter/unintentional rotation)

##### Parameters

###### threshold

`number`

new threshold

##### Returns

`void`

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

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:361](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L361)

attach this feature

#### Returns

`boolean`

true if successful, false is failed or already attached

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attach`](WebXRAbstractFeature.md#attach)

***

### detach()

> **detach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:378](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L378)

detach this feature.

#### Returns

`boolean`

true if successful, false if failed or already detached

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`detach`](WebXRAbstractFeature.md#detach)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L131)

Dispose this feature and all of the resources attached

#### Returns

`void`

#### Inherited from

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

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isCompatible`](WebXRAbstractFeature.md#iscompatible)
