[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeGeometryBlock

# Class: NodeGeometryBlock

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L17)

Defines a block that can be used inside a node based geometry

## Extended by

- [`GeometryOptimizeBlock`](GeometryOptimizeBlock.md)
- [`GeometryOutputBlock`](GeometryOutputBlock.md)
- [`GeometryInputBlock`](GeometryInputBlock.md)
- [`PlaneBlock`](PlaneBlock.md)
- [`BoxBlock`](BoxBlock.md)
- [`MeshBlock`](MeshBlock.md)
- [`IcoSphereBlock`](IcoSphereBlock.md)
- [`SphereBlock`](SphereBlock.md)
- [`GridBlock`](GridBlock.md)
- [`TorusBlock`](TorusBlock.md)
- [`CylinderBlock`](CylinderBlock.md)
- [`CapsuleBlock`](CapsuleBlock.md)
- [`DiscBlock`](DiscBlock.md)
- [`NullBlock`](NullBlock.md)
- [`PointListBlock`](PointListBlock.md)
- [`SetPositionsBlock`](SetPositionsBlock.md)
- [`SetNormalsBlock`](SetNormalsBlock.md)
- [`SetUVsBlock`](SetUVsBlock.md)
- [`SetColorsBlock`](SetColorsBlock.md)
- [`SetTangentsBlock`](SetTangentsBlock.md)
- [`MathBlock`](MathBlock.md)
- [`MapRangeBlock`](MapRangeBlock.md)
- [`ConditionBlock`](ConditionBlock.md)
- [`RandomBlock`](RandomBlock.md)
- [`NoiseBlock`](NoiseBlock.md)
- [`MergeGeometryBlock`](MergeGeometryBlock.md)
- [`GeometryCollectionBlock`](GeometryCollectionBlock.md)
- [`CleanGeometryBlock`](CleanGeometryBlock.md)
- [`GeometryElbowBlock`](GeometryElbowBlock.md)
- [`ComputeNormalsBlock`](ComputeNormalsBlock.md)
- [`VectorConverterBlock`](VectorConverterBlock.md)
- [`NormalizeVectorBlock`](NormalizeVectorBlock.md)
- [`SetMaterialIDBlock`](SetMaterialIDBlock.md)
- [`LatticeBlock`](LatticeBlock.md)
- [`GeometryTrigonometryBlock`](GeometryTrigonometryBlock.md)
- [`GeometryTransformBlock`](GeometryTransformBlock.md)
- [`RotationXBlock`](RotationXBlock.md)
- [`RotationYBlock`](RotationYBlock.md)
- [`RotationZBlock`](RotationZBlock.md)
- [`ScalingBlock`](ScalingBlock.md)
- [`AlignBlock`](AlignBlock.md)
- [`TranslationBlock`](TranslationBlock.md)
- [`InstantiateOnVerticesBlock`](InstantiateOnVerticesBlock.md)
- [`InstantiateOnFacesBlock`](InstantiateOnFacesBlock.md)
- [`InstantiateOnVolumeBlock`](InstantiateOnVolumeBlock.md)
- [`IntFloatConverterBlock`](IntFloatConverterBlock.md)
- [`DebugBlock`](DebugBlock.md)
- [`GeometryInfoBlock`](GeometryInfoBlock.md)
- [`MappingBlock`](MappingBlock.md)
- [`MatrixComposeBlock`](MatrixComposeBlock.md)
- [`TeleportInBlock`](TeleportInBlock.md)
- [`TeleportOutBlock`](TeleportOutBlock.md)
- [`GeometryTextureBlock`](GeometryTextureBlock.md)
- [`GeometryTextureFetchBlock`](GeometryTextureFetchBlock.md)
- [`BoundingBlock`](BoundingBlock.md)
- [`BooleanGeometryBlock`](BooleanGeometryBlock.md)
- [`GeometryArcTan2Block`](GeometryArcTan2Block.md)
- [`GeometryLerpBlock`](GeometryLerpBlock.md)
- [`GeometryNLerpBlock`](GeometryNLerpBlock.md)
- [`GeometryStepBlock`](GeometryStepBlock.md)
- [`GeometrySmoothStepBlock`](GeometrySmoothStepBlock.md)
- [`GeometryModBlock`](GeometryModBlock.md)
- [`GeometryPowBlock`](GeometryPowBlock.md)
- [`GeometryClampBlock`](GeometryClampBlock.md)
- [`GeometryCrossBlock`](GeometryCrossBlock.md)
- [`GeometryCurveBlock`](GeometryCurveBlock.md)
- [`GeometryDesaturateBlock`](GeometryDesaturateBlock.md)
- [`GeometryPosterizeBlock`](GeometryPosterizeBlock.md)
- [`GeometryReplaceColorBlock`](GeometryReplaceColorBlock.md)
- [`GeometryDistanceBlock`](GeometryDistanceBlock.md)
- [`GeometryDotBlock`](GeometryDotBlock.md)
- [`GeometryLengthBlock`](GeometryLengthBlock.md)
- [`GeometryRotate2dBlock`](GeometryRotate2dBlock.md)
- [`GeometryInterceptorBlock`](GeometryInterceptorBlock.md)
- [`GeometryEaseBlock`](GeometryEaseBlock.md)
- [`AggregatorBlock`](AggregatorBlock.md)
- [`SubdivideBlock`](SubdivideBlock.md)
- [`ExtrudeGeometryBlock`](ExtrudeGeometryBlock.md)
- [`BevelBlock`](BevelBlock.md)

## Constructors

### Constructor

> **new NodeGeometryBlock**(`name`): `NodeGeometryBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L223)

Creates a new NodeGeometryBlock

#### Parameters

##### name

`string`

defines the block name

#### Returns

`NodeGeometryBlock`

## Properties

### comments

> **comments**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L115)

A free comment about the block

***

### onBuildObservable

> **onBuildObservable**: [`Observable`](Observable.md)\<`NodeGeometryBlock`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L30)

Gets an observable raised when the block is built

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L63)

Gets or sets the unique id of the node

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L118)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

## Accessors

### buildExecutionTime

#### Get Signature

> **get** **buildExecutionTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L44)

Gets the time spent to build this block (in ms)

##### Returns

`number`

***

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L51)

Gets the list of input points

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)[]

***

### isDebug

#### Get Signature

> **get** **isDebug**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L100)

Gets a boolean indicating if this block is a debug block

##### Returns

`boolean`

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L79)

Gets a boolean indicating if this block is an input

##### Returns

`boolean`

***

### isTeleportIn

#### Get Signature

> **get** **isTeleportIn**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L93)

Gets a boolean indicating if this block is a teleport in

##### Returns

`boolean`

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L86)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

***

### isUnique

#### Get Signature

> **get** **isUnique**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L107)

Gets a boolean indicating that this block can only be used once per NodeGeometry

##### Returns

`boolean`

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

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L56)

Gets the list of output points

##### Returns

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)[]

## Methods

### autoConfigure()

> **autoConfigure**(`_nodeGeometry`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:353](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L353)

Lets the block try to connect some inputs automatically

#### Parameters

##### \_nodeGeometry

[`NodeGeometry`](NodeGeometry.md)

defines the node geometry to use for auto connection

#### Returns

`void`

***

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

***

### clone()

> **clone**(): `NodeGeometryBlock` \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:574](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L574)

Clone the current block to a new identical block

#### Returns

`NodeGeometryBlock` \| `null`

a copy of the current block

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:591](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L591)

Release resources

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L124)

Gets the current class name e.g. "NodeGeometryBlock"

#### Returns

`string`

the class name

***

### getDescendantOfPredicate()

> **getDescendantOfPredicate**(`predicate`): [`Nullable`](../type-aliases/Nullable.md)\<`NodeGeometryBlock`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L190)

Get the first descendant using a predicate

#### Parameters

##### predicate

(`block`) => `boolean`

defines the predicate to check

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`NodeGeometryBlock`\>

descendant or null if none found

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

***

### initialize()

> **initialize**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L345)

Initialize the block and prepare the context for build

#### Returns

`void`

***

### isAnAncestorOf()

> **isAnAncestorOf**(`block`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L141)

Checks if the current block is an ancestor of a given block

#### Parameters

##### block

`NodeGeometryBlock`

defines the potential descendant block to check

#### Returns

`boolean`

true if block is a descendant

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

***

### registerInput()

> **registerInput**(`name`, `type`, `isOptional?`, `value?`, `valueMin?`, `valueMax?`): `NodeGeometryBlock`

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

`NodeGeometryBlock`

the current block

***

### registerOutput()

> **registerOutput**(`name`, `type`, `point?`): `NodeGeometryBlock`

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

`NodeGeometryBlock`

the current block

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts:391](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Node/nodeGeometryBlock.ts#L391)

Serializes this block in a JSON representation

#### Returns

`any`

the serialized block object
