[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IEdgesRenderer

# Interface: IEdgesRenderer

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/edgesRenderer.ts#L114)

Defines the minimum contract an Edges renderer should follow.

## Extends

- [`IDisposable`](IDisposable.md)

## Properties

### customInstances

> **customInstances**: [`SmartArray`](../classes/SmartArray.md)\<[`Matrix`](../classes/Matrix.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/edgesRenderer.ts#L134)

List of instances to render in case the source mesh has instances

***

### isEnabled

> **isEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/edgesRenderer.ts#L118)

Gets or sets a boolean indicating if the edgesRenderer is active

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L120)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IDisposable`](IDisposable.md).[`dispose`](IDisposable.md#dispose)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.ts:129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/edgesRenderer.ts#L129)

Checks whether or not the edges renderer is ready to render.

#### Returns

`boolean`

true if ready, otherwise false.

***

### render()

> **render**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/edgesRenderer.ts#L123)

Renders the edges of the attached mesh,

#### Returns

`void`
