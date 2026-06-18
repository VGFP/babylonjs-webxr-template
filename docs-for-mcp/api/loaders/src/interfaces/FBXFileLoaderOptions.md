[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / FBXFileLoaderOptions

# Interface: FBXFileLoaderOptions

Defined in: [babylonjs-source/packages/dev/loaders/src/FBX/fbxFileLoader.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/FBX/fbxFileLoader.ts#L63)

Defines options for the FBX loader.

## Properties

### normalMapCoordinateSystem?

> `optional` **normalMapCoordinateSystem?**: [`FBXNormalMapCoordinateSystem`](../type-aliases/FBXNormalMapCoordinateSystem.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/FBX/fbxFileLoader.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/FBX/fbxFileLoader.ts#L69)

Source convention for tangent-space normal maps connected through FBX normal-map slots.
FBX does not standardize this convention, so the loader defaults to the glTF/USD-style Y-up convention.
Set to "y-down" for assets authored with inverted green/Y normal maps.
