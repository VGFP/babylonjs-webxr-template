[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LensRenderingPipeline

# Class: LensRenderingPipeline

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L25)

BABYLON.JS Chromatic Aberration GLSL Shader
Author: Olivier Guyot
Separates very slightly R, G and B colors on the edges of the screen
Inspired by Francois Tarlier & Martins Upitis

## Extends

- [`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)

## Constructors

### Constructor

> **new LensRenderingPipeline**(`name`, `parameters`, `scene`, `ratio?`, `cameras?`): `LensRenderingPipeline`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L100)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L47)

#### Ignore

The highlights enhancing PostProcess id in the pipeline

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L26)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`inspectableCustomProperties`](PostProcessRenderPipeline.md#inspectablecustomproperties)

***

### LensChromaticAberrationEffect

> **LensChromaticAberrationEffect**: `string` = `"LensChromaticAberrationEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L42)

#### Ignore

The chromatic aberration PostProcess id in the pipeline

***

### LensDepthOfFieldEffect

> **LensDepthOfFieldEffect**: `string` = `"LensDepthOfFieldEffect"`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L52)

#### Ignore

The depth-of-field PostProcess id in the pipeline

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L47)

Gets the unique id of the post process rendering pipeline

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`uniqueId`](PostProcessRenderPipeline.md#uniqueid)

## Accessors

### blurNoise

#### Get Signature

> **get** **blurNoise**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:272](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L272)

Gets or sets a boolean indicating if blur noise is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **blurNoise**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:276](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L276)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### cameras

#### Get Signature

> **get** **cameras**(): [`Camera`](Camera.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L50)

Gets the list of attached cameras

##### Returns

[`Camera`](Camera.md)[]

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`cameras`](PostProcessRenderPipeline.md#cameras)

***

### chromaticAberration

#### Get Signature

> **get** **chromaticAberration**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L217)

Gets or sets the chromatic aberration amount

##### Returns

`number`

#### Set Signature

> **set** **chromaticAberration**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L221)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### darkenOutOfFocus

#### Get Signature

> **get** **darkenOutOfFocus**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L261)

Gets or sets the darken out of focus amount

##### Returns

`number`

#### Set Signature

> **set** **darkenOutOfFocus**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:265](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L265)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### dofAperture

#### Get Signature

> **get** **dofAperture**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L228)

Gets or sets the depth of field aperture

##### Returns

`number`

#### Set Signature

> **set** **dofAperture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L232)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### dofDistortion

#### Get Signature

> **get** **dofDistortion**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:250](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L250)

Gets or sets the depth of field distortion

##### Returns

`number`

#### Set Signature

> **set** **dofDistortion**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L254)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### edgeBlur

#### Get Signature

> **get** **edgeBlur**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L195)

Gets or sets the edge blur

##### Returns

`number`

#### Set Signature

> **set** **edgeBlur**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L199)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### edgeDistortion

#### Get Signature

> **get** **edgeDistortion**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L239)

Gets or sets the edge distortion

##### Returns

`number`

#### Set Signature

> **set** **edgeDistortion**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:243](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L243)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### engine

#### Get Signature

> **get** **engine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L57)

Gets the active engine

##### Returns

[`AbstractEngine`](AbstractEngine.md)

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`engine`](PostProcessRenderPipeline.md#engine)

***

### grainAmount

#### Get Signature

> **get** **grainAmount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:206](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L206)

Gets or sets the grain amount

##### Returns

`number`

#### Set Signature

> **set** **grainAmount**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:210](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L210)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### highlightsGain

#### Get Signature

> **get** **highlightsGain**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:298](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L298)

Gets or sets the highlight grain amount

##### Returns

`number`

#### Set Signature

> **set** **highlightsGain**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:302](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L302)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### highlightsThreshold

#### Get Signature

> **get** **highlightsThreshold**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:309](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L309)

Gets or sets the highlight threshold

##### Returns

`number`

#### Set Signature

> **set** **highlightsThreshold**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:313](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L313)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L90)

If all the render effects in the pipeline are supported

##### Returns

`boolean`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`isSupported`](PostProcessRenderPipeline.md#issupported)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L40)

Gets pipeline name

##### Returns

`string`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`name`](PostProcessRenderPipeline.md#name)

***

### pentagonBokeh

#### Get Signature

> **get** **pentagonBokeh**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L283)

Gets or sets a boolean indicating if pentagon bokeh is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **pentagonBokeh**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:287](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L287)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### scene

#### Get Signature

> **get** **scene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L188)

Gets associated scene

##### Returns

[`Scene`](Scene.md)

## Methods

### addEffect()

> **addEffect**(`renderEffect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L106)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:354](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L354)

Sets chromatic aberration amount to 0

#### Returns

`void`

***

### disableDepthOfField()

> **disableDepthOfField**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L380)

Disables depth of field

#### Returns

`void`

***

### disableEdgeBlur()

> **disableEdgeBlur**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:328](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L328)

Sets edge blur to 0

#### Returns

`void`

***

### disableEdgeDistortion()

> **disableEdgeDistortion**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:367](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L367)

Sets edge distortion to 0

#### Returns

`void`

***

### disableGrain()

> **disableGrain**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:341](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L341)

Set grain amount to 0

#### Returns

`void`

***

### disableHighlights()

> **disableHighlights**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:445](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L445)

Disables highlights

#### Returns

`void`

***

### disableNoiseBlur()

> **disableNoiseBlur**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:422](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L422)

Disables noise blur

#### Returns

`void`

***

### disablePentagonBokeh()

> **disablePentagonBokeh**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:409](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L409)

Disables the pentagon bokeh effect

#### Returns

`void`

***

### dispose()

> **dispose**(`disableDepthRender?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:453](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L453)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:416](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L416)

Enables noise blur

#### Returns

`void`

***

### enablePentagonBokeh()

> **enablePentagonBokeh**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:402](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L402)

Creates a pentagon bokeh effect

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L179)

Get the class name

#### Returns

`string`

"LensRenderingPipeline"

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`getClassName`](PostProcessRenderPipeline.md#getclassname)

***

### setAperture()

> **setAperture**(`amount`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:387](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L387)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:348](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L348)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:394](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L394)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L322)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:361](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L361)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:374](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L374)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:335](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L335)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:429](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L429)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts:436](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/lensRenderingPipeline.pure.ts#L436)

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

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:277](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L277)

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
