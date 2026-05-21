[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GeospatialCameraPointersInput

# Class: GeospatialCameraPointersInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L17)

Geospatial camera inputs can simulate dragging the globe around or tilting the camera around some point on the globe
This class will update the GeospatialCameraMovement class's movementDeltaCurrentFrame, and the camera is responsible for using these updates to calculate viewMatrix appropriately

Left mouse button: drag globe
Middle mouse button: tilt globe
Right mouse button: tilt globe

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L46)

Defines the buttons associated with the input to handle camera move.

#### Inherited from

`OrbitCameraPointersInput.buttons`

***

### camera

> **camera**: [`GeospatialCamera`](GeospatialCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L18)

Defines the camera the input is attached to.

#### Overrides

`OrbitCameraPointersInput.camera`

***

### multiTouchPanAndZoom

> **multiTouchPanAndZoom**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/orbitCameraPointersInput.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/orbitCameraPointersInput.ts#L29)

Defines whether panning is enabled for both pan (2 fingers swipe) and
zoom (pinch) through multitouch.

#### Inherited from

`OrbitCameraPointersInput.multiTouchPanAndZoom`

***

### multiTouchPanning

> **multiTouchPanning**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/orbitCameraPointersInput.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/orbitCameraPointersInput.ts#L22)

Defines whether panning (2 fingers swipe) is enabled through multitouch.

#### Inherited from

`OrbitCameraPointersInput.multiTouchPanning`

***

### pinchToPanMax

> **pinchToPanMax**: `number` = `20`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L40)

Defines the distance used to consider the camera in pan mode vs pinch/zoom.
Basically if your fingers moves away from more than this distance you will be considered
in pinch mode.

***

### pinchZoom

> **pinchZoom**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/orbitCameraPointersInput.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/orbitCameraPointersInput.ts#L16)

Defines whether zoom (2 fingers pinch) is enabled through multitouch

#### Inherited from

`OrbitCameraPointersInput.pinchZoom`

***

### pitchSensitivity

> **pitchSensitivity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L27)

Defines the rotation sensitivity of the pointer when rotating camera around the x axis (pitch)
(Multiplied by the true pixel delta of pointer input, before rotation speed factor is applied by movement class)

***

### yawSensitivity

> **yawSensitivity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L33)

Defines the rotation sensitivity of the pointer when rotating the camera around the Y axis (yaw)
(Multiplied by the true pixel delta of pointer input, before rotation speed factor is applied by movement class)

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L52)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:257](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L257)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Inherited from

`OrbitCameraPointersInput.detachControl`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L42)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Overrides

`OrbitCameraPointersInput.getClassName`

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:299](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L299)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Inherited from

`OrbitCameraPointersInput.getSimpleName`

***

### onButtonDown()

> **onButtonDown**(`evt`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L46)

Called each time a new POINTERDOWN event occurs. Ie, for each button
press.
Override this method to provide functionality.

#### Parameters

##### evt

[`IPointerEvent`](../interfaces/IPointerEvent.md)

#### Returns

`void`

#### Overrides

`OrbitCameraPointersInput.onButtonDown`

***

### onButtonUp()

> **onButtonUp**(`_evt`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L169)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:346](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L346)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L131)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L177)

Called when window becomes inactive.

#### Returns

`void`

#### Overrides

`OrbitCameraPointersInput.onLostFocus`

***

### onMultiTouch()

> **onMultiTouch**(`pointA`, `pointB`, `previousPinchSquaredDistance`, `pinchSquaredDistance`, `previousMultiTouchPanPosition`, `multiTouchPanPosition`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L138)

Called on pointer POINTERMOVE event if multiple touches are active.
Override this method to provide functionality.

#### Parameters

##### pointA

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

##### pointB

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

##### previousPinchSquaredDistance

`number`

Sqr Distance between the points the last time this event was fired (by this input)

##### pinchSquaredDistance

`number`

Sqr Distance between the points this time

##### previousMultiTouchPanPosition

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

Previous center point between the points

##### multiTouchPanPosition

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

Current center point between the points

#### Returns

`void`

#### Overrides

`OrbitCameraPointersInput.onMultiTouch`

***

### onTouch()

> **onTouch**(`point`, `offsetX`, `offsetY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraPointersInput.ts#L58)

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
