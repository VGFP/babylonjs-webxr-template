[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GridBlock

# Class: GridBlock

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts#L13)

Defines a block used to generate grid geometry data

## Extends

- [`NodeGeometryBlock`](NodeGeometryBlock.md)

## Constructors

### Constructor

> **new GridBlock**(`name`): `GridBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts#L25)

Create a new GridBlock

#### Parameters

##### name

`string`

defines the block name

#### Returns

`GridBlock`

#### Overrides

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`constructor`](NodeGeometryBlock.md#constructor)

## Properties

### comments

> **comments**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L115)

A free comment about the block

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`comments`](NodeGeometryBlock.md#comments)

***

### evaluateContext

> **evaluateContext**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts#L19)

Gets or sets a boolean indicating that this block can evaluate context
Build performance is improved when this value is set to false as the system will cache values instead of reevaluating everything per context change

***

### onBuildObservable

> **onBuildObservable**: [`Observable`](Observable.md)\<[`NodeGeometryBlock`](NodeGeometryBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L30)

Gets an observable raised when the block is built

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`onBuildObservable`](NodeGeometryBlock.md#onbuildobservable)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L63)

Gets or sets the unique id of the node

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`uniqueId`](NodeGeometryBlock.md#uniqueid)

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L118)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`visibleOnFrame`](NodeGeometryBlock.md#visibleonframe)

## Accessors

### buildExecutionTime

#### Get Signature

> **get** **buildExecutionTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L44)

Gets the time spent to build this block (in ms)

##### Returns

`number`

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`buildExecutionTime`](NodeGeometryBlock.md#buildexecutiontime)

***

### geometry

#### Get Signature

> **get** **geometry**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts#L83)

Gets the geometry output component

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

***

### height

#### Get Signature

> **get** **height**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts#L55)

Gets the height input component

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

***

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L51)

Gets the list of input points

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)[]

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`inputs`](NodeGeometryBlock.md#inputs)

***

### isDebug

#### Get Signature

> **get** **isDebug**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L100)

Gets a boolean indicating if this block is a debug block

##### Returns

`boolean`

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`isDebug`](NodeGeometryBlock.md#isdebug)

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L79)

Gets a boolean indicating if this block is an input

##### Returns

`boolean`

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`isInput`](NodeGeometryBlock.md#isinput)

***

### isTeleportIn

#### Get Signature

> **get** **isTeleportIn**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L93)

Gets a boolean indicating if this block is a teleport in

##### Returns

`boolean`

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`isTeleportIn`](NodeGeometryBlock.md#isteleportin)

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L86)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`isTeleportOut`](NodeGeometryBlock.md#isteleportout)

***

### isUnique

#### Get Signature

> **get** **isUnique**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L107)

Gets a boolean indicating that this block can only be used once per NodeGeometry

##### Returns

`boolean`

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`isUnique`](NodeGeometryBlock.md#isunique)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L68)

Gets or set the name of the block

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L72)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`name`](NodeGeometryBlock.md#name)

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L56)

Gets the list of output points

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)[]

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`outputs`](NodeGeometryBlock.md#outputs)

***

### subdivisions

#### Get Signature

> **get** **subdivisions**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts#L62)

Gets the subdivisions input component

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

***

### subdivisionsX

#### Get Signature

> **get** **subdivisionsX**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts#L69)

Gets the subdivisionsX input component

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

***

### subdivisionsY

#### Get Signature

> **get** **subdivisionsY**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts#L76)

Gets the subdivisionsY input component

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

***

### width

#### Get Signature

> **get** **width**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts#L48)

Gets the width input component

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

## Methods

### build()

> **build**(`state`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:283](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L283)

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

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:574](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L574)

Clone the current block to a new identical block

#### Returns

[`NodeGeometryBlock`](NodeGeometryBlock.md) \| `null`

a copy of the current block

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`clone`](NodeGeometryBlock.md#clone)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:591](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L591)

Release resources

#### Returns

`void`

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`dispose`](NodeGeometryBlock.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts#L41)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`getClassName`](NodeGeometryBlock.md#getclassname)

***

### getDescendantOfPredicate()

> **getDescendantOfPredicate**(`predicate`): [`Nullable`](../type-aliases/Nullable.md)\<[`NodeGeometryBlock`](NodeGeometryBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L190)

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

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:362](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L362)

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

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:377](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L377)

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

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L345)

Initialize the block and prepare the context for build

#### Returns

`void`

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`initialize`](NodeGeometryBlock.md#initialize)

***

### isAnAncestorOf()

> **isAnAncestorOf**(`block`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L141)

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

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L165)

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

> **registerInput**(`name`, `type`, `isOptional?`, `value?`, `valueMin?`, `valueMax?`): `GridBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:238](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L238)

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

`GridBlock`

the current block

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`registerInput`](NodeGeometryBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `point?`): `GridBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L259)

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

`GridBlock`

the current block

#### Inherited from

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`registerOutput`](NodeGeometryBlock.md#registeroutput)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/Blocks/Sources/gridBlock.ts#L135)

Serializes this block in a JSON representation

#### Returns

`any`

the serialized block object

#### Overrides

[`NodeGeometryBlock`](NodeGeometryBlock.md).[`serialize`](NodeGeometryBlock.md#serialize)
