[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeRenderGraphDepthOfFieldPostProcessBlock

# Class: NodeRenderGraphDepthOfFieldPostProcessBlock

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L12)

Block that implements the depth of field post process

## Extends

- [`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md)

## Constructors

### Constructor

> **new NodeRenderGraphDepthOfFieldPostProcessBlock**(`name`, `frameGraph`, `scene`, `blurLevel?`, `hdr?`): `NodeRenderGraphDepthOfFieldPostProcessBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L30)

Create a new NodeRenderGraphDepthOfFieldPostProcessBlock

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

##### blurLevel?

[`ThinDepthOfFieldEffectBlurLevel`](../enumerations/ThinDepthOfFieldEffectBlurLevel.md) = `ThinDepthOfFieldEffectBlurLevel.Low`

The quality of the depth of field effect (default: ThinDepthOfFieldEffectBlurLevel.Low)

##### hdr?

`boolean` = `false`

If high dynamic range textures should be used (default: false)

#### Returns

`NodeRenderGraphDepthOfFieldPostProcessBlock`

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

### blurLevel

#### Get Signature

> **get** **blurLevel**(): [`ThinDepthOfFieldEffectBlurLevel`](../enumerations/ThinDepthOfFieldEffectBlurLevel.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L72)

The quality of the blur effect

##### Returns

[`ThinDepthOfFieldEffectBlurLevel`](../enumerations/ThinDepthOfFieldEffectBlurLevel.md)

#### Set Signature

> **set** **blurLevel**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L76)

##### Parameters

###### value

[`ThinDepthOfFieldEffectBlurLevel`](../enumerations/ThinDepthOfFieldEffectBlurLevel.md)

##### Returns

`void`

***

### camera

#### Get Signature

> **get** **camera**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L158)

Gets the camera input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### depthSamplingMode

#### Get Signature

> **get** **depthSamplingMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L92)

Sampling mode used to sample from the depth texture

##### Returns

`number`

#### Set Signature

> **set** **depthSamplingMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L96)

##### Parameters

###### value

`number`

##### Returns

`void`

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

### focalLength

#### Get Signature

> **get** **focalLength**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L102)

The focal the length of the camera used in the effect in scene units/1000 (eg. millimeter).

##### Returns

`number`

#### Set Signature

> **set** **focalLength**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L106)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### focusDistance

#### Get Signature

> **get** **focusDistance**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L122)

Distance away from the camera to focus on in scene units/1000 (eg. millimeter).

##### Returns

`number`

#### Set Signature

> **set** **focusDistance**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L126)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### fStop

#### Get Signature

> **get** **fStop**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L112)

F-Stop of the effect's camera. The diameter of the resulting aperture can be computed by lensSize/fStop.

##### Returns

`number`

#### Set Signature

> **set** **fStop**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L116)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### geomViewDepth

#### Get Signature

> **get** **geomViewDepth**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L151)

Gets the geometry view depth input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### hdr

#### Get Signature

> **get** **hdr**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L82)

If high dynamic range textures should be used

##### Returns

`boolean`

#### Set Signature

> **set** **hdr**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L86)

##### Parameters

###### value

`boolean`

##### Returns

`void`

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

### lensSize

#### Get Signature

> **get** **lensSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L132)

Max lens size in scene units/1000 (eg. millimeter). Standard cameras are 50mm. The diameter of the resulting aperture can be computed by lensSize/fStop.

##### Returns

`number`

#### Set Signature

> **set** **lensSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L136)

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

> **get** **task**(): [`FrameGraphDepthOfFieldTask`](FrameGraphDepthOfFieldTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L18)

Gets the frame graph task associated with this block

##### Returns

[`FrameGraphDepthOfFieldTask`](FrameGraphDepthOfFieldTask.md)

#### Overrides

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`task`](NodeRenderGraphBasePostProcessBlock.md#task)

## Methods

### \_deserialize()

> **\_deserialize**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L191)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L144)

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

> **registerInput**(`name`, `type`, `isOptional?`, `point?`): `NodeRenderGraphDepthOfFieldPostProcessBlock`

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

`NodeRenderGraphDepthOfFieldPostProcessBlock`

the current block

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`registerInput`](NodeRenderGraphBasePostProcessBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `point?`): `NodeRenderGraphDepthOfFieldPostProcessBlock`

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

`NodeRenderGraphDepthOfFieldPostProcessBlock`

the current block

#### Inherited from

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`registerOutput`](NodeRenderGraphBasePostProcessBlock.md#registeroutput)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/depthOfFieldPostProcessBlock.ts#L181)

Serializes this block in a JSON representation

#### Returns

`any`

the serialized block object

#### Overrides

[`NodeRenderGraphBasePostProcessBlock`](NodeRenderGraphBasePostProcessBlock.md).[`serialize`](NodeRenderGraphBasePostProcessBlock.md#serialize)
