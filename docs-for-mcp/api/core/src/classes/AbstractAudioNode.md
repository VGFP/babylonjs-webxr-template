[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AbstractAudioNode

# Abstract Class: AbstractAudioNode

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L23)

Abstract class for an audio node.

An audio node is a processing unit that can receive audio data from an upstream node and/or send audio data to a
downstream node.

Nodes can be connected to other nodes to create an audio graph. The audio graph represents the flow of audio data.

There are 3 types of audio nodes:
1. Input: Receives audio data from upstream nodes.
2. Output: Sends audio data to downstream nodes.
3. Input/Output: Receives audio data from upstream nodes and sends audio data to downstream nodes.

## Extended by

- [`AbstractNamedAudioNode`](AbstractNamedAudioNode.md)

## Properties

### engine

> `readonly` **engine**: [`AudioEngineV2`](AudioEngineV2.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L39)

The audio engine this node belongs to.

***

### onDisposeObservable

> `readonly` **onDisposeObservable**: [`Observable`](Observable.md)\<`AbstractAudioNode`\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L44)

Observable for when the audio node is disposed.

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L63)

Releases associated resources.
- Triggers `onDisposeObservable`.

#### Returns

`void`

#### See

[onDisposeObservable](#ondisposeobservable)

***

### getClassName()

> `abstract` **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/abstractAudioNode.ts#L90)

Gets a string identifying the name of the class

#### Returns

`string`

the class's name as a string
