[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ParticleTrigonometryBlock

# Class: ParticleTrigonometryBlock

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleTrigonometryBlock.pure.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/particleTrigonometryBlock.pure.ts#L64)

Block used to apply trigonometry operation to floats

## Extends

- [`NodeParticleBlock`](NodeParticleBlock.md)

## Constructors

### Constructor

> **new ParticleTrigonometryBlock**(`name`): `ParticleTrigonometryBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleTrigonometryBlock.pure.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/particleTrigonometryBlock.pure.ts#L101)

Creates a new GeometryTrigonometryBlock

#### Parameters

##### name

`string`

defines the block name

#### Returns

`ParticleTrigonometryBlock`

#### Overrides

[`NodeParticleBlock`](NodeParticleBlock.md).[`constructor`](NodeParticleBlock.md#constructor)

## Properties

### comments

> **comments**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L86)

A free comment about the block

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`comments`](NodeParticleBlock.md#comments)

***

### onBuildObservable

> **onBuildObservable**: [`Observable`](Observable.md)\<[`NodeParticleBlock`](NodeParticleBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L35)

Gets an observable raised when the block is built

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`onBuildObservable`](NodeParticleBlock.md#onbuildobservable)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`NodeParticleBlock`](NodeParticleBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L40)

Gets an observable raised when the block is disposed

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`onDisposeObservable`](NodeParticleBlock.md#ondisposeobservable)

***

### onInputChangedObservable

> **onInputChangedObservable**: [`Observable`](Observable.md)\<[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L45)

Gets an observable raised when the inputs of the block change

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`onInputChangedObservable`](NodeParticleBlock.md#oninputchangedobservable)

***

### operation

> **operation**: [`ParticleTrigonometryBlockOperations`](../enumerations/ParticleTrigonometryBlockOperations.md) = `ParticleTrigonometryBlockOperations.Cos`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleTrigonometryBlock.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/particleTrigonometryBlock.pure.ts#L95)

Gets or sets the operation applied by the block

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L25)

Gets or sets the unique id of the node

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`uniqueId`](NodeParticleBlock.md#uniqueid)

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L89)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`visibleOnFrame`](NodeParticleBlock.md#visibleonframe)

## Accessors

### input

#### Get Signature

> **get** **input**(): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleTrigonometryBlock.pure.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/particleTrigonometryBlock.pure.ts#L129)

Gets the input component

##### Returns

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

***

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L113)

Gets the list of input points

##### Returns

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)[]

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`inputs`](NodeParticleBlock.md#inputs)

***

### isDebug

#### Get Signature

> **get** **isDebug**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L78)

Gets a boolean indicating if this block is a debug block

##### Returns

`boolean`

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`isDebug`](NodeParticleBlock.md#isdebug)

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L71)

Gets a boolean indicating that this block is an input block

##### Returns

`boolean`

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`isInput`](NodeParticleBlock.md#isinput)

***

### isSystem

#### Get Signature

> **get** **isSystem**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L64)

Gets a boolean indicating that this block is a system block

##### Returns

`boolean`

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`isSystem`](NodeParticleBlock.md#issystem)

***

### isTeleportIn

#### Get Signature

> **get** **isTeleportIn**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L57)

Gets a boolean indicating if this block is a teleport in

##### Returns

`boolean`

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`isTeleportIn`](NodeParticleBlock.md#isteleportin)

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L50)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`isTeleportOut`](NodeParticleBlock.md#isteleportout)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L94)

Gets or set the name of the block

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L98)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`name`](NodeParticleBlock.md#name)

***

### output

#### Get Signature

> **get** **output**(): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleTrigonometryBlock.pure.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/particleTrigonometryBlock.pure.ts#L136)

Gets the output component

##### Returns

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L118)

Gets the list of output points

##### Returns

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)[]

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`outputs`](NodeParticleBlock.md#outputs)

## Methods

### \_build()

> **\_build**(`state`): `ParticleTrigonometryBlock` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleTrigonometryBlock.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/particleTrigonometryBlock.pure.ts#L140)

Builds the block. Must be implemented by derived classes.

#### Parameters

##### state

[`NodeParticleBuildState`](NodeParticleBuildState.md)

#### Returns

`ParticleTrigonometryBlock` \| `undefined`

#### Overrides

[`NodeParticleBlock`](NodeParticleBlock.md).[`_build`](NodeParticleBlock.md#_build)

***

### build()

> **build**(`state`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L270)

Builds the block

#### Parameters

##### state

[`NodeParticleBuildState`](NodeParticleBuildState.md)

defines the current build state

#### Returns

`boolean`

the built block

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`build`](NodeParticleBlock.md#build)

***

### clone()

> **clone**(): [`NodeParticleBlock`](NodeParticleBlock.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:398](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L398)

Clone the current block to a new identical block

#### Returns

[`NodeParticleBlock`](NodeParticleBlock.md) \| `null`

a copy of the current block

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`clone`](NodeParticleBlock.md#clone)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:415](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L415)

Release resources

#### Returns

`void`

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`dispose`](NodeParticleBlock.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleTrigonometryBlock.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/particleTrigonometryBlock.pure.ts#L122)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`NodeParticleBlock`](NodeParticleBlock.md).[`getClassName`](NodeParticleBlock.md#getclassname)

***

### getInputByName()

> **getInputByName**(`name`): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:193](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L193)

Find an input by its name

#### Parameters

##### name

`string`

defines the name of the input to look for

#### Returns

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md) \| `null`

the input or null if not found

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`getInputByName`](NodeParticleBlock.md#getinputbyname)

***

### isAnAncestorOf()

> **isAnAncestorOf**(`block`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L144)

Checks if the current block is an ancestor of a given block

#### Parameters

##### block

[`NodeParticleBlock`](NodeParticleBlock.md)

defines the potential descendant block to check

#### Returns

`boolean`

true if block is a descendant

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`isAnAncestorOf`](NodeParticleBlock.md#isanancestorof)

***

### isAnAncestorOfType()

> **isAnAncestorOfType**(`type`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L168)

Checks if the current block is an ancestor of a given type

#### Parameters

##### type

`string`

defines the potential type to check

#### Returns

`boolean`

true if block is a descendant

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`isAnAncestorOfType`](NodeParticleBlock.md#isanancestoroftype)

***

### registerInput()

> **registerInput**(`name`, `type`, `isOptional?`, `value?`, `valueMin?`, `valueMax?`): `ParticleTrigonometryBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L223)

Register a new input. Must be called inside a block constructor

#### Parameters

##### name

`string`

defines the connection point name

##### type

[`NodeParticleBlockConnectionPointTypes`](../enumerations/NodeParticleBlockConnectionPointTypes.md)

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

`ParticleTrigonometryBlock`

the current block

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`registerInput`](NodeParticleBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `point?`): `ParticleTrigonometryBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:246](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L246)

Register a new output. Must be called inside a block constructor

#### Parameters

##### name

`string`

defines the connection point name

##### type

[`NodeParticleBlockConnectionPointTypes`](../enumerations/NodeParticleBlockConnectionPointTypes.md)

defines the connection point type

##### point?

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

an already created connection point. If not provided, create a new one

#### Returns

`ParticleTrigonometryBlock`

the current block

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`registerOutput`](NodeParticleBlock.md#registeroutput)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleTrigonometryBlock.pure.ts:277](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/particleTrigonometryBlock.pure.ts#L277)

Serializes this block in a JSON representation

#### Returns

`any`

the serialized block object

#### Overrides

[`NodeParticleBlock`](NodeParticleBlock.md).[`serialize`](NodeParticleBlock.md#serialize)
