[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GaussianSplattingSolidColorMaterialPlugin

# Class: GaussianSplattingSolidColorMaterialPlugin

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts#L19)

Plugin for GaussianSplattingMaterial that replaces per-splat colors with a
solid color per compound-mesh part. Each part index maps to a single Color3
value, which is looked up in a uniform array in the fragment shader.

## Extends

- [`MaterialPluginBase`](MaterialPluginBase.md)

## Constructors

### Constructor

> **new GaussianSplattingSolidColorMaterialPlugin**(`material`, `partColors`, `maxPartCount?`): `GaussianSplattingSolidColorMaterialPlugin`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts#L45)

Creates a new GaussianSplatSolidColorPlugin.

#### Parameters

##### material

[`GaussianSplattingMaterial`](GaussianSplattingMaterial.md)

The GaussianSplattingMaterial to attach the plugin to.

##### partColors

[`Color3`](Color3.md)[]

A map from part index to the solid Color3 for that part.

##### maxPartCount?

`number`

The maximum number of parts supported. This determines the size of the uniform array.

#### Returns

`GaussianSplattingSolidColorMaterialPlugin`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`constructor`](MaterialPluginBase.md#constructor)

## Properties

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L54)

Specifies if the material plugin should be serialized, `true` to skip serialization

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`doNotSerialize`](MaterialPluginBase.md#donotserialize)

***

### isEnabled

> **isEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts#L31)

Whether the solid-color override is active. When false, splats
render with their original per-splat colors.
Toggled via a shader uniform so no recompilation is required.

***

### markAllDefinesAsDirty

> `readonly` **markAllDefinesAsDirty**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L83)

Helper function to mark defines as being dirty.

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`markAllDefinesAsDirty`](MaterialPluginBase.md#markalldefinesasdirty)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L31)

Defines the name of the plugin

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`name`](MaterialPluginBase.md#name)

***

### priority

> **priority**: `number` = `500`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L37)

Defines the priority of the plugin. Lower numbers run first.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`priority`](MaterialPluginBase.md#priority)

***

### registerForExtraEvents

> **registerForExtraEvents**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L49)

Indicates that this plugin should be notified for the extra events (HasRenderTargetTextures / FillRenderTargetTextures / HardBindForSubMesh)

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`registerForExtraEvents`](MaterialPluginBase.md#registerforextraevents)

***

### resolveIncludes

> **resolveIncludes**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L43)

Indicates that any #include directive in the plugin code must be replaced by the corresponding code.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`resolveIncludes`](MaterialPluginBase.md#resolveincludes)

## Methods

### addFallbacks()

> **addFallbacks**(`defines`, `fallbacks`, `currentRank`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:258](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L258)

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

> **bindForSubMesh**(`_uniformBuffer`, `_scene`, `_engine`, `subMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts:196](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts#L196)

Binds the plugin uniforms each frame.

#### Parameters

##### \_uniformBuffer

[`UniformBuffer`](UniformBuffer.md)

the uniform buffer (unused — we bind directly on the effect)

##### \_scene

[`Scene`](Scene.md)

the current scene

##### \_engine

[`AbstractEngine`](AbstractEngine.md)

the current engine

##### subMesh

[`SubMesh`](SubMesh.md)

the submesh being rendered

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`bindForSubMesh`](MaterialPluginBase.md#bindforsubmesh)

***

### collectDefines()

> **collectDefines**(`defines`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L183)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:300](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L300)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:164](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L164)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L237)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:243](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L243)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L249)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:274](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L274)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts#L66)

#### Returns

`string`

the class name

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getClassName`](MaterialPluginBase.md#getclassname)

***

### getCustomCode()

> **getCustomCode**(`shaderType`, `shaderLanguage?`): [`Nullable`](../type-aliases/Nullable.md)\<\{\[`pointName`: `string`\]: `string`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts#L104)

Returns custom shader code fragments to inject solid-color rendering.

#### Parameters

##### shaderType

`string`

"vertex" or "fragment"

##### shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md) = `ShaderLanguage.GLSL`

the shader language to use (default: GLSL)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\{\[`pointName`: `string`\]: `string`; \}\>

null or a map of injection point names to code strings

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getCustomCode`](MaterialPluginBase.md#getcustomcode)

***

### getSamplers()

> **getSamplers**(`_samplers`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:266](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L266)

Gets the samplers used by the plugin.

#### Parameters

##### \_samplers

`string`[]

list that the sampler names should be added to.

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`getSamplers`](MaterialPluginBase.md#getsamplers)

***

### getUniformBuffersNames()

> **getUniformBuffersNames**(`_ubos`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:280](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L280)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts:178](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts#L178)

Registers the plugin uniforms with the engine so that
the Effect can resolve their locations.

#### Returns

`object`

uniform descriptions

##### externalUniforms?

> `optional` **externalUniforms?**: `string`[]

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L149)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:229](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L229)

Gets a boolean indicating that current material needs to register RTT

#### Returns

`boolean`

true if this uses a render target otherwise false.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`hasRenderTargetTextures`](MaterialPluginBase.md#hasrendertargettextures)

***

### hasTexture()

> **hasTexture**(`_texture`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:221](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L221)

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

> **isCompatible**(`shaderLanguage`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts#L75)

Indicates this plugin supports both GLSL and WGSL.

#### Parameters

##### shaderLanguage

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

the shader language to check

#### Returns

`boolean`

true for GLSL and WGSL

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`isCompatible`](MaterialPluginBase.md#iscompatible)

***

### isReadyForSubMesh()

> **isReadyForSubMesh**(`_defines`, `_scene`, `_engine`, `_subMesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts#L93)

Always ready — no textures or async resources to wait on.

#### Parameters

##### \_defines

[`MaterialDefines`](MaterialDefines.md)

the defines

##### \_scene

[`Scene`](Scene.md)

the scene

##### \_engine

[`AbstractEngine`](AbstractEngine.md)

the engine

##### \_subMesh

[`SubMesh`](SubMesh.md)

the submesh

#### Returns

`boolean`

true

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`isReadyForSubMesh`](MaterialPluginBase.md#isreadyforsubmesh)

***

### parse()

> **parse**(`source`, `scene`, `rootUrl`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L318)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L214)

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

> **prepareDefinesBeforeAttributes**(`_defines`, `_scene`, `_mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L206)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:308](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L308)

Serializes this plugin configuration.

#### Returns

`any`

- An object with the serialized config.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`serialize`](MaterialPluginBase.md#serialize)

***

### updatePartColors()

> **updatePartColors**(`partColors`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingSolidColorMaterialPlugin.ts#L57)

Updates the part colors dynamically.

#### Parameters

##### partColors

[`Color3`](Color3.md)[]

A map from part index to the solid Color3 for that part.

#### Returns

`void`
