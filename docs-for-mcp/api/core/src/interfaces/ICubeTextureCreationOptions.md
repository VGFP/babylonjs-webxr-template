[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICubeTextureCreationOptions

# Interface: ICubeTextureCreationOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/cubeTexture.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/cubeTexture.ts#L19)

Defines the available options when creating a cube texture

## Properties

### buffer?

> `optional` **buffer?**: `ArrayBufferView`\<`ArrayBufferLike`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/cubeTexture.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/cubeTexture.ts#L30)

buffer to load instead of loading the data from the url

***

### createPolynomials?

> `optional` **createPolynomials?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/cubeTexture.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/cubeTexture.ts#L48)

createPolynomials defines whether or not to create polynomial harmonics from the texture data if necessary

***

### extensions?

> `optional` **extensions?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/cubeTexture.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/cubeTexture.ts#L21)

Defines the suffixes add to the picture name in case six images are in use like _px.jpg

***

### files?

> `optional` **files?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/cubeTexture.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/cubeTexture.ts#L27)

files defines the six files to load for the different faces in that order: px, py, pz, nx, ny, nz

***

### forcedExtension?

> `optional` **forcedExtension?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/cubeTexture.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/cubeTexture.ts#L45)

forcedExtension defines the extensions to use (force a special type of file to load) in case it is different from the file name

***

### format?

> `optional` **format?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/cubeTexture.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/cubeTexture.ts#L39)

format defines the internal format to use for the texture once loaded

***

### loaderOptions?

> `optional` **loaderOptions?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/cubeTexture.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/cubeTexture.ts#L57)

loaderOptions options to be passed to the loader

***

### lodOffset?

> `optional` **lodOffset?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/cubeTexture.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/cubeTexture.ts#L54)

lodOffset defines the offset applied to environment texture. This manages first LOD level used for IBL according to the roughness

***

### lodScale?

> `optional` **lodScale?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/cubeTexture.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/cubeTexture.ts#L51)

lodScale defines the scale applied to environment texture. This manages the range of LOD level used for IBL according to the roughness

***

### noMipmap?

> `optional` **noMipmap?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/cubeTexture.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/cubeTexture.ts#L24)

noMipmap defines if mipmaps should be created or not

***

### onError?

> `optional` **onError?**: (`message?`, `exception?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/cubeTexture.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/cubeTexture.ts#L36)

onError defines a callback triggered in case of error during load

#### Parameters

##### message?

`string`

##### exception?

`any`

#### Returns

`void`

***

### onLoad?

> `optional` **onLoad?**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/cubeTexture.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/cubeTexture.ts#L33)

onLoad defines a callback triggered at the end of the file load if no errors occurred

#### Returns

`void`

***

### prefiltered?

> `optional` **prefiltered?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/cubeTexture.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/cubeTexture.ts#L42)

prefiltered defines whether or not the texture is created from prefiltered data

***

### sphericalPolynomialTargetSize?

> `optional` **sphericalPolynomialTargetSize?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/cubeTexture.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/cubeTexture.ts#L63)

Target face size for spherical polynomial computation. 0 = full resolution (default).

***

### useSRGBBuffer?

> `optional` **useSRGBBuffer?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/cubeTexture.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/cubeTexture.ts#L60)

useSRGBBuffer Defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU) (default: false)
