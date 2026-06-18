[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRNearInteractionOptions

# Interface: IWebXRNearInteractionOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L96)

Options interface for the near interaction module

## Properties

### customUtilityLayerScene?

> `optional` **customUtilityLayerScene?**: [`Scene`](../classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L100)

If provided, this scene will be used to render meshes.

***

### disableSwitchOnClick?

> `optional` **disableSwitchOnClick?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L122)

Disable switching the near interaction from one controller to the other.
If the preferred hand is set it will be fixed on this hand, and if not it will be fixed on the first controller added to the scene

***

### enableNearInteractionOnAllControllers?

> `optional` **enableNearInteractionOnAllControllers?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L112)

Enable near interaction on all controllers instead of switching between them

***

### farInteractionFeature?

> `optional` **farInteractionFeature?**: [`WebXRControllerPointerSelection`](../classes/WebXRControllerPointerSelection.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L127)

Far interaction feature to toggle when near interaction takes precedence

***

### motionControllerOrbMaterial?

> `optional` **motionControllerOrbMaterial?**: [`Material`](../classes/Material.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L137)

Optional material for the motion controller orb, if enabled

***

### motionControllerTouchMaterialSnippetUrl?

> `optional` **motionControllerTouchMaterialSnippetUrl?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L144)

If provided, this URL will be used by Node Material to generate the material for the motion controller orb
If not provided, a snippet will be downloaded from the Babylon.js snippet server CDN.
The NME JSON file can be found here - https://github.com/BabylonJS/Assets/blob/master/nme/nearInteractionTouchMaterial.json

***

### nearInteractionControllerMode?

> `optional` **nearInteractionControllerMode?**: [`WebXRNearControllerMode`](../enumerations/WebXRNearControllerMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L132)

Near interaction mode for motion controllers

***

### preferredHandedness?

> `optional` **preferredHandedness?**: `XRHandedness`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L117)

The preferred hand to give the near interaction to. This will be prioritized when the controller initialize.
If switch is enabled, it will still allow the user to switch between the different controllers

***

### useUtilityLayer?

> `optional` **useUtilityLayer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L104)

Should meshes created here be added to a utility layer or the main scene

***

### xrInput

> **xrInput**: [`WebXRInput`](../classes/WebXRInput.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L108)

The xr input to use with this near interaction
