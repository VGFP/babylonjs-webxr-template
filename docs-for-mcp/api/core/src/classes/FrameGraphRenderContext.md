[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphRenderContext

# Class: FrameGraphRenderContext

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts#L43)

Frame graph context used render passes.

## Extends

- [`FrameGraphContext`](FrameGraphContext.md)

## Properties

### enableDebugMarkers

> **enableDebugMarkers**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphContext.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphContext.ts#L13)

If true, debug markers will be enabled in the context.

#### Inherited from

[`FrameGraphContext`](FrameGraphContext.md).[`enableDebugMarkers`](FrameGraphContext.md#enabledebugmarkers)

## Methods

### applyFullScreenEffect()

> **applyFullScreenEffect**(`drawWrapper`, `customBindings?`, `stencilState?`, `disableColorWrite?`, `drawBackFace?`, `depthTest?`, `noViewport?`, `alphaMode?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts#L245)

Applies a full-screen effect to the current render target

#### Parameters

##### drawWrapper

[`DrawWrapper`](DrawWrapper.md)

The draw wrapper containing the effect to apply

##### customBindings?

() => `void`

The custom bindings to use when applying the effect (optional)

##### stencilState?

[`IStencilState`](../interfaces/IStencilState.md) \| [`IStencilStateProperties`](../interfaces/IStencilStateProperties.md)

The stencil state to use when applying the effect (optional)

##### disableColorWrite?

`boolean`

If true, color write will be disabled when applying the effect (optional)

##### drawBackFace?

`boolean`

If true, the fullscreen quad will be drawn as a back face (in CW - optional)

##### depthTest?

`boolean`

If true, depth testing will be enabled when applying the effect (default is false)

##### noViewport?

`boolean`

If true, the current viewport will be left unchanged (optional). If false or undefined, the viewport will be set to the full render target size.

##### alphaMode?

`number` = `Constants.ALPHA_DISABLE`

The alpha mode to use when applying the effect (default is ALPHA_DISABLE)

#### Returns

`boolean`

True if the effect was applied, otherwise false (effect not ready)

***

### bindAttachments()

> **bindAttachments**(`attachments`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts#L157)

Binds the attachments to the current render target

#### Parameters

##### attachments

`number`[]

The attachments to bind

#### Returns

`void`

***

### bindRenderTarget()

> **bindRenderTarget**(`renderTarget?`, `applyImmediately?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts:369](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts#L369)

Binds a render target texture so that upcoming draw calls will render to it
Note: it is a lazy operation, so the render target will only be bound when needed. This way, it is possible to call
  this method several times with different render targets without incurring the cost of binding if no draw calls are made

#### Parameters

##### renderTarget?

`FrameGraphRenderTarget`

The handle of the render target texture to bind (default: undefined, meaning "back buffer"). Pass an array for MRT rendering.

##### applyImmediately?

`boolean` = `false`

If true, the render target will be applied immediately (otherwise it will be applied at first use). Default is false (delayed application).

#### Returns

`void`

***

### bindTextureHandle()

> **bindTextureHandle**(`effect`, `name`, `handle`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts:212](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts#L212)

Binds a texture handle to a given effect (resolves the handle to a texture and binds it to the effect)

#### Parameters

##### effect

[`Effect`](Effect.md)

The effect to bind the texture to

##### name

`string`

The name of the texture in the effect

##### handle

`number`

The handle of the texture to bind

#### Returns

`void`

***

### clear()

> **clear**(`color`, `backBuffer`, `depth`, `stencil?`, `stencilClearValue?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts#L122)

Clears the current render buffer or the current render target (if any is set up)

#### Parameters

##### color

[`Nullable`](../type-aliases/Nullable.md)\<`IColor4Like`\>

Defines the color to use

##### backBuffer

`boolean`

Defines if the back buffer must be cleared

##### depth

`boolean`

Defines if the depth buffer must be cleared

##### stencil?

`boolean`

Defines if the stencil buffer must be cleared

##### stencilClearValue?

`number` = `0`

Defines the value to use to clear the stencil buffer (default is 0)

#### Returns

`void`

***

### clearAttachments()

> **clearAttachments**(`color`, `attachments`, `backBuffer`, `depth`, `stencil?`, `stencilClearValue?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts#L147)

Clears all attachments (color(s) + depth/stencil) of the current render target

#### Parameters

##### color

[`Nullable`](../type-aliases/Nullable.md)\<`IColor4Like`\>

Defines the color to use

##### attachments

`number`[]

The attachments to clear

##### backBuffer

`boolean`

Defines if the back buffer must be cleared

##### depth

`boolean`

Defines if the depth buffer must be cleared

##### stencil?

`boolean`

Defines if the stencil buffer must be cleared

##### stencilClearValue?

`number` = `0`

Defines the value to use to clear the stencil buffer (default is 0)

#### Returns

`void`

***

### clearColorAttachments()

> **clearColorAttachments**(`color`, `attachments`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts#L132)

Clears the color attachments of the current render target

#### Parameters

##### color

[`Nullable`](../type-aliases/Nullable.md)\<`IColor4Like`\>

Defines the color to use

##### attachments

`number`[]

The attachments to clear

#### Returns

`void`

***

### copyTexture()

> **copyTexture**(`sourceTexture`, `forceCopyToBackbuffer?`, `noViewport?`, `lodLevel?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts:303](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts#L303)

Copies a texture to the current render target

#### Parameters

##### sourceTexture

`number`

The source texture to copy from

##### forceCopyToBackbuffer?

`boolean` = `false`

If true, the copy will be done to the back buffer regardless of the current render target

##### noViewport?

`boolean`

If true, the current viewport will be left unchanged (optional). If false or undefined, the viewport will be set to the full render target size.

##### lodLevel?

`number` = `0`

The LOD level to use when copying the texture (default: 0).

#### Returns

`void`

***

### createRenderTarget()

> **createRenderTarget**(`name`, `renderTargets?`, `renderTargetDepth?`, `depthReadOnly?`, `stencilReadOnly?`): `FrameGraphRenderTarget`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts#L104)

Creates a (frame graph) render target wrapper
Note that renderTargets or renderTargetDepth can be undefined, but not both at the same time!

#### Parameters

##### name

`string`

Name of the render target wrapper

##### renderTargets?

`number` \| `number`[]

Render target handles (textures) to use

##### renderTargetDepth?

`number`

Render target depth handle (texture) to use

##### depthReadOnly?

`boolean`

If true, the depth buffer will be read-only

##### stencilReadOnly?

`boolean`

If true, the stencil buffer will be read-only

#### Returns

`FrameGraphRenderTarget`

The created render target wrapper

***

### generateMipMaps()

> **generateMipMaps**(`handle?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts#L166)

Generates mipmaps for the current render target

#### Parameters

##### handle?

`number`

Optional handle of the texture to generate mipmaps for (if not provided, will generate mipmaps for all textures in the current render target)

#### Returns

`void`

***

### getTextureFromHandle()

> **getTextureFromHandle**(`handle`): [`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphContext.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphContext.ts#L55)

Gets a texture from a handle.
Note that if the texture is a history texture, the read texture for the current frame will be returned.

#### Parameters

##### handle

`number`

The handle of the texture

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

The texture or null if not found

#### Inherited from

[`FrameGraphContext`](FrameGraphContext.md).[`getTextureFromHandle`](FrameGraphContext.md#gettexturefromhandle)

***

### insertDebugMarker()

> **insertDebugMarker**(`text`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphContext.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphContext.ts#L78)

Inserts a debug marker in the engine's debug stack.

#### Parameters

##### text

`string`

The text of the debug marker

#### Returns

`void`

#### Inherited from

[`FrameGraphContext`](FrameGraphContext.md).[`insertDebugMarker`](FrameGraphContext.md#insertdebugmarker)

***

### isBackbuffer()

> **isBackbuffer**(`handle`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts#L72)

Checks whether a texture handle points to the backbuffer's color or depth texture

#### Parameters

##### handle

`number`

The handle to check

#### Returns

`boolean`

True if the handle points to the backbuffer's color or depth texture, otherwise false

***

### isBackbufferColor()

> **isBackbufferColor**(`handle`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts#L81)

Checks whether a texture handle points to the backbuffer's color texture

#### Parameters

##### handle

`number`

The handle to check

#### Returns

`boolean`

True if the handle points to the backbuffer's color texture, otherwise false

***

### isBackbufferDepthStencil()

> **isBackbufferDepthStencil**(`handle`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts#L90)

Checks whether a texture handle points to the backbuffer's depth texture

#### Parameters

##### handle

`number`

The handle to check

#### Returns

`boolean`

True if the handle points to the backbuffer's depth texture, otherwise false

***

### popDebugGroup()

> **popDebugGroup**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphContext.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphContext.ts#L70)

Pops a debug group from the engine's debug stack.

#### Returns

`void`

#### Inherited from

[`FrameGraphContext`](FrameGraphContext.md).[`popDebugGroup`](FrameGraphContext.md#popdebuggroup)

***

### pushDebugGroup()

> **pushDebugGroup**(`name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphContext.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphContext.ts#L63)

Pushes a debug group to the engine's debug stack.

#### Parameters

##### name

`string`

The name of the debug group

#### Returns

`void`

#### Inherited from

[`FrameGraphContext`](FrameGraphContext.md).[`pushDebugGroup`](FrameGraphContext.md#pushdebuggroup)

***

### render()

> **render**(`object`, `viewportWidth?`, `viewportHeight?`, `restoreDefaultFramebuffer?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts:334](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts#L334)

Renders a RenderTargetTexture or a layer

#### Parameters

##### object

[`Layer`](Layer.md) \| [`UtilityLayerRenderer`](UtilityLayerRenderer.md) \| [`ObjectRenderer`](ObjectRenderer.md)

The RenderTargetTexture/Layer to render

##### viewportWidth?

`number`

The width of the viewport (optional for Layer, but mandatory for ObjectRenderer)

##### viewportHeight?

`number`

The height of the viewport (optional for Layer, but mandatory for ObjectRenderer)

##### restoreDefaultFramebuffer?

`boolean` = `false`

If true, the default framebuffer will be restored after rendering (default: false)

#### Returns

`void`

***

### renderUnmanaged()

> **renderUnmanaged**(`component`, `intermediateRendering?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphContext.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphContext.ts#L28)

Renders a component without managing the render target.
Use this method when you have a component that handles its own rendering logic which is not fully integrated into the frame graph system.

#### Parameters

##### component

The component to render.

###### render

() => `void`

##### intermediateRendering?

`boolean` = `true`

If true, the scene's intermediate rendering flag will be set to true during the render call (default: true)

#### Returns

`void`

#### Inherited from

[`FrameGraphContext`](FrameGraphContext.md).[`renderUnmanaged`](FrameGraphContext.md#renderunmanaged)

***

### restoreDefaultFramebuffer()

> **restoreDefaultFramebuffer**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts:380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts#L380)

Restores the default framebuffer (back buffer) as the current render target

#### Returns

`void`

***

### restoreDepthStates()

> **restoreDepthStates**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphContext.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphContext.ts#L93)

Restores the depth states saved by saveDepthStates

#### Returns

`void`

#### Inherited from

[`FrameGraphContext`](FrameGraphContext.md).[`restoreDepthStates`](FrameGraphContext.md#restoredepthstates)

***

### saveDepthStates()

> **saveDepthStates**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphContext.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphContext.ts#L85)

Saves the current depth states (depth testing and depth writing)

#### Returns

`void`

#### Inherited from

[`FrameGraphContext`](FrameGraphContext.md).[`saveDepthStates`](FrameGraphContext.md#savedepthstates)

***

### setDepthStates()

> **setDepthStates**(`depthTest`, `depthWrite`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphContext.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphContext.ts#L103)

Sets the depth states for the current render target

#### Parameters

##### depthTest

`boolean`

If true, depth testing is enabled

##### depthWrite

`boolean`

If true, depth writing is enabled

#### Returns

`void`

#### Inherited from

[`FrameGraphContext`](FrameGraphContext.md).[`setDepthStates`](FrameGraphContext.md#setdepthstates)

***

### setTextureSamplingMode()

> **setTextureSamplingMode**(`handle`, `samplingMode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts:198](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphRenderContext.ts#L198)

Sets the texture sampling mode for a given texture handle

#### Parameters

##### handle

`number`

Handle of the texture to set the sampling mode for

##### samplingMode

`number`

Sampling mode to set

#### Returns

`void`

***

### setViewport()

> **setViewport**(`viewport`, `requiredWidth?`, `requiredHeight?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphContext.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphContext.ts#L114)

Sets the current viewport

#### Parameters

##### viewport

`IViewportLike`

defines the viewport element to be used

##### requiredWidth?

`number`

defines the width required for rendering. If not provided, the width of the render texture is used.

##### requiredHeight?

`number`

defines the height required for rendering. If not provided the height of the render texture is used.

#### Returns

`void`

#### Inherited from

[`FrameGraphContext`](FrameGraphContext.md).[`setViewport`](FrameGraphContext.md#setviewport)
