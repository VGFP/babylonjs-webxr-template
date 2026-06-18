[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRManagedOutputCanvas

# Class: WebXRManagedOutputCanvas

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts#L51)

Creates a canvas that is added/removed from the webpage when entering/exiting XR

## Implements

- [`WebXRRenderTarget`](../interfaces/WebXRRenderTarget.md)

## Constructors

### Constructor

> **new WebXRManagedOutputCanvas**(`_xrSessionManager`, `_options?`): `WebXRManagedOutputCanvas`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts#L83)

Initializes the canvas to be added/removed upon entering/exiting xr

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

The XR Session manager

##### \_options?

[`WebXRManagedOutputCanvasOptions`](WebXRManagedOutputCanvasOptions.md) = `...`

optional configuration for this canvas output. defaults will be used if not provided

#### Returns

`WebXRManagedOutputCanvas`

## Properties

### canvasContext

> **canvasContext**: `WebGL2RenderingContext`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts#L62)

Rendering context of the canvas which can be used to display/mirror xr content

#### Implementation of

[`WebXRRenderTarget`](../interfaces/WebXRRenderTarget.md).[`canvasContext`](../interfaces/WebXRRenderTarget.md#canvascontext)

***

### onXRLayerInitObservable

> **onXRLayerInitObservable**: [`Observable`](Observable.md)\<`XRWebGLLayer`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts#L74)

Observers registered here will be triggered when the xr layer was initialized

***

### xrLayer

> **xrLayer**: [`Nullable`](../type-aliases/Nullable.md)\<`XRWebGLLayer`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts#L67)

xr layer for the canvas

#### Implementation of

[`WebXRRenderTarget`](../interfaces/WebXRRenderTarget.md).[`xrLayer`](../interfaces/WebXRRenderTarget.md#xrlayer)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts#L114)

Disposes of the object

#### Returns

`void`

#### Implementation of

[`WebXRRenderTarget`](../interfaces/WebXRRenderTarget.md).[`dispose`](../interfaces/WebXRRenderTarget.md#dispose)

***

### initializeXRLayerAsync()

> **initializeXRLayerAsync**(`xrSession`): `Promise`\<`XRWebGLLayer`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts#L152)

Initializes a XRWebGLLayer to be used as the session's baseLayer.

#### Parameters

##### xrSession

`XRSession`

xr session

#### Returns

`Promise`\<`XRWebGLLayer`\>

a promise that will resolve once the XR Layer has been created

#### Implementation of

[`WebXRRenderTarget`](../interfaces/WebXRRenderTarget.md).[`initializeXRLayerAsync`](../interfaces/WebXRRenderTarget.md#initializexrlayerasync)
