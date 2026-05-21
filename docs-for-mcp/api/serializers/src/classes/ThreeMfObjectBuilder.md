[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / ThreeMfObjectBuilder

# Class: ThreeMfObjectBuilder

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L54)

## Extended by

- [`ThreeMfComponentsBuilder`](ThreeMfComponentsBuilder.md)
- [`ThreeMfMeshBuilder`](ThreeMfMeshBuilder.md)

## Constructors

### Constructor

> **new ThreeMfObjectBuilder**(`id`, `type`): `ThreeMfObjectBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L65)

#### Parameters

##### id

`number`

##### type

[`ST_ObjectType`](../enumerations/ST_ObjectType.md)

#### Returns

`ThreeMfObjectBuilder`

## Methods

### build()

> **build**(): [`I3mfObject`](../interfaces/I3mfObject.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L105)

#### Returns

[`I3mfObject`](../interfaces/I3mfObject.md)

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

***

### withName()

> **withName**(`name`): `ThreeMfObjectBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L74)

#### Parameters

##### name

`string`

#### Returns

`ThreeMfObjectBuilder`

***

### withProperty()

> **withProperty**(`id`, `index?`): `ThreeMfObjectBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L95)

#### Parameters

##### id

`number`

##### index?

`number` = `0`

#### Returns

`ThreeMfObjectBuilder`

***

### withThumbnail()

> **withThumbnail**(`thumbnail`): `ThreeMfObjectBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L84)

#### Parameters

##### thumbnail

`string`

#### Returns

`ThreeMfObjectBuilder`
