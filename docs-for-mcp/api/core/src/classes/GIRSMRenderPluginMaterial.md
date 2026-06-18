[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GIRSMRenderPluginMaterial

# Class: GIRSMRenderPluginMaterial

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts:904](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts#L904)

Plugin used to render the global illumination contribution.

## Extends

- [`MaterialPluginBase`](MaterialPluginBase.md)

## Constructors

### Constructor

> **new GIRSMRenderPluginMaterial**(`material`): `GIRSMRenderPluginMaterial`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts:953](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts#L953)

#### Parameters

##### material

[`Material`](Material.md) \| [`StandardMaterial`](StandardMaterial.md) \| [`PBRBaseMaterial`](PBRBaseMaterial.md)

#### Returns

`GIRSMRenderPluginMaterial`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`constructor`](MaterialPluginBase.md#constructor)

## Properties

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L56)

Specifies if the material plugin should be serialized, `true` to skip serialization

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`doNotSerialize`](MaterialPluginBase.md#donotserialize)

***

### isEnabled

> **isEnabled**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts:936](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts#L936)

Defines if the plugin is enabled in the material.

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

### outputTextureHeight

> **outputTextureHeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts:928](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts#L928)

The height of the output texture.

***

### outputTextureWidth

> **outputTextureWidth**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts:922](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts#L922)

The width of the output texture.

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

### textureGIContrib

> **textureGIContrib**: [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts:916](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts#L916)

The texture containing the global illumination contribution.

***

### Name

> `readonly` `static` **Name**: `"GIRSMRender"` = `"GIRSMRender"`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts:910](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts#L910)

Defines the name of the plugin.

## Methods

### addFallbacks()

> **addFallbacks**(`defines`, `fallbacks`, `currentRank`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L260)

Add fallbacks to the effect fallbacks list.

#### Parameters

##### defines

[`MaterialDefines`](MaterialDefines.md)

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

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`addFallbacks`](MaterialPluginBase.md#addfallbacks)

***

### bindForSubMesh()

> **bindForSubMesh**(`uniformBuffer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts:994](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts#L994)

Binds the material data for a sub mesh

#### Parameters

##### uniformBuffer

[`UniformBuffer`](UniformBuffer.md)

the uniform buffer to update

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

> **dispose**(`_forceDisposeTextures?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L166)

Disposes the resources of the material.

#### Parameters

##### \_forceDisposeTextures?

`boolean`

Forces the disposal of all textures.

#### Returns

`void`

#### Inherited from

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

> **getActiveTextures**(`_activeTextures`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L245)

Returns an array of the actively used textures.

#### Parameters

##### \_activeTextures

[`BaseTexture`](BaseTexture.md)[]

Array of BaseTextures

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`getActiveTextures`](MaterialPluginBase.md#getactivetextures)

***

### getAnimatables()

> **getAnimatables**(`_animatables`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L251)

Returns the animatable textures.

#### Parameters

##### \_animatables

[`IAnimatable`](../interfaces/IAnimatable.md)[]

Array of animatable textures.

#### Returns

`void`

#### Inherited from

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

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts:969](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts#L969)

Gets the current class name useful for serialization or dynamic coding.

#### Returns

`string`

The class name.

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getClassName`](MaterialPluginBase.md#getclassname)

***

### getCustomCode()

> **getCustomCode**(`shaderType`, `shaderLanguage`): \{\[`name`: `string`\]: `string`; \} \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts:1007](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts#L1007)

Gets custom shader code for the plugin

#### Parameters

##### shaderType

`string`

the type of shader (vertex or fragment)

##### shaderLanguage

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

the shader language

#### Returns

\{\[`name`: `string`\]: `string`; \} \| `null`

the custom shader code

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getCustomCode`](MaterialPluginBase.md#getcustomcode)

***

### getSamplers()

> **getSamplers**(`samplers`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts:986](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts#L986)

Gets the samplers used by the plugin

#### Parameters

##### samplers

`string`[]

the list of samplers to update

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

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts:973](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts#L973)

Gets the description of the uniforms to add to the ubo (if engine supports ubos) or to inject directly in the vertex/fragment shaders (if engine does not support ubos)

#### Returns

`object`

the description of the uniforms

##### fragment

> **fragment**: `string`

##### ubo

> **ubo**: `object`[]

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

> **hasTexture**(`_texture`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L223)

Checks to see if a texture is used in the material.

#### Parameters

##### \_texture

[`BaseTexture`](BaseTexture.md)

Base texture to use.

#### Returns

`boolean`

- Boolean specifying if a texture is used in the material.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`hasTexture`](MaterialPluginBase.md#hastexture)

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts:949](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts#L949)

Gets a boolean indicating that the plugin is compatible with a give shader language.

#### Returns

`boolean`

true if the plugin is compatible with the shader language

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`isCompatible`](MaterialPluginBase.md#iscompatible)

***

### isReadyForSubMesh()

> **isReadyForSubMesh**(`_defines`, `_scene`, `_engine`, `_subMesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L140)

Specifies that the submesh is ready to be used.

#### Parameters

##### \_defines

[`MaterialDefines`](MaterialDefines.md)

the list of "defines" to update.

##### \_scene

[`Scene`](Scene.md)

defines the scene the material belongs to.

##### \_engine

[`AbstractEngine`](AbstractEngine.md)

the engine this scene belongs to.

##### \_subMesh

[`SubMesh`](SubMesh.md)

the submesh to check for readiness

#### Returns

`boolean`

- boolean indicating that the submesh is ready or not.

#### Inherited from

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

> **prepareDefines**(`defines`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts:965](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.pure.ts#L965)

Prepares the defines used by the plugin

#### Parameters

##### defines

`MaterialGIRSMRenderDefines`

the defines to prepare

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`prepareDefines`](MaterialPluginBase.md#preparedefines)

***

### prepareDefinesBeforeAttributes()

> **prepareDefinesBeforeAttributes**(`_defines`, `_scene`, `_mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L208)

Sets the defines for the next rendering. Called before PrepareDefinesForAttributes is called.

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
