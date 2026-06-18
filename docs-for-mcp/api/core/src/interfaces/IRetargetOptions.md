[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IRetargetOptions

# Interface: IRetargetOptions

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatorAvatar.ts#L22)

Options for retargeting an animation group to an avatar.

## Properties

### animationGroupName?

> `optional` **animationGroupName?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatorAvatar.ts#L27)

The name to assign to the (cloned) retargeted animation group.
If not specified, the same name as the original animation group will be used.

***

### checkHierarchy?

> `optional` **checkHierarchy?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatorAvatar.ts#L40)

If true, the parent hierarchy of bones and transform nodes will be checked during retargeting.
Animations will be removed if the hierarchies don't match.
Default is false.

***

### fixAnimations?

> `optional` **fixAnimations?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatorAvatar.ts#L33)

If true, the retargeted animations will be fixed to correct common issues like orthogonal quaternions.
Default is false.

***

### fixGroundReference?

> `optional` **fixGroundReference?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatorAvatar.ts#L62)

If true, adjusts the root position animation to correct for ground reference height differences between the source and target avatars.
This ensures that the animated character maintains proper contact with the ground during retargeting.
Requires groundReferenceNodeName to be specified to determine the ground reference point in the source animation.
Default is false.

***

### fixGroundReferenceDynamicRefNode?

> `optional` **fixGroundReferenceDynamicRefNode?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatorAvatar.ts#L70)

If true, adjusts the ground reference dynamically during retargeting. fixGroundReference must be true for this to work.
When enabled, the system will continuously adjust the ground reference point throughout the retargeting process to make sure it's the lowest point of the character.
This allows for more accurate ground contact correction, especially in animations where groundReferenceNodeName is not always the lowest point (e.g., walking, running).
Default is false.

***

### fixRootPosition?

> `optional` **fixRootPosition?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatorAvatar.ts#L54)

If true, scales and adjusts the root position animation to account for size differences between the source and target avatars.
This helps maintain the relative motion of the character when retargeting between avatars of different proportions.
Default is true.

***

### groundReferenceNodeName?

> `optional` **groundReferenceNodeName?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatorAvatar.ts#L85)

The name of the transform node in the source animation group used as a ground reference point (typically a foot bone like "LeftFoot" or "RightFoot").
This bone is used to determine the vertical offset needed to maintain proper ground contact during retargeting.
Required when fixGroundReference or fixRootPosition is enabled.

***

### groundReferenceVerticalAxis?

> `optional` **groundReferenceVerticalAxis?**: `""` \| `"X"` \| `"Y"` \| `"Z"`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatorAvatar.ts#L94)

Specifies which axis represents the vertical/up direction in the animation space.
Use "X", "Y", or "Z" to explicitly set the vertical axis, or "" (empty string) / undefined to auto-detect.
If not specified or empty, the system will automatically determine the vertical axis based on the difference
between the root node and ground reference node positions.
Default is undefined (auto-detect).

***

### mapNodeNames?

> `optional` **mapNodeNames?**: `Map`\<`string`, `string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatorAvatar.ts#L101)

A map for renaming nodes during retargeting when the source transform node hierarchy and target skeleton use different naming conventions.
The map keys are the original node names from the source animation group, and the values are the corresponding
node names in the target skeleton. This is useful when bone names don't match between avatars.

***

### retargetAnimationKeys?

> `optional` **retargetAnimationKeys?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatorAvatar.ts#L47)

If true, the frame values in the animation keyframes will be adjusted during retargeting to account for differences
between the source and target bone transforms.
Default is true.

***

### rootNodeName?

> `optional` **rootNodeName?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatorAvatar.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatorAvatar.ts#L78)

The name of the root transform node in the source animation group (typically "Hips" or similar).
If not specified, the system will attempt to automatically find the first bone without a parent.
This bone is used as a reference point for fixing root position during retargeting.
It's also used by the ground reference fixing processing.
