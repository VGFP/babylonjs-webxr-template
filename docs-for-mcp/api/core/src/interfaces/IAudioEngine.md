[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IAudioEngine

# Interface: IAudioEngine

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts#L11)

This represents an audio engine and it is responsible
to play, synchronize and analyse sounds throughout the application.

## See

https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic

## Extends

- [`IDisposable`](IDisposable.md)

## Properties

### audioContext

> `readonly` **audioContext**: [`Nullable`](../type-aliases/Nullable.md)\<`AudioContext`\>

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts#L20)

Gets the current AudioContext if available.

***

### canUseWebAudio

> `readonly` **canUseWebAudio**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts#L15)

Gets whether the current host supports Web Audio and thus could create AudioContexts.

***

### isMP3supported

> `readonly` **isMP3supported**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts#L30)

Gets whether or not mp3 are supported by your browser.

***

### isOGGsupported

> `readonly` **isOGGsupported**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts#L35)

Gets whether or not ogg are supported by your browser.

***

### masterGain

> `readonly` **masterGain**: `GainNode`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts#L25)

The master gain node defines the global audio volume of your audio engine.

***

### onAudioLockedObservable

> **onAudioLockedObservable**: [`Observable`](../classes/Observable.md)\<`IAudioEngine`\>

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts#L63)

Event raised when audio has been locked on the browser.

***

### onAudioUnlockedObservable

> **onAudioUnlockedObservable**: [`Observable`](../classes/Observable.md)\<`IAudioEngine`\>

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts#L58)

Event raised when audio has been unlocked on the browser.

***

### unlocked

> `readonly` **unlocked**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts#L53)

Gets whether or not the audio engine is unlocked (require first a user gesture on some browser).

***

### useCustomUnlockedButton

> **useCustomUnlockedButton**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts#L48)

Defines if the audio engine relies on a custom unlocked button.
In this case, the embedded button will not be displayed.

***

### WarnedWebAudioUnsupported

> **WarnedWebAudioUnsupported**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts#L42)

Defines if Babylon should emit a warning if WebAudio is not supported.

#### Ignore Naming

## Methods

### connectToAnalyser()

> **connectToAnalyser**(`analyser`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts#L95)

Connect the audio engine to an audio analyser allowing some amazing
synchronization between the sounds/music and your visualization (VuMeter for instance).

#### Parameters

##### analyser

[`Analyser`](../classes/Analyser.md)

The analyser to connect to the engine

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#using-the-analyser

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L120)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IDisposable`](IDisposable.md).[`dispose`](IDisposable.md#dispose)

***

### getGlobalVolume()

> **getGlobalVolume**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts#L81)

Gets the global volume sets on the master gain.

#### Returns

`number`

the global volume if set or -1 otherwise

***

### lock()

> **lock**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts#L69)

Flags the audio engine in Locked state.
This happens due to new browser policies preventing audio to autoplay.

#### Returns

`void`

***

### setGlobalVolume()

> **setGlobalVolume**(`newVolume`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts#L87)

Sets the global volume of your experience (sets on the master gain).

#### Parameters

##### newVolume

`number`

Defines the new global volume of the application

#### Returns

`void`

***

### unlock()

> **unlock**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/IAudioEngine.ts#L75)

Unlocks the audio engine once a user action has been done on the dom.
This is helpful to resume play once browser policies have been satisfied.

#### Returns

`void`
