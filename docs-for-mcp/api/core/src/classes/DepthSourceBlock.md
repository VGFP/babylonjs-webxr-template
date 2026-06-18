[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DepthSourceBlock

# Class: DepthSourceBlock

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/depthSourceBlock.pure.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/depthSourceBlock.pure.ts#L13)

Block used to provide an depth texture for a TextureBlock

## Extends

- [`ImageSourceBlock`](ImageSourceBlock.md)

## Constructors

### Constructor

> **new DepthSourceBlock**(`name`): `DepthSourceBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/depthSourceBlock.pure.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/depthSourceBlock.pure.ts#L18)

Creates a new DepthSourceBlock

#### Parameters

##### name

`string`

defines the block name

#### Returns

`DepthSourceBlock`

#### Overrides

[`ImageSourceBlock`](ImageSourceBlock.md).[`constructor`](ImageSourceBlock.md#constructor)

## Properties

### comments

> **comments**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L104)

Gets or sets the comments associated with this block

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`comments`](ImageSourceBlock.md#comments)

***

### inputsAreExclusive

> **inputsAreExclusive**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L55)

Gets or sets a boolean indicating that only one input can be connected at a time

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`inputsAreExclusive`](ImageSourceBlock.md#inputsareexclusive)

***

### onCodeIsReadyObservable

> **onCodeIsReadyObservable**: [`Observable`](Observable.md)\<[`NodeMaterialBlock`](NodeMaterialBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L52)

Observable raised when the block code is ready (if the code loading is async)

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`onCodeIsReadyObservable`](ImageSourceBlock.md#oncodeisreadyobservable)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L99)

Gets or sets the unique id of the node

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`uniqueId`](ImageSourceBlock.md#uniqueid)

***

### visibleInInspector

> **visibleInInspector**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L216)

Gets or sets a boolean indicating that this input can be edited in the Inspector (false by default)

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`visibleInInspector`](ImageSourceBlock.md#visibleininspector)

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:219](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L219)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`visibleOnFrame`](ImageSourceBlock.md#visibleonframe)

## Accessors

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

[`ImageSourceBlock`](ImageSourceBlock.md).[`buildId`](ImageSourceBlock.md#buildid)

***

### codeIsReady

#### Get Signature

> **get** **codeIsReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L81)

Gets a boolean indicating that this block has is code ready to be used

##### Returns

`boolean`

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`codeIsReady`](ImageSourceBlock.md#codeisready)

***

### dimensions

#### Get Signature

> **get** **dimensions**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/imageSourceBlock.pure.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/imageSourceBlock.pure.ts#L139)

Gets the dimension component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`dimensions`](ImageSourceBlock.md#dimensions)

***

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L176)

Gets the list of input points

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`inputs`](ImageSourceBlock.md#inputs)

***

### isFinalMerger

#### Get Signature

> **get** **isFinalMerger**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L116)

Gets a boolean indicating that this block is an end block (e.g. it is generating a system value)

##### Returns

`boolean`

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`isFinalMerger`](ImageSourceBlock.md#isfinalmerger)

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L123)

Gets a boolean indicating that this block is an input (e.g. it sends data to the shader)

##### Returns

`boolean`

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`isInput`](ImageSourceBlock.md#isinput)

***

### isLoop

#### Get Signature

> **get** **isLoop**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L144)

Gets a boolean indicating if this block is a loop

##### Returns

`boolean`

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`isLoop`](ImageSourceBlock.md#isloop)

***

### isTeleportIn

#### Get Signature

> **get** **isTeleportIn**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L137)

Gets a boolean indicating if this block is a teleport in

##### Returns

`boolean`

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`isTeleportIn`](ImageSourceBlock.md#isteleportin)

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L130)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`isTeleportOut`](ImageSourceBlock.md#isteleportout)

***

### isUnique

#### Get Signature

> **get** **isUnique**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L109)

Gets a boolean indicating that this block can only be used once per NodeMaterial

##### Returns

`boolean`

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`isUnique`](ImageSourceBlock.md#isunique)

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

[`ImageSourceBlock`](ImageSourceBlock.md).[`name`](ImageSourceBlock.md#name)

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L181)

Gets the list of output points

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`outputs`](ImageSourceBlock.md#outputs)

***

### samplerName

#### Get Signature

> **get** **samplerName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/imageSourceBlock.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/imageSourceBlock.pure.ts#L71)

Gets the sampler name associated with this image source

##### Returns

`string`

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`samplerName`](ImageSourceBlock.md#samplername)

***

### source

#### Get Signature

> **get** **source**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/imageSourceBlock.pure.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/imageSourceBlock.pure.ts#L132)

Gets the output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`source`](ImageSourceBlock.md#source)

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

[`ImageSourceBlock`](ImageSourceBlock.md).[`target`](ImageSourceBlock.md#target)

***

### texture

#### Get Signature

> **get** **texture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/depthSourceBlock.pure.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/depthSourceBlock.pure.ts#L25)

Gets or sets the texture associated with the node

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\>

#### Set Signature

> **set** **texture**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/depthSourceBlock.pure.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/depthSourceBlock.pure.ts#L29)

Gets or sets the texture associated with the node

##### Parameters

###### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\>

##### Returns

`void`

#### Overrides

[`ImageSourceBlock`](ImageSourceBlock.md).[`texture`](ImageSourceBlock.md#texture)

***

### willBeGeneratedIntoVertexShaderFromFragmentShader

#### Get Signature

> **get** **willBeGeneratedIntoVertexShaderFromFragmentShader**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:551](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L551)

Gets a boolean indicating that the code of this block will be promoted to vertex shader even if connected to fragment output

##### Returns

`boolean`

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`willBeGeneratedIntoVertexShaderFromFragmentShader`](ImageSourceBlock.md#willbegeneratedintovertexshaderfromfragmentshader)

## Methods

### \_deserialize()

> **\_deserialize**(`serializationObject`, `scene`, `rootUrl`, `urlRewriter?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/imageSourceBlock.pure.ts:224](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/imageSourceBlock.pure.ts#L224)

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

##### urlRewriter?

(`url`) => `string`

optional url rewriter

#### Returns

`void`

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`_deserialize`](ImageSourceBlock.md#_deserialize)

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

[`ImageSourceBlock`](ImageSourceBlock.md).[`autoConfigure`](ImageSourceBlock.md#autoconfigure)

***

### bind()

> **bind**(`effect`, `nodeMaterial`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/depthSourceBlock.pure.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/depthSourceBlock.pure.ts#L38)

Bind data to effect

#### Parameters

##### effect

[`Effect`](Effect.md)

the effect to bind to

##### nodeMaterial

[`NodeMaterial`](NodeMaterial.md)

the node material

#### Returns

`void`

#### Overrides

[`ImageSourceBlock`](ImageSourceBlock.md).[`bind`](ImageSourceBlock.md#bind)

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

[`ImageSourceBlock`](ImageSourceBlock.md).[`build`](ImageSourceBlock.md#build)

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

[`ImageSourceBlock`](ImageSourceBlock.md).[`clone`](ImageSourceBlock.md#clone)

***

### connectTo()

> **connectTo**(`other`, `options?`): `DepthSourceBlock` \| `undefined`

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

`DepthSourceBlock` \| `undefined`

the current block

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`connectTo`](ImageSourceBlock.md#connectto)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:997](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L997)

Release resources

#### Returns

`void`

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`dispose`](ImageSourceBlock.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/depthSourceBlock.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/depthSourceBlock.pure.ts#L59)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`ImageSourceBlock`](ImageSourceBlock.md).[`getClassName`](ImageSourceBlock.md#getclassname)

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

[`ImageSourceBlock`](ImageSourceBlock.md).[`getFirstAvailableInput`](ImageSourceBlock.md#getfirstavailableinput)

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

[`ImageSourceBlock`](ImageSourceBlock.md).[`getFirstAvailableOutput`](ImageSourceBlock.md#getfirstavailableoutput)

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

[`ImageSourceBlock`](ImageSourceBlock.md).[`getInputByName`](ImageSourceBlock.md#getinputbyname)

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

[`ImageSourceBlock`](ImageSourceBlock.md).[`getOutputByName`](ImageSourceBlock.md#getoutputbyname)

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

[`ImageSourceBlock`](ImageSourceBlock.md).[`getSiblingOutput`](ImageSourceBlock.md#getsiblingoutput)

***

### initialize()

> **initialize**(`state`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L264)

Initialize the block and prepare the context for build

#### Parameters

##### state

`NodeMaterialBuildState`

defines the state that will be used for the build

#### Returns

`void`

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`initialize`](ImageSourceBlock.md#initialize)

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

[`ImageSourceBlock`](ImageSourceBlock.md).[`initializeDefines`](ImageSourceBlock.md#initializedefines)

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

[`ImageSourceBlock`](ImageSourceBlock.md).[`isAnAncestorOf`](ImageSourceBlock.md#isanancestorof)

***

### isConnectedInFragmentShader()

> **isConnectedInFragmentShader**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L310)

Gets a boolean indicating that this connection will be used in the fragment shader

#### Returns

`boolean`

true if connected in fragment shader

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`isConnectedInFragmentShader`](ImageSourceBlock.md#isconnectedinfragmentshader)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/depthSourceBlock.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/depthSourceBlock.pure.ts#L51)

Checks if the block is ready

#### Returns

`boolean`

true if ready

#### Overrides

[`ImageSourceBlock`](ImageSourceBlock.md).[`isReady`](ImageSourceBlock.md#isready)

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

[`ImageSourceBlock`](ImageSourceBlock.md).[`prepareDefines`](ImageSourceBlock.md#preparedefines)

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

[`ImageSourceBlock`](ImageSourceBlock.md).[`provideFallbacks`](ImageSourceBlock.md#providefallbacks)

***

### registerInput()

> **registerInput**(`name`, `type`, `isOptional?`, `target?`, `point?`): `DepthSourceBlock`

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

`DepthSourceBlock`

the current block

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`registerInput`](ImageSourceBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `target?`, `point?`): `DepthSourceBlock`

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

`DepthSourceBlock`

the current block

#### Inherited from

[`ImageSourceBlock`](ImageSourceBlock.md).[`registerOutput`](ImageSourceBlock.md#registeroutput)

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

[`ImageSourceBlock`](ImageSourceBlock.md).[`replaceRepeatableContent`](ImageSourceBlock.md#replacerepeatablecontent)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/depthSourceBlock.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/Dual/depthSourceBlock.pure.ts#L71)

Serializes the block

#### Returns

`any`

the serialized object

#### Overrides

[`ImageSourceBlock`](ImageSourceBlock.md).[`serialize`](ImageSourceBlock.md#serialize)

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

[`ImageSourceBlock`](ImageSourceBlock.md).[`updateUniformsAndSamples`](ImageSourceBlock.md#updateuniformsandsamples)

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

[`ImageSourceBlock`](ImageSourceBlock.md).[`validateBlockName`](ImageSourceBlock.md#validateblockname)
