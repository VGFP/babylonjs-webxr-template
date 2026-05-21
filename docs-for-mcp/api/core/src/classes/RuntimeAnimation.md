[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RuntimeAnimation

# Class: RuntimeAnimation

Defined in: [babylonjs-source/packages/dev/core/src/Animations/runtimeAnimation.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/runtimeAnimation.ts#L21)

Defines a runtime animation

## Constructors

### Constructor

> **new RuntimeAnimation**(`target`, `animation`, `scene`, `host`): `RuntimeAnimation`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/runtimeAnimation.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/runtimeAnimation.ts#L183)

Create a new RuntimeAnimation object

#### Parameters

##### target

`any`

defines the target of the animation

##### animation

[`Animation`](Animation.md)

defines the source animation object

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### host

[`Animatable`](Animatable.md)

defines the initiating Animatable

#### Returns

`RuntimeAnimation`

## Properties

### \_animation

> **\_animation**: [`Animation`](Animation.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/runtimeAnimation.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/runtimeAnimation.ts#L32)

The animation used by the runtime animation

## Accessors

### animation

#### Get Signature

> **get** **animation**(): [`Animation`](Animation.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/runtimeAnimation.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/runtimeAnimation.ts#L269)

Gets the animation from the runtime animation

##### Returns

[`Animation`](Animation.md)

***

### currentFrame

#### Get Signature

> **get** **currentFrame**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/runtimeAnimation.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/runtimeAnimation.ts#L134)

Gets the current frame of the runtime animation

##### Returns

`number`

***

### currentValue

#### Get Signature

> **get** **currentValue**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/runtimeAnimation.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/runtimeAnimation.ts#L148)

Gets the current value of the runtime animation

##### Returns

`any`

***

### isAdditive

#### Get Signature

> **get** **isAdditive**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/runtimeAnimation.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/runtimeAnimation.ts#L169)

Gets the additive state of the runtime animation

##### Returns

`boolean`

***

### target

#### Get Signature

> **get** **target**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/runtimeAnimation.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/runtimeAnimation.ts#L162)

Gets the actual target of the runtime animation

##### Returns

`any`

***

### targetPath

#### Get Signature

> **get** **targetPath**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/runtimeAnimation.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/runtimeAnimation.ts#L155)

Gets or sets the target path of the runtime animation

##### Returns

`string`

***

### weight

#### Get Signature

> **get** **weight**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/runtimeAnimation.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/runtimeAnimation.ts#L141)

Gets the weight of the runtime animation

##### Returns

`number`

## Methods

### animate()

> **animate**(`elapsedTimeSinceAnimationStart`, `from`, `to`, `loop`, `speedRatio`, `weight?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/runtimeAnimation.ts:546](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/runtimeAnimation.ts#L546)

Execute the current animation

#### Parameters

##### elapsedTimeSinceAnimationStart

`number`

defines the elapsed time (in milliseconds) since the animation was started

##### from

`number`

defines the lower frame of the animation range

##### to

`number`

defines the upper frame of the animation range

##### loop

`boolean`

defines if the current animation must loop

##### speedRatio

`number`

defines the current speed ratio

##### weight?

`number` = `-1.0`

defines the weight of the animation (default is -1 so no weight)

#### Returns

`boolean`

a boolean indicating if the animation is running

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/runtimeAnimation.ts:316](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/runtimeAnimation.ts#L316)

Disposes of the runtime animation

#### Returns

`void`

***

### goToFrame()

> **goToFrame**(`frame`, `weight?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/runtimeAnimation.ts:501](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/runtimeAnimation.ts#L501)

Move the current animation to a given frame

#### Parameters

##### frame

`number`

defines the frame to move to

##### weight?

`number` = `-1`

defines the weight to apply to the animation (-1.0 by default)

#### Returns

`void`

***

### isStopped()

> **isStopped**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/runtimeAnimation.ts:309](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/runtimeAnimation.ts#L309)

Specifies if the runtime animation is stopped

#### Returns

`boolean`

Boolean specifying if the runtime animation is stopped

***

### reset()

> **reset**(`restoreOriginal?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/runtimeAnimation.ts:277](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/runtimeAnimation.ts#L277)

Resets the runtime animation to the beginning

#### Parameters

##### restoreOriginal?

`boolean` = `false`

defines whether to restore the target property to the original value

#### Returns

`void`

***

### setValue()

> **setValue**(`currentValue`, `weight`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/runtimeAnimation.ts:329](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/runtimeAnimation.ts#L329)

Apply the interpolated value to the target

#### Parameters

##### currentValue

`any`

defines the value computed by the animation

##### weight

`number`

defines the weight to apply to this value (Defaults to 1.0)

#### Returns

`void`
