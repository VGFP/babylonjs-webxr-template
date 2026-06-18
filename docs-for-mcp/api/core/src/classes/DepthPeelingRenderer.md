[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DepthPeelingRenderer

# Class: DepthPeelingRenderer

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthPeelingRenderer.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/depthPeelingRenderer.ts#L37)

The depth peeling renderer that performs
Order independant transparency (OIT).
This should not be instanciated directly, as it is part of a scene component

## Constructors

### Constructor

> **new DepthPeelingRenderer**(`scene`, `passCount?`): `DepthPeelingRenderer`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthPeelingRenderer.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/depthPeelingRenderer.ts#L50)

Instanciates the depth peeling renderer

#### Parameters

##### scene

[`Scene`](Scene.md)

Scene to attach to

##### passCount?

`number` = `5`

Number of depth layers to peel

#### Returns

`DepthPeelingRenderer`

The depth peeling renderer

#### Overrides

`ThinDepthPeelingRenderer.constructor`

## Accessors

### blendOutput

#### Get Signature

> **get** **blendOutput**(): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetWrapper`](RenderTargetWrapper.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts#L129)

Sets the render target wrapper we will blend the transparent objects onto

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetWrapper`](RenderTargetWrapper.md)\>

#### Set Signature

> **set** **blendOutput**(`blendOutput`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts#L133)

##### Parameters

###### blendOutput

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetWrapper`](RenderTargetWrapper.md)\>

##### Returns

`void`

#### Inherited from

`ThinDepthPeelingRenderer.blendOutput`

***

### passCount

#### Get Signature

> **get** **passCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts#L66)

Number of depth peeling passes. As we are using dual depth peeling, each pass two levels of transparency are processed.

##### Returns

`number`

#### Set Signature

> **set** **passCount**(`count`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts#L70)

##### Parameters

###### count

`number`

##### Returns

`void`

#### Inherited from

`ThinDepthPeelingRenderer.passCount`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts#L121)

Gets the shader language used in this renderer

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

#### Inherited from

`ThinDepthPeelingRenderer.shaderLanguage`

***

### useRenderPasses

#### Get Signature

> **get** **useRenderPasses**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts#L82)

Instructs the renderer to use render passes. It is an optimization that makes the rendering faster for some engines (like WebGPU) but that consumes more memory, so it is disabled by default.

##### Returns

`boolean`

#### Set Signature

> **set** **useRenderPasses**(`usePasses`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts#L86)

##### Parameters

###### usePasses

`boolean`

##### Returns

`void`

#### Inherited from

`ThinDepthPeelingRenderer.useRenderPasses`

## Methods

### addExcludedMesh()

> **addExcludedMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts#L98)

Add a mesh in the exclusion list to prevent it to be handled by the depth peeling renderer

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh to exclude from the depth peeling renderer

#### Returns

`void`

#### Inherited from

`ThinDepthPeelingRenderer.addExcludedMesh`

***

### bind()

> **bind**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts:346](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts#L346)

Binds depth peeling textures on an effect

#### Parameters

##### effect

[`Effect`](Effect.md)

The effect to bind textures on

#### Returns

`void`

#### Inherited from

`ThinDepthPeelingRenderer.bind`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts:582](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts#L582)

Disposes the depth peeling renderer and associated resources

#### Returns

`void`

#### Inherited from

`ThinDepthPeelingRenderer.dispose`

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthPeelingRenderer.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/depthPeelingRenderer.ts#L165)

Checks if the depth peeling renderer is ready to render transparent meshes

#### Returns

`boolean`

true if the depth peeling renderer is ready to render the transparent meshes

#### Overrides

`ThinDepthPeelingRenderer.isReady`

***

### removeExcludedMesh()

> **removeExcludedMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts#L108)

Remove a mesh from the exclusion list of the depth peeling renderer

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh to remove

#### Returns

`void`

#### Inherited from

`ThinDepthPeelingRenderer.removeExcludedMesh`

***

### render()

> **render**(`transparentSubMeshes`): [`SmartArray`](SmartArray.md)\<[`SubMesh`](SubMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts:430](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.pure.ts#L430)

Renders transparent submeshes with depth peeling

#### Parameters

##### transparentSubMeshes

[`SmartArray`](SmartArray.md)\<[`SubMesh`](SubMesh.md)\>

List of transparent meshes to render

#### Returns

[`SmartArray`](SmartArray.md)\<[`SubMesh`](SubMesh.md)\>

The array of submeshes that could not be handled by this renderer

#### Inherited from

`ThinDepthPeelingRenderer.render`

***

### setPrePassRenderer()

> **setPrePassRenderer**(`prePassRenderer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthPeelingRenderer.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/depthPeelingRenderer.ts#L140)

Links to the prepass renderer

#### Parameters

##### prePassRenderer

[`PrePassRenderer`](PrePassRenderer.md)

The scene PrePassRenderer

#### Returns

`void`

#### Overrides

`ThinDepthPeelingRenderer.setPrePassRenderer`
