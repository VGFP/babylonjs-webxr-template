[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GeometryInputBlock

# Class: GeometryInputBlock

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts#L15)

Block used to expose an input value

## Extends

- [`NodeGeometryBlock`](NodeGeometryBlock.md)

## Constructors

### Constructor

> **new GeometryInputBlock**(`name`, `type?`): `GeometryInputBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts#L125)

Creates a new InputBlock

#### Parameters

##### name

`string`

defines the block name

##### type?

[`NodeGeometryBlockConnectionPointTypes`](../enumerations/NodeGeometryBlockConnectionPointTypes.md) = `NodeGeometryBlockConnectionPointTypes.AutoDetect`

defines the type of the input (can be set to NodeGeometryBlockConnectionPointTypes.AutoDetect)

#### Returns

`GeometryInputBlock`

#### Overrides

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`constructor`](NodeGeometryBlock.md#constructor)

## Properties

### comments

> **comments**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L115)

A free comment about the block

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`comments`](NodeGeometryBlock.md#comments)

***

### displayInInspector

> **displayInInspector**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts#L33)

Gets or sets a boolean indicating that this input is displayed in the Inspector

***

### groupInInspector

> **groupInInspector**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts#L28)

Gets or sets the group to use to display this block in the Inspector

***

### max

> **max**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts#L25)

Gets or set a value used to limit the range of float values

***

### min

> **min**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts#L22)

Gets or set a value used to limit the range of float values

***

### onBuildObservable

> **onBuildObservable**: [`Observable`](Observable.md)\<[`NodeGeometryBlock`](NodeGeometryBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L30)

Gets an observable raised when the block is built

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`onBuildObservable`](NodeGeometryBlock.md#onbuildobservable)

***

### onValueChangedObservable

> **onValueChangedObservable**: [`Observable`](Observable.md)\<`GeometryInputBlock`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts#L36)

Gets an observable raised when the value is changed

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L63)

Gets or sets the unique id of the node

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`uniqueId`](NodeGeometryBlock.md#uniqueid)

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L118)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`visibleOnFrame`](NodeGeometryBlock.md#visibleonframe)

## Accessors

### buildExecutionTime

#### Get Signature

> **get** **buildExecutionTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L44)

Gets the time spent to build this block (in ms)

##### Returns

`number`

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`buildExecutionTime`](NodeGeometryBlock.md#buildexecutiontime)

***

### contextualValue

#### Get Signature

> **get** **contextualValue**(): [`NodeGeometryContextualSources`](../enumerations/NodeGeometryContextualSources.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts#L79)

Gets or sets the current contextual value

##### Returns

[`NodeGeometryContextualSources`](../enumerations/NodeGeometryContextualSources.md)

#### Set Signature

> **set** **contextualValue**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts#L83)

##### Parameters

###### value

[`NodeGeometryContextualSources`](../enumerations/NodeGeometryContextualSources.md)

##### Returns

`void`

***

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L51)

Gets the list of input points

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)[]

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`inputs`](NodeGeometryBlock.md#inputs)

***

### isContextual

#### Get Signature

> **get** **isContextual**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts#L72)

Gets a boolean indicating that the current connection point is a contextual value

##### Returns

`boolean`

***

### isDebug

#### Get Signature

> **get** **isDebug**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L100)

Gets a boolean indicating if this block is a debug block

##### Returns

`boolean`

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`isDebug`](NodeGeometryBlock.md#isdebug)

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L79)

Gets a boolean indicating if this block is an input

##### Returns

`boolean`

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`isInput`](NodeGeometryBlock.md#isinput)

***

### isTeleportIn

#### Get Signature

> **get** **isTeleportIn**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L93)

Gets a boolean indicating if this block is a teleport in

##### Returns

`boolean`

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`isTeleportIn`](NodeGeometryBlock.md#isteleportin)

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L86)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`isTeleportOut`](NodeGeometryBlock.md#isteleportout)

***

### isUnique

#### Get Signature

> **get** **isUnique**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L107)

Gets a boolean indicating that this block can only be used once per NodeGeometry

##### Returns

`boolean`

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`isUnique`](NodeGeometryBlock.md#isunique)

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

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`name`](NodeGeometryBlock.md#name)

***

### output

#### Get Signature

> **get** **output**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts#L180)

Gets the geometry output component

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L56)

Gets the list of output points

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)[]

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`outputs`](NodeGeometryBlock.md#outputs)

***

### type

#### Get Signature

> **get** **type**(): [`NodeGeometryBlockConnectionPointTypes`](../enumerations/NodeGeometryBlockConnectionPointTypes.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts#L41)

Gets or sets the connection point type (default is float)

##### Returns

[`NodeGeometryBlockConnectionPointTypes`](../enumerations/NodeGeometryBlockConnectionPointTypes.md)

***

### value

#### Get Signature

> **get** **value**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts#L140)

Gets or sets the value of that point.
Please note that this value will be ignored if valueCallback is defined

##### Returns

`any`

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts#L144)

##### Parameters

###### value

`any`

##### Returns

`void`

***

### valueCallback

#### Get Signature

> **get** **valueCallback**(): () => `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts:161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts#L161)

Gets or sets a callback used to get the value of that point.
Please note that setting this value will force the connection point to ignore the value property

##### Returns

() => `any`

#### Set Signature

> **set** **valueCallback**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts#L165)

##### Parameters

###### value

() => `any`

##### Returns

`void`

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

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`autoConfigure`](NodeGeometryBlock.md#autoconfigure)

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

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`build`](NodeGeometryBlock.md#build)

***

### clone()

> **clone**(): [`NodeGeometryBlock`](NodeGeometryBlock.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:574](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L574)

Clone the current block to a new identical block

#### Returns

[`NodeGeometryBlock`](NodeGeometryBlock.md) \| `null`

a copy of the current block

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`clone`](NodeGeometryBlock.md#clone)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts#L173)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`getClassName`](NodeGeometryBlock.md#getclassname)

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

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`getDescendantOfPredicate`](NodeGeometryBlock.md#getdescendantofpredicate)

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

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`getInputByName`](NodeGeometryBlock.md#getinputbyname)

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

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`getOutputByName`](NodeGeometryBlock.md#getoutputbyname)

***

### initialize()

> **initialize**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L345)

Initialize the block and prepare the context for build

#### Returns

`void`

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`initialize`](NodeGeometryBlock.md#initialize)

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

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`isAnAncestorOf`](NodeGeometryBlock.md#isanancestorof)

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

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`isAnAncestorOfType`](NodeGeometryBlock.md#isanancestoroftype)

***

### registerInput()

> **registerInput**(`name`, `type`, `isOptional?`, `value?`, `valueMin?`, `valueMax?`): `GeometryInputBlock`

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

`GeometryInputBlock`

the current block

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`registerInput`](NodeGeometryBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `point?`): `GeometryInputBlock`

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

`GeometryInputBlock`

the current block

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`registerOutput`](NodeGeometryBlock.md#registeroutput)

***

### setDefaultValue()

> **setDefaultValue**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts:187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/Blocks/geometryInputBlock.pure.ts#L187)

Set the input block to its default value (based on its type)

#### Returns

`void`
