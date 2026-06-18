[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRMotionControllerComponentChanges

# Interface: IWebXRMotionControllerComponentChanges

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L36)

Represents changes in the component between current frame and last values recorded

## Properties

### axes?

> `optional` **axes?**: [`IWebXRMotionControllerComponentChangesValues`](IWebXRMotionControllerComponentChangesValues.md)\<[`IWebXRMotionControllerAxesValue`](IWebXRMotionControllerAxesValue.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L40)

will be populated with previous and current values if axes changed

***

### pressed?

> `optional` **pressed?**: [`IWebXRMotionControllerComponentChangesValues`](IWebXRMotionControllerComponentChangesValues.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L44)

will be populated with previous and current values if pressed changed

***

### touched?

> `optional` **touched?**: [`IWebXRMotionControllerComponentChangesValues`](IWebXRMotionControllerComponentChangesValues.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L48)

will be populated with previous and current values if touched changed

***

### value?

> `optional` **value?**: [`IWebXRMotionControllerComponentChangesValues`](IWebXRMotionControllerComponentChangesValues.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L52)

will be populated with previous and current values if value changed
