[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CameraMovement

# Class: CameraMovement

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L20)

Base class for camera movement systems that convert raw input into framerate-independent camera deltas.

This class handles the physics layer: velocity tracking, inertial decay, speed multipliers,
and per-frame delta computation. Input mapping (which physical inputs trigger which interactions)
is handled by an `InputMapper` instance composed on each movement subclass as `input`.

**Speed and inertia** — Properties on this class that control how accumulated pixel deltas
are converted to framerate-independent camera deltas via `computeCurrentFrameDeltas()`:
- `panSpeed`, `rotationXSpeed`, `rotationYSpeed`, `zoomSpeed` — units of movement per pixel
- `panInertia`, `rotationInertia`, `zoomInertia` — velocity decay factor when input stops (0 = instant stop, 0.9 = smooth glide)

## Extended by

- [`TargetCameraMovement`](TargetCameraMovement.md)
- [`GeospatialCameraMovement`](GeospatialCameraMovement.md)
- [`ArcRotateCameraMovement`](ArcRotateCameraMovement.md)

## Constructors

### Constructor

> **new CameraMovement**(`scene`, `_cameraPosition`, `_behavior?`): `CameraMovement`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L182)

#### Parameters

##### scene

[`Scene`](Scene.md)

##### \_cameraPosition

[`Vector3`](Vector3.md)

##### \_behavior?

[`InterpolatingBehavior`](InterpolatingBehavior.md)\<[`Camera`](Camera.md)\>

#### Returns

`CameraMovement`

## Properties

### activeInput

> **activeInput**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L27)

Should be set by input classes to indicate whether there is active input this frame.
This helps differentiate between 0 pixel delta due to no input vs user actively holding still.

***

### panAccumulatedPixels

> **panAccumulatedPixels**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L121)

Accumulated pixel delta (by input classes) for panning this frame
Read by computeCurrentFrameDeltas() function and converted into panDeltaCurrentFrame (taking speed into account)
Reset to zero after each frame

***

### panDeltaCurrentFrame

> **panDeltaCurrentFrame**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L141)

Pan delta to apply to camera this frame, computed by computeCurrentFrameDeltas() from panPixelDelta (taking speed into account)

***

### panInertia

> **panInertia**: `number` = `0.9`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L95)

Inertia applied to the panning velocity when there is no user input.
Higher inertia === slower decay, velocity retains more of its value each frame.

Note: ArcRotateCamera overrides this from `camera.panningInertia` (which defaults to `camera.inertia`).

***

### panSpeed

> **panSpeed**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L46)

Desired coordinate unit movement per input pixel when panning

***

### referenceFrameRate

> **referenceFrameRate**: `number` = `DefaultReferenceFrameRate`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L166)

Framerate (Hz) at which inertia values are calibrated. Default 60 matches legacy camera feel
at any actual refresh rate. Override to 120, 144, etc. only if your app was tuned on that
specific refresh rate under the legacy (framerate-dependent) camera math and you want to
preserve that exact decay characteristic. Most applications should leave this at 60.

***

### rotationAccumulatedPixels

> **rotationAccumulatedPixels**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L127)

Accumulated pixel delta (by input classes) for rotation this frame
Read by computeCurrentFrameDeltas() function and converted into rotationDeltaCurrentFrame (taking speed into account)
Reset to zero after each frame

***

### rotationDeltaCurrentFrame

> **rotationDeltaCurrentFrame**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L145)

Rotation delta to apply to camera this frame, computed by computeCurrentFrameDeltas() from rotationPixelDelta (taking speed into account)

***

### rotationInertia

> **rotationInertia**: `number` = `0.9`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L103)

Inertia applied to the rotation velocity when there is no user input.
Higher inertia === slower decay, velocity retains more of its value each frame.

Note: ArcRotateCamera syncs this from `camera.inertia` via an accessor on the camera class.
To tune independently, override inside `scene.onBeforeRenderObservable` after `camera.inertia` is read.

***

### rotationXSpeed

> **rotationXSpeed**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L50)

Desired radians movement per input pixel when rotating along x axis

***

### rotationYSpeed

> **rotationYSpeed**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L54)

Desired radians movement per input pixel when rotating along y axis

***

### speed

> **speed**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L38)

Global speed multiplier applied to all movement (pan, rotation, zoom).
Acts as a master scale factor on top of the individual speed properties.

***

### zoomAccumulatedPixels

> **zoomAccumulatedPixels**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L115)

Accumulated pixel delta (by input classes) for zoom this frame
Read by computeCurrentFrameDeltas() function and converted into zoomDeltaCurrentFrame (taking speed into account)
Reset to zero after each frame

***

### zoomDeltaCurrentFrame

> **zoomDeltaCurrentFrame**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L137)

Zoom delta to apply to camera this frame, computed by computeCurrentFrameDeltas() from zoomPixelDelta (taking speed into account)

***

### zoomInertia

> **zoomInertia**: `number` = `0.9`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L88)

Inertia applied to the zoom velocity when there is no user input.
Higher inertia === slower decay, velocity retains more of its value each frame.

Note: ArcRotateCamera syncs this from `camera.inertia` via an accessor on the camera class.
To tune independently, override inside `scene.onBeforeRenderObservable` after `camera.inertia` is read.

***

### zoomSpeed

> **zoomSpeed**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L42)

Desired coordinate unit movement per input pixel when zooming

## Accessors

### isInterpolating

#### Get Signature

> **get** **isInterpolating**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:298](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L298)

Returns true when the camera is playing an interpolating (fly-to) animation.
Useful for suppressing user-input movement while a programmatic animation is active.

##### Returns

`boolean`

## Methods

### computeCurrentFrameDeltas()

> **computeCurrentFrameDeltas**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L195)

When called, will take the accumulated pixel deltas set by input classes and convert them into current frame deltas, stored in currentFrameMovementDelta properties
Takes speed, scaling, inertia, and framerate into account to ensure smooth movement
Zeros out pixelDeltas before returning

#### Returns

`void`

***

### getFrameIndependentDecay()

> **getFrameIndependentDecay**(`inertia`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L310)

Returns the per-frame decay factor for a given inertia, adjusted to this frame's `dt`.
At the reference frame rate, returns `inertia` unchanged (matches legacy per-frame `*= inertia`).
Use this when implementing custom decaying accumulators (e.g. zoom-to-cursor coupled pan)
that need framerate-independent glide duration.

#### Parameters

##### inertia

`number`

The inertia value (0-1) whose per-frame decay factor is needed.

#### Returns

`number`

The decay factor to multiply a value by this frame.

***

### getFrameIndependentInputScale()

> **getFrameIndependentInputScale**(`inertia`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:325](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L325)

Returns the input-scale factor to apply to an impulse injected into a decaying accumulator
so that the integrated total is framerate-independent and matches legacy at 60fps.
At the reference frame rate, returns 1 (no-op). At high fps, scales the impulse down so
the sum over the decay tail stays equal to `impulse / (1 - inertia)` — the legacy total.

#### Parameters

##### inertia

`number`

The inertia value (0-1) used by the accumulator.

#### Returns

`number`

The scaling factor to multiply an impulse by before adding it to the accumulator.

***

### resetPanVelocity()

> **resetPanVelocity**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L280)

Resets the pan velocity and accumulated pixels, stopping any in-progress pan inertia.

#### Returns

`void`

***

### resetRotationVelocity()

> **resetRotationVelocity**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:272](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L272)

Resets the rotation velocity and accumulated pixels, stopping any in-progress rotation inertia.
Called when inertialAlphaOffset or inertialBetaOffset are explicitly zeroed (backward compat).

#### Returns

`void`

***

### resetZoomVelocity()

> **resetZoomVelocity**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:289](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L289)

Resets the zoom velocity and accumulated pixels, stopping any in-progress zoom inertia.
Called when inertialRadiusOffset is explicitly zeroed out (backward compat).

#### Returns

`void`
