[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Analyser

# Class: Analyser

Defined in: [babylonjs-source/packages/dev/core/src/Audio/analyser.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/analyser.ts#L13)

Class used to work with sound analyzer using fast fourier transform (FFT)

## See

https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic

## Constructors

### Constructor

> **new Analyser**(`scene?`): `Analyser`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/analyser.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/analyser.ts#L49)

Creates a new analyser

#### Parameters

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines hosting scene

#### Returns

`Analyser`

## Properties

### BARGRAPHAMPLITUDE

> **BARGRAPHAMPLITUDE**: `number` = `256`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/analyser.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/analyser.ts#L25)

Gets or sets the bar graph amplitude

***

### DEBUGCANVASPOS

> **DEBUGCANVASPOS**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/analyser.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/analyser.ts#L29)

Gets or sets the position of the debug canvas

#### x

> **x**: `number` = `20`

#### y

> **y**: `number` = `20`

***

### DEBUGCANVASSIZE

> **DEBUGCANVASSIZE**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/analyser.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/analyser.ts#L33)

Gets or sets the debug canvas size

#### height

> **height**: `number` = `200`

#### width

> **width**: `number` = `320`

***

### FFT\_SIZE

> **FFT\_SIZE**: `number` = `512`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/analyser.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/analyser.ts#L21)

Gets or sets the FFT table size

***

### SMOOTHING

> **SMOOTHING**: `number` = `0.75`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/analyser.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/analyser.ts#L17)

Gets or sets the smoothing

## Methods

### connectAudioNodes()

> **connectAudioNodes**(`inputAudioNode`, `outputAudioNode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/analyser.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/analyser.ts#L185)

Connects two audio nodes

#### Parameters

##### inputAudioNode

`AudioNode`

defines first node to connect

##### outputAudioNode

`AudioNode`

defines second node to connect

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/analyser.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/analyser.ts#L195)

Releases all associated resources

#### Returns

`void`

***

### drawDebugCanvas()

> **drawDebugCanvas**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/analyser.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/analyser.ts#L128)

Renders the debug canvas

#### Returns

`void`

***

### getByteFrequencyData()

> **getByteFrequencyData**(): `Uint8Array`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/analyser.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/analyser.ts#L88)

Gets the current frequency data as a byte array

#### Returns

`Uint8Array`

a Uint8Array

#### See

https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData

***

### getByteTimeDomainData()

> **getByteTimeDomainData**(): `Uint8Array`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/analyser.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/analyser.ts#L102)

Gets the current waveform as a byte array

#### Returns

`Uint8Array`

a Uint8Array

#### See

https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteTimeDomainData

***

### getFloatFrequencyData()

> **getFloatFrequencyData**(): `Float32Array`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/analyser.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/analyser.ts#L116)

Gets the current frequency data as a float array

#### Returns

`Float32Array`

a Float32Array

#### See

https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData

***

### getFrequencyBinCount()

> **getFrequencyBinCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/analyser.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/analyser.ts#L75)

Get the number of data values you will have to play with for the visualization

#### Returns

`number`

a number

#### See

https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/frequencyBinCount

***

### stopDebugCanvas()

> **stopDebugCanvas**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/analyser.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Audio/analyser.ts#L168)

Stops rendering the debug canvas and removes it

#### Returns

`void`
