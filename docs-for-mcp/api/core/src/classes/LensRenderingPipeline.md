[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LensRenderingPipeline

# Class: LensRenderingPipeline

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L27)

BABYLON.JS Chromatic Aberration GLSL Shader
Author: Olivier Guyot
Separates very slightly R, G and B colors on the edges of the screen
Inspired by Francois Tarlier & Martins Upitis

## Extends

- [`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)

## Constructors

### Constructor

> **new LensRenderingPipeline**(`name`, `parameters`, `scene`, `ratio?`, `cameras?`): `LensRenderingPipeline`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L102)

#### Parameters

##### name

`string`

The rendering pipeline name

##### parameters

`any`

An object containing all parameters (see above)

##### scene

[`Scene`](Scene.md)

The scene linked to this pipeline

##### ratio?

`number` = `1.0`

The size of the postprocesses (0.5 means that your postprocess will have a width = canvas.width 0.5 and a height = canvas.height 0.5)

##### cameras?

[`Camera`](Camera.md)[]

The array of cameras that the rendering pipeline will be attached to

#### Returns

`LensRenderingPipeline`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`constructor`](PostProcessRenderPipeline.md#constructor)

## Properties

### HighlightsEnhancingEffect

> **HighlightsEnhancingEffect**: `string` = `"HighlightsEnhancingEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L49)

#### Ignore

The highlights enhancing PostProcess id in the pipeline

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L24)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`inspectableCustomProperties`](PostProcessRenderPipeline.md#inspectablecustomproperties)

***

### LensChromaticAberrationEffect

> **LensChromaticAberrationEffect**: `string` = `"LensChromaticAberrationEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L44)

#### Ignore

The chromatic aberration PostProcess id in the pipeline

***

### LensDepthOfFieldEffect

> **LensDepthOfFieldEffect**: `string` = `"LensDepthOfFieldEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L54)

#### Ignore

The depth-of-field PostProcess id in the pipeline

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L45)

Gets the unique id of the post process rendering pipeline

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`uniqueId`](PostProcessRenderPipeline.md#uniqueid)

## Accessors

### blurNoise

#### Get Signature

> **get** **blurNoise**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:273](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L273)

Gets or sets a boolean indicating if blur noise is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **blurNoise**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:277](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L277)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### cameras

#### Get Signature

> **get** **cameras**(): [`Camera`](Camera.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L48)

Gets the list of attached cameras

##### Returns

[`Camera`](Camera.md)[]

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`cameras`](PostProcessRenderPipeline.md#cameras)

***

### chromaticAberration

#### Get Signature

> **get** **chromaticAberration**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:218](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L218)

Gets or sets the chromatic aberration amount

##### Returns

`number`

#### Set Signature

> **set** **chromaticAberration**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:222](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L222)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### darkenOutOfFocus

#### Get Signature

> **get** **darkenOutOfFocus**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:262](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L262)

Gets or sets the darken out of focus amount

##### Returns

`number`

#### Set Signature

> **set** **darkenOutOfFocus**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:266](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L266)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### dofAperture

#### Get Signature

> **get** **dofAperture**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:229](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L229)

Gets or sets the depth of field aperture

##### Returns

`number`

#### Set Signature

> **set** **dofAperture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:233](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L233)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### dofDistortion

#### Get Signature

> **get** **dofDistortion**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:251](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L251)

Gets or sets the depth of field distortion

##### Returns

`number`

#### Set Signature

> **set** **dofDistortion**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L255)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### edgeBlur

#### Get Signature

> **get** **edgeBlur**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:196](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L196)

Gets or sets the edge blur

##### Returns

`number`

#### Set Signature

> **set** **edgeBlur**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L200)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### edgeDistortion

#### Get Signature

> **get** **edgeDistortion**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L240)

Gets or sets the edge distortion

##### Returns

`number`

#### Set Signature

> **set** **edgeDistortion**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:244](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L244)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### engine

#### Get Signature

> **get** **engine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L55)

Gets the active engine

##### Returns

[`AbstractEngine`](AbstractEngine.md)

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`engine`](PostProcessRenderPipeline.md#engine)

***

### grainAmount

#### Get Signature

> **get** **grainAmount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L207)

Gets or sets the grain amount

##### Returns

`number`

#### Set Signature

> **set** **grainAmount**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L211)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### highlightsGain

#### Get Signature

> **get** **highlightsGain**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:299](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L299)

Gets or sets the highlight grain amount

##### Returns

`number`

#### Set Signature

> **set** **highlightsGain**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:303](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L303)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### highlightsThreshold

#### Get Signature

> **get** **highlightsThreshold**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:310](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L310)

Gets or sets the highlight threshold

##### Returns

`number`

#### Set Signature

> **set** **highlightsThreshold**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:314](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L314)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L87)

If all the render effects in the pipeline are supported

##### Returns

`boolean`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`isSupported`](PostProcessRenderPipeline.md#issupported)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L38)

Gets pipeline name

##### Returns

`string`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`name`](PostProcessRenderPipeline.md#name)

***

### pentagonBokeh

#### Get Signature

> **get** **pentagonBokeh**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:284](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L284)

Gets or sets a boolean indicating if pentagon bokeh is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **pentagonBokeh**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:288](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L288)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### scene

#### Get Signature

> **get** **scene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L189)

Gets associated scene

##### Returns

[`Scene`](Scene.md)

## Methods

### addEffect()

> **addEffect**(`renderEffect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L103)

Adds an effect to the pipeline

#### Parameters

##### renderEffect

[`PostProcessRenderEffect`](PostProcessRenderEffect.md)

the effect to add

#### Returns

`void`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`addEffect`](PostProcessRenderPipeline.md#addeffect)

***

### disableChromaticAberration()

> **disableChromaticAberration**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:355](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L355)

Sets chromatic aberration amount to 0

#### Returns

`void`

***

### disableDepthOfField()

> **disableDepthOfField**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:381](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L381)

Disables depth of field

#### Returns

`void`

***

### disableEdgeBlur()

> **disableEdgeBlur**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:329](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L329)

Sets edge blur to 0

#### Returns

`void`

***

### disableEdgeDistortion()

> **disableEdgeDistortion**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:368](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L368)

Sets edge distortion to 0

#### Returns

`void`

***

### disableGrain()

> **disableGrain**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:342](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L342)

Set grain amount to 0

#### Returns

`void`

***

### disableHighlights()

> **disableHighlights**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:446](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L446)

Disables highlights

#### Returns

`void`

***

### disableNoiseBlur()

> **disableNoiseBlur**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:423](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L423)

Disables noise blur

#### Returns

`void`

***

### disablePentagonBokeh()

> **disablePentagonBokeh**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:410](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L410)

Disables the pentagon bokeh effect

#### Returns

`void`

***

### dispose()

> **dispose**(`disableDepthRender?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:454](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L454)

Removes the internal pipeline assets and detaches the pipeline from the scene cameras

#### Parameters

##### disableDepthRender?

`boolean` = `false`

If the scene's depth rendering should be disabled (default: false)

#### Returns

`void`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`dispose`](PostProcessRenderPipeline.md#dispose)

***

### enableNoiseBlur()

> **enableNoiseBlur**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:417](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L417)

Enables noise blur

#### Returns

`void`

***

### enablePentagonBokeh()

> **enablePentagonBokeh**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:403](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L403)

Creates a pentagon bokeh effect

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L180)

Get the class name

#### Returns

`string`

"LensRenderingPipeline"

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`getClassName`](PostProcessRenderPipeline.md#getclassname)

***

### setAperture()

> **setAperture**(`amount`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:388](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L388)

Sets the Aperture amount

#### Parameters

##### amount

`number`

amount of Aperture

#### Returns

`void`

***

### setChromaticAberration()

> **setChromaticAberration**(`amount`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:349](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L349)

Sets the chromatic aberration amount

#### Parameters

##### amount

`number`

amount of chromatic aberration

#### Returns

`void`

***

### setDarkenOutOfFocus()

> **setDarkenOutOfFocus**(`amount`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:395](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L395)

Sets the DarkenOutOfFocus amount

#### Parameters

##### amount

`number`

amount of DarkenOutOfFocus

#### Returns

`void`

***

### setEdgeBlur()

> **setEdgeBlur**(`amount`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:323](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L323)

Sets the amount of blur at the edges

#### Parameters

##### amount

`number`

blur amount

#### Returns

`void`

***

### setEdgeDistortion()

> **setEdgeDistortion**(`amount`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:362](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L362)

Sets the EdgeDistortion amount

#### Parameters

##### amount

`number`

amount of EdgeDistortion

#### Returns

`void`

***

### setFocusDistance()

> **setFocusDistance**(`amount`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L375)

Sets the FocusDistance amount

#### Parameters

##### amount

`number`

amount of FocusDistance

#### Returns

`void`

***

### setGrainAmount()

> **setGrainAmount**(`amount`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L336)

Sets the amount of grain

#### Parameters

##### amount

`number`

Amount of grain

#### Returns

`void`

***

### setHighlightsGain()

> **setHighlightsGain**(`amount`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:430](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L430)

Sets the HighlightsGain amount

#### Parameters

##### amount

`number`

amount of HighlightsGain

#### Returns

`void`

***

### setHighlightsThreshold()

> **setHighlightsThreshold**(`amount`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts:437](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.ts#L437)

Sets the HighlightsThreshold amount

#### Parameters

##### amount

`number`

amount of HighlightsThreshold

#### Returns

`void`

***

### setPrePassRenderer()

> **setPrePassRenderer**(`prePassRenderer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:274](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L274)

Sets the required values to the prepass renderer.

#### Parameters

##### prePassRenderer

[`PrePassRenderer`](PrePassRenderer.md)

defines the prepass renderer to setup.

#### Returns

`boolean`

true if the pre pass is needed.

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`setPrePassRenderer`](PostProcessRenderPipeline.md#setprepassrenderer)
