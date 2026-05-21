[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRControllerPointerSelectionOptions

# Interface: IWebXRControllerPointerSelectionOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L30)

Options interface for the pointer selection module

## Properties

### customLasterPointerMeshGenerator?

> `optional` **customLasterPointerMeshGenerator?**: () => [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L121)

A function that will be called when a new laser pointer mesh is generated.
This function should return a mesh that will be used as the laser pointer mesh.
The height (y) of the mesh must be 1.

#### Returns

[`AbstractMesh`](../classes/AbstractMesh.md)

***

### customSelectionMeshGenerator?

> `optional` **customSelectionMeshGenerator?**: () => [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L114)

A function that will be called when a new selection mesh is generated.
This function should return a mesh that will be used as the selection mesh.
The default is a torus with a 0.01 diameter and 0.0075 thickness .

#### Returns

[`Mesh`](../classes/Mesh.md)

***

### customUtilityLayerScene?

> `optional` **customUtilityLayerScene?**: [`Scene`](../classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L34)

if provided, this scene will be used to render meshes.

***

### disablePointerUpOnTouchOut

> **disablePointerUpOnTouchOut**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L41)

Disable the pointer up event when the xr controller in screen and gaze mode is disposed (meaning - when the user removed the finger from the screen)
If not disabled, the last picked point will be used to execute a pointer up event
If disabled, pointer up event will be triggered right after the pointer down event.
Used in screen and gaze target ray mode only

***

### disableScenePointerVectorUpdate

> **disableScenePointerVectorUpdate**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L85)

Should the scene pointerX and pointerY update be disabled
This is required for fullscreen AR GUI, but might slow down other experiences.
Disable in VR, if not needed.
The first rig camera (left eye) will be used to calculate the projection

***

### disableSwitchOnClick?

> `optional` **disableSwitchOnClick?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L102)

Disable switching the pointer selection from one controller to the other.
If the preferred hand is set it will be fixed on this hand, and if not it will be fixed on the first controller added to the scene

***

### enablePointerSelectionOnAllControllers?

> `optional` **enablePointerSelectionOnAllControllers?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L90)

Enable pointer selection on all controllers instead of switching between them

***

### forceGazeMode

> **forceGazeMode**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L45)

For gaze mode for tracked-pointer / controllers (time to select instead of button press)

***

### forceGripIfAvailable?

> `optional` **forceGripIfAvailable?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L126)

Use the grip space instead of the pointer space for selection, if available.

***

### gazeCamera?

> `optional` **gazeCamera?**: [`WebXRCamera`](../classes/WebXRCamera.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L73)

Optional WebXR camera to be used for gaze selection

***

### gazeModePointerMovedFactor?

> `optional` **gazeModePointerMovedFactor?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L51)

Factor to be applied to the pointer-moved function in the gaze mode. How sensitive should the gaze mode be when checking if the pointer moved
to start a new countdown to the pointer down event.
Defaults to 1.

***

### lookAndPickMode?

> `optional` **lookAndPickMode?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L133)

**`Experimental`**

If set to true, the hand rays will be disabled and the user will be able to look and pick objects.
This requires system support (like in the vision OS) and will not work in all systems.
 - this is an experimental feature and might change int he future

***

### maxPointerDistance?

> `optional` **maxPointerDistance?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L107)

The maximum distance of the pointer selection feature. Defaults to 100.

***

### overrideButtonId?

> `optional` **overrideButtonId?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L55)

Different button type to use instead of the main component

***

### preferredHandedness?

> `optional` **preferredHandedness?**: `XRHandedness`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L96)

The preferred hand to give the pointer selection to. This will be prioritized when the controller initialize.
If switch is enabled, it will still allow the user to switch between the different controllers

***

### renderingGroupId?

> `optional` **renderingGroupId?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L59)

use this rendering group id for the meshes (optional)

***

### timeToSelect?

> `optional` **timeToSelect?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L65)

The amount of time in milliseconds it takes between pick found something to a pointer down event.
Used in gaze modes. Tracked pointer uses the trigger, screen uses touch events
3000 means 3 seconds between pointing at something and selecting it

***

### useUtilityLayer?

> `optional` **useUtilityLayer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L69)

Should meshes created here be added to a utility layer or the main scene

***

### xrInput

> **xrInput**: [`WebXRInput`](../classes/WebXRInput.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPointerSelection.ts#L77)

the xr input to use with this pointer selection
