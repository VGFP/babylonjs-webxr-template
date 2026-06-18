[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IEffectFallbacks

# Interface: IEffectFallbacks

Defined in: [babylonjs-source/packages/dev/core/src/Materials/iEffectFallbacks.ts:6](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/iEffectFallbacks.ts#L6)

Interface used to define common properties for effect fallbacks

## Properties

### hasMoreFallbacks

> **hasMoreFallbacks**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/iEffectFallbacks.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/iEffectFallbacks.ts#L23)

Checks to see if more fallbacks are still available.

## Methods

### reduce()

> **reduce**(`currentDefines`, `effect`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/iEffectFallbacks.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/iEffectFallbacks.ts#L13)

Removes the defines that should be removed when falling back.

#### Parameters

##### currentDefines

`string`

defines the current define statements for the shader.

##### effect

[`Effect`](../classes/Effect.md)

defines the current effect we try to compile

#### Returns

`string`

The resulting defines with defines of the current rank removed.

***

### unBindMesh()

> **unBindMesh**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/iEffectFallbacks.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/iEffectFallbacks.ts#L18)

Removes the fallback from the bound mesh.

#### Returns

`void`
