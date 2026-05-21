[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / INodeRenderGraphCustomBlockDescription

# Interface: INodeRenderGraphCustomBlockDescription

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L17)

Description of a custom block to be used in the node render graph editor

## Properties

### description

> **description**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L21)

Description (tooltip) of the block.

***

### factory

> **factory**: (`frameGraph`, `scene`) => [`NodeRenderGraphBlock`](../classes/NodeRenderGraphBlock.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L25)

Factory function to create the block.

#### Parameters

##### frameGraph

[`FrameGraph`](../classes/FrameGraph.md)

##### scene

[`Scene`](../classes/Scene.md)

#### Returns

[`NodeRenderGraphBlock`](../classes/NodeRenderGraphBlock.md)

***

### menu

> **menu**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L23)

Category of the block. Spaces must be replaced by underscores in the category name.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L19)

Block name. It will be used as the block name in the left menu of the editor. Spaces must be replaced by underscores in the name.
