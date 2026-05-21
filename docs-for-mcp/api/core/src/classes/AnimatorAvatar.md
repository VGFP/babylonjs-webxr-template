[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimatorAvatar

# Class: AnimatorAvatar

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatorAvatar.ts#L115)

Represents an animator avatar that manages meshes, skeletons and morph target managers for a hierarchical transform node and mesh structure.
This class is used to group and manage animation-related resources (meshes, skeletons and morph targets) associated with a root transform node and its descendants.

## Constructors

### Constructor

> **new AnimatorAvatar**(`name`, `rootNode?`, `_disposeResources?`, `setAvatarName?`): `AnimatorAvatar`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatorAvatar.ts#L156)

Creates an instance of AnimatorAvatar.

#### Parameters

##### name

`string`

The name to assign to this avatar and its root node

##### rootNode?

[`TransformNode`](TransformNode.md)

The root node of the avatar hierarchy. This node and its descendants will be scanned for meshes, skeletons and morph target managers. If not provided, you are expected to manually manage meshes, skeletons and morph target managers.

##### \_disposeResources?

`boolean` = `true`

Indicates whether to dispose of resources (meshes, skeletons, morph target managers, root node and descendants + materials and textures) when the avatar is disposed (true by default)

##### setAvatarName?

`boolean` = `true`

Indicates whether to set the name of the root node to the avatar name. Default is true. Set this to false if you don't want the root node to be renamed, or if you want to set it to a different name after creating the avatar.

#### Returns

`AnimatorAvatar`

## Properties

### meshes

> **meshes**: [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatorAvatar.ts#L119)

List of meshes found in the hierarchy of the root node. Only meshes with at least one vertex are included.

***

### morphTargetManagers

> **morphTargetManagers**: `Set`\<[`MorphTargetManager`](MorphTargetManager.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatorAvatar.ts#L130)

Set of morph target managers found in the mesh hierarchy.
Each morph target manager is configured with the appropriate mesh name and influencer count.

***

### name

> `readonly` **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatorAvatar.ts#L157)

The name to assign to this avatar and its root node

***

### rootNode?

> `readonly` `optional` **rootNode?**: [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatorAvatar.ts#L158)

The root node of the avatar hierarchy. This node and its descendants will be scanned for meshes, skeletons and morph target managers. If not provided, you are expected to manually manage meshes, skeletons and morph target managers.

***

### showWarnings

> **showWarnings**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:147](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatorAvatar.ts#L147)

Indicates whether to show warnings during retargeting operations.

***

### skeletons

> **skeletons**: `Set`\<[`Skeleton`](Skeleton.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatorAvatar.ts#L124)

Set of skeletons found in the mesh hierarchy.

## Accessors

### mapMorphTargetNameToMorphTarget

#### Get Signature

> **get** **mapMorphTargetNameToMorphTarget**(): [`Immutable`](../type-aliases/Immutable.md)\<`Map`\<`string`, [`MorphTarget`](MorphTarget.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatorAvatar.ts#L137)

Map of morph target names to their corresponding MorphTarget instances.
The keys are constructed using the format "meshName_morphTargetName".

##### Returns

[`Immutable`](../type-aliases/Immutable.md)\<`Map`\<`string`, [`MorphTarget`](MorphTarget.md)\>\>

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:479](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatorAvatar.ts#L479)

Disposes of the avatar and releases all associated resources.
This will dispose all skeletons, morph target managers, and the root mesh with its descendants (including materials and textures).
If disposeResources was set to false in the constructor, this method does nothing.

#### Returns

`void`

***

### findBoneByName()

> **findBoneByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Bone`](Bone.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:233](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatorAvatar.ts#L233)

Finds a bone in the avatar's skeletons by its name.

#### Parameters

##### name

`string`

The name of the bone

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Bone`](Bone.md)\>

The found bone or null if not found

***

### findBoneByTransformNode()

> **findBoneByTransformNode**(`nameOrTransformNode`): [`Nullable`](../type-aliases/Nullable.md)\<[`Bone`](Bone.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:205](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatorAvatar.ts#L205)

Finds a bone in the avatar's skeletons by its linked transform node or the name of the linked transform node.

#### Parameters

##### nameOrTransformNode

`string` \| [`TransformNode`](TransformNode.md)

The linked transform node or the name of the linked transform node

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Bone`](Bone.md)\>

The found bone or null if not found

***

### retargetAnimationGroup()

> **retargetAnimationGroup**(`sourceAnimationGroup`, `options?`): [`AnimationGroup`](AnimationGroup.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:260](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatorAvatar.ts#L260)

Make sures that the animation group passed as the first parameter will animate the bones in the skeleton(s) / the morphs in the morph target manager(s) of the avatar.
Retargeting is based on the names of the targets (TransformNode or MorphTarget) in the animation and the names of the bones in the skeleton / morph targets in the morph target manager.
Note that you can use the mapNodeNames option to specify a mapping between source transform node names and target bone names in case they are different.
If no bones with the same name as a target (TransformNode) of a targeted animation are found, the targeted animation is removed from the animation group.
Same for morph targets.
Note that for the time being, we only support a source animation group which animates transform nodes, not bones!
That's typically the case when the source animation group is created from a glTF file, as glTF animations always target transform nodes.

#### Parameters

##### sourceAnimationGroup

[`AnimationGroup`](AnimationGroup.md)

The animation group to retarget

##### options?

[`IRetargetOptions`](../interfaces/IRetargetOptions.md)

Options for retargeting the animation group (optional)

#### Returns

[`AnimationGroup`](AnimationGroup.md)

The retargeted (new) animation group
