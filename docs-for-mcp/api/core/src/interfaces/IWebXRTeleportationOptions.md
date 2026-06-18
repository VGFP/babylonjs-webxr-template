[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRTeleportationOptions

# Interface: IWebXRTeleportationOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L38)

The options container for the teleportation module

## Properties

### blockAllPickableMeshes?

> `optional` **blockAllPickableMeshes?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L141)

Should the teleportation ray be blocked by all of the scene's pickable meshes?
Defaults to false

***

### blockedRayColor?

> `optional` **blockedRayColor?**: [`Color4`](../classes/Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L147)

Color of the teleportation ray when it is blocked by a mesh in the pickBlockerMeshes array
Defaults to red.

***

### blockerMeshesPredicate?

> `optional` **blockerMeshesPredicate?**: (`mesh`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L135)

define an optional predicate to select which meshes should block the teleportation ray

#### Parameters

##### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

#### Returns

`boolean`

***

### customUtilityLayerScene?

> `optional` **customUtilityLayerScene?**: [`Scene`](../classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L42)

if provided, this scene will be used to render meshes.

***

### defaultTargetMeshOptions?

> `optional` **defaultTargetMeshOptions?**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L46)

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

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L78)

A list of meshes to use as floor meshes.
Meshes can be added and removed after initializing the feature using the
addFloorMesh and removeFloorMesh functions
If empty, rotation will still work

***

### forceHandedness?

> `optional` **forceHandedness?**: `XRHandedness`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L152)

Should teleport work only on a specific hand?

***

### generateRayPathMesh?

> `optional` **generateRayPathMesh?**: (`points`, `pickingInfo`) => [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L157)

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

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L130)

Meshes that the teleportation ray cannot go through

***

### renderingGroupId?

> `optional` **renderingGroupId?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L82)

use this rendering group id for the meshes (optional)

***

### snapPointsOnly?

> `optional` **snapPointsOnly?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L86)

Should teleportation move only to snap points

***

### snapPositions?

> `optional` **snapPositions?**: [`Vector3`](../classes/Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L91)

An array of points to which the teleportation will snap to.
If the teleportation ray is in the proximity of one of those points, it will be corrected to this point.

***

### snapToPositionRadius?

> `optional` **snapToPositionRadius?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L96)

How close should the teleportation ray be in order to snap to position.
Default to 0.8 units (meters)

***

### teleportationTargetMesh?

> `optional` **teleportationTargetMesh?**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L103)

Provide your own teleportation mesh instead of babylon's wonderful doughnut.
If you want to support rotation, make sure your mesh has a direction indicator.

When left untouched, the default mesh will be initialized.

***

### timeToTeleport?

> `optional` **timeToTeleport?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L107)

If main component is used (no thumbstick), how long in milliseconds should the "long press" take before teleport. Defaults to 3 seconds

***

### timeToTeleportStart?

> `optional` **timeToTeleportStart?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L112)

If the main component is used, how long in milliseconds should the "long press" take before teleport starts. Defaults to 0

***

### useMainComponentOnly?

> `optional` **useMainComponentOnly?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L117)

Disable using the thumbstick and use the main component (usually trigger) on long press.
This will be automatically true if the controller doesn't have a thumbstick or touchpad.

***

### useUtilityLayer?

> `optional` **useUtilityLayer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L121)

Should meshes created here be added to a utility layer or the main scene

***

### xrInput

> **xrInput**: [`WebXRInput`](../classes/WebXRInput.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerTeleportation.pure.ts#L125)

Babylon XR Input class for controller
