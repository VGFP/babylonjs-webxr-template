[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IEdgesRenderer

# Interface: IEdgesRenderer

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/edgesRenderer.pure.ts#L37)

Defines the minimum contract an Edges renderer should follow.

## Extends

- [`IDisposable`](IDisposable.md)

## Properties

### customInstances

> **customInstances**: [`SmartArray`](../classes/SmartArray.md)\<[`Matrix`](../classes/Matrix.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/edgesRenderer.pure.ts#L57)

List of instances to render in case the source mesh has instances

***

### isEnabled

> **isEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/edgesRenderer.pure.ts#L41)

Gets or sets a boolean indicating if the edgesRenderer is active

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/scene.pure.ts#L122)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IDisposable`](IDisposable.md).[`dispose`](IDisposable.md#dispose)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/edgesRenderer.pure.ts#L52)

Checks whether or not the edges renderer is ready to render.

#### Returns

`boolean`

true if ready, otherwise false.

***

### render()

> **render**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/edgesRenderer.pure.ts#L46)

Renders the edges of the attached mesh,

#### Returns

`void`
