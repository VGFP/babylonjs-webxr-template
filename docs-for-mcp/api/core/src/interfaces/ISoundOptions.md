[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISoundOptions

# Interface: ISoundOptions

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts:4](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts#L4)

Interface used to define options for Sound class

## Properties

### autoplay?

> `optional` **autoplay?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts:8](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts#L8)

Does the sound autoplay once loaded.

***

### distanceModel?

> `optional` **distanceModel?**: `"linear"` \| `"inverse"` \| `"exponential"`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts#L43)

Define the distance attenuation model the sound will follow.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound

***

### length?

> `optional` **length?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts#L55)

Defines an optional length (in seconds) inside the sound file

***

### loop?

> `optional` **loop?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts#L12)

Does the sound loop after it finishes playing once.

***

### maxDistance?

> `optional` **maxDistance?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts#L24)

Maximum distance to hear that sound

***

### offset?

> `optional` **offset?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts#L59)

Defines an optional offset (in seconds) inside the sound file

***

### playbackRate?

> `optional` **playbackRate?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts#L47)

Defines the playback speed (1 by default)

***

### refDistance?

> `optional` **refDistance?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts#L38)

Define the reference distance the sound should be heard perfectly.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound

***

### rolloffFactor?

> `optional` **rolloffFactor?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts#L33)

Define the roll off factor of spatial sounds.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound

***

### skipCodecCheck?

> `optional` **skipCodecCheck?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts#L63)

If true, URLs will not be required to state the audio file codec to use.

***

### spatialSound?

> `optional` **spatialSound?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts#L20)

Is it a spatial sound?

***

### streaming?

> `optional` **streaming?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts#L51)

Defines if the sound is from a streaming source

***

### useCustomAttenuation?

> `optional` **useCustomAttenuation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts#L28)

Uses user defined attenuation function

***

### volume?

> `optional` **volume?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/Interfaces/ISoundOptions.ts#L16)

Sound's volume
