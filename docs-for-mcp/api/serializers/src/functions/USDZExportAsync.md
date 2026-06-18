[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / USDZExportAsync

# Function: USDZExportAsync()

> **USDZExportAsync**(`scene`, `options`, `meshPredicate?`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/serializers/src/USDZ/usdzExporter.ts:676](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/USDZ/usdzExporter.ts#L676)

## Parameters

### scene

[`Scene`](../../../core/src/classes/Scene.md)

scene to export

### options

`Partial`\<[`IUSDZExportOptions`](../interfaces/IUSDZExportOptions.md)\>

options to configure the export

### meshPredicate?

(`m`) => `boolean`

predicate to filter the meshes to export

## Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

a uint8 array containing the USDZ file

## See

 - [Simple sphere](https://playground.babylonjs.com/#H2G5XW#6)
 - [Red sphere](https://playground.babylonjs.com/#H2G5XW#7)
 - [Boombox](https://playground.babylonjs.com/#5N3RWK#5)
