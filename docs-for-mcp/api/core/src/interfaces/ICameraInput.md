[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICameraInput

# Interface: ICameraInput\<Tcamera\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L17)

This is the contract to implement in order to create a new input class.
Inputs are dealing with listening to user actions and moving the camera accordingly.

## Type Parameters

### Tcamera

`Tcamera` *extends* [`Camera`](../classes/Camera.md)

## Properties

### camera

> **camera**: [`Nullable`](../type-aliases/Nullable.md)\<`Tcamera`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L21)

Defines the camera the input is attached to.

***

### checkInputs?

> `optional` **checkInputs?**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L45)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L36)

Attach the input controls to a specific dom element to get the input from.

#### Parameters

##### noPreventDefault?

`boolean`

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

#### Returns

`void`

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L40)

Detach the current controls from the specified dom element.

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L26)

Gets the class name of the current input.

#### Returns

`string`

the class name

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L31)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name
