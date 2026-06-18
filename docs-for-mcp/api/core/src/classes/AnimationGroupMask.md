[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationGroupMask

# Class: AnimationGroupMask

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroupMask.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroupMask.ts#L20)

Defines a mask used to filter animation targets.
If you apply a mask to an animation group (see the AnimationGroup.mask property), only the animations whose target names match the mask will play.
Note that a target is defined by its name (string). This means that the same mask can be used for several animation groups, provided that their targets are named in the same way.

## Constructors

### Constructor

> **new AnimationGroupMask**(`names?`, `mode?`): `AnimationGroupMask`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroupMask.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroupMask.ts#L36)

Creates a new mask

#### Parameters

##### names?

`string`[]

The list of target names to add to the mask (optional)

##### mode?

[`AnimationGroupMaskMode`](../enumerations/AnimationGroupMaskMode.md) = `AnimationGroupMaskMode.Include`

Defines the mode for the mask (default: AnimationGroupMaskMode.Include)

#### Returns

`AnimationGroupMask`

## Properties

### disabled

> **disabled**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroupMask.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroupMask.ts#L29)

Gets or sets a boolean indicating if the mask is disabled (default is false)

***

### mode

> **mode**: [`AnimationGroupMaskMode`](../enumerations/AnimationGroupMaskMode.md) = `AnimationGroupMaskMode.Include`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroupMask.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroupMask.ts#L41)

[0] Defines the mode for the mask

## Methods

### addTargetName()

> **addTargetName**(`name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroupMask.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroupMask.ts#L53)

Adds one or several target names to the mask

#### Parameters

##### name

`string` \| `string`[]

The name(s) to add to the mask

#### Returns

`void`

***

### hasTarget()

> **hasTarget**(`name`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroupMask.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroupMask.ts#L85)

Checks if the mask includes a target name.
This method is intended to know if a given target name is included in the mask, not if the name is actually retained by the mask (see retainsTarget() instead).

#### Parameters

##### name

`string`

The name to check with the mask

#### Returns

`boolean`

True if the mask includes the name, false otherwise

***

### removeTargetName()

> **removeTargetName**(`name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroupMask.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroupMask.ts#L68)

Removes one or several target names from the mask

#### Parameters

##### name

`string` \| `string`[]

The name(s) to remove from the mask

#### Returns

`void`

***

### retainsTarget()

> **retainsTarget**(`name`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroupMask.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroupMask.ts#L96)

Checks if the mask retains a target name.
Note that in the "Exclude" mode, this will return false if the mask includes the name, and true otherwise!
This method is intended to know if a given target name is retained by the mask, not if the name is in the list of target names.

#### Parameters

##### name

`string`

The name to check with the mask

#### Returns

`boolean`

True if the mask retains the name, false otherwise
