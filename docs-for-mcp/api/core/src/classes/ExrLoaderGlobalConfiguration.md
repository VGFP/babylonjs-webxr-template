[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ExrLoaderGlobalConfiguration

# Class: ExrLoaderGlobalConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Loaders/EXR/exrLoader.configuration.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Loaders/EXR/exrLoader.configuration.ts#L9)

Class used to store configuration of the exr loader

## Constructors

### Constructor

> **new ExrLoaderGlobalConfiguration**(): `ExrLoaderGlobalConfiguration`

#### Returns

`ExrLoaderGlobalConfiguration`

## Properties

### DefaultOutputType

> `static` **DefaultOutputType**: [`EXROutputType`](../enumerations/EXROutputType.md) = `EXROutputType.HalfFloat`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Loaders/EXR/exrLoader.configuration.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Loaders/EXR/exrLoader.configuration.ts#L13)

Defines the default output type to use (Half float by default)

***

### FFLATEUrl

> `static` **FFLATEUrl**: `string` = `"https://unpkg.com/fflate@0.8.2"`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Loaders/EXR/exrLoader.configuration.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Loaders/EXR/exrLoader.configuration.ts#L18)

Url to use to load the fflate library (for zip decompression)
