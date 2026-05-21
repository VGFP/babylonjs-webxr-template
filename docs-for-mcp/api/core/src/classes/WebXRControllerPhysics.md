[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRControllerPhysics

# Class: WebXRControllerPhysics

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts#L83)

Add physics impostor to your webxr controllers,
including naive calculation of their linear and angular velocity

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Constructors

### Constructor

> **new WebXRControllerPhysics**(`_xrSessionManager`, `_options`): `WebXRControllerPhysics`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts:292](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts#L292)

Construct a new Controller Physics Feature

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

the corresponding xr session manager

##### \_options

[`IWebXRControllerPhysicsOptions`](IWebXRControllerPhysicsOptions.md)

options to create this feature with

#### Returns

`WebXRControllerPhysics`

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

> `readonly` `static` **Name**: `"xr-physics-controller"` = `WebXRFeatureName.PHYSICS_CONTROLLERS`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts:279](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts#L279)

The module's name

***

### Version

> `readonly` `static` **Version**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts:285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts#L285)

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

### addController()

> **addController**(`xrController`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts:321](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts#L321)

Manually add a controller (if no xrInput was provided or physics engine was not enabled)

#### Parameters

##### xrController

[`WebXRInputSource`](WebXRInputSource.md)

the controller to add

#### Returns

`void`

***

### attach()

> **attach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts:331](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts#L331)

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

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts:375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts#L375)

detach this feature.
Will usually be called by the features manager

#### Returns

`boolean`

true if successful.

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

### getHeadsetImpostor()

> **getHeadsetImpostor**(): [`PhysicsImpostor`](PhysicsImpostor.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts:402](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts#L402)

Get the headset impostor, if enabled

#### Returns

[`PhysicsImpostor`](PhysicsImpostor.md) \| `undefined`

the impostor

***

### getHeadsetPhysicsAggregate()

> **getHeadsetPhysicsAggregate**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsAggregate`](PhysicsAggregate.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts:453](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts#L453)

Get the headset physics aggregate (v2 only)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsAggregate`](PhysicsAggregate.md)\>

the physics aggregate or null

***

### getImpostorForController()

> **getImpostorForController**(`controller`): [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsImpostor`](PhysicsImpostor.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts:412](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts#L412)

Get the physics impostor of a specific controller.
The impostor is not attached to a mesh because a mesh for each controller is not obligatory

#### Parameters

##### controller

`string` \| [`WebXRInputSource`](WebXRInputSource.md)

the controller or the controller id of which to get the impostor

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsImpostor`](PhysicsImpostor.md)\>

the impostor or null

***

### getPhysicsAggregateForController()

> **getPhysicsAggregateForController**(`controller`): [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsAggregate`](PhysicsAggregate.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts:426](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts#L426)

Get the physics aggregate for a controller (v2 only)

#### Parameters

##### controller

`string` \| [`WebXRInputSource`](WebXRInputSource.md)

the controller or the controller id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsAggregate`](PhysicsAggregate.md)\>

the aggregate or null

***

### getPhysicsBodyForController()

> **getPhysicsBodyForController**(`controller`): [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsBody`](PhysicsBody.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts:440](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts#L440)

Get the physics body for a controller (v2 only)

#### Parameters

##### controller

`string` \| [`WebXRInputSource`](WebXRInputSource.md)

the controller or the controller id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsBody`](PhysicsBody.md)\>

the physics body or null

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

***

### setPhysicsProperties()

> **setPhysicsProperties**(`newProperties`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts:465](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts#L465)

Update the physics properties provided in the constructor

#### Parameters

##### newProperties

the new properties object

###### friction?

`number`

###### impostorSize?

`number` \| \{ `depth`: `number`; `height`: `number`; `width`: `number`; \}

###### impostorType?

`number`

###### restitution?

`number`

#### Returns

`void`
