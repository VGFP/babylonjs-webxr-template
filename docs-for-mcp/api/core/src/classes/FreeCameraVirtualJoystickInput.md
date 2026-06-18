[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FreeCameraVirtualJoystickInput

# Class: FreeCameraVirtualJoystickInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.pure.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.pure.ts#L14)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.pure.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.pure.ts#L18)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

## Methods

### attachControl()

> **attachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.pure.ts#L68)

Attach the input controls to a specific dom element to get the input from.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`attachControl`](../interfaces/ICameraInput.md#attachcontrol)

***

### checkInputs()

> **checkInputs**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.pure.ts#L43)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`checkInputs`](../interfaces/ICameraInput.md#checkinputs)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.pure.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.pure.ts#L84)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.pure.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.pure.ts#L93)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getLeftJoystick()

> **getLeftJoystick**(): [`VirtualJoystick`](VirtualJoystick.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.pure.ts#L27)

Gets the left stick of the virtual joystick.

#### Returns

[`VirtualJoystick`](VirtualJoystick.md)

The virtual Joystick

***

### getRightJoystick()

> **getRightJoystick**(): [`VirtualJoystick`](VirtualJoystick.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.pure.ts#L35)

Gets the right stick of the virtual joystick.

#### Returns

[`VirtualJoystick`](VirtualJoystick.md)

The virtual Joystick

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.pure.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraVirtualJoystickInput.pure.ts#L101)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
