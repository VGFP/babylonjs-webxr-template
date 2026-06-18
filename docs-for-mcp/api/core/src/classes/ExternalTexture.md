[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ExternalTexture

# Class: ExternalTexture

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/externalTexture.ts:7](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/externalTexture.ts#L7)

Class used to store an external texture (like GPUExternalTexture in WebGPU)

## Constructors

### Constructor

> **new ExternalTexture**(`video`): `ExternalTexture`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/externalTexture.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/externalTexture.ts#L58)

Constructs the texture

#### Parameters

##### video

`HTMLVideoElement`

The video the texture should be wrapped around

#### Returns

`ExternalTexture`

## Properties

### format

> `readonly` **format**: `4294967295` = `Constants.TEXTUREFORMAT_UNDEFINED`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/externalTexture.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/externalTexture.ts#L47)

The format of the underlying texture is implementation dependent, so return "UNDEFINED" for the format

***

### type

> `readonly` **type**: `16` = `Constants.TEXTURETYPE_UNDEFINED`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/externalTexture.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/externalTexture.ts#L42)

The type of the underlying texture is implementation dependent, so return "UNDEFINED" for the type

***

### uniqueId

> `readonly` **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/externalTexture.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/externalTexture.ts#L52)

Gets the unique id of this texture

***

### useMipMaps

> **useMipMaps**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/externalTexture.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/externalTexture.ts#L37)

Gets a boolean indicating if the texture uses mipmaps

## Accessors

### underlyingResource

#### Get Signature

> **get** **underlyingResource**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/externalTexture.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/externalTexture.ts#L30)

Gets the underlying texture object

##### Returns

`any`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/externalTexture.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/externalTexture.ts#L74)

Dispose the texture and release its associated resources.

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/externalTexture.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/externalTexture.ts#L23)

Get the class name of the texture.

#### Returns

`string`

"ExternalTexture"

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/externalTexture.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/externalTexture.ts#L67)

Get if the texture is ready to be used (downloaded, converted, mip mapped...).

#### Returns

`boolean`

true if fully ready

***

### IsExternalTexture()

> `static` **IsExternalTexture**(`texture`): `texture is ExternalTexture`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/externalTexture.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/externalTexture.ts#L13)

Checks if a texture is an external or internal texture

#### Parameters

##### texture

[`InternalTexture`](InternalTexture.md) \| `ExternalTexture`

the external or internal texture

#### Returns

`texture is ExternalTexture`

true if the texture is an external texture, else false
