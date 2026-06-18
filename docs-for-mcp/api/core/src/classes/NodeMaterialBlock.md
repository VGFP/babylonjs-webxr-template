[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeMaterialBlock

# Class: NodeMaterialBlock

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L24)

Defines a block that can be used inside a node based material

## Extended by

- [`VertexOutputBlock`](VertexOutputBlock.md)
- [`BonesBlock`](BonesBlock.md)
- [`InstancesBlock`](InstancesBlock.md)
- [`MorphTargetsBlock`](MorphTargetsBlock.md)
- [`LightInformationBlock`](LightInformationBlock.md)
- [`FragmentOutputBlock`](FragmentOutputBlock.md)
- [`ImageProcessingBlock`](ImageProcessingBlock.md)
- [`PerturbNormalBlock`](PerturbNormalBlock.md)
- [`DiscardBlock`](DiscardBlock.md)
- [`FrontFacingBlock`](FrontFacingBlock.md)
- [`DerivativeBlock`](DerivativeBlock.md)
- [`FragCoordBlock`](FragCoordBlock.md)
- [`ScreenSizeBlock`](ScreenSizeBlock.md)
- [`ScreenSpaceBlock`](ScreenSpaceBlock.md)
- [`TwirlBlock`](TwirlBlock.md)
- [`TBNBlock`](TBNBlock.md)
- [`HeightToNormalBlock`](HeightToNormalBlock.md)
- [`FragDepthBlock`](FragDepthBlock.md)
- [`ShadowMapBlock`](ShadowMapBlock.md)
- [`PrePassOutputBlock`](PrePassOutputBlock.md)
- [`AmbientOcclusionBlock`](AmbientOcclusionBlock.md)
- [`FogBlock`](FogBlock.md)
- [`LightBlock`](LightBlock.md)
- [`TextureBlock`](TextureBlock.md)
- [`ReflectionTextureBaseBlock`](ReflectionTextureBaseBlock.md)
- [`CurrentScreenBlock`](CurrentScreenBlock.md)
- [`SceneDepthBlock`](SceneDepthBlock.md)
- [`ImageSourceBlock`](ImageSourceBlock.md)
- [`ClipPlanesBlock`](ClipPlanesBlock.md)
- [`InputBlock`](InputBlock.md)
- [`PrePassTextureBlock`](PrePassTextureBlock.md)
- [`NodeMaterialTeleportInBlock`](NodeMaterialTeleportInBlock.md)
- [`NodeMaterialTeleportOutBlock`](NodeMaterialTeleportOutBlock.md)
- [`ScaleBlock`](ScaleBlock.md)
- [`ClampBlock`](ClampBlock.md)
- [`CrossBlock`](CrossBlock.md)
- [`CustomBlock`](CustomBlock.md)
- [`DotBlock`](DotBlock.md)
- [`TransformBlock`](TransformBlock.md)
- [`RemapBlock`](RemapBlock.md)
- [`NormalizeBlock`](NormalizeBlock.md)
- [`TrigonometryBlock`](TrigonometryBlock.md)
- [`ColorMergerBlock`](ColorMergerBlock.md)
- [`VectorMergerBlock`](VectorMergerBlock.md)
- [`ColorSplitterBlock`](ColorSplitterBlock.md)
- [`VectorSplitterBlock`](VectorSplitterBlock.md)
- [`LerpBlock`](LerpBlock.md)
- [`StepBlock`](StepBlock.md)
- [`OneMinusBlock`](OneMinusBlock.md)
- [`ViewDirectionBlock`](ViewDirectionBlock.md)
- [`FresnelBlock`](FresnelBlock.md)
- [`MaxBlock`](MaxBlock.md)
- [`MinBlock`](MinBlock.md)
- [`DistanceBlock`](DistanceBlock.md)
- [`LengthBlock`](LengthBlock.md)
- [`NegateBlock`](NegateBlock.md)
- [`PowBlock`](PowBlock.md)
- [`RandomNumberBlock`](RandomNumberBlock.md)
- [`ArcTan2Block`](ArcTan2Block.md)
- [`SmoothStepBlock`](SmoothStepBlock.md)
- [`ReciprocalBlock`](ReciprocalBlock.md)
- [`ReplaceColorBlock`](ReplaceColorBlock.md)
- [`PosterizeBlock`](PosterizeBlock.md)
- [`WaveBlock`](WaveBlock.md)
- [`GradientBlock`](GradientBlock.md)
- [`NLerpBlock`](NLerpBlock.md)
- [`WorleyNoise3DBlock`](WorleyNoise3DBlock.md)
- [`SimplexPerlin3DBlock`](SimplexPerlin3DBlock.md)
- [`NormalBlendBlock`](NormalBlendBlock.md)
- [`Rotate2dBlock`](Rotate2dBlock.md)
- [`ReflectBlock`](ReflectBlock.md)
- [`RefractBlock`](RefractBlock.md)
- [`DesaturateBlock`](DesaturateBlock.md)
- [`PBRMetallicRoughnessBlock`](PBRMetallicRoughnessBlock.md)
- [`SheenBlock`](SheenBlock.md)
- [`AnisotropyBlock`](AnisotropyBlock.md)
- [`ClearCoatBlock`](ClearCoatBlock.md)
- [`RefractionBlock`](RefractionBlock.md)
- [`SubSurfaceBlock`](SubSurfaceBlock.md)
- [`IridescenceBlock`](IridescenceBlock.md)
- [`ParticleTextureBlock`](ParticleTextureBlock.md)
- [`ParticleRampGradientBlock`](ParticleRampGradientBlock.md)
- [`ParticleBlendMultiplyBlock`](ParticleBlendMultiplyBlock.md)
- [`ModBlock`](ModBlock.md)
- [`MatrixBuilderBlock`](MatrixBuilderBlock.md)
- [`ConditionalBlock`](ConditionalBlock.md)
- [`CloudBlock`](CloudBlock.md)
- [`VoronoiNoiseBlock`](VoronoiNoiseBlock.md)
- [`ElbowBlock`](ElbowBlock.md)
- [`TriPlanarBlock`](TriPlanarBlock.md)
- [`MatrixDeterminantBlock`](MatrixDeterminantBlock.md)
- [`MatrixTransposeBlock`](MatrixTransposeBlock.md)
- [`MeshAttributeExistsBlock`](MeshAttributeExistsBlock.md)
- [`CurveBlock`](CurveBlock.md)
- [`ColorConverterBlock`](ColorConverterBlock.md)
- [`LoopBlock`](LoopBlock.md)
- [`StorageReadBlock`](StorageReadBlock.md)
- [`StorageWriteBlock`](StorageWriteBlock.md)
- [`MatrixSplitterBlock`](MatrixSplitterBlock.md)
- [`GaussianSplattingBlock`](GaussianSplattingBlock.md)
- [`SplatReaderBlock`](SplatReaderBlock.md)
- [`GaussianBlock`](GaussianBlock.md)
- [`NodeMaterialDebugBlock`](NodeMaterialDebugBlock.md)
- [`PannerBlock`](PannerBlock.md)

## Constructors

### Constructor

> **new NodeMaterialBlock**(`name`, `target?`, `isFinalMerger?`, `isFinalOutput?`): `NodeMaterialBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L228)

Creates a new NodeMaterialBlock

#### Parameters

##### name

`string`

defines the block name

##### target?

[`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md) = `NodeMaterialBlockTargets.Vertex`

defines the target of that block (Vertex by default)

##### isFinalMerger?

`boolean` = `false`

defines a boolean indicating that this block is an end block (e.g. it is generating a system value). Default is false

##### isFinalOutput?

`boolean` = `false`

defines a boolean indicating that this block is generating a final output and no other block should be generated after

#### Returns

`NodeMaterialBlock`

## Properties

### comments

> **comments**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L104)

Gets or sets the comments associated with this block

***

### inputsAreExclusive

> **inputsAreExclusive**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L55)

Gets or sets a boolean indicating that only one input can be connected at a time

***

### onCodeIsReadyObservable

> **onCodeIsReadyObservable**: [`Observable`](Observable.md)\<`NodeMaterialBlock`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L52)

Observable raised when the block code is ready (if the code loading is async)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L99)

Gets or sets the unique id of the node

***

### visibleInInspector

> **visibleInInspector**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L216)

Gets or sets a boolean indicating that this input can be edited in the Inspector (false by default)

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:219](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L219)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

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

***

### codeIsReady

#### Get Signature

> **get** **codeIsReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L81)

Gets a boolean indicating that this block has is code ready to be used

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

***

### isFinalMerger

#### Get Signature

> **get** **isFinalMerger**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L116)

Gets a boolean indicating that this block is an end block (e.g. it is generating a system value)

##### Returns

`boolean`

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L123)

Gets a boolean indicating that this block is an input (e.g. it sends data to the shader)

##### Returns

`boolean`

***

### isLoop

#### Get Signature

> **get** **isLoop**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L144)

Gets a boolean indicating if this block is a loop

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

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L130)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

***

### isUnique

#### Get Signature

> **get** **isUnique**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L109)

Gets a boolean indicating that this block can only be used once per NodeMaterial

##### Returns

`boolean`

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

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L181)

Gets the list of output points

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

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

***

### willBeGeneratedIntoVertexShaderFromFragmentShader

#### Get Signature

> **get** **willBeGeneratedIntoVertexShaderFromFragmentShader**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:551](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L551)

Gets a boolean indicating that the code of this block will be promoted to vertex shader even if connected to fragment output

##### Returns

`boolean`

## Methods

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

`NodeMaterialBlock`[]

defines the list of active blocks (i.e. blocks to compile)

#### Returns

`boolean`

true if already built

***

### clone()

> **clone**(`scene`, `rootUrl?`): `NodeMaterialBlock` \| `null`

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

`NodeMaterialBlock` \| `null`

a copy of the current block

***

### connectTo()

> **connectTo**(`other`, `options?`): `NodeMaterialBlock` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:444](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L444)

Connect current block with another block

#### Parameters

##### other

`NodeMaterialBlock`

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

`NodeMaterialBlock` \| `undefined`

the current block

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:997](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L997)

Release resources

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:303](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L303)

Gets the current class name e.g. "NodeMaterialBlock"

#### Returns

`string`

the class name

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

***

### getFirstAvailableOutput()

> **getFirstAvailableOutput**(`forBlock?`): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:389](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L389)

Will return the first available output e.g. the first one which is not yet connected and not a varying

#### Parameters

##### forBlock?

[`Nullable`](../type-aliases/Nullable.md)\<`NodeMaterialBlock`\> = `null`

defines an optional block to check compatibility with

#### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

the first available input or null

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

***

### isAnAncestorOf()

> **isAnAncestorOf**(`block`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:419](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L419)

Checks if the current block is an ancestor of a given block

#### Parameters

##### block

`NodeMaterialBlock`

defines the potential descendant block to check

#### Returns

`boolean`

true if block is a descendant

***

### isConnectedInFragmentShader()

> **isConnectedInFragmentShader**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L310)

Gets a boolean indicating that this connection will be used in the fragment shader

#### Returns

`boolean`

true if connected in fragment shader

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

***

### registerInput()

> **registerInput**(`name`, `type`, `isOptional?`, `target?`, `point?`): `NodeMaterialBlock`

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

`NodeMaterialBlock`

the current block

***

### registerOutput()

> **registerOutput**(`name`, `type`, `target?`, `point?`): `NodeMaterialBlock`

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

`NodeMaterialBlock`

the current block

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

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:927](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L927)

Serializes this block in a JSON representation

#### Returns

`any`

the serialized block object

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
