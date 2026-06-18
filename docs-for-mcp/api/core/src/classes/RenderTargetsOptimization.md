[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RenderTargetsOptimization

# Class: RenderTargetsOptimization

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:316](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L316)

Defines an optimization used to turn render targets off

## Description

More details at https://doc.babylonjs.com/features/featuresDeepDive/scene/sceneOptimizer

## Extends

- [`SceneOptimization`](SceneOptimization.md)

## Constructors

### Constructor

> **new RenderTargetsOptimization**(`priority?`): `RenderTargetsOptimization`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L37)

Creates the SceneOptimization object

#### Parameters

##### priority?

`number` = `0`

defines the priority of this optimization (0 by default which means first in the list)

#### Returns

`RenderTargetsOptimization`

#### Inherited from

[`SceneOptimization`](SceneOptimization.md).[`constructor`](SceneOptimization.md#constructor)

## Properties

### priority

> **priority**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L41)

[0] Defines the priority of this optimization (0 by default which means first in the list)

#### Inherited from

[`SceneOptimization`](SceneOptimization.md).[`priority`](SceneOptimization.md#priority)

## Methods

### apply()

> **apply**(`scene`, `optimizer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:331](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L331)

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:321](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L321)

Gets a string describing the action executed by the current optimization

#### Returns

`string`

description string

#### Overrides

[`SceneOptimization`](SceneOptimization.md).[`getDescription`](SceneOptimization.md#getdescription)
