[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRControllerMovementRegistrationConfiguration

# Type Alias: WebXRControllerMovementRegistrationConfiguration

> **WebXRControllerMovementRegistrationConfiguration** = `object` & \{ `axisChangedHandler`: (`axes`, `movementState`, `featureContext`, `xrInput`) => `void`; \} \| \{ `buttonChangedHandler`: (`pressed`, `movementState`, `featureContext`, `xrInput`) => `void`; \}

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerMovement.pure.ts#L99)

Button of Axis Handler must be specified.

## Type Declaration

### allowedComponentTypes?

> `optional` **allowedComponentTypes?**: [`MotionControllerComponentType`](MotionControllerComponentType.md)[]

handlers are filtered to these types only

### componentSelectionPredicate?

> `optional` **componentSelectionPredicate?**: (`xrController`) => [`Nullable`](Nullable.md)\<[`WebXRControllerComponent`](../classes/WebXRControllerComponent.md)\>

Additional predicate to apply to controllers to restrict a handler being added.

#### Parameters

##### xrController

[`WebXRInputSource`](../classes/WebXRInputSource.md)

#### Returns

[`Nullable`](Nullable.md)\<[`WebXRControllerComponent`](../classes/WebXRControllerComponent.md)\>

### forceHandedness?

> `optional` **forceHandedness?**: `XRHandedness`

For registering movement to specific hand only.  Useful if your app has a "main hand" and "off hand" for determining the functionality of a controller.

### mainComponentOnly?

> `optional` **mainComponentOnly?**: `boolean`

For main component only (useful for buttons and may not trigger axis changes).
