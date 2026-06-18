[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SceneOptimizerOptions

# Class: SceneOptimizerOptions

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:470](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L470)

Defines a list of options used by SceneOptimizer

## Description

More details at https://doc.babylonjs.com/features/featuresDeepDive/scene/sceneOptimizer

## Constructors

### Constructor

> **new SceneOptimizerOptions**(`targetFrameRate?`, `trackerDuration?`): `SceneOptimizerOptions`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:481](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L481)

Creates a new list of options used by SceneOptimizer

#### Parameters

##### targetFrameRate?

`number` = `60`

defines the target frame rate to reach (60 by default)

##### trackerDuration?

`number` = `2000`

defines the interval between two checks (2000ms by default)

#### Returns

`SceneOptimizerOptions`

## Properties

### optimizations

> **optimizations**: [`SceneOptimization`](SceneOptimization.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:474](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L474)

Gets the list of optimizations to apply

***

### targetFrameRate

> **targetFrameRate**: `number` = `60`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:485](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L485)

[60] Defines the target frame rate to reach (60 by default)

***

### trackerDuration

> **trackerDuration**: `number` = `2000`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:489](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L489)

[2000] Defines the interval between two checks (2000ms by default)

## Methods

### addCustomOptimization()

> **addCustomOptimization**(`onApply`, `onGetDescription`, `priority?`): `SceneOptimizerOptions`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:509](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L509)

Add a new custom optimization

#### Parameters

##### onApply

(`scene`, `optimizer`) => `boolean`

defines the callback called to apply the custom optimization (true if everything that can be done was applied)

##### onGetDescription

() => `string`

defines the callback called to get the description attached with the optimization.

##### priority?

`number` = `0`

defines the priority of this optimization (0 by default which means first in the list)

#### Returns

`SceneOptimizerOptions`

the current SceneOptimizerOptions

***

### addOptimization()

> **addOptimization**(`optimization`): `SceneOptimizerOptions`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:497](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L497)

Add a new optimization

#### Parameters

##### optimization

[`SceneOptimization`](SceneOptimization.md)

defines the SceneOptimization to add to the list of active optimizations

#### Returns

`SceneOptimizerOptions`

the current SceneOptimizerOptions

***

### HighDegradationAllowed()

> `static` **HighDegradationAllowed**(`targetFrameRate?`): `SceneOptimizerOptions`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:581](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L581)

Creates a list of pre-defined optimizations aimed to have a big impact on the scene visual

#### Parameters

##### targetFrameRate?

`number`

defines the target frame rate (60 by default)

#### Returns

`SceneOptimizerOptions`

a SceneOptimizerOptions object

***

### LowDegradationAllowed()

> `static` **LowDegradationAllowed**(`targetFrameRate?`): `SceneOptimizerOptions`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:523](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L523)

Creates a list of pre-defined optimizations aimed to reduce the visual impact on the scene

#### Parameters

##### targetFrameRate?

`number`

defines the target frame rate (60 by default)

#### Returns

`SceneOptimizerOptions`

a SceneOptimizerOptions object

***

### ModerateDegradationAllowed()

> `static` **ModerateDegradationAllowed**(`targetFrameRate?`): `SceneOptimizerOptions`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:548](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L548)

Creates a list of pre-defined optimizations aimed to have a moderate impact on the scene visual

#### Parameters

##### targetFrameRate?

`number`

defines the target frame rate (60 by default)

#### Returns

`SceneOptimizerOptions`

a SceneOptimizerOptions object
