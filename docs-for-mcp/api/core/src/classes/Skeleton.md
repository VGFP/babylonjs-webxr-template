[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Skeleton

# Class: Skeleton

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L25)

Class used to handle skinning animations

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/bonesSkeletons

## Implements

- [`IAnimatable`](../interfaces/IAnimatable.md)

## Constructors

### Constructor

> **new Skeleton**(`name`, `id`, `scene`): `Skeleton`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:149](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L149)

Creates a new skeleton

#### Parameters

##### name

`string`

defines the skeleton name

##### id

`string`

defines the skeleton Id

##### scene

[`Scene`](Scene.md)

defines the hosting scene

#### Returns

`Skeleton`

## Properties

### animations

> **animations**: [`Animation`](Animation.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L42)

Gets the list of animations attached to this skeleton

#### Implementation of

[`IAnimatable`](../interfaces/IAnimatable.md).[`animations`](../interfaces/IAnimatable.md#animations)

***

### bones

> **bones**: [`Bone`](Bone.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L29)

Defines the list of child bones

***

### dimensionsAtRest

> **dimensionsAtRest**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L33)

Defines an estimate of the dimension of the skeleton at rest

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L79)

Specifies if the skeleton should be serialized

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L153)

defines the skeleton Id

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L115)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L141)

Gets or sets an object used to store user defined information for the skeleton

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L151)

defines the skeleton name

***

### needInitialSkinMatrix

> **needInitialSkinMatrix**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L37)

Defines a boolean indicating if the root matrix is provided by meshes or by the current skeleton (this is the default value)

***

### onBeforeComputeObservable

> **onBeforeComputeObservable**: [`Observable`](Observable.md)\<`Skeleton`\>

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L122)

An observable triggered before computing the skeleton's matrices

## Accessors

### animationPropertiesOverride

#### Get Signature

> **get** **animationPropertiesOverride**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L100)

Gets or sets the animation properties override

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

#### Set Signature

> **set** **animationPropertiesOverride**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L107)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

##### Returns

`void`

***

### isUsingTextureForMatrices

#### Get Signature

> **get** **isUsingTextureForMatrices**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L127)

Gets a boolean indicating that the skeleton effectively stores matrices into a texture

##### Returns

`boolean`

***

### uniqueId

#### Get Signature

> **get** **uniqueId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L134)

Gets the unique ID of this skeleton

##### Returns

`number`

***

### useTextureToStoreBoneMatrices

#### Get Signature

> **get** **useTextureToStoreBoneMatrices**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L86)

Gets or sets a boolean indicating that bone matrices should be stored as a texture instead of using shader uniforms (default is true).
Please note that this option is not available if the hardware does not support it

##### Returns

`boolean`

#### Set Signature

> **set** **useTextureToStoreBoneMatrices**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L90)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### beginAnimation()

> **beginAnimation**(`name`, `loop?`, `speedRatio?`, `onAnimationEnd?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:434](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L434)

Begin a specific animation range

#### Parameters

##### name

`string`

defines the name of the range to start

##### loop?

`boolean`

defines if looping must be turned on (false by default)

##### speedRatio?

`number`

defines the speed ratio to apply (1 by default)

##### onAnimationEnd?

() => `void`

defines a callback which will be called when animation will end

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

a new animatable

***

### clone()

> **clone**(`name`, `id?`): `Skeleton`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:717](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L717)

Clone the current skeleton

#### Parameters

##### name

`string`

defines the name of the new skeleton

##### id?

`string`

defines the id of the new skeleton

#### Returns

`Skeleton`

the new skeleton

***

### computeAbsoluteMatrices()

> **computeAbsoluteMatrices**(`forceUpdate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:944](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L944)

Compute all node absolute matrices

#### Parameters

##### forceUpdate?

`boolean` = `false`

defines if computation must be done even if cache is up to date

#### Returns

`void`

***

### ~~computeAbsoluteTransforms()~~

> **computeAbsoluteTransforms**(`forceUpdate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:956](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L956)

Compute all node absolute matrices

#### Parameters

##### forceUpdate?

`boolean` = `false`

defines if computation must be done even if cache is up to date

#### Returns

`void`

#### Deprecated

Please use computeAbsoluteMatrices instead

***

### copyAnimationRange()

> **copyAnimationRange**(`source`, `name`, `rescaleAsRequired?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:361](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L361)

Copy animation range from a source skeleton.
This is not for a complete retargeting, only between very similar skeleton's with only possible bone length differences

#### Parameters

##### source

`Skeleton`

defines the source skeleton

##### name

`string`

defines the name of the range to copy

##### rescaleAsRequired?

`boolean` = `false`

defines if rescaling must be applied if required

#### Returns

`boolean`

true if operation was successful

***

### createAnimationRange()

> **createAnimationRange**(`name`, `from`, `to`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:305](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L305)

Create a new animation range

#### Parameters

##### name

`string`

defines the name of the range

##### from

`number`

defines the start key

##### to

`number`

defines the end key

#### Returns

`void`

***

### deleteAnimationRange()

> **deleteAnimationRange**(`name`, `deleteFrames?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L322)

Delete a specific animation range

#### Parameters

##### name

`string`

defines the name of the range

##### deleteFrames?

`boolean` = `true`

defines if frames must be removed as well

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:778](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L778)

Releases all resources associated with the current skeleton

#### Returns

`void`

***

### enableBlending()

> **enableBlending**(`blendingSpeed?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:766](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L766)

Enable animation blending for this skeleton

#### Parameters

##### blendingSpeed?

`number` = `0.01`

defines the blending speed to apply

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#animation-blending

***

### findBoneFromLinkedTransformNode()

> **findBoneFromLinkedTransformNode**(`transformNode`): [`Bone`](Bone.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:276](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L276)

Finds a bone in a skeleton that is linked to the given transform node.

#### Parameters

##### transformNode

[`TransformNode`](TransformNode.md)

The transform node to find the bone for

#### Returns

[`Bone`](Bone.md) \| `null`

The bone linked to the transform node, or null if not found

***

### findBoneFromLinkedTransformNodeName()

> **findBoneFromLinkedTransformNodeName**(`name`): [`Bone`](Bone.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:290](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L290)

Finds a bone in a skeleton by the name of its linked transform node.

#### Parameters

##### name

`string`

The name of the linked transform node

#### Returns

[`Bone`](Bone.md) \| `null`

The bone linked to the transform node with the given name, or null if not found

***

### getAnimatables()

> **getAnimatables**(): [`IAnimatable`](../interfaces/IAnimatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:699](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L699)

Gets the list of animatables currently running for this skeleton

#### Returns

[`IAnimatable`](../interfaces/IAnimatable.md)[]

an array of animatables

***

### getAnimationRange()

> **getAnimationRange**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:336](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L336)

Gets a specific animation range

#### Parameters

##### name

`string`

defines the name of the range to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>

the requested animation range or null if not found

***

### getAnimationRanges()

> **getAnimationRanges**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:344](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L344)

Gets the list of all animation ranges defined on this skeleton

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

an array

***

### getBoneIndexByName()

> **getBoneIndexByName**(`name`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:262](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L262)

Get bone's index searching by name

#### Parameters

##### name

`string`

defines bone's name to search for

#### Returns

`number`

the indice of the bone. Returns -1 if not found

***

### getChildren()

> **getChildren**(): [`Bone`](Bone.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L182)

Returns an array containing the root bones

#### Returns

[`Bone`](Bone.md)[]

an array containing the root bones

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L174)

Gets the current object class name.

#### Returns

`string`

the class name

***

### getPoseMatrix()

> **getPoseMatrix**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:964](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L964)

Gets the root pose matrix

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

a matrix

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L228)

Gets the current hosting scene

#### Returns

[`Scene`](Scene.md)

a scene object

***

### getTransformMatrices()

> **getTransformMatrices**(`mesh`): `Float32Array`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:192](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L192)

Gets the list of transform matrices to send to shaders (one matrix per bone)

#### Parameters

##### mesh

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

defines the mesh to use to get the root matrix (if needInitialSkinMatrix === true)

#### Returns

`Float32Array`

a Float32Array containing matrices data

***

### getTransformMatrixTexture()

> **getTransformMatrixTexture**(`mesh`): [`Nullable`](../type-aliases/Nullable.md)\<[`RawTexture`](RawTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L216)

Gets the list of transform matrices to send to shaders inside a texture (one matrix per bone)

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to use to get the root matrix (if needInitialSkinMatrix === true)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RawTexture`](RawTexture.md)\>

a raw texture containing the data

***

### prepare()

> **prepare**(`dontCheckFrameId?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:569](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L569)

Build all resources required to render a skeleton

#### Parameters

##### dontCheckFrameId?

`boolean` = `false`

defines a boolean indicating if prepare should be run without checking first the current frame id (default: false)

#### Returns

`void`

***

### returnToRest()

> **returnToRest**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:405](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L405)

Forces the skeleton to go to rest pose

#### Returns

`void`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:806](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L806)

Serialize the skeleton in a JSON object

#### Returns

`any`

a JSON object

***

### setCurrentPoseAsRest()

> **setCurrentPoseAsRest**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:1014](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L1014)

Set the current local matrix as the restPose for all bones in the skeleton.

#### Returns

`void`

***

### sortBones()

> **sortBones**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:977](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L977)

Sorts bones per internal index

#### Returns

`void`

***

### toString()

> **toString**(`fullDetails?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L239)

Gets a string representing the current skeleton data

#### Parameters

##### fullDetails?

`boolean`

defines a boolean indicating if we want a verbose version

#### Returns

`string`

a string representing the current skeleton data

***

### MakeAnimationAdditive()

> `static` **MakeAnimationAdditive**(`skeleton`, `referenceFrame?`, `range`): [`Nullable`](../type-aliases/Nullable.md)\<`Skeleton`\>

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:451](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L451)

Convert the keyframes for a range of animation on a skeleton to be relative to a given reference frame.

#### Parameters

##### skeleton

`Skeleton`

defines the Skeleton containing the animation range to convert

##### referenceFrame?

`number` = `0`

defines the frame that keyframes in the range will be relative to

##### range

`string`

defines the name of the AnimationRange belonging to the Skeleton to convert

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Skeleton`\>

the original skeleton

***

### Parse()

> `static` **Parse**(`parsedSkeleton`, `scene`): `Skeleton`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/skeleton.ts:879](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/skeleton.ts#L879)

Creates a new skeleton from serialized data

#### Parameters

##### parsedSkeleton

`any`

defines the serialized data

##### scene

[`Scene`](Scene.md)

defines the hosting scene

#### Returns

`Skeleton`

a new skeleton
