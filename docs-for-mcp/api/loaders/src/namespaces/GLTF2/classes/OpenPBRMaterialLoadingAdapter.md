[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / OpenPBRMaterialLoadingAdapter

# Class: OpenPBRMaterialLoadingAdapter

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L23)

Material Loading Adapter for OpenPBR materials that provides a unified OpenPBR-like interface.

## Implements

- `IMaterialLoadingAdapter`

## Constructors

### Constructor

> **new OpenPBRMaterialLoadingAdapter**(`material`): `OpenPBRMaterialLoadingAdapter`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L30)

Creates a new instance of the OpenPBRMaterialLoadingAdapter.

#### Parameters

##### material

[`Material`](../../../../../core/src/classes/Material.md)

The OpenPBR material to adapt.

#### Returns

`OpenPBRMaterialLoadingAdapter`

## Accessors

### alphaCutOff

#### Get Signature

> **get** **alphaCutOff**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L108)

Gets the alpha cutoff value.

##### Returns

`number`

Default value of 0.5 (OpenPBR doesn't support this directly)

#### Set Signature

> **set** **alphaCutOff**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L100)

Sets the alpha cutoff value for alpha testing.
Note: OpenPBR doesn't have a direct equivalent, so this is a no-op.

##### Parameters

###### value

`number`

The alpha cutoff threshold (ignored for OpenPBR)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.alphaCutOff`

***

### ambientOcclusionTexture

#### Get Signature

> **get** **ambientOcclusionTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:480](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L480)

Gets the ambient occlusion texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The ambient occlusion texture or null

#### Set Signature

> **set** **ambientOcclusionTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:472](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L472)

Sets the ambient occlusion texture of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:499](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L499)

Gets the ambient occlusion texture strength from the texture's level property.

##### Returns

`number`

The strength value, defaults to 1.0 if no texture or level is set

#### Set Signature

> **set** **ambientOcclusionTextureStrength**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:488](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L488)

Sets the ambient occlusion texture strength by modifying the texture's level.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L71)

Gets whether back face culling is enabled.

##### Returns

`boolean`

True if back face culling is enabled

#### Set Signature

> **set** **backFaceCulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L63)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L160)

Gets the base color of the OpenPBR material.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The base color as a Color3

#### Set Signature

> **set** **baseColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L152)

Sets the base color of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L176)

Gets the base color texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The base color texture or null

#### Set Signature

> **set** **baseColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L168)

Sets the base color texture of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:192](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L192)

Gets the base diffuse roughness of the OpenPBR material.

##### Returns

`number`

The diffuse roughness value (0-1)

#### Set Signature

> **set** **baseDiffuseRoughness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:184](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L184)

Sets the base diffuse roughness of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L208)

Gets the base diffuse roughness texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The diffuse roughness texture or null

#### Set Signature

> **set** **baseDiffuseRoughnessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L200)

Sets the base diffuse roughness texture of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:224](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L224)

Gets the base metalness value of the OpenPBR material.

##### Returns

`number`

The metalness value (0-1)

#### Set Signature

> **set** **baseMetalness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L216)

Sets the base metalness value of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:240](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L240)

Gets the base metalness texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The metalness texture or null

#### Set Signature

> **set** **baseMetalnessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L232)

Sets the base metalness texture of the OpenPBR material.

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

#### Get Signature

> **get** **coatColor**(): [`Color3`](../../../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:559](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L559)

Gets the coat color of the OpenPBR material.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

#### Set Signature

> **set** **coatColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:552](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L552)

Sets the coat color of the OpenPBR material.

##### Parameters

###### value

[`Color3`](../../../../../core/src/classes/Color3.md)

The coat color as a Color3

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.coatColor`

***

### coatColorTexture

#### Set Signature

> **set** **coatColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:567](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L567)

Sets the coat color texture of the OpenPBR material.

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

#### Get Signature

> **get** **coatDarkening**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:625](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L625)

Sets the coat darkening

##### Returns

`number`

#### Set Signature

> **set** **coatDarkening**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:621](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L621)

Sets the coat darkening value of the OpenPBR material.

##### Parameters

###### value

`number`

The coat darkening value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.coatDarkening`

***

### coatDarkeningTexture

#### Set Signature

> **set** **coatDarkeningTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:632](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L632)

Sets the coat darkening texture (OpenPBR: coatDarkeningTexture, no PBR equivalent)

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.coatDarkeningTexture`

***

### coatIor

#### Get Signature

> **get** **coatIor**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:613](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L613)

Sets the coat index of refraction (IOR)

##### Returns

`number`

#### Set Signature

> **set** **coatIor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:609](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L609)

Sets the coat index of refraction (IOR) of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:583](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L583)

Gets the coat roughness of the OpenPBR material.

##### Returns

`number`

The coat roughness value (0-1)

#### Set Signature

> **set** **coatRoughness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:575](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L575)

Sets the coat roughness of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:650](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L650)

Gets the coat roughness anisotropy.
TODO: Implementation pending OpenPBR coat anisotropy feature availability.

##### Returns

`number`

Currently returns 0 as coat anisotropy is not yet available

#### Set Signature

> **set** **coatRoughnessAnisotropy**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:641](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L641)

Sets the coat roughness anisotropy.
TODO: Implementation pending OpenPBR coat anisotropy feature availability.

##### Parameters

###### value

`number`

The coat anisotropy intensity value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.coatRoughnessAnisotropy`

***

### coatRoughnessTexture

#### Get Signature

> **get** **coatRoughnessTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:602](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L602)

Gets the coat roughness texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat roughness texture or null

#### Set Signature

> **set** **coatRoughnessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:591](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L591)

Sets the coat roughness texture of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:528](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L528)

Gets the coat weight of the OpenPBR material.

##### Returns

`number`

The coat weight value (0-1)

#### Set Signature

> **set** **coatWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:520](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L520)

Sets the coat weight of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:544](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L544)

Gets the coat weight texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat weight texture or null

#### Set Signature

> **set** **coatWeightTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:536](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L536)

Sets the coat weight texture of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:947](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L947)

Gets the diffuse transmission tint of the material

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

#### Set Signature

> **set** **diffuseTransmissionTint**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:940](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L940)

Sets the diffuse transmission tint of the material

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:954](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L954)

Sets the diffuse transmission tint texture of the material

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.diffuseTransmissionTintTexture`

***

### emissionColor

#### Get Signature

> **get** **emissionColor**(): [`Color3`](../../../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:428](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L428)

Gets the emission color of the OpenPBR material.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The emission color as a Color3

#### Set Signature

> **set** **emissionColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:420](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L420)

Sets the emission color of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:460](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L460)

Gets the emission color texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The emission texture or null

#### Set Signature

> **set** **emissionColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:452](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L452)

Sets the emission color texture of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:444](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L444)

Gets the emission luminance of the OpenPBR material.

##### Returns

`number`

The emission luminance value

#### Set Signature

> **set** **emissionLuminance**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:436](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L436)

Sets the emission luminance of the OpenPBR material.

##### Parameters

###### value

`number`

The emission luminance value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.emissionLuminance`

***

### fuzzColor

#### Set Signature

> **set** **fuzzColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1040](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1040)

Sets the fuzz color.

##### Parameters

###### value

[`Color3`](../../../../../core/src/classes/Color3.md)

The fuzz color as a Color3

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.fuzzColor`

***

### fuzzColorTexture

#### Set Signature

> **set** **fuzzColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1048](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1048)

Sets the fuzz color texture.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The fuzz color texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.fuzzColorTexture`

***

### fuzzRoughness

#### Set Signature

> **set** **fuzzRoughness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1056](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1056)

Sets the fuzz roughness.

##### Parameters

###### value

`number`

The fuzz roughness value (0-1)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.fuzzRoughness`

***

### fuzzRoughnessTexture

#### Set Signature

> **set** **fuzzRoughnessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1064](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1064)

Sets the fuzz roughness texture.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The fuzz roughness texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.fuzzRoughnessTexture`

***

### fuzzWeight

#### Set Signature

> **set** **fuzzWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1024](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1024)

Sets the fuzz weight.

##### Parameters

###### value

`number`

The fuzz weight value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.fuzzWeight`

***

### fuzzWeightTexture

#### Set Signature

> **set** **fuzzWeightTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1032](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1032)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1246](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1246)

Gets the geometry coat normal texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat normal texture or null

#### Set Signature

> **set** **geometryCoatNormalTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1238)

Sets the geometry coat normal texture of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1254)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:659](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L659)

Sets the coat tangent angle for anisotropy.
TODO: Implementation pending OpenPBR coat anisotropy feature availability.

##### Parameters

###### value

`number`

The coat anisotropy rotation angle in radians

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.geometryCoatTangentAngle`

***

### geometryCoatTangentTexture

#### Get Signature

> **get** **geometryCoatTangentTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:680](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L680)

Gets the coat tangent texture for anisotropy.
TODO: Implementation pending OpenPBR coat anisotropy feature availability.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Currently returns null as coat anisotropy is not yet available

#### Set Signature

> **set** **geometryCoatTangentTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:668](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L668)

Sets the coat tangent texture for anisotropy.
TODO: Implementation pending OpenPBR coat anisotropy feature availability.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat anisotropy texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.geometryCoatTangentTexture`

***

### geometryNormalTexture

#### Get Signature

> **get** **geometryNormalTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1220](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1220)

Gets the geometry normal texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The normal texture or null

#### Set Signature

> **set** **geometryNormalTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1212](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1212)

Sets the geometry normal texture of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1204)

Gets the geometry opacity of the OpenPBR material.

##### Returns

`number`

The opacity value (0-1)

#### Set Signature

> **set** **geometryOpacity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1196)

Sets the geometry opacity of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1093](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1093)

Sets the anisotropy rotation angle.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1111)

Gets the geometry tangent texture for anisotropy.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The anisotropy texture or null

#### Set Signature

> **set** **geometryTangentTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1102)

Sets the geometry tangent texture for anisotropy.
Automatically enables using anisotropy from the tangent texture.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:861](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L861)

Gets whether the material is thin-walled (i.e. non-volumetric) or not.

##### Returns

`boolean`

#### Set Signature

> **set** **geometryThinWalled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:854](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L854)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:408](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L408)

Sets/gets the glossiness (inverted roughness)
ONLY used for specular/glossiness workflow; has no effect when metallic/roughness workflow is active

##### Returns

`number`

#### Set Signature

> **set** **glossiness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:404](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L404)

Sets the glossiness (inverted roughness) of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L44)

Whether the material should be treated as unlit

##### Returns

`boolean`

#### Set Signature

> **set** **isUnlit**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L51)

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

> **get** **material**(): [`OpenPBRMaterial`](../../../../../core/src/classes/OpenPBRMaterial.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L37)

Gets the underlying material

##### Returns

[`OpenPBRMaterial`](../../../../../core/src/classes/OpenPBRMaterial.md)

#### Implementation of

`IMaterialLoadingAdapter.material`

***

### refractionBackgroundTexture

#### Get Signature

> **get** **refractionBackgroundTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:827](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L827)

Gets the refraction background texture

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The refraction background texture or null

#### Set Signature

> **set** **refractionBackgroundTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:835](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L835)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:327](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L327)

Gets the specular color of the OpenPBR material.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The specular color as a Color3

#### Set Signature

> **set** **specularColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L319)

Sets the specular color of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:349](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L349)

Gets the specular color texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The specular color texture or null

#### Set Signature

> **set** **specularColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:336](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L336)

Sets the specular color texture of the OpenPBR material.
If the same texture is used for specular weight, optimizes by using alpha channel for weight.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:397](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L397)

Gets the specular index of refraction (IOR) of the OpenPBR material.

##### Returns

`number`

The IOR value

#### Set Signature

> **set** **specularIor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:389](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L389)

Sets the specular index of refraction (IOR) of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:365](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L365)

Gets the specular roughness of the OpenPBR material.

##### Returns

`number`

The roughness value (0-1)

#### Set Signature

> **set** **specularRoughness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:357](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L357)

Sets the specular roughness of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1085](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1085)

Gets the specular roughness anisotropy of the OpenPBR material.

##### Returns

`number`

The anisotropy intensity value

#### Set Signature

> **set** **specularRoughnessAnisotropy**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1077](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1077)

Sets the specular roughness anisotropy of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:381](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L381)

Gets the specular roughness texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The roughness texture or null

#### Set Signature

> **set** **specularRoughnessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L373)

Sets the specular roughness texture of the OpenPBR material.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L288)

Gets the specular weight of the OpenPBR material.

##### Returns

`number`

The specular weight value (0-1)

#### Set Signature

> **set** **specularWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L280)

Sets the specular weight of the OpenPBR material.

##### Parameters

###### value

`number`

The specular weight value (0-1)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.specularWeight`

***

### specularWeightTexture

#### Get Signature

> **get** **specularWeightTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:311](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L311)

Gets the specular weight texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The specular weight texture or null

#### Set Signature

> **set** **specularWeightTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:297](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L297)

Sets the specular weight texture of the OpenPBR material.
If the same texture is used for specular color, optimizes by using alpha channel for weight.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:922](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L922)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:930](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L930)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:962](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L962)

Gets the subsurface radius for subsurface scattering.
subsurfaceRadiusScale * subsurfaceRadius gives the mean free path per color channel.

##### Returns

`number`

#### Set Signature

> **set** **subsurfaceRadius**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:971](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L971)

Sets the subsurface radius for subsurface scattering.
subsurfaceRadiusScale * subsurfaceRadius gives the mean free path per color channel.

##### Parameters

###### value

`number`

The subsurface radius value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.subsurfaceRadius`

***

### subsurfaceRadiusScale

#### Get Signature

> **get** **subsurfaceRadiusScale**(): [`Color3`](../../../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:979](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L979)

Gets the subsurface radius scale for subsurface scattering.
subsurfaceRadiusScale * subsurfaceRadius gives the mean free path per color channel.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

#### Set Signature

> **set** **subsurfaceRadiusScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:988](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L988)

Sets the subsurface radius scale for subsurface scattering.
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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:996](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L996)

Sets the subsurface scattering anisotropy.

##### Parameters

###### value

`number`

The anisotropy intensity value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.subsurfaceScatterAnisotropy`

***

### subsurfaceWeight

#### Get Signature

> **get** **subsurfaceWeight**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:902](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L902)

Sets/gets the subsurface weight

##### Returns

`number`

#### Set Signature

> **set** **subsurfaceWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:898](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L898)

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

#### Get Signature

> **get** **subsurfaceWeightTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:914](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L914)

Sets/gets the subsurface weight texture

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

#### Set Signature

> **set** **subsurfaceWeightTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:909](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L909)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1139)

Sets the thin film IOR.

##### Parameters

###### value

`number`

The thin film IOR value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.thinFilmIor`

***

### thinFilmThicknessMaximum

#### Set Signature

> **set** **thinFilmThicknessMaximum**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1155)

Sets the thin film thickness maximum.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1147)

Sets the thin film thickness minimum.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1171](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1171)

Sets the thin film thickness texture.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The thin film thickness texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.thinFilmThicknessTexture`

***

### thinFilmWeight

#### Set Signature

> **set** **thinFilmWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1131)

Sets the thin film weight.

##### Parameters

###### value

`number`

The thin film weight value

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.thinFilmWeight`

***

### thinFilmWeightTexture

#### Set Signature

> **set** **thinFilmWeightTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1163)

Sets the thin film weight texture.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:819](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L819)

Gets the attenuation color.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

#### Set Signature

> **set** **transmissionColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:807](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L807)

Sets the attenuation color.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:799](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L799)

Gets the attenuation distance.

##### Returns

`number`

#### Set Signature

> **set** **transmissionDepth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:785](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L785)

Sets the attenuation distance.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:769](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L769)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:777](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L777)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:737](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L737)

Gets the transmission scatter coefficient.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The scatter coefficient as a Vector3

#### Set Signature

> **set** **transmissionScatter**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:729](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L729)

Sets the transmission scatter coefficient.

##### Parameters

###### value

[`Color3`](../../../../../core/src/classes/Color3.md)

The scatter coefficient as a Vector3

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.transmissionScatter`

***

### transmissionScatterAnisotropy

#### Set Signature

> **set** **transmissionScatterAnisotropy**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:761](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L761)

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

#### Get Signature

> **get** **transmissionScatterTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:753](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L753)

Gets the transmission scatter texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The transmission scatter texture or null

#### Set Signature

> **set** **transmissionScatterTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:745](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L745)

Sets the transmission scatter texture.

##### Parameters

###### value

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The transmission scatter texture or null

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.transmissionScatterTexture`

***

### transmissionWeight

#### Get Signature

> **get** **transmissionWeight**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:721](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L721)

Gets the transmission weight.

##### Returns

`number`

Currently returns 0 as transmission is not yet available

#### Set Signature

> **set** **transmissionWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:701](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L701)

Sets the transmission weight.

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

#### Get Signature

> **get** **transmissionWeightTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:713](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L713)

Sets the transmission weight texture

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

#### Set Signature

> **set** **transmissionWeightTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:709](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L709)

Sets the transmission weight texture.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L132)

Gets whether the transparency is treated as alpha coverage.

##### Returns

`boolean`

#### Set Signature

> **set** **transparencyAsAlphaCoverage**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L140)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L87)

Gets whether two-sided lighting is enabled.

##### Returns

`boolean`

True if two-sided lighting is enabled

#### Set Signature

> **set** **twoSidedLighting**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L79)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1184](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1184)

Sets whether the OpenPBR material is unlit.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L125)

Gets whether alpha is used from the base color texture.

##### Returns

`boolean`

True if alpha is used from the base color texture

#### Set Signature

> **set** **useAlphaFromBaseColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L117)

Sets whether to use alpha from the base color texture.
Note: OpenPBR handles this differently through the baseColorTexture alpha channel.

##### Parameters

###### value

`boolean`

True to use alpha from base color texture (handled automatically in OpenPBR)

##### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.useAlphaFromBaseColorTexture`

***

### useMetallicFromMetallicTextureBlue

#### Set Signature

> **set** **useMetallicFromMetallicTextureBlue**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:256](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L256)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L248)

Sets whether to use roughness from the metallic texture's green channel.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:878](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L878)

Sets the thickness factor.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:869](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L869)

Sets the thickness texture.

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:512](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L512)

Configures coat parameters for OpenPBR material.
OpenPBR coat is already built-in, so no configuration is needed.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureCoat`

***

### configureFuzz()

> **configureFuzz**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1016](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1016)

Configures fuzz for OpenPBR.
Enables fuzz and sets up proper configuration.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureFuzz`

***

### configureGltfStyleAnisotropy()

> **configureGltfStyleAnisotropy**(`useGltfStyle?`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1119)

Configures glTF-style anisotropy for the OpenPBR material.

#### Parameters

##### useGltfStyle?

`boolean` = `true`

Whether to use glTF-style anisotropy

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureGltfStyleAnisotropy`

***

### configureSpecularGlossiness()

> **configureSpecularGlossiness**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:272](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L272)

Enable the specular/glossiness workflow and disable metallic/roughness.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureSpecularGlossiness`

***

### configureSubsurface()

> **configureSubsurface**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:889](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L889)

Configures subsurface properties for PBR material

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureSubsurface`

***

### configureTransmission()

> **configureTransmission**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:691](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L691)

Configures transmission for OpenPBR material.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureTransmission`

***

### configureVolume()

> **configureVolume**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:846](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L846)

Configures volume properties for OpenPBR material.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureVolume`

***

### enableSpecularEdgeColor()

> **enableSpecularEdgeColor**(`_enableEdgeColor?`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:268](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L268)

Configures specular properties for OpenPBR material.

#### Parameters

##### \_enableEdgeColor?

`boolean` = `false`

Whether to enable edge color support (ignored for OpenPBR)

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.enableSpecularEdgeColor`

***

### finalizeAsync()

> **finalizeAsync**(`loader`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1264)

Finalizes material properties after all loading is complete.

#### Parameters

##### loader

[`GLTFLoader`](GLTFLoader.md)

The glTF loader; `loader._disposed` is polled between texture passes to bail early on dispose.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IMaterialLoadingAdapter.finalizeAsync`

***

### isTranslucent()

> **isTranslucent**(): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1004](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1004)

Does this material have a translucent surface (i.e. either transmission or subsurface)?

#### Returns

`boolean`

True if the material is translucent, false otherwise

#### Implementation of

`IMaterialLoadingAdapter.isTranslucent`

***

### setNormalMapInversions()

> **setNormalMapInversions**(`invertX`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1230](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1230)

Sets the normal map inversions for the OpenPBR material.
Note: OpenPBR may handle normal map inversions differently or may not need them.

#### Parameters

##### invertX

`boolean`

Whether to invert the normal map on the X axis (may be ignored)

##### invertY

`boolean`

Whether to invert the normal map on the Y axis (may be ignored)

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.setNormalMapInversions`
