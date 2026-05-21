[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRDefaultExperience

# Class: WebXRDefaultExperience

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L100)

Default experience for webxr

## Properties

### baseExperience

> **baseExperience**: [`WebXRExperienceHelper`](WebXRExperienceHelper.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L104)

Base experience

***

### enterExitUI

> **enterExitUI**: [`WebXREnterExitUI`](WebXREnterExitUI.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L108)

Enables ui for entering/exiting xr

***

### input

> **input**: [`WebXRInput`](WebXRInput.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L112)

Input experience extension

***

### nearInteraction

> **nearInteraction**: [`WebXRNearInteraction`](WebXRNearInteraction.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L129)

Enables near interaction for hands/controllers

***

### pointerSelection

> **pointerSelection**: [`WebXRControllerPointerSelection`](WebXRControllerPointerSelection.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L116)

Enables laser pointer and selection

***

### renderTarget

> **renderTarget**: [`WebXRRenderTarget`](../interfaces/WebXRRenderTarget.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L120)

Default target xr should render to

***

### teleportation

> **teleportation**: [`WebXRMotionControllerTeleportation`](WebXRMotionControllerTeleportation.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L124)

Enables teleportation

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:256](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L256)

Disposes of the experience helper

#### Returns

`void`

***

### CreateAsync()

> `static` **CreateAsync**(`scene`, `options?`): `Promise`\<`WebXRDefaultExperience`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRDefaultExperience.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRDefaultExperience.ts#L139)

Creates the default xr experience

#### Parameters

##### scene

[`Scene`](Scene.md)

scene

##### options?

[`WebXRDefaultExperienceOptions`](WebXRDefaultExperienceOptions.md) = `{}`

options for basic configuration

#### Returns

`Promise`\<`WebXRDefaultExperience`\>

resulting WebXRDefaultExperience
