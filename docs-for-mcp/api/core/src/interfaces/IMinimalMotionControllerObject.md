[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMinimalMotionControllerObject

# Interface: IMinimalMotionControllerObject

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L195)

The elements needed for change-detection of the gamepad objects in motion controllers

## Properties

### axes

> **axes**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L199)

Available axes of this controller

***

### buttons

> **buttons**: `object`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:203](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L203)

An array of available buttons

#### pressed

> **pressed**: `boolean`

If the button/trigger is currently pressed

#### touched

> **touched**: `boolean`

If the button/trigger is currently touched

#### value

> **value**: `number`

Value of the button/trigger

***

### hapticActuators?

> `optional` **hapticActuators?**: `object`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L221)

EXPERIMENTAL haptic support.

#### pulse

> **pulse**: (`value`, `duration`) => `Promise`\<`boolean`\>

##### Parameters

###### value

`number`

###### duration

`number`

##### Returns

`Promise`\<`boolean`\>
