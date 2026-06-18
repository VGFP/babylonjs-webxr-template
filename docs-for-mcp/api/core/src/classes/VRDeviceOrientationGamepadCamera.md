[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / VRDeviceOrientationGamepadCamera

# Class: VRDeviceOrientationGamepadCamera

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrDeviceOrientationGamepadCamera.pure.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrDeviceOrientationGamepadCamera.pure.ts#L14)

Camera used to simulate VR rendering (based on VRDeviceOrientationFreeCamera)

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_introduction#vr-device-orientation-cameras

## Extends

- [`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md)

## Constructors

### Constructor

> **new VRDeviceOrientationGamepadCamera**(`name`, `position`, `scene?`, `compensateDistortion?`, `vrCameraMetrics?`): `VRDeviceOrientationGamepadCamera`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrDeviceOrientationGamepadCamera.pure.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrDeviceOrientationGamepadCamera.pure.ts#L23)

Creates a new VRDeviceOrientationGamepadCamera

#### Parameters

##### name

`string`

defines camera name

##### position

[`Vector3`](Vector3.md)

defines the start position of the camera

##### scene?

[`Scene`](Scene.md)

defines the scene the camera belongs to

##### compensateDistortion?

`boolean` = `true`

defines if the camera needs to compensate the lens distortion

##### vrCameraMetrics?

[`VRCameraMetrics`](VRCameraMetrics.md) = `...`

defines the vr metrics associated to the camera

#### Returns

`VRDeviceOrientationGamepadCamera`

#### Overrides

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`constructor`](VRDeviceOrientationFreeCamera.md#constructor)

## Properties

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L173)

Gets a list of Animations associated with the node

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`animations`](VRDeviceOrientationFreeCamera.md#animations)

***

### applyGravity

> **applyGravity**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L51)

Enable or disable gravity on the camera.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`applyGravity`](VRDeviceOrientationFreeCamera.md#applygravity)

***

### cameraDirection

> **cameraDirection**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCamera.pure.ts#L32)

Define the current direction the camera is moving to

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`cameraDirection`](VRDeviceOrientationFreeCamera.md#cameradirection)

***

### cameraRigMode

> **cameraRigMode**: `number` = `Camera.RIG_MODE_NONE`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:364](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L364)

Rig mode of the camera.
This is useful to create the camera with two "eyes" instead of one to create VR or stereoscopic scenes.
This is normally controlled byt the camera themselves as internal use.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`cameraRigMode`](VRDeviceOrientationFreeCamera.md#camerarigmode)

***

### cameraRotation

> **cameraRotation**: [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCamera.pure.ts#L36)

Define the current rotation the camera is rotating to

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`cameraRotation`](VRDeviceOrientationFreeCamera.md#camerarotation)

***

### checkCollisions

> **checkCollisions**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L45)

Enable or disable collisions of the camera with the rest of the scene objects.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`checkCollisions`](VRDeviceOrientationFreeCamera.md#checkcollisions)

***

### customRenderTargets

> **customRenderTargets**: [`RenderTargetTexture`](RenderTargetTexture.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:391](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L391)

Defines the list of custom render target which are rendered to and then used as the input to this camera's render. Eg. display another camera view on a TV in the main scene
This is pretty helpful if you wish to make a camera render to a texture you could reuse somewhere
else in the scene. (Eg. security camera)

To change the final output target of the camera, camera.outputRenderTarget should be used instead (eg. webXR renders to a render target corresponding to an HMD)

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`customRenderTargets`](VRDeviceOrientationFreeCamera.md#customrendertargets)

***

### ellipsoid

> **ellipsoid**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L31)

Define the collision ellipsoid of the camera.
This is helpful to simulate a camera body like the player body around the camera

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions#arcrotatecamera

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`ellipsoid`](VRDeviceOrientationFreeCamera.md#ellipsoid)

***

### ellipsoidOffset

> **ellipsoidOffset**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L39)

Define an offset for the position of the ellipsoid around the camera.
This can be helpful to determine the center of the body near the gravity center of the body
instead of its head.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`ellipsoidOffset`](VRDeviceOrientationFreeCamera.md#ellipsoidoffset)

***

### fov

> **fov**: `number` = `0.8`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L264)

Field Of View is set in Radians. (default is 0.8)

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`fov`](VRDeviceOrientationFreeCamera.md#fov)

***

### fovMode

> **fovMode**: `number` = `Camera.FOVMODE_VERTICAL_FIXED`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:356](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L356)

fovMode sets the camera frustum bounds to the viewport bounds. (default is FOVMODE_VERTICAL_FIXED)

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`fovMode`](VRDeviceOrientationFreeCamera.md#fovmode)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L95)

Gets or sets the id of the node

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`id`](VRDeviceOrientationFreeCamera.md#id)

***

### ignoreCameraMaxZ

> **ignoreCameraMaxZ**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:382](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L382)

Ignores camera maxZ when computing the projection matrix (ie. use 0 instead of maxZ), meaning objects won't be culled by the far plane

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`ignoreCameraMaxZ`](VRDeviceOrientationFreeCamera.md#ignorecameramaxz)

***

### inputs

> **inputs**: [`FreeCameraInputsManager`](FreeCameraInputsManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L56)

Define the input manager associated to the camera.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`inputs`](VRDeviceOrientationFreeCamera.md#inputs)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L127)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`inspectableCustomProperties`](VRDeviceOrientationFreeCamera.md#inspectablecustomproperties)

***

### interaxialDistance

> **interaxialDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:370](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L370)

Defines the distance between both "eyes" in case of a RIG

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`interaxialDistance`](VRDeviceOrientationFreeCamera.md#interaxialdistance)

***

### inverseRotationSpeed

> **inverseRotationSpeed**: `number` = `0.2`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.pure.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCamera.pure.ts#L114)

Speed multiplier for inverse camera panning

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`inverseRotationSpeed`](VRDeviceOrientationFreeCamera.md#inverserotationspeed)

***

### invertRotation

> **invertRotation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.pure.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCamera.pure.ts#L109)

Reverses mouselook direction to 'natural' panning as opposed to traditional direct
panning

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`invertRotation`](VRDeviceOrientationFreeCamera.md#invertrotation)

***

### isIntermediate

> **isIntermediate**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L337)

Define whether the camera is intermediate.
This is useful to not present the output directly to the screen in case of rig without post process for instance

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`isIntermediate`](VRDeviceOrientationFreeCamera.md#isintermediate)

***

### isRigCamera

> **isRigCamera**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:421](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L421)

Is this camera a part of a rig system?

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`isRigCamera`](VRDeviceOrientationFreeCamera.md#isrigcamera)

***

### isStereoscopicSideBySide

> **isStereoscopicSideBySide**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:376](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L376)

Defines if stereoscopic rendering is done side by side or over under.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`isStereoscopicSideBySide`](VRDeviceOrientationFreeCamera.md#isstereoscopicsidebyside)

***

### layerMask

> **layerMask**: `number` = `0x0fffffff`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L350)

Restricts the camera to viewing objects with the same layerMask.
A camera with a layerMask of 1 will render mesh.layerMask & camera.layerMask!== 0

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`layerMask`](VRDeviceOrientationFreeCamera.md#layermask)

***

### lockedTarget

> **lockedTarget**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.pure.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCamera.pure.ts#L134)

Define the current target of the camera as an object or a position.
Please note that locking a target will disable panning.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`lockedTarget`](VRDeviceOrientationFreeCamera.md#lockedtarget)

***

### maxZ

> **maxZ**: `number` = `10000.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:297](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L297)

Define the maximum distance the camera can see to.  (default is 10000)
This is important to note that the depth buffer are not infinite and the further it end
the more your scene might encounter depth fighting issue.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`maxZ`](VRDeviceOrientationFreeCamera.md#maxz)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L113)

Gets or sets an object used to store user defined information for the node

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`metadata`](VRDeviceOrientationFreeCamera.md#metadata)

***

### minZ

> **minZ**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:289](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L289)

Define the minimum distance the camera can see from.
This is important to note that the depth buffer are not infinite and the closer it starts
the more your scene might encounter depth fighting issue.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`minZ`](VRDeviceOrientationFreeCamera.md#minz)

***

### movement

> **movement**: [`TargetCameraMovement`](TargetCameraMovement.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L64)

Framerate-independent movement controller for the free camera, exposing the configurable
[InputMapper](InputMapper.md) (`movement.input`) consulted by the free-camera input classes. Narrows
the inherited [TargetCamera.movement](TargetCamera.md#movement) to [TargetCameraMovement](TargetCameraMovement.md); the instance is
created by the [TargetCamera](TargetCamera.md) constructor.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`movement`](VRDeviceOrientationFreeCamera.md#movement)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L89)

Gets or sets the name of the node

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`name`](VRDeviceOrientationFreeCamera.md#name)

***

### noRotationConstraint

> **noRotationConstraint**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCamera.pure.ts#L103)

Add constraint to the camera to prevent it to move freely in all directions and
around all axis.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`noRotationConstraint`](VRDeviceOrientationFreeCamera.md#norotationconstraint)

***

### oblique

> **oblique**: [`Nullable`](../type-aliases/Nullable.md)\<[`IObliqueParams`](../interfaces/IObliqueParams.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L157)

Object containing oblique projection values (only used with ORTHOGRAPHIC_CAMERA)

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`oblique`](VRDeviceOrientationFreeCamera.md#oblique)

***

### onAccessibilityTagChangedObservable

> **onAccessibilityTagChangedObservable**: [`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L146)

Observable fired when an accessibility tag is changed

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`onAccessibilityTagChangedObservable`](VRDeviceOrientationFreeCamera.md#onaccessibilitytagchangedobservable)

***

### onAfterCheckInputsObservable

> **onAfterCheckInputsObservable**: [`Observable`](Observable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:412](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L412)

Observable triggered when the inputs have been processed.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`onAfterCheckInputsObservable`](VRDeviceOrientationFreeCamera.md#onaftercheckinputsobservable)

***

### onCollide

> **onCollide**: (`collidedMesh`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L283)

Event raised when the camera collide with a mesh in the scene.

#### Parameters

##### collidedMesh

[`AbstractMesh`](AbstractMesh.md)

#### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`onCollide`](VRDeviceOrientationFreeCamera.md#oncollide)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L350)

An event triggered when the mesh is disposed

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`onDisposeObservable`](VRDeviceOrientationFreeCamera.md#ondisposeobservable)

***

### onProjectionMatrixChangedObservable

> **onProjectionMatrixChangedObservable**: [`Observable`](Observable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:408](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L408)

Observable triggered when the camera Projection matrix has changed.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`onProjectionMatrixChangedObservable`](VRDeviceOrientationFreeCamera.md#onprojectionmatrixchangedobservable)

***

### onReady

> **onReady**: [`Nullable`](../type-aliases/Nullable.md)\<(`node`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L179)

Callback raised when the node is ready to be used

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`onReady`](VRDeviceOrientationFreeCamera.md#onready)

***

### onRestoreStateObservable

> **onRestoreStateObservable**: [`Observable`](Observable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:416](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L416)

Observable triggered when reset has been called and applied to the camera.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`onRestoreStateObservable`](VRDeviceOrientationFreeCamera.md#onrestorestateobservable)

***

### onViewMatrixChangedObservable

> **onViewMatrixChangedObservable**: [`Observable`](Observable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:404](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L404)

Observable triggered when the camera view matrix has changed.
Beware of reentrance! Some methods like Camera.getViewMatrix and Camera.getWorldMatrix can trigger the onViewMatrixChangedObservable
observable, so using them inside an observer will require additional logic to avoid a stack overflow error.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`onViewMatrixChangedObservable`](VRDeviceOrientationFreeCamera.md#onviewmatrixchangedobservable)

***

### outputRenderTarget

> **outputRenderTarget**: [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:397](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L397)

When set, the camera will render to this render target instead of the default canvas

If the desire is to use the output of a camera as a texture in the scene consider using camera.customRenderTargets instead

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`outputRenderTarget`](VRDeviceOrientationFreeCamera.md#outputrendertarget)

***

### projectionPlaneTilt

> **projectionPlaneTilt**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:281](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L281)

Projection plane tilt around the X axis (horizontal), set in Radians. (default is 0)
Can be used to make vertical lines in world space actually vertical on the screen.
See https://forum.babylonjs.com/t/add-vertical-shift-to-3ds-max-exporter-babylon-cameras/17480

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`projectionPlaneTilt`](VRDeviceOrientationFreeCamera.md#projectionplanetilt)

***

### renderPassId

> **renderPassId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:432](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L432)

Render pass id used by the camera to render into the main framebuffer

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`renderPassId`](VRDeviceOrientationFreeCamera.md#renderpassid)

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L121)

For internal use only. Please do not use.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`reservedDataStore`](VRDeviceOrientationFreeCamera.md#reserveddatastore)

***

### rigParent?

> `optional` **rigParent?**: [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:427](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L427)

If isRigCamera set to true this will be set with the parent camera.
The parent camera is not (!) necessarily the .parent of this camera (like in the case of XR)

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`rigParent`](VRDeviceOrientationFreeCamera.md#rigparent)

***

### rotation

> **rotation**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.pure.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCamera.pure.ts#L86)

Define the current rotation of the camera

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`rotation`](VRDeviceOrientationFreeCamera.md#rotation)

***

### rotationQuaternion

> **rotationQuaternion**: [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCamera.pure.ts#L91)

Define the current rotation of the camera as a quaternion to prevent Gimbal lock

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`rotationQuaternion`](VRDeviceOrientationFreeCamera.md#rotationquaternion)

***

### speed

> **speed**: `number` = `2.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.pure.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCamera.pure.ts#L97)

Define the current speed of the camera

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`speed`](VRDeviceOrientationFreeCamera.md#speed)

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L107)

Gets or sets a string used to store user defined state for the node

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`state`](VRDeviceOrientationFreeCamera.md#state)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L101)

Gets or sets the unique id of the node

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`uniqueId`](VRDeviceOrientationFreeCamera.md#uniqueid)

***

### updateUpVectorFromRotation

> **updateUpVectorFromRotation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.pure.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCamera.pure.ts#L80)

When set, the up vector of the camera will be updated by the rotation of the camera

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`updateUpVectorFromRotation`](VRDeviceOrientationFreeCamera.md#updateupvectorfromrotation)

***

### viewport

> **viewport**: [`Viewport`](Viewport.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:343](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L343)

Define the viewport of the camera.
This correspond to the portion of the screen the camera will render to in normalized 0 to 1 unit.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`viewport`](VRDeviceOrientationFreeCamera.md#viewport)

***

### ForceAttachControlToAlwaysPreventDefault

> `static` **ForceAttachControlToAlwaysPreventDefault**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L117)

Defines if by default attaching controls should prevent the default javascript event to continue.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`ForceAttachControlToAlwaysPreventDefault`](VRDeviceOrientationFreeCamera.md#forceattachcontroltoalwayspreventdefault)

***

### FOVMODE\_HORIZONTAL\_FIXED

> `readonly` `static` **FOVMODE\_HORIZONTAL\_FIXED**: `1` = `Constants.FOVMODE_HORIZONTAL_FIXED`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L76)

This setting aligns the left and right bounds of the viewport to the left and right bounds of the camera frustum.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`FOVMODE_HORIZONTAL_FIXED`](VRDeviceOrientationFreeCamera.md#fovmode_horizontal_fixed)

***

### FOVMODE\_VERTICAL\_FIXED

> `readonly` `static` **FOVMODE\_VERTICAL\_FIXED**: `0` = `Constants.FOVMODE_VERTICAL_FIXED`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L72)

This is the default FOV mode for perspective cameras.
This setting aligns the upper and lower bounds of the viewport to the upper and lower bounds of the camera frustum.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`FOVMODE_VERTICAL_FIXED`](VRDeviceOrientationFreeCamera.md#fovmode_vertical_fixed)

***

### ORTHOGRAPHIC\_CAMERA

> `readonly` `static` **ORTHOGRAPHIC\_CAMERA**: `1` = `Constants.ORTHOGRAPHIC_CAMERA`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L66)

This helps creating camera with an orthographic mode.
Orthographic is commonly used in engineering as a means to produce object specifications that communicate dimensions unambiguously, each line of 1 unit length (cm, meter..whatever) will appear to have the same length everywhere on the drawing. This allows the drafter to dimension only a subset of lines and let the reader know that other lines of that length on the drawing are also that length in reality. Every parallel line in the drawing is also parallel in the object.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`ORTHOGRAPHIC_CAMERA`](VRDeviceOrientationFreeCamera.md#orthographic_camera)

***

### PERSPECTIVE\_CAMERA

> `readonly` `static` **PERSPECTIVE\_CAMERA**: `0` = `Constants.PERSPECTIVE_CAMERA`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L61)

This is the default projection mode used by the cameras.
It helps recreating a feeling of perspective and better appreciate depth.
This is the best way to simulate real life cameras.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`PERSPECTIVE_CAMERA`](VRDeviceOrientationFreeCamera.md#perspective_camera)

***

### RIG\_MODE\_CUSTOM

> `readonly` `static` **RIG\_MODE\_CUSTOM**: `22` = `Constants.RIG_MODE_CUSTOM`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L112)

Custom rig mode allowing rig cameras to be populated manually with any number of cameras

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`RIG_MODE_CUSTOM`](VRDeviceOrientationFreeCamera.md#rig_mode_custom)

***

### RIG\_MODE\_NONE

> `readonly` `static` **RIG\_MODE\_NONE**: `0` = `Constants.RIG_MODE_NONE`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L82)

This specifies there is no need for a camera rig.
Basically only one eye is rendered corresponding to the camera.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`RIG_MODE_NONE`](VRDeviceOrientationFreeCamera.md#rig_mode_none)

***

### RIG\_MODE\_STEREOSCOPIC\_ANAGLYPH

> `readonly` `static` **RIG\_MODE\_STEREOSCOPIC\_ANAGLYPH**: `10` = `Constants.RIG_MODE_STEREOSCOPIC_ANAGLYPH`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L87)

Simulates a camera Rig with one blue eye and one red eye.
This can be use with 3d blue and red glasses.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`RIG_MODE_STEREOSCOPIC_ANAGLYPH`](VRDeviceOrientationFreeCamera.md#rig_mode_stereoscopic_anaglyph)

***

### RIG\_MODE\_STEREOSCOPIC\_INTERLACED

> `readonly` `static` **RIG\_MODE\_STEREOSCOPIC\_INTERLACED**: `14` = `Constants.RIG_MODE_STEREOSCOPIC_INTERLACED`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L103)

Defines that both eyes of the camera will be rendered on successive lines interlaced for passive 3d monitors.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`RIG_MODE_STEREOSCOPIC_INTERLACED`](VRDeviceOrientationFreeCamera.md#rig_mode_stereoscopic_interlaced)

***

### RIG\_MODE\_STEREOSCOPIC\_OVERUNDER

> `readonly` `static` **RIG\_MODE\_STEREOSCOPIC\_OVERUNDER**: `13` = `Constants.RIG_MODE_STEREOSCOPIC_OVERUNDER`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L99)

Defines that both eyes of the camera will be rendered over under each other.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`RIG_MODE_STEREOSCOPIC_OVERUNDER`](VRDeviceOrientationFreeCamera.md#rig_mode_stereoscopic_overunder)

***

### RIG\_MODE\_STEREOSCOPIC\_SIDEBYSIDE\_CROSSEYED

> `readonly` `static` **RIG\_MODE\_STEREOSCOPIC\_SIDEBYSIDE\_CROSSEYED**: `12` = `Constants.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L95)

Defines that both eyes of the camera will be rendered side by side with a none parallel target.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED`](VRDeviceOrientationFreeCamera.md#rig_mode_stereoscopic_sidebyside_crosseyed)

***

### RIG\_MODE\_STEREOSCOPIC\_SIDEBYSIDE\_PARALLEL

> `readonly` `static` **RIG\_MODE\_STEREOSCOPIC\_SIDEBYSIDE\_PARALLEL**: `11` = `Constants.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L91)

Defines that both eyes of the camera will be rendered side by side with a parallel target.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL`](VRDeviceOrientationFreeCamera.md#rig_mode_stereoscopic_sidebyside_parallel)

***

### RIG\_MODE\_VR

> `readonly` `static` **RIG\_MODE\_VR**: `20` = `Constants.RIG_MODE_VR`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L108)

Defines that both eyes of the camera should be renderered in a VR mode (carbox).

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`RIG_MODE_VR`](VRDeviceOrientationFreeCamera.md#rig_mode_vr)

## Accessors

### absoluteRotation

#### Get Signature

> **get** **absoluteRotation**(): [`Quaternion`](Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1477](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1477)

Returns the current camera absolute rotation

##### Returns

[`Quaternion`](Quaternion.md)

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`absoluteRotation`](VRDeviceOrientationFreeCamera.md#absoluterotation)

***

### accessibilityTag

#### Get Signature

> **get** **accessibilityTag**(): [`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L137)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

#### Set Signature

> **set** **accessibilityTag**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L132)

Gets or sets the accessibility tag to describe the node for accessibility purpose.

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`accessibilityTag`](VRDeviceOrientationFreeCamera.md#accessibilitytag)

***

### angularSensibility

#### Get Signature

> **get** **angularSensibility**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L70)

Gets the input sensibility for a mouse input. (default is 2000.0)
Higher values reduce sensitivity.

##### Returns

`number`

#### Set Signature

> **set** **angularSensibility**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L83)

Sets the input sensibility for a mouse input. (default is 2000.0)
Higher values reduce sensitivity.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`angularSensibility`](VRDeviceOrientationFreeCamera.md#angularsensibility)

***

### animationPropertiesOverride

#### Get Signature

> **get** **animationPropertiesOverride**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:325](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L325)

Gets or sets the animation properties override

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

#### Set Signature

> **set** **animationPropertiesOverride**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L332)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`animationPropertiesOverride`](VRDeviceOrientationFreeCamera.md#animationpropertiesoverride)

***

### behaviors

#### Get Signature

> **get** **behaviors**(): [`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:472](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L472)

Gets the list of attached behaviors

##### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

##### Returns

[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>[]

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`behaviors`](VRDeviceOrientationFreeCamera.md#behaviors)

***

### collisionMask

#### Get Signature

> **get** **collisionMask**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L350)

Define a collision mask to limit the list of object the camera can collide with

##### Returns

`number`

#### Set Signature

> **set** **collisionMask**(`mask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:354](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L354)

##### Parameters

###### mask

`number`

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`collisionMask`](VRDeviceOrientationFreeCamera.md#collisionmask)

***

### disablePointerInputWhenUsingDeviceOrientation

#### Get Signature

> **get** **disablePointerInputWhenUsingDeviceOrientation**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/deviceOrientationCamera.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/deviceOrientationCamera.pure.ts#L57)

Gets or sets a boolean indicating that pointer input must be disabled on first orientation sensor update (Default: true)

##### Returns

`boolean`

#### Set Signature

> **set** **disablePointerInputWhenUsingDeviceOrientation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/deviceOrientationCamera.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/deviceOrientationCamera.pure.ts#L61)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`disablePointerInputWhenUsingDeviceOrientation`](VRDeviceOrientationFreeCamera.md#disablepointerinputwhenusingdeviceorientation)

***

### doNotSerialize

#### Get Signature

> **get** **doNotSerialize**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L151)

Gets or sets a boolean used to define if the node must be serialized

##### Returns

`boolean`

#### Set Signature

> **set** **doNotSerialize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L163)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`doNotSerialize`](VRDeviceOrientationFreeCamera.md#donotserialize)

***

### globalPosition

#### Get Signature

> **get** **globalPosition**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:583](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L583)

Gets the current world space position of the camera.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`globalPosition`](VRDeviceOrientationFreeCamera.md#globalposition)

***

### hasMoved

#### Get Signature

> **get** **hasMoved**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:439](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L439)

Gets a flag indicating that the camera has moved in some way since the last call to Camera.update()

##### Returns

`boolean`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`hasMoved`](VRDeviceOrientationFreeCamera.md#hasmoved)

***

### inertia

#### Get Signature

> **get** **inertia**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCamera.pure.ts#L62)

Defines the inertia (decay coefficient applied per reference frame at 60fps) of the camera.
This helps giving a smooth feeling to the camera movement.

Override of [Camera.inertia](Camera.md#inertia) that writes through to the [movement](TargetCamera.md#movement) system so the
framerate-independent pan/rotation glide stays in sync. Setting this updates the movement
system immediately (matching the accessor convergence used by [ArcRotateCamera](ArcRotateCamera.md)).

Backed by a local field rather than `super.inertia`: the shipped UMD bundle is compiled with
TypeScript at `target: ES5`, and ES5 downleveling of `super` access inside a decorated accessor
(the base [Camera.inertia](Camera.md#inertia) carries `@serialize()`) mis-compiles to `undefined`. That would
feed `NaN` into the movement decay and freeze the camera. It only breaks in the ES5 UMD bundle;
native-ESM dev keeps real `super`. See the `babylonjs/no-super-in-accessor` lint rule.

##### Returns

`number`

#### Set Signature

> **set** **inertia**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.pure.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCamera.pure.ts#L66)

Define the default inertia of the camera.
This helps giving a smooth feeling to the camera movement.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`inertia`](VRDeviceOrientationFreeCamera.md#inertia)

***

### inheritVisibility

#### Get Signature

> **get** **inheritVisibility**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L269)

If set to true, this node, when renderable, will only be visible if its parent(s) are also visible.

##### Default

```ts
false
```

##### Returns

`boolean`

#### Set Signature

> **set** **inheritVisibility**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:273](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L273)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`inheritVisibility`](VRDeviceOrientationFreeCamera.md#inheritvisibility)

***

### isLeftCamera

#### Get Signature

> **get** **isLeftCamera**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1251)

Gets the left camera of a rig setup in case of Rigged Camera

##### Returns

`boolean`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`isLeftCamera`](VRDeviceOrientationFreeCamera.md#isleftcamera)

***

### isRightCamera

#### Get Signature

> **get** **isRightCamera**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1260)

Gets the right camera of a rig setup in case of Rigged Camera

##### Returns

`boolean`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`isRightCamera`](VRDeviceOrientationFreeCamera.md#isrightcamera)

***

### isVisible

#### Get Signature

> **get** **isVisible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:281](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L281)

Gets or sets a boolean indicating whether this node is visible, either this node itself when it is renderable or its renderable child nodes when `inheritVisibility` is true.

##### Default

```ts
true
```

##### Returns

`boolean`

#### Set Signature

> **set** **isVisible**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:289](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L289)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`isVisible`](VRDeviceOrientationFreeCamera.md#isvisible)

***

### keysDown

#### Get Signature

> **get** **keysDown**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L131)

Gets or Set the list of keyboard keys used to control the backward move of the camera.

##### Returns

`number`[]

#### Set Signature

> **set** **keysDown**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L140)

##### Parameters

###### value

`number`[]

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`keysDown`](VRDeviceOrientationFreeCamera.md#keysdown)

***

### keysDownward

#### Get Signature

> **get** **keysDownward**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L150)

Gets or Set the list of keyboard keys used to control the downward move of the camera.

##### Returns

`number`[]

#### Set Signature

> **set** **keysDownward**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L159)

##### Parameters

###### value

`number`[]

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`keysDownward`](VRDeviceOrientationFreeCamera.md#keysdownward)

***

### keysLeft

#### Get Signature

> **get** **keysLeft**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L169)

Gets or Set the list of keyboard keys used to control the left strafe move of the camera.

##### Returns

`number`[]

#### Set Signature

> **set** **keysLeft**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L178)

##### Parameters

###### value

`number`[]

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`keysLeft`](VRDeviceOrientationFreeCamera.md#keysleft)

***

### keysRight

#### Get Signature

> **get** **keysRight**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L188)

Gets or Set the list of keyboard keys used to control the right strafe move of the camera.

##### Returns

`number`[]

#### Set Signature

> **set** **keysRight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:197](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L197)

##### Parameters

###### value

`number`[]

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`keysRight`](VRDeviceOrientationFreeCamera.md#keysright)

***

### keysRotateDown

#### Get Signature

> **get** **keysRotateDown**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L264)

Gets or Set the list of keyboard keys used to control the down rotation move of the camera.

##### Returns

`number`[]

#### Set Signature

> **set** **keysRotateDown**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:273](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L273)

##### Parameters

###### value

`number`[]

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`keysRotateDown`](VRDeviceOrientationFreeCamera.md#keysrotatedown)

***

### keysRotateLeft

#### Get Signature

> **get** **keysRotateLeft**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L207)

Gets or Set the list of keyboard keys used to control the left rotation move of the camera.

##### Returns

`number`[]

#### Set Signature

> **set** **keysRotateLeft**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L216)

##### Parameters

###### value

`number`[]

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`keysRotateLeft`](VRDeviceOrientationFreeCamera.md#keysrotateleft)

***

### keysRotateRight

#### Get Signature

> **get** **keysRotateRight**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:226](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L226)

Gets or Set the list of keyboard keys used to control the right rotation move of the camera.

##### Returns

`number`[]

#### Set Signature

> **set** **keysRotateRight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:235](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L235)

##### Parameters

###### value

`number`[]

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`keysRotateRight`](VRDeviceOrientationFreeCamera.md#keysrotateright)

***

### keysRotateUp

#### Get Signature

> **get** **keysRotateUp**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L245)

Gets or Set the list of keyboard keys used to control the up rotation move of the camera.

##### Returns

`number`[]

#### Set Signature

> **set** **keysRotateUp**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L254)

##### Parameters

###### value

`number`[]

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`keysRotateUp`](VRDeviceOrientationFreeCamera.md#keysrotateup)

***

### keysUp

#### Get Signature

> **get** **keysUp**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L93)

Gets or Set the list of keyboard keys used to control the forward move of the camera.

##### Returns

`number`[]

#### Set Signature

> **set** **keysUp**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L102)

##### Parameters

###### value

`number`[]

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`keysUp`](VRDeviceOrientationFreeCamera.md#keysup)

***

### keysUpward

#### Get Signature

> **get** **keysUpward**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L112)

Gets or Set the list of keyboard keys used to control the upward move of the camera.

##### Returns

`number`[]

#### Set Signature

> **set** **keysUpward**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L121)

##### Parameters

###### value

`number`[]

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`keysUpward`](VRDeviceOrientationFreeCamera.md#keysupward)

***

### leftCamera

#### Get Signature

> **get** **leftCamera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FreeCamera`](FreeCamera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1267](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1267)

Gets the left camera of a rig setup in case of Rigged Camera

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FreeCamera`](FreeCamera.md)\>

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`leftCamera`](VRDeviceOrientationFreeCamera.md#leftcamera)

***

### mode

#### Get Signature

> **get** **mode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:329](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L329)

##### Returns

`number`

#### Set Signature

> **set** **mode**(`mode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L319)

Define the mode of the camera (Camera.PERSPECTIVE_CAMERA or Camera.ORTHOGRAPHIC_CAMERA)

##### Parameters

###### mode

`number`

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`mode`](VRDeviceOrientationFreeCamera.md#mode)

***

### needMoveForGravity

#### Get Signature

> **get** **needMoveForGravity**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:434](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L434)

When true, gravity is applied whether there is user input or not.

##### Returns

`boolean`

#### Set Signature

> **set** **needMoveForGravity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:427](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L427)

Enable movement without a user input. This allows gravity to always be applied.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`needMoveForGravity`](VRDeviceOrientationFreeCamera.md#needmoveforgravity)

***

### onClonedObservable

#### Get Signature

> **get** **onClonedObservable**(): [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L373)

An event triggered when the node is cloned

##### Returns

[`Observable`](Observable.md)\<[`Node`](Node.md)\>

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`onClonedObservable`](VRDeviceOrientationFreeCamera.md#onclonedobservable)

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:356](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L356)

Sets a callback that will be raised when the node will be disposed

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`onDispose`](VRDeviceOrientationFreeCamera.md#ondispose)

***

### onEnabledStateChangedObservable

#### Get Signature

> **get** **onEnabledStateChangedObservable**(): [`Observable`](Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:366](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L366)

An event triggered when the enabled state of the node changes

##### Returns

[`Observable`](Observable.md)\<`boolean`\>

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`onEnabledStateChangedObservable`](VRDeviceOrientationFreeCamera.md#onenabledstatechangedobservable)

***

### orthoBottom

#### Get Signature

> **get** **orthoBottom**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:237](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L237)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **orthoBottom**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L228)

Define the current limit on the bottom side for an orthographic camera
In scene unit

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`orthoBottom`](VRDeviceOrientationFreeCamera.md#orthobottom)

***

### orthoLeft

#### Get Signature

> **get** **orthoLeft**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L199)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **orthoLeft**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L190)

Define the current limit on the left side for an orthographic camera
In scene unit

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`orthoLeft`](VRDeviceOrientationFreeCamera.md#ortholeft)

***

### orthoRight

#### Get Signature

> **get** **orthoRight**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:218](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L218)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **orthoRight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L209)

Define the current limit on the right side for an orthographic camera
In scene unit

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`orthoRight`](VRDeviceOrientationFreeCamera.md#orthoright)

***

### orthoTop

#### Get Signature

> **get** **orthoTop**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:256](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L256)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **orthoTop**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:247](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L247)

Define the current limit on the top side for an orthographic camera
In scene unit

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`orthoTop`](VRDeviceOrientationFreeCamera.md#orthotop)

***

### parent

#### Get Signature

> **get** **parent**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L261)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

#### Set Signature

> **set** **parent**(`parent`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L222)

Gets or sets the parent of the node (without keeping the current position in the scene)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/parent_pivot/parent

##### Parameters

###### parent

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`parent`](VRDeviceOrientationFreeCamera.md#parent)

***

### position

#### Get Signature

> **get** **position**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L131)

Define the current local position of the camera in the scene

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **position**(`newPosition`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L135)

##### Parameters

###### newPosition

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`position`](VRDeviceOrientationFreeCamera.md#position)

***

### rightCamera

#### Get Signature

> **get** **rightCamera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FreeCamera`](FreeCamera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1277](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1277)

Gets the right camera of a rig setup in case of Rigged Camera

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FreeCamera`](FreeCamera.md)\>

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`rightCamera`](VRDeviceOrientationFreeCamera.md#rightcamera)

***

### rigPostProcess

#### Get Signature

> **get** **rigPostProcess**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:777](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L777)

Gets the post process used by the rig cameras

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`rigPostProcess`](VRDeviceOrientationFreeCamera.md#rigpostprocess)

***

### screenArea

#### Get Signature

> **get** **screenArea**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L162)

The screen area in scene units squared

##### Returns

`number`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`screenArea`](VRDeviceOrientationFreeCamera.md#screenarea)

***

### target

#### Get Signature

> **get** **target**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.pure.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCamera.pure.ts#L345)

Defines the target point of the camera.
The camera looks towards it form the radius distance.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **target**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.pure.ts:348](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCamera.pure.ts#L348)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`target`](VRDeviceOrientationFreeCamera.md#target)

***

### upVector

#### Get Signature

> **get** **upVector**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L150)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **upVector**(`vec`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L146)

The vector the camera should consider as up.
(default is Vector3(0, 1, 0) aka Vector3.Up())

##### Parameters

###### vec

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`upVector`](VRDeviceOrientationFreeCamera.md#upvector)

***

### worldMatrixFromCache

#### Get Signature

> **get** **worldMatrixFromCache**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:516](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L516)

Returns directly the latest state of the mesh World matrix.
A Matrix is returned.

##### Returns

[`Matrix`](Matrix.md)

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`worldMatrixFromCache`](VRDeviceOrientationFreeCamera.md#worldmatrixfromcache)

## Methods

### \_getFirstPostProcess()

> **\_getFirstPostProcess**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:785](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L785)

Internal, gets the first post process.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

the first post process to be run on this camera.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`_getFirstPostProcess`](VRDeviceOrientationFreeCamera.md#_getfirstpostprocess)

***

### addBehavior()

> **addBehavior**(`behavior`, `attachImmediately?`): [`Node`](Node.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:421](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L421)

Attach a behavior to the node

#### Parameters

##### behavior

[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>

defines the behavior to attach

##### attachImmediately?

`boolean` = `false`

defines that the behavior must be attached even if the scene is still loading

#### Returns

[`Node`](Node.md)

the current Node

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`addBehavior`](VRDeviceOrientationFreeCamera.md#addbehavior)

***

### applyVerticalCorrection()

> **applyVerticalCorrection**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:574](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L574)

Automatically tilts the projection plane, using `projectionPlaneTilt`, to correct the perspective effect on vertical lines.

#### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`applyVerticalCorrection`](VRDeviceOrientationFreeCamera.md#applyverticalcorrection)

***

### attachControl()

Attached controls to the current camera.

#### Param

**ignored**

defines an ignored parameter kept for backward compatibility.

#### Param

**noPreventDefault**

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

#### Call Signature

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:316](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L316)

Attach the input controls to a specific dom element to get the input from.

##### Parameters

###### noPreventDefault?

`boolean`

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

##### Returns

`void`

##### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`attachControl`](VRDeviceOrientationFreeCamera.md#attachcontrol)

#### Call Signature

> **attachControl**(`ignored`, `noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:323](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L323)

Attach the input controls to a specific dom element to get the input from.

##### Parameters

###### ignored

`any`

defines an ignored parameter kept for backward compatibility.

###### noPreventDefault?

`boolean`

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
BACK COMPAT SIGNATURE ONLY.

##### Returns

`void`

##### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`attachControl`](VRDeviceOrientationFreeCamera.md#attachcontrol)

***

### attachPostProcess()

> **attachPostProcess**(`postProcess`, `insertAt?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:828](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L828)

Attach a post process to the camera.

#### Parameters

##### postProcess

[`PostProcess`](PostProcess.md)

The post process to attach to the camera

##### insertAt?

[`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

The position of the post process in case several of them are in use in the scene

#### Returns

`number`

the position the post process has been inserted at

#### See

https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/usePostProcesses#attach-postprocess

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`attachPostProcess`](VRDeviceOrientationFreeCamera.md#attachpostprocess)

***

### beginAnimation()

> **beginAnimation**(`name`, `loop?`, `speedRatio?`, `onAnimationEnd?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:902](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L902)

Will start the animation sequence

#### Parameters

##### name

`string`

defines the range frames for animation sequence

##### loop?

`boolean`

defines if the animation should loop (false by default)

##### speedRatio?

`number`

defines the speed factor in which to run the animation (1 by default)

##### onAnimationEnd?

() => `void`

defines a function to be executed when the animation ended (undefined by default)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

the object created for this animation. If range does not exist, it will return null

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`beginAnimation`](VRDeviceOrientationFreeCamera.md#beginanimation)

***

### clone()

> **clone**(`name`, `newParent?`): [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1448](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1448)

Clones the current camera.

#### Parameters

##### name

`string`

The cloned camera name

##### newParent?

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\> = `null`

The cloned camera's new parent (none by default)

#### Returns

[`Camera`](Camera.md)

the cloned camera

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`clone`](VRDeviceOrientationFreeCamera.md#clone)

***

### computeWorldMatrix()

> **computeWorldMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1520](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1520)

Compute the world  matrix of the camera.

#### Returns

[`Matrix`](Matrix.md)

the camera world matrix

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`computeWorldMatrix`](VRDeviceOrientationFreeCamera.md#computeworldmatrix)

***

### createAnimationRange()

> **createAnimationRange**(`name`, `from`, `to`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:819](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L819)

Creates an animation range for this node

#### Parameters

##### name

`string`

defines the name of the range

##### from

`number`

defines the starting key

##### to

`number`

defines the end key

#### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`createAnimationRange`](VRDeviceOrientationFreeCamera.md#createanimationrange)

***

### deleteAnimationRange()

> **deleteAnimationRange**(`name`, `deleteFrames?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:836](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L836)

Delete a specific animation range

#### Parameters

##### name

`string`

defines the name of the range to delete

##### deleteFrames?

`boolean` = `true`

defines if animation frames from the range must be deleted as well

#### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`deleteAnimationRange`](VRDeviceOrientationFreeCamera.md#deleteanimationrange)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L337)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`detachControl`](VRDeviceOrientationFreeCamera.md#detachcontrol)

***

### detachPostProcess()

> **detachPostProcess**(`postProcess`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:856](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L856)

Detach a post process to the camera.

#### Parameters

##### postProcess

[`PostProcess`](PostProcess.md)

The post process to detach from the camera

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/usePostProcesses#attach-postprocess

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`detachPostProcess`](VRDeviceOrientationFreeCamera.md#detachpostprocess)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/freeCamera.pure.ts:455](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/freeCamera.pure.ts#L455)

Destroy the camera and release the current resources hold by it.

#### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`dispose`](VRDeviceOrientationFreeCamera.md#dispose)

***

### enableHorizontalDragging()

> **enableHorizontalDragging**(`dragFactor?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/deviceOrientationCamera.pure.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/deviceOrientationCamera.pure.ts#L70)

Enabled turning on the y axis when the orientation sensor is active

#### Parameters

##### dragFactor?

`number` = `...`

the factor that controls the turn speed (default: 1/300)

#### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`enableHorizontalDragging`](VRDeviceOrientationFreeCamera.md#enablehorizontaldragging)

***

### freezeProjectionMatrix()

> **freezeProjectionMatrix**(`projection?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:933](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L933)

Freeze the projection matrix.
It will prevent the cache check of the camera projection compute and can speed up perf
if no parameter of the camera are meant to change

#### Parameters

##### projection?

[`Matrix`](Matrix.md)

Defines manually a projection if necessary

#### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`freezeProjectionMatrix`](VRDeviceOrientationFreeCamera.md#freezeprojectionmatrix)

***

### getActiveMeshes()

> **getActiveMeshes**(): [`SmartArray`](SmartArray.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:591](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L591)

Gets the list of active meshes this frame (meshes no culled or excluded by lod s in the frame)

#### Returns

[`SmartArray`](SmartArray.md)\<[`AbstractMesh`](AbstractMesh.md)\>

the active meshe list

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getActiveMeshes`](VRDeviceOrientationFreeCamera.md#getactivemeshes)

***

### getAnimationByName()

> **getAnimationByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:801](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L801)

Get an animation by name

#### Parameters

##### name

`string`

defines the name of the animation to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)\>

null if not found else the requested animation

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getAnimationByName`](VRDeviceOrientationFreeCamera.md#getanimationbyname)

***

### getAnimationRange()

> **getAnimationRange**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:850](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L850)

Get an animation range by name

#### Parameters

##### name

`string`

defines the name of the animation range to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>

null if not found else the requested animation range

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getAnimationRange`](VRDeviceOrientationFreeCamera.md#getanimationrange)

***

### getAnimationRanges()

> **getAnimationRanges**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:885](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L885)

Gets the list of all animation ranges defined on this node

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

an array

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getAnimationRanges`](VRDeviceOrientationFreeCamera.md#getanimationranges)

***

### getBehaviorByName()

> **getBehaviorByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:482](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L482)

Gets an attached behavior by name

#### Parameters

##### name

`string`

defines the name of the behavior to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>\>

null if behavior was not found else the requested behavior

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getBehaviorByName`](VRDeviceOrientationFreeCamera.md#getbehaviorbyname)

***

### getChildMeshes()

Get all child-meshes of this node

#### Param

**directDescendantsOnly**

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: false)

#### Param

**predicate**

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Call Signature

> **getChildMeshes**\<`T`\>(`directDescendantsOnly?`, `predicate?`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:727](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L727)

Get all child-meshes of this node

##### Type Parameters

###### T

`T` *extends* [`AbstractMesh`](AbstractMesh.md)

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: false)

###### predicate?

(`node`) => `node is T`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

`T`[]

an array of AbstractMesh

##### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getChildMeshes`](VRDeviceOrientationFreeCamera.md#getchildmeshes)

#### Call Signature

> **getChildMeshes**(`directDescendantsOnly?`, `predicate?`): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:735](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L735)

Get all child-meshes of this node

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: false)

###### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

[`AbstractMesh`](AbstractMesh.md)[]

an array of AbstractMesh

##### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getChildMeshes`](VRDeviceOrientationFreeCamera.md#getchildmeshes)

***

### getChildren()

Get all direct children of this node

#### Param

**predicate**

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Param

**directDescendantsOnly**

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: true)

#### Call Signature

> **getChildren**\<`T`\>(`predicate?`, `directDescendantsOnly?`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:757](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L757)

Get all direct children of this node

##### Type Parameters

###### T

`T` *extends* [`Node`](Node.md)

##### Parameters

###### predicate?

(`node`) => `node is T`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: true)

##### Returns

`T`[]

an array of Node

##### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getChildren`](VRDeviceOrientationFreeCamera.md#getchildren)

#### Call Signature

> **getChildren**(`predicate?`, `directDescendantsOnly?`): [`Node`](Node.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:765](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L765)

Get all direct children of this node

##### Parameters

###### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: true)

##### Returns

[`Node`](Node.md)[]

an array of Node

##### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getChildren`](VRDeviceOrientationFreeCamera.md#getchildren)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrDeviceOrientationGamepadCamera.pure.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrDeviceOrientationGamepadCamera.pure.ts#L33)

Gets camera class name

#### Returns

`string`

VRDeviceOrientationGamepadCamera

#### Overrides

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getClassName`](VRDeviceOrientationFreeCamera.md#getclassname)

***

### getDescendants()

Will return all nodes that have this node as ascendant

#### Param

**directDescendantsOnly**

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

#### Param

**predicate**

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Call Signature

> **getDescendants**\<`T`\>(`directDescendantsOnly?`, `predicate?`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:697](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L697)

Will return all nodes that have this node as ascendant

##### Type Parameters

###### T

`T` *extends* [`Node`](Node.md)

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

###### predicate?

(`node`) => `node is T`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

`T`[]

all children nodes of all types

##### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getDescendants`](VRDeviceOrientationFreeCamera.md#getdescendants)

#### Call Signature

> **getDescendants**(`directDescendantsOnly?`, `predicate?`): [`Node`](Node.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:705](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L705)

Will return all nodes that have this node as ascendant

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

###### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

[`Node`](Node.md)[]

all children nodes of all types

##### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getDescendants`](VRDeviceOrientationFreeCamera.md#getdescendants)

***

### getDirection()

> **getDirection**(`localAxis`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1466](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1466)

Gets the direction of the camera relative to a given local axis.

#### Parameters

##### localAxis

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

Defines the reference axis to provide a relative direction.

#### Returns

[`Vector3`](Vector3.md)

the direction

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getDirection`](VRDeviceOrientationFreeCamera.md#getdirection)

***

### getDirectionToRef()

> **getDirectionToRef**(`localAxis`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1488](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1488)

Gets the direction of the camera relative to a given local axis into a passed vector.

#### Parameters

##### localAxis

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

Defines the reference axis to provide a relative direction.

##### result

[`Vector3`](Vector3.md)

Defines the vector to store the result in

#### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getDirectionToRef`](VRDeviceOrientationFreeCamera.md#getdirectiontoref)

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L407)

Gets the engine of the node

#### Returns

[`AbstractEngine`](AbstractEngine.md)

a Engine

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getEngine`](VRDeviceOrientationFreeCamera.md#getengine)

***

### getForwardRay()

> **getForwardRay**(`length?`, `transform?`, `origin?`): [`Ray`](Ray.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1158)

Gets a ray in the forward direction from the camera.

#### Parameters

##### length?

`number` = `100`

Defines the length of the ray to create

##### transform?

[`Matrix`](Matrix.md)

Defines the transform to apply to the ray, by default the world matrix is used to create a world space ray

##### origin?

[`Vector3`](Vector3.md)

Defines the start point of the ray which defaults to the camera position

#### Returns

[`Ray`](Ray.md)

the forward ray

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getForwardRay`](VRDeviceOrientationFreeCamera.md#getforwardray)

***

### getForwardRayToRef()

> **getForwardRayToRef**(`refRay`, `length?`, `transform?`, `origin?`): [`Ray`](Ray.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1172)

Gets a ray in the forward direction from the camera.

#### Parameters

##### refRay

[`Ray`](Ray.md)

the ray to (re)use when setting the values

##### length?

`number` = `100`

Defines the length of the ray to create

##### transform?

[`Matrix`](Matrix.md)

Defines the transform to apply to the ray, by default the world matrix is used to create a world space ray

##### origin?

[`Vector3`](Vector3.md)

Defines the start point of the ray which defaults to the camera position

#### Returns

[`Ray`](Ray.md)

the forward ray

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getForwardRayToRef`](VRDeviceOrientationFreeCamera.md#getforwardraytoref)

***

### getFrontPosition()

> **getFrontPosition**(`distance`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.pure.ts:186](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCamera.pure.ts#L186)

Gets the position in front of the camera at a given distance.

#### Parameters

##### distance

`number`

The distance from the camera we want the position to be

#### Returns

[`Vector3`](Vector3.md)

the position

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getFrontPosition`](VRDeviceOrientationFreeCamera.md#getfrontposition)

***

### getHierarchyBoundingVectors()

> **getHierarchyBoundingVectors**(`includeDescendants?`, `predicate?`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:1002](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L1002)

Return the minimum and maximum world vectors of the entire hierarchy under current node

#### Parameters

##### includeDescendants?

`boolean` = `true`

Include bounding info from descendants as well (true by default)

##### predicate?

[`Nullable`](../type-aliases/Nullable.md)\<(`abstractMesh`) => `boolean`\> = `null`

defines a callback function that can be customize to filter what meshes should be included in the list used to compute the bounding vectors

#### Returns

`object`

the new bounding vectors

##### max

> **max**: [`Vector3`](Vector3.md)

##### min

> **min**: [`Vector3`](Vector3.md)

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getHierarchyBoundingVectors`](VRDeviceOrientationFreeCamera.md#gethierarchyboundingvectors)

***

### getLeftTarget()

> **getLeftTarget**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1288)

Gets the left camera target of a rig setup in case of Rigged Camera

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

the target position

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getLeftTarget`](VRDeviceOrientationFreeCamera.md#getlefttarget)

***

### getProjectionMatrix()

> **getProjectionMatrix**(`force?`): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:952](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L952)

Gets the current projection matrix of the camera.

#### Parameters

##### force?

`boolean`

forces the camera to recompute the matrix without looking at the cached state

#### Returns

[`Matrix`](Matrix.md)

the projection matrix

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getProjectionMatrix`](VRDeviceOrientationFreeCamera.md#getprojectionmatrix)

***

### getRightTarget()

> **getRightTarget**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1299](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1299)

Gets the right camera target of a rig setup in case of Rigged Camera

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

the target position

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getRightTarget`](VRDeviceOrientationFreeCamera.md#getrighttarget)

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:399](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L399)

Gets the scene of the node

#### Returns

[`Scene`](Scene.md)

a scene

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getScene`](VRDeviceOrientationFreeCamera.md#getscene)

***

### getTarget()

> **getTarget**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.pure.ts:356](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCamera.pure.ts#L356)

Return the current target position of the camera. This value is expressed in local space.

#### Returns

[`Vector3`](Vector3.md)

the target position

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getTarget`](VRDeviceOrientationFreeCamera.md#gettarget)

***

### getTransformationMatrix()

> **getTransformationMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1087](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1087)

Gets the transformation matrix (ie. the multiplication of view by projection matrices)

#### Returns

[`Matrix`](Matrix.md)

a Matrix

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getTransformationMatrix`](VRDeviceOrientationFreeCamera.md#gettransformationmatrix)

***

### getViewMatrix()

> **getViewMatrix**(`force?`): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:895](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L895)

Gets the current view matrix of the camera.

#### Parameters

##### force?

`boolean`

forces the camera to recompute the matrix without looking at the cached state

#### Returns

[`Matrix`](Matrix.md)

the view matrix

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getViewMatrix`](VRDeviceOrientationFreeCamera.md#getviewmatrix)

***

### getWorldMatrix()

> **getWorldMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:874](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L874)

Gets the current world matrix of the camera

#### Returns

[`Matrix`](Matrix.md)

the world matrix

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`getWorldMatrix`](VRDeviceOrientationFreeCamera.md#getworldmatrix)

***

### hasStateStored()

> **hasStateStored**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:514](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L514)

Returns true if a state has been stored by calling storeState method.

#### Returns

`boolean`

true if state has been stored.

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`hasStateStored`](VRDeviceOrientationFreeCamera.md#hasstatestored)

***

### isActiveMesh()

> **isActiveMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:600](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L600)

Check whether a mesh is part of the current active mesh list of the camera

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

Defines the mesh to check

#### Returns

`boolean`

true if active, false otherwise

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`isActiveMesh`](VRDeviceOrientationFreeCamera.md#isactivemesh)

***

### isCompletelyInFrustum()

> **isCompletelyInFrustum**(`target`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1143)

Checks if a cullable object (mesh...) is in the camera frustum
Unlike isInFrustum this checks the full bounding box

#### Parameters

##### target

[`ICullable`](../interfaces/ICullable.md)

The object to check

#### Returns

`boolean`

true if the object is in frustum otherwise false

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`isCompletelyInFrustum`](VRDeviceOrientationFreeCamera.md#iscompletelyinfrustum)

***

### isDescendantOf()

> **isDescendantOf**(`ancestor`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:659](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L659)

Is this node a descendant of the given node?
The function will iterate up the hierarchy until the ancestor was found or no more parents defined

#### Parameters

##### ancestor

[`Node`](Node.md)

defines the parent node to inspect

#### Returns

`boolean`

a boolean indicating if this node is a descendant of the given node

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`isDescendantOf`](VRDeviceOrientationFreeCamera.md#isdescendantof)

***

### isDisposed()

> **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L214)

Gets a boolean indicating if the node has been disposed

#### Returns

`boolean`

true if the node was disposed

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`isDisposed`](VRDeviceOrientationFreeCamera.md#isdisposed)

***

### isEnabled()

> **isEnabled**(`checkAncestors?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:617](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L617)

Is this node enabled?
If the node has a parent, all ancestors will be checked and false will be returned if any are false (not enabled), otherwise will return true

#### Parameters

##### checkAncestors?

`boolean` = `true`

indicates if this method should check the ancestors. The default is to check the ancestors. If set to false, the method will return the value of this node without checking ancestors

#### Returns

`boolean`

whether this node (and its parent) is enabled

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`isEnabled`](VRDeviceOrientationFreeCamera.md#isenabled)

***

### isInFrustum()

> **isInFrustum**(`target`, `checkRigCameras?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1122)

Checks if a cullable object (mesh...) is in the camera frustum
This checks the bounding box center. See isCompletelyInFrustum for a full bounding check

#### Parameters

##### target

[`ICullable`](../interfaces/ICullable.md)

The object to check

##### checkRigCameras?

`boolean` = `false`

If the rig cameras should be checked (eg. with VR camera both eyes should be checked) (Default: false)

#### Returns

`boolean`

true if the object is in frustum otherwise false

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`isInFrustum`](VRDeviceOrientationFreeCamera.md#isinfrustum)

***

### isReady()

> **isReady**(`completeCheck?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:609](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L609)

Is this camera ready to be used/rendered

#### Parameters

##### completeCheck?

`boolean` = `false`

defines if a complete check (including post processes) has to be done (false by default)

#### Returns

`boolean`

true if the camera is ready

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`isReady`](VRDeviceOrientationFreeCamera.md#isready)

***

### markAsDirty()

> **markAsDirty**(`_property?`): [`Node`](Node.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:605](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L605)

Flag the  node as dirty (Forcing it to update everything)

#### Parameters

##### \_property?

`string`

helps children apply precise "dirtyfication"

#### Returns

[`Node`](Node.md)

this node

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`markAsDirty`](VRDeviceOrientationFreeCamera.md#markasdirty)

***

### removeBehavior()

> **removeBehavior**(`behavior`): [`Node`](Node.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:451](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L451)

Remove an attached behavior

#### Parameters

##### behavior

[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>

defines the behavior to attach

#### Returns

[`Node`](Node.md)

the current Node

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`removeBehavior`](VRDeviceOrientationFreeCamera.md#removebehavior)

***

### resetToCurrentRotation()

> **resetToCurrentRotation**(`axis?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/deviceOrientationCamera.pure.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/deviceOrientationCamera.pure.ts#L101)

Reset the camera to its default orientation on the specified axis only.

#### Parameters

##### axis?

[`Axis`](Axis.md) = `Axis.Y`

The axis to reset

#### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`resetToCurrentRotation`](VRDeviceOrientationFreeCamera.md#resettocurrentrotation)

***

### restoreState()

> **restoreState**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:535](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L535)

Restored camera state. You must call storeState() first.

#### Returns

`boolean`

true if restored and false otherwise

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`restoreState`](VRDeviceOrientationFreeCamera.md#restorestate)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1418](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1418)

Serialiaze the camera setup to a json representation

#### Returns

`any`

the JSON representation

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`serialize`](VRDeviceOrientationFreeCamera.md#serialize)

***

### serializeAnimationRanges()

> **serializeAnimationRanges**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:916](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L916)

Serialize animation ranges into a JSON compatible object

#### Returns

`any`

serialization object

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`serializeAnimationRanges`](VRDeviceOrientationFreeCamera.md#serializeanimationranges)

***

### setEnabled()

> **setEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:644](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L644)

Set the enabled state of this node

#### Parameters

##### value

`boolean`

defines the new enabled state

#### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`setEnabled`](VRDeviceOrientationFreeCamera.md#setenabled)

***

### setFocalLength()

> **setFocalLength**(`value`, `sensorSize?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L271)

Sets the camera's field of view in radians based on the focal length and sensor size.

#### Parameters

##### value

`number`

the focal length of the camera in mm.

##### sensorSize?

`number` = `36`

the sensor width size of the camera in mm. (default is 36mm, which is a full frame sensor)

#### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`setFocalLength`](VRDeviceOrientationFreeCamera.md#setfocallength)

***

### setTarget()

> **setTarget**(`target`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.pure.ts:314](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCamera.pure.ts#L314)

Defines the target the camera should look at.

#### Parameters

##### target

[`Vector3`](Vector3.md)

Defines the new target as a Vector

#### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`setTarget`](VRDeviceOrientationFreeCamera.md#settarget)

***

### storeState()

> **storeState**(): [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.pure.ts:220](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/targetCamera.pure.ts#L220)

Store current camera state of the camera (fov, position, rotation, etc..)

#### Returns

[`Camera`](Camera.md)

the camera

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`storeState`](VRDeviceOrientationFreeCamera.md#storestate)

***

### toString()

> **toString**(`fullDetails?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:560](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L560)

Gets a string representation of the camera useful for debug purpose.

#### Parameters

##### fullDetails?

`boolean`

Defines that a more verbose level of logging is required

#### Returns

`string`

the string representation

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`toString`](VRDeviceOrientationFreeCamera.md#tostring)

***

### unfreezeProjectionMatrix()

> **unfreezeProjectionMatrix**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:943](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L943)

Unfreeze the projection matrix if it has previously been freezed by freezeProjectionMatrix.

#### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`unfreezeProjectionMatrix`](VRDeviceOrientationFreeCamera.md#unfreezeprojectionmatrix)

***

### update()

> **update**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:750](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L750)

Update the camera state according to the different inputs gathered during the frame.

#### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`update`](VRDeviceOrientationFreeCamera.md#update)

***

### AddNodeConstructor()

> `static` **AddNodeConstructor**(`type`, `constructorFunc`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L61)

Add a new node constructor

#### Parameters

##### type

`string`

defines the type name of the node to construct

##### constructorFunc

[`NodeConstructor`](../type-aliases/NodeConstructor.md)

defines the constructor function

#### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`AddNodeConstructor`](VRDeviceOrientationFreeCamera.md#addnodeconstructor)

***

### Construct()

> `static` **Construct**(`type`, `name`, `scene`, `options?`): [`Nullable`](../type-aliases/Nullable.md)\<() => [`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L73)

Returns a node constructor based on type name

#### Parameters

##### type

`string`

defines the type name

##### name

`string`

defines the new node name

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### options?

`any`

defines optional options to transmit to constructors

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<() => [`Node`](Node.md)\>

the new constructor or null

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`Construct`](VRDeviceOrientationFreeCamera.md#construct)

***

### GetConstructorFromName()

> `static` **GetConstructorFromName**(`type`, `name`, `scene`, `interaxial_distance?`, `isStereoscopicSideBySide?`): () => [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1502](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1502)

Gets a camera constructor for a given camera type

#### Parameters

##### type

`string`

The type of the camera to construct (should be equal to one of the camera class name)

##### name

`string`

The name of the camera the result will be able to instantiate

##### scene

[`Scene`](Scene.md)

The scene the result will construct the camera in

##### interaxial\_distance?

`number` = `0`

In case of stereoscopic setup, the distance between both eyes

##### isStereoscopicSideBySide?

`boolean` = `true`

In case of stereoscopic setup, should the sereo be side b side

#### Returns

a factory method to construct the camera

() => [`Camera`](Camera.md)

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`GetConstructorFromName`](VRDeviceOrientationFreeCamera.md#getconstructorfromname)

***

### ParseAnimationRanges()

> `static` **ParseAnimationRanges**(`node`, `parsedNode`, `_scene`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:988](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L988)

Parse animation range data from a serialization object and store them into a given node

#### Parameters

##### node

[`Node`](Node.md)

defines where to store the animation ranges

##### parsedNode

`any`

defines the serialization object to read data from

##### \_scene

[`Scene`](Scene.md)

defines the hosting scene

#### Returns

`void`

#### Inherited from

[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md).[`ParseAnimationRanges`](VRDeviceOrientationFreeCamera.md#parseanimationranges)
