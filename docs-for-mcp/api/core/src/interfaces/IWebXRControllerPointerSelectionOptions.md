[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRControllerPointerSelectionOptions

# Interface: IWebXRControllerPointerSelectionOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L32)

Options interface for the pointer selection module

## Properties

### customLasterPointerMeshGenerator?

> `optional` **customLasterPointerMeshGenerator?**: () => [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L123)

A function that will be called when a new laser pointer mesh is generated.
This function should return a mesh that will be used as the laser pointer mesh.
The height (y) of the mesh must be 1.

#### Returns

[`AbstractMesh`](../classes/AbstractMesh.md)

***

### customSelectionMeshGenerator?

> `optional` **customSelectionMeshGenerator?**: () => [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L116)

A function that will be called when a new selection mesh is generated.
This function should return a mesh that will be used as the selection mesh.
The default is a torus with a 0.01 diameter and 0.0075 thickness .

#### Returns

[`Mesh`](../classes/Mesh.md)

***

### customUtilityLayerScene?

> `optional` **customUtilityLayerScene?**: [`Scene`](../classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L36)

if provided, this scene will be used to render meshes.

***

### disablePointerUpOnTouchOut

> **disablePointerUpOnTouchOut**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L43)

Disable the pointer up event when the xr controller in screen and gaze mode is disposed (meaning - when the user removed the finger from the screen)
If not disabled, the last picked point will be used to execute a pointer up event
If disabled, pointer up event will be triggered right after the pointer down event.
Used in screen and gaze target ray mode only

***

### disableScenePointerVectorUpdate

> **disableScenePointerVectorUpdate**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L87)

Should the scene pointerX and pointerY update be disabled
This is required for fullscreen AR GUI, but might slow down other experiences.
Disable in VR, if not needed.
The first rig camera (left eye) will be used to calculate the projection

***

### disableSwitchOnClick?

> `optional` **disableSwitchOnClick?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L104)

Disable switching the pointer selection from one controller to the other.
If the preferred hand is set it will be fixed on this hand, and if not it will be fixed on the first controller added to the scene

***

### enablePointerSelectionOnAllControllers?

> `optional` **enablePointerSelectionOnAllControllers?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L92)

Enable pointer selection on all controllers instead of switching between them

***

### forceGazeMode

> **forceGazeMode**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L47)

For gaze mode for tracked-pointer / controllers (time to select instead of button press)

***

### forceGripIfAvailable?

> `optional` **forceGripIfAvailable?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L128)

Use the grip space instead of the pointer space for selection, if available.

***

### gazeCamera?

> `optional` **gazeCamera?**: [`WebXRCamera`](../classes/WebXRCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L75)

Optional WebXR camera to be used for gaze selection

***

### gazeModePointerMovedFactor?

> `optional` **gazeModePointerMovedFactor?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L53)

Factor to be applied to the pointer-moved function in the gaze mode. How sensitive should the gaze mode be when checking if the pointer moved
to start a new countdown to the pointer down event.
Defaults to 1.

***

### lookAndPickMode?

> `optional` **lookAndPickMode?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L135)

**`Experimental`**

If set to true, the hand rays will be disabled and the user will be able to look and pick objects.
This requires system support (like in the vision OS) and will not work in all systems.
 - this is an experimental feature and might change int he future

***

### maxPointerDistance?

> `optional` **maxPointerDistance?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L109)

The maximum distance of the pointer selection feature. Defaults to 100.

***

### overrideButtonId?

> `optional` **overrideButtonId?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L57)

Different button type to use instead of the main component

***

### preferredHandedness?

> `optional` **preferredHandedness?**: `XRHandedness`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L98)

The preferred hand to give the pointer selection to. This will be prioritized when the controller initialize.
If switch is enabled, it will still allow the user to switch between the different controllers

***

### renderingGroupId?

> `optional` **renderingGroupId?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L61)

use this rendering group id for the meshes (optional)

***

### timeToSelect?

> `optional` **timeToSelect?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L67)

The amount of time in milliseconds it takes between pick found something to a pointer down event.
Used in gaze modes. Tracked pointer uses the trigger, screen uses touch events
3000 means 3 seconds between pointing at something and selecting it

***

### useUtilityLayer?

> `optional` **useUtilityLayer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L71)

Should meshes created here be added to a utility layer or the main scene

***

### xrInput

> **xrInput**: [`WebXRInput`](../classes/WebXRInput.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.pure.ts#L79)

the xr input to use with this pointer selection
