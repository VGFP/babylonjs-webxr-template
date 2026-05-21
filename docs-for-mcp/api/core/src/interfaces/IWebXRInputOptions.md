[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRInputOptions

# Interface: IWebXRInputOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInput.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInput.ts#L12)

The schema for initialization options of the XR Input class

## Properties

### controllerOptions?

> `optional` **controllerOptions?**: [`IWebXRControllerOptions`](IWebXRControllerOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInput.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInput.ts#L45)

Optional options to pass to the controller. Will be overridden by the Input options where applicable

***

### customControllersRepositoryURL?

> `optional` **customControllersRepositoryURL?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInput.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInput.ts#L35)

A custom URL for the controllers repository

***

### disableControllerAnimation?

> `optional` **disableControllerAnimation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInput.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInput.ts#L40)

Should the controller model's components not move according to the user input

***

### disableOnlineControllerRepository?

> `optional` **disableOnlineControllerRepository?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInput.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInput.ts#L30)

Do not send a request to the controller repository to load the profile.

Instead, use the controllers available in babylon itself.

***

### doNotLoadControllerMeshes?

> `optional` **doNotLoadControllerMeshes?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInput.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInput.ts#L16)

If set to true no model will be automatically loaded

***

### forceInputProfile?

> `optional` **forceInputProfile?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInput.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInput.ts#L23)

If set, this profile will be used for all controllers loaded (for example "microsoft-mixed-reality")
If not found, the xr input profile data will be used.
Profiles are defined here - https://github.com/immersive-web/webxr-input-profiles/
