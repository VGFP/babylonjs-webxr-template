[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InternalTexture

# Class: InternalTexture

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L81)

Class used to store data associated with WebGL texture data for the engine
This class should not be used directly

## Extends

- [`TextureSampler`](TextureSampler.md)

## Constructors

### Constructor

> **new InternalTexture**(`engine`, `source`, `delayAllocation?`): `InternalTexture`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:313](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L313)

Creates a new InternalTexture

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

defines the engine to use

##### source

[`InternalTextureSource`](../enumerations/InternalTextureSource.md)

defines the type of data that will be used

##### delayAllocation?

`boolean` = `false`

if the texture allocation should be delayed (default: false)

#### Returns

`InternalTexture`

#### Overrides

[`TextureSampler`](TextureSampler.md).[`constructor`](TextureSampler.md#constructor)

## Properties

### baseDepth

> **baseDepth**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:184](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L184)

Gets the initial depth of the texture (It could be rescaled if the current system does not support non power of two textures)

***

### baseHeight

> **baseHeight**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L180)

Gets the initial height of the texture (It could be rescaled if the current system does not support non power of two textures)

***

### baseWidth

> **baseWidth**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L176)

Gets the initial width of the texture (It could be rescaled if the current system does not support non power of two textures)

***

### depth

> **depth**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L172)

Gets the depth of the texture

***

### format

> **format**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L142)

Gets the format of the texture (RGB, RGBA...)

***

### generateMipMaps

> **generateMipMaps**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L111)

Gets a boolean indicating if the texture needs mipmaps generation

***

### height

> **height**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L168)

Gets the height of the texture

***

### invertY

> **invertY**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:188](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L188)

Gets a boolean indicating if the texture is inverted on Y axis

***

### is2DArray

> **is2DArray**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L97)

Defines if the texture contains 2D array data

***

### is3D

> **is3D**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L93)

Defines if the texture contains 3D data

***

### isCube

> **isCube**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L89)

Defines if the texture is a cube texture

***

### isMultiview

> **isMultiview**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L101)

Defines if the texture contains multiview data

***

### isReady

> **isReady**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L85)

Defines if the texture is ready

***

### label?

> `optional` **label?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L113)

General label used for debugging or storing a name.

#### Inherited from

[`TextureSampler`](TextureSampler.md).[`label`](TextureSampler.md#label)

***

### mipLevelCount

> **mipLevelCount**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L130)

Gets the number of mip levels for this texture.
Note: This property has the correct value only if the texture was created through
`createRawTexture` or `createRawTexture2DArray`.

***

### onErrorObservable

> **onErrorObservable**: [`Observable`](Observable.md)\<`Partial`\<\{ `exception`: `any`; `message`: `string`; \}\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L150)

Observable called when the texture load is raising an error

***

### onLoadedObservable

> **onLoadedObservable**: [`Observable`](Observable.md)\<`InternalTexture`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L146)

Observable called when the texture is loaded

***

### onRebuildCallback

> **onRebuildCallback**: [`Nullable`](../type-aliases/Nullable.md)\<(`internalTexture`) => `object`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L154)

If this callback is defined it will be called instead of the default _rebuild function

***

### samples

> **samples**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L134)

Gets the number of samples used by the texture (WebGL2+ only)

***

### samplingMode

> **samplingMode**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L11)

Gets the sampling mode of the texture

#### Inherited from

[`TextureSampler`](TextureSampler.md).[`samplingMode`](TextureSampler.md#samplingmode)

***

### type

> **type**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L138)

Gets the type of the texture (int, float...)

***

### url

> **url**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L105)

Gets the URL used to load this texture

***

### width

> **width**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:164](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L164)

Gets the width of the texture

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

#### Inherited from

[`TextureSampler`](TextureSampler.md).[`anisotropicFilteringLevel`](TextureSampler.md#anisotropicfilteringlevel)

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

#### Inherited from

[`TextureSampler`](TextureSampler.md).[`comparisonFunction`](TextureSampler.md#comparisonfunction)

***

### source

#### Get Signature

> **get** **source**(): [`InternalTextureSource`](../enumerations/InternalTextureSource.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:303](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L303)

Gets the data source type of the texture

##### Returns

[`InternalTextureSource`](../enumerations/InternalTextureSource.md)

***

### uniqueId

#### Get Signature

> **get** **uniqueId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:283](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L283)

Gets the unique id of the internal texture

##### Returns

`number`

***

### useMipMaps

#### Get Signature

> **get** **useMipMaps**(): [`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L119)

Indicates to use the mip maps (if available on the texture).
Thanks to this flag, you can instruct the sampler to not sample the mipmaps even if they exist (and if the sampling mode is set to a value that normally samples the mipmaps!)
If useMipMaps is null, the value of generateMipMaps is returned by the getter (for backward compatibility)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

#### Set Signature

> **set** **useMipMaps**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L122)

Indicates to use the mip maps (if available on the texture).
Thanks to this flag, you can instruct the sampler to not sample the mipmaps even if they exist (and if the sampling mode is set to a value that normally samples the mipmaps!)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

##### Returns

`void`

#### Overrides

[`TextureSampler`](TextureSampler.md).[`useMipMaps`](TextureSampler.md#usemipmaps)

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

#### Inherited from

[`TextureSampler`](TextureSampler.md).[`wrapR`](TextureSampler.md#wrapr)

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

#### Inherited from

[`TextureSampler`](TextureSampler.md).[`wrapU`](TextureSampler.md#wrapu)

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

#### Inherited from

[`TextureSampler`](TextureSampler.md).[`wrapV`](TextureSampler.md#wrapv)

## Methods

### compareSampler()

> **compareSampler**(`other`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureSampler.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/textureSampler.ts#L153)

Compares this sampler with another one

#### Parameters

##### other

[`TextureSampler`](TextureSampler.md)

sampler to compare with

#### Returns

`boolean`

true if the samplers have the same parametres, else false

#### Inherited from

[`TextureSampler`](TextureSampler.md).[`compareSampler`](TextureSampler.md#comparesampler)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:617](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L617)

Dispose the current allocated resources

#### Returns

`void`

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:296](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L296)

Gets the Engine the texture belongs to.

#### Returns

[`AbstractEngine`](AbstractEngine.md)

The babylon engine

***

### incrementReferences()

> **incrementReferences**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:328](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L328)

Increments the number of references (ie. the number of Texture that point to it)

#### Returns

`void`

***

### setParameters()

> **setParameters**(`wrapU?`, `wrapV?`, `wrapR?`, `anisotropicFilteringLevel?`, `samplingMode?`, `comparisonFunction?`): [`TextureSampler`](TextureSampler.md)

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

[`TextureSampler`](TextureSampler.md)

the current sampler instance

#### Inherited from

[`TextureSampler`](TextureSampler.md).[`setParameters`](TextureSampler.md#setparameters)

***

### updateSize()

> **updateSize**(`width`, `height`, `depth?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/internalTexture.ts:338](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/internalTexture.ts#L338)

Change the size of the texture (not the size of the content)

#### Parameters

##### width

`number`

defines the new width

##### height

`number`

defines the new height

##### depth?

`number` = `1`

defines the new depth (1 by default)

#### Returns

`void`
