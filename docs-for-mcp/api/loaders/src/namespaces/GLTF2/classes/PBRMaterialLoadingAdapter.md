[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / PBRMaterialLoadingAdapter

# Class: PBRMaterialLoadingAdapter

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L14)

Material Loading Adapter for PBR materials that provides a unified OpenPBR-like interface.

## Implements

- `IMaterialLoadingAdapter`

## Constructors

### Constructor

> **new PBRMaterialLoadingAdapter**(`material`): `PBRMaterialLoadingAdapter`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L21)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L105)

Gets the alpha cutoff value.

##### Returns

`number`

The alpha cutoff threshold (0-1)

#### Set Signature

> **set** **alphaCutOff**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L97)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:517](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L517)

Gets the ambient occlusion texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The ambient occlusion texture or null

#### Set Signature

> **set** **ambientOcclusionTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:506](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L506)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:533](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L533)

Gets the ambient occlusion texture strength.

##### Returns

`number`

The strength value, defaults to 1.0 if not set

#### Set Signature

> **set** **ambientOcclusionTextureStrength**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:525](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L525)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L69)

Gets whether back face culling is enabled.

##### Returns

`boolean`

True if back face culling is enabled

#### Set Signature

> **set** **backFaceCulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L61)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L156)

Gets the base color of the material.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The base color as a Color3

#### Set Signature

> **set** **baseColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L148)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L172)

Gets the base color texture of the material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The base color texture or null

#### Set Signature

> **set** **baseColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L164)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L191)

Gets the base diffuse roughness of the material.

##### Returns

`number`

The diffuse roughness value (0-1), defaults to 0 if not set

#### Set Signature

> **set** **baseDiffuseRoughness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L180)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L207)

Gets the base diffuse roughness texture of the material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The diffuse roughness texture or null

#### Set Signature

> **set** **baseDiffuseRoughnessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L199)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L223)

Gets the base metalness value of the material.

##### Returns

`number`

The metalness value (0-1), defaults to 1 if not set

#### Set Signature

> **set** **baseMetalness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:215](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L215)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L239)

Gets the base metalness texture of the material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The metalness texture or null

#### Set Signature

> **set** **baseMetalnessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L231)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:591](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L591)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:600](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L600)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:653](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L653)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:661](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L661)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:644](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L644)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:618](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L618)

Gets the coat roughness.

##### Returns

`number`

The coat roughness value, defaults to 0 if not set

#### Set Signature

> **set** **coatRoughness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:609](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L609)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:680](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L680)

Gets the coat roughness anisotropy.
Note: PBR clearCoat doesn't support anisotropy yet, so this returns 0.

##### Returns

`number`

Currently returns 0 as clearCoat anisotropy is not yet available

#### Set Signature

> **set** **coatRoughnessAnisotropy**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:670](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L670)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:637](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L637)

Gets the coat roughness texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat roughness texture or null

#### Set Signature

> **set** **coatRoughnessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:627](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L627)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:565](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L565)

Gets the coat weight.

##### Returns

`number`

The coat weight value

#### Set Signature

> **set** **coatWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:556](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L556)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:583](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L583)

Gets the coat weight texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat weight texture or null

#### Set Signature

> **set** **coatWeightTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:574](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L574)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1005](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1005)

Gets the subsurface constant tint (when using subsurface scattering)

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The subsurface constant tint as a Color3

#### Set Signature

> **set** **diffuseTransmissionTint**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:997](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L997)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1013](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1013)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:461](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L461)

Gets the emission color.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The emission color as a Color3

#### Set Signature

> **set** **emissionColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:453](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L453)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:493](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L493)

Gets the emission color texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The emission texture or null

#### Set Signature

> **set** **emissionColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:485](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L485)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:477](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L477)

Gets the emission luminance/intensity.

##### Returns

`number`

The emission intensity value

#### Set Signature

> **set** **emissionLuminance**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:469](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L469)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1113)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1123)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1132)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1142)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1089](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1089)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1098](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1098)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1334](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1334)

Gets the geometry coat normal texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat normal texture or null

#### Set Signature

> **set** **geometryCoatNormalTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1325](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1325)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1342](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1342)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:691](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L691)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:711](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L711)

Gets the coat tangent texture for anisotropy.
Note: PBR clearCoat doesn't support anisotropy textures yet, so this returns null.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Currently returns null as clearCoat anisotropy is not yet available

#### Set Signature

> **set** **geometryCoatTangentTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:701](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L701)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1306](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1306)

Gets the geometry normal texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The normal texture or null

#### Set Signature

> **set** **geometryNormalTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1297](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1297)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1288)

Gets the geometry opacity.

##### Returns

`number`

The opacity value (0-1)

#### Set Signature

> **set** **geometryOpacity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1280)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1174)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1193](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1193)

Gets the geometry tangent texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The anisotropy texture or null

#### Set Signature

> **set** **geometryTangentTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1184](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1184)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:894](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L894)

Gets whether the material is thin-walled (i.e. non-volumetric) or not.

##### Returns

`boolean`

#### Set Signature

> **set** **geometryThinWalled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:889](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L889)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:433](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L433)

Sets/gets the glossiness (inverted roughness)
ONLY used for specular/glossiness workflow; has no effect when metallic/roughness workflow is active

##### Returns

`number`

#### Set Signature

> **set** **glossiness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:441](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L441)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L42)

Whether the material should be treated as unlit

##### Returns

`boolean`

#### Set Signature

> **set** **isUnlit**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L49)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L29)

Gets the underlying material

##### Returns

[`PBRMaterial`](../../../../../core/src/classes/PBRMaterial.md)

#### Implementation of

`IMaterialLoadingAdapter.material`

***

### refractionBackgroundTexture

#### Get Signature

> **get** **refractionBackgroundTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:852](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L852)

Gets the refraction background texture

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The refraction background texture or null

#### Set Signature

> **set** **refractionBackgroundTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:860](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L860)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:341](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L341)

Gets the specular color.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The specular color as a Color3

#### Set Signature

> **set** **specularColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:329](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L329)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:368](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L368)

Gets the specular color texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The specular color texture or null

#### Set Signature

> **set** **specularColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L353)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:425](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L425)

Gets the specular index of refraction.

##### Returns

`number`

The IOR value

#### Set Signature

> **set** **specularIor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:417](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L417)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:388](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L388)

Gets the specular roughness.

##### Returns

`number`

The roughness value (0-1), defaults to 1 if not set

#### Set Signature

> **set** **specularRoughness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L380)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1165)

Gets the specular roughness anisotropy.

##### Returns

`number`

The anisotropy intensity value

#### Set Signature

> **set** **specularRoughnessAnisotropy**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1156)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:409](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L409)

Gets the specular roughness texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The roughness texture (same as metallic texture for PBR) or null

#### Set Signature

> **set** **specularRoughnessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:398](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L398)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:298](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L298)

Gets the specular weight.

##### Returns

`number`

The specular weight value, defaults to 1 if not set

#### Set Signature

> **set** **specularWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:290](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L290)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:321](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L321)

Gets the specular weight texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The specular weight texture or null

#### Set Signature

> **set** **specularWeightTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:307](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L307)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:969](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L969)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:990](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L990)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1022](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1022)

Gets the subsurface radius (used for subsurface scattering)
subsurfaceRadiusScale * subsurfaceRadius gives the mean free path per color channel.

##### Returns

`number`

The subsurface radius as a Color3

#### Set Signature

> **set** **subsurfaceRadius**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1031](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1031)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1040](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1040)

Gets the subsurface radius scale (used for subsurface scattering)
subsurfaceRadiusScale * subsurfaceRadius gives the mean free path per color channel.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The subsurface radius scale as a Color3

#### Set Signature

> **set** **subsurfaceRadiusScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1049](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1049)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1058](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1058)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:954](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L954)

Gets the subsurface weight

##### Returns

`number`

The subsurface weight value

#### Set Signature

> **set** **subsurfaceWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:945](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L945)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:961](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L961)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1224](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1224)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1240](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1240)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1232)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1256](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1256)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1215](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1215)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1248)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:789](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L789)

Sets the attenuation color (mapped to PBR subSurface.tintColor).

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The attenuation color as a Color3

#### Set Signature

> **set** **transmissionColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:777](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L777)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:766](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L766)

Gets the attenuation distance for volume.

##### Returns

`number`

The attenuation distance value

#### Set Signature

> **set** **transmissionDepth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:754](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L754)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:830](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L830)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:838](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L838)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:811](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L811)

Sets the transmission scatter coefficient.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The scatter coefficient as a Color3

#### Set Signature

> **set** **transmissionScatter**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:802](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L802)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:822](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L822)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:816](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L816)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:735](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L735)

Gets the transmission weight.

##### Returns

`number`

The transmission weight value

#### Set Signature

> **set** **transmissionWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:726](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L726)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:744](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L744)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L128)

Gets whether the transparency is treated as alpha coverage.

##### Returns

`boolean`

#### Set Signature

> **set** **transparencyAsAlphaCoverage**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L135)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L85)

Gets whether two-sided lighting is enabled.

##### Returns

`boolean`

True if two-sided lighting is enabled

#### Set Signature

> **set** **twoSidedLighting**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L77)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1268](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1268)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L121)

Gets whether alpha is used from the albedo texture.

##### Returns

`boolean`

True if using alpha from albedo texture

#### Set Signature

> **set** **useAlphaFromBaseColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L113)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:257](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L257)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L248)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:913](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L913)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:903](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L903)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:545](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L545)

Configures clear coat for PBR material.
Enables clear coat and sets up proper configuration.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureCoat`

***

### configureFuzz()

> **configureFuzz**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1078](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1078)

Configures sheen for PBR material.
Enables sheen and sets up proper configuration.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureFuzz`

***

### configureGltfStyleAnisotropy()

> **configureGltfStyleAnisotropy**(`useGltfStyle?`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1202](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1202)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:279](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L279)

Enable the specular/glossiness workflow and disable metallic/roughness.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureSpecularGlossiness`

***

### configureSubsurface()

> **configureSubsurface**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:929](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L929)

Configures subsurface properties for PBR material

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureSubsurface`

***

### configureTransmission()

> **configureTransmission**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:868](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L868)

Configures transmission for thin-surface transmission (KHR_materials_transmission).
Sets up the material for proper thin-surface transmission behavior.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureTransmission`

***

### configureVolume()

> **configureVolume**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:884](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L884)

Configures volume properties for PBR material. Nothing to do for PBRMaterial.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureVolume`

***

### enableSpecularEdgeColor()

> **enableSpecularEdgeColor**(`enableEdgeColor?`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L269)

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

### finalizeAsync()

> **finalizeAsync**(`_loader`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L37)

No-op: PBRMaterial has no deferred finalization.

#### Parameters

##### \_loader

[`GLTFLoader`](GLTFLoader.md)

Unused.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IMaterialLoadingAdapter.finalizeAsync`

***

### isTranslucent()

> **isTranslucent**(): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1066](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1066)

Does this material have a translucent surface (i.e. either transmission or subsurface)?

#### Returns

`boolean`

True if the material is translucent, false otherwise

#### Implementation of

`IMaterialLoadingAdapter.isTranslucent`

***

### setNormalMapInversions()

> **setNormalMapInversions**(`invertX`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts:1315](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/pbrMaterialLoadingAdapter.ts#L1315)

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
