[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMainAudioBusOptions

# Interface: IMainAudioBusOptions

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/mainAudioBus.ts:7](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/mainAudioBus.ts#L7)

Options for creating a main audio bus.

## Properties

### analyzerEnabled

> **analyzerEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L18)

Enable the audio analyzer. Defaults to false.

#### Inherited from

`IAbstractAudioBusOptions.analyzerEnabled`

***

### analyzerFFTSize

> **analyzerFFTSize**: [`AudioAnalyzerFFTSizeType`](../type-aliases/AudioAnalyzerFFTSizeType.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L22)

The size of the FFT (fast fourier transform) to use when converting time-domain data to frequency-domain data. Default is 2048.

#### Inherited from

`IAbstractAudioBusOptions.analyzerFFTSize`

***

### analyzerMaxDecibels

> **analyzerMaxDecibels**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L32)

The maximum decibel value for the range of the analyzer. Default is -30.

#### Inherited from

`IAbstractAudioBusOptions.analyzerMaxDecibels`

***

### analyzerMinDecibels

> **analyzerMinDecibels**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L27)

The minimum decibel value for the range of the analyzer. Default is -100.

#### Inherited from

`IAbstractAudioBusOptions.analyzerMinDecibels`

***

### analyzerSmoothing

> **analyzerSmoothing**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L37)

A number between 0 and 1 that determines how quickly the analyzer's value changes. Default is 0.8.

#### Inherited from

`IAbstractAudioBusOptions.analyzerSmoothing`

***

### volume

> **volume**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.ts#L20)

The volume/gain. Defaults to 1.

#### Inherited from

`IAbstractAudioBusOptions.volume`
