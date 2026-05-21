[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IProceduralTextureCreationOptions

# Interface: IProceduralTextureCreationOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.ts#L31)

Options to create a procedural texture

## Extends

- [`RenderTargetTextureOptions`](RenderTargetTextureOptions.md)

## Extended by

- [`ICustomProceduralTextureCreationOptions`](ICustomProceduralTextureCreationOptions.md)

## Properties

### colorAttachment?

> `optional` **colorAttachment?**: [`InternalTexture`](../classes/InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L92)

Specifies the internal texture to use directly instead of creating one (ignores `noColorAttachment` flag when set) *

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`colorAttachment`](RenderTargetTextureOptions.md#colorattachment)

***

### creationFlags?

> `optional` **creationFlags?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L86)

specific flags to use when creating the texture (e.g., Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures)

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`creationFlags`](RenderTargetTextureOptions.md#creationflags)

***

### delayAllocation?

> `optional` **delayAllocation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L80)

True (default: false) if the texture allocation should be delayed

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`delayAllocation`](RenderTargetTextureOptions.md#delayallocation)

***

### doNotChangeAspectRatio?

> `optional` **doNotChangeAspectRatio?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L56)

True (default) to not change the aspect ratio of the scene in the RTT

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`doNotChangeAspectRatio`](RenderTargetTextureOptions.md#donotchangeaspectratio)

***

### enableClusteredLights?

> `optional` **enableClusteredLights?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L104)

True to enable clustered lights (default: false)

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`enableClusteredLights`](RenderTargetTextureOptions.md#enableclusteredlights)

***

### existingObjectRenderer?

> `optional` **existingObjectRenderer?**: [`ObjectRenderer`](../classes/ObjectRenderer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L101)

If not provided (default), a new object renderer instance will be created

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`existingObjectRenderer`](RenderTargetTextureOptions.md#existingobjectrenderer)

***

### extraInitializationsAsync?

> `optional` **extraInitializationsAsync?**: () => `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.ts#L43)

Additional async code to run before preparing the effect

#### Returns

`Promise`\<`void`\>

***

### fallbackTexture?

> `optional` **fallbackTexture?**: [`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](../classes/Texture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.ts#L35)

Defines a fallback texture in case there were issues to create the custom texture

***

### format?

> `optional` **format?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L77)

The internal format of the buffer in the RTT (RED, RG, RGB, RGBA (default), ALPHA...)

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`format`](RenderTargetTextureOptions.md#format)

***

### gammaSpace?

> `optional` **gammaSpace?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L98)

Defines the underlying texture texture space

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`gammaSpace`](RenderTargetTextureOptions.md#gammaspace)

***

### generateDepthBuffer?

> `optional` **generateDepthBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L68)

True (default) to generate a depth buffer

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`generateDepthBuffer`](RenderTargetTextureOptions.md#generatedepthbuffer)

***

### generateMipMaps?

> `optional` **generateMipMaps?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L53)

True (default: false) if mipmaps need to be generated after render

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`generateMipMaps`](RenderTargetTextureOptions.md#generatemipmaps)

***

### generateStencilBuffer?

> `optional` **generateStencilBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L71)

True (default: false) to generate a stencil buffer

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`generateStencilBuffer`](RenderTargetTextureOptions.md#generatestencilbuffer)

***

### isCube?

> `optional` **isCube?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L62)

True (default: false) if a cube texture needs to be created

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`isCube`](RenderTargetTextureOptions.md#iscube)

***

### isMulti?

> `optional` **isMulti?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L74)

True (default: false) if multiple textures need to be created (Draw Buffers)

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`isMulti`](RenderTargetTextureOptions.md#ismulti)

***

### noColorAttachment?

> `optional` **noColorAttachment?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L89)

True (default: false) to indicate that no color target should be created. (e.g., if you only want to write to the depth buffer)

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`noColorAttachment`](RenderTargetTextureOptions.md#nocolorattachment)

***

### samples?

> `optional` **samples?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L83)

Sample count to use when creating the RTT

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`samples`](RenderTargetTextureOptions.md#samples)

***

### samplingMode?

> `optional` **samplingMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L65)

The sampling mode to be used with the render target (Trilinear (default), Linear, Nearest...)

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`samplingMode`](RenderTargetTextureOptions.md#samplingmode)

***

### shaderLanguage?

> `optional` **shaderLanguage?**: [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.ts#L39)

The shader language of the shader. (default: GLSL)

***

### skipSceneRegistration?

> `optional` **skipSceneRegistration?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.ts#L49)

When true the texture will not be pushed onto scene.proceduralTextures and will
therefore never be rendered automatically by the scene render loop. Use this for
one-shot or manually-driven textures that manage their own render lifecycle.

***

### type?

> `optional` **type?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L59)

The type of the buffer in the RTT (byte (default), half float, float...)

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`type`](RenderTargetTextureOptions.md#type)

***

### useSRGBBuffer?

> `optional` **useSRGBBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L95)

True (default: false) to create a SRGB texture

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`useSRGBBuffer`](RenderTargetTextureOptions.md#usesrgbbuffer)
