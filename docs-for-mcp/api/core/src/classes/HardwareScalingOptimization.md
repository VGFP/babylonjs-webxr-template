[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / HardwareScalingOptimization

# Class: HardwareScalingOptimization

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L113)

Defines an optimization used to increase or decrease the rendering resolution

## Description

More details at https://doc.babylonjs.com/features/featuresDeepDive/scene/sceneOptimizer

## Extends

- [`SceneOptimization`](SceneOptimization.md)

## Constructors

### Constructor

> **new HardwareScalingOptimization**(`priority?`, `maximumScale?`, `step?`): `HardwareScalingOptimization`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L131)

Creates the HardwareScalingOptimization object

#### Parameters

##### priority?

`number` = `0`

defines the priority of this optimization (0 by default which means first in the list)

##### maximumScale?

`number` = `2`

defines the maximum scale to use (2 by default)

##### step?

`number` = `0.25`

defines the step to use between two passes (0.5 by default)

#### Returns

`HardwareScalingOptimization`

#### Overrides

[`SceneOptimization`](SceneOptimization.md).[`constructor`](SceneOptimization.md#constructor)

## Properties

### maximumScale

> **maximumScale**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L139)

[2] Defines the maximum scale to use (2 by default)

***

### priority

> **priority**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L135)

[0] Defines the priority of this optimization (0 by default which means first in the list)

#### Inherited from

[`SceneOptimization`](SceneOptimization.md).[`priority`](SceneOptimization.md#priority)

***

### step

> **step**: `number` = `0.25`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L143)

[0.25] Defines the step to use between two passes (0.5 by default)

## Methods

### apply()

> **apply**(`scene`, `optimizer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:154](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L154)

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L121)

Gets a string describing the action executed by the current optimization

#### Returns

`string`

description string

#### Overrides

[`SceneOptimization`](SceneOptimization.md).[`getDescription`](SceneOptimization.md#getdescription)
