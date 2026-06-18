[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AudioEngine

# Class: AudioEngine

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L16)

This represents the default audio engine used in babylon.
It is responsible to play, synchronize and analyse sounds throughout the  application.

## See

https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic

## Implements

- [`IAudioEngine`](../interfaces/IAudioEngine.md)

## Constructors

### Constructor

> **new AudioEngine**(`hostElement?`, `audioContext?`, `audioDestination?`): `AudioEngine`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L107)

Instantiates a new audio engine.

#### Parameters

##### hostElement?

[`Nullable`](../type-aliases/Nullable.md)\<`HTMLElement`\> = `null`

defines the host element where to display the mute icon if necessary

##### audioContext?

[`Nullable`](../type-aliases/Nullable.md)\<`AudioContext`\> = `null`

defines the audio context to be used by the audio engine

##### audioDestination?

[`Nullable`](../type-aliases/Nullable.md)\<`AudioDestinationNode` \| `MediaStreamAudioDestinationNode`\> = `null`

defines the audio destination node to be used by audio engine

#### Returns

`AudioEngine`

## Properties

### canUseWebAudio

> **canUseWebAudio**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L24)

Gets whether the current host supports Web Audio and thus could create AudioContexts.

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`canUseWebAudio`](../interfaces/IAudioEngine.md#canusewebaudio)

***

### isMP3supported

> **isMP3supported**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L46)

Gets whether or not mp3 are supported by your browser.

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`isMP3supported`](../interfaces/IAudioEngine.md#ismp3supported)

***

### isOGGsupported

> **isOGGsupported**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L51)

Gets whether or not ogg are supported by your browser.

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`isOGGsupported`](../interfaces/IAudioEngine.md#isoggsupported)

***

### onAudioLockedObservable

> **onAudioLockedObservable**: [`Observable`](Observable.md)\<[`IAudioEngine`](../interfaces/IAudioEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L81)

Event raised when audio has been locked on the browser.

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`onAudioLockedObservable`](../interfaces/IAudioEngine.md#onaudiolockedobservable)

***

### onAudioUnlockedObservable

> **onAudioUnlockedObservable**: [`Observable`](Observable.md)\<[`IAudioEngine`](../interfaces/IAudioEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L76)

Event raised when audio has been unlocked on the browser.

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`onAudioUnlockedObservable`](../interfaces/IAudioEngine.md#onaudiounlockedobservable)

***

### unlocked

> **unlocked**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L58)

Gets whether audio has been unlocked on the device.
Some Browsers have strong restrictions about Audio and won't autoplay unless
a user interaction has happened.

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`unlocked`](../interfaces/IAudioEngine.md#unlocked)

***

### WarnedWebAudioUnsupported

> **WarnedWebAudioUnsupported**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L41)

Defines if Babylon should emit a warning if WebAudio is not supported.

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`WarnedWebAudioUnsupported`](../interfaces/IAudioEngine.md#warnedwebaudiounsupported)

## Accessors

### audioContext

#### Get Signature

> **get** **audioContext**(): [`Nullable`](../type-aliases/Nullable.md)\<`AudioContext`\>

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L89)

Gets the current AudioContext if available.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`AudioContext`\>

Gets the current AudioContext if available.

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`audioContext`](../interfaces/IAudioEngine.md#audiocontext)

***

### masterGain

#### Get Signature

> **get** **masterGain**(): `GainNode`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L29)

The master gain node defines the global audio volume of your audio engine.

##### Returns

`GainNode`

#### Set Signature

> **set** **masterGain**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L33)

The master gain node defines the global audio volume of your audio engine.

##### Parameters

###### value

`GainNode`

##### Returns

`void`

The master gain node defines the global audio volume of your audio engine.

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`masterGain`](../interfaces/IAudioEngine.md#mastergain)

***

### useCustomUnlockedButton

#### Get Signature

> **get** **useCustomUnlockedButton**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L64)

Defines if the audio engine relies on a custom unlocked button.
In this case, the embedded button will not be displayed.

##### Returns

`boolean`

#### Set Signature

> **set** **useCustomUnlockedButton**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L68)

Defines if the audio engine relies on a custom unlocked button.
In this case, the embedded button will not be displayed.

##### Parameters

###### value

`boolean`

##### Returns

`void`

Defines if the audio engine relies on a custom unlocked button.
In this case, the embedded button will not be displayed.

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`useCustomUnlockedButton`](../interfaces/IAudioEngine.md#usecustomunlockedbutton)

## Methods

### connectToAnalyser()

> **connectToAnalyser**(`analyser`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:247](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L247)

Connect the audio engine to an audio analyser allowing some amazing
synchronization between the sounds/music and your visualization (VuMeter for instance).

#### Parameters

##### analyser

[`Analyser`](Analyser.md)

The analyser to connect to the engine

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#using-the-analyser

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`connectToAnalyser`](../interfaces/IAudioEngine.md#connecttoanalyser)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:218](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L218)

Destroy and release the resources associated with the audio context.

#### Returns

`void`

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`dispose`](../interfaces/IAudioEngine.md#dispose)

***

### getGlobalVolume()

> **getGlobalVolume**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L229)

Gets the global volume sets on the master gain.

#### Returns

`number`

the global volume if set or -1 otherwise

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`getGlobalVolume`](../interfaces/IAudioEngine.md#getglobalvolume)

***

### lock()

> **lock**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L156)

Flags the audio engine in Locked state.
This happens due to new browser policies preventing audio to autoplay.

#### Returns

`void`

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`lock`](../interfaces/IAudioEngine.md#lock)

***

### setGlobalVolume()

> **setGlobalVolume**(`newVolume`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:237](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L237)

Sets the global volume of your experience (sets on the master gain).

#### Parameters

##### newVolume

`number`

Defines the new global volume of the application

#### Returns

`void`

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`setGlobalVolume`](../interfaces/IAudioEngine.md#setglobalvolume)

***

### unlock()

> **unlock**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.pure.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/audioEngine.pure.ts#L169)

Unlocks the audio engine once a user action has been done on the dom.
This is helpful to resume play once browser policies have been satisfied.

#### Returns

`void`

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`unlock`](../interfaces/IAudioEngine.md#unlock)
