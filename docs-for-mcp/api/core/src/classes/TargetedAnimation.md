[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TargetedAnimation

# Class: TargetedAnimation

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L20)

This class defines the direct association between an animation and a target

## Constructors

### Constructor

> **new TargetedAnimation**(`parent`): `TargetedAnimation`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L48)

Creates a new targeted animation

#### Parameters

##### parent

[`AnimationGroup`](AnimationGroup.md)

The animation group to which the animation belongs

#### Returns

`TargetedAnimation`

## Properties

### animation

> **animation**: [`Animation`](Animation.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L24)

Animation to perform

***

### parent

> `readonly` **parent**: [`AnimationGroup`](AnimationGroup.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L48)

The animation group to which the animation belongs

***

### target

> **target**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L29)

Target to animate

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L34)

Gets or sets the unique id of the targeted animation

## Methods

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L40)

Returns the string "TargetedAnimation"

#### Returns

`string`

"TargetedAnimation"

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L54)

Serialize the object

#### Returns

`any`

the JSON object representing the current entity
