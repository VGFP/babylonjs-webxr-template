[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SceneRecorder

# Class: SceneRecorder

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneRecorder.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneRecorder.ts#L22)

Class used to record delta files between 2 scene states

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new SceneRecorder**(): `SceneRecorder`

#### Returns

`SceneRecorder`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneRecorder.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneRecorder.ts#L200)

Dispose the recorder.

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### getDelta()

> **getDelta**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneRecorder.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneRecorder.ts#L42)

Get the delta between current state and original state

#### Returns

`any`

a any containing the delta

***

### track()

> **track**(`scene`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneRecorder.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneRecorder.ts#L30)

Track a given scene. This means the current scene state will be considered the original state

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the scene to track

#### Returns

`void`

***

### ApplyDelta()

> `static` **ApplyDelta**(`deltaJSON`, `scene`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneRecorder.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneRecorder.ts#L228)

Apply a given delta to a given scene

#### Parameters

##### deltaJSON

`any`

defines the JSON containing the delta

##### scene

[`Scene`](Scene.md)

defines the scene to apply the delta to

#### Returns

`void`
