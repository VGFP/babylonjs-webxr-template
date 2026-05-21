[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GIRSMManager

# Class: GIRSMManager

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L40)

Class used to manage the global illumination contribution calculated from reflective shadow maps (RSM).

## Constructors

### Constructor

> **new GIRSMManager**(`scene`, `outputDimensions`, `giTextureDimensions?`, `maxSamples?`, `giTextureType?`): `GIRSMManager`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:439](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L439)

Creates a new GIRSMManager

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene

##### outputDimensions

The dimensions of the output texture (width and height). Should normally be the same as the output dimensions of the screen.

###### height

`number`

###### width

`number`

##### giTextureDimensions?

The dimensions of the GI texture (width and height). Try to use the smallest size possible for better performance.

###### height

`number` = `256`

###### width

`number` = `256`

##### maxSamples?

`number` = `2048`

The maximum number of samples to generate in the sample texture. Default value is 2048. The numSamples property of the GIRSM should be less than or equal to this value!

##### giTextureType?

`number` = `Constants.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV`

The texture type used by the GI texture. Default is Constants.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV.

#### Returns

`GIRSMManager`

## Properties

### blurDepthThreshold

> **blurDepthThreshold**: `number` = `0.05`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L153)

Defines the depth threshold used by the bilateral blur post-processes (also used by the upsampling, if enabled).
You may have to change this value, depending on your scene.

***

### blurKernel

> **blurKernel**: `number` = `12`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:164](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L164)

Defines the kernel size used by the bilateral blur post-processes. Default is 12.

***

### blurNormalThreshold

> **blurNormalThreshold**: `number` = `0.25`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L159)

Defines the normal threshold used by the bilateral blur post-processes (also used by the upsampling, if enabled).
You may have to change this value, depending on your scene.

***

### pause

> **pause**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L111)

Defines if the global illumination calculation is paused or not.
Use this setting to pause the global illumination calculation when you know that the scene (camera/mesh/light positions) is not changing anymore to save some GPU power.
The scene will still be rendered with the latest global illumination contribution.

***

### upsamplerKernel

> **upsamplerKernel**: `number` = `6`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L206)

Defines the kernel size used by the bilateral upsampling post-processes. Default is 6.

***

### GeometryBufferTextureTypesAndFormats

> `static` **GeometryBufferTextureTypesAndFormats**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L68)

Defines the default texture types and formats used by the geometry buffer renderer.

#### Index Signature

\[`key`: `number`\]: `object`

## Accessors

### countersGPU

#### Get Signature

> **get** **countersGPU**(): `object`[]

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:361](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L361)

Gets the list of GPU counters used by the manager.
GPU timing measurements must be enabled for the counters to be filled (engine.enableGPUTimingMeasurements = true).
Only available with WebGPU. You will still get the list of counters with other engines but the values will always be 0.

##### Returns

`object`[]

***

### enable

#### Get Signature

> **get** **enable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L81)

Enables or disables the manager. Default is false.
If disabled, the global illumination won't be calculated and the scene will be rendered normally, without any global illumination contribution.

##### Returns

`boolean`

#### Set Signature

> **set** **enable**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L85)

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### enableBlur

#### Get Signature

> **get** **enableBlur**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L118)

Defines if the global illumination contribution should be blurred or not (using a bilateral blur). Default is true.

##### Returns

`boolean`

#### Set Signature

> **set** **enableBlur**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L122)

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### fullSizeBlur

#### Get Signature

> **get** **fullSizeBlur**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L172)

Defines if the blur should be done at full resolution or not. Default is false.
If this setting is enabled, upampling will be disabled (ignored) as it is not needed anymore.

##### Returns

`boolean`

#### Set Signature

> **set** **fullSizeBlur**(`mode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L176)

##### Parameters

###### mode

`boolean`

##### Returns

`void`

***

### giRSM

#### Get Signature

> **get** **giRSM**(): [`GIRSM`](GIRSM.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:296](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L296)

Gets the list of GIRSM used by the manager.

##### Returns

[`GIRSM`](GIRSM.md)[]

***

### giTextureType

#### Get Signature

> **get** **giTextureType**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:272](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L272)

Gets or sets the texture type used by the GI texture. Default is Constants.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV.

##### Returns

`number`

#### Set Signature

> **set** **giTextureType**(`textureType`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:276](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L276)

##### Parameters

###### textureType

`number`

##### Returns

`void`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L289)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

***

### showOnlyGI

#### Get Signature

> **get** **showOnlyGI**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L214)

Defines if the debug layer should be enabled or not. Default is false.
Use this setting for debugging purpose, to show the global illumination contribution only.

##### Returns

`boolean`

#### Set Signature

> **set** **showOnlyGI**(`show`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:218](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L218)

##### Parameters

###### show

`boolean`

##### Returns

`void`

***

### use32BitsDepthBuffer

#### Get Signature

> **get** **use32BitsDepthBuffer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L232)

Defines if the depth buffer used by the geometry buffer renderer should be 32 bits or not. Default is false (16 bits).

##### Returns

`boolean`

#### Set Signature

> **set** **use32BitsDepthBuffer**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:236](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L236)

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### useQualityBlur

#### Get Signature

> **get** **useQualityBlur**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L136)

Defines if the blur should be done with a better quality but slower or not. Default is false.

##### Returns

`boolean`

#### Set Signature

> **set** **useQualityBlur**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L140)

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### useQualityUpsampling

#### Get Signature

> **get** **useQualityUpsampling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L190)

Defines if the upsampling should be done with a better quality but slower or not. Default is false.

##### Returns

`boolean`

#### Set Signature

> **set** **useQualityUpsampling**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L194)

##### Parameters

###### enable

`boolean`

##### Returns

`void`

## Methods

### addGIRSM()

> **addGIRSM**(`rsm`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:304](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L304)

Adds a (list of) GIRSM to the manager.

#### Parameters

##### rsm

[`GIRSM`](GIRSM.md) \| [`GIRSM`](GIRSM.md)[]

The GIRSM (or array of GIRSM) to add to the manager

#### Returns

`void`

***

### addMaterial()

> **addMaterial**(`material?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:344](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L344)

Add a material to the manager. This will enable the global illumination contribution for the material.

#### Parameters

##### material?

[`Material`](Material.md)

Material that will be affected by the global illumination contribution. If not provided, all materials of the scene will be affected.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:423](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L423)

Disposes the manager.

#### Returns

`void`

***

### generateSampleTexture()

> **generateSampleTexture**(`maxSamples`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:387](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L387)

Generates the sample texture used by the the global illumination calculation process.

#### Parameters

##### maxSamples

`number`

The maximum number of samples to generate in the texture. Default value is 2048. The numSamples property of the GIRSM should be less than or equal to this value!

#### Returns

`void`

***

### recreateResources()

> **recreateResources**(`disposeGeometryBufferRenderer?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:370](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L370)

Recreates the resources used by the manager.
You should normally not have to call this method manually, except if you change the useFullTexture property of a GIRSM, because the manager won't track this change.

#### Parameters

##### disposeGeometryBufferRenderer?

`boolean` = `false`

Defines if the geometry buffer renderer should be disposed and recreated. Default is false.

#### Returns

`void`

***

### removeGIRSM()

> **removeGIRSM**(`rsm`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L318)

Removes a (list of) GIRSM from the manager.

#### Parameters

##### rsm

[`GIRSM`](GIRSM.md) \| [`GIRSM`](GIRSM.md)[]

The GIRSM (or array of GIRSM) to remove from the manager

#### Returns

`void`

***

### setGITextureDimensions()

> **setGITextureDimensions**(`dimensions`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:262](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L262)

Sets the dimensions of the GI texture. Try to use the smallest size possible for better performance.

#### Parameters

##### dimensions

The dimensions of the GI texture (width and height)

###### height

`number`

###### width

`number`

#### Returns

`void`

***

### setOutputDimensions()

> **setOutputDimensions**(`dimensions`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts:251](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/GlobalIllumination/giRSMManager.ts#L251)

Sets the output dimensions of the final process. It should normally be the same as the output dimensions of the screen.

#### Parameters

##### dimensions

The dimensions of the output texture (width and height)

###### height

`number`

###### width

`number`

#### Returns

`void`
