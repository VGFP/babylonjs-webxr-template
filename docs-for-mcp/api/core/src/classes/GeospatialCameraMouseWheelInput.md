[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GeospatialCameraMouseWheelInput

# Class: GeospatialCameraMouseWheelInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraMouseWheelInput.ts:8](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraMouseWheelInput.ts#L8)

Manage the mouse wheel inputs to control a geospatial camera.

## Extends

- [`BaseCameraMouseWheelInput`](BaseCameraMouseWheelInput.md)

## Constructors

### Constructor

> **new GeospatialCameraMouseWheelInput**(): `GeospatialCameraMouseWheelInput`

#### Returns

`GeospatialCameraMouseWheelInput`

#### Inherited from

[`BaseCameraMouseWheelInput`](BaseCameraMouseWheelInput.md).[`constructor`](BaseCameraMouseWheelInput.md#constructor)

## Properties

### camera

> **camera**: [`GeospatialCamera`](GeospatialCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraMouseWheelInput.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraMouseWheelInput.ts#L12)

Defines the camera the input is attached to.

#### Overrides

[`BaseCameraMouseWheelInput`](BaseCameraMouseWheelInput.md).[`camera`](BaseCameraMouseWheelInput.md#camera)

***

### onChangedObservable

> **onChangedObservable**: [`Observable`](Observable.md)\<\{ `wheelDeltaX`: `number`; `wheelDeltaY`: `number`; `wheelDeltaZ`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts#L45)

Observable for when a mouse wheel move event occurs.

#### Inherited from

[`BaseCameraMouseWheelInput`](BaseCameraMouseWheelInput.md).[`onChangedObservable`](BaseCameraMouseWheelInput.md#onchangedobservable)

***

### wheelPrecisionX

> **wheelPrecisionX**: `number` = `3.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts#L26)

How fast is the camera moves in relation to X axis mouseWheel events.
Use negative value to reverse direction.

#### Inherited from

[`BaseCameraMouseWheelInput`](BaseCameraMouseWheelInput.md).[`wheelPrecisionX`](BaseCameraMouseWheelInput.md#wheelprecisionx)

***

### wheelPrecisionY

> **wheelPrecisionY**: `number` = `3.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts#L33)

How fast is the camera moves in relation to Y axis mouseWheel events.
Use negative value to reverse direction.

#### Inherited from

[`BaseCameraMouseWheelInput`](BaseCameraMouseWheelInput.md).[`wheelPrecisionY`](BaseCameraMouseWheelInput.md#wheelprecisiony)

***

### wheelPrecisionZ

> **wheelPrecisionZ**: `number` = `3.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts#L40)

How fast is the camera moves in relation to Z axis mouseWheel events.
Use negative value to reverse direction.

#### Inherited from

[`BaseCameraMouseWheelInput`](BaseCameraMouseWheelInput.md).[`wheelPrecisionZ`](BaseCameraMouseWheelInput.md#wheelprecisionz)

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

#### Inherited from

[`BaseCameraMouseWheelInput`](BaseCameraMouseWheelInput.md).[`attachControl`](BaseCameraMouseWheelInput.md#attachcontrol)

***

### checkInputs()

> **checkInputs**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraMouseWheelInput.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraMouseWheelInput.ts#L22)

Called for each rendered frame.

#### Returns

`void`

#### Overrides

[`BaseCameraMouseWheelInput`](BaseCameraMouseWheelInput.md).[`checkInputs`](BaseCameraMouseWheelInput.md#checkinputs)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts#L86)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Inherited from

[`BaseCameraMouseWheelInput`](BaseCameraMouseWheelInput.md).[`detachControl`](BaseCameraMouseWheelInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraMouseWheelInput.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraMouseWheelInput.ts#L18)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Overrides

[`BaseCameraMouseWheelInput`](BaseCameraMouseWheelInput.md).[`getClassName`](BaseCameraMouseWheelInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraMouseWheelInput.ts#L125)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Inherited from

[`BaseCameraMouseWheelInput`](BaseCameraMouseWheelInput.md).[`getSimpleName`](BaseCameraMouseWheelInput.md#getsimplename)
