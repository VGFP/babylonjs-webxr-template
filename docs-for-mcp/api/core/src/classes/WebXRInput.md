[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRInput

# Class: WebXRInput

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInput.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRInput.ts#L50)

XR input used to track XR inputs such as controllers/rays

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new WebXRInput**(`xrSessionManager`, `xrCamera`, `_options?`): `WebXRInput`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInput.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRInput.ts#L74)

Initializes the WebXRInput

#### Parameters

##### xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

the xr session manager for this session

##### xrCamera

[`WebXRCamera`](WebXRCamera.md)

the WebXR camera for this session. Mainly used for teleportation

##### \_options?

[`IWebXRInputOptions`](../interfaces/IWebXRInputOptions.md) = `{}`

= initialization options for this xr input

#### Returns

`WebXRInput`

## Properties

### controllers

> **controllers**: [`WebXRInputSource`](WebXRInputSource.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInput.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRInput.ts#L54)

XR controllers being tracked

***

### onControllerAddedObservable

> **onControllerAddedObservable**: [`Observable`](Observable.md)\<[`WebXRInputSource`](WebXRInputSource.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInput.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRInput.ts#L62)

Event when a controller has been connected/added

***

### onControllerRemovedObservable

> **onControllerRemovedObservable**: [`Observable`](Observable.md)\<[`WebXRInputSource`](WebXRInputSource.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInput.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRInput.ts#L66)

Event when a controller has been removed/disconnected

***

### xrCamera

> **xrCamera**: [`WebXRCamera`](WebXRCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInput.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRInput.ts#L82)

the WebXR camera for this session. Mainly used for teleportation

***

### xrSessionManager

> **xrSessionManager**: [`WebXRSessionManager`](WebXRSessionManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInput.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRInput.ts#L78)

the xr session manager for this session

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRInput.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRInput.ts#L169)

Disposes of the object

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)
