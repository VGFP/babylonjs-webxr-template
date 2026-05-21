[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / VertexAnimationBaker

# Class: VertexAnimationBaker

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/vertexAnimationBaker.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/BakedVertexAnimation/vertexAnimationBaker.ts#L17)

**`Since`**

Class to bake vertex animation textures.
 5.0

## Constructors

### Constructor

> **new VertexAnimationBaker**(`scene`, `meshOrSkeleton`): `VertexAnimationBaker`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/vertexAnimationBaker.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/BakedVertexAnimation/vertexAnimationBaker.ts#L27)

Create a new VertexAnimationBaker object which can help baking animations into a texture.

#### Parameters

##### scene

[`Scene`](Scene.md)

Defines the scene the VAT belongs to

##### meshOrSkeleton

[`Mesh`](Mesh.md) \| [`Skeleton`](Skeleton.md)

Defines the skeleton or the mesh from which to retrieve the skeleton from.

#### Returns

`VertexAnimationBaker`

## Methods

### bakeVertexData()

> **bakeVertexData**(`ranges`): `Promise`\<`Float32Array`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/vertexAnimationBaker.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/BakedVertexAnimation/vertexAnimationBaker.ts#L89)

Bakes the animation into the texture. This should be called once, when the
scene starts, so the VAT is generated and associated to the mesh.

#### Parameters

##### ranges

[`AnimationRange`](AnimationRange.md)[]

Defines the ranges in the animation that will be baked.

#### Returns

`Promise`\<`Float32Array`\<`ArrayBufferLike`\>\>

The array of matrix transforms for each vertex (columns) and frame (rows), as a Float32Array.

***

### bakeVertexDataSync()

> **bakeVertexDataSync**(`ranges`, `halfFloat`): `Float32Array`\<`ArrayBufferLike`\> \| `Uint16Array`\<`ArrayBufferLike`\>

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/vertexAnimationBaker.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/BakedVertexAnimation/vertexAnimationBaker.ts#L44)

#### Parameters

##### ranges

[`AnimationRange`](AnimationRange.md)[]

Defines the ranges in the animation that will be baked.

##### halfFloat

`boolean`

If true, the vertex data will be returned as half-float (Uint16Array), otherwise as full float (Float32Array).

#### Returns

`Float32Array`\<`ArrayBufferLike`\> \| `Uint16Array`\<`ArrayBufferLike`\>

The array of matrix transforms for each vertex (columns) and frame (rows), as a Float32Array or Uint16Array.

***

### loadBakedVertexDataFromJSON()

> **loadBakedVertexDataFromJSON**(`json`): `Float32Array`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/vertexAnimationBaker.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/BakedVertexAnimation/vertexAnimationBaker.ts#L214)

Loads previously baked data in string format.

#### Parameters

##### json

`string`

The json string as serialized by serializeBakedVertexDataToJSON().

#### Returns

`Float32Array`

The array of matrix transforms for each vertex (columns) and frame (rows), as a Float32Array.

***

### loadBakedVertexDataFromObject()

> **loadBakedVertexDataFromObject**(`data`): `Float32Array`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/vertexAnimationBaker.ts:197](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/BakedVertexAnimation/vertexAnimationBaker.ts#L197)

Loads previously baked data.

#### Parameters

##### data

`Record`\<`string`, `any`\>

The object as serialized by serializeBakedVertexDataToObject()

#### Returns

`Float32Array`

The array of matrix transforms for each vertex (columns) and frame (rows), as a Float32Array.

***

### serializeBakedVertexDataToJSON()

> **serializeBakedVertexDataToJSON**(`vertexData`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/vertexAnimationBaker.ts:206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/BakedVertexAnimation/vertexAnimationBaker.ts#L206)

Serializes our vertexData to a JSON string, with a nice string for the vertexData.
Should be called right after bakeVertexData().

#### Parameters

##### vertexData

`Float32Array`

The vertex array data.

#### Returns

`string`

This object serialized to a safe string.

***

### serializeBakedVertexDataToObject()

> **serializeBakedVertexDataToObject**(`vertexData`): `Record`\<`string`, `any`\>

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/vertexAnimationBaker.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/BakedVertexAnimation/vertexAnimationBaker.ts#L175)

Serializes our vertexData to an object, with a nice string for the vertexData.

#### Parameters

##### vertexData

`Float32Array`

The vertex array data.

#### Returns

`Record`\<`string`, `any`\>

This object serialized to a JS dict.

***

### textureFromBakedVertexData()

> **textureFromBakedVertexData**(`vertexData`): [`RawTexture`](RawTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/vertexAnimationBaker.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/BakedVertexAnimation/vertexAnimationBaker.ts#L145)

Builds a vertex animation texture given the vertexData in an array.

#### Parameters

##### vertexData

`Float32Array`\<`ArrayBufferLike`\> \| `Uint16Array`\<`ArrayBufferLike`\>

The vertex animation data. You can generate it with bakeVertexData(). You can pass in a Float32Array to return a full precision texture, or a Uint16Array to return a half-float texture.
If you pass in a Uint16Array, make sure your device supports half-float textures

#### Returns

[`RawTexture`](RawTexture.md)

The vertex animation texture to be used with BakedVertexAnimationManager.
