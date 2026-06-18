[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / ArrayItem

# Class: ArrayItem

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L105)

Helper class for working with arrays when loading the glTF asset

## Constructors

### Constructor

> **new ArrayItem**(): `ArrayItem`

#### Returns

`ArrayItem`

## Methods

### Assign()

> `static` **Assign**(`array?`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L139)

Assign an `index` field to each item of the given array.

#### Parameters

##### array?

[`IArrayItem`](../interfaces/IArrayItem.md)[]

The array of items

#### Returns

`void`

***

### Get()

> `static` **Get**\<`T`\>(`context`, `array`, `index`): `T`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L113)

Gets an item from the given array.

#### Type Parameters

##### T

`T`

#### Parameters

##### context

`string`

The context when loading the asset

##### array

`ArrayLike`\<`T`\> \| `undefined`

The array to get the item from

##### index

`number` \| `undefined`

The index to the array

#### Returns

`T`

The array item

***

### TryGet()

> `static` **TryGet**\<`T`\>(`array`, `index`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L127)

Gets an item from the given array or returns null if not available.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

`ArrayLike`\<`T`\> \| `undefined`

The array to get the item from

##### index

`number` \| `undefined`

The index to the array

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`T`\>

The array item or null
