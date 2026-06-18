[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TargetCameraHandlers

# Type Alias: TargetCameraHandlers

> **TargetCameraHandlers** = `object`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCameraMovement.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCameraMovement.ts#L16)

Handler shape for target/free camera interactions.
Property names are the canonical interaction type strings used in inputMap entries.
All handlers are plain functions since none need multi-method lifecycle.

## Properties

### rotate

> **rotate**: (`pitch`, `yaw`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCameraMovement.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCameraMovement.ts#L28)

Rotate the camera by pitch/yaw deltas.
pitch rotates around the local X axis (look up/down), yaw around the local Y axis (look left/right).
Mirrors the legacy `cameraRotation` accumulation surface (x = pitch, y = yaw).

#### Parameters

##### pitch

`number`

##### yaw

`number`

#### Returns

`void`

***

### translate

> **translate**: (`deltaX`, `deltaY`, `deltaZ`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCameraMovement.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCameraMovement.ts#L22)

Translate the camera by world-space deltas (already oriented; the camera applies them directly).
Mirrors the legacy `cameraDirection` accumulation surface, which input classes populate after
transforming their local intent (e.g. keyboard strafe) into world space.

#### Parameters

##### deltaX

`number`

##### deltaY

`number`

##### deltaZ

`number`

#### Returns

`void`
