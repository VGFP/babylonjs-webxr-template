[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CubeMapInfo

# Interface: CubeMapInfo

Defined in: [babylonjs-source/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts:9](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts#L9)

CubeMap information grouping all the data for each faces as well as the cubemap size.

## Properties

### back

> **back**: [`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts#L20)

The pixel array for the back face.
This is stored in format, left to right, up to down format.

***

### down

> **down**: [`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts#L44)

The pixel array for the down face.
This is stored in format, left to right, up to down format.

***

### format

> **format**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts#L58)

The format of the texture.

RGBA, RGB.

***

### front

> **front**: [`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts#L14)

The pixel array for the front face.
This is stored in format, left to right, up to down format.

***

### gammaSpace

> **gammaSpace**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts#L70)

Specifies whether the texture is in gamma space.

***

### left

> **left**: [`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts#L26)

The pixel array for the left face.
This is stored in format, left to right, up to down format.

***

### right

> **right**: [`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts#L32)

The pixel array for the right face.
This is stored in format, left to right, up to down format.

***

### size

> **size**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts#L51)

The size of the cubemap stored.

Each faces will be size * size pixels.

***

### type

> **type**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts#L65)

The type of the texture data.

UNSIGNED_INT, FLOAT.

***

### up

> **up**: [`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts#L38)

The pixel array for the up face.
This is stored in format, left to right, up to down format.
