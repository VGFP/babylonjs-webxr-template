[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlyCameraMouseInput

# Class: FlyCameraMouseInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L17)

Listen to mouse events to control the camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`FlyCamera`](FlyCamera.md)\>

## Constructors

### Constructor

> **new FlyCameraMouseInput**(): `FlyCameraMouseInput`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L77)

Listen to mouse events to control the camera.

#### Returns

`FlyCameraMouseInput`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Properties

### activeButton

> **activeButton**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L56)

Detect if any button is being pressed while mouse is moved.
-1 = Mouse locked.
0 = Left button.
1 = Middle Button.
2 = Right Button.

***

### angularSensibility

> **angularSensibility**: `number` = `1000.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L63)

Defines the pointer's angular sensibility, to control the camera rotation speed.
Higher values reduce its sensitivity.

***

### buttons

> **buttons**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L32)

Defines the buttons associated with the input to handle camera rotation.

***

### buttonsPitch

> **buttonsPitch**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L42)

Assign buttons for Pitch control.

***

### buttonsRoll

> **buttonsRoll**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L47)

Assign buttons for Roll control.

***

### buttonsYaw

> **buttonsYaw**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L37)

Assign buttons for Yaw control.

***

### camera

> **camera**: [`FlyCamera`](FlyCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L21)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

***

### touchEnabled

> **touchEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L26)

Defines if touch is enabled. (Default is true.)

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L83)

Attach the mouse control to the HTML DOM element.

#### Parameters

##### noPreventDefault?

`boolean`

Defines whether events caught by the controls should call preventdefault().

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`attachControl`](../interfaces/ICameraInput.md#attachcontrol)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L105)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L122)

Gets the class name of the current input.

#### Returns

`string`

the class name.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L130)

Get the friendly name associated with the input class.

#### Returns

`string`

the input's friendly name.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
