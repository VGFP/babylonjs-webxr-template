[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MergeMeshesOptimization

# Class: MergeMeshesOptimization

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:341](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L341)

Defines an optimization used to merge meshes with compatible materials

## Description

More details at https://doc.babylonjs.com/features/featuresDeepDive/scene/sceneOptimizer

## Extends

- [`SceneOptimization`](SceneOptimization.md)

## Constructors

### Constructor

> **new MergeMeshesOptimization**(`priority?`): `MergeMeshesOptimization`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L37)

Creates the SceneOptimization object

#### Parameters

##### priority?

`number` = `0`

defines the priority of this optimization (0 by default which means first in the list)

#### Returns

`MergeMeshesOptimization`

#### Inherited from

[`SceneOptimization`](SceneOptimization.md).[`constructor`](SceneOptimization.md#constructor)

## Properties

### priority

> **priority**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L41)

[0] Defines the priority of this optimization (0 by default which means first in the list)

#### Inherited from

[`SceneOptimization`](SceneOptimization.md).[`priority`](SceneOptimization.md#priority)

## Accessors

### UpdateSelectionTree

#### Get Signature

> **get** `static` **UpdateSelectionTree**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:347](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L347)

Gets or sets a boolean which defines if optimization octree has to be updated

##### Returns

`boolean`

#### Set Signature

> **set** `static` **UpdateSelectionTree**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:354](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L354)

Gets or sets a boolean which defines if optimization octree has to be updated

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### apply()

> **apply**(`scene`, `optimizer`, `updateSelectionTree?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:403](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L403)

This function will be called by the SceneOptimizer when its priority is reached in order to apply the change required by the current optimization

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the current scene where to apply this optimization

##### optimizer

[`SceneOptimizer`](SceneOptimizer.md)

defines the current optimizer

##### updateSelectionTree?

`boolean`

defines that the selection octree has to be updated (false by default)

#### Returns

`boolean`

true if everything that can be done was applied

#### Overrides

[`SceneOptimization`](SceneOptimization.md).[`apply`](SceneOptimization.md#apply)

***

### getDescription()

> **getDescription**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:362](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneOptimizer.ts#L362)

Gets a string describing the action executed by the current optimization

#### Returns

`string`

description string

#### Overrides

[`SceneOptimization`](SceneOptimization.md).[`getDescription`](SceneOptimization.md#getdescription)
