[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IAudioParameterRampOptions

# Interface: IAudioParameterRampOptions

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/audioParameter.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/audioParameter.ts#L26)

Options for ramping an audio parameter's value.

## Properties

### duration

> **duration**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/audioParameter.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/audioParameter.ts#L31)

The ramp time, in seconds. Must be greater than 0. Defaults to 0.01 seconds.
The audio parameter's value will reach the target value at the end of the duration.

***

### shape

> **shape**: [`AudioParameterRampShape`](../enumerations/AudioParameterRampShape.md)

Defined in: [babylonjs-source/packages/dev/core/src/AudioV2/audioParameter.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/AudioV2/audioParameter.ts#L35)

The shape of the ramp to use for the parameter change. Defaults to [AudioParameterRampShape.Linear](../enumerations/AudioParameterRampShape.md#linear).
