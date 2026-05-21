[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BiPlanarBlock

# Class: BiPlanarBlock

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/biPlanarBlock.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/biPlanarBlock.ts#L11)

Block used to read a texture with triplanar mapping (see https://iquilezles.org/articles/biplanar/)

## Extends

- [`TriPlanarBlock`](TriPlanarBlock.md)

## Constructors

### Constructor

> **new BiPlanarBlock**(`name`): `BiPlanarBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/biPlanarBlock.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/biPlanarBlock.ts#L16)

Create a new BiPlanarBlock

#### Parameters

##### name

`string`

defines the block name

#### Returns

`BiPlanarBlock`

#### Overrides

[`TriPlanarBlock`](TriPlanarBlock.md).[`constructor`](TriPlanarBlock.md#constructor)

## Properties

### comments

> **comments**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L104)

Gets or sets the comments associated with this block

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`comments`](TriPlanarBlock.md#comments)

***

### disableLevelMultiplication

> **disableLevelMultiplication**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L172)

Gets or sets a boolean indicating if multiplication of texture with level should be disabled

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`disableLevelMultiplication`](TriPlanarBlock.md#disablelevelmultiplication)

***

### inputsAreExclusive

> **inputsAreExclusive**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L55)

Gets or sets a boolean indicating that only one input can be connected at a time

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`inputsAreExclusive`](TriPlanarBlock.md#inputsareexclusive)

***

### onCodeIsReadyObservable

> **onCodeIsReadyObservable**: [`Observable`](Observable.md)\<[`NodeMaterialBlock`](NodeMaterialBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L52)

Observable raised when the block code is ready (if the code loading is async)

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`onCodeIsReadyObservable`](TriPlanarBlock.md#oncodeisreadyobservable)

***

### projectAsCube

> **projectAsCube**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L36)

Project the texture(s) for a better fit to a cube

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`projectAsCube`](TriPlanarBlock.md#projectascube)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L99)

Gets or sets the unique id of the node

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`uniqueId`](TriPlanarBlock.md#uniqueid)

***

### visibleInInspector

> **visibleInInspector**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L216)

Gets or sets a boolean indicating that this input can be edited in the Inspector (false by default)

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`visibleInInspector`](TriPlanarBlock.md#visibleininspector)

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L219)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`visibleOnFrame`](TriPlanarBlock.md#visibleonframe)

## Accessors

### a

#### Get Signature

> **get** **a**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:314](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L314)

Gets the a output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`a`](TriPlanarBlock.md#a)

***

### b

#### Get Signature

> **get** **b**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:307](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L307)

Gets the b output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`b`](TriPlanarBlock.md#b)

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

[`TriPlanarBlock`](TriPlanarBlock.md).[`buildId`](TriPlanarBlock.md#buildid)

***

### codeIsReady

#### Get Signature

> **get** **codeIsReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L81)

Gets a boolean indicating that this block has is code ready to be used

##### Returns

`boolean`

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`codeIsReady`](TriPlanarBlock.md#codeisready)

***

### convertToGammaSpace

#### Get Signature

> **get** **convertToGammaSpace**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L144)

##### Returns

`boolean`

#### Set Signature

> **set** **convertToGammaSpace**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L131)

Gets or sets a boolean indicating if content needs to be converted to gamma space

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`convertToGammaSpace`](TriPlanarBlock.md#converttogammaspace)

***

### convertToLinearSpace

#### Get Signature

> **get** **convertToLinearSpace**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L165)

##### Returns

`boolean`

#### Set Signature

> **set** **convertToLinearSpace**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L152)

Gets or sets a boolean indicating if content needs to be converted to linear space

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`convertToLinearSpace`](TriPlanarBlock.md#converttolinearspace)

***

### g

#### Get Signature

> **get** **g**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:300](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L300)

Gets the g output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`g`](TriPlanarBlock.md#g)

***

### hasImageSource

#### Get Signature

> **get** **hasImageSource**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L123)

Gets a boolean indicating that this block is linked to an ImageSourceBlock

##### Returns

`boolean`

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`hasImageSource`](TriPlanarBlock.md#hasimagesource)

***

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L176)

Gets the list of input points

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`inputs`](TriPlanarBlock.md#inputs)

***

### isFinalMerger

#### Get Signature

> **get** **isFinalMerger**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L116)

Gets a boolean indicating that this block is an end block (e.g. it is generating a system value)

##### Returns

`boolean`

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`isFinalMerger`](TriPlanarBlock.md#isfinalmerger)

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L123)

Gets a boolean indicating that this block is an input (e.g. it sends data to the shader)

##### Returns

`boolean`

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`isInput`](TriPlanarBlock.md#isinput)

***

### isLoop

#### Get Signature

> **get** **isLoop**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L144)

Gets a boolean indicating if this block is a loop

##### Returns

`boolean`

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`isLoop`](TriPlanarBlock.md#isloop)

***

### isTeleportIn

#### Get Signature

> **get** **isTeleportIn**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L137)

Gets a boolean indicating if this block is a teleport in

##### Returns

`boolean`

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`isTeleportIn`](TriPlanarBlock.md#isteleportin)

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L130)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`isTeleportOut`](TriPlanarBlock.md#isteleportout)

***

### isUnique

#### Get Signature

> **get** **isUnique**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L109)

Gets a boolean indicating that this block can only be used once per NodeMaterial

##### Returns

`boolean`

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`isUnique`](TriPlanarBlock.md#isunique)

***

### level

#### Get Signature

> **get** **level**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:321](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L321)

Gets the level output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`level`](TriPlanarBlock.md#level)

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

[`TriPlanarBlock`](TriPlanarBlock.md).[`name`](TriPlanarBlock.md#name)

***

### normal

#### Get Signature

> **get** **normal**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:244](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L244)

Gets the normal input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`normal`](TriPlanarBlock.md#normal)

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L181)

Gets the list of output points

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`outputs`](TriPlanarBlock.md#outputs)

***

### position

#### Get Signature

> **get** **position**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L237)

Gets the position input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`position`](TriPlanarBlock.md#position)

***

### r

#### Get Signature

> **get** **r**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:293](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L293)

Gets the r output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`r`](TriPlanarBlock.md#r)

***

### rgb

#### Get Signature

> **get** **rgb**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:286](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L286)

Gets the rgb output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`rgb`](TriPlanarBlock.md#rgb)

***

### rgba

#### Get Signature

> **get** **rgba**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:279](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L279)

Gets the rgba output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`rgba`](TriPlanarBlock.md#rgba)

***

### samplerName

#### Get Signature

> **get** **samplerName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L98)

Gets the sampler name associated with this texture

##### Returns

`string`

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`samplerName`](TriPlanarBlock.md#samplername)

***

### samplerYName

#### Get Signature

> **get** **samplerYName**(): [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L109)

Gets the samplerY name associated with this texture

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`samplerYName`](TriPlanarBlock.md#sampleryname)

***

### samplerZName

#### Get Signature

> **get** **samplerZName**(): [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L116)

Gets the samplerZ name associated with this texture

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`samplerZName`](TriPlanarBlock.md#samplerzname)

***

### sharpness

#### Get Signature

> **get** **sharpness**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:251](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L251)

Gets the sharpness input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`sharpness`](TriPlanarBlock.md#sharpness)

***

### source

#### Get Signature

> **get** **source**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:258](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L258)

Gets the source input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`source`](TriPlanarBlock.md#source)

***

### sourceY

#### Get Signature

> **get** **sourceY**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:265](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L265)

Gets the sourceY input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`sourceY`](TriPlanarBlock.md#sourcey)

***

### sourceZ

#### Get Signature

> **get** **sourceZ**(): [`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:272](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L272)

Gets the sourceZ input component

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)\>

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`sourceZ`](TriPlanarBlock.md#sourcez)

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

[`TriPlanarBlock`](TriPlanarBlock.md).[`target`](TriPlanarBlock.md#target)

***

### texture

#### Get Signature

> **get** **texture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L42)

Gets or sets the texture associated with the node

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\>

#### Set Signature

> **set** **texture**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L49)

##### Parameters

###### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\>

##### Returns

`void`

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`texture`](TriPlanarBlock.md#texture)

***

### textureY

#### Get Signature

> **get** **textureY**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L74)

Gets the textureY associated with the node

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\>

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`textureY`](TriPlanarBlock.md#texturey)

***

### textureZ

#### Get Signature

> **get** **textureZ**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L84)

Gets the textureZ associated with the node

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\>

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`textureZ`](TriPlanarBlock.md#texturez)

***

### willBeGeneratedIntoVertexShaderFromFragmentShader

#### Get Signature

> **get** **willBeGeneratedIntoVertexShaderFromFragmentShader**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:551](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L551)

Gets a boolean indicating that the code of this block will be promoted to vertex shader even if connected to fragment output

##### Returns

`boolean`

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`willBeGeneratedIntoVertexShaderFromFragmentShader`](TriPlanarBlock.md#willbegeneratedintovertexshaderfromfragmentshader)

## Methods

### \_deserialize()

> **\_deserialize**(`serializationObject`, `scene`, `rootUrl`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:602](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L602)

Deserializes the block from a serialization object

#### Parameters

##### serializationObject

`any`

the object to deserialize from

##### scene

[`Scene`](Scene.md)

the current scene

##### rootUrl

`string`

the root URL for loading

#### Returns

`void`

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`_deserialize`](TriPlanarBlock.md#_deserialize)

***

### autoConfigure()

> **autoConfigure**(`material`, `additionalFilteringInfo?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:535](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L535)

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

[`TriPlanarBlock`](TriPlanarBlock.md).[`autoConfigure`](TriPlanarBlock.md#autoconfigure)

***

### bind()

> **bind**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:358](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L358)

Bind the block

#### Parameters

##### effect

[`Effect`](Effect.md)

the effect to bind

#### Returns

`void`

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`bind`](TriPlanarBlock.md#bind)

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

[`TriPlanarBlock`](TriPlanarBlock.md).[`build`](TriPlanarBlock.md#build)

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

[`TriPlanarBlock`](TriPlanarBlock.md).[`clone`](TriPlanarBlock.md#clone)

***

### connectTo()

> **connectTo**(`other`, `options?`): `BiPlanarBlock` \| `undefined`

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

`BiPlanarBlock` \| `undefined`

the current block

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`connectTo`](TriPlanarBlock.md#connectto)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:997](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L997)

Release resources

#### Returns

`void`

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`dispose`](TriPlanarBlock.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/biPlanarBlock.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/biPlanarBlock.ts#L24)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`TriPlanarBlock`](TriPlanarBlock.md).[`getClassName`](TriPlanarBlock.md#getclassname)

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

[`TriPlanarBlock`](TriPlanarBlock.md).[`getFirstAvailableInput`](TriPlanarBlock.md#getfirstavailableinput)

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

[`TriPlanarBlock`](TriPlanarBlock.md).[`getFirstAvailableOutput`](TriPlanarBlock.md#getfirstavailableoutput)

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

[`TriPlanarBlock`](TriPlanarBlock.md).[`getInputByName`](TriPlanarBlock.md#getinputbyname)

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

[`TriPlanarBlock`](TriPlanarBlock.md).[`getOutputByName`](TriPlanarBlock.md#getoutputbyname)

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

[`TriPlanarBlock`](TriPlanarBlock.md).[`getSiblingOutput`](TriPlanarBlock.md#getsiblingoutput)

***

### initialize()

> **initialize**(`state`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:264](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L264)

Initialize the block and prepare the context for build

#### Parameters

##### state

`NodeMaterialBuildState`

defines the state that will be used for the build

#### Returns

`void`

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`initialize`](TriPlanarBlock.md#initialize)

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

[`TriPlanarBlock`](TriPlanarBlock.md).[`initializeDefines`](TriPlanarBlock.md#initializedefines)

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

[`TriPlanarBlock`](TriPlanarBlock.md).[`isAnAncestorOf`](TriPlanarBlock.md#isanancestorof)

***

### isConnectedInFragmentShader()

> **isConnectedInFragmentShader**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:310](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L310)

Gets a boolean indicating that this connection will be used in the fragment shader

#### Returns

`boolean`

true if connected in fragment shader

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`isConnectedInFragmentShader`](TriPlanarBlock.md#isconnectedinfragmentshader)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:346](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L346)

Checks if the block is ready

#### Returns

`boolean`

true if the block is ready

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`isReady`](TriPlanarBlock.md#isready)

***

### prepareDefines()

> **prepareDefines**(`defines`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:329](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L329)

Prepares the defines for the block

#### Parameters

##### defines

`NodeMaterialDefines`

the defines to prepare

#### Returns

`void`

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`prepareDefines`](TriPlanarBlock.md#preparedefines)

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

[`TriPlanarBlock`](TriPlanarBlock.md).[`provideFallbacks`](TriPlanarBlock.md#providefallbacks)

***

### registerInput()

> **registerInput**(`name`, `type`, `isOptional?`, `target?`, `point?`): `BiPlanarBlock`

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

`BiPlanarBlock`

the current block

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`registerInput`](TriPlanarBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `target?`, `point?`): `BiPlanarBlock`

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

`BiPlanarBlock`

the current block

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`registerOutput`](TriPlanarBlock.md#registeroutput)

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

[`TriPlanarBlock`](TriPlanarBlock.md).[`replaceRepeatableContent`](TriPlanarBlock.md#replacerepeatablecontent)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts:582](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/triPlanarBlock.ts#L582)

Serializes the block

#### Returns

`any`

the serialized object

#### Inherited from

[`TriPlanarBlock`](TriPlanarBlock.md).[`serialize`](TriPlanarBlock.md#serialize)

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

[`TriPlanarBlock`](TriPlanarBlock.md).[`updateUniformsAndSamples`](TriPlanarBlock.md#updateuniformsandsamples)

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

[`TriPlanarBlock`](TriPlanarBlock.md).[`validateBlockName`](TriPlanarBlock.md#validateblockname)
