[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Sound

# Class: Sound

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L52)

Defines a sound that can be played in the application.
The sound can either be an ambient track or a simple sound played in reaction to a user action.

## See

https://doc.babylonjs.com/legacy/audio

## Constructors

### Constructor

> **new Sound**(`name`, `urlOrArrayBuffer`, `scene?`, `readyToPlayCallback?`, `options?`): `Sound`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:242](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L242)

Create a sound and attach it to a scene

#### Parameters

##### name

`string`

Name of your sound

##### urlOrArrayBuffer

`any`

Url to the sound to load async or ArrayBuffer, it also works with MediaStreams and AudioBuffers

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the scene the sound belongs to

##### readyToPlayCallback?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

Provide a callback function if you'd like to load your code once the sound is ready to be played

##### options?

[`ISoundOptions`](../interfaces/ISoundOptions.md)

Objects to provide with the current available options: autoplay, loop, volume, spatialSound, maxDistance, rolloffFactor, refDistance, distanceModel, panningModel, streaming

#### Returns

`Sound`

## Properties

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L168)

Gets or sets an object used to store user defined information for the sound.

***

### onEndedObservable

> **onEndedObservable**: [`Observable`](Observable.md)\<`Sound`\>

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L173)

Observable event when the current playing sound finishes.

***

### refDistance

> **refDistance**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L120)

Define the reference distance the sound should be heard perfectly.

#### See

https://doc.babylonjs.com/legacy/audio#creating-a-spatial-3d-sound

***

### rolloffFactor

> **rolloffFactor**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L125)

Define the roll off factor of spatial sounds.

#### See

https://doc.babylonjs.com/legacy/audio#creating-a-spatial-3d-sound

***

### soundTrackId

> **soundTrackId**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L101)

The sound track id this sound belongs to.

***

### useCustomAttenuation

> **useCustomAttenuation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L97)

Does the sound use a custom attenuation curve to simulate the falloff
happening when the source gets further away from the camera.

#### See

https://doc.babylonjs.com/legacy/audio#creating-your-own-custom-attenuation-function

## Accessors

### autoplay

#### Get Signature

> **get** **autoplay**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L67)

Does the sound autoplay once loaded.

##### Returns

`boolean`

#### Set Signature

> **set** **autoplay**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L71)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### currentTime

#### Get Signature

> **get** **currentTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:178](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L178)

Gets the current time for the sound.

##### Returns

`number`

***

### directionalConeInnerAngle

#### Get Signature

> **get** **directionalConeInnerAngle**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:583](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L583)

Gets or sets the inner angle for the directional cone.

##### Returns

`number`

#### Set Signature

> **set** **directionalConeInnerAngle**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:590](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L590)

Gets or sets the inner angle for the directional cone.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### directionalConeOuterAngle

#### Get Signature

> **get** **directionalConeOuterAngle**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:609](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L609)

Gets or sets the outer angle for the directional cone.

##### Returns

`number`

#### Set Signature

> **set** **directionalConeOuterAngle**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:616](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L616)

Gets or sets the outer angle for the directional cone.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### distanceModel

#### Get Signature

> **get** **distanceModel**(): `"linear"` \| `"inverse"` \| `"exponential"`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L149)

Define the distance attenuation model the sound will follow.

##### See

https://doc.babylonjs.com/legacy/audio#creating-a-spatial-3d-sound

##### Returns

`"linear"` \| `"inverse"` \| `"exponential"`

#### Set Signature

> **set** **distanceModel**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L152)

##### Parameters

###### value

`"linear"` \| `"inverse"` \| `"exponential"`

##### Returns

`void`

***

### isPaused

#### Get Signature

> **get** **isPaused**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L112)

Is this sound currently paused.

##### Returns

`boolean`

***

### isPlaying

#### Get Signature

> **get** **isPlaying**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L105)

Is this sound currently played.

##### Returns

`boolean`

***

### loop

#### Get Signature

> **get** **loop**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L78)

Does the sound loop after it finishes playing once.

##### Returns

`boolean`

#### Set Signature

> **set** **loop**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L82)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### maxDistance

#### Get Signature

> **get** **maxDistance**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L130)

Define the max distance the sound should be heard (intensity just became 0 at this point).

##### See

https://doc.babylonjs.com/legacy/audio#creating-a-spatial-3d-sound

##### Returns

`number`

#### Set Signature

> **set** **maxDistance**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L133)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L56)

The name of the sound in the scene.

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L60)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### spatialSound

#### Get Signature

> **get** **spatialSound**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L186)

Does this sound enables spatial sound.

##### See

https://doc.babylonjs.com/legacy/audio#creating-a-spatial-3d-sound

##### Returns

`boolean`

#### Set Signature

> **set** **spatialSound**(`newValue`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L194)

Does this sound enables spatial sound.

##### See

https://doc.babylonjs.com/legacy/audio#creating-a-spatial-3d-sound

##### Parameters

###### newValue

`boolean`

##### Returns

`void`

## Methods

### attachToMesh()

> **attachToMesh**(`transformNode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:846](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L846)

Attach the sound to a dedicated mesh

#### Parameters

##### transformNode

[`TransformNode`](TransformNode.md)

The transform node to connect the sound with

#### Returns

`void`

#### See

https://doc.babylonjs.com/legacy/audio#attaching-a-sound-to-a-mesh

***

### clone()

> **clone**(): [`Nullable`](../type-aliases/Nullable.md)\<`Sound`\>

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:893](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L893)

Clone the current sound in the scene.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Sound`\>

the new sound clone

***

### connectToSoundTrackAudioNode()

> **connectToSoundTrackAudioNode**(`soundTrackAudioNode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:540](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L540)

Connect this sound to a sound track audio node like gain...

#### Parameters

##### soundTrackAudioNode

`AudioNode`

the sound track audio node to connect to

#### Returns

`void`

***

### detachFromMesh()

> **detachFromMesh**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:868](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L868)

Detach the sound from the previously attached mesh

#### Returns

`void`

#### See

https://doc.babylonjs.com/legacy/audio#attaching-a-sound-to-a-mesh

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:399](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L399)

Release the sound and its associated resources

#### Returns

`void`

***

### getAudioBuffer()

> **getAudioBuffer**(): [`Nullable`](../type-aliases/Nullable.md)\<`AudioBuffer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:921](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L921)

Gets the current underlying audio buffer containing the data

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`AudioBuffer`\>

the audio buffer

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:430](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L430)

Get the current class name.

#### Returns

`string`

current class name

***

### getPlaybackRate()

> **getPlaybackRate**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:825](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L825)

Gets the sound play back rate.

#### Returns

`number`

the  play back rate of the sound

***

### getSoundGain()

> **getSoundGain**(): [`Nullable`](../type-aliases/Nullable.md)\<`GainNode`\>

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:941](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L941)

Gets the WebAudio GainNode, gives you precise control over the gain of instances of this Sound.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`GainNode`\>

the gain node

***

### getSoundSource()

> **getSoundSource**(): [`Nullable`](../type-aliases/Nullable.md)\<`AudioBufferSourceNode`\>

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:932](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L932)

Gets the WebAudio AudioBufferSourceNode, lets you keep track of and stop instances of this Sound.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`AudioBufferSourceNode`\>

the source node

***

### getVolume()

> **getVolume**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:837](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L837)

Gets the volume of the sound.

#### Returns

`number`

the volume of the sound

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:422](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L422)

Gets if the sounds is ready to be played or not.

#### Returns

`boolean`

true if ready, otherwise false

***

### pause()

> **pause**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:780](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L780)

Put the sound in pause

#### Returns

`void`

***

### play()

> **play**(`time?`, `offset?`, `length?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:714](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L714)

Play the sound

#### Parameters

##### time?

`number`

(optional) Start the sound after X seconds. Start immediately (0) by default.

##### offset?

`number`

(optional) Start the sound at a specific time in seconds

##### length?

`number`

(optional) Sound duration (in seconds)

#### Returns

`void`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:949](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L949)

Serializes the Sound in a JSON representation

#### Returns

`any`

the JSON representation of the sound

***

### setAttenuationFunction()

> **setAttenuationFunction**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:704](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L704)

Sets a new custom attenuation function for the sound.

#### Parameters

##### callback

(`currentVolume`, `currentDistance`, `maxDistance`, `refDistance`, `rolloffFactor`) => `number`

Defines the function used for the attenuation

#### Returns

`void`

#### See

https://doc.babylonjs.com/legacy/audio#creating-your-own-custom-attenuation-function

***

### setAudioBuffer()

> **setAudioBuffer**(`audioBuffer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:438](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L438)

Sets the data of the sound from an audiobuffer

#### Parameters

##### audioBuffer

`AudioBuffer`

The audioBuffer containing the data

#### Returns

`void`

***

### setDirectionalCone()

> **setDirectionalCone**(`coneInnerAngle`, `coneOuterAngle`, `coneOuterGain`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:557](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L557)

Transform this sound into a directional source

#### Parameters

##### coneInnerAngle

`number`

Size of the inner cone in degree

##### coneOuterAngle

`number`

Size of the outer cone in degree

##### coneOuterGain

`number`

Volume of the sound outside the outer cone (between 0.0 and 1.0)

#### Returns

`void`

***

### setLocalDirectionToMesh()

> **setLocalDirectionToMesh**(`newLocalDirection`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:654](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L654)

Sets the local direction of the emitter if spatial sound is enabled

#### Parameters

##### newLocalDirection

[`Vector3`](Vector3.md)

Defines the new local direction

#### Returns

`void`

***

### setPlaybackRate()

> **setPlaybackRate**(`newPlaybackRate`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:815](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L815)

Set the sound play back rate

#### Parameters

##### newPlaybackRate

`number`

Define the playback rate the sound should be played at

#### Returns

`void`

***

### setPosition()

> **setPosition**(`newPosition`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:636](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L636)

Sets the position of the emitter if spatial sound is enabled

#### Parameters

##### newPosition

[`Vector3`](Vector3.md)

Defines the new position

#### Returns

`void`

***

### setVolume()

> **setVolume**(`newVolume`, `time?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:798](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L798)

Sets a dedicated volume for this sounds

#### Parameters

##### newVolume

`number`

Define the new volume of the sound

##### time?

`number`

Define time for gradual change to new volume

#### Returns

`void`

***

### stop()

> **stop**(`time?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:763](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L763)

Stop the sound

#### Parameters

##### time?

`number`

(optional) Stop the sound after X seconds. Stop immediately (0) by default.

#### Returns

`void`

***

### switchPanningModelToEqualPower()

> **switchPanningModelToEqualPower**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:529](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L529)

Switch the panning model to Equal Power:
Represents the equal-power panning algorithm, generally regarded as simple and efficient. equalpower is the default value.

#### Returns

`void`

#### See

https://doc.babylonjs.com/legacy/audio#creating-a-spatial-3d-sound

***

### switchPanningModelToHRTF()

> **switchPanningModelToHRTF**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:517](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L517)

Switch the panning model to HRTF:
Renders a stereo output of higher quality than equalpower — it uses a convolution with measured impulse responses from human subjects.

#### Returns

`void`

#### See

https://doc.babylonjs.com/legacy/audio#creating-a-spatial-3d-sound

***

### updateOptions()

> **updateOptions**(`options`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:453](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L453)

Updates the current sounds options such as maxdistance, loop...

#### Parameters

##### options

[`ISoundOptions`](../interfaces/ISoundOptions.md)

A JSON object containing values named as the object properties

#### Returns

`void`

***

### Parse()

> `static` **Parse**(`parsedSound`, `scene`, `rootUrl`, `sourceSound?`): `Sound`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/sound.ts:994](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/sound.ts#L994)

Parse a JSON representation of a sound to instantiate in a given scene

#### Parameters

##### parsedSound

`any`

Define the JSON representation of the sound (usually coming from the serialize method)

##### scene

[`Scene`](Scene.md)

Define the scene the new parsed sound should be created in

##### rootUrl

`string`

Define the rooturl of the load in case we need to fetch relative dependencies

##### sourceSound?

`Sound`

Define a sound place holder if do not need to instantiate a new one

#### Returns

`Sound`

the newly parsed sound
