[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / ThreeMfMeshBuilder

# Class: ThreeMfMeshBuilder

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L148)

## Extends

- [`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

## Constructors

### Constructor

> **new ThreeMfMeshBuilder**(`id`): `ThreeMfMeshBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L162)

#### Parameters

##### id

`number`

#### Returns

`ThreeMfMeshBuilder`

#### Overrides

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md).[`constructor`](ThreeMfObjectBuilder.md#constructor)

## Properties

### \_th?

> `optional` **\_th?**: [`TriangleHandler`](../type-aliases/TriangleHandler.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L156)

***

### \_vh?

> `optional` **\_vh?**: [`VertexHandler`](../type-aliases/VertexHandler.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L152)

## Methods

### build()

> **build**(): [`I3mfObject`](../interfaces/I3mfObject.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L105)

#### Returns

[`I3mfObject`](../interfaces/I3mfObject.md)

#### Inherited from

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md).[`build`](ThreeMfObjectBuilder.md#build)

***

### reset()

> **reset**(`id`, `type`): `void`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L114)

#### Parameters

##### id

`number`

##### type

[`ST_ObjectType`](../enumerations/ST_ObjectType.md)

#### Returns

`void`

#### Inherited from

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md).[`reset`](ThreeMfObjectBuilder.md#reset)

***

### withData()

> **withData**(`data`): `ThreeMfMeshBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L183)

#### Parameters

##### data

[`I3mfVertexData`](../interfaces/I3mfVertexData.md)

#### Returns

`ThreeMfMeshBuilder`

***

### withMaterial()

> **withMaterial**(`id`, `i`): `ThreeMfMeshBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L194)

#### Parameters

##### id

`number`

##### i

`number`

#### Returns

`ThreeMfMeshBuilder`

***

### withName()

> **withName**(`name`): [`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L74)

#### Parameters

##### name

`string`

#### Returns

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

#### Inherited from

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md).[`withName`](ThreeMfObjectBuilder.md#withname)

***

### withPostProcessHandlers()

> **withPostProcessHandlers**(`vertex`, `triangle?`): `ThreeMfMeshBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L172)

#### Parameters

##### vertex

[`VertexHandler`](../type-aliases/VertexHandler.md)

##### triangle?

[`TriangleHandler`](../type-aliases/TriangleHandler.md)

#### Returns

`ThreeMfMeshBuilder`

***

### withProperty()

> **withProperty**(`id`, `index?`): [`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L95)

#### Parameters

##### id

`number`

##### index?

`number` = `0`

#### Returns

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

#### Inherited from

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md).[`withProperty`](ThreeMfObjectBuilder.md#withproperty)

***

### withThumbnail()

> **withThumbnail**(`thumbnail`): [`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L84)

#### Parameters

##### thumbnail

`string`

#### Returns

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

#### Inherited from

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md).[`withThumbnail`](ThreeMfObjectBuilder.md#withthumbnail)
