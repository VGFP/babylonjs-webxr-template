[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMotionControllerProfile

# Interface: IMotionControllerProfile

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L135)

The XR Input profile schema
Profiles can be found here:
https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry/profiles

## Properties

### fallbackProfileIds

> **fallbackProfileIds**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L139)

fallback profiles for this profileId

***

### layouts

> **layouts**: [`IMotionControllerLayoutMap`](IMotionControllerLayoutMap.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L143)

The layout map, with handedness as key

***

### profileId

> **profileId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L148)

The id of this profile
correlates to the profile(s) in the xrInput.profiles array
