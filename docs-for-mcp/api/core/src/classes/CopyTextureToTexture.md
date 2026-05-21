[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CopyTextureToTexture

# Class: CopyTextureToTexture

Defined in: [babylonjs-source/packages/dev/core/src/Misc/copyTextureToTexture.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/copyTextureToTexture.ts#L23)

Class used for fast copy from one texture to another

## Constructors

### Constructor

> **new CopyTextureToTexture**(`engine`, `isDepthTexture?`, `sameSizeCopy?`): `CopyTextureToTexture`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/copyTextureToTexture.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/copyTextureToTexture.ts#L81)

Constructs a new instance of the class

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

The engine to use for the copy

##### isDepthTexture?

`boolean` = `false`

True means that we should write (using gl_FragDepth) into the depth texture attached to the destination (default: false)

##### sameSizeCopy?

`boolean` = `false`

True means that the copy will be done without any sampling (more efficient, but requires the source and destination to be of the same size) (default: false)

#### Returns

`CopyTextureToTexture`

## Accessors

### effectWrapper

#### Get Signature

> **get** **effectWrapper**(): [`EffectWrapper`](EffectWrapper.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/copyTextureToTexture.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/copyTextureToTexture.ts#L45)

Gets the effect wrapper used for the copy

##### Returns

[`EffectWrapper`](EffectWrapper.md)

***

### lodLevel

#### Get Signature

> **get** **lodLevel**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/copyTextureToTexture.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/copyTextureToTexture.ts#L63)

Gets or sets the LOD level to copy from the source texture

##### Returns

`number`

#### Set Signature

> **set** **lodLevel**(`level`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/copyTextureToTexture.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/copyTextureToTexture.ts#L67)

##### Parameters

###### level

`number`

##### Returns

`void`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/copyTextureToTexture.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/copyTextureToTexture.ts#L38)

Gets the shader language

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

***

### source

#### Get Signature

> **get** **source**(): [`ThinTexture`](ThinTexture.md) \| [`InternalTexture`](InternalTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/copyTextureToTexture.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/copyTextureToTexture.ts#L52)

Gets or sets the source texture

##### Returns

[`ThinTexture`](ThinTexture.md) \| [`InternalTexture`](InternalTexture.md)

#### Set Signature

> **set** **source**(`texture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/copyTextureToTexture.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/copyTextureToTexture.ts#L56)

##### Parameters

###### texture

[`ThinTexture`](ThinTexture.md) \| [`InternalTexture`](InternalTexture.md)

##### Returns

`void`

## Methods

### copy()

> **copy**(`source`, `destination?`, `conversion?`, `lod?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/copyTextureToTexture.ts:164](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/copyTextureToTexture.ts#L164)

Copy one texture into another

#### Parameters

##### source

[`ThinTexture`](ThinTexture.md) \| [`InternalTexture`](InternalTexture.md)

The source texture

##### destination?

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetWrapper`](RenderTargetWrapper.md) \| [`IRenderTargetTexture`](../interfaces/IRenderTargetTexture.md)\> = `null`

The destination texture. If null, copy the source to the currently bound framebuffer

##### conversion?

[`ConversionMode`](../enumerations/ConversionMode.md) = `ConversionMode.None`

The conversion mode that should be applied when copying

##### lod?

`number` = `0`

The LOD level to copy from the source texture

#### Returns

`boolean`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/copyTextureToTexture.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/copyTextureToTexture.ts#L195)

Releases all the resources used by the class

#### Returns

`void`

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/copyTextureToTexture.ts:152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/copyTextureToTexture.ts#L152)

Indicates if the effect is ready to be used for the copy

#### Returns

`boolean`

true if "copy" can be called without delay, else false
