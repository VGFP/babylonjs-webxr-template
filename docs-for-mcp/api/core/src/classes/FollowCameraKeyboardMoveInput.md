[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FollowCameraKeyboardMoveInput

# Class: FollowCameraKeyboardMoveInput

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L15)

Manage the keyboard inputs to control the movement of a follow camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`FollowCamera`](FollowCamera.md)\>

## Constructors

### Constructor

> **new FollowCameraKeyboardMoveInput**(): `FollowCameraKeyboardMoveInput`

#### Returns

`FollowCameraKeyboardMoveInput`

## Properties

### camera

> **camera**: [`FollowCamera`](FollowCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L19)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

***

### heightSensibility

> **heightSensibility**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L115)

Defines the rate of change of heightOffset.

***

### keysHeightOffsetDecr

> **keysHeightOffsetDecr**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L31)

Defines the list of key codes associated with the down action (decrease heightOffset)

***

### keysHeightOffsetIncr

> **keysHeightOffsetIncr**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L25)

Defines the list of key codes associated with the up action (increase heightOffset)

***

### keysHeightOffsetModifierAlt

> **keysHeightOffsetModifierAlt**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L37)

Defines whether the Alt modifier key is required to move up/down (alter heightOffset)

***

### keysHeightOffsetModifierCtrl

> **keysHeightOffsetModifierCtrl**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L43)

Defines whether the Ctrl modifier key is required to move up/down (alter heightOffset)

***

### keysHeightOffsetModifierShift

> **keysHeightOffsetModifierShift**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L49)

Defines whether the Shift modifier key is required to move up/down (alter heightOffset)

***

### keysRadiusDecr

> **keysRadiusDecr**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L91)

Defines the list of key codes associated with the zoom-out action (increase radius)

***

### keysRadiusIncr

> **keysRadiusIncr**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L85)

Defines the list of key codes associated with the zoom-in action (decrease radius)

***

### keysRadiusModifierAlt

> **keysRadiusModifierAlt**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L97)

Defines whether the Alt modifier key is required to zoom in/out (alter radius value)

***

### keysRadiusModifierCtrl

> **keysRadiusModifierCtrl**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L103)

Defines whether the Ctrl modifier key is required to zoom in/out (alter radius value)

***

### keysRadiusModifierShift

> **keysRadiusModifierShift**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L109)

Defines whether the Shift modifier key is required to zoom in/out (alter radius value)

***

### keysRotationOffsetDecr

> **keysRotationOffsetDecr**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L61)

Defines the list of key codes associated with the right action (decrease rotationOffset)

***

### keysRotationOffsetIncr

> **keysRotationOffsetIncr**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L55)

Defines the list of key codes associated with the left action (increase rotationOffset)

***

### keysRotationOffsetModifierAlt

> **keysRotationOffsetModifierAlt**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L67)

Defines whether the Alt modifier key is required to move left/right (alter rotationOffset)

***

### keysRotationOffsetModifierCtrl

> **keysRotationOffsetModifierCtrl**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L73)

Defines whether the Ctrl modifier key is required to move left/right (alter rotationOffset)

***

### keysRotationOffsetModifierShift

> **keysRotationOffsetModifierShift**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L79)

Defines whether the Shift modifier key is required to move left/right (alter rotationOffset)

***

### radiusSensibility

> **radiusSensibility**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L127)

Defines the rate of change of radius.

***

### rotationSensibility

> **rotationSensibility**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L121)

Defines the rate of change of rotationOffset.

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L142)

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

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L231)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`checkInputs`](../interfaces/ICameraInput.md#checkinputs)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:212](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L212)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:257](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L257)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts:265](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/Inputs/followCameraKeyboardMoveInput.ts#L265)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
