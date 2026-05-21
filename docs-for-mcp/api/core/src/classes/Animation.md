[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Animation

# Class: Animation

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L98)

Class used to store any kind of animation

## Constructors

### Constructor

> **new Animation**(`name`, `targetProperty`, `framePerSecond`, `dataType`, `loopMode?`, `enableBlending?`): `Animation`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:636](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L636)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L160)

Stores the blending speed of the animation

***

### dataType

> **dataType**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:644](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L644)

The data type of the animation

***

### enableBlending?

> `optional` **enableBlending?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:648](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L648)

Specifies if blending should be enabled

***

### framePerSecond

> **framePerSecond**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:642](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L642)

The frames per second of the animation

***

### loopMode?

> `optional` **loopMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:646](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L646)

The loop mode of the animation

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:638](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L638)

Name of the animation

***

### snippetId

> **snippetId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L130)

Snippet ID if the animation was created from the snippet server

***

### targetProperty

> **targetProperty**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:640](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L640)

Property to animate

***

### targetPropertyPath

> **targetPropertyPath**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L155)

Stores an array of target property paths

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L124)

Gets or sets the unique id of the animation (the uniqueness is solely among other animations)

***

### AllowMatricesInterpolation

> `static` **AllowMatricesInterpolation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L104)

Use matrix interpolation instead of using direct key value when animating matrices

***

### AllowMatrixDecomposeForInterpolation

> `static` **AllowMatrixDecomposeForInterpolation**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L109)

When matrix interpolation is enabled, this boolean forces the system to use Matrix.DecomposeLerp instead of Matrix.Lerp. Interpolation is more precise but slower

***

### ANIMATIONLOOPMODE\_CONSTANT

> `readonly` `static` **ANIMATIONLOOPMODE\_CONSTANT**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1422](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1422)

Constant Loop Mode

***

### ANIMATIONLOOPMODE\_CYCLE

> `readonly` `static` **ANIMATIONLOOPMODE\_CYCLE**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1418](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1418)

Cycle Loop Mode

***

### ANIMATIONLOOPMODE\_RELATIVE

> `readonly` `static` **ANIMATIONLOOPMODE\_RELATIVE**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1414](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1414)

Relative Loop Mode

***

### ANIMATIONLOOPMODE\_RELATIVE\_FROM\_CURRENT

> `readonly` `static` **ANIMATIONLOOPMODE\_RELATIVE\_FROM\_CURRENT**: `5` = `5`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1430](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1430)

Relative Loop Mode (add to current value of animated object, unlike ANIMATIONLOOPMODE_RELATIVE)

***

### ANIMATIONLOOPMODE\_YOYO

> `readonly` `static` **ANIMATIONLOOPMODE\_YOYO**: `4` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1426](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1426)

Yoyo Loop Mode

***

### ANIMATIONTYPE\_COLOR3

> `readonly` `static` **ANIMATIONTYPE\_COLOR3**: `4` = `Constants.ANIMATIONTYPE_COLOR3`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1398](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1398)

Color3 animation type

***

### ANIMATIONTYPE\_COLOR4

> `readonly` `static` **ANIMATIONTYPE\_COLOR4**: `7` = `Constants.ANIMATIONTYPE_COLOR4`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1402](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1402)

Color3 animation type

***

### ANIMATIONTYPE\_FLOAT

> `readonly` `static` **ANIMATIONTYPE\_FLOAT**: `0` = `Constants.ANIMATIONTYPE_FLOAT`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1382](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1382)

Float animation type

***

### ANIMATIONTYPE\_MATRIX

> `readonly` `static` **ANIMATIONTYPE\_MATRIX**: `3` = `Constants.ANIMATIONTYPE_MATRIX`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1394](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1394)

Matrix animation type

***

### ANIMATIONTYPE\_QUATERNION

> `readonly` `static` **ANIMATIONTYPE\_QUATERNION**: `2` = `Constants.ANIMATIONTYPE_QUATERNION`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1390](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1390)

Quaternion animation type

***

### ANIMATIONTYPE\_SIZE

> `readonly` `static` **ANIMATIONTYPE\_SIZE**: `6` = `Constants.ANIMATIONTYPE_SIZE`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1410](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1410)

Size animation type

***

### ANIMATIONTYPE\_VECTOR2

> `readonly` `static` **ANIMATIONTYPE\_VECTOR2**: `5` = `Constants.ANIMATIONTYPE_VECTOR2`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1406](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1406)

Vector2 animation type

***

### ANIMATIONTYPE\_VECTOR3

> `readonly` `static` **ANIMATIONTYPE\_VECTOR3**: `1` = `Constants.ANIMATIONTYPE_VECTOR3`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1386](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1386)

Vector3 animation type

***

### ~~CreateFromSnippetAsync~~

> `static` **CreateFromSnippetAsync**: (`snippetId`) => `Promise`\<`Animation` \| `Animation`[]\> = `Animation.ParseFromSnippetAsync`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1686](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1686)

Creates an animation or an array of animations from a snippet saved by the Inspector

Creates an animation or an array of animations from a snippet saved by the Inspector

#### Parameters

##### snippetId

`string`

defines the snippet to load

#### Returns

`Promise`\<`Animation` \| `Animation`[]\>

a promise that will resolve to the new animation or a new array of animations

#### Deprecated

Please use ParseFromSnippetAsync instead

#### Param

defines the snippet to load

#### Returns

a promise that will resolve to the new animation or a new array of animations

***

### InheritOriginalValueFromActiveAnimations

> `static` **InheritOriginalValueFromActiveAnimations**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L119)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L127)

Define the Url to load snippets

## Accessors

### hasRunningRuntimeAnimations

#### Get Signature

> **get** **hasRunningRuntimeAnimations**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:617](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L617)

Specifies if any of the runtime animations are currently running

##### Returns

`boolean`

***

### runtimeAnimations

#### Get Signature

> **get** **runtimeAnimations**(): [`RuntimeAnimation`](RuntimeAnimation.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:610](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L610)

Return the array of runtime animations currently using this animation

##### Returns

[`RuntimeAnimation`](RuntimeAnimation.md)[]

## Methods

### addEvent()

> **addEvent**(`event`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:686](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L686)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1206)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:911](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L911)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:924](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L924)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:935](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L935)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:948](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L948)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1264](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1264)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:718](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L718)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:730](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L730)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:968](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L968)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:804](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L804)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:817](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L817)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:785](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L785)

Gets the easing function of the animation

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IEasingFunction`](../interfaces/IEasingFunction.md)\>

Easing function of the animation

***

### getEvents()

> **getEvents**(): [`AnimationEvent`](AnimationEvent.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:708](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L708)

Retrieves all the events from the animation

#### Returns

[`AnimationEvent`](AnimationEvent.md)[]

Events from the animation

***

### getHighestFrame()

> **getHighestFrame**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:770](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L770)

Gets the highest frame of the animation

#### Returns

`number`

Highest frame of the animation

***

### getKeys()

> **getKeys**(): [`IAnimationKey`](../interfaces/IAnimationKey.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:762](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L762)

Gets the key frames from the animation

#### Returns

[`IAnimationKey`](../interfaces/IAnimationKey.md)[]

The key frames of the animation

***

### getRange()

> **getRange**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:754](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L754)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1184](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1184)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:828](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L828)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:841](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L841)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:695](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L695)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1289)

Serializes the animation to an object

#### Returns

`any`

Serialized object

***

### setEasingFunction()

> **setEasingFunction**(`easingFunction`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:793](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L793)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1237)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:900](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L900)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:662](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L662)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:876](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L876)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:889](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L889)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:852](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L852)

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

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:865](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L865)

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

***

### AppendSerializedAnimations()

> `static` **AppendSerializedAnimations**(`source`, `destination`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1588](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1588)

Appends the serialized animations from the source animations

#### Parameters

##### source

[`IAnimatable`](../interfaces/IAnimatable.md)

Source containing the animations

##### destination

`any`

Target to store the animations

#### Returns

`void`

***

### CreateAndStartAnimation()

> `static` **CreateAndStartAnimation**(`name`, `target`, `targetProperty`, `framePerSecond`, `totalFrame`, `from`, `to`, `loopMode?`, `easingFunction?`, `onAnimationEnd?`, `scene?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:251](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L251)

Create and start an animation on a node

#### Parameters

##### name

`string`

defines the name of the global animation that will be run on all nodes

##### target

`any`

defines the target where the animation will take place

##### targetProperty

`string`

defines property to animate

##### framePerSecond

`number`

defines the number of frame per second yo use

##### totalFrame

`number`

defines the number of frames in total

##### from

`any`

defines the initial value

##### to

`any`

defines the final value

##### loopMode?

`number`

defines which loop mode you want to use (off by default)

##### easingFunction?

[`EasingFunction`](EasingFunction.md)

defines the easing function to use (linear by default)

##### onAnimationEnd?

() => `void`

defines the callback to call when animation end

##### scene?

[`Scene`](Scene.md)

defines the hosting scene

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

the animatable created for this animation

***

### CreateAndStartHierarchyAnimation()

> `static` **CreateAndStartHierarchyAnimation**(`name`, `node`, `directDescendantsOnly`, `targetProperty`, `framePerSecond`, `totalFrame`, `from`, `to`, `loopMode?`, `easingFunction?`, `onAnimationEnd?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:297](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L297)

Create and start an animation on a node and its descendants

#### Parameters

##### name

`string`

defines the name of the global animation that will be run on all nodes

##### node

[`Node`](Node.md)

defines the root node where the animation will take place

##### directDescendantsOnly

`boolean`

if true only direct descendants will be used, if false direct and also indirect (children of children, an so on in a recursive manner) descendants will be used

##### targetProperty

`string`

defines property to animate

##### framePerSecond

`number`

defines the number of frame per second to use

##### totalFrame

`number`

defines the number of frames in total

##### from

`any`

defines the initial value

##### to

`any`

defines the final value

##### loopMode?

`number`

defines which loop mode you want to use (off by default)

##### easingFunction?

[`EasingFunction`](EasingFunction.md)

defines the easing function to use (linear by default)

##### onAnimationEnd?

() => `void`

defines the callback to call when an animation ends (will be called once per node)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)[]\>

the list of animatables created for all nodes

#### Example

```ts
https://www.babylonjs-playground.com/#MH0VLI
```

***

### CreateAnimation()

> `static` **CreateAnimation**(`property`, `animationType`, `framePerSecond`, `easingFunction`): `Animation`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:228](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L228)

Sets up an animation

#### Parameters

##### property

`string`

The property to animate

##### animationType

`number`

The animation type to apply

##### framePerSecond

`number`

The frames per second of the animation

##### easingFunction

[`EasingFunction`](EasingFunction.md)

The easing function used in the animation

#### Returns

`Animation`

The created animation

***

### CreateMergeAndStartAnimation()

> `static` **CreateMergeAndStartAnimation**(`name`, `node`, `targetProperty`, `framePerSecond`, `totalFrame`, `from`, `to`, `loopMode?`, `easingFunction?`, `onAnimationEnd?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:334](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L334)

Creates a new animation, merges it with the existing animations and starts it

#### Parameters

##### name

`string`

Name of the animation

##### node

[`Node`](Node.md)

Node which contains the scene that begins the animations

##### targetProperty

`string`

Specifies which property to animate

##### framePerSecond

`number`

The frames per second of the animation

##### totalFrame

`number`

The total number of frames

##### from

`any`

The frame at the beginning of the animation

##### to

`any`

The frame at the end of the animation

##### loopMode?

`number`

Specifies the loop mode of the animation

##### easingFunction?

[`EasingFunction`](EasingFunction.md)

(Optional) The easing function of the animation, which allow custom mathematical formulas for animations

##### onAnimationEnd?

() => `void`

Callback to run once the animation is complete

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

Nullable animation

***

### Parse()

> `static` **Parse**(`parsedAnimation`): `Animation`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1457](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1457)

Parses an animation object and creates an animation

#### Parameters

##### parsedAnimation

`any`

Parsed animation object

#### Returns

`Animation`

Animation object

***

### ParseFromFileAsync()

> `static` **ParseFromFileAsync**(`name`, `url`): `Promise`\<`Animation` \| `Animation`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1598](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1598)

Creates a new animation or an array of animations from a snippet saved in a remote file

#### Parameters

##### name

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the name of the animation to create (can be null or empty to use the one from the json data)

##### url

`string`

defines the url to load from

#### Returns

`Promise`\<`Animation` \| `Animation`[]\>

a promise that will resolve to the new animation or an array of animations

***

### ParseFromSnippetAsync()

> `static` **ParseFromSnippetAsync**(`snippetId`): `Promise`\<`Animation` \| `Animation`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:1642](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L1642)

Creates an animation or an array of animations from a snippet saved by the Inspector

#### Parameters

##### snippetId

`string`

defines the snippet to load

#### Returns

`Promise`\<`Animation` \| `Animation`[]\>

a promise that will resolve to the new animation or a new array of animations

***

### TransitionTo()

> `static` **TransitionTo**(`property`, `targetValue`, `host`, `scene`, `frameRate`, `transition`, `duration`, `onAnimationEnd?`, `stopCurrent?`, `customKeys?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.ts:562](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animation.ts#L562)

Transition property of an host to the target Value

#### Parameters

##### property

`string`

The property to transition

##### targetValue

`any`

The target Value of the property

##### host

`any`

The object where the property to animate belongs

##### scene

[`Scene`](Scene.md)

Scene used to run the animation

##### frameRate

`number`

Framerate (in frame/s) to use

##### transition

`Animation`

The transition type we want to use

##### duration

`number`

The duration of the animation, in milliseconds

##### onAnimationEnd?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

Callback trigger at the end of the animation

##### stopCurrent?

`boolean` = `true`

If true, will stop the current animation on the property

##### customKeys?

[`IAnimationKey`](../interfaces/IAnimationKey.md)[]

defines custom keys to use for the animation instead of the from-to keys

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

Nullable animation
