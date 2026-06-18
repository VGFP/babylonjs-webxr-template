[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRWalkingLocomotion

# Class: WebXRWalkingLocomotion

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts:349](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts#L349)

A module that will enable VR locomotion by detecting when the user walks in place.

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Constructors

### Constructor

> **new WebXRWalkingLocomotion**(`sessionManager`, `options`): `WebXRWalkingLocomotion`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts:406](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts#L406)

Construct a new Walking Locomotion feature.

#### Parameters

##### sessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

manager for the current XR session

##### options

[`IWebXRWalkingLocomotionOptions`](../interfaces/IWebXRWalkingLocomotionOptions.md)

creation options, prominently including the vector target for locomotion

#### Returns

`WebXRWalkingLocomotion`

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

### locomotionTarget

#### Get Signature

> **get** **locomotionTarget**(): [`TransformNode`](TransformNode.md) \| [`WebXRCamera`](WebXRCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts:384](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts#L384)

The target to be articulated by walking locomotion.
When the walking locomotion feature detects walking in place, this element's
X and Z coordinates will be modified to reflect locomotion. This target should
be either the XR space's origin (i.e., the parent node of the WebXRCamera) or
the WebXRCamera itself. Note that the WebXRCamera path will modify the position
of the WebXRCamera directly and is thus discouraged.

##### Returns

[`TransformNode`](TransformNode.md) \| [`WebXRCamera`](WebXRCamera.md)

#### Set Signature

> **set** **locomotionTarget**(`locomotionTarget`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts:396](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts#L396)

The target to be articulated by walking locomotion.
When the walking locomotion feature detects walking in place, this element's
X and Z coordinates will be modified to reflect locomotion. This target should
be either the XR space's origin (i.e., the parent node of the WebXRCamera) or
the WebXRCamera itself. Note that the WebXRCamera path will modify the position
of the WebXRCamera directly and is thus discouraged.

##### Parameters

###### locomotionTarget

[`TransformNode`](TransformNode.md) \| [`WebXRCamera`](WebXRCamera.md)

##### Returns

`void`

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

***

### Name

#### Get Signature

> **get** `static` **Name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts:353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts#L353)

The module's name.

##### Returns

`string`

***

### Version

#### Get Signature

> **get** `static` **Version**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts:362](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts#L362)

The (Babylon) version of this module.
This is an integer representing the implementation version.
This number has no external basis.

##### Returns

`number`

## Methods

### attach()

> **attach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts:431](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts#L431)

Attaches the feature.
Typically called automatically by the features manager.

#### Returns

`boolean`

true if attach succeeded, false otherwise

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attach`](WebXRAbstractFeature.md#attach)

***

### detach()

> **detach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts:445](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts#L445)

Detaches the feature.
Typically called automatically by the features manager.

#### Returns

`boolean`

true if detach succeeded, false otherwise

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`detach`](WebXRAbstractFeature.md#detach)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L131)

Dispose this feature and all of the resources attached

#### Returns

`void`

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dispose`](WebXRAbstractFeature.md#dispose)

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts:422](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts#L422)

Checks whether this feature is compatible with the current WebXR session.
Walking locomotion is only compatible with "immersive-vr" sessions.

#### Returns

`boolean`

true if compatible, false otherwise

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isCompatible`](WebXRAbstractFeature.md#iscompatible)
