[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GeospatialCameraMovement

# Class: GeospatialCameraMovement

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L63)

Geospatial-specific camera movement system that extends the base movement with
raycasting and altitude-aware zoom constraints.

This class encapsulates geospatial camera movement logic:
- Dragging in a way which keeps cursor anchored to globe
- Latitude-based pan speed dampening
- Zoom speed scaling based on distance to center
- Raycasting to determine zoom constraints based on terrain/globe
- Altitude-based zoom clamping
- Zoom direction calculation (towards cursor vs along look vector)

## Extends

- [`CameraMovement`](CameraMovement.md)

## Constructors

### Constructor

> **new GeospatialCameraMovement**(`scene`, `limits`, `cameraPosition`, `_cameraCenter`, `_cameraLookAt`, `pickPredicate?`, `behavior?`): `GeospatialCameraMovement`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L92)

#### Parameters

##### scene

[`Scene`](Scene.md)

##### limits

`GeospatialLimits`

Geospatial bounds (min/max latitude, longitude, altitude, etc.) used to clamp camera motion.

##### cameraPosition

[`Vector3`](Vector3.md)

##### \_cameraCenter

[`Vector3`](Vector3.md)

##### \_cameraLookAt

[`Vector3`](Vector3.md)

##### pickPredicate?

[`MeshPredicate`](../type-aliases/MeshPredicate.md)

##### behavior?

[`InterpolatingBehavior`](InterpolatingBehavior.md)\<[`GeospatialCamera`](GeospatialCamera.md)\>

#### Returns

`GeospatialCameraMovement`

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

### computedPerFrameZoomPickPoint?

> `optional` **computedPerFrameZoomPickPoint?**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L72)

World-space picked point under the cursor, computed each frame that zoom input is active.
Used to determine the zoom direction when `zoomToCursor` is true.
Undefined when there is no active zoom or the pick misses the globe.

***

### input

> `readonly` **input**: [`InputMapper`](InputMapper.md)\<[`GeospatialHandlers`](../type-aliases/GeospatialHandlers.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L81)

Input system that maps physical inputs to interactions and dispatches to handlers.

***

### limits

> **limits**: `GeospatialLimits`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L95)

Geospatial bounds (min/max latitude, longitude, altitude, etc.) used to clamp camera motion.

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

### pickPredicate?

> `optional` **pickPredicate?**: [`MeshPredicate`](../type-aliases/MeshPredicate.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L65)

Predicate function to determine which meshes to pick against (e.g., globe mesh)

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

***

### zoomToCursor

> **zoomToCursor**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L78)

When true, zooming moves toward the point under the cursor.
When false, zooming moves along the camera's look vector.

## Accessors

### isDragging

#### Get Signature

> **get** **isDragging**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:304](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L304)

Returns true when a drag gesture is active (between startDrag and stopDrag).

##### Returns

`boolean`

***

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

### calculateUpVectorFromPointToRef()

> **calculateUpVectorFromPointToRef**(`point`, `result`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L157)

Function to calculate the up vector from a given point.
Can be overridden to support non-spherical planets or custom up vector logic.
Defaults to using the geocentric normal.

#### Parameters

##### point

[`Vector3`](Vector3.md)

The point from which to calculate the up vector (e.g., camera position)

##### result

[`Vector3`](Vector3.md)

The vector to store the calculated up vector

#### Returns

[`Vector3`](Vector3.md)

The calculated up vector

***

### computeCurrentFrameDeltas()

> **computeCurrentFrameDeltas**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:262](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L262)

Consumes the per-frame accumulated pan/rotate/zoom deltas and applies them to the camera state,
with geospatial-specific dampening (e.g. slower panning near the poles, parallax-based pan compensation).
Called once per frame by the scene's render loop via `_checkInputs`.

#### Returns

`void`

#### Overrides

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

### handleDrag()

> **handleDrag**(`pointerX`, `pointerY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:227](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L227)

Updates the drag gesture by recalculating the intersection with the drag plane
and accumulating the resulting pan delta.

#### Parameters

##### pointerX

`number`

Current screen X coordinate

##### pointerY

`number`

Current screen Y coordinate

#### Returns

`void`

***

### handleZoom()

> **handleZoom**(`zoomDelta`, `toCursor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:313](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L313)

Accumulates a zoom delta and determines the zoom target point via raycasting.

#### Parameters

##### zoomDelta

`number`

Signed zoom amount (positive = zoom in, negative = zoom out)

##### toCursor

`boolean`

When true, zoom toward the point under the cursor; when false, zoom along the look vector

#### Returns

`void`

***

### pickAlongVector()

> **pickAlongVector**(`vector`): [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:334](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L334)

Casts a ray from the camera position along the given direction and returns the pick result.

#### Parameters

##### vector

[`Vector3`](Vector3.md)

World-space direction to cast along

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\>

The pick result, or null if no hit

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

***

### startDrag()

> **startDrag**(`pointerX`, `pointerY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:167](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L167)

Begins a drag (pan) gesture by picking the globe at the given screen position
and establishing a drag plane for subsequent updates.

#### Parameters

##### pointerX

`number`

Screen X coordinate of the pointer

##### pointerY

`number`

Screen Y coordinate of the pointer

#### Returns

`void`

***

### stopDrag()

> **stopDrag**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L183)

Ends the current drag gesture, releasing the drag plane.

#### Returns

`void`
