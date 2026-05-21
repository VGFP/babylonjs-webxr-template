[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / ThreeMf

# Class: ThreeMf

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L217)

Convenience helpers around serializers.

## Constructors

### Constructor

> **new ThreeMf**(): `ThreeMf`

#### Returns

`ThreeMf`

## Methods

### SerializeToMemoryAsync()

> `static` **SerializeToMemoryAsync**\<`A`\>(`s`, ...`meshes`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\> \| `undefined`\>

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L227)

Serialize to a single in-memory buffer.

This is a helper that buffers all chunks produced by serializeAsync, then concatenates them.
Use serializeAsync directly if you want true streaming to a file/response.

#### Type Parameters

##### A

`A`

#### Parameters

##### s

[`I3mfSerializer`](../interfaces/I3mfSerializer.md)\<`A`\>

##### meshes

...`A`[]

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\> \| `undefined`\>
