[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeRenderGraphBlockConnectionPointTypes

# Enumeration: NodeRenderGraphBlockConnectionPointTypes

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L61)

Defines the kind of connection point for node render graph nodes

## Enumeration Members

### All

> **All**: `4294967295`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L124)

Bitmask of all types

***

### AutoDetect

> **AutoDetect**: `268435456`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L116)

Detect type based on connection

***

### BasedOnInput

> **BasedOnInput**: `536870912`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L118)

Output type that will be defined by input type

***

### Camera

> **Camera**: `16777216`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L111)

Camera

***

### Object

> **Object**: `2147483648`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L122)

Custom object

***

### ObjectList

> **ObjectList**: `33554432`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L113)

List of objects (meshes, particle systems, sprites)

***

### ResourceContainer

> **ResourceContainer**: `1048576`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L105)

Resource container

***

### ShadowGenerator

> **ShadowGenerator**: `2097152`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L107)

Shadow generator

***

### ShadowLight

> **ShadowLight**: `4194304`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L109)

Light

***

### Texture

> **Texture**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L63)

General purpose texture

***

### TextureAlbedo

> **TextureAlbedo**: `64`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L75)

Albedo geometry texture

***

### TextureAlbedoSqrt

> **TextureAlbedoSqrt**: `2048`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L85)

Albedo (sqrt) geometry texture

***

### TextureAll

> **TextureAll**: `1048575`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L102)

Bit field for all textures

***

### TextureAllButBackBuffer

> **TextureAllButBackBuffer**: `1048569`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L100)

Bit field for all textures but back buffer color and depth/stencil

***

### TextureAllButBackBufferDepthStencil

> **TextureAllButBackBufferDepthStencil**: `1048571`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L98)

Bit field for all textures but back buffer depth/stencil

***

### TextureBackBuffer

> **TextureBackBuffer**: `2`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L65)

Back buffer color texture

***

### TextureBackBufferDepthStencilAttachment

> **TextureBackBufferDepthStencilAttachment**: `4`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L67)

Back buffer depth/stencil attachment

***

### TextureDepthStencilAttachment

> **TextureDepthStencilAttachment**: `8`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L69)

Depth/stencil attachment

***

### TextureIrradiance

> **TextureIrradiance**: `1024`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L83)

Irradiance geometry texture

***

### TextureLinearVelocity

> **TextureLinearVelocity**: `32768`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L93)

Linear velocity geometry texture

***

### TextureLocalPosition

> **TextureLocalPosition**: `16384`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L91)

Position (in local space) geometry texture

***

### TextureNormalizedViewDepth

> **TextureNormalizedViewDepth**: `65536`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L95)

Normalied depth (in view space) geometry texture

***

### TextureReflectivity

> **TextureReflectivity**: `128`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L77)

Reflectivity geometry texture

***

### TextureScreenDepth

> **TextureScreenDepth**: `4096`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L87)

Depth (in screen space) geometry texture

***

### TextureVelocity

> **TextureVelocity**: `512`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L81)

Velocity geometry texture

***

### TextureViewDepth

> **TextureViewDepth**: `16`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L71)

Depth (in view space) geometry texture

***

### TextureViewNormal

> **TextureViewNormal**: `32`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L73)

Normal (in view space) geometry texture

***

### TextureWorldNormal

> **TextureWorldNormal**: `8192`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L89)

Normal (in world space) geometry texture

***

### TextureWorldPosition

> **TextureWorldPosition**: `256`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L79)

Position (in world space) geometry texture

***

### Undefined

> **Undefined**: `1073741824`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L120)

Undefined
