[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeRenderGraphGlowLayerBlock

# Class: NodeRenderGraphGlowLayerBlock

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L23)

Block that implements the glow layer

## Extends

- [`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)

## Constructors

### Constructor

> **new NodeRenderGraphGlowLayerBlock**(`name`, `frameGraph`, `scene`, `ldrMerge?`, `layerTextureRatio?`, `layerTextureFixedSize?`, `layerTextureType?`): `NodeRenderGraphGlowLayerBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L45)

Create a new NodeRenderGraphGlowLayerBlock

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

##### ldrMerge?

`boolean` = `false`

Forces the merge step to be done in ldr (clamp values &gt; 1). Default: false

##### layerTextureRatio?

`number` = `0.5`

multiplication factor applied to the main texture size to compute the size of the layer render target texture (default: 0.5)

##### layerTextureFixedSize?

`number`

defines the fixed size of the layer render target texture. Takes precedence over layerTextureRatio if provided (default: undefined)

##### layerTextureType?

`number` = `Constants.TEXTURETYPE_UNSIGNED_BYTE`

defines the type of the layer texture (default: Constants.TEXTURETYPE_UNSIGNED_BYTE)

#### Returns

`NodeRenderGraphGlowLayerBlock`

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

### blurKernelSize

#### Get Signature

> **get** **blurKernelSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L158)

How big is the kernel of the blur texture

##### Returns

`number`

#### Set Signature

> **set** **blurKernelSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L162)

##### Parameters

###### value

`number`

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

### intensity

#### Get Signature

> **get** **intensity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L168)

The intensity of the glow

##### Returns

`number`

#### Set Signature

> **set** **intensity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L172)

##### Parameters

###### value

`number`

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L194)

Gets the layer texture input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### layerTextureFixedSize

#### Get Signature

> **get** **layerTextureFixedSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L134)

Defines the fixed size of the layer render target texture. Takes precedence over layerTextureRatio if provided

##### Returns

`number`

#### Set Signature

> **set** **layerTextureFixedSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L138)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### layerTextureRatio

#### Get Signature

> **get** **layerTextureRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L122)

Multiplication factor applied to the main texture size to compute the size of the layer render target texture

##### Returns

`number`

#### Set Signature

> **set** **layerTextureRatio**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L126)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### layerTextureType

#### Get Signature

> **get** **layerTextureType**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L146)

Defines the type of the layer texture

##### Returns

`number`

#### Set Signature

> **set** **layerTextureType**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L150)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ldrMerge

#### Get Signature

> **get** **ldrMerge**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L110)

Forces the merge step to be done in ldr (clamp values &gt; 1). Default: false

##### Returns

`boolean`

#### Set Signature

> **set** **ldrMerge**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L114)

##### Parameters

###### value

`boolean`

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L201)

Gets the objectRenderer input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### output

#### Get Signature

> **get** **output**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L208)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L187)

Gets the target texture input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### task

#### Get Signature

> **get** **task**(): [`FrameGraphGlowLayerTask`](FrameGraphGlowLayerTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L31)

Gets the frame graph task associated with this block

##### Returns

[`FrameGraphGlowLayerTask`](FrameGraphGlowLayerTask.md)

#### Overrides

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`task`](NodeRenderGraphBlock.md#task)

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

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L180)

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

> **registerInput**(`name`, `type`, `isOptional?`, `point?`): `NodeRenderGraphGlowLayerBlock`

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

`NodeRenderGraphGlowLayerBlock`

the current block

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`registerInput`](NodeRenderGraphBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `point?`): `NodeRenderGraphGlowLayerBlock`

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

`NodeRenderGraphGlowLayerBlock`

the current block

#### Inherited from

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`registerOutput`](NodeRenderGraphBlock.md#registeroutput)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Blocks/Layers/glowLayerBlock.pure.ts#L229)

Serializes this block in a JSON representation

#### Returns

`any`

the serialized block object

#### Overrides

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md).[`serialize`](NodeRenderGraphBlock.md#serialize)
