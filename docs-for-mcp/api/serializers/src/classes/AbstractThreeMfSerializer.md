[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / AbstractThreeMfSerializer

# Abstract Class: AbstractThreeMfSerializer\<T, O\>

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L57)

Base class for 3MF serialization.

Responsibilities:
- Convert user meshes to a 3MF model (toModel).
- Wrap the 3MF document parts into an OPC container (zip) and stream bytes through the sink.

Non-responsibilities:
- Providing/initializing the zip implementation (ensureZipLibReadyAsync is abstract).
- Defining how meshes map to 3MF objects (toModel is abstract).

## Extended by

- [`ThreeMfSerializer`](ThreeMfSerializer.md)

## Type Parameters

### T

`T`

### O

`O` *extends* [`IThreeMfSerializerBaseOptions`](../interfaces/IThreeMfSerializerBaseOptions.md)

## Implements

- [`I3mfSerializer`](../interfaces/I3mfSerializer.md)\<`T`\>

## Constructors

### Constructor

> **new AbstractThreeMfSerializer**\<`T`, `O`\>(`opts`): `AbstractThreeMfSerializer`\<`T`, `O`\>

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L63)

#### Parameters

##### opts

`O`

user-provided options overriding defaults.

#### Returns

`AbstractThreeMfSerializer`\<`T`, `O`\>

## Accessors

### options

#### Get Signature

> **get** **options**(): `Readonly`\<`O`\>

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L70)

Expose the resolved options (defaults + overrides) as readonly.

##### Returns

`Readonly`\<`O`\>

## Methods

### ensureZipLibReadyAsync()

> `abstract` **ensureZipLibReadyAsync**(): `Promise`\<`any`\>

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L211)

Provide a zip implementation for the current host/runtime.

This might be provided by the framework implementation, but it could differ depending on the host
(native, Node.js, browser, etc.).

Expected shape (fflate-like):
- return [ Zip, ZipDeflate ] at minimum.

Notes:
- In a browser, this might require bundler configuration or dynamic import.
- In Node.js, this might be a direct import of "fflate" or another compatible implementation.

#### Returns

`Promise`\<`any`\>

***

### serializeAsync()

> **serializeAsync**(`sink`, ...`meshes`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L86)

Generic 3MF binary serializer.
Pipeline overview:
1. ensureZipLibReadyAsync provides a zip implementation (host-dependent).
2. Convert meshes into an I3mfDocument (OPC parts + model).
3. Create a zip target that streams through the provided sink.
4. Serialize XML parts into zip entries.
5. End the zip stream.

#### Parameters

##### sink

(`err`, `chunk`, `final`) => `void`

a callback receiving byte chunks; enables streaming without buffering the full archive in memory.

##### meshes

...`T`[]

the meshes to serialize.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`I3mfSerializer`](../interfaces/I3mfSerializer.md).[`serializeAsync`](../interfaces/I3mfSerializer.md#serializeasync)

***

### toDocument()

> **toDocument**(...`meshes`): [`I3mfDocument`](../interfaces/I3mfDocument.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:178](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L178)

Build a full 3MF OPC document from meshes.

The default behavior uses ThreeMfDocumentBuilder with the model produced by toModel().
Override if you need custom parts (textures, thumbnails, print ticket, etc.).

#### Parameters

##### meshes

...`T`[]

#### Returns

[`I3mfDocument`](../interfaces/I3mfDocument.md) \| `undefined`

***

### toModel()

> `abstract` **toModel**(`builder`, ...`meshes`): [`I3mfModel`](../interfaces/I3mfModel.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:196](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L196)

Convert input meshes into a 3MF model.

Implementations typically:
- Create resources and objects.
- Define build items (instances) when exportInstances is enabled.
- Encode geometry and properties required by your pipeline.

#### Parameters

##### builder

[`ThreeMfModelBuilder`](ThreeMfModelBuilder.md)

##### meshes

...`T`[]

#### Returns

[`I3mfModel`](../interfaces/I3mfModel.md)
