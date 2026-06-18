[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FollowCameraPointersInput

# Class: FollowCameraPointersInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L13)

Manage the pointers inputs to control an follow camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Extends

- [`BaseCameraPointersInput`](BaseCameraPointersInput.md)

## Constructors

### Constructor

> **new FollowCameraPointersInput**(): `FollowCameraPointersInput`

#### Returns

`FollowCameraPointersInput`

#### Inherited from

[`BaseCameraPointersInput`](BaseCameraPointersInput.md).[`constructor`](BaseCameraPointersInput.md#constructor)

## Properties

### angularSensibilityX

> **angularSensibilityX**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L33)

Defines the pointer angular sensibility along the X axis or how fast is
the camera rotating.
A negative number will reverse the axis direction.

***

### angularSensibilityY

> **angularSensibilityY**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L41)

Defines the pointer angular sensibility along the Y axis or how fast is
the camera rotating.
A negative number will reverse the axis direction.

***

### axisPinchControlHeight

> **axisPinchControlHeight**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L105)

Pinch controls height. (Pinch modifies camera.heightOffset value.)

***

### axisPinchControlRadius

> **axisPinchControlRadius**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L99)

Pinch controls zoom. (Pinch modifies camera.radius value.)

***

### axisPinchControlRotation

> **axisPinchControlRotation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L111)

Pinch controls angle. (Pinch modifies camera.rotationOffset value.)

***

### axisXControlHeight

> **axisXControlHeight**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L69)

Pointer X axis controls height. (X axis modifies camera.heightOffset value.)

***

### axisXControlRadius

> **axisXControlRadius**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L63)

Pointer X axis controls zoom. (X axis modifies camera.radius value.)

***

### axisXControlRotation

> **axisXControlRotation**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L75)

Pointer X axis controls angle. (X axis modifies camera.rotationOffset value.)

***

### axisYControlHeight

> **axisYControlHeight**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L87)

Pointer Y axis controls height. (Y axis modifies camera.heightOffset value.)

***

### axisYControlRadius

> **axisYControlRadius**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L81)

Pointer Y axis controls zoom. (Y axis modifies camera.radius value.)

***

### axisYControlRotation

> **axisYControlRotation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L93)

Pointer Y axis controls angle. (Y axis modifies camera.rotationOffset value.)

***

### buttons

> **buttons**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L46)

Defines the buttons associated with the input to handle camera move.

#### Inherited from

[`BaseCameraPointersInput`](BaseCameraPointersInput.md).[`buttons`](BaseCameraPointersInput.md#buttons)

***

### camera

> **camera**: [`FollowCamera`](FollowCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L17)

Defines the camera the input is attached to.

#### Overrides

[`BaseCameraPointersInput`](BaseCameraPointersInput.md).[`camera`](BaseCameraPointersInput.md#camera)

***

### pinchDeltaPercentage

> **pinchDeltaPercentage**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L57)

pinchDeltaPercentage will be used instead of pinchPrecision if different
from 0.
It defines the percentage of current camera.radius to use as delta when
pinch zoom is used.

***

### pinchPrecision

> **pinchPrecision**: `number` = `10000.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L48)

Defines the pointer pinch precision or how fast is the camera zooming.
A negative number will reverse the axis direction.

***

### warningEnable

> **warningEnable**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L116)

Log error messages if basic misconfiguration has occurred.

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

[`BaseCameraPointersInput`](BaseCameraPointersInput.md).[`attachControl`](BaseCameraPointersInput.md#attachcontrol)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:257](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L257)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Inherited from

[`BaseCameraPointersInput`](BaseCameraPointersInput.md).[`detachControl`](BaseCameraPointersInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L23)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Overrides

[`BaseCameraPointersInput`](BaseCameraPointersInput.md).[`getClassName`](BaseCameraPointersInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:299](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L299)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Inherited from

[`BaseCameraPointersInput`](BaseCameraPointersInput.md).[`getSimpleName`](BaseCameraPointersInput.md#getsimplename)

***

### onButtonDown()

> **onButtonDown**(`_evt`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:356](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L356)

Called each time a new POINTERDOWN event occurs. Ie, for each button
press.
Override this method to provide functionality.

#### Parameters

##### \_evt

[`IPointerEvent`](../interfaces/IPointerEvent.md)

Defines the event to track

#### Returns

`void`

#### Inherited from

[`BaseCameraPointersInput`](BaseCameraPointersInput.md).[`onButtonDown`](BaseCameraPointersInput.md#onbuttondown)

***

### onButtonUp()

> **onButtonUp**(`_evt`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:364](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L364)

Called each time a new POINTERUP event occurs. Ie, for each button
release.
Override this method to provide functionality.

#### Parameters

##### \_evt

[`IPointerEvent`](../interfaces/IPointerEvent.md)

Defines the event to track

#### Returns

`void`

#### Inherited from

[`BaseCameraPointersInput`](BaseCameraPointersInput.md).[`onButtonUp`](BaseCameraPointersInput.md#onbuttonup)

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

[`BaseCameraPointersInput`](BaseCameraPointersInput.md).[`onContextMenu`](BaseCameraPointersInput.md#oncontextmenu)

***

### onDoubleTap()

> **onDoubleTap**(`type`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:309](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L309)

Called on pointer POINTERDOUBLETAP event.
Override this method to provide functionality on POINTERDOUBLETAP event.

#### Parameters

##### type

`string`

type of event

#### Returns

`void`

#### Inherited from

[`BaseCameraPointersInput`](BaseCameraPointersInput.md).[`onDoubleTap`](BaseCameraPointersInput.md#ondoubletap)

***

### onLostFocus()

> **onLostFocus**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:370](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L370)

Called when window becomes inactive.
Override this method to provide functionality.

#### Returns

`void`

#### Inherited from

[`BaseCameraPointersInput`](BaseCameraPointersInput.md).[`onLostFocus`](BaseCameraPointersInput.md#onlostfocus)

***

### onMultiTouch()

> **onMultiTouch**(`pointA`, `pointB`, `previousPinchSquaredDistance`, `pinchSquaredDistance`, `previousMultiTouchPanPosition`, `multiTouchPanPosition`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L140)

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

[`BaseCameraPointersInput`](BaseCameraPointersInput.md).[`onMultiTouch`](BaseCameraPointersInput.md#onmultitouch)

***

### onTouch()

> **onTouch**(`pointA`, `offsetX`, `offsetY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraPointersInput.ts#L118)

Called on pointer POINTERMOVE event if only a single touch is active.
Override this method to provide functionality.

#### Parameters

##### pointA

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

##### offsetX

`number`

The offsetX of the pointer when the event occurred

##### offsetY

`number`

The offsetY of the pointer when the event occurred

#### Returns

`void`

#### Overrides

[`BaseCameraPointersInput`](BaseCameraPointersInput.md).[`onTouch`](BaseCameraPointersInput.md#ontouch)
