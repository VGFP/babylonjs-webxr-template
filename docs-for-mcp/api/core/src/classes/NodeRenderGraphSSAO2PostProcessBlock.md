[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeRenderGraphSSAO2PostProcessBlock

# Class: NodeRenderGraphSSAO2PostProcessBlock

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L12)

Block that implements the SSAO2 post process

## Extends

- [`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md)

## Constructors

### Constructor

> **new NodeRenderGraphSSAO2PostProcessBlock**(`name`, `frameGraph`, `scene`, `ratioSSAO?`, `ratioBlur?`, `textureType?`): `NodeRenderGraphSSAO2PostProcessBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L33)

Create a new NodeRenderGraphSSAO2PostProcessBlock

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

##### ratioSSAO?

`number` = `1`

The ratio between the SSAO texture size and the source texture size (default: 1)

##### ratioBlur?

`number` = `1`

The ratio between the SSAO blur texture size and the source texture size (default: 1)

##### textureType?

`number` = `Constants.TEXTURETYPE_UNSIGNED_BYTE`

The texture type used by the different post processes created by SSAO2 (default: Constants.TEXTURETYPE_UNSIGNED_BYTE)

#### Returns

`NodeRenderGraphSSAO2PostProcessBlock`

#### Overrides

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`constructor`](NodeRenderGraphBasePostProcessBlock.md#constructor)

## Properties

### comments

> **comments**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L140)

A free comment about the block

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`comments`](NodeRenderGraphBasePostProcessBlock.md#comments)

***

### onBuildObservable

> **onBuildObservable**: [`Observable`](Observable.md)\<[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L59)

Gets an observable raised when the block is built

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`onBuildObservable`](NodeRenderGraphBasePostProcessBlock.md#onbuildobservable)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L88)

Gets or sets the unique id of the node

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`uniqueId`](NodeRenderGraphBasePostProcessBlock.md#uniqueid)

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L143)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`visibleOnFrame`](NodeRenderGraphBasePostProcessBlock.md#visibleonframe)

## Accessors

### alphaMode

#### Get Signature

> **get** **alphaMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts#L79)

The alpha mode to use when applying the post process.

##### Returns

`number`

#### Set Signature

> **set** **alphaMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts#L83)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`alphaMode`](NodeRenderGraphBasePostProcessBlock.md#alphamode)

***

### base

#### Get Signature

> **get** **base**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L136)

The base color of the SSAO post-process. The final result is "base + ssao" between [0, 1]

##### Returns

`number`

#### Set Signature

> **set** **base**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L140)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### bilateralSamples

#### Get Signature

> **get** **bilateralSamples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L216)

The number of samples the bilateral filter uses in both dimensions when denoising the SSAO calculations.

##### Returns

`number`

#### Set Signature

> **set** **bilateralSamples**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:220](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L220)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### bilateralSoften

#### Get Signature

> **get** **bilateralSoften**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L226)

Controls the shape of the denoising kernel used by the bilateral filter.

##### Returns

`number`

#### Set Signature

> **set** **bilateralSoften**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L230)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### bilateralTolerance

#### Get Signature

> **get** **bilateralTolerance**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:236](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L236)

How forgiving the bilateral denoiser should be when rejecting samples.

##### Returns

`number`

#### Set Signature

> **set** **bilateralTolerance**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L240)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### bypassBlur

#### Get Signature

> **get** **bypassBlur**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:196](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L196)

Skips the denoising (blur) stage of the SSAO calculations.

##### Returns

`boolean`

#### Set Signature

> **set** **bypassBlur**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L200)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### camera

#### Get Signature

> **get** **camera**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L255)

Gets the camera input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L39)

Gets or sets the disable flag of the task associated with this block

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L43)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`disabled`](NodeRenderGraphBasePostProcessBlock.md#disabled)

***

### epsilon

#### Get Signature

> **get** **epsilon**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L176)

Used in SSAO calculations to compensate for accuracy issues with depth values.

##### Returns

`number`

#### Set Signature

> **set** **epsilon**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L180)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### expensiveBlur

#### Get Signature

> **get** **expensiveBlur**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L206)

Enables the configurable bilateral denoising (blurring) filter.

##### Returns

`boolean`

#### Set Signature

> **set** **expensiveBlur**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:210](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L210)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### geomDepth

#### Get Signature

> **get** **geomDepth**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:262](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L262)

Gets the geometry depth input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### geomNormal

#### Get Signature

> **get** **geomNormal**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L269)

Gets the geometry normal input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L76)

Gets the list of input points

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`inputs`](NodeRenderGraphBasePostProcessBlock.md#inputs)

***

### isDebug

#### Get Signature

> **get** **isDebug**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L125)

Gets a boolean indicating if this block is a debug block

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`isDebug`](NodeRenderGraphBasePostProcessBlock.md#isdebug)

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L104)

Gets a boolean indicating if this block is an input

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`isInput`](NodeRenderGraphBasePostProcessBlock.md#isinput)

***

### isTeleportIn

#### Get Signature

> **get** **isTeleportIn**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L118)

Gets a boolean indicating if this block is a teleport in

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`isTeleportIn`](NodeRenderGraphBasePostProcessBlock.md#isteleportin)

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L111)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`isTeleportOut`](NodeRenderGraphBasePostProcessBlock.md#isteleportout)

***

### isUnique

#### Get Signature

> **get** **isUnique**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L132)

Gets a boolean indicating that this block can only be used once per node render graph

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`isUnique`](NodeRenderGraphBasePostProcessBlock.md#isunique)

***

### maxZ

#### Get Signature

> **get** **maxZ**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L146)

Maximum depth value to still render AO. A smooth falloff makes the dimming more natural, so there will be no abrupt shading change.

##### Returns

`number`

#### Set Signature

> **set** **maxZ**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L150)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### minZAspect

#### Get Signature

> **get** **minZAspect**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L156)

In order to save performances, SSAO radius is clamped on close geometry. This ratio changes by how much.

##### Returns

`number`

#### Set Signature

> **set** **minZAspect**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L160)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L93)

Gets or set the name of the block

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L97)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts#L112)

Gets the output component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`output`](NodeRenderGraphBasePostProcessBlock.md#output)

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L81)

Gets the list of output points

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`outputs`](NodeRenderGraphBasePostProcessBlock.md#outputs)

***

### radius

#### Get Signature

> **get** **radius**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L166)

The radius around the analyzed pixel used by the SSAO post-process.

##### Returns

`number`

#### Set Signature

> **set** **radius**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L170)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ratioBlur

#### Get Signature

> **get** **ratioBlur**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L106)

The ratio between the SSAO blur texture size and the source texture size

##### Returns

`number`

#### Set Signature

> **set** **ratioBlur**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L110)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ratioSSAO

#### Get Signature

> **get** **ratioSSAO**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L96)

The ratio between the SSAO texture size and the source texture size

##### Returns

`number`

#### Set Signature

> **set** **ratioSSAO**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L100)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L116)

Number of samples used for the SSAO calculations. Default value is 8.

##### Returns

`number`

#### Set Signature

> **set** **samples**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L120)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### source

#### Get Signature

> **get** **source**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts#L98)

Gets the source input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`source`](NodeRenderGraphBasePostProcessBlock.md#source)

***

### sourceSamplingMode

#### Get Signature

> **get** **sourceSamplingMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts#L49)

Sampling mode used to sample from the source texture

##### Returns

`number`

#### Set Signature

> **set** **sourceSamplingMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts#L53)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`sourceSamplingMode`](NodeRenderGraphBasePostProcessBlock.md#sourcesamplingmode)

***

### target

#### Get Signature

> **get** **target**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts#L105)

Gets the target input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`target`](NodeRenderGraphBasePostProcessBlock.md#target)

***

### task

#### Get Signature

> **get** **task**(): [`FrameGraphSSAO2RenderingPipelineTask`](FrameGraphSSAO2RenderingPipelineTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L20)

Gets the frame graph task associated with this block

##### Returns

[`FrameGraphSSAO2RenderingPipelineTask`](FrameGraphSSAO2RenderingPipelineTask.md)

#### Overrides

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`task`](NodeRenderGraphBasePostProcessBlock.md#task)

***

### textureType

#### Get Signature

> **get** **textureType**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L86)

The texture type used by the different post processes created by SSAO2

##### Returns

`number`

#### Set Signature

> **set** **textureType**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L90)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### totalStrength

#### Get Signature

> **get** **totalStrength**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L126)

The strength of the SSAO post-process. Default value is 1.0.

##### Returns

`number`

#### Set Signature

> **set** **totalStrength**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L130)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### useViewportInCombineStage

#### Get Signature

> **get** **useViewportInCombineStage**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L186)

Indicates that the combine stage should use the current camera viewport to render the SSAO result on only a portion of the output texture.

##### Returns

`boolean`

#### Set Signature

> **set** **useViewportInCombineStage**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L190)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### \_deserialize()

> **\_deserialize**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:317](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L317)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:435](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L435)

Lets the block try to connect some inputs automatically

#### Returns

`void`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`autoConfigure`](NodeRenderGraphBasePostProcessBlock.md#autoconfigure)

***

### build()

> **build**(`state`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:331](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L331)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:656](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L656)

Clone the current block to a new identical block

#### Returns

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md) \| `null`

a copy of the current block

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`clone`](NodeRenderGraphBasePostProcessBlock.md#clone)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:675](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L675)

Release resources

#### Returns

`void`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`dispose`](NodeRenderGraphBasePostProcessBlock.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:248](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L248)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`getClassName`](NodeRenderGraphBasePostProcessBlock.md#getclassname)

***

### getDescendantOfPredicate()

> **getDescendantOfPredicate**(`predicate`): [`Nullable`](../type-aliases/Nullable.md)\<[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L215)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:444](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L444)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:459](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L459)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:428](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L428)

Initialize the block and prepare the context for build

#### Returns

`void`

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`initialize`](NodeRenderGraphBasePostProcessBlock.md#initialize)

***

### isAnAncestorOf()

> **isAnAncestorOf**(`block`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L166)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L190)

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

> **registerInput**(`name`, `type`, `isOptional?`, `point?`): `NodeRenderGraphSSAO2PostProcessBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L259)

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

`NodeRenderGraphSSAO2PostProcessBlock`

the current block

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`registerInput`](NodeRenderGraphBasePostProcessBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `point?`): `NodeRenderGraphSSAO2PostProcessBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:276](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L276)

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

`NodeRenderGraphSSAO2PostProcessBlock`

the current block

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`registerOutput`](NodeRenderGraphBasePostProcessBlock.md#registeroutput)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts:299](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/ssao2PostProcessBlock.ts#L299)

Serializes this block in a JSON representation

#### Returns

`any`

the serialized block object

#### Overrides

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`serialize`](NodeRenderGraphBasePostProcessBlock.md#serialize)
