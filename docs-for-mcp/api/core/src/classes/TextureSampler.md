[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TextureSampler

# Class: TextureSampler

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:7](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L7)

Class used to store a texture sampler data

## Extended by

- [`InternalTexture`](InternalTexture.md)

## Constructors

### Constructor

> **new TextureSampler**(): `TextureSampler`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L118)

Creates a Sampler instance

#### Returns

`TextureSampler`

## Properties

### label?

> `optional` **label?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L113)

General label used for debugging or storing a name.

***

### samplingMode

> **samplingMode**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L11)

Gets the sampling mode of the texture

## Accessors

### anisotropicFilteringLevel

#### Get Signature

> **get** **anisotropicFilteringLevel**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L63)

With compliant hardware and browser (supporting anisotropic filtering)
this defines the level of anisotropic filtering in the texture.
The higher the better but the slower.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **anisotropicFilteringLevel**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L67)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

***

### comparisonFunction

#### Get Signature

> **get** **comparisonFunction**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L74)

Gets or sets the comparison function (Constants.LESS, Constants.EQUAL, etc). Set 0 to not use a comparison function

##### Returns

`number`

#### Set Signature

> **set** **comparisonFunction**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L78)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### useMipMaps

#### Get Signature

> **get** **useMipMaps**(): [`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L87)

Indicates to use the mip maps (if available on the texture).
Thanks to this flag, you can instruct the sampler to not sample the mipmaps even if they exist (and if the sampling mode is set to a value that normally samples the mipmaps!)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

#### Set Signature

> **set** **useMipMaps**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L91)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

##### Returns

`void`

***

### wrapR

#### Get Signature

> **get** **wrapR**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L50)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **wrapR**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L54)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

***

### wrapU

#### Get Signature

> **get** **wrapU**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L20)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **wrapU**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L24)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

***

### wrapV

#### Get Signature

> **get** **wrapV**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L35)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **wrapV**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L39)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

## Methods

### compareSampler()

> **compareSampler**(`other`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L153)

Compares this sampler with another one

#### Parameters

##### other

`TextureSampler`

sampler to compare with

#### Returns

`boolean`

true if the samplers have the same parametres, else false

***

### setParameters()

> **setParameters**(`wrapU?`, `wrapV?`, `wrapR?`, `anisotropicFilteringLevel?`, `samplingMode?`, `comparisonFunction?`): `TextureSampler`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L130)

Sets all the parameters of the sampler

#### Parameters

##### wrapU?

`number` = `Constants.TEXTURE_WRAP_ADDRESSMODE`

u address mode (default: TEXTURE_WRAP_ADDRESSMODE)

##### wrapV?

`number` = `Constants.TEXTURE_WRAP_ADDRESSMODE`

v address mode (default: TEXTURE_WRAP_ADDRESSMODE)

##### wrapR?

`number` = `Constants.TEXTURE_WRAP_ADDRESSMODE`

r address mode (default: TEXTURE_WRAP_ADDRESSMODE)

##### anisotropicFilteringLevel?

`number` = `1`

anisotropic level (default: 1)

##### samplingMode?

`number` = `Constants.TEXTURE_BILINEAR_SAMPLINGMODE`

sampling mode (default: Constants.TEXTURE_BILINEAR_SAMPLINGMODE)

##### comparisonFunction?

`number` = `0`

comparison function (default: 0 - no comparison function)

#### Returns

`TextureSampler`

the current sampler instance
