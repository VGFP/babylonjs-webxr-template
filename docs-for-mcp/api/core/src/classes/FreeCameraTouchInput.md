[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FreeCameraTouchInput

# Class: FreeCameraTouchInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts#L14)

Manage the touch inputs to control the movement of a free camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`FreeCamera`](FreeCamera.md)\>

## Constructors

### Constructor

> **new FreeCameraTouchInput**(`allowMouse?`): `FreeCameraTouchInput`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts#L53)

Manage the touch inputs to control the movement of a free camera.

#### Parameters

##### allowMouse?

`boolean` = `false`

Defines if mouse events can be treated as touch events

#### Returns

`FreeCameraTouchInput`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Properties

### allowMouse

> **allowMouse**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts#L57)

[false] Define if mouse events can be treated as touch events

***

### camera

> **camera**: [`FreeCamera`](FreeCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts#L18)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

***

### singleFingerRotate

> **singleFingerRotate**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts#L37)

Swap touch actions so that one touch is used for rotation and multiple for movement

***

### touchAngularSensibility

> **touchAngularSensibility**: `number` = `200000.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts#L25)

Defines the touch sensibility for rotation.
The lower the faster.

***

### touchMoveSensibility

> **touchMoveSensibility**: `number` = `250.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts#L32)

Defines the touch sensibility for move.
The lower the faster.

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts#L66)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts#L181)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`checkInputs`](../interfaces/ICameraInput.md#checkinputs)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts#L155)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts#L225)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/freeCameraTouchInput.ts#L233)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
