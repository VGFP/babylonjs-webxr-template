[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AbstractAudioAnalyzer

# Abstract Class: AbstractAudioAnalyzer

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L60)

An AudioAnalyzer converts time-domain audio data into the frequency-domain.

## Constructors

### Constructor

> **new AbstractAudioAnalyzer**(): `AbstractAudioAnalyzer`

#### Returns

`AbstractAudioAnalyzer`

## Properties

### fftSize

> `abstract` **fftSize**: [`AudioAnalyzerFFTSizeType`](../type-aliases/AudioAnalyzerFFTSizeType.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L64)

The size of the FFT (fast fourier transform) to use when converting time-domain data to frequency-domain data. Default is 2048.

***

### isEnabled

> `abstract` **isEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L78)

Whether the analyzer is enabled or not.
- The data retrieval functions return an empty array if the analyzer is not enabled.

#### See

[enableAsync](#enableasync)

***

### maxDecibels

> `abstract` **maxDecibels**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L88)

The maximum decibel value for the range of the analyzer. Default is -30.

***

### minDecibels

> `abstract` **minDecibels**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L83)

The minimum decibel value for the range of the analyzer. Default is -100.

***

### smoothing

> `abstract` **smoothing**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L93)

A number between 0 and 1 that determines how quickly the analyzer's value changes. Default is 0.8.

## Accessors

### frequencyBinCount

#### Get Signature

> **get** **frequencyBinCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L69)

The number of data values that will be returned when calling getByteFrequencyData() or getFloatFrequencyData(). This is always half the `fftSize`.

##### Returns

`number`

## Methods

### dispose()

> `abstract` **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L98)

Releases associated resources.

#### Returns

`void`

***

### enableAsync()

> `abstract` **enableAsync**(): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L103)

Enables the analyzer

#### Returns

`Promise`\<`void`\>

***

### getByteFrequencyData()

> `abstract` **getByteFrequencyData**(): `Uint8Array`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L109)

Gets the current frequency data as a byte array

#### Returns

`Uint8Array`

a Uint8Array if the analyzer is enabled, otherwise an empty array

***

### getByteTimeDomainData()

> **getByteTimeDomainData**(): `Uint8Array`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L115)

Gets the current waveform data as a byte array

#### Returns

`Uint8Array`

a Uint8Array with length `fftSize` if the analyzer is enabled, otherwise an empty array

***

### getFloatFrequencyData()

> `abstract` **getFloatFrequencyData**(): `Float32Array`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L123)

Gets the current frequency data as a float array

#### Returns

`Float32Array`

a Float32Array if the analyzer is enabled, otherwise an empty array

***

### getFloatTimeDomainData()

> **getFloatTimeDomainData**(): `Float32Array`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L129)

Gets the current waveform data as a float array

#### Returns

`Float32Array`

a Float32Array with length `fftSize` if the analyzer is enabled, otherwise an empty array
