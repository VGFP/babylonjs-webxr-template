[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FollowCameraInputsManager

# Class: FollowCameraInputsManager

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/followCameraInputsManager.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/followCameraInputsManager.ts#L13)

Default Inputs manager for the FollowCamera.
It groups all the default supported inputs for ease of use.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Extends

- [`CameraInputsManager`](CameraInputsManager.md)\<[`FollowCamera`](FollowCamera.md)\>

## Constructors

### Constructor

> **new FollowCameraInputsManager**(`camera`): `FollowCameraInputsManager`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/followCameraInputsManager.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/followCameraInputsManager.ts#L18)

Instantiates a new FollowCameraInputsManager.

#### Parameters

##### camera

[`FollowCamera`](FollowCamera.md)

Defines the camera the inputs belong to

#### Returns

`FollowCameraInputsManager`

#### Overrides

[`CameraInputsManager`](CameraInputsManager.md).[`constructor`](CameraInputsManager.md#constructor)

## Properties

### attached

> **attached**: [`CameraInputsMap`](../interfaces/CameraInputsMap.md)\<[`FollowCamera`](FollowCamera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L72)

Defines the list of inputs attached to the camera.

#### Inherited from

[`CameraInputsManager`](CameraInputsManager.md).[`attached`](CameraInputsManager.md#attached)

***

### attachedToElement

> **attachedToElement**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L78)

Defines the dom element the camera is collecting inputs from.
This is null if the controls have not been attached.

#### Inherited from

[`CameraInputsManager`](CameraInputsManager.md).[`attachedToElement`](CameraInputsManager.md#attachedtoelement)

***

### camera

> **camera**: [`FollowCamera`](FollowCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L88)

Defined the camera the input manager belongs to.

#### Inherited from

[`CameraInputsManager`](CameraInputsManager.md).[`camera`](CameraInputsManager.md#camera)

***

### checkInputs

> **checkInputs**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L94)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

#### Inherited from

[`CameraInputsManager`](CameraInputsManager.md).[`checkInputs`](CameraInputsManager.md#checkinputs)

***

### noPreventDefault

> **noPreventDefault**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L83)

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

#### Inherited from

[`CameraInputsManager`](CameraInputsManager.md).[`noPreventDefault`](CameraInputsManager.md#nopreventdefault)

## Methods

### add()

> **add**(`input`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L111)

Add an input method to a camera

#### Parameters

##### input

[`ICameraInput`](../interfaces/ICameraInput.md)\<[`FollowCamera`](FollowCamera.md)\>

Camera input method

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

#### Inherited from

[`CameraInputsManager`](CameraInputsManager.md).[`add`](CameraInputsManager.md#add)

***

### addKeyboard()

> **addKeyboard**(): `FollowCameraInputsManager`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/followCameraInputsManager.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/followCameraInputsManager.ts#L26)

Add keyboard input support to the input manager.

#### Returns

`FollowCameraInputsManager`

the current input manager

***

### addMouseWheel()

> **addMouseWheel**(): `FollowCameraInputsManager`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/followCameraInputsManager.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/followCameraInputsManager.ts#L35)

Add mouse wheel input support to the input manager.

#### Returns

`FollowCameraInputsManager`

the current input manager

***

### addPointers()

> **addPointers**(): `FollowCameraInputsManager`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/followCameraInputsManager.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/followCameraInputsManager.ts#L44)

Add pointers input support to the input manager.

#### Returns

`FollowCameraInputsManager`

the current input manager

***

### addVRDeviceOrientation()

> **addVRDeviceOrientation**(): `FollowCameraInputsManager`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/followCameraInputsManager.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/followCameraInputsManager.ts#L53)

Add orientation input support to the input manager.

#### Returns

`FollowCameraInputsManager`

the current input manager

***

### attachElement()

> **attachElement**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L191)

Attach the current manager inputs controls to a specific dom element to listen the events from.

#### Parameters

##### noPreventDefault?

`boolean` = `false`

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

#### Returns

`void`

#### Inherited from

[`CameraInputsManager`](CameraInputsManager.md).[`attachElement`](CameraInputsManager.md#attachelement)

***

### attachInput()

> **attachInput**(`input`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L181)

Attach the input controls to the currently attached dom element to listen the events from.

#### Parameters

##### input

[`ICameraInput`](../interfaces/ICameraInput.md)\<[`FollowCamera`](FollowCamera.md)\>

Defines the input to attach

#### Returns

`void`

#### Inherited from

[`CameraInputsManager`](CameraInputsManager.md).[`attachInput`](CameraInputsManager.md#attachinput)

***

### clear()

> **clear**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L238)

Remove all attached input methods from a camera

#### Returns

`void`

#### Inherited from

[`CameraInputsManager`](CameraInputsManager.md).[`clear`](CameraInputsManager.md#clear)

***

### detachElement()

> **detachElement**(`disconnect?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L209)

Detach the current manager inputs controls from a specific dom element.

#### Parameters

##### disconnect?

`boolean` = `false`

Defines whether the input should be removed from the current list of attached inputs

#### Returns

`void`

#### Inherited from

[`CameraInputsManager`](CameraInputsManager.md).[`detachElement`](CameraInputsManager.md#detachelement)

***

### parse()

> **parse**(`parsedCamera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L269)

Parses an input manager serialized JSON to restore the previous list of inputs
and states associated to a camera.

#### Parameters

##### parsedCamera

`any`

Defines the JSON to parse

#### Returns

`void`

#### Inherited from

[`CameraInputsManager`](CameraInputsManager.md).[`parse`](CameraInputsManager.md#parse)

***

### rebuildInputCheck()

> **rebuildInputCheck**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:224](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L224)

Rebuild the dynamic inputCheck function from the current list of
defined inputs in the manager.

#### Returns

`void`

#### Inherited from

[`CameraInputsManager`](CameraInputsManager.md).[`rebuildInputCheck`](CameraInputsManager.md#rebuildinputcheck)

***

### remove()

> **remove**(`inputToRemove`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L138)

Remove a specific input method from a camera
example: camera.inputs.remove(camera.inputs.attached.mouse);

#### Parameters

##### inputToRemove

[`ICameraInput`](../interfaces/ICameraInput.md)\<[`FollowCamera`](FollowCamera.md)\>

camera input method

#### Returns

`void`

#### Inherited from

[`CameraInputsManager`](CameraInputsManager.md).[`remove`](CameraInputsManager.md#remove)

***

### removeByType()

> **removeByType**(`inputType`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L157)

Remove a specific input type from a camera
example: camera.inputs.remove("ArcRotateCameraGamepadInput");

#### Parameters

##### inputType

`string`

the type of the input to remove

#### Returns

`void`

#### Inherited from

[`CameraInputsManager`](CameraInputsManager.md).[`removeByType`](CameraInputsManager.md#removebytype)

***

### serialize()

> **serialize**(`serializedCamera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:253](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L253)

Serialize the current input manager attached to a camera.
This ensures than once parsed,
the input associated to the camera will be identical to the current ones

#### Parameters

##### serializedCamera

`any`

Defines the camera serialization JSON the input serialization should write to

#### Returns

`void`

#### Inherited from

[`CameraInputsManager`](CameraInputsManager.md).[`serialize`](CameraInputsManager.md#serialize)
