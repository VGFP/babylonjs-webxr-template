[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IDrawContext

# Interface: IDrawContext

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IDrawContext.ts:4](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/IDrawContext.ts#L4)

Interface representing a draw context at the GPU level (draw call)

## Properties

### enableIndirectDraw

> **enableIndirectDraw**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IDrawContext.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/IDrawContext.ts#L16)

Indicates if the draw should be an indirect draw.

***

### indirectDrawBuffer?

> `optional` **indirectDrawBuffer?**: `GPUBuffer`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IDrawContext.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/IDrawContext.ts#L20)

Buffer used for the indirect draw call when enableIndirectDraw is true.

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IDrawContext.ts:8](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/IDrawContext.ts#L8)

Unique identifier for the draw context.

***

### useInstancing

> **useInstancing**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IDrawContext.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/IDrawContext.ts#L12)

True if instances are used in the draw calls

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IDrawContext.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/IDrawContext.ts#L37)

Disposes the draw context and its resources.

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IDrawContext.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/IDrawContext.ts#L33)

Resets the draw context to its initial state.

#### Returns

`void`

***

### setIndirectData()

> **setIndirectData**(`indexOrVertexCount`, `instanceCount`, `firstIndexOrVertex`, `forceUpdate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/IDrawContext.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/IDrawContext.ts#L29)

Data for the indirect draw call (only used when enableIndirectDraw is true).

#### Parameters

##### indexOrVertexCount

`number`

The number of indices (if indexed draw) or vertices (if non-indexed draw).

##### instanceCount

`number`

The number of instances to draw.

##### firstIndexOrVertex

`number`

The index (if indexed draw) or vertex (if non-indexed draw) offset to start drawing from.

##### forceUpdate?

`boolean`

If true, forces the update of the indirect draw data even if instanceCount is the same as in the previous call.

#### Returns

`void`
