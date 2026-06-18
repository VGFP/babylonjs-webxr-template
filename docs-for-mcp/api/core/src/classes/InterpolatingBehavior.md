[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InterpolatingBehavior

# Class: InterpolatingBehavior\<C\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L15)

Animate camera property changes with an interpolation effect

## See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors/cameraBehaviors

## Type Parameters

### C

`C` *extends* [`Camera`](Camera.md) = [`Camera`](Camera.md)

## Implements

- [`Behavior`](../interfaces/Behavior.md)\<`C`\>

## Constructors

### Constructor

> **new InterpolatingBehavior**\<`C`\>(): `InterpolatingBehavior`\<`C`\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L56)

Initializes the behavior

#### Returns

`InterpolatingBehavior`\<`C`\>

## Properties

### easingFunction

> **easingFunction**: [`EasingFunction`](EasingFunction.md)

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L26)

The easing function to use for interpolation

***

### easingMode

> **easingMode**: `number` = `EasingFunction.EASINGMODE_EASEINOUT`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L31)

The easing mode (default is EASINGMODE_EASEINOUT)

***

### transitionDuration

> **transitionDuration**: `number` = `450`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L36)

Duration of the animation in milliseconds

## Accessors

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<`C`\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L41)

Attached node of this behavior

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`C`\>

Gets the current attached target

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attachedNode`](../interfaces/Behavior.md#attachednode)

***

### isInterpolating

#### Get Signature

> **get** **isInterpolating**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L87)

##### Returns

`boolean`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L19)

Gets the name of the behavior.

##### Returns

`string`

gets or sets behavior's name

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`name`](../interfaces/Behavior.md#name)

***

### remainingDurationMs

#### Get Signature

> **get** **remainingDurationMs**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L95)

Gets the longest remaining duration (in milliseconds) across all in-flight property animations.
Returns 0 when nothing is currently animating.

##### Returns

`number`

## Methods

### animatePropertiesAsync()

> **animatePropertiesAsync**\<`K`\>(`properties`, `transitionDuration?`, `easingFn?`, `updateAnimation?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L162)

Animates camera properties to new values.

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### properties

`Map`\<`K`, [`AllowedAnimValue`](../type-aliases/AllowedAnimValue.md)\>

defines the property values to animate to

##### transitionDuration?

`number` = `...`

defines the transition duration in milliseconds

##### easingFn?

[`EasingFunction`](EasingFunction.md) = `...`

defines the easing function to use

##### updateAnimation?

(`key`, `animation`) => `void`

defines an optional callback used to update each generated animation

#### Returns

`Promise`\<`void`\>

a promise that resolves when the animation completes

***

### attach()

> **attach**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L71)

Attaches the behavior to a camera

#### Parameters

##### camera

`C`

The camera to attach to

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attach`](../interfaces/Behavior.md#attach)

***

### detach()

> **detach**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L78)

Detaches the behavior from the camera

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`detach`](../interfaces/Behavior.md#detach)

***

### init()

> **init**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L63)

Initializes the behavior

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`init`](../interfaces/Behavior.md#init)

***

### stopAllAnimations()

> **stopAllAnimations**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L107)

Stops and removes all animations

#### Returns

`void`

***

### ~~updateProperties()~~

> **updateProperties**\<`K`\>(`properties`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L147)

Redirects any in-flight transition toward the given property values, reusing the time remaining in the
current transition. No-op when nothing is currently animating.

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### properties

`Map`\<`K`, [`AllowedAnimValue`](../type-aliases/AllowedAnimValue.md)\>

defines the property values to redirect toward

#### Returns

`void`

#### Deprecated

Prefer `animatePropertiesAsync(properties, remainingDurationMs)`, which makes the duration
explicit. This method is retained for backward compatibility.
