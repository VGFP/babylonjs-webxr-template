[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GeospatialCameraKeyboardInput

# Class: GeospatialCameraKeyboardInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L18)

Manage the keyboard inputs to control the movement of a geospatial camera.
Arrow keys + Modifier key (ctrl/alt/option on mac): rotate
Arrow keys alone: pan
+ / - keys: zoom in/out

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`GeospatialCamera`](GeospatialCamera.md)\>

## Constructors

### Constructor

> **new GeospatialCameraKeyboardInput**(): `GeospatialCameraKeyboardInput`

#### Returns

`GeospatialCameraKeyboardInput`

## Properties

### camera

> **camera**: [`GeospatialCamera`](GeospatialCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L22)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

***

### keysDown

> **keysDown**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L34)

Defines the list of key codes associated with the down action (pan down)

***

### keysLeft

> **keysLeft**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L40)

Defines the list of key codes associated with the left action (pan left)

***

### keysRight

> **keysRight**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L46)

Defines the list of key codes associated with the right action (pan right)

***

### keysUp

> **keysUp**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L28)

Defines the list of key codes associated with the up action (pan up)

***

### keysZoomIn

> **keysZoomIn**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L52)

Defines the list of key codes associated with zoom in (+ or =)

***

### keysZoomOut

> **keysZoomOut**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L58)

Defines the list of key codes associated with zoom out (-)

***

### panSensitivity

> **panSensitivity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L72)

Defines the panning sensitivity of the inputs.
(How many pixels of pointer input to apply per keypress, before pan speed factor is applied by movement class)

***

### rotationSensitivity

> **rotationSensitivity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L65)

Defines the rotation sensitivity of the inputs.
(How many pixels of pointer input to apply per keypress, before rotation speed factor is applied by movement class)

***

### zoomSensitivity

> **zoomSensitivity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L79)

Defines the zooming sensitivity of the inputs.
(How many pixels of pointer input to apply per keypress, before zoom speed factor is applied by movement class)

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L92)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L177)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`checkInputs`](../interfaces/ICameraInput.md#checkinputs)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L162)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:228](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L228)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:236](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L236)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
