[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SoundTrack

# Class: SoundTrack

Defined in: [babylonjs-source/packages/dev/core/src/Audio/soundTrack.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/soundTrack.ts#L27)

It could be useful to isolate your music & sounds on several tracks to better manage volume on a grouped instance of sounds.
It will be also used in a future release to apply effects on a specific track.

## See

https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#using-sound-tracks

## Constructors

### Constructor

> **new SoundTrack**(`scene?`, `options?`): `SoundTrack`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/soundTrack.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/soundTrack.ts#L49)

Creates a new sound track.

#### Parameters

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

Define the scene the sound track belongs to

##### options?

[`ISoundTrackOptions`](../interfaces/ISoundTrackOptions.md) = `{}`

#### Returns

`SoundTrack`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#using-sound-tracks

## Properties

### id

> **id**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/soundTrack.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/soundTrack.ts#L31)

The unique identifier of the sound track in the scene.

***

### soundCollection

> **soundCollection**: [`Sound`](Sound.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Audio/soundTrack.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/soundTrack.ts#L35)

The list of sounds included in the sound track.

## Methods

### addSound()

> **addSound**(`sound`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/soundTrack.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/soundTrack.ts#L102)

Adds a sound to this sound track

#### Parameters

##### sound

[`Sound`](Sound.md)

define the sound to add

#### Returns

`void`

#### Ignore Naming

***

### connectToAnalyser()

> **connectToAnalyser**(`analyser`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/soundTrack.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/soundTrack.ts#L175)

Connect the sound track to an audio analyser allowing some amazing
synchronization between the sounds/music and your visualization (VuMeter for instance).

#### Parameters

##### analyser

[`Analyser`](Analyser.md)

The analyser to connect to the engine

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#using-the-analyser

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/soundTrack.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/soundTrack.ts#L82)

Release the sound track and its associated resources

#### Returns

`void`

***

### removeSound()

> **removeSound**(`sound`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/soundTrack.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/soundTrack.ts#L126)

Removes a sound to this sound track

#### Parameters

##### sound

[`Sound`](Sound.md)

define the sound to remove

#### Returns

`void`

#### Ignore Naming

***

### setVolume()

> **setVolume**(`newVolume`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/soundTrack.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/soundTrack.ts#L137)

Set a global volume for the full sound track.

#### Parameters

##### newVolume

`number`

Define the new volume of the sound track

#### Returns

`void`

***

### switchPanningModelToEqualPower()

> **switchPanningModelToEqualPower**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/soundTrack.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/soundTrack.ts#L161)

Switch the panning model to Equal Power:
Represents the equal-power panning algorithm, generally regarded as simple and efficient. equalpower is the default value.

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound

***

### switchPanningModelToHRTF()

> **switchPanningModelToHRTF**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/soundTrack.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/soundTrack.ts#L148)

Switch the panning model to HRTF:
Renders a stereo output of higher quality than equalpower — it uses a convolution with measured impulse responses from human subjects.

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
