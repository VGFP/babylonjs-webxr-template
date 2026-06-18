[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / GLTFValidation

# Class: GLTFValidation

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFValidation.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFValidation.ts#L93)

glTF validation

## Constructors

### Constructor

> **new GLTFValidation**(): `GLTFValidation`

#### Returns

`GLTFValidation`

## Properties

### Configuration

> `static` **Configuration**: [`IGLTFValidationConfiguration`](../interfaces/IGLTFValidationConfiguration.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFValidation.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFValidation.ts#L97)

The configuration. Defaults to `{ url: "https://cdn.babylonjs.com/gltf_validator.js" }`.

## Methods

### ValidateAsync()

> `static` **ValidateAsync**(`data`, `rootUrl`, `fileName`, `getExternalResource`): `Promise`\<`IGLTFValidationResults`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFValidation.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFValidation.ts#L117)

Validate a glTF asset using the glTF-Validator.

#### Parameters

##### data

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

The JSON of a glTF or the array buffer of a binary glTF

##### rootUrl

`string`

The root url for the glTF

##### fileName

`string`

The file name for the glTF

##### getExternalResource

(`uri`) => `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

The callback to get external resources for the glTF validator

#### Returns

`Promise`\<`IGLTFValidationResults`\>

A promise that resolves with the glTF validation results once complete
