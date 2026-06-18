[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ColorGradingTexture

# Class: ColorGradingTexture

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/colorGradingTexture.pure.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/colorGradingTexture.pure.ts#L20)

This represents a color grading texture. This acts as a lookup table LUT, useful during post process
It can help converting any input color in a desired output one. This can then be used to create effects
from sepia, black and white to sixties or futuristic rendering...

The only supported format is currently 3dl.
More information on LUT: https://en.wikipedia.org/wiki/3D_lookup_table

## Extends

- [`BaseTexture`](BaseTexture.md)

## Constructors

### Constructor

> **new ColorGradingTexture**(`url`, `sceneOrEngine`, `onLoad?`): `ColorGradingTexture`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/colorGradingTexture.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/colorGradingTexture.pure.ts#L41)

Instantiates a ColorGradingTexture from the following parameters.

#### Parameters

##### url

`string`

The location of the color grading data (currently only supporting 3dl)

##### sceneOrEngine

[`Scene`](Scene.md) \| [`AbstractEngine`](AbstractEngine.md)

The scene or engine the texture will be used in

##### onLoad?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

defines a callback triggered when the texture has been loaded

#### Returns

`ColorGradingTexture`

#### Overrides

[`BaseTexture`](BaseTexture.md).[`constructor`](BaseTexture.md#constructor)

## Properties

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:487](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L487)

Define the list of animation attached to the texture.

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`animations`](BaseTexture.md#animations)

***

### anisotropicFilteringLevel

> **anisotropicFilteringLevel**: `number` = `BaseTexture.DEFAULT_ANISOTROPIC_FILTERING_LEVEL`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L222)

With compliant hardware and browser (supporting anisotropic filtering)
this defines the level of anisotropic filtering in the texture.
The higher the better but the slower. This defaults to 4 as it seems to be the best tradeoff.

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`anisotropicFilteringLevel`](BaseTexture.md#anisotropicfilteringlevel)

***

### delayLoadState

> **delayLoadState**: `number` = `Constants.DELAYLOADSTATE_NONE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L66)

Define the current state of the loading sequence when in delayed load mode.

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`delayLoadState`](BaseTexture.md#delayloadstate)

***

### displayName

> **displayName**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L49)

Define the display name of the texture, which is used as tree item name of the dedicated node in the inspector

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`displayName`](BaseTexture.md#displayname)

***

### invertZ

> **invertZ**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:352](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L352)

Is Z inverted in the texture (useful in a cube texture).

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`invertZ`](BaseTexture.md#invertz)

***

### isRenderTarget

> **isRenderTarget**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:451](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L451)

Define if the texture is a render target.

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`isRenderTarget`](BaseTexture.md#isrendertarget)

***

### level

> **level**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L111)

Intensity or strength of the texture.
It is commonly used by materials to fine tune the intensity of the texture

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`level`](BaseTexture.md#level)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L55)

Gets or sets an object used to store user defined information.

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`metadata`](BaseTexture.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L43)

Define the name of the texture.

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`name`](BaseTexture.md#name)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:492](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L492)

An event triggered when the texture is disposed.

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`onDisposeObservable`](BaseTexture.md#ondisposeobservable)

***

### optimizeUVAllocation

> **optimizeUVAllocation**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L121)

Gets or sets a boolean indicating that the texture should try to reduce shader code if there is no UV manipulation.
(ie. when texture.getTextureMatrix().isIdentityAs3x2() returns true)

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`optimizeUVAllocation`](BaseTexture.md#optimizeuvallocation)

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L63)

For internal use only. Please do not use.

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`reservedDataStore`](BaseTexture.md#reserveddatastore)

***

### sphericalPolynomial

> **sphericalPolynomial**: [`Nullable`](../type-aliases/Nullable.md)\<[`SphericalPolynomial`](SphericalPolynomial.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.types.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.types.ts#L11)

Get the polynomial representation of the texture data.
This is mainly use as a fast way to recover IBL Diffuse irradiance data.

#### See

https://learnopengl.com/PBR/IBL/Diffuse-irradiance

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`sphericalPolynomial`](BaseTexture.md#sphericalpolynomial)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L37)

Gets or sets the unique id of the texture

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`uniqueId`](BaseTexture.md#uniqueid)

***

### url

> **url**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/colorGradingTexture.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/colorGradingTexture.pure.ts#L24)

The texture URL.

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

[`BaseTexture`](BaseTexture.md).[`wrapR`](BaseTexture.md#wrapr)

***

### DEFAULT\_ANISOTROPIC\_FILTERING\_LEVEL

> `static` **DEFAULT\_ANISOTROPIC\_FILTERING\_LEVEL**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L31)

Default anisotropic filtering level for the application.
It is set to 4 as a good tradeoff between perf and quality.

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`DEFAULT_ANISOTROPIC_FILTERING_LEVEL`](BaseTexture.md#default_anisotropic_filtering_level)

## Accessors

### canRescale

#### Get Signature

> **get** **canRescale**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:635](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L635)

Get if the texture can rescale.

##### Returns

`boolean`

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`canRescale`](BaseTexture.md#canrescale)

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

[`BaseTexture`](BaseTexture.md).[`coordinatesIndex`](BaseTexture.md#coordinatesindex)

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

[`BaseTexture`](BaseTexture.md).[`coordinatesMode`](BaseTexture.md#coordinatesmode)

***

### errorObject

#### Get Signature

> **get** **errorObject**(): \{ `exception?`: `any`; `message?`: `string`; \} \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:538](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L538)

If a loading error occurred this object will be populated with information about the error.

##### Returns

\{ `exception?`: `any`; `message?`: `string`; \} \| `undefined`

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`errorObject`](BaseTexture.md#errorobject)

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

[`BaseTexture`](BaseTexture.md).[`gammaSpace`](BaseTexture.md#gammaspace)

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

[`BaseTexture`](BaseTexture.md).[`getAlphaFromRGB`](BaseTexture.md#getalphafromrgb)

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

[`BaseTexture`](BaseTexture.md).[`hasAlpha`](BaseTexture.md#hasalpha)

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

[`BaseTexture`](BaseTexture.md).[`irradianceTexture`](BaseTexture.md#irradiancetexture)

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

[`BaseTexture`](BaseTexture.md).[`is2DArray`](BaseTexture.md#is2darray)

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

[`BaseTexture`](BaseTexture.md).[`is3D`](BaseTexture.md#is3d)

***

### isBlocking

#### Get Signature

> **get** **isBlocking**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:515](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L515)

Define if the texture is preventing a material to render or not.
If not and the texture is not ready, the engine will use a default black texture instead.

##### Returns

`boolean`

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`isBlocking`](BaseTexture.md#isblocking)

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

[`BaseTexture`](BaseTexture.md).[`isCube`](BaseTexture.md#iscube)

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

[`BaseTexture`](BaseTexture.md).[`isRGBD`](BaseTexture.md#isrgbd)

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

[`BaseTexture`](BaseTexture.md).[`linearSpecularLOD`](BaseTexture.md#linearspecularlod)

***

### loadingError

#### Get Signature

> **get** **loadingError**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:531](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L531)

Was there any loading error?

##### Returns

`boolean`

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`loadingError`](BaseTexture.md#loadingerror)

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

[`BaseTexture`](BaseTexture.md).[`lodGenerationOffset`](BaseTexture.md#lodgenerationoffset)

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

[`BaseTexture`](BaseTexture.md).[`lodGenerationScale`](BaseTexture.md#lodgenerationscale)

***

### noMipmap

#### Get Signature

> **get** **noMipmap**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:357](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L357)

Are mip maps generated for this texture or not.

##### Returns

`boolean`

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`noMipmap`](BaseTexture.md#nomipmap)

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

[`BaseTexture`](BaseTexture.md).[`onDispose`](BaseTexture.md#ondispose)

***

### samplingMode

#### Get Signature

> **get** **samplingMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L254)

Get the current sampling mode associated with the texture.

##### Returns

`number`

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`samplingMode`](BaseTexture.md#samplingmode)

***

### textureFormat

#### Get Signature

> **get** **textureFormat**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:696](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L696)

Get the texture underlying format (RGB, RGBA...)

##### Returns

`number`

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`textureFormat`](BaseTexture.md#textureformat)

***

### textureType

#### Get Signature

> **get** **textureType**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:685](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L685)

Get the texture underlying type (INT, FLOAT...)

##### Returns

`number`

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`textureType`](BaseTexture.md#texturetype)

***

### uid

#### Get Signature

> **get** **uid**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:456](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L456)

Define the unique id of the texture in the scene.

##### Returns

`string`

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`uid`](BaseTexture.md#uid)

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

[`BaseTexture`](BaseTexture.md).[`wrapU`](BaseTexture.md#wrapu)

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

[`BaseTexture`](BaseTexture.md).[`wrapV`](BaseTexture.md#wrapv)

## Methods

### clone()

> **clone**(): `ColorGradingTexture`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/colorGradingTexture.pure.ts:257](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/colorGradingTexture.pure.ts#L257)

Clones the color grading texture.

#### Returns

`ColorGradingTexture`

the cloned texture

#### Overrides

[`BaseTexture`](BaseTexture.md).[`clone`](BaseTexture.md#clone)

***

### delayLoad()

> **delayLoad**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/colorGradingTexture.pure.ts:269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/colorGradingTexture.pure.ts#L269)

Called during delayed load for textures.

#### Returns

`void`

#### Overrides

[`BaseTexture`](BaseTexture.md).[`delayLoad`](BaseTexture.md#delayload)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:840](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L840)

Dispose the texture and release its associated resources.

#### Returns

`void`

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`dispose`](BaseTexture.md#dispose)

***

### forceSphericalPolynomialsRecompute()

> **forceSphericalPolynomialsRecompute**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.types.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.types.ts#L17)

Force recomputation of spherical polynomials.
Can be useful if you generate a cubemap multiple times (from a probe for eg) and you need the proper polynomials each time

#### Returns

`void`

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`forceSphericalPolynomialsRecompute`](BaseTexture.md#forcesphericalpolynomialsrecompute)

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

[`BaseTexture`](BaseTexture.md).[`getBaseSize`](BaseTexture.md#getbasesize)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:480](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L480)

Get the class name of the texture.

#### Returns

`string`

"BaseTexture"

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`getClassName`](BaseTexture.md#getclassname)

***

### getInternalTexture()

> **getInternalTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L199)

Get the underlying lower level texture from Babylon.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

the internal texture

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`getInternalTexture`](BaseTexture.md#getinternaltexture)

***

### getReflectionTextureMatrix()

> **getReflectionTextureMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:604](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L604)

Get the texture reflection matrix used to rotate/transform the reflection.

#### Returns

[`Matrix`](Matrix.md)

the reflection matrix

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`getReflectionTextureMatrix`](BaseTexture.md#getreflectiontexturematrix)

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

[`BaseTexture`](BaseTexture.md).[`getRefractionTextureMatrix`](BaseTexture.md#getrefractiontexturematrix)

***

### getScene()

> **getScene**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:583](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L583)

Get the scene the texture belongs to.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

the scene or null if undefined

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`getScene`](BaseTexture.md#getscene)

***

### getSize()

> **getSize**(): [`ISize`](../interfaces/ISize.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L207)

Get the size of the texture.

#### Returns

[`ISize`](../interfaces/ISize.md)

the texture size.

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`getSize`](BaseTexture.md#getsize)

***

### getTextureMatrix()

> **getTextureMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/colorGradingTexture.pure.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/colorGradingTexture.pure.ts#L84)

#### Returns

[`Matrix`](Matrix.md)

the texture matrix used in most of the material.
This is not used in color grading but keep for troubleshooting purpose (easily swap diffuse by colorgrading to look in).

#### Overrides

[`BaseTexture`](BaseTexture.md).[`getTextureMatrix`](BaseTexture.md#gettexturematrix)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L177)

Get if the texture is ready to be used (downloaded, converted, mip mapped...).

#### Returns

`boolean`

true if fully ready

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`isReady`](BaseTexture.md#isready)

***

### isReadyOrNotBlocking()

> **isReadyOrNotBlocking**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:621](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L621)

Get if the texture is ready to be consumed (either it is ready or it is not blocking)

#### Returns

`boolean`

true if ready, not blocking or if there was an error loading the texture

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`isReadyOrNotBlocking`](BaseTexture.md#isreadyornotblocking)

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

[`BaseTexture`](BaseTexture.md).[`readPixels`](BaseTexture.md#readpixels)

***

### releaseInternalTexture()

> **releaseInternalTexture**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L296)

Release and destroy the underlying lower level texture aka internalTexture.

#### Returns

`void`

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`releaseInternalTexture`](BaseTexture.md#releaseinternaltexture)

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

[`BaseTexture`](BaseTexture.md).[`scale`](BaseTexture.md#scale)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/colorGradingTexture.pure.ts:286](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/colorGradingTexture.pure.ts#L286)

Serializes the LUT texture to json format.

#### Returns

`any`

The JSON representation of the texture

#### Overrides

[`BaseTexture`](BaseTexture.md).[`serialize`](BaseTexture.md#serialize)

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:472](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L472)

Return a string representation of the texture.

#### Returns

`string`

the texture as a string

#### Inherited from

[`BaseTexture`](BaseTexture.md).[`toString`](BaseTexture.md#tostring)

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

[`BaseTexture`](BaseTexture.md).[`updateSamplingMode`](BaseTexture.md#updatesamplingmode)

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

[`BaseTexture`](BaseTexture.md).[`WhenAllReady`](BaseTexture.md#whenallready)
