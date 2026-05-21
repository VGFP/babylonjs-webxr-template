[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AudioEngine

# Class: AudioEngine

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L23)

This represents the default audio engine used in babylon.
It is responsible to play, synchronize and analyse sounds throughout the  application.

## See

https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic

## Implements

- [`IAudioEngine`](../interfaces/IAudioEngine.md)

## Constructors

### Constructor

> **new AudioEngine**(`hostElement?`, `audioContext?`, `audioDestination?`): `AudioEngine`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L114)

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

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L31)

Gets whether the current host supports Web Audio and thus could create AudioContexts.

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`canUseWebAudio`](../interfaces/IAudioEngine.md#canusewebaudio)

***

### isMP3supported

> **isMP3supported**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L53)

Gets whether or not mp3 are supported by your browser.

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`isMP3supported`](../interfaces/IAudioEngine.md#ismp3supported)

***

### isOGGsupported

> **isOGGsupported**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L58)

Gets whether or not ogg are supported by your browser.

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`isOGGsupported`](../interfaces/IAudioEngine.md#isoggsupported)

***

### onAudioLockedObservable

> **onAudioLockedObservable**: [`Observable`](Observable.md)\<[`IAudioEngine`](../interfaces/IAudioEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L88)

Event raised when audio has been locked on the browser.

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`onAudioLockedObservable`](../interfaces/IAudioEngine.md#onaudiolockedobservable)

***

### onAudioUnlockedObservable

> **onAudioUnlockedObservable**: [`Observable`](Observable.md)\<[`IAudioEngine`](../interfaces/IAudioEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L83)

Event raised when audio has been unlocked on the browser.

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`onAudioUnlockedObservable`](../interfaces/IAudioEngine.md#onaudiounlockedobservable)

***

### unlocked

> **unlocked**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L65)

Gets whether audio has been unlocked on the device.
Some Browsers have strong restrictions about Audio and won't autoplay unless
a user interaction has happened.

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`unlocked`](../interfaces/IAudioEngine.md#unlocked)

***

### WarnedWebAudioUnsupported

> **WarnedWebAudioUnsupported**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L48)

Defines if Babylon should emit a warning if WebAudio is not supported.

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`WarnedWebAudioUnsupported`](../interfaces/IAudioEngine.md#warnedwebaudiounsupported)

## Accessors

### audioContext

#### Get Signature

> **get** **audioContext**(): [`Nullable`](../type-aliases/Nullable.md)\<`AudioContext`\>

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L96)

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

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L36)

The master gain node defines the global audio volume of your audio engine.

##### Returns

`GainNode`

#### Set Signature

> **set** **masterGain**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L40)

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

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L71)

Defines if the audio engine relies on a custom unlocked button.
In this case, the embedded button will not be displayed.

##### Returns

`boolean`

#### Set Signature

> **set** **useCustomUnlockedButton**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L75)

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

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:254](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L254)

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

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:225](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L225)

Destroy and release the resources associated with the audio context.

#### Returns

`void`

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`dispose`](../interfaces/IAudioEngine.md#dispose)

***

### getGlobalVolume()

> **getGlobalVolume**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:236](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L236)

Gets the global volume sets on the master gain.

#### Returns

`number`

the global volume if set or -1 otherwise

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`getGlobalVolume`](../interfaces/IAudioEngine.md#getglobalvolume)

***

### lock()

> **lock**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L163)

Flags the audio engine in Locked state.
This happens due to new browser policies preventing audio to autoplay.

#### Returns

`void`

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`lock`](../interfaces/IAudioEngine.md#lock)

***

### setGlobalVolume()

> **setGlobalVolume**(`newVolume`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:244](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L244)

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

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioEngine.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioEngine.ts#L176)

Unlocks the audio engine once a user action has been done on the dom.
This is helpful to resume play once browser policies have been satisfied.

#### Returns

`void`

#### Implementation of

[`IAudioEngine`](../interfaces/IAudioEngine.md).[`unlock`](../interfaces/IAudioEngine.md#unlock)
