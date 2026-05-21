[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IShaderMaterialOptions

# Interface: IShaderMaterialOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L45)

Defines the options associated with the creation of a shader material.

## Properties

### attributes

> **attributes**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L59)

The list of attribute names used in the shader

***

### defines

> **defines**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L94)

The list of defines used in the shader

***

### externalTextures

> **externalTextures**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L79)

The list of external texture names used in the shader

***

### extraInitializationsAsync?

> `optional` **extraInitializationsAsync?**: () => `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L109)

Defines additional code to call to prepare the shader code

#### Returns

`Promise`\<`void`\>

***

### needAlphaBlending

> **needAlphaBlending**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L49)

Does the material work in alpha blend mode

***

### needAlphaTesting

> **needAlphaTesting**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L54)

Does the material work in alpha test mode

***

### samplerObjects

> **samplerObjects**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L84)

The list of sampler object names used in the shader

***

### samplers

> **samplers**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L74)

The list of sampler (texture) names used in the shader

***

### shaderLanguage?

> `optional` **shaderLanguage?**: [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L104)

The language the shader is written in (default: GLSL)

***

### storageBuffers

> **storageBuffers**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L89)

The list of storage buffer names used in the shader

***

### uniformBuffers

> **uniformBuffers**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L69)

The list of UBO names used in the shader

***

### uniforms

> **uniforms**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L64)

The list of uniform names used in the shader

***

### useClipPlane

> **useClipPlane**: [`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shaderMaterial.ts#L99)

Defines if clip planes have to be turned on: true to turn them on, false to turn them off and null to turn them on/off depending on the scene configuration (scene.clipPlaneX)
