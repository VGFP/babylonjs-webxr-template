[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ArcRotateCameraKeyboardMoveInput

# Class: ArcRotateCameraKeyboardMoveInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L16)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L85)

Rotation speed of the camera

***

### camera

> **camera**: [`ArcRotateCamera`](ArcRotateCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L20)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

***

### keysDown

> **keysDown**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L32)

Defines the list of key codes associated with the down action (decrease alpha)

***

### keysLeft

> **keysLeft**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L38)

Defines the list of key codes associated with the left action (increase beta)

***

### keysReset

> **keysReset**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L51)

Defines the list of key codes associated with the reset action.
Those keys reset the camera to its last stored state (with the method camera.storeState())

***

### keysRight

> **keysRight**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L44)

Defines the list of key codes associated with the right action (decrease beta)

***

### keysUp

> **keysUp**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L26)

Defines the list of key codes associated with the up action (increase alpha)

***

### keysZoomIn

> **keysZoomIn**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L58)

Defines the list of key codes associated with the zoom in action.
Only used when CameraMovement is active — these keys always trigger zoom regardless of modifiers.

***

### keysZoomOut

> **keysZoomOut**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L65)

Defines the list of key codes associated with the zoom out action.
Only used when CameraMovement is active — these keys always trigger zoom regardless of modifiers.

***

### panningSensibility

> **panningSensibility**: `number` = `50.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L72)

Defines the panning sensibility of the inputs.
(How fast is the camera panning)

***

### zoomingSensibility

> **zoomingSensibility**: `number` = `25.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L79)

Defines the zooming sensibility of the inputs.
(How fast is the camera zooming)

## Accessors

### useAltToZoom

#### Get Signature

> **get** **useAltToZoom**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L96)

Defines whether alt+arrows/wasd triggers zoom instead of rotation/pan.
When disabled, alt+keyboard events are ignored by the zoom inputMap entry.
Setting this updates the corresponding inputMap entry on the camera's movement system.
If set before the camera is attached, the value is cached and applied during `attachControl`.

##### Returns

`boolean`

#### Set Signature

> **set** **useAltToZoom**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L100)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L146)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:240](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L240)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`checkInputs`](../interfaces/ICameraInput.md#checkinputs)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L221)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:309](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L309)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:317](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L317)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
