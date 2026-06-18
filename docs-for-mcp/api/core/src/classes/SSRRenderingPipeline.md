[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SSRRenderingPipeline

# Class: SSRRenderingPipeline

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L42)

Render pipeline to produce Screen Space Reflections (SSR) effect

References:
  Screen Space Ray Tracing:
    - http://casual-effects.blogspot.com/2014/08/screen-space-ray-tracing.html
    - https://sourceforge.net/p/g3d/code/HEAD/tree/G3D10/data-files/shader/screenSpaceRayTrace.glsl
    - https://github.com/kode80/kode80SSR
  SSR:
    - general tips: https://sakibsaikia.github.io/graphics/2016/12/26/Screen-Space-Reflection-in-Killing-Floor-2.html
    - computation of blur radius from roughness and distance: https://github.com/godotengine/godot/blob/master/servers/rendering/renderer_rd/shaders/effects/screen_space_reflection.glsl
    - blur and usage of back depth buffer: https://github.com/kode80/kode80SSR

## Extends

- [`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)

## Constructors

### Constructor

> **new SSRRenderingPipeline**(`name`, `scene`, `cameras?`, `forceGeometryBuffer?`, `textureType?`, `useScreenspaceDepth?`): `SSRRenderingPipeline`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:608](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L608)

Constructor of the SSR rendering pipeline

#### Parameters

##### name

`string`

The rendering pipeline name

##### scene

[`Scene`](Scene.md)

The scene linked to this pipeline

##### cameras?

[`Camera`](Camera.md)[]

The array of cameras that the rendering pipeline will be attached to (default: scene.cameras)

##### forceGeometryBuffer?

`boolean` = `false`

Set to true if you want to use the legacy geometry buffer renderer (default: false)

##### textureType?

`number` = `Constants.TEXTURETYPE_UNSIGNED_BYTE`

The texture type used by the different post processes created by SSR (default: Constants.TEXTURETYPE_UNSIGNED_BYTE)

##### useScreenspaceDepth?

`boolean` = `false`

Indicates if the depth buffer should be linear or screenspace (default: false). This allows sharing the buffer with other effect pipelines that may require the depth to be in screenspace.

#### Returns

`SSRRenderingPipeline`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`constructor`](PostProcessRenderPipeline.md#constructor)

## Properties

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L26)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`inspectableCustomProperties`](PostProcessRenderPipeline.md#inspectablecustomproperties)

***

### SSRBlurRenderEffect

> **SSRBlurRenderEffect**: `string` = `"SSRBlurRenderEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L50)

The blur PostProcess effect id in the pipeline

***

### SSRCombineRenderEffect

> **SSRCombineRenderEffect**: `string` = `"SSRCombineRenderEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L54)

The PostProcess effect id in the pipeline that combines the SSR-Blur output with the original scene color

***

### SSRRenderEffect

> **SSRRenderEffect**: `string` = `"SSRRenderEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L46)

The SSR PostProcess effect id in the pipeline

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L47)

Gets the unique id of the post process rendering pipeline

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`uniqueId`](PostProcessRenderPipeline.md#uniqueid)

## Accessors

### attenuateBackfaceReflection

#### Get Signature

> **get** **attenuateBackfaceReflection**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:356](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L356)

Gets or sets a boolean indicating if the backface reflections should be attenuated (default: false).

##### Returns

`boolean`

#### Set Signature

> **set** **attenuateBackfaceReflection**(`attenuate`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:360](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L360)

##### Parameters

###### attenuate

`boolean`

##### Returns

`void`

***

### attenuateFacingCamera

#### Get Signature

> **get** **attenuateFacingCamera**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:344](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L344)

Gets or sets a boolean indicating if the reflections should be attenuated when the reflection ray is facing the camera (the view direction) (default: false).

##### Returns

`boolean`

#### Set Signature

> **set** **attenuateFacingCamera**(`attenuate`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:348](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L348)

##### Parameters

###### attenuate

`boolean`

##### Returns

`void`

***

### attenuateIntersectionDistance

#### Get Signature

> **get** **attenuateIntersectionDistance**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:320](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L320)

Gets or sets a boolean indicating if the reflections should be attenuated according to the distance of the intersection (default: true).

##### Returns

`boolean`

#### Set Signature

> **set** **attenuateIntersectionDistance**(`attenuate`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:324](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L324)

##### Parameters

###### attenuate

`boolean`

##### Returns

`void`

***

### attenuateIntersectionIterations

#### Get Signature

> **get** **attenuateIntersectionIterations**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L332)

Gets or sets a boolean indicating if the reflections should be attenuated according to the number of iterations performed to find the intersection (default: true).

##### Returns

`boolean`

#### Set Signature

> **set** **attenuateIntersectionIterations**(`attenuate`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:336](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L336)

##### Parameters

###### attenuate

`boolean`

##### Returns

`void`

***

### attenuateScreenBorders

#### Get Signature

> **get** **attenuateScreenBorders**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:308](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L308)

Gets or sets a boolean indicating if the reflections should be attenuated at the screen borders (default: true).

##### Returns

`boolean`

#### Set Signature

> **set** **attenuateScreenBorders**(`attenuate`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:312](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L312)

##### Parameters

###### attenuate

`boolean`

##### Returns

`void`

***

### backfaceDepthRenderer

#### Get Signature

> **get** **backfaceDepthRenderer**(): [`Nullable`](../type-aliases/Nullable.md)\<[`DepthRenderer`](DepthRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:411](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L411)

Gets the depth renderer used to render the back faces of the scene to a depth texture.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DepthRenderer`](DepthRenderer.md)\>

***

### backfaceDepthTextureDownsample

#### Get Signature

> **get** **backfaceDepthTextureDownsample**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:423](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L423)

Gets or sets the downsample factor (default: 0) used to create the backface depth texture - used only if enableAutomaticThicknessComputation = true.
Use 0 to render the depth at full resolution, 1 to render at half resolution, 2 to render at 1/4 resolution, etc.
Note that you will get rendering artefacts when using a value different from 0: it's a tradeoff between image quality and performances.

##### Returns

`number`

#### Set Signature

> **set** **backfaceDepthTextureDownsample**(`factor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:427](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L427)

##### Parameters

###### factor

`number`

##### Returns

`void`

***

### backfaceForceDepthWriteTransparentMeshes

#### Get Signature

> **get** **backfaceForceDepthWriteTransparentMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:442](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L442)

Gets or sets a boolean (default: true) indicating if the depth of transparent meshes should be written to the backface depth texture (when automatic thickness computation is enabled).

##### Returns

`boolean`

#### Set Signature

> **set** **backfaceForceDepthWriteTransparentMeshes**(`force`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:446](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L446)

##### Parameters

###### force

`boolean`

##### Returns

`void`

***

### blurDispersionStrength

#### Get Signature

> **get** **blurDispersionStrength**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L225)

Gets or sets the blur dispersion strength. Set this value to 0 to disable blurring (default: 0.03)
The reflections are blurred based on the roughness of the surface and the distance between the pixel shaded and the reflected pixel: the higher the distance the more blurry the reflection is.
blurDispersionStrength allows to increase or decrease this effect.

##### Returns

`number`

#### Set Signature

> **set** **blurDispersionStrength**(`strength`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L229)

##### Parameters

###### strength

`number`

##### Returns

`void`

***

### blurDownsample

#### Get Signature

> **get** **blurDownsample**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:252](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L252)

Gets or sets the downsample factor used to reduce the size of the textures used to blur the reflection effect (default: 0).
Use 0 to blur at full resolution, 1 to render at half resolution, 2 to render at 1/3 resolution, etc.

##### Returns

`number`

#### Set Signature

> **set** **blurDownsample**(`downsample`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:256](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L256)

##### Parameters

###### downsample

`number`

##### Returns

`void`

***

### cameras

#### Get Signature

> **get** **cameras**(): [`Camera`](Camera.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L50)

Gets the list of attached cameras

##### Returns

[`Camera`](Camera.md)[]

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`cameras`](PostProcessRenderPipeline.md#cameras)

***

### clipToFrustum

#### Get Signature

> **get** **clipToFrustum**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:369](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L369)

Gets or sets a boolean indicating if the ray should be clipped to the frustum (default: true).
You can try to set this parameter to false to save some performances: it may produce some artefacts in some cases, but generally they won't really be visible

##### Returns

`boolean`

#### Set Signature

> **set** **clipToFrustum**(`clip`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L373)

##### Parameters

###### clip

`boolean`

##### Returns

`void`

***

### debug

#### Get Signature

> **get** **debug**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:530](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L530)

Gets or sets a boolean indicating if the effect should be rendered in debug mode (default: false).
In this mode, colors have this meaning:
  - blue: the ray hit the max distance (we reached maxDistance)
  - red: the ray ran out of steps (we reached maxSteps)
  - yellow: the ray went off screen
  - green: the ray hit a surface. The brightness of the green color is proportional to the distance between the ray origin and the intersection point: A brighter green means more computation than a darker green.
In the first 3 cases, the final color is calculated by mixing the skybox color with the pixel color (if environmentTexture is defined), otherwise the pixel color is not modified
You should try to get as few blue/red/yellow pixels as possible, as this means that the ray has gone further than if it had hit a surface.

##### Returns

`boolean`

#### Set Signature

> **set** **debug**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:534](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L534)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### enableAutomaticThicknessComputation

#### Get Signature

> **get** **enableAutomaticThicknessComputation**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:399](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L399)

Gets or sets a boolean defining if geometry thickness should be computed automatically (default: false).
When enabled, a depth renderer is created which will render the back faces of the scene to a depth texture (meaning additional work for the GPU).
In that mode, the "thickness" property is still used as an offset to compute the ray intersection, but you can typically use a much lower
value than when enableAutomaticThicknessComputation is false (it's even possible to use a value of 0 when using low values for "step")
Note that for performance reasons, this option will only apply to the first camera to which the rendering pipeline is attached!

##### Returns

`boolean`

#### Set Signature

> **set** **enableAutomaticThicknessComputation**(`automatic`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:403](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L403)

##### Parameters

###### automatic

`boolean`

##### Returns

`void`

***

### enableSmoothReflections

#### Get Signature

> **get** **enableSmoothReflections**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:267](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L267)

Gets or sets whether or not smoothing reflections is enabled (default: false)
Enabling smoothing will require more GPU power.
Note that this setting has no effect if step = 1: it's only used if step \> 1.

##### Returns

`boolean`

#### Set Signature

> **set** **enableSmoothReflections**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L271)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### engine

#### Get Signature

> **get** **engine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L57)

Gets the active engine

##### Returns

[`AbstractEngine`](AbstractEngine.md)

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`engine`](PostProcessRenderPipeline.md#engine)

***

### environmentTexture

#### Get Signature

> **get** **environmentTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`CubeTexture`](CubeTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L283)

Gets or sets the environment cube texture used to define the reflection when the reflected rays of SSR leave the view space or when the maxDistance/maxSteps is reached.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`CubeTexture`](CubeTexture.md)\>

#### Set Signature

> **set** **environmentTexture**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:287](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L287)

##### Parameters

###### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`CubeTexture`](CubeTexture.md)\>

##### Returns

`void`

***

### environmentTextureIsProbe

#### Get Signature

> **get** **environmentTextureIsProbe**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L296)

Gets or sets the boolean defining if the environment texture is a standard cubemap (false) or a probe (true). Default value is false.
Note: a probe cube texture is treated differently than an ordinary cube texture because the Y axis is reversed.

##### Returns

`boolean`

#### Set Signature

> **set** **environmentTextureIsProbe**(`isProbe`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:300](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L300)

##### Parameters

###### isProbe

`boolean`

##### Returns

`void`

***

### generateOutputInGammaSpace

#### Get Signature

> **get** **generateOutputInGammaSpace**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:510](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L510)

Gets or sets a boolean defining if the output color texture generated by the SSR pipeline should be in gamma space (default: true)
If you have a post-process that comes after the SSR and that post-process needs the input to be in a linear space, you must disable generateOutputInGammaSpace

##### Returns

`boolean`

#### Set Signature

> **set** **generateOutputInGammaSpace**(`gammaSpace`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:514](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L514)

##### Parameters

###### gammaSpace

`boolean`

##### Returns

`void`

***

### inputTextureColorIsInGammaSpace

#### Get Signature

> **get** **inputTextureColorIsInGammaSpace**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:496](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L496)

Gets or sets a boolean defining if the input color texture is in gamma space (default: true)
The SSR effect works in linear space, so if the input texture is in gamma space, we must convert the texture to linear space before applying the effect

##### Returns

`boolean`

#### Set Signature

> **set** **inputTextureColorIsInGammaSpace**(`gammaSpace`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:500](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L500)

##### Parameters

###### gammaSpace

`boolean`

##### Returns

`void`

***

### isEnabled

#### Get Signature

> **get** **isEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:464](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L464)

Gets or sets a boolean indicating if the effect is enabled (default: true).

##### Returns

`boolean`

#### Set Signature

> **set** **isEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:468](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L468)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:593](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L593)

Returns true if SSR is supported by the running hardware

##### Returns

`boolean`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`isSupported`](PostProcessRenderPipeline.md#issupported)

***

### maxDistance

#### Get Signature

> **get** **maxDistance**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L82)

Gets or sets the maxDistance used to define how far we look for reflection during the ray-marching on the reflected ray (default: 1000).
Note that this value is a view (camera) space distance (not pixels!).

##### Returns

`number`

#### Set Signature

> **set** **maxDistance**(`distance`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L86)

##### Parameters

###### distance

`number`

##### Returns

`void`

***

### maxSteps

#### Get Signature

> **get** **maxSteps**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L146)

Maximum number of steps during the ray marching process after which we consider an intersection could not be found (default: 1000).
Should be an integer value.

##### Returns

`number`

#### Set Signature

> **set** **maxSteps**(`steps`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L150)

##### Parameters

###### steps

`number`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L40)

Gets pipeline name

##### Returns

`string`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`name`](PostProcessRenderPipeline.md#name)

***

### reflectionSpecularFalloffExponent

#### Get Signature

> **get** **reflectionSpecularFalloffExponent**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L133)

Gets or sets the falloff exponent used to compute the reflection strength. Higher values lead to fainter reflections (default: 1).

##### Returns

`number`

#### Set Signature

> **set** **reflectionSpecularFalloffExponent**(`exponent`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L137)

##### Parameters

###### exponent

`number`

##### Returns

`void`

***

### reflectivityThreshold

#### Get Signature

> **get** **reflectivityThreshold**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:186](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L186)

Gets or sets the minimum value for one of the reflectivity component of the material to consider it for SSR (default: 0.04).
If all r/g/b components of the reflectivity is below or equal this value, the pixel will not be considered reflective and SSR won't be applied.

##### Returns

`number`

#### Set Signature

> **set** **reflectivityThreshold**(`threshold`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L190)

##### Parameters

###### threshold

`number`

##### Returns

`void`

***

### roughnessFactor

#### Get Signature

> **get** **roughnessFactor**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L160)

Gets or sets the factor applied when computing roughness. Default value is 0.2.
When blurring based on roughness is enabled (meaning blurDispersionStrength \> 0), roughnessFactor is used as a global roughness factor applied on all objects.
If you want to disable this global roughness set it to 0.

##### Returns

`number`

#### Set Signature

> **set** **roughnessFactor**(`factor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L164)

##### Parameters

###### factor

`number`

##### Returns

`void`

***

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L73)

##### Returns

`number`

#### Set Signature

> **set** **samples**(`sampleCount`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L62)

MSAA sample count, setting this to 4 will provide 4x anti aliasing. (default: 1)

##### Parameters

###### sampleCount

`number`

##### Returns

`void`

***

### scene

#### Get Signature

> **get** **scene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:586](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L586)

Gets active scene

##### Returns

[`Scene`](Scene.md)

***

### selfCollisionNumSkip

#### Get Signature

> **get** **selfCollisionNumSkip**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L173)

Number of steps to skip at start when marching the ray to avoid self collisions (default: 1)
1 should normally be a good value, depending on the scene you may need to use a higher value (2 or 3)

##### Returns

`number`

#### Set Signature

> **set** **selfCollisionNumSkip**(`skip`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L177)

##### Parameters

###### skip

`number`

##### Returns

`void`

***

### ssrDownsample

#### Get Signature

> **get** **ssrDownsample**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:210](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L210)

Gets or sets the downsample factor used to reduce the size of the texture used to compute the SSR contribution (default: 0).
Use 0 to render the SSR contribution at full resolution, 1 to render at half resolution, 2 to render at 1/3 resolution, etc.
Note that it is used only when blurring is enabled (blurDispersionStrength \> 0), because in that mode the SSR contribution is generated in a separate texture.

##### Returns

`number`

#### Set Signature

> **set** **ssrDownsample**(`downsample`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L214)

##### Parameters

###### downsample

`number`

##### Returns

`void`

***

### step

#### Get Signature

> **get** **step**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L95)

Gets or sets the step size used to iterate until the effect finds the color of the reflection's pixel. Should be an integer \>= 1 as it is the number of pixels we advance at each step (default: 1).
Use higher values to improve performances (but at the expense of quality).

##### Returns

`number`

#### Set Signature

> **set** **step**(`step`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L99)

##### Parameters

###### step

`number`

##### Returns

`void`

***

### strength

#### Get Signature

> **get** **strength**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L121)

Gets or sets the current reflection strength. 1.0 is an ideal value but can be increased/decreased for particular results (default: 1).

##### Returns

`number`

#### Set Signature

> **set** **strength**(`strength`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L125)

##### Parameters

###### strength

`number`

##### Returns

`void`

***

### thickness

#### Get Signature

> **get** **thickness**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L109)

Gets or sets the thickness value used as tolerance when computing the intersection between the reflected ray and the scene (default: 0.5).
If setting "enableAutomaticThicknessComputation" to true, you can use lower values for "thickness" (even 0), as the geometry thickness
is automatically computed thank to the regular depth buffer + the backface depth buffer

##### Returns

`number`

#### Set Signature

> **set** **thickness**(`thickness`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L113)

##### Parameters

###### thickness

`number`

##### Returns

`void`

***

### useFresnel

#### Get Signature

> **get** **useFresnel**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:382](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L382)

Gets or sets a boolean indicating whether the blending between the current color pixel and the reflection color should be done with a Fresnel coefficient (default: false).
It is more physically accurate to use the Fresnel coefficient (otherwise it uses the reflectivity of the material for blending), but it is also more expensive when you use blur (when blurDispersionStrength \> 0).

##### Returns

`boolean`

#### Set Signature

> **set** **useFresnel**(`fresnel`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:386](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L386)

##### Parameters

###### fresnel

`boolean`

##### Returns

`void`

## Methods

### addCamera()

> **addCamera**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:664](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L664)

Adds a camera to the pipeline

#### Parameters

##### camera

[`Camera`](Camera.md)

the camera to be added

#### Returns

`void`

***

### addEffect()

> **addEffect**(`renderEffect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L106)

Adds an effect to the pipeline

#### Parameters

##### renderEffect

[`PostProcessRenderEffect`](PostProcessRenderEffect.md)

the effect to add

#### Returns

`void`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`addEffect`](PostProcessRenderPipeline.md#addeffect)

***

### dispose()

> **dispose**(`disableGeometryBufferRenderer?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:683](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L683)

Removes the internal pipeline assets and detaches the pipeline from the scene cameras

#### Parameters

##### disableGeometryBufferRenderer?

`boolean` = `false`

if the geometry buffer renderer should be disabled

#### Returns

`void`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`dispose`](PostProcessRenderPipeline.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:656](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L656)

Get the class name

#### Returns

`string`

"SSRRenderingPipeline"

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`getClassName`](PostProcessRenderPipeline.md#getclassname)

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:551](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L551)

Gets the scene the effect belongs to.

#### Returns

[`Scene`](Scene.md)

the scene the effect belongs to.

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:543](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L543)

Checks if all the post processes in the pipeline are ready.

#### Returns

`boolean`

True if all the post processes in the pipeline are ready

***

### removeCamera()

> **removeCamera**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:673](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L673)

Removes a camera from the pipeline

#### Parameters

##### camera

[`Camera`](Camera.md)

the camera to remove

#### Returns

`void`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts:1026](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssrRenderingPipeline.pure.ts#L1026)

Serializes the rendering pipeline (Used when exporting)

#### Returns

`any`

the serialized object

***

### setPrePassRenderer()

> **setPrePassRenderer**(`prePassRenderer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:277](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L277)

Sets the required values to the prepass renderer.

#### Parameters

##### prePassRenderer

[`PrePassRenderer`](PrePassRenderer.md)

defines the prepass renderer to setup.

#### Returns

`boolean`

true if the pre pass is needed.

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`setPrePassRenderer`](PostProcessRenderPipeline.md#setprepassrenderer)
