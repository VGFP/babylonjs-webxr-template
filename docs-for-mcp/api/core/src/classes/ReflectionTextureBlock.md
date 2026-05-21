[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ReflectionTextureBlock

# Class: ReflectionTextureBlock

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts#L16)

Block used to read a reflection texture from a sampler

## Extends

- [`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md)

## Constructors

### Constructor

> **new ReflectionTextureBlock**(`name`): `ReflectionTextureBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts#L45)

Create a new ReflectionTextureBlock

#### Parameters

##### name

`string`

defines the block name

#### Returns

`ReflectionTextureBlock`

#### Overrides

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`constructor`](ReflectionTextureBaseBlock.md#constructor)

## Properties

### comments

> **comments**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L104)

Gets or sets the comments associated with this block

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`comments`](ReflectionTextureBaseBlock.md#comments)

***

### generateOnlyFragmentCode

> **generateOnlyFragmentCode**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts#L105)

Indicates that no code should be generated in the vertex shader. Can be useful in some specific circumstances (like when doing ray marching for eg)

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`generateOnlyFragmentCode`](ReflectionTextureBaseBlock.md#generateonlyfragmentcode)

***

### inputsAreExclusive

> **inputsAreExclusive**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L55)

Gets or sets a boolean indicating that only one input can be connected at a time

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`inputsAreExclusive`](ReflectionTextureBaseBlock.md#inputsareexclusive)

***

### onCodeIsReadyObservable

> **onCodeIsReadyObservable**: [`Observable`](Observable.md)\<[`NodeMaterialBlock`](NodeMaterialBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L52)

Observable raised when the block code is ready (if the code loading is async)

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`onCodeIsReadyObservable`](ReflectionTextureBaseBlock.md#oncodeisreadyobservable)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L99)

Gets or sets the unique id of the node

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`uniqueId`](ReflectionTextureBaseBlock.md#uniqueid)

***

### visibleInInspector

> **visibleInInspector**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L216)

Gets or sets a boolean indicating that this input can be edited in the Inspector (false by default)

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`visibleInInspector`](ReflectionTextureBaseBlock.md#visibleininspector)

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L219)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`visibleOnFrame`](ReflectionTextureBaseBlock.md#visibleonframe)

## Accessors

### a

#### Get Signature

> **get** **a**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts#L156)

Gets the a output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### b

#### Get Signature

> **get** **b**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts#L149)

Gets the b output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### buildId

#### Get Signature

> **get** **buildId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L151)

Gets or sets the build Id

##### Returns

`number`

#### Set Signature

> **set** **buildId**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L155)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`buildId`](ReflectionTextureBaseBlock.md#buildid)

***

### cameraPosition

#### Get Signature

> **get** **cameraPosition**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts#L107)

Gets the camera (or eye) position component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Overrides

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`cameraPosition`](ReflectionTextureBaseBlock.md#cameraposition)

***

### codeIsReady

#### Get Signature

> **get** **codeIsReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L81)

Gets a boolean indicating that this block has is code ready to be used

##### Returns

`boolean`

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`codeIsReady`](ReflectionTextureBaseBlock.md#codeisready)

***

### g

#### Get Signature

> **get** **g**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts#L142)

Gets the g output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L176)

Gets the list of input points

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`inputs`](ReflectionTextureBaseBlock.md#inputs)

***

### isFinalMerger

#### Get Signature

> **get** **isFinalMerger**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L116)

Gets a boolean indicating that this block is an end block (e.g. it is generating a system value)

##### Returns

`boolean`

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`isFinalMerger`](ReflectionTextureBaseBlock.md#isfinalmerger)

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L123)

Gets a boolean indicating that this block is an input (e.g. it sends data to the shader)

##### Returns

`boolean`

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`isInput`](ReflectionTextureBaseBlock.md#isinput)

***

### isLoop

#### Get Signature

> **get** **isLoop**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L144)

Gets a boolean indicating if this block is a loop

##### Returns

`boolean`

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`isLoop`](ReflectionTextureBaseBlock.md#isloop)

***

### isTeleportIn

#### Get Signature

> **get** **isTeleportIn**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L137)

Gets a boolean indicating if this block is a teleport in

##### Returns

`boolean`

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`isTeleportIn`](ReflectionTextureBaseBlock.md#isteleportin)

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L130)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`isTeleportOut`](ReflectionTextureBaseBlock.md#isteleportout)

***

### isUnique

#### Get Signature

> **get** **isUnique**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L109)

Gets a boolean indicating that this block can only be used once per NodeMaterial

##### Returns

`boolean`

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`isUnique`](ReflectionTextureBaseBlock.md#isunique)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L74)

Gets the name of the block

##### Returns

`string`

#### Set Signature

> **set** **name**(`newName`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L88)

Sets the name of the block. Will check if the name is valid.

##### Parameters

###### newName

`string`

##### Returns

`void`

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`name`](ReflectionTextureBaseBlock.md#name)

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L181)

Gets the list of output points

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`outputs`](ReflectionTextureBaseBlock.md#outputs)

***

### position

#### Get Signature

> **get** **position**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts#L79)

Gets the world position input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Overrides

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`position`](ReflectionTextureBaseBlock.md#position)

***

### r

#### Get Signature

> **get** **r**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts#L135)

Gets the r output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### rgb

#### Get Signature

> **get** **rgb**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts#L121)

Gets the rgb output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### rgba

#### Get Signature

> **get** **rgba**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts#L128)

Gets the rgba output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### target

#### Get Signature

> **get** **target**(): [`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L162)

Gets or sets the target of the block

##### Returns

[`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

#### Set Signature

> **set** **target**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L166)

##### Parameters

###### value

[`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

##### Returns

`void`

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`target`](ReflectionTextureBaseBlock.md#target)

***

### texture

#### Get Signature

> **get** **texture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts#L75)

Gets or sets the texture associated with the node

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

#### Set Signature

> **set** **texture**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts#L79)

##### Parameters

###### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`texture`](ReflectionTextureBaseBlock.md#texture)

***

### view

#### Get Signature

> **get** **view**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts#L114)

Gets the view input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Overrides

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`view`](ReflectionTextureBaseBlock.md#view)

***

### willBeGeneratedIntoVertexShaderFromFragmentShader

#### Get Signature

> **get** **willBeGeneratedIntoVertexShaderFromFragmentShader**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:551](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L551)

Gets a boolean indicating that the code of this block will be promoted to vertex shader even if connected to fragment output

##### Returns

`boolean`

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`willBeGeneratedIntoVertexShaderFromFragmentShader`](ReflectionTextureBaseBlock.md#willbegeneratedintovertexshaderfromfragmentshader)

***

### world

#### Get Signature

> **get** **world**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts#L100)

Gets the world input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Overrides

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`world`](ReflectionTextureBaseBlock.md#world)

***

### worldNormal

#### Get Signature

> **get** **worldNormal**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts#L93)

Gets the world normal input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Overrides

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`worldNormal`](ReflectionTextureBaseBlock.md#worldnormal)

***

### worldPosition

#### Get Signature

> **get** **worldPosition**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts#L86)

Gets the world position input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Overrides

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`worldPosition`](ReflectionTextureBaseBlock.md#worldposition)

## Methods

### \_deserialize()

> **\_deserialize**(`serializationObject`, `scene`, `rootUrl`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts:622](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts#L622)

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

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`_deserialize`](ReflectionTextureBaseBlock.md#_deserialize)

***

### autoConfigure()

> **autoConfigure**(`material`, `additionalFilteringInfo?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts#L165)

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

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`autoConfigure`](ReflectionTextureBaseBlock.md#autoconfigure)

***

### bind()

> **bind**(`effect`, `nodeMaterial`, `mesh?`, `_subMesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts:280](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts#L280)

Bind data to effect

#### Parameters

##### effect

[`Effect`](Effect.md)

the effect to bind to

##### nodeMaterial

[`NodeMaterial`](NodeMaterial.md)

the node material

##### mesh?

[`Mesh`](Mesh.md)

the mesh to bind for

##### \_subMesh?

[`SubMesh`](SubMesh.md)

the submesh

#### Returns

`void`

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`bind`](ReflectionTextureBaseBlock.md#bind)

***

### build()

> **build**(`state`, `activeBlocks`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:686](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L686)

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

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`build`](ReflectionTextureBaseBlock.md#build)

***

### clone()

> **clone**(`scene`, `rootUrl?`): [`NodeMaterialBlock`](NodeMaterialBlock.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:909](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L909)

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

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`clone`](ReflectionTextureBaseBlock.md#clone)

***

### connectTo()

> **connectTo**(`other`, `options?`): `ReflectionTextureBlock` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:444](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L444)

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

`ReflectionTextureBlock` \| `undefined`

the current block

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`connectTo`](ReflectionTextureBaseBlock.md#connectto)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:997](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L997)

Release resources

#### Returns

`void`

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`dispose`](ReflectionTextureBaseBlock.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBlock.ts#L72)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`getClassName`](ReflectionTextureBaseBlock.md#getclassname)

***

### getFirstAvailableInput()

> **getFirstAvailableInput**(`forOutput?`): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:367](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L367)

Will return the first available input e.g. the first one which is not an uniform or an attribute

#### Parameters

##### forOutput?

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)\> = `null`

defines an optional connection point to check compatibility with

#### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

the first available input or null

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`getFirstAvailableInput`](ReflectionTextureBaseBlock.md#getfirstavailableinput)

***

### getFirstAvailableOutput()

> **getFirstAvailableOutput**(`forBlock?`): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:389](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L389)

Will return the first available output e.g. the first one which is not yet connected and not a varying

#### Parameters

##### forBlock?

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterialBlock`](NodeMaterialBlock.md)\> = `null`

defines an optional block to check compatibility with

#### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

the first available input or null

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`getFirstAvailableOutput`](ReflectionTextureBaseBlock.md#getfirstavailableoutput)

***

### getInputByName()

> **getInputByName**(`name`): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L190)

Find an input by its name

#### Parameters

##### name

`string`

defines the name of the input to look for

#### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

the input or null if not found

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`getInputByName`](ReflectionTextureBaseBlock.md#getinputbyname)

***

### getOutputByName()

> **getOutputByName**(`name`): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:205](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L205)

Find an output by its name

#### Parameters

##### name

`string`

defines the name of the output to look for

#### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

the output or null if not found

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`getOutputByName`](ReflectionTextureBaseBlock.md#getoutputbyname)

***

### getSiblingOutput()

> **getSiblingOutput**(`current`): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:404](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L404)

Gets the sibling of the given output

#### Parameters

##### current

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

defines the current output

#### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

the next output in the list or null

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`getSiblingOutput`](ReflectionTextureBaseBlock.md#getsiblingoutput)

***

### handleFragmentSideCodeReflectionColor()

> **handleFragmentSideCodeReflectionColor**(`state`, `lodVarName?`, `swizzleLookupTexture?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts:525](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts#L525)

Generates the reflection color code for the fragment code path

#### Parameters

##### state

`NodeMaterialBuildState`

defines the build state

##### lodVarName?

`string`

name of the lod variable

##### swizzleLookupTexture?

`string` = `".rgb"`

swizzle to use for the final color variable

#### Returns

`string`

the shader code

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`handleFragmentSideCodeReflectionColor`](ReflectionTextureBaseBlock.md#handlefragmentsidecodereflectioncolor)

***

### handleFragmentSideCodeReflectionCoords()

> **handleFragmentSideCodeReflectionCoords**(`state`, `worldNormalVarName`, `worldPos?`, `onlyReflectionVector?`, `doNotEmitInvertZ?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts:434](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts#L434)

Generates the reflection coords code for the fragment code path

#### Parameters

##### state

`NodeMaterialBuildState`

defines the build state

##### worldNormalVarName

`string`

name of the world normal variable

##### worldPos?

`string`

name of the world position variable. If not provided, will use the world position connected to this block

##### onlyReflectionVector?

`boolean` = `false`

if true, generates code only for the reflection vector computation, not for the reflection coordinates

##### doNotEmitInvertZ?

`boolean` = `false`

if true, does not emit the invertZ code

#### Returns

`string`

the shader code

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`handleFragmentSideCodeReflectionCoords`](ReflectionTextureBaseBlock.md#handlefragmentsidecodereflectioncoords)

***

### handleFragmentSideInits()

> **handleFragmentSideInits**(`state`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts:384](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts#L384)

Handles the inits for the fragment code path

#### Parameters

##### state

`NodeMaterialBuildState`

node material build state

#### Returns

`void`

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`handleFragmentSideInits`](ReflectionTextureBaseBlock.md#handlefragmentsideinits)

***

### handleVertexSide()

> **handleVertexSide**(`state`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts:307](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts#L307)

Gets the code to inject in the vertex shader

#### Parameters

##### state

`NodeMaterialBuildState`

current state of the node material building

#### Returns

`string`

the shader code

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`handleVertexSide`](ReflectionTextureBaseBlock.md#handlevertexside)

***

### initialize()

> **initialize**(`state`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts#L175)

Initialize the block

#### Parameters

##### state

`NodeMaterialBuildState`

the build state

#### Returns

`void`

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`initialize`](ReflectionTextureBaseBlock.md#initialize)

***

### initializeDefines()

> **initializeDefines**(`defines`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:512](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L512)

Initialize defines for shader compilation

#### Parameters

##### defines

`NodeMaterialDefines`

defines the material defines to update

#### Returns

`void`

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`initializeDefines`](ReflectionTextureBaseBlock.md#initializedefines)

***

### isAnAncestorOf()

> **isAnAncestorOf**(`block`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:419](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L419)

Checks if the current block is an ancestor of a given block

#### Parameters

##### block

[`NodeMaterialBlock`](NodeMaterialBlock.md)

defines the potential descendant block to check

#### Returns

`boolean`

true if block is a descendant

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`isAnAncestorOf`](ReflectionTextureBaseBlock.md#isanancestorof)

***

### isConnectedInFragmentShader()

> **isConnectedInFragmentShader**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:310](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L310)

Gets a boolean indicating that this connection will be used in the fragment shader

#### Returns

`boolean`

true if connected in fragment shader

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`isConnectedInFragmentShader`](ReflectionTextureBaseBlock.md#isconnectedinfragmentshader)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts:263](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts#L263)

Checks if the block is ready

#### Returns

`boolean`

true if ready

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`isReady`](ReflectionTextureBaseBlock.md#isready)

***

### prepareDefines()

> **prepareDefines**(`defines`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts:234](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts#L234)

Prepare the list of defines

#### Parameters

##### defines

`NodeMaterialDefines`

the material defines

#### Returns

`void`

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`prepareDefines`](ReflectionTextureBaseBlock.md#preparedefines)

***

### provideFallbacks()

> **provideFallbacks**(`fallbacks`, `mesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:503](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L503)

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

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`provideFallbacks`](ReflectionTextureBaseBlock.md#providefallbacks)

***

### registerInput()

> **registerInput**(`name`, `type`, `isOptional?`, `target?`, `point?`): `ReflectionTextureBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:323](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L323)

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

`ReflectionTextureBlock`

the current block

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`registerInput`](ReflectionTextureBaseBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `target?`, `point?`): `ReflectionTextureBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:350](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L350)

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

`ReflectionTextureBlock`

the current block

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`registerOutput`](ReflectionTextureBaseBlock.md#registeroutput)

***

### replaceRepeatableContent()

> **replaceRepeatableContent**(`vertexShaderState`, `defines`, `mesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:546](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L546)

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

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`replaceRepeatableContent`](ReflectionTextureBaseBlock.md#replacerepeatablecontent)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts:604](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts#L604)

Serializes the block

#### Returns

`any`

the serialized object

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`serialize`](ReflectionTextureBaseBlock.md#serialize)

***

### updateUniformsAndSamples()

> **updateUniformsAndSamples**(`state`, `nodeMaterial`, `defines`, `uniformBuffers`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:493](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L493)

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

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`updateUniformsAndSamples`](ReflectionTextureBaseBlock.md#updateuniformsandsamples)

***

### validateBlockName()

> **validateBlockName**(`newName`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:643](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L643)

Validates the new name for the block node.

#### Parameters

##### newName

`string`

the new name to be given to the node.

#### Returns

`boolean`

false if the name is a reserve word, else true.

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`validateBlockName`](ReflectionTextureBaseBlock.md#validateblockname)

***

### writeOutputs()

> **writeOutputs**(`state`, `varName`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts:561](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.ts#L561)

Generates the code corresponding to the connected output points

#### Parameters

##### state

`NodeMaterialBuildState`

node material build state

##### varName

`string`

name of the variable to output

#### Returns

`string`

the shader code

#### Inherited from

[`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md).[`writeOutputs`](ReflectionTextureBaseBlock.md#writeoutputs)
