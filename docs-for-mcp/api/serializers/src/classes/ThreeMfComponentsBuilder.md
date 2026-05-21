[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / ThreeMfComponentsBuilder

# Class: ThreeMfComponentsBuilder

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L122)

## Extends

- [`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

## Constructors

### Constructor

> **new ThreeMfComponentsBuilder**(`id`, `type?`): `ThreeMfComponentsBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L128)

#### Parameters

##### id

`number`

##### type?

[`ST_ObjectType`](../enumerations/ST_ObjectType.md) = `ST_ObjectType.model`

#### Returns

`ThreeMfComponentsBuilder`

#### Overrides

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md).[`constructor`](ThreeMfObjectBuilder.md#constructor)

## Methods

### build()

> **build**(): [`I3mfObject`](../interfaces/I3mfObject.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L105)

#### Returns

[`I3mfObject`](../interfaces/I3mfObject.md)

#### Inherited from

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md).[`build`](ThreeMfObjectBuilder.md#build)

***

### reset()

> **reset**(`id`, `type`): `void`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L114)

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

### withComponent()

> **withComponent**(`id`, `t?`): `ThreeMfComponentsBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L139)

#### Parameters

##### id

`number`

##### t?

[`Matrix3d`](Matrix3d.md)

#### Returns

`ThreeMfComponentsBuilder`

***

### withName()

> **withName**(`name`): [`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L74)

#### Parameters

##### name

`string`

#### Returns

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

#### Inherited from

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md).[`withName`](ThreeMfObjectBuilder.md#withname)

***

### withProperty()

> **withProperty**(`id`, `index?`): [`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L95)

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

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L84)

#### Parameters

##### thumbnail

`string`

#### Returns

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

#### Inherited from

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md).[`withThumbnail`](ThreeMfObjectBuilder.md#withthumbnail)
