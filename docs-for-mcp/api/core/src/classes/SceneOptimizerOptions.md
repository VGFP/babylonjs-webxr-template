[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SceneOptimizerOptions

# Class: SceneOptimizerOptions

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:469](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L469)

Defines a list of options used by SceneOptimizer

## Description

More details at https://doc.babylonjs.com/features/featuresDeepDive/scene/sceneOptimizer

## Constructors

### Constructor

> **new SceneOptimizerOptions**(`targetFrameRate?`, `trackerDuration?`): `SceneOptimizerOptions`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:480](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L480)

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:473](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L473)

Gets the list of optimizations to apply

***

### targetFrameRate

> **targetFrameRate**: `number` = `60`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:484](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L484)

[60] Defines the target frame rate to reach (60 by default)

***

### trackerDuration

> **trackerDuration**: `number` = `2000`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:488](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L488)

[2000] Defines the interval between two checks (2000ms by default)

## Methods

### addCustomOptimization()

> **addCustomOptimization**(`onApply`, `onGetDescription`, `priority?`): `SceneOptimizerOptions`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:508](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L508)

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:496](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L496)

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:580](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L580)

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:522](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L522)

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:547](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L547)

Creates a list of pre-defined optimizations aimed to have a moderate impact on the scene visual

#### Parameters

##### targetFrameRate?

`number`

defines the target frame rate (60 by default)

#### Returns

`SceneOptimizerOptions`

a SceneOptimizerOptions object
