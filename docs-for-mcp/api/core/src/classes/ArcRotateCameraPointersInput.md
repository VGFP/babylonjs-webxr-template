[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ArcRotateCameraPointersInput

# Class: ArcRotateCameraPointersInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L15)

Manage the pointers inputs to control an arc rotate camera.
Uses the inputMap on the movement class to determine which button maps to which interaction.

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L45)

Defines the pointer angular sensibility  along the X axis or how fast is
the camera rotating.

***

### angularSensibilityY

> **angularSensibilityY**: `number` = `1000.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L52)

Defines the pointer angular sensibility along the Y axis or how fast is
the camera rotating.

***

### buttons

> **buttons**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L38)

Defines the buttons associated with the input to handle camera move.

#### Overrides

`OrbitCameraPointersInput.buttons`

***

### camera

> **camera**: [`ArcRotateCamera`](ArcRotateCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L19)

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

### panningSensibility

> **panningSensibility**: `number` = `1000.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L82)

Defines the pointer panning sensibility or how fast is the camera moving.

***

### pinchDeltaPercentage

> **pinchDeltaPercentage**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L67)

pinchDeltaPercentage will be used instead of pinchPrecision if different
from 0.
It defines the percentage of current camera.radius to use as delta when
pinch zoom is used.

***

### pinchInwards

> **pinchInwards**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L87)

Revers pinch action direction.

***

### pinchPrecision

> **pinchPrecision**: `number` = `12.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L58)

Defines the pointer pinch precision or how fast is the camera zooming.

***

### pinchZoom

> **pinchZoom**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/orbitCameraPointersInput.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/orbitCameraPointersInput.ts#L16)

Defines whether zoom (2 fingers pinch) is enabled through multitouch

#### Inherited from

`OrbitCameraPointersInput.pinchZoom`

***

### useNaturalPinchZoom

> **useNaturalPinchZoom**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L76)

When useNaturalPinchZoom is true, multi touch zoom will zoom in such
that any object in the plane at the camera's target point will scale
perfectly with finger motion.
Overrides pinchDeltaPercentage and pinchPrecision.

***

### MinimumRadiusForPinch

> `static` **MinimumRadiusForPinch**: `number` = `0.001`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L24)

The minimum radius used for pinch, to avoid radius lock at 0

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L30)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:219](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L219)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L233)

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

> **onDoubleTap**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:186](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L186)

Called on pointer POINTERDOUBLETAP event.

#### Returns

`void`

#### Overrides

`OrbitCameraPointersInput.onDoubleTap`

***

### onLostFocus()

> **onLostFocus**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:241](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L241)

Called when window becomes inactive.

#### Returns

`void`

#### Overrides

`OrbitCameraPointersInput.onLostFocus`

***

### onMultiTouch()

> **onMultiTouch**(`pointA`, `pointB`, `previousPinchSquaredDistance`, `pinchSquaredDistance`, `previousMultiTouchPanPosition`, `multiTouchPanPosition`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L201)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/arcRotateCameraPointersInput.ts#L156)

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
