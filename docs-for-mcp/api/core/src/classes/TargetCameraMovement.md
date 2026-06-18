[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TargetCameraMovement

# Class: TargetCameraMovement

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCameraMovement.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCameraMovement.ts#L51)

Shared movement system for [TargetCamera](TargetCamera.md) and its subclasses (FreeCamera, FlyCamera,
FollowCamera). Provides framerate-independent physics (via [CameraMovement](CameraMovement.md)) and a
declarative [InputMapper](InputMapper.md) for configuring which physical inputs trigger which interactions.

Accumulator mapping for this camera family:
- `translate` feeds `panAccumulatedPixels` as a WORLD-space direction (input classes orient local
  intent into world space before populating it, mirroring the legacy `cameraDirection` surface).
- `rotate` feeds `rotationAccumulatedPixels` (x=pitch, y=yaw), mirroring legacy `cameraRotation`.

These camera classes have no separate zoom channel: mouse-wheel input folds into translation/rotation
just like the legacy inputs, so there is no `zoom` interaction here.

Input classes inject deltas using the same scaling they applied historically and the movement
system leaves all speed multipliers at 1, so at the reference framerate the per-frame applied
delta matches the legacy value exactly while inertial glide becomes framerate-independent.

## Extends

- [`CameraMovement`](CameraMovement.md)

## Constructors

### Constructor

> **new TargetCameraMovement**(`scene`, `cameraPosition`, `behavior?`): `TargetCameraMovement`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCameraMovement.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCameraMovement.ts#L61)

Creates a movement system for the [TargetCamera](TargetCamera.md) family.

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene the owning camera belongs to.

##### cameraPosition

[`Vector3`](Vector3.md)

The owning camera's position vector (shared by reference).

##### behavior?

[`InterpolatingBehavior`](InterpolatingBehavior.md)\<[`Camera`](Camera.md)\>

Optional interpolating behavior used to suppress input while animating.

#### Returns

`TargetCameraMovement`

#### Overrides

[`CameraMovement`](CameraMovement.md).[`constructor`](CameraMovement.md#constructor)

## Properties

### activeInput

> **activeInput**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L27)

Should be set by input classes to indicate whether there is active input this frame.
This helps differentiate between 0 pixel delta due to no input vs user actively holding still.

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`activeInput`](CameraMovement.md#activeinput)

***

### input

> `readonly` **input**: [`InputMapper`](InputMapper.md)\<[`TargetCameraHandlers`](../type-aliases/TargetCameraHandlers.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCameraMovement.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCameraMovement.ts#L53)

Input system that maps physical inputs to interactions and dispatches to handlers.

***

### panAccumulatedPixels

> **panAccumulatedPixels**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L121)

Accumulated pixel delta (by input classes) for panning this frame
Read by computeCurrentFrameDeltas() function and converted into panDeltaCurrentFrame (taking speed into account)
Reset to zero after each frame

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`panAccumulatedPixels`](CameraMovement.md#panaccumulatedpixels)

***

### panDeltaCurrentFrame

> **panDeltaCurrentFrame**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L141)

Pan delta to apply to camera this frame, computed by computeCurrentFrameDeltas() from panPixelDelta (taking speed into account)

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`panDeltaCurrentFrame`](CameraMovement.md#pandeltacurrentframe)

***

### panInertia

> **panInertia**: `number` = `0.9`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L95)

Inertia applied to the panning velocity when there is no user input.
Higher inertia === slower decay, velocity retains more of its value each frame.

Note: ArcRotateCamera overrides this from `camera.panningInertia` (which defaults to `camera.inertia`).

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`panInertia`](CameraMovement.md#paninertia)

***

### panSpeed

> **panSpeed**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L46)

Desired coordinate unit movement per input pixel when panning

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`panSpeed`](CameraMovement.md#panspeed)

***

### referenceFrameRate

> **referenceFrameRate**: `number` = `DefaultReferenceFrameRate`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L166)

Framerate (Hz) at which inertia values are calibrated. Default 60 matches legacy camera feel
at any actual refresh rate. Override to 120, 144, etc. only if your app was tuned on that
specific refresh rate under the legacy (framerate-dependent) camera math and you want to
preserve that exact decay characteristic. Most applications should leave this at 60.

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`referenceFrameRate`](CameraMovement.md#referenceframerate)

***

### rotationAccumulatedPixels

> **rotationAccumulatedPixels**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L127)

Accumulated pixel delta (by input classes) for rotation this frame
Read by computeCurrentFrameDeltas() function and converted into rotationDeltaCurrentFrame (taking speed into account)
Reset to zero after each frame

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`rotationAccumulatedPixels`](CameraMovement.md#rotationaccumulatedpixels)

***

### rotationDeltaCurrentFrame

> **rotationDeltaCurrentFrame**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L145)

Rotation delta to apply to camera this frame, computed by computeCurrentFrameDeltas() from rotationPixelDelta (taking speed into account)

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`rotationDeltaCurrentFrame`](CameraMovement.md#rotationdeltacurrentframe)

***

### rotationInertia

> **rotationInertia**: `number` = `0.9`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L103)

Inertia applied to the rotation velocity when there is no user input.
Higher inertia === slower decay, velocity retains more of its value each frame.

Note: ArcRotateCamera syncs this from `camera.inertia` via an accessor on the camera class.
To tune independently, override inside `scene.onBeforeRenderObservable` after `camera.inertia` is read.

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`rotationInertia`](CameraMovement.md#rotationinertia)

***

### rotationXSpeed

> **rotationXSpeed**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L50)

Desired radians movement per input pixel when rotating along x axis

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`rotationXSpeed`](CameraMovement.md#rotationxspeed)

***

### rotationYSpeed

> **rotationYSpeed**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L54)

Desired radians movement per input pixel when rotating along y axis

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`rotationYSpeed`](CameraMovement.md#rotationyspeed)

***

### speed

> **speed**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L38)

Global speed multiplier applied to all movement (pan, rotation, zoom).
Acts as a master scale factor on top of the individual speed properties.

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`speed`](CameraMovement.md#speed)

***

### zoomAccumulatedPixels

> **zoomAccumulatedPixels**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L115)

Accumulated pixel delta (by input classes) for zoom this frame
Read by computeCurrentFrameDeltas() function and converted into zoomDeltaCurrentFrame (taking speed into account)
Reset to zero after each frame

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`zoomAccumulatedPixels`](CameraMovement.md#zoomaccumulatedpixels)

***

### zoomDeltaCurrentFrame

> **zoomDeltaCurrentFrame**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L137)

Zoom delta to apply to camera this frame, computed by computeCurrentFrameDeltas() from zoomPixelDelta (taking speed into account)

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`zoomDeltaCurrentFrame`](CameraMovement.md#zoomdeltacurrentframe)

***

### zoomInertia

> **zoomInertia**: `number` = `0.9`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L88)

Inertia applied to the zoom velocity when there is no user input.
Higher inertia === slower decay, velocity retains more of its value each frame.

Note: ArcRotateCamera syncs this from `camera.inertia` via an accessor on the camera class.
To tune independently, override inside `scene.onBeforeRenderObservable` after `camera.inertia` is read.

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`zoomInertia`](CameraMovement.md#zoominertia)

***

### zoomSpeed

> **zoomSpeed**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L42)

Desired coordinate unit movement per input pixel when zooming

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`zoomSpeed`](CameraMovement.md#zoomspeed)

## Accessors

### isInterpolating

#### Get Signature

> **get** **isInterpolating**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:298](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L298)

Returns true when the camera is playing an interpolating (fly-to) animation.
Useful for suppressing user-input movement while a programmatic animation is active.

##### Returns

`boolean`

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`isInterpolating`](CameraMovement.md#isinterpolating)

## Methods

### computeCurrentFrameDeltas()

> **computeCurrentFrameDeltas**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L195)

When called, will take the accumulated pixel deltas set by input classes and convert them into current frame deltas, stored in currentFrameMovementDelta properties
Takes speed, scaling, inertia, and framerate into account to ensure smooth movement
Zeros out pixelDeltas before returning

#### Returns

`void`

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`computeCurrentFrameDeltas`](CameraMovement.md#computecurrentframedeltas)

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

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`getFrameIndependentDecay`](CameraMovement.md#getframeindependentdecay)

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

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`getFrameIndependentInputScale`](CameraMovement.md#getframeindependentinputscale)

***

### resetPanVelocity()

> **resetPanVelocity**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L280)

Resets the pan velocity and accumulated pixels, stopping any in-progress pan inertia.

#### Returns

`void`

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`resetPanVelocity`](CameraMovement.md#resetpanvelocity)

***

### resetRotationVelocity()

> **resetRotationVelocity**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:272](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L272)

Resets the rotation velocity and accumulated pixels, stopping any in-progress rotation inertia.
Called when inertialAlphaOffset or inertialBetaOffset are explicitly zeroed (backward compat).

#### Returns

`void`

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`resetRotationVelocity`](CameraMovement.md#resetrotationvelocity)

***

### resetZoomVelocity()

> **resetZoomVelocity**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraMovement.ts:289](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraMovement.ts#L289)

Resets the zoom velocity and accumulated pixels, stopping any in-progress zoom inertia.
Called when inertialRadiusOffset is explicitly zeroed out (backward compat).

#### Returns

`void`

#### Inherited from

[`CameraMovement`](CameraMovement.md).[`resetZoomVelocity`](CameraMovement.md#resetzoomvelocity)
