[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MaterialHelperGeometryRendering

# Class: MaterialHelperGeometryRendering

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts#L79)

Helper class to manage geometry rendering.

## Constructors

### Constructor

> **new MaterialHelperGeometryRendering**(): `MaterialHelperGeometryRendering`

#### Returns

`MaterialHelperGeometryRendering`

## Properties

### GeometryTextureDescriptions

> `readonly` `static` **GeometryTextureDescriptions**: `object`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts#L83)

Descriptions of the geometry textures.

#### clearType

> **clearType**: [`GeometryRenderingTextureClearType`](../enumerations/GeometryRenderingTextureClearType.md) = `GeometryRenderingTextureClearType.Zero`

#### define

> **define**: `string` = `"PREPASS_IRRADIANCE_LEGACY"`

#### defineIndex

> **defineIndex**: `string` = `"PREPASS_IRRADIANCE_LEGACY_INDEX"`

#### name

> **name**: `string` = `"IrradianceLegacy"`

#### type

> **type**: `number` = `Constants.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE`

## Methods

### AddUniformsAndSamplers()

> `static` **AddUniformsAndSamplers**(`uniforms`, `_samplers`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts:234](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts#L234)

Adds uniforms and samplers for geometry rendering.

#### Parameters

##### uniforms

`string`[]

The array of uniforms to add to.

##### \_samplers

`string`[]

The array of samplers to add to.

#### Returns

`void`

***

### Bind()

> `static` **Bind**(`renderPassId`, `effect`, `mesh`, `world`, `material`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts:305](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts#L305)

Binds geometry rendering data for a mesh.

#### Parameters

##### renderPassId

`number`

The render pass id the geometry rendering data is bound for.

##### effect

[`Effect`](Effect.md)

The effect to bind the geometry rendering data to.

##### mesh

[`Mesh`](Mesh.md)

The mesh to bind the geometry rendering data for.

##### world

[`Matrix`](Matrix.md)

The world matrix of the mesh.

##### material

[`Material`](Material.md)

The material of the mesh.

#### Returns

`void`

***

### CreateConfiguration()

> `static` **CreateConfiguration**(`renderPassId`): [`GeometryRenderingConfiguration`](../type-aliases/GeometryRenderingConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts#L198)

Creates a new geometry rendering configuration.

#### Parameters

##### renderPassId

`number`

Render pass id the configuration is created for.

#### Returns

[`GeometryRenderingConfiguration`](../type-aliases/GeometryRenderingConfiguration.md)

The created configuration.

***

### DeleteConfiguration()

> `static` **DeleteConfiguration**(`renderPassId`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts#L216)

Deletes a geometry rendering configuration.

#### Parameters

##### renderPassId

`number`

The render pass id of the configuration to delete.

#### Returns

`void`

***

### GetConfiguration()

> `static` **GetConfiguration**(`renderPassId`): [`GeometryRenderingConfiguration`](../type-aliases/GeometryRenderingConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts:225](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts#L225)

Gets a geometry rendering configuration.

#### Parameters

##### renderPassId

`number`

The render pass id of the configuration to get.

#### Returns

[`GeometryRenderingConfiguration`](../type-aliases/GeometryRenderingConfiguration.md)

The configuration.

***

### MarkAsDirty()

> `static` **MarkAsDirty**(`renderPassId`, `meshes`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts:243](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts#L243)

Marks a list of meshes as dirty for geometry rendering.

#### Parameters

##### renderPassId

`number`

The render pass id the meshes are marked as dirty for.

##### meshes

[`AbstractMesh`](AbstractMesh.md)[]

The list of meshes to mark as dirty.

#### Returns

`void`

***

### PrepareDefines()

> `static` **PrepareDefines**(`renderPassId`, `mesh`, `defines`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts:261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts#L261)

Prepares defines for geometry rendering.

#### Parameters

##### renderPassId

`number`

The render pass id the defines are prepared for.

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh the defines are prepared for.

##### defines

[`MaterialDefines`](MaterialDefines.md)

The defines to update according to the geometry rendering configuration.

#### Returns

`void`
