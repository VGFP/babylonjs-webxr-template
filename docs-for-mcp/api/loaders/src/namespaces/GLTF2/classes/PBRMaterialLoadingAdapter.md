[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / PBRMaterialLoadingAdapter

# Class: PBRMaterialLoadingAdapter

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L13)

Material Loading Adapter for PBR materials that provides a unified OpenPBR-like interface.

## Implements

- `IMaterialLoadingAdapter`

## Constructors

### Constructor

> **new PBRMaterialLoadingAdapter**(`material`): `PBRMaterialLoadingAdapter`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L20)

Creates a new instance of the PBRMaterialLoadingAdapter.

#### Parameters

##### material

[`Material`](../../../../../core/src/classes/Material.md)

The PBR material to adapt.

#### Returns

`PBRMaterialLoadingAdapter`

## Accessors

### alphaCutOff

#### Get Signature

> **get** **alphaCutOff**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L98)

Gets the alpha cutoff value.

##### Returns

`number`

The alpha cutoff threshold (0-1)

#### Set Signature

> **set** **alphaCutOff**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L90)

Sets the alpha cutoff value for alpha testing.

##### Parameters

###### value

`number`

The alpha cutoff threshold (0-1)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.alphaCutOff`

***

### ambientOcclusionTexture

#### Get Signature

> **get** **ambientOcclusionTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:510](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L510)

Gets the ambient occlusion texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The ambient occlusion texture or null

#### Set Signature

> **set** **ambientOcclusionTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:499](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L499)

Sets the ambient occlusion texture (mapped to PBR ambientTexture).
Automatically enables grayscale mode when set.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The ambient occlusion texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.ambientOcclusionTexture`

***

### ambientOcclusionTextureStrength

#### Get Signature

> **get** **ambientOcclusionTextureStrength**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:526](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L526)

Gets the ambient occlusion texture strength.

##### Returns

`number`

The strength value, defaults to 1.0 if not set

#### Set Signature

> **set** **ambientOcclusionTextureStrength**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:518](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L518)

Sets the ambient occlusion texture strength.

##### Parameters

###### value

`number`

The strength value (typically 0-1)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.ambientOcclusionTextureStrength`

***

### backFaceCulling

#### Get Signature

> **get** **backFaceCulling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L62)

Gets whether back face culling is enabled.

##### Returns

`boolean`

True if back face culling is enabled

#### Set Signature

> **set** **backFaceCulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L54)

Sets whether back face culling is enabled.

##### Parameters

###### value

`boolean`

True to enable back face culling

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.backFaceCulling`

***

### baseColor

#### Get Signature

> **get** **baseColor**(): [`Color3`](../../../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L149)

Gets the base color of the material.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The base color as a Color3

#### Set Signature

> **set** **baseColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L141)

Sets the base color of the material (mapped to PBR albedoColor).

##### Parameters

###### value

[`Color3`](../../../../../core/src/classes/Color3.md)

The base color as a Color3

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.baseColor`

***

### baseColorTexture

#### Get Signature

> **get** **baseColorTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L165)

Gets the base color texture of the material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The base color texture or null

#### Set Signature

> **set** **baseColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L157)

Sets the base color texture of the material (mapped to PBR albedoTexture).

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The base color texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.baseColorTexture`

***

### baseDiffuseRoughness

#### Get Signature

> **get** **baseDiffuseRoughness**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:184](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L184)

Gets the base diffuse roughness of the material.

##### Returns

`number`

The diffuse roughness value (0-1), defaults to 0 if not set

#### Set Signature

> **set** **baseDiffuseRoughness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L173)

Sets the base diffuse roughness of the material.

##### Parameters

###### value

`number`

The diffuse roughness value (0-1)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.baseDiffuseRoughness`

***

### baseDiffuseRoughnessTexture

#### Get Signature

> **get** **baseDiffuseRoughnessTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L200)

Gets the base diffuse roughness texture of the material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The diffuse roughness texture or null

#### Set Signature

> **set** **baseDiffuseRoughnessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:192](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L192)

Sets the base diffuse roughness texture of the material.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The diffuse roughness texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.baseDiffuseRoughnessTexture`

***

### baseMetalness

#### Get Signature

> **get** **baseMetalness**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L216)

Gets the base metalness value of the material.

##### Returns

`number`

The metalness value (0-1), defaults to 1 if not set

#### Set Signature

> **set** **baseMetalness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L208)

Sets the base metalness value of the material (mapped to PBR metallic).

##### Parameters

###### value

`number`

The metalness value (0-1)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.baseMetalness`

***

### baseMetalnessTexture

#### Get Signature

> **get** **baseMetalnessTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L232)

Gets the base metalness texture of the material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The metalness texture or null

#### Set Signature

> **set** **baseMetalnessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L224)

Sets the base metalness texture of the material (mapped to PBR metallicTexture).

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The metalness texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.baseMetalnessTexture`

***

### coatColor

#### Set Signature

> **set** **coatColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:584](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L584)

Sets the coat color (mapped to PBR clearCoat.tintColor).

##### Parameters

###### value

[`Color3`](../../../../../core/src/classes/Color3.md)

The coat tint color as a Color3

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.coatColor`

***

### coatColorTexture

#### Set Signature

> **set** **coatColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:593](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L593)

Sets the coat color texture (mapped to PBR clearCoat.tintTexture).

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat color texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.coatColorTexture`

***

### coatDarkening

#### Set Signature

> **set** **coatDarkening**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:646](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L646)

Sets the coat darkening value.
Note: PBR doesn't have a direct coat darkening property, so this is a no-op.

##### Parameters

###### value

`number`

The coat darkening value (ignored for PBR)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.coatDarkening`

***

### coatDarkeningTexture

#### Set Signature

> **set** **coatDarkeningTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:654](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L654)

Sets the coat darkening texture

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat darkening texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.coatDarkeningTexture`

***

### coatIor

#### Set Signature

> **set** **coatIor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:637](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L637)

Sets the coat index of refraction (IOR).

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.coatIor`

***

### coatRoughness

#### Get Signature

> **get** **coatRoughness**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:611](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L611)

Gets the coat roughness.

##### Returns

`number`

The coat roughness value, defaults to 0 if not set

#### Set Signature

> **set** **coatRoughness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:602](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L602)

Sets the coat roughness (mapped to PBR clearCoat.roughness).
Automatically enables clear coat.

##### Parameters

###### value

`number`

The coat roughness value (0-1)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.coatRoughness`

***

### coatRoughnessAnisotropy

#### Get Signature

> **get** **coatRoughnessAnisotropy**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:673](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L673)

Gets the coat roughness anisotropy.
Note: PBR clearCoat doesn't support anisotropy yet, so this returns 0.

##### Returns

`number`

Currently returns 0 as clearCoat anisotropy is not yet available

#### Set Signature

> **set** **coatRoughnessAnisotropy**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:663](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L663)

Sets the coat roughness anisotropy.
Note: PBR clearCoat doesn't support anisotropy yet, so this is a placeholder.

##### Parameters

###### value

`number`

The coat anisotropy intensity value (currently ignored)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.coatRoughnessAnisotropy`

***

### coatRoughnessTexture

#### Get Signature

> **get** **coatRoughnessTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:630](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L630)

Gets the coat roughness texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat roughness texture or null

#### Set Signature

> **set** **coatRoughnessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:620](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L620)

Sets the coat roughness texture (mapped to PBR clearCoat.textureRoughness).
Automatically enables clear coat and disables using roughness from main texture.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat roughness texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.coatRoughnessTexture`

***

### coatWeight

#### Get Signature

> **get** **coatWeight**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:558](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L558)

Gets the coat weight.

##### Returns

`number`

The coat weight value

#### Set Signature

> **set** **coatWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:549](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L549)

Sets the coat weight (mapped to PBR clearCoat.intensity).
Automatically enables clear coat.

##### Parameters

###### value

`number`

The coat weight value (0-1)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.coatWeight`

***

### coatWeightTexture

#### Get Signature

> **get** **coatWeightTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:576](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L576)

Gets the coat weight texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat weight texture or null

#### Set Signature

> **set** **coatWeightTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:567](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L567)

Sets the coat weight texture (mapped to PBR clearCoat.texture).
Automatically enables clear coat.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat weight texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.coatWeightTexture`

***

### diffuseTransmissionTint

#### Get Signature

> **get** **diffuseTransmissionTint**(): [`Color3`](../../../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:998](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L998)

Gets the subsurface constant tint (when using subsurface scattering)

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The subsurface constant tint as a Color3

#### Set Signature

> **set** **diffuseTransmissionTint**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:990](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L990)

Sets the surface tint of the material (when using subsurface scattering)

##### Parameters

###### value

[`Color3`](../../../../../core/src/classes/Color3.md)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.diffuseTransmissionTint`

***

### diffuseTransmissionTintTexture

#### Set Signature

> **set** **diffuseTransmissionTintTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1006](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1006)

Sets the subsurface constant tint texture (when using subsurface scattering)

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The subsurface constant tint texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.diffuseTransmissionTintTexture`

***

### emissionColor

#### Get Signature

> **get** **emissionColor**(): [`Color3`](../../../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:454](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L454)

Gets the emission color.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The emission color as a Color3

#### Set Signature

> **set** **emissionColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:446](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L446)

Sets the emission color (mapped to PBR emissiveColor).

##### Parameters

###### value

[`Color3`](../../../../../core/src/classes/Color3.md)

The emission color as a Color3

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.emissionColor`

***

### emissionColorTexture

#### Get Signature

> **get** **emissionColorTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:486](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L486)

Gets the emission color texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The emission texture or null

#### Set Signature

> **set** **emissionColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:478](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L478)

Sets the emission color texture (mapped to PBR emissiveTexture).

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The emission texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.emissionColorTexture`

***

### emissionLuminance

#### Get Signature

> **get** **emissionLuminance**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:470](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L470)

Gets the emission luminance/intensity.

##### Returns

`number`

The emission intensity value

#### Set Signature

> **set** **emissionLuminance**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:462](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L462)

Sets the emission luminance/intensity (mapped to PBR emissiveIntensity).

##### Parameters

###### value

`number`

The emission intensity value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.emissionLuminance`

***

### fuzzColor

#### Set Signature

> **set** **fuzzColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1106)

Sets the sheen color (mapped to PBR sheen.color).
Automatically enables sheen.

##### Parameters

###### value

[`Color3`](../../../../../core/src/classes/Color3.md)

The sheen color as a Color3

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.fuzzColor`

***

### fuzzColorTexture

#### Set Signature

> **set** **fuzzColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1116)

Sets the sheen color texture (mapped to PBR sheen.texture).
Automatically enables sheen.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The sheen color texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.fuzzColorTexture`

***

### fuzzRoughness

#### Set Signature

> **set** **fuzzRoughness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1125)

Sets the sheen roughness (mapped to PBR sheen.roughness).
Automatically enables sheen.

##### Parameters

###### value

`number`

The sheen roughness value (0-1)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.fuzzRoughness`

***

### fuzzRoughnessTexture

#### Set Signature

> **set** **fuzzRoughnessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1135)

Sets the sheen roughness texture (mapped to PBR sheen.textureRoughness).
Automatically enables sheen.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The sheen roughness texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.fuzzRoughnessTexture`

***

### fuzzWeight

#### Set Signature

> **set** **fuzzWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1082](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1082)

Sets the sheen weight (mapped to PBR sheen.intensity).
Automatically enables sheen.

##### Parameters

###### value

`number`

The sheen weight value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.fuzzWeight`

***

### fuzzWeightTexture

#### Set Signature

> **set** **fuzzWeightTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1091](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1091)

Sets the fuzz weight texture.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The fuzz weight texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.fuzzWeightTexture`

***

### geometryCoatNormalTexture

#### Get Signature

> **get** **geometryCoatNormalTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1327](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1327)

Gets the geometry coat normal texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat normal texture or null

#### Set Signature

> **set** **geometryCoatNormalTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1318)

Sets the geometry coat normal texture (mapped to PBR clearCoat.bumpTexture).
Automatically enables clear coat.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat normal texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.geometryCoatNormalTexture`

***

### geometryCoatNormalTextureScale

#### Set Signature

> **set** **geometryCoatNormalTextureScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1335](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1335)

Sets the geometry coat normal texture scale.

##### Parameters

###### value

`number`

The scale value for the coat normal texture

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.geometryCoatNormalTextureScale`

***

### geometryCoatTangentAngle

#### Set Signature

> **set** **geometryCoatTangentAngle**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:684](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L684)

Sets the coat tangent angle for anisotropy.
Note: PBR clearCoat doesn't support anisotropy yet, so this is a placeholder.

##### Parameters

###### value

`number`

The coat anisotropy rotation angle in radians (currently ignored)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.geometryCoatTangentAngle`

***

### geometryCoatTangentTexture

#### Get Signature

> **get** **geometryCoatTangentTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:704](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L704)

Gets the coat tangent texture for anisotropy.
Note: PBR clearCoat doesn't support anisotropy textures yet, so this returns null.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Currently returns null as clearCoat anisotropy is not yet available

#### Set Signature

> **set** **geometryCoatTangentTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:694](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L694)

Sets the coat tangent texture for anisotropy.
Note: PBR clearCoat doesn't support anisotropy textures yet, so this is a placeholder.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat anisotropy texture (currently ignored)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.geometryCoatTangentTexture`

***

### geometryNormalTexture

#### Get Signature

> **get** **geometryNormalTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1299](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1299)

Gets the geometry normal texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The normal texture or null

#### Set Signature

> **set** **geometryNormalTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1290](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1290)

Sets the geometry normal texture (mapped to PBR bumpTexture).
Also forces irradiance computation in fragment shader for better lighting.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The normal texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.geometryNormalTexture`

***

### geometryOpacity

#### Get Signature

> **get** **geometryOpacity**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1281](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1281)

Gets the geometry opacity.

##### Returns

`number`

The opacity value (0-1)

#### Set Signature

> **set** **geometryOpacity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1273](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1273)

Sets the geometry opacity (mapped to PBR alpha).

##### Parameters

###### value

`number`

The opacity value (0-1)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.geometryOpacity`

***

### geometryTangentAngle

#### Set Signature

> **set** **geometryTangentAngle**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1167)

Sets the anisotropy rotation (mapped to PBR anisotropy.angle).
Automatically enables anisotropy.

##### Parameters

###### value

`number`

The anisotropy rotation angle in radians

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.geometryTangentAngle`

***

### geometryTangentTexture

#### Get Signature

> **get** **geometryTangentTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1186)

Gets the geometry tangent texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The anisotropy texture or null

#### Set Signature

> **set** **geometryTangentTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1177)

Sets the geometry tangent texture (mapped to PBR anisotropy.texture).
Automatically enables anisotropy.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The anisotropy texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.geometryTangentTexture`

***

### geometryThinWalled

#### Get Signature

> **get** **geometryThinWalled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:887](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L887)

Gets whether the material is thin-walled (i.e. non-volumetric) or not.

##### Returns

`boolean`

#### Set Signature

> **set** **geometryThinWalled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:882](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L882)

Sets whether the material is thin-walled (i.e. non-volumetric) or not.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.geometryThinWalled`

***

### glossiness

#### Get Signature

> **get** **glossiness**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:426](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L426)

Sets/gets the glossiness (inverted roughness)
ONLY used for specular/glossiness workflow; has no effect when metallic/roughness workflow is active

##### Returns

`number`

#### Set Signature

> **set** **glossiness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:434](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L434)

Sets/gets the glossiness (inverted roughness)
ONLY used for specular/glossiness workflow; has no effect when metallic/roughness workflow is active

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.glossiness`

***

### isUnlit

#### Get Signature

> **get** **isUnlit**(): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L35)

Whether the material should be treated as unlit

##### Returns

`boolean`

#### Set Signature

> **set** **isUnlit**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L42)

Sets whether the material should be treated as unlit

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.isUnlit`

***

### material

#### Get Signature

> **get** **material**(): [`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L28)

Gets the underlying material

##### Returns

[`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md)

#### Implementation of

`IMaterialLoadingAdapter.material`

***

### refractionBackgroundTexture

#### Get Signature

> **get** **refractionBackgroundTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:845](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L845)

Gets the refraction background texture

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The refraction background texture or null

#### Set Signature

> **set** **refractionBackgroundTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:853](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L853)

Sets the refraction background texture

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The refraction background texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.refractionBackgroundTexture`

***

### specularColor

#### Get Signature

> **get** **specularColor**(): [`Color3`](../../../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:334](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L334)

Gets the specular color.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The specular color as a Color3

#### Set Signature

> **set** **specularColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:322](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L322)

Sets the specular color (mapped to PBR metallicReflectanceColor).

##### Parameters

###### value

[`Color3`](../../../../../core/src/classes/Color3.md)

The specular color as a Color3

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.specularColor`

***

### specularColorTexture

#### Get Signature

> **get** **specularColorTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:361](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L361)

Gets the specular color texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The specular color texture or null

#### Set Signature

> **set** **specularColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:346](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L346)

Sets the specular color texture (mapped to PBR reflectanceTexture).

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The specular color texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.specularColorTexture`

***

### specularIor

#### Get Signature

> **get** **specularIor**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:418](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L418)

Gets the specular index of refraction.

##### Returns

`number`

The IOR value

#### Set Signature

> **set** **specularIor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:410](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L410)

Sets the specular index of refraction (mapped to PBR indexOfRefraction).

##### Parameters

###### value

`number`

The IOR value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.specularIor`

***

### specularRoughness

#### Get Signature

> **get** **specularRoughness**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:381](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L381)

Gets the specular roughness.

##### Returns

`number`

The roughness value (0-1), defaults to 1 if not set

#### Set Signature

> **set** **specularRoughness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L373)

Sets the specular roughness (mapped to PBR roughness).

##### Parameters

###### value

`number`

The roughness value (0-1)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.specularRoughness`

***

### specularRoughnessAnisotropy

#### Get Signature

> **get** **specularRoughnessAnisotropy**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1158)

Gets the specular roughness anisotropy.

##### Returns

`number`

The anisotropy intensity value

#### Set Signature

> **set** **specularRoughnessAnisotropy**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1149)

Sets the specular roughness anisotropy (mapped to PBR anisotropy.intensity).
Automatically enables anisotropy.

##### Parameters

###### value

`number`

The anisotropy intensity value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.specularRoughnessAnisotropy`

***

### specularRoughnessTexture

#### Get Signature

> **get** **specularRoughnessTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:402](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L402)

Gets the specular roughness texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The roughness texture (same as metallic texture for PBR) or null

#### Set Signature

> **set** **specularRoughnessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:391](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L391)

Sets the specular roughness texture.
Note: PBR uses the same texture for both metallic and roughness,
so this only sets the texture if no base metalness texture exists.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The roughness texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.specularRoughnessTexture`

***

### specularWeight

#### Get Signature

> **get** **specularWeight**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:291](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L291)

Gets the specular weight.

##### Returns

`number`

The specular weight value, defaults to 1 if not set

#### Set Signature

> **set** **specularWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:283](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L283)

Sets the specular weight (mapped to PBR metallicF0Factor).

##### Parameters

###### value

`number`

The specular weight value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.specularWeight`

***

### specularWeightTexture

#### Get Signature

> **get** **specularWeightTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:314](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L314)

Gets the specular weight texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The specular weight texture or null

#### Set Signature

> **set** **specularWeightTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:300](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L300)

Sets the specular weight texture (mapped to PBR metallicReflectanceTexture).
Configures the material to use only metalness from this texture when set.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The specular weight texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.specularWeightTexture`

***

### subsurfaceColor

#### Set Signature

> **set** **subsurfaceColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:962](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L962)

Sets the subsurface color.

##### Parameters

###### value

[`Color3`](../../../../../core/src/classes/Color3.md)

The subsurface tint color as a Color3

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.subsurfaceColor`

***

### subsurfaceColorTexture

#### Set Signature

> **set** **subsurfaceColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:983](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L983)

Sets the subsurface color texture.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The subsurface tint texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.subsurfaceColorTexture`

***

### subsurfaceRadius

#### Get Signature

> **get** **subsurfaceRadius**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1015](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1015)

Gets the subsurface radius (used for subsurface scattering)
subsurfaceRadiusScale * subsurfaceRadius gives the mean free path per color channel.

##### Returns

`number`

The subsurface radius as a Color3

#### Set Signature

> **set** **subsurfaceRadius**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1024](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1024)

Sets the subsurface radius (used for subsurface scattering)
subsurfaceRadiusScale * subsurfaceRadius gives the mean free path per color channel.

##### Parameters

###### value

`number`

The subsurface radius as a number

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.subsurfaceRadius`

***

### subsurfaceRadiusScale

#### Get Signature

> **get** **subsurfaceRadiusScale**(): [`Color3`](../../../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1033](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1033)

Gets the subsurface radius scale (used for subsurface scattering)
subsurfaceRadiusScale * subsurfaceRadius gives the mean free path per color channel.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The subsurface radius scale as a Color3

#### Set Signature

> **set** **subsurfaceRadiusScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1042](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1042)

Sets the subsurface radius scale (used for subsurface scattering)
subsurfaceRadiusScale * subsurfaceRadius gives the mean free path per color channel.

##### Parameters

###### value

[`Color3`](../../../../../core/src/classes/Color3.md)

The subsurface radius scale as a Color3

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.subsurfaceRadiusScale`

***

### subsurfaceScatterAnisotropy

#### Set Signature

> **set** **subsurfaceScatterAnisotropy**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1051](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1051)

Sets the subsurface scattering anisotropy.
Note: PBRMaterial does not have a direct equivalent, so this is a no-op.

##### Parameters

###### value

`number`

The anisotropy intensity value (ignored for PBR)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.subsurfaceScatterAnisotropy`

***

### subsurfaceWeight

#### Get Signature

> **get** **subsurfaceWeight**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:947](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L947)

Gets the subsurface weight

##### Returns

`number`

The subsurface weight value

#### Set Signature

> **set** **subsurfaceWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:938](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L938)

Sets the subsurface weight

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.subsurfaceWeight`

***

### subsurfaceWeightTexture

#### Set Signature

> **set** **subsurfaceWeightTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:954](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L954)

Sets the subsurface weight texture

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.subsurfaceWeightTexture`

***

### thinFilmIor

#### Set Signature

> **set** **thinFilmIor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1217)

Sets the iridescence IOR (mapped to PBR iridescence.indexOfRefraction).

##### Parameters

###### value

`number`

The iridescence IOR value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.thinFilmIor`

***

### thinFilmThicknessMaximum

#### Set Signature

> **set** **thinFilmThicknessMaximum**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1233](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1233)

Sets the iridescence thickness maximum (mapped to PBR iridescence.maximumThickness).

##### Parameters

###### value

`number`

The maximum thickness value in nanometers

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.thinFilmThicknessMaximum`

***

### thinFilmThicknessMinimum

#### Set Signature

> **set** **thinFilmThicknessMinimum**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1225](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1225)

Sets the iridescence thickness minimum (mapped to PBR iridescence.minimumThickness).

##### Parameters

###### value

`number`

The minimum thickness value in nanometers

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.thinFilmThicknessMinimum`

***

### thinFilmThicknessTexture

#### Set Signature

> **set** **thinFilmThicknessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1249)

Sets the iridescence thickness texture (mapped to PBR iridescence.thicknessTexture).

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The iridescence thickness texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.thinFilmThicknessTexture`

***

### thinFilmWeight

#### Set Signature

> **set** **thinFilmWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1208)

Sets the iridescence weight (mapped to PBR iridescence.intensity).
Automatically enables iridescence.

##### Parameters

###### value

`number`

The iridescence intensity value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.thinFilmWeight`

***

### thinFilmWeightTexture

#### Set Signature

> **set** **thinFilmWeightTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1241](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1241)

Sets the thin film weight texture (mapped to PBR iridescence.texture).

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The thin film weight texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.thinFilmWeightTexture`

***

### transmissionColor

#### Get Signature

> **get** **transmissionColor**(): [`Color3`](../../../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:782](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L782)

Sets the attenuation color (mapped to PBR subSurface.tintColor).

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The attenuation color as a Color3

#### Set Signature

> **set** **transmissionColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:770](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L770)

Sets the attenuation color (mapped to PBR subSurface.tintColor).

##### Parameters

###### value

[`Color3`](../../../../../core/src/classes/Color3.md)

The attenuation color as a Color3

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.transmissionColor`

***

### transmissionDepth

#### Get Signature

> **get** **transmissionDepth**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:759](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L759)

Gets the attenuation distance for volume.

##### Returns

`number`

The attenuation distance value

#### Set Signature

> **set** **transmissionDepth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:747](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L747)

Sets the attenuation distance for volume.

##### Parameters

###### value

`number`

The attenuation distance value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.transmissionDepth`

***

### transmissionDispersionAbbeNumber

#### Set Signature

> **set** **transmissionDispersionAbbeNumber**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:823](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L823)

Sets the transmission dispersion Abbe number.

##### Parameters

###### value

`number`

The Abbe number value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.transmissionDispersionAbbeNumber`

***

### transmissionDispersionScale

#### Set Signature

> **set** **transmissionDispersionScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:831](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L831)

Sets the transmission dispersion scale.

##### Parameters

###### value

`number`

The dispersion scale value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.transmissionDispersionScale`

***

### transmissionScatter

#### Get Signature

> **get** **transmissionScatter**(): [`Color3`](../../../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:804](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L804)

Sets the transmission scatter coefficient.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The scatter coefficient as a Color3

#### Set Signature

> **set** **transmissionScatter**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:795](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L795)

Sets the transmission scatter coefficient.

##### Parameters

###### value

[`Color3`](../../../../../core/src/classes/Color3.md)

The scatter coefficient as a Color3

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.transmissionScatter`

***

### transmissionScatterAnisotropy

#### Set Signature

> **set** **transmissionScatterAnisotropy**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:815](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L815)

Sets the transmission scattering anisotropy.

##### Parameters

###### value

`number`

The anisotropy intensity value (-1 to 1)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.transmissionScatterAnisotropy`

***

### transmissionScatterTexture

#### Set Signature

> **set** **transmissionScatterTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:809](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L809)

Sets the transmission scatter texture

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.transmissionScatterTexture`

***

### transmissionWeight

#### Get Signature

> **get** **transmissionWeight**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:728](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L728)

Gets the transmission weight.

##### Returns

`number`

The transmission weight value

#### Set Signature

> **set** **transmissionWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:719](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L719)

Sets the transmission weight (mapped to PBR subSurface.refractionIntensity).
Enables refraction when value \> 0.

##### Parameters

###### value

`number`

The transmission weight value (0-1)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.transmissionWeight`

***

### transmissionWeightTexture

#### Set Signature

> **set** **transmissionWeightTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:737](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L737)

Sets the transmission weight texture (mapped to PBR subSurface.refractionIntensityTexture).
Automatically enables refraction and glTF-style textures.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The transmission weight texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.transmissionWeightTexture`

***

### transparencyAsAlphaCoverage

#### Get Signature

> **get** **transparencyAsAlphaCoverage**(): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L121)

Gets whether the transparency is treated as alpha coverage.

##### Returns

`boolean`

#### Set Signature

> **set** **transparencyAsAlphaCoverage**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L128)

Sets/Gets whether the transparency is treated as alpha coverage

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.transparencyAsAlphaCoverage`

***

### twoSidedLighting

#### Get Signature

> **get** **twoSidedLighting**(): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L78)

Gets whether two-sided lighting is enabled.

##### Returns

`boolean`

True if two-sided lighting is enabled

#### Set Signature

> **set** **twoSidedLighting**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L70)

Sets whether two-sided lighting is enabled.

##### Parameters

###### value

`boolean`

True to enable two-sided lighting

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.twoSidedLighting`

***

### unlit

#### Set Signature

> **set** **unlit**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1261)

Sets whether the material is unlit.

##### Parameters

###### value

`boolean`

True to make the material unlit

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.unlit`

***

### useAlphaFromBaseColorTexture

#### Get Signature

> **get** **useAlphaFromBaseColorTexture**(): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L114)

Gets whether alpha is used from the albedo texture.

##### Returns

`boolean`

True if using alpha from albedo texture

#### Set Signature

> **set** **useAlphaFromBaseColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L106)

Sets whether to use alpha from the albedo texture.

##### Parameters

###### value

`boolean`

True to use alpha from albedo texture

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.useAlphaFromBaseColorTexture`

***

### useMetallicFromMetallicTextureBlue

#### Set Signature

> **set** **useMetallicFromMetallicTextureBlue**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:250](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L250)

Sets whether to use metalness from the metallic texture's blue channel.

##### Parameters

###### value

`boolean`

True to use blue channel for metalness

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.useMetallicFromMetallicTextureBlue`

***

### useRoughnessFromMetallicTextureGreen

#### Set Signature

> **set** **useRoughnessFromMetallicTextureGreen**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:241](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L241)

Sets whether to use roughness from the metallic texture's green channel.
Also disables using roughness from the alpha channel when enabled.

##### Parameters

###### value

`boolean`

True to use green channel for roughness

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.useRoughnessFromMetallicTextureGreen`

***

### volumeThickness

#### Set Signature

> **set** **volumeThickness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:906](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L906)

Sets the thickness factor (mapped to PBR subSurface.maximumThickness).
Automatically enables refraction.

##### Parameters

###### value

`number`

The thickness value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.volumeThickness`

***

### volumeThicknessTexture

#### Set Signature

> **set** **volumeThicknessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:896](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L896)

Sets the thickness texture (mapped to PBR subSurface.thicknessTexture).
Automatically enables refraction.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The thickness texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.volumeThicknessTexture`

## Methods

### configureCoat()

> **configureCoat**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:538](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L538)

Configures clear coat for PBR material.
Enables clear coat and sets up proper configuration.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureCoat`

***

### configureFuzz()

> **configureFuzz**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1071](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1071)

Configures sheen for PBR material.
Enables sheen and sets up proper configuration.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureFuzz`

***

### configureGltfStyleAnisotropy()

> **configureGltfStyleAnisotropy**(`useGltfStyle?`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1195)

Configures glTF-style anisotropy for the material.
Note: PBR materials don't need this configuration, so this is a no-op.

#### Parameters

##### useGltfStyle?

`boolean` = `true`

Whether to use glTF-style anisotropy (ignored for PBR)

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureGltfStyleAnisotropy`

***

### configureSpecularGlossiness()

> **configureSpecularGlossiness**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:272](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L272)

Enable the specular/glossiness workflow and disable metallic/roughness.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureSpecularGlossiness`

***

### configureSubsurface()

> **configureSubsurface**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:922](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L922)

Configures subsurface properties for PBR material

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureSubsurface`

***

### configureTransmission()

> **configureTransmission**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:861](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L861)

Configures transmission for thin-surface transmission (KHR_materials_transmission).
Sets up the material for proper thin-surface transmission behavior.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureTransmission`

***

### configureVolume()

> **configureVolume**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:877](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L877)

Configures volume properties for PBR material. Nothing to do for PBRMaterial.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureVolume`

***

### enableSpecularEdgeColor()

> **enableSpecularEdgeColor**(`enableEdgeColor?`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:262](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L262)

Configures specular properties and optionally enables OpenPBR BRDF model for edge color support.

#### Parameters

##### enableEdgeColor?

`boolean` = `false`

Whether to enable OpenPBR BRDF models for edge color support

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.enableSpecularEdgeColor`

***

### isTranslucent()

> **isTranslucent**(): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1059](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1059)

Does this material have a translucent surface (i.e. either transmission or subsurface)?

#### Returns

`boolean`

True if the material is translucent, false otherwise

#### Implementation of

`IMaterialLoadingAdapter.isTranslucent`

***

### setNormalMapInversions()

> **setNormalMapInversions**(`invertX`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1308](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1308)

Sets the normal map inversions for the material.

#### Parameters

##### invertX

`boolean`

Whether to invert the normal map on the X axis

##### invertY

`boolean`

Whether to invert the normal map on the Y axis

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.setNormalMapInversions`
