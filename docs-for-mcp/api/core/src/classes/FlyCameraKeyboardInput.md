[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlyCameraKeyboardInput

# Class: FlyCameraKeyboardInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts#L16)

Listen to keyboard events to control the camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`FlyCamera`](FlyCamera.md)\>

## Constructors

### Constructor

> **new FlyCameraKeyboardInput**(): `FlyCameraKeyboardInput`

#### Returns

`FlyCameraKeyboardInput`

## Properties

### camera

> **camera**: [`FlyCamera`](FlyCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts#L20)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

***

### keysBackward

> **keysBackward**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts#L32)

The list of keyboard keys used to control the backward move of the camera.

***

### keysDown

> **keysDown**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts#L44)

The list of keyboard keys used to control the backward move of the camera.

***

### keysForward

> **keysForward**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts#L26)

The list of keyboard keys used to control the forward move of the camera.

***

### keysLeft

> **keysLeft**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts#L56)

The list of keyboard keys used to control the left strafe move of the camera.

***

### keysRight

> **keysRight**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts#L50)

The list of keyboard keys used to control the right strafe move of the camera.

***

### keysUp

> **keysUp**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts#L38)

The list of keyboard keys used to control the forward move of the camera.

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts#L68)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts#L169)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`checkInputs`](../interfaces/ICameraInput.md#checkinputs)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts#L127)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts#L146)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts:161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraKeyboardInput.ts#L161)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
