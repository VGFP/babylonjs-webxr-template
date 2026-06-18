[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IProceduralTextureCreationOptions

# Interface: IProceduralTextureCreationOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.pure.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.pure.ts#L33)

Options to create a procedural texture

## Extends

- [`RenderTargetTextureOptions`](RenderTargetTextureOptions.md)

## Extended by

- [`ICustomProceduralTextureCreationOptions`](ICustomProceduralTextureCreationOptions.md)

## Properties

### colorAttachment?

> `optional` **colorAttachment?**: [`InternalTexture`](../classes/InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L75)

Specifies the internal texture to use directly instead of creating one (ignores `noColorAttachment` flag when set) *

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`colorAttachment`](RenderTargetTextureOptions.md#colorattachment)

***

### creationFlags?

> `optional` **creationFlags?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L69)

specific flags to use when creating the texture (e.g., Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures)

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`creationFlags`](RenderTargetTextureOptions.md#creationflags)

***

### delayAllocation?

> `optional` **delayAllocation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L63)

True (default: false) if the texture allocation should be delayed

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`delayAllocation`](RenderTargetTextureOptions.md#delayallocation)

***

### doNotChangeAspectRatio?

> `optional` **doNotChangeAspectRatio?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L39)

True (default) to not change the aspect ratio of the scene in the RTT

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`doNotChangeAspectRatio`](RenderTargetTextureOptions.md#donotchangeaspectratio)

***

### enableClusteredLights?

> `optional` **enableClusteredLights?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L87)

True to enable clustered lights (default: false)

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`enableClusteredLights`](RenderTargetTextureOptions.md#enableclusteredlights)

***

### existingObjectRenderer?

> `optional` **existingObjectRenderer?**: [`ObjectRenderer`](../classes/ObjectRenderer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L84)

If not provided (default), a new object renderer instance will be created

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`existingObjectRenderer`](RenderTargetTextureOptions.md#existingobjectrenderer)

***

### extraInitializationsAsync?

> `optional` **extraInitializationsAsync?**: () => `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.pure.ts#L45)

Additional async code to run before preparing the effect

#### Returns

`Promise`\<`void`\>

***

### fallbackTexture?

> `optional` **fallbackTexture?**: [`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](../classes/Texture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.pure.ts#L37)

Defines a fallback texture in case there were issues to create the custom texture

***

### format?

> `optional` **format?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L60)

The internal format of the buffer in the RTT (RED, RG, RGB, RGBA (default), ALPHA...)

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`format`](RenderTargetTextureOptions.md#format)

***

### gammaSpace?

> `optional` **gammaSpace?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L81)

Defines the underlying texture texture space

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`gammaSpace`](RenderTargetTextureOptions.md#gammaspace)

***

### generateDepthBuffer?

> `optional` **generateDepthBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L51)

True (default) to generate a depth buffer

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`generateDepthBuffer`](RenderTargetTextureOptions.md#generatedepthbuffer)

***

### generateMipMaps?

> `optional` **generateMipMaps?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L36)

True (default: false) if mipmaps need to be generated after render

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`generateMipMaps`](RenderTargetTextureOptions.md#generatemipmaps)

***

### generateStencilBuffer?

> `optional` **generateStencilBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L54)

True (default: false) to generate a stencil buffer

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`generateStencilBuffer`](RenderTargetTextureOptions.md#generatestencilbuffer)

***

### isCube?

> `optional` **isCube?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L45)

True (default: false) if a cube texture needs to be created

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`isCube`](RenderTargetTextureOptions.md#iscube)

***

### isMulti?

> `optional` **isMulti?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L57)

True (default: false) if multiple textures need to be created (Draw Buffers)

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`isMulti`](RenderTargetTextureOptions.md#ismulti)

***

### noColorAttachment?

> `optional` **noColorAttachment?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L72)

True (default: false) to indicate that no color target should be created. (e.g., if you only want to write to the depth buffer)

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`noColorAttachment`](RenderTargetTextureOptions.md#nocolorattachment)

***

### samples?

> `optional` **samples?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L66)

Sample count to use when creating the RTT

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`samples`](RenderTargetTextureOptions.md#samples)

***

### samplingMode?

> `optional` **samplingMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L48)

The sampling mode to be used with the render target (Trilinear (default), Linear, Nearest...)

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`samplingMode`](RenderTargetTextureOptions.md#samplingmode)

***

### shaderLanguage?

> `optional` **shaderLanguage?**: [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.pure.ts#L41)

The shader language of the shader. (default: GLSL)

***

### skipSceneRegistration?

> `optional` **skipSceneRegistration?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTexture.pure.ts#L51)

When true the texture will not be pushed onto scene.proceduralTextures and will
therefore never be rendered automatically by the scene render loop. Use this for
one-shot or manually-driven textures that manage their own render lifecycle.

***

### type?

> `optional` **type?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L42)

The type of the buffer in the RTT (byte (default), half float, float...)

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`type`](RenderTargetTextureOptions.md#type)

***

### useSRGBBuffer?

> `optional` **useSRGBBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L78)

True (default: false) to create a SRGB texture

#### Inherited from

[`RenderTargetTextureOptions`](RenderTargetTextureOptions.md).[`useSRGBBuffer`](RenderTargetTextureOptions.md#usesrgbbuffer)
