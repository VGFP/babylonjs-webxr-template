[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EffectFallbacks

# Class: EffectFallbacks

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectFallbacks.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectFallbacks.ts#L11)

EffectFallbacks can be used to add fallbacks (properties to disable) to certain properties when desired to improve performance.
(Eg. Start at high quality with reflection and fog, if fps is low, remove reflection, if still low remove fog)

## Implements

- [`IEffectFallbacks`](../interfaces/IEffectFallbacks.md)

## Constructors

### Constructor

> **new EffectFallbacks**(): `EffectFallbacks`

#### Returns

`EffectFallbacks`

## Accessors

### hasMoreFallbacks

#### Get Signature

> **get** **hasMoreFallbacks**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectFallbacks.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectFallbacks.ts#L66)

Checks to see if more fallbacks are still available.

##### Returns

`boolean`

Checks to see if more fallbacks are still available.

#### Implementation of

[`IEffectFallbacks`](../interfaces/IEffectFallbacks.md).[`hasMoreFallbacks`](../interfaces/IEffectFallbacks.md#hasmorefallbacks)

## Methods

### addCPUSkinningFallback()

> **addCPUSkinningFallback**(`rank`, `mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectFallbacks.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectFallbacks.ts#L52)

Sets the mesh to use CPU skinning when needing to fallback.

#### Parameters

##### rank

`number`

The rank of the fallback (Lower ranks will be fallbacked to first)

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh to use the fallbacks.

#### Returns

`void`

***

### addFallback()

> **addFallback**(`rank`, `define`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectFallbacks.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectFallbacks.ts#L31)

Adds a fallback on the specified property.

#### Parameters

##### rank

`number`

The rank of the fallback (Lower ranks will be fallbacked to first)

##### define

`string`

The name of the define in the shader

#### Returns

`void`

***

### reduce()

> **reduce**(`currentDefines`, `effect`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectFallbacks.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectFallbacks.ts#L76)

Removes the defines that should be removed when falling back.

#### Parameters

##### currentDefines

`string`

defines the current define statements for the shader.

##### effect

[`Effect`](Effect.md)

defines the current effect we try to compile

#### Returns

`string`

The resulting defines with defines of the current rank removed.

#### Implementation of

[`IEffectFallbacks`](../interfaces/IEffectFallbacks.md).[`reduce`](../interfaces/IEffectFallbacks.md#reduce)

***

### unBindMesh()

> **unBindMesh**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectFallbacks.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectFallbacks.ts#L22)

Removes the fallback from the bound mesh.

#### Returns

`void`

#### Implementation of

[`IEffectFallbacks`](../interfaces/IEffectFallbacks.md).[`unBindMesh`](../interfaces/IEffectFallbacks.md#unbindmesh)
