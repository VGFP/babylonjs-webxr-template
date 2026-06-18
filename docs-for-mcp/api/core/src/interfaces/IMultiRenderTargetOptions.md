[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMultiRenderTargetOptions

# Interface: IMultiRenderTargetOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L14)

Creation options of the multi render target texture.

## Properties

### createMipMaps?

> `optional` **createMipMaps?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L18)

Specifies if mipmaps must be created. If undefined, the value from generateMipMaps is taken instead

***

### creationFlags?

> `optional` **creationFlags?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L99)

Define the creation flags of the textures (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg)

***

### defaultType?

> `optional` **defaultType?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L66)

Define the default type of the buffers we are creating (default: Constants.TEXTURETYPE_UNSIGNED_BYTE). types[] is prioritized over defaultType if provided.

***

### depthTextureFormat?

> `optional` **depthTextureFormat?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L54)

Define depth texture format to use

***

### doNotChangeAspectRatio?

> `optional` **doNotChangeAspectRatio?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L62)

Define if aspect ratio should be adapted to the texture or stay the scene one (default: true)

***

### dontCreateTextures?

> `optional` **dontCreateTextures?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L112)

Define if the textures should not be created by the MultiRenderTarget (default: false)
If true, you will need to set the textures yourself by calling setTexture on the MultiRenderTarget.

***

### drawOnlyOnFirstAttachmentByDefault?

> `optional` **drawOnlyOnFirstAttachmentByDefault?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L74)

Defines if we should draw into all attachments or the first one only by default (default: false)

***

### faceIndex?

> `optional` **faceIndex?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L86)

Define the face index of each texture in the textures array (if applicable, given the corresponding targetType) at creation time (for Constants.TEXTURE_CUBE_MAP and .TEXTURE_CUBE_MAP_ARRAY).
Can be changed at any time by calling setLayerAndFaceIndices or setLayerAndFaceIndex

***

### formats?

> `optional` **formats?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L50)

Define the internal format of the buffer in the RTT (RED, RG, RGB, RGBA (default), ALPHA...) of all the draw buffers (render textures) we want to create

***

### generateDepthBuffer?

> `optional` **generateDepthBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L38)

Define if a depth buffer is required (default: true)

***

### generateDepthTexture?

> `optional` **generateDepthTexture?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L46)

Define if a depth texture is required instead of a depth buffer (default: false)

***

### generateMipMaps?

> `optional` **generateMipMaps?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L22)

Define if the texture needs to create mip maps after render (default: false).

***

### generateStencilBuffer?

> `optional` **generateStencilBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L42)

Define if a stencil buffer is required (default: false)

***

### label?

> `optional` **label?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L107)

Label of the RenderTargetWrapper (used for debugging only)

***

### labels?

> `optional` **labels?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L103)

Define the names of the textures (used for debugging purpose)

***

### layerCounts?

> `optional` **layerCounts?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L95)

Define the number of layer of each texture in the textures array (if applicable, given the corresponding targetType) (for Constants.TEXTURE_3D, .TEXTURE_2D_ARRAY, and .TEXTURE_CUBE_MAP_ARRAY)

***

### layerIndex?

> `optional` **layerIndex?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L91)

Define the layer index of each texture in the textures array (if applicable, given the corresponding targetType) at creation time (for Constants.TEXTURE_3D, .TEXTURE_2D_ARRAY, and .TEXTURE_CUBE_MAP_ARRAY).
Can be changed at any time by calling setLayerAndFaceIndices or setLayerAndFaceIndex

***

### samples?

> `optional` **samples?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L70)

Defines sample count (1 by default)

***

### samplingModes?

> `optional` **samplingModes?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L30)

Define the sampling modes of all the draw buffers (render textures) we want to create

***

### targetTypes?

> `optional` **targetTypes?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L81)

Define the type of texture at each attahment index (of Constants.TEXTURE_2D, .TEXTURE_2D_ARRAY, .TEXTURE_CUBE_MAP, .TEXTURE_CUBE_MAP_ARRAY, .TEXTURE_3D).
You can also use the -1 value to indicate that no texture should be created but that you will assign a texture to that attachment index later.
Can be useful when you want to attach several layers of the same 2DArrayTexture / 3DTexture or several faces of the same CubeMapTexture: Use the setInternalTexture
method for that purpose, after the MultiRenderTarget has been created.

***

### textureCount?

> `optional` **textureCount?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L58)

Define the number of desired draw buffers (render textures). You can set it to 0 if you don't need any color attachment. (default: 1)

***

### types?

> `optional` **types?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L26)

Define the types of all the draw buffers (render textures) we want to create

***

### useSRGBBuffers?

> `optional` **useSRGBBuffers?**: `boolean`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L34)

Define if sRGB format should be used for each of the draw buffers (render textures) we want to create
