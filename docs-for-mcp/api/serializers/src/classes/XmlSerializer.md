[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / XmlSerializer

# Class: XmlSerializer

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.serializer.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/xml/xml.serializer.ts#L28)

## Constructors

### Constructor

> **new XmlSerializer**(`builder`, `format?`): `XmlSerializer`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.serializer.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/xml/xml.serializer.ts#L45)

#### Parameters

##### builder

[`IXmlBuilder`](../interfaces/IXmlBuilder.md)

##### format?

[`IXmlSerializerFormatOptions`](../interfaces/IXmlSerializerFormatOptions.md)

#### Returns

`XmlSerializer`

## Methods

### serialize()

> **serialize**(`root`, `name?`): `void`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.serializer.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/xml/xml.serializer.ts#L68)

#### Parameters

##### root

`object`

##### name?

[`XmlName`](../type-aliases/XmlName.md)

#### Returns

`void`

***

### withNamespace()

> **withNamespace**(...`ns`): `XmlSerializer`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.serializer.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/xml/xml.serializer.ts#L56)

#### Parameters

##### ns

...[`XmlName`](../type-aliases/XmlName.md)[]

#### Returns

`XmlSerializer`
