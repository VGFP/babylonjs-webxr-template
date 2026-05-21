[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / I3mfMetadata

# Interface: I3mfMetadata

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L96)

Generic metadata entry.
Metadata can appear at the model level (<metadata>) and inside metadata groups (<metadatagroup>).

Notes:
- "name" is the metadata key.
- "type" is optional and can be a MIME type or a schema indicator depending on usage.
- "preserve" instructs consumers whether to keep metadata when modifying the model.

## Properties

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L98)

Metadata key (required).

***

### preserve?

> `optional` **preserve?**: `boolean`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L101)

If true, indicates the metadata should be preserved by consumers (optional).

***

### type?

> `optional` **type?**: `string`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L104)

Optional type information for the value.

***

### value

> **value**: `string`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L107)

Metadata value (required).
