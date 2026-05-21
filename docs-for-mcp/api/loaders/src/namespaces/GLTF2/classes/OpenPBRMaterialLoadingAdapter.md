[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / OpenPBRMaterialLoadingAdapter

# Class: OpenPBRMaterialLoadingAdapter

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L22)

Material Loading Adapter for OpenPBR materials that provides a unified OpenPBR-like interface.

## Implements

- `IMaterialLoadingAdapter`

## Constructors

### Constructor

> **new OpenPBRMaterialLoadingAdapter**(`material`): `OpenPBRMaterialLoadingAdapter`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L29)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L107)

Gets the alpha cutoff value.

##### Returns

`number`

Default value of 0.5 (OpenPBR doesn't support this directly)

#### Set Signature

> **set** **alphaCutOff**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L99)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:479](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L479)

Gets the ambient occlusion texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The ambient occlusion texture or null

#### Set Signature

> **set** **ambientOcclusionTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:471](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L471)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:498](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L498)

Gets the ambient occlusion texture strength from the texture's level property.

##### Returns

`number`

The strength value, defaults to 1.0 if no texture or level is set

#### Set Signature

> **set** **ambientOcclusionTextureStrength**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:487](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L487)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L70)

Gets whether back face culling is enabled.

##### Returns

`boolean`

True if back face culling is enabled

#### Set Signature

> **set** **backFaceCulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L62)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L159)

Gets the base color of the OpenPBR material.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The base color as a Color3

#### Set Signature

> **set** **baseColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L151)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L175)

Gets the base color texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The base color texture or null

#### Set Signature

> **set** **baseColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L167)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L191)

Gets the base diffuse roughness of the OpenPBR material.

##### Returns

`number`

The diffuse roughness value (0-1)

#### Set Signature

> **set** **baseDiffuseRoughness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L183)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L207)

Gets the base diffuse roughness texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The diffuse roughness texture or null

#### Set Signature

> **set** **baseDiffuseRoughnessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:199](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L199)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L223)

Gets the base metalness value of the OpenPBR material.

##### Returns

`number`

The metalness value (0-1)

#### Set Signature

> **set** **baseMetalness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L215)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:239](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L239)

Gets the base metalness texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The metalness texture or null

#### Set Signature

> **set** **baseMetalnessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:231](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L231)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:558](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L558)

Gets the coat color of the OpenPBR material.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

#### Set Signature

> **set** **coatColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:551](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L551)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:566](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L566)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:624](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L624)

Sets the coat darkening

##### Returns

`number`

#### Set Signature

> **set** **coatDarkening**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:620](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L620)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:631](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L631)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:612](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L612)

Sets the coat index of refraction (IOR)

##### Returns

`number`

#### Set Signature

> **set** **coatIor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:608](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L608)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:582](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L582)

Gets the coat roughness of the OpenPBR material.

##### Returns

`number`

The coat roughness value (0-1)

#### Set Signature

> **set** **coatRoughness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:574](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L574)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:649](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L649)

Gets the coat roughness anisotropy.
TODO: Implementation pending OpenPBR coat anisotropy feature availability.

##### Returns

`number`

Currently returns 0 as coat anisotropy is not yet available

#### Set Signature

> **set** **coatRoughnessAnisotropy**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:640](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L640)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:601](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L601)

Gets the coat roughness texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat roughness texture or null

#### Set Signature

> **set** **coatRoughnessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:590](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L590)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:527](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L527)

Gets the coat weight of the OpenPBR material.

##### Returns

`number`

The coat weight value (0-1)

#### Set Signature

> **set** **coatWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:519](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L519)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:543](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L543)

Gets the coat weight texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat weight texture or null

#### Set Signature

> **set** **coatWeightTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:535](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L535)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:946](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L946)

Gets the diffuse transmission tint of the material

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

#### Set Signature

> **set** **diffuseTransmissionTint**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:939](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L939)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:953](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L953)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:427](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L427)

Gets the emission color of the OpenPBR material.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The emission color as a Color3

#### Set Signature

> **set** **emissionColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:419](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L419)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:459](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L459)

Gets the emission color texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The emission texture or null

#### Set Signature

> **set** **emissionColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:451](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L451)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:443](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L443)

Gets the emission luminance of the OpenPBR material.

##### Returns

`number`

The emission luminance value

#### Set Signature

> **set** **emissionLuminance**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:435](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L435)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1039](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1039)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1047](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1047)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1055](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1055)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1063](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1063)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1023](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1023)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1031](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1031)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1245](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1245)

Gets the geometry coat normal texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The coat normal texture or null

#### Set Signature

> **set** **geometryCoatNormalTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1237)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1253](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1253)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:658](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L658)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:679](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L679)

Gets the coat tangent texture for anisotropy.
TODO: Implementation pending OpenPBR coat anisotropy feature availability.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Currently returns null as coat anisotropy is not yet available

#### Set Signature

> **set** **geometryCoatTangentTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:667](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L667)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1219)

Gets the geometry normal texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The normal texture or null

#### Set Signature

> **set** **geometryNormalTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1211)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1203](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1203)

Gets the geometry opacity of the OpenPBR material.

##### Returns

`number`

The opacity value (0-1)

#### Set Signature

> **set** **geometryOpacity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1195)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1092](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1092)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1110)

Gets the geometry tangent texture for anisotropy.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The anisotropy texture or null

#### Set Signature

> **set** **geometryTangentTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1101)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:860](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L860)

Gets whether the material is thin-walled (i.e. non-volumetric) or not.

##### Returns

`boolean`

#### Set Signature

> **set** **geometryThinWalled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:853](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L853)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L407)

Sets/gets the glossiness (inverted roughness)
ONLY used for specular/glossiness workflow; has no effect when metallic/roughness workflow is active

##### Returns

`number`

#### Set Signature

> **set** **glossiness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:403](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L403)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L43)

Whether the material should be treated as unlit

##### Returns

`boolean`

#### Set Signature

> **set** **isUnlit**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L50)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L36)

Gets the underlying material

##### Returns

[`OpenPBRMaterial`](../../../../../core/src/classes/OpenPBRMaterial.md)

#### Implementation of

`IMaterialLoadingAdapter.material`

***

### refractionBackgroundTexture

#### Get Signature

> **get** **refractionBackgroundTexture**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:826](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L826)

Gets the refraction background texture

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The refraction background texture or null

#### Set Signature

> **set** **refractionBackgroundTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:834](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L834)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:326](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L326)

Gets the specular color of the OpenPBR material.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The specular color as a Color3

#### Set Signature

> **set** **specularColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L318)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:348](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L348)

Gets the specular color texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The specular color texture or null

#### Set Signature

> **set** **specularColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:335](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L335)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:396](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L396)

Gets the specular index of refraction (IOR) of the OpenPBR material.

##### Returns

`number`

The IOR value

#### Set Signature

> **set** **specularIor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:388](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L388)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:364](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L364)

Gets the specular roughness of the OpenPBR material.

##### Returns

`number`

The roughness value (0-1)

#### Set Signature

> **set** **specularRoughness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:356](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L356)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1084](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1084)

Gets the specular roughness anisotropy of the OpenPBR material.

##### Returns

`number`

The anisotropy intensity value

#### Set Signature

> **set** **specularRoughnessAnisotropy**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1076](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1076)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:380](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L380)

Gets the specular roughness texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The roughness texture or null

#### Set Signature

> **set** **specularRoughnessTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:372](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L372)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L287)

Gets the specular weight of the OpenPBR material.

##### Returns

`number`

The specular weight value (0-1)

#### Set Signature

> **set** **specularWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:279](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L279)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:310](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L310)

Gets the specular weight texture of the OpenPBR material.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The specular weight texture or null

#### Set Signature

> **set** **specularWeightTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:296](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L296)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:921](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L921)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:929](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L929)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:961](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L961)

Gets the subsurface radius for subsurface scattering.
subsurfaceRadiusScale * subsurfaceRadius gives the mean free path per color channel.

##### Returns

`number`

#### Set Signature

> **set** **subsurfaceRadius**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:970](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L970)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:978](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L978)

Gets the subsurface radius scale for subsurface scattering.
subsurfaceRadiusScale * subsurfaceRadius gives the mean free path per color channel.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

#### Set Signature

> **set** **subsurfaceRadiusScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:987](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L987)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:995](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L995)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:901](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L901)

Sets/gets the subsurface weight

##### Returns

`number`

#### Set Signature

> **set** **subsurfaceWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:897](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L897)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:913](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L913)

Sets/gets the subsurface weight texture

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

#### Set Signature

> **set** **subsurfaceWeightTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:908](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L908)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1138)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1154)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1146)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1170)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1130)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1162)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:818](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L818)

Gets the attenuation color.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

#### Set Signature

> **set** **transmissionColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:806](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L806)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:798](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L798)

Gets the attenuation distance.

##### Returns

`number`

#### Set Signature

> **set** **transmissionDepth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:784](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L784)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:768](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L768)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:776](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L776)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:736](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L736)

Gets the transmission scatter coefficient.

##### Returns

[`Color3`](../../../../../core/src/classes/Color3.md)

The scatter coefficient as a Vector3

#### Set Signature

> **set** **transmissionScatter**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:728](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L728)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:760](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L760)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:752](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L752)

Gets the transmission scatter texture.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

The transmission scatter texture or null

#### Set Signature

> **set** **transmissionScatterTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:744](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L744)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:720](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L720)

Gets the transmission weight.

##### Returns

`number`

Currently returns 0 as transmission is not yet available

#### Set Signature

> **set** **transmissionWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:700](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L700)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:712](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L712)

Sets the transmission weight texture

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

#### Set Signature

> **set** **transmissionWeightTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:708](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L708)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L131)

Gets whether the transparency is treated as alpha coverage.

##### Returns

`boolean`

#### Set Signature

> **set** **transparencyAsAlphaCoverage**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L139)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L86)

Gets whether two-sided lighting is enabled.

##### Returns

`boolean`

True if two-sided lighting is enabled

#### Set Signature

> **set** **twoSidedLighting**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L78)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1183)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L124)

Gets whether alpha is used from the base color texture.

##### Returns

`boolean`

Always false for OpenPBR as it's handled automatically

#### Set Signature

> **set** **useAlphaFromBaseColorTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L116)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L255)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:247](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L247)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:877](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L877)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:868](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L868)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:511](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L511)

Configures coat parameters for OpenPBR material.
OpenPBR coat is already built-in, so no configuration is needed.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureCoat`

***

### configureFuzz()

> **configureFuzz**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1015](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1015)

Configures fuzz for OpenPBR.
Enables fuzz and sets up proper configuration.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureFuzz`

***

### configureGltfStyleAnisotropy()

> **configureGltfStyleAnisotropy**(`useGltfStyle?`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1118)

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

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L271)

Enable the specular/glossiness workflow and disable metallic/roughness.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureSpecularGlossiness`

***

### configureSubsurface()

> **configureSubsurface**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:888](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L888)

Configures subsurface properties for PBR material

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureSubsurface`

***

### configureTransmission()

> **configureTransmission**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:690](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L690)

Configures transmission for OpenPBR material.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureTransmission`

***

### configureVolume()

> **configureVolume**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:845](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L845)

Configures volume properties for OpenPBR material.

#### Returns

`void`

#### Implementation of

`IMaterialLoadingAdapter.configureVolume`

***

### enableSpecularEdgeColor()

> **enableSpecularEdgeColor**(`_enableEdgeColor?`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:267](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L267)

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

> **finalizeAsync**(`signal`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1264](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1264)

Finalizes material properties after all loading is complete.

#### Parameters

##### signal

`AbortSignal`

An AbortSignal that fires when the loader is disposed. Intermediate
  textures are disposed and the method returns early when aborted.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IMaterialLoadingAdapter.finalizeAsync`

***

### isTranslucent()

> **isTranslucent**(): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1003](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1003)

Does this material have a translucent surface (i.e. either transmission or subsurface)?

#### Returns

`boolean`

True if the material is translucent, false otherwise

#### Implementation of

`IMaterialLoadingAdapter.isTranslucent`

***

### setNormalMapInversions()

> **setNormalMapInversions**(`invertX`, `invertY`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts:1229](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/openpbrMaterialLoadingAdapter.ts#L1229)

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
