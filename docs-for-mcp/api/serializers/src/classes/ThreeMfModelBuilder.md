[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / ThreeMfModelBuilder

# Class: ThreeMfModelBuilder

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:306](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L306)

## Constructors

### Constructor

> **new ThreeMfModelBuilder**(): `ThreeMfModelBuilder`

#### Returns

`ThreeMfModelBuilder`

## Properties

### \_model

> **\_model**: [`ThreeMfModel`](ThreeMfModel.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:315](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L315)

***

### \_objects

> **\_objects**: `Map`\<`string`, [`I3mfObject`](../interfaces/I3mfObject.md)\>

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L319)

***

### KnownMetaSet

> `static` **KnownMetaSet**: `Set`\<`string`\>

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L310)

## Methods

### build()

> **build**(): [`ThreeMfModel`](ThreeMfModel.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:422](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L422)

#### Returns

[`ThreeMfModel`](ThreeMfModel.md)

***

### reset()

> **reset**(): `ThreeMfModelBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:412](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L412)

#### Returns

`ThreeMfModelBuilder`

***

### withBuild()

> **withBuild**(`objectid`, `transform?`, `partnumber?`): `ThreeMfModelBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:392](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L392)

#### Parameters

##### objectid

`number`

##### transform?

[`Matrix3d`](Matrix3d.md)

##### partnumber?

`string`

#### Returns

`ThreeMfModelBuilder`

***

### withComponents()

> **withComponents**(`components`): `ThreeMfModelBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:376](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L376)

#### Parameters

##### components

[`I3mfObject`](../interfaces/I3mfObject.md) \| [`ThreeMfComponentsBuilder`](ThreeMfComponentsBuilder.md)

#### Returns

`ThreeMfModelBuilder`

***

### withMaterial()

> **withMaterial**(`material`): `ThreeMfModelBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L345)

#### Parameters

##### material

[`I3mfBaseMaterials`](../interfaces/I3mfBaseMaterials.md) \| [`ThreeMfMaterialBuilder`](ThreeMfMaterialBuilder.md)

#### Returns

`ThreeMfModelBuilder`

***

### withMesh()

> **withMesh**(`object`): `ThreeMfModelBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:362](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L362)

#### Parameters

##### object

[`I3mfObject`](../interfaces/I3mfObject.md) \| [`ThreeMfMeshBuilder`](ThreeMfMeshBuilder.md)

#### Returns

`ThreeMfModelBuilder`

***

### withMetaData()

> **withMetaData**(`name`, `value`, `preserve?`, `type?`): `ThreeMfModelBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:329](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L329)

#### Parameters

##### name

`string`

##### value

`string`

##### preserve?

`boolean`

##### type?

`string`

#### Returns

`ThreeMfModelBuilder`

***

### withUnit()

> **withUnit**(`unit`): `ThreeMfModelBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:403](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L403)

#### Parameters

##### unit

[`ST_Unit`](../enumerations/ST_Unit.md)

#### Returns

`ThreeMfModelBuilder`
