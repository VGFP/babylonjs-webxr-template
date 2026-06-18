[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / VRTeleportationOptions

# Interface: VRTeleportationOptions

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L41)

Options to modify the vr teleportation behavior.

## Properties

### easingFunction?

> `optional` **easingFunction?**: [`EasingFunction`](../classes/EasingFunction.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L65)

The easing function used in the animation or null for Linear. (default CircleEase)

***

### floorMeshes?

> `optional` **floorMeshes?**: [`Mesh`](../classes/Mesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L49)

A list of meshes to be used as the teleportation floor. (default: empty)

***

### floorMeshName?

> `optional` **floorMeshName?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L45)

The name of the mesh which should be used as the teleportation floor. (default: null)

***

### teleportationMode?

> `optional` **teleportationMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L53)

The teleportation mode. (default: TELEPORTATIONMODE_CONSTANTTIME)

***

### teleportationSpeed?

> `optional` **teleportationSpeed?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L61)

The speed of the animation in distance/sec, apply when animationMode is TELEPORTATIONMODE_CONSTANTSPEED. (default 20 units / sec)

***

### teleportationTime?

> `optional` **teleportationTime?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L57)

The duration of the animation in ms, apply when animationMode is TELEPORTATIONMODE_CONSTANTTIME. (default 122ms)
