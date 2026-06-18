[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / OnAudioEngineV2CreatedObservable

# Variable: OnAudioEngineV2CreatedObservable

> `const` **OnAudioEngineV2CreatedObservable**: [`Observable`](../classes/Observable.md)\<[`AudioEngineV2`](../classes/AudioEngineV2.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L22)

Observable that notifies when a new v2 audio engine instance has been created.
- Fires after the engine has been fully constructed and initialized (e.g. from [CreateAudioEngineAsync](../functions/CreateAudioEngineAsync.md)),
  so subclass state (audio context, listener, etc.) is guaranteed to be available to observers.
