[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / VRTeleportationOptions

# Interface: VRTeleportationOptions

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L41)

Options to modify the vr teleportation behavior.

## Properties

### easingFunction?

> `optional` **easingFunction?**: [`EasingFunction`](../classes/EasingFunction.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L65)

The easing function used in the animation or null for Linear. (default CircleEase)

***

### floorMeshes?

> `optional` **floorMeshes?**: [`Mesh`](../classes/Mesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L49)

A list of meshes to be used as the teleportation floor. (default: empty)

***

### floorMeshName?

> `optional` **floorMeshName?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L45)

The name of the mesh which should be used as the teleportation floor. (default: null)

***

### teleportationMode?

> `optional` **teleportationMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L53)

The teleportation mode. (default: TELEPORTATIONMODE_CONSTANTTIME)

***

### teleportationSpeed?

> `optional` **teleportationSpeed?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L61)

The speed of the animation in distance/sec, apply when animationMode is TELEPORTATIONMODE_CONSTANTSPEED. (default 20 units / sec)

***

### teleportationTime?

> `optional` **teleportationTime?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Cameras/VR/vrExperienceHelper.ts#L57)

The duration of the animation in ms, apply when animationMode is TELEPORTATIONMODE_CONSTANTTIME. (default 122ms)
