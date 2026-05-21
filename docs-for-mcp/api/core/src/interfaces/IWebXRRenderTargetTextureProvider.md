[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRRenderTargetTextureProvider

# Interface: IWebXRRenderTargetTextureProvider

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRRenderTargetTextureProvider.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRRenderTargetTextureProvider.ts#L15)

An interface for objects that provide render target textures for XR rendering.

## Extends

- [`IDisposable`](IDisposable.md)

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

### getRenderTargetTextureForEye()

> **getRenderTargetTextureForEye**(`eye`): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](../classes/RenderTargetTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRRenderTargetTextureProvider.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRRenderTargetTextureProvider.ts#L29)

Gets the correct render target texture to be rendered this frame for this eye

#### Parameters

##### eye

`XREye`

the eye for which to get the render target

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](../classes/RenderTargetTexture.md)\>

the render target for the specified eye or null if not available

***

### getRenderTargetTextureForView()

> **getRenderTargetTextureForView**(`view`): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](../classes/RenderTargetTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRRenderTargetTextureProvider.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRRenderTargetTextureProvider.ts#L35)

Gets the correct render target texture to be rendered this frame for this view

#### Parameters

##### view

`XRView`

the view for which to get the render target

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](../classes/RenderTargetTexture.md)\>

the render target for the specified view or null if not available

***

### trySetViewportForView()

> **trySetViewportForView**(`viewport`, `view`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRRenderTargetTextureProvider.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRRenderTargetTextureProvider.ts#L23)

Attempts to set the framebuffer-size-normalized viewport to be rendered this frame for this view.
In the event of a failure, the supplied viewport is not updated.

#### Parameters

##### viewport

[`Viewport`](../classes/Viewport.md)

the viewport to which the view will be rendered

##### view

`XRView`

the view for which to set the viewport

#### Returns

`boolean`

whether the operation was successful
