[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMultiRenderTargetOptions

# Interface: IMultiRenderTargetOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L13)

Creation options of the multi render target texture.

## Properties

### createMipMaps?

> `optional` **createMipMaps?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L17)

Specifies if mipmaps must be created. If undefined, the value from generateMipMaps is taken instead

***

### creationFlags?

> `optional` **creationFlags?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L98)

Define the creation flags of the textures (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg)

***

### defaultType?

> `optional` **defaultType?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L65)

Define the default type of the buffers we are creating (default: Constants.TEXTURETYPE_UNSIGNED_BYTE). types[] is prioritized over defaultType if provided.

***

### depthTextureFormat?

> `optional` **depthTextureFormat?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L53)

Define depth texture format to use

***

### doNotChangeAspectRatio?

> `optional` **doNotChangeAspectRatio?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L61)

Define if aspect ratio should be adapted to the texture or stay the scene one (default: true)

***

### dontCreateTextures?

> `optional` **dontCreateTextures?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L111)

Define if the textures should not be created by the MultiRenderTarget (default: false)
If true, you will need to set the textures yourself by calling setTexture on the MultiRenderTarget.

***

### drawOnlyOnFirstAttachmentByDefault?

> `optional` **drawOnlyOnFirstAttachmentByDefault?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L73)

Defines if we should draw into all attachments or the first one only by default (default: false)

***

### faceIndex?

> `optional` **faceIndex?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L85)

Define the face index of each texture in the textures array (if applicable, given the corresponding targetType) at creation time (for Constants.TEXTURE_CUBE_MAP and .TEXTURE_CUBE_MAP_ARRAY).
Can be changed at any time by calling setLayerAndFaceIndices or setLayerAndFaceIndex

***

### formats?

> `optional` **formats?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L49)

Define the internal format of the buffer in the RTT (RED, RG, RGB, RGBA (default), ALPHA...) of all the draw buffers (render textures) we want to create

***

### generateDepthBuffer?

> `optional` **generateDepthBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L37)

Define if a depth buffer is required (default: true)

***

### generateDepthTexture?

> `optional` **generateDepthTexture?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L45)

Define if a depth texture is required instead of a depth buffer (default: false)

***

### generateMipMaps?

> `optional` **generateMipMaps?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L21)

Define if the texture needs to create mip maps after render (default: false).

***

### generateStencilBuffer?

> `optional` **generateStencilBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L41)

Define if a stencil buffer is required (default: false)

***

### label?

> `optional` **label?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L106)

Label of the RenderTargetWrapper (used for debugging only)

***

### labels?

> `optional` **labels?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L102)

Define the names of the textures (used for debugging purpose)

***

### layerCounts?

> `optional` **layerCounts?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L94)

Define the number of layer of each texture in the textures array (if applicable, given the corresponding targetType) (for Constants.TEXTURE_3D, .TEXTURE_2D_ARRAY, and .TEXTURE_CUBE_MAP_ARRAY)

***

### layerIndex?

> `optional` **layerIndex?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L90)

Define the layer index of each texture in the textures array (if applicable, given the corresponding targetType) at creation time (for Constants.TEXTURE_3D, .TEXTURE_2D_ARRAY, and .TEXTURE_CUBE_MAP_ARRAY).
Can be changed at any time by calling setLayerAndFaceIndices or setLayerAndFaceIndex

***

### samples?

> `optional` **samples?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L69)

Defines sample count (1 by default)

***

### samplingModes?

> `optional` **samplingModes?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L29)

Define the sampling modes of all the draw buffers (render textures) we want to create

***

### targetTypes?

> `optional` **targetTypes?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L80)

Define the type of texture at each attahment index (of Constants.TEXTURE_2D, .TEXTURE_2D_ARRAY, .TEXTURE_CUBE_MAP, .TEXTURE_CUBE_MAP_ARRAY, .TEXTURE_3D).
You can also use the -1 value to indicate that no texture should be created but that you will assign a texture to that attachment index later.
Can be useful when you want to attach several layers of the same 2DArrayTexture / 3DTexture or several faces of the same CubeMapTexture: Use the setInternalTexture
method for that purpose, after the MultiRenderTarget has been created.

***

### textureCount?

> `optional` **textureCount?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L57)

Define the number of desired draw buffers (render textures). You can set it to 0 if you don't need any color attachment. (default: 1)

***

### types?

> `optional` **types?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L25)

Define the types of all the draw buffers (render textures) we want to create

***

### useSRGBBuffers?

> `optional` **useSRGBBuffers?**: `boolean`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/multiRenderTarget.ts#L33)

Define if sRGB format should be used for each of the draw buffers (render textures) we want to create
