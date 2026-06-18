[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / VideoTextureSettings

# Interface: VideoTextureSettings

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/videoTexture.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/videoTexture.pure.ts#L36)

Settings for finer control over video usage

## Properties

### autoPlay?

> `optional` **autoPlay?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/videoTexture.pure.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/videoTexture.pure.ts#L40)

Applies `autoplay` to video, if specified

***

### autoUpdateTexture

> **autoUpdateTexture**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/videoTexture.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/videoTexture.pure.ts#L55)

Automatically updates internal texture from video at every frame in the render loop

***

### format?

> `optional` **format?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/videoTexture.pure.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/videoTexture.pure.ts#L65)

Defines the associated texture format.

***

### independentVideoSource?

> `optional` **independentVideoSource?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/videoTexture.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/videoTexture.pure.ts#L71)

Notify babylon to not modify any video settings and not control the video's playback.
Set this to true if you are controlling the way the video is being played, stopped and paused.

***

### loop?

> `optional` **loop?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/videoTexture.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/videoTexture.pure.ts#L50)

Applies `loop` to video, if specified

***

### muted?

> `optional` **muted?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/videoTexture.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/videoTexture.pure.ts#L45)

Applies `muted` to video, if specified

***

### poster?

> `optional` **poster?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/videoTexture.pure.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/videoTexture.pure.ts#L60)

Image src displayed during the video loading or until the user interacts with the video.
