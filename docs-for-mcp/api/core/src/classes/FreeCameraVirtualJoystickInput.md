[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FreeCameraVirtualJoystickInput

# Class: FreeCameraVirtualJoystickInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.ts#L32)

Manage the Virtual Joystick inputs to control the movement of a free camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`FreeCamera`](FreeCamera.md)\>

## Constructors

### Constructor

> **new FreeCameraVirtualJoystickInput**(): `FreeCameraVirtualJoystickInput`

#### Returns

`FreeCameraVirtualJoystickInput`

## Properties

### camera

> **camera**: [`FreeCamera`](FreeCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.ts#L36)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

## Methods

### attachControl()

> **attachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.ts#L86)

Attach the input controls to a specific dom element to get the input from.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`attachControl`](../interfaces/ICameraInput.md#attachcontrol)

***

### checkInputs()

> **checkInputs**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.ts#L61)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`checkInputs`](../interfaces/ICameraInput.md#checkinputs)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.ts#L102)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.ts#L111)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getLeftJoystick()

> **getLeftJoystick**(): [`VirtualJoystick`](VirtualJoystick.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.ts#L45)

Gets the left stick of the virtual joystick.

#### Returns

[`VirtualJoystick`](VirtualJoystick.md)

The virtual Joystick

***

### getRightJoystick()

> **getRightJoystick**(): [`VirtualJoystick`](VirtualJoystick.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.ts#L53)

Gets the right stick of the virtual joystick.

#### Returns

[`VirtualJoystick`](VirtualJoystick.md)

The virtual Joystick

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.ts#L119)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
