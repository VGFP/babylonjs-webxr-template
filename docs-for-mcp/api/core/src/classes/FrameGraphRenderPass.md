[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphRenderPass

# Class: FrameGraphRenderPass

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/renderPass.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/renderPass.ts#L29)

Render pass used to render objects.

## Extends

- [`FrameGraphPass`](FrameGraphPass.md)\<[`FrameGraphRenderContext`](FrameGraphRenderContext.md)\>

## Properties

### depthReadOnly

> **depthReadOnly**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/renderPass.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/renderPass.ts#L69)

If true, the depth attachment will be read-only (may allow some optimizations in WebGPU)

***

### disabled

> **disabled**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/pass.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/pass.ts#L13)

Whether the pass is disabled. Disabled passes will be skipped during execution.

#### Inherited from

[`FrameGraphPass`](FrameGraphPass.md).[`disabled`](FrameGraphPass.md#disabled)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/pass.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/pass.ts#L17)

The name of the pass.

#### Inherited from

[`FrameGraphPass`](FrameGraphPass.md).[`name`](FrameGraphPass.md#name)

***

### stencilReadOnly

> **stencilReadOnly**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/renderPass.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/renderPass.ts#L74)

If true, the stencil attachment will be read-only (may allow some optimizations in WebGPU)

## Accessors

### frameGraphRenderTarget

#### Get Signature

> **get** **frameGraphRenderTarget**(): `FrameGraphRenderTarget`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/renderPass.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/renderPass.ts#L62)

Gets the frame graph render target used by the render pass.

##### Returns

`FrameGraphRenderTarget`

***

### renderTarget

#### Get Signature

> **get** **renderTarget**(): `number` \| `number`[] \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/renderPass.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/renderPass.ts#L48)

Gets the handle(s) of the render target(s) used by the render pass.

##### Returns

`number` \| `number`[] \| `undefined`

***

### renderTargetDepth

#### Get Signature

> **get** **renderTargetDepth**(): `number` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/renderPass.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/renderPass.ts#L55)

Gets the handle of the render target depth used by the render pass.

##### Returns

`number` \| `undefined`

## Methods

### addDependencies()

> **addDependencies**(`dependencies?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/renderPass.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/renderPass.ts#L102)

Adds dependencies to the render pass.

#### Parameters

##### dependencies?

`number` \| `number`[]

The dependencies to add.

#### Returns

`void`

***

### collectDependencies()

> **collectDependencies**(`dependencies`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/renderPass.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/renderPass.ts#L120)

Collects the dependencies of the render pass.

#### Parameters

##### dependencies

`Set`\<`number`\>

The set of dependencies to update.

#### Returns

`void`

***

### setExecuteFunc()

> **setExecuteFunc**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/pass.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/pass.ts#L35)

Sets the function to execute when the pass is executed

#### Parameters

##### func

(`context`) => `void`

The function to execute when the pass is executed

#### Returns

`void`

#### Inherited from

[`FrameGraphPass`](FrameGraphPass.md).[`setExecuteFunc`](FrameGraphPass.md#setexecutefunc)

***

### setInitializeFunc()

> **setInitializeFunc**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/pass.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/pass.ts#L27)

Initializes the pass.
This function is called once after the frame graph has been built

#### Parameters

##### func

(`context`) => `void`

The function to initialize the pass.

#### Returns

`void`

#### Inherited from

[`FrameGraphPass`](FrameGraphPass.md).[`setInitializeFunc`](FrameGraphPass.md#setinitializefunc)

***

### setOutputLayerAndFaceIndices()

> **setOutputLayerAndFaceIndices**(`indices`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/renderPass.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/renderPass.ts#L147)

Sets the output layer and face indices for multi-render target rendering.

#### Parameters

##### indices

[`LayerAndFaceIndex`](../type-aliases/LayerAndFaceIndex.md)[]

The array of layer and face indices.

#### Returns

`void`

***

### setRenderTarget()

> **setRenderTarget**(`renderTargetHandle?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/renderPass.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/renderPass.ts#L86)

Sets the render target(s) to use for rendering.

#### Parameters

##### renderTargetHandle?

`number` \| `number`[]

The render target to use for rendering, or an array of render targets to use for multi render target rendering.

#### Returns

`void`

***

### setRenderTargetDepth()

> **setRenderTargetDepth**(`renderTargetHandle?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/renderPass.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/renderPass.ts#L94)

Sets the render target depth to use for rendering.

#### Parameters

##### renderTargetHandle?

`number`

The render target depth to use for rendering.

#### Returns

`void`

***

### IsRenderPass()

> `static` **IsRenderPass**(`pass`): `pass is FrameGraphRenderPass`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/renderPass.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/renderPass.ts#L41)

Checks if a pass is a render pass.

#### Parameters

##### pass

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)

The pass to check.

#### Returns

`pass is FrameGraphRenderPass`

True if the pass is a render pass, else false.
