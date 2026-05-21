[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRInputSource

# Class: WebXRInputSource

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInputSource.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInputSource.ts#L43)

Represents an XR controller

## Constructors

### Constructor

> **new WebXRInputSource**(`_scene`, `inputSource`, `_options?`): `WebXRInputSource`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInputSource.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInputSource.ts#L92)

Creates the input source object

#### Parameters

##### \_scene

[`Scene`](Scene.md)

the scene which the controller should be associated to

##### inputSource

`XRInputSource`

the underlying input source for the controller

##### \_options?

[`IWebXRControllerOptions`](../interfaces/IWebXRControllerOptions.md) = `{}`

options for this controller creation

#### Returns

`WebXRInputSource`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/webXR/webXRInputControllerSupport

## Properties

### grip?

> `optional` **grip?**: [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInputSource.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInputSource.ts#L51)

Represents the part of the controller that is held. This may not exist if the controller is the head mounted display itself, if that's the case only the pointer from the head will be available

***

### inputSource

> **inputSource**: `XRInputSource`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInputSource.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInputSource.ts#L95)

The underlying input source for the controller

***

### motionController?

> `optional` **motionController?**: [`WebXRAbstractMotionController`](WebXRAbstractMotionController.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInputSource.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInputSource.ts#L57)

If available, this is the gamepad object related to this controller.
Using this object it is possible to get click events and trackpad changes of the
webxr controller that is currently being used.

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<`WebXRInputSource`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInputSource.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInputSource.ts#L63)

Event that fires when the controller is removed/disposed.
The object provided as event data is this controller, after associated assets were disposed.
uniqueId is still available.

***

### onMeshLoadedObservable

> **onMeshLoadedObservable**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInputSource.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInputSource.ts#L69)

Will be triggered when the mesh associated with the motion controller is done loading.
It is also possible that this will never trigger (!) if no mesh was loaded, or if the developer decides to load a different mesh
A shortened version of controller -> motion controller -> on mesh loaded.

***

### onMotionControllerInitObservable

> **onMotionControllerInitObservable**: [`Observable`](Observable.md)\<[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInputSource.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInputSource.ts#L73)

Observers registered here will trigger when a motion controller profile was assigned to this xr controller

***

### pointer

> **pointer**: [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInputSource.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInputSource.ts#L77)

Pointer which can be used to select objects or attach a visible laser to

## Accessors

### uniqueId

#### Get Signature

> **get** **uniqueId**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInputSource.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInputSource.ts#L151)

Get this controllers unique id

##### Returns

`string`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInputSource.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInputSource.ts#L158)

Disposes of the object

#### Returns

`void`

***

### getWorldPointerRayToRef()

> **getWorldPointerRayToRef**(`result`, `gripIfAvailable?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInputSource.ts:178](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInputSource.ts#L178)

Gets a world space ray coming from the pointer or grip

#### Parameters

##### result

[`Ray`](Ray.md)

the resulting ray

##### gripIfAvailable?

`boolean` = `false`

use the grip mesh instead of the pointer, if available

#### Returns

`void`

***

### updateFromXRFrame()

> **updateFromXRFrame**(`xrFrame`, `referenceSpace`, `xrCamera`, `xrSessionManager`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInputSource.ts:193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRInputSource.ts#L193)

Updates the controller pose based on the given XRFrame

#### Parameters

##### xrFrame

`XRFrame`

xr frame to update the pose with

##### referenceSpace

`XRReferenceSpace`

reference space to use

##### xrCamera

[`WebXRCamera`](WebXRCamera.md)

the xr camera, used for parenting

##### xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

the session manager used to get the world reference system

#### Returns

`void`
