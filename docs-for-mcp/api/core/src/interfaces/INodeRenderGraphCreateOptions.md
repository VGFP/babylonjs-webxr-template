[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / INodeRenderGraphCreateOptions

# Interface: INodeRenderGraphCreateOptions

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L45)

Options that can be passed to the node render graph build method

## Properties

### autoConfigure?

> `optional` **autoConfigure?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L53)

Defines if the autoConfigure method should be called when initializing blocks (default: false)

***

### autoFillExternalInputs?

> `optional` **autoFillExternalInputs?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L55)

If true, external inputs like object lists and cameras will be filled with default values, taken from the scene. Note that external textures are not concerned (default: true).

***

### debugTextures?

> `optional` **debugTextures?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L47)

If true, textures created by the node render graph will be visible in the inspector, for easier debugging (default: false)

***

### rebuildGraphOnEngineResize?

> `optional` **rebuildGraphOnEngineResize?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L49)

Rebuild the node render graph when the screen is resized (default: true)

***

### verbose?

> `optional` **verbose?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L51)

Defines if the build should log activity (default: false)
