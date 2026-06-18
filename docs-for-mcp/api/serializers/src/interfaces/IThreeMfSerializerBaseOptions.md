[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / IThreeMfSerializerBaseOptions

# Interface: IThreeMfSerializerBaseOptions

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L18)

Options controlling how meshes are exported into the 3MF model.

Notes:
- These flags are kept generic here and are expected to be interpreted by the concrete serializer/model builder.
- Defaults are set in AbstractThreeMfSerializer.DEFAULT_3MF_EXPORTER_OPTIONS.

## Extended by

- [`IThreeMfSerializerOptions`](IThreeMfSerializerOptions.md)

## Properties

### metadata?

> `optional` **metadata?**: `Record`\<`string`, `string`\>

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L27)

***

### unit?

> `optional` **unit?**: [`ST_Unit`](../enumerations/ST_Unit.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.serializer.ts#L22)

define the unit. Default is millimeter
