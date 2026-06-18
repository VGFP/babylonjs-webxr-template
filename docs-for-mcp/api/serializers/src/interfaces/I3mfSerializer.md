[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / I3mfSerializer

# Interface: I3mfSerializer\<T\>

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L42)

Minimal contract for a 3MF serializer that can stream its output through a sink callback.

The sink callback receives:
- err: any error produced by the serialization pipeline (if any)
- chunk: a chunk of bytes to append to the destination
- final: true when this is the last chunk

Important:
- Implementations should call sink with final=true exactly once, or rely on the underlying zip lib to do so.
- Consumers may ignore final if they just buffer everything.

## Type Parameters

### T

`T`

## Methods

### serializeAsync()

> **serializeAsync**(`sink`, ...`meshes`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L43)

#### Parameters

##### sink

(`err`, `chunk`, `final`) => `void`

##### meshes

...`T`[]

#### Returns

`Promise`\<`void`\>
