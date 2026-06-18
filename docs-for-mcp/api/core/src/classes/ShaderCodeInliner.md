[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ShaderCodeInliner

# Class: ShaderCodeInliner

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Processors/shaderCodeInliner.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Processors/shaderCodeInliner.ts#L15)

Class used to inline functions in shader code

## Constructors

### Constructor

> **new ShaderCodeInliner**(`sourceCode`, `numMaxIterations?`): `ShaderCodeInliner`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Processors/shaderCodeInliner.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Processors/shaderCodeInliner.ts#L38)

Initializes the inliner

#### Parameters

##### sourceCode

`string`

shader code source to inline

##### numMaxIterations?

`number` = `20`

maximum number of iterations (used to detect recursive calls)

#### Returns

`ShaderCodeInliner`

## Properties

### debug

> **debug**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Processors/shaderCodeInliner.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Processors/shaderCodeInliner.ts#L26)

Gets or sets the debug mode

***

### inlineToken

> **inlineToken**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Processors/shaderCodeInliner.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Processors/shaderCodeInliner.ts#L23)

Gets or sets the token used to mark the functions to inline

## Accessors

### code

#### Get Signature

> **get** **code**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Processors/shaderCodeInliner.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Processors/shaderCodeInliner.ts#L29)

Gets the code after the inlining process

##### Returns

`string`

## Methods

### processCode()

> **processCode**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Processors/shaderCodeInliner.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Processors/shaderCodeInliner.ts#L48)

Start the processing of the shader code

#### Returns

`void`
