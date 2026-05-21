[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FreeCameraMouseWheelInput

# Class: FreeCameraMouseWheelInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L20)

Manage the mouse wheel inputs to control a free camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Extends

- [`BaseCameraMouseWheelInput`](BaseCameraMouseWheelInput.md)

## Constructors

### Constructor

> **new FreeCameraMouseWheelInput**(): `FreeCameraMouseWheelInput`

#### Returns

`FreeCameraMouseWheelInput`

#### Inherited from

[`BaseCameraMouseWheelInput`](BaseCameraMouseWheelInput.md).[`constructor`](BaseCameraMouseWheelInput.md#constructor)

## Properties

### camera

> **camera**: [`FreeCamera`](FreeCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L24)

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

## Accessors

### wheelXMoveRelative

#### Get Signature

> **get** **wheelXMoveRelative**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L54)

Get the configured movement axis (relative to camera's orientation) the
mouse wheel's X axis controls.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

The configured axis or null if none.

#### Set Signature

> **set** **wheelXMoveRelative**(`axis`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L40)

Set which movement axis (relative to camera's orientation) the mouse
wheel's X axis controls.

##### Parameters

###### axis

[`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

The axis to be moved. Set null to clear.

##### Returns

`void`

***

### wheelXMoveScene

#### Get Signature

> **get** **wheelXMoveScene**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L216)

Get the configured movement axis (relative to the scene) the mouse wheel's
X axis controls.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

The configured axis or null if none.

#### Set Signature

> **set** **wheelXMoveScene**(`axis`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:202](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L202)

Set which movement axis (relative to the scene) the mouse wheel's X axis
controls.

##### Parameters

###### axis

[`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

The axis to be moved. Set null to clear.

##### Returns

`void`

***

### wheelXRotateRelative

#### Get Signature

> **get** **wheelXRotateRelative**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L135)

Get the configured rotation axis (relative to camera's orientation) the
mouse wheel's X axis controls.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

The configured axis or null if none.

#### Set Signature

> **set** **wheelXRotateRelative**(`axis`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L121)

Set which rotation axis (relative to camera's orientation) the mouse
wheel's X axis controls.

##### Parameters

###### axis

[`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

The axis to be moved. Set null to clear.

##### Returns

`void`

***

### wheelYMoveRelative

#### Get Signature

> **get** **wheelYMoveRelative**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L81)

Get the configured movement axis (relative to camera's orientation) the
mouse wheel's Y axis controls.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

The configured axis or null if none.

#### Set Signature

> **set** **wheelYMoveRelative**(`axis`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L67)

Set which movement axis (relative to camera's orientation) the mouse
wheel's Y axis controls.

##### Parameters

###### axis

[`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

The axis to be moved. Set null to clear.

##### Returns

`void`

***

### wheelYMoveScene

#### Get Signature

> **get** **wheelYMoveScene**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:243](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L243)

Get the configured movement axis (relative to the scene) the mouse wheel's
Y axis controls.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

The configured axis or null if none.

#### Set Signature

> **set** **wheelYMoveScene**(`axis`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:229](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L229)

Set which movement axis (relative to the scene) the mouse wheel's Y axis
controls.

##### Parameters

###### axis

[`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

The axis to be moved. Set null to clear.

##### Returns

`void`

***

### wheelYRotateRelative

#### Get Signature

> **get** **wheelYRotateRelative**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L162)

Get the configured rotation axis (relative to camera's orientation) the
mouse wheel's Y axis controls.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

The configured axis or null if none.

#### Set Signature

> **set** **wheelYRotateRelative**(`axis`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L148)

Set which rotation axis (relative to camera's orientation) the mouse
wheel's Y axis controls.

##### Parameters

###### axis

[`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

The axis to be moved. Set null to clear.

##### Returns

`void`

***

### wheelZMoveRelative

#### Get Signature

> **get** **wheelZMoveRelative**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L108)

Get the configured movement axis (relative to camera's orientation) the
mouse wheel's Z axis controls.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

The configured axis or null if none.

#### Set Signature

> **set** **wheelZMoveRelative**(`axis`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L94)

Set which movement axis (relative to camera's orientation) the mouse
wheel's Z axis controls.

##### Parameters

###### axis

[`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

The axis to be moved. Set null to clear.

##### Returns

`void`

***

### wheelZMoveScene

#### Get Signature

> **get** **wheelZMoveScene**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:270](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L270)

Get the configured movement axis (relative to the scene) the mouse wheel's
Z axis controls.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

The configured axis or null if none.

#### Set Signature

> **set** **wheelZMoveScene**(`axis`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:256](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L256)

Set which movement axis (relative to the scene) the mouse wheel's Z axis
controls.

##### Parameters

###### axis

[`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

The axis to be moved. Set null to clear.

##### Returns

`void`

***

### wheelZRotateRelative

#### Get Signature

> **get** **wheelZRotateRelative**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L189)

Get the configured rotation axis (relative to camera's orientation) the
mouse wheel's Z axis controls.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

The configured axis or null if none.

#### Set Signature

> **set** **wheelZRotateRelative**(`axis`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L175)

Set which rotation axis (relative to camera's orientation) the mouse
wheel's Z axis controls.

##### Parameters

###### axis

[`Nullable`](../type-aliases/Nullable.md)\<[`Coordinate`](../enumerations/Coordinate.md)\>

The axis to be moved. Set null to clear.

##### Returns

`void`

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:280](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L280)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseWheelInput.ts#L30)

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
