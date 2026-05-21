[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DynamicTexture

# Class: DynamicTexture

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L27)

A class extending Texture allowing drawing on a texture

## See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/dynamicTexture

## Extends

- [`Texture`](Texture.md)

## Extended by

- [`AdvancedDynamicTexture`](../../../gui/src/classes/AdvancedDynamicTexture.md)

## Properties

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:486](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L486)

Define the list of animation attached to the texture.

#### Inherited from

[`Texture`](Texture.md).[`animations`](Texture.md#animations)

***

### anisotropicFilteringLevel

> **anisotropicFilteringLevel**: `number` = `BaseTexture.DEFAULT_ANISOTROPIC_FILTERING_LEVEL`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:221](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L221)

With compliant hardware and browser (supporting anisotropic filtering)
this defines the level of anisotropic filtering in the texture.
The higher the better but the slower. This defaults to 4 as it seems to be the best tradeoff.

#### Inherited from

[`Texture`](Texture.md).[`anisotropicFilteringLevel`](Texture.md#anisotropicfilteringlevel)

***

### delayLoadState

> **delayLoadState**: `number` = `Constants.DELAYLOADSTATE_NONE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/thinTexture.ts#L66)

Define the current state of the loading sequence when in delayed load mode.

#### Inherited from

[`Texture`](Texture.md).[`delayLoadState`](Texture.md#delayloadstate)

***

### displayName

> **displayName**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L48)

Define the display name of the texture, which is used as tree item name of the dedicated node in the inspector

#### Inherited from

[`Texture`](Texture.md).[`displayName`](Texture.md#displayname)

***

### homogeneousRotationInUVTransform

> **homogeneousRotationInUVTransform**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L287)

Sets this property to true to avoid deformations when rotating the texture with non-uniform scaling

#### Inherited from

[`XRSpaceWarpRenderTarget`](XRSpaceWarpRenderTarget.md).[`homogeneousRotationInUVTransform`](XRSpaceWarpRenderTarget.md#homogeneousrotationinuvtransform)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`Nullable`](../type-aliases/Nullable.md)\<[`IInspectable`](../interfaces/IInspectable.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:300](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L300)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`Texture`](Texture.md).[`inspectableCustomProperties`](Texture.md#inspectablecustomproperties)

***

### invertZ

> **invertZ**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:351](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L351)

Is Z inverted in the texture (useful in a cube texture).

#### Inherited from

[`Texture`](Texture.md).[`invertZ`](Texture.md#invertz)

***

### isRenderTarget

> **isRenderTarget**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:450](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L450)

Define if the texture is a render target.

#### Inherited from

[`Texture`](Texture.md).[`isRenderTarget`](Texture.md#isrendertarget)

***

### level

> **level**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L110)

Intensity or strength of the texture.
It is commonly used by materials to fine tune the intensity of the texture

#### Inherited from

[`Texture`](Texture.md).[`level`](Texture.md#level)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L54)

Gets or sets an object used to store user defined information.

#### Inherited from

[`Texture`](Texture.md).[`metadata`](Texture.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L42)

Define the name of the texture.

#### Inherited from

[`Texture`](Texture.md).[`name`](Texture.md#name)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:491](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L491)

An event triggered when the texture is disposed.

#### Inherited from

[`Texture`](Texture.md).[`onDisposeObservable`](Texture.md#ondisposeobservable)

***

### onLoadObservable

> **onLoadObservable**: [`Observable`](Observable.md)\<[`Texture`](Texture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:355](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L355)

Observable triggered once the texture has been loaded.

#### Inherited from

[`Texture`](Texture.md).[`onLoadObservable`](Texture.md#onloadobservable)

***

### optimizeUVAllocation

> **optimizeUVAllocation**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L120)

Gets or sets a boolean indicating that the texture should try to reduce shader code if there is no UV manipulation.
(ie. when texture.getTextureMatrix().isIdentityAs3x2() returns true)

#### Inherited from

[`Texture`](Texture.md).[`optimizeUVAllocation`](Texture.md#optimizeuvallocation)

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L62)

For internal use only. Please do not use.

#### Inherited from

[`Texture`](Texture.md).[`reservedDataStore`](Texture.md#reserveddatastore)

***

### sphericalPolynomial

> **sphericalPolynomial**: [`Nullable`](../type-aliases/Nullable.md)\<[`SphericalPolynomial`](SphericalPolynomial.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.ts#L14)

Get the polynomial representation of the texture data.
This is mainly use as a fast way to recover IBL Diffuse irradiance data.

#### See

https://learnopengl.com/PBR/IBL/Diffuse-irradiance

#### Inherited from

[`Texture`](Texture.md).[`sphericalPolynomial`](Texture.md#sphericalpolynomial)

***

### uAng

> **uAng**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:247](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L247)

Define an offset on the texture to rotate around the u coordinates of the UVs
The angle is defined in radians.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials

#### Inherited from

[`XRSpaceWarpRenderTarget`](XRSpaceWarpRenderTarget.md).[`uAng`](XRSpaceWarpRenderTarget.md#uang)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L36)

Gets or sets the unique id of the texture

#### Inherited from

[`Texture`](Texture.md).[`uniqueId`](Texture.md#uniqueid)

***

### uOffset

> **uOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:218](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L218)

Define an offset on the texture to offset the u coordinates of the UVs

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#offsetting

#### Inherited from

[`XRSpaceWarpRenderTarget`](XRSpaceWarpRenderTarget.md).[`uOffset`](XRSpaceWarpRenderTarget.md#uoffset)

***

### url

> **url**: [`Nullable`](../type-aliases/Nullable.md)\<`string`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L211)

Define the url of the texture.

#### Inherited from

[`Texture`](Texture.md).[`url`](Texture.md#url)

***

### uRotationCenter

> **uRotationCenter**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L269)

Defines the center of rotation (U)

#### Inherited from

[`XRSpaceWarpRenderTarget`](XRSpaceWarpRenderTarget.md).[`uRotationCenter`](XRSpaceWarpRenderTarget.md#urotationcenter)

***

### uScale

> **uScale**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L232)

Define an offset on the texture to scale the u coordinates of the UVs

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#tiling

#### Inherited from

[`XRSpaceWarpRenderTarget`](XRSpaceWarpRenderTarget.md).[`uScale`](XRSpaceWarpRenderTarget.md#uscale)

***

### vAng

> **vAng**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L255)

Define an offset on the texture to rotate around the v coordinates of the UVs
The angle is defined in radians.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials

#### Inherited from

[`XRSpaceWarpRenderTarget`](XRSpaceWarpRenderTarget.md).[`vAng`](XRSpaceWarpRenderTarget.md#vang)

***

### vOffset

> **vOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:225](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L225)

Define an offset on the texture to offset the v coordinates of the UVs

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#offsetting

#### Inherited from

[`XRSpaceWarpRenderTarget`](XRSpaceWarpRenderTarget.md).[`vOffset`](XRSpaceWarpRenderTarget.md#voffset)

***

### vRotationCenter

> **vRotationCenter**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:275](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L275)

Defines the center of rotation (V)

#### Inherited from

[`XRSpaceWarpRenderTarget`](XRSpaceWarpRenderTarget.md).[`vRotationCenter`](XRSpaceWarpRenderTarget.md#vrotationcenter)

***

### vScale

> **vScale**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:239](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L239)

Define an offset on the texture to scale the v coordinates of the UVs

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#tiling

#### Inherited from

[`XRSpaceWarpRenderTarget`](XRSpaceWarpRenderTarget.md).[`vScale`](XRSpaceWarpRenderTarget.md#vscale)

***

### wAng

> **wAng**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:263](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L263)

Define an offset on the texture to rotate around the w coordinates of the UVs (in case of 3d texture)
The angle is defined in radians.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials

#### Inherited from

[`XRSpaceWarpRenderTarget`](XRSpaceWarpRenderTarget.md).[`wAng`](XRSpaceWarpRenderTarget.md#wang)

***

### wrapR

> **wrapR**: `number` = `Constants.TEXTURE_WRAP_ADDRESSMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:213](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L213)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

#### Inherited from

[`Texture`](Texture.md).[`wrapR`](Texture.md#wrapr)

***

### wRotationCenter

> **wRotationCenter**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:281](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L281)

Defines the center of rotation (W)

#### Inherited from

[`XRSpaceWarpRenderTarget`](XRSpaceWarpRenderTarget.md).[`wRotationCenter`](XRSpaceWarpRenderTarget.md#wrotationcenter)

***

### BILINEAR\_SAMPLINGMODE

> `readonly` `static` **BILINEAR\_SAMPLINGMODE**: `2` = `Constants.TEXTURE_BILINEAR_SAMPLINGMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L146)

Bilinear is mag = linear and min = linear and no mip

#### Inherited from

[`Texture`](Texture.md).[`BILINEAR_SAMPLINGMODE`](Texture.md#bilinear_samplingmode)

***

### CLAMP\_ADDRESSMODE

> `readonly` `static` **CLAMP\_ADDRESSMODE**: `0` = `Constants.TEXTURE_CLAMP_ADDRESSMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:196](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L196)

Texture is not repeating outside of 0..1 UVs

#### Inherited from

[`Texture`](Texture.md).[`CLAMP_ADDRESSMODE`](Texture.md#clamp_addressmode)

***

### CUBIC\_MODE

> `readonly` `static` **CUBIC\_MODE**: `3` = `Constants.TEXTURE_CUBIC_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L181)

Cubic coordinates mode

#### Inherited from

[`Texture`](Texture.md).[`CUBIC_MODE`](Texture.md#cubic_mode)

***

### DEFAULT\_ANISOTROPIC\_FILTERING\_LEVEL

> `static` **DEFAULT\_ANISOTROPIC\_FILTERING\_LEVEL**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L30)

Default anisotropic filtering level for the application.
It is set to 4 as a good tradeoff between perf and quality.

#### Inherited from

[`Texture`](Texture.md).[`DEFAULT_ANISOTROPIC_FILTERING_LEVEL`](Texture.md#default_anisotropic_filtering_level)

***

### EQUIRECTANGULAR\_MODE

> `readonly` `static` **EQUIRECTANGULAR\_MODE**: `7` = `Constants.TEXTURE_EQUIRECTANGULAR_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L189)

Equirectangular coordinates mode

#### Inherited from

[`Texture`](Texture.md).[`EQUIRECTANGULAR_MODE`](Texture.md#equirectangular_mode)

***

### EXPLICIT\_MODE

> `readonly` `static` **EXPLICIT\_MODE**: `0` = `Constants.TEXTURE_EXPLICIT_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L175)

Explicit coordinates mode

#### Inherited from

[`Texture`](Texture.md).[`EXPLICIT_MODE`](Texture.md#explicit_mode)

***

### FIXED\_EQUIRECTANGULAR\_MIRRORED\_MODE

> `readonly` `static` **FIXED\_EQUIRECTANGULAR\_MIRRORED\_MODE**: `9` = `Constants.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L193)

Equirectangular Fixed Mirrored coordinates mode

#### Inherited from

[`Texture`](Texture.md).[`FIXED_EQUIRECTANGULAR_MIRRORED_MODE`](Texture.md#fixed_equirectangular_mirrored_mode)

***

### FIXED\_EQUIRECTANGULAR\_MODE

> `readonly` `static` **FIXED\_EQUIRECTANGULAR\_MODE**: `8` = `Constants.TEXTURE_FIXED_EQUIRECTANGULAR_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L191)

Equirectangular Fixed coordinates mode

#### Inherited from

[`Texture`](Texture.md).[`FIXED_EQUIRECTANGULAR_MODE`](Texture.md#fixed_equirectangular_mode)

***

### ForceSerializeBuffers

> `static` **ForceSerializeBuffers**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L91)

Gets or sets a general boolean used to indicate that texture buffers must be saved as part of the serialization process.
If no buffer exists, one will be created as base64 string from the internal webgl data.

#### Inherited from

[`Texture`](Texture.md).[`ForceSerializeBuffers`](Texture.md#forceserializebuffers)

***

### INVCUBIC\_MODE

> `readonly` `static` **INVCUBIC\_MODE**: `6` = `Constants.TEXTURE_INVCUBIC_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L187)

Inverse Cubic coordinates mode

#### Inherited from

[`Texture`](Texture.md).[`INVCUBIC_MODE`](Texture.md#invcubic_mode)

***

### LINEAR\_LINEAR

> `readonly` `static` **LINEAR\_LINEAR**: `2` = `Constants.TEXTURE_LINEAR_LINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L170)

mag = linear and min = linear and mip = none

#### Inherited from

[`Texture`](Texture.md).[`LINEAR_LINEAR`](Texture.md#linear_linear)

***

### LINEAR\_LINEAR\_MIPLINEAR

> `readonly` `static` **LINEAR\_LINEAR\_MIPLINEAR**: `3` = `Constants.TEXTURE_LINEAR_LINEAR_MIPLINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L153)

Trilinear is mag = linear and min = linear and mip = linear

#### Inherited from

[`Texture`](Texture.md).[`LINEAR_LINEAR_MIPLINEAR`](Texture.md#linear_linear_miplinear)

***

### LINEAR\_LINEAR\_MIPNEAREST

> `readonly` `static` **LINEAR\_LINEAR\_MIPNEAREST**: `11` = `Constants.TEXTURE_LINEAR_LINEAR_MIPNEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L148)

Bilinear is mag = linear and min = linear and mip = nearest

#### Inherited from

[`Texture`](Texture.md).[`LINEAR_LINEAR_MIPNEAREST`](Texture.md#linear_linear_mipnearest)

***

### LINEAR\_NEAREST

> `readonly` `static` **LINEAR\_NEAREST**: `12` = `Constants.TEXTURE_LINEAR_NEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L172)

mag = linear and min = nearest and mip = none

#### Inherited from

[`Texture`](Texture.md).[`LINEAR_NEAREST`](Texture.md#linear_nearest)

***

### LINEAR\_NEAREST\_MIPLINEAR

> `readonly` `static` **LINEAR\_NEAREST\_MIPLINEAR**: `10` = `Constants.TEXTURE_LINEAR_NEAREST_MIPLINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L168)

mag = linear and min = nearest and mip = linear

#### Inherited from

[`Texture`](Texture.md).[`LINEAR_NEAREST_MIPLINEAR`](Texture.md#linear_nearest_miplinear)

***

### LINEAR\_NEAREST\_MIPNEAREST

> `readonly` `static` **LINEAR\_NEAREST\_MIPNEAREST**: `9` = `Constants.TEXTURE_LINEAR_NEAREST_MIPNEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L166)

mag = linear and min = nearest and mip = nearest

#### Inherited from

[`Texture`](Texture.md).[`LINEAR_NEAREST_MIPNEAREST`](Texture.md#linear_nearest_mipnearest)

***

### MIRROR\_ADDRESSMODE

> `readonly` `static` **MIRROR\_ADDRESSMODE**: `2` = `Constants.TEXTURE_MIRROR_ADDRESSMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L200)

Texture is repeating and mirrored

#### Inherited from

[`Texture`](Texture.md).[`MIRROR_ADDRESSMODE`](Texture.md#mirror_addressmode)

***

### NEAREST\_LINEAR

> `readonly` `static` **NEAREST\_LINEAR**: `7` = `Constants.TEXTURE_NEAREST_LINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L162)

mag = nearest and min = linear and mip = none

#### Inherited from

[`Texture`](Texture.md).[`NEAREST_LINEAR`](Texture.md#nearest_linear)

***

### NEAREST\_LINEAR\_MIPLINEAR

> `readonly` `static` **NEAREST\_LINEAR\_MIPLINEAR**: `6` = `Constants.TEXTURE_NEAREST_LINEAR_MIPLINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L160)

mag = nearest and min = linear and mip = linear

#### Inherited from

[`Texture`](Texture.md).[`NEAREST_LINEAR_MIPLINEAR`](Texture.md#nearest_linear_miplinear)

***

### NEAREST\_LINEAR\_MIPNEAREST

> `readonly` `static` **NEAREST\_LINEAR\_MIPNEAREST**: `5` = `Constants.TEXTURE_NEAREST_LINEAR_MIPNEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L158)

mag = nearest and min = linear and mip = nearest

#### Inherited from

[`Texture`](Texture.md).[`NEAREST_LINEAR_MIPNEAREST`](Texture.md#nearest_linear_mipnearest)

***

### NEAREST\_NEAREST

> `readonly` `static` **NEAREST\_NEAREST**: `1` = `Constants.TEXTURE_NEAREST_NEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:164](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L164)

mag = nearest and min = nearest and mip = none

#### Inherited from

[`Texture`](Texture.md).[`NEAREST_NEAREST`](Texture.md#nearest_nearest)

***

### NEAREST\_NEAREST\_MIPLINEAR

> `readonly` `static` **NEAREST\_NEAREST\_MIPLINEAR**: `8` = `Constants.TEXTURE_NEAREST_NEAREST_MIPLINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L143)

nearest is mag = nearest and min = nearest and mip = linear

#### Inherited from

[`Texture`](Texture.md).[`NEAREST_NEAREST_MIPLINEAR`](Texture.md#nearest_nearest_miplinear)

***

### NEAREST\_NEAREST\_MIPNEAREST

> `readonly` `static` **NEAREST\_NEAREST\_MIPNEAREST**: `4` = `Constants.TEXTURE_NEAREST_NEAREST_MIPNEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L156)

mag = nearest and min = nearest and mip = nearest

#### Inherited from

[`Texture`](Texture.md).[`NEAREST_NEAREST_MIPNEAREST`](Texture.md#nearest_nearest_mipnearest)

***

### NEAREST\_SAMPLINGMODE

> `readonly` `static` **NEAREST\_SAMPLINGMODE**: `1` = `Constants.TEXTURE_NEAREST_SAMPLINGMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L141)

nearest is mag = nearest and min = nearest and no mip

#### Inherited from

[`Texture`](Texture.md).[`NEAREST_SAMPLINGMODE`](Texture.md#nearest_samplingmode)

***

### OnTextureLoadErrorObservable

> `static` **OnTextureLoadErrorObservable**: [`Observable`](Observable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L96)

This observable will notify when any texture had a loading error

#### Inherited from

[`Texture`](Texture.md).[`OnTextureLoadErrorObservable`](Texture.md#ontextureloaderrorobservable)

***

### PLANAR\_MODE

> `readonly` `static` **PLANAR\_MODE**: `2` = `Constants.TEXTURE_PLANAR_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L179)

Planar coordinates mode

#### Inherited from

[`Texture`](Texture.md).[`PLANAR_MODE`](Texture.md#planar_mode)

***

### PROJECTION\_MODE

> `readonly` `static` **PROJECTION\_MODE**: `4` = `Constants.TEXTURE_PROJECTION_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L183)

Projection coordinates mode

#### Inherited from

[`Texture`](Texture.md).[`PROJECTION_MODE`](Texture.md#projection_mode)

***

### SerializeBuffers

> `static` **SerializeBuffers**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L85)

Gets or sets a general boolean used to indicate that textures containing direct data (buffers) must be saved as part of the serialization process

#### Inherited from

[`Texture`](Texture.md).[`SerializeBuffers`](Texture.md#serializebuffers)

***

### SKYBOX\_MODE

> `readonly` `static` **SKYBOX\_MODE**: `5` = `Constants.TEXTURE_SKYBOX_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L185)

Inverse Cubic coordinates mode

#### Inherited from

[`Texture`](Texture.md).[`SKYBOX_MODE`](Texture.md#skybox_mode)

***

### SPHERICAL\_MODE

> `readonly` `static` **SPHERICAL\_MODE**: `1` = `Constants.TEXTURE_SPHERICAL_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L177)

Spherical coordinates mode

#### Inherited from

[`Texture`](Texture.md).[`SPHERICAL_MODE`](Texture.md#spherical_mode)

***

### TRILINEAR\_SAMPLINGMODE

> `readonly` `static` **TRILINEAR\_SAMPLINGMODE**: `3` = `Constants.TEXTURE_TRILINEAR_SAMPLINGMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L151)

Trilinear is mag = linear and min = linear and mip = linear

#### Inherited from

[`Texture`](Texture.md).[`TRILINEAR_SAMPLINGMODE`](Texture.md#trilinear_samplingmode)

***

### UseSerializedUrlIfAny

> `static` **UseSerializedUrlIfAny**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:205](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L205)

Gets or sets a boolean which defines if the texture url must be build from the serialized URL instead of just using the name and loading them side by side with the scene file

#### Inherited from

[`Texture`](Texture.md).[`UseSerializedUrlIfAny`](Texture.md#useserializedurlifany)

***

### WRAP\_ADDRESSMODE

> `readonly` `static` **WRAP\_ADDRESSMODE**: `1` = `Constants.TEXTURE_WRAP_ADDRESSMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L198)

Texture is repeating outside of 0..1 UVs

#### Inherited from

[`Texture`](Texture.md).[`WRAP_ADDRESSMODE`](Texture.md#wrap_addressmode)

## Accessors

### canRescale

#### Get Signature

> **get** **canRescale**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L137)

Gets the current state of canRescale

##### Returns

`boolean`

#### Overrides

[`Texture`](Texture.md).[`canRescale`](Texture.md#canrescale)

***

### coordinatesIndex

#### Get Signature

> **get** **coordinatesIndex**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L137)

##### Returns

`number`

#### Set Signature

> **set** **coordinatesIndex**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L126)

Define the UV channel to use starting from 0 and defaulting to 0.
This is part of the texture as textures usually maps to one uv set.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Texture`](Texture.md).[`coordinatesIndex`](Texture.md#coordinatesindex)

***

### coordinatesMode

#### Get Signature

> **get** **coordinatesMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L171)

How a texture is mapped.
Unused in thin texture mode.

##### Returns

`number`

#### Set Signature

> **set** **coordinatesMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L160)

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

[`Texture`](Texture.md).[`coordinatesMode`](Texture.md#coordinatesmode)

***

### errorObject

#### Get Signature

> **get** **errorObject**(): \{ `exception?`: `any`; `message?`: `string`; \} \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:537](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L537)

If a loading error occurred this object will be populated with information about the error.

##### Returns

\{ `exception?`: `any`; `message?`: `string`; \} \| `undefined`

#### Inherited from

[`Texture`](Texture.md).[`errorObject`](Texture.md#errorobject)

***

### gammaSpace

#### Get Signature

> **get** **gammaSpace**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:296](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L296)

Define if the texture contains data in gamma space (most of the png/jpg aside bump).
HDR texture are usually stored in linear space.
This only impacts the PBR and Background materials

##### Returns

`boolean`

#### Set Signature

> **set** **gammaSpace**(`gamma`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:308](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L308)

##### Parameters

###### gamma

`boolean`

##### Returns

`void`

#### Inherited from

[`Texture`](Texture.md).[`gammaSpace`](Texture.md#gammaspace)

***

### getAlphaFromRGB

#### Get Signature

> **get** **getAlphaFromRGB**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L101)

##### Returns

`boolean`

#### Set Signature

> **set** **getAlphaFromRGB**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L90)

Defines if the alpha value should be determined via the rgb values.
If true the luminance of the pixel might be used to find the corresponding alpha value.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Texture`](Texture.md).[`getAlphaFromRGB`](Texture.md#getalphafromrgb)

***

### hasAlpha

#### Get Signature

> **get** **hasAlpha**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L80)

##### Returns

`boolean`

#### Set Signature

> **set** **hasAlpha**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L69)

Define if the texture is having a usable alpha value (can be use for transparency or glossiness for instance).

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Texture`](Texture.md).[`hasAlpha`](Texture.md#hasalpha)

***

### invertY

#### Get Signature

> **get** **invertY**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L373)

Gets a boolean indicating if the texture needs to be inverted on the y axis during loading

##### Returns

`boolean`

#### Inherited from

[`Texture`](Texture.md).[`invertY`](Texture.md#inverty)

***

### irradianceTexture

#### Get Signature

> **get** **irradianceTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:425](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L425)

In case a better definition than spherical harmonics is required for the diffuse part of the environment.
You can set the irradiance texture to rely on a texture instead of the spherical approach.
This texture need to have the same characteristics than its parent (Cube vs 2d, coordinates mode, Gamma/Linear, RGBD).

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

#### Set Signature

> **set** **irradianceTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:432](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L432)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

#### Inherited from

[`Texture`](Texture.md).[`irradianceTexture`](Texture.md#irradiancetexture)

***

### is2DArray

#### Get Signature

> **get** **is2DArray**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L271)

Define if the texture is a 2d array texture (webgl 2) or if false a 2d texture.

##### Returns

`boolean`

#### Set Signature

> **set** **is2DArray**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:280](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L280)

Define if the texture is a 2d array texture (webgl 2) or if false a 2d texture.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Texture`](Texture.md).[`is2DArray`](Texture.md#is2darray)

***

### is3D

#### Get Signature

> **get** **is3D**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:250](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L250)

Define if the texture is a 3d texture (webgl 2) or if false a 2d texture.

##### Returns

`boolean`

#### Set Signature

> **set** **is3D**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L259)

Define if the texture is a 3d texture (webgl 2) or if false a 2d texture.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Texture`](Texture.md).[`is3D`](Texture.md#is3d)

***

### isBlocking

#### Get Signature

> **get** **isBlocking**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:366](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L366)

Define if the texture is preventing a material to render or not.
If not and the texture is not ready, the engine will use a default black texture instead.

##### Returns

`boolean`

#### Set Signature

> **set** **isBlocking**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:362](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L362)

Is the texture preventing material to render while loading.
If false, a default texture will be used instead of the loading one during the preparation step.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Texture`](Texture.md).[`isBlocking`](Texture.md#isblocking)

***

### isCube

#### Get Signature

> **get** **isCube**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:229](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L229)

Define if the texture is a cube texture or if false a 2d texture.

##### Returns

`boolean`

#### Set Signature

> **set** **isCube**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:238](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L238)

Define if the texture is a cube texture or if false a 2d texture.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Texture`](Texture.md).[`isCube`](Texture.md#iscube)

***

### isRGBD

#### Get Signature

> **get** **isRGBD**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:330](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L330)

Gets or sets whether or not the texture contains RGBD data.

##### Returns

`boolean`

#### Set Signature

> **set** **isRGBD**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:333](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L333)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Texture`](Texture.md).[`isRGBD`](Texture.md#isrgbd)

***

### linearSpecularLOD

#### Get Signature

> **get** **linearSpecularLOD**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:406](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L406)

With prefiltered texture, defined if the specular generation is based on a linear ramp.
By default we are using a log2 of the linear roughness helping to keep a better resolution for
average roughness values.

##### Returns

`boolean`

#### Set Signature

> **set** **linearSpecularLOD**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:413](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L413)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Texture`](Texture.md).[`linearSpecularLOD`](Texture.md#linearspecularlod)

***

### loadingError

#### Get Signature

> **get** **loadingError**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:530](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L530)

Was there any loading error?

##### Returns

`boolean`

#### Inherited from

[`Texture`](Texture.md).[`loadingError`](Texture.md#loadingerror)

***

### lodGenerationOffset

#### Get Signature

> **get** **lodGenerationOffset**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:370](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L370)

With prefiltered texture, defined the offset used during the prefiltering steps.

##### Returns

`number`

#### Set Signature

> **set** **lodGenerationOffset**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:377](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L377)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Texture`](Texture.md).[`lodGenerationOffset`](Texture.md#lodgenerationoffset)

***

### lodGenerationScale

#### Get Signature

> **get** **lodGenerationScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:387](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L387)

With prefiltered texture, defined the scale used during the prefiltering steps.

##### Returns

`number`

#### Set Signature

> **set** **lodGenerationScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:394](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L394)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Texture`](Texture.md).[`lodGenerationScale`](Texture.md#lodgenerationscale)

***

### mimeType

#### Get Signature

> **get** **mimeType**(): `string` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:348](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L348)

Returns the texture mime type if it was defined by a loader (undefined else)

##### Returns

`string` \| `undefined`

#### Inherited from

[`Texture`](Texture.md).[`mimeType`](Texture.md#mimetype)

***

### noMipmap

#### Get Signature

> **get** **noMipmap**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:292](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L292)

Are mip maps generated for this texture or not.

##### Returns

`boolean`

#### Inherited from

[`Texture`](Texture.md).[`noMipmap`](Texture.md#nomipmap)

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:498](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L498)

Callback triggered when the texture has been disposed.
Kept for back compatibility, you can use the onDisposeObservable instead.

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

[`Texture`](Texture.md).[`onDispose`](Texture.md#ondispose)

***

### samplingMode

#### Get Signature

> **get** **samplingMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:254](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/thinTexture.ts#L254)

Get the current sampling mode associated with the texture.

##### Returns

`number`

#### Inherited from

[`Texture`](Texture.md).[`samplingMode`](Texture.md#samplingmode)

***

### textureFormat

#### Get Signature

> **get** **textureFormat**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:695](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L695)

Get the texture underlying format (RGB, RGBA...)

##### Returns

`number`

#### Inherited from

[`Texture`](Texture.md).[`textureFormat`](Texture.md#textureformat)

***

### textureType

#### Get Signature

> **get** **textureType**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:684](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L684)

Get the texture underlying type (INT, FLOAT...)

##### Returns

`number`

#### Inherited from

[`Texture`](Texture.md).[`textureType`](Texture.md#texturetype)

***

### uid

#### Get Signature

> **get** **uid**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:455](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L455)

Define the unique id of the texture in the scene.

##### Returns

`string`

#### Inherited from

[`Texture`](Texture.md).[`uid`](Texture.md#uid)

***

### wrapU

#### Get Signature

> **get** **wrapU**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L183)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Returns

`number`

#### Set Signature

> **set** **wrapU**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L186)

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

[`Texture`](Texture.md).[`wrapU`](Texture.md#wrapu)

***

### wrapV

#### Get Signature

> **get** **wrapV**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L198)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Returns

`number`

#### Set Signature

> **set** **wrapV**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L201)

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

[`Texture`](Texture.md).[`wrapV`](Texture.md#wrapv)

## Methods

### clear()

> **clear**(`clearColor?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L189)

Clears the texture

#### Parameters

##### clearColor?

`string`

Defines the clear color to use

#### Returns

`void`

***

### clone()

> **clone**(): `DynamicTexture`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:282](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L282)

Clones the texture

#### Returns

`DynamicTexture`

the clone of the texture.

#### Overrides

[`Texture`](Texture.md).[`clone`](Texture.md#clone)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:268](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L268)

Disposes the dynamic texture.

#### Returns

`void`

#### Overrides

[`Texture`](Texture.md).[`dispose`](Texture.md#dispose)

***

### drawText()

> **drawText**(`text`, `x`, `y`, `font`, `color`, `fillColor`, `invertY?`, `update?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:231](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L231)

Draws text onto the texture

#### Parameters

##### text

`string`

defines the text to be drawn

##### x

`number` \| `null` \| `undefined`

defines the placement of the text from the left

##### y

`number` \| `null` \| `undefined`

defines the placement of the text from the top when invertY is true and from the bottom when false

##### font

`string`

defines the font to be used with font-style, font-size, font-name

##### color

`string` \| `null`

defines the color used for the text

##### fillColor

`string` \| `null`

defines the color for the canvas, use null to not overwrite canvas (this blends with the background to replace, use the clear function)

##### invertY?

`boolean`

defines the direction for the Y axis (default is true - y increases downwards)

##### update?

`boolean` = `true`

defines whether texture is immediately update (default is true)

#### Returns

`void`

***

### forceSphericalPolynomialsRecompute()

> **forceSphericalPolynomialsRecompute**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.ts#L20)

Force recomputation of spherical polynomials.
Can be useful if you generate a cubemap multiple times (from a probe for eg) and you need the proper polynomials each time

#### Returns

`void`

#### Inherited from

[`Texture`](Texture.md).[`forceSphericalPolynomialsRecompute`](Texture.md#forcesphericalpolynomialsrecompute)

***

### getBaseSize()

> **getBaseSize**(): [`ISize`](../interfaces/ISize.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/thinTexture.ts#L230)

Get the base size of the texture.
It can be different from the size if the texture has been resized for POT for instance

#### Returns

[`ISize`](../interfaces/ISize.md)

the base size

#### Inherited from

[`Texture`](Texture.md).[`getBaseSize`](Texture.md#getbasesize)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L130)

Get the current class name of the texture useful for serialization or dynamic coding.

#### Returns

`string`

"DynamicTexture"

#### Overrides

[`Texture`](Texture.md).[`getClassName`](Texture.md#getclassname)

***

### getContext()

> **getContext**(): [`ICanvasRenderingContext`](../interfaces/ICanvasRenderingContext.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L181)

Gets the context of the canvas used by the texture

#### Returns

[`ICanvasRenderingContext`](../interfaces/ICanvasRenderingContext.md)

the canvas context of the dynamic texture

***

### getInternalTexture()

> **getInternalTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:199](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/thinTexture.ts#L199)

Get the underlying lower level texture from Babylon.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

the internal texture

#### Inherited from

[`Texture`](Texture.md).[`getInternalTexture`](Texture.md#getinternaltexture)

***

### getReflectionTextureMatrix()

> **getReflectionTextureMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:794](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L794)

Get the current matrix used to apply reflection. This is useful to rotate an environment texture for instance.

#### Returns

[`Matrix`](Matrix.md)

The reflection texture transform

#### Inherited from

[`Texture`](Texture.md).[`getReflectionTextureMatrix`](Texture.md#getreflectiontexturematrix)

***

### getRefractionTextureMatrix()

> **getRefractionTextureMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:612](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L612)

Gets a suitable rotate/transform matrix when the texture is used for refraction.
There's a separate function from getReflectionTextureMatrix because refraction requires a special configuration of the matrix in right-handed mode.

#### Returns

[`Matrix`](Matrix.md)

The refraction matrix

#### Inherited from

[`Texture`](Texture.md).[`getRefractionTextureMatrix`](Texture.md#getrefractiontexturematrix)

***

### getScene()

> **getScene**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:582](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L582)

Get the scene the texture belongs to.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

the scene or null if undefined

#### Inherited from

[`Texture`](Texture.md).[`getScene`](Texture.md#getscene)

***

### getSize()

> **getSize**(): [`ISize`](../interfaces/ISize.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/thinTexture.ts#L207)

Get the size of the texture.

#### Returns

[`ISize`](../interfaces/ISize.md)

the texture size.

#### Inherited from

[`Texture`](Texture.md).[`getSize`](Texture.md#getsize)

***

### getTextureMatrix()

> **getTextureMatrix**(`uBase?`): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:689](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L689)

Get the current texture matrix which includes the requested offsetting, tiling and rotation components.

#### Parameters

##### uBase?

`number` = `1`

The horizontal base offset multiplier (1 by default)

#### Returns

[`Matrix`](Matrix.md)

the transform matrix of the texture.

#### Inherited from

[`Texture`](Texture.md).[`getTextureMatrix`](Texture.md#gettexturematrix)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/thinTexture.ts#L177)

Get if the texture is ready to be used (downloaded, converted, mip mapped...).

#### Returns

`boolean`

true if fully ready

#### Inherited from

[`Texture`](Texture.md).[`isReady`](Texture.md#isready)

***

### isReadyOrNotBlocking()

> **isReadyOrNotBlocking**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:620](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L620)

Get if the texture is ready to be consumed (either it is ready or it is not blocking)

#### Returns

`boolean`

true if ready, not blocking or if there was an error loading the texture

#### Inherited from

[`Texture`](Texture.md).[`isReadyOrNotBlocking`](Texture.md#isreadyornotblocking)

***

### readPixels()

> **readPixels**(`faceIndex?`, `level?`, `buffer?`, `flushRenderer?`, `noDataConversion?`, `x?`, `y?`, `width?`, `height?`): [`Nullable`](../type-aliases/Nullable.md)\<`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:732](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L732)

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

[`Texture`](Texture.md).[`readPixels`](Texture.md#readpixels)

***

### releaseInternalTexture()

> **releaseInternalTexture**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:296](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/thinTexture.ts#L296)

Release and destroy the underlying lower level texture aka internalTexture.

#### Returns

`void`

#### Inherited from

[`Texture`](Texture.md).[`releaseInternalTexture`](Texture.md#releaseinternaltexture)

***

### scale()

> **scale**(`ratio`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L154)

Scales the texture

#### Parameters

##### ratio

`number`

the scale factor to apply to both width and height

#### Returns

`void`

#### Overrides

[`Texture`](Texture.md).[`scale`](Texture.md#scale)

***

### scaleTo()

> **scaleTo**(`width`, `height`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L168)

Resizes the texture

#### Parameters

##### width

`number`

the new width

##### height

`number`

the new height

#### Returns

`void`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:307](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L307)

Serializes the dynamic texture.  The scene should be ready before the dynamic texture is serialized

#### Returns

`any`

a serialized dynamic texture object

#### Overrides

[`Texture`](Texture.md).[`serialize`](Texture.md#serialize)

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:471](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L471)

Return a string representation of the texture.

#### Returns

`string`

the texture as a string

#### Inherited from

[`Texture`](Texture.md).[`toString`](Texture.md#tostring)

***

### update()

> **update**(`invertY?`, `premulAlpha?`, `allowGPUOptimization?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:203](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L203)

Updates the texture

#### Parameters

##### invertY?

`boolean`

defines the direction for the Y axis (default is true - y increases downwards)

##### premulAlpha?

`boolean` = `false`

defines if alpha is stored as premultiplied (default is false)

##### allowGPUOptimization?

`boolean` = `false`

true to allow some specific GPU optimizations (subject to engine feature "allowGPUOptimizationsForGUI" being true)

#### Returns

`void`

***

### updateSamplingMode()

> **updateSamplingMode**(`samplingMode`, `generateMipMaps?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/thinTexture.ts#L287)

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

[`Texture`](Texture.md).[`updateSamplingMode`](Texture.md#updatesamplingmode)

***

### updateURL()

> **updateURL**(`url`, `buffer?`, `onLoad?`, `forcedExtension?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:569](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L569)

Update the url (and optional buffer) of this texture if url was null during construction.

#### Parameters

##### url

`string`

the url of the texture

##### buffer?

[`Nullable`](../type-aliases/Nullable.md)\<`string` \| `ArrayBuffer` \| `ArrayBufferView`\<`ArrayBufferLike`\> \| `HTMLImageElement` \| `ImageBitmap` \| `Blob`\> = `null`

the buffer of the texture (defaults to null)

##### onLoad?

() => `void`

callback called when the texture is loaded  (defaults to null)

##### forcedExtension?

`string`

defines the extension to use to pick the right loader

#### Returns

`void`

#### Inherited from

[`Texture`](Texture.md).[`updateURL`](Texture.md#updateurl)

***

### CreateFromBase64String()

> `static` **CreateFromBase64String**(`data`, `name`, `scene`, `noMipmapOrOptions?`, `invertY?`, `samplingMode?`, `onLoad?`, `onError?`, `format?`, `creationFlags?`, `forcedExtension?`): [`Texture`](Texture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:1165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L1165)

Creates a texture from its base 64 representation.

#### Parameters

##### data

`string`

Define the base64 payload without the data: prefix

##### name

`string`

Define the name of the texture in the scene useful fo caching purpose for instance

##### scene

[`Scene`](Scene.md)

Define the scene the texture should belong to

##### noMipmapOrOptions?

`boolean` \| [`ITextureCreationOptions`](../interfaces/ITextureCreationOptions.md)

defines if the texture will require mip maps or not or set of all options to create the texture

##### invertY?

`boolean`

define if the texture needs to be inverted on the y axis during loading

##### samplingMode?

`number` = `Texture.TRILINEAR_SAMPLINGMODE`

define the sampling mode we want for the texture while fetching from it (Texture.NEAREST_SAMPLINGMODE...)

##### onLoad?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

define a callback triggered when the texture has been loaded

##### onError?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

define a callback triggered when an error occurred during the loading session

##### format?

`number` = `Constants.TEXTUREFORMAT_RGBA`

define the format of the texture we are trying to load (Engine.TEXTUREFORMAT_RGBA...)

##### creationFlags?

`number`

specific flags to use when creating the texture (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg)

##### forcedExtension?

`string`

defines the extension to use to pick the right loader

#### Returns

[`Texture`](Texture.md)

the created texture

#### Inherited from

[`Texture`](Texture.md).[`CreateFromBase64String`](Texture.md#createfrombase64string)

***

### LoadFromDataString()

> `static` **LoadFromDataString**(`name`, `buffer`, `scene`, `deleteBuffer?`, `noMipmapOrOptions?`, `invertY?`, `samplingMode?`, `onLoad?`, `onError?`, `format?`, `creationFlags?`, `forcedExtension?`): [`Texture`](Texture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:1212](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L1212)

Creates a texture from its data: representation. (data: will be added in case only the payload has been passed in)

#### Parameters

##### name

`string`

Define the name of the texture in the scene useful fo caching purpose for instance

##### buffer

`any`

define the buffer to load the texture from in case the texture is loaded from a buffer representation

##### scene

[`Scene`](Scene.md)

Define the scene the texture should belong to

##### deleteBuffer?

`boolean` = `false`

define if the buffer we are loading the texture from should be deleted after load

##### noMipmapOrOptions?

`boolean` \| [`ITextureCreationOptions`](../interfaces/ITextureCreationOptions.md)

defines if the texture will require mip maps or not or set of all options to create the texture

##### invertY?

`boolean` = `true`

define if the texture needs to be inverted on the y axis during loading

##### samplingMode?

`number` = `Texture.TRILINEAR_SAMPLINGMODE`

define the sampling mode we want for the texture while fetching from it (Texture.NEAREST_SAMPLINGMODE...)

##### onLoad?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

define a callback triggered when the texture has been loaded

##### onError?

[`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\> = `null`

define a callback triggered when an error occurred during the loading session

##### format?

`number` = `Constants.TEXTUREFORMAT_RGBA`

define the format of the texture we are trying to load (Engine.TEXTUREFORMAT_RGBA...)

##### creationFlags?

`number`

specific flags to use when creating the texture (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg)

##### forcedExtension?

`string`

defines the extension to use to pick the right loader

#### Returns

[`Texture`](Texture.md)

the created texture

#### Inherited from

[`Texture`](Texture.md).[`LoadFromDataString`](Texture.md#loadfromdatastring)

***

### Parse()

> `static` **Parse**(`parsedTexture`, `scene`, `rootUrl`): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:970](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L970)

Parse the JSON representation of a texture in order to recreate the texture in the given scene.

#### Parameters

##### parsedTexture

`any`

Define the JSON representation of the texture

##### scene

[`Scene`](Scene.md)

Define the scene the parsed texture should be instantiated in

##### rootUrl

`string`

Define the root url of the parsing sequence in the case of relative dependencies

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

The parsed texture if successful

#### Inherited from

[`Texture`](Texture.md).[`Parse`](Texture.md#parse)

***

### WhenAllReady()

> `static` **WhenAllReady**(`textures`, `callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:897](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L897)

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

[`Texture`](Texture.md).[`WhenAllReady`](Texture.md#whenallready)
