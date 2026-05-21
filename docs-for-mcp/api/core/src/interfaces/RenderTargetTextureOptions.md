[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RenderTargetTextureOptions

# Interface: RenderTargetTextureOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L51)

Options for the RenderTargetTexture constructor

## Extended by

- [`IProceduralTextureCreationOptions`](IProceduralTextureCreationOptions.md)

## Properties

### colorAttachment?

> `optional` **colorAttachment?**: [`InternalTexture`](../classes/InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L92)

Specifies the internal texture to use directly instead of creating one (ignores `noColorAttachment` flag when set) *

***

### creationFlags?

> `optional` **creationFlags?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L86)

specific flags to use when creating the texture (e.g., Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures)

***

### delayAllocation?

> `optional` **delayAllocation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L80)

True (default: false) if the texture allocation should be delayed

***

### doNotChangeAspectRatio?

> `optional` **doNotChangeAspectRatio?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L56)

True (default) to not change the aspect ratio of the scene in the RTT

***

### enableClusteredLights?

> `optional` **enableClusteredLights?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L104)

True to enable clustered lights (default: false)

***

### existingObjectRenderer?

> `optional` **existingObjectRenderer?**: [`ObjectRenderer`](../classes/ObjectRenderer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L101)

If not provided (default), a new object renderer instance will be created

***

### format?

> `optional` **format?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L77)

The internal format of the buffer in the RTT (RED, RG, RGB, RGBA (default), ALPHA...)

***

### gammaSpace?

> `optional` **gammaSpace?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L98)

Defines the underlying texture texture space

***

### generateDepthBuffer?

> `optional` **generateDepthBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L68)

True (default) to generate a depth buffer

***

### generateMipMaps?

> `optional` **generateMipMaps?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L53)

True (default: false) if mipmaps need to be generated after render

***

### generateStencilBuffer?

> `optional` **generateStencilBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L71)

True (default: false) to generate a stencil buffer

***

### isCube?

> `optional` **isCube?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L62)

True (default: false) if a cube texture needs to be created

***

### isMulti?

> `optional` **isMulti?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L74)

True (default: false) if multiple textures need to be created (Draw Buffers)

***

### noColorAttachment?

> `optional` **noColorAttachment?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L89)

True (default: false) to indicate that no color target should be created. (e.g., if you only want to write to the depth buffer)

***

### samples?

> `optional` **samples?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L83)

Sample count to use when creating the RTT

***

### samplingMode?

> `optional` **samplingMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L65)

The sampling mode to be used with the render target (Trilinear (default), Linear, Nearest...)

***

### type?

> `optional` **type?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L59)

The type of the buffer in the RTT (byte (default), half float, float...)

***

### useSRGBBuffer?

> `optional` **useSRGBBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/renderTargetTexture.ts#L95)

True (default: false) to create a SRGB texture
