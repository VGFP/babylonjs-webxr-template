[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MorphTargetManager

# Class: MorphTargetManager

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L17)

This class is used to deform meshes using morphing between different targets

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/morphTargets

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new MorphTargetManager**(`scene?`, `meshName?`): `MorphTargetManager`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L128)

Creates a new MorphTargetManager

#### Parameters

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\> = `null`

defines the current scene

##### meshName?

`string`

name of the mesh this morph target manager is associated with

#### Returns

`MorphTargetManager`

## Properties

### enableColorMorphing

> **enableColorMorphing**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L100)

Gets or sets a boolean indicating if colors must be morphed

***

### enableNormalMorphing

> **enableNormalMorphing**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L80)

Gets or sets a boolean indicating if normals must be morphed

***

### enablePositionMorphing

> **enablePositionMorphing**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L75)

Gets or sets a boolean indicating if positions must be morphed

***

### enableTangentMorphing

> **enableTangentMorphing**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L85)

Gets or sets a boolean indicating if tangents must be morphed

***

### enableUV2Morphing

> **enableUV2Morphing**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L95)

Gets or sets a boolean indicating if UV2 must be morphed

***

### enableUVMorphing

> **enableUVMorphing**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L90)

Gets or sets a boolean indicating if UV must be morphed

***

### meshName?

> `optional` **meshName?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L130)

name of the mesh this morph target manager is associated with

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:335](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L335)

Gets or sets an object used to store user defined information for the MorphTargetManager

***

### optimizeInfluencers

> **optimizeInfluencers**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L70)

Gets or sets a boolean indicating if influencers must be optimized (eg. recompiling the shader if less influencers are used)

***

### ConstantTargetCountForTextureMode

> `static` **ConstantTargetCountForTextureMode**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L27)

When used in texture mode, if greather than 0, this will override the the morph manager numMaxInfluencers value.

***

### EnableTextureStorage

> `static` **EnableTextureStorage**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L19)

Enable storing morph target data into textures when set to true (true by default)

***

### MaxActiveMorphTargetsInVertexAttributeMode

> `static` **MaxActiveMorphTargetsInVertexAttributeMode**: `number` = `8`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L22)

Maximum number of active morph targets supported in the "vertex attribute" mode (i.e., not the "texture" mode)

## Accessors

### areUpdatesFrozen

#### Get Signature

> **get** **areUpdatesFrozen**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L119)

##### Returns

`boolean`

#### Set Signature

> **set** **areUpdatesFrozen**(`block`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L105)

Sets a boolean indicating that adding new target or updating an existing target will not update the underlying data buffers

##### Parameters

###### block

`boolean`

##### Returns

`void`

***

### hasColors

#### Get Signature

> **get** **hasColors**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L271)

Gets a boolean indicating if this manager has data for morphing colors

##### Returns

`boolean`

***

### hasNormals

#### Get Signature

> **get** **hasNormals**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:243](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L243)

Gets a boolean indicating if this manager has data for morphing normals

##### Returns

`boolean`

***

### hasPositions

#### Get Signature

> **get** **hasPositions**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L236)

Gets a boolean indicating if this manager has data for morphing positions

##### Returns

`boolean`

***

### hasTangents

#### Get Signature

> **get** **hasTangents**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:250](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L250)

Gets a boolean indicating if this manager has data for morphing tangents

##### Returns

`boolean`

***

### hasUV2s

#### Get Signature

> **get** **hasUV2s**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L264)

Gets a boolean indicating if this manager has data for morphing texture coordinates 2

##### Returns

`boolean`

***

### hasUVs

#### Get Signature

> **get** **hasUVs**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:257](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L257)

Gets a boolean indicating if this manager has data for morphing texture coordinates

##### Returns

`boolean`

***

### influences

#### Get Signature

> **get** **influences**(): `Float32Array`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:295](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L295)

Gets the list of influences (one per target)

##### Returns

`Float32Array`

***

### isUsingTextureForTargets

#### Get Signature

> **get** **isUsingTextureForTargets**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:323](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L323)

Gets a boolean indicating that the targets are stored into a texture (instead of as attributes)

##### Returns

`boolean`

***

### numInfluencers

#### Get Signature

> **get** **numInfluencers**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:285](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L285)

Gets the number of influencers (ie. the number of targets with influences > 0)

##### Returns

`number`

***

### numMaxInfluencers

#### Get Signature

> **get** **numMaxInfluencers**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L160)

Gets or sets the maximum number of influencers (targets) (default value: 0).
Setting a value for this property can lead to a smoother experience, as only one shader will be compiled, which will use this value as the maximum number of influencers.
If you leave the value at 0 (default), a new shader will be compiled every time the number of active influencers changes. This can cause problems, as compiling a shader takes time.
If you assign a non-zero value to this property, you need to ensure that this value is greater than the maximum number of (active) influencers you'll need for this morph manager.
Otherwise, the number of active influencers will be truncated at the value you set for this property, which can lead to unexpected results.
Note that this property has no effect if "useTextureToStoreTargets" is false.
Note as well that if MorphTargetManager.ConstantTargetCountForTextureMode is greater than 0, this property will be ignored and the constant value will be used instead.

##### Returns

`number`

#### Set Signature

> **set** **numMaxInfluencers**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:167](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L167)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### numTargets

#### Get Signature

> **get** **numTargets**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:278](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L278)

Gets the number of targets stored in this manager

##### Returns

`number`

***

### supportsColors

#### Get Signature

> **get** **supportsColors**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L229)

Gets a boolean indicating if this manager supports morphing of colors

##### Returns

`boolean`

***

### supportsNormals

#### Get Signature

> **get** **supportsNormals**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L201)

Gets a boolean indicating if this manager supports morphing of normals

##### Returns

`boolean`

***

### supportsPositions

#### Get Signature

> **get** **supportsPositions**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L194)

Gets a boolean indicating if this manager supports morphing of positions

##### Returns

`boolean`

***

### supportsTangents

#### Get Signature

> **get** **supportsTangents**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L208)

Gets a boolean indicating if this manager supports morphing of tangents

##### Returns

`boolean`

***

### supportsUV2s

#### Get Signature

> **get** **supportsUV2s**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L222)

Gets a boolean indicating if this manager supports morphing of texture coordinates 2

##### Returns

`boolean`

***

### supportsUVs

#### Get Signature

> **get** **supportsUVs**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:215](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L215)

Gets a boolean indicating if this manager supports morphing of texture coordinates

##### Returns

`boolean`

***

### uniqueId

#### Get Signature

> **get** **uniqueId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L180)

Gets the unique ID of this manager

##### Returns

`number`

***

### useTextureToStoreTargets

#### Get Signature

> **get** **useTextureToStoreTargets**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:307](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L307)

Gets or sets a boolean indicating that targets should be stored as a texture instead of using vertex attributes (default is true).
Please note that this option is not available if the hardware does not support it

##### Returns

`boolean`

#### Set Signature

> **set** **useTextureToStoreTargets**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:311](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L311)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### vertexCount

#### Get Signature

> **get** **vertexCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L187)

Gets the number of vertices handled by this manager

##### Returns

`number`

## Methods

### addTarget()

> **addTarget**(`target`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L380)

Add a new target to this manager

#### Parameters

##### target

[`MorphTarget`](MorphTarget.md)

defines the target to add

#### Returns

`void`

***

### clone()

> **clone**(): `MorphTargetManager`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:438](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L438)

Clone the current manager

#### Returns

`MorphTargetManager`

a new MorphTargetManager

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:693](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L693)

Release all resources

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### getActiveTarget()

> **getActiveTarget**(`index`): [`MorphTarget`](MorphTarget.md)

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:342](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L342)

Gets the active target at specified index. An active target is a target with an influence > 0

#### Parameters

##### index

`number`

defines the index to check

#### Returns

[`MorphTarget`](MorphTarget.md)

the requested target

***

### getTarget()

> **getTarget**(`index`): [`MorphTarget`](MorphTarget.md)

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:354](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L354)

Gets the target at specified index

#### Parameters

##### index

`number`

defines the index to check

#### Returns

[`MorphTarget`](MorphTarget.md)

the requested target

***

### getTargetByName()

> **getTargetByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`MorphTarget`](MorphTarget.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:363](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L363)

Gets the first target with the specified name

#### Parameters

##### name

`string`

defines the name to check

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`MorphTarget`](MorphTarget.md)\>

the requested target

***

### removeTarget()

> **removeTarget**(`target`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:405](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L405)

Removes a target from the manager

#### Parameters

##### target

[`MorphTarget`](MorphTarget.md)

defines the target to remove

#### Returns

`void`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:462](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L462)

Serializes the current manager into a Serialization object

#### Returns

`any`

the serialized object

***

### synchronize()

> **synchronize**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:549](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L549)

Synchronize the targets with all the meshes using this morph target manager

#### Returns

`void`

***

### Parse()

> `static` **Parse**(`serializationObject`, `scene`): `MorphTargetManager`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTargetManager.ts:727](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Morph/morphTargetManager.ts#L727)

Creates a new MorphTargetManager from serialized data

#### Parameters

##### serializationObject

`any`

defines the serialized data

##### scene

[`Scene`](Scene.md)

defines the hosting scene

#### Returns

`MorphTargetManager`

the new MorphTargetManager
