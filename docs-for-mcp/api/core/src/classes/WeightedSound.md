[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WeightedSound

# Class: WeightedSound

Defined in: [babylonjs-source/packages/dev/core/src/Audio/weightedsound.ts:7](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/weightedsound.ts#L7)

Wraps one or more Sound objects and selects one with random weight for playback.

## Constructors

### Constructor

> **new WeightedSound**(`loop`, `sounds`, `weights`): `WeightedSound`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/weightedsound.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/weightedsound.ts#L28)

Creates a new WeightedSound from the list of sounds given.

#### Parameters

##### loop

`boolean`

When true a Sound will be selected and played when the current playing Sound completes.

##### sounds

[`Sound`](Sound.md)[]

Array of Sounds that will be selected from.

##### weights

`number`[]

Array of number values for selection weights; length must equal sounds, values will be normalized to 1

#### Returns

`WeightedSound`

## Properties

### isPaused

> **isPaused**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/weightedsound.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/weightedsound.ts#L16)

A Sound is currently paused.

***

### isPlaying

> **isPlaying**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/weightedsound.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/weightedsound.ts#L14)

A Sound is currently playing.

***

### loop

> **loop**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/weightedsound.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/weightedsound.ts#L9)

When true a Sound will be selected and played when the current playing Sound completes.

## Accessors

### directionalConeInnerAngle

#### Get Signature

> **get** **directionalConeInnerAngle**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/weightedsound.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/weightedsound.ts#L55)

The size of cone in degrees for a directional sound in which there will be no attenuation.

##### Returns

`number`

#### Set Signature

> **set** **directionalConeInnerAngle**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/weightedsound.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/weightedsound.ts#L62)

The size of cone in degrees for a directional sound in which there will be no attenuation.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### directionalConeOuterAngle

#### Get Signature

> **get** **directionalConeOuterAngle**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/weightedsound.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/weightedsound.ts#L80)

Size of cone in degrees for a directional sound outside of which there will be no sound.
Listener angles between innerAngle and outerAngle will falloff linearly.

##### Returns

`number`

#### Set Signature

> **set** **directionalConeOuterAngle**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/weightedsound.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/weightedsound.ts#L88)

Size of cone in degrees for a directional sound outside of which there will be no sound.
Listener angles between innerAngle and outerAngle will falloff linearly.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### volume

#### Get Signature

> **get** **volume**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/weightedsound.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/weightedsound.ts#L105)

Playback volume.

##### Returns

`number`

#### Set Signature

> **set** **volume**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/weightedsound.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/weightedsound.ts#L112)

Playback volume.

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### pause()

> **pause**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/weightedsound.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/weightedsound.ts#L134)

Suspend playback

#### Returns

`void`

***

### play()

> **play**(`startOffset?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/weightedsound.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/weightedsound.ts#L157)

Start playback.

#### Parameters

##### startOffset?

`number`

Position the clip head at a specific time in seconds.

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/weightedsound.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/weightedsound.ts#L146)

Stop playback

#### Returns

`void`
