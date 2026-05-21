[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EnvironmentTextureSpecularInfoV1

# Interface: EnvironmentTextureSpecularInfoV1

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/environmentTextureTools.ts#L130)

Defines the specular data enclosed in the file.
This corresponds to the version 1 of the data.

## Properties

### lodGenerationScale

> **lodGenerationScale**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/environmentTextureTools.ts#L139)

Defines the scale applied to environment texture. This manages the range of LOD level used for IBL according to the roughness.

***

### mipmaps

> **mipmaps**: `BufferImageData`[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/environmentTextureTools.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/environmentTextureTools.ts#L134)

This contains all the images data needed to reconstruct the cubemap.
