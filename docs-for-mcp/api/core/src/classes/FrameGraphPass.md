[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphPass

# Class: FrameGraphPass\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/pass.ts:6](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/pass.ts#L6)

Base class for a frame graph pass.

## Extended by

- [`FrameGraphObjectListPass`](FrameGraphObjectListPass.md)
- [`FrameGraphRenderPass`](FrameGraphRenderPass.md)

## Type Parameters

### T

`T` *extends* [`FrameGraphContext`](FrameGraphContext.md)

## Implements

- [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)

## Properties

### disabled

> **disabled**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/pass.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/pass.ts#L13)

Whether the pass is disabled. Disabled passes will be skipped during execution.

#### Implementation of

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md).[`disabled`](../interfaces/IFrameGraphPass.md#disabled)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/pass.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Passes/pass.ts#L17)

The name of the pass.

#### Implementation of

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md).[`name`](../interfaces/IFrameGraphPass.md#name)

## Methods

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

#### Implementation of

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md).[`setExecuteFunc`](../interfaces/IFrameGraphPass.md#setexecutefunc)

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

#### Implementation of

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md).[`setInitializeFunc`](../interfaces/IFrameGraphPass.md#setinitializefunc)
