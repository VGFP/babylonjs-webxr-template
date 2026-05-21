[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FreeCameraMouseInput

# Class: FreeCameraMouseInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts#L13)

Manage the mouse inputs to control the movement of a free camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`FreeCamera`](FreeCamera.md)\>

## Constructors

### Constructor

> **new FreeCameraMouseInput**(`touchEnabled?`): `FreeCameraMouseInput`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts#L55)

Manage the mouse inputs to control the movement of a free camera.

#### Parameters

##### touchEnabled?

`boolean` = `true`

Defines if touch is enabled or not

#### Returns

`FreeCameraMouseInput`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Properties

### angularSensibility

> **angularSensibility**: `number` = `2000.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts#L29)

Defines the pointer angular sensibility  along the X and Y axis or how fast is the camera rotating.

***

### buttons

> **buttons**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts#L23)

Defines the buttons associated with the input to handle camera move.

***

### camera

> **camera**: [`FreeCamera`](FreeCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts#L17)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

***

### onPointerMovedObservable

> **onPointerMovedObservable**: [`Observable`](Observable.md)\<\{ `offsetX`: `number`; `offsetY`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts#L39)

Observable for when a pointer move event occurs containing the move offset

***

### touchEnabled

> **touchEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts#L59)

[true] Define if touch is enabled in the mouse input

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts#L66)

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

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts:203](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts#L203)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts#L232)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts:240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts#L240)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)

***

### onContextMenu()

> **onContextMenu**(`evt`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts:196](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/freeCameraMouseInput.ts#L196)

Called on JS contextmenu event.
Override this method to provide functionality.

#### Parameters

##### evt

`PointerEvent`

the context menu event

#### Returns

`void`
