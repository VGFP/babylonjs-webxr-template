[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ArcRotateCameraKeyboardMoveInput

# Class: ArcRotateCameraKeyboardMoveInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L15)

Manage the keyboard inputs to control the movement of an arc rotate camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`ArcRotateCamera`](ArcRotateCamera.md)\>

## Constructors

### Constructor

> **new ArcRotateCameraKeyboardMoveInput**(): `ArcRotateCameraKeyboardMoveInput`

#### Returns

`ArcRotateCameraKeyboardMoveInput`

## Properties

### angularSpeed

> **angularSpeed**: `number` = `0.01`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L77)

Rotation speed of the camera

***

### camera

> **camera**: [`ArcRotateCamera`](ArcRotateCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L19)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

***

### keysDown

> **keysDown**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L31)

Defines the list of key codes associated with the down action (decrease alpha)

***

### keysLeft

> **keysLeft**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L37)

Defines the list of key codes associated with the left action (increase beta)

***

### keysReset

> **keysReset**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L50)

Defines the list of key codes associated with the reset action.
Those keys reset the camera to its last stored state (with the method camera.storeState())

***

### keysRight

> **keysRight**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L43)

Defines the list of key codes associated with the right action (decrease beta)

***

### keysUp

> **keysUp**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L25)

Defines the list of key codes associated with the up action (increase alpha)

***

### panningSensibility

> **panningSensibility**: `number` = `50.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L57)

Defines the panning sensibility of the inputs.
(How fast is the camera panning)

***

### useAltToZoom

> **useAltToZoom**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L71)

Defines whether maintaining the alt key down switch the movement mode from
orientation to zoom.

***

### zoomingSensibility

> **zoomingSensibility**: `number` = `25.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L64)

Defines the zooming sensibility of the inputs.
(How fast is the camera zooming)

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L91)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L179)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`checkInputs`](../interfaces/ICameraInput.md#checkinputs)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L160)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L226)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:234](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L234)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
