[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / VRExperienceHelperOptions

# Interface: VRExperienceHelperOptions

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L72)

Options to modify the vr experience helper's behavior.

## Properties

### createDeviceOrientationCamera?

> `optional` **createDeviceOrientationCamera?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L76)

Create a DeviceOrientationCamera to be used as your out of vr camera. (default: true)

***

### createFallbackVRDeviceOrientationFreeCamera?

> `optional` **createFallbackVRDeviceOrientationFreeCamera?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L80)

Create a VRDeviceOrientationFreeCamera to be used for VR when no external HMD is found. (default: true)

***

### floorMeshes?

> `optional` **floorMeshes?**: [`Mesh`](../classes/Mesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L88)

A list of meshes to be used as the teleportation floor. If specified, teleportation will be enabled (default: undefined)

***

### laserToggle?

> `optional` **laserToggle?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L84)

Uses the main button on the controller to toggle the laser casted. (default: true)

***

### useXR?

> `optional` **useXR?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L96)

Defines if WebXR should be used (if available)

***

### vrDeviceOrientationCameraMetrics?

> `optional` **vrDeviceOrientationCameraMetrics?**: [`VRCameraMetrics`](../classes/VRCameraMetrics.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L92)

Distortion metrics for the fallback vrDeviceOrientationCamera (default: VRCameraMetrics.Default)
