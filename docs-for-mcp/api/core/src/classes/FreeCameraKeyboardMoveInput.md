[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FreeCameraKeyboardMoveInput

# Class: FreeCameraKeyboardMoveInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts#L15)

Manage the keyboard inputs to control the movement of a free camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`FreeCamera`](FreeCamera.md)\>

## Constructors

### Constructor

> **new FreeCameraKeyboardMoveInput**(): `FreeCameraKeyboardMoveInput`

#### Returns

`FreeCameraKeyboardMoveInput`

## Properties

### camera

> **camera**: [`FreeCamera`](FreeCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts#L19)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

***

### keysDown

> **keysDown**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts#L37)

Gets or Set the list of keyboard keys used to control the backward move of the camera.

***

### keysDownward

> **keysDownward**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts#L43)

Gets or Set the list of keyboard keys used to control the downward move of the camera.

***

### keysLeft

> **keysLeft**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts#L49)

Gets or Set the list of keyboard keys used to control the left strafe move of the camera.

***

### keysRight

> **keysRight**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts#L55)

Gets or Set the list of keyboard keys used to control the right strafe move of the camera.

***

### keysRotateDown

> **keysRotateDown**: `number`[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts#L85)

Gets or Set the list of keyboard keys used to control the down rotation move of the camera.

***

### keysRotateLeft

> **keysRotateLeft**: `number`[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts#L67)

Gets or Set the list of keyboard keys used to control the left rotation move of the camera.

***

### keysRotateRight

> **keysRotateRight**: `number`[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts#L73)

Gets or Set the list of keyboard keys used to control the right rotation move of the camera.

***

### keysRotateUp

> **keysRotateUp**: `number`[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts#L79)

Gets or Set the list of keyboard keys used to control the up rotation move of the camera.

***

### keysUp

> **keysUp**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts#L25)

Gets or Set the list of keyboard keys used to control the forward move of the camera.

***

### keysUpward

> **keysUpward**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts#L31)

Gets or Set the list of keyboard keys used to control the upward move of the camera.

***

### rotationSpeed

> **rotationSpeed**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts#L61)

Defines the pointer angular sensibility  along the X and Y axis or how fast is the camera rotating.

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts#L97)

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

### checkInputs()

> **checkInputs**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts#L183)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`checkInputs`](../interfaces/ICameraInput.md#checkinputs)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts:164](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts#L164)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts#L232)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts:245](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraKeyboardMoveInput.ts#L245)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
