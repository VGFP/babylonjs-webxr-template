[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AutoRotationBehavior

# Class: AutoRotationBehavior

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts#L14)

The autoRotation behavior (AutoRotationBehavior) is designed to create a smooth rotation of an ArcRotateCamera when there is no user interaction.

## See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors/cameraBehaviors#autorotation-behavior

## Implements

- [`Behavior`](../interfaces/Behavior.md)\<[`ArcRotateCamera`](ArcRotateCamera.md)\>

## Constructors

### Constructor

> **new AutoRotationBehavior**(): `AutoRotationBehavior`

#### Returns

`AutoRotationBehavior`

## Properties

### targetAlpha

> **targetAlpha**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts#L30)

Target alpha

## Accessors

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ArcRotateCamera`](ArcRotateCamera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts#L98)

Attached node of this behavior

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ArcRotateCamera`](ArcRotateCamera.md)\>

Gets the current attached target

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attachedNode`](../interfaces/Behavior.md#attachednode)

***

### idleRotationSpeed

#### Get Signature

> **get** **idleRotationSpeed**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts#L56)

Gets the default speed at which the camera rotates around the model.

##### Returns

`number`

#### Set Signature

> **set** **idleRotationSpeed**(`speed`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts#L49)

Sets the default speed at which the camera rotates around the model.

##### Parameters

###### speed

`number`

##### Returns

`void`

***

### idleRotationSpinupTime

#### Get Signature

> **get** **idleRotationSpinupTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts#L84)

Gets the time (milliseconds) to take to spin up to the full idle rotation speed.

##### Returns

`number`

#### Set Signature

> **set** **idleRotationSpinupTime**(`time`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts#L77)

Sets the time (milliseconds) to take to spin up to the full idle rotation speed.

##### Parameters

###### time

`number`

##### Returns

`void`

***

### idleRotationWaitTime

#### Get Signature

> **get** **idleRotationWaitTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts#L70)

Gets the time (milliseconds) to wait after user interaction before the camera starts rotating.

##### Returns

`number`

#### Set Signature

> **set** **idleRotationWaitTime**(`time`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts#L63)

Sets the time (in milliseconds) to wait after user interaction before the camera starts rotating.

##### Parameters

###### time

`number`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts#L18)

Gets the name of the behavior.

##### Returns

`string`

gets or sets behavior's name

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`name`](../interfaces/Behavior.md#name)

***

### rotationInProgress

#### Get Signature

> **get** **rotationInProgress**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts#L91)

Gets a value indicating if the camera is currently rotating because of this behavior

##### Returns

`boolean`

***

### zoomStopsAnimation

#### Get Signature

> **get** **zoomStopsAnimation**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts#L42)

Gets the flag that indicates if user zooming should stop animation.

##### Returns

`boolean`

#### Set Signature

> **set** **zoomStopsAnimation**(`flag`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts#L35)

Sets the flag that indicates if user zooming should stop animation.

##### Parameters

###### flag

`boolean`

##### Returns

`void`

## Methods

### attach()

> **attach**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts#L122)

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

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts#L165)

Detaches the behavior from its current arc rotate camera.

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`detach`](../interfaces/Behavior.md#detach)

***

### init()

> **init**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts#L114)

Initializes the behavior.

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`init`](../interfaces/Behavior.md#init)

***

### resetLastInteractionTime()

> **resetLastInteractionTime**(`customTime?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts:184](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Cameras/autoRotationBehavior.ts#L184)

Force-reset the last interaction time

#### Parameters

##### customTime?

`number`

an optional time that will be used instead of the current last interaction time. For example `Date.now()`

#### Returns

`void`
