[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / KhronosTextureContainer

# Class: KhronosTextureContainer

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer.ts#L9)

for description see https://www.khronos.org/opengles/sdk/tools/KTX/
for file layout see https://www.khronos.org/opengles/sdk/tools/KTX/file_format_spec/

## Constructors

### Constructor

> **new KhronosTextureContainer**(`data`, `facesExpected`): `KhronosTextureContainer`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer.ts#L81)

Creates a new KhronosTextureContainer

#### Parameters

##### data

`ArrayBufferView`

contents of the KTX container file

##### facesExpected

`number`

should be either 1 or 6, based whether a cube texture or or

#### Returns

`KhronosTextureContainer`

## Properties

### bytesOfKeyValueData

> **bytesOfKeyValueData**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer.ts#L66)

Gets the bytes of key value data

***

### data

> **data**: `ArrayBufferView`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer.ts#L83)

contents of the KTX container file

***

### glBaseInternalFormat

> **glBaseInternalFormat**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer.ts#L38)

Gets the base internal format

***

### glFormat

> **glFormat**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer.ts#L30)

Gets the openGL format

***

### glInternalFormat

> **glInternalFormat**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer.ts#L34)

Gets the openGL internal format

***

### glType

> **glType**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer.ts#L22)

Gets the openGL type

***

### glTypeSize

> **glTypeSize**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer.ts#L26)

Gets the openGL type size

***

### isInvalid

> **isInvalid**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer.ts#L74)

If the container has been made invalid (eg. constructor failed to correctly load array buffer)

***

### loadType

> **loadType**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer.ts#L70)

Gets the load type

***

### numberOfArrayElements

> **numberOfArrayElements**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer.ts#L54)

Gets the number of array elements

***

### numberOfFaces

> **numberOfFaces**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer.ts#L58)

Gets the number of faces

***

### numberOfMipmapLevels

> **numberOfMipmapLevels**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer.ts#L62)

Gets the number of mipmap levels

***

### pixelDepth

> **pixelDepth**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer.ts#L50)

Gets image depth in pixels

***

### pixelHeight

> **pixelHeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer.ts#L46)

Gets image height in pixel

***

### pixelWidth

> **pixelWidth**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer.ts#L42)

Gets image width in pixel

## Methods

### IsValid()

> `static` **IsValid**(`data`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/khronosTextureContainer.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/khronosTextureContainer.ts#L190)

Checks if the given data starts with a KTX file identifier.

#### Parameters

##### data

`ArrayBufferView`

the data to check

#### Returns

`boolean`

true if the data is a KTX file or false otherwise
