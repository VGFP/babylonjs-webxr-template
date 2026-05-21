[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphTextureOptions

# Type Alias: FrameGraphTextureOptions

> **FrameGraphTextureOptions** = `object`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L23)

Options used to describe a texture to be created in the frame graph.

## Properties

### createMipMaps?

> `optional` **createMipMaps?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L25)

Specifies if mipmaps must be created for the textures (default: false)

***

### creationFlags?

> `optional` **creationFlags?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L50)

Defines the creation flags of the textures (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg)

***

### formats?

> `optional` **formats?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L44)

Defines the format of the textures (RED, RG, RGB, RGBA, ALPHA...)

***

### labels?

> `optional` **labels?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L53)

Defines the names of the textures (used for debugging purpose)

***

### layerCounts?

> `optional` **layerCounts?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L38)

Define the number of layers of the textures (if applicable, given the corresponding targetType) (for Constants.TEXTURE_3D, .TEXTURE_2D_ARRAY, and .TEXTURE_CUBE_MAP_ARRAY)

***

### samples?

> `optional` **samples?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L28)

Defines sample count (default: 1)

***

### targetTypes?

> `optional` **targetTypes?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L33)

Define the type of the textures (of Constants.TEXTURE_2D, .TEXTURE_2D_ARRAY, .TEXTURE_CUBE_MAP, .TEXTURE_CUBE_MAP_ARRAY, .TEXTURE_3D).

***

### types?

> `optional` **types?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L41)

Defines the type of the texture channels (UNSIGNED_BYTE, FLOAT, etc.)

***

### useSRGBBuffers?

> `optional` **useSRGBBuffers?**: `boolean`[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L47)

Defines if sRGB format should be used for each of texture
