[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GeospatialCameraKeyboardInput

# Class: GeospatialCameraKeyboardInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L19)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L23)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

***

### keysDown

> **keysDown**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L35)

Defines the list of key codes associated with the down action (pan down)

***

### keysLeft

> **keysLeft**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L41)

Defines the list of key codes associated with the left action (pan left)

***

### keysRight

> **keysRight**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L47)

Defines the list of key codes associated with the right action (pan right)

***

### keysUp

> **keysUp**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L29)

Defines the list of key codes associated with the up action (pan up)

***

### keysZoomIn

> **keysZoomIn**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L53)

Defines the list of key codes associated with zoom in (+ or =)

***

### keysZoomOut

> **keysZoomOut**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L59)

Defines the list of key codes associated with zoom out (-)

## Accessors

### panSensitivity

#### Get Signature

> **get** **panSensitivity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L84)

Defines the panning sensitivity of the inputs.
(How many pixels of pointer input to apply per keypress, before pan speed factor is applied by movement class)

##### Deprecated

Use the `sensitivity` field on the keyboard pan entry in `camera.movement.input.inputMap` instead.

##### Returns

`number`

#### Set Signature

> **set** **panSensitivity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L89)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### rotationSensitivity

#### Get Signature

> **get** **rotationSensitivity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L67)

Defines the rotation sensitivity of the inputs.
(How many pixels of pointer input to apply per keypress, before rotation speed factor is applied by movement class)

##### Deprecated

Use the `sensitivity` field on the keyboard rotate entry in `camera.movement.input.inputMap` instead.

##### Returns

`number`

#### Set Signature

> **set** **rotationSensitivity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L72)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### zoomSensitivity

#### Get Signature

> **get** **zoomSensitivity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L101)

Defines the zooming sensitivity of the inputs.
(How many pixels of pointer input to apply per keypress, before zoom speed factor is applied by movement class)

##### Deprecated

Use the `sensitivity` field on the keyboard zoom entry in `camera.movement.input.inputMap` instead.

##### Returns

`number`

#### Set Signature

> **set** **zoomSensitivity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L106)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L136)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L231)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`checkInputs`](../interfaces/ICameraInput.md#checkinputs)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L216)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:294](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L294)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:302](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L302)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
