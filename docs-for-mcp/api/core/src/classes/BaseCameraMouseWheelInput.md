[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BaseCameraMouseWheelInput

# Abstract Class: BaseCameraMouseWheelInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts#L15)

Base class for mouse wheel input..
See FollowCameraMouseWheelInput in src/Cameras/Inputs/freeCameraMouseWheelInput.ts
for example usage.

## Extended by

- [`FreeCameraMouseWheelInput`](FreeCameraMouseWheelInput.md)
- [`GeospatialCameraMouseWheelInput`](GeospatialCameraMouseWheelInput.md)

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`Camera`](Camera.md)\>

## Constructors

### Constructor

> **new BaseCameraMouseWheelInput**(): `BaseCameraMouseWheelInput`

#### Returns

`BaseCameraMouseWheelInput`

## Properties

### camera

> `abstract` **camera**: [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts#L19)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

***

### onChangedObservable

> **onChangedObservable**: [`Observable`](Observable.md)\<\{ `wheelDeltaX`: `number`; `wheelDeltaY`: `number`; `wheelDeltaZ`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts#L45)

Observable for when a mouse wheel move event occurs.

***

### wheelPrecisionX

> **wheelPrecisionX**: `number` = `3.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts#L26)

How fast is the camera moves in relation to X axis mouseWheel events.
Use negative value to reverse direction.

***

### wheelPrecisionY

> **wheelPrecisionY**: `number` = `3.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts#L33)

How fast is the camera moves in relation to Y axis mouseWheel events.
Use negative value to reverse direction.

***

### wheelPrecisionZ

> **wheelPrecisionZ**: `number` = `3.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts#L40)

How fast is the camera moves in relation to Z axis mouseWheel events.
Use negative value to reverse direction.

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts#L56)

Attach the input controls to a specific dom element to get the input from.

#### Parameters

##### noPreventDefault?

`boolean`

Defines whether event caught by the controls
  should call preventdefault().
  (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`attachControl`](../interfaces/ICameraInput.md#attachcontrol)

***

### checkInputs()

> **checkInputs**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts#L100)

Called for each rendered frame.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`checkInputs`](../interfaces/ICameraInput.md#checkinputs)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts#L86)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts#L117)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts#L125)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
