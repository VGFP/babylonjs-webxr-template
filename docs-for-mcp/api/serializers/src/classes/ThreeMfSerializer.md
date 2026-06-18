[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / ThreeMfSerializer

# Class: ThreeMfSerializer

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/3mfSerializer.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/3mfSerializer.ts#L90)

Babylon.js to 3MF serializer.

This serializer converts Babylon meshes into a 3MF model, then relies on the base class
(AbstractThreeMfSerializer) to package the OPC parts into a zip stream.

Design notes:
- First pass: export "source" meshes (non-instances) and build an index to map Babylon mesh/submesh to 3MF object id.
- Second pass (optional): export instances as additional build items referencing the original object ids.
- Submesh export is handled by extracting per-submesh vertex/index buffers so materials/colors can be preserved
  by downstream steps that attach per-object properties.

## Extends

- [`AbstractThreeMfSerializer`](AbstractThreeMfSerializer.md)\<[`Mesh`](../../../core/src/classes/Mesh.md) \| [`InstancedMesh`](../../../core/src/classes/InstancedMesh.md), [`IThreeMfSerializerOptions`](../interfaces/IThreeMfSerializerOptions.md)\>

## Constructors

### Constructor

> **new ThreeMfSerializer**(`opts?`): `ThreeMfSerializer`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/3mfSerializer.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/3mfSerializer.ts#L111)

#### Parameters

##### opts?

`Partial`\<[`IThreeMfSerializerOptions`](../interfaces/IThreeMfSerializerOptions.md)\> = `{}`

serializer options (merged with defaults in base class).

#### Returns

`ThreeMfSerializer`

#### Overrides

[`AbstractThreeMfSerializer`](AbstractThreeMfSerializer.md).[`constructor`](AbstractThreeMfSerializer.md#constructor)

## Properties

### DefaultOptions

> `static` **DefaultOptions**: [`IThreeMfSerializerOptions`](../interfaces/IThreeMfSerializerOptions.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/3mfSerializer.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/3mfSerializer.ts#L94)

Default serialization options: meter units, no instance export.

## Accessors

### options

#### Get Signature

> **get** **options**(): `Readonly`\<`O`\>

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L70)

Expose the resolved options (defaults + overrides) as readonly.

##### Returns

`Readonly`\<`O`\>

#### Inherited from

[`AbstractThreeMfSerializer`](AbstractThreeMfSerializer.md).[`options`](AbstractThreeMfSerializer.md#options)

## Methods

### ensureZipLibReadyAsync()

> **ensureZipLibReadyAsync**(): `Promise`\<`any`\>

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/3mfSerializer.ts:249](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/3mfSerializer.ts#L249)

Ensure the zip library (fflate) is available in the current runtime.

Host assumptions:
- This implementation relies on fflate being exposed on globalThis.fflate.
- If it is not present, it loads a script from ThreeMfSerializerGlobalConfiguration.FFLATEUrl using Babylon Tools.LoadScriptAsync.

#### Returns

`Promise`\<`any`\>

#### Overrides

[`AbstractThreeMfSerializer`](AbstractThreeMfSerializer.md).[`ensureZipLibReadyAsync`](AbstractThreeMfSerializer.md#ensureziplibreadyasync)

***

### serializeAsync()

> **serializeAsync**(`sink`, ...`meshes`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L86)

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

...([`Mesh`](../../../core/src/classes/Mesh.md) \| [`InstancedMesh`](../../../core/src/classes/InstancedMesh.md))[]

the meshes to serialize.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AbstractThreeMfSerializer`](AbstractThreeMfSerializer.md).[`serializeAsync`](AbstractThreeMfSerializer.md#serializeasync)

***

### toDocument()

> **toDocument**(...`meshes`): [`I3mfDocument`](../interfaces/I3mfDocument.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L178)

Build a full 3MF OPC document from meshes.

The default behavior uses ThreeMfDocumentBuilder with the model produced by toModel().
Override if you need custom parts (textures, thumbnails, print ticket, etc.).

#### Parameters

##### meshes

...([`Mesh`](../../../core/src/classes/Mesh.md) \| [`InstancedMesh`](../../../core/src/classes/InstancedMesh.md))[]

#### Returns

[`I3mfDocument`](../interfaces/I3mfDocument.md) \| `undefined`

#### Inherited from

[`AbstractThreeMfSerializer`](AbstractThreeMfSerializer.md).[`toDocument`](AbstractThreeMfSerializer.md#todocument)

***

### toModel()

> **toModel**(`builder`, ...`meshes`): [`I3mfModel`](../interfaces/I3mfModel.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/3mfSerializer.ts:124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/3mfSerializer.ts#L124)

Build a 3MF model from Babylon meshes.

Important: this method should not allocate huge intermediate data unless needed.
Submesh extraction does allocate new position/index arrays for each exported submesh.

#### Parameters

##### builder

[`ThreeMfModelBuilder`](ThreeMfModelBuilder.md)

##### meshes

...([`Mesh`](../../../core/src/classes/Mesh.md) \| [`InstancedMesh`](../../../core/src/classes/InstancedMesh.md))[]

#### Returns

[`I3mfModel`](../interfaces/I3mfModel.md)

#### Overrides

[`AbstractThreeMfSerializer`](AbstractThreeMfSerializer.md).[`toModel`](AbstractThreeMfSerializer.md#tomodel)
