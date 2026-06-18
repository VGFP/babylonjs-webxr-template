[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ShaderStore

# Class: ShaderStore

Defined in: [babylonjs-source/packages/dev/core/src/Engines/shaderStore.ts:6](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/shaderStore.ts#L6)

Defines the shader related stores and directory

## Constructors

### Constructor

> **new ShaderStore**(): `ShaderStore`

#### Returns

`ShaderStore`

## Properties

### IncludesShadersStore

> `static` **IncludesShadersStore**: `object` = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/shaderStore.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/shaderStore.ts#L18)

Store of each included file for a shader (The can be looked up using effect.key)

#### Index Signature

\[`key`: `string`\]: `string`

***

### IncludesShadersStoreWGSL

> `static` **IncludesShadersStoreWGSL**: `object` = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/shaderStore.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/shaderStore.ts#L31)

Store of each included file for a shader (WGSL)

#### Index Signature

\[`key`: `string`\]: `string`

***

### ShadersRepository

> `static` **ShadersRepository**: `string` = `"src/Shaders/"`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/shaderStore.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/shaderStore.ts#L10)

Gets or sets the relative url used to load shaders if using the engine in non-minified mode

***

### ShadersRepositoryWGSL

> `static` **ShadersRepositoryWGSL**: `string` = `"src/ShadersWGSL/"`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/shaderStore.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/shaderStore.ts#L23)

Gets or sets the relative url used to load shaders (WGSL) if using the engine in non-minified mode

***

### ShadersStore

> `static` **ShadersStore**: `object` = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/shaderStore.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/shaderStore.ts#L14)

Store of each shader (The can be looked up using effect.key)

#### Index Signature

\[`key`: `string`\]: `string`

***

### ShadersStoreWGSL

> `static` **ShadersStoreWGSL**: `object` = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/shaderStore.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/shaderStore.ts#L27)

Store of each shader  (WGSL)

#### Index Signature

\[`key`: `string`\]: `string`

## Methods

### GetIncludesShadersStore()

> `static` **GetIncludesShadersStore**(`shaderLanguage?`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/shaderStore.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/shaderStore.ts#L56)

Gets the include shaders store of a given shader language

#### Parameters

##### shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md) = `ShaderLanguage.GLSL`

the shader language

#### Returns

`object`

the include shaders store

***

### GetShadersRepository()

> `static` **GetShadersRepository**(`shaderLanguage?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/shaderStore.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/shaderStore.ts#L38)

Gets the shaders repository path for a given shader language

#### Parameters

##### shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md) = `ShaderLanguage.GLSL`

the shader language

#### Returns

`string`

the path to the shaders repository

***

### GetShadersStore()

> `static` **GetShadersStore**(`shaderLanguage?`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/shaderStore.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/shaderStore.ts#L47)

Gets the shaders store of a given shader language

#### Parameters

##### shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md) = `ShaderLanguage.GLSL`

the shader language

#### Returns

`object`

the shaders store
