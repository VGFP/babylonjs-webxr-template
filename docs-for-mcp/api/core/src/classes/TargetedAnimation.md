[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TargetedAnimation

# Class: TargetedAnimation

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L19)

This class defines the direct association between an animation and a target

## Constructors

### Constructor

> **new TargetedAnimation**(`parent`): `TargetedAnimation`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L47)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L23)

Animation to perform

***

### parent

> `readonly` **parent**: [`AnimationGroup`](AnimationGroup.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L47)

The animation group to which the animation belongs

***

### target

> **target**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L28)

Target to animate

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L33)

Gets or sets the unique id of the targeted animation

## Methods

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L39)

Returns the string "TargetedAnimation"

#### Returns

`string`

"TargetedAnimation"

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L53)

Serialize the object

#### Returns

`any`

the JSON object representing the current entity
