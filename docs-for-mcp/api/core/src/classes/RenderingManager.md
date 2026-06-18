[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RenderingManager

# Class: RenderingManager

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L62)

This is the manager responsible of all the rendering for meshes sprites and particles.
It is enable to manage the different groups as well as the different necessary sort functions.
This should not be used directly aside of the few static configurations

## Constructors

### Constructor

> **new RenderingManager**(`scene`): `RenderingManager`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L157)

Instantiates a new rendering group for a particular scene

#### Parameters

##### scene

[`Scene`](Scene.md)

Defines the scene the groups belongs to

#### Returns

`RenderingManager`

## Properties

### AUTOCLEAR

> `static` **AUTOCLEAR**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L76)

Used to globally prevent autoclearing scenes.

***

### MAX\_RENDERINGGROUPS

> `static` **MAX\_RENDERINGGROUPS**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L66)

The max id used for rendering groups (not included)

***

### MIN\_RENDERINGGROUPS

> `static` **MIN\_RENDERINGGROUPS**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L71)

The min id used for rendering groups (included)

## Accessors

### disableDepthPrePass

#### Get Signature

> **get** **disableDepthPrePass**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L87)

Specifies to disable depth pre-pass if true (default: false)

##### Returns

`boolean`

#### Set Signature

> **set** **disableDepthPrePass**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L91)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### maintainStateBetweenFrames

#### Get Signature

> **get** **maintainStateBetweenFrames**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L115)

Gets or sets a boolean indicating that the manager will not reset between frames.
This means that if a mesh becomes invisible or transparent it will not be visible until this boolean is set to false again.
By default, the rendering manager will dispatch all active meshes per frame (moving them to the transparent, opaque or alpha testing lists).
By turning this property on, you will accelerate the rendering by keeping all these lists unchanged between frames.

##### Returns

`boolean`

#### Set Signature

> **set** **maintainStateBetweenFrames**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L119)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### renderingGroups

#### Get Signature

> **get** **renderingGroups**(): readonly `RenderingGroup`[]

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L168)

##### Returns

readonly `RenderingGroup`[]

the list of rendering groups managed by the manager.

## Methods

### dispatch()

> **dispatch**(`subMesh`, `mesh?`, `material?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L375)

Add a submesh to the manager in order to render it this frame

#### Parameters

##### subMesh

[`SubMesh`](SubMesh.md)

The submesh to dispatch

##### mesh?

[`AbstractMesh`](AbstractMesh.md)

Optional reference to the submeshes's mesh. Provide if you have an exiting reference to improve performance.

##### material?

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

Optional reference to the submeshes's material. Provide if you have an exiting reference to improve performance.

#### Returns

`void`

***

### dispatchParticles()

> **dispatchParticles**(`particleSystem`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:361](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L361)

Add a particle system to the rendering manager in order to render it this frame.

#### Parameters

##### particleSystem

[`IParticleSystem`](../interfaces/IParticleSystem.md)

Define the particle system to render

#### Returns

`void`

***

### dispatchSprites()

> **dispatchSprites**(`spriteManager`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:349](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L349)

Add a sprite manager to the rendering manager in order to render it this frame.

#### Parameters

##### spriteManager

[`ISpriteManager`](../interfaces/ISpriteManager.md)

Define the sprite manager to render

#### Returns

`void`

***

### freeRenderingGroups()

> **freeRenderingGroups**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:323](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L323)

Clear the info related to rendering groups preventing retention points during dispose.

#### Returns

`void`

***

### getAutoClearDepthStencilSetup()

> **getAutoClearDepthStencilSetup**(`index`): [`IRenderingManagerAutoClearSetup`](../interfaces/IRenderingManagerAutoClearSetup.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:435](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L435)

Gets the current auto clear configuration for one rendering group of the rendering
manager.

#### Parameters

##### index

`number`

the rendering group index to get the information for

#### Returns

[`IRenderingManagerAutoClearSetup`](../interfaces/IRenderingManagerAutoClearSetup.md)

The auto clear setup for the requested rendering group

***

### getRenderingGroup()

> **getRenderingGroup**(`id`): `RenderingGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L176)

#### Parameters

##### id

`number`

the id of the rendering group (0 by default)

#### Returns

`RenderingGroup`

the rendering group with the specified id.

***

### restoreDispachedFlags()

> **restoreDispachedFlags**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L133)

Restore wasDispatched flags on the lists of elements to render.

#### Returns

`void`

***

### setRenderingAutoClearDepthStencil()

> **setRenderingAutoClearDepthStencil**(`renderingGroupId`, `autoClearDepthStencil`, `depth?`, `stencil?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:421](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L421)

Specifies whether or not the stencil and depth buffer are cleared between two rendering groups.

#### Parameters

##### renderingGroupId

`number`

The rendering group id corresponding to its index

##### autoClearDepthStencil

`boolean`

Automatically clears depth and stencil between groups if true.

##### depth?

`boolean` = `true`

Automatically clears depth between groups if true and autoClear is true.

##### stencil?

`boolean` = `true`

Automatically clears stencil between groups if true and autoClear is true.

#### Returns

`void`

***

### setRenderingOrder()

> **setRenderingOrder**(`renderingGroupId`, `opaqueSortCompareFn?`, `alphaTestSortCompareFn?`, `transparentSortCompareFn?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/renderingManager.ts:395](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/renderingManager.ts#L395)

Overrides the default sort function applied in the rendering group to prepare the meshes.
This allowed control for front to back rendering or reversely depending of the special needs.

#### Parameters

##### renderingGroupId

`number`

The rendering group id corresponding to its index

##### opaqueSortCompareFn?

[`Nullable`](../type-aliases/Nullable.md)\<(`a`, `b`) => `number`\> = `null`

The opaque queue comparison function use to sort.

##### alphaTestSortCompareFn?

[`Nullable`](../type-aliases/Nullable.md)\<(`a`, `b`) => `number`\> = `null`

The alpha test queue comparison function use to sort.

##### transparentSortCompareFn?

[`Nullable`](../type-aliases/Nullable.md)\<(`a`, `b`) => `number`\> = `null`

The transparent queue comparison function use to sort.

#### Returns

`void`
