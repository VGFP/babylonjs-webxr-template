[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PBRSheenConfiguration

# Class: PBRSheenConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L39)

Plugin that implements the sheen component of the PBR material.

## Extends

- [`MaterialPluginBase`](MaterialPluginBase.md)

## Constructors

### Constructor

> **new PBRSheenConfiguration**(`material`, `addToPluginList?`): `PBRSheenConfiguration`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L134)

#### Parameters

##### material

[`PBRBaseMaterial`](PBRBaseMaterial.md)

##### addToPluginList?

`boolean` = `true`

#### Returns

`PBRSheenConfiguration`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`constructor`](MaterialPluginBase.md#constructor)

## Properties

### \_useRoughness

> **\_useRoughness**: `boolean`

Defined in: [babylonjs-source/packages/dev/inspector-v2/src/components/properties/materials/pbrBaseMaterialProperties.tsx:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/inspector-v2/src/components/properties/materials/pbrBaseMaterialProperties.tsx#L25)

***

### albedoScaling

> **albedoScaling**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L115)

If true, the sheen effect is layered above the base BRDF with the albedo-scaling technique.
It allows the strength of the sheen effect to not depend on the base color of the material,
making it easier to setup and tweak the effect

***

### color

> **color**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L66)

Defines the sheen color.

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L56)

Specifies if the material plugin should be serialized, `true` to skip serialization

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`doNotSerialize`](MaterialPluginBase.md#donotserialize)

***

### intensity

> **intensity**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L60)

Defines the sheen intensity.

***

### isEnabled

> **isEnabled**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L46)

Defines if the material uses sheen.

***

### linkSheenWithAlbedo

> **linkSheenWithAlbedo**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L54)

Defines if the sheen is linked to the sheen color.

***

### markAllDefinesAsDirty

> `readonly` **markAllDefinesAsDirty**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L85)

Helper function to mark defines as being dirty.

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`markAllDefinesAsDirty`](MaterialPluginBase.md#markalldefinesasdirty)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L33)

Defines the name of the plugin

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`name`](MaterialPluginBase.md#name)

***

### priority

> **priority**: `number` = `500`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L39)

Defines the priority of the plugin. Lower numbers run first.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`priority`](MaterialPluginBase.md#priority)

***

### registerForExtraEvents

> **registerForExtraEvents**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L51)

Indicates that this plugin should be notified for the extra events (HasRenderTargetTextures / FillRenderTargetTextures / HardBindForSubMesh)

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`registerForExtraEvents`](MaterialPluginBase.md#registerforextraevents)

***

### resolveIncludes

> **resolveIncludes**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L45)

Indicates that any #include directive in the plugin code must be replaced by the corresponding code.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`resolveIncludes`](MaterialPluginBase.md#resolveincludes)

***

### roughness

> **roughness**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L96)

Defines the sheen roughness.
It is not taken into account if linkSheenWithAlbedo is true.
To stay backward compatible, material roughness is used instead if sheen roughness = null

***

### texture

> **texture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L77)

Stores the sheen tint values in a texture.
rgb is tint
a is a intensity or roughness if the roughness property has been defined and useRoughnessFromTexture is true (in that case, textureRoughness won't be used)
If the roughness property has been defined and useRoughnessFromTexture is false then the alpha channel is not used to modulate roughness

***

### textureRoughness

> **textureRoughness**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L105)

Stores the sheen roughness in a texture.
alpha channel is the roughness. This texture won't be used if the texture property is not empty and useRoughnessFromTexture is true

***

### useRoughnessFromMainTexture

> **useRoughnessFromMainTexture**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L86)

Indicates that the alpha channel of the texture property will be used for roughness.
Has no effect if the roughness (and texture!) property is not defined

## Methods

### addFallbacks()

> **addFallbacks**(`defines`, `fallbacks`, `currentRank`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:326](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L326)

Add fallbacks to the effect fallbacks list.

#### Parameters

##### defines

`MaterialSheenDefines`

defines the Base texture to use.

##### fallbacks

[`EffectFallbacks`](EffectFallbacks.md)

defines the current fallback list.

##### currentRank

`number`

defines the current fallback rank.

#### Returns

`number`

the new fallback rank.

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`addFallbacks`](MaterialPluginBase.md#addfallbacks)

***

### bindForSubMesh()

> **bindForSubMesh**(`uniformBuffer`, `scene`, `engine`, `subMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:220](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L220)

Binds sheen data for a sub mesh.

#### Parameters

##### uniformBuffer

[`UniformBuffer`](UniformBuffer.md)

defines the uniform buffer to update

##### scene

[`Scene`](Scene.md)

defines the scene to use for texture binding

##### engine

[`Engine`](Engine.md)

defines the engine to use for capability checks

##### subMesh

[`SubMesh`](SubMesh.md)

defines the sub mesh being rendered

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`bindForSubMesh`](MaterialPluginBase.md#bindforsubmesh)

***

### collectDefines()

> **collectDefines**(`defines`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L185)

Collects all defines.

#### Parameters

##### defines

The object to append to.

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`collectDefines`](MaterialPluginBase.md#collectdefines)

***

### copyTo()

> **copyTo**(`plugin`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:302](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L302)

Makes a duplicate of the current configuration into another one.

#### Parameters

##### plugin

[`MaterialPluginBase`](MaterialPluginBase.md)

define the config where to copy the info

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`copyTo`](MaterialPluginBase.md#copyto)

***

### dispose()

> **dispose**(`forceDisposeTextures?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:315](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L315)

Disposes the sheen textures.

#### Parameters

##### forceDisposeTextures?

`boolean`

defines whether to dispose the textures

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`dispose`](MaterialPluginBase.md#dispose)

***

### fillRenderTargetTextures()

> **fillRenderTargetTextures**(`_renderTargets`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L239)

Fills the list of render target textures.

#### Parameters

##### \_renderTargets

[`SmartArray`](SmartArray.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

the list of render targets to update

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`fillRenderTargetTextures`](MaterialPluginBase.md#fillrendertargettextures)

***

### getActiveTextures()

> **getActiveTextures**(`activeTextures`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:287](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L287)

Adds the active sheen textures.

#### Parameters

##### activeTextures

[`BaseTexture`](BaseTexture.md)[]

defines the list of active textures to update

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getActiveTextures`](MaterialPluginBase.md#getactivetextures)

***

### getAnimatables()

> **getAnimatables**(`animatables`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:301](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L301)

Adds the animatable sheen textures.

#### Parameters

##### animatables

[`IAnimatable`](../interfaces/IAnimatable.md)[]

defines the list of animatables to update

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getAnimatables`](MaterialPluginBase.md#getanimatables)

***

### getAttributes()

> **getAttributes**(`_attributes`, `_scene`, `_mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:276](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L276)

Gets the attributes used by the plugin.

#### Parameters

##### \_attributes

`string`[]

list that the attribute names should be added to.

##### \_scene

[`Scene`](Scene.md)

the scene that the material belongs to.

##### \_mesh

[`AbstractMesh`](AbstractMesh.md)

the mesh being rendered.

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`getAttributes`](MaterialPluginBase.md#getattributes)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L322)

Gets the current class name useful for serialization or dynamic coding.

#### Returns

`string`

The class name.

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getClassName`](MaterialPluginBase.md#getclassname)

***

### getCustomCode()

> **getCustomCode**(`_shaderType`, `_shaderLanguage?`): [`Nullable`](../type-aliases/Nullable.md)\<\{\[`pointName`: `string`\]: `string`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L177)

Returns a list of custom shader code fragments to customize the shader.

#### Parameters

##### \_shaderType

`string`

"vertex" or "fragment"

##### \_shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md) = `ShaderLanguage.GLSL`

The shader language to use.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\{\[`pointName`: `string`\]: `string`; \}\>

null if no code to be added, or a list of pointName =\> code.
Note that `pointName` can also be a regular expression if it starts with a `!`.
In that case, the string found by the regular expression (if any) will be
replaced by the code provided.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`getCustomCode`](MaterialPluginBase.md#getcustomcode)

***

### getSamplers()

> **getSamplers**(`samplers`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L337)

Adds the sheen sampler names.

#### Parameters

##### samplers

`string`[]

defines the list of sampler names to update

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getSamplers`](MaterialPluginBase.md#getsamplers)

***

### getUniformBuffersNames()

> **getUniformBuffersNames**(`_ubos`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:282](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L282)

Gets the uniform buffers names added by the plugin.

#### Parameters

##### \_ubos

`string`[]

list that the ubo names should be added to.

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`getUniformBuffersNames`](MaterialPluginBase.md#getuniformbuffersnames)

***

### getUniforms()

> **getUniforms**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:341](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L341)

Gets the description of the uniforms to add to the ubo (if engine supports ubos) or to inject directly in the vertex/fragment shaders (if engine does not support ubos)

#### Returns

`object`

the description of the uniforms

##### fragment?

> `optional` **fragment?**: `string`

##### ubo?

> `optional` **ubo?**: `object`[]

##### vertex?

> `optional` **vertex?**: `string`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getUniforms`](MaterialPluginBase.md#getuniforms)

***

### hardBindForSubMesh()

> **hardBindForSubMesh**(`_uniformBuffer`, `_scene`, `_engine`, `_subMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L151)

Binds the material data (this function is called even if mustRebind() returns false)

#### Parameters

##### \_uniformBuffer

[`UniformBuffer`](UniformBuffer.md)

defines the Uniform buffer to fill in.

##### \_scene

[`Scene`](Scene.md)

defines the scene the material belongs to.

##### \_engine

[`AbstractEngine`](AbstractEngine.md)

defines the engine the material belongs to.

##### \_subMesh

[`SubMesh`](SubMesh.md)

the submesh to bind data for

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`hardBindForSubMesh`](MaterialPluginBase.md#hardbindforsubmesh)

***

### hasRenderTargetTextures()

> **hasRenderTargetTextures**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L231)

Gets a boolean indicating that current material needs to register RTT

#### Returns

`boolean`

true if this uses a render target otherwise false.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`hasRenderTargetTextures`](MaterialPluginBase.md#hasrendertargettextures)

***

### hasTexture()

> **hasTexture**(`texture`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L271)

Checks whether sheen uses a texture.

#### Parameters

##### texture

[`BaseTexture`](BaseTexture.md)

defines the texture to check

#### Returns

`boolean`

true if the texture is used by sheen

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`hasTexture`](MaterialPluginBase.md#hastexture)

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L130)

Gets a boolean indicating that the plugin is compatible with a given shader language.

#### Returns

`boolean`

true if the plugin is compatible with the shader language

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`isCompatible`](MaterialPluginBase.md#iscompatible)

***

### isReadyForSubMesh()

> **isReadyForSubMesh**(`defines`, `scene`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L146)

Checks whether the sheen textures are ready for the sub mesh.

#### Parameters

##### defines

`MaterialSheenDefines`

defines the material defines to inspect

##### scene

[`Scene`](Scene.md)

defines the scene to use for readiness checks

#### Returns

`boolean`

true if sheen is ready

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`isReadyForSubMesh`](MaterialPluginBase.md#isreadyforsubmesh)

***

### parse()

> **parse**(`source`, `scene`, `rootUrl`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:320](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L320)

Parses a plugin configuration from a serialized object.

#### Parameters

##### source

`any`

Serialized object.

##### scene

[`Scene`](Scene.md)

Defines the scene we are parsing for

##### rootUrl

`string`

Defines the rootUrl to load from

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`parse`](MaterialPluginBase.md#parse)

***

### prepareDefines()

> **prepareDefines**(`_defines`, `_scene`, `_mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L216)

Sets the defines for the next rendering

#### Parameters

##### \_defines

[`MaterialDefines`](MaterialDefines.md)

the list of "defines" to update.

##### \_scene

[`Scene`](Scene.md)

defines the scene to the material belongs to.

##### \_mesh

[`AbstractMesh`](AbstractMesh.md)

the mesh being rendered

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`prepareDefines`](MaterialPluginBase.md#preparedefines)

***

### prepareDefinesBeforeAttributes()

> **prepareDefinesBeforeAttributes**(`defines`, `scene`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts:175](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/PBR/pbrSheenConfiguration.ts#L175)

Updates shader defines for sheen before attributes are processed.

#### Parameters

##### defines

`MaterialSheenDefines`

defines the material defines to update

##### scene

[`Scene`](Scene.md)

defines the scene to use for texture checks

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`prepareDefinesBeforeAttributes`](MaterialPluginBase.md#preparedefinesbeforeattributes)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L310)

Serializes this plugin configuration.

#### Returns

`any`

- An object with the serialized config.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`serialize`](MaterialPluginBase.md#serialize)
