[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationGroup

# Class: AnimationGroup

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L81)

Use this class to create coordinated animations on multiple targets

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new AnimationGroup**(`name`, `scene?`, `weight?`, `playOrder?`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:477](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L477)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L141)

Gets or sets an object used to store user defined information for the node

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:479](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L479)

The name of the animation group

***

### onAnimationEndObservable

> **onAnimationEndObservable**: [`Observable`](Observable.md)\<[`TargetedAnimation`](TargetedAnimation.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L111)

This observable will notify when one animation have ended

***

### onAnimationGroupEndObservable

> **onAnimationGroupEndObservable**: [`Observable`](Observable.md)\<`AnimationGroup`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L126)

This observable will notify when all animations have ended.

***

### onAnimationGroupLoopObservable

> **onAnimationGroupLoopObservable**: [`Observable`](Observable.md)\<`AnimationGroup`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L121)

Observer raised when all animations have looped

***

### onAnimationGroupPauseObservable

> **onAnimationGroupPauseObservable**: [`Observable`](Observable.md)\<`AnimationGroup`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L131)

This observable will notify when all animations have paused.

***

### onAnimationGroupPlayObservable

> **onAnimationGroupPlayObservable**: [`Observable`](Observable.md)\<`AnimationGroup`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L136)

This observable will notify when all animations are playing.

***

### onAnimationLoopObservable

> **onAnimationLoopObservable**: [`Observable`](Observable.md)\<[`TargetedAnimation`](TargetedAnimation.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L116)

Observer raised when one animation loops

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L106)

Gets or sets the unique id of the node

## Accessors

### animatables

#### Get Signature

> **get** **animatables**(): [`Animatable`](Animatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:365](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L365)

returning the list of animatables controlled by this animation group.

##### Returns

[`Animatable`](Animatable.md)[]

***

### blendingSpeed

#### Get Signature

> **get** **blendingSpeed**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:425](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L425)

Gets or sets the animation blending speed
Note that a null value means that each animation will use their own existing blending configuration (Animation.blendingSpeed)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **blendingSpeed**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:429](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L429)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

***

### children

#### Get Signature

> **get** **children**(): [`TargetedAnimation`](TargetedAnimation.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:372](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L372)

Gets the list of target animations

##### Returns

[`TargetedAnimation`](TargetedAnimation.md)[]

***

### enableBlending

#### Get Signature

> **get** **enableBlending**(): [`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:403](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L403)

Allows the animations of the animation group to blend with current running animations
Note that a null value means that each animation will use their own existing blending configuration (Animation.enableBlending)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

#### Set Signature

> **set** **enableBlending**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L407)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

##### Returns

`void`

***

### from

#### Get Signature

> **get** **from**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L225)

Gets or sets the first frame

##### Returns

`number`

#### Set Signature

> **set** **from**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L229)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### isAdditive

#### Get Signature

> **get** **isAdditive**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L322)

Gets or sets if all animations should be evaluated additively

##### Returns

`boolean`

#### Set Signature

> **set** **isAdditive**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:326](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L326)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isPlaying

#### Get Signature

> **get** **isPlaying**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:272](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L272)

Gets a value indicating that the current group is playing

##### Returns

`boolean`

***

### isStarted

#### Get Signature

> **get** **isStarted**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:265](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L265)

Define if the animations are started

##### Returns

`boolean`

***

### loopAnimation

#### Get Signature

> **get** **loopAnimation**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:302](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L302)

Gets or sets if all animations should loop or not

##### Returns

`boolean`

#### Set Signature

> **set** **loopAnimation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:306](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L306)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### mask

#### Get Signature

> **get** **mask**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationGroupMask`](AnimationGroupMask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L148)

Gets or sets the mask associated with this animation group. This mask is used to filter which objects should be animated.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationGroupMask`](AnimationGroupMask.md)\>

#### Set Signature

> **set** **mask**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L152)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationGroupMask`](AnimationGroupMask.md)\>

##### Returns

`void`

***

### playOrder

#### Get Signature

> **get** **playOrder**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:379](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L379)

Gets or sets the order of play of the animation group (default: 0)

##### Returns

`number`

#### Set Signature

> **set** **playOrder**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:383](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L383)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### speedRatio

#### Get Signature

> **get** **speedRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:279](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L279)

Gets or sets the speed ratio to use for all animations

##### Returns

`number`

#### Set Signature

> **set** **speedRatio**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:286](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L286)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:358](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L358)

Gets the targeted animations for this animation group

##### Returns

[`TargetedAnimation`](TargetedAnimation.md)[]

***

### to

#### Get Signature

> **get** **to**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L245)

Gets or sets the last frame

##### Returns

`number`

#### Set Signature

> **set** **to**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:249](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L249)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### weight

#### Get Signature

> **get** **weight**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:342](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L342)

Gets or sets the weight to apply to all animations of the group

##### Returns

`number`

#### Set Signature

> **set** **weight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:346](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L346)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### addTargetedAnimation()

> **addTargetedAnimation**(`animation`, `target`): [`TargetedAnimation`](TargetedAnimation.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:498](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L498)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:904](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L904)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:853](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L853)

Dispose all associated resources

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:967](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L967)

Returns the string "AnimationGroup"

#### Returns

`string`

"AnimationGroup"

***

### getCurrentFrame()

> **getCurrentFrame**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:846](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L846)

Helper to get the current frame. This will return 0 if the AnimationGroup is not running, and it might return wrong results if multiple animations are running in different frames.

#### Returns

`number`

current animation frame.

***

### getLength()

> **getLength**(`from?`, `to?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:451](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L451)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:464](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L464)

Gets the scene the animation group belongs to

#### Returns

[`Scene`](Scene.md)

The scene the animation group belongs to

***

### goToFrame()

> **goToFrame**(`frame`, `useWeight?`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:829](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L829)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:546](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L546)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:673](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L673)

Pause all animations

#### Returns

`AnimationGroup`

the animation group

***

### play()

> **play**(`loop?`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:696](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L696)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:530](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L530)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L195)

Removes all animations for the targets not retained by the animation group mask.
Use this function if you know you won't need those animations anymore and if you want to free memory.

#### Returns

`void`

***

### reset()

> **reset**(): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:715](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L715)

Reset all animations to initial state

#### Returns

`AnimationGroup`

the animation group

***

### restart()

> **restart**(): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:735](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L735)

Restart animations from after pausing it

#### Returns

`AnimationGroup`

the animation group

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:931](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L931)

Serializes the animationGroup to an object

#### Returns

`any`

Serialized object

***

### setWeightForAllAnimatables()

> **setWeightForAllAnimatables**(`weight`): `AnimationGroup`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:799](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L799)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:620](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L620)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:759](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L759)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:814](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L814)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:167](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L167)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animationGroup.pure.ts:976](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animationGroup.pure.ts#L976)

Creates a detailed string about the object

#### Parameters

##### fullDetails?

`boolean`

defines if the output string will support multiple levels of logging within scene loading

#### Returns

`string`

a string representing the object
