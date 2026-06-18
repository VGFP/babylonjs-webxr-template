[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InstantiateLinearBlock

# Class: InstantiateLinearBlock

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateLinearBlock.pure.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateLinearBlock.pure.ts#L14)

Block used to clone geometry along a line

## Extends

- `InstantiateBaseBlock`

## Constructors

### Constructor

> **new InstantiateLinearBlock**(`name`): `InstantiateLinearBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateLinearBlock.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateLinearBlock.pure.ts#L19)

Create a new Instantiate Linear Block

#### Parameters

##### name

`string`

defines the block name

#### Returns

`InstantiateLinearBlock`

#### Overrides

`InstantiateBaseBlock.constructor`

## Properties

### comments

> **comments**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L115)

A free comment about the block

#### Inherited from

`InstantiateBaseBlock.comments`

***

### evaluateContext

> **evaluateContext**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateBaseBlock.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateBaseBlock.ts#L21)

Gets or sets a boolean indicating that this block can evaluate context
Build performance is improved when this value is set to false as the system will cache values instead of reevaluating everything per context change

#### Inherited from

`InstantiateBaseBlock.evaluateContext`

***

### onBuildObservable

> **onBuildObservable**: [`Observable`](Observable.md)\<[`NodeGeometryBlock`](NodeGeometryBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L30)

Gets an observable raised when the block is built

#### Inherited from

`InstantiateBaseBlock.onBuildObservable`

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L63)

Gets or sets the unique id of the node

#### Inherited from

`InstantiateBaseBlock.uniqueId`

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L118)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

#### Inherited from

`InstantiateBaseBlock.visibleOnFrame`

## Accessors

### buildExecutionTime

#### Get Signature

> **get** **buildExecutionTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L44)

Gets the time spent to build this block (in ms)

##### Returns

`number`

#### Inherited from

`InstantiateBaseBlock.buildExecutionTime`

***

### count

#### Get Signature

> **get** **count**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateBaseBlock.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateBaseBlock.ts#L86)

Gets the count input component

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

#### Inherited from

`InstantiateBaseBlock.count`

***

### direction

#### Get Signature

> **get** **direction**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateLinearBlock.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateLinearBlock.pure.ts#L43)

Gets the direction input component

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

***

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L51)

Gets the list of input points

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)[]

#### Inherited from

`InstantiateBaseBlock.inputs`

***

### instance

#### Get Signature

> **get** **instance**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateBaseBlock.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateBaseBlock.ts#L79)

Gets the instance input component

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

#### Inherited from

`InstantiateBaseBlock.instance`

***

### isDebug

#### Get Signature

> **get** **isDebug**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L100)

Gets a boolean indicating if this block is a debug block

##### Returns

`boolean`

#### Inherited from

`InstantiateBaseBlock.isDebug`

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L79)

Gets a boolean indicating if this block is an input

##### Returns

`boolean`

#### Inherited from

`InstantiateBaseBlock.isInput`

***

### isTeleportIn

#### Get Signature

> **get** **isTeleportIn**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L93)

Gets a boolean indicating if this block is a teleport in

##### Returns

`boolean`

#### Inherited from

`InstantiateBaseBlock.isTeleportIn`

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L86)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

#### Inherited from

`InstantiateBaseBlock.isTeleportOut`

***

### isUnique

#### Get Signature

> **get** **isUnique**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L107)

Gets a boolean indicating that this block can only be used once per NodeGeometry

##### Returns

`boolean`

#### Inherited from

`InstantiateBaseBlock.isUnique`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L68)

Gets or set the name of the block

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L72)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

`InstantiateBaseBlock.name`

***

### output

#### Get Signature

> **get** **output**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateBaseBlock.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateBaseBlock.ts#L93)

Gets the geometry output component

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

#### Inherited from

`InstantiateBaseBlock.output`

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L56)

Gets the list of output points

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)[]

#### Inherited from

`InstantiateBaseBlock.outputs`

***

### rotation

#### Get Signature

> **get** **rotation**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateLinearBlock.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateLinearBlock.pure.ts#L50)

Gets the rotation input component

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

***

### scaling

#### Get Signature

> **get** **scaling**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateLinearBlock.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateLinearBlock.pure.ts#L57)

Gets the scaling input component

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

## Methods

### autoConfigure()

> **autoConfigure**(`_nodeGeometry`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L353)

Lets the block try to connect some inputs automatically

#### Parameters

##### \_nodeGeometry

[`NodeGeometry`](NodeGeometry.md)

defines the node geometry to use for auto connection

#### Returns

`void`

#### Inherited from

`InstantiateBaseBlock.autoConfigure`

***

### build()

> **build**(`state`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L283)

Build the current node and generate the vertex data

#### Parameters

##### state

[`NodeGeometryBuildState`](NodeGeometryBuildState.md)

defines the current generation state

#### Returns

`boolean`

true if already built

#### Inherited from

`InstantiateBaseBlock.build`

***

### clone()

> **clone**(): [`NodeGeometryBlock`](NodeGeometryBlock.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:574](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L574)

Clone the current block to a new identical block

#### Returns

[`NodeGeometryBlock`](NodeGeometryBlock.md) \| `null`

a copy of the current block

#### Inherited from

`InstantiateBaseBlock.clone`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:591](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L591)

Release resources

#### Returns

`void`

#### Inherited from

`InstantiateBaseBlock.dispose`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateLinearBlock.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateLinearBlock.pure.ts#L36)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

`InstantiateBaseBlock.getClassName`

***

### getDescendantOfPredicate()

> **getDescendantOfPredicate**(`predicate`): [`Nullable`](../type-aliases/Nullable.md)\<[`NodeGeometryBlock`](NodeGeometryBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L190)

Get the first descendant using a predicate

#### Parameters

##### predicate

(`block`) => `boolean`

defines the predicate to check

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeGeometryBlock`](NodeGeometryBlock.md)\>

descendant or null if none found

#### Inherited from

`InstantiateBaseBlock.getDescendantOfPredicate`

***

### getExecutionFaceIndex()

> **getExecutionFaceIndex**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateBaseBlock.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateBaseBlock.ts#L64)

Gets the current face index in the current flow

#### Returns

`number`

the current face index

#### Inherited from

`InstantiateBaseBlock.getExecutionFaceIndex`

***

### getExecutionIndex()

> **getExecutionIndex**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateBaseBlock.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateBaseBlock.ts#L48)

Gets the current index in the current flow

#### Returns

`number`

the current index

#### Inherited from

`InstantiateBaseBlock.getExecutionIndex`

***

### getExecutionLoopIndex()

> **getExecutionLoopIndex**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateBaseBlock.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateBaseBlock.ts#L56)

Gets the current loop index in the current flow

#### Returns

`number`

the current loop index

#### Inherited from

`InstantiateBaseBlock.getExecutionLoopIndex`

***

### getInputByName()

> **getInputByName**(`name`): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:362](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L362)

Find an input by its name

#### Parameters

##### name

`string`

defines the name of the input to look for

#### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md) \| `null`

the input or null if not found

#### Inherited from

`InstantiateBaseBlock.getInputByName`

***

### getInstanceIndex()

> **getInstanceIndex**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateBaseBlock.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateBaseBlock.ts#L40)

Gets the current instance index in the current flow

#### Returns

`number`

the current index

#### Inherited from

`InstantiateBaseBlock.getInstanceIndex`

***

### getOutputByName()

> **getOutputByName**(`name`): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:377](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L377)

Find an output by its name

#### Parameters

##### name

`string`

defines the name of the output to look for

#### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md) \| `null`

the output or null if not found

#### Inherited from

`InstantiateBaseBlock.getOutputByName`

***

### initialize()

> **initialize**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L345)

Initialize the block and prepare the context for build

#### Returns

`void`

#### Inherited from

`InstantiateBaseBlock.initialize`

***

### isAnAncestorOf()

> **isAnAncestorOf**(`block`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L141)

Checks if the current block is an ancestor of a given block

#### Parameters

##### block

[`NodeGeometryBlock`](NodeGeometryBlock.md)

defines the potential descendant block to check

#### Returns

`boolean`

true if block is a descendant

#### Inherited from

`InstantiateBaseBlock.isAnAncestorOf`

***

### isAnAncestorOfType()

> **isAnAncestorOfType**(`type`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L165)

Checks if the current block is an ancestor of a given type

#### Parameters

##### type

`string`

defines the potential type to check

#### Returns

`boolean`

true if block is a descendant

#### Inherited from

`InstantiateBaseBlock.isAnAncestorOfType`

***

### registerInput()

> **registerInput**(`name`, `type`, `isOptional?`, `value?`, `valueMin?`, `valueMax?`): `InstantiateLinearBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L238)

Register a new input. Must be called inside a block constructor

#### Parameters

##### name

`string`

defines the connection point name

##### type

[`NodeGeometryBlockConnectionPointTypes`](../enumerations/NodeGeometryBlockConnectionPointTypes.md)

defines the connection point type

##### isOptional?

`boolean` = `false`

defines a boolean indicating that this input can be omitted

##### value?

`any`

value to return if there is no connection

##### valueMin?

`any`

min value accepted for value

##### valueMax?

`any`

max value accepted for value

#### Returns

`InstantiateLinearBlock`

the current block

#### Inherited from

`InstantiateBaseBlock.registerInput`

***

### registerOutput()

> **registerOutput**(`name`, `type`, `point?`): `InstantiateLinearBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:259](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L259)

Register a new output. Must be called inside a block constructor

#### Parameters

##### name

`string`

defines the connection point name

##### type

[`NodeGeometryBlockConnectionPointTypes`](../enumerations/NodeGeometryBlockConnectionPointTypes.md)

defines the connection point type

##### point?

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

an already created connection point. If not provided, create a new one

#### Returns

`InstantiateLinearBlock`

the current block

#### Inherited from

`InstantiateBaseBlock.registerOutput`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateBaseBlock.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/Instances/instantiateBaseBlock.ts#L106)

Serializes this block in a JSON representation

#### Returns

`any`

the serialized block object

#### Inherited from

`InstantiateBaseBlock.serialize`
