[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeMaterialConnectionPoint

# Class: NodeMaterialConnectionPoint

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L35)

Defines a connection point for a block

## Extended by

- [`NodeMaterialConnectionPointCustomObject`](NodeMaterialConnectionPointCustomObject.md)

## Constructors

### Constructor

> **new NodeMaterialConnectionPoint**(`name`, `ownerBlock`, `direction`): `NodeMaterialConnectionPoint`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:523](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L523)

Creates a new connection point

#### Parameters

##### name

`string`

defines the connection point name

##### ownerBlock

[`NodeMaterialBlock`](NodeMaterialBlock.md)

defines the block hosting this connection point

##### direction

[`NodeMaterialConnectionPointDirection`](../enumerations/NodeMaterialConnectionPointDirection.md)

defines the direction of the connection point

#### Returns

`NodeMaterialConnectionPoint`

## Properties

### acceptedConnectionPointTypes

> **acceptedConnectionPointTypes**: [`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L201)

Gets or sets the additional types supported by this connection point

***

### define

> **define**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:342](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L342)

Gets or sets a string indicating that this uniform must be defined under a #ifdef

***

### displayName

> **displayName**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L322)

Gets or sets the connection point name

***

### excludedConnectionPointTypes

> **excludedConnectionPointTypes**: [`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:206](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L206)

Gets or sets the additional types excluded by this connection point

***

### exposedPortPosition

> **exposedPortPosition**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L337)

Gets or sets number indicating the position that the port is exposed to on a frame

***

### isExposedOnFrame

> **isExposedOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L332)

Gets or sets a boolean indicating that this connection point is exposed on a frame

***

### isOptional

> **isOptional**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:327](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L327)

Gets or sets a boolean indicating that this connection point can be omitted

***

### name

> `readonly` **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:317](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L317)

Gets or sets the connection point name

***

### needDualDirectionValidation

> **needDualDirectionValidation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L196)

Indicates that this connection point needs dual validation before being connected to another point

***

### onConnectionObservable

> `readonly` **onConnectionObservable**: [`Observable`](Observable.md)\<`NodeMaterialConnectionPoint`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:211](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L211)

Observable triggered when this point is connected

***

### onDisconnectionObservable

> `readonly` **onDisconnectionObservable**: [`Observable`](Observable.md)\<`NodeMaterialConnectionPoint`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L216)

Observable triggered when this point is disconnected

***

### onTypeChangedObservable

> `readonly` **onTypeChangedObservable**: [`Observable`](Observable.md)\<[`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L221)

Observable triggered when the type of the connection point is changed

## Accessors

### associatedVariableName

#### Get Signature

> **get** **associatedVariableName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L242)

Gets or sets the associated variable name in the shader

##### Returns

`string`

#### Set Signature

> **set** **associatedVariableName**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L254)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### connectedBlocks

#### Get Signature

> **get** **connectedBlocks**(): [`NodeMaterialBlock`](NodeMaterialBlock.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:415](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L415)

Get the block connected on the endpoints of this connection (if any)

##### Returns

[`NodeMaterialBlock`](NodeMaterialBlock.md)[]

***

### connectedPoint

#### Get Signature

> **get** **connectedPoint**(): [`Nullable`](../type-aliases/Nullable.md)\<`NodeMaterialConnectionPoint`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:396](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L396)

Get the other side of the connection (if any)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`NodeMaterialConnectionPoint`\>

***

### connectInputBlock

#### Get Signature

> **get** **connectInputBlock**(): [`Nullable`](../type-aliases/Nullable.md)\<[`InputBlock`](InputBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:387](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L387)

Gets a the connected input block (if any)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`InputBlock`](InputBlock.md)\>

***

### declarationVariableName

#### Get Signature

> **get** **declarationVariableName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:227](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L227)

Gets the declaration variable name in the shader

##### Returns

`string`

***

### direction

#### Get Signature

> **get** **direction**(): [`NodeMaterialConnectionPointDirection`](../enumerations/NodeMaterialConnectionPointDirection.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L191)

Gets the direction of the point

##### Returns

[`NodeMaterialConnectionPointDirection`](../enumerations/NodeMaterialConnectionPointDirection.md)

***

### endpoints

#### Get Signature

> **get** **endpoints**(): `NodeMaterialConnectionPoint`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:424](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L424)

Gets the list of connected endpoints

##### Returns

`NodeMaterialConnectionPoint`[]

***

### hasEndpoints

#### Get Signature

> **get** **hasEndpoints**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:429](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L429)

Gets a boolean indicating if that output point is connected to at least one input

##### Returns

`boolean`

***

### innerType

#### Get Signature

> **get** **innerType**(): [`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:259](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L259)

Get the inner type (ie AutoDetect for instance instead of the inferred one)

##### Returns

[`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)

***

### isConnected

#### Get Signature

> **get** **isConnected**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L373)

Gets a boolean indicating that the current point is connected to another NodeMaterialBlock

##### Returns

`boolean`

***

### isConnectedInFragmentShader

#### Get Signature

> **get** **isConnectedInFragmentShader**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:484](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L484)

Gets a boolean indicating that this connection will be used in the fragment shader

##### Returns

`boolean`

***

### isConnectedInVertexShader

#### Get Signature

> **get** **isConnectedInVertexShader**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:455](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L455)

Gets a boolean indicating that this connection will be used in the vertex shader

##### Returns

`boolean`

***

### isConnectedToInputBlock

#### Get Signature

> **get** **isConnectedToInputBlock**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L380)

Gets a boolean indicating that the current point is connected to an input block

##### Returns

`boolean`

***

### isDirectlyConnectedToVertexOutput

#### Get Signature

> **get** **isDirectlyConnectedToVertexOutput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:434](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L434)

Gets a boolean indicating that this connection has a path to the vertex output

##### Returns

`boolean`

***

### isInactive

#### Get Signature

> **get** **isInactive**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L79)

Boolean used to provide visual clue to users when some ports are not active in the current block configuration

##### Returns

`boolean`

***

### ownerBlock

#### Get Signature

> **get** **ownerBlock**(): [`NodeMaterialBlock`](NodeMaterialBlock.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:401](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L401)

Get the block that owns this connection point

##### Returns

[`NodeMaterialBlock`](NodeMaterialBlock.md)

***

### sourceBlock

#### Get Signature

> **get** **sourceBlock**(): [`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterialBlock`](NodeMaterialBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:406](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L406)

Get the block connected on the other side of this connection (if any)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterialBlock`](NodeMaterialBlock.md)\>

***

### target

#### Get Signature

> **get** **target**(): [`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L350)

Gets or sets the target of that connection point

##### Returns

[`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

#### Set Signature

> **set** **target**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:366](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L366)

##### Parameters

###### value

[`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

##### Returns

`void`

***

### type

#### Get Signature

> **get** **type**(): [`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L269)

Gets or sets the connection point type (default is float)

##### Returns

[`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)

#### Set Signature

> **set** **type**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L310)

##### Parameters

###### value

[`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)

##### Returns

`void`

## Methods

### addExcludedConnectionPointFromAllowedTypes()

> **addExcludedConnectionPointFromAllowedTypes**(`mask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:657](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L657)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:542](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L542)

Gets a boolean indicating if the current point can be connected to another point

#### Parameters

##### connectionPoint

`NodeMaterialConnectionPoint`

defines the other connection point

#### Returns

`boolean`

a boolean

***

### checkCompatibilityState()

> **checkCompatibilityState**(`connectionPoint`): [`NodeMaterialConnectionPointCompatibilityStates`](../enumerations/NodeMaterialConnectionPointCompatibilityStates.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:551](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L551)

Gets a number indicating if the current point can be connected to another point

#### Parameters

##### connectionPoint

`NodeMaterialConnectionPoint`

defines the other connection point

#### Returns

[`NodeMaterialConnectionPointCompatibilityStates`](../enumerations/NodeMaterialConnectionPointCompatibilityStates.md)

a number defining the compatibility state

***

### connectTo()

> **connectTo**(`connectionPoint`, `ignoreConstraints?`): `NodeMaterialConnectionPoint`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:612](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L612)

Connect this point to another connection point

#### Parameters

##### connectionPoint

`NodeMaterialConnectionPoint`

defines the other connection point

##### ignoreConstraints?

`boolean` = `false`

defines if the system will ignore connection type constraints (default is false)

#### Returns

`NodeMaterialConnectionPoint`

the current connection point

***

### createCustomInputBlock()

> **createCustomInputBlock**(): [`Nullable`](../type-aliases/Nullable.md)\<\[[`NodeMaterialBlock`](NodeMaterialBlock.md), `string`\]\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:513](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L513)

Creates a block suitable to be used as an input for this input point.
If null is returned, a block based on the point type will be created.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\[[`NodeMaterialBlock`](NodeMaterialBlock.md), `string`\]\>

The returned string parameter is the name of the output point of NodeMaterialBlock (first parameter of the returned array) that can be connected to the input

***

### disconnectFrom()

> **disconnectFrom**(`endpoint`): `NodeMaterialConnectionPoint`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:635](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L635)

Disconnect this point from one of his endpoint

#### Parameters

##### endpoint

`NodeMaterialConnectionPoint`

defines the other connection point

#### Returns

`NodeMaterialConnectionPoint`

the current connection point

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:699](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L699)

Release resources

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:533](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L533)

Gets the current class name e.g. "NodeMaterialConnectionPoint"

#### Returns

`string`

the class name

***

### serialize()

> **serialize**(`isInput?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:672](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L672)

Serializes this point in a JSON representation

#### Parameters

##### isInput?

`boolean` = `true`

defines if the connection point is an input (default is true)

#### Returns

`any`

the serialized point object

***

### AreEquivalentTypes()

> `static` **AreEquivalentTypes**(`type1`, `type2`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L42)

Checks if two types are equivalent

#### Parameters

##### type1

`number`

type 1 to check

##### type2

`number`

type 2 to check

#### Returns

`boolean`

true if both types are equivalent, else false
