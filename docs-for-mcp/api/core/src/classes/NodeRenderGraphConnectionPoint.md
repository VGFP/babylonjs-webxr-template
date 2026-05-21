[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeRenderGraphConnectionPoint

# Class: NodeRenderGraphConnectionPoint

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L15)

Defines a connection point for a block

## Constructors

### Constructor

> **new NodeRenderGraphConnectionPoint**(`name`, `ownerBlock`, `direction`): `NodeRenderGraphConnectionPoint`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L237)

Creates a new connection point

#### Parameters

##### name

`string`

defines the connection point name

##### ownerBlock

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)

defines the block hosting this connection point

##### direction

[`NodeRenderGraphConnectionPointDirection`](../enumerations/NodeRenderGraphConnectionPointDirection.md)

defines the direction of the connection point

#### Returns

`NodeRenderGraphConnectionPoint`

## Properties

### acceptedConnectionPointTypes

> **acceptedConnectionPointTypes**: [`NodeRenderGraphBlockConnectionPointTypes`](../enumerations/NodeRenderGraphBlockConnectionPointTypes.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L81)

Gets or sets the additional types supported by this connection point

***

### displayName

> **displayName**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L162)

Gets or sets the connection point display name

***

### excludedConnectionPointTypes

> **excludedConnectionPointTypes**: [`NodeRenderGraphBlockConnectionPointTypes`](../enumerations/NodeRenderGraphBlockConnectionPointTypes.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L86)

Gets or sets the additional types excluded by this connection point

***

### exposedPortPosition

> **exposedPortPosition**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L106)

Gets or sets number indicating the position that the port is exposed to on a frame

***

### isExposedOnFrame

> **isExposedOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L101)

Gets or sets a boolean indicating that this connection point is exposed on a frame

***

### isOptional

> **isOptional**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L167)

Gets or sets a boolean indicating that this connection point can be omitted

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L157)

Gets or sets the connection point name

***

### needDualDirectionValidation

> **needDualDirectionValidation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L76)

Indicates that this connection point needs dual validation before being connected to another point

***

### onConnectionObservable

> **onConnectionObservable**: [`Observable`](Observable.md)\<`NodeRenderGraphConnectionPoint`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L91)

Observable triggered when this point is connected

***

### onDisconnectionObservable

> **onDisconnectionObservable**: [`Observable`](Observable.md)\<`NodeRenderGraphConnectionPoint`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L96)

Observable triggered when this point is disconnected

***

### value

> **value**: [`NodeRenderGraphBlockConnectionPointValueType`](../type-aliases/NodeRenderGraphBlockConnectionPointValueType.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L73)

The value stored in this connection point

## Accessors

### connectedBlocks

#### Get Signature

> **get** **connectedBlocks**(): [`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:196](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L196)

Get the block connected on the endpoints of this connection (if any)

##### Returns

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)[]

***

### connectedPoint

#### Get Signature

> **get** **connectedPoint**(): [`Nullable`](../type-aliases/Nullable.md)\<`NodeRenderGraphConnectionPoint`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L177)

Get the other side of the connection (if any)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`NodeRenderGraphConnectionPoint`\>

***

### direction

#### Get Signature

> **get** **direction**(): [`NodeRenderGraphConnectionPointDirection`](../enumerations/NodeRenderGraphConnectionPointDirection.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L39)

Gets the direction of the point

##### Returns

[`NodeRenderGraphConnectionPointDirection`](../enumerations/NodeRenderGraphConnectionPointDirection.md)

***

### endpoints

#### Get Signature

> **get** **endpoints**(): `NodeRenderGraphConnectionPoint`[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:205](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L205)

Gets the list of connected endpoints

##### Returns

`NodeRenderGraphConnectionPoint`[]

***

### hasEndpoints

#### Get Signature

> **get** **hasEndpoints**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:210](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L210)

Gets a boolean indicating if that output point is connected to at least one input

##### Returns

`boolean`

***

### innerType

#### Get Signature

> **get** **innerType**(): [`NodeRenderGraphBlockConnectionPointTypes`](../enumerations/NodeRenderGraphBlockConnectionPointTypes.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L215)

Get the inner type (ie AutoDetect for instance instead of the inferred one)

##### Returns

[`NodeRenderGraphBlockConnectionPointTypes`](../enumerations/NodeRenderGraphBlockConnectionPointTypes.md)

***

### isConnected

#### Get Signature

> **get** **isConnected**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L172)

Gets a boolean indicating that the current point is connected to another NodeRenderGraphBlock

##### Returns

`boolean`

***

### ownerBlock

#### Get Signature

> **get** **ownerBlock**(): [`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:182](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L182)

Get the block that owns this connection point

##### Returns

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)

***

### sourceBlock

#### Get Signature

> **get** **sourceBlock**(): [`Nullable`](../type-aliases/Nullable.md)\<[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L187)

Get the block connected on the other side of this connection (if any)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)\>

***

### type

#### Get Signature

> **get** **type**(): [`NodeRenderGraphBlockConnectionPointTypes`](../enumerations/NodeRenderGraphBlockConnectionPointTypes.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L111)

Gets or sets the connection point type (default is Undefined)

##### Returns

[`NodeRenderGraphBlockConnectionPointTypes`](../enumerations/NodeRenderGraphBlockConnectionPointTypes.md)

#### Set Signature

> **set** **type**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L150)

##### Parameters

###### value

[`NodeRenderGraphBlockConnectionPointTypes`](../enumerations/NodeRenderGraphBlockConnectionPointTypes.md)

##### Returns

`void`

## Methods

### addAcceptedConnectionPointTypes()

> **addAcceptedConnectionPointTypes**(`mask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:361](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L361)

Adds accepted connection point types

#### Parameters

##### mask

`number`

Types (ORed values of NodeRenderGraphBlockConnectionPointTypes) that are allowed to connect to this point

#### Returns

`void`

***

### addExcludedConnectionPointFromAllowedTypes()

> **addExcludedConnectionPointFromAllowedTypes**(`mask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:344](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L344)

Fills the list of excluded connection point types with all types other than those passed in the parameter

#### Parameters

##### mask

`number`

Types (ORed values of NodeRenderGraphBlockConnectionPointTypes) that are allowed, and thus will not be pushed to the excluded list

#### Returns

`void`

***

### canConnectTo()

> **canConnectTo**(`connectionPoint`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:256](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L256)

Gets a boolean indicating if the current point can be connected to another point

#### Parameters

##### connectionPoint

`NodeRenderGraphConnectionPoint`

defines the other connection point

#### Returns

`boolean`

a boolean

***

### checkCompatibilityState()

> **checkCompatibilityState**(`connectionPoint`): [`NodeRenderGraphConnectionPointCompatibilityStates`](../enumerations/NodeRenderGraphConnectionPointCompatibilityStates.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:265](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L265)

Gets a number indicating if the current point can be connected to another point

#### Parameters

##### connectionPoint

`NodeRenderGraphConnectionPoint`

defines the other connection point

#### Returns

[`NodeRenderGraphConnectionPointCompatibilityStates`](../enumerations/NodeRenderGraphConnectionPointCompatibilityStates.md)

a number defining the compatibility state

***

### connectTo()

> **connectTo**(`connectionPoint`, `ignoreConstraints?`): `NodeRenderGraphConnectionPoint`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:304](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L304)

Connect this point to another connection point

#### Parameters

##### connectionPoint

`NodeRenderGraphConnectionPoint`

defines the other connection point

##### ignoreConstraints?

`boolean` = `false`

defines if the system will ignore connection type constraints (default is false)

#### Returns

`NodeRenderGraphConnectionPoint`

the current connection point

***

### createCustomInputBlock()

> **createCustomInputBlock**(): [`Nullable`](../type-aliases/Nullable.md)\<\[[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md), `string`\]\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L227)

Creates a block suitable to be used as an input for this input point.
If null is returned, a block based on the point type will be created.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\[[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md), `string`\]\>

The returned string parameter is the name of the output point of NodeRenderGraphBlock (first parameter of the returned array) that can be connected to the input

***

### disconnectFrom()

> **disconnectFrom**(`endpoint`): `NodeRenderGraphConnectionPoint`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:324](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L324)

Disconnect this point from one of his endpoint

#### Parameters

##### endpoint

`NodeRenderGraphConnectionPoint`

defines the other connection point

#### Returns

`NodeRenderGraphConnectionPoint`

the current connection point

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:404](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L404)

Release resources

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:247](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L247)

Gets the current class name e.g. "NodeRenderGraphConnectionPoint"

#### Returns

`string`

the class name

***

### serialize()

> **serialize**(`isInput?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:379](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L379)

Serializes this point in a JSON representation

#### Parameters

##### isInput?

`boolean` = `true`

defines if the connection point is an input (default is true)

#### Returns

`any`

the serialized point object

***

### IsShadowGenerator()

> `static` **IsShadowGenerator**(`value`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L57)

Checks if the value is a shadow generator task

#### Parameters

##### value

[`NodeRenderGraphBlockConnectionPointValueType`](../type-aliases/NodeRenderGraphBlockConnectionPointValueType.md) \| `undefined`

The value to check

#### Returns

`boolean`

True if the value is a shadow generator

***

### IsShadowLight()

> `static` **IsShadowLight**(`value`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L66)

Checks if the value is a shadow light

#### Parameters

##### value

[`NodeRenderGraphBlockConnectionPointValueType`](../type-aliases/NodeRenderGraphBlockConnectionPointValueType.md) \| `undefined`

The value to check

#### Returns

`boolean`

True if the value is a shadow light

***

### IsTextureHandle()

> `static` **IsTextureHandle**(`value`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlockConnectionPoint.ts#L48)

Checks if the value is a texture handle

#### Parameters

##### value

[`NodeRenderGraphBlockConnectionPointValueType`](../type-aliases/NodeRenderGraphBlockConnectionPointValueType.md) \| `undefined`

The value to check

#### Returns

`boolean`

True if the value is a texture handle
