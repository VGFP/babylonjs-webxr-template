[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRMotionControllerManager

# Class: WebXRMotionControllerManager

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts#L35)

Motion controller manager is managing the different webxr profiles and makes sure the right
controller is being loaded.

## Constructors

### Constructor

> **new WebXRMotionControllerManager**(): `WebXRMotionControllerManager`

#### Returns

`WebXRMotionControllerManager`

## Properties

### BaseRepositoryUrl

> `static` **BaseRepositoryUrl**: `string` = `"https://immersive-web.github.io/webxr-input-profiles/packages/viewer/dist"`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts#L45)

The base URL of the online controller repository. Can be changed at any time.

***

### DisableControllerCache

> `static` **DisableControllerCache**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts#L59)

Disable the controller cache and load the models each time a new WebXRProfileMotionController is loaded.
Defaults to true.

***

### PrioritizeOnlineRepository

> `static` **PrioritizeOnlineRepository**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts#L49)

Which repository gets priority - local or online

***

### UseOnlineRepository

> `static` **UseOnlineRepository**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts#L53)

Use the online repository, or use only locally-defined controllers

## Methods

### ClearControllerCache()

> `static` **ClearControllerCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts:204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts#L204)

Clear the controller's cache (usually happens at the end of a session)

#### Returns

`void`

***

### ClearProfilesCache()

> `static` **ClearProfilesCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts#L64)

Clear the cache used for profile loading and reload when requested again

#### Returns

`void`

***

### DefaultFallbacks()

> `static` **DefaultFallbacks**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts#L73)

Register the default fallbacks.
This function is called automatically when this file is imported.

#### Returns

`void`

***

### FindFallbackWithProfileId()

> `static` **FindFallbackWithProfileId**(`profileId`): `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts#L95)

Find a fallback profile if the profile was not found. There are a few predefined generic profiles.

#### Parameters

##### profileId

`string`

the profile to which a fallback needs to be found

#### Returns

`string`[]

an array with corresponding fallback profiles

***

### GetMotionControllerWithXRInput()

> `static` **GetMotionControllerWithXRInput**(`xrInput`, `scene`, `forceProfile?`): `Promise`\<[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts#L116)

When acquiring a new xrInput object (usually by the WebXRInput class), match it with the correct profile.
The order of search:

1) Iterate the profiles array of the xr input and try finding a corresponding motion controller
2) (If not found) search in the gamepad id and try using it (legacy versions only)
3) search for registered fallbacks (should be redundant, nonetheless it makes sense to check)
4) return the generic trigger controller if none were found

#### Parameters

##### xrInput

`XRInputSource`

the xrInput to which a new controller is initialized

##### scene

[`Scene`](Scene.md)

the scene to which the model will be added

##### forceProfile?

`string`

force a certain profile for this controller

#### Returns

`Promise`\<[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md)\>

A promise that fulfils with the motion controller class for this profile id or the generic standard class if none was found

***

### RegisterController()

> `static` **RegisterController**(`type`, `constructFunction`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts:171](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts#L171)

Register a new controller based on its profile. This function will be called by the controller classes themselves.

If you are missing a profile, make sure it is imported in your source, otherwise it will not register.

#### Parameters

##### type

`string`

the profile type to register

##### constructFunction

[`MotionControllerConstructor`](../type-aliases/MotionControllerConstructor.md)

the function to be called when loading this profile

#### Returns

`void`

***

### RegisterFallbacksForProfileId()

> `static` **RegisterFallbacksForProfileId**(`profileId`, `fallbacks`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts#L180)

Register a fallback to a specific profile.

#### Parameters

##### profileId

`string`

the profileId that will receive the fallbacks

##### fallbacks

`string`[]

A list of fallback profiles

#### Returns

`void`

***

### UpdateProfilesList()

> `static` **UpdateProfilesList**(): `Promise`\<\{\[`profile`: `string`\]: `string`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts:193](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRMotionControllerManager.pure.ts#L193)

Will update the list of profiles available in the repository

#### Returns

`Promise`\<\{\[`profile`: `string`\]: `string`; \}\>

a promise that resolves to a map of profiles available online
