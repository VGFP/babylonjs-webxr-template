[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphTextureManager

# Class: FrameGraphTextureManager

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L61)

Manages the textures used by a frame graph

## Constructors

### Constructor

> **new FrameGraphTextureManager**(`engine`, `_debugTextures?`, `_scene`): `FrameGraphTextureManager`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L88)

Constructs a new instance of the texture manager

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

The engine to use

##### \_debugTextures?

`boolean` = `false`

If true, debug textures will be created so that they are visible in the inspector

##### \_scene

[`Scene`](Scene.md)

The scene the manager belongs to

#### Returns

`FrameGraphTextureManager`

## Properties

### engine

> `readonly` **engine**: [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L89)

The engine to use

***

### showDebugLogsForTextureAllcationOptimization

> **showDebugLogsForTextureAllcationOptimization**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L76)

Gets or sets a boolean indicating if debug logs should be shown when applying texture allocation optimization (default: false)

## Accessors

### backBufferTextureOverriden

#### Get Signature

> **get** **backBufferTextureOverriden**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:513](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L513)

True if the back buffer texture has been overriden by a call to setBackBufferTexture

##### Returns

`boolean`

***

### hasHistoryTextures

#### Get Signature

> **get** **hasHistoryTextures**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:623](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L623)

Returns true if the texture manager has at least one history texture

##### Returns

`boolean`

## Methods

### computeTotalTextureSize()

> **computeTotalTextureSize**(`optimizedSize`, `outputWidth`, `outputHeight`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:468](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L468)

Calculates the total byte size of all textures used by the frame graph texture manager (including external textures)

#### Parameters

##### optimizedSize

`boolean`

True if the calculation should not factor in aliased textures

##### outputWidth

`number`

The output width of the frame graph. Will be used to calculate the size of percentage-based textures

##### outputHeight

`number`

The output height of the frame graph. Will be used to calculate the size of percentage-based textures

#### Returns

`number`

The total size of all textures

***

### createDanglingHandle()

> **createDanglingHandle**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:370](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L370)

Creates a handle which is not associated with any texture.
Call resolveDanglingHandle to associate the handle with a valid texture handle.

#### Returns

`number`

The dangling handle

***

### createRenderTarget()

> **createRenderTarget**(`name`, `renderTargets?`, `renderTargetDepth?`, `depthReadOnly?`, `stencilReadOnly?`): `FrameGraphRenderTarget`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:330](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L330)

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

### createRenderTargetTexture()

> **createRenderTargetTexture**(`name`, `creationOptions`, `handle?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:305](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L305)

Creates a new render target texture
If multiple textures are described in FrameGraphTextureCreationOptions, the handle of the first texture is returned, handle+1 is the handle of the second texture, etc.

#### Parameters

##### name

`string`

Name of the texture

##### creationOptions

[`FrameGraphTextureCreationOptions`](../type-aliases/FrameGraphTextureCreationOptions.md)

Options to use when creating the texture

##### handle?

`number`

Existing handle to use for the texture. If not provided (default), a new handle will be created.

#### Returns

`number`

The handle to the texture

***

### getAbsoluteDimensions()

> **getAbsoluteDimensions**(`size`, `screenWidth?`, `screenHeight?`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:425](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L425)

Gets the absolute dimensions of a texture.

#### Parameters

##### size

[`TextureSize`](../type-aliases/TextureSize.md)

The size of the texture. Width and height must be expressed as a percentage of the screen size (100=100%)!

##### screenWidth?

`number`

The width of the screen (default: the width of the rendering canvas)

##### screenHeight?

`number`

The height of the screen (default: the height of the rendering canvas)

#### Returns

`object`

The absolute dimensions of the texture

##### height

> **height**: `number`

##### width

> **width**: `number`

***

### getTextureAbsoluteDimensions()

> **getTextureAbsoluteDimensions**(`handleOrCreationOptions`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:449](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L449)

Gets the absolute dimensions of a texture from its handle or creation options.

#### Parameters

##### handleOrCreationOptions

`number` \| [`FrameGraphTextureCreationOptions`](../type-aliases/FrameGraphTextureCreationOptions.md)

The handle or creation options of the texture

#### Returns

`object`

The absolute dimensions of the texture

##### height

> **height**: `number`

##### width

> **width**: `number`

***

### getTextureCreationOptions()

> **getTextureCreationOptions**(`handle`, `preserveHistoryTextureFlag?`): [`FrameGraphTextureCreationOptions`](../type-aliases/FrameGraphTextureCreationOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L195)

Gets the creation options of a texture

#### Parameters

##### handle

`number`

Handle of the texture

##### preserveHistoryTextureFlag?

`boolean` = `false`

If true, the isHistoryTexture flag in the returned creation options will be the same as when the texture was created (default: false)

#### Returns

[`FrameGraphTextureCreationOptions`](../type-aliases/FrameGraphTextureCreationOptions.md)

The creation options of the texture

***

### getTextureDescription()

> **getTextureDescription**(`handle`): [`FrameGraphTextureDescription`](../type-aliases/FrameGraphTextureDescription.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L214)

Gets the description of a texture

#### Parameters

##### handle

`number`

Handle of the texture

#### Returns

[`FrameGraphTextureDescription`](../type-aliases/FrameGraphTextureDescription.md)

The description of the texture

***

### getTextureFromHandle()

> **getTextureFromHandle**(`handle`, `historyGetWriteTexture?`): [`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L254)

Gets a texture from a handle.
Note that if the texture is a history texture, the read texture for the current frame will be returned, except if historyGetWriteTexture is true.

#### Parameters

##### handle

`number`

The handle of the texture

##### historyGetWriteTexture?

`boolean`

If true and the texture is a history texture, the write texture for the current frame will be returned (default: false)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

The texture or null if not found

***

### getTextureHandleOrCreateTexture()

> **getTextureHandleOrCreateTexture**(`handle?`, `newTextureName?`, `creationOptions?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:237](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L237)

Gets a texture handle or creates a new texture if the handle is not provided.
If handle is not provided, newTextureName and creationOptions must be provided.

#### Parameters

##### handle?

`number`

If provided, will simply return the handle

##### newTextureName?

`string`

Name of the new texture to create

##### creationOptions?

[`FrameGraphTextureCreationOptions`](../type-aliases/FrameGraphTextureCreationOptions.md)

Options to use when creating the new texture

#### Returns

`number`

The handle to the texture.

***

### importTexture()

> **importTexture**(`name`, `texture`, `handle?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:274](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L274)

Imports a texture into the texture manager

#### Parameters

##### name

`string`

Name of the texture

##### texture

[`InternalTexture`](InternalTexture.md)

Texture to import

##### handle?

`number`

Existing handle to use for the texture. If not provided (default), a new handle will be created.

#### Returns

`number`

The handle to the texture

***

### isBackbuffer()

> **isBackbuffer**(`handle`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L101)

Checks if a handle is a backbuffer handle (color or depth/stencil)

#### Parameters

##### handle

`number`

The handle to check

#### Returns

`boolean`

True if the handle is a backbuffer handle

***

### isBackbufferColor()

> **isBackbufferColor**(`handle`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L128)

Checks if a handle is a backbuffer color handle

#### Parameters

##### handle

`number`

The handle to check

#### Returns

`boolean`

True if the handle is a backbuffer color handle

***

### isBackbufferDepthStencil()

> **isBackbufferDepthStencil**(`handle`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L150)

Checks if a handle is a backbuffer depth/stencil handle

#### Parameters

##### handle

`number`

The handle to check

#### Returns

`boolean`

True if the handle is a backbuffer depth/stencil handle

***

### isHistoryTexture()

> **isHistoryTexture**(`handle`, `checkAllTextures?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L174)

Checks if a handle is a history texture (or points to a history texture, for a dangling handle)

#### Parameters

##### handle

`number`

The handle to check

##### checkAllTextures?

`boolean` = `false`

If false (default), the function will check if the handle is the main handle of a history texture (the first handle of the history texture).
  If true, the function will also check if the handle is one of the other handles of a history texture.

#### Returns

`boolean`

True if the handle is a history texture, otherwise false

***

### resetBackBufferTextures()

> **resetBackBufferTextures**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:616](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L616)

Resets the back buffer color/depth-stencil textures to the default (the engine's current back buffer textures)
It has no effect if setBackBufferTextures has not been called before.

#### Returns

`void`

***

### resolveDanglingHandle()

> **resolveDanglingHandle**(`danglingHandle`, `handle?`, `newTextureName?`, `creationOptions?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:381](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L381)

Associates a texture with a dangling handle

#### Parameters

##### danglingHandle

`number`

The dangling handle

##### handle?

`number`

The handle to associate with the dangling handle (if not provided, a new texture handle will be created, using the newTextureName and creationOptions parameters)

##### newTextureName?

`string`

The name of the new texture to create (if handle is not provided)

##### creationOptions?

[`FrameGraphTextureCreationOptions`](../type-aliases/FrameGraphTextureCreationOptions.md)

The options to use when creating the new texture (if handle is not provided)

#### Returns

`void`

***

### setBackBufferTextures()

> **setBackBufferTextures**(`width`, `height`, `textureCreationOptions?`, `depthStencilTextureCreationOptions?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:527](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L527)

Overrides the default back buffer color/depth-stencil textures used by the frame graph.
Note that if both textureCreationOptions and depthStencilTextureCreationOptions are provided,
the engine will use them to create the back buffer color and depth/stencil textures respectively.
In that case, width and height are ignored.

#### Parameters

##### width

`number`

The width of the back buffer color/depth-stencil texture (if 0, the engine's current back buffer color/depth-stencil texture width will be used)

##### height

`number`

The height of the back buffer color/depth-stencil texture (if 0, the engine's current back buffer color/depth-stencil texture height will be used)

##### textureCreationOptions?

[`FrameGraphTextureCreationOptions`](../type-aliases/FrameGraphTextureCreationOptions.md)

The color texture creation options (optional)

##### depthStencilTextureCreationOptions?

[`FrameGraphTextureCreationOptions`](../type-aliases/FrameGraphTextureCreationOptions.md)

The depth/stencil texture creation options (optional)

#### Returns

`void`

***

### CloneTextureOptions()

> `static` **CloneTextureOptions**(`options`, `textureIndex?`, `preserveLabels?`): [`FrameGraphTextureOptions`](../type-aliases/FrameGraphTextureOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts:1099](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTextureManager.ts#L1099)

Clones a texture options

#### Parameters

##### options

[`FrameGraphTextureOptions`](../type-aliases/FrameGraphTextureOptions.md)

The options to clone

##### textureIndex?

`number`

The index of the texture in the types, formats, etc array of FrameGraphTextureOptions. If not provided, all options are cloned.

##### preserveLabels?

`boolean`

True if the labels should be preserved (default: false)

#### Returns

[`FrameGraphTextureOptions`](../type-aliases/FrameGraphTextureOptions.md)

The cloned options
