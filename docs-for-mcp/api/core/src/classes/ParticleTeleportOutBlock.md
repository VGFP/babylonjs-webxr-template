[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ParticleTeleportOutBlock

# Class: ParticleTeleportOutBlock

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.ts#L12)

Defines a block used to receive a value from a teleport entry point

## Extends

- [`NodeParticleBlock`](NodeParticleBlock.md)

## Constructors

### Constructor

> **new ParticleTeleportOutBlock**(`name`): `ParticleTeleportOutBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.ts#L22)

Create a new ParticleTeleportOutBlock

#### Parameters

##### name

`string`

defines the block name

#### Returns

`ParticleTeleportOutBlock`

#### Overrides

[`NodeParticleBlock`](NodeParticleBlock.md).[`constructor`](NodeParticleBlock.md#constructor)

## Properties

### comments

> **comments**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L86)

A free comment about the block

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`comments`](NodeParticleBlock.md#comments)

***

### onBuildObservable

> **onBuildObservable**: [`Observable`](Observable.md)\<[`NodeParticleBlock`](NodeParticleBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L35)

Gets an observable raised when the block is built

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`onBuildObservable`](NodeParticleBlock.md#onbuildobservable)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`NodeParticleBlock`](NodeParticleBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L40)

Gets an observable raised when the block is disposed

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`onDisposeObservable`](NodeParticleBlock.md#ondisposeobservable)

***

### onInputChangedObservable

> **onInputChangedObservable**: [`Observable`](Observable.md)\<[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L45)

Gets an observable raised when the inputs of the block change

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`onInputChangedObservable`](NodeParticleBlock.md#oninputchangedobservable)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L25)

Gets or sets the unique id of the node

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`uniqueId`](NodeParticleBlock.md#uniqueid)

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L89)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`visibleOnFrame`](NodeParticleBlock.md#visibleonframe)

## Accessors

### entryPoint

#### Get Signature

> **get** **entryPoint**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ParticleTeleportInBlock`](ParticleTeleportInBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.ts#L33)

Gets the entry point

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ParticleTeleportInBlock`](ParticleTeleportInBlock.md)\>

***

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L113)

Gets the list of input points

##### Returns

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)[]

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`inputs`](NodeParticleBlock.md#inputs)

***

### isDebug

#### Get Signature

> **get** **isDebug**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L78)

Gets a boolean indicating if this block is a debug block

##### Returns

`boolean`

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`isDebug`](NodeParticleBlock.md#isdebug)

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L71)

Gets a boolean indicating that this block is an input block

##### Returns

`boolean`

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`isInput`](NodeParticleBlock.md#isinput)

***

### isSystem

#### Get Signature

> **get** **isSystem**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L64)

Gets a boolean indicating that this block is a system block

##### Returns

`boolean`

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`isSystem`](NodeParticleBlock.md#issystem)

***

### isTeleportIn

#### Get Signature

> **get** **isTeleportIn**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L57)

Gets a boolean indicating if this block is a teleport in

##### Returns

`boolean`

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`isTeleportIn`](NodeParticleBlock.md#isteleportin)

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L50)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`isTeleportOut`](NodeParticleBlock.md#isteleportout)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L94)

Gets or set the name of the block

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L98)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.ts#L48)

Gets the output component

##### Returns

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L118)

Gets the list of output points

##### Returns

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)[]

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`outputs`](NodeParticleBlock.md#outputs)

## Methods

### \_build()

> **\_build**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.ts#L60)

Builds the block. Must be implemented by derived classes.

#### Returns

`void`

#### Overrides

[`NodeParticleBlock`](NodeParticleBlock.md).[`_build`](NodeParticleBlock.md#_build)

***

### build()

> **build**(`state`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:270](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L270)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.ts#L75)

Clone the current block to a new identical block

#### Returns

[`NodeParticleBlock`](NodeParticleBlock.md) \| `null`

a copy of the current block

#### Overrides

[`NodeParticleBlock`](NodeParticleBlock.md).[`clone`](NodeParticleBlock.md#clone)

***

### detach()

> **detach**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.ts#L53)

Detach from entry point

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:415](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L415)

Release resources

#### Returns

`void`

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`dispose`](NodeParticleBlock.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.ts#L41)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`NodeParticleBlock`](NodeParticleBlock.md).[`getClassName`](NodeParticleBlock.md#getclassname)

***

### getInputByName()

> **getInputByName**(`name`): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L193)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L144)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L168)

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

> **registerInput**(`name`, `type`, `isOptional?`, `value?`, `valueMin?`, `valueMax?`): `ParticleTeleportOutBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L223)

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

`ParticleTeleportOutBlock`

the current block

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`registerInput`](NodeParticleBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `point?`): `ParticleTeleportOutBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:246](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L246)

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

`ParticleTeleportOutBlock`

the current block

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`registerOutput`](NodeParticleBlock.md#registeroutput)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/Teleport/particleTeleportOutBlock.ts#L89)

Serializes this block in a JSON representation

#### Returns

`any`

the serialized block object

#### Overrides

[`NodeParticleBlock`](NodeParticleBlock.md).[`serialize`](NodeParticleBlock.md#serialize)
