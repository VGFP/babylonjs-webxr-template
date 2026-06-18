[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Animation

# Class: Animation

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L100)

Class used to store any kind of animation

## Constructors

### Constructor

> **new Animation**(`name`, `targetProperty`, `framePerSecond`, `dataType`, `loopMode?`, `enableBlending?`): `Animation`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L251)

Initializes the animation

#### Parameters

##### name

`string`

Name of the animation

##### targetProperty

`string`

Property to animate

##### framePerSecond

`number`

The frames per second of the animation

##### dataType

`number`

The data type of the animation

##### loopMode?

`number`

The loop mode of the animation

##### enableBlending?

`boolean`

Specifies if blending should be enabled

#### Returns

`Animation`

## Properties

### blendingSpeed

> **blendingSpeed**: `number` = `0.01`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L162)

Stores the blending speed of the animation

***

### dataType

> **dataType**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:259](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L259)

The data type of the animation

***

### enableBlending?

> `optional` **enableBlending?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:263](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L263)

Specifies if blending should be enabled

***

### framePerSecond

> **framePerSecond**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:257](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L257)

The frames per second of the animation

***

### loopMode?

> `optional` **loopMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L261)

The loop mode of the animation

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:253](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L253)

Name of the animation

***

### snippetId

> **snippetId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L132)

Snippet ID if the animation was created from the snippet server

***

### targetProperty

> **targetProperty**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:255](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L255)

Property to animate

***

### targetPropertyPath

> **targetPropertyPath**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L157)

Stores an array of target property paths

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L126)

Gets or sets the unique id of the animation (the uniqueness is solely among other animations)

***

### AllowMatricesInterpolation

> `static` **AllowMatricesInterpolation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L106)

Use matrix interpolation instead of using direct key value when animating matrices

***

### AllowMatrixDecomposeForInterpolation

> `static` **AllowMatrixDecomposeForInterpolation**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L111)

When matrix interpolation is enabled, this boolean forces the system to use Matrix.DecomposeLerp instead of Matrix.Lerp. Interpolation is more precise but slower

***

### ANIMATIONLOOPMODE\_CONSTANT

> `readonly` `static` **ANIMATIONLOOPMODE\_CONSTANT**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:1037](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L1037)

Constant Loop Mode

***

### ANIMATIONLOOPMODE\_CYCLE

> `readonly` `static` **ANIMATIONLOOPMODE\_CYCLE**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:1033](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L1033)

Cycle Loop Mode

***

### ANIMATIONLOOPMODE\_RELATIVE

> `readonly` `static` **ANIMATIONLOOPMODE\_RELATIVE**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:1029](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L1029)

Relative Loop Mode

***

### ANIMATIONLOOPMODE\_RELATIVE\_FROM\_CURRENT

> `readonly` `static` **ANIMATIONLOOPMODE\_RELATIVE\_FROM\_CURRENT**: `5` = `5`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:1045](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L1045)

Relative Loop Mode (add to current value of animated object, unlike ANIMATIONLOOPMODE_RELATIVE)

***

### ANIMATIONLOOPMODE\_YOYO

> `readonly` `static` **ANIMATIONLOOPMODE\_YOYO**: `4` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:1041](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L1041)

Yoyo Loop Mode

***

### ANIMATIONTYPE\_COLOR3

> `readonly` `static` **ANIMATIONTYPE\_COLOR3**: `4` = `Constants.ANIMATIONTYPE_COLOR3`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:1013](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L1013)

Color3 animation type

***

### ANIMATIONTYPE\_COLOR4

> `readonly` `static` **ANIMATIONTYPE\_COLOR4**: `7` = `Constants.ANIMATIONTYPE_COLOR4`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:1017](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L1017)

Color3 animation type

***

### ANIMATIONTYPE\_FLOAT

> `readonly` `static` **ANIMATIONTYPE\_FLOAT**: `0` = `Constants.ANIMATIONTYPE_FLOAT`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:997](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L997)

Float animation type

***

### ANIMATIONTYPE\_MATRIX

> `readonly` `static` **ANIMATIONTYPE\_MATRIX**: `3` = `Constants.ANIMATIONTYPE_MATRIX`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:1009](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L1009)

Matrix animation type

***

### ANIMATIONTYPE\_QUATERNION

> `readonly` `static` **ANIMATIONTYPE\_QUATERNION**: `2` = `Constants.ANIMATIONTYPE_QUATERNION`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:1005](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L1005)

Quaternion animation type

***

### ANIMATIONTYPE\_SIZE

> `readonly` `static` **ANIMATIONTYPE\_SIZE**: `6` = `Constants.ANIMATIONTYPE_SIZE`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:1025](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L1025)

Size animation type

***

### ANIMATIONTYPE\_VECTOR2

> `readonly` `static` **ANIMATIONTYPE\_VECTOR2**: `5` = `Constants.ANIMATIONTYPE_VECTOR2`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:1021](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L1021)

Vector2 animation type

***

### ANIMATIONTYPE\_VECTOR3

> `readonly` `static` **ANIMATIONTYPE\_VECTOR3**: `1` = `Constants.ANIMATIONTYPE_VECTOR3`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:1001](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L1001)

Vector3 animation type

***

### InheritOriginalValueFromActiveAnimations

> `static` **InheritOriginalValueFromActiveAnimations**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L121)

When true, starting a new animation on a property that is already being animated
will inherit the original value from the active animation instead of snapshotting
the current (mid-animation) value. This prevents properties (e.g. morph target
influence) from permanently sticking at intermediate values when animations
overlap or interrupt each other.

#### See

https://playground.babylonjs.com/#6A16YD#0

***

### SnippetUrl

> `static` **SnippetUrl**: `string` = `Constants.SnippetUrl`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L129)

Define the Url to load snippets

## Accessors

### hasRunningRuntimeAnimations

#### Get Signature

> **get** **hasRunningRuntimeAnimations**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L232)

Specifies if any of the runtime animations are currently running

##### Returns

`boolean`

***

### runtimeAnimations

#### Get Signature

> **get** **runtimeAnimations**(): [`RuntimeAnimation`](RuntimeAnimation.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L225)

Return the array of runtime animations currently using this animation

##### Returns

[`RuntimeAnimation`](RuntimeAnimation.md)[]

## Methods

### addEvent()

> **addEvent**(`event`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:301](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L301)

Add an event to this animation

#### Parameters

##### event

[`AnimationEvent`](AnimationEvent.md)

Event to add

#### Returns

`void`

***

### clone()

> **clone**(`cloneKeys?`): `Animation`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:821](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L821)

Makes a copy of the animation

#### Parameters

##### cloneKeys?

`boolean` = `false`

Whether to clone the keys or not (default is false, so the keys are not cloned). Note that the key array itself is always cloned (that is, a new array is created),
 but the individual keys inside the array are only cloned if this parameter is true.

#### Returns

`Animation`

Cloned animation

***

### color3InterpolateFunction()

> **color3InterpolateFunction**(`startValue`, `endValue`, `gradient`): [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:526](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L526)

Interpolates a Color3 linearly

#### Parameters

##### startValue

[`Color3`](Color3.md)

Start value of the animation curve

##### endValue

[`Color3`](Color3.md)

End value of the animation curve

##### gradient

`number`

Scalar amount to interpolate

#### Returns

[`Color3`](Color3.md)

Interpolated Color3 value

***

### color3InterpolateFunctionWithTangents()

> **color3InterpolateFunctionWithTangents**(`startValue`, `outTangent`, `endValue`, `inTangent`, `gradient`): [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:539](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L539)

Interpolates a Color3 cubically

#### Parameters

##### startValue

[`Color3`](Color3.md)

Start value of the animation curve

##### outTangent

[`Color3`](Color3.md)

End tangent of the animation

##### endValue

[`Color3`](Color3.md)

End value of the animation curve

##### inTangent

[`Color3`](Color3.md)

Start tangent of the animation curve

##### gradient

`number`

Scalar amount to interpolate

#### Returns

[`Color3`](Color3.md)

interpolated value

***

### color4InterpolateFunction()

> **color4InterpolateFunction**(`startValue`, `endValue`, `gradient`): [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:550](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L550)

Interpolates a Color4 linearly

#### Parameters

##### startValue

[`Color4`](Color4.md)

Start value of the animation curve

##### endValue

[`Color4`](Color4.md)

End value of the animation curve

##### gradient

`number`

Scalar amount to interpolate

#### Returns

[`Color4`](Color4.md)

Interpolated Color3 value

***

### color4InterpolateFunctionWithTangents()

> **color4InterpolateFunctionWithTangents**(`startValue`, `outTangent`, `endValue`, `inTangent`, `gradient`): [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:563](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L563)

Interpolates a Color4 cubically

#### Parameters

##### startValue

[`Color4`](Color4.md)

Start value of the animation curve

##### outTangent

[`Color4`](Color4.md)

End tangent of the animation

##### endValue

[`Color4`](Color4.md)

End value of the animation curve

##### inTangent

[`Color4`](Color4.md)

Start tangent of the animation curve

##### gradient

`number`

Scalar amount to interpolate

#### Returns

[`Color4`](Color4.md)

interpolated value

***

### createKeyForFrame()

> **createKeyForFrame**(`frame`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:879](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L879)

Creates a key for the frame passed as a parameter and adds it to the animation IF a key doesn't already exist for that frame

#### Parameters

##### frame

`number`

Frame number

#### Returns

`number`

The key index if the key was added or the index of the pre existing key if the frame passed as parameter already has a corresponding key

***

### createRange()

> **createRange**(`name`, `from`, `to`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:333](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L333)

Creates an animation range

#### Parameters

##### name

`string`

Name of the animation range

##### from

`number`

Starting frame of the animation range

##### to

`number`

Ending frame of the animation

#### Returns

`void`

***

### deleteRange()

> **deleteRange**(`name`, `deleteFrames?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L345)

Deletes an animation range by name

#### Parameters

##### name

`string`

Name of the animation range to delete

##### deleteFrames?

`boolean` = `true`

Specifies if the key frames for the range should also be deleted (true) or not (false)

#### Returns

`void`

***

### evaluate()

> **evaluate**(`currentFrame`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:583](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L583)

Evaluate the animation value at a given frame

#### Parameters

##### currentFrame

`number`

defines the frame where we want to evaluate the animation

#### Returns

`any`

the animation value

***

### floatInterpolateFunction()

> **floatInterpolateFunction**(`startValue`, `endValue`, `gradient`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:419](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L419)

Interpolates a scalar linearly

#### Parameters

##### startValue

`number`

Start value of the animation curve

##### endValue

`number`

End value of the animation curve

##### gradient

`number`

Scalar amount to interpolate

#### Returns

`number`

Interpolated scalar value

***

### floatInterpolateFunctionWithTangents()

> **floatInterpolateFunctionWithTangents**(`startValue`, `outTangent`, `endValue`, `inTangent`, `gradient`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:432](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L432)

Interpolates a scalar cubically

#### Parameters

##### startValue

`number`

Start value of the animation curve

##### outTangent

`number`

End tangent of the animation

##### endValue

`number`

End value of the animation curve

##### inTangent

`number`

Start tangent of the animation curve

##### gradient

`number`

Scalar amount to interpolate

#### Returns

`number`

Interpolated scalar value

***

### getEasingFunction()

> **getEasingFunction**(): [`Nullable`](../type-aliases/Nullable.md)\<[`IEasingFunction`](../interfaces/IEasingFunction.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:400](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L400)

Gets the easing function of the animation

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IEasingFunction`](../interfaces/IEasingFunction.md)\>

Easing function of the animation

***

### getEvents()

> **getEvents**(): [`AnimationEvent`](AnimationEvent.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:323](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L323)

Retrieves all the events from the animation

#### Returns

[`AnimationEvent`](AnimationEvent.md)[]

Events from the animation

***

### getHighestFrame()

> **getHighestFrame**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:385](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L385)

Gets the highest frame of the animation

#### Returns

`number`

Highest frame of the animation

***

### getKeys()

> **getKeys**(): [`IAnimationKey`](../interfaces/IAnimationKey.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:377](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L377)

Gets the key frames from the animation

#### Returns

[`IAnimationKey`](../interfaces/IAnimationKey.md)[]

The key frames of the animation

***

### getRange()

> **getRange**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:369](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L369)

Gets the animation range by name, or null if not defined

#### Parameters

##### name

`string`

Name of the animation range

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>

Nullable animation range

***

### matrixInterpolateFunction()

> **matrixInterpolateFunction**(`startValue`, `endValue`, `gradient`, `result?`): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:799](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L799)

Defines the function to use to interpolate matrices

#### Parameters

##### startValue

[`Matrix`](Matrix.md)

defines the start matrix

##### endValue

[`Matrix`](Matrix.md)

defines the end matrix

##### gradient

`number`

defines the gradient between both matrices

##### result?

[`Matrix`](Matrix.md)

defines an optional target matrix where to store the interpolation

#### Returns

[`Matrix`](Matrix.md)

the interpolated matrix

***

### quaternionInterpolateFunction()

> **quaternionInterpolateFunction**(`startValue`, `endValue`, `gradient`): [`Quaternion`](Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:443](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L443)

Interpolates a quaternion using a spherical linear interpolation

#### Parameters

##### startValue

[`Quaternion`](Quaternion.md)

Start value of the animation curve

##### endValue

[`Quaternion`](Quaternion.md)

End value of the animation curve

##### gradient

`number`

Scalar amount to interpolate

#### Returns

[`Quaternion`](Quaternion.md)

Interpolated quaternion value

***

### quaternionInterpolateFunctionWithTangents()

> **quaternionInterpolateFunctionWithTangents**(`startValue`, `outTangent`, `endValue`, `inTangent`, `gradient`): [`Quaternion`](Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:456](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L456)

Interpolates a quaternion cubically

#### Parameters

##### startValue

[`Quaternion`](Quaternion.md)

Start value of the animation curve

##### outTangent

[`Quaternion`](Quaternion.md)

End tangent of the animation curve

##### endValue

[`Quaternion`](Quaternion.md)

End value of the animation curve

##### inTangent

[`Quaternion`](Quaternion.md)

Start tangent of the animation curve

##### gradient

`number`

Scalar amount to interpolate

#### Returns

[`Quaternion`](Quaternion.md)

Interpolated quaternion value

***

### removeEvents()

> **removeEvents**(`frame`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L310)

Remove all events found at the given frame

#### Parameters

##### frame

`number`

The frame to remove events from

#### Returns

`void`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:904](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L904)

Serializes the animation to an object

#### Returns

`any`

Serialized object

***

### setEasingFunction()

> **setEasingFunction**(`easingFunction`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:408](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L408)

Sets the easing function of the animation

#### Parameters

##### easingFunction

[`Nullable`](../type-aliases/Nullable.md)\<[`IEasingFunction`](../interfaces/IEasingFunction.md)\>

A custom mathematical formula for animation

#### Returns

`void`

***

### setKeys()

> **setKeys**(`values`, `dontClone?`, `cloneKeys?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:852](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L852)

Sets the key frames of the animation

#### Parameters

##### values

[`IAnimationKey`](../interfaces/IAnimationKey.md)[]

The animation key frames to set

##### dontClone?

`boolean` = `false`

Whether to clone the keys or not (default is false, so the array of keys is cloned)

##### cloneKeys?

`boolean` = `false`

Whether to clone the individual keys inside the array or not (default is false). If true, each key object inside the array will be cloned, and the fields
  that have a clone() method will be cloned by calling that method.

#### Returns

`void`

***

### sizeInterpolateFunction()

> **sizeInterpolateFunction**(`startValue`, `endValue`, `gradient`): [`Size`](Size.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:515](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L515)

Interpolates a size linearly

#### Parameters

##### startValue

[`Size`](Size.md)

Start value of the animation curve

##### endValue

[`Size`](Size.md)

End value of the animation curve

##### gradient

`number`

Scalar amount to interpolate

#### Returns

[`Size`](Size.md)

Interpolated Size value

***

### toString()

> **toString**(`fullDetails?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:277](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L277)

Converts the animation to a string

#### Parameters

##### fullDetails?

`boolean`

support for multiple levels of logging within scene loading

#### Returns

`string`

String form of the animation

***

### vector2InterpolateFunction()

> **vector2InterpolateFunction**(`startValue`, `endValue`, `gradient`): [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:491](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L491)

Interpolates a Vector2 linearly

#### Parameters

##### startValue

[`Vector2`](Vector2.md)

Start value of the animation curve

##### endValue

[`Vector2`](Vector2.md)

End value of the animation curve

##### gradient

`number`

Scalar amount to interpolate (value between 0 and 1)

#### Returns

[`Vector2`](Vector2.md)

Interpolated Vector2 value

***

### vector2InterpolateFunctionWithTangents()

> **vector2InterpolateFunctionWithTangents**(`startValue`, `outTangent`, `endValue`, `inTangent`, `gradient`): [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:504](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L504)

Interpolates a Vector2 cubically

#### Parameters

##### startValue

[`Vector2`](Vector2.md)

Start value of the animation curve

##### outTangent

[`Vector2`](Vector2.md)

End tangent of the animation

##### endValue

[`Vector2`](Vector2.md)

End value of the animation curve

##### inTangent

[`Vector2`](Vector2.md)

Start tangent of the animation curve

##### gradient

`number`

Scalar amount to interpolate (value between 0 and 1)

#### Returns

[`Vector2`](Vector2.md)

Interpolated Vector2 value

***

### vector3InterpolateFunction()

> **vector3InterpolateFunction**(`startValue`, `endValue`, `gradient`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:467](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L467)

Interpolates a Vector3 linearly

#### Parameters

##### startValue

[`Vector3`](Vector3.md)

Start value of the animation curve

##### endValue

[`Vector3`](Vector3.md)

End value of the animation curve

##### gradient

`number`

Scalar amount to interpolate (value between 0 and 1)

#### Returns

[`Vector3`](Vector3.md)

Interpolated scalar value

***

### vector3InterpolateFunctionWithTangents()

> **vector3InterpolateFunctionWithTangents**(`startValue`, `outTangent`, `endValue`, `inTangent`, `gradient`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:480](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L480)

Interpolates a Vector3 cubically

#### Parameters

##### startValue

[`Vector3`](Vector3.md)

Start value of the animation curve

##### outTangent

[`Vector3`](Vector3.md)

End tangent of the animation

##### endValue

[`Vector3`](Vector3.md)

End value of the animation curve

##### inTangent

[`Vector3`](Vector3.md)

Start tangent of the animation curve

##### gradient

`number`

Scalar amount to interpolate (value between 0 and 1)

#### Returns

[`Vector3`](Vector3.md)

InterpolatedVector3 value
