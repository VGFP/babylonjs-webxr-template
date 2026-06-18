[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SmartFilterTextureBlock

# Class: SmartFilterTextureBlock

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts#L24)

Base block used for creating Smart Filter shader blocks for the SFE framework.
This block extends the functionality of CurrentScreenBlock, as both are used
to represent arbitrary 2D textures to compose, and work similarly.

## Extends

- [`CurrentScreenBlock`](CurrentScreenBlock.md)

## Constructors

### Constructor

> **new SmartFilterTextureBlock**(`name`): `SmartFilterTextureBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts#L60)

Create a new SmartFilterTextureBlock

#### Parameters

##### name

`string`

defines the block name

#### Returns

`SmartFilterTextureBlock`

#### Overrides

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`constructor`](CurrentScreenBlock.md#constructor)

## Properties

### comments

> **comments**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L104)

Gets or sets the comments associated with this block

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`comments`](CurrentScreenBlock.md#comments)

***

### convertToGammaSpace

> **convertToGammaSpace**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts#L49)

Gets or sets a boolean indicating if content needs to be converted to gamma space

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`convertToGammaSpace`](CurrentScreenBlock.md#converttogammaspace)

***

### convertToLinearSpace

> **convertToLinearSpace**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts#L54)

Gets or sets a boolean indicating if content needs to be converted to linear space

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`convertToLinearSpace`](CurrentScreenBlock.md#converttolinearspace)

***

### inputsAreExclusive

> **inputsAreExclusive**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L55)

Gets or sets a boolean indicating that only one input can be connected at a time

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`inputsAreExclusive`](CurrentScreenBlock.md#inputsareexclusive)

***

### isMainInput

> **isMainInput**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts#L31)

A boolean indicating whether this block should be the main input for the SFE pipeline.
If true, it can be used in SFE for auto-disabling.

***

### onCodeIsReadyObservable

> **onCodeIsReadyObservable**: [`Observable`](Observable.md)\<[`NodeMaterialBlock`](NodeMaterialBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L52)

Observable raised when the block code is ready (if the code loading is async)

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`onCodeIsReadyObservable`](CurrentScreenBlock.md#oncodeisreadyobservable)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L99)

Gets or sets the unique id of the node

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`uniqueId`](CurrentScreenBlock.md#uniqueid)

***

### visibleInInspector

> **visibleInInspector**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L216)

Gets or sets a boolean indicating that this input can be edited in the Inspector (false by default)

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`visibleInInspector`](CurrentScreenBlock.md#visibleininspector)

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:219](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L219)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`visibleOnFrame`](CurrentScreenBlock.md#visibleonframe)

## Accessors

### a

#### Get Signature

> **get** **a**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts#L134)

Gets the a output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`a`](CurrentScreenBlock.md#a)

***

### b

#### Get Signature

> **get** **b**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts#L127)

Gets the b output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`b`](CurrentScreenBlock.md#b)

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

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`buildId`](CurrentScreenBlock.md#buildid)

***

### codeIsReady

#### Get Signature

> **get** **codeIsReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L81)

Gets a boolean indicating that this block has is code ready to be used

##### Returns

`boolean`

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`codeIsReady`](CurrentScreenBlock.md#codeisready)

***

### g

#### Get Signature

> **get** **g**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts#L120)

Gets the g output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`g`](CurrentScreenBlock.md#g)

***

### hasImageSource

#### Get Signature

> **get** **hasImageSource**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts#L82)

Gets a boolean indicating that this block is linked to an ImageSourceBlock

##### Returns

`boolean`

***

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L176)

Gets the list of input points

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`inputs`](CurrentScreenBlock.md#inputs)

***

### isFinalMerger

#### Get Signature

> **get** **isFinalMerger**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L116)

Gets a boolean indicating that this block is an end block (e.g. it is generating a system value)

##### Returns

`boolean`

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`isFinalMerger`](CurrentScreenBlock.md#isfinalmerger)

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L123)

Gets a boolean indicating that this block is an input (e.g. it sends data to the shader)

##### Returns

`boolean`

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`isInput`](CurrentScreenBlock.md#isinput)

***

### isLoop

#### Get Signature

> **get** **isLoop**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L144)

Gets a boolean indicating if this block is a loop

##### Returns

`boolean`

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`isLoop`](CurrentScreenBlock.md#isloop)

***

### isTeleportIn

#### Get Signature

> **get** **isTeleportIn**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L137)

Gets a boolean indicating if this block is a teleport in

##### Returns

`boolean`

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`isTeleportIn`](CurrentScreenBlock.md#isteleportin)

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L130)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`isTeleportOut`](CurrentScreenBlock.md#isteleportout)

***

### isUnique

#### Get Signature

> **get** **isUnique**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L109)

Gets a boolean indicating that this block can only be used once per NodeMaterial

##### Returns

`boolean`

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`isUnique`](CurrentScreenBlock.md#isunique)

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

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`name`](CurrentScreenBlock.md#name)

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L181)

Gets the list of output points

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`outputs`](CurrentScreenBlock.md#outputs)

***

### r

#### Get Signature

> **get** **r**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts#L113)

Gets the r output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`r`](CurrentScreenBlock.md#r)

***

### rgb

#### Get Signature

> **get** **rgb**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts#L106)

Gets the rgb output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`rgb`](CurrentScreenBlock.md#rgb)

***

### rgba

#### Get Signature

> **get** **rgba**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts#L99)

Gets the rgba output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`rgba`](CurrentScreenBlock.md#rgba)

***

### samplerName

#### Get Signature

> **get** **samplerName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts#L36)

Gets the sampler name associated with this texture

##### Returns

`string`

#### Overrides

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`samplerName`](CurrentScreenBlock.md#samplername)

***

### source

#### Get Signature

> **get** **source**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts#L75)

Gets the source input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### target

#### Get Signature

> **get** **target**(): [`Fragment`](../enumerations/NodeMaterialBlockTargets.md#fragment) \| [`VertexAndFragment`](../enumerations/NodeMaterialBlockTargets.md#vertexandfragment)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts#L162)

##### Returns

[`Fragment`](../enumerations/NodeMaterialBlockTargets.md#fragment) \| [`VertexAndFragment`](../enumerations/NodeMaterialBlockTargets.md#vertexandfragment)

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`target`](CurrentScreenBlock.md#target)

***

### texture

#### Get Signature

> **get** **texture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts#L46)

Gets or sets the texture associated with this block

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

#### Set Signature

> **set** **texture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts#L52)

Gets or sets the texture associated with the node

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

#### Overrides

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`texture`](CurrentScreenBlock.md#texture)

***

### uv

#### Get Signature

> **get** **uv**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts#L92)

Gets the uv input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`uv`](CurrentScreenBlock.md#uv)

***

### willBeGeneratedIntoVertexShaderFromFragmentShader

#### Get Signature

> **get** **willBeGeneratedIntoVertexShaderFromFragmentShader**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:551](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L551)

Gets a boolean indicating that the code of this block will be promoted to vertex shader even if connected to fragment output

##### Returns

`boolean`

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`willBeGeneratedIntoVertexShaderFromFragmentShader`](CurrentScreenBlock.md#willbegeneratedintovertexshaderfromfragmentshader)

## Methods

### \_deserialize()

> **\_deserialize**(`serializationObject`, `scene`, `rootUrl`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts:167](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts#L167)

Deserializes the block

#### Parameters

##### serializationObject

`any`

the serialization object

##### scene

[`Scene`](Scene.md)

the scene

##### rootUrl

`string`

the root url

#### Returns

`void`

#### Overrides

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`_deserialize`](CurrentScreenBlock.md#_deserialize)

***

### \_postBuildBlock()

> **\_postBuildBlock**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts#L147)

#### Returns

`void`

#### Overrides

`CurrentScreenBlock._postBuildBlock`

***

### autoConfigure()

> **autoConfigure**(`material`, `additionalFilteringInfo?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts#L134)

Auto configure the block based on the material

#### Parameters

##### material

[`NodeMaterial`](NodeMaterial.md)

the node material

##### additionalFilteringInfo?

(`node`) => `boolean`

optional filtering info

#### Returns

`void`

#### Overrides

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`autoConfigure`](CurrentScreenBlock.md#autoconfigure)

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

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`bind`](CurrentScreenBlock.md#bind)

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

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`build`](CurrentScreenBlock.md#build)

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

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`clone`](CurrentScreenBlock.md#clone)

***

### connectTo()

> **connectTo**(`other`, `options?`): `SmartFilterTextureBlock` \| `undefined`

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

`SmartFilterTextureBlock` \| `undefined`

the current block

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`connectTo`](CurrentScreenBlock.md#connectto)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:997](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L997)

Release resources

#### Returns

`void`

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`dispose`](CurrentScreenBlock.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts#L90)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`getClassName`](CurrentScreenBlock.md#getclassname)

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

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`getFirstAvailableInput`](CurrentScreenBlock.md#getfirstavailableinput)

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

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`getFirstAvailableOutput`](CurrentScreenBlock.md#getfirstavailableoutput)

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

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`getInputByName`](CurrentScreenBlock.md#getinputbyname)

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

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`getOutputByName`](CurrentScreenBlock.md#getoutputbyname)

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

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`getSiblingOutput`](CurrentScreenBlock.md#getsiblingoutput)

***

### initialize()

> **initialize**(`state`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts#L98)

Initialize the block and prepare the context for build

#### Parameters

##### state

`NodeMaterialBuildState`

defines the state that will be used for the build

#### Returns

`void`

#### Overrides

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`initialize`](CurrentScreenBlock.md#initialize)

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

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`initializeDefines`](CurrentScreenBlock.md#initializedefines)

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

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`isAnAncestorOf`](CurrentScreenBlock.md#isanancestorof)

***

### isConnectedInFragmentShader()

> **isConnectedInFragmentShader**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L310)

Gets a boolean indicating that this connection will be used in the fragment shader

#### Returns

`boolean`

true if connected in fragment shader

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`isConnectedInFragmentShader`](CurrentScreenBlock.md#isconnectedinfragmentshader)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts:187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts#L187)

Checks if the block is ready

#### Returns

`boolean`

true if ready

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`isReady`](CurrentScreenBlock.md#isready)

***

### prepareDefines()

> **prepareDefines**(`defines`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/currentScreenBlock.pure.ts#L178)

Prepare the list of defines

#### Parameters

##### defines

`NodeMaterialDefines`

the material defines

#### Returns

`void`

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`prepareDefines`](CurrentScreenBlock.md#preparedefines)

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

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`provideFallbacks`](CurrentScreenBlock.md#providefallbacks)

***

### registerInput()

> **registerInput**(`name`, `type`, `isOptional?`, `target?`, `point?`): `SmartFilterTextureBlock`

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

`SmartFilterTextureBlock`

the current block

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`registerInput`](CurrentScreenBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `target?`, `point?`): `SmartFilterTextureBlock`

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

`SmartFilterTextureBlock`

the current block

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`registerOutput`](CurrentScreenBlock.md#registeroutput)

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

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`replaceRepeatableContent`](CurrentScreenBlock.md#replacerepeatablecontent)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/smartFilterTextureBlock.pure.ts#L155)

Serializes the block

#### Returns

`any`

the serialized object

#### Overrides

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`serialize`](CurrentScreenBlock.md#serialize)

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

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`updateUniformsAndSamples`](CurrentScreenBlock.md#updateuniformsandsamples)

***

### validateBlockName()

> **validateBlockName**(`newName`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:643](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L643)

Validates the new name for the block node.

#### Parameters

##### newName

`string`

the new name to be given to the node.

#### Returns

`boolean`

false if the name is a reserve word, else true.

#### Inherited from

[`CurrentScreenBlock`](CurrentScreenBlock.md).[`validateBlockName`](CurrentScreenBlock.md#validateblockname)
