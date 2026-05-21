[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ArcRotateCameraPointersInput

# Class: ArcRotateCameraPointersInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L13)

Manage the pointers inputs to control an arc rotate camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Extends

- `OrbitCameraPointersInput`

## Constructors

### Constructor

> **new ArcRotateCameraPointersInput**(): `ArcRotateCameraPointersInput`

#### Returns

`ArcRotateCameraPointersInput`

#### Inherited from

`OrbitCameraPointersInput.constructor`

## Properties

### angularSensibilityX

> **angularSensibilityX**: `number` = `1000.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L43)

Defines the pointer angular sensibility  along the X axis or how fast is
the camera rotating.

***

### angularSensibilityY

> **angularSensibilityY**: `number` = `1000.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L50)

Defines the pointer angular sensibility along the Y axis or how fast is
the camera rotating.

***

### buttons

> **buttons**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L36)

Defines the buttons associated with the input to handle camera move.

#### Overrides

`OrbitCameraPointersInput.buttons`

***

### camera

> **camera**: [`ArcRotateCamera`](ArcRotateCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L17)

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

### panningSensibility

> **panningSensibility**: `number` = `1000.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L80)

Defines the pointer panning sensibility or how fast is the camera moving.

***

### pinchDeltaPercentage

> **pinchDeltaPercentage**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L65)

pinchDeltaPercentage will be used instead of pinchPrecision if different
from 0.
It defines the percentage of current camera.radius to use as delta when
pinch zoom is used.

***

### pinchInwards

> **pinchInwards**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L85)

Revers pinch action direction.

***

### pinchPrecision

> **pinchPrecision**: `number` = `12.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L56)

Defines the pointer pinch precision or how fast is the camera zooming.

***

### pinchZoom

> **pinchZoom**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/orbitCameraPointersInput.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/orbitCameraPointersInput.ts#L16)

Defines whether zoom (2 fingers pinch) is enabled through multitouch

#### Inherited from

`OrbitCameraPointersInput.pinchZoom`

***

### useNaturalPinchZoom

> **useNaturalPinchZoom**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L74)

When useNaturalPinchZoom is true, multi touch zoom will zoom in such
that any object in the plane at the camera's target point will scale
perfectly with finger motion.
Overrides pinchDeltaPercentage and pinchPrecision.

***

### MinimumRadiusForPinch

> `static` **MinimumRadiusForPinch**: `number` = `0.001`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L22)

The minimum radius used for pinch, to avoid radius lock at 0

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L28)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L173)

Called each time a new POINTERDOWN event occurs. Ie, for each button
press.

#### Parameters

##### evt

[`IPointerEvent`](../interfaces/IPointerEvent.md)

Defines the event to track

#### Returns

`void`

#### Overrides

`OrbitCameraPointersInput.onButtonDown`

***

### onButtonUp()

> **onButtonUp**(`_evt`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L183)

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

> **onDoubleTap**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L140)

Called on pointer POINTERDOUBLETAP event.

#### Returns

`void`

#### Overrides

`OrbitCameraPointersInput.onDoubleTap`

***

### onLostFocus()

> **onLostFocus**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L190)

Called when window becomes inactive.

#### Returns

`void`

#### Overrides

`OrbitCameraPointersInput.onLostFocus`

***

### onMultiTouch()

> **onMultiTouch**(`pointA`, `pointB`, `previousPinchSquaredDistance`, `pinchSquaredDistance`, `previousMultiTouchPanPosition`, `multiTouchPanPosition`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L155)

Called on pointer POINTERMOVE event if multiple touches are active.

#### Parameters

##### pointA

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

point A

##### pointB

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

point B

##### previousPinchSquaredDistance

`number`

distance between points in previous pinch

##### pinchSquaredDistance

`number`

distance between points in current pinch

##### previousMultiTouchPanPosition

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

multi-touch position in previous step

##### multiTouchPanPosition

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

multi-touch position in current step

#### Returns

`void`

#### Overrides

`OrbitCameraPointersInput.onMultiTouch`

***

### onTouch()

> **onTouch**(`point`, `offsetX`, `offsetY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L127)

Called on pointer POINTERMOVE event if only a single touch is active.

#### Parameters

##### point

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

current touch point

##### offsetX

`number`

offset on X

##### offsetY

`number`

offset on Y

#### Returns

`void`

#### Overrides

`OrbitCameraPointersInput.onTouch`
