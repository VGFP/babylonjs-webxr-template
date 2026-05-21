[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlyCameraMouseInput

# Class: FlyCameraMouseInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L16)

Listen to mouse events to control the camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`FlyCamera`](FlyCamera.md)\>

## Constructors

### Constructor

> **new FlyCameraMouseInput**(): `FlyCameraMouseInput`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L73)

Listen to mouse events to control the camera.

#### Returns

`FlyCameraMouseInput`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Properties

### activeButton

> **activeButton**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L55)

Detect if any button is being pressed while mouse is moved.
-1 = Mouse locked.
0 = Left button.
1 = Middle Button.
2 = Right Button.

***

### angularSensibility

> **angularSensibility**: `number` = `1000.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L62)

Defines the pointer's angular sensibility, to control the camera rotation speed.
Higher values reduce its sensitivity.

***

### buttons

> **buttons**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L31)

Defines the buttons associated with the input to handle camera rotation.

***

### buttonsPitch

> **buttonsPitch**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L41)

Assign buttons for Pitch control.

***

### buttonsRoll

> **buttonsRoll**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L46)

Assign buttons for Roll control.

***

### buttonsYaw

> **buttonsYaw**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L36)

Assign buttons for Yaw control.

***

### camera

> **camera**: [`FlyCamera`](FlyCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L20)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

***

### touchEnabled

> **touchEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L25)

Defines if touch is enabled. (Default is true.)

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L79)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L101)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L118)

Gets the class name of the current input.

#### Returns

`string`

the class name.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/flyCameraMouseInput.ts#L126)

Get the friendly name associated with the input class.

#### Returns

`string`

the input's friendly name.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
