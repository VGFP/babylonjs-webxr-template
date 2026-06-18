[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CameraInputsMap

# Interface: CameraInputsMap\<Tcamera\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/cameraInputsManager.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/cameraInputsManager.ts#L52)

Represents a map of input types to input instance or input index to input instance.

## Type Parameters

### Tcamera

`Tcamera` *extends* [`Camera`](../classes/Camera.md)

## Indexable

> \[`name`: `string`\]: [`ICameraInput`](ICameraInput.md)\<`Tcamera`\>

Accessor to the input by input type.

> \[`idx`: `number`\]: [`ICameraInput`](ICameraInput.md)\<`Tcamera`\>

Accessor to the input by input index.
