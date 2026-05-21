[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FreeCameraGamepadInput

# Class: FreeCameraGamepadInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts#L13)

Manage the gamepad inputs to control a free camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`FreeCamera`](FreeCamera.md)\>

## Constructors

### Constructor

> **new FreeCameraGamepadInput**(): `FreeCameraGamepadInput`

#### Returns

`FreeCameraGamepadInput`

## Properties

### camera

> **camera**: [`FreeCamera`](FreeCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts#L17)

Define the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

***

### deadzoneDelta

> **deadzoneDelta**: `number` = `0.1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts#L42)

Defines the minimum value at which any analog stick input is ignored.
Note: This value should only be a value between 0 and 1.

***

### gamepad

> **gamepad**: [`Nullable`](../type-aliases/Nullable.md)\<[`Gamepad`](Gamepad.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts#L22)

Define the Gamepad controlling the input

***

### gamepadAngularSensibility

> **gamepadAngularSensibility**: `number` = `200`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts#L29)

Defines the gamepad rotation sensibility.
This is the threshold from when rotation starts to be accounted for to prevent jittering.

***

### gamepadMoveSensibility

> **gamepadMoveSensibility**: `number` = `40`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts#L36)

Defines the gamepad move sensibility.
This is the threshold from when moving starts to be accounted for for to prevent jittering.

## Accessors

### invertYAxis

#### Get Signature

> **get** **invertYAxis**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts#L49)

Gets or sets a boolean indicating that Yaxis (for right stick) should be inverted

##### Returns

`boolean`

#### Set Signature

> **set** **invertYAxis**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts#L53)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### attachControl()

> **attachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts#L68)

Attach the input controls to a specific dom element to get the input from.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`attachControl`](../interfaces/ICameraInput.md#attachcontrol)

***

### checkInputs()

> **checkInputs**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts#L106)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`checkInputs`](../interfaces/ICameraInput.md#checkinputs)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts#L96)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts:143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts#L143)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraGamepadInput.ts#L151)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
