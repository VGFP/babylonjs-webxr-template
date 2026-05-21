[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DepthPeelingRenderer

# Class: DepthPeelingRenderer

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthPeelingRenderer.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthPeelingRenderer.ts#L36)

The depth peeling renderer that performs
Order independant transparency (OIT).
This should not be instanciated directly, as it is part of a scene component

## Constructors

### Constructor

> **new DepthPeelingRenderer**(`scene`, `passCount?`): `DepthPeelingRenderer`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthPeelingRenderer.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthPeelingRenderer.ts#L49)

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

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts#L128)

Sets the render target wrapper we will blend the transparent objects onto

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetWrapper`](RenderTargetWrapper.md)\>

#### Set Signature

> **set** **blendOutput**(`blendOutput`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts#L132)

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

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts#L65)

Number of depth peeling passes. As we are using dual depth peeling, each pass two levels of transparency are processed.

##### Returns

`number`

#### Set Signature

> **set** **passCount**(`count`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts#L69)

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

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts#L120)

Gets the shader language used in this renderer

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

#### Inherited from

`ThinDepthPeelingRenderer.shaderLanguage`

***

### useRenderPasses

#### Get Signature

> **get** **useRenderPasses**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts#L81)

Instructs the renderer to use render passes. It is an optimization that makes the rendering faster for some engines (like WebGPU) but that consumes more memory, so it is disabled by default.

##### Returns

`boolean`

#### Set Signature

> **set** **useRenderPasses**(`usePasses`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts#L85)

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

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts#L97)

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

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts:345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts#L345)

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

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts:581](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts#L581)

Disposes the depth peeling renderer and associated resources

#### Returns

`void`

#### Inherited from

`ThinDepthPeelingRenderer.dispose`

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthPeelingRenderer.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthPeelingRenderer.ts#L162)

Checks if the depth peeling renderer is ready to render transparent meshes

#### Returns

`boolean`

true if the depth peeling renderer is ready to render the transparent meshes

#### Overrides

`ThinDepthPeelingRenderer.isReady`

***

### removeExcludedMesh()

> **removeExcludedMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts#L107)

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

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts:429](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/thinDepthPeelingRenderer.ts#L429)

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

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthPeelingRenderer.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthPeelingRenderer.ts#L137)

Links to the prepass renderer

#### Parameters

##### prePassRenderer

[`PrePassRenderer`](PrePassRenderer.md)

The scene PrePassRenderer

#### Returns

`void`

#### Overrides

`ThinDepthPeelingRenderer.setPrePassRenderer`
