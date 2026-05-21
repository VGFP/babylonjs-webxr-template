[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DepthRenderer

# Class: DepthRenderer

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRenderer.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthRenderer.ts#L31)

This represents a depth renderer in Babylon.
A depth renderer will render to it's depth map every frame which can be displayed or used in post processing

## Constructors

### Constructor

> **new DepthRenderer**(`scene`, `type?`, `camera?`, `storeNonLinearDepth?`, `samplingMode?`, `storeCameraSpaceZ?`, `name?`, `existingRenderTargetTexture?`): `DepthRenderer`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRenderer.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthRenderer.ts#L151)

Instantiates a depth renderer

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene the renderer belongs to

##### type?

`number` = `Constants.TEXTURETYPE_FLOAT`

The texture type of the depth map (default: Engine.TEXTURETYPE_FLOAT)

##### camera?

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\> = `null`

The camera to be used to render the depth map (default: scene's active camera)

##### storeNonLinearDepth?

`boolean` = `false`

Defines whether the depth is stored linearly like in Babylon Shadows or directly like glFragCoord.z

##### samplingMode?

`number` = `Texture.TRILINEAR_SAMPLINGMODE`

The sampling mode to be used with the render target (Linear, Nearest...) (default: TRILINEAR_SAMPLINGMODE)

##### storeCameraSpaceZ?

`boolean` = `false`

Defines whether the depth stored is the Z coordinate in camera space. If true, storeNonLinearDepth has no effect. (Default: false)

##### name?

`string`

Name of the render target (default: DepthRenderer)

##### existingRenderTargetTexture?

[`RenderTargetTexture`](RenderTargetTexture.md)

An existing render target texture to use (default: undefined). If not provided, a new render target texture will be created.

#### Returns

`DepthRenderer`

## Properties

### clearColor

> **clearColor**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRenderer.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthRenderer.ts#L54)

Color used to clear the depth texture. Default: (1,0,0,1)

***

### enabled

> **enabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRenderer.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthRenderer.ts#L62)

Enable or disable the depth renderer. When disabled, the depth texture is not updated

***

### forceDepthWriteTransparentMeshes

> **forceDepthWriteTransparentMeshes**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRenderer.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthRenderer.ts#L65)

Force writing the transparent objects into the depth map

***

### isPacked

> `readonly` **isPacked**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRenderer.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthRenderer.ts#L57)

Get if the depth renderer is using packed depth or not

***

### reverseCulling

> **reverseCulling**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRenderer.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthRenderer.ts#L97)

If true, reverse the culling of materials before writing to the depth texture.
So, basically, when "true", back facing instead of front facing faces are rasterized into the texture

***

### useOnlyInActiveCamera

> **useOnlyInActiveCamera**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRenderer.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthRenderer.ts#L92)

Specifies that the depth renderer will only be used within
the camera it is created for.
This can help forcing its rendering during the camera processing.

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRenderer.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthRenderer.ts#L51)

Force all the depth renderer to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

## Accessors

### alphaBlendedDepth

#### Get Signature

> **get** **alphaBlendedDepth**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRenderer.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthRenderer.ts#L75)

Enable or disable the alpha blending for depth rendering. When enabled,
the depth renderer will blend the depth values with the alpha values of
the transparent objects.

##### Returns

`boolean`

#### Set Signature

> **set** **alphaBlendedDepth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRenderer.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthRenderer.ts#L78)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRenderer.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthRenderer.ts#L43)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRenderer.ts:676](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthRenderer.ts#L676)

Disposes of the depth renderer.

#### Returns

`void`

***

### getDepthMap()

> **getDepthMap**(): [`RenderTargetTexture`](RenderTargetTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRenderer.ts:669](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthRenderer.ts#L669)

Gets the texture which the depth map will be written to.

#### Returns

[`RenderTargetTexture`](RenderTargetTexture.md)

The depth map texture

***

### isReady()

> **isReady**(`subMesh`, `useInstances`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRenderer.ts:467](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthRenderer.ts#L467)

Creates the depth rendering effect and checks if the effect is ready.

#### Parameters

##### subMesh

[`SubMesh`](SubMesh.md)

The submesh to be used to render the depth map of

##### useInstances

`boolean`

If multiple world instances should be used

#### Returns

`boolean`

if the depth renderer is ready to render the depth map

***

### setMaterialForRendering()

> **setMaterialForRendering**(`mesh`, `material?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRenderer.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthRenderer.ts#L111)

Sets a specific material to be used to render a mesh/a list of meshes by the depth renderer

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md) \| [`AbstractMesh`](AbstractMesh.md)[]

mesh or array of meshes

##### material?

[`Material`](Material.md)

material to use by the depth render when rendering the mesh(es). If undefined is passed, the specific material created by the depth renderer will be used.

#### Returns

`void`
