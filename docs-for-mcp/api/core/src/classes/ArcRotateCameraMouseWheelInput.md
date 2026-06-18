[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ArcRotateCameraMouseWheelInput

# Class: ArcRotateCameraMouseWheelInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts#L27)

Manage the mouse wheel inputs to control an arc rotate camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`ArcRotateCamera`](ArcRotateCamera.md)\>

## Constructors

### Constructor

> **new ArcRotateCameraMouseWheelInput**(): `ArcRotateCameraMouseWheelInput`

#### Returns

`ArcRotateCameraMouseWheelInput`

## Properties

### camera

> **camera**: [`ArcRotateCamera`](ArcRotateCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts#L31)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

***

### customComputeDeltaFromMouseWheel

> **customComputeDeltaFromMouseWheel**: [`Nullable`](../type-aliases/Nullable.md)\<(`wheelDelta`, `input`, `event`) => `number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts#L56)

If set, this function will be used to set the radius delta that will be added to the current camera radius

***

### wheelDeltaPercentage

> **wheelDeltaPercentage**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts#L51)

wheelDeltaPercentage will be used instead of wheelPrecision if different from 0.
It defines the percentage of current camera.radius to use as delta when wheel is used.

***

### wheelPrecision

> **wheelPrecision**: `number` = `3.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts#L37)

Gets or Set the mouse wheel precision or how fast is the camera zooming.

***

### zoomToMouseLocation

> **zoomToMouseLocation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts#L44)

Gets or Set the boolean value that controls whether or not the mouse wheel
zooms to the location of the mouse pointer or not.  The default is false.

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts#L79)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts:174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts#L174)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`checkInputs`](../interfaces/ICameraInput.md#checkinputs)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts#L162)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts:219](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts#L219)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts:227](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraMouseWheelInput.ts#L227)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
