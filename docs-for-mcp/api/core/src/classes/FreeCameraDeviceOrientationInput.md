[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FreeCameraDeviceOrientationInput

# Class: FreeCameraDeviceOrientationInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts#L48)

Takes information about the orientation of the device as reported by the deviceorientation event to orient the camera.
Screen rotation is taken into account.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`FreeCamera`](FreeCamera.md)\>

## Constructors

### Constructor

> **new FreeCameraDeviceOrientationInput**(): `FreeCameraDeviceOrientationInput`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts#L117)

Instantiates a new input

#### Returns

`FreeCameraDeviceOrientationInput`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Properties

### smoothFactor

> **smoothFactor**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts#L61)

alpha+beta+gamma smoothing. 0: no smoothing, 1: new data ignored, 0.9 recommended for smoothing

## Accessors

### camera

#### Get Signature

> **get** **camera**(): [`FreeCamera`](FreeCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts#L125)

Define the camera controlled by the input.

##### Returns

[`FreeCamera`](FreeCamera.md)

#### Set Signature

> **set** **camera**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts:129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts#L129)

Defines the camera the input is attached to.

##### Parameters

###### camera

[`FreeCamera`](FreeCamera.md)

##### Returns

`void`

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

## Methods

### attachControl()

> **attachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts#L144)

Attach the input controls to a specific dom element to get the input from.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`attachControl`](../interfaces/ICameraInput.md#attachcontrol)

***

### checkInputs()

> **checkInputs**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts#L216)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`checkInputs`](../interfaces/ICameraInput.md#checkinputs)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts:206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts#L206)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts:240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts#L240)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts:248](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts#L248)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)

***

### WaitForOrientationChangeAsync()

> `static` **WaitForOrientationChangeAsync**(`timeout?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraDeviceOrientationInput.ts#L68)

Can be used to detect if a device orientation sensor is available on a device

#### Parameters

##### timeout?

`number`

amount of time in milliseconds to wait for a response from the sensor (default: infinite)

#### Returns

`Promise`\<`void`\>

a promise that will resolve on orientation change
