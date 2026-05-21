[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BouncingBehavior

# Class: BouncingBehavior

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts#L16)

Add a bouncing effect to an ArcRotateCamera when reaching a specified minimum and maximum radius

## See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors/cameraBehaviors#bouncing-behavior

## Implements

- [`Behavior`](../interfaces/Behavior.md)\<[`ArcRotateCamera`](ArcRotateCamera.md)\>

## Constructors

### Constructor

> **new BouncingBehavior**(): `BouncingBehavior`

#### Returns

`BouncingBehavior`

## Properties

### lowerRadiusTransitionRange

> **lowerRadiusTransitionRange**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts#L42)

Length of the distance animated by the transition when lower radius is reached

***

### transitionDuration

> **transitionDuration**: `number` = `450`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts#L37)

The duration of the animation, in milliseconds

***

### upperRadiusTransitionRange

> **upperRadiusTransitionRange**: `number` = `-2`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts#L47)

Length of the distance animated by the transition when upper radius is reached

***

### EasingFunction

> `static` **EasingFunction**: [`BackEase`](BackEase.md)

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts#L27)

The easing function used by animations

***

### EasingMode

> `static` **EasingMode**: `number` = `EasingFunction.EASINGMODE_EASEOUT`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts#L32)

The easing mode used by animations

## Accessors

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ArcRotateCamera`](ArcRotateCamera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts#L96)

Attached node of this behavior

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ArcRotateCamera`](ArcRotateCamera.md)\>

Gets the current attached target

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attachedNode`](../interfaces/Behavior.md#attachednode)

***

### autoTransitionRange

#### Get Signature

> **get** **autoTransitionRange**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts#L54)

Gets a value indicating if the lowerRadiusTransitionRange and upperRadiusTransitionRange are defined automatically

##### Returns

`boolean`

#### Set Signature

> **set** **autoTransitionRange**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts#L62)

Sets a value indicating if the lowerRadiusTransitionRange and upperRadiusTransitionRange are defined automatically
Transition ranges will be set to 5% of the bounding box diagonal in world space

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts#L20)

Gets the name of the behavior.

##### Returns

`string`

gets or sets behavior's name

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`name`](../interfaces/Behavior.md#name)

## Methods

### attach()

> **attach**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts#L116)

Attaches the behavior to its arc rotate camera.

#### Parameters

##### camera

[`ArcRotateCamera`](ArcRotateCamera.md)

Defines the camera to attach the behavior to

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attach`](../interfaces/Behavior.md#attach)

***

### detach()

> **detach**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts:138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts#L138)

Detaches the behavior from its current arc rotate camera.

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`detach`](../interfaces/Behavior.md#detach)

***

### init()

> **init**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts#L108)

Initializes the behavior.

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`init`](../interfaces/Behavior.md#init)

***

### stopAllAnimations()

> **stopAllAnimations**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/bouncingBehavior.ts#L224)

Stops and removes all animations that have been applied to the camera

#### Returns

`void`
