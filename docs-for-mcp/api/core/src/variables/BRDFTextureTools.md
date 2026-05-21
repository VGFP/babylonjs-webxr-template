[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BRDFTextureTools

# Variable: BRDFTextureTools

> `const` **BRDFTextureTools**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/brdfTextureTools.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/brdfTextureTools.ts#L115)

Class used to host texture specific utilities

## Type Declaration

### GetEnvironmentBRDFTexture

> **GetEnvironmentBRDFTexture**: (`scene`) => [`BaseTexture`](../classes/BaseTexture.md)

Gets a default environment BRDF for MS-BRDF Height Correlated BRDF

Gets a default environment BRDF for MS-BRDF Height Correlated BRDF

#### Parameters

##### scene

[`Scene`](../classes/Scene.md)

defines the hosting scene

#### Returns

[`BaseTexture`](../classes/BaseTexture.md)

the environment BRDF texture

#### Param

defines the hosting scene

#### Returns

the environment BRDF texture

### GetEnvironmentFuzzBRDFTexture

> **GetEnvironmentFuzzBRDFTexture**: (`scene`) => [`BaseTexture`](../classes/BaseTexture.md)

Gets a default environment fuzz BRDF texture

Gets a default environment fuzz BRDF texture

#### Parameters

##### scene

[`Scene`](../classes/Scene.md)

defines the hosting scene

#### Returns

[`BaseTexture`](../classes/BaseTexture.md)

the environment fuzz BRDF texture

#### Param

defines the hosting scene

#### Returns

the environment fuzz BRDF texture

### GetOpenPBREnvironmentBRDFTexture

> **GetOpenPBREnvironmentBRDFTexture**: (`scene`) => [`BaseTexture`](../classes/BaseTexture.md)

Gets the OpenPBR environment BRDF texture (3-channel F82 LUT)

Gets the OpenPBR environment BRDF texture (3-channel F82 LUT)

#### Parameters

##### scene

[`Scene`](../classes/Scene.md)

defines the hosting scene

#### Returns

[`BaseTexture`](../classes/BaseTexture.md)

the OpenPBR environment BRDF texture

#### Param

defines the hosting scene

#### Returns

the OpenPBR environment BRDF texture
