[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MaterialHelper

# Class: MaterialHelper

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L56)

"Static Class" containing the most commonly used helper while dealing with material for rendering purpose.

It contains the basic tools to help defining defines, binding uniform for the common part of the materials.

This works by convention in BabylonJS but is meant to be use only with shader following the in place naming rules and conventions.

## Constructors

### Constructor

> **new MaterialHelper**(): `MaterialHelper`

#### Returns

`MaterialHelper`

## Properties

### BindBonesParameters

> `static` **BindBonesParameters**: (`mesh?`, `effect?`, `prePassConfiguration?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:388](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L388)

Binds the bones information from the mesh to the effect.

#### Parameters

##### mesh?

[`AbstractMesh`](AbstractMesh.md)

The mesh we are binding the information to render

##### effect?

[`Effect`](Effect.md)

The effect we are binding the data to

##### prePassConfiguration?

`PrePassConfiguration`

Configuration for the prepass, in case prepass is activated

#### Returns

`void`

***

### BindFogParameters

> `static` **BindFogParameters**: (`scene`, `mesh?`, `effect?`, `linearSpace?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:380](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L380)

Binds the fog information from the scene to the effect for the given mesh.

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene the lights belongs to

##### mesh?

[`AbstractMesh`](AbstractMesh.md)

The mesh we are binding the information to render

##### effect?

[`Effect`](Effect.md)

The effect we are binding the data to

##### linearSpace?

`boolean`

Defines if the fog effect is applied in linear space

#### Returns

`void`

***

### BindLight

> `static` **BindLight**: (`light`, `lightIndex`, `scene`, `effect`, `useSpecular`, `receiveShadows?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:361](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L361)

Binds the lights information from the scene to the effect for the given mesh.

#### Parameters

##### light

[`Light`](Light.md)

Light to bind

##### lightIndex

`number`

Light index

##### scene

[`Scene`](Scene.md)

The scene where the light belongs to

##### effect

[`Effect`](Effect.md)

The effect we are binding the data to

##### useSpecular

`boolean`

Defines if specular is supported

##### receiveShadows?

`boolean`

Defines if the effect (mesh) we bind the light for receives shadows

#### Returns

`void`

***

### BindLightProperties

> `static` **BindLightProperties**: (`light`, `effect`, `lightIndex`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:350](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L350)

Binds the light information to the effect.

#### Parameters

##### light

[`Light`](Light.md)

The light containing the generator

##### effect

[`Effect`](Effect.md)

The effect we are binding the data to

##### lightIndex

`number`

The light index in the effect used to render

#### Returns

`void`

***

### BindLights

> `static` **BindLights**: (`scene`, `mesh`, `effect`, `defines`, `maxSimultaneousLights?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:371](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L371)

Binds the lights information from the scene to the effect for the given mesh.

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene the lights belongs to

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh we are binding the information to render

##### effect

[`Effect`](Effect.md)

The effect we are binding the data to

##### defines

`any`

The generated defines for the effect

##### maxSimultaneousLights?

`number`

The maximum number of light that can be bound to the effect

#### Returns

`void`

***

### BindLogDepth

> `static` **BindLogDepth**: (`defines`, `effect`, `scene`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:403](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L403)

Binds the logarithmic depth information from the scene to the effect for the given defines.

#### Parameters

##### defines

`any`

The generated defines used in the effect

##### effect

[`Effect`](Effect.md)

The effect we are binding the data to

##### scene

[`Scene`](Scene.md)

The scene we are willing to render with logarithmic scale for

#### Returns

`void`

***

### BindMorphTargetParameters

> `static` **BindMorphTargetParameters**: (`abstractMesh`, `effect`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:395](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L395)

Binds the morph targets information from the mesh to the effect.

#### Parameters

##### abstractMesh

[`AbstractMesh`](AbstractMesh.md)

The mesh we are binding the information to render

##### effect

[`Effect`](Effect.md)

The effect we are binding the data to

#### Returns

`void`

***

### BindSceneUniformBuffer

> `static` **BindSceneUniformBuffer**: (`effect`, `sceneUbo`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L62)

Binds the scene's uniform buffer to the effect.

#### Parameters

##### effect

[`Effect`](Effect.md)

defines the effect to bind to the scene uniform buffer

##### sceneUbo

[`UniformBuffer`](UniformBuffer.md)

defines the uniform buffer storing scene data

#### Returns

`void`

***

### BindTextureMatrix

> `static` **BindTextureMatrix**: (`texture`, `uniformBuffer`, `key`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L79)

Binds a texture matrix value to its corresponding uniform

#### Parameters

##### texture

[`BaseTexture`](BaseTexture.md)

The texture to bind the matrix for

##### uniformBuffer

[`UniformBuffer`](UniformBuffer.md)

The uniform buffer receiving the data

##### key

`string`

The channel key "diffuse", "specular"... used in the shader

#### Returns

`void`

***

### GetFogState

> `static` **GetFogState**: (`mesh`, `scene`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L87)

Gets the current status of the fog (should it be enabled?)

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to evaluate for fog support

##### scene

[`Scene`](Scene.md)

defines the hosting scene

#### Returns

`boolean`

true if fog must be enabled

***

### HandleFallbacksForShadows

> `static` **HandleFallbacksForShadows**: (`defines`, `fallbacks`, `maxSimultaneousLights?`, `rank?`) => `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:295](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L295)

This helps decreasing rank by rank the shadow quality (0 being the highest rank and quality)

#### Parameters

##### defines

`any`

The defines to update while falling back

##### fallbacks

[`EffectFallbacks`](EffectFallbacks.md)

The authorized effect fallbacks

##### maxSimultaneousLights?

`number`

The maximum number of lights allowed

##### rank?

`number`

the current rank of the Effect

#### Returns

`number`

The newly affected rank

***

### PrepareAttributesForBakedVertexAnimation

> `static` **PrepareAttributesForBakedVertexAnimation**: (`attribs`, `mesh`, `defines`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:319](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L319)

Prepares the list of attributes required for baked vertex animations according to the effect defines.

#### Parameters

##### attribs

`string`[]

The current list of supported attribs

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh to prepare for baked vertex animations

##### defines

`any`

The current Defines of the effect

#### Returns

`void`

***

### PrepareAttributesForBones

> `static` **PrepareAttributesForBones**: (`attribs`, `mesh`, `defines`, `fallbacks`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:328](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L328)

Prepares the list of attributes required for bones according to the effect defines.

#### Parameters

##### attribs

`string`[]

The current list of supported attribs

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh to prepare the bones attributes for

##### defines

`any`

The current Defines of the effect

##### fallbacks

[`EffectFallbacks`](EffectFallbacks.md)

The current effect fallback strategy

#### Returns

`void`

***

### PrepareAttributesForInstances

> `static` **PrepareAttributesForInstances**: (`attribs`, `defines`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:335](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L335)

Check and prepare the list of attributes required for instances according to the effect defines.

#### Parameters

##### attribs

`string`[]

The current list of supported attribs

##### defines

[`MaterialDefines`](MaterialDefines.md)

The current MaterialDefines of the effect

#### Returns

`void`

***

### PrepareAttributesForMorphTargets

> `static` **PrepareAttributesForMorphTargets**: (`attribs`, `mesh`, `defines`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:311](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L311)

Prepares the list of attributes required for morph targets according to the effect defines.

#### Parameters

##### attribs

`string`[]

The current list of supported attribs

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh to prepare the morph targets attributes for

##### defines

`any`

The current Defines of the effect

#### Returns

`void`

***

### PrepareAttributesForMorphTargetsInfluencers

> `static` **PrepareAttributesForMorphTargetsInfluencers**: (`attribs`, `mesh`, `influencers`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:303](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L303)

Prepares the list of attributes required for morph targets according to the effect defines.

#### Parameters

##### attribs

`string`[]

The current list of supported attribs

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh to prepare the morph targets attributes for

##### influencers

`number`

The number of influencers

#### Returns

`void`

***

### PrepareDefinesForAttributes

> `static` **PrepareDefinesForAttributes**: (`mesh`, `defines`, `useVertexColor`, `useBones`, `useMorphTargets?`, `useVertexAlpha?`, `useBakedVertexAnimation?`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L171)

Prepares the defines used in the shader depending on the attributes data available in the mesh

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh containing the geometry data we will draw

##### defines

`any`

The defines to update

##### useVertexColor

`boolean`

Precise whether vertex colors should be used or not (override mesh info)

##### useBones

`boolean`

Precise whether bones should be used or not (override mesh info)

##### useMorphTargets?

`boolean`

Precise whether morph targets should be used or not (override mesh info)

##### useVertexAlpha?

`boolean`

Precise whether vertex alpha should be used or not (override mesh info)

##### useBakedVertexAnimation?

`boolean`

Precise whether baked vertex animation should be used or not (override mesh info)

#### Returns

`boolean`

false if defines are considered not dirty and have not been checked

***

### PrepareDefinesForBakedVertexAnimation

> `static` **PrepareDefinesForBakedVertexAnimation**: (`mesh`, `defines`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L158)

Prepares the defines for baked vertex animation

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh containing the geometry data we will draw

##### defines

`any`

The defines to update

#### Returns

`void`

***

### PrepareDefinesForBones

> `static` **PrepareDefinesForBones**: (`mesh`, `defines`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L144)

Prepares the defines for bones

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh containing the geometry data we will draw

##### defines

`any`

The defines to update

#### Returns

`void`

***

### PrepareDefinesForCamera

> `static` **PrepareDefinesForCamera**: (`scene`, `defines`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L117)

Helper used to prepare the defines relative to the active camera

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the current scene

##### defines

`any`

specifies the list of active defines

#### Returns

`boolean`

true if the defines have been updated, else false

***

### PrepareDefinesForFrameBoundValues

> `static` **PrepareDefinesForFrameBoundValues**: (`scene`, `engine`, `material`, `defines`, `useInstances`, `useClipPlane?`, `useThinInstances?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L129)

Helper used to prepare the list of defines associated with frame values for shader compilation

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the current scene

##### engine

[`AbstractEngine`](AbstractEngine.md)

defines the current engine

##### material

[`Material`](Material.md)

defines the material we are compiling the shader for

##### defines

`any`

specifies the list of active defines

##### useInstances

`boolean`

defines if instances have to be turned on

##### useClipPlane?

[`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

defines if clip plane have to be turned on

##### useThinInstances?

`boolean`

defines if thin instances have to be turned on

#### Returns

`void`

***

### PrepareDefinesForLight

> `static` **PrepareDefinesForLight**: (`scene`, `mesh`, `light`, `lightIndex`, `defines`, `specularSupported`, `state`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:220](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L220)

Prepares the defines related to the light information passed in parameter

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene we are intending to draw

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh the effect is compiling for

##### light

[`Light`](Light.md)

The light the effect is compiling for

##### lightIndex

`number`

The index of the light

##### defines

`any`

The defines to update

##### specularSupported

`boolean`

Specifies whether specular is supported or not (override lights data)

##### state

Defines the current state regarding what is needed (normals, etc...)

###### lightmapMode

`boolean`

###### needNormals

`boolean`

###### needRebuild

`boolean`

###### shadowEnabled

`boolean`

###### specularEnabled

`boolean`

#### Returns

`void`

***

### PrepareDefinesForLights

> `static` **PrepareDefinesForLights**: (`scene`, `mesh`, `defines`, `specularSupported`, `maxSimultaneousLights?`, `disableLighting?`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:246](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L246)

Prepares the defines related to the light information passed in parameter

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene we are intending to draw

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh the effect is compiling for

##### defines

`any`

The defines to update

##### specularSupported

`boolean`

Specifies whether specular is supported or not (override lights data)

##### maxSimultaneousLights?

`number`

Specifies how manuy lights can be added to the effect at max

##### disableLighting?

`boolean`

Specifies whether the lighting is disabled (override scene and light)

#### Returns

`boolean`

true if normals will be required for the rest of the effect

***

### PrepareDefinesForMergedUV

> `static` **PrepareDefinesForMergedUV**: (`texture`, `defines`, `key`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L71)

Helps preparing the defines values about the UVs in used in the effect.
UVs are shared as much as we can across channels in the shaders.

#### Parameters

##### texture

[`BaseTexture`](BaseTexture.md)

The texture we are preparing the UVs for

##### defines

`any`

The defines to update

##### key

`string`

The channel key "diffuse", "specular"... used in the shader

#### Returns

`void`

***

### PrepareDefinesForMisc

> `static` **PrepareDefinesForMisc**: (`mesh`, `scene`, `useLogarithmicDepth`, `pointsCloud`, `fogEnabled`, `alphaTest`, `defines`, `applyDecalAfterDetail?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L100)

Helper used to prepare the list of defines associated with misc. values for shader compilation

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the current mesh

##### scene

[`Scene`](Scene.md)

defines the current scene

##### useLogarithmicDepth

`boolean`

defines if logarithmic depth has to be turned on

##### pointsCloud

`boolean`

defines if point cloud rendering has to be turned on

##### fogEnabled

`boolean`

defines if fog has to be turned on

##### alphaTest

`boolean`

defines if alpha testing has to be turned on

##### defines

`any`

defines the current list of defines

##### applyDecalAfterDetail?

`boolean`

Defines if the decal is applied after or before the detail

#### Returns

`void`

***

### PrepareDefinesForMorphTargets

> `static` **PrepareDefinesForMorphTargets**: (`mesh`, `defines`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L151)

Prepares the defines for morph targets

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh containing the geometry data we will draw

##### defines

`any`

The defines to update

#### Returns

`void`

***

### PrepareDefinesForMultiview

> `static` **PrepareDefinesForMultiview**: (`scene`, `defines`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L186)

Prepares the defines related to multiview

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene we are intending to draw

##### defines

`any`

The defines to update

#### Returns

`void`

***

### PrepareDefinesForOIT

> `static` **PrepareDefinesForOIT**: (`scene`, `defines`, `needAlphaBlending`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L195)

Prepares the defines related to order independant transparency

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene we are intending to draw

##### defines

`any`

The defines to update

##### needAlphaBlending

`boolean`

Determines if the material needs alpha blending

#### Returns

`void`

***

### PrepareDefinesForPrePass

> `static` **PrepareDefinesForPrePass**: (`scene`, `defines`, `canRenderToMRT`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:203](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L203)

Prepares the defines related to the prepass

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene we are intending to draw

##### defines

`any`

The defines to update

##### canRenderToMRT

`boolean`

Indicates if this material renders to several textures in the prepass

#### Returns

`void`

***

### PrepareUniformsAndSamplersForLight

> `static` **PrepareUniformsAndSamplersForLight**: (`lightIndex`, `uniformsList`, `samplersList`, `projectedLightTexture?`, `uniformBuffersList?`, `updateOnlyBuffersList?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:264](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L264)

Prepares the uniforms and samplers list to be used in the effect (for a specific light)

#### Parameters

##### lightIndex

`number`

defines the light index

##### uniformsList

`string`[]

The uniform list

##### samplersList

`string`[]

The sampler list

##### projectedLightTexture?

`any`

defines if projected texture must be used

##### uniformBuffersList?

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

defines an optional list of uniform buffers

##### updateOnlyBuffersList?

`boolean`

True to only update the uniformBuffersList array

#### Returns

`void`

***

### PrepareUniformsAndSamplersList

> `static` **PrepareUniformsAndSamplersList**: (`uniformsListOrOptions`, `samplersList?`, `defines?`, `maxSimultaneousLights?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:280](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L280)

Prepares the uniforms and samplers list to be used in the effect

#### Parameters

##### uniformsListOrOptions

`string`[] \| [`IEffectCreationOptions`](../interfaces/IEffectCreationOptions.md)

The uniform names to prepare or an EffectCreationOptions containing the list and extra information

##### samplersList?

`string`[]

The sampler list

##### defines?

`any`

The defines helping in the list generation

##### maxSimultaneousLights?

`number`

The maximum number of simultaneous light allowed in the effect

#### Returns

`void`

***

### PushAttributesForInstances

> `static` **PushAttributesForInstances**: (`attribs`, `needsPreviousMatrices?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.ts:342](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.ts#L342)

Add the list of attributes required for instances to the attribs array.

#### Parameters

##### attribs

`string`[]

The current list of supported attribs

##### needsPreviousMatrices?

`boolean`

If the shader needs previous matrices

#### Returns

`void`
