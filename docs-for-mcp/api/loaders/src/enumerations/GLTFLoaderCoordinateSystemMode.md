[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / GLTFLoaderCoordinateSystemMode

# Enumeration: GLTFLoaderCoordinateSystemMode

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L85)

Mode that determines the coordinate system to use.

## Enumeration Members

### AUTO

> **AUTO**: `0`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L89)

Automatically convert the glTF right-handed data to the appropriate system based on the current coordinate system mode of the scene.

***

### FORCE\_RIGHT\_HANDED

> **FORCE\_RIGHT\_HANDED**: `1`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L94)

Sets the useRightHandedSystem flag on the scene.
