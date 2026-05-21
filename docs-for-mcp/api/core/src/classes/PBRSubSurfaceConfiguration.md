[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PBRSubSurfaceConfiguration

# Class: PBRSubSurfaceConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L68)

Plugin that implements the sub surface component of the PBR material

## Extends

- [`MaterialPluginBase`](MaterialPluginBase.md)

## Constructors

### Constructor

> **new PBRSubSurfaceConfiguration**(`material`, `addToPluginList?`): `PBRSubSurfaceConfiguration`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:412](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L412)

#### Parameters

##### material

[`PBRBaseMaterial`](PBRBaseMaterial.md)

##### addToPluginList?

`boolean` = `true`

#### Returns

`PBRSubSurfaceConfiguration`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`constructor`](MaterialPluginBase.md#constructor)

## Properties

### applyAlbedoAfterSubSurface

> **applyAlbedoAfterSubSurface**: `boolean` = `PBRSubSurfaceConfiguration.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:365](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L365)

This property only exists for backward compatibility reasons.
Set it to true if your rendering in 8.0+ is different from that in 7 when you use sub-surface properties (transmission, refraction, etc.). Default is false.
Note however that the PBR calculation is wrong when this property is set to true, so only use it if you want to mimic the 7.0 behavior.

***

### diffusionDistance

> **diffusionDistance**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:300](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L300)

Defines how far each channel transmit through the media.
It is defined as a color to simplify it selection.

***

### dispersion

> **dispersion**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:293](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L293)

Defines the Abbe number for the volume.

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L54)

Specifies if the material plugin should be serialized, `true` to skip serialization

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`doNotSerialize`](MaterialPluginBase.md#donotserialize)

***

### indexOfRefraction

> **indexOfRefraction**: `number` = `1.5`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L211)

Index of refraction of the material base layer.
https://en.wikipedia.org/wiki/List_of_refractive_indices

This does not only impact refraction but also the Base F0 of Dielectric Materials.

From dielectric fresnel rules: F0 = square((iorT - iorI) / (iorT + iorI))

***

### invertRefractionY

> **invertRefractionY**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:244](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L244)

Controls if refraction needs to be inverted on Y. This could be useful for procedural texture.

***

### isDispersionEnabled

> **isDispersionEnabled**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L110)

Defines if dispersion is enabled in the material.

***

### isRefractionEnabled

> **isRefractionEnabled**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L94)

Defines if the refraction is enabled in the material.

***

### isScatteringEnabled

> **isScatteringEnabled**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L118)

Defines if the sub surface scattering is enabled in the material.

***

### isTranslucencyEnabled

> **isTranslucencyEnabled**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L102)

Defines if the translucency is enabled in the material.

***

### legacyTranslucency

> **legacyTranslucency**: `boolean` = `PBRSubSurfaceConfiguration.DEFAULT_LEGACY_TRANSLUCENCY`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:372](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L372)

This property only exists for backward compatibility reasons.
Set it to true if your rendering in 8.0+ is different from that in 7 when you use sub-surface translucency. Default is false.

***

### linkRefractionWithTransparency

> **linkRefractionWithTransparency**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:254](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L254)

This parameters will make the material used its opacity to control how much it is refracting against not.
Materials half opaque for instance using refraction could benefit from this control.

***

### markAllDefinesAsDirty

> `readonly` **markAllDefinesAsDirty**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L83)

Helper function to mark defines as being dirty.

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`markAllDefinesAsDirty`](MaterialPluginBase.md#markalldefinesasdirty)

***

### maximumThickness

> **maximumThickness**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:267](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L267)

Defines the maximum thickness stored in the thickness map.

***

### minimumThickness

> **minimumThickness**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L261)

Defines the minimum thickness stored in the thickness map.
If no thickness map is defined, this value will be used to simulate thickness.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L31)

Defines the name of the plugin

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`name`](MaterialPluginBase.md#name)

***

### priority

> **priority**: `number` = `500`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L37)

Defines the priority of the plugin. Lower numbers run first.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`priority`](MaterialPluginBase.md#priority)

***

### refractionIntensity

> **refractionIntensity**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L153)

Defines the refraction intensity of the material.
The refraction when enabled replaces the Diffuse part of the material.
The intensity helps transitioning between diffuse and refraction.

***

### refractionIntensityTexture

> **refractionIntensityTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:320](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L320)

Stores the intensity of the refraction. If provided, it takes precedence over thicknessTexture + useMaskFromThicknessTexture
* the green (red if useGltfStyleTextures = true) channel is the refraction intensity.

***

### refractionTexture

> **refractionTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:197](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L197)

Defines the texture to use for refraction.

***

### registerForExtraEvents

> **registerForExtraEvents**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L49)

Indicates that this plugin should be notified for the extra events (HasRenderTargetTextures / FillRenderTargetTextures / HardBindForSubMesh)

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`registerForExtraEvents`](MaterialPluginBase.md#registerforextraevents)

***

### resolveIncludes

> **resolveIncludes**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L43)

Indicates that any #include directive in the plugin code must be replaced by the corresponding code.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`resolveIncludes`](MaterialPluginBase.md#resolveincludes)

***

### thicknessTexture

> **thicknessTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L189)

Stores the average thickness of a mesh in a texture (The texture is holding the values linearly).
The red (or green if useGltfStyleTextures=true) channel of the texture should contain the thickness remapped between 0 and 1.
0 would mean minimumThickness
1 would mean maximumThickness
The other channels might be use as a mask to vary the different effects intensity.

***

### tintColor

> **tintColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:280](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L280)

Defines the volume tint of the material.
This is used for both translucency and scattering.

***

### tintColorAtDistance

> **tintColorAtDistance**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L287)

Defines the distance at which the tint color should be found in the media.
This is used for refraction only.

***

### translucencyColor

> **translucencyColor**: [`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](Color3.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L336)

Defines the translucency tint of the material.
If not set, the tint color will be used instead.

***

### translucencyColorTexture

> **translucencyColorTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:346](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L346)

Defines the translucency tint color of the material as a texture.
This is multiplied against the translucency color to add variety and realism to the material.
If translucencyColor is not set, the tint color will be used instead.

***

### translucencyIntensity

> **translucencyIntensity**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L161)

Defines the translucency intensity of the material.
When translucency has been enabled, this defines how much of the "translucency"
is added to the diffuse part of the material.

***

### translucencyIntensityTexture

> **translucencyIntensityTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:329](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L329)

Stores the intensity of the translucency. If provided, it takes precedence over thicknessTexture + useMaskFromThicknessTexture
* the blue (alpha if useGltfStyleTextures = true) channel is the translucency intensity.

***

### useAlbedoToTintRefraction

> **useAlbedoToTintRefraction**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L169)

When enabled, transparent surfaces will be tinted with the albedo colour (independent of thickness)

***

### useAlbedoToTintTranslucency

> **useAlbedoToTintTranslucency**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L177)

When enabled, translucent surfaces will be tinted with the albedo colour (independent of thickness)

***

### useGltfStyleTextures

> **useGltfStyleTextures**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:357](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L357)

Use channels layout used by glTF:
* thicknessTexture: the green (instead of red) channel is the thickness
* thicknessTexture/refractionIntensityTexture: the red (instead of green) channel is the refraction intensity
* thicknessTexture/translucencyIntensityTexture: the alpha (instead of blue) channel is the translucency intensity

***

### useMaskFromThicknessTexture

> **useMaskFromThicknessTexture**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:311](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L311)

Stores the intensity of the different subsurface effects in the thickness texture.
Note that if refractionIntensityTexture and/or translucencyIntensityTexture is provided it takes precedence over thicknessTexture + useMaskFromThicknessTexture
* the green (red if useGltfStyleTextures = true) channel is the refraction intensity.
* the blue (alpha if useGltfStyleTextures = true) channel is the translucency intensity.

***

### useThicknessAsDepth

> **useThicknessAsDepth**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:273](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L273)

Defines that the thickness should be used as a measure of the depth volume.

***

### DEFAULT\_APPLY\_ALBEDO\_AFTERSUBSURFACE

> `static` **DEFAULT\_APPLY\_ALBEDO\_AFTERSUBSURFACE**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L76)

Default value used for applyAlbedoAfterSubSurface.

This property only exists for backward compatibility reasons.
Set it to true if your rendering in 8.0+ is different from that in 7 when you use sub-surface properties (transmission, refraction, etc.). Default is false.
Note however that the PBR calculation is wrong when this property is set to true, so only use it if you want to mimic the 7.0 behavior.

***

### DEFAULT\_LEGACY\_TRANSLUCENCY

> `static` **DEFAULT\_LEGACY\_TRANSLUCENCY**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L84)

Default value used for legacyTranslucency.

This property only exists for backward compatibility reasons.
Set it to true if your rendering in 8.0+ is different from that in 7 when you use sub-surface translucency. Default is false.

## Accessors

### disableAlphaBlending

#### Get Signature

> **get** **disableAlphaBlending**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:733](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L733)

Returns true if alpha blending should be disabled.

##### Returns

`boolean`

***

### legacyTransluceny

#### Get Signature

> **get** **legacyTransluceny**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:379](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L379)

Keeping for backward compatibility... Should not be used anymore. It has been replaced by
the property with the correct spelling.

##### See

legacyTranslucency

##### Returns

`boolean`

#### Set Signature

> **set** **legacyTransluceny**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:382](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L382)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### scatteringDiffusionProfile

#### Get Signature

> **get** **scatteringDiffusionProfile**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](Color3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L127)

Diffusion profile for subsurface scattering.
Useful for better scattering in the skins or foliages.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](Color3.md)\>

#### Set Signature

> **set** **scatteringDiffusionProfile**(`c`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L135)

##### Parameters

###### c

[`Nullable`](../type-aliases/Nullable.md)\<[`Color3`](Color3.md)\>

##### Returns

`void`

***

### volumeIndexOfRefraction

#### Get Signature

> **get** **volumeIndexOfRefraction**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L224)

Index of refraction of the material's volume.
https://en.wikipedia.org/wiki/List_of_refractive_indices

This ONLY impacts refraction. If not provided or given a non-valid value,
the volume will use the same IOR as the surface.

##### Returns

`number`

#### Set Signature

> **set** **volumeIndexOfRefraction**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L230)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### addFallbacks()

> **addFallbacks**(`defines`, `fallbacks`, `currentRank`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:851](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L851)

Add fallbacks to the effect fallbacks list.

#### Parameters

##### defines

`MaterialSubSurfaceDefines`

defines the Base texture to use.

##### fallbacks

[`EffectFallbacks`](EffectFallbacks.md)

defines the current fallback list.

##### currentRank

`number`

defines the current fallback rank.

#### Returns

`number`

the new fallback rank.

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`addFallbacks`](MaterialPluginBase.md#addfallbacks)

***

### bindForSubMesh()

> **bindForSubMesh**(`uniformBuffer`, `scene`, `engine`, `subMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:602](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L602)

Binds the material data.

#### Parameters

##### uniformBuffer

[`UniformBuffer`](UniformBuffer.md)

##### scene

[`Scene`](Scene.md)

##### engine

[`Engine`](Engine.md)

##### subMesh

[`SubMesh`](SubMesh.md)

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`bindForSubMesh`](MaterialPluginBase.md#bindforsubmesh)

***

### collectDefines()

> **collectDefines**(`defines`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L183)

Collects all defines.

#### Parameters

##### defines

The object to append to.

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`collectDefines`](MaterialPluginBase.md#collectdefines)

***

### copyTo()

> **copyTo**(`plugin`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:300](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L300)

Makes a duplicate of the current configuration into another one.

#### Parameters

##### plugin

[`MaterialPluginBase`](MaterialPluginBase.md)

define the config where to copy the info

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`copyTo`](MaterialPluginBase.md#copyto)

***

### dispose()

> **dispose**(`forceDisposeTextures?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:823](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L823)

Disposes the resources of the material.

#### Parameters

##### forceDisposeTextures?

`boolean`

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`dispose`](MaterialPluginBase.md#dispose)

***

### fillRenderTargetTextures()

> **fillRenderTargetTextures**(`renderTargets`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:741](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L741)

Fills the list of render target textures.

#### Parameters

##### renderTargets

[`SmartArray`](SmartArray.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

the list of render targets to update

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`fillRenderTargetTextures`](MaterialPluginBase.md#fillrendertargettextures)

***

### getActiveTextures()

> **getActiveTextures**(`activeTextures`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:779](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L779)

Returns an array of the actively used textures.

#### Parameters

##### activeTextures

[`BaseTexture`](BaseTexture.md)[]

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getActiveTextures`](MaterialPluginBase.md#getactivetextures)

***

### getAnimatables()

> **getAnimatables**(`animatables`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:801](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L801)

Returns the animatable textures.

#### Parameters

##### animatables

[`IAnimatable`](../interfaces/IAnimatable.md)[]

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getAnimatables`](MaterialPluginBase.md#getanimatables)

***

### getAttributes()

> **getAttributes**(`_attributes`, `_scene`, `_mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:274](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L274)

Gets the attributes used by the plugin.

#### Parameters

##### \_attributes

`string`[]

list that the attribute names should be added to.

##### \_scene

[`Scene`](Scene.md)

the scene that the material belongs to.

##### \_mesh

[`AbstractMesh`](AbstractMesh.md)

the mesh being rendered.

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`getAttributes`](MaterialPluginBase.md#getattributes)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:847](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L847)

Gets the current class name useful for serialization or dynamic coding.

#### Returns

`string`

The class name.

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getClassName`](MaterialPluginBase.md#getclassname)

***

### getCustomCode()

> **getCustomCode**(`_shaderType`, `_shaderLanguage?`): [`Nullable`](../type-aliases/Nullable.md)\<\{\[`pointName`: `string`\]: `string`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L175)

Returns a list of custom shader code fragments to customize the shader.

#### Parameters

##### \_shaderType

`string`

"vertex" or "fragment"

##### \_shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md) = `ShaderLanguage.GLSL`

The shader language to use.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\{\[`pointName`: `string`\]: `string`; \}\>

null if no code to be added, or a list of pointName =\> code.
Note that `pointName` can also be a regular expression if it starts with a `!`.
In that case, the string found by the regular expression (if any) will be
replaced by the code provided.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`getCustomCode`](MaterialPluginBase.md#getcustomcode)

***

### getSamplers()

> **getSamplers**(`samplers`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:861](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L861)

Gets the samplers used by the plugin.

#### Parameters

##### samplers

`string`[]

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getSamplers`](MaterialPluginBase.md#getsamplers)

***

### getUniformBuffersNames()

> **getUniformBuffersNames**(`_ubos`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:280](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L280)

Gets the uniform buffers names added by the plugin.

#### Parameters

##### \_ubos

`string`[]

list that the ubo names should be added to.

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`getUniformBuffersNames`](MaterialPluginBase.md#getuniformbuffersnames)

***

### getUniforms()

> **getUniforms**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:873](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L873)

Gets the description of the uniforms to add to the ubo (if engine supports ubos) or to inject directly in the vertex/fragment shaders (if engine does not support ubos)

#### Returns

`object`

the description of the uniforms

##### fragment?

> `optional` **fragment?**: `string`

##### ubo?

> `optional` **ubo?**: `object`[]

##### vertex?

> `optional` **vertex?**: `string`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`getUniforms`](MaterialPluginBase.md#getuniforms)

***

### hardBindForSubMesh()

> **hardBindForSubMesh**(`uniformBuffer`, `scene`, `engine`, `subMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:587](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L587)

Binds the material data (this function is called even if mustRebind() returns false)

#### Parameters

##### uniformBuffer

[`UniformBuffer`](UniformBuffer.md)

defines the Uniform buffer to fill in.

##### scene

[`Scene`](Scene.md)

defines the scene the material belongs to.

##### engine

[`Engine`](Engine.md)

defines the engine the material belongs to.

##### subMesh

[`SubMesh`](SubMesh.md)

the submesh to bind data for

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`hardBindForSubMesh`](MaterialPluginBase.md#hardbindforsubmesh)

***

### hasRenderTargetTextures()

> **hasRenderTargetTextures**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:771](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L771)

Gets a boolean indicating that current material needs to register RTT

#### Returns

`boolean`

true if this uses a render target otherwise false.

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`hasRenderTargetTextures`](MaterialPluginBase.md#hasrendertargettextures)

***

### hasTexture()

> **hasTexture**(`texture`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:747](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L747)

Checks to see if a texture is used in the material.

#### Parameters

##### texture

[`BaseTexture`](BaseTexture.md)

#### Returns

`boolean`

- Boolean specifying if a texture is used in the material.

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`hasTexture`](MaterialPluginBase.md#hastexture)

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:408](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L408)

Gets a boolean indicating that the plugin is compatible with a given shader language.

#### Returns

`boolean`

true if the plugin is compatible with the shader language

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`isCompatible`](MaterialPluginBase.md#iscompatible)

***

### isReadyForSubMesh()

> **isReadyForSubMesh**(`defines`, `scene`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:422](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L422)

Specifies that the submesh is ready to be used.

#### Parameters

##### defines

`MaterialSubSurfaceDefines`

##### scene

[`Scene`](Scene.md)

#### Returns

`boolean`

- boolean indicating that the submesh is ready or not.

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`isReadyForSubMesh`](MaterialPluginBase.md#isreadyforsubmesh)

***

### parse()

> **parse**(`source`, `scene`, `rootUrl`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L318)

Parses a plugin configuration from a serialized object.

#### Parameters

##### source

`any`

Serialized object.

##### scene

[`Scene`](Scene.md)

Defines the scene we are parsing for

##### rootUrl

`string`

Defines the rootUrl to load from

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`parse`](MaterialPluginBase.md#parse)

***

### prepareDefines()

> **prepareDefines**(`_defines`, `_scene`, `_mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L214)

Sets the defines for the next rendering

#### Parameters

##### \_defines

[`MaterialDefines`](MaterialDefines.md)

the list of "defines" to update.

##### \_scene

[`Scene`](Scene.md)

defines the scene to the material belongs to.

##### \_mesh

[`AbstractMesh`](AbstractMesh.md)

the mesh being rendered

#### Returns

`void`

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`prepareDefines`](MaterialPluginBase.md#preparedefines)

***

### prepareDefinesBeforeAttributes()

> **prepareDefinesBeforeAttributes**(`defines`, `scene`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts:465](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/PBR/pbrSubSurfaceConfiguration.ts#L465)

Sets the defines for the next rendering. Called before PrepareDefinesForAttributes is called.

#### Parameters

##### defines

`MaterialSubSurfaceDefines`

##### scene

[`Scene`](Scene.md)

#### Returns

`void`

#### Overrides

[`MaterialPluginBase`](MaterialPluginBase.md).[`prepareDefinesBeforeAttributes`](MaterialPluginBase.md#preparedefinesbeforeattributes)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginBase.ts:308](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginBase.ts#L308)

Serializes this plugin configuration.

#### Returns

`any`

- An object with the serialized config.

#### Inherited from

[`MaterialPluginBase`](MaterialPluginBase.md).[`serialize`](MaterialPluginBase.md#serialize)
