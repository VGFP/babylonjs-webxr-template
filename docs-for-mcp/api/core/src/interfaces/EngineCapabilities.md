[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EngineCapabilities

# Interface: EngineCapabilities

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:5](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L5)

Interface used to describe the capabilities of the engine relatively to the current browser

## Properties

### astc

> **astc**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L46)

Defines if astc texture compression is supported

***

### blendFloat

> **blendFloat**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L86)

Defines if float color blending is supported

***

### blendMinMax

> **blendMinMax**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L107)

Defines if the blend min max extension is supported

***

### blendParametersPerTarget

> **blendParametersPerTarget**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L132)

Defines if blend parameters can be defined per target

***

### bptc

> **bptc**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L48)

Defines if bptc texture compression is supported

***

### canUseGLInstanceID

> **canUseGLInstanceID**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L109)

In some iOS + WebGL1, gl_InstanceID (and gl_InstanceIDEXT) is undefined even if instancedArrays is true. So don't use gl_InstanceID in those cases

***

### canUseGLVertexID

> **canUseGLVertexID**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L111)

Defines if gl_vertexID is available

***

### canUseTimestampForTimerQuery

> **canUseTimestampForTimerQuery**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L92)

Defines if timestamp can be used with timer query

***

### colorBufferFloat

> **colorBufferFloat**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L84)

Defines if float color buffer are supported

***

### colorBufferHalfFloat?

> `optional` **colorBufferHalfFloat?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L88)

Defines if half float color buffer are supported

***

### depthTextureExtension

> **depthTextureExtension**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L82)

Defines if depth textures are supported

***

### disableMorphTargetTexture

> **disableMorphTargetTexture**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L124)

Defines if the morph target texture is supported.

***

### drawBuffersExtension

> **drawBuffersExtension**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L80)

Defines if draw buffers extension is supported

***

### dualSourceBlending

> **dualSourceBlending**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L134)

Defines if dual source blending is supported

***

### etc1

> **etc1**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L42)

Defines if etc1 texture compression is supported

***

### etc2

> **etc2**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L44)

Defines if etc2 texture compression is supported

***

### fragmentDepthSupported

> **fragmentDepthSupported**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L64)

Defines if depth reading in the fragment shader is supported

***

### highPrecisionShaderSupported

> **highPrecisionShaderSupported**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L62)

Defines if high precision shaders are supported

***

### instancedArrays

> **instancedArrays**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L58)

Defines if instancing is supported

***

### maxAnisotropy

> **maxAnisotropy**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L56)

Gets the maximum level of anisotropy supported

***

### maxCombinedTexturesImageUnits

> **maxCombinedTexturesImageUnits**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L11)

Maximum textures units in the entire pipeline

***

### maxCubemapTextureSize

> **maxCubemapTextureSize**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L19)

Maximum cube texture size

***

### maxDrawBuffers?

> `optional` **maxDrawBuffers?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L17)

Maximum draw buffers

***

### maxFragmentUniformVectors

> **maxFragmentUniformVectors**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L29)

Maximum number of uniforms per fragment shader

***

### maxMSAASamples

> **maxMSAASamples**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L105)

Max number of texture samples for MSAA

***

### maxRenderTextureSize

> **maxRenderTextureSize**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L21)

Maximum render texture size

***

### maxSamples?

> `optional` **maxSamples?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L15)

Maximum texture samples

***

### maxTexturesImageUnits

> **maxTexturesImageUnits**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:7](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L7)

Maximum textures units per fragment shader

***

### maxTextureSize

> **maxTextureSize**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L13)

Maximum texture size

***

### maxVaryingVectors

> **maxVaryingVectors**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L25)

Maximum number of varyings

***

### maxVertexAttribs

> **maxVertexAttribs**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L23)

Maximum number of vertex attributes

***

### maxVertexTextureImageUnits

> **maxVertexTextureImageUnits**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L9)

Maximum texture units per vertex shader

***

### maxVertexUniformVectors

> **maxVertexUniformVectors**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L27)

Maximum number of uniforms per vertex shader

***

### multiview?

> `optional` **multiview?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L96)

Defines if multiview is supported (https://www.khronos.org/registry/webgl/extensions/WEBGL_multiview/)

***

### oculusMultiview?

> `optional` **oculusMultiview?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L98)

Defines if oculus multiview is supported (https://developer.oculus.com/documentation/oculus-browser/latest/concepts/browser-multiview/)

***

### parallelShaderCompile?

> `optional` **parallelShaderCompile?**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L100)

Function used to let the system compiles shaders in background

#### COMPLETION\_STATUS\_KHR

> **COMPLETION\_STATUS\_KHR**: `number`

***

### pvrtc

> **pvrtc**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L40)

Defines if pvrtc texture compression is supported

***

### rg11b10ufColorRenderable

> **rg11b10ufColorRenderable**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L128)

Defines if RG11B10UFloat texture format is color renderable

***

### s3tc?

> `optional` **s3tc?**: `WEBGL_compressed_texture_s3tc`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L35)

Defines if s3tc texture compression is supported

***

### s3tc\_srgb?

> `optional` **s3tc\_srgb?**: `WEBGL_compressed_texture_s3tc_srgb`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L38)

Defines if s3tc sRGB texture compression is supported

***

### shaderFloatPrecision

> **shaderFloatPrecision**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L31)

The number of bits that can be accurately represented in shader floats

***

### standardDerivatives

> **standardDerivatives**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L33)

Defines if standard derivatives (dx/dy) are supported

***

### supportComputeShaders

> **supportComputeShaders**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L113)

Defines if compute shaders are supported by the engine

***

### supportFloatTexturesResolve

> **supportFloatTexturesResolve**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L126)

Defines if float textures like r32f, rg32f or rgba32f support being used as a resolve target

***

### supportOcclusionQuery

> **supportOcclusionQuery**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L94)

Defines if occlusion queries are supported by the engine

***

### supportReadWriteStorageTextures

> **supportReadWriteStorageTextures**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L136)

Defines if read-only and read-write storage textures are supported (WebGPU only, requires the readonly_and_readwrite_storage_textures WGSL language feature)

***

### supportSRGBBuffers

> **supportSRGBBuffers**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L115)

Defines if sRGB texture formats are supported

***

### supportTransformFeedbacks

> **supportTransformFeedbacks**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L117)

Defines if transform feedbacks are supported

***

### texelFetch

> **texelFetch**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L78)

Defines if texelFetch shader command is supported

***

### texture2DArrayMaxLayerCount

> **texture2DArrayMaxLayerCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L122)

Defines the maximum layer count for a 2D Texture array.

***

### textureAnisotropicFilterExtension?

> `optional` **textureAnisotropicFilterExtension?**: `EXT_texture_filter_anisotropic`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L54)

Gets the webgl extension for anisotropic filtering (null if not supported)

***

### textureFloat

> **textureFloat**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L50)

Defines if float textures are supported

***

### textureFloatLinearFiltering

> **textureFloatLinearFiltering**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L66)

Defines if float texture linear filtering is supported

***

### textureFloatRender

> **textureFloatRender**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L68)

Defines if rendering to float textures is supported

***

### textureHalfFloat

> **textureHalfFloat**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L70)

Defines if half float textures are supported

***

### textureHalfFloatLinearFiltering

> **textureHalfFloatLinearFiltering**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L72)

Defines if half float texture linear filtering is supported

***

### textureHalfFloatRender

> **textureHalfFloatRender**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L74)

Defines if rendering to half float textures is supported

***

### textureLOD

> **textureLOD**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L76)

Defines if textureLOD shader command is supported

***

### textureMaxLevel

> **textureMaxLevel**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L119)

Defines if texture max level are supported

***

### textureNorm16

> **textureNorm16**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L130)

Defines if EXT_texture_norm16 is available which enables the following texture formats: R16_EXT, RG16_EXT, RGB16_EXT, RGBA16_EXT, R16_SNORM_EXT, RG16_SNORM_EXT, RGB16_SNORM_EXT, RGBA16_SNORM_EXT

***

### timerQuery?

> `optional` **timerQuery?**: `EXT_disjoint_timer_query`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L90)

Gets disjoint timer query extension (null if not supported)

***

### uintIndices

> **uintIndices**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L60)

Defines if 32 bits indices are supported

***

### vertexArrayObject

> **vertexArrayObject**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineCapabilities.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineCapabilities.ts#L52)

Defines if vertex array objects are supported
