[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SceneOptimization

# Class: SceneOptimization

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L13)

Defines the root class used to create scene optimization to use with SceneOptimizer

## See

https://doc.babylonjs.com/features/featuresDeepDive/scene/sceneOptimizer

## Extended by

- [`TextureOptimization`](TextureOptimization.md)
- [`HardwareScalingOptimization`](HardwareScalingOptimization.md)
- [`ShadowsOptimization`](ShadowsOptimization.md)
- [`PostProcessesOptimization`](PostProcessesOptimization.md)
- [`LensFlaresOptimization`](LensFlaresOptimization.md)
- [`CustomOptimization`](CustomOptimization.md)
- [`ParticlesOptimization`](ParticlesOptimization.md)
- [`RenderTargetsOptimization`](RenderTargetsOptimization.md)
- [`MergeMeshesOptimization`](MergeMeshesOptimization.md)

## Constructors

### Constructor

> **new SceneOptimization**(`priority?`): `SceneOptimization`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L36)

Creates the SceneOptimization object

#### Parameters

##### priority?

`number` = `0`

defines the priority of this optimization (0 by default which means first in the list)

#### Returns

`SceneOptimization`

## Properties

### priority

> **priority**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L40)

[0] Defines the priority of this optimization (0 by default which means first in the list)

## Methods

### apply()

> **apply**(`scene`, `optimizer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L28)

This function will be called by the SceneOptimizer when its priority is reached in order to apply the change required by the current optimization

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the current scene where to apply this optimization

##### optimizer

[`SceneOptimizer`](SceneOptimizer.md)

defines the current optimizer

#### Returns

`boolean`

true if everything that can be done was applied

***

### getDescription()

> **getDescription**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L18)

Gets a string describing the action executed by the current optimization

#### Returns

`string`

description string
