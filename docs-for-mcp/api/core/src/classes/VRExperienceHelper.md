[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / VRExperienceHelper

# ~~Class: VRExperienceHelper~~

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:247](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L247)

Helps to quickly add VR support to an existing scene.
See https://doc.babylonjs.com/features/featuresDeepDive/cameras/webVRHelper

## Deprecated

Use WebXR instead!

## Constructors

### Constructor

> **new VRExperienceHelper**(`scene`, `webVROptions?`): `VRExperienceHelper`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:524](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L524)

Instantiates a VRExperienceHelper.
Helps to quickly add VR support to an existing scene.

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene the VRExperienceHelper belongs to.

##### webVROptions?

[`VRExperienceHelperOptions`](../interfaces/VRExperienceHelperOptions.md) = `{}`

Options to modify the vr experience helper's behavior.

#### Returns

`VRExperienceHelper`

## Properties

### ~~enableGazeEvenWhenNoPointerLock~~

> **enableGazeEvenWhenNoPointerLock**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:270](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L270)

Gets or sets a boolean indicating that gaze can be enabled even if pointer lock is not engage (useful on iOS where fullscreen mode and pointer lock are not supported)

***

### ~~exitVROnDoubleTap~~

> **exitVROnDoubleTap**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:275](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L275)

Gets or sets a boolean indicating that the VREXperienceHelper will exit VR if double tap is detected

***

### ~~meshSelectionPredicate~~

> **meshSelectionPredicate**: (`mesh`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:367](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L367)

To be optionally changed by user to define custom selection logic (after ray selection)

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

#### Returns

`boolean`

***

### ~~onAfterCameraTeleport~~

> **onAfterCameraTeleport**: [`Observable`](Observable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:350](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L350)

Observable raised after camera teleportation

***

### ~~onAfterEnteringVRObservable~~

> **onAfterEnteringVRObservable**: [`Observable`](Observable.md)\<[`OnAfterEnteringVRObservableEvent`](OnAfterEnteringVRObservableEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L285)

Observable raised when entering VR has completed.

***

### ~~onBeforeCameraTeleport~~

> **onBeforeCameraTeleport**: [`Observable`](Observable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L345)

Observable raised before camera teleportation

***

### ~~onEnteringVRObservable~~

> **onEnteringVRObservable**: [`Observable`](Observable.md)\<`VRExperienceHelper`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:280](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L280)

Observable raised right before entering VR.

***

### ~~onExitingVRObservable~~

> **onExitingVRObservable**: [`Observable`](Observable.md)\<`VRExperienceHelper`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:290](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L290)

Observable raised when exiting VR.

***

### ~~onNewMeshPicked~~

> **onNewMeshPicked**: [`Observable`](Observable.md)\<[`PickingInfo`](PickingInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:338](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L338)

Observable raised when a new mesh is picked based on meshSelectionPredicate

***

### ~~onNewMeshSelected~~

> **onNewMeshSelected**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:333](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L333)

Observable raised when a new mesh is selected based on meshSelectionPredicate

***

### ~~onSelectedMeshUnselected~~

> **onSelectedMeshUnselected**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:355](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L355)

Observable raised when current selected mesh gets unselected

***

### ~~raySelectionPredicate~~

> **raySelectionPredicate**: (`mesh`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:362](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L362)

To be optionally changed by user to define custom ray selection

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

#### Returns

`boolean`

***

### ~~requestPointerLockOnFullScreen~~

> **requestPointerLockOnFullScreen**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:503](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L503)

Defines whether or not Pointer lock should be requested when switching to
full screen.

***

### ~~teleportationEnabled~~

> **teleportationEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:372](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L372)

Set teleportation enabled. If set to false camera teleportation will be disabled but camera rotation will be kept.

***

### ~~updateControllerLaserColor~~

> **updateControllerLaserColor**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:434](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L434)

If the controller laser color should be updated when selecting meshes

***

### ~~updateGazeTrackerColor~~

> **updateGazeTrackerColor**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:430](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L430)

If the gaze trackers color should be updated when selecting meshes

***

### ~~updateGazeTrackerScale~~

> **updateGazeTrackerScale**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:426](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L426)

If the gaze trackers scale should be updated to be constant size when pointing at near/far meshes

***

### ~~webVROptions~~

> **webVROptions**: [`VRExperienceHelperOptions`](../interfaces/VRExperienceHelperOptions.md) = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:527](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L527)

[Empty object] Options to modify the vr experience helper's behavior.

***

### ~~xr~~

> **xr**: [`WebXRDefaultExperience`](WebXRDefaultExperience.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:510](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L510)

If asking to force XR, this will be populated with the default xr experience

***

### ~~xrTestDone~~

> **xrTestDone**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:516](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L516)

Was the XR test done already. If this is true AND this.xr exists, xr is initialized.
If this is true and no this.xr, xr exists but is not supported, using WebVR.

***

### ~~TELEPORTATIONMODE\_CONSTANTSPEED~~

> `readonly` `static` **TELEPORTATIONMODE\_CONSTANTSPEED**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:1436](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L1436)

Speed Constant Teleportation Mode

***

### ~~TELEPORTATIONMODE\_CONSTANTTIME~~

> `readonly` `static` **TELEPORTATIONMODE\_CONSTANTTIME**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:1432](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L1432)

Time Constant Teleportation Mode

## Accessors

### ~~currentVRCamera~~

#### Get Signature

> **get** **currentVRCamera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:477](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L477)

Based on the current WebVR support, returns the current VR camera used.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

***

### ~~deviceOrientationCamera~~

#### Get Signature

> **get** **deviceOrientationCamera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`DeviceOrientationCamera`](DeviceOrientationCamera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:470](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L470)

The deviceOrientationCamera used as the camera when not in VR.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DeviceOrientationCamera`](DeviceOrientationCamera.md)\>

***

### ~~displayGaze~~

#### Get Signature

> **get** **displayGaze**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:439](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L439)

If the ray of the gaze should be displayed.

##### Returns

`boolean`

#### Set Signature

> **set** **displayGaze**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:446](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L446)

Sets if the ray of the gaze should be displayed.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### ~~displayLaserPointer~~

#### Get Signature

> **get** **displayLaserPointer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:456](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L456)

If the ray of the LaserPointer should be displayed.

##### Returns

`boolean`

#### Set Signature

> **set** **displayLaserPointer**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:463](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L463)

Sets if the ray of the LaserPointer should be displayed.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### ~~gazeTrackerMesh~~

#### Get Signature

> **get** **gazeTrackerMesh**(): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:403](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L403)

The mesh used to display where the user is selecting, this mesh will be cloned and set as the gazeTracker for the left and right controller
when set bakeCurrentTransformIntoVertices will be called on the mesh.
See https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/center_origin/bakingTransforms

##### Returns

[`Mesh`](Mesh.md)

#### Set Signature

> **set** **gazeTrackerMesh**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L407)

##### Parameters

###### value

[`Mesh`](Mesh.md)

##### Returns

`void`

***

### ~~isInVRMode~~

#### Get Signature

> **get** **isInVRMode**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:784](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L784)

Gets a value indicating if we are currently in VR mode.

##### Returns

`boolean`

***

### ~~onEnteringVR~~

#### Get Signature

> **get** **onEnteringVR**(): [`Observable`](Observable.md)\<`VRExperienceHelper`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:295](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L295)

Return this.onEnteringVRObservable
Note: This one is for backward compatibility. Please use onEnteringVRObservable directly

##### Returns

[`Observable`](Observable.md)\<`VRExperienceHelper`\>

***

### ~~onExitingVR~~

#### Get Signature

> **get** **onExitingVR**(): [`Observable`](Observable.md)\<`VRExperienceHelper`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L302)

Return this.onExitingVRObservable
Note: This one is for backward compatibility. Please use onExitingVRObservable directly

##### Returns

[`Observable`](Observable.md)\<`VRExperienceHelper`\>

***

### ~~position~~

#### Get Signature

> **get** **position**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:962](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L962)

The position of the vr experience helper.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **position**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:969](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L969)

Sets the position of the vr experience helper.

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### ~~teleportationTarget~~

#### Get Signature

> **get** **teleportationTarget**(): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:383](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L383)

The mesh used to display where the user is going to teleport.

##### Returns

[`Mesh`](Mesh.md)

#### Set Signature

> **set** **teleportationTarget**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:390](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L390)

Sets the mesh to be used to display where the user is going to teleport.

##### Parameters

###### value

[`Mesh`](Mesh.md)

##### Returns

`void`

***

### ~~vrButton~~

#### Get Signature

> **get** **vrButton**(): [`Nullable`](../type-aliases/Nullable.md)\<`HTMLButtonElement`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:491](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L491)

The html button that is used to trigger entering into VR.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`HTMLButtonElement`\>

***

### ~~vrDeviceOrientationCamera~~

#### Get Signature

> **get** **vrDeviceOrientationCamera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:484](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L484)

The deviceOrientationCamera that is used as a fallback when vr device is not connected.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md)\>

## Methods

### ~~addFloorMesh()~~

> **addFloorMesh**(`floorMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:1036](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L1036)

Adds a floor mesh to be used for teleportation.

#### Parameters

##### floorMesh

[`Mesh`](Mesh.md)

the mesh to be used for teleportation.

#### Returns

`void`

***

### ~~changeGazeColor()~~

> **changeGazeColor**(`color`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:1583](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L1583)

Sets the color of the ray from the vr headsets gaze.

#### Parameters

##### color

[`Color3`](Color3.md)

new color for the ray.

#### Returns

`void`

***

### ~~changeLaserColor()~~

> **changeLaserColor**(`_color`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:1573](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L1573)

Sets the color of the laser ray from the vr controllers.

#### Parameters

##### \_color

[`Color3`](Color3.md)

new color for the ray.

#### Returns

`void`

***

### ~~dispose()~~

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:1596](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L1596)

Exits VR and disposes of the vr experience helper

#### Returns

`void`

***

### ~~enableInteractions()~~

> **enableInteractions**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:980](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L980)

Enables controllers and user interactions such as selecting and object or clicking on an object.

#### Returns

`void`

***

### ~~enableTeleportation()~~

> **enableTeleportation**(`vrTeleportationOptions?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:1067](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L1067)

Enables interactions and teleportation using the VR controllers and gaze.

#### Parameters

##### vrTeleportationOptions?

[`VRTeleportationOptions`](../interfaces/VRTeleportationOptions.md) = `{}`

options to modify teleportation behavior.

#### Returns

`void`

***

### ~~enterVR()~~

> **enterVR**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:818](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L818)

Attempt to enter VR. If a headset is connected and ready, will request present on that.
Otherwise, will use the fullscreen API.

#### Returns

`void`

***

### ~~exitVR()~~

> **exitVR**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:885](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L885)

Attempt to exit VR, or fullscreen.

#### Returns

`void`

***

### ~~getClassName()~~

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:1645](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L1645)

Gets the name of the VRExperienceHelper class

#### Returns

`string`

"VRExperienceHelper"

***

### ~~removeFloorMesh()~~

> **removeFloorMesh**(`floorMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:1052](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L1052)

Removes a floor mesh from being used for teleportation.

#### Parameters

##### floorMesh

[`Mesh`](Mesh.md)

the mesh to be removed.

#### Returns

`void`

***

### ~~setGazeColor()~~

> **setGazeColor**(`color`, `pickedColor?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:1565](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L1565)

Permanently set new colors for the gaze pointer

#### Parameters

##### color

[`Color3`](Color3.md)

the new gaze color

##### pickedColor?

[`Color3`](Color3.md) = `...`

the new gaze color when picked mesh detected

#### Returns

`void`

***

### ~~setLaserColor()~~

> **setLaserColor**(`color`, `pickedColor?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:1548](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L1548)

Permanently set new colors for the laser pointer

#### Parameters

##### color

[`Color3`](Color3.md)

the new laser color

##### pickedColor?

[`Color3`](Color3.md) = `...`

the new laser color when picked mesh detected

#### Returns

`void`

***

### ~~setLaserLightingState()~~

> **setLaserLightingState**(`_enabled?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:1556](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L1556)

Set lighting enabled / disabled on the laser pointer of both controllers

#### Parameters

##### \_enabled?

`boolean` = `true`

should the lighting be enabled on the laser pointer

#### Returns

`void`

***

### ~~teleportCamera()~~

> **teleportCamera**(`location`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:1442](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L1442)

Teleports the users feet to the desired location

#### Parameters

##### location

[`Vector3`](Vector3.md)

The location where the user's feet should be placed

#### Returns

`void`
