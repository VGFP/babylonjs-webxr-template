[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRRenderTarget

# Interface: WebXRRenderTarget

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRTypes.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRTypes.ts#L48)

Abstraction of the XR render target

## Extends

- [`IDisposable`](IDisposable.md)

## Properties

### canvasContext

> **canvasContext**: `WebGLRenderingContext`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRTypes.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRTypes.ts#L52)

xrpresent context of the canvas which can be used to display/mirror xr content

***

### xrLayer

> **xrLayer**: [`Nullable`](../type-aliases/Nullable.md)\<`XRWebGLLayer`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRTypes.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRTypes.ts#L57)

xr layer for the canvas

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L120)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IDisposable`](IDisposable.md).[`dispose`](IDisposable.md#dispose)

***

### initializeXRLayerAsync()

> **initializeXRLayerAsync**(`xrSession`): `Promise`\<`XRWebGLLayer`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRTypes.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRTypes.ts#L64)

Initializes a XRWebGLLayer to be used as the session's baseLayer.

#### Parameters

##### xrSession

`XRSession`

xr session

#### Returns

`Promise`\<`XRWebGLLayer`\>

a promise that will resolve once the XR Layer has been created
