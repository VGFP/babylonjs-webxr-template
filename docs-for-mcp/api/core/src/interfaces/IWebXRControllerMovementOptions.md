[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRControllerMovementOptions

# Interface: IWebXRControllerMovementOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L16)

The options container for the controller movement module

## Properties

### customRegistrationConfigurations?

> `optional` **customRegistrationConfigurations?**: [`WebXRControllerMovementRegistrationConfiguration`](../type-aliases/WebXRControllerMovementRegistrationConfiguration.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L20)

Override default behaviour and provide your own movement controls

***

### movementEnabled?

> `optional` **movementEnabled?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L24)

Is movement enabled

***

### movementOrientationFollowsController

> **movementOrientationFollowsController**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L58)

If movement orientation should follow controller orientation instead of viewer pose.
Make sure to set movementOrientationFollowsViewerPose to false, otherwise it will be ignored.

***

### movementOrientationFollowsViewerPose

> **movementOrientationFollowsViewerPose**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L28)

Camera direction follows view pose and movement by default will move independently of the viewer's pose.

***

### movementSpeed?

> `optional` **movementSpeed?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L32)

Movement speed factor (default is 1.0)

***

### movementThreshold?

> `optional` **movementThreshold?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L36)

Minimum threshold the controller's thumbstick/touchpad must pass before being recognized for movement (avoids jitter/unintentional movement)

***

### orientationPreferredHandedness?

> `optional` **orientationPreferredHandedness?**: `XRHandedness`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L65)

If orientation follows the controller, this is the preferred handedness to use for forward movement.
If not set (or handedness not found), the handedness will be selected by the controller triggering the movement.
Note that this only works if movementOrientationFollowsController is true.

***

### rotationEnabled?

> `optional` **rotationEnabled?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L40)

Is rotation enabled

***

### rotationSpeed?

> `optional` **rotationSpeed?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L48)

Movement speed factor (default is 1.0)

***

### rotationThreshold?

> `optional` **rotationThreshold?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L44)

Minimum threshold the controller's thumstick/touchpad must pass before being recognized for rotation (avoids jitter/unintentional rotation)

***

### xrInput

> **xrInput**: [`WebXRInput`](../classes/WebXRInput.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerMovement.ts#L52)

Babylon XR Input class for controller
