[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / HDRCubeTexture

# Class: HDRCubeTexture

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/hdrCubeTexture.pure.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/hdrCubeTexture.pure.ts#L17)

This represents a texture coming from an HDR input.

The supported format is currently panorama picture stored in RGBE format.
Example of such files can be found on Poly Haven: https://polyhaven.com/hdris

## Extends

- [`EnvCubeTexture`](EnvCubeTexture.md)

## Constructors

### Constructor

> **new HDRCubeTexture**(`url`, `sceneOrEngine`, `size`, `noMipmap?`, `generateHarmonics?`, `gammaSpace?`, `prefilterOnLoad?`, `onLoad?`, `onError?`, `supersample?`, `prefilterIrradianceOnLoad?`, `prefilterUsingCdf?`, `sphericalPolynomialTargetSize?`): `HDRCubeTexture`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/hdrCubeTexture.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/hdrCubeTexture.pure.ts#L35)

Instantiates an HDRTexture from the following parameters.

#### Parameters

##### url

`string`

The location of the HDR raw data (Panorama stored in RGBE format)

##### sceneOrEngine

[`Scene`](Scene.md) \| [`AbstractEngine`](AbstractEngine.md)

The scene or engine the texture will be used in

##### size

`number`

The cubemap desired size (the more it increases the longer the generation will be)

##### noMipmap?

`boolean` = `false`

Forces to not generate the mipmap if true

##### generateHarmonics?

`boolean` = `true`

Specifies whether you want to extract the polynomial harmonics during the generation process

##### gammaSpace?

`boolean` = `false`

Specifies if the texture will be use in gamma or linear space (the PBR material requires those texture in linear space, but the standard material would require them in Gamma space)

##### prefilterOnLoad?

`boolean` = `false`

Prefilters HDR texture to allow use of this texture as a PBR reflection texture.

##### onLoad?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

on success callback function

##### onError?

[`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\> = `null`

on error callback function

##### supersample?

`boolean` = `false`

Defines if texture must be supersampled (default: false)

##### prefilterIrradianceOnLoad?

`boolean` = `false`

Prefilters HDR texture to allow use of this texture for irradiance lighting.

##### prefilterUsingCdf?

`boolean` = `false`

Defines if the prefiltering should be done using a CDF instead of the default approach.

##### sphericalPolynomialTargetSize?

`number` = `0`

Target face size for spherical polynomial computation. 0 = full resolution (default).

#### Returns

`HDRCubeTexture`

#### Overrides

[`EnvCubeTexture`](EnvCubeTexture.md).[`constructor`](EnvCubeTexture.md#constructor)

## Properties

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:487](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L487)

Define the list of animation attached to the texture.

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`animations`](EnvCubeTexture.md#animations)

***

### anisotropicFilteringLevel

> **anisotropicFilteringLevel**: `number` = `BaseTexture.DEFAULT_ANISOTROPIC_FILTERING_LEVEL`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L222)

With compliant hardware and browser (supporting anisotropic filtering)
this defines the level of anisotropic filtering in the texture.
The higher the better but the slower. This defaults to 4 as it seems to be the best tradeoff.

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`anisotropicFilteringLevel`](EnvCubeTexture.md#anisotropicfilteringlevel)

***

### boundingBoxPosition

> **boundingBoxPosition**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts#L76)

Gets or sets the center of the bounding box associated with the cube texture
It must define where the camera used to render the texture was set

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`boundingBoxPosition`](EnvCubeTexture.md#boundingboxposition)

***

### delayLoadState

> **delayLoadState**: `number` = `Constants.DELAYLOADSTATE_NONE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L66)

Define the current state of the loading sequence when in delayed load mode.

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`delayLoadState`](EnvCubeTexture.md#delayloadstate)

***

### displayName

> **displayName**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L49)

Define the display name of the texture, which is used as tree item name of the dedicated node in the inspector

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`displayName`](EnvCubeTexture.md#displayname)

***

### invertZ

> **invertZ**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:352](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L352)

Is Z inverted in the texture (useful in a cube texture).

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`invertZ`](EnvCubeTexture.md#invertz)

***

### isRenderTarget

> **isRenderTarget**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:451](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L451)

Define if the texture is a render target.

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`isRenderTarget`](EnvCubeTexture.md#isrendertarget)

***

### level

> **level**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L111)

Intensity or strength of the texture.
It is commonly used by materials to fine tune the intensity of the texture

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`level`](EnvCubeTexture.md#level)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L55)

Gets or sets an object used to store user defined information.

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`metadata`](EnvCubeTexture.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L43)

Define the name of the texture.

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`name`](EnvCubeTexture.md#name)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:492](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L492)

An event triggered when the texture is disposed.

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`onDisposeObservable`](EnvCubeTexture.md#ondisposeobservable)

***

### onLoadObservable

> **onLoadObservable**: [`Observable`](Observable.md)\<[`EnvCubeTexture`](EnvCubeTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts#L103)

Observable triggered once the texture has been loaded.

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`onLoadObservable`](EnvCubeTexture.md#onloadobservable)

***

### optimizeUVAllocation

> **optimizeUVAllocation**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L121)

Gets or sets a boolean indicating that the texture should try to reduce shader code if there is no UV manipulation.
(ie. when texture.getTextureMatrix().isIdentityAs3x2() returns true)

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`optimizeUVAllocation`](EnvCubeTexture.md#optimizeuvallocation)

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L63)

For internal use only. Please do not use.

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`reservedDataStore`](EnvCubeTexture.md#reserveddatastore)

***

### sphericalPolynomial

> **sphericalPolynomial**: [`Nullable`](../type-aliases/Nullable.md)\<[`SphericalPolynomial`](SphericalPolynomial.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.types.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.types.ts#L11)

Get the polynomial representation of the texture data.
This is mainly use as a fast way to recover IBL Diffuse irradiance data.

#### See

https://learnopengl.com/PBR/IBL/Diffuse-irradiance

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`sphericalPolynomial`](EnvCubeTexture.md#sphericalpolynomial)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L37)

Gets or sets the unique id of the texture

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`uniqueId`](EnvCubeTexture.md#uniqueid)

***

### url

> **url**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts#L41)

The texture URL.

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`url`](EnvCubeTexture.md#url)

***

### wrapR

> **wrapR**: `number` = `Constants.TEXTURE_WRAP_ADDRESSMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L214)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`wrapR`](EnvCubeTexture.md#wrapr)

***

### DEFAULT\_ANISOTROPIC\_FILTERING\_LEVEL

> `static` **DEFAULT\_ANISOTROPIC\_FILTERING\_LEVEL**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L31)

Default anisotropic filtering level for the application.
It is set to 4 as a good tradeoff between perf and quality.

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`DEFAULT_ANISOTROPIC_FILTERING_LEVEL`](EnvCubeTexture.md#default_anisotropic_filtering_level)

## Accessors

### boundingBoxSize

#### Get Signature

> **get** **boundingBoxSize**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts#L96)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **boundingBoxSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts#L86)

Gets or sets the size of the bounding box associated with the cube texture
When defined, the cubemap will switch to local mode

##### See

https://community.arm.com/graphics/b/blog/posts/reflections-based-on-local-cubemaps-in-unity

##### Example

```ts
https://www.babylonjs-playground.com/#RNASML
```

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`boundingBoxSize`](EnvCubeTexture.md#boundingboxsize)

***

### canRescale

#### Get Signature

> **get** **canRescale**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:635](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L635)

Get if the texture can rescale.

##### Returns

`boolean`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`canRescale`](EnvCubeTexture.md#canrescale)

***

### coordinatesIndex

#### Get Signature

> **get** **coordinatesIndex**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L138)

##### Returns

`number`

#### Set Signature

> **set** **coordinatesIndex**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L127)

Define the UV channel to use starting from 0 and defaulting to 0.
This is part of the texture as textures usually maps to one uv set.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`coordinatesIndex`](EnvCubeTexture.md#coordinatesindex)

***

### coordinatesMode

#### Get Signature

> **get** **coordinatesMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L172)

How a texture is mapped.
Unused in thin texture mode.

##### Returns

`number`

#### Set Signature

> **set** **coordinatesMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L161)

How a texture is mapped.

| Value | Type                                | Description |
| ----- | ----------------------------------- | ----------- |
| 0     | EXPLICIT_MODE                       |             |
| 1     | SPHERICAL_MODE                      |             |
| 2     | PLANAR_MODE                         |             |
| 3     | CUBIC_MODE                          |             |
| 4     | PROJECTION_MODE                     |             |
| 5     | SKYBOX_MODE                         |             |
| 6     | INVCUBIC_MODE                       |             |
| 7     | EQUIRECTANGULAR_MODE                |             |
| 8     | FIXED_EQUIRECTANGULAR_MODE          |             |
| 9     | FIXED_EQUIRECTANGULAR_MIRRORED_MODE |             |

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`coordinatesMode`](EnvCubeTexture.md#coordinatesmode)

***

### errorObject

#### Get Signature

> **get** **errorObject**(): \{ `exception?`: `any`; `message?`: `string`; \} \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:538](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L538)

If a loading error occurred this object will be populated with information about the error.

##### Returns

\{ `exception?`: `any`; `message?`: `string`; \} \| `undefined`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`errorObject`](EnvCubeTexture.md#errorobject)

***

### gammaSpace

#### Get Signature

> **get** **gammaSpace**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:297](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L297)

Define if the texture contains data in gamma space (most of the png/jpg aside bump).
HDR texture are usually stored in linear space.
This only impacts the PBR and Background materials

##### Returns

`boolean`

#### Set Signature

> **set** **gammaSpace**(`gamma`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:309](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L309)

##### Parameters

###### gamma

`boolean`

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`gammaSpace`](EnvCubeTexture.md#gammaspace)

***

### getAlphaFromRGB

#### Get Signature

> **get** **getAlphaFromRGB**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L102)

##### Returns

`boolean`

#### Set Signature

> **set** **getAlphaFromRGB**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L91)

Defines if the alpha value should be determined via the rgb values.
If true the luminance of the pixel might be used to find the corresponding alpha value.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`getAlphaFromRGB`](EnvCubeTexture.md#getalphafromrgb)

***

### hasAlpha

#### Get Signature

> **get** **hasAlpha**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L81)

##### Returns

`boolean`

#### Set Signature

> **set** **hasAlpha**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L70)

Define if the texture is having a usable alpha value (can be use for transparency or glossiness for instance).

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`hasAlpha`](EnvCubeTexture.md#hasalpha)

***

### irradianceTexture

#### Get Signature

> **get** **irradianceTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:426](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L426)

In case a better definition than spherical harmonics is required for the diffuse part of the environment.
You can set the irradiance texture to rely on a texture instead of the spherical approach.
This texture need to have the same characteristics than its parent (Cube vs 2d, coordinates mode, Gamma/Linear, RGBD).

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

#### Set Signature

> **set** **irradianceTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:433](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L433)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`irradianceTexture`](EnvCubeTexture.md#irradiancetexture)

***

### is2DArray

#### Get Signature

> **get** **is2DArray**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:272](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L272)

Define if the texture is a 2d array texture (webgl 2) or if false a 2d texture.

##### Returns

`boolean`

#### Set Signature

> **set** **is2DArray**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:281](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L281)

Define if the texture is a 2d array texture (webgl 2) or if false a 2d texture.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`is2DArray`](EnvCubeTexture.md#is2darray)

***

### is3D

#### Get Signature

> **get** **is3D**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L251)

Define if the texture is a 3d texture (webgl 2) or if false a 2d texture.

##### Returns

`boolean`

#### Set Signature

> **set** **is3D**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L260)

Define if the texture is a 3d texture (webgl 2) or if false a 2d texture.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`is3D`](EnvCubeTexture.md#is3d)

***

### isBlocking

#### Get Signature

> **get** **isBlocking**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts#L53)

Gets whether or not the texture is blocking during loading.

##### Returns

`boolean`

#### Set Signature

> **set** **isBlocking**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts#L47)

Sets whether or not the texture is blocking during loading.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`isBlocking`](EnvCubeTexture.md#isblocking)

***

### isCube

#### Get Signature

> **get** **isCube**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:230](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L230)

Define if the texture is a cube texture or if false a 2d texture.

##### Returns

`boolean`

#### Set Signature

> **set** **isCube**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L239)

Define if the texture is a cube texture or if false a 2d texture.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`isCube`](EnvCubeTexture.md#iscube)

***

### isRGBD

#### Get Signature

> **get** **isRGBD**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:331](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L331)

Gets or sets whether or not the texture contains RGBD data.

##### Returns

`boolean`

#### Set Signature

> **set** **isRGBD**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:334](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L334)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`isRGBD`](EnvCubeTexture.md#isrgbd)

***

### linearSpecularLOD

#### Get Signature

> **get** **linearSpecularLOD**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L407)

With prefiltered texture, defined if the specular generation is based on a linear ramp.
By default we are using a log2 of the linear roughness helping to keep a better resolution for
average roughness values.

##### Returns

`boolean`

#### Set Signature

> **set** **linearSpecularLOD**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:414](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L414)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`linearSpecularLOD`](EnvCubeTexture.md#linearspecularlod)

***

### loadingError

#### Get Signature

> **get** **loadingError**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:531](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L531)

Was there any loading error?

##### Returns

`boolean`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`loadingError`](EnvCubeTexture.md#loadingerror)

***

### lodGenerationOffset

#### Get Signature

> **get** **lodGenerationOffset**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:371](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L371)

With prefiltered texture, defined the offset used during the prefiltering steps.

##### Returns

`number`

#### Set Signature

> **set** **lodGenerationOffset**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:378](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L378)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`lodGenerationOffset`](EnvCubeTexture.md#lodgenerationoffset)

***

### lodGenerationScale

#### Get Signature

> **get** **lodGenerationScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:388](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L388)

With prefiltered texture, defined the scale used during the prefiltering steps.

##### Returns

`number`

#### Set Signature

> **set** **lodGenerationScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:395](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L395)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`lodGenerationScale`](EnvCubeTexture.md#lodgenerationscale)

***

### noMipmap

#### Get Signature

> **get** **noMipmap**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:357](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L357)

Are mip maps generated for this texture or not.

##### Returns

`boolean`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`noMipmap`](EnvCubeTexture.md#nomipmap)

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:499](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L499)

Callback triggered when the texture has been disposed.
Kept for back compatibility, you can use the onDisposeObservable instead.

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`onDispose`](EnvCubeTexture.md#ondispose)

***

### rotationY

#### Get Signature

> **get** **rotationY**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts#L68)

Gets texture matrix rotation angle around Y axis radians.

##### Returns

`number`

#### Set Signature

> **set** **rotationY**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts#L61)

Sets texture matrix rotation angle around Y axis in radians.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`rotationY`](EnvCubeTexture.md#rotationy)

***

### samplingMode

#### Get Signature

> **get** **samplingMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L254)

Get the current sampling mode associated with the texture.

##### Returns

`number`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`samplingMode`](EnvCubeTexture.md#samplingmode)

***

### textureFormat

#### Get Signature

> **get** **textureFormat**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:696](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L696)

Get the texture underlying format (RGB, RGBA...)

##### Returns

`number`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`textureFormat`](EnvCubeTexture.md#textureformat)

***

### textureType

#### Get Signature

> **get** **textureType**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:685](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L685)

Get the texture underlying type (INT, FLOAT...)

##### Returns

`number`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`textureType`](EnvCubeTexture.md#texturetype)

***

### uid

#### Get Signature

> **get** **uid**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:456](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L456)

Define the unique id of the texture in the scene.

##### Returns

`string`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`uid`](EnvCubeTexture.md#uid)

***

### wrapU

#### Get Signature

> **get** **wrapU**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:184](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L184)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Returns

`number`

#### Set Signature

> **set** **wrapU**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L187)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`wrapU`](EnvCubeTexture.md#wrapu)

***

### wrapV

#### Get Signature

> **get** **wrapV**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L199)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Returns

`number`

#### Set Signature

> **set** **wrapV**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:202](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L202)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`wrapV`](EnvCubeTexture.md#wrapv)

## Methods

### clone()

> **clone**(): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts:446](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts#L446)

Clones the current texture.

#### Returns

`this`

the cloned texture

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`clone`](EnvCubeTexture.md#clone)

***

### delayLoad()

> **delayLoad**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts:370](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts#L370)

Triggers the load sequence in delayed load mode.

#### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`delayLoad`](EnvCubeTexture.md#delayload)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts:410](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts#L410)

Dispose the texture and release its associated resources.

#### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`dispose`](EnvCubeTexture.md#dispose)

***

### forceSphericalPolynomialsRecompute()

> **forceSphericalPolynomialsRecompute**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.types.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.types.ts#L17)

Force recomputation of spherical polynomials.
Can be useful if you generate a cubemap multiple times (from a probe for eg) and you need the proper polynomials each time

#### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`forceSphericalPolynomialsRecompute`](EnvCubeTexture.md#forcesphericalpolynomialsrecompute)

***

### getBaseSize()

> **getBaseSize**(): [`ISize`](../interfaces/ISize.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:230](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L230)

Get the base size of the texture.
It can be different from the size if the texture has been resized for POT for instance

#### Returns

[`ISize`](../interfaces/ISize.md)

the base size

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`getBaseSize`](EnvCubeTexture.md#getbasesize)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/hdrCubeTexture.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/hdrCubeTexture.pure.ts#L71)

Get the current class name of the texture useful for serialization or dynamic coding.

#### Returns

`string`

"HDRCubeTexture"

#### Overrides

[`EnvCubeTexture`](EnvCubeTexture.md).[`getClassName`](EnvCubeTexture.md#getclassname)

***

### getInternalTexture()

> **getInternalTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L199)

Get the underlying lower level texture from Babylon.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

the internal texture

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`getInternalTexture`](EnvCubeTexture.md#getinternaltexture)

***

### getReflectionTextureMatrix()

> **getReflectionTextureMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts:387](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts#L387)

Get the texture reflection matrix used to rotate/transform the reflection.

#### Returns

[`Matrix`](Matrix.md)

the reflection matrix

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`getReflectionTextureMatrix`](EnvCubeTexture.md#getreflectiontexturematrix)

***

### getRefractionTextureMatrix()

> **getRefractionTextureMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:613](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L613)

Gets a suitable rotate/transform matrix when the texture is used for refraction.
There's a separate function from getReflectionTextureMatrix because refraction requires a special configuration of the matrix in right-handed mode.

#### Returns

[`Matrix`](Matrix.md)

The refraction matrix

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`getRefractionTextureMatrix`](EnvCubeTexture.md#getrefractiontexturematrix)

***

### getScene()

> **getScene**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:583](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L583)

Get the scene the texture belongs to.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

the scene or null if undefined

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`getScene`](EnvCubeTexture.md#getscene)

***

### getSize()

> **getSize**(): [`ISize`](../interfaces/ISize.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L207)

Get the size of the texture.

#### Returns

[`ISize`](../interfaces/ISize.md)

the texture size.

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`getSize`](EnvCubeTexture.md#getsize)

***

### getTextureMatrix()

> **getTextureMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:596](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L596)

Get the texture transform matrix used to offset tile the texture for instance.

#### Returns

[`Matrix`](Matrix.md)

the transformation matrix

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`getTextureMatrix`](EnvCubeTexture.md#gettexturematrix)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L177)

Get if the texture is ready to be used (downloaded, converted, mip mapped...).

#### Returns

`boolean`

true if fully ready

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`isReady`](EnvCubeTexture.md#isready)

***

### isReadyOrNotBlocking()

> **isReadyOrNotBlocking**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:621](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L621)

Get if the texture is ready to be consumed (either it is ready or it is not blocking)

#### Returns

`boolean`

true if ready, not blocking or if there was an error loading the texture

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`isReadyOrNotBlocking`](EnvCubeTexture.md#isreadyornotblocking)

***

### readPixels()

> **readPixels**(`faceIndex?`, `level?`, `buffer?`, `flushRenderer?`, `noDataConversion?`, `x?`, `y?`, `width?`, `height?`): [`Nullable`](../type-aliases/Nullable.md)\<`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:733](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L733)

Reads the pixels stored in the webgl texture and returns them as an ArrayBuffer.
This will returns an RGBA array buffer containing either in values (0-255) or
float values (0-1) depending of the underlying buffer type.
Note that you can use [GetTextureDataAsync](../functions/GetTextureDataAsync.md) instead, which will also support reading from a compressed texture (by rendering it to an intermediate RGBA texture and retrieving the bytes from it).

#### Parameters

##### faceIndex?

`number` = `0`

defines the face of the texture to read (in case of cube texture)

##### level?

`number` = `0`

defines the LOD level of the texture to read (in case of Mip Maps)

##### buffer?

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\> = `null`

defines a user defined buffer to fill with data (can be null)

##### flushRenderer?

`boolean` = `true`

true to flush the renderer from the pending commands before reading the pixels

##### noDataConversion?

`boolean` = `false`

false to convert the data to Uint8Array (if texture type is UNSIGNED_BYTE) or to Float32Array (if texture type is anything but UNSIGNED_BYTE). If true, the type of the generated buffer (if buffer==null) will depend on the type of the texture

##### x?

`number` = `0`

defines the region x coordinates to start reading from (default to 0)

##### y?

`number` = `0`

defines the region y coordinates to start reading from (default to 0)

##### width?

`number` = `Number.MAX_VALUE`

defines the region width to read from (default to the texture size at level)

##### height?

`number` = `Number.MAX_VALUE`

defines the region width to read from (default to the texture size at level)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>\>

The Array buffer promise containing the pixels data.

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`readPixels`](EnvCubeTexture.md#readpixels)

***

### releaseInternalTexture()

> **releaseInternalTexture**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L296)

Release and destroy the underlying lower level texture aka internalTexture.

#### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`releaseInternalTexture`](EnvCubeTexture.md#releaseinternaltexture)

***

### scale()

> **scale**(`ratio`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:630](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L630)

Scales the texture if is `canRescale()`

#### Parameters

##### ratio

`number`

the resize factor we want to use to rescale

#### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`scale`](EnvCubeTexture.md#scale)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/hdrCubeTexture.pure.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/hdrCubeTexture.pure.ts#L94)

Serialize the texture to a JSON representation.

#### Returns

`any`

The JSON representation of the texture

#### Overrides

[`EnvCubeTexture`](EnvCubeTexture.md).[`serialize`](EnvCubeTexture.md#serialize)

***

### setReflectionTextureMatrix()

> **setReflectionTextureMatrix**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts:395](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/envCubeTexture.pure.ts#L395)

Set the texture reflection matrix used to rotate/transform the reflection.

#### Parameters

##### value

[`Matrix`](Matrix.md)

Define the reflection matrix to set

#### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`setReflectionTextureMatrix`](EnvCubeTexture.md#setreflectiontexturematrix)

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:472](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L472)

Return a string representation of the texture.

#### Returns

`string`

the texture as a string

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`toString`](EnvCubeTexture.md#tostring)

***

### updateSamplingMode()

> **updateSamplingMode**(`samplingMode`, `generateMipMaps?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:287](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L287)

Update the sampling mode of the texture.
Default is Trilinear mode.

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 1     | NEAREST_SAMPLINGMODE or NEAREST_NEAREST_MIPLINEAR  | Nearest is: mag = nearest, min = nearest, mip = linear |
| 2     | BILINEAR_SAMPLINGMODE or LINEAR_LINEAR_MIPNEAREST | Bilinear is: mag = linear, min = linear, mip = nearest |
| 3     | TRILINEAR_SAMPLINGMODE or LINEAR_LINEAR_MIPLINEAR | Trilinear is: mag = linear, min = linear, mip = linear |
| 4     | NEAREST_NEAREST_MIPNEAREST |             |
| 5    | NEAREST_LINEAR_MIPNEAREST |             |
| 6    | NEAREST_LINEAR_MIPLINEAR |             |
| 7    | NEAREST_LINEAR |             |
| 8    | NEAREST_NEAREST |             |
| 9   | LINEAR_NEAREST_MIPNEAREST |             |
| 10   | LINEAR_NEAREST_MIPLINEAR |             |
| 11   | LINEAR_LINEAR |             |
| 12   | LINEAR_NEAREST |             |

   > _mag_: magnification filter (close to the viewer)
   > _min_: minification filter (far from the viewer)
   > _mip_: filter used between mip map levels

#### Parameters

##### samplingMode

`number`

Define the new sampling mode of the texture

##### generateMipMaps?

`boolean` = `false`

Define if the texture should generate mip maps or not. Default is false.

#### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`updateSamplingMode`](EnvCubeTexture.md#updatesamplingmode)

***

### Parse()

> `static` **Parse**(`parsedTexture`, `scene`, `rootUrl`): [`Nullable`](../type-aliases/Nullable.md)\<`HDRCubeTexture`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/hdrCubeTexture.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/hdrCubeTexture.pure.ts#L112)

Parses a JSON representation of an HDR Texture in order to create the texture

#### Parameters

##### parsedTexture

`any`

Define the JSON representation

##### scene

[`Scene`](Scene.md)

Define the scene the texture should be created in

##### rootUrl

`string`

Define the root url in case we need to load relative dependencies

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`HDRCubeTexture`\>

the newly created texture after parsing

***

### WhenAllReady()

> `static` **WhenAllReady**(`textures`, `callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:898](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L898)

Helper function to be called back once a list of texture contains only ready textures.

#### Parameters

##### textures

[`BaseTexture`](BaseTexture.md)[]

Define the list of textures to wait for

##### callback

() => `void`

Define the callback triggered once the entire list will be ready

#### Returns

`void`

#### Inherited from

[`EnvCubeTexture`](EnvCubeTexture.md).[`WhenAllReady`](EnvCubeTexture.md#whenallready)
