[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / IXmlBuilder

# Interface: IXmlBuilder

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts#L12)

## Methods

### att()

> **att**(`ns`, `n`, `v`): `IXmlBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts#L14)

#### Parameters

##### ns

`string` \| `null`

##### n

`string`

##### v

`string`

#### Returns

`IXmlBuilder`

***

### dec()

> **dec**(`version`, `encoding?`, `standalone?`): `IXmlBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts#L13)

#### Parameters

##### version

`string`

##### encoding?

`string`

##### standalone?

`boolean`

#### Returns

`IXmlBuilder`

***

### ele()

> **ele**(`ns`, `n`): `IXmlBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts#L15)

#### Parameters

##### ns

`string` \| `null`

##### n

`string`

#### Returns

`IXmlBuilder`

***

### end()

> **end**(): `IXmlBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts#L17)

#### Returns

`IXmlBuilder`

***

### text()

> **text**(`txt`): `IXmlBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts#L16)

#### Parameters

##### txt

`string`

#### Returns

`IXmlBuilder`
