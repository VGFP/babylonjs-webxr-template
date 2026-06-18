[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ArcRotateCameraGamepadInput

# Class: ArcRotateCameraGamepadInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts#L11)

Manage the gamepad inputs to control an arc rotate camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`ArcRotateCamera`](ArcRotateCamera.md)\>

## Constructors

### Constructor

> **new ArcRotateCameraGamepadInput**(): `ArcRotateCameraGamepadInput`

#### Returns

`ArcRotateCameraGamepadInput`

## Properties

### camera

> **camera**: [`ArcRotateCamera`](ArcRotateCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts#L15)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

***

### gamepad

> **gamepad**: [`Nullable`](../type-aliases/Nullable.md)\<[`Gamepad`](Gamepad.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts#L20)

Defines the gamepad the input is gathering event from.

***

### gamepadMoveSensibility

> **gamepadMoveSensibility**: `number` = `40`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts#L34)

Defines the gamepad move sensibility.
This is the threshold from when moving starts to be accounted for for to prevent jittering.

***

### gamepadRotationSensibility

> **gamepadRotationSensibility**: `number` = `80`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts#L27)

Defines the gamepad rotation sensibility.
This is the threshold from when rotation starts to be accounted for to prevent jittering.

## Accessors

### invertYAxis

#### Get Signature

> **get** **invertYAxis**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts#L41)

Gets or sets a boolean indicating that Yaxis (for right stick) should be inverted

##### Returns

`boolean`

#### Set Signature

> **set** **invertYAxis**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts#L45)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### attachControl()

> **attachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts#L55)

Attach the input controls to a specific dom element to get the input from.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`attachControl`](../interfaces/ICameraInput.md#attachcontrol)

***

### checkInputs()

> **checkInputs**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts#L92)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`checkInputs`](../interfaces/ICameraInput.md#checkinputs)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts#L82)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts#L130)

Gets the class name of the current intput.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraGamepadInput.ts#L138)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
