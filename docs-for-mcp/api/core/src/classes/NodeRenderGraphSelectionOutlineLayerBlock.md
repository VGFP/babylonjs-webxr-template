[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeRenderGraphSelectionOutlineLayerBlock

# Class: NodeRenderGraphSelectionOutlineLayerBlock

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L24)

Block that implements the selection outline layer

## Extends

- [`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)

## Constructors

### Constructor

> **new NodeRenderGraphSelectionOutlineLayerBlock**(`name`, `frameGraph`, `scene`, `layerTextureRatio?`, `layerTextureFixedSize?`, `layerTextureType?`): `NodeRenderGraphSelectionOutlineLayerBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L45)

Create a new NodeRenderGraphSelectionOutlineLayerBlock

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

##### layerTextureRatio?

`number` = `1.0`

multiplication factor applied to the main texture size to compute the size of the layer render target texture (default: 1.0)

##### layerTextureFixedSize?

`number`

defines the fixed size of the layer render target texture. Takes precedence over layerTextureRatio if provided (default: undefined)

##### layerTextureType?

`number` = `Constants.TEXTURETYPE_HALF_FLOAT`

defines the type of the layer texture (default: Constants.TEXTURETYPE_HALF_FLOAT)

#### Returns

`NodeRenderGraphSelectionOutlineLayerBlock`

#### Overrides

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`constructor`](NodeRenderGraphBlock.md#constructor)

## Properties

### comments

> **comments**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L140)

A free comment about the block

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`comments`](NodeRenderGraphBlock.md#comments)

***

### onBuildObservable

> **onBuildObservable**: [`Observable`](Observable.md)\<[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L59)

Gets an observable raised when the block is built

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`onBuildObservable`](NodeRenderGraphBlock.md#onbuildobservable)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L88)

Gets or sets the unique id of the node

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`uniqueId`](NodeRenderGraphBlock.md#uniqueid)

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L143)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`visibleOnFrame`](NodeRenderGraphBlock.md#visibleonframe)

## Accessors

### depth

#### Get Signature

> **get** **depth**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:235](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L235)

Gets the depth input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

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

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`disabled`](NodeRenderGraphBlock.md#disabled)

***

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L76)

Gets the list of input points

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`inputs`](NodeRenderGraphBlock.md#inputs)

***

### isDebug

#### Get Signature

> **get** **isDebug**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L125)

Gets a boolean indicating if this block is a debug block

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`isDebug`](NodeRenderGraphBlock.md#isdebug)

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L104)

Gets a boolean indicating if this block is an input

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`isInput`](NodeRenderGraphBlock.md#isinput)

***

### isTeleportIn

#### Get Signature

> **get** **isTeleportIn**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L118)

Gets a boolean indicating if this block is a teleport in

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`isTeleportIn`](NodeRenderGraphBlock.md#isteleportin)

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L111)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`isTeleportOut`](NodeRenderGraphBlock.md#isteleportout)

***

### isUnique

#### Get Signature

> **get** **isUnique**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L132)

Gets a boolean indicating that this block can only be used once per node render graph

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`isUnique`](NodeRenderGraphBlock.md#isunique)

***

### layer

#### Get Signature

> **get** **layer**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L221)

Gets the layer texture input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### layerTextureFixedSize

#### Get Signature

> **get** **layerTextureFixedSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L131)

Defines the fixed size of the layer render target texture. Takes precedence over layerTextureRatio if provided

##### Returns

`number`

#### Set Signature

> **set** **layerTextureFixedSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L135)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### layerTextureRatio

#### Get Signature

> **get** **layerTextureRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L119)

Multiplication factor applied to the main texture size to compute the size of the layer render target texture

##### Returns

`number`

#### Set Signature

> **set** **layerTextureRatio**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L123)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### layerTextureType

#### Get Signature

> **get** **layerTextureType**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L143)

Defines the type of the layer texture

##### Returns

`number`

#### Set Signature

> **set** **layerTextureType**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L147)

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

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`name`](NodeRenderGraphBlock.md#name)

***

### objectRenderer

#### Get Signature

> **get** **objectRenderer**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L228)

Gets the objectRenderer input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### occlusionStrength

#### Get Signature

> **get** **occlusionStrength**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:175](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L175)

The strength of the occlusion effect

##### Returns

`number`

#### Set Signature

> **set** **occlusionStrength**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L179)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### occlusionThreshold

#### Get Signature

> **get** **occlusionThreshold**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L185)

The occlusion threshold

##### Returns

`number`

#### Set Signature

> **set** **occlusionThreshold**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L189)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### outlineColor

#### Get Signature

> **get** **outlineColor**(): [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L155)

The outline color

##### Returns

[`Color3`](Color3.md)

#### Set Signature

> **set** **outlineColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L159)

##### Parameters

###### value

[`Color3`](Color3.md)

##### Returns

`void`

***

### outlineThickness

#### Get Signature

> **get** **outlineThickness**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L165)

The thickness of the edges

##### Returns

`number`

#### Set Signature

> **set** **outlineThickness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L169)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### output

#### Get Signature

> **get** **output**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L242)

Gets the output component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L81)

Gets the list of output points

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`outputs`](NodeRenderGraphBlock.md#outputs)

***

### target

#### Get Signature

> **get** **target**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L214)

Gets the target texture input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### task

#### Get Signature

> **get** **task**(): [`FrameGraphSelectionOutlineLayerTask`](FrameGraphSelectionOutlineLayerTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L32)

Gets the frame graph task associated with this block

##### Returns

[`FrameGraphSelectionOutlineLayerTask`](FrameGraphSelectionOutlineLayerTask.md)

#### Overrides

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`task`](NodeRenderGraphBlock.md#task)

***

### useDepthOcclusion

#### Get Signature

> **get** **useDepthOcclusion**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L195)

Whether to use depth when drawing selection outlines

##### Returns

`boolean`

#### Set Signature

> **set** **useDepthOcclusion**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L199)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### autoConfigure()

> **autoConfigure**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:435](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L435)

Lets the block try to connect some inputs automatically

#### Returns

`void`

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`autoConfigure`](NodeRenderGraphBlock.md#autoconfigure)

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

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`build`](NodeRenderGraphBlock.md#build)

***

### clone()

> **clone**(): [`NodeRenderGraphBlock`](NodeRenderGraphBlock.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:656](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L656)

Clone the current block to a new identical block

#### Returns

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md) \| `null`

a copy of the current block

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`clone`](NodeRenderGraphBlock.md#clone)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:675](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L675)

Release resources

#### Returns

`void`

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`dispose`](NodeRenderGraphBlock.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L207)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`getClassName`](NodeRenderGraphBlock.md#getclassname)

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

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`getDescendantOfPredicate`](NodeRenderGraphBlock.md#getdescendantofpredicate)

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

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`getInputByName`](NodeRenderGraphBlock.md#getinputbyname)

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

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`getOutputByName`](NodeRenderGraphBlock.md#getoutputbyname)

***

### initialize()

> **initialize**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:428](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L428)

Initialize the block and prepare the context for build

#### Returns

`void`

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`initialize`](NodeRenderGraphBlock.md#initialize)

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

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`isAnAncestorOf`](NodeRenderGraphBlock.md#isanancestorof)

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

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`isAnAncestorOfType`](NodeRenderGraphBlock.md#isanancestoroftype)

***

### registerInput()

> **registerInput**(`name`, `type`, `isOptional?`, `point?`): `NodeRenderGraphSelectionOutlineLayerBlock`

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

`NodeRenderGraphSelectionOutlineLayerBlock`

the current block

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`registerInput`](NodeRenderGraphBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `point?`): `NodeRenderGraphSelectionOutlineLayerBlock`

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

`NodeRenderGraphSelectionOutlineLayerBlock`

the current block

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`registerOutput`](NodeRenderGraphBlock.md#registeroutput)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts:267](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/selectionOutlineLayerBlock.pure.ts#L267)

Serializes this block in a JSON representation

#### Returns

`any`

the serialized block object

#### Overrides

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`serialize`](NodeRenderGraphBlock.md#serialize)
