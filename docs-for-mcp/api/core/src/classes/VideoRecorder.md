[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / VideoRecorder

# Class: VideoRecorder

Defined in: [babylonjs-source/packages/dev/core/src/Misc/videoRecorder.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/videoRecorder.ts#L74)

This can help with recording videos from BabylonJS.
This is based on the available WebRTC functionalities of the browser.

## See

https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToVideo

## Constructors

### Constructor

> **new VideoRecorder**(`engine`, `options?`): `VideoRecorder`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/videoRecorder.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/videoRecorder.ts#L115)

Create a new VideoCapture object which can help converting what you see in Babylon to a video file.

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

Defines the BabylonJS Engine you wish to record.

##### options?

`Partial`\<[`VideoRecorderOptions`](../interfaces/VideoRecorderOptions.md)\> = `{}`

Defines options that can be used to customize the capture.

#### Returns

`VideoRecorder`

## Accessors

### isRecording

#### Get Signature

> **get** **isRecording**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/videoRecorder.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/videoRecorder.ts#L106)

True when a recording is already in progress.

##### Returns

`boolean`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/videoRecorder.ts:207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/videoRecorder.ts#L207)

Releases internal resources used during the recording.

#### Returns

`void`

***

### startRecording()

> **startRecording**(`fileName?`, `maxDuration?`): `Promise`\<`Blob`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/videoRecorder.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/videoRecorder.ts#L173)

Starts recording the canvas for a max duration specified in parameters.

#### Parameters

##### fileName?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\> = `"babylonjs.webm"`

Defines the name of the file to be downloaded when the recording stop.
If null no automatic download will start and you can rely on the promise to get the data back.

##### maxDuration?

`number` = `7`

Defines the maximum recording time in seconds.
It defaults to 7 seconds. A value of zero will not stop automatically, you would need to call stopRecording manually.

#### Returns

`Promise`\<`Blob`\>

A promise callback at the end of the recording with the video data in Blob.

***

### stopRecording()

> **stopRecording**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/videoRecorder.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/videoRecorder.ts#L151)

Stops the current recording before the default capture timeout passed in the startRecording function.

#### Returns

`void`

***

### IsSupported()

> `static` **IsSupported**(`engine`, `canvas?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/videoRecorder.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/videoRecorder.ts#L87)

Returns whether or not the VideoRecorder is available in your browser.

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

Defines the Babylon Engine.

##### canvas?

`HTMLCanvasElement`

Defines the canvas to record. If not provided, the engine canvas will be used.

#### Returns

`boolean`

true if supported otherwise false.
