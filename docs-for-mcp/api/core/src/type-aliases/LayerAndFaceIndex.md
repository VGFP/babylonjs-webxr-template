[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LayerAndFaceIndex

# Type Alias: LayerAndFaceIndex

> **LayerAndFaceIndex** = `object`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/renderPass.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/renderPass.ts#L15)

Type used to define layer and face indices for multi-render target rendering scenarios.

## Properties

### faceIndex?

> `optional` **faceIndex?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/renderPass.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/renderPass.ts#L23)

Index of the cube face to set (optional - not used if the texture is not a cube texture)

***

### layerIndex?

> `optional` **layerIndex?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/renderPass.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/renderPass.ts#L20)

Index of the layer to set (optional - not used if the texture is not an array or a 3D texture)

***

### targetIndex

> **targetIndex**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/renderPass.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/renderPass.ts#L17)

Index of the texture to update
