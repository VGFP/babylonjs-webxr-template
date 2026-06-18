[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EnvironmentTextureIrradianceTextureInfoV1

# Interface: EnvironmentTextureIrradianceTextureInfoV1

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/environmentTextureTools.pure.ts#L111)

Defines the diffuse data enclosed in the file.
This corresponds to the version 1 of the data.

## Properties

### dominantDirection?

> `optional` **dominantDirection?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.pure.ts:124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/environmentTextureTools.pure.ts#L124)

The dominant direction of light in the environment texture.

***

### faces

> **faces**: `BufferImageData`[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/environmentTextureTools.pure.ts#L119)

This contains all the images data needed to reconstruct the cubemap.

***

### size

> **size**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.pure.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/environmentTextureTools.pure.ts#L115)

Size of the texture faces.
