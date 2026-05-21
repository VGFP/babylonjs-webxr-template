[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FollowCameraMouseWheelInput

# Class: FollowCameraMouseWheelInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts#L15)

Manage the mouse wheel inputs to control a follow camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`FollowCamera`](FollowCamera.md)\>

## Constructors

### Constructor

> **new FollowCameraMouseWheelInput**(): `FollowCameraMouseWheelInput`

#### Returns

`FollowCameraMouseWheelInput`

## Properties

### axisControlHeight

> **axisControlHeight**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts#L31)

Moue wheel controls height. (Mouse wheel modifies camera.heightOffset value.)

***

### axisControlRadius

> **axisControlRadius**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts#L25)

Moue wheel controls zoom. (Mouse wheel modifies camera.radius value.)

***

### axisControlRotation

> **axisControlRotation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts#L37)

Moue wheel controls angle. (Mouse wheel modifies camera.rotationOffset value.)

***

### camera

> **camera**: [`FollowCamera`](FollowCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts#L19)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

***

### wheelDeltaPercentage

> **wheelDeltaPercentage**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts#L51)

wheelDeltaPercentage will be used instead of wheelPrecision if different from 0.
It defines the percentage of current camera.radius to use as delta when wheel is used.

***

### wheelPrecision

> **wheelPrecision**: `number` = `3.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts#L44)

Gets or Set the mouse wheel precision or how fast is the camera moves in
relation to mouseWheel events.

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts#L60)

Attach the input controls to a specific dom element to get the input from.

#### Parameters

##### noPreventDefault?

`boolean`

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`attachControl`](../interfaces/ICameraInput.md#attachcontrol)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts#L120)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts#L132)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/followCameraMouseWheelInput.ts#L140)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
