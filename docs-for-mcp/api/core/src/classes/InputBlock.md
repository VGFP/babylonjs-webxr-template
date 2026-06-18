[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InputBlock

# Class: InputBlock

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L62)

Block used to expose an input value

## Extends

- [`NodeMaterialBlock`](NodeMaterialBlock.md)

## Constructors

### Constructor

> **new InputBlock**(`name`, `target?`, `type?`): `InputBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:218](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L218)

Creates a new InputBlock

#### Parameters

##### name

`string`

defines the block name

##### target?

[`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md) = `NodeMaterialBlockTargets.Vertex`

defines the target of that block (Vertex by default)

##### type?

[`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md) = `NodeMaterialBlockConnectionPointTypes.AutoDetect`

defines the type of the input (can be set to NodeMaterialBlockConnectionPointTypes.AutoDetect)

#### Returns

`InputBlock`

#### Overrides

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`constructor`](NodeMaterialBlock.md#constructor)

## Properties

### comments

> **comments**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L104)

Gets or sets the comments associated with this block

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`comments`](NodeMaterialBlock.md#comments)

***

### convertToGammaSpace

> **convertToGammaSpace**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L96)

Gets or sets a boolean indicating if content needs to be converted to gamma space (for color3/4 only)

***

### convertToLinearSpace

> **convertToLinearSpace**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L99)

Gets or sets a boolean indicating if content needs to be converted to linear space (for color3/4 only)

***

### groupInInspector

> **groupInInspector**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L90)

Gets or sets the group to use to display this block in the Inspector

***

### inputsAreExclusive

> **inputsAreExclusive**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L55)

Gets or sets a boolean indicating that only one input can be connected at a time

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`inputsAreExclusive`](NodeMaterialBlock.md#inputsareexclusive)

***

### isBoolean

> **isBoolean**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L78)

Gets or set a value indicating that this input can only get 0 and 1 values

***

### isConstant

> **isConstant**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L87)

Gets or sets a boolean indicating that the value of this input will not change after a build

***

### matrixMode

> **matrixMode**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L81)

Gets or sets a value used by the Node Material editor to determine how to configure the current value if it is a matrix

***

### max

> **max**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L75)

Gets or set a value used to limit the range of float values

***

### min

> **min**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L72)

Gets or set a value used to limit the range of float values

***

### onCodeIsReadyObservable

> **onCodeIsReadyObservable**: [`Observable`](Observable.md)\<[`NodeMaterialBlock`](NodeMaterialBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L52)

Observable raised when the block code is ready (if the code loading is async)

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`onCodeIsReadyObservable`](NodeMaterialBlock.md#oncodeisreadyobservable)

***

### onValueChangedObservable

> **onValueChangedObservable**: [`Observable`](Observable.md)\<`InputBlock`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L93)

Gets an observable raised when the value is changed

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L99)

Gets or sets the unique id of the node

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`uniqueId`](NodeMaterialBlock.md#uniqueid)

***

### visibleInInspector

> **visibleInInspector**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L216)

Gets or sets a boolean indicating that this input can be edited in the Inspector (false by default)

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`visibleInInspector`](NodeMaterialBlock.md#visibleininspector)

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:219](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L219)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`visibleOnFrame`](NodeMaterialBlock.md#visibleonframe)

## Accessors

### animationType

#### Get Signature

> **get** **animationType**(): [`AnimatedInputBlockTypes`](../enumerations/AnimatedInputBlockTypes.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:326](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L326)

Gets or sets the type of animation applied to the input

##### Returns

[`AnimatedInputBlockTypes`](../enumerations/AnimatedInputBlockTypes.md)

#### Set Signature

> **set** **animationType**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:330](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L330)

##### Parameters

###### value

[`AnimatedInputBlockTypes`](../enumerations/AnimatedInputBlockTypes.md)

##### Returns

`void`

***

### associatedVariableName

#### Get Signature

> **get** **associatedVariableName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:317](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L317)

Gets or sets the associated variable name in the shader

##### Returns

`string`

#### Set Signature

> **set** **associatedVariableName**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:321](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L321)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### buildId

#### Get Signature

> **get** **buildId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L151)

Gets or sets the build Id

##### Returns

`number`

#### Set Signature

> **set** **buildId**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L155)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`buildId`](NodeMaterialBlock.md#buildid)

***

### codeIsReady

#### Get Signature

> **get** **codeIsReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L81)

Gets a boolean indicating that this block has is code ready to be used

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`codeIsReady`](NodeMaterialBlock.md#codeisready)

***

### declarationVariableName

#### Get Signature

> **get** **declarationVariableName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L310)

Gets the declaration variable name in the shader

##### Returns

`string`

***

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L176)

Gets the list of input points

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`inputs`](NodeMaterialBlock.md#inputs)

***

### isAttribute

#### Get Signature

> **get** **isAttribute**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:360](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L360)

Gets or sets a boolean indicating that this connection point is coming from an attribute.
In this case the connection point name must be the name of the attribute to use
Can only be set on inputs

##### Returns

`boolean`

#### Set Signature

> **set** **isAttribute**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:364](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L364)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isFinalMerger

#### Get Signature

> **get** **isFinalMerger**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L116)

Gets a boolean indicating that this block is an end block (e.g. it is generating a system value)

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`isFinalMerger`](NodeMaterialBlock.md#isfinalmerger)

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L123)

Gets a boolean indicating that this block is an input (e.g. it sends data to the shader)

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`isInput`](NodeMaterialBlock.md#isinput)

***

### isLoop

#### Get Signature

> **get** **isLoop**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L144)

Gets a boolean indicating if this block is a loop

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`isLoop`](NodeMaterialBlock.md#isloop)

***

### isSystemValue

#### Get Signature

> **get** **isSystemValue**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:385](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L385)

Gets a boolean indicating that the current connection point is a system value

##### Returns

`boolean`

***

### isTeleportIn

#### Get Signature

> **get** **isTeleportIn**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L137)

Gets a boolean indicating if this block is a teleport in

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`isTeleportIn`](NodeMaterialBlock.md#isteleportin)

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L130)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`isTeleportOut`](NodeMaterialBlock.md#isteleportout)

***

### isUndefined

#### Get Signature

> **get** **isUndefined**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L337)

Gets a boolean indicating that this connection point not defined yet

##### Returns

`boolean`

***

### isUniform

#### Get Signature

> **get** **isUniform**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:346](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L346)

Gets or sets a boolean indicating that this connection point is coming from an uniform.
In this case the connection point name must be the name of the uniform to use.
Can only be set on inputs

##### Returns

`boolean`

#### Set Signature

> **set** **isUniform**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L350)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isUnique

#### Get Signature

> **get** **isUnique**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L109)

Gets a boolean indicating that this block can only be used once per NodeMaterial

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`isUnique`](NodeMaterialBlock.md#isunique)

***

### isVarying

#### Get Signature

> **get** **isVarying**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L373)

Gets or sets a boolean indicating that this connection point is generating a varying variable.
Can only be set on exit points

##### Returns

`boolean`

#### Set Signature

> **set** **isVarying**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:377](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L377)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L74)

Gets the name of the block

##### Returns

`string`

#### Set Signature

> **set** **name**(`newName`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L88)

Sets the name of the block. Will check if the name is valid.

##### Parameters

###### newName

`string`

##### Returns

`void`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`name`](NodeMaterialBlock.md#name)

***

### output

#### Get Signature

> **get** **output**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:243](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L243)

Gets the output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L181)

Gets the list of output points

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`outputs`](NodeMaterialBlock.md#outputs)

***

### systemValue

#### Get Signature

> **get** **systemValue**(): [`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterialSystemValues`](../enumerations/NodeMaterialSystemValues.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:392](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L392)

Gets or sets the current well known value or null if not defined as a system value

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterialSystemValues`](../enumerations/NodeMaterialSystemValues.md)\>

#### Set Signature

> **set** **systemValue**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:396](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L396)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterialSystemValues`](../enumerations/NodeMaterialSystemValues.md)\>

##### Returns

`void`

***

### target

#### Get Signature

> **get** **target**(): [`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L162)

Gets or sets the target of the block

##### Returns

[`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

#### Set Signature

> **set** **target**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L166)

##### Parameters

###### value

[`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

##### Returns

`void`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`target`](NodeMaterialBlock.md#target)

***

### type

#### Get Signature

> **get** **type**(): [`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L104)

Gets or sets the connection point type (default is float)

##### Returns

[`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)

***

### value

#### Get Signature

> **get** **value**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:274](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L274)

Gets or sets the value of that point.
Please note that this value will be ignored if valueCallback is defined

##### Returns

`any`

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:278](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L278)

##### Parameters

###### value

`any`

##### Returns

`void`

***

### valueCallback

#### Get Signature

> **get** **valueCallback**(): () => `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:298](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L298)

Gets or sets a callback used to get the value of that point.
Please note that setting this value will force the connection point to ignore the value property

##### Returns

() => `any`

#### Set Signature

> **set** **valueCallback**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:302](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L302)

##### Parameters

###### value

() => `any`

##### Returns

`void`

***

### willBeGeneratedIntoVertexShaderFromFragmentShader

#### Get Signature

> **get** **willBeGeneratedIntoVertexShaderFromFragmentShader**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:551](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L551)

Gets a boolean indicating that the code of this block will be promoted to vertex shader even if connected to fragment output

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`willBeGeneratedIntoVertexShaderFromFragmentShader`](NodeMaterialBlock.md#willbegeneratedintovertexshaderfromfragmentshader)

## Methods

### \_deserialize()

> **\_deserialize**(`serializationObject`, `scene`, `rootUrl`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:920](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L920)

Deserializes the block

#### Parameters

##### serializationObject

`any`

defines the serialized object

##### scene

[`Scene`](Scene.md)

defines the scene

##### rootUrl

`string`

defines the root URL

#### Returns

`void`

#### Overrides

`NodeMaterialBlock._deserialize`

***

### animate()

> **animate**(`scene`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:414](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L414)

Animate the input if animationType !== None

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the rendering scene

#### Returns

`void`

***

### autoConfigure()

> **autoConfigure**(`material`, `additionalFilteringInfo?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:535](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L535)

Lets the block try to connect some inputs automatically

#### Parameters

##### material

[`NodeMaterial`](NodeMaterial.md)

defines the hosting NodeMaterial

##### additionalFilteringInfo?

(`node`) => `boolean`

optional additional filtering condition when looking for compatible blocks

#### Returns

`void`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`autoConfigure`](NodeMaterialBlock.md#autoconfigure)

***

### bind()

> **bind**(`effect`, `nodeMaterial`, `mesh?`, `subMesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:276](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L276)

Bind data to effect. Will only be called for blocks with isBindable === true

#### Parameters

##### effect

[`Effect`](Effect.md)

defines the effect to bind data to

##### nodeMaterial

[`NodeMaterial`](NodeMaterial.md)

defines the hosting NodeMaterial

##### mesh?

[`Mesh`](Mesh.md)

defines the mesh that will be rendered

##### subMesh?

[`SubMesh`](SubMesh.md)

defines the submesh that will be rendered

#### Returns

`void`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`bind`](NodeMaterialBlock.md#bind)

***

### build()

> **build**(`state`, `activeBlocks`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:686](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L686)

Compile the current node and generate the shader code

#### Parameters

##### state

`NodeMaterialBuildState`

defines the current compilation state (uniforms, samplers, current string)

##### activeBlocks

[`NodeMaterialBlock`](NodeMaterialBlock.md)[]

defines the list of active blocks (i.e. blocks to compile)

#### Returns

`boolean`

true if already built

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`build`](NodeMaterialBlock.md#build)

***

### clone()

> **clone**(`scene`, `rootUrl?`): [`NodeMaterialBlock`](NodeMaterialBlock.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:909](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L909)

Clone the current block to a new identical block

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### rootUrl?

`string` = `""`

defines the root URL to use to load textures and relative dependencies

#### Returns

[`NodeMaterialBlock`](NodeMaterialBlock.md) \| `null`

a copy of the current block

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`clone`](NodeMaterialBlock.md#clone)

***

### connectTo()

> **connectTo**(`other`, `options?`): `InputBlock` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:444](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L444)

Connect current block with another block

#### Parameters

##### other

[`NodeMaterialBlock`](NodeMaterialBlock.md)

defines the block to connect with

##### options?

define the various options to help pick the right connections

###### input?

`string`

###### output?

`string`

###### outputSwizzle?

`string`

#### Returns

`InputBlock` \| `undefined`

the current block

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`connectTo`](NodeMaterialBlock.md#connectto)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:875](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L875)

Releases the resources held by the block

#### Returns

`void`

#### Overrides

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`dispose`](NodeMaterialBlock.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:406](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L406)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`getClassName`](NodeMaterialBlock.md#getclassname)

***

### getFirstAvailableInput()

> **getFirstAvailableInput**(`forOutput?`): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:367](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L367)

Will return the first available input e.g. the first one which is not an uniform or an attribute

#### Parameters

##### forOutput?

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)\> = `null`

defines an optional connection point to check compatibility with

#### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

the first available input or null

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`getFirstAvailableInput`](NodeMaterialBlock.md#getfirstavailableinput)

***

### getFirstAvailableOutput()

> **getFirstAvailableOutput**(`forBlock?`): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:389](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L389)

Will return the first available output e.g. the first one which is not yet connected and not a varying

#### Parameters

##### forBlock?

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterialBlock`](NodeMaterialBlock.md)\> = `null`

defines an optional block to check compatibility with

#### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

the first available input or null

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`getFirstAvailableOutput`](NodeMaterialBlock.md#getfirstavailableoutput)

***

### getInputByName()

> **getInputByName**(`name`): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L190)

Find an input by its name

#### Parameters

##### name

`string`

defines the name of the input to look for

#### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

the input or null if not found

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`getInputByName`](NodeMaterialBlock.md#getinputbyname)

***

### getOutputByName()

> **getOutputByName**(`name`): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L205)

Find an output by its name

#### Parameters

##### name

`string`

defines the name of the output to look for

#### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

the output or null if not found

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`getOutputByName`](NodeMaterialBlock.md#getoutputbyname)

***

### getSiblingOutput()

> **getSiblingOutput**(`current`): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:404](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L404)

Gets the sibling of the given output

#### Parameters

##### current

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

defines the current output

#### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

the next output in the list or null

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`getSiblingOutput`](NodeMaterialBlock.md#getsiblingoutput)

***

### initialize()

> **initialize**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:453](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L453)

Initialize the block

#### Returns

`void`

#### Overrides

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`initialize`](NodeMaterialBlock.md#initialize)

***

### initializeDefines()

> **initializeDefines**(`defines`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:512](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L512)

Initialize defines for shader compilation

#### Parameters

##### defines

`NodeMaterialDefines`

defines the material defines to update

#### Returns

`void`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`initializeDefines`](NodeMaterialBlock.md#initializedefines)

***

### isAnAncestorOf()

> **isAnAncestorOf**(`block`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:419](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L419)

Checks if the current block is an ancestor of a given block

#### Parameters

##### block

[`NodeMaterialBlock`](NodeMaterialBlock.md)

defines the potential descendant block to check

#### Returns

`boolean`

true if block is a descendant

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`isAnAncestorOf`](NodeMaterialBlock.md#isanancestorof)

***

### isConnectedInFragmentShader()

> **isConnectedInFragmentShader**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L310)

Gets a boolean indicating that this connection will be used in the fragment shader

#### Returns

`boolean`

true if connected in fragment shader

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`isConnectedInFragmentShader`](NodeMaterialBlock.md#isconnectedinfragmentshader)

***

### isReady()

> **isReady**(`mesh`, `nodeMaterial`, `defines`, `useInstances?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:582](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L582)

Checks if the block is ready

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to be rendered

##### nodeMaterial

[`NodeMaterial`](NodeMaterial.md)

defines the node material requesting the update

##### defines

`NodeMaterialDefines`

defines the material defines to update

##### useInstances?

`boolean` = `false`

specifies that instances should be used

#### Returns

`boolean`

true if the block is ready

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`isReady`](NodeMaterialBlock.md#isready)

***

### prepareDefines()

> **prepareDefines**(`defines`, `nodeMaterial`, `mesh?`, `useInstances?`, `subMesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:525](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L525)

Update defines for shader compilation

#### Parameters

##### defines

`NodeMaterialDefines`

defines the material defines to update

##### nodeMaterial

[`NodeMaterial`](NodeMaterial.md)

defines the node material requesting the update

##### mesh?

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to be rendered

##### useInstances?

`boolean` = `false`

specifies that instances should be used

##### subMesh?

[`SubMesh`](SubMesh.md)

defines which submesh to render

#### Returns

`void`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`prepareDefines`](NodeMaterialBlock.md#preparedefines)

***

### provideFallbacks()

> **provideFallbacks**(`fallbacks`, `mesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:503](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L503)

Add potential fallbacks if shader compilation fails

#### Parameters

##### fallbacks

[`EffectFallbacks`](EffectFallbacks.md)

defines the current prioritized list of fallbacks

##### mesh?

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to be rendered

#### Returns

`void`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`provideFallbacks`](NodeMaterialBlock.md#providefallbacks)

***

### registerInput()

> **registerInput**(`name`, `type`, `isOptional?`, `target?`, `point?`): `InputBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:323](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L323)

Register a new input. Must be called inside a block constructor

#### Parameters

##### name

`string`

defines the connection point name

##### type

[`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)

defines the connection point type

##### isOptional?

`boolean` = `false`

defines a boolean indicating that this input can be omitted

##### target?

[`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

defines the target to use to limit the connection point (will be VertexAndFragment by default)

##### point?

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

an already created connection point. If not provided, create a new one

#### Returns

`InputBlock`

the current block

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`registerInput`](NodeMaterialBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `target?`, `point?`): `InputBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L350)

Register a new output. Must be called inside a block constructor

#### Parameters

##### name

`string`

defines the connection point name

##### type

[`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)

defines the connection point type

##### target?

[`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

defines the target to use to limit the connection point (will be VertexAndFragment by default)

##### point?

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

an already created connection point. If not provided, create a new one

#### Returns

`InputBlock`

the current block

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`registerOutput`](NodeMaterialBlock.md#registeroutput)

***

### replaceRepeatableContent()

> **replaceRepeatableContent**(`vertexShaderState`, `defines`, `mesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:546](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L546)

Function called when a block is declared as repeatable content generator

#### Parameters

##### vertexShaderState

`NodeMaterialBuildState`

defines the current compilation state for the vertex shader

##### defines

`NodeMaterialDefines`

defines the material defines to update

##### mesh?

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to be rendered

#### Returns

`void`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`replaceRepeatableContent`](NodeMaterialBlock.md#replacerepeatablecontent)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:885](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L885)

Serializes the block

#### Returns

`any`

the serialized object

#### Overrides

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`serialize`](NodeMaterialBlock.md#serialize)

***

### setAsAttribute()

> **setAsAttribute**(`attributeName?`): `InputBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:252](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L252)

Set the source of this connection point to a vertex attribute

#### Parameters

##### attributeName?

`string`

defines the attribute name (position, uv, normal, etc...). If not specified it will take the connection point name

#### Returns

`InputBlock`

the current connection point

***

### setAsSystemValue()

> **setAsSystemValue**(`value`): `InputBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:265](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L265)

Set the source of this connection point to a system value

#### Parameters

##### value

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterialSystemValues`](../enumerations/NodeMaterialSystemValues.md)\>

define the system value to use (world, view, etc...) or null to switch to manual value

#### Returns

`InputBlock`

the current connection point

***

### setDefaultValue()

> **setDefaultValue**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:460](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L460)

Set the input block to its default value (based on its type)

#### Returns

`void`

***

### updateUniformsAndSamples()

> **updateUniformsAndSamples**(`state`, `nodeMaterial`, `defines`, `uniformBuffers`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:493](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L493)

Add uniforms, samplers and uniform buffers at compilation time

#### Parameters

##### state

`NodeMaterialBuildState`

defines the state to update

##### nodeMaterial

[`NodeMaterial`](NodeMaterial.md)

defines the node material requesting the update

##### defines

`NodeMaterialDefines`

defines the material defines to update

##### uniformBuffers

`string`[]

defines the list of uniform buffer names

#### Returns

`void`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`updateUniformsAndSamples`](NodeMaterialBlock.md#updateuniformsandsamples)

***

### validateBlockName()

> **validateBlockName**(`newName`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Input/inputBlock.pure.ts#L233)

Validates if a name is a reserve word.

#### Parameters

##### newName

`string`

the new name to be given to the node.

#### Returns

`boolean`

false if the name is a reserve word, else true.

#### Overrides

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`validateBlockName`](NodeMaterialBlock.md#validateblockname)
