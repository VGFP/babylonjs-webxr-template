[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRDefaultExperienceOptions

# Class: WebXRDefaultExperienceOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L17)

Options for the default xr helper

## Constructors

### Constructor

> **new WebXRDefaultExperienceOptions**(): `WebXRDefaultExperienceOptions`

#### Returns

`WebXRDefaultExperienceOptions`

## Properties

### disableDefaultUI?

> `optional` **disableDefaultUI?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L21)

Enable or disable default UI to enter XR

***

### disableHandTracking?

> `optional` **disableHandTracking?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L40)

Should hand tracking be disabled. Defaults to false.

***

### disableNearInteraction?

> `optional` **disableNearInteraction?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L35)

Should nearInteraction not initialize. Defaults to false.

***

### disablePointerSelection?

> `optional` **disablePointerSelection?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L27)

Should pointer selection not initialize.
Note that disabling pointer selection also disables teleportation.
Defaults to false.

***

### disableTeleportation?

> `optional` **disableTeleportation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L31)

Should teleportation not initialize. Defaults to false.

***

### floorMeshes?

> `optional` **floorMeshes?**: [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L44)

Floor meshes that will be used for teleport

***

### handSupportOptions?

> `optional` **handSupportOptions?**: `Partial`\<[`IWebXRHandTrackingOptions`](../interfaces/IWebXRHandTrackingOptions.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L67)

optional configuration for hand tracking

***

### ignoreNativeCameraTransformation?

> `optional` **ignoreNativeCameraTransformation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L50)

If set to true, the first frame will not be used to reset position
The first frame is mainly used when copying transformation from the old camera
Mainly used in AR

***

### inputOptions?

> `optional` **inputOptions?**: `Partial`\<[`IWebXRInputOptions`](../interfaces/IWebXRInputOptions.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L54)

Optional configuration for the XR input object

***

### nearInteractionOptions?

> `optional` **nearInteractionOptions?**: `Partial`\<[`IWebXRNearInteractionOptions`](../interfaces/IWebXRNearInteractionOptions.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L62)

optional configuration for near interaction

***

### optionalFeatures?

> `optional` **optionalFeatures?**: `boolean` \| `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L94)

A list of optional features to init the session with
If set to true, all features we support will be added

***

### outputCanvasOptions?

> `optional` **outputCanvasOptions?**: [`WebXRManagedOutputCanvasOptions`](WebXRManagedOutputCanvasOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L75)

optional configuration for the output canvas

***

### pointerSelectionOptions?

> `optional` **pointerSelectionOptions?**: `Partial`\<[`IWebXRControllerPointerSelectionOptions`](../interfaces/IWebXRControllerPointerSelectionOptions.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L58)

optional configuration for pointer selection

***

### renderingGroupId?

> `optional` **renderingGroupId?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L88)

An optional rendering group id that will be set globally for teleportation, pointer selection and default controller meshes

***

### teleportationOptions?

> `optional` **teleportationOptions?**: `Partial`\<[`IWebXRTeleportationOptions`](../interfaces/IWebXRTeleportationOptions.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L71)

optional configuration for teleportation

***

### uiOptions?

> `optional` **uiOptions?**: `Partial`\<[`WebXREnterExitUIOptions`](WebXREnterExitUIOptions.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L79)

optional UI options. This can be used among other to change session mode and reference space type

***

### useStablePlugins?

> `optional` **useStablePlugins?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L83)

When loading teleportation and pointer select, use stable versions instead of latest.
