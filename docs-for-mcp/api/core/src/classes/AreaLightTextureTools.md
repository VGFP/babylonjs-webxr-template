[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AreaLightTextureTools

# Class: AreaLightTextureTools

Defined in: [babylonjs-source/packages/dev/core/src/Misc/areaLightsTextureTools.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/areaLightsTextureTools.ts#L21)

Class used for fast copy from one texture to another

## Constructors

### Constructor

> **new AreaLightTextureTools**(`engine`): `AreaLightTextureTools`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/areaLightsTextureTools.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/areaLightsTextureTools.ts#L49)

Constructs a new instance of the class

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

The engine to use for the copy

#### Returns

`AreaLightTextureTools`

## Accessors

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/areaLightsTextureTools.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/areaLightsTextureTools.ts#L37)

Gets the shader language

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/areaLightsTextureTools.ts:281](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/areaLightsTextureTools.ts#L281)

Releases all the resources used by the class

#### Returns

`void`

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/areaLightsTextureTools.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/areaLightsTextureTools.ts#L106)

Indicates if the effect is ready to be used for the copy

#### Returns

`boolean`

true if "copy" can be called without delay, else false

***

### processAsync()

> **processAsync**(`source`): `Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/areaLightsTextureTools.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/areaLightsTextureTools.ts#L115)

Pre-processes the texture to be used with RectAreaLight emissionTexture.

#### Parameters

##### source

[`BaseTexture`](BaseTexture.md)

The texture to pre-process

#### Returns

`Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>\>

A promise that resolves with the pre-processed texture
