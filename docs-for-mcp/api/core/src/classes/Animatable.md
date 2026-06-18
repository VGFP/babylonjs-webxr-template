[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Animatable

# Class: Animatable

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L14)

Class used to store an actual running animation

## Constructors

### Constructor

> **new Animatable**(`scene`, `target`, `fromFrame?`, `toFrame?`, `loopAnimation?`, `speedRatio?`, `onAnimationEnd?`, `animations?`, `onAnimationLoop?`, `isAdditive?`, `playOrder?`): `Animatable`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L136)

Creates a new Animatable

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### target

`any`

defines the target object

##### fromFrame?

`number` = `0`

defines the starting frame number (default is 0)

##### toFrame?

`number` = `100`

defines the ending frame number (default is 100)

##### loopAnimation?

`boolean` = `false`

defines if the animation must loop (default is false)

##### speedRatio?

`number` = `1.0`

defines the factor to apply to animation speed (default is 1)

##### onAnimationEnd?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\>

defines a callback to call when animation ends if it is not looping

##### animations?

[`Animation`](Animation.md)[]

defines a group of animation to add to the new Animatable

##### onAnimationLoop?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\>

defines a callback to call when animation loops

##### isAdditive?

`boolean` = `false`

defines whether the animation should be evaluated additively

##### playOrder?

`number` = `0`

defines the order in which this animatable should be processed in the list of active animatables (default: 0)

#### Returns

`Animatable`

## Properties

### animationPropertiesOverride?

> `optional` **animationPropertiesOverride?**: [`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)

Defined in: [babylonjs-source/packages/dev/inspector-v2/src/components/properties/animation/animationsProperties.tsx:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/inspector-v2/src/components/properties/animation/animationsProperties.tsx#L34)

***

### animationStarted

> **animationStarted**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L45)

Gets a boolean indicating if the animation has started

***

### disposeOnEnd

> **disposeOnEnd**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L40)

Gets or sets a boolean indicating if the animatable must be disposed and removed at the end of the animation.
This will only apply for non looping animation (default is true)

***

### fromFrame

> **fromFrame**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L141)

[0] defines the starting frame number (default is 0)

***

### isAdditive

> **isAdditive**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L153)

[false] defines whether the animation should be evaluated additively

***

### loopAnimation

> **loopAnimation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L145)

[false] defines if the animation must loop (default is false)

***

### onAnimationEnd?

> `optional` **onAnimationEnd?**: [`Nullable`](../type-aliases/Nullable.md)\<() => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L148)

defines a callback to call when animation ends if it is not looping

***

### onAnimationEndObservable

> **onAnimationEndObservable**: [`Observable`](Observable.md)\<`Animatable`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L50)

Observer raised when the animation ends

***

### onAnimationLoop?

> `optional` **onAnimationLoop?**: [`Nullable`](../type-aliases/Nullable.md)\<() => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L151)

defines a callback to call when animation loops

***

### onAnimationLoopObservable

> **onAnimationLoopObservable**: [`Observable`](Observable.md)\<`Animatable`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L55)

Observer raised when the animation loops

***

### playOrder

> **playOrder**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L155)

[0] defines the order in which this animatable should be processed in the list of active animatables (default: 0)

***

### target

> **target**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L139)

defines the target object

***

### toFrame

> **toFrame**: `number` = `100`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L143)

[100] defines the ending frame number (default is 100)

***

### ProcessPausedAnimatables

> `static` **ProcessPausedAnimatables**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L20)

If true, the animatable will be processed even if it is considered actively paused (weight of 0 and previous weight of 0).
This can be used to force the full processing of paused animatables in the animation engine.
Default is false.

## Accessors

### elapsedTime

#### Get Signature

> **get** **elapsedTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L118)

Gets the elapsed time since the animatable started in milliseconds

##### Returns

`number`

***

### masterFrame

#### Get Signature

> **get** **masterFrame**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L68)

Gets the current frame of the first RuntimeAnimation
Used to synchronize Animatables

##### Returns

`number`

***

### paused

#### Get Signature

> **get** **paused**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:316](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L316)

Returns true if the animations for this animatable are paused

##### Returns

`boolean`

***

### speedRatio

#### Get Signature

> **get** **speedRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L97)

Gets or sets the speed ratio to apply to the animatable (1.0 by default)

##### Returns

`number`

#### Set Signature

> **set** **speedRatio**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L101)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### syncRoot

#### Get Signature

> **get** **syncRoot**(): [`Nullable`](../type-aliases/Nullable.md)\<`Animatable`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L60)

Gets the root Animatable used to synchronize and normalize animations

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Animatable`\>

***

### weight

#### Get Signature

> **get** **weight**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L79)

Gets or sets the animatable weight (-1.0 by default meaning not weighted)

##### Returns

`number`

#### Set Signature

> **set** **weight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L83)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### appendAnimations()

> **appendAnimations**(`target`, `animations`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L201)

Adds more animations to the current animatable

#### Parameters

##### target

`any`

defines the target of the animations

##### animations

[`Animation`](Animation.md)[]

defines the new animations to add

#### Returns

`void`

***

### disableBlending()

> **disableBlending**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L283)

Disable animation blending

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#animation-blending

***

### enableBlending()

> **enableBlending**(`blendingSpeed`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L270)

Allows the animatable to blend with current running animations

#### Parameters

##### blendingSpeed

`number`

defines the blending speed to use

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#animation-blending

***

### getAnimationByTargetProperty()

> **getAnimationByTargetProperty**(`property`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L222)

Gets the source animation for a specific property

#### Parameters

##### property

`string`

defines the property to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)\>

null or the source animation for the given property

***

### getAnimations()

> **getAnimations**(): [`RuntimeAnimation`](RuntimeAnimation.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:192](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L192)

Gets the list of runtime animations

#### Returns

[`RuntimeAnimation`](RuntimeAnimation.md)[]

an array of RuntimeAnimation

***

### getRuntimeAnimationByTargetProperty()

> **getRuntimeAnimationByTargetProperty**(`property`): [`Nullable`](../type-aliases/Nullable.md)\<[`RuntimeAnimation`](RuntimeAnimation.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L239)

Gets the runtime animation for a specific property

#### Parameters

##### property

`string`

defines the property to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RuntimeAnimation`](RuntimeAnimation.md)\>

null or the runtime animation for the given property

***

### goToFrame()

> **goToFrame**(`frame`, `useWeight?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L296)

Jump directly to a given frame

#### Parameters

##### frame

`number`

defines the frame to jump to

##### useWeight?

`boolean` = `false`

defines whether the animation weight should be applied to the image to be jumped to (false by default)

#### Returns

`void`

***

### pause()

> **pause**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:323](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L323)

Pause the animation

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L254)

Resets the animatable to its original state

#### Returns

`void`

***

### restart()

> **restart**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:333](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L333)

Restart the animation

#### Returns

`void`

***

### stop()

> **stop**(`animationName?`, `targetMask?`, `useGlobalSplice?`, `skipOnAnimationEnd?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:352](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L352)

Stop and delete the current animation

#### Parameters

##### animationName?

`string`

defines a string used to only stop some of the runtime animations instead of all

##### targetMask?

(`target`) => `boolean`

a function that determines if the animation should be stopped based on its target (all animations will be stopped if both this and animationName are empty)

##### useGlobalSplice?

`boolean` = `false`

if true, the animatables will be removed by the caller of this function (false by default)

##### skipOnAnimationEnd?

`boolean` = `false`

defines if the system should not raise onAnimationEnd. Default is false

#### Returns

`void`

***

### syncWith()

> **syncWith**(`root`): `Animatable`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L173)

Synchronize and normalize current Animatable with a source Animatable
This is useful when using animation weights and when animations are not of the same length

#### Parameters

##### root

[`Nullable`](../type-aliases/Nullable.md)\<`Animatable`\>

defines the root Animatable to synchronize with (null to stop synchronizing)

#### Returns

`Animatable`

the current Animatable

***

### waitAsync()

> **waitAsync**(): `Promise`\<`Animatable`\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.core.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animatable.core.ts#L407)

Wait asynchronously for the animation to end

#### Returns

`Promise`\<`Animatable`\>

a promise which will be fulfilled when the animation ends
