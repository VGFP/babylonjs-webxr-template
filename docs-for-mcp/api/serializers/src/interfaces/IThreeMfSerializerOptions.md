[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / IThreeMfSerializerOptions

# Interface: IThreeMfSerializerOptions

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/3mfSerializer.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/3mfSerializer.ts#L70)

Options controlling how meshes are exported into the 3MF model.

Notes:
- These flags are kept generic here and are expected to be interpreted by the concrete serializer/model builder.
- Defaults are set in AbstractThreeMfSerializer.DEFAULT_3MF_EXPORTER_OPTIONS.

## Extends

- [`IThreeMfSerializerBaseOptions`](IThreeMfSerializerBaseOptions.md)

## Properties

### exportInstances?

> `optional` **exportInstances?**: `boolean`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/3mfSerializer.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/3mfSerializer.ts#L75)

If true, export mesh instances (multiple references to the same geometry) when supported.
If false, geometry may be duplicated depending on the concrete implementation.

***

### metadata?

> `optional` **metadata?**: `Record`\<`string`, `string`\>

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L27)

#### Inherited from

[`IThreeMfSerializerBaseOptions`](IThreeMfSerializerBaseOptions.md).[`metadata`](IThreeMfSerializerBaseOptions.md#metadata)

***

### unit?

> `optional` **unit?**: [`ST_Unit`](../enumerations/ST_Unit.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L22)

define the unit. Default is millimeter

#### Inherited from

[`IThreeMfSerializerBaseOptions`](IThreeMfSerializerBaseOptions.md).[`unit`](IThreeMfSerializerBaseOptions.md#unit)
