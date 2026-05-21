[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / Known3mfRelationshipTypes

# Class: Known3mfRelationshipTypes

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.opc.interfaces.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.opc.interfaces.ts#L39)

Common OPC and 3MF relationship Type URIs.

## Constructors

### Constructor

> **new Known3mfRelationshipTypes**(): `Known3mfRelationshipTypes`

#### Returns

`Known3mfRelationshipTypes`

## Properties

### Known

> `readonly` `static` **Known**: `ReadonlySet`\<`string`\>

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.opc.interfaces.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.opc.interfaces.ts#L63)

Convenience set for quick checks

***

### MustPreserve

> `readonly` `static` **MustPreserve**: `"http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve"` = `"http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve"`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.opc.interfaces.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.opc.interfaces.ts#L58)

OPC core: indicates parts that must be preserved when editing the package

***

### PrintTicket

> `readonly` `static` **PrintTicket**: `"http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket"` = `"http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket"`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.opc.interfaces.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.opc.interfaces.ts#L53)

3MF (print ticket): optional printing settings part (rarely used by slicers)

***

### ThreeDimModel

> `readonly` `static` **ThreeDimModel**: `"http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"` = `"http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.opc.interfaces.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.opc.interfaces.ts#L43)

3MF core: points to the main .model part of the package

***

### Thumbnail

> `readonly` `static` **Thumbnail**: `"http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail"` = `"http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail"`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.opc.interfaces.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.opc.interfaces.ts#L48)

OPC core: points to a package thumbnail (often used by 3MF packages)

## Methods

### IsKnown()

> `static` **IsKnown**(`type`): `boolean`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.opc.interfaces.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.opc.interfaces.ts#L75)

Test if the relationship Type is one of the common known URIs above

#### Parameters

##### type

`string`

#### Returns

`boolean`

true if the relationship Type is one of the common known URIs above

***

### IsThreeDimModel()

> `static` **IsThreeDimModel**(`type`): `boolean`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.opc.interfaces.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.opc.interfaces.ts#L84)

test if the relationship Type is the main 3MF model entry point

#### Parameters

##### type

`string`

#### Returns

`boolean`

true if the relationship Type is the main 3MF model entry point
