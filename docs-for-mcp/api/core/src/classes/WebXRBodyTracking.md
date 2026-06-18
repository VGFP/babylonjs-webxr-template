[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRBodyTracking

# Class: WebXRBodyTracking

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:2490](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L2490)

WebXR Body Tracking feature.

This feature tracks the user's full-body pose using the
[WebXR Body Tracking Module](https://immersive-web.github.io/body-tracking/),
which exposes 83 articulated joints covering the torso, arms, hands, legs and feet.

## Quick Start

```typescript
// Enable body tracking when creating the default XR experience:
const xr = await scene.createDefaultXRExperienceAsync();
const bodyTracking = xr.baseExperience.featuresManager.enableFeature(
    WebXRFeatureName.BODY_TRACKING,
    "latest",
    {
        bodyMesh: myRiggedBodyMesh,
        rigMapping: {
            "hips": "Bip01_Pelvis",
            "spine-lower": "Bip01_Spine",
            // … one entry per joint you want to drive …
        },
    } as IWebXRBodyTrackingOptions,
);

// React to tracking changes:
bodyTracking.onBodyTrackingStartedObservable.add((trackedBody) => {
    console.log("Body tracking started");
});
bodyTracking.onBodyTrackingFrameUpdateObservable.add((trackedBody) => {
    // The tracked body's joint transforms are already up-to-date.
});
```

## How It Works

1. The feature requests the `"body-tracking"` native WebXR feature at session start.
2. Each frame, if `XRFrame.body` is available, joint poses are filled into a
   flat Float32Array via the batch `fillPoses()` API (with a per-joint fallback).
3. The 4 × 4 matrices are converted from WebXR right-handed coordinates to
   Babylon.js left-handed coordinates in-place (unless the scene is RHS).
4. Each matrix is decomposed and written to a TransformNode; skeleton bones
   linked to those nodes animate the rigged mesh automatically.

## Coordinate System

WebXR data arrives in a **right-handed** coordinate system.  Babylon.js
defaults to **left-handed**.  The conversion is handled automatically:
- Joint matrices are flipped in-place (Z-negation of specific matrix elements).
- For meshes authored in a right-handed tool (glTF, Blender, etc.), the bone
  data is un-flipped so the skeleton interprets poses correctly.
- If you use `scene.useRightHandedSystem = true`, no conversion is applied.

## See

https://immersive-web.github.io/body-tracking/

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Constructors

### Constructor

> **new WebXRBodyTracking**(`_xrSessionManager`, `options?`): `WebXRBodyTracking`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:2562](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L2562)

Construct a new WebXRBodyTracking feature.

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

The XR session manager.

##### options?

[`IWebXRBodyTrackingOptions`](../interfaces/IWebXRBodyTrackingOptions.md) = `{}`

Configuration options.

#### Returns

`WebXRBodyTracking`

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

### onBodyMeshSetObservable

> `readonly` **onBodyMeshSetObservable**: [`Observable`](Observable.md)\<[`WebXRTrackedBody`](WebXRTrackedBody.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:2525](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L2525)

Observable fired when the body mesh has been set via [setBodyMesh](#setbodymesh)
or during initial configuration.

***

### onBodyTrackingEndedObservable

> `readonly` **onBodyTrackingEndedObservable**: [`Observable`](Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:2513](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L2513)

Observable fired when body tracking is lost (i.e. `XRFrame.body` becomes
`null` or returns no valid poses after previously tracking).

***

### onBodyTrackingFrameUpdateObservable

> `readonly` **onBodyTrackingFrameUpdateObservable**: [`Observable`](Observable.md)\<[`WebXRTrackedBody`](WebXRTrackedBody.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:2519](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L2519)

Observable fired every frame that has valid body tracking data.
At the point of notification, all joint transforms are up-to-date.

***

### onBodyTrackingStartedObservable

> `readonly` **onBodyTrackingStartedObservable**: [`Observable`](Observable.md)\<[`WebXRTrackedBody`](WebXRTrackedBody.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:2507](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L2507)

Observable fired when body tracking starts (i.e. the first frame where
`XRFrame.body` returns valid data).

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

> `readonly` **options**: [`IWebXRBodyTrackingOptions`](../interfaces/IWebXRBodyTrackingOptions.md) = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:2565](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L2565)

Configuration options for the body tracking feature.

***

### Name

> `readonly` `static` **Name**: `"xr-body-tracking"` = `WebXRFeatureName.BODY_TRACKING`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:2495](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L2495)

The module's name, used when enabling the feature on the features manager.
Value: `"xr-body-tracking"`.

***

### Version

> `readonly` `static` **Version**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:2501](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L2501)

The (Babylon) version of this module.
This is an integer representing the implementation version.
This number does not correspond to the WebXR specs version.

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

### isTracking

#### Get Signature

> **get** **isTracking**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:2553](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L2553)

Returns `true` while body tracking data is actively being received.

##### Returns

`boolean`

***

### trackedBody

#### Get Signature

> **get** **trackedBody**(): [`Nullable`](../type-aliases/Nullable.md)\<[`WebXRTrackedBody`](WebXRTrackedBody.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:2546](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L2546)

Get the currently tracked body, if any.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`WebXRTrackedBody`](WebXRTrackedBody.md)\>

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

### AllBodyJoints

#### Get Signature

> **get** `static` **AllBodyJoints**(): readonly [`WebXRBodyJoint`](../enumerations/WebXRBodyJoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:2754](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L2754)

Returns the complete ordered list of body joint names tracked by this feature.
Useful for iterating over all joints or building UI.

##### Returns

readonly [`WebXRBodyJoint`](../enumerations/WebXRBodyJoint.md)[]

## Methods

### attach()

> **attach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:2605](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L2605)

Attach the feature.
Called by the features manager when the XR session initialises.

Body tracking is a draft WebXR spec.  Some UAs (e.g. Meta Quest) provide
body data on `XRFrame.body` but do not list `"body-tracking"` in
`session.enabledFeatures`.  To handle this, we temporarily clear
[xrNativeFeatureName](#xrnativefeaturename) before calling the base `attach()` so the
enabled-features check is skipped, then restore it afterwards.

#### Returns

`boolean`

`true` if attachment succeeded.

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attach`](WebXRAbstractFeature.md#attach)

***

### detach()

> **detach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:2663](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L2663)

Detach the feature.
Called by the features manager when the XR session ends.

#### Returns

`boolean`

`true` if detachment succeeded.

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`detach`](WebXRAbstractFeature.md#detach)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:2689](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L2689)

Dispose this feature and all resources.

#### Returns

`void`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dispose`](WebXRAbstractFeature.md#dispose)

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

***

### setBodyMesh()

> **setBodyMesh**(`bodyMesh`, `rigMapping?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:2582](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L2582)

Attach a rigged body mesh (or replace the current one) at any time.

This is a convenience method that forwards to the underlying
[WebXRTrackedBody.setBodyMesh](WebXRTrackedBody.md#setbodymesh).  The body does not need to be
already tracking for this to work — the mesh will be applied once
tracking begins.

#### Parameters

##### bodyMesh

[`AbstractMesh`](AbstractMesh.md)

The rigged mesh to drive.

##### rigMapping?

[`XRBodyMeshRigMapping`](../type-aliases/XRBodyMeshRigMapping.md)

Optional mapping from [WebXRBodyJoint](../enumerations/WebXRBodyJoint.md) names to bone names.

#### Returns

`void`

***

### snapshotFrameToClipboardAsync()

> **snapshotFrameToClipboardAsync**(): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:2772](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L2772)

Capture a single-frame snapshot of all 83 joints and copy it to the
clipboard.  Call this from a playground button or the console while
wearing the headset:

```typescript
bodyTracking.snapshotFrameToClipboard();
```

The JSON can later be loaded offline to replay the bone-local
computation without a headset.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the copy completes, or rejects
  if no body is currently tracked.
