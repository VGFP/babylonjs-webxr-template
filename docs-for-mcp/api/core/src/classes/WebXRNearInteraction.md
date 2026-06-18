[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRNearInteraction

# Class: WebXRNearInteraction

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L152)

A module that will enable near interaction near interaction for hands and motion controllers of XR Input Sources

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Constructors

### Constructor

> **new WebXRNearInteraction**(`_xrSessionManager`, `_options`): `WebXRNearInteraction`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:262](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L262)

constructs a new background remover module

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

the session manager for this module

##### \_options

[`IWebXRNearInteractionOptions`](../interfaces/IWebXRNearInteractionOptions.md)

read-only options to be used in this module

#### Returns

`WebXRNearInteraction`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`constructor`](WebXRAbstractFeature.md#constructor)

## Properties

### alwaysHideSelectionMesh

> **alwaysHideSelectionMesh**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:255](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L255)

If set to true, the selection mesh will always be hidden. Otherwise it will be shown only when needed

***

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

### selectionMeshDefaultColor

> **selectionMeshDefaultColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:246](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L246)

default color of the selection ring

***

### selectionMeshPickedColor

> **selectionMeshPickedColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:250](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L250)

This color will be applied to the selection ring when selection is triggered

***

### Name

> `readonly` `static` **Name**: `"xr-near-interaction"` = `WebXRFeatureName.NEAR_INTERACTION`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:235](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L235)

The module's name

***

### Version

> `readonly` `static` **Version**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:241](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L241)

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

### attach()

> **attach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L283)

Attach this feature
Will usually be called by the features manager

#### Returns

`boolean`

true if successful.

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attach`](WebXRAbstractFeature.md#attach)

***

### detach()

> **detach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:307](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L307)

Detach this feature.
Will usually be called by the features manager

#### Returns

`boolean`

true if successful.

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

### getMeshUnderPointer()

> **getMeshUnderPointer**(`controllerId`): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:326](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L326)

Will get the mesh under a specific pointer.
`scene.meshUnderPointer` will only return one mesh - either left or right.

#### Parameters

##### controllerId

`string`

the controllerId to check

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

The mesh under pointer or null if no mesh is under the pointer

***

### getXRControllerByPointerId()

> **getXRControllerByPointerId**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`WebXRInputSource`](WebXRInputSource.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L340)

Get the xr controller that correlates to the pointer id in the pointer event

#### Parameters

##### id

`number`

the pointer id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`WebXRInputSource`](WebXRInputSource.md)\>

the controller that correlates to this id or null if not found

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

### setFarInteractionFeature()

> **setFarInteractionFeature**(`farInteractionFeature`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:357](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L357)

This function sets webXRControllerPointerSelection feature that will be disabled when
the hover range is reached for a mesh and will be reattached when not in hover range.
This is used to remove the selection rays when moving.

#### Parameters

##### farInteractionFeature

[`Nullable`](../type-aliases/Nullable.md)\<[`WebXRControllerPointerSelection`](WebXRControllerPointerSelection.md)\>

the feature to disable when finger is in hover range for a mesh

#### Returns

`void`
