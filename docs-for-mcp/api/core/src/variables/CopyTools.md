[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CopyTools

# Variable: CopyTools

> `const` **CopyTools**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/copyTools.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/copyTools.ts#L115)

Class used to host copy specific utilities
(Back-compat)

## Type Declaration

### GenerateBase64StringFromPixelData

> **GenerateBase64StringFromPixelData**: (`pixels`, `size`, `invertY`) => [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

Transform some pixel data to a base64 string

Transform some pixel data to a base64 string

#### Parameters

##### pixels

`ArrayBufferView`

defines the pixel data to transform to base64

##### size

[`ISize`](../interfaces/ISize.md)

defines the width and height of the (texture) data

##### invertY?

`boolean` = `false`

true if the data must be inverted for the Y coordinate during the conversion

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

The base64 encoded string or null

#### Param

**pixels**

defines the pixel data to transform to base64

#### Param

**size**

defines the width and height of the (texture) data

#### Param

**invertY**

true if the data must be inverted for the Y coordinate during the conversion

#### Returns

The base64 encoded string or null

### GenerateBase64StringFromTexture

> **GenerateBase64StringFromTexture**: (`texture`, `faceIndex`, `level`) => [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

Reads the pixels stored in the webgl texture and returns them as a base64 string

Reads the pixels stored in the webgl texture and returns them as a base64 string

#### Parameters

##### texture

[`BaseTexture`](../classes/BaseTexture.md)

defines the texture to read pixels from

##### faceIndex?

`number` = `0`

defines the face of the texture to read (in case of cube texture)

##### level?

`number` = `0`

defines the LOD level of the texture to read (in case of Mip Maps)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

The base64 encoded string or null

#### Param

**texture**

defines the texture to read pixels from

#### Param

**faceIndex**

defines the face of the texture to read (in case of cube texture)

#### Param

**level**

defines the LOD level of the texture to read (in case of Mip Maps)

#### Returns

The base64 encoded string or null

### GenerateBase64StringFromTextureAsync

> **GenerateBase64StringFromTextureAsync**: (`texture`, `faceIndex`, `level`) => `Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<`string`\>\>

Reads the pixels stored in the webgl texture and returns them as a base64 string

Reads the pixels stored in the webgl texture and returns them as a base64 string

#### Parameters

##### texture

[`BaseTexture`](../classes/BaseTexture.md)

defines the texture to read pixels from

##### faceIndex?

`number` = `0`

defines the face of the texture to read (in case of cube texture)

##### level?

`number` = `0`

defines the LOD level of the texture to read (in case of Mip Maps)

#### Returns

`Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<`string`\>\>

The base64 encoded string or null wrapped in a promise

#### Param

**texture**

defines the texture to read pixels from

#### Param

**faceIndex**

defines the face of the texture to read (in case of cube texture)

#### Param

**level**

defines the LOD level of the texture to read (in case of Mip Maps)

#### Returns

The base64 encoded string or null wrapped in a promise
