[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationGroup

# Class: AnimationGroup

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L80)

Use this class to create coordinated animations on multiple targets

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new AnimationGroup**(`name`, `scene?`, `weight?`, `playOrder?`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:525](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L525)

Instantiates a new Animation Group.
This helps managing several animations at once.

#### Parameters

##### name

`string`

Defines the name of the group

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\> = `null`

Defines the scene the group belongs to

##### weight?

`number` = `-1`

Defines the weight to use for animations in the group (-1.0 by default, meaning "no weight")

##### playOrder?

`number` = `0`

Defines the order of play of the animation group (default is 0)

#### Returns

`AnimationGroup`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/groupAnimations

## Properties

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L140)

Gets or sets an object used to store user defined information for the node

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:527](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L527)

The name of the animation group

***

### onAnimationEndObservable

> **onAnimationEndObservable**: [`Observable`](Observable.md)\<[`TargetedAnimation`](TargetedAnimation.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L110)

This observable will notify when one animation have ended

***

### onAnimationGroupEndObservable

> **onAnimationGroupEndObservable**: [`Observable`](Observable.md)\<`AnimationGroup`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L125)

This observable will notify when all animations have ended.

***

### onAnimationGroupLoopObservable

> **onAnimationGroupLoopObservable**: [`Observable`](Observable.md)\<`AnimationGroup`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L120)

Observer raised when all animations have looped

***

### onAnimationGroupPauseObservable

> **onAnimationGroupPauseObservable**: [`Observable`](Observable.md)\<`AnimationGroup`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L130)

This observable will notify when all animations have paused.

***

### onAnimationGroupPlayObservable

> **onAnimationGroupPlayObservable**: [`Observable`](Observable.md)\<`AnimationGroup`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L135)

This observable will notify when all animations are playing.

***

### onAnimationLoopObservable

> **onAnimationLoopObservable**: [`Observable`](Observable.md)\<[`TargetedAnimation`](TargetedAnimation.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L115)

Observer raised when one animation loops

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L105)

Gets or sets the unique id of the node

## Accessors

### animatables

#### Get Signature

> **get** **animatables**(): [`Animatable`](Animatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:364](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L364)

returning the list of animatables controlled by this animation group.

##### Returns

[`Animatable`](Animatable.md)[]

***

### blendingSpeed

#### Get Signature

> **get** **blendingSpeed**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:424](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L424)

Gets or sets the animation blending speed
Note that a null value means that each animation will use their own existing blending configuration (Animation.blendingSpeed)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **blendingSpeed**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:428](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L428)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

***

### children

#### Get Signature

> **get** **children**(): [`TargetedAnimation`](TargetedAnimation.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:371](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L371)

Gets the list of target animations

##### Returns

[`TargetedAnimation`](TargetedAnimation.md)[]

***

### enableBlending

#### Get Signature

> **get** **enableBlending**(): [`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:402](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L402)

Allows the animations of the animation group to blend with current running animations
Note that a null value means that each animation will use their own existing blending configuration (Animation.enableBlending)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

#### Set Signature

> **set** **enableBlending**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:406](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L406)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

##### Returns

`void`

***

### from

#### Get Signature

> **get** **from**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L224)

Gets or sets the first frame

##### Returns

`number`

#### Set Signature

> **set** **from**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:228](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L228)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### isAdditive

#### Get Signature

> **get** **isAdditive**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:321](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L321)

Gets or sets if all animations should be evaluated additively

##### Returns

`boolean`

#### Set Signature

> **set** **isAdditive**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:325](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L325)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isPlaying

#### Get Signature

> **get** **isPlaying**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L271)

Gets a value indicating that the current group is playing

##### Returns

`boolean`

***

### isStarted

#### Get Signature

> **get** **isStarted**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:264](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L264)

Define if the animations are started

##### Returns

`boolean`

***

### loopAnimation

#### Get Signature

> **get** **loopAnimation**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:301](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L301)

Gets or sets if all animations should loop or not

##### Returns

`boolean`

#### Set Signature

> **set** **loopAnimation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:305](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L305)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### mask

#### Get Signature

> **get** **mask**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationGroupMask`](AnimationGroupMask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:147](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L147)

Gets or sets the mask associated with this animation group. This mask is used to filter which objects should be animated.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationGroupMask`](AnimationGroupMask.md)\>

#### Set Signature

> **set** **mask**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L151)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationGroupMask`](AnimationGroupMask.md)\>

##### Returns

`void`

***

### playOrder

#### Get Signature

> **get** **playOrder**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:378](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L378)

Gets or sets the order of play of the animation group (default: 0)

##### Returns

`number`

#### Set Signature

> **set** **playOrder**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:382](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L382)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### speedRatio

#### Get Signature

> **get** **speedRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:278](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L278)

Gets or sets the speed ratio to use for all animations

##### Returns

`number`

#### Set Signature

> **set** **speedRatio**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L285)

Gets or sets the speed ratio to use for all animations

##### Parameters

###### value

`number`

##### Returns

`void`

***

### targetedAnimations

#### Get Signature

> **get** **targetedAnimations**(): [`TargetedAnimation`](TargetedAnimation.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:357](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L357)

Gets the targeted animations for this animation group

##### Returns

[`TargetedAnimation`](TargetedAnimation.md)[]

***

### to

#### Get Signature

> **get** **to**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:244](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L244)

Gets or sets the last frame

##### Returns

`number`

#### Set Signature

> **set** **to**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:248](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L248)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### weight

#### Get Signature

> **get** **weight**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:341](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L341)

Gets or sets the weight to apply to all animations of the group

##### Returns

`number`

#### Set Signature

> **set** **weight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L345)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### addTargetedAnimation()

> **addTargetedAnimation**(`animation`, `target`): [`TargetedAnimation`](TargetedAnimation.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:546](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L546)

Add an animation (with its target) in the group

#### Parameters

##### animation

[`Animation`](Animation.md)

defines the animation we want to add

##### target

`any`

defines the target of the animation

#### Returns

[`TargetedAnimation`](TargetedAnimation.md)

the TargetedAnimation object

***

### clone()

> **clone**(`newName`, `targetConverter?`, `cloneAnimations?`, `cloneAnimationKeys?`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:952](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L952)

Clone the current animation group and returns a copy

#### Parameters

##### newName

`string`

defines the name of the new group

##### targetConverter?

(`oldTarget`) => `any`

defines an optional function used to convert current animation targets to new ones

##### cloneAnimations?

`boolean` = `false`

defines if the animations should be cloned or referenced

##### cloneAnimationKeys?

`boolean` = `false`

defines if the animation keys should be cloned when cloning animations (false by default). No effect if cloneAnimations is false

#### Returns

`AnimationGroup`

the new animation group

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:901](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L901)

Dispose all associated resources

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:1287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L1287)

Returns the string "AnimationGroup"

#### Returns

`string`

"AnimationGroup"

***

### getCurrentFrame()

> **getCurrentFrame**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:894](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L894)

Helper to get the current frame. This will return 0 if the AnimationGroup is not running, and it might return wrong results if multiple animations are running in different frames.

#### Returns

`number`

current animation frame.

***

### getLength()

> **getLength**(`from?`, `to?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:450](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L450)

Gets the length (in seconds) of the animation group
This function assumes that all animations are played at the same framePerSecond speed!
Note: you can only call this method after you've added at least one targeted animation!

#### Parameters

##### from?

`number`

Starting frame range (default is AnimationGroup.from)

##### to?

`number`

Ending frame range (default is AnimationGroup.to)

#### Returns

`number`

The length in seconds

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:512](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L512)

Gets the scene the animation group belongs to

#### Returns

[`Scene`](Scene.md)

The scene the animation group belongs to

***

### goToFrame()

> **goToFrame**(`frame`, `useWeight?`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:877](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L877)

Goes to a specific frame in this animation group. Note that the animation group must be in playing or paused status

#### Parameters

##### frame

`number`

the frame number to go to

##### useWeight?

`boolean` = `false`

defines whether the animation weight should be applied to the image to be jumped to (false by default)

#### Returns

`AnimationGroup`

the animationGroup

***

### normalize()

> **normalize**(`beginFrame?`, `endFrame?`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:594](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L594)

This function will normalize every animation in the group to make sure they all go from beginFrame to endFrame
It can add constant keys at begin or end

#### Parameters

##### beginFrame?

[`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

defines the new begin frame for all animations or the smallest begin frame of all animations if null (defaults to null)

##### endFrame?

[`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

defines the new end frame for all animations or the largest end frame of all animations if null (defaults to null)

#### Returns

`AnimationGroup`

the animation group

***

### pause()

> **pause**(): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:721](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L721)

Pause all animations

#### Returns

`AnimationGroup`

the animation group

***

### play()

> **play**(`loop?`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:744](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L744)

Play all animations to initial state
This function will start() the animations if they were not started or will restart() them if they were paused

#### Parameters

##### loop?

`boolean`

defines if animations must loop

#### Returns

`AnimationGroup`

the animation group

***

### removeTargetedAnimation()

> **removeTargetedAnimation**(`animation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:578](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L578)

Remove an animation from the group

#### Parameters

##### animation

[`Animation`](Animation.md)

defines the animation we want to remove

#### Returns

`void`

***

### removeUnmaskedAnimations()

> **removeUnmaskedAnimations**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L194)

Removes all animations for the targets not retained by the animation group mask.
Use this function if you know you won't need those animations anymore and if you want to free memory.

#### Returns

`void`

***

### reset()

> **reset**(): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:763](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L763)

Reset all animations to initial state

#### Returns

`AnimationGroup`

the animation group

***

### restart()

> **restart**(): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:783](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L783)

Restart animations from after pausing it

#### Returns

`AnimationGroup`

the animation group

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:979](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L979)

Serializes the animationGroup to an object

#### Returns

`any`

Serialized object

***

### setWeightForAllAnimatables()

> **setWeightForAllAnimatables**(`weight`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:847](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L847)

**`Since`**

Set animation weight for all animatables

 6.12.4
 You can pass the weight to the AnimationGroup constructor, or use the weight property to set it after the group has been created,
 making it easier to define the overall animation weight than calling setWeightForAllAnimatables() after the animation group has been started

#### Parameters

##### weight

`number`

defines the weight to use

#### Returns

`AnimationGroup`

the animationGroup

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#animation-weights

***

### start()

> **start**(`loop?`, `speedRatio?`, `from?`, `to?`, `isAdditive?`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:668](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L668)

Start all animations on given targets

#### Parameters

##### loop?

`boolean` = `false`

defines if animations must loop

##### speedRatio?

`number` = `1`

defines the ratio to apply to animation speed (1 by default)

##### from?

`number`

defines the from key (optional)

##### to?

`number`

defines the to key (optional)

##### isAdditive?

`boolean`

defines the additive state for the resulting animatables (optional)

#### Returns

`AnimationGroup`

the current animation group

***

### stop()

> **stop**(`skipOnAnimationEnd?`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:807](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L807)

Stop all animations

#### Parameters

##### skipOnAnimationEnd?

`boolean` = `false`

defines if the system should not raise onAnimationEnd. Default is false

#### Returns

`AnimationGroup`

the animation group

***

### syncAllAnimationsWith()

> **syncAllAnimationsWith**(`root`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:862](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L862)

Synchronize and normalize all animatables with a source animatable

#### Parameters

##### root

[`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

defines the root animatable to synchronize with (null to stop synchronizing)

#### Returns

`AnimationGroup`

the animationGroup

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#animation-weights

***

### syncWithMask()

> **syncWithMask**(`forceUpdate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L166)

Makes sure that the animations are either played or stopped according to the animation group mask.
Note however that the call won't have any effect if the animation group has not been started yet.

#### Parameters

##### forceUpdate?

`boolean` = `false`

If true, forces to loop over the animatables even if no mask is defined (used internally, you shouldn't need to use it). Default: false.

#### Returns

`void`

***

### toString()

> **toString**(`fullDetails?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:1296](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L1296)

Creates a detailed string about the object

#### Parameters

##### fullDetails?

`boolean`

defines if the output string will support multiple levels of logging within scene loading

#### Returns

`string`

a string representing the object

***

### ClipFrames()

> `static` **ClipFrames**(`sourceAnimationGroup`, `fromFrame`, `toFrame`, `name?`, `dontCloneAnimations?`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:1194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L1194)

Creates a new animation, keeping only the frames that are inside a given frame range

#### Parameters

##### sourceAnimationGroup

`AnimationGroup`

defines the animation group on which to operate

##### fromFrame

`number`

defines the lower bound of the range

##### toFrame

`number`

defines the upper bound of the range

##### name?

`string`

defines the name of the new animation group. If not provided, use the same name as animationGroup

##### dontCloneAnimations?

`boolean`

defines whether or not the animations should be cloned before clipping the frames. Default is false, so animations will be cloned

#### Returns

`AnimationGroup`

a new animation group stripped from all the frames outside the given range

***

### ClipFramesInPlace()

> `static` **ClipFramesInPlace**(`animationGroup`, `fromFrame`, `toFrame`, `dontCloneAnimations?`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:1208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L1208)

Updates an existing animation, keeping only the frames that are inside a given frame range

#### Parameters

##### animationGroup

`AnimationGroup`

defines the animation group on which to operate

##### fromFrame

`number`

defines the lower bound of the range

##### toFrame

`number`

defines the upper bound of the range

##### dontCloneAnimations?

`boolean`

defines whether or not the animations should be cloned before clipping the frames. Default is false, so animations will be cloned

#### Returns

`AnimationGroup`

the animationGroup stripped from all the frames outside the given range

***

### ClipInPlace()

> `static` **ClipInPlace**(`animationGroup`, `start`, `end`, `dontCloneAnimations?`, `useFrame?`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:1221](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L1221)

Updates an existing animation, keeping only the keys that are inside a given key or frame range

#### Parameters

##### animationGroup

`AnimationGroup`

defines the animation group on which to operate

##### start

`number`

defines the lower bound of the range

##### end

`number`

defines the upper bound of the range

##### dontCloneAnimations?

`boolean`

defines whether or not the animations should be cloned before clipping the keys. Default is false, so animations will be cloned

##### useFrame?

`boolean` = `false`

defines if the range is defined by frame numbers or key indices (default is false which means use key indices)

#### Returns

`AnimationGroup`

the animationGroup stripped from all the keys outside the given range

***

### ClipKeys()

> `static` **ClipKeys**(`sourceAnimationGroup`, `fromKey`, `toKey`, `name?`, `dontCloneAnimations?`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:1167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L1167)

Creates a new animation, keeping only the keys that are inside a given key range

#### Parameters

##### sourceAnimationGroup

`AnimationGroup`

defines the animation group on which to operate

##### fromKey

`number`

defines the lower bound of the range

##### toKey

`number`

defines the upper bound of the range

##### name?

`string`

defines the name of the new animation group. If not provided, use the same name as animationGroup

##### dontCloneAnimations?

`boolean`

defines whether or not the animations should be cloned before clipping the keys. Default is false, so animations will be cloned

#### Returns

`AnimationGroup`

a new animation group stripped from all the keys outside the given range

***

### ClipKeysInPlace()

> `static` **ClipKeysInPlace**(`animationGroup`, `fromKey`, `toKey`, `dontCloneAnimations?`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:1181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L1181)

Updates an existing animation, keeping only the keys that are inside a given key range

#### Parameters

##### animationGroup

`AnimationGroup`

defines the animation group on which to operate

##### fromKey

`number`

defines the lower bound of the range

##### toKey

`number`

defines the upper bound of the range

##### dontCloneAnimations?

`boolean`

defines whether or not the animations should be cloned before clipping the keys. Default is false, so animations will be cloned

#### Returns

`AnimationGroup`

the animationGroup stripped from all the keys outside the given range

***

### MergeAnimationGroups()

> `static` **MergeAnimationGroups**(`animationGroups`, `disposeSource?`, `normalize?`, `weight?`): [`Nullable`](../type-aliases/Nullable.md)\<`AnimationGroup`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:467](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L467)

Merge the array of animation groups into a new animation group

#### Parameters

##### animationGroups

`AnimationGroup`[]

List of animation groups to merge

##### disposeSource?

`boolean` = `true`

If true, animation groups will be disposed after being merged (default: true)

##### normalize?

`boolean` = `false`

If true, animation groups will be normalized before being merged, so that all animations have the same "from" and "to" frame (default: false)

##### weight?

`number`

Weight for the new animation group. If not provided, it will inherit the weight from the first animation group of the array

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`AnimationGroup`\>

The new animation group or null if no animation groups were passed

***

### Parse()

> `static` **Parse**(`parsedAnimationGroup`, `scene`, `targetLookup?`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.ts:1019](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animationGroup.ts#L1019)

Returns a new AnimationGroup object parsed from the source provided.

#### Parameters

##### parsedAnimationGroup

`any`

defines the source

##### scene

[`Scene`](Scene.md)

defines the scene that will receive the animationGroup

##### targetLookup?

(`parsedTargetAnimation`) => `any`

a callback that will be used instead of the default lookup

#### Returns

`AnimationGroup`

a new AnimationGroup
