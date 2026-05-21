[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EnvironmentTextureIrradianceTextureInfoV1

# Interface: EnvironmentTextureIrradianceTextureInfoV1

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/environmentTextureTools.ts#L110)

Defines the diffuse data enclosed in the file.
This corresponds to the version 1 of the data.

## Properties

### dominantDirection?

> `optional` **dominantDirection?**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/environmentTextureTools.ts#L123)

The dominant direction of light in the environment texture.

***

### faces

> **faces**: `BufferImageData`[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/environmentTextureTools.ts#L118)

This contains all the images data needed to reconstruct the cubemap.

***

### size

> **size**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/environmentTextureTools.ts#L114)

Size of the texture faces.
