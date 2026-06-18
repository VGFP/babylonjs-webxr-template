[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IShaderMaterialOptions

# Interface: IShaderMaterialOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L51)

Defines the options associated with the creation of a shader material.

## Properties

### attributes

> **attributes**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L65)

The list of attribute names used in the shader

***

### defines

> **defines**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L100)

The list of defines used in the shader

***

### externalTextures

> **externalTextures**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L85)

The list of external texture names used in the shader

***

### extraInitializationsAsync?

> `optional` **extraInitializationsAsync?**: () => `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L115)

Defines additional code to call to prepare the shader code

#### Returns

`Promise`\<`void`\>

***

### needAlphaBlending

> **needAlphaBlending**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L55)

Does the material work in alpha blend mode

***

### needAlphaTesting

> **needAlphaTesting**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L60)

Does the material work in alpha test mode

***

### samplerObjects

> **samplerObjects**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L90)

The list of sampler object names used in the shader

***

### samplers

> **samplers**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L80)

The list of sampler (texture) names used in the shader

***

### shaderLanguage?

> `optional` **shaderLanguage?**: [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L110)

The language the shader is written in (default: GLSL)

***

### storageBuffers

> **storageBuffers**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L95)

The list of storage buffer names used in the shader

***

### uniformBuffers

> **uniformBuffers**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L75)

The list of UBO names used in the shader

***

### uniforms

> **uniforms**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L70)

The list of uniform names used in the shader

***

### useClipPlane

> **useClipPlane**: [`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L105)

Defines if clip planes have to be turned on: true to turn them on, false to turn them off and null to turn them on/off depending on the scene configuration (scene.clipPlaneX)
