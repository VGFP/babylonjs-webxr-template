[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Camera

# Class: Camera

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L47)

This is the base class of all the camera used in the application.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras

## Extends

- [`Node`](Node.md)

## Extended by

- [`TargetCamera`](TargetCamera.md)
- [`GeospatialCamera`](GeospatialCamera.md)

## Constructors

### Constructor

> **new Camera**(`name`, `position`, `scene?`, `setActiveOnSceneIfNoneActive?`): `Camera`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:484](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L484)

Instantiates a new camera object.
This should not be used directly but through the inherited cameras: ArcRotate, Free...

#### Parameters

##### name

`string`

Defines the name of the camera in the scene

##### position

[`Vector3`](Vector3.md)

Defines the position of the camera

##### scene?

[`Scene`](Scene.md)

Defines the scene the camera belongs too

##### setActiveOnSceneIfNoneActive?

`boolean` = `true`

Defines if the camera should be set as active after creation if no other camera have been defined in the scene

#### Returns

`Camera`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras

#### Overrides

[`Node`](Node.md).[`constructor`](Node.md#constructor)

## Properties

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L173)

Gets a list of Animations associated with the node

#### Inherited from

[`Node`](Node.md).[`animations`](Node.md#animations)

***

### cameraRigMode

> **cameraRigMode**: `number` = `Camera.RIG_MODE_NONE`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:364](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L364)

Rig mode of the camera.
This is useful to create the camera with two "eyes" instead of one to create VR or stereoscopic scenes.
This is normally controlled byt the camera themselves as internal use.

***

### customRenderTargets

> **customRenderTargets**: [`RenderTargetTexture`](RenderTargetTexture.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:391](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L391)

Defines the list of custom render target which are rendered to and then used as the input to this camera's render. Eg. display another camera view on a TV in the main scene
This is pretty helpful if you wish to make a camera render to a texture you could reuse somewhere
else in the scene. (Eg. security camera)

To change the final output target of the camera, camera.outputRenderTarget should be used instead (eg. webXR renders to a render target corresponding to an HMD)

***

### fov

> **fov**: `number` = `0.8`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L264)

Field Of View is set in Radians. (default is 0.8)

***

### fovMode

> **fovMode**: `number` = `Camera.FOVMODE_VERTICAL_FIXED`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:356](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L356)

fovMode sets the camera frustum bounds to the viewport bounds. (default is FOVMODE_VERTICAL_FIXED)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L95)

Gets or sets the id of the node

#### Inherited from

[`Node`](Node.md).[`id`](Node.md#id)

***

### ignoreCameraMaxZ

> **ignoreCameraMaxZ**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:382](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L382)

Ignores camera maxZ when computing the projection matrix (ie. use 0 instead of maxZ), meaning objects won't be culled by the far plane

***

### inputs

> **inputs**: [`CameraInputsManager`](CameraInputsManager.md)\<`Camera`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L122)

Define the input manager associated with the camera.

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L127)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`Node`](Node.md).[`inspectableCustomProperties`](Node.md#inspectablecustomproperties)

***

### interaxialDistance

> **interaxialDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:370](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L370)

Defines the distance between both "eyes" in case of a RIG

***

### isIntermediate

> **isIntermediate**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L337)

Define whether the camera is intermediate.
This is useful to not present the output directly to the screen in case of rig without post process for instance

***

### isRigCamera

> **isRigCamera**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:421](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L421)

Is this camera a part of a rig system?

***

### isStereoscopicSideBySide

> **isStereoscopicSideBySide**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:376](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L376)

Defines if stereoscopic rendering is done side by side or over under.

***

### layerMask

> **layerMask**: `number` = `0x0fffffff`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L350)

Restricts the camera to viewing objects with the same layerMask.
A camera with a layerMask of 1 will render mesh.layerMask & camera.layerMask!== 0

***

### maxZ

> **maxZ**: `number` = `10000.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:297](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L297)

Define the maximum distance the camera can see to.  (default is 10000)
This is important to note that the depth buffer are not infinite and the further it end
the more your scene might encounter depth fighting issue.

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L113)

Gets or sets an object used to store user defined information for the node

#### Inherited from

[`Node`](Node.md).[`metadata`](Node.md#metadata)

***

### minZ

> **minZ**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:289](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L289)

Define the minimum distance the camera can see from.
This is important to note that the depth buffer are not infinite and the closer it starts
the more your scene might encounter depth fighting issue.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L89)

Gets or sets the name of the node

#### Inherited from

[`Node`](Node.md).[`name`](Node.md#name)

***

### oblique

> **oblique**: [`Nullable`](../type-aliases/Nullable.md)\<[`IObliqueParams`](../interfaces/IObliqueParams.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L157)

Object containing oblique projection values (only used with ORTHOGRAPHIC_CAMERA)

***

### onAccessibilityTagChangedObservable

> **onAccessibilityTagChangedObservable**: [`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L146)

Observable fired when an accessibility tag is changed

#### Inherited from

[`WebXRCamera`](WebXRCamera.md).[`onAccessibilityTagChangedObservable`](WebXRCamera.md#onaccessibilitytagchangedobservable)

***

### onAfterCheckInputsObservable

> **onAfterCheckInputsObservable**: [`Observable`](Observable.md)\<`Camera`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:412](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L412)

Observable triggered when the inputs have been processed.

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L350)

An event triggered when the mesh is disposed

#### Inherited from

[`WebXRCamera`](WebXRCamera.md).[`onDisposeObservable`](WebXRCamera.md#ondisposeobservable)

***

### onProjectionMatrixChangedObservable

> **onProjectionMatrixChangedObservable**: [`Observable`](Observable.md)\<`Camera`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:408](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L408)

Observable triggered when the camera Projection matrix has changed.

***

### onReady

> **onReady**: [`Nullable`](../type-aliases/Nullable.md)\<(`node`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L179)

Callback raised when the node is ready to be used

#### Inherited from

[`Node`](Node.md).[`onReady`](Node.md#onready)

***

### onRestoreStateObservable

> **onRestoreStateObservable**: [`Observable`](Observable.md)\<`Camera`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:416](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L416)

Observable triggered when reset has been called and applied to the camera.

***

### onViewMatrixChangedObservable

> **onViewMatrixChangedObservable**: [`Observable`](Observable.md)\<`Camera`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:404](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L404)

Observable triggered when the camera view matrix has changed.
Beware of reentrance! Some methods like Camera.getViewMatrix and Camera.getWorldMatrix can trigger the onViewMatrixChangedObservable
observable, so using them inside an observer will require additional logic to avoid a stack overflow error.

***

### outputRenderTarget

> **outputRenderTarget**: [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:397](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L397)

When set, the camera will render to this render target instead of the default canvas

If the desire is to use the output of a camera as a texture in the scene consider using camera.customRenderTargets instead

***

### projectionPlaneTilt

> **projectionPlaneTilt**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:281](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L281)

Projection plane tilt around the X axis (horizontal), set in Radians. (default is 0)
Can be used to make vertical lines in world space actually vertical on the screen.
See https://forum.babylonjs.com/t/add-vertical-shift-to-3ds-max-exporter-babylon-cameras/17480

***

### renderPassId

> **renderPassId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:432](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L432)

Render pass id used by the camera to render into the main framebuffer

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L121)

For internal use only. Please do not use.

#### Inherited from

[`Node`](Node.md).[`reservedDataStore`](Node.md#reserveddatastore)

***

### rigParent?

> `optional` **rigParent?**: `Camera`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:427](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L427)

If isRigCamera set to true this will be set with the parent camera.
The parent camera is not (!) necessarily the .parent of this camera (like in the case of XR)

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L107)

Gets or sets a string used to store user defined state for the node

#### Inherited from

[`WebXRCamera`](WebXRCamera.md).[`state`](WebXRCamera.md#state)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L101)

Gets or sets the unique id of the node

#### Inherited from

[`Node`](Node.md).[`uniqueId`](Node.md#uniqueid)

***

### viewport

> **viewport**: [`Viewport`](Viewport.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:343](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L343)

Define the viewport of the camera.
This correspond to the portion of the screen the camera will render to in normalized 0 to 1 unit.

***

### ForceAttachControlToAlwaysPreventDefault

> `static` **ForceAttachControlToAlwaysPreventDefault**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L117)

Defines if by default attaching controls should prevent the default javascript event to continue.

***

### FOVMODE\_HORIZONTAL\_FIXED

> `readonly` `static` **FOVMODE\_HORIZONTAL\_FIXED**: `1` = `Constants.FOVMODE_HORIZONTAL_FIXED`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L76)

This setting aligns the left and right bounds of the viewport to the left and right bounds of the camera frustum.

***

### FOVMODE\_VERTICAL\_FIXED

> `readonly` `static` **FOVMODE\_VERTICAL\_FIXED**: `0` = `Constants.FOVMODE_VERTICAL_FIXED`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L72)

This is the default FOV mode for perspective cameras.
This setting aligns the upper and lower bounds of the viewport to the upper and lower bounds of the camera frustum.

***

### ORTHOGRAPHIC\_CAMERA

> `readonly` `static` **ORTHOGRAPHIC\_CAMERA**: `1` = `Constants.ORTHOGRAPHIC_CAMERA`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L66)

This helps creating camera with an orthographic mode.
Orthographic is commonly used in engineering as a means to produce object specifications that communicate dimensions unambiguously, each line of 1 unit length (cm, meter..whatever) will appear to have the same length everywhere on the drawing. This allows the drafter to dimension only a subset of lines and let the reader know that other lines of that length on the drawing are also that length in reality. Every parallel line in the drawing is also parallel in the object.

***

### PERSPECTIVE\_CAMERA

> `readonly` `static` **PERSPECTIVE\_CAMERA**: `0` = `Constants.PERSPECTIVE_CAMERA`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L61)

This is the default projection mode used by the cameras.
It helps recreating a feeling of perspective and better appreciate depth.
This is the best way to simulate real life cameras.

***

### RIG\_MODE\_CUSTOM

> `readonly` `static` **RIG\_MODE\_CUSTOM**: `22` = `Constants.RIG_MODE_CUSTOM`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L112)

Custom rig mode allowing rig cameras to be populated manually with any number of cameras

***

### RIG\_MODE\_NONE

> `readonly` `static` **RIG\_MODE\_NONE**: `0` = `Constants.RIG_MODE_NONE`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L82)

This specifies there is no need for a camera rig.
Basically only one eye is rendered corresponding to the camera.

***

### RIG\_MODE\_STEREOSCOPIC\_ANAGLYPH

> `readonly` `static` **RIG\_MODE\_STEREOSCOPIC\_ANAGLYPH**: `10` = `Constants.RIG_MODE_STEREOSCOPIC_ANAGLYPH`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L87)

Simulates a camera Rig with one blue eye and one red eye.
This can be use with 3d blue and red glasses.

***

### RIG\_MODE\_STEREOSCOPIC\_INTERLACED

> `readonly` `static` **RIG\_MODE\_STEREOSCOPIC\_INTERLACED**: `14` = `Constants.RIG_MODE_STEREOSCOPIC_INTERLACED`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L103)

Defines that both eyes of the camera will be rendered on successive lines interlaced for passive 3d monitors.

***

### RIG\_MODE\_STEREOSCOPIC\_OVERUNDER

> `readonly` `static` **RIG\_MODE\_STEREOSCOPIC\_OVERUNDER**: `13` = `Constants.RIG_MODE_STEREOSCOPIC_OVERUNDER`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L99)

Defines that both eyes of the camera will be rendered over under each other.

***

### RIG\_MODE\_STEREOSCOPIC\_SIDEBYSIDE\_CROSSEYED

> `readonly` `static` **RIG\_MODE\_STEREOSCOPIC\_SIDEBYSIDE\_CROSSEYED**: `12` = `Constants.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L95)

Defines that both eyes of the camera will be rendered side by side with a none parallel target.

***

### RIG\_MODE\_STEREOSCOPIC\_SIDEBYSIDE\_PARALLEL

> `readonly` `static` **RIG\_MODE\_STEREOSCOPIC\_SIDEBYSIDE\_PARALLEL**: `11` = `Constants.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L91)

Defines that both eyes of the camera will be rendered side by side with a parallel target.

***

### RIG\_MODE\_VR

> `readonly` `static` **RIG\_MODE\_VR**: `20` = `Constants.RIG_MODE_VR`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L108)

Defines that both eyes of the camera should be renderered in a VR mode (carbox).

## Accessors

### absoluteRotation

#### Get Signature

> **get** **absoluteRotation**(): [`Quaternion`](Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1477](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1477)

Returns the current camera absolute rotation

##### Returns

[`Quaternion`](Quaternion.md)

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

[`Node`](Node.md).[`accessibilityTag`](Node.md#accessibilitytag)

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

[`Node`](Node.md).[`animationPropertiesOverride`](Node.md#animationpropertiesoverride)

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

[`Node`](Node.md).[`behaviors`](Node.md#behaviors)

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

[`Node`](Node.md).[`doNotSerialize`](Node.md#donotserialize)

***

### globalPosition

#### Get Signature

> **get** **globalPosition**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:583](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L583)

Gets the current world space position of the camera.

##### Returns

[`Vector3`](Vector3.md)

***

### hasMoved

#### Get Signature

> **get** **hasMoved**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:439](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L439)

Gets a flag indicating that the camera has moved in some way since the last call to Camera.update()

##### Returns

`boolean`

***

### inertia

#### Get Signature

> **get** **inertia**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:304](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L304)

Define the default inertia of the camera.
This helps giving a smooth feeling to the camera movement.

##### Returns

`number`

#### Set Signature

> **set** **inertia**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:308](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L308)

##### Parameters

###### value

`number`

##### Returns

`void`

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

[`Node`](Node.md).[`inheritVisibility`](Node.md#inheritvisibility)

***

### isLeftCamera

#### Get Signature

> **get** **isLeftCamera**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1251)

Gets the left camera of a rig setup in case of Rigged Camera

##### Returns

`boolean`

***

### isRightCamera

#### Get Signature

> **get** **isRightCamera**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1260)

Gets the right camera of a rig setup in case of Rigged Camera

##### Returns

`boolean`

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

[`Node`](Node.md).[`isVisible`](Node.md#isvisible)

***

### leftCamera

#### Get Signature

> **get** **leftCamera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FreeCamera`](FreeCamera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1267](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1267)

Gets the left camera of a rig setup in case of Rigged Camera

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FreeCamera`](FreeCamera.md)\>

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

***

### onClonedObservable

#### Get Signature

> **get** **onClonedObservable**(): [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L373)

An event triggered when the node is cloned

##### Returns

[`Observable`](Observable.md)\<[`Node`](Node.md)\>

#### Inherited from

[`Node`](Node.md).[`onClonedObservable`](Node.md#onclonedobservable)

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

[`Node`](Node.md).[`onDispose`](Node.md#ondispose)

***

### onEnabledStateChangedObservable

#### Get Signature

> **get** **onEnabledStateChangedObservable**(): [`Observable`](Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:366](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L366)

An event triggered when the enabled state of the node changes

##### Returns

[`Observable`](Observable.md)\<`boolean`\>

#### Inherited from

[`Node`](Node.md).[`onEnabledStateChangedObservable`](Node.md#onenabledstatechangedobservable)

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

[`Node`](Node.md).[`parent`](Node.md#parent)

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

***

### rightCamera

#### Get Signature

> **get** **rightCamera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FreeCamera`](FreeCamera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1277](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1277)

Gets the right camera of a rig setup in case of Rigged Camera

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FreeCamera`](FreeCamera.md)\>

***

### rigPostProcess

#### Get Signature

> **get** **rigPostProcess**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:777](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L777)

Gets the post process used by the rig cameras

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

***

### screenArea

#### Get Signature

> **get** **screenArea**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L162)

The screen area in scene units squared

##### Returns

`number`

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

[`Node`](Node.md).[`worldMatrixFromCache`](Node.md#worldmatrixfromcache)

## Methods

### \_getFirstPostProcess()

> **\_getFirstPostProcess**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:785](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L785)

Internal, gets the first post process.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

the first post process to be run on this camera.

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

[`Node`](Node.md).[`addBehavior`](Node.md#addbehavior)

***

### applyVerticalCorrection()

> **applyVerticalCorrection**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:574](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L574)

Automatically tilts the projection plane, using `projectionPlaneTilt`, to correct the perspective effect on vertical lines.

#### Returns

`void`

***

### attachControl()

Attach the input controls to a specific dom element to get the input from.
This function is here because typescript removes the typing of the last function.

#### Param

**\_ignored**

defines an ignored parameter kept for backward compatibility.

#### Param

**\_noPreventDefault**

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

#### Call Signature

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:715](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L715)

Attach the input controls to a specific dom element to get the input from.

##### Parameters

###### noPreventDefault?

`boolean`

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

##### Returns

`void`

#### Call Signature

> **attachControl**(`ignored`, `noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:722](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L722)

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

[`Node`](Node.md).[`beginAnimation`](Node.md#beginanimation)

***

### clone()

> **clone**(`name`, `newParent?`): `Camera`

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

`Camera`

the cloned camera

#### Overrides

[`Node`](Node.md).[`clone`](Node.md#clone)

***

### computeWorldMatrix()

> **computeWorldMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1520](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1520)

Compute the world  matrix of the camera.

#### Returns

[`Matrix`](Matrix.md)

the camera world matrix

#### Overrides

[`Node`](Node.md).[`computeWorldMatrix`](Node.md#computeworldmatrix)

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

[`Node`](Node.md).[`createAnimationRange`](Node.md#createanimationrange)

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

[`Node`](Node.md).[`deleteAnimationRange`](Node.md#deleteanimationrange)

***

### detachControl()

Detach the current controls from the specified dom element.
This function is here because typescript removes the typing of the last function.

#### Param

**\_ignored**

defines an ignored parameter kept for backward compatibility.

#### Call Signature

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:734](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L734)

Detach the current controls from the specified dom element.

##### Returns

`void`

#### Call Signature

> **detachControl**(`ignored?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:739](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L739)

Detach the current controls from the specified dom element.

##### Parameters

###### ignored?

`any`

defines an ignored parameter kept for backward compatibility.

##### Returns

`void`

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

***

### dispose()

> **dispose**(`doNotRecurse?`, `disposeMaterialAndTextures?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1181)

Releases resources associated with this node.

#### Parameters

##### doNotRecurse?

`boolean`

Set to true to not recurse into each children (recurse into each children by default)

##### disposeMaterialAndTextures?

`boolean` = `false`

Set to true to also dispose referenced materials and textures (false by default)

#### Returns

`void`

#### Overrides

[`Node`](Node.md).[`dispose`](Node.md#dispose)

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

***

### getActiveMeshes()

> **getActiveMeshes**(): [`SmartArray`](SmartArray.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:591](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L591)

Gets the list of active meshes this frame (meshes no culled or excluded by lod s in the frame)

#### Returns

[`SmartArray`](SmartArray.md)\<[`AbstractMesh`](AbstractMesh.md)\>

the active meshe list

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

[`Node`](Node.md).[`getAnimationByName`](Node.md#getanimationbyname)

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

[`Node`](Node.md).[`getAnimationRange`](Node.md#getanimationrange)

***

### getAnimationRanges()

> **getAnimationRanges**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:885](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L885)

Gets the list of all animation ranges defined on this node

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

an array

#### Inherited from

[`Node`](Node.md).[`getAnimationRanges`](Node.md#getanimationranges)

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

[`Node`](Node.md).[`getBehaviorByName`](Node.md#getbehaviorbyname)

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

[`Node`](Node.md).[`getChildMeshes`](Node.md#getchildmeshes)

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

[`Node`](Node.md).[`getChildMeshes`](Node.md#getchildmeshes)

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

[`Node`](Node.md).[`getChildren`](Node.md#getchildren)

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

[`Node`](Node.md).[`getChildren`](Node.md#getchildren)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:548](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L548)

Gets the class name of the camera.

#### Returns

`string`

the class name

#### Overrides

[`Node`](Node.md).[`getClassName`](Node.md#getclassname)

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

[`Node`](Node.md).[`getDescendants`](Node.md#getdescendants)

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

[`Node`](Node.md).[`getDescendants`](Node.md#getdescendants)

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

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L407)

Gets the engine of the node

#### Returns

[`AbstractEngine`](AbstractEngine.md)

a Engine

#### Inherited from

[`Node`](Node.md).[`getEngine`](Node.md#getengine)

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

[`Node`](Node.md).[`getHierarchyBoundingVectors`](Node.md#gethierarchyboundingvectors)

***

### getLeftTarget()

> **getLeftTarget**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1288)

Gets the left camera target of a rig setup in case of Rigged Camera

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

the target position

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

***

### getRightTarget()

> **getRightTarget**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1299](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1299)

Gets the right camera target of a rig setup in case of Rigged Camera

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

the target position

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:399](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L399)

Gets the scene of the node

#### Returns

[`Scene`](Scene.md)

a scene

#### Inherited from

[`Node`](Node.md).[`getScene`](Node.md#getscene)

***

### getTransformationMatrix()

> **getTransformationMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1087](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1087)

Gets the transformation matrix (ie. the multiplication of view by projection matrices)

#### Returns

[`Matrix`](Matrix.md)

a Matrix

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

***

### getWorldMatrix()

> **getWorldMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:874](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L874)

Gets the current world matrix of the camera

#### Returns

[`Matrix`](Matrix.md)

the world matrix

#### Overrides

[`Node`](Node.md).[`getWorldMatrix`](Node.md#getworldmatrix)

***

### hasStateStored()

> **hasStateStored**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:514](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L514)

Returns true if a state has been stored by calling storeState method.

#### Returns

`boolean`

true if state has been stored.

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

[`Node`](Node.md).[`isDescendantOf`](Node.md#isdescendantof)

***

### isDisposed()

> **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L214)

Gets a boolean indicating if the node has been disposed

#### Returns

`boolean`

true if the node was disposed

#### Inherited from

[`Node`](Node.md).[`isDisposed`](Node.md#isdisposed)

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

[`Node`](Node.md).[`isEnabled`](Node.md#isenabled)

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

#### Overrides

[`Node`](Node.md).[`isReady`](Node.md#isready)

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

[`Node`](Node.md).[`markAsDirty`](Node.md#markasdirty)

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

[`Node`](Node.md).[`removeBehavior`](Node.md#removebehavior)

***

### restoreState()

> **restoreState**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:535](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L535)

Restored camera state. You must call storeState() first.

#### Returns

`boolean`

true if restored and false otherwise

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:1418](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L1418)

Serialiaze the camera setup to a json representation

#### Returns

`any`

the JSON representation

***

### serializeAnimationRanges()

> **serializeAnimationRanges**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:916](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L916)

Serialize animation ranges into a JSON compatible object

#### Returns

`any`

serialization object

#### Inherited from

[`Node`](Node.md).[`serializeAnimationRanges`](Node.md#serializeanimationranges)

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

[`Node`](Node.md).[`setEnabled`](Node.md#setenabled)

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

***

### storeState()

> **storeState**(): `Camera`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:503](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L503)

Store current camera state (fov, position, etc..)

#### Returns

`Camera`

the camera

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

***

### unfreezeProjectionMatrix()

> **unfreezeProjectionMatrix**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:943](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L943)

Unfreeze the projection matrix if it has previously been freezed by freezeProjectionMatrix.

#### Returns

`void`

***

### update()

> **update**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.pure.ts:750](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/camera.pure.ts#L750)

Update the camera state according to the different inputs gathered during the frame.

#### Returns

`void`

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

[`Node`](Node.md).[`AddNodeConstructor`](Node.md#addnodeconstructor)

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

[`Node`](Node.md).[`Construct`](Node.md#construct)

***

### GetConstructorFromName()

> `static` **GetConstructorFromName**(`type`, `name`, `scene`, `interaxial_distance?`, `isStereoscopicSideBySide?`): () => `Camera`

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

() => `Camera`

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

[`Node`](Node.md).[`ParseAnimationRanges`](Node.md#parseanimationranges)
