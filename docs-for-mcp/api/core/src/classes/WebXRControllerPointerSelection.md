[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRControllerPointerSelection

# Class: WebXRControllerPointerSelection

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L141)

A module that will enable pointer selection for motion controllers of XR Input Sources

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Constructors

### Constructor

> **new WebXRControllerPointerSelection**(`_xrSessionManager`, `_options`): `WebXRControllerPointerSelection`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L270)

constructs a new background remover module

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

the session manager for this module

##### \_options

[`IWebXRControllerPointerSelectionOptions`](../interfaces/IWebXRControllerPointerSelectionOptions.md)

read-only options to be used in this module

#### Returns

`WebXRControllerPointerSelection`

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

### disablePointerLighting

> **disablePointerLighting**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L229)

Disable lighting on the laser pointer (so it will always be visible)

***

### disableSelectionMeshLighting

> **disableSelectionMeshLighting**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L233)

Disable lighting on the selection mesh (so it will always be visible)

***

### displayLaserPointer

> **displayLaserPointer**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:237](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L237)

Should the laser pointer be displayed

***

### displaySelectionMesh

> **displaySelectionMesh**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:241](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L241)

Should the selection mesh be displayed (The ring at the end of the laser pointer)

***

### isDisposed

> **isDisposed**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L22)

Is this feature disposed?

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isDisposed`](WebXRAbstractFeature.md#isdisposed)

***

### laserPointerDefaultColor

> **laserPointerDefaultColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:249](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L249)

Default color of the laser pointer

***

### laserPointerPickedColor

> **laserPointerPickedColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L245)

This color will be set to the laser pointer when selection is triggered

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

### raySelectionPredicate

> **raySelectionPredicate**: (`mesh`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:263](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L263)

Optional filter to be used for ray selection.  This predicate shares behavior with
scene.pointerMovePredicate which takes priority if it is also assigned.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

#### Returns

`boolean`

***

### selectionMeshDefaultColor

> **selectionMeshDefaultColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:253](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L253)

default color of the selection ring

***

### selectionMeshPickedColor

> **selectionMeshPickedColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:257](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L257)

This color will be applied to the selection ring when selection is triggered

***

### Name

> `readonly` `static` **Name**: `"xr-controller-pointer-selection"` = `WebXRFeatureName.POINTER_SELECTION`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:218](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L218)

The module's name

***

### Version

> `readonly` `static` **Version**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:224](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L224)

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

### attachedControllerId

#### Get Signature

> **get** **attachedControllerId**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L375)

Get the unique id of the currently attached (active) controller for pointer selection.
When `enablePointerSelectionOnAllControllers` is true, this value is not meaningful
because all controllers are active simultaneously.

##### Returns

`string`

the unique id of the attached controller, or an empty string if none is attached

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

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L296)

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

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:343](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L343)

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

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L131)

Dispose this feature and all of the resources attached

#### Returns

`void`

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dispose`](WebXRAbstractFeature.md#dispose)

***

### getMeshUnderPointer()

> **getMeshUnderPointer**(`controllerId`): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:361](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L361)

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

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:457](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L457)

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

### setAttachedController()

> **setAttachedController**(`controllerId`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:396](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L396)

Set the active controller for pointer selection during an XR session.
Accepts either an `XRHandedness` value (`"left"`, `"right"`, `"none"`) to select
the first matching controller, or a controller unique id string for precise control.

When a matching controller is found, any in-progress pointer-down state on the
previously active controller is properly resolved (pointer-up is simulated).

This also updates the `preferredHandedness` option so that if controllers are
re-initialized (e.g. on disconnect/reconnect), the new preference persists.

This method is a no-op when `enablePointerSelectionOnAllControllers` is true,
since all controllers are active simultaneously in that mode.

#### Parameters

##### controllerId

`string`

the XRHandedness (`"left"`, `"right"`, `"none"`) or the unique id of the controller to attach

#### Returns

`boolean`

true if the active controller was changed, false otherwise
