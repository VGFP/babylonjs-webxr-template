[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeParticleConnectionPoint

# Class: NodeParticleConnectionPoint

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L33)

Defines a connection point for a block

## Constructors

### Constructor

> **new NodeParticleConnectionPoint**(`name`, `ownerBlock`, `direction`): `NodeParticleConnectionPoint`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:243](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L243)

Creates a new connection point

#### Parameters

##### name

`string`

defines the connection point name

##### ownerBlock

[`NodeParticleBlock`](NodeParticleBlock.md)

defines the block hosting this connection point

##### direction

[`NodeParticleConnectionPointDirection`](../enumerations/NodeParticleConnectionPointDirection.md)

defines the direction of the connection point

#### Returns

`NodeParticleConnectionPoint`

## Properties

### acceptedConnectionPointTypes

> **acceptedConnectionPointTypes**: [`NodeParticleBlockConnectionPointTypes`](../enumerations/NodeParticleBlockConnectionPointTypes.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L74)

Gets or sets the additional types supported by this connection point

***

### defaultValue

> **defaultValue**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L104)

Gets the default value used for this point at creation time

***

### displayName

> **displayName**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L177)

Gets or sets the connection point display name

***

### excludedConnectionPointTypes

> **excludedConnectionPointTypes**: [`NodeParticleBlockConnectionPointTypes`](../enumerations/NodeParticleBlockConnectionPointTypes.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L79)

Gets or sets the additional types excluded by this connection point

***

### exposedPortPosition

> **exposedPortPosition**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L99)

Gets or sets number indicating the position that the port is exposed to on a frame

***

### isExposedOnFrame

> **isExposedOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L94)

Gets or sets a boolean indicating that this connection point is exposed on a frame

***

### isOptional

> **isOptional**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:182](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L182)

Gets or sets a boolean indicating that this connection point can be omitted

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L172)

Gets or sets the connection point name

***

### onConnectionObservable

> **onConnectionObservable**: [`Observable`](Observable.md)\<`NodeParticleConnectionPoint`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L84)

Observable triggered when this point is connected

***

### onDisconnectionObservable

> **onDisconnectionObservable**: [`Observable`](Observable.md)\<`NodeParticleConnectionPoint`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L89)

Observable triggered when this point is disconnected

***

### value

> **value**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L109)

Gets or sets the default value used for this point if nothing is connected

***

### valueMax

> **valueMax**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L119)

Gets or sets the max value accepted for this point if nothing is connected

***

### valueMin

> **valueMin**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L114)

Gets or sets the min value accepted for this point if nothing is connected

## Accessors

### connectedBlocks

#### Get Signature

> **get** **connectedBlocks**(): [`NodeParticleBlock`](NodeParticleBlock.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L211)

Get the block connected on the endpoints of this connection (if any)

##### Returns

[`NodeParticleBlock`](NodeParticleBlock.md)[]

***

### connectedPoint

#### Get Signature

> **get** **connectedPoint**(): [`Nullable`](../type-aliases/Nullable.md)\<`NodeParticleConnectionPoint`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:192](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L192)

Get the other side of the connection (if any)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`NodeParticleConnectionPoint`\>

***

### direction

#### Get Signature

> **get** **direction**(): [`NodeParticleConnectionPointDirection`](../enumerations/NodeParticleConnectionPointDirection.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L67)

Gets the direction of the point

##### Returns

[`NodeParticleConnectionPointDirection`](../enumerations/NodeParticleConnectionPointDirection.md)

***

### endpoints

#### Get Signature

> **get** **endpoints**(): `NodeParticleConnectionPoint`[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:220](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L220)

Gets the list of connected endpoints

##### Returns

`NodeParticleConnectionPoint`[]

***

### hasEndpoints

#### Get Signature

> **get** **hasEndpoints**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:225](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L225)

Gets a boolean indicating if that output point is connected to at least one input

##### Returns

`boolean`

***

### innerType

#### Get Signature

> **get** **innerType**(): [`NodeParticleBlockConnectionPointTypes`](../enumerations/NodeParticleBlockConnectionPointTypes.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L230)

Get the inner type (ie AutoDetect for instance instead of the inferred one)

##### Returns

[`NodeParticleBlockConnectionPointTypes`](../enumerations/NodeParticleBlockConnectionPointTypes.md)

***

### isConnected

#### Get Signature

> **get** **isConnected**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L187)

Gets a boolean indicating that the current point is connected to another NodeMaterialBlock

##### Returns

`boolean`

***

### ownerBlock

#### Get Signature

> **get** **ownerBlock**(): [`NodeParticleBlock`](NodeParticleBlock.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:197](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L197)

Get the block that owns this connection point

##### Returns

[`NodeParticleBlock`](NodeParticleBlock.md)

***

### sourceBlock

#### Get Signature

> **get** **sourceBlock**(): [`Nullable`](../type-aliases/Nullable.md)\<[`NodeParticleBlock`](NodeParticleBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:202](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L202)

Get the block connected on the other side of this connection (if any)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeParticleBlock`](NodeParticleBlock.md)\>

***

### type

#### Get Signature

> **get** **type**(): [`NodeParticleBlockConnectionPointTypes`](../enumerations/NodeParticleBlockConnectionPointTypes.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L124)

Gets or sets the connection point type (default is float)

##### Returns

[`NodeParticleBlockConnectionPointTypes`](../enumerations/NodeParticleBlockConnectionPointTypes.md)

#### Set Signature

> **set** **type**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L165)

##### Parameters

###### value

[`NodeParticleBlockConnectionPointTypes`](../enumerations/NodeParticleBlockConnectionPointTypes.md)

##### Returns

`void`

## Methods

### addExcludedConnectionPointFromAllowedTypes()

> **addExcludedConnectionPointFromAllowedTypes**(`mask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:365](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L365)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:277](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L277)

Gets a boolean indicating if the current point can be connected to another point

#### Parameters

##### connectionPoint

`NodeParticleConnectionPoint`

defines the other connection point

#### Returns

`boolean`

a boolean

***

### checkCompatibilityState()

> **checkCompatibilityState**(`connectionPoint`): [`NodeParticleConnectionPointCompatibilityStates`](../enumerations/NodeParticleConnectionPointCompatibilityStates.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:286](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L286)

Gets a number indicating if the current point can be connected to another point

#### Parameters

##### connectionPoint

`NodeParticleConnectionPoint`

defines the other connection point

#### Returns

[`NodeParticleConnectionPointCompatibilityStates`](../enumerations/NodeParticleConnectionPointCompatibilityStates.md)

a number defining the compatibility state

***

### connectTo()

> **connectTo**(`connectionPoint`, `ignoreConstraints?`): `NodeParticleConnectionPoint`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:325](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L325)

Connect this point to another connection point

#### Parameters

##### connectionPoint

`NodeParticleConnectionPoint`

defines the other connection point

##### ignoreConstraints?

`boolean` = `false`

defines if the system will ignore connection type constraints (default is false)

#### Returns

`NodeParticleConnectionPoint`

the current connection point

***

### disconnectFrom()

> **disconnectFrom**(`endpoint`): `NodeParticleConnectionPoint`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L345)

Disconnect this point from one of his endpoint

#### Parameters

##### endpoint

`NodeParticleConnectionPoint`

defines the other connection point

#### Returns

`NodeParticleConnectionPoint`

the current connection point

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:414](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L414)

Release resources

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:253](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L253)

Gets the current class name e.g. "NodeMaterialConnectionPoint"

#### Returns

`string`

the class name

***

### getConnectedValue()

> **getConnectedValue**(`state`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:262](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L262)

Gets the value represented by this connection point

#### Parameters

##### state

[`NodeParticleBuildState`](NodeParticleBuildState.md)

current evaluation state

#### Returns

`any`

the connected value or the value if nothing is connected

***

### serialize()

> **serialize**(`isInput?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts:380](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleBlockConnectionPoint.ts#L380)

Serializes this point in a JSON representation

#### Parameters

##### isInput?

`boolean` = `true`

defines if the connection point is an input (default is true)

#### Returns

`any`

the serialized point object
