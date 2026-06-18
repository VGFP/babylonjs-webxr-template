[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GeometryBufferRenderer

# Class: GeometryBufferRenderer

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L101)

This renderer is helpful to fill one of the render target with a geometry buffer.

## Constructors

### Constructor

> **new GeometryBufferRenderer**(`scene`, `ratioOrDimensions?`, `depthFormat?`, `textureTypesAndFormats?`): `GeometryBufferRenderer`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:576](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L576)

Creates a new G Buffer for the scene

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene the buffer belongs to

##### ratioOrDimensions?

`number` \| \{ `height`: `number`; `width`: `number`; \}

How big is the buffer related to the main canvas (default: 1). You can also directly pass a width and height for the generated textures

##### depthFormat?

`number` = `Constants.TEXTUREFORMAT_DEPTH16`

Format of the depth texture (default: Constants.TEXTUREFORMAT_DEPTH16)

##### textureTypesAndFormats?

The types, formats and optional sampling modes of textures to create as render targets.
If not provided, all textures will be RGBA and float or half float, depending on the engine capabilities.

#### Returns

`GeometryBufferRenderer`

## Properties

### excludedSkinnedMeshesFromVelocity

> **excludedSkinnedMeshesFromVelocity**: [`AbstractMesh`](AbstractMesh.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:167](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L167)

Array used to store the ignored skinned meshes while computing velocity map (typically used by the motion blur post-process).
Avoids computing bones velocities and computes only mesh's velocity itself (position, rotation, scaling).

***

### generateIrradianceWithScatterMask

> **generateIrradianceWithScatterMask**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:528](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L528)

This will store a mask in the alpha channel of the irradiance texture to indicate which pixels have
scattering and should be taken into account when applying image-based lighting.

***

### generateNormalsInWorldSpace

> **generateNormalsInWorldSpace**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:175](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L175)

Gets or sets a boolean indicating if normals should be generated in world space (default: false, meaning normals are generated in view space)

***

### renderTransparentMeshes

> **renderTransparentMeshes**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L170)

Gets or sets a boolean indicating if transparent meshes should be rendered

***

### useSpecificClearForDepthTexture

> **useSpecificClearForDepthTexture**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:534](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L534)

If set to true (default: false), the depth texture will be cleared with the depth value corresponding to the far plane (1 in normal mode, 0 in reverse depth buffer mode)
If set to false, the depth texture is always cleared with 0.

***

### DEPTH\_TEXTURE\_TYPE

> `readonly` `static` **DEPTH\_TEXTURE\_TYPE**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L111)

Constant used to retrieve the depth texture index in the G-Buffer textures array
using getIndex(GeometryBufferRenderer.DEPTH_TEXTURE_INDEX)

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L106)

Force all the standard materials to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

***

### IRRADIANCE\_TEXTURE\_TYPE

> `readonly` `static` **IRRADIANCE\_TEXTURE\_TYPE**: `7` = `7`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:149](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L149)

Constant used to retrieve the irradiance texture index in the G-Buffer textures array
using getIndex(GeometryBufferRenderer.IRRADIANCE_TEXTURE_TYPE)

***

### NORMAL\_TEXTURE\_TYPE

> `readonly` `static` **NORMAL\_TEXTURE\_TYPE**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L116)

Constant used to retrieve the normal texture index in the G-Buffer textures array
using getIndex(GeometryBufferRenderer.NORMAL_TEXTURE_INDEX)

***

### POSITION\_TEXTURE\_TYPE

> `readonly` `static` **POSITION\_TEXTURE\_TYPE**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L121)

Constant used to retrieve the position texture index in the G-Buffer textures array
using getIndex(GeometryBufferRenderer.POSITION_TEXTURE_INDEX)

***

### REFLECTIVITY\_TEXTURE\_TYPE

> `readonly` `static` **REFLECTIVITY\_TEXTURE\_TYPE**: `4` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L131)

Constant used to retrieve the reflectivity texture index in the G-Buffer textures array
using the getIndex(GeometryBufferRenderer.REFLECTIVITY_TEXTURE_TYPE)

***

### SCREENSPACE\_DEPTH\_TEXTURE\_TYPE

> `readonly` `static` **SCREENSPACE\_DEPTH\_TEXTURE\_TYPE**: `5` = `5`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L137)

Constant used to retrieve the screen-space depth texture index in the G-Buffer textures array
using getIndex(GeometryBufferRenderer.SCREENSPACE_DEPTH_TEXTURE_TYPE)

***

### VELOCITY\_LINEAR\_TEXTURE\_TYPE

> `readonly` `static` **VELOCITY\_LINEAR\_TEXTURE\_TYPE**: `6` = `6`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L143)

Constant used to retrieve the linear velocity texture index in the G-Buffer textures array
using getIndex(GeometryBufferRenderer.VELOCITY_LINEAR_TEXTURE_TYPE)

***

### VELOCITY\_TEXTURE\_TYPE

> `readonly` `static` **VELOCITY\_TEXTURE\_TYPE**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L126)

Constant used to retrieve the velocity texture index in the G-Buffer textures array
using getIndex(GeometryBufferRenderer.VELOCITY_TEXTURE_INDEX)

## Accessors

### enableDepth

#### Get Signature

> **get** **enableDepth**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:367](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L367)

##### Returns

`boolean`

a boolean indicating if object's depths are enabled for the G buffer.

#### Set Signature

> **set** **enableDepth**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:374](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L374)

Sets whether or not object's depths are enabled for the G buffer.

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### enableIrradiance

#### Get Signature

> **get** **enableIrradiance**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:508](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L508)

Gets a boolean indicating if objects irradiance are enabled in the G buffer.

##### Returns

`boolean`

#### Set Signature

> **set** **enableIrradiance**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:515](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L515)

Sets whether or not objects irradiance are enabled for the G buffer.

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### enableNormal

#### Get Signature

> **get** **enableNormal**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:386](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L386)

##### Returns

`boolean`

a boolean indicating if object's normals are enabled for the G buffer.

#### Set Signature

> **set** **enableNormal**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:393](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L393)

Sets whether or not object's normals are enabled for the G buffer.

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### enablePosition

#### Get Signature

> **get** **enablePosition**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:405](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L405)

##### Returns

`boolean`

a boolean indicating if objects positions are enabled for the G buffer.

#### Set Signature

> **set** **enablePosition**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:412](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L412)

Sets whether or not objects positions are enabled for the G buffer.

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### enableReflectivity

#### Get Signature

> **get** **enableReflectivity**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:469](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L469)

Gets a boolean indicating if objects reflectivity are enabled in the G buffer.

##### Returns

`boolean`

#### Set Signature

> **set** **enableReflectivity**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:480](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L480)

Sets whether or not objects reflectivity are enabled for the G buffer.
For Metallic-Roughness workflow with ORM texture, we assume that ORM texture is defined according to the default layout:
pbr.useRoughnessFromMetallicTextureAlpha = false;
pbr.useRoughnessFromMetallicTextureGreen = true;
pbr.useMetallnessFromMetallicTextureBlue = true;

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### enableScreenspaceDepth

#### Get Signature

> **get** **enableScreenspaceDepth**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:492](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L492)

Sets whether or not objects screenspace depth are enabled for the G buffer.

##### Returns

`boolean`

#### Set Signature

> **set** **enableScreenspaceDepth**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:496](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L496)

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### enableVelocity

#### Get Signature

> **get** **enableVelocity**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:425](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L425)

##### Returns

`boolean`

a boolean indicating if objects velocities are enabled for the G buffer.

#### Set Signature

> **set** **enableVelocity**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:432](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L432)

Sets whether or not objects velocities are enabled for the G buffer.

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### enableVelocityLinear

#### Get Signature

> **get** **enableVelocityLinear**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:450](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L450)

##### Returns

`boolean`

a boolean indicating if object's linear velocities are enabled for the G buffer.

#### Set Signature

> **set** **enableVelocityLinear**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:457](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L457)

Sets whether or not object's linear velocities are enabled for the G buffer.

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L332)

Gets whether or not G buffer are supported by the running hardware.
This requires draw buffer supports

##### Returns

`boolean`

***

### normalsAreUnsigned

#### Get Signature

> **get** **normalsAreUnsigned**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L182)

Gets a boolean indicating if normals are encoded in the [0,1] range in the render target. If true, you should do `normal = normal_rt * 2.0 - 1.0` to get the right normal

##### Returns

`boolean`

***

### ratio

#### Get Signature

> **get** **ratio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:547](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L547)

Gets the ratio used by the buffer during its creation.
How big is the buffer related to the main canvas.

##### Returns

`number`

***

### renderList

#### Get Signature

> **get** **renderList**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:317](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L317)

Gets the render list (meshes to be rendered) used in the G buffer.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

#### Set Signature

> **set** **renderList**(`meshes`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:324](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L324)

Set the render list (meshes to be rendered) used in the G buffer.

##### Parameters

###### meshes

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

##### Returns

`void`

***

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:1050](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L1050)

Gets the number of samples used to render the buffer (anti aliasing).

##### Returns

`number`

#### Set Signature

> **set** **samples**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:1057](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L1057)

Sets the number of samples used to render the buffer (anti aliasing).

##### Parameters

###### value

`number`

##### Returns

`void`

***

### scene

#### Get Signature

> **get** **scene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:539](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L539)

Gets the scene associated with the buffer.

##### Returns

[`Scene`](Scene.md)

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:557](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L557)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:1064](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L1064)

Disposes the renderer and frees up associated resources.

#### Returns

`void`

***

### getGBuffer()

> **getGBuffer**(): [`MultiRenderTarget`](MultiRenderTarget.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:1043](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L1043)

Gets the current underlying G Buffer.

#### Returns

[`MultiRenderTarget`](MultiRenderTarget.md)

the buffer

***

### getTextureIndex()

> **getTextureIndex**(`textureType`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:341](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L341)

Returns the index of the given texture type in the G-Buffer textures array

#### Parameters

##### textureType

`number`

The texture type constant. For example GeometryBufferRenderer.POSITION_TEXTURE_INDEX

#### Returns

`number`

the index of the given texture type in the G-Buffer textures array

***

### isReady()

> **isReady**(`subMesh`, `useInstances`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:620](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L620)

Checks whether everything is ready to render a submesh to the G buffer.

#### Parameters

##### subMesh

[`SubMesh`](SubMesh.md)

the submesh to check readiness for

##### useInstances

`boolean`

is the mesh drawn using instance or not

#### Returns

`boolean`

true if ready otherwise false
