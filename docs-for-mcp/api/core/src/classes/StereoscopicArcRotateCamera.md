[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / StereoscopicArcRotateCamera

# Class: StereoscopicArcRotateCamera

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Stereoscopic/stereoscopicArcRotateCamera.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Stereoscopic/stereoscopicArcRotateCamera.ts#L16)

Camera used to simulate stereoscopic rendering (based on ArcRotateCamera)

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras

## Extends

- [`ArcRotateCamera`](ArcRotateCamera.md)

## Constructors

### Constructor

> **new StereoscopicArcRotateCamera**(`name`, `alpha`, `beta`, `radius`, `target`, `interaxialDistance`, `isStereoscopicSideBySide`, `scene?`): `StereoscopicArcRotateCamera`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Stereoscopic/stereoscopicArcRotateCamera.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Stereoscopic/stereoscopicArcRotateCamera.ts#L28)

Creates a new StereoscopicArcRotateCamera

#### Parameters

##### name

`string`

defines camera name

##### alpha

`number`

defines alpha angle (in radians)

##### beta

`number`

defines beta angle (in radians)

##### radius

`number`

defines radius

##### target

[`Vector3`](Vector3.md)

defines camera target

##### interaxialDistance

`number`

defines distance between each color axis

##### isStereoscopicSideBySide

`boolean`

defines is stereoscopic is done side by side or over under

##### scene?

[`Scene`](Scene.md)

defines the hosting scene

#### Returns

`StereoscopicArcRotateCamera`

#### Overrides

[`ArcRotateCamera`](ArcRotateCamera.md).[`constructor`](ArcRotateCamera.md#constructor)

## Properties

### allowUpsideDown

> **allowUpsideDown**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:572](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L572)

Allows the camera to be completely reversed.
If false the camera can not arrive upside down.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`allowUpsideDown`](ArcRotateCamera.md#allowupsidedown)

***

### alpha

> **alpha**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L76)

Defines the rotation angle of the camera along the longitudinal axis.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`alpha`](ArcRotateCamera.md#alpha)

***

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L173)

Gets a list of Animations associated with the node

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`animations`](ArcRotateCamera.md#animations)

***

### beta

> **beta**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L82)

Defines the rotation angle of the camera along the latitudinal axis.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`beta`](ArcRotateCamera.md#beta)

***

### cameraDirection

> **cameraDirection**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/targetCamera.ts#L32)

Define the current direction the camera is moving to

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`cameraDirection`](ArcRotateCamera.md#cameradirection)

***

### cameraRigMode

> **cameraRigMode**: `number` = `Camera.RIG_MODE_NONE`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:354](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L354)

Rig mode of the camera.
This is useful to create the camera with two "eyes" instead of one to create VR or stereoscopic scenes.
This is normally controlled byt the camera themselves as internal use.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`cameraRigMode`](ArcRotateCamera.md#camerarigmode)

***

### cameraRotation

> **cameraRotation**: [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/targetCamera.ts#L36)

Define the current rotation the camera is rotating to

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`cameraRotation`](ArcRotateCamera.md#camerarotation)

***

### checkCollisions

> **checkCollisions**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:735](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L735)

Defines whether the camera should check collision with the objects oh the scene.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions#how-can-i-do-this-

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`checkCollisions`](ArcRotateCamera.md#checkcollisions)

***

### collisionRadius

> **collisionRadius**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:742](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L742)

Defines the collision radius of the camera.
This simulates a sphere around the camera.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions#arcrotatecamera

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`collisionRadius`](ArcRotateCamera.md#collisionradius)

***

### customRenderTargets

> **customRenderTargets**: [`RenderTargetTexture`](RenderTargetTexture.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:381](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L381)

Defines the list of custom render target which are rendered to and then used as the input to this camera's render. Eg. display another camera view on a TV in the main scene
This is pretty helpful if you wish to make a camera render to a texture you could reuse somewhere
else in the scene. (Eg. security camera)

To change the final output target of the camera, camera.outputRenderTarget should be used instead (eg. webXR renders to a render target corresponding to an HMD)

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`customRenderTargets`](ArcRotateCamera.md#customrendertargets)

***

### fov

> **fov**: `number` = `0.8`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:262](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L262)

Field Of View is set in Radians. (default is 0.8)

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`fov`](ArcRotateCamera.md#fov)

***

### fovMode

> **fovMode**: `number` = `Camera.FOVMODE_VERTICAL_FIXED`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:346](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L346)

fovMode sets the camera frustum bounds to the viewport bounds. (default is FOVMODE_VERTICAL_FIXED)

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`fovMode`](ArcRotateCamera.md#fovmode)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L95)

Gets or sets the id of the node

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`id`](ArcRotateCamera.md#id)

***

### ignoreCameraMaxZ

> **ignoreCameraMaxZ**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:372](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L372)

Ignores camera maxZ when computing the projection matrix (ie. use 0 instead of maxZ), meaning objects won't be culled by the far plane

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`ignoreCameraMaxZ`](ArcRotateCamera.md#ignorecameramaxz)

***

### inertia

> **inertia**: `number` = `0.9`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L302)

Define the default inertia of the camera.
This helps giving a smooth feeling to the camera movement.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`inertia`](ArcRotateCamera.md#inertia)

***

### inertialAlphaOffset

> **inertialAlphaOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:188](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L188)

Current inertia value on the longitudinal axis.
The bigger this number the longer it will take for the camera to stop.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`inertialAlphaOffset`](ArcRotateCamera.md#inertialalphaoffset)

***

### inertialBetaOffset

> **inertialBetaOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L195)

Current inertia value on the latitudinal axis.
The bigger this number the longer it will take for the camera to stop.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`inertialBetaOffset`](ArcRotateCamera.md#inertialbetaoffset)

***

### inertialPanningX

> **inertialPanningX**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:258](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L258)

Defines the current inertia value used during panning of the camera along the X axis.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`inertialPanningX`](ArcRotateCamera.md#inertialpanningx)

***

### inertialPanningY

> **inertialPanningY**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:264](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L264)

Defines the current inertia value used during panning of the camera along the Y axis.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`inertialPanningY`](ArcRotateCamera.md#inertialpanningy)

***

### inertialRadiusOffset

> **inertialRadiusOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:202](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L202)

Current inertia value on the radius axis.
The bigger this number the longer it will take for the camera to stop.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`inertialRadiusOffset`](ArcRotateCamera.md#inertialradiusoffset)

***

### inputs

> **inputs**: [`ArcRotateCameraInputsManager`](ArcRotateCameraInputsManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:598](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L598)

Defines the input associated to the camera.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`inputs`](ArcRotateCamera.md#inputs)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L127)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`inspectableCustomProperties`](ArcRotateCamera.md#inspectablecustomproperties)

***

### interaxialDistance

> **interaxialDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:360](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L360)

Defines the distance between both "eyes" in case of a RIG

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`interaxialDistance`](ArcRotateCamera.md#interaxialdistance)

***

### inverseRotationSpeed

> **inverseRotationSpeed**: `number` = `0.2`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/targetCamera.ts#L76)

Speed multiplier for inverse camera panning

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`inverseRotationSpeed`](ArcRotateCamera.md#inverserotationspeed)

***

### invertRotation

> **invertRotation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/targetCamera.ts#L71)

Reverses mouselook direction to 'natural' panning as opposed to traditional direct
panning

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`invertRotation`](ArcRotateCamera.md#invertrotation)

***

### isIntermediate

> **isIntermediate**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:327](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L327)

Define whether the camera is intermediate.
This is useful to not present the output directly to the screen in case of rig without post process for instance

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`isIntermediate`](ArcRotateCamera.md#isintermediate)

***

### isRigCamera

> **isRigCamera**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:411](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L411)

Is this camera a part of a rig system?

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`isRigCamera`](ArcRotateCamera.md#isrigcamera)

***

### isStereoscopicSideBySide

> **isStereoscopicSideBySide**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:366](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L366)

Defines if stereoscopic rendering is done side by side or over under.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`isStereoscopicSideBySide`](ArcRotateCamera.md#isstereoscopicsidebyside)

***

### layerMask

> **layerMask**: `number` = `0x0fffffff`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:340](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L340)

Restricts the camera to viewing objects with the same layerMask.
A camera with a layerMask of 1 will render mesh.layerMask & camera.layerMask!== 0

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`layerMask`](ArcRotateCamera.md#layermask)

***

### lockedTarget

> **lockedTarget**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/targetCamera.ts#L96)

Define the current target of the camera as an object or a position.
Please note that locking a target will disable panning.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`lockedTarget`](ArcRotateCamera.md#lockedtarget)

***

### lowerAlphaLimit

> **lowerAlphaLimit**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L209)

Minimum allowed angle on the longitudinal axis.
This can help limiting how the Camera is able to move in the scene.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`lowerAlphaLimit`](ArcRotateCamera.md#loweralphalimit)

***

### lowerBetaLimit

> **lowerBetaLimit**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `0.01`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L223)

Minimum allowed angle on the latitudinal axis.
This can help limiting how the Camera is able to move in the scene.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`lowerBetaLimit`](ArcRotateCamera.md#lowerbetalimit)

***

### lowerRadiusLimit

> **lowerRadiusLimit**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L237)

Minimum allowed distance of the camera to the target (The camera can not get closer).
This can help limiting how the Camera is able to move in the scene.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`lowerRadiusLimit`](ArcRotateCamera.md#lowerradiuslimit)

***

### lowerTargetYLimit

> **lowerTargetYLimit**: `number` = `-Infinity`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:252](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L252)

Minimum allowed vertical target position of the camera.
Use this setting in combination with `upperRadiusLimit` to set a global limit for the Cameras vertical position.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`lowerTargetYLimit`](ArcRotateCamera.md#lowertargetylimit)

***

### mapPanning

> **mapPanning**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:612](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L612)

Defines if camera will eliminate transform on y axis.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`mapPanning`](ArcRotateCamera.md#mappanning)

***

### maxZ

> **maxZ**: `number` = `10000.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:295](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L295)

Define the maximum distance the camera can see to.  (default is 10000)
This is important to note that the depth buffer are not infinite and the further it end
the more your scene might encounter depth fighting issue.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`maxZ`](ArcRotateCamera.md#maxz)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L113)

Gets or sets an object used to store user defined information for the node

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`metadata`](ArcRotateCamera.md#metadata)

***

### minZ

> **minZ**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L287)

Define the minimum distance the camera can see from.
This is important to note that the depth buffer are not infinite and the closer it starts
the more your scene might encounter depth fighting issue.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`minZ`](ArcRotateCamera.md#minz)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L89)

Gets or sets the name of the node

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`name`](ArcRotateCamera.md#name)

***

### noRotationConstraint

> **noRotationConstraint**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/targetCamera.ts#L65)

Add constraint to the camera to prevent it to move freely in all directions and
around all axis.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`noRotationConstraint`](ArcRotateCamera.md#norotationconstraint)

***

### oblique

> **oblique**: [`Nullable`](../type-aliases/Nullable.md)\<[`IObliqueParams`](../interfaces/IObliqueParams.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L155)

Object containing oblique projection values (only used with ORTHOGRAPHIC_CAMERA)

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`oblique`](ArcRotateCamera.md#oblique)

***

### onAccessibilityTagChangedObservable

> **onAccessibilityTagChangedObservable**: [`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L146)

Observable fired when an accessibility tag is changed

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`onAccessibilityTagChangedObservable`](ArcRotateCamera.md#onaccessibilitytagchangedobservable)

***

### onAfterCheckInputsObservable

> **onAfterCheckInputsObservable**: [`Observable`](Observable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:402](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L402)

Observable triggered when the inputs have been processed.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`onAfterCheckInputsObservable`](ArcRotateCamera.md#onaftercheckinputsobservable)

***

### onCollide

> **onCollide**: (`collidedMesh`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:729](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L729)

Event raised when the camera is colliding with a mesh.

#### Parameters

##### collidedMesh

[`AbstractMesh`](AbstractMesh.md)

#### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`onCollide`](ArcRotateCamera.md#oncollide)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:350](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L350)

An event triggered when the mesh is disposed

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`onDisposeObservable`](ArcRotateCamera.md#ondisposeobservable)

***

### onMeshTargetChangedObservable

> **onMeshTargetChangedObservable**: [`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:724](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L724)

Observable triggered when the transform node target has been changed on the camera.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`onMeshTargetChangedObservable`](ArcRotateCamera.md#onmeshtargetchangedobservable)

***

### onProjectionMatrixChangedObservable

> **onProjectionMatrixChangedObservable**: [`Observable`](Observable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:398](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L398)

Observable triggered when the camera Projection matrix has changed.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`onProjectionMatrixChangedObservable`](ArcRotateCamera.md#onprojectionmatrixchangedobservable)

***

### onReady

> **onReady**: [`Nullable`](../type-aliases/Nullable.md)\<(`node`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L179)

Callback raised when the node is ready to be used

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`onReady`](ArcRotateCamera.md#onready)

***

### onRestoreStateObservable

> **onRestoreStateObservable**: [`Observable`](Observable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:406](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L406)

Observable triggered when reset has been called and applied to the camera.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`onRestoreStateObservable`](ArcRotateCamera.md#onrestorestateobservable)

***

### onViewMatrixChangedObservable

> **onViewMatrixChangedObservable**: [`Observable`](Observable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:394](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L394)

Observable triggered when the camera view matrix has changed.
Beware of reentrance! Some methods like Camera.getViewMatrix and Camera.getWorldMatrix can trigger the onViewMatrixChangedObservable
observable, so using them inside an observer will require additional logic to avoid a stack overflow error.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`onViewMatrixChangedObservable`](ArcRotateCamera.md#onviewmatrixchangedobservable)

***

### outputRenderTarget

> **outputRenderTarget**: [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:387](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L387)

When set, the camera will render to this render target instead of the default canvas

If the desire is to use the output of a camera as a texture in the scene consider using camera.customRenderTargets instead

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`outputRenderTarget`](ArcRotateCamera.md#outputrendertarget)

***

### overrideCloneAlphaBetaRadius

> **overrideCloneAlphaBetaRadius**: [`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L95)

Defines an override value to use as the parameter to setTarget.
This allows the parameter to be specified when animating the target (e.g. using FramingBehavior).

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`overrideCloneAlphaBetaRadius`](ArcRotateCamera.md#overrideclonealphabetaradius)

***

### panningAxis

> **panningAxis**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:606](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L606)

Defines the allowed panning axis.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`panningAxis`](ArcRotateCamera.md#panningaxis)

***

### panningDistanceLimit

> **panningDistanceLimit**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:279](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L279)

Defines the maximum distance the camera can pan.
This could help keeping the camera always in your scene.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`panningDistanceLimit`](ArcRotateCamera.md#panningdistancelimit)

***

### panningInertia

> **panningInertia**: `number` = `0.9`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:292](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L292)

Defines the value of the inertia used during panning.
0 would mean stop inertia and one would mean no deceleration at all.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`panningInertia`](ArcRotateCamera.md#panninginertia)

***

### panningOriginTarget

> **panningOriginTarget**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L285)

Defines the target of the camera before panning.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`panningOriginTarget`](ArcRotateCamera.md#panningorigintarget)

***

### pinchToPanMaxDistance

> **pinchToPanMaxDistance**: `number` = `20`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:272](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L272)

Defines the distance used to consider the camera in pan mode vs pinch/zoom.
Basically if your fingers moves away from more than this distance you will be considered
in pinch mode.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`pinchToPanMaxDistance`](ArcRotateCamera.md#pinchtopanmaxdistance)

***

### projectionPlaneTilt

> **projectionPlaneTilt**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:279](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L279)

Projection plane tilt around the X axis (horizontal), set in Radians. (default is 0)
Can be used to make vertical lines in world space actually vertical on the screen.
See https://forum.babylonjs.com/t/add-vertical-shift-to-3ds-max-exporter-babylon-cameras/17480

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`projectionPlaneTilt`](ArcRotateCamera.md#projectionplanetilt)

***

### radius

> **radius**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L88)

Defines the radius of the camera from its target point.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`radius`](ArcRotateCamera.md#radius)

***

### renderPassId

> **renderPassId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:422](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L422)

Render pass id used by the camera to render into the main framebuffer

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`renderPassId`](ArcRotateCamera.md#renderpassid)

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L121)

For internal use only. Please do not use.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`reservedDataStore`](ArcRotateCamera.md#reserveddatastore)

***

### restoreStateInterpolationFactor

> **restoreStateInterpolationFactor**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:584](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L584)

Factor for restoring information interpolation. default is 0 = off. Any value \< 0 or \> 1 will disable interpolation.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`restoreStateInterpolationFactor`](ArcRotateCamera.md#restorestateinterpolationfactor)

***

### rigParent?

> `optional` **rigParent?**: [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:417](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L417)

If isRigCamera set to true this will be set with the parent camera.
The parent camera is not (!) necessarily the .parent of this camera (like in the case of XR)

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`rigParent`](ArcRotateCamera.md#rigparent)

***

### rotation

> **rotation**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/targetCamera.ts#L48)

Define the current rotation of the camera

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`rotation`](ArcRotateCamera.md#rotation)

***

### rotationQuaternion

> **rotationQuaternion**: [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/targetCamera.ts#L53)

Define the current rotation of the camera as a quaternion to prevent Gimbal lock

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`rotationQuaternion`](ArcRotateCamera.md#rotationquaternion)

***

### speed

> **speed**: `number` = `2.0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/targetCamera.ts#L59)

Define the current speed of the camera

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`speed`](ArcRotateCamera.md#speed)

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L107)

Gets or sets a string used to store user defined state for the node

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`state`](ArcRotateCamera.md#state)

***

### targetScreenOffset

> **targetScreenOffset**: [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:565](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L565)

Defines a screen offset for the camera position.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`targetScreenOffset`](ArcRotateCamera.md#targetscreenoffset)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L101)

Gets or sets the unique id of the node

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`uniqueId`](ArcRotateCamera.md#uniqueid)

***

### updateUpVectorFromRotation

> **updateUpVectorFromRotation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/targetCamera.ts#L42)

When set, the up vector of the camera will be updated by the rotation of the camera

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`updateUpVectorFromRotation`](ArcRotateCamera.md#updateupvectorfromrotation)

***

### upperAlphaLimit

> **upperAlphaLimit**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L216)

Maximum allowed angle on the longitudinal axis.
This can help limiting how the Camera is able to move in the scene.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`upperAlphaLimit`](ArcRotateCamera.md#upperalphalimit)

***

### upperBetaLimit

> **upperBetaLimit**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L230)

Maximum allowed angle on the latitudinal axis.
This can help limiting how the Camera is able to move in the scene.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`upperBetaLimit`](ArcRotateCamera.md#upperbetalimit)

***

### upperRadiusLimit

> **upperRadiusLimit**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:244](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L244)

Maximum allowed distance of the camera to the target (The camera can not get further).
This can help limiting how the Camera is able to move in the scene.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`upperRadiusLimit`](ArcRotateCamera.md#upperradiuslimit)

***

### useInputToRestoreState

> **useInputToRestoreState**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:578](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L578)

Define if double tap/click is used to restore the previously saved state of the camera.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`useInputToRestoreState`](ArcRotateCamera.md#useinputtorestorestate)

***

### viewport

> **viewport**: [`Viewport`](Viewport.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:333](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L333)

Define the viewport of the camera.
This correspond to the portion of the screen the camera will render to in normalized 0 to 1 unit.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`viewport`](ArcRotateCamera.md#viewport)

***

### zoomOnFactor

> **zoomOnFactor**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:559](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L559)

Defines how much the radius should be scaled while zooming on a particular mesh (through the zoomOn function)

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`zoomOnFactor`](ArcRotateCamera.md#zoomonfactor)

***

### ForceAttachControlToAlwaysPreventDefault

> `static` **ForceAttachControlToAlwaysPreventDefault**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L115)

Defines if by default attaching controls should prevent the default javascript event to continue.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`ForceAttachControlToAlwaysPreventDefault`](ArcRotateCamera.md#forceattachcontroltoalwayspreventdefault)

***

### FOVMODE\_HORIZONTAL\_FIXED

> `readonly` `static` **FOVMODE\_HORIZONTAL\_FIXED**: `1` = `Constants.FOVMODE_HORIZONTAL_FIXED`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L74)

This setting aligns the left and right bounds of the viewport to the left and right bounds of the camera frustum.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`FOVMODE_HORIZONTAL_FIXED`](ArcRotateCamera.md#fovmode_horizontal_fixed)

***

### FOVMODE\_VERTICAL\_FIXED

> `readonly` `static` **FOVMODE\_VERTICAL\_FIXED**: `0` = `Constants.FOVMODE_VERTICAL_FIXED`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L70)

This is the default FOV mode for perspective cameras.
This setting aligns the upper and lower bounds of the viewport to the upper and lower bounds of the camera frustum.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`FOVMODE_VERTICAL_FIXED`](ArcRotateCamera.md#fovmode_vertical_fixed)

***

### ORTHOGRAPHIC\_CAMERA

> `readonly` `static` **ORTHOGRAPHIC\_CAMERA**: `1` = `Constants.ORTHOGRAPHIC_CAMERA`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L64)

This helps creating camera with an orthographic mode.
Orthographic is commonly used in engineering as a means to produce object specifications that communicate dimensions unambiguously, each line of 1 unit length (cm, meter..whatever) will appear to have the same length everywhere on the drawing. This allows the drafter to dimension only a subset of lines and let the reader know that other lines of that length on the drawing are also that length in reality. Every parallel line in the drawing is also parallel in the object.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`ORTHOGRAPHIC_CAMERA`](ArcRotateCamera.md#orthographic_camera)

***

### PERSPECTIVE\_CAMERA

> `readonly` `static` **PERSPECTIVE\_CAMERA**: `0` = `Constants.PERSPECTIVE_CAMERA`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L59)

This is the default projection mode used by the cameras.
It helps recreating a feeling of perspective and better appreciate depth.
This is the best way to simulate real life cameras.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`PERSPECTIVE_CAMERA`](ArcRotateCamera.md#perspective_camera)

***

### RIG\_MODE\_CUSTOM

> `readonly` `static` **RIG\_MODE\_CUSTOM**: `22` = `Constants.RIG_MODE_CUSTOM`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L110)

Custom rig mode allowing rig cameras to be populated manually with any number of cameras

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`RIG_MODE_CUSTOM`](ArcRotateCamera.md#rig_mode_custom)

***

### RIG\_MODE\_NONE

> `readonly` `static` **RIG\_MODE\_NONE**: `0` = `Constants.RIG_MODE_NONE`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L80)

This specifies there is no need for a camera rig.
Basically only one eye is rendered corresponding to the camera.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`RIG_MODE_NONE`](ArcRotateCamera.md#rig_mode_none)

***

### RIG\_MODE\_STEREOSCOPIC\_ANAGLYPH

> `readonly` `static` **RIG\_MODE\_STEREOSCOPIC\_ANAGLYPH**: `10` = `Constants.RIG_MODE_STEREOSCOPIC_ANAGLYPH`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L85)

Simulates a camera Rig with one blue eye and one red eye.
This can be use with 3d blue and red glasses.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`RIG_MODE_STEREOSCOPIC_ANAGLYPH`](ArcRotateCamera.md#rig_mode_stereoscopic_anaglyph)

***

### RIG\_MODE\_STEREOSCOPIC\_INTERLACED

> `readonly` `static` **RIG\_MODE\_STEREOSCOPIC\_INTERLACED**: `14` = `Constants.RIG_MODE_STEREOSCOPIC_INTERLACED`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L101)

Defines that both eyes of the camera will be rendered on successive lines interlaced for passive 3d monitors.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`RIG_MODE_STEREOSCOPIC_INTERLACED`](ArcRotateCamera.md#rig_mode_stereoscopic_interlaced)

***

### RIG\_MODE\_STEREOSCOPIC\_OVERUNDER

> `readonly` `static` **RIG\_MODE\_STEREOSCOPIC\_OVERUNDER**: `13` = `Constants.RIG_MODE_STEREOSCOPIC_OVERUNDER`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L97)

Defines that both eyes of the camera will be rendered over under each other.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`RIG_MODE_STEREOSCOPIC_OVERUNDER`](ArcRotateCamera.md#rig_mode_stereoscopic_overunder)

***

### RIG\_MODE\_STEREOSCOPIC\_SIDEBYSIDE\_CROSSEYED

> `readonly` `static` **RIG\_MODE\_STEREOSCOPIC\_SIDEBYSIDE\_CROSSEYED**: `12` = `Constants.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L93)

Defines that both eyes of the camera will be rendered side by side with a none parallel target.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED`](ArcRotateCamera.md#rig_mode_stereoscopic_sidebyside_crosseyed)

***

### RIG\_MODE\_STEREOSCOPIC\_SIDEBYSIDE\_PARALLEL

> `readonly` `static` **RIG\_MODE\_STEREOSCOPIC\_SIDEBYSIDE\_PARALLEL**: `11` = `Constants.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L89)

Defines that both eyes of the camera will be rendered side by side with a parallel target.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL`](ArcRotateCamera.md#rig_mode_stereoscopic_sidebyside_parallel)

***

### RIG\_MODE\_VR

> `readonly` `static` **RIG\_MODE\_VR**: `20` = `Constants.RIG_MODE_VR`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L106)

Defines that both eyes of the camera should be renderered in a VR mode (carbox).

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`RIG_MODE_VR`](ArcRotateCamera.md#rig_mode_vr)

## Accessors

### absoluteRotation

#### Get Signature

> **get** **absoluteRotation**(): [`Quaternion`](Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1466](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1466)

Returns the current camera absolute rotation

##### Returns

[`Quaternion`](Quaternion.md)

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`absoluteRotation`](ArcRotateCamera.md#absoluterotation)

***

### accessibilityTag

#### Get Signature

> **get** **accessibilityTag**(): [`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L137)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

#### Set Signature

> **set** **accessibilityTag**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L132)

Gets or sets the accessibility tag to describe the node for accessibility purpose.

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`accessibilityTag`](ArcRotateCamera.md#accessibilitytag)

***

### angularSensibilityX

#### Get Signature

> **get** **angularSensibilityX**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:299](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L299)

Gets or Set the pointer angular sensibility  along the X axis or how fast is the camera rotating.

##### Returns

`number`

#### Set Signature

> **set** **angularSensibilityX**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:308](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L308)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`angularSensibilityX`](ArcRotateCamera.md#angularsensibilityx)

***

### angularSensibilityY

#### Get Signature

> **get** **angularSensibilityY**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L318)

Gets or Set the pointer angular sensibility along the Y axis or how fast is the camera rotating.

##### Returns

`number`

#### Set Signature

> **set** **angularSensibilityY**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:327](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L327)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`angularSensibilityY`](ArcRotateCamera.md#angularsensibilityy)

***

### animationPropertiesOverride

#### Get Signature

> **get** **animationPropertiesOverride**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:325](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L325)

Gets or sets the animation properties override

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

#### Set Signature

> **set** **animationPropertiesOverride**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:332](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L332)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`animationPropertiesOverride`](ArcRotateCamera.md#animationpropertiesoverride)

***

### autoRotationBehavior

#### Get Signature

> **get** **autoRotationBehavior**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AutoRotationBehavior`](AutoRotationBehavior.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:695](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L695)

Gets the auto rotation behavior of the camera if it has been enabled.

##### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors/cameraBehaviors#autorotation-behavior

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AutoRotationBehavior`](AutoRotationBehavior.md)\>

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`autoRotationBehavior`](ArcRotateCamera.md#autorotationbehavior)

***

### behaviors

#### Get Signature

> **get** **behaviors**(): [`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:468](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L468)

Gets the list of attached behaviors

##### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

##### Returns

[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>[]

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`behaviors`](ArcRotateCamera.md#behaviors)

***

### bouncingBehavior

#### Get Signature

> **get** **bouncingBehavior**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BouncingBehavior`](BouncingBehavior.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:631](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L631)

Gets the bouncing behavior of the camera if it has been enabled.

##### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors/cameraBehaviors#bouncing-behavior

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BouncingBehavior`](BouncingBehavior.md)\>

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`bouncingBehavior`](ArcRotateCamera.md#bouncingbehavior)

***

### doNotSerialize

#### Get Signature

> **get** **doNotSerialize**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L151)

Gets or sets a boolean used to define if the node must be serialized

##### Returns

`boolean`

#### Set Signature

> **set** **doNotSerialize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L163)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`doNotSerialize`](ArcRotateCamera.md#donotserialize)

***

### framingBehavior

#### Get Signature

> **get** **framingBehavior**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FramingBehavior`](FramingBehavior.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:663](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L663)

Gets the framing behavior of the camera if it has been enabled.

##### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors/cameraBehaviors#framing-behavior

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FramingBehavior`](FramingBehavior.md)\>

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`framingBehavior`](ArcRotateCamera.md#framingbehavior)

***

### globalPosition

#### Get Signature

> **get** **globalPosition**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:572](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L572)

Gets the current world space position of the camera.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`globalPosition`](ArcRotateCamera.md#globalposition)

***

### hasMoved

#### Get Signature

> **get** **hasMoved**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:429](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L429)

Gets a flag indicating that the camera has moved in some way since the last call to Camera.update()

##### Returns

`boolean`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`hasMoved`](ArcRotateCamera.md#hasmoved)

***

### inheritVisibility

#### Get Signature

> **get** **inheritVisibility**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L269)

If set to true, this node, when renderable, will only be visible if its parent(s) are also visible.

##### Default

```ts
false
```

##### Returns

`boolean`

#### Set Signature

> **set** **inheritVisibility**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:273](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L273)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`inheritVisibility`](ArcRotateCamera.md#inheritvisibility)

***

### isInterpolating

#### Get Signature

> **get** **isInterpolating**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:623](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L623)

If true, indicates the camera is currently interpolating to a new pose.

##### Returns

`boolean`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`isInterpolating`](ArcRotateCamera.md#isinterpolating)

***

### isLeftCamera

#### Get Signature

> **get** **isLeftCamera**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1240)

Gets the left camera of a rig setup in case of Rigged Camera

##### Returns

`boolean`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`isLeftCamera`](ArcRotateCamera.md#isleftcamera)

***

### isRightCamera

#### Get Signature

> **get** **isRightCamera**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1249)

Gets the right camera of a rig setup in case of Rigged Camera

##### Returns

`boolean`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`isRightCamera`](ArcRotateCamera.md#isrightcamera)

***

### isVisible

#### Get Signature

> **get** **isVisible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:281](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L281)

Gets or sets a boolean indicating whether this node is visible, either this node itself when it is renderable or its renderable child nodes when `inheritVisibility` is true.

##### Default

```ts
true
```

##### Returns

`boolean`

#### Set Signature

> **set** **isVisible**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L289)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`isVisible`](ArcRotateCamera.md#isvisible)

***

### keysDown

#### Get Signature

> **get** **keysDown**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:438](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L438)

Gets or Set the list of keyboard keys used to control beta angle in a negative direction.

##### Returns

`number`[]

#### Set Signature

> **set** **keysDown**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:447](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L447)

##### Parameters

###### value

`number`[]

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`keysDown`](ArcRotateCamera.md#keysdown)

***

### keysLeft

#### Get Signature

> **get** **keysLeft**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:457](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L457)

Gets or Set the list of keyboard keys used to control alpha angle in a negative direction.

##### Returns

`number`[]

#### Set Signature

> **set** **keysLeft**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:466](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L466)

##### Parameters

###### value

`number`[]

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`keysLeft`](ArcRotateCamera.md#keysleft)

***

### keysRight

#### Get Signature

> **get** **keysRight**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:476](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L476)

Gets or Set the list of keyboard keys used to control alpha angle in a positive direction.

##### Returns

`number`[]

#### Set Signature

> **set** **keysRight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:485](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L485)

##### Parameters

###### value

`number`[]

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`keysRight`](ArcRotateCamera.md#keysright)

***

### keysUp

#### Get Signature

> **get** **keysUp**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:419](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L419)

Gets or Set the list of keyboard keys used to control beta angle in a positive direction.

##### Returns

`number`[]

#### Set Signature

> **set** **keysUp**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:428](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L428)

##### Parameters

###### value

`number`[]

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`keysUp`](ArcRotateCamera.md#keysup)

***

### leftCamera

#### Get Signature

> **get** **leftCamera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FreeCamera`](FreeCamera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1256](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1256)

Gets the left camera of a rig setup in case of Rigged Camera

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FreeCamera`](FreeCamera.md)\>

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`leftCamera`](ArcRotateCamera.md#leftcamera)

***

### mode

#### Get Signature

> **get** **mode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:319](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L319)

##### Returns

`number`

#### Set Signature

> **set** **mode**(`mode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:309](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L309)

Define the mode of the camera (Camera.PERSPECTIVE_CAMERA or Camera.ORTHOGRAPHIC_CAMERA)

##### Parameters

###### mode

`number`

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`mode`](ArcRotateCamera.md#mode)

***

### onClonedObservable

#### Get Signature

> **get** **onClonedObservable**(): [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L373)

An event triggered when the node is cloned

##### Returns

[`Observable`](Observable.md)\<[`Node`](Node.md)\>

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`onClonedObservable`](ArcRotateCamera.md#onclonedobservable)

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:356](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L356)

Sets a callback that will be raised when the node will be disposed

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`onDispose`](ArcRotateCamera.md#ondispose)

***

### onEnabledStateChangedObservable

#### Get Signature

> **get** **onEnabledStateChangedObservable**(): [`Observable`](Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:366](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L366)

An event triggered when the enabled state of the node changes

##### Returns

[`Observable`](Observable.md)\<`boolean`\>

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`onEnabledStateChangedObservable`](ArcRotateCamera.md#onenabledstatechangedobservable)

***

### orthoBottom

#### Get Signature

> **get** **orthoBottom**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:235](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L235)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **orthoBottom**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L226)

Define the current limit on the bottom side for an orthographic camera
In scene unit

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`orthoBottom`](ArcRotateCamera.md#orthobottom)

***

### orthoLeft

#### Get Signature

> **get** **orthoLeft**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:197](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L197)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **orthoLeft**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:188](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L188)

Define the current limit on the left side for an orthographic camera
In scene unit

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`orthoLeft`](ArcRotateCamera.md#ortholeft)

***

### orthoRight

#### Get Signature

> **get** **orthoRight**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L216)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **orthoRight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L207)

Define the current limit on the right side for an orthographic camera
In scene unit

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`orthoRight`](ArcRotateCamera.md#orthoright)

***

### orthoTop

#### Get Signature

> **get** **orthoTop**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:254](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L254)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **orthoTop**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:245](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L245)

Define the current limit on the top side for an orthographic camera
In scene unit

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`orthoTop`](ArcRotateCamera.md#orthotop)

***

### panningSensibility

#### Get Signature

> **get** **panningSensibility**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:400](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L400)

Gets or Set the pointer panning sensibility or how fast is the camera moving.

##### Returns

`number`

#### Set Signature

> **set** **panningSensibility**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:409](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L409)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`panningSensibility`](ArcRotateCamera.md#panningsensibility)

***

### parent

#### Get Signature

> **get** **parent**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L261)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

#### Set Signature

> **set** **parent**(`parent`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:222](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L222)

Gets or sets the parent of the node (without keeping the current position in the scene)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/parent_pivot/parent

##### Parameters

###### parent

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`parent`](ArcRotateCamera.md#parent)

***

### pinchDeltaPercentage

#### Get Signature

> **get** **pinchDeltaPercentage**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:358](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L358)

Gets or Set the pointer pinch delta percentage or how fast is the camera zooming.
It will be used instead of pinchPrecision if different from 0.
It defines the percentage of current camera.radius to use as delta when pinch zoom is used.

##### Returns

`number`

#### Set Signature

> **set** **pinchDeltaPercentage**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:367](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L367)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`pinchDeltaPercentage`](ArcRotateCamera.md#pinchdeltapercentage)

***

### pinchPrecision

#### Get Signature

> **get** **pinchPrecision**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:337](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L337)

Gets or Set the pointer pinch precision or how fast is the camera zooming.

##### Returns

`number`

#### Set Signature

> **set** **pinchPrecision**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:346](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L346)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`pinchPrecision`](ArcRotateCamera.md#pinchprecision)

***

### position

#### Get Signature

> **get** **position**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L138)

Define the current local position of the camera in the scene

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **position**(`newPosition`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L142)

Define the current local position of the camera in the scene

##### Parameters

###### newPosition

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`position`](ArcRotateCamera.md#position)

***

### rightCamera

#### Get Signature

> **get** **rightCamera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FreeCamera`](FreeCamera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1266](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1266)

Gets the right camera of a rig setup in case of Rigged Camera

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FreeCamera`](FreeCamera.md)\>

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`rightCamera`](ArcRotateCamera.md#rightcamera)

***

### rigPostProcess

#### Get Signature

> **get** **rigPostProcess**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:766](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L766)

Gets the post process used by the rig cameras

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`rigPostProcess`](ArcRotateCamera.md#rigpostprocess)

***

### screenArea

#### Get Signature

> **get** **screenArea**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L160)

The screen area in scene units squared

##### Returns

`number`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`screenArea`](ArcRotateCamera.md#screenarea)

***

### target

#### Get Signature

> **get** **target**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L106)

Defines the target point of the camera.
The camera looks towards it from the radius distance.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **target**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L109)

Defines the target point of the camera.
The camera looks towards it form the radius distance.

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`target`](ArcRotateCamera.md#target)

***

### targetHost

#### Get Signature

> **get** **targetHost**(): [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L118)

Defines the target transform node of the camera.
The camera looks towards it from the radius distance.
Please note that setting a target host will disable panning.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

#### Set Signature

> **set** **targetHost**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L121)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`targetHost`](ArcRotateCamera.md#targethost)

***

### upVector

#### Get Signature

> **get** **upVector**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L168)

The vector the camera should consider as up.
(default is Vector3(0, 1, 0) aka Vector3.Up())

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **upVector**(`vec`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L155)

The vector the camera should consider as up. (default is Vector3(0, 1, 0) as returned by Vector3.Up())
Setting this will copy the given vector to the camera's upVector, and set rotation matrices to and from Y up.
DO NOT set the up vector using copyFrom or copyFromFloats, as this bypasses setting the above matrices.

##### Parameters

###### vec

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`upVector`](ArcRotateCamera.md#upvector)

***

### useAutoRotationBehavior

#### Get Signature

> **get** **useAutoRotationBehavior**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:703](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L703)

Defines if the auto rotation behavior of the camera is enabled on the camera.

##### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors/cameraBehaviors#autorotation-behavior

##### Returns

`boolean`

#### Set Signature

> **set** **useAutoRotationBehavior**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:707](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L707)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`useAutoRotationBehavior`](ArcRotateCamera.md#useautorotationbehavior)

***

### useBouncingBehavior

#### Get Signature

> **get** **useBouncingBehavior**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:639](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L639)

Defines if the bouncing behavior of the camera is enabled on the camera.

##### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors/cameraBehaviors#bouncing-behavior

##### Returns

`boolean`

#### Set Signature

> **set** **useBouncingBehavior**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:643](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L643)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`useBouncingBehavior`](ArcRotateCamera.md#usebouncingbehavior)

***

### useFramingBehavior

#### Get Signature

> **get** **useFramingBehavior**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:671](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L671)

Defines if the framing behavior of the camera is enabled on the camera.

##### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors/cameraBehaviors#framing-behavior

##### Returns

`boolean`

#### Set Signature

> **set** **useFramingBehavior**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:675](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L675)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`useFramingBehavior`](ArcRotateCamera.md#useframingbehavior)

***

### useNaturalPinchZoom

#### Get Signature

> **get** **useNaturalPinchZoom**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:381](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L381)

Gets or Set the pointer use natural pinch zoom to override the pinch precision
and pinch delta percentage.
When useNaturalPinchZoom is true, multi touch zoom will zoom in such
that any object in the plane at the camera's target point will scale
perfectly with finger motion.

##### Returns

`boolean`

#### Set Signature

> **set** **useNaturalPinchZoom**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:390](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L390)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`useNaturalPinchZoom`](ArcRotateCamera.md#usenaturalpinchzoom)

***

### wheelDeltaPercentage

#### Get Signature

> **get** **wheelDeltaPercentage**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:537](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L537)

Gets or Set the mouse wheel delta percentage or how fast is the camera zooming.
It will be used instead of wheelPrecision if different from 0.
It defines the percentage of current camera.radius to use as delta when wheel zoom is used.

##### Returns

`number`

#### Set Signature

> **set** **wheelDeltaPercentage**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:546](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L546)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`wheelDeltaPercentage`](ArcRotateCamera.md#wheeldeltapercentage)

***

### wheelPrecision

#### Get Signature

> **get** **wheelPrecision**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:495](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L495)

Gets or Set the mouse wheel precision or how fast is the camera zooming.

##### Returns

`number`

#### Set Signature

> **set** **wheelPrecision**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:504](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L504)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`wheelPrecision`](ArcRotateCamera.md#wheelprecision)

***

### worldMatrixFromCache

#### Get Signature

> **get** **worldMatrixFromCache**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:512](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L512)

Returns directly the latest state of the mesh World matrix.
A Matrix is returned.

##### Returns

[`Matrix`](Matrix.md)

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`worldMatrixFromCache`](ArcRotateCamera.md#worldmatrixfromcache)

***

### zoomToMouseLocation

#### Get Signature

> **get** **zoomToMouseLocation**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:516](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L516)

Gets or Set the boolean value that controls whether or not the mouse wheel
zooms to the location of the mouse pointer or not.  The default is false.

##### Returns

`boolean`

#### Set Signature

> **set** **zoomToMouseLocation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:525](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L525)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`zoomToMouseLocation`](ArcRotateCamera.md#zoomtomouselocation)

## Methods

### \_getFirstPostProcess()

> **\_getFirstPostProcess**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:774](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L774)

Internal, gets the first post process.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

the first post process to be run on this camera.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`_getFirstPostProcess`](ArcRotateCamera.md#_getfirstpostprocess)

***

### addBehavior()

> **addBehavior**(`behavior`, `attachImmediately?`): [`Node`](Node.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:421](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L421)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`addBehavior`](ArcRotateCamera.md#addbehavior)

***

### applyVerticalCorrection()

> **applyVerticalCorrection**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:563](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L563)

Automatically tilts the projection plane, using `projectionPlaneTilt`, to correct the perspective effect on vertical lines.

#### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`applyVerticalCorrection`](ArcRotateCamera.md#applyverticalcorrection)

***

### attachControl()

Attached controls to the current camera.

#### Param

defines an ignored parameter kept for backward compatibility.

#### Param

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

#### Param

Defines whether ctrl is used for panning within the controls

#### Param

Defines whether panning is allowed through mouse click button

#### Call Signature

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:963](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L963)

Attach the input controls to a specific dom element to get the input from.

##### Parameters

###### noPreventDefault?

`boolean`

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

##### Returns

`void`

##### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`attachControl`](ArcRotateCamera.md#attachcontrol)

#### Call Signature

> **attachControl**(`ignored`, `noPreventDefault?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:969](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L969)

Attach the input controls to a specific dom element to get the input from.

##### Parameters

###### ignored

`any`

defines an ignored parameter kept for backward compatibility.

###### noPreventDefault?

`boolean`

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

##### Returns

`void`

##### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`attachControl`](ArcRotateCamera.md#attachcontrol)

#### Call Signature

> **attachControl**(`noPreventDefault`, `useCtrlForPanning`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:975](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L975)

Attached controls to the current camera.

##### Parameters

###### noPreventDefault

`boolean`

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

###### useCtrlForPanning

`boolean`

Defines whether ctrl is used for panning within the controls

##### Returns

`void`

##### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`attachControl`](ArcRotateCamera.md#attachcontrol)

#### Call Signature

> **attachControl**(`ignored`, `noPreventDefault`, `useCtrlForPanning`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:982](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L982)

Attached controls to the current camera.

##### Parameters

###### ignored

`any`

defines an ignored parameter kept for backward compatibility.

###### noPreventDefault

`boolean`

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

###### useCtrlForPanning

`boolean`

Defines whether ctrl is used for panning within the controls

##### Returns

`void`

##### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`attachControl`](ArcRotateCamera.md#attachcontrol)

#### Call Signature

> **attachControl**(`noPreventDefault`, `useCtrlForPanning`, `panningMouseButton`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:989](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L989)

Attached controls to the current camera.

##### Parameters

###### noPreventDefault

`boolean`

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

###### useCtrlForPanning

`boolean`

Defines whether ctrl is used for panning within the controls

###### panningMouseButton

`number`

Defines whether panning is allowed through mouse click button

##### Returns

`void`

##### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`attachControl`](ArcRotateCamera.md#attachcontrol)

***

### attachPostProcess()

> **attachPostProcess**(`postProcess`, `insertAt?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:817](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L817)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`attachPostProcess`](ArcRotateCamera.md#attachpostprocess)

***

### beginAnimation()

> **beginAnimation**(`name`, `loop?`, `speedRatio?`, `onAnimationEnd?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:898](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L898)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`beginAnimation`](ArcRotateCamera.md#beginanimation)

***

### clone()

> **clone**(`name`, `newParent?`): [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1437](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1437)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`clone`](ArcRotateCamera.md#clone)

***

### computeWorldMatrix()

> **computeWorldMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1510](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1510)

Compute the world  matrix of the camera.

#### Returns

[`Matrix`](Matrix.md)

the camera world matrix

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`computeWorldMatrix`](ArcRotateCamera.md#computeworldmatrix)

***

### createAnimationRange()

> **createAnimationRange**(`name`, `from`, `to`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:815](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L815)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`createAnimationRange`](ArcRotateCamera.md#createanimationrange)

***

### createRigCamera()

> **createRigCamera**(`name`, `cameraIndex`): [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:1503](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L1503)

Override Camera.createRigCamera

#### Parameters

##### name

`string`

the name of the camera

##### cameraIndex

`number`

the index of the camera in the rig cameras array

#### Returns

[`Camera`](Camera.md)

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`createRigCamera`](ArcRotateCamera.md#createrigcamera)

***

### deleteAnimationRange()

> **deleteAnimationRange**(`name`, `deleteFrames?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:832](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L832)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`deleteAnimationRange`](ArcRotateCamera.md#deleteanimationrange)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:1027](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L1027)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`detachControl`](ArcRotateCamera.md#detachcontrol)

***

### detachPostProcess()

> **detachPostProcess**(`postProcess`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:845](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L845)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`detachPostProcess`](ArcRotateCamera.md#detachpostprocess)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:1586](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L1586)

Destroy the camera and release the current resources hold by it.

#### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`dispose`](ArcRotateCamera.md#dispose)

***

### focusOn()

> **focusOn**(`meshesOrMinMaxVectorAndDistance`, `doNotUpdateMaxZ?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:1474](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L1474)

Focus on a mesh or a bounding box. This adapts the target and maxRadius if necessary but does not update the current radius.
The target will be changed but the radius

#### Parameters

##### meshesOrMinMaxVectorAndDistance

[`AbstractMesh`](AbstractMesh.md)[] \| \{ `distance`: `number`; `max`: [`Vector3`](Vector3.md); `min`: [`Vector3`](Vector3.md); \}

Defines the mesh or bounding info to focus on

##### doNotUpdateMaxZ?

`boolean` = `false`

Defines whether or not maxZ should be updated whilst zooming on the mesh (this can happen if the mesh is big and the maxradius pretty small for instance)

#### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`focusOn`](ArcRotateCamera.md#focuson)

***

### freezeProjectionMatrix()

> **freezeProjectionMatrix**(`projection?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:922](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L922)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`freezeProjectionMatrix`](ArcRotateCamera.md#freezeprojectionmatrix)

***

### getActiveMeshes()

> **getActiveMeshes**(): [`SmartArray`](SmartArray.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:580](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L580)

Gets the list of active meshes this frame (meshes no culled or excluded by lod s in the frame)

#### Returns

[`SmartArray`](SmartArray.md)\<[`AbstractMesh`](AbstractMesh.md)\>

the active meshe list

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`getActiveMeshes`](ArcRotateCamera.md#getactivemeshes)

***

### getAnimationByName()

> **getAnimationByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:797](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L797)

Get an animation by name

#### Parameters

##### name

`string`

defines the name of the animation to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)\>

null if not found else the requested animation

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`getAnimationByName`](ArcRotateCamera.md#getanimationbyname)

***

### getAnimationRange()

> **getAnimationRange**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:846](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L846)

Get an animation range by name

#### Parameters

##### name

`string`

defines the name of the animation range to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>

null if not found else the requested animation range

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`getAnimationRange`](ArcRotateCamera.md#getanimationrange)

***

### getAnimationRanges()

> **getAnimationRanges**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:881](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L881)

Gets the list of all animation ranges defined on this node

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

an array

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`getAnimationRanges`](ArcRotateCamera.md#getanimationranges)

***

### getBehaviorByName()

> **getBehaviorByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:478](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L478)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`getBehaviorByName`](ArcRotateCamera.md#getbehaviorbyname)

***

### getChildMeshes()

Get all child-meshes of this node

#### Param

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: false)

#### Param

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Call Signature

> **getChildMeshes**\<`T`\>(`directDescendantsOnly?`, `predicate?`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:723](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L723)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`getChildMeshes`](ArcRotateCamera.md#getchildmeshes)

#### Call Signature

> **getChildMeshes**(`directDescendantsOnly?`, `predicate?`): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:731](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L731)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`getChildMeshes`](ArcRotateCamera.md#getchildmeshes)

***

### getChildren()

Get all direct children of this node

#### Param

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Param

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: true)

#### Call Signature

> **getChildren**\<`T`\>(`predicate?`, `directDescendantsOnly?`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:753](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L753)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`getChildren`](ArcRotateCamera.md#getchildren)

#### Call Signature

> **getChildren**(`predicate?`, `directDescendantsOnly?`): [`Node`](Node.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:761](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L761)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`getChildren`](ArcRotateCamera.md#getchildren)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/Stereoscopic/stereoscopicArcRotateCamera.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/Stereoscopic/stereoscopicArcRotateCamera.ts#L41)

Gets camera class name

#### Returns

`string`

StereoscopicArcRotateCamera

#### Overrides

[`ArcRotateCamera`](ArcRotateCamera.md).[`getClassName`](ArcRotateCamera.md#getclassname)

***

### getDescendants()

Will return all nodes that have this node as ascendant

#### Param

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

#### Param

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Call Signature

> **getDescendants**\<`T`\>(`directDescendantsOnly?`, `predicate?`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:693](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L693)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`getDescendants`](ArcRotateCamera.md#getdescendants)

#### Call Signature

> **getDescendants**(`directDescendantsOnly?`, `predicate?`): [`Node`](Node.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:701](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L701)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`getDescendants`](ArcRotateCamera.md#getdescendants)

***

### getDirection()

> **getDirection**(`localAxis`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1455](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1455)

Gets the direction of the camera relative to a given local axis.

#### Parameters

##### localAxis

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

Defines the reference axis to provide a relative direction.

#### Returns

[`Vector3`](Vector3.md)

the direction

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`getDirection`](ArcRotateCamera.md#getdirection)

***

### getDirectionToRef()

> **getDirectionToRef**(`localAxis`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1477](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1477)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`getDirectionToRef`](ArcRotateCamera.md#getdirectiontoref)

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L407)

Gets the engine of the node

#### Returns

[`AbstractEngine`](AbstractEngine.md)

a Engine

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`getEngine`](ArcRotateCamera.md#getengine)

***

### getForwardRay()

> **getForwardRay**(`length?`, `transform?`, `origin?`): [`Ray`](Ray.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1147](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1147)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`getForwardRay`](ArcRotateCamera.md#getforwardray)

***

### getForwardRayToRef()

> **getForwardRayToRef**(`refRay`, `length?`, `transform?`, `origin?`): [`Ray`](Ray.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1161)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`getForwardRayToRef`](ArcRotateCamera.md#getforwardraytoref)

***

### getFrontPosition()

> **getFrontPosition**(`distance`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/targetCamera.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/targetCamera.ts#L142)

Gets the position in front of the camera at a given distance.

#### Parameters

##### distance

`number`

The distance from the camera we want the position to be

#### Returns

[`Vector3`](Vector3.md)

the position

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`getFrontPosition`](ArcRotateCamera.md#getfrontposition)

***

### getHierarchyBoundingVectors()

> **getHierarchyBoundingVectors**(`includeDescendants?`, `predicate?`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:998](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L998)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`getHierarchyBoundingVectors`](ArcRotateCamera.md#gethierarchyboundingvectors)

***

### getLeftTarget()

> **getLeftTarget**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1277](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1277)

Gets the left camera target of a rig setup in case of Rigged Camera

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

the target position

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`getLeftTarget`](ArcRotateCamera.md#getlefttarget)

***

### getProjectionMatrix()

> **getProjectionMatrix**(`force?`): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:941](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L941)

Gets the current projection matrix of the camera.

#### Parameters

##### force?

`boolean`

forces the camera to recompute the matrix without looking at the cached state

#### Returns

[`Matrix`](Matrix.md)

the projection matrix

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`getProjectionMatrix`](ArcRotateCamera.md#getprojectionmatrix)

***

### getRightTarget()

> **getRightTarget**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1288](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1288)

Gets the right camera target of a rig setup in case of Rigged Camera

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

the target position

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`getRightTarget`](ArcRotateCamera.md#getrighttarget)

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:399](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L399)

Gets the scene of the node

#### Returns

[`Scene`](Scene.md)

a scene

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`getScene`](ArcRotateCamera.md#getscene)

***

### getTarget()

> **getTarget**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L131)

Return the current target position of the camera. This value is expressed in local space.

#### Returns

[`Vector3`](Vector3.md)

the target position

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`getTarget`](ArcRotateCamera.md#gettarget)

***

### getTransformationMatrix()

> **getTransformationMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1076](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1076)

Gets the transformation matrix (ie. the multiplication of view by projection matrices)

#### Returns

[`Matrix`](Matrix.md)

a Matrix

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`getTransformationMatrix`](ArcRotateCamera.md#gettransformationmatrix)

***

### getViewMatrix()

> **getViewMatrix**(`force?`): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:884](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L884)

Gets the current view matrix of the camera.

#### Parameters

##### force?

`boolean`

forces the camera to recompute the matrix without looking at the cached state

#### Returns

[`Matrix`](Matrix.md)

the view matrix

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`getViewMatrix`](ArcRotateCamera.md#getviewmatrix)

***

### getWorldMatrix()

> **getWorldMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:863](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L863)

Gets the current world matrix of the camera

#### Returns

[`Matrix`](Matrix.md)

the world matrix

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`getWorldMatrix`](ArcRotateCamera.md#getworldmatrix)

***

### hasStateStored()

> **hasStateStored**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:503](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L503)

Returns true if a state has been stored by calling storeState method.

#### Returns

`boolean`

true if state has been stored.

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`hasStateStored`](ArcRotateCamera.md#hasstatestored)

***

### interpolateTo()

> **interpolateTo**(`alpha?`, `beta?`, `radius?`, `target?`, `targetScreenOffset?`, `interpolationFactor?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:906](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L906)

Interpolates the camera to a goal state.

#### Parameters

##### alpha?

`number` = `...`

Defines the goal alpha.

##### beta?

`number` = `...`

Defines the goal beta.

##### radius?

`number` = `...`

Defines the goal radius.

##### target?

[`Vector3`](Vector3.md) = `...`

Defines the goal target.

##### targetScreenOffset?

[`Vector2`](Vector2.md) = `...`

Defines the goal target screen offset.

##### interpolationFactor?

`number`

A value  between 0 and 1 that determines the speed of the interpolation.

#### Returns

`void`

#### Remarks

Passing undefined for any of the parameters will use the current value (effectively stopping any in-progress interpolation for that parameter).
         Passing NaN will not start or stop any interpolation for that parameter (effectively allowing multiple interpolations of different parameters to overlap).

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`interpolateTo`](ArcRotateCamera.md#interpolateto)

***

### isActiveMesh()

> **isActiveMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:589](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L589)

Check whether a mesh is part of the current active mesh list of the camera

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

Defines the mesh to check

#### Returns

`boolean`

true if active, false otherwise

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`isActiveMesh`](ArcRotateCamera.md#isactivemesh)

***

### isCompletelyInFrustum()

> **isCompletelyInFrustum**(`target`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1132)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`isCompletelyInFrustum`](ArcRotateCamera.md#iscompletelyinfrustum)

***

### isDescendantOf()

> **isDescendantOf**(`ancestor`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:655](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L655)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`isDescendantOf`](ArcRotateCamera.md#isdescendantof)

***

### isDisposed()

> **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L214)

Gets a boolean indicating if the node has been disposed

#### Returns

`boolean`

true if the node was disposed

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`isDisposed`](ArcRotateCamera.md#isdisposed)

***

### isEnabled()

> **isEnabled**(`checkAncestors?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:613](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L613)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`isEnabled`](ArcRotateCamera.md#isenabled)

***

### isInFrustum()

> **isInFrustum**(`target`, `checkRigCameras?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1111)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`isInFrustum`](ArcRotateCamera.md#isinfrustum)

***

### isReady()

> **isReady**(`completeCheck?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:598](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L598)

Is this camera ready to be used/rendered

#### Parameters

##### completeCheck?

`boolean` = `false`

defines if a complete check (including post processes) has to be done (false by default)

#### Returns

`boolean`

true if the camera is ready

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`isReady`](ArcRotateCamera.md#isready)

***

### markAsDirty()

> **markAsDirty**(`_property?`): [`Node`](Node.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:601](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L601)

Flag the  node as dirty (Forcing it to update everything)

#### Parameters

##### \_property?

`string`

helps children apply precise "dirtyfication"

#### Returns

[`Node`](Node.md)

this node

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`markAsDirty`](ArcRotateCamera.md#markasdirty)

***

### rebuildAnglesAndRadius()

> **rebuildAnglesAndRadius**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:1271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L1271)

Rebuilds angles (alpha, beta) and radius from the give position and target

#### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`rebuildAnglesAndRadius`](ArcRotateCamera.md#rebuildanglesandradius)

***

### removeBehavior()

> **removeBehavior**(`behavior`): [`Node`](Node.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:451](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L451)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`removeBehavior`](ArcRotateCamera.md#removebehavior)

***

### restoreState()

> **restoreState**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:524](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L524)

Restored camera state. You must call storeState() first.

#### Returns

`boolean`

true if restored and false otherwise

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`restoreState`](ArcRotateCamera.md#restorestate)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1407)

Serialiaze the camera setup to a json representation

#### Returns

`any`

the JSON representation

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`serialize`](ArcRotateCamera.md#serialize)

***

### serializeAnimationRanges()

> **serializeAnimationRanges**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:912](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L912)

Serialize animation ranges into a JSON compatible object

#### Returns

`any`

serialization object

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`serializeAnimationRanges`](ArcRotateCamera.md#serializeanimationranges)

***

### setEnabled()

> **setEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:640](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L640)

Set the enabled state of this node

#### Parameters

##### value

`boolean`

defines the new enabled state

#### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`setEnabled`](ArcRotateCamera.md#setenabled)

***

### setFocalLength()

> **setFocalLength**(`value`, `sensorSize?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L269)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`setFocalLength`](ArcRotateCamera.md#setfocallength)

***

### setMatUp()

> **setMatUp**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L175)

Sets the Y-up to camera up-vector rotation matrix, and the up-vector to Y-up rotation matrix.

#### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`setMatUp`](ArcRotateCamera.md#setmatup)

***

### setPosition()

> **setPosition**(`position`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:1302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L1302)

Use a position to define the current camera related information like alpha, beta and radius

#### Parameters

##### position

[`Vector3`](Vector3.md)

Defines the position to set the camera at

#### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`setPosition`](ArcRotateCamera.md#setposition)

***

### setTarget()

> **setTarget**(`target`, `toBoundingCenter?`, `allowSamePosition?`, `cloneAlphaBetaRadius?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:1320](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L1320)

Defines the target the camera should look at.
This will automatically adapt alpha beta and radius to fit within the new target.
Please note that setting a target as a mesh will disable panning.

#### Parameters

##### target

[`TransformNode`](TransformNode.md) \| [`Vector3`](Vector3.md)

Defines the new target as a Vector or a transform node

##### toBoundingCenter?

`boolean` = `false`

In case of a mesh target, defines whether to target the mesh position or its bounding information center

##### allowSamePosition?

`boolean` = `false`

If false, prevents reapplying the new computed position if it is identical to the current one (optim)

##### cloneAlphaBetaRadius?

`boolean` = `false`

If true, replicate the current setup (alpha, beta, radius) on the new target

#### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`setTarget`](ArcRotateCamera.md#settarget)

***

### stopInterpolation()

> **stopInterpolation**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:887](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L887)

Stops any in-progress interpolation.

#### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`stopInterpolation`](ArcRotateCamera.md#stopinterpolation)

***

### storeState()

> **storeState**(): [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:846](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L846)

Stores the current state of the camera (alpha, beta, radius and target)

#### Returns

[`Camera`](Camera.md)

the camera itself

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`storeState`](ArcRotateCamera.md#storestate)

***

### toString()

> **toString**(`fullDetails?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:549](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L549)

Gets a string representation of the camera useful for debug purpose.

#### Parameters

##### fullDetails?

`boolean`

Defines that a more verbose level of logging is required

#### Returns

`string`

the string representation

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`toString`](ArcRotateCamera.md#tostring)

***

### unfreezeProjectionMatrix()

> **unfreezeProjectionMatrix**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:932](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L932)

Unfreeze the projection matrix if it has previously been freezed by freezeProjectionMatrix.

#### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`unfreezeProjectionMatrix`](ArcRotateCamera.md#unfreezeprojectionmatrix)

***

### update()

> **update**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:739](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L739)

Update the camera state according to the different inputs gathered during the frame.

#### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`update`](ArcRotateCamera.md#update)

***

### zoomOn()

> **zoomOn**(`meshes?`, `doNotUpdateMaxZ?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/arcRotateCamera.ts:1446](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/arcRotateCamera.ts#L1446)

Zooms on a mesh to be at the min distance where we could see it fully in the current viewport.

#### Parameters

##### meshes?

[`AbstractMesh`](AbstractMesh.md)[]

Defines the mesh to zoom on

##### doNotUpdateMaxZ?

`boolean` = `false`

Defines whether or not maxZ should be updated whilst zooming on the mesh (this can happen if the mesh is big and the maxradius pretty small for instance)

#### Returns

`void`

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`zoomOn`](ArcRotateCamera.md#zoomon)

***

### AddNodeConstructor()

> `static` **AddNodeConstructor**(`type`, `constructorFunc`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L61)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`AddNodeConstructor`](ArcRotateCamera.md#addnodeconstructor)

***

### Construct()

> `static` **Construct**(`type`, `name`, `scene`, `options?`): [`Nullable`](../type-aliases/Nullable.md)\<() => [`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L73)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`Construct`](ArcRotateCamera.md#construct)

***

### GetConstructorFromName()

> `static` **GetConstructorFromName**(`type`, `name`, `scene`, `interaxial_distance?`, `isStereoscopicSideBySide?`): () => [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1491](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1491)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`GetConstructorFromName`](ArcRotateCamera.md#getconstructorfromname)

***

### Parse()

> `static` **Parse**(`parsedCamera`, `scene`): [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/camera.ts:1520](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/camera.ts#L1520)

Parse a JSON and creates the camera from the parsed information

#### Parameters

##### parsedCamera

`any`

The JSON to parse

##### scene

[`Scene`](Scene.md)

The scene to instantiate the camera in

#### Returns

[`Camera`](Camera.md)

the newly constructed camera

#### Inherited from

[`ArcRotateCamera`](ArcRotateCamera.md).[`Parse`](ArcRotateCamera.md#parse)

***

### ParseAnimationRanges()

> `static` **ParseAnimationRanges**(`node`, `parsedNode`, `_scene`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:984](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L984)

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

[`ArcRotateCamera`](ArcRotateCamera.md).[`ParseAnimationRanges`](ArcRotateCamera.md#parseanimationranges)
