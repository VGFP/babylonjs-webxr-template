[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeGeometryConnectionPoint

# Class: NodeGeometryConnectionPoint

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L33)

Defines a connection point for a block

## Constructors

### Constructor

> **new NodeGeometryConnectionPoint**(`name`, `ownerBlock`, `direction`): `NodeGeometryConnectionPoint`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L283)

Creates a new connection point

#### Parameters

##### name

`string`

defines the connection point name

##### ownerBlock

[`NodeGeometryBlock`](NodeGeometryBlock.md)

defines the block hosting this connection point

##### direction

[`NodeGeometryConnectionPointDirection`](../enumerations/NodeGeometryConnectionPointDirection.md)

defines the direction of the connection point

#### Returns

`NodeGeometryConnectionPoint`

## Properties

### acceptedConnectionPointTypes

> **acceptedConnectionPointTypes**: [`NodeGeometryBlockConnectionPointTypes`](../enumerations/NodeGeometryBlockConnectionPointTypes.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L70)

Gets or sets the additional types supported by this connection point

***

### defaultValue

> **defaultValue**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L100)

Gets the default value used for this point at creation time

***

### displayName

> **displayName**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L170)

Gets or sets the connection point display name

***

### excludedConnectionPointTypes

> **excludedConnectionPointTypes**: [`NodeGeometryBlockConnectionPointTypes`](../enumerations/NodeGeometryBlockConnectionPointTypes.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L75)

Gets or sets the additional types excluded by this connection point

***

### exposedPortPosition

> **exposedPortPosition**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L95)

Gets or sets number indicating the position that the port is exposed to on a frame

***

### isExposedOnFrame

> **isExposedOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L90)

Gets or sets a boolean indicating that this connection point is exposed on a frame

***

### isOptional

> **isOptional**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:175](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L175)

Gets or sets a boolean indicating that this connection point can be omitted

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L165)

Gets or sets the connection point name

***

### onConnectionObservable

> **onConnectionObservable**: [`Observable`](Observable.md)\<`NodeGeometryConnectionPoint`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L80)

Observable triggered when this point is connected

***

### onDisconnectionObservable

> **onDisconnectionObservable**: [`Observable`](Observable.md)\<`NodeGeometryConnectionPoint`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L85)

Observable triggered when this point is disconnected

***

### value

> **value**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L105)

Gets or sets the default value used for this point if nothing is connected

***

### valueMax

> **valueMax**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L115)

Gets or sets the max value accepted for this point if nothing is connected

***

### valueMin

> **valueMin**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L110)

Gets or sets the min value accepted for this point if nothing is connected

## Accessors

### callCount

#### Get Signature

> **get** **callCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L245)

Gets the number of times this point was called

##### Returns

`number`

***

### connectedBlocks

#### Get Signature

> **get** **connectedBlocks**(): [`NodeGeometryBlock`](NodeGeometryBlock.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L204)

Get the block connected on the endpoints of this connection (if any)

##### Returns

[`NodeGeometryBlock`](NodeGeometryBlock.md)[]

***

### connectedPoint

#### Get Signature

> **get** **connectedPoint**(): [`Nullable`](../type-aliases/Nullable.md)\<`NodeGeometryConnectionPoint`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L185)

Get the other side of the connection (if any)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`NodeGeometryConnectionPoint`\>

***

### direction

#### Get Signature

> **get** **direction**(): [`NodeGeometryConnectionPointDirection`](../enumerations/NodeGeometryConnectionPointDirection.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L63)

Gets the direction of the point

##### Returns

[`NodeGeometryConnectionPointDirection`](../enumerations/NodeGeometryConnectionPointDirection.md)

***

### endpoints

#### Get Signature

> **get** **endpoints**(): `NodeGeometryConnectionPoint`[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:213](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L213)

Gets the list of connected endpoints

##### Returns

`NodeGeometryConnectionPoint`[]

***

### executionCount

#### Get Signature

> **get** **executionCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:252](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L252)

Gets the number of times this point was executed

##### Returns

`number`

***

### hasEndpoints

#### Get Signature

> **get** **hasEndpoints**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:218](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L218)

Gets a boolean indicating if that output point is connected to at least one input

##### Returns

`boolean`

***

### innerType

#### Get Signature

> **get** **innerType**(): [`NodeGeometryBlockConnectionPointTypes`](../enumerations/NodeGeometryBlockConnectionPointTypes.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L223)

Get the inner type (ie AutoDetect for instance instead of the inferred one)

##### Returns

[`NodeGeometryBlockConnectionPointTypes`](../enumerations/NodeGeometryBlockConnectionPointTypes.md)

***

### isConnected

#### Get Signature

> **get** **isConnected**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L180)

Gets a boolean indicating that the current point is connected to another NodeMaterialBlock

##### Returns

`boolean`

***

### ownerBlock

#### Get Signature

> **get** **ownerBlock**(): [`NodeGeometryBlock`](NodeGeometryBlock.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L190)

Get the block that owns this connection point

##### Returns

[`NodeGeometryBlock`](NodeGeometryBlock.md)

***

### sourceBlock

#### Get Signature

> **get** **sourceBlock**(): [`Nullable`](../type-aliases/Nullable.md)\<[`NodeGeometryBlock`](NodeGeometryBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L195)

Get the block connected on the other side of this connection (if any)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeGeometryBlock`](NodeGeometryBlock.md)\>

***

### type

#### Get Signature

> **get** **type**(): [`NodeGeometryBlockConnectionPointTypes`](../enumerations/NodeGeometryBlockConnectionPointTypes.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L120)

Gets or sets the connection point type (default is float)

##### Returns

[`NodeGeometryBlockConnectionPointTypes`](../enumerations/NodeGeometryBlockConnectionPointTypes.md)

#### Set Signature

> **set** **type**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L158)

##### Parameters

###### value

[`NodeGeometryBlockConnectionPointTypes`](../enumerations/NodeGeometryBlockConnectionPointTypes.md)

##### Returns

`void`

## Methods

### addExcludedConnectionPointFromAllowedTypes()

> **addExcludedConnectionPointFromAllowedTypes**(`mask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:389](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L389)

Fill the list of excluded connection point types with all types other than those passed in the parameter

#### Parameters

##### mask

`number`

Types (ORed values of NodeMaterialBlockConnectionPointTypes) that are allowed, and thus will not be pushed to the excluded list

#### Returns

`void`

***

### canConnectTo()

> **canConnectTo**(`connectionPoint`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:302](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L302)

Gets a boolean indicating if the current point can be connected to another point

#### Parameters

##### connectionPoint

`NodeGeometryConnectionPoint`

defines the other connection point

#### Returns

`boolean`

a boolean

***

### checkCompatibilityState()

> **checkCompatibilityState**(`connectionPoint`): [`NodeGeometryConnectionPointCompatibilityStates`](../enumerations/NodeGeometryConnectionPointCompatibilityStates.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:311](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L311)

Gets a number indicating if the current point can be connected to another point

#### Parameters

##### connectionPoint

`NodeGeometryConnectionPoint`

defines the other connection point

#### Returns

[`NodeGeometryConnectionPointCompatibilityStates`](../enumerations/NodeGeometryConnectionPointCompatibilityStates.md)

a number defining the compatibility state

***

### connectTo()

> **connectTo**(`connectionPoint`, `ignoreConstraints?`): `NodeGeometryConnectionPoint`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L350)

Connect this point to another connection point

#### Parameters

##### connectionPoint

`NodeGeometryConnectionPoint`

defines the other connection point

##### ignoreConstraints?

`boolean` = `false`

defines if the system will ignore connection type constraints (default is false)

#### Returns

`NodeGeometryConnectionPoint`

the current connection point

***

### disconnectFrom()

> **disconnectFrom**(`endpoint`): `NodeGeometryConnectionPoint`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:369](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L369)

Disconnect this point from one of his endpoint

#### Parameters

##### endpoint

`NodeGeometryConnectionPoint`

defines the other connection point

#### Returns

`NodeGeometryConnectionPoint`

the current connection point

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:438](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L438)

Release resources

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:293](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L293)

Gets the current class name e.g. "NodeMaterialConnectionPoint"

#### Returns

`string`

the class name

***

### getConnectedValue()

> **getConnectedValue**(`state`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L261)

Gets the value represented by this connection point

#### Parameters

##### state

[`NodeGeometryBuildState`](NodeGeometryBuildState.md)

current evaluation state

#### Returns

`any`

the connected value or the value if nothing is connected

***

### serialize()

> **serialize**(`isInput?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts:404](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBlockConnectionPoint.ts#L404)

Serializes this point in a JSON representation

#### Parameters

##### isInput?

`boolean` = `true`

defines if the connection point is an input (default is true)

#### Returns

`any`

the serialized point object
