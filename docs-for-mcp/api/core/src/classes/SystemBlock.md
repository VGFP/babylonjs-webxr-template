[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SystemBlock

# Class: SystemBlock

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L28)

Block used to get a system of particles

## Extends

- [`NodeParticleBlock`](NodeParticleBlock.md)

## Constructors

### Constructor

> **new SystemBlock**(`name`): `SystemBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L146)

Create a new SystemBlock

#### Parameters

##### name

`string`

defines the block name

#### Returns

`SystemBlock`

#### Overrides

[`NodeParticleBlock`](NodeParticleBlock.md).[`constructor`](NodeParticleBlock.md#constructor)

## Properties

### billBoardMode

> **billBoardMode**: `number` = `Constants.PARTICLES_BILLBOARDMODE_ALL`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L102)

Gets or sets the billboard mode for the particle system

***

### blendMode

> **blendMode**: `number` = `BaseParticleSystem.BLENDMODE_ONEONE`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L45)

Gets or sets the blend mode for the particle system

***

### capacity

> **capacity**: `number` = `1000`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L51)

Gets or sets the epsilon value used for comparison

***

### comments

> **comments**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L86)

A free comment about the block

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`comments`](NodeParticleBlock.md#comments)

***

### customShader

> **customShader**: [`Nullable`](../type-aliases/Nullable.md)\<`CustomShader`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L135)

Gets or sets the custom shader configuration used to render the particles.
This can be used to set your own shader to render the particle system.

***

### disposeOnStop

> **disposeOnStop**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L114)

Gets or sets a boolean indicating if the system should be disposed when stopped

***

### doNoStart

> **doNoStart**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L120)

Gets or sets a boolean indicating if the system should not start automatically

***

### emitter

> **emitter**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md) \| [`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L140)

Gets or sets the emitter for the particle system.

***

### isBillboardBased

> **isBillboardBased**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L87)

Gets or sets a boolean indicating if the system is billboard based

***

### isLocal

> **isLocal**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L108)

Gets or sets a boolean indicating if the system coordinate space is local or global

***

### manualEmitCount

> **manualEmitCount**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L57)

Gets or sets the manual emit count

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

### preWarmCycles

> **preWarmCycles**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L75)

Gets or sets the number of pre-warm cycles before rendering the particle system

***

### preWarmStepOffset

> **preWarmStepOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L81)

Gets or sets the time step multiplier used for pre-warm

***

### renderingGroupId

> **renderingGroupId**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L126)

Gets or sets the rendering group id for the particle system (0 by default)

***

### startDelay

> **startDelay**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L63)

Gets or sets the target stop duration for the particle system

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L25)

Gets or sets the unique id of the node

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`uniqueId`](NodeParticleBlock.md#uniqueid)

***

### updateSpeed

> **updateSpeed**: `number` = `0.0167`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L69)

Gets or sets the target stop duration for the particle system

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L89)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`visibleOnFrame`](NodeParticleBlock.md#visibleonframe)

## Accessors

### emitRate

#### Get Signature

> **get** **emitRate**(): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L180)

Gets the emitRate input component

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

### onEnd

#### Get Signature

> **get** **onEnd**(): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L222)

Gets the onEnd input component

##### Returns

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

***

### onStart

#### Get Signature

> **get** **onStart**(): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:215](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L215)

Gets the onStart input component

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

***

### particle

#### Get Signature

> **get** **particle**(): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L173)

Gets the particle input component

##### Returns

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

***

### system

#### Get Signature

> **get** **system**(): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L229)

Gets the system output component

##### Returns

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

***

### targetStopDuration

#### Get Signature

> **get** **targetStopDuration**(): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L208)

Gets the targetStopDuration input component

##### Returns

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

***

### texture

#### Get Signature

> **get** **texture**(): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L187)

Gets the texture input component

##### Returns

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

***

### textureMask

#### Get Signature

> **get** **textureMask**(): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L201)

Gets the textureMask input component

##### Returns

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

***

### translationPivot

#### Get Signature

> **get** **translationPivot**(): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L194)

Gets the translationPivot input component

##### Returns

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

## Methods

### \_build()

> **\_build**(`_state`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:259](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L259)

Builds the block. Must be implemented by derived classes.

#### Parameters

##### \_state

[`NodeParticleBuildState`](NodeParticleBuildState.md)

defines the current build state

#### Returns

`void`

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`_build`](NodeParticleBlock.md#_build)

***

### \_deserialize()

> **\_deserialize**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:360](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L360)

Deserializes the system block

#### Parameters

##### serializationObject

`any`

The serialized system

#### Returns

`void`

#### Overrides

`NodeParticleBlock._deserialize`

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

### createSystem()

> **createSystem**(`state`): [`ParticleSystem`](ParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L238)

Builds the block and return a functional particle system

#### Parameters

##### state

[`NodeParticleBuildState`](NodeParticleBuildState.md)

defines the building state

#### Returns

[`ParticleSystem`](ParticleSystem.md)

the built particle system

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L166)

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

> **registerInput**(`name`, `type`, `isOptional?`, `value?`, `valueMin?`, `valueMax?`): `SystemBlock`

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

`SystemBlock`

the current block

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`registerInput`](NodeParticleBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `point?`): `SystemBlock`

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

`SystemBlock`

the current block

#### Inherited from

[`NodeParticleBlock`](NodeParticleBlock.md).[`registerOutput`](NodeParticleBlock.md#registeroutput)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts:335](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/Blocks/systemBlock.pure.ts#L335)

Serializes the system block

#### Returns

`any`

The serialized object

#### Overrides

[`NodeParticleBlock`](NodeParticleBlock.md).[`serialize`](NodeParticleBlock.md#serialize)
