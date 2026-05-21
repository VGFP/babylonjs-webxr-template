[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InterpolatingBehavior

# Class: InterpolatingBehavior\<C\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L15)

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

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L52)

Initializes the behavior

#### Returns

`InterpolatingBehavior`\<`C`\>

## Properties

### easingFunction

> **easingFunction**: [`EasingFunction`](EasingFunction.md)

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L26)

The easing function to use for interpolation

***

### easingMode

> **easingMode**: `number` = `EasingFunction.EASINGMODE_EASEINOUT`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L31)

The easing mode (default is EASINGMODE_EASEINOUT)

***

### transitionDuration

> **transitionDuration**: `number` = `450`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L36)

Duration of the animation in milliseconds

## Accessors

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<`C`\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L41)

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

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L83)

##### Returns

`boolean`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L19)

Gets the name of the behavior.

##### Returns

`string`

gets or sets behavior's name

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`name`](../interfaces/Behavior.md#name)

## Methods

### animatePropertiesAsync()

> **animatePropertiesAsync**\<`K`\>(`properties`, `transitionDuration?`, `easingFn?`, `updateAnimation?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L108)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### properties

`Map`\<`K`, [`AllowedAnimValue`](../type-aliases/AllowedAnimValue.md)\>

##### transitionDuration?

`number` = `...`

##### easingFn?

[`EasingFunction`](EasingFunction.md) = `...`

##### updateAnimation?

(`key`, `animation`) => `void`

#### Returns

`Promise`\<`void`\>

***

### attach()

> **attach**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L67)

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

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L74)

Detaches the behavior from the camera

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`detach`](../interfaces/Behavior.md#detach)

***

### init()

> **init**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L59)

Initializes the behavior

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`init`](../interfaces/Behavior.md#init)

***

### stopAllAnimations()

> **stopAllAnimations**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L90)

Stops and removes all animations

#### Returns

`void`

***

### updateProperties()

> **updateProperties**\<`K`\>(`properties`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/interpolatingBehavior.ts#L99)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### properties

`Map`\<`K`, [`AllowedAnimValue`](../type-aliases/AllowedAnimValue.md)\>

#### Returns

`void`
