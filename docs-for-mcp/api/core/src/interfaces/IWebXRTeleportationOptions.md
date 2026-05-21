[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRTeleportationOptions

# Interface: IWebXRTeleportationOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L34)

The options container for the teleportation module

## Properties

### blockAllPickableMeshes?

> `optional` **blockAllPickableMeshes?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L137)

Should the teleportation ray be blocked by all of the scene's pickable meshes?
Defaults to false

***

### blockedRayColor?

> `optional` **blockedRayColor?**: [`Color4`](../classes/Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L143)

Color of the teleportation ray when it is blocked by a mesh in the pickBlockerMeshes array
Defaults to red.

***

### blockerMeshesPredicate?

> `optional` **blockerMeshesPredicate?**: (`mesh`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L131)

define an optional predicate to select which meshes should block the teleportation ray

#### Parameters

##### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

#### Returns

`boolean`

***

### customUtilityLayerScene?

> `optional` **customUtilityLayerScene?**: [`Scene`](../classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L38)

if provided, this scene will be used to render meshes.

***

### defaultTargetMeshOptions?

> `optional` **defaultTargetMeshOptions?**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L42)

Values to configure the default target mesh

#### disableAnimation?

> `optional` **disableAnimation?**: `boolean`

Disable the mesh's animation sequence

#### disableLighting?

> `optional` **disableLighting?**: `boolean`

Disable lighting on the material or the ring and arrow

#### teleportationBorderColor?

> `optional` **teleportationBorderColor?**: `string`

Border color for the teleportation area

#### teleportationCircleMaterial?

> `optional` **teleportationCircleMaterial?**: [`Material`](../classes/Material.md)

Override the default material of the Landing Zone

#### teleportationFillColor?

> `optional` **teleportationFillColor?**: `string`

Fill color of the teleportation area

#### torusArrowMaterial?

> `optional` **torusArrowMaterial?**: [`Material`](../classes/Material.md)

Override the default material of the torus and arrow

***

### floorMeshes?

> `optional` **floorMeshes?**: [`AbstractMesh`](../classes/AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L74)

A list of meshes to use as floor meshes.
Meshes can be added and removed after initializing the feature using the
addFloorMesh and removeFloorMesh functions
If empty, rotation will still work

***

### forceHandedness?

> `optional` **forceHandedness?**: `XRHandedness`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L148)

Should teleport work only on a specific hand?

***

### generateRayPathMesh?

> `optional` **generateRayPathMesh?**: (`points`, `pickingInfo`) => [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L153)

If provided, this function will be used to generate the ray mesh instead of the lines mesh being used per default

#### Parameters

##### points

[`Vector3`](../classes/Vector3.md)[]

##### pickingInfo

[`PickingInfo`](../classes/PickingInfo.md)

#### Returns

[`AbstractMesh`](../classes/AbstractMesh.md)

***

### pickBlockerMeshes?

> `optional` **pickBlockerMeshes?**: [`AbstractMesh`](../classes/AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L126)

Meshes that the teleportation ray cannot go through

***

### renderingGroupId?

> `optional` **renderingGroupId?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L78)

use this rendering group id for the meshes (optional)

***

### snapPointsOnly?

> `optional` **snapPointsOnly?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L82)

Should teleportation move only to snap points

***

### snapPositions?

> `optional` **snapPositions?**: [`Vector3`](../classes/Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L87)

An array of points to which the teleportation will snap to.
If the teleportation ray is in the proximity of one of those points, it will be corrected to this point.

***

### snapToPositionRadius?

> `optional` **snapToPositionRadius?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L92)

How close should the teleportation ray be in order to snap to position.
Default to 0.8 units (meters)

***

### teleportationTargetMesh?

> `optional` **teleportationTargetMesh?**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L99)

Provide your own teleportation mesh instead of babylon's wonderful doughnut.
If you want to support rotation, make sure your mesh has a direction indicator.

When left untouched, the default mesh will be initialized.

***

### timeToTeleport?

> `optional` **timeToTeleport?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L103)

If main component is used (no thumbstick), how long in milliseconds should the "long press" take before teleport. Defaults to 3 seconds

***

### timeToTeleportStart?

> `optional` **timeToTeleportStart?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L108)

If the main component is used, how long in milliseconds should the "long press" take before teleport starts. Defaults to 0

***

### useMainComponentOnly?

> `optional` **useMainComponentOnly?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L113)

Disable using the thumbstick and use the main component (usually trigger) on long press.
This will be automatically true if the controller doesn't have a thumbstick or touchpad.

***

### useUtilityLayer?

> `optional` **useUtilityLayer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L117)

Should meshes created here be added to a utility layer or the main scene

***

### xrInput

> **xrInput**: [`WebXRInput`](../classes/WebXRInput.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L121)

Babylon XR Input class for controller
