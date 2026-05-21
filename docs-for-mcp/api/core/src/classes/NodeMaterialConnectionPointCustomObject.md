[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeMaterialConnectionPointCustomObject

# Class: NodeMaterialConnectionPointCustomObject\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialConnectionPointCustomObject.ts:8](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialConnectionPointCustomObject.ts#L8)

Defines a connection point to be used for points with a custom object type

## Extends

- [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

## Type Parameters

### T

`T` *extends* [`NodeMaterialBlock`](NodeMaterialBlock.md)

## Constructors

### Constructor

> **new NodeMaterialConnectionPointCustomObject**\<`T`\>(`name`, `ownerBlock`, `direction`, `_blockType`, `_blockName`): `NodeMaterialConnectionPointCustomObject`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialConnectionPointCustomObject.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialConnectionPointCustomObject.ts#L17)

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

##### \_blockType

(...`args`) => `T`

##### \_blockName

`string`

#### Returns

`NodeMaterialConnectionPointCustomObject`\<`T`\>

#### Overrides

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`constructor`](NodeMaterialConnectionPoint.md#constructor)

## Properties

### \_blockType

> **\_blockType**: (...`args`) => `T`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialConnectionPointCustomObject.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialConnectionPointCustomObject.ts#L22)

#### Parameters

##### args

...`any`[]

#### Returns

`T`

***

### acceptedConnectionPointTypes

> **acceptedConnectionPointTypes**: [`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L201)

Gets or sets the additional types supported by this connection point

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`acceptedConnectionPointTypes`](NodeMaterialConnectionPoint.md#acceptedconnectionpointtypes)

***

### define

> **define**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:342](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L342)

Gets or sets a string indicating that this uniform must be defined under a #ifdef

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`define`](NodeMaterialConnectionPoint.md#define)

***

### displayName

> **displayName**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:322](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L322)

Gets or sets the connection point name

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`displayName`](NodeMaterialConnectionPoint.md#displayname)

***

### excludedConnectionPointTypes

> **excludedConnectionPointTypes**: [`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L206)

Gets or sets the additional types excluded by this connection point

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`excludedConnectionPointTypes`](NodeMaterialConnectionPoint.md#excludedconnectionpointtypes)

***

### exposedPortPosition

> **exposedPortPosition**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:337](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L337)

Gets or sets number indicating the position that the port is exposed to on a frame

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`exposedPortPosition`](NodeMaterialConnectionPoint.md#exposedportposition)

***

### isExposedOnFrame

> **isExposedOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:332](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L332)

Gets or sets a boolean indicating that this connection point is exposed on a frame

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`isExposedOnFrame`](NodeMaterialConnectionPoint.md#isexposedonframe)

***

### isOptional

> **isOptional**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:327](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L327)

Gets or sets a boolean indicating that this connection point can be omitted

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`isOptional`](NodeMaterialConnectionPoint.md#isoptional)

***

### name

> `readonly` **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:317](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L317)

Gets or sets the connection point name

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`name`](NodeMaterialConnectionPoint.md#name)

***

### needDualDirectionValidation

> **needDualDirectionValidation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:196](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L196)

Indicates that this connection point needs dual validation before being connected to another point

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`needDualDirectionValidation`](NodeMaterialConnectionPoint.md#needdualdirectionvalidation)

***

### onConnectionObservable

> `readonly` **onConnectionObservable**: [`Observable`](Observable.md)\<[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L211)

Observable triggered when this point is connected

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`onConnectionObservable`](NodeMaterialConnectionPoint.md#onconnectionobservable)

***

### onDisconnectionObservable

> `readonly` **onDisconnectionObservable**: [`Observable`](Observable.md)\<[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L216)

Observable triggered when this point is disconnected

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`onDisconnectionObservable`](NodeMaterialConnectionPoint.md#ondisconnectionobservable)

***

### onTypeChangedObservable

> `readonly` **onTypeChangedObservable**: [`Observable`](Observable.md)\<[`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:221](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L221)

Observable triggered when the type of the connection point is changed

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`onTypeChangedObservable`](NodeMaterialConnectionPoint.md#ontypechangedobservable)

## Accessors

### associatedVariableName

#### Get Signature

> **get** **associatedVariableName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:242](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L242)

Gets or sets the associated variable name in the shader

##### Returns

`string`

#### Set Signature

> **set** **associatedVariableName**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:254](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L254)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`associatedVariableName`](NodeMaterialConnectionPoint.md#associatedvariablename)

***

### connectedBlocks

#### Get Signature

> **get** **connectedBlocks**(): [`NodeMaterialBlock`](NodeMaterialBlock.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:415](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L415)

Get the block connected on the endpoints of this connection (if any)

##### Returns

[`NodeMaterialBlock`](NodeMaterialBlock.md)[]

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`connectedBlocks`](NodeMaterialConnectionPoint.md#connectedblocks)

***

### connectedPoint

#### Get Signature

> **get** **connectedPoint**(): [`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:396](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L396)

Get the other side of the connection (if any)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)\>

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`connectedPoint`](NodeMaterialConnectionPoint.md#connectedpoint)

***

### connectInputBlock

#### Get Signature

> **get** **connectInputBlock**(): [`Nullable`](../type-aliases/Nullable.md)\<[`InputBlock`](InputBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:387](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L387)

Gets a the connected input block (if any)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`InputBlock`](InputBlock.md)\>

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`connectInputBlock`](NodeMaterialConnectionPoint.md#connectinputblock)

***

### declarationVariableName

#### Get Signature

> **get** **declarationVariableName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L227)

Gets the declaration variable name in the shader

##### Returns

`string`

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`declarationVariableName`](NodeMaterialConnectionPoint.md#declarationvariablename)

***

### direction

#### Get Signature

> **get** **direction**(): [`NodeMaterialConnectionPointDirection`](../enumerations/NodeMaterialConnectionPointDirection.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L191)

Gets the direction of the point

##### Returns

[`NodeMaterialConnectionPointDirection`](../enumerations/NodeMaterialConnectionPointDirection.md)

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`direction`](NodeMaterialConnectionPoint.md#direction)

***

### endpoints

#### Get Signature

> **get** **endpoints**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:424](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L424)

Gets the list of connected endpoints

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`endpoints`](NodeMaterialConnectionPoint.md#endpoints)

***

### hasEndpoints

#### Get Signature

> **get** **hasEndpoints**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:429](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L429)

Gets a boolean indicating if that output point is connected to at least one input

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`hasEndpoints`](NodeMaterialConnectionPoint.md#hasendpoints)

***

### innerType

#### Get Signature

> **get** **innerType**(): [`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L259)

Get the inner type (ie AutoDetect for instance instead of the inferred one)

##### Returns

[`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`innerType`](NodeMaterialConnectionPoint.md#innertype)

***

### isConnected

#### Get Signature

> **get** **isConnected**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L373)

Gets a boolean indicating that the current point is connected to another NodeMaterialBlock

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`isConnected`](NodeMaterialConnectionPoint.md#isconnected)

***

### isConnectedInFragmentShader

#### Get Signature

> **get** **isConnectedInFragmentShader**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:484](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L484)

Gets a boolean indicating that this connection will be used in the fragment shader

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`isConnectedInFragmentShader`](NodeMaterialConnectionPoint.md#isconnectedinfragmentshader)

***

### isConnectedInVertexShader

#### Get Signature

> **get** **isConnectedInVertexShader**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:455](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L455)

Gets a boolean indicating that this connection will be used in the vertex shader

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`isConnectedInVertexShader`](NodeMaterialConnectionPoint.md#isconnectedinvertexshader)

***

### isConnectedToInputBlock

#### Get Signature

> **get** **isConnectedToInputBlock**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:380](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L380)

Gets a boolean indicating that the current point is connected to an input block

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`isConnectedToInputBlock`](NodeMaterialConnectionPoint.md#isconnectedtoinputblock)

***

### isDirectlyConnectedToVertexOutput

#### Get Signature

> **get** **isDirectlyConnectedToVertexOutput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:434](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L434)

Gets a boolean indicating that this connection has a path to the vertex output

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`isDirectlyConnectedToVertexOutput`](NodeMaterialConnectionPoint.md#isdirectlyconnectedtovertexoutput)

***

### isInactive

#### Get Signature

> **get** **isInactive**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L79)

Boolean used to provide visual clue to users when some ports are not active in the current block configuration

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`isInactive`](NodeMaterialConnectionPoint.md#isinactive)

***

### ownerBlock

#### Get Signature

> **get** **ownerBlock**(): [`NodeMaterialBlock`](NodeMaterialBlock.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:401](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L401)

Get the block that owns this connection point

##### Returns

[`NodeMaterialBlock`](NodeMaterialBlock.md)

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`ownerBlock`](NodeMaterialConnectionPoint.md#ownerblock)

***

### sourceBlock

#### Get Signature

> **get** **sourceBlock**(): [`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterialBlock`](NodeMaterialBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:406](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L406)

Get the block connected on the other side of this connection (if any)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterialBlock`](NodeMaterialBlock.md)\>

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`sourceBlock`](NodeMaterialConnectionPoint.md#sourceblock)

***

### target

#### Get Signature

> **get** **target**(): [`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:350](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L350)

Gets or sets the target of that connection point

##### Returns

[`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

#### Set Signature

> **set** **target**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:366](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L366)

##### Parameters

###### value

[`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

##### Returns

`void`

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`target`](NodeMaterialConnectionPoint.md#target)

***

### type

#### Get Signature

> **get** **type**(): [`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L269)

Gets or sets the connection point type (default is float)

##### Returns

[`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)

#### Set Signature

> **set** **type**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:310](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L310)

##### Parameters

###### value

[`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)

##### Returns

`void`

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`type`](NodeMaterialConnectionPoint.md#type)

## Methods

### addExcludedConnectionPointFromAllowedTypes()

> **addExcludedConnectionPointFromAllowedTypes**(`mask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:657](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L657)

Fill the list of excluded connection point types with all types other than those passed in the parameter

#### Parameters

##### mask

`number`

Types (ORed values of NodeMaterialBlockConnectionPointTypes) that are allowed, and thus will not be pushed to the excluded list

#### Returns

`void`

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`addExcludedConnectionPointFromAllowedTypes`](NodeMaterialConnectionPoint.md#addexcludedconnectionpointfromallowedtypes)

***

### canConnectTo()

> **canConnectTo**(`connectionPoint`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:542](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L542)

Gets a boolean indicating if the current point can be connected to another point

#### Parameters

##### connectionPoint

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

defines the other connection point

#### Returns

`boolean`

a boolean

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`canConnectTo`](NodeMaterialConnectionPoint.md#canconnectto)

***

### checkCompatibilityState()

> **checkCompatibilityState**(`connectionPoint`): [`NodeMaterialConnectionPointCompatibilityStates`](../enumerations/NodeMaterialConnectionPointCompatibilityStates.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialConnectionPointCustomObject.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialConnectionPointCustomObject.ts#L35)

Gets a number indicating if the current point can be connected to another point

#### Parameters

##### connectionPoint

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

defines the other connection point

#### Returns

[`NodeMaterialConnectionPointCompatibilityStates`](../enumerations/NodeMaterialConnectionPointCompatibilityStates.md)

a number defining the compatibility state

#### Overrides

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`checkCompatibilityState`](NodeMaterialConnectionPoint.md#checkcompatibilitystate)

***

### connectTo()

> **connectTo**(`connectionPoint`, `ignoreConstraints?`): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:612](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L612)

Connect this point to another connection point

#### Parameters

##### connectionPoint

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

defines the other connection point

##### ignoreConstraints?

`boolean` = `false`

defines if the system will ignore connection type constraints (default is false)

#### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

the current connection point

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`connectTo`](NodeMaterialConnectionPoint.md#connectto)

***

### createCustomInputBlock()

> **createCustomInputBlock**(): [`Nullable`](../type-aliases/Nullable.md)\<\[[`NodeMaterialBlock`](NodeMaterialBlock.md), `string`\]\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialConnectionPointCustomObject.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialConnectionPointCustomObject.ts#L46)

Creates a block suitable to be used as an input for this input point.
If null is returned, a block based on the point type will be created.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\[[`NodeMaterialBlock`](NodeMaterialBlock.md), `string`\]\>

The returned string parameter is the name of the output point of NodeMaterialBlock (first parameter of the returned array) that can be connected to the input

#### Overrides

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`createCustomInputBlock`](NodeMaterialConnectionPoint.md#createcustominputblock)

***

### disconnectFrom()

> **disconnectFrom**(`endpoint`): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:635](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L635)

Disconnect this point from one of his endpoint

#### Parameters

##### endpoint

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

defines the other connection point

#### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

the current connection point

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`disconnectFrom`](NodeMaterialConnectionPoint.md#disconnectfrom)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:699](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L699)

Release resources

#### Returns

`void`

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`dispose`](NodeMaterialConnectionPoint.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:533](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L533)

Gets the current class name e.g. "NodeMaterialConnectionPoint"

#### Returns

`string`

the class name

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`getClassName`](NodeMaterialConnectionPoint.md#getclassname)

***

### serialize()

> **serialize**(`isInput?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:672](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L672)

Serializes this point in a JSON representation

#### Parameters

##### isInput?

`boolean` = `true`

defines if the connection point is an input (default is true)

#### Returns

`any`

the serialized point object

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`serialize`](NodeMaterialConnectionPoint.md#serialize)

***

### AreEquivalentTypes()

> `static` **AreEquivalentTypes**(`type1`, `type2`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L42)

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

#### Inherited from

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md).[`AreEquivalentTypes`](NodeMaterialConnectionPoint.md#areequivalenttypes)
