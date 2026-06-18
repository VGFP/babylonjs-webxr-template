[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GeospatialCameraPointersInput

# Class: GeospatialCameraPointersInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L17)

Geospatial camera inputs can simulate dragging the globe around or tilting the camera around some point on the globe
This class will update the GeospatialCameraMovement class's movementDeltaCurrentFrame, and the camera is responsible for using these updates to calculate viewMatrix appropriately

Uses the inputMap on the movement class to determine which button maps to which interaction.
Default: Left mouse button = pan (drag globe), Middle/Right mouse button = rotate (tilt)

## Extends

- `OrbitCameraPointersInput`

## Constructors

### Constructor

> **new GeospatialCameraPointersInput**(): `GeospatialCameraPointersInput`

#### Returns

`GeospatialCameraPointersInput`

#### Inherited from

`OrbitCameraPointersInput.constructor`

## Properties

### buttons

> **buttons**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L46)

Defines the buttons associated with the input to handle camera move.

#### Inherited from

`OrbitCameraPointersInput.buttons`

***

### camera

> **camera**: [`GeospatialCamera`](GeospatialCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L18)

Defines the camera the input is attached to.

#### Overrides

`OrbitCameraPointersInput.camera`

***

### multiTouchPanAndZoom

> **multiTouchPanAndZoom**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/orbitCameraPointersInput.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/orbitCameraPointersInput.ts#L29)

Defines whether panning is enabled for both pan (2 fingers swipe) and
zoom (pinch) through multitouch.

#### Inherited from

`OrbitCameraPointersInput.multiTouchPanAndZoom`

***

### multiTouchPanning

> **multiTouchPanning**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/orbitCameraPointersInput.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/orbitCameraPointersInput.ts#L22)

Defines whether panning (2 fingers swipe) is enabled through multitouch.

#### Inherited from

`OrbitCameraPointersInput.multiTouchPanning`

***

### pinchToPanMax

> **pinchToPanMax**: `number` = `20`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L74)

Defines the distance used to consider the camera in pan mode vs pinch/zoom.
Basically if your fingers moves away from more than this distance you will be considered
in pinch mode.

***

### pinchZoom

> **pinchZoom**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/orbitCameraPointersInput.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/orbitCameraPointersInput.ts#L16)

Defines whether zoom (2 fingers pinch) is enabled through multitouch

#### Inherited from

`OrbitCameraPointersInput.pinchZoom`

## Accessors

### pitchSensitivity

#### Get Signature

> **get** **pitchSensitivity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L42)

Defines the rotation sensitivity of the pointer when rotating camera around the x axis (pitch).
(Multiplied by the true pixel delta of pointer input, before rotation speed factor is applied by movement class)

##### Deprecated

Use the `sensitivity` field on the pointer rotate entry in `camera.movement.input.inputMap` instead.

##### Returns

`number`

#### Set Signature

> **set** **pitchSensitivity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L47)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### yawSensitivity

#### Get Signature

> **get** **yawSensitivity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L58)

Defines the rotation sensitivity of the pointer when rotating the camera around the Y axis (yaw).
(Multiplied by the true pixel delta of pointer input, before rotation speed factor is applied by movement class)

##### Deprecated

Use the `sensitivity` field on the pointer rotate entry in `camera.movement.input.inputMap` instead.

##### Returns

`number`

#### Set Signature

> **set** **yawSensitivity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L63)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L52)

Attach the input controls to a specific dom element to get the input from.

#### Parameters

##### noPreventDefault?

`boolean`

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

#### Returns

`void`

#### Inherited from

`OrbitCameraPointersInput.attachControl`

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:257](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L257)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Inherited from

`OrbitCameraPointersInput.detachControl`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L76)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Overrides

`OrbitCameraPointersInput.getClassName`

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:299](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L299)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Inherited from

`OrbitCameraPointersInput.getSimpleName`

***

### onButtonDown()

> **onButtonDown**(`evt`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L85)

Handles the pointer-down event. Captures the active button + modifier state, resolves which
inputMap entry should drive the gesture, and starts pan tracking if the resolved interaction is "pan".

#### Parameters

##### evt

[`IPointerEvent`](../interfaces/IPointerEvent.md)

The pointer-down event.

#### Returns

`void`

#### Overrides

`OrbitCameraPointersInput.onButtonDown`

***

### onButtonUp()

> **onButtonUp**(`_evt`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L229)

Called each time a new POINTERUP event occurs. Ie, for each button
release.

#### Parameters

##### \_evt

[`IPointerEvent`](../interfaces/IPointerEvent.md)

Defines the event to track

#### Returns

`void`

#### Overrides

`OrbitCameraPointersInput.onButtonUp`

***

### onContextMenu()

> **onContextMenu**(`evt`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:346](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L346)

Called on JS contextmenu event.
Override this method to provide functionality.

#### Parameters

##### evt

`PointerEvent`

the event to be handled

#### Returns

`void`

#### Inherited from

`OrbitCameraPointersInput.onContextMenu`

***

### onDoubleTap()

> **onDoubleTap**(`type`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L180)

Called on pointer POINTERDOUBLETAP event.
Override this method to provide functionality on POINTERDOUBLETAP event.

#### Parameters

##### type

`string`

type of event

#### Returns

`void`

#### Overrides

`OrbitCameraPointersInput.onDoubleTap`

***

### onLostFocus()

> **onLostFocus**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:240](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L240)

Called when window becomes inactive.

#### Returns

`void`

#### Overrides

`OrbitCameraPointersInput.onLostFocus`

***

### onMultiTouch()

> **onMultiTouch**(`pointA`, `pointB`, `previousPinchSquaredDistance`, `pinchSquaredDistance`, `previousMultiTouchPanPosition`, `multiTouchPanPosition`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:198](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L198)

Handles a multi-touch (pinch / two-finger pan) gesture. Detects whether the gesture should be
interpreted as a pinch zoom or a two-finger pan based on cumulative finger distance change,
and forwards the gesture to the parent class once a mode is decided.

#### Parameters

##### pointA

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

First active touch point, or null if it just ended.

##### pointB

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

Second active touch point, or null if it just ended.

##### previousPinchSquaredDistance

`number`

Squared distance between the two touches on the previous frame.

##### pinchSquaredDistance

`number`

Squared distance between the two touches on the current frame.

##### previousMultiTouchPanPosition

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

Centroid of the two touches on the previous frame, or null if unavailable.

##### multiTouchPanPosition

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

Centroid of the two touches on the current frame, or null if the gesture ended.

#### Returns

`void`

#### Overrides

`OrbitCameraPointersInput.onMultiTouch`

***

### onTouch()

> **onTouch**(`point`, `offsetX`, `offsetY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L100)

Called on pointer POINTERMOVE event if only a single touch is active.
Override this method to provide functionality.

#### Parameters

##### point

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

The current position of the pointer

##### offsetX

`number`

The offsetX of the pointer when the event occurred

##### offsetY

`number`

The offsetY of the pointer when the event occurred

#### Returns

`void`

#### Overrides

`OrbitCameraPointersInput.onTouch`
