[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeRenderGraphBlurPostProcessBlock

# Class: NodeRenderGraphBlurPostProcessBlock

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts#L14)

Block that implements the blur post process

## Extends

- [`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md)

## Constructors

### Constructor

> **new NodeRenderGraphBlurPostProcessBlock**(`name`, `frameGraph`, `scene`): `NodeRenderGraphBlurPostProcessBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts#L30)

Create a new NodeRenderGraphBlurPostProcessBlock

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

#### Returns

`NodeRenderGraphBlurPostProcessBlock`

#### Overrides

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`constructor`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#constructor)

## Properties

### comments

> **comments**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L140)

A free comment about the block

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`comments`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#comments)

***

### onBuildObservable

> **onBuildObservable**: [`Observable`](Observable.md)\<[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L59)

Gets an observable raised when the block is built

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`onBuildObservable`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#onbuildobservable)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L88)

Gets or sets the unique id of the node

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`uniqueId`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#uniqueid)

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L143)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`visibleOnFrame`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#visibleonframe)

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

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`alphaMode`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#alphamode)

***

### depthReadOnly

#### Get Signature

> **get** **depthReadOnly**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts#L17)

If true, the depth attachment will be read-only.

##### Returns

`boolean`

#### Set Signature

> **set** **depthReadOnly**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts#L21)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`depthReadOnly`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#depthreadonly)

***

### depthTest

#### Get Signature

> **get** **depthTest**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts#L57)

If depth testing should be enabled (default is true).

##### Returns

`boolean`

#### Set Signature

> **set** **depthTest**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts#L61)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`depthTest`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#depthtest)

***

### direction

#### Get Signature

> **get** **direction**(): [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts#L40)

The direction in which to blur the image

##### Returns

[`Vector2`](Vector2.md)

#### Set Signature

> **set** **direction**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts#L44)

##### Parameters

###### value

[`Vector2`](Vector2.md)

##### Returns

`void`

***

### disableColorWrite

#### Get Signature

> **get** **disableColorWrite**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts#L37)

If true, color write will be disabled when applying the post process.

##### Returns

`boolean`

#### Set Signature

> **set** **disableColorWrite**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts#L41)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`disableColorWrite`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#disablecolorwrite)

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

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`disabled`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#disabled)

***

### drawBackFace

#### Get Signature

> **get** **drawBackFace**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts#L47)

If true, the post process will be generated by a back face full-screen quad (CW order).

##### Returns

`boolean`

#### Set Signature

> **set** **drawBackFace**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts#L51)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`drawBackFace`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#drawbackface)

***

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L76)

Gets the list of input points

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`inputs`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#inputs)

***

### isDebug

#### Get Signature

> **get** **isDebug**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L125)

Gets a boolean indicating if this block is a debug block

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`isDebug`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#isdebug)

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L104)

Gets a boolean indicating if this block is an input

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`isInput`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#isinput)

***

### isTeleportIn

#### Get Signature

> **get** **isTeleportIn**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L118)

Gets a boolean indicating if this block is a teleport in

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`isTeleportIn`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#isteleportin)

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L111)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`isTeleportOut`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#isteleportout)

***

### isUnique

#### Get Signature

> **get** **isUnique**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L132)

Gets a boolean indicating that this block can only be used once per node render graph

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`isUnique`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#isunique)

***

### kernel

#### Get Signature

> **get** **kernel**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts#L50)

Length in pixels of the blur sample region

##### Returns

`number`

#### Set Signature

> **set** **kernel**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts#L54)

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

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`name`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#name)

***

### output

#### Get Signature

> **get** **output**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts#L112)

Gets the output component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`output`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#output)

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L81)

Gets the list of output points

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`outputs`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#outputs)

***

### source

#### Get Signature

> **get** **source**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts#L98)

Gets the source input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`source`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#source)

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

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`sourceSamplingMode`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#sourcesamplingmode)

***

### stencilReadOnly

#### Get Signature

> **get** **stencilReadOnly**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts#L27)

If true, the stencil attachment will be read-only.

##### Returns

`boolean`

#### Set Signature

> **set** **stencilReadOnly**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts#L31)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`stencilReadOnly`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#stencilreadonly)

***

### target

#### Get Signature

> **get** **target**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/basePostProcessBlock.ts#L105)

Gets the target input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`target`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#target)

***

### task

#### Get Signature

> **get** **task**(): [`FrameGraphBlurTask`](FrameGraphBlurTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts#L20)

Gets the frame graph task associated with this block

##### Returns

[`FrameGraphBlurTask`](FrameGraphBlurTask.md)

#### Overrides

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`task`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#task)

***

### useCurrentViewport

#### Get Signature

> **get** **useCurrentViewport**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts#L77)

If true, the current viewport will be left unchanged.

##### Returns

`boolean`

#### Set Signature

> **set** **useCurrentViewport**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts#L81)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`useCurrentViewport`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#usecurrentviewport)

***

### useFullScreenViewport

#### Get Signature

> **get** **useFullScreenViewport**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts#L88)

If true, a full screen viewport will be used.

##### Returns

`boolean`

#### Set Signature

> **set** **useFullScreenViewport**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts#L92)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`useFullScreenViewport`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#usefullscreenviewport)

***

### viewport

#### Get Signature

> **get** **viewport**(): `IViewportLike`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts#L99)

The viewport to use.

##### Returns

`IViewportLike`

#### Set Signature

> **set** **viewport**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/baseWithPropertiesPostProcessBlock.ts#L103)

##### Parameters

###### value

`IViewportLike`

##### Returns

`void`

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`viewport`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#viewport)

## Methods

### \_deserialize()

> **\_deserialize**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts#L80)

#### Parameters

##### serializationObject

`any`

#### Returns

`void`

#### Overrides

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`_deserialize`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#_deserialize)

***

### autoConfigure()

> **autoConfigure**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:435](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L435)

Lets the block try to connect some inputs automatically

#### Returns

`void`

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`autoConfigure`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#autoconfigure)

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

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`build`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#build)

***

### clone()

> **clone**(): [`NodeRenderGraphBlock`](NodeRenderGraphBlock.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:656](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L656)

Clone the current block to a new identical block

#### Returns

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md) \| `null`

a copy of the current block

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`clone`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#clone)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:675](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L675)

Release resources

#### Returns

`void`

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`dispose`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts#L62)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`getClassName`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#getclassname)

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

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`getDescendantOfPredicate`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#getdescendantofpredicate)

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

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`getInputByName`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#getinputbyname)

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

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`getOutputByName`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#getoutputbyname)

***

### initialize()

> **initialize**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:428](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L428)

Initialize the block and prepare the context for build

#### Returns

`void`

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`initialize`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#initialize)

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

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`isAnAncestorOf`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#isanancestorof)

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

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`isAnAncestorOfType`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#isanancestoroftype)

***

### registerInput()

> **registerInput**(`name`, `type`, `isOptional?`, `point?`): `NodeRenderGraphBlurPostProcessBlock`

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

`NodeRenderGraphBlurPostProcessBlock`

the current block

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`registerInput`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `point?`): `NodeRenderGraphBlurPostProcessBlock`

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

`NodeRenderGraphBlurPostProcessBlock`

the current block

#### Inherited from

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`registerOutput`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#registeroutput)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/PostProcesses/blurPostProcessBlock.pure.ts#L73)

Serializes this block in a JSON representation

#### Returns

`any`

the serialized block object

#### Overrides

[`NodeRenderGraphBaseWithPropertiesPostProcessBlock`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md).[`serialize`](NodeRenderGraphBaseWithPropertiesPostProcessBlock.md#serialize)
