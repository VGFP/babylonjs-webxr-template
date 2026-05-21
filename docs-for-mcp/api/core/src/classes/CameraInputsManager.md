[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CameraInputsManager

# Class: CameraInputsManager\<Tcamera\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/cameraInputsManager.ts#L68)

This represents the input manager used within a camera.
It helps dealing with all the different kind of input attached to a camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Extended by

- [`FreeCameraInputsManager`](FreeCameraInputsManager.md)
- [`ArcRotateCameraInputsManager`](ArcRotateCameraInputsManager.md)
- [`FlyCameraInputsManager`](FlyCameraInputsManager.md)
- [`FollowCameraInputsManager`](FollowCameraInputsManager.md)

## Type Parameters

### Tcamera

`Tcamera` *extends* [`Camera`](Camera.md)

## Constructors

### Constructor

> **new CameraInputsManager**\<`Tcamera`\>(`camera`): `CameraInputsManager`\<`Tcamera`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/cameraInputsManager.ts#L100)

Instantiate a new Camera Input Manager.

#### Parameters

##### camera

`Tcamera`

Defines the camera the input manager belongs to

#### Returns

`CameraInputsManager`\<`Tcamera`\>

## Properties

### attached

> **attached**: [`CameraInputsMap`](../interfaces/CameraInputsMap.md)\<`Tcamera`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/cameraInputsManager.ts#L72)

Defines the list of inputs attached to the camera.

***

### attachedToElement

> **attachedToElement**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/cameraInputsManager.ts#L78)

Defines the dom element the camera is collecting inputs from.
This is null if the controls have not been attached.

***

### camera

> **camera**: `Tcamera`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/cameraInputsManager.ts#L88)

Defined the camera the input manager belongs to.

***

### checkInputs

> **checkInputs**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/cameraInputsManager.ts#L94)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

***

### noPreventDefault

> **noPreventDefault**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/cameraInputsManager.ts#L83)

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

## Methods

### add()

> **add**(`input`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/cameraInputsManager.ts#L111)

Add an input method to a camera

#### Parameters

##### input

[`ICameraInput`](../interfaces/ICameraInput.md)\<`Tcamera`\>

Camera input method

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

***

### attachElement()

> **attachElement**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/cameraInputsManager.ts#L191)

Attach the current manager inputs controls to a specific dom element to listen the events from.

#### Parameters

##### noPreventDefault?

`boolean` = `false`

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

#### Returns

`void`

***

### attachInput()

> **attachInput**(`input`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/cameraInputsManager.ts#L181)

Attach the input controls to the currently attached dom element to listen the events from.

#### Parameters

##### input

[`ICameraInput`](../interfaces/ICameraInput.md)\<`Tcamera`\>

Defines the input to attach

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:238](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/cameraInputsManager.ts#L238)

Remove all attached input methods from a camera

#### Returns

`void`

***

### detachElement()

> **detachElement**(`disconnect?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/cameraInputsManager.ts#L209)

Detach the current manager inputs controls from a specific dom element.

#### Parameters

##### disconnect?

`boolean` = `false`

Defines whether the input should be removed from the current list of attached inputs

#### Returns

`void`

***

### parse()

> **parse**(`parsedCamera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/cameraInputsManager.ts#L269)

Parses an input manager serialized JSON to restore the previous list of inputs
and states associated to a camera.

#### Parameters

##### parsedCamera

`any`

Defines the JSON to parse

#### Returns

`void`

***

### rebuildInputCheck()

> **rebuildInputCheck**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/cameraInputsManager.ts#L224)

Rebuild the dynamic inputCheck function from the current list of
defined inputs in the manager.

#### Returns

`void`

***

### remove()

> **remove**(`inputToRemove`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/cameraInputsManager.ts#L138)

Remove a specific input method from a camera
example: camera.inputs.remove(camera.inputs.attached.mouse);

#### Parameters

##### inputToRemove

[`ICameraInput`](../interfaces/ICameraInput.md)\<`Tcamera`\>

camera input method

#### Returns

`void`

***

### removeByType()

> **removeByType**(`inputType`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/cameraInputsManager.ts#L157)

Remove a specific input type from a camera
example: camera.inputs.remove("ArcRotateCameraGamepadInput");

#### Parameters

##### inputType

`string`

the type of the input to remove

#### Returns

`void`

***

### serialize()

> **serialize**(`serializedCamera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:253](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/cameraInputsManager.ts#L253)

Serialize the current input manager attached to a camera.
This ensures than once parsed,
the input associated to the camera will be identical to the current ones

#### Parameters

##### serializedCamera

`any`

Defines the camera serialization JSON the input serialization should write to

#### Returns

`void`
