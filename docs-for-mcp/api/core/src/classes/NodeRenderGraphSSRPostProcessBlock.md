[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeRenderGraphSSRPostProcessBlock

# Class: NodeRenderGraphSSRPostProcessBlock

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L22)

Block that implements the SSR post process

## Extends

- [`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md)

## Constructors

### Constructor

> **new NodeRenderGraphSSRPostProcessBlock**(`name`, `frameGraph`, `scene`, `textureType?`): `NodeRenderGraphSSRPostProcessBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L41)

Create a new NodeRenderGraphSSRPostProcessBlock

#### Parameters

##### name

`string`

defines the block name

##### frameGraph

[`FrameGraph`](FrameGraph.md)

defines the hosting frame graph

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### textureType?

`number` = `Constants.TEXTURETYPE_UNSIGNED_BYTE`

The texture type used by the different post processes created by SSR (default: Constants.TEXTURETYPE_UNSIGNED_BYTE)

#### Returns

`NodeRenderGraphSSRPostProcessBlock`

#### Overrides

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`constructor`](NodeRenderGraphBasePostProcessBlock.md#constructor)

## Properties

### comments

> **comments**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L140)

A free comment about the block

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`comments`](NodeRenderGraphBasePostProcessBlock.md#comments)

***

### onBuildObservable

> **onBuildObservable**: [`Observable`](Observable.md)\<[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L59)

Gets an observable raised when the block is built

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`onBuildObservable`](NodeRenderGraphBasePostProcessBlock.md#onbuildobservable)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L88)

Gets or sets the unique id of the node

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`uniqueId`](NodeRenderGraphBasePostProcessBlock.md#uniqueid)

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L143)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`visibleOnFrame`](NodeRenderGraphBasePostProcessBlock.md#visibleonframe)

## Accessors

### alphaMode

#### Get Signature

> **get** **alphaMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts#L79)

The alpha mode to use when applying the post process.

##### Returns

`number`

#### Set Signature

> **set** **alphaMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts#L83)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`alphaMode`](NodeRenderGraphBasePostProcessBlock.md#alphamode)

***

### attenuateBackfaceReflection

#### Get Signature

> **get** **attenuateBackfaceReflection**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:348](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L348)

Gets or sets a boolean indicating if the backface reflections should be attenuated

##### Returns

`boolean`

#### Set Signature

> **set** **attenuateBackfaceReflection**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:352](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L352)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### attenuateFacingCamera

#### Get Signature

> **get** **attenuateFacingCamera**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:338](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L338)

Gets or sets a boolean indicating if the reflections should be attenuated when the reflection ray is facing the camera (the view direction)

##### Returns

`boolean`

#### Set Signature

> **set** **attenuateFacingCamera**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:342](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L342)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### attenuateIntersectionDistance

#### Get Signature

> **get** **attenuateIntersectionDistance**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:318](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L318)

Gets or sets a boolean indicating if the reflections should be attenuated according to the distance of the intersection

##### Returns

`boolean`

#### Set Signature

> **set** **attenuateIntersectionDistance**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L322)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### attenuateIntersectionIterations

#### Get Signature

> **get** **attenuateIntersectionIterations**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:328](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L328)

Gets or sets a boolean indicating if the reflections should be attenuated according to the number of iterations performed to find the intersection

##### Returns

`boolean`

#### Set Signature

> **set** **attenuateIntersectionIterations**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L332)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### attenuateScreenBorders

#### Get Signature

> **get** **attenuateScreenBorders**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:308](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L308)

Gets or sets a boolean indicating if the reflections should be attenuated at the screen borders

##### Returns

`boolean`

#### Set Signature

> **set** **attenuateScreenBorders**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:312](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L312)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### blurDispersionStrength

#### Get Signature

> **get** **blurDispersionStrength**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L288)

Gets or sets the blur dispersion strength. Set this value to 0 to disable blurring

##### Returns

`number`

#### Set Signature

> **set** **blurDispersionStrength**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:292](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L292)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### blurDownsample

#### Get Signature

> **get** **blurDownsample**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:298](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L298)

Gets or sets the downsample factor used to reduce the size of the textures used to blur the reflection effect

##### Returns

`number`

#### Set Signature

> **set** **blurDownsample**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:302](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L302)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### camera

#### Get Signature

> **get** **camera**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:387](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L387)

Gets the camera input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### clipToFrustum

#### Get Signature

> **get** **clipToFrustum**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:258](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L258)

Gets or sets a boolean indicating if the ray should be clipped to the frustum

##### Returns

`boolean`

#### Set Signature

> **set** **clipToFrustum**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:262](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L262)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### debug

#### Get Signature

> **get** **debug**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L138)

Gets or sets a boolean indicating if the effect should be rendered in debug mode

##### Returns

`boolean`

#### Set Signature

> **set** **debug**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L142)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L39)

Gets or sets the disable flag of the task associated with this block

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L43)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`disabled`](NodeRenderGraphBasePostProcessBlock.md#disabled)

***

### enableAutomaticThicknessComputation

#### Get Signature

> **get** **enableAutomaticThicknessComputation**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:268](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L268)

Gets or sets a boolean defining if geometry thickness should be computed automatically

##### Returns

`boolean`

#### Set Signature

> **set** **enableAutomaticThicknessComputation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:272](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L272)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### enableSmoothReflections

#### Get Signature

> **get** **enableSmoothReflections**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:198](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L198)

Gets or sets whether or not smoothing reflections is enabled

##### Returns

`boolean`

#### Set Signature

> **set** **enableSmoothReflections**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:202](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L202)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### generateOutputInGammaSpace

#### Get Signature

> **get** **generateOutputInGammaSpace**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:368](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L368)

Gets or sets a boolean defining if the output color texture generated by the SSR pipeline should be in gamma space

##### Returns

`boolean`

#### Set Signature

> **set** **generateOutputInGammaSpace**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:372](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L372)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### geomBackDepth

#### Get Signature

> **get** **geomBackDepth**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:415](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L415)

Gets the geometry back depth input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### geomDepth

#### Get Signature

> **get** **geomDepth**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:394](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L394)

Gets the geometry depth input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### geomNormal

#### Get Signature

> **get** **geomNormal**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:401](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L401)

Gets the geometry normal input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### geomReflectivity

#### Get Signature

> **get** **geomReflectivity**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:408](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L408)

Gets the geometry reflectivity input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L76)

Gets the list of input points

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`inputs`](NodeRenderGraphBasePostProcessBlock.md#inputs)

***

### inputTextureColorIsInGammaSpace

#### Get Signature

> **get** **inputTextureColorIsInGammaSpace**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:358](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L358)

Gets or sets a boolean defining if the input color texture is in gamma space

##### Returns

`boolean`

#### Set Signature

> **set** **inputTextureColorIsInGammaSpace**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:362](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L362)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isDebug

#### Get Signature

> **get** **isDebug**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L125)

Gets a boolean indicating if this block is a debug block

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`isDebug`](NodeRenderGraphBasePostProcessBlock.md#isdebug)

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L104)

Gets a boolean indicating if this block is an input

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`isInput`](NodeRenderGraphBasePostProcessBlock.md#isinput)

***

### isTeleportIn

#### Get Signature

> **get** **isTeleportIn**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L118)

Gets a boolean indicating if this block is a teleport in

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`isTeleportIn`](NodeRenderGraphBasePostProcessBlock.md#isteleportin)

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L111)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`isTeleportOut`](NodeRenderGraphBasePostProcessBlock.md#isteleportout)

***

### isUnique

#### Get Signature

> **get** **isUnique**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L132)

Gets a boolean indicating that this block can only be used once per node render graph

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`isUnique`](NodeRenderGraphBasePostProcessBlock.md#isunique)

***

### maxDistance

#### Get Signature

> **get** **maxDistance**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:218](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L218)

Gets or sets the max distance used to define how far we look for reflection during the ray-marching on the reflected ray

##### Returns

`number`

#### Set Signature

> **set** **maxDistance**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L222)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### maxSteps

#### Get Signature

> **get** **maxSteps**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L208)

Maximum number of steps during the ray marching process after which we consider an intersection could not be found

##### Returns

`number`

#### Set Signature

> **set** **maxSteps**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:212](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L212)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L93)

Gets or set the name of the block

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L97)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`name`](NodeRenderGraphBasePostProcessBlock.md#name)

***

### output

#### Get Signature

> **get** **output**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts#L112)

Gets the output component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`output`](NodeRenderGraphBasePostProcessBlock.md#output)

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L81)

Gets the list of output points

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`outputs`](NodeRenderGraphBasePostProcessBlock.md#outputs)

***

### reflectionSpecularFalloffExponent

#### Get Signature

> **get** **reflectionSpecularFalloffExponent**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L158)

Gets or sets the falloff exponent used to compute the reflection strength. Higher values lead to fainter reflections

##### Returns

`number`

#### Set Signature

> **set** **reflectionSpecularFalloffExponent**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L162)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### reflectivityThreshold

#### Get Signature

> **get** **reflectivityThreshold**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L168)

Gets or sets the minimum value for one of the reflectivity component of the material to consider it for SSR

##### Returns

`number`

#### Set Signature

> **set** **reflectivityThreshold**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L172)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### roughnessFactor

#### Get Signature

> **get** **roughnessFactor**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L228)

Gets or sets the factor applied when computing roughness

##### Returns

`number`

#### Set Signature

> **set** **roughnessFactor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L232)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### selfCollisionNumSkip

#### Get Signature

> **get** **selfCollisionNumSkip**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L238)

Number of steps to skip at start when marching the ray to avoid self collisions

##### Returns

`number`

#### Set Signature

> **set** **selfCollisionNumSkip**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L242)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### source

#### Get Signature

> **get** **source**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts#L98)

Gets the source input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`source`](NodeRenderGraphBasePostProcessBlock.md#source)

***

### sourceSamplingMode

#### Get Signature

> **get** **sourceSamplingMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts#L49)

Sampling mode used to sample from the source texture

##### Returns

`number`

#### Set Signature

> **set** **sourceSamplingMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts#L53)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`sourceSamplingMode`](NodeRenderGraphBasePostProcessBlock.md#sourcesamplingmode)

***

### ssrDownsample

#### Get Signature

> **get** **ssrDownsample**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L248)

Gets or sets the downsample factor used to reduce the size of the texture used to compute the SSR contribution

##### Returns

`number`

#### Set Signature

> **set** **ssrDownsample**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:252](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L252)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### step

#### Get Signature

> **get** **step**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L188)

Gets or sets the step size used to iterate until the effect finds the color of the reflection's pixel

##### Returns

`number`

#### Set Signature

> **set** **step**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:192](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L192)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### strength

#### Get Signature

> **get** **strength**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L148)

Gets or sets the current reflection strength. 1.0 is an ideal value but can be increased/decreased for particular results

##### Returns

`number`

#### Set Signature

> **set** **strength**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L152)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### target

#### Get Signature

> **get** **target**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts#L105)

Gets the target input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`target`](NodeRenderGraphBasePostProcessBlock.md#target)

***

### task

#### Get Signature

> **get** **task**(): [`FrameGraphSSRRenderingPipelineTask`](FrameGraphSSRRenderingPipelineTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L30)

Gets the frame graph task associated with this block

##### Returns

[`FrameGraphSSRRenderingPipelineTask`](FrameGraphSSRRenderingPipelineTask.md)

#### Overrides

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`task`](NodeRenderGraphBasePostProcessBlock.md#task)

***

### textureType

#### Get Signature

> **get** **textureType**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L128)

The texture type used by the different post processes created by SSR

##### Returns

`number`

#### Set Signature

> **set** **textureType**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L132)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### thickness

#### Get Signature

> **get** **thickness**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L178)

Gets or sets the thickness value used as tolerance when computing the intersection between the reflected ray and the scene

##### Returns

`number`

#### Set Signature

> **set** **thickness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L182)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### useFresnel

#### Get Signature

> **get** **useFresnel**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:278](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L278)

Gets or sets a boolean indicating whether the blending between the current color pixel and the reflection color should be done with a Fresnel coefficient

##### Returns

`boolean`

#### Set Signature

> **set** **useFresnel**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:282](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L282)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### \_deserialize()

> **\_deserialize**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:529](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L529)

#### Parameters

##### serializationObject

`any`

#### Returns

`void`

#### Overrides

`NodeRenderGraphBasePostProcessBlock._deserialize`

***

### autoConfigure()

> **autoConfigure**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:435](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L435)

Lets the block try to connect some inputs automatically

#### Returns

`void`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`autoConfigure`](NodeRenderGraphBasePostProcessBlock.md#autoconfigure)

***

### build()

> **build**(`state`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:331](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L331)

Build the current node and generate the vertex data

#### Parameters

##### state

[`NodeRenderGraphBuildState`](NodeRenderGraphBuildState.md)

defines the current generation state

#### Returns

`boolean`

true if already built

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`build`](NodeRenderGraphBasePostProcessBlock.md#build)

***

### clone()

> **clone**(): [`NodeRenderGraphBlock`](NodeRenderGraphBlock.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:656](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L656)

Clone the current block to a new identical block

#### Returns

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md) \| `null`

a copy of the current block

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`clone`](NodeRenderGraphBasePostProcessBlock.md#clone)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:675](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L675)

Release resources

#### Returns

`void`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`dispose`](NodeRenderGraphBasePostProcessBlock.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L380)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`getClassName`](NodeRenderGraphBasePostProcessBlock.md#getclassname)

***

### getDescendantOfPredicate()

> **getDescendantOfPredicate**(`predicate`): [`Nullable`](../type-aliases/Nullable.md)\<[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:215](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L215)

Get the first descendant using a predicate

#### Parameters

##### predicate

(`block`) => `boolean`

defines the predicate to check

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)\>

descendant or null if none found

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`getDescendantOfPredicate`](NodeRenderGraphBasePostProcessBlock.md#getdescendantofpredicate)

***

### getInputByName()

> **getInputByName**(`name`): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:444](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L444)

Find an input by its name

#### Parameters

##### name

`string`

defines the name of the input to look for

#### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md) \| `null`

the input or null if not found

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`getInputByName`](NodeRenderGraphBasePostProcessBlock.md#getinputbyname)

***

### getOutputByName()

> **getOutputByName**(`name`): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:459](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L459)

Find an output by its name

#### Parameters

##### name

`string`

defines the name of the output to look for

#### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md) \| `null`

the output or null if not found

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`getOutputByName`](NodeRenderGraphBasePostProcessBlock.md#getoutputbyname)

***

### initialize()

> **initialize**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:428](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L428)

Initialize the block and prepare the context for build

#### Returns

`void`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`initialize`](NodeRenderGraphBasePostProcessBlock.md#initialize)

***

### isAnAncestorOf()

> **isAnAncestorOf**(`block`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L166)

Checks if the current block is an ancestor of a given block

#### Parameters

##### block

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)

defines the potential descendant block to check

#### Returns

`boolean`

true if block is a descendant

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`isAnAncestorOf`](NodeRenderGraphBasePostProcessBlock.md#isanancestorof)

***

### isAnAncestorOfType()

> **isAnAncestorOfType**(`type`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L190)

Checks if the current block is an ancestor of a given type

#### Parameters

##### type

`string`

defines the potential type to check

#### Returns

`boolean`

true if block is a descendant

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`isAnAncestorOfType`](NodeRenderGraphBasePostProcessBlock.md#isanancestoroftype)

***

### registerInput()

> **registerInput**(`name`, `type`, `isOptional?`, `point?`): `NodeRenderGraphSSRPostProcessBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:259](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L259)

Register a new input. Must be called inside a block constructor

#### Parameters

##### name

`string`

defines the connection point name

##### type

[`NodeRenderGraphBlockConnectionPointTypes`](../enumerations/NodeRenderGraphBlockConnectionPointTypes.md)

defines the connection point type

##### isOptional?

`boolean` = `false`

defines a boolean indicating that this input can be omitted

##### point?

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

an already created connection point. If not provided, create a new one

#### Returns

`NodeRenderGraphSSRPostProcessBlock`

the current block

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`registerInput`](NodeRenderGraphBasePostProcessBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `point?`): `NodeRenderGraphSSRPostProcessBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:276](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L276)

Register a new output. Must be called inside a block constructor

#### Parameters

##### name

`string`

defines the connection point name

##### type

[`NodeRenderGraphBlockConnectionPointTypes`](../enumerations/NodeRenderGraphBlockConnectionPointTypes.md)

defines the connection point type

##### point?

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

an already created connection point. If not provided, create a new one

#### Returns

`NodeRenderGraphSSRPostProcessBlock`

the current block

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`registerOutput`](NodeRenderGraphBasePostProcessBlock.md#registeroutput)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts:500](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssrPostProcessBlock.pure.ts#L500)

Serializes this block in a JSON representation

#### Returns

`any`

the serialized block object

#### Overrides

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`serialize`](NodeRenderGraphBasePostProcessBlock.md#serialize)
