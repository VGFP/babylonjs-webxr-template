[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SceneOptimizer

# Class: SceneOptimizer

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:613](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L613)

Class used to run optimizations in order to reach a target frame rate

## Description

More details at https://doc.babylonjs.com/features/featuresDeepDive/scene/sceneOptimizer

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new SceneOptimizer**(`scene`, `options?`, `autoGeneratePriorities?`, `improvementMode?`): `SceneOptimizer`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:704](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L704)

Creates a new SceneOptimizer

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the scene to work on

##### options?

[`SceneOptimizerOptions`](SceneOptimizerOptions.md)

defines the options to use with the SceneOptimizer

##### autoGeneratePriorities?

`boolean` = `true`

defines if priorities must be generated and not read from SceneOptimization property (true by default)

##### improvementMode?

`boolean` = `false`

defines if the scene optimizer must run the maximum optimization while staying over a target frame instead of trying to reach the target framerate (false by default)

#### Returns

`SceneOptimizer`

## Properties

### onFailureObservable

> **onFailureObservable**: [`Observable`](Observable.md)\<`SceneOptimizer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:635](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L635)

Defines an observable called when the optimizer is not able to reach the target frame rate

***

### onNewOptimizationAppliedObservable

> **onNewOptimizationAppliedObservable**: [`Observable`](Observable.md)\<[`SceneOptimization`](SceneOptimization.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:631](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L631)

Defines an observable called when the optimizer enables an optimization

***

### onSuccessObservable

> **onSuccessObservable**: [`Observable`](Observable.md)\<`SceneOptimizer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:627](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L627)

Defines an observable called when the optimizer reaches the target frame rate

## Accessors

### currentFrameRate

#### Get Signature

> **get** **currentFrameRate**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:658](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L658)

Gets the current frame rate checked by the SceneOptimizer

##### Returns

`number`

***

### currentPriorityLevel

#### Get Signature

> **get** **currentPriorityLevel**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:651](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L651)

Gets the current priority level (0 at start)

##### Returns

`number`

***

### isInImprovementMode

#### Get Signature

> **get** **isInImprovementMode**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:640](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L640)

Gets or sets a boolean indicating if the optimizer is in improvement mode

##### Returns

`boolean`

#### Set Signature

> **set** **isInImprovementMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:644](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L644)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### optimizations

#### Get Signature

> **get** **optimizations**(): [`SceneOptimization`](SceneOptimization.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:693](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L693)

Gets the list of active optimizations

##### Returns

[`SceneOptimization`](SceneOptimization.md)[]

***

### targetFrameRate

#### Get Signature

> **get** **targetFrameRate**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:665](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L665)

Gets or sets the current target frame rate (60 by default)

##### Returns

`number`

#### Set Signature

> **set** **targetFrameRate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:672](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L672)

Gets or sets the current target frame rate (60 by default)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### trackerDuration

#### Get Signature

> **get** **trackerDuration**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:679](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L679)

Gets or sets the current interval between two checks (every 2000ms by default)

##### Returns

`number`

#### Set Signature

> **set** **trackerDuration**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:686](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L686)

Gets or sets the current interval between two checks (every 2000ms by default)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:820](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L820)

Release all resources

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### reset()

> **reset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:744](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L744)

Reset the optimizer to initial step (current priority level = 0)

#### Returns

`void`

***

### start()

> **start**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:752](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L752)

Start the optimizer. By default it will try to reach a specific framerate
but if the optimizer is set with improvementMode === true then it will run all optimization while frame rate is above the target frame rate

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:737](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L737)

Stops the current optimizer

#### Returns

`void`

***

### OptimizeAsync()

> `static` **OptimizeAsync**(`scene`, `options?`, `onSuccess?`, `onFailure?`): `SceneOptimizer`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneOptimizer.ts:840](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneOptimizer.ts#L840)

Helper function to create a SceneOptimizer with one single line of code

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the scene to work on

##### options?

[`SceneOptimizerOptions`](SceneOptimizerOptions.md)

defines the options to use with the SceneOptimizer

##### onSuccess?

() => `void`

defines a callback to call on success

##### onFailure?

() => `void`

defines a callback to call on failure

#### Returns

`SceneOptimizer`

the new SceneOptimizer object
