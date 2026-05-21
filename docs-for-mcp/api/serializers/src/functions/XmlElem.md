[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / XmlElem

# Function: XmlElem()

> **XmlElem**(`opts?`): (`target`, `prop`) => `void`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts#L88)

tell the serializer to serialize the property as element - this is the default behavior but shoud be
specified when wanted to update the default name of the classe or if the class is not decorated (without @XmlName)

## Parameters

### opts?

#### name

[`XmlName`](../type-aliases/XmlName.md)

## Returns

(`target`, `prop`) => `void`
