[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MeshDebugPluginMaterial

# Class: MeshDebugPluginMaterial

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:435](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L435)

Plugin that implements various mesh debug visualizations,
List of available visualizations can be found in MeshDebugMode enum.

## Extends

- [`MaterialPluginBase`](MaterialPluginBase.md)

## Constructors

### Constructor

> **new MeshDebugPluginMaterial**(`material`, `options?`): `MeshDebugPluginMaterial`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:583](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L583)

Creates a new MeshDebugPluginMaterial

#### Parameters

##### material

[`StandardMaterial`](StandardMaterial.md) \| [`PBRBaseMaterial`](PBRBaseMaterial.md)

Material to attach the mesh debug plugin to

##### options?

[`MeshDebugOptions`](../interfaces/MeshDebugOptions.md) = `{}`

Options for the mesh debug plugin

#### Returns

`MeshDebugPluginMaterial`

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

### markAllDefinesAsDirty

> `readonly` **markAllDefinesAsDirty**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L85)

Helper function to mark defines as being dirty.

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`markAllDefinesAsDirty`](MaterialPluginBase.md#markalldefinesasdirty)

***

### mode

> **mode**: [`MeshDebugMode`](../enumerations/MeshDebugMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:469](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L469)

The mesh debug visualization.
Defaults to NONE.

***

### multiply

> **multiply**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:478](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L478)

Whether the mesh debug visualization should multiply with color underneath.
Defaults to true.

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

### shadedDiffuseColor

> **shadedDiffuseColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:485](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L485)

Diffuse color used to shade the mesh.
Defaults to (1.0, 1.0, 1.0).

***

### shadedSpecularColor

> **shadedSpecularColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:492](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L492)

Specular color used to shade the mesh.
Defaults to (0.8, 0.8, 0.8).

***

### shadedSpecularPower

> **shadedSpecularPower**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:499](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L499)

Specular power used to shade the mesh.
Defaults to 10.

***

### uvPrimaryColor

> **uvPrimaryColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:548](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L548)

1st color of checkerboard grid in UV1 or UV2 modes.
Defaults to (1.0, 1.0, 1.0).

***

### uvScale

> **uvScale**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:541](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L541)

Size of tiles in UV1 or UV2 modes.
Defaults to 20.

***

### uvSecondaryColor

> **uvSecondaryColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:555](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L555)

2nd color of checkerboard grid in UV1 or UV2 modes.
Defaults to (0.5, 0.5, 0.5).

***

### vertexColor

> **vertexColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:527](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L527)

Color of vertices in TRIANGLES_VERTICES and VERTICES mode.
Defaults to (0.0, 0.0, 0.0).

***

### vertexRadius

> **vertexRadius**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:534](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L534)

Radius of dots drawn over vertices in TRIANGLE_VERTICES and VERTICES mode.
Defaults to 1.2.

***

### wireframeThickness

> **wireframeThickness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:506](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L506)

Width of edge lines in TRIANGLES and TRIANGLE_VERTICES modes.
Defaults to 0.7.

***

### wireframeTrianglesColor

> **wireframeTrianglesColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:513](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L513)

Color of edge lines in TRIANGLES mode.
Defaults to (0.0, 0.0, 0.0).

***

### wireframeVerticesColor

> **wireframeVerticesColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:520](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L520)

Color of edge lines in TRIANGLES_VERTICES modes.
Defaults to (0.8, 0.8, 0.8).

***

### MaterialColors

> `static` **MaterialColors**: [`Color3`](Color3.md)[] = `defaultMaterialColors`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:446](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L446)

Color palette used for MATERIALIDS mode.
Defaults to `defaultMaterialColors`

## Accessors

### isEnabled

#### Get Signature

> **get** **isEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:618](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L618)

Gets whether the mesh debug plugin is enabled in the material.

##### Returns

`boolean`

#### Set Signature

> **set** **isEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:625](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L625)

Sets whether the mesh debug plugin is enabled in the material.

##### Parameters

###### value

`boolean`

enabled

##### Returns

`void`

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:694](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L694)

Bind the uniform buffer

#### Parameters

##### uniformBuffer

[`UniformBuffer`](UniformBuffer.md)

Uniform buffer

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

> **getAttributes**(`attributes`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:664](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L664)

Get the shader attributes

#### Parameters

##### attributes

`string`[]

Array of attributes

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getAttributes`](MaterialPluginBase.md#getattributes)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:611](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L611)

Get the class name

#### Returns

`string`

Class name

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getClassName`](MaterialPluginBase.md#getclassname)

***

### getCustomCode()

> **getCustomCode**(`shaderType`, `shaderLanguage?`): [`Nullable`](../type-aliases/Nullable.md)\<\{\[`pointName`: `string`\]: `string`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:715](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L715)

Get shader code

#### Parameters

##### shaderType

`string`

"vertex" or "fragment"

##### shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md) = `ShaderLanguage.GLSL`

The shader language to use.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\{\[`pointName`: `string`\]: `string`; \}\>

Shader code

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getCustomCode`](MaterialPluginBase.md#getcustomcode)

***

### getSamplers()

> **getSamplers**(`_samplers`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.pure.ts:268](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginBase.pure.ts#L268)

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

> **getUniforms**(`shaderLanguage?`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:673](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L673)

Get the shader uniforms

#### Parameters

##### shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md) = `ShaderLanguage.GLSL`

The shader language to use.

#### Returns

`object`

Uniforms

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

> **isCompatible**(`shaderLanguage`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:568](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L568)

Gets a boolean indicating that the plugin is compatible with a given shader language.

#### Parameters

##### shaderLanguage

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

The shader language to use.

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

> **prepareDefines**(`defines`, `scene`, `mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:644](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L644)

Prepare the defines

#### Parameters

##### defines

`MeshDebugDefines`

Mesh debug defines

##### scene

[`Scene`](Scene.md)

Scene

##### mesh

[`AbstractMesh`](AbstractMesh.md)

Mesh associated with material

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

***

### PrepareMeshForTrianglesAndVerticesMode()

> `static` **PrepareMeshForTrianglesAndVerticesMode**(`mesh`, `returnRollback?`): () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:756](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L756)

Renders triangles in a mesh 3 times by tripling the indices in the index buffer.
Used to prepare a mesh to be rendered in `TRIANGLES`, `VERTICES`, or `TRIANGLES_VERTICES` modes.
NOTE: This is a destructive operation. The mesh's index buffer and vertex buffers are modified, and a new vertex buffer is allocated.
If you'd like the ability to revert these changes, toggle the optional `returnRollback` flag.

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

the mesh to target

##### returnRollback?

`boolean` = `false`

whether or not to return a function that reverts mesh to its initial state. Default: false.

#### Returns

a rollback function if `returnRollback` is true, otherwise an empty function.

() => `void`

***

### Reset()

> `static` **Reset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts:742](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/meshDebugPluginMaterial.pure.ts#L742)

Resets static variables of the plugin to their original state

#### Returns

`void`
