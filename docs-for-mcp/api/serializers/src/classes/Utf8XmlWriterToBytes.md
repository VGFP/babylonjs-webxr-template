[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / Utf8XmlWriterToBytes

# Class: Utf8XmlWriterToBytes

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.builder.bytes.ts:9](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/xml/xml.builder.bytes.ts#L9)

## Implements

- [`IXmlWriter`](../interfaces/IXmlWriter.md)

## Constructors

### Constructor

> **new Utf8XmlWriterToBytes**(`_sink`, `_opts?`): `Utf8XmlWriterToBytes`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.builder.bytes.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/xml/xml.builder.bytes.ts#L16)

#### Parameters

##### \_sink

[`ByteSink`](../type-aliases/ByteSink.md)

##### \_opts?

###### flushChars?

`number`

#### Returns

`Utf8XmlWriterToBytes`

## Properties

### count

> **count**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.builder.bytes.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/xml/xml.builder.bytes.ts#L11)

#### Implementation of

[`IXmlWriter`](../interfaces/IXmlWriter.md).[`count`](../interfaces/IXmlWriter.md#count)

## Methods

### clear()

> **clear**(): `void`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.builder.bytes.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/xml/xml.builder.bytes.ts#L73)

#### Returns

`void`

#### Implementation of

[`IXmlWriter`](../interfaces/IXmlWriter.md).[`clear`](../interfaces/IXmlWriter.md#clear)

***

### finish()

> **finish**(): `void`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.builder.bytes.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/xml/xml.builder.bytes.ts#L66)

#### Returns

`void`

***

### flush()

> **flush**(): `this`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.builder.bytes.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/xml/xml.builder.bytes.ts#L49)

#### Returns

`this`

***

### write()

> **write**(...`data`): [`IXmlWriter`](../interfaces/IXmlWriter.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.builder.bytes.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/xml/xml.builder.bytes.ts#L25)

#### Parameters

##### data

...`string`[]

#### Returns

[`IXmlWriter`](../interfaces/IXmlWriter.md)

#### Implementation of

[`IXmlWriter`](../interfaces/IXmlWriter.md).[`write`](../interfaces/IXmlWriter.md#write)
