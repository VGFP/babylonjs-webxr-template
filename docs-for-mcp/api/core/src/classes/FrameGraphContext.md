[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphContext

# Class: FrameGraphContext

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphContext.ts:6](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphContext.ts#L6)

Base class for frame graph context.

## Extended by

- [`FrameGraphRenderContext`](FrameGraphRenderContext.md)

## Properties

### enableDebugMarkers

> **enableDebugMarkers**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphContext.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphContext.ts#L13)

If true, debug markers will be enabled in the context.

## Methods

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

***

### popDebugGroup()

> **popDebugGroup**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphContext.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphContext.ts#L70)

Pops a debug group from the engine's debug stack.

#### Returns

`void`

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

***

### restoreDepthStates()

> **restoreDepthStates**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphContext.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphContext.ts#L93)

Restores the depth states saved by saveDepthStates

#### Returns

`void`

***

### saveDepthStates()

> **saveDepthStates**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphContext.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphContext.ts#L85)

Saves the current depth states (depth testing and depth writing)

#### Returns

`void`

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
