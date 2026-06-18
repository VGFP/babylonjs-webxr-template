[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRSpaceWarpRenderTargetTextureProvider

# Class: WebXRSpaceWarpRenderTargetTextureProvider

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRSpaceWarp.pure.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRSpaceWarp.pure.ts#L132)

WebXR Space Warp Render Target Texture Provider

## Implements

- [`IWebXRRenderTargetTextureProvider`](../interfaces/IWebXRRenderTargetTextureProvider.md)

## Constructors

### Constructor

> **new WebXRSpaceWarpRenderTargetTextureProvider**(`_scene`, `_xrSessionManager`, `_xrWebGLBinding`): `WebXRSpaceWarpRenderTargetTextureProvider`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRSpaceWarp.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRSpaceWarp.pure.ts#L138)

#### Parameters

##### \_scene

[`Scene`](Scene.md)

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

##### \_xrWebGLBinding

`XRWebGLBinding`

#### Returns

`WebXRSpaceWarpRenderTargetTextureProvider`

## Methods

### accessMotionVector()

> **accessMotionVector**(`view`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRSpaceWarp.pure.ts:230](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRSpaceWarp.pure.ts#L230)

Access the motion vector (which will turn on Space Warp)

#### Parameters

##### view

`XRView`

the view to access the motion vector texture for

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRSpaceWarp.pure.ts:256](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRSpaceWarp.pure.ts#L256)

Releases all held resources

#### Returns

`void`

#### Implementation of

[`IWebXRRenderTargetTextureProvider`](../interfaces/IWebXRRenderTargetTextureProvider.md).[`dispose`](../interfaces/IWebXRRenderTargetTextureProvider.md#dispose)

***

### getRenderTargetTextureForEye()

> **getRenderTargetTextureForEye**(`_eye`): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRSpaceWarp.pure.ts:244](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRSpaceWarp.pure.ts#L244)

Gets the render target texture for the specified eye

#### Parameters

##### \_eye

`XREye`

the eye to get the render target texture for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

the render target texture or null

#### Implementation of

[`IWebXRRenderTargetTextureProvider`](../interfaces/IWebXRRenderTargetTextureProvider.md).[`getRenderTargetTextureForEye`](../interfaces/IWebXRRenderTargetTextureProvider.md#getrendertargettextureforeye)

***

### getRenderTargetTextureForView()

> **getRenderTargetTextureForView**(`view`): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRSpaceWarp.pure.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRSpaceWarp.pure.ts#L248)

Gets the correct render target texture to be rendered this frame for this view

#### Parameters

##### view

`XRView`

the view for which to get the render target

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

the render target for the specified view or null if not available

#### Implementation of

[`IWebXRRenderTargetTextureProvider`](../interfaces/IWebXRRenderTargetTextureProvider.md).[`getRenderTargetTextureForView`](../interfaces/IWebXRRenderTargetTextureProvider.md#getrendertargettextureforview)

***

### trySetViewportForView()

> **trySetViewportForView**(`viewport`, `view`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRSpaceWarp.pure.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRSpaceWarp.pure.ts#L217)

Attempts to set the framebuffer-size-normalized viewport to be rendered this frame for this view.
In the event of a failure, the supplied viewport is not updated.

#### Parameters

##### viewport

[`Viewport`](Viewport.md)

the viewport to which the view will be rendered

##### view

`XRView`

the view for which to set the viewport

#### Returns

`boolean`

whether the operation was successful

#### Implementation of

[`IWebXRRenderTargetTextureProvider`](../interfaces/IWebXRRenderTargetTextureProvider.md).[`trySetViewportForView`](../interfaces/IWebXRRenderTargetTextureProvider.md#trysetviewportforview)
