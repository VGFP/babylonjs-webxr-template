[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TextureOptimization

# Class: TextureOptimization

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L49)

Defines an optimization used to reduce the size of render target textures

## See

https://doc.babylonjs.com/features/featuresDeepDive/scene/sceneOptimizer

## Extends

- [`SceneOptimization`](SceneOptimization.md)

## Constructors

### Constructor

> **new TextureOptimization**(`priority?`, `maximumSize?`, `step?`): `TextureOptimization`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L64)

Creates the TextureOptimization object

#### Parameters

##### priority?

`number` = `0`

defines the priority of this optimization (0 by default which means first in the list)

##### maximumSize?

`number` = `1024`

defines the maximum sized allowed for textures (1024 is the default value). If a texture is bigger, it will be scaled down using a factor defined by the step parameter

##### step?

`number` = `0.5`

defines the factor (0.5 by default) used to scale down textures bigger than maximum sized allowed.

#### Returns

`TextureOptimization`

#### Overrides

[`SceneOptimization`](SceneOptimization.md).[`constructor`](SceneOptimization.md#constructor)

## Properties

### maximumSize

> **maximumSize**: `number` = `1024`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L72)

[1024] Defines the maximum sized allowed for textures (1024 is the default value). If a texture is bigger, it will be scaled down using a factor defined by the step parameter

***

### priority

> **priority**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L68)

[0] Defines the priority of this optimization (0 by default which means first in the list)

#### Inherited from

[`SceneOptimization`](SceneOptimization.md).[`priority`](SceneOptimization.md#priority)

***

### step

> **step**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L76)

[0.5] Defines the factor (0.5 by default) used to scale down textures bigger than maximum sized allowed.

## Methods

### apply()

> **apply**(`scene`, `optimizer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L87)

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

#### Overrides

[`SceneOptimization`](SceneOptimization.md).[`apply`](SceneOptimization.md#apply)

***

### getDescription()

> **getDescription**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L54)

Gets a string describing the action executed by the current optimization

#### Returns

`string`

description string

#### Overrides

[`SceneOptimization`](SceneOptimization.md).[`getDescription`](SceneOptimization.md#getdescription)
