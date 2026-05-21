[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / SolidParser

# Class: SolidParser

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L33)

Class used to load mesh data from OBJ content

## Constructors

### Constructor

> **new SolidParser**(`materialToUse`, `babylonMeshesArray`, `loadingOptions`): `SolidParser`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L108)

Creates a new SolidParser

#### Parameters

##### materialToUse

`string`[]

defines the array to fill with the list of materials to use (it will be filled by the parse function)

##### babylonMeshesArray

[`Mesh`](../../../core/src/classes/Mesh.md)[]

defines the array to fill with the list of loaded meshes (it will be filled by the parse function)

##### loadingOptions

[`OBJLoadingOptions`](../type-aliases/OBJLoadingOptions.md)

defines the loading options to use

#### Returns

`SolidParser`

## Properties

### FacePattern1

> `static` **FacePattern1**: `RegExp`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L54)

Pattern used to detect a first kind of face (f vertex vertex vertex)

***

### FacePattern2

> `static` **FacePattern2**: `RegExp`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L56)

Pattern used to detect a second kind of face (f vertex/uvs vertex/uvs vertex/uvs)

***

### FacePattern3

> `static` **FacePattern3**: `RegExp`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L58)

Pattern used to detect a third kind of face (f vertex/uvs/normal vertex/uvs/normal vertex/uvs/normal)

***

### FacePattern4

> `static` **FacePattern4**: `RegExp`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L60)

Pattern used to detect a fourth kind of face (f vertex//normal vertex//normal vertex//normal)

***

### FacePattern5

> `static` **FacePattern5**: `RegExp`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L62)

Pattern used to detect a fifth kind of face (f -vertex/-uvs/-normal -vertex/-uvs/-normal -vertex/-uvs/-normal)

***

### GroupDescriptor

> `static` **GroupDescriptor**: `RegExp`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L38)

Group descriptor

***

### LinePattern1

> `static` **LinePattern1**: `RegExp`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L64)

Pattern used to detect a line(l vertex vertex)

***

### LinePattern2

> `static` **LinePattern2**: `RegExp`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L66)

Pattern used to detect a second kind of line (l vertex/uvs vertex/uvs)

***

### LinePattern3

> `static` **LinePattern3**: `RegExp`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L68)

Pattern used to detect a third kind of line (l vertex/uvs/normal vertex/uvs/normal)

***

### MtlLibGroupDescriptor

> `static` **MtlLibGroupDescriptor**: `RegExp`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L40)

Material lib descriptor

***

### NormalPattern

> `static` **NormalPattern**: `RegExp`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L50)

Pattern used to detect a normal

***

### ObjectDescriptor

> `static` **ObjectDescriptor**: `RegExp`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L36)

Object descriptor

***

### SmoothDescriptor

> `static` **SmoothDescriptor**: `RegExp`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L44)

Smooth descriptor

***

### UseMtlDescriptor

> `static` **UseMtlDescriptor**: `RegExp`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L42)

Use a material descriptor

***

### UVPattern

> `static` **UVPattern**: `RegExp`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L52)

Pattern used to detect a UV set

***

### VertexPattern

> `static` **VertexPattern**: `RegExp`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L48)

Pattern used to detect a vertex

## Methods

### parse()

> **parse**(`meshesNames`, `data`, `scene`, `assetContainer`, `onFileToLoadFound`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/OBJ/solidParser.ts:597](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/OBJ/solidParser.ts#L597)

Function used to parse an OBJ string

#### Parameters

##### meshesNames

`any`

defines the list of meshes to load (all if not defined)

##### data

`string`

defines the OBJ string

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

##### assetContainer

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AssetContainer`](../../../core/src/classes/AssetContainer.md)\>

defines the asset container to load data in

##### onFileToLoadFound

(`fileToLoad`) => `void`

defines a callback that will be called if a MTL file is found

#### Returns

`void`
