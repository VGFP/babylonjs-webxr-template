[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TypedArrayConstructor

# Interface: TypedArrayConstructor\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/types.ts:227](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/types.ts#L227)

Interface for a constructor of a TypedArray.

## Type Parameters

### T

`T` *extends* [`TypedArray`](../type-aliases/TypedArray.md) = [`TypedArray`](../type-aliases/TypedArray.md)

## Constructors

### Constructor

> **new TypedArrayConstructor**(`length`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/types.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/types.ts#L228)

#### Parameters

##### length

`number`

#### Returns

`T`

### Constructor

> **new TypedArrayConstructor**(`elements`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/types.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/types.ts#L229)

#### Parameters

##### elements

`Iterable`\<`number`\>

#### Returns

`T`

### Constructor

> **new TypedArrayConstructor**(`buffer`, `byteOffset?`, `length?`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/types.ts:230](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/types.ts#L230)

#### Parameters

##### buffer

`ArrayBufferLike`

##### byteOffset?

`number`

##### length?

`number`

#### Returns

`T`

## Properties

### BYTES\_PER\_ELEMENT

> `readonly` **BYTES\_PER\_ELEMENT**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/types.ts:234](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/types.ts#L234)

The size in bytes of each element in the array.
