[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ParticleInputBlock

# Class: ParticleInputBlock

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L15)

Block used to expose an input value

## Extends

- [`NodeParticleBlock`](NodeParticleBlock.md)

## Constructors

### Constructor

> **new ParticleInputBlock**(`name`, `type?`): `ParticleInputBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:174](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L174)

Creates a new InputBlock

#### Parameters

##### name

`string`

defines the block name

##### type?

[`NodeParticleBlockConnectionPointTypes`](../enumerations/NodeParticleBlockConnectionPointTypes.md) = `NodeParticleBlockConnectionPointTypes.AutoDetect`

defines the type of the input (can be set to NodeParticleBlockConnectionPointTypes.AutoDetect)

#### Returns

`ParticleInputBlock`

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

### displayInInspector

> **displayInInspector**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L32)

Gets or sets a boolean indicating that this input is displayed in the Inspector

***

### groupInInspector

> **groupInInspector**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L27)

Gets or sets the group to use to display this block in the Inspector

***

### max

> **max**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L24)

Gets or set a value used to limit the range of float values

***

### min

> **min**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L21)

Gets or set a value used to limit the range of float values

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

### onValueChangedObservable

> **onValueChangedObservable**: [`Observable`](Observable.md)\<`ParticleInputBlock`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L35)

Gets an observable raised when the value is changed

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

### contextualValue

#### Get Signature

> **get** **contextualValue**(): [`NodeParticleContextualSources`](../enumerations/NodeParticleContextualSources.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L120)

Gets or sets the current contextual value

##### Returns

[`NodeParticleContextualSources`](../enumerations/NodeParticleContextualSources.md)

#### Set Signature

> **set** **contextualValue**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L124)

##### Parameters

###### value

[`NodeParticleContextualSources`](../enumerations/NodeParticleContextualSources.md)

##### Returns

`void`

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

### isContextual

#### Get Signature

> **get** **isContextual**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L113)

Gets a boolean indicating that the current connection point is a contextual value

##### Returns

`boolean`

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

### isSystemSource

#### Get Signature

> **get** **isSystemSource**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L74)

Gets a boolean indicating that the current connection point is a system source

##### Returns

`boolean`

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L230)

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

***

### systemSource

#### Get Signature

> **get** **systemSource**(): [`NodeParticleSystemSources`](../enumerations/NodeParticleSystemSources.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L81)

Gets or sets the system source used by this input block

##### Returns

[`NodeParticleSystemSources`](../enumerations/NodeParticleSystemSources.md)

#### Set Signature

> **set** **systemSource**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L85)

##### Parameters

###### value

[`NodeParticleSystemSources`](../enumerations/NodeParticleSystemSources.md)

##### Returns

`void`

***

### type

#### Get Signature

> **get** **type**(): [`NodeParticleBlockConnectionPointTypes`](../enumerations/NodeParticleBlockConnectionPointTypes.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L40)

Gets or sets the connection point type (default is float)

##### Returns

[`NodeParticleBlockConnectionPointTypes`](../enumerations/NodeParticleBlockConnectionPointTypes.md)

***

### value

#### Get Signature

> **get** **value**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L190)

Gets or sets the value of that point.
Please note that this value will be ignored if valueCallback is defined

##### Returns

`any`

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L194)

##### Parameters

###### value

`any`

##### Returns

`void`

***

### valueCallback

#### Get Signature

> **get** **valueCallback**(): () => `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L211)

Gets or sets a callback used to get the value of that point.
Please note that setting this value will force the connection point to ignore the value property

##### Returns

() => `any`

#### Set Signature

> **set** **valueCallback**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L215)

##### Parameters

###### value

() => `any`

##### Returns

`void`

## Methods

### \_build()

> **\_build**(`state`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:258](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L258)

Builds the block. Must be implemented by derived classes.

#### Parameters

##### state

[`NodeParticleBuildState`](NodeParticleBuildState.md)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:398](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L398)

Clone the current block to a new identical block

#### Returns

[`NodeParticleBlock`](NodeParticleBlock.md) \| `null`

a copy of the current block

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`clone`](NodeParticleBlock.md#clone)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:280](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L280)

Release resources

#### Returns

`void`

#### Overrides

[`NodeParticleBlock`](NodeParticleBlock.md).[`dispose`](NodeParticleBlock.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L223)

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

> **registerInput**(`name`, `type`, `isOptional?`, `value?`, `valueMin?`, `valueMax?`): `ParticleInputBlock`

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

`ParticleInputBlock`

the current block

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`registerInput`](NodeParticleBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `point?`): `ParticleInputBlock`

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

`ParticleInputBlock`

the current block

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`registerOutput`](NodeParticleBlock.md#registeroutput)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:286](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L286)

Serializes this block in a JSON representation

#### Returns

`any`

the serialized block object

#### Overrides

[`NodeParticleBlock`](NodeParticleBlock.md).[`serialize`](NodeParticleBlock.md#serialize)

***

### setDefaultValue()

> **setDefaultValue**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts:237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/Blocks/particleInputBlock.ts#L237)

Set the input block to its default value (based on its type)

#### Returns

`void`
