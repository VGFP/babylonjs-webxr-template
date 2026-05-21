[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeParticleBlock

# Class: NodeParticleBlock

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L13)

Defines a block that can be used inside a node based particle system

## Extended by

- [`SystemBlock`](SystemBlock.md)
- [`ParticleFloatToIntBlock`](ParticleFloatToIntBlock.md)
- [`ParticleInputBlock`](ParticleInputBlock.md)
- [`ParticleTextureSourceBlock`](ParticleTextureSourceBlock.md)
- [`ParticleMathBlock`](ParticleMathBlock.md)
- [`ParticleLerpBlock`](ParticleLerpBlock.md)
- [`UpdateDirectionBlock`](UpdateDirectionBlock.md)
- [`UpdatePositionBlock`](UpdatePositionBlock.md)
- [`UpdateColorBlock`](UpdateColorBlock.md)
- [`UpdateScaleBlock`](UpdateScaleBlock.md)
- [`UpdateSizeBlock`](UpdateSizeBlock.md)
- [`UpdateAngleBlock`](UpdateAngleBlock.md)
- [`UpdateAgeBlock`](UpdateAgeBlock.md)
- [`BasicPositionUpdateBlock`](BasicPositionUpdateBlock.md)
- [`BasicSpriteUpdateBlock`](BasicSpriteUpdateBlock.md)
- [`BasicColorUpdateBlock`](BasicColorUpdateBlock.md)
- [`UpdateSpriteCellIndexBlock`](UpdateSpriteCellIndexBlock.md)
- [`UpdateFlowMapBlock`](UpdateFlowMapBlock.md)
- [`UpdateNoiseBlock`](UpdateNoiseBlock.md)
- [`UpdateAttractorBlock`](UpdateAttractorBlock.md)
- [`AlignAngleBlock`](AlignAngleBlock.md)
- [`BoxShapeBlock`](BoxShapeBlock.md)
- [`ConeShapeBlock`](ConeShapeBlock.md)
- [`CylinderShapeBlock`](CylinderShapeBlock.md)
- [`CustomShapeBlock`](CustomShapeBlock.md)
- [`MeshShapeBlock`](MeshShapeBlock.md)
- [`PointShapeBlock`](PointShapeBlock.md)
- [`SetupSpriteSheetBlock`](SetupSpriteSheetBlock.md)
- [`SphereShapeBlock`](SphereShapeBlock.md)
- [`ParticleGradientValueBlock`](ParticleGradientValueBlock.md)
- [`ParticleGradientBlock`](ParticleGradientBlock.md)
- [`ParticleConverterBlock`](ParticleConverterBlock.md)
- [`ParticleTrigonometryBlock`](ParticleTrigonometryBlock.md)
- [`ParticleRandomBlock`](ParticleRandomBlock.md)
- [`ParticleDebugBlock`](ParticleDebugBlock.md)
- [`ParticleElbowBlock`](ParticleElbowBlock.md)
- [`ParticleTeleportInBlock`](ParticleTeleportInBlock.md)
- [`ParticleTeleportOutBlock`](ParticleTeleportOutBlock.md)
- [`ParticleConditionBlock`](ParticleConditionBlock.md)
- [`ParticleTriggerBlock`](ParticleTriggerBlock.md)
- [`ParticleLocalVariableBlock`](ParticleLocalVariableBlock.md)
- [`ParticleVectorLengthBlock`](ParticleVectorLengthBlock.md)
- [`ParticleNumberMathBlock`](ParticleNumberMathBlock.md)
- [`ParticleVectorMathBlock`](ParticleVectorMathBlock.md)
- [`ParticleClampBlock`](ParticleClampBlock.md)
- [`ParticleNLerpBlock`](ParticleNLerpBlock.md)
- [`ParticleSmoothStepBlock`](ParticleSmoothStepBlock.md)
- [`ParticleStepBlock`](ParticleStepBlock.md)

## Constructors

### Constructor

> **new NodeParticleBlock**(`name`): `NodeParticleBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L126)

Creates a new NodeParticleBlock

#### Parameters

##### name

`string`

defines the block name

#### Returns

`NodeParticleBlock`

## Properties

### comments

> **comments**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L86)

A free comment about the block

***

### onBuildObservable

> **onBuildObservable**: [`Observable`](Observable.md)\<`NodeParticleBlock`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L35)

Gets an observable raised when the block is built

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<`NodeParticleBlock`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L40)

Gets an observable raised when the block is disposed

***

### onInputChangedObservable

> **onInputChangedObservable**: [`Observable`](Observable.md)\<[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L45)

Gets an observable raised when the inputs of the block change

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L25)

Gets or sets the unique id of the node

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L89)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

## Accessors

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L113)

Gets the list of input points

##### Returns

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)[]

***

### isDebug

#### Get Signature

> **get** **isDebug**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L78)

Gets a boolean indicating if this block is a debug block

##### Returns

`boolean`

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L71)

Gets a boolean indicating that this block is an input block

##### Returns

`boolean`

***

### isSystem

#### Get Signature

> **get** **isSystem**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L64)

Gets a boolean indicating that this block is a system block

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

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L50)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

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

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L118)

Gets the list of output points

##### Returns

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)[]

## Methods

### \_build()

> **\_build**(`_state`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L259)

Builds the block. Must be implemented by derived classes.

#### Parameters

##### \_state

[`NodeParticleBuildState`](NodeParticleBuildState.md)

defines the current build state

#### Returns

`void`

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

***

### clone()

> **clone**(): `NodeParticleBlock` \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:398](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L398)

Clone the current block to a new identical block

#### Returns

`NodeParticleBlock` \| `null`

a copy of the current block

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:415](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L415)

Release resources

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L106)

Gets the current class name e.g. "NodeParticleBlock"

#### Returns

`string`

the class name

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

***

### isAnAncestorOf()

> **isAnAncestorOf**(`block`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L144)

Checks if the current block is an ancestor of a given block

#### Parameters

##### block

`NodeParticleBlock`

defines the potential descendant block to check

#### Returns

`boolean`

true if block is a descendant

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

***

### registerInput()

> **registerInput**(`name`, `type`, `isOptional?`, `value?`, `valueMin?`, `valueMax?`): `NodeParticleBlock`

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

`NodeParticleBlock`

the current block

***

### registerOutput()

> **registerOutput**(`name`, `type`, `point?`): `NodeParticleBlock`

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

`NodeParticleBlock`

the current block

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts:317](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlock.ts#L317)

Serializes this block in a JSON representation

#### Returns

`any`

the serialized block object
