[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRControllerMovementOptions

# Interface: IWebXRControllerMovementOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts#L19)

The options container for the controller movement module

## Properties

### customRegistrationConfigurations?

> `optional` **customRegistrationConfigurations?**: [`WebXRControllerMovementRegistrationConfiguration`](../type-aliases/WebXRControllerMovementRegistrationConfiguration.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts#L23)

Override default behaviour and provide your own movement controls

***

### movementEnabled?

> `optional` **movementEnabled?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts#L27)

Is movement enabled

***

### movementOrientationFollowsController

> **movementOrientationFollowsController**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts#L61)

If movement orientation should follow controller orientation instead of viewer pose.
Make sure to set movementOrientationFollowsViewerPose to false, otherwise it will be ignored.

***

### movementOrientationFollowsViewerPose

> **movementOrientationFollowsViewerPose**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts#L31)

Camera direction follows view pose and movement by default will move independently of the viewer's pose.

***

### movementSpeed?

> `optional` **movementSpeed?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts#L35)

Movement speed factor (default is 1.0)

***

### movementThreshold?

> `optional` **movementThreshold?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts#L39)

Minimum threshold the controller's thumbstick/touchpad must pass before being recognized for movement (avoids jitter/unintentional movement)

***

### orientationPreferredHandedness?

> `optional` **orientationPreferredHandedness?**: `XRHandedness`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts#L68)

If orientation follows the controller, this is the preferred handedness to use for forward movement.
If not set (or handedness not found), the handedness will be selected by the controller triggering the movement.
Note that this only works if movementOrientationFollowsController is true.

***

### rotationEnabled?

> `optional` **rotationEnabled?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts#L43)

Is rotation enabled

***

### rotationSpeed?

> `optional` **rotationSpeed?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts#L51)

Movement speed factor (default is 1.0)

***

### rotationThreshold?

> `optional` **rotationThreshold?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts#L47)

Minimum threshold the controller's thumstick/touchpad must pass before being recognized for rotation (avoids jitter/unintentional rotation)

***

### xrInput

> **xrInput**: [`WebXRInput`](../classes/WebXRInput.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts#L55)

Babylon XR Input class for controller
