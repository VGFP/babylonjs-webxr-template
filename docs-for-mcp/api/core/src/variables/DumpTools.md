[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DumpTools

# ~~Variable: DumpTools~~

> `const` **DumpTools**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/dumpTools.pure.ts:309](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/dumpTools.pure.ts#L309)

Object containing a set of static utilities functions to dump data from a canvas

## Type Declaration

### ~~Dispose~~

> **Dispose**: () => `void`

Dispose the dump tools associated resources

#### Returns

`void`

### ~~DumpData~~

> **DumpData**: (`width`, `height`, `data`, `successCallback?`, `mimeType`, `fileName?`, `invertY`, `toArrayBuffer`, `quality?`) => `void`

Dumps an array buffer

#### Parameters

##### width

`number`

defines the rendering width

##### height

`number`

defines the rendering height

##### data

`ArrayBufferView`

the data array

##### successCallback?

(`data`) => `void`

defines the callback triggered once the data are available

##### mimeType?

`string` = `"image/png"`

defines the mime type of the result

##### fileName?

`string`

The name of the file to download. If present, the result will automatically be downloaded. If not defined, and `successCallback` is also not defined, the result will automatically be downloaded with an auto-generated file name.

##### invertY?

`boolean` = `false`

true to invert the picture in the Y dimension

##### toArrayBuffer?

`boolean` = `false`

true to convert the data to an ArrayBuffer (encoded as `mimeType`) instead of a base64 string

##### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

#### Returns

`void`

### ~~DumpDataAsync~~

> **DumpDataAsync**: \{(`width`, `height`, `data`, `mimeType`, `fileName`, `invertY`, `toArrayBuffer`, `quality?`): `Promise`\<`ArrayBuffer`\>; (`width`, `height`, `data`, `mimeType?`, `fileName?`, `invertY?`, `toArrayBuffer?`, `quality?`): `Promise`\<`string`\>; \}

#### Call Signature

> (`width`, `height`, `data`, `mimeType`, `fileName`, `invertY`, `toArrayBuffer`, `quality?`): `Promise`\<`ArrayBuffer`\>

##### Parameters

###### width

`number`

###### height

`number`

###### data

`ArrayBufferView`

###### mimeType

`string` \| `undefined`

###### fileName

`string` \| `undefined`

###### invertY

`boolean` \| `undefined`

###### toArrayBuffer

`true`

###### quality?

`number`

##### Returns

`Promise`\<`ArrayBuffer`\>

#### Call Signature

> (`width`, `height`, `data`, `mimeType?`, `fileName?`, `invertY?`, `toArrayBuffer?`, `quality?`): `Promise`\<`string`\>

##### Parameters

###### width

`number`

###### height

`number`

###### data

`ArrayBufferView`

###### mimeType?

`string`

###### fileName?

`string`

###### invertY?

`boolean`

###### toArrayBuffer?

`boolean`

###### quality?

`number`

##### Returns

`Promise`\<`string`\>

### ~~DumpFramebuffer~~

> **DumpFramebuffer**: (`width`, `height`, `engine`, `successCallback?`, `mimeType`, `fileName?`, `quality?`) => `Promise`\<`void`\>

Dumps the current bound framebuffer

#### Parameters

##### width

`number`

defines the rendering width

##### height

`number`

defines the rendering height

##### engine

[`AbstractEngine`](../classes/AbstractEngine.md)

defines the hosting engine

##### successCallback?

(`data`) => `void`

defines the callback triggered once the data are available

##### mimeType?

`string` = `"image/png"`

defines the mime type of the result

##### fileName?

`string`

defines the filename to download. If present, the result will automatically be downloaded

##### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

#### Returns

`Promise`\<`void`\>

a void promise

## Deprecated

use functions
