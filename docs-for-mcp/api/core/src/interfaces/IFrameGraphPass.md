[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFrameGraphPass

# Interface: IFrameGraphPass

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L88)

Defines a pass in the frame graph.

## Properties

### disabled

> **disabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L97)

Whether the pass is disabled.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L92)

The name of the pass.

## Methods

### setExecuteFunc()

> **setExecuteFunc**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L110)

Sets the function to execute when the pass is executed

#### Parameters

##### func

(`context`) => `void`

The function to execute when the pass is executed

#### Returns

`void`

***

### setInitializeFunc()

> **setInitializeFunc**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTypes.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L104)

Initializes the pass.
This function is called once before the first execution of the pass.

#### Parameters

##### func

(`context`) => `void`

The function to initialize the pass.

#### Returns

`void`
