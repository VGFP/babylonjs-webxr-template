[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / NodeRenderGraphGUIBlock

# Class: NodeRenderGraphGUIBlock

Defined in: [babylonjs-source/packages/dev/gui/src/2D/FrameGraph/renderGraphGUIBlock.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/FrameGraph/renderGraphGUIBlock.ts#L15)

Block that implements a fullscreen GUI for render graph

## Extends

- [`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md)

## Constructors

### Constructor

> **new NodeRenderGraphGUIBlock**(`name`, `frameGraph`, `scene`): `NodeRenderGraphGUIBlock`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/FrameGraph/renderGraphGUIBlock.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/FrameGraph/renderGraphGUIBlock.ts#L39)

Create a new NodeRenderGraphGUIBlock

#### Parameters

##### name

`string`

defines the block name

##### frameGraph

[`FrameGraph`](../../../core/src/classes/FrameGraph.md)

defines the hosting frame graph

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

#### Returns

`NodeRenderGraphGUIBlock`

#### Overrides

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`constructor`](../../../core/src/classes/NodeRenderGraphBlock.md#constructor)

## Properties

### comments

> **comments**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L140)

A free comment about the block

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`comments`](../../../core/src/classes/NodeRenderGraphBlock.md#comments)

***

### onBuildObservable

> **onBuildObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L59)

Gets an observable raised when the block is built

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`onBuildObservable`](../../../core/src/classes/NodeRenderGraphBlock.md#onbuildobservable)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L88)

Gets or sets the unique id of the node

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`uniqueId`](../../../core/src/classes/NodeRenderGraphBlock.md#uniqueid)

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L143)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`visibleOnFrame`](../../../core/src/classes/NodeRenderGraphBlock.md#visibleonframe)

## Accessors

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

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`disabled`](../../../core/src/classes/NodeRenderGraphBlock.md#disabled)

***

### gui

#### Get Signature

> **get** **gui**(): [`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/FrameGraph/renderGraphGUIBlock.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/FrameGraph/renderGraphGUIBlock.ts#L29)

Gets the GUI texture used by this block

##### Returns

[`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

***

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeRenderGraphConnectionPoint`](../../../core/src/classes/NodeRenderGraphConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L76)

Gets the list of input points

##### Returns

[`NodeRenderGraphConnectionPoint`](../../../core/src/classes/NodeRenderGraphConnectionPoint.md)[]

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`inputs`](../../../core/src/classes/NodeRenderGraphBlock.md#inputs)

***

### isDebug

#### Get Signature

> **get** **isDebug**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L125)

Gets a boolean indicating if this block is a debug block

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`isDebug`](../../../core/src/classes/NodeRenderGraphBlock.md#isdebug)

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L104)

Gets a boolean indicating if this block is an input

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`isInput`](../../../core/src/classes/NodeRenderGraphBlock.md#isinput)

***

### isTeleportIn

#### Get Signature

> **get** **isTeleportIn**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L118)

Gets a boolean indicating if this block is a teleport in

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`isTeleportIn`](../../../core/src/classes/NodeRenderGraphBlock.md#isteleportin)

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L111)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`isTeleportOut`](../../../core/src/classes/NodeRenderGraphBlock.md#isteleportout)

***

### isUnique

#### Get Signature

> **get** **isUnique**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L132)

Gets a boolean indicating that this block can only be used once per node render graph

##### Returns

`boolean`

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`isUnique`](../../../core/src/classes/NodeRenderGraphBlock.md#isunique)

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

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`name`](../../../core/src/classes/NodeRenderGraphBlock.md#name)

***

### output

#### Get Signature

> **get** **output**(): [`NodeRenderGraphConnectionPoint`](../../../core/src/classes/NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/FrameGraph/renderGraphGUIBlock.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/FrameGraph/renderGraphGUIBlock.ts#L74)

Gets the output component

##### Returns

[`NodeRenderGraphConnectionPoint`](../../../core/src/classes/NodeRenderGraphConnectionPoint.md)

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeRenderGraphConnectionPoint`](../../../core/src/classes/NodeRenderGraphConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L81)

Gets the list of output points

##### Returns

[`NodeRenderGraphConnectionPoint`](../../../core/src/classes/NodeRenderGraphConnectionPoint.md)[]

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`outputs`](../../../core/src/classes/NodeRenderGraphBlock.md#outputs)

***

### target

#### Get Signature

> **get** **target**(): [`NodeRenderGraphConnectionPoint`](../../../core/src/classes/NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/FrameGraph/renderGraphGUIBlock.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/FrameGraph/renderGraphGUIBlock.ts#L67)

Gets the target input component

##### Returns

[`NodeRenderGraphConnectionPoint`](../../../core/src/classes/NodeRenderGraphConnectionPoint.md)

***

### task

#### Get Signature

> **get** **task**(): [`FrameGraphGUITask`](FrameGraphGUITask.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/FrameGraph/renderGraphGUIBlock.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/FrameGraph/renderGraphGUIBlock.ts#L22)

Gets the frame graph task associated with this block

##### Returns

[`FrameGraphGUITask`](FrameGraphGUITask.md)

#### Overrides

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`task`](../../../core/src/classes/NodeRenderGraphBlock.md#task)

## Methods

### autoConfigure()

> **autoConfigure**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:435](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L435)

Lets the block try to connect some inputs automatically

#### Returns

`void`

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`autoConfigure`](../../../core/src/classes/NodeRenderGraphBlock.md#autoconfigure)

***

### build()

> **build**(`state`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:331](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L331)

Build the current node and generate the vertex data

#### Parameters

##### state

[`NodeRenderGraphBuildState`](../../../core/src/classes/NodeRenderGraphBuildState.md)

defines the current generation state

#### Returns

`boolean`

true if already built

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`build`](../../../core/src/classes/NodeRenderGraphBlock.md#build)

***

### clone()

> **clone**(): [`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:656](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L656)

Clone the current block to a new identical block

#### Returns

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md) \| `null`

a copy of the current block

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`clone`](../../../core/src/classes/NodeRenderGraphBlock.md#clone)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:675](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L675)

Release resources

#### Returns

`void`

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`dispose`](../../../core/src/classes/NodeRenderGraphBlock.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/FrameGraph/renderGraphGUIBlock.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/FrameGraph/renderGraphGUIBlock.ts#L60)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`getClassName`](../../../core/src/classes/NodeRenderGraphBlock.md#getclassname)

***

### getDescendantOfPredicate()

> **getDescendantOfPredicate**(`predicate`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L215)

Get the first descendant using a predicate

#### Parameters

##### predicate

(`block`) => `boolean`

defines the predicate to check

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md)\>

descendant or null if none found

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`getDescendantOfPredicate`](../../../core/src/classes/NodeRenderGraphBlock.md#getdescendantofpredicate)

***

### getInputByName()

> **getInputByName**(`name`): [`NodeRenderGraphConnectionPoint`](../../../core/src/classes/NodeRenderGraphConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:444](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L444)

Find an input by its name

#### Parameters

##### name

`string`

defines the name of the input to look for

#### Returns

[`NodeRenderGraphConnectionPoint`](../../../core/src/classes/NodeRenderGraphConnectionPoint.md) \| `null`

the input or null if not found

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`getInputByName`](../../../core/src/classes/NodeRenderGraphBlock.md#getinputbyname)

***

### getOutputByName()

> **getOutputByName**(`name`): [`NodeRenderGraphConnectionPoint`](../../../core/src/classes/NodeRenderGraphConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:459](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L459)

Find an output by its name

#### Parameters

##### name

`string`

defines the name of the output to look for

#### Returns

[`NodeRenderGraphConnectionPoint`](../../../core/src/classes/NodeRenderGraphConnectionPoint.md) \| `null`

the output or null if not found

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`getOutputByName`](../../../core/src/classes/NodeRenderGraphBlock.md#getoutputbyname)

***

### initialize()

> **initialize**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:428](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L428)

Initialize the block and prepare the context for build

#### Returns

`void`

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`initialize`](../../../core/src/classes/NodeRenderGraphBlock.md#initialize)

***

### isAnAncestorOf()

> **isAnAncestorOf**(`block`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L166)

Checks if the current block is an ancestor of a given block

#### Parameters

##### block

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md)

defines the potential descendant block to check

#### Returns

`boolean`

true if block is a descendant

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`isAnAncestorOf`](../../../core/src/classes/NodeRenderGraphBlock.md#isanancestorof)

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

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`isAnAncestorOfType`](../../../core/src/classes/NodeRenderGraphBlock.md#isanancestoroftype)

***

### registerInput()

> **registerInput**(`name`, `type`, `isOptional?`, `point?`): `NodeRenderGraphGUIBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L259)

Register a new input. Must be called inside a block constructor

#### Parameters

##### name

`string`

defines the connection point name

##### type

[`NodeRenderGraphBlockConnectionPointTypes`](../../../core/src/enumerations/NodeRenderGraphBlockConnectionPointTypes.md)

defines the connection point type

##### isOptional?

`boolean` = `false`

defines a boolean indicating that this input can be omitted

##### point?

[`NodeRenderGraphConnectionPoint`](../../../core/src/classes/NodeRenderGraphConnectionPoint.md)

an already created connection point. If not provided, create a new one

#### Returns

`NodeRenderGraphGUIBlock`

the current block

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`registerInput`](../../../core/src/classes/NodeRenderGraphBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `point?`): `NodeRenderGraphGUIBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:276](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L276)

Register a new output. Must be called inside a block constructor

#### Parameters

##### name

`string`

defines the connection point name

##### type

[`NodeRenderGraphBlockConnectionPointTypes`](../../../core/src/enumerations/NodeRenderGraphBlockConnectionPointTypes.md)

defines the connection point type

##### point?

[`NodeRenderGraphConnectionPoint`](../../../core/src/classes/NodeRenderGraphConnectionPoint.md)

an already created connection point. If not provided, create a new one

#### Returns

`NodeRenderGraphGUIBlock`

the current block

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`registerOutput`](../../../core/src/classes/NodeRenderGraphBlock.md#registeroutput)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:473](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L473)

Serializes this block in a JSON representation

#### Returns

`any`

the serialized block object

#### Inherited from

[`NodeRenderGraphBlock`](../../../core/src/classes/NodeRenderGraphBlock.md).[`serialize`](../../../core/src/classes/NodeRenderGraphBlock.md#serialize)
