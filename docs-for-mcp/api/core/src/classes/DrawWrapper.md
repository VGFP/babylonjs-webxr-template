[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DrawWrapper

# Class: DrawWrapper

Defined in: [babylonjs-source/packages/dev/core/src/Materials/drawWrapper.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/drawWrapper.ts#L14)

Wrapper for an effect and its associated material context and draw context.
This class is meant to encapsulate the effect and its related contexts, allowing for easier management of rendering states.

## Constructors

### Constructor

> **new DrawWrapper**(`engine`, `createMaterialContext?`): `DrawWrapper`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/drawWrapper.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/drawWrapper.ts#L65)

Creates a new DrawWrapper instance.
Note that drawContext is always created (but may end up being undefined if the engine doesn't need draw contexts), but materialContext is optional.

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

The engine to create the draw wrapper for.

##### createMaterialContext?

`boolean` = `true`

If true, creates a material context for this wrapper (default is true).

#### Returns

`DrawWrapper`

## Properties

### defines

> **defines**: [`Nullable`](../type-aliases/Nullable.md)\<`string` \| [`MaterialDefines`](MaterialDefines.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/drawWrapper.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/drawWrapper.ts#L22)

The defines associated with this wrapper.

***

### drawContext?

> `optional` **drawContext?**: [`IDrawContext`](../interfaces/IDrawContext.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/drawWrapper.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/drawWrapper.ts#L30)

The draw context associated with this wrapper.

***

### effect

> **effect**: [`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/drawWrapper.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/drawWrapper.ts#L18)

The effect associated with this wrapper.

***

### materialContext?

> `optional` **materialContext?**: `IMaterialContext`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/drawWrapper.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/drawWrapper.ts#L26)

The material context associated with this wrapper.

## Methods

### dispose()

> **dispose**(`immediate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/drawWrapper.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/drawWrapper.ts#L95)

Disposes the effect wrapper and its resources

#### Parameters

##### immediate?

`boolean` = `false`

if the effect should be disposed immediately or on the next frame.
If dispose() is not called during a scene or engine dispose, we want to delay the dispose of the underlying effect. Mostly to give a chance to user code to reuse the effect in some way.

#### Returns

`void`

***

### setEffect()

> **setEffect**(`effect`, `defines?`, `resetContext?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/drawWrapper.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/drawWrapper.ts#L80)

Sets the effect and its associated defines for this wrapper.

#### Parameters

##### effect

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

The effect to associate with this wrapper.

##### defines?

[`Nullable`](../type-aliases/Nullable.md)\<`string` \| [`MaterialDefines`](MaterialDefines.md)\>

The defines to associate with this wrapper.

##### resetContext?

`boolean` = `true`

If true, resets the draw context (default is true).

#### Returns

`void`

***

### GetEffect()

> `static` **GetEffect**(`effect`): [`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/drawWrapper.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/drawWrapper.ts#L55)

Retrieves the effect from a DrawWrapper or Effect instance.

#### Parameters

##### effect

[`Effect`](Effect.md) \| `DrawWrapper`

The effect or DrawWrapper instance to retrieve the effect from.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

The effect associated with the given instance, or null if not found.
