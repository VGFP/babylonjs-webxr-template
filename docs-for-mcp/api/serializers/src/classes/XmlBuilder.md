[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / XmlBuilder

# Class: XmlBuilder

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.builder.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/xml/xml.builder.ts#L62)

## Implements

- [`IXmlBuilder`](../interfaces/IXmlBuilder.md)

## Constructors

### Constructor

> **new XmlBuilder**(`w`): `XmlBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.builder.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/xml/xml.builder.ts#L101)

#### Parameters

##### w

[`IXmlWriter`](../interfaces/IXmlWriter.md)

#### Returns

`XmlBuilder`

## Properties

### Context

> `static` **Context**: *typeof* `__class`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.builder.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/xml/xml.builder.ts#L64)

## Methods

### att()

> **att**(`ns`, `n`, `v`): [`IXmlBuilder`](../interfaces/IXmlBuilder.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.builder.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/xml/xml.builder.ts#L132)

#### Parameters

##### ns

`string` \| `null`

##### n

`string`

##### v

`string`

#### Returns

[`IXmlBuilder`](../interfaces/IXmlBuilder.md)

#### Implementation of

[`IXmlBuilder`](../interfaces/IXmlBuilder.md).[`att`](../interfaces/IXmlBuilder.md#att)

***

### dec()

> **dec**(`version`, `encoding?`, `standalone?`): [`IXmlBuilder`](../interfaces/IXmlBuilder.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.builder.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/xml/xml.builder.ts#L112)

#### Parameters

##### version

`string`

##### encoding?

`string`

##### standalone?

`boolean`

#### Returns

[`IXmlBuilder`](../interfaces/IXmlBuilder.md)

#### Implementation of

[`IXmlBuilder`](../interfaces/IXmlBuilder.md).[`dec`](../interfaces/IXmlBuilder.md#dec)

***

### ele()

> **ele**(`ns`, `n`): [`IXmlBuilder`](../interfaces/IXmlBuilder.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.builder.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/xml/xml.builder.ts#L183)

#### Parameters

##### ns

`string` \| `null`

##### n

`string`

#### Returns

[`IXmlBuilder`](../interfaces/IXmlBuilder.md)

#### Implementation of

[`IXmlBuilder`](../interfaces/IXmlBuilder.md).[`ele`](../interfaces/IXmlBuilder.md#ele)

***

### end()

> **end**(): [`IXmlBuilder`](../interfaces/IXmlBuilder.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.builder.ts:218](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/xml/xml.builder.ts#L218)

#### Returns

[`IXmlBuilder`](../interfaces/IXmlBuilder.md)

#### Implementation of

[`IXmlBuilder`](../interfaces/IXmlBuilder.md).[`end`](../interfaces/IXmlBuilder.md#end)

***

### text()

> **text**(`txt`): [`IXmlBuilder`](../interfaces/IXmlBuilder.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.builder.ts:203](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/xml/xml.builder.ts#L203)

#### Parameters

##### txt

`string`

#### Returns

[`IXmlBuilder`](../interfaces/IXmlBuilder.md)

#### Implementation of

[`IXmlBuilder`](../interfaces/IXmlBuilder.md).[`text`](../interfaces/IXmlBuilder.md#text)
